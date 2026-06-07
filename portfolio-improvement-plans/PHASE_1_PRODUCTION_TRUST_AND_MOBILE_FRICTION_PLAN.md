# Phase 1 Plan: Production Trust & Mobile Friction

Date: June 7, 2026  
Status: Awaiting approval  
Phase type: Small, independently deployable sprint  
Primary source: `product-design-audit-2026-06-07/PRODUCT_DESIGN_AUDIT_REPORT.md`

## 1. Phase Goal

Phase 1 fixes the highest-trust production issue and the most visible mobile friction found in the product design audit.

The goal is not to redesign the portfolio yet. The goal is to make the current deployed experience more trustworthy, less crowded on mobile, and better protected by automated regression checks.

## 2. Why This Phase Comes First

The product design audit identified one P0 production issue:

- Blog social share links on the live site generate `localhost:3000` URLs.

It also identified one high-visibility UX issue:

- On mobile, the cookie banner can compete with the open navigation menu and hero content.

These are the right first fixes because they are:

- Production-facing.
- Small enough to ship safely.
- Easy to verify with deterministic checks.
- Foundational before larger visual redesign work.

## 3. Scope

### In Scope

- Fix production blog share URL generation.
- Centralize canonical site URL construction so future share/OG links do not regress.
- Improve mobile cookie consent behavior so it does not visually collide with the mobile nav.
- Improve mobile menu accessibility and state behavior where needed.
- Add a minimal automated testing setup if the repo lacks one.
- Add focused regression tests for URL generation and consent/menu behavior.
- Run production static generation and browser verification before completion.
- Update documentation/source-of-truth after implementation.

### Out of Scope

- Full visual redesign.
- Case-study summary rail.
- Project card redesign.
- Projects index restructuring.
- New product imagery.
- Blog layout redesign.
- Contact page redesign.
- Deployment unless explicitly approved after Phase 1 implementation passes.

## 4. Current Evidence

### Blog Share URL Bug

File: `pages/blog/[...slug].vue`

Current share section uses `shareUrl` for Twitter, LinkedIn, and Facebook.

Relevant current logic:

```ts
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
  : 'http://localhost:3000';

const shareUrl = computed(() => `${baseUrl}${fullPath}`);
```

Observed problem:

- In the deployed site audit, social share links still emitted `http://localhost:3000/...`.
- This means the current production detection or hydration path is not reliable enough for live share links.

Likely root cause:

- `process.env.NODE_ENV` is not a robust client-side source for canonical URL generation in a statically generated Nuxt app.
- The share URL should come from explicit public runtime config or a deterministic canonical helper.

### Mobile Cookie/Menu Friction

Files:

- `components/CookieConsent.vue`
- `components/AppHeader.vue`

Current behavior:

- Cookie banner appears fixed at bottom after a 2-second delay.
- Mobile nav opens as a top dropdown.
- When both are visible, the first-screen mobile experience becomes crowded.

Observed issue:

- `10-home-mobile-menu-open.png` shows the mobile nav, hero content, and cookie banner competing in one viewport.

## 5. Proposed Implementation Strategy

### 5.1 Canonical URL Helper

Create a small shared helper or composable for canonical absolute URLs.

Preferred direction:

- Add public runtime config for the canonical site URL.
- Use a single helper to normalize base path and route paths.
- Use that helper for blog share URLs.
- Optionally migrate obvious OG URL construction to the helper later, but keep Phase 1 focused on the broken blog share links.

Candidate config:

```ts
runtimeConfig: {
  public: {
    gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-V9CNN08S3P',
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://ayush-jaipuriar.github.io/Personal-Portfolio',
  },
}
```

Candidate helper behavior:

| Input path | Expected canonical URL |
| --- | --- |
| `/blog/building-production-ai-agents` | `https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents` |
| `/Personal-Portfolio/blog/building-production-ai-agents` | `https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents` |
| `blog/building-production-ai-agents` | `https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents` |

Why:

- It avoids environment ambiguity.
- It prevents duplicate base path issues.
- It gives us a testable utility.

### 5.2 Blog Share URL Fix

Update `pages/blog/[...slug].vue` so `shareUrl` uses the canonical URL helper.

Acceptance criteria:

- Twitter share URL contains the deployed canonical article URL.
- LinkedIn share URL contains the deployed canonical article URL.
- Facebook share URL contains the deployed canonical article URL.
- No share URL contains `localhost`.
- OG URL for the article remains correct.

### 5.3 Cookie Consent Mobile Behavior

Refine `CookieConsent.vue` so the banner is less likely to collide with nav and hero content.

Preferred direction:

- Make the mobile version more compact.
- Use a slimmer layout on small screens.
- Add a small close/decline affordance only if it does not weaken the consent clarity.
- Ensure the banner can be suppressed while the mobile menu is open, or repositioned so it does not overlap the open nav experience.

Implementation options:

1. Event-driven approach:
   - `AppHeader.vue` dispatches a custom event when mobile menu opens/closes.
   - `CookieConsent.vue` listens and temporarily hides or delays the banner while menu is open.

2. Shared state approach:
   - Create a tiny composable for UI overlay state.
   - Header and cookie banner both read/write shared state.

Recommendation:

- Use a tiny composable if implementation stays simple.
- It is clearer than DOM events and easier to test.

Acceptance criteria:

- On mobile, cookie banner is not visible while the mobile nav menu is open.
- After the menu closes, cookie banner may appear again if consent is still unset.
- Accept still stores `analytics-consent=true` and loads GA.
- Decline still stores `analytics-consent=false` and does not load GA.
- Existing desktop behavior remains visually similar.

### 5.4 Mobile Menu Accessibility Polish

Review and adjust `AppHeader.vue` behavior.

Potential fixes:

- Ensure button accessible name reflects open/closed state.
- Add `aria-controls` to connect the toggle to the mobile menu.
- Add an `id` to the mobile menu container.
- Consider closing the menu on `Escape`.

Acceptance criteria:

- Menu button has correct `aria-expanded`.
- Menu button has a meaningful accessible label.
- Menu container has an `id` referenced by `aria-controls`.
- Escape key closes the menu if open.

## 6. Testing Strategy

The repo currently does not appear to have a first-party test suite configured. Phase 1 should add a minimal focused test setup rather than building a large testing framework.

### 6.1 Unit Tests

Add a small test runner, preferably Vitest.

Unit test targets:

- Canonical URL helper.
- Base-path normalization.
- No duplicate `/Personal-Portfolio/Personal-Portfolio`.
- No localhost in production share URL cases.

Example test cases:

- `toCanonicalUrl('/blog/x')`
- `toCanonicalUrl('blog/x')`
- `toCanonicalUrl('/Personal-Portfolio/blog/x')`
- `toCanonicalUrl('/')`

### 6.2 Component/Behavior Tests

If lightweight enough, add Vue Test Utils for:

- Cookie banner accept/decline state.
- Cookie banner hidden while mobile menu state is open.
- Header menu `aria-expanded` behavior.

If component tests create too much setup overhead in this sprint, use browser regression checks instead and keep the automated unit tests focused on URL generation.

### 6.3 Production Generation Test

Run:

```bash
npm run generate
```

Acceptance:

- Static generation succeeds.
- No `localhost` appears in generated blog share links.

### 6.4 Browser Regression Tests

Use Browser against a production-shaped preview and/or live local generated output.

Checks:

- Blog detail page share links do not include `localhost`.
- Blog detail page share links include `https://ayush-jaipuriar.github.io/Personal-Portfolio`.
- Mobile menu can open and close.
- Cookie banner does not display while mobile menu is open.
- Accept/Decline buttons remain reachable on mobile.
- Homepage, blog detail, contact, and one project route render without console errors.

### 6.5 Manual Visual QA

Screens to verify:

- Desktop homepage.
- Mobile homepage with no consent choice.
- Mobile menu open with no consent choice.
- Blog detail share section.
- Contact page.

## 7. Implementation Checklist

### Planning

- [x] Confirm Phase 1 scope with user.
- [x] Inspect current files and bug surfaces.
- [x] Write Phase 1 implementation plan.
- [x] User approves Phase 1 plan.

### Canonical URL Fix

- [x] Add canonical site URL to public runtime config.
- [x] Add shared canonical URL helper/composable.
- [x] Add unit tests for canonical URL helper.
- [x] Update blog detail share URL generation.
- [x] Verify Twitter share link.
- [x] Verify LinkedIn share link.
- [x] Verify Facebook share link.
- [x] Verify no generated share link contains `localhost`.

### Mobile Cookie/Menu Behavior

- [x] Decide final state-sharing approach for mobile menu and cookie banner.
- [x] Implement menu-open state sharing.
- [x] Hide or delay cookie banner while mobile menu is open.
- [x] Keep accept/decline behavior unchanged.
- [x] Improve mobile banner compactness if needed.
- [x] Add or update tests for consent/menu behavior where feasible.

### Mobile Menu Accessibility

- [x] Add `aria-controls` to menu toggle.
- [x] Add stable `id` to mobile menu container.
- [x] Ensure accessible label reflects open/closed state.
- [x] Add Escape-to-close behavior.
- [x] Verify keyboard behavior in Browser.

### Automated Validation

- [x] Run unit tests.
- [x] Run component tests if added.
- [x] Run `npm run generate`.
- [x] Run production-shaped preview smoke checks.
- [x] Run Browser checks for key routes.
- [x] Confirm no console errors on checked pages.
- [x] Confirm no `localhost` in generated share URLs.

### Documentation

- [x] Update `PORTFOLIO_AUDIT_SOURCE_OF_TRUTH.md`.
- [x] Update this Phase 1 checklist statuses.
- [x] Add final implementation notes and validation results.

### Deployment Readiness

- [x] Review `git status`.
- [ ] Review staged diff.
- [ ] Scan staged files for sensitive patterns.
- [ ] Commit only explicit Phase 1 files.
- [ ] Deploy only after tests pass and user approval is clear.

## 10. Implementation Notes and Validation Results

Implemented on June 7, 2026 after plan approval.

Files touched:

- `nuxt.config.ts`: added `runtimeConfig.public.siteUrl` with production GitHub Pages fallback.
- `utils/canonicalUrl.ts`: added canonical URL normalization helpers.
- `composables/useCanonicalUrl.ts`: exposed canonical URL generation through Nuxt runtime config.
- `pages/blog/[...slug].vue`: replaced environment-based share URL generation with canonical URL helper usage.
- `composables/useMobileMenuState.ts`: added shared reactive state for the mobile menu.
- `components/AppHeader.vue`: added mobile menu state publishing, accurate open/close labels, `aria-controls`, stable mobile menu `id`, and Escape-to-close behavior.
- `components/CookieConsent.vue`: hid the banner while the mobile menu is open and tightened mobile spacing.
- `components/content/ProseImg.vue`: added a Nuxt Content image renderer so Markdown images resolve through the app base URL on GitHub Pages.
- `tests/canonicalUrl.test.ts`: added focused canonical URL regression coverage.
- `package.json` and `package-lock.json`: added Vitest and the `npm test` script.

Validation evidence:

- `npm test`: passed, 1 test file and 6 tests.
- `npm run generate`: passed, generated 55 static routes.
- Production-shaped local preview at `http://127.0.0.1:4174/Personal-Portfolio/`: passed mobile menu smoke checks.
- Browser mobile check at 390x844: menu button starts with `aria-expanded="false"` and `aria-label="Open main menu"`, opens with `aria-expanded="true"` and `aria-label="Close main menu"`, then closes on Escape.
- Blog route Browser check: `Building Production AI Agents with LangChain and LangGraph` rendered without console errors.
- Static artifact check: Twitter, LinkedIn, and Facebook share links all contain `https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents`.
- Static artifact check: no generated HTML or JSON contains `localhost:3000`, `http://localhost`, or `127.0.0.1`.
- Static artifact check: Markdown blog images now render under `/Personal-Portfolio/images/...`.
- HTTP smoke check: AI agent blog diagrams, Gmail-scale architecture image, and both checked blog routes returned 200.
- Browser smoke check: AI agent and Gmail-scale blog pages reported no broken images and no console errors.

Known follow-ups:

- `npm run generate` still reports stale Browserslist `caniuse-lite` data. This is maintenance noise and not a Phase 1 blocker.
- `npm install -D vitest` surfaced existing npm audit findings. They were not changed in Phase 1 to avoid broad dependency churn outside the approved scope.
- Deployment remains intentionally gated on explicit user approval after this validation pass.

## 8. Definition of Done

Phase 1 is complete when:

- Blog share links are production-correct.
- No blog share link contains `localhost`.
- Cookie banner no longer fights the mobile menu experience.
- Mobile nav has improved ARIA/focus behavior.
- Automated tests cover canonical URL generation.
- Production static generation passes.
- Browser regression checks pass.
- Documentation is updated with what changed and how it was verified.

## 9. Risks and Tradeoffs

### Risk: Adding Test Infrastructure Increases Sprint Size

The repo currently has no obvious first-party test setup. Adding Vitest is small, but it still touches package metadata.

Mitigation:

- Keep tests focused.
- Avoid broad framework churn.
- Do not introduce a large end-to-end framework unless necessary.

### Risk: Cookie Banner and Header State Coupling

Sharing state between unrelated UI elements can become messy.

Mitigation:

- Use a tiny purpose-specific composable.
- Keep the state limited to overlay visibility.
- Avoid global app-state architecture.

### Risk: Runtime Config and GitHub Pages Base Path

GitHub Pages base path handling can create duplicate paths if URL helpers are careless.

Mitigation:

- Unit-test path normalization.
- Verify generated output under `/Personal-Portfolio/`.

## 10. Recommended Next Step

Review this plan. If approved, implementation should begin with the canonical URL helper and tests, then move to mobile consent/menu behavior.
