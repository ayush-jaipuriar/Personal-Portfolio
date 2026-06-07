# Portfolio Audit Source of Truth

Created: June 6, 2026

Live site reviewed: https://ayush-jaipuriar.github.io/Personal-Portfolio/

Purpose: keep one running source of truth for portfolio findings, improvement decisions, and implementation tracking across this session.

## Review Context

The live portfolio was reviewed using the in-app Browser from three perspectives:

- Product manager: Does the site create a clear funnel from first impression to trust to action?
- Recruiter: Can a hiring team quickly map Ayush to relevant roles and evidence?
- First-time visitor / hiring manager: Is the experience credible, readable, and convincing during a real browse?

Pages and areas reviewed:

- Home
- About
- Skills
- Projects
- Blog
- Contact
- Professional case studies
- Personal project case studies
- Desktop layout
- Mobile layout
- Mobile navigation
- Contact form structure
- Cookie consent behavior

## Overall Verdict

The portfolio is already strong. It communicates senior positioning, availability, enterprise experience, AI-agent work, resume access, and multiple case studies. The site has more substance than a typical personal portfolio, especially in its professional project pages.

The main opportunity is not to add a lot more content. The main opportunity is credibility compression: make the strongest proof easier to absorb in the first 30 to 60 seconds.

Current strength:

- Clear senior title and AI-agent positioning.
- Strong enterprise credibility from TransUnion and HighRadius.
- Good CTA placement for resume, projects, and contact.
- Real case-study structure instead of generic project cards.
- Quantified impact appears in multiple places.
- Blog content helps show technical thinking and system-design depth.

Current risk:

- Some proof is buried or repeated.
- A visible `0+ Years Experience` stat contradicts the `6+ years` claim.
- Mobile first impression is weakened by the cookie banner covering the hero.
- Contact form may not submit usable data unless JavaScript handles it.
- Recruiter role matching could be more explicit.

## Highest-Priority Fixes

### P0: Fix Hero Experience Stat

Current issue:

- The home hero shows `0+ Years Experience`.
- Other copy says `6+ years shipping enterprise fintech at TransUnion and HighRadius`.

Why it matters:

- This is a credibility bug above the fold.
- Recruiters and hiring managers may notice the contradiction immediately.
- A single incorrect metric weakens trust in the rest of the quantified claims.

Recommended change:

- Change `0+ Years Experience` to `6+ Years Experience`.

Acceptance criteria:

- Desktop hero shows `6+ Years Experience`.
- Mobile hero shows `6+ Years Experience`.
- No other experience-related copy contradicts it.

### P0: Verify or Fix Contact Form Submission

Observed issue:

- The contact page contains a form with required fields.
- The inspected form had no visible `action` or `method`.
- Inputs appeared to lack useful `name` attributes except `_gotcha`.

Why it matters:

- A broken contact form is a direct conversion failure.
- If the user submits the form and nothing useful happens, the site loses trust.
- Recruiters may prefer email/LinkedIn, but a form should either work or not exist.

Recommended options:

- Wire the form to a real backend or form service.
- Convert the form into a mailto-driven CTA.
- Remove the form and prioritize direct email, LinkedIn, GitHub, and resume actions.

Acceptance criteria:

- Submitting the form creates a confirmed deliverable message path, or the form is removed.
- Every submitted field has a correct `name`.
- User receives a clear success or failure state.
- No private keys, tokens, or service credentials are exposed in frontend code.

### P0: Reduce Mobile Cookie Banner Intrusion

Observed issue:

- On mobile, the cookie banner covers a large portion of the hero.
- It obscures the primary CTA area and makes the first impression feel cramped.

Why it matters:

- Mobile visitors see the portfolio through the weakest first impression.
- The hero is supposed to create trust and direction.
- The banner competes with the resume/project CTAs.

Recommended change:

- Make the mobile cookie banner more compact.
- Keep it bottom-aligned.
- Reduce vertical padding and copy length on mobile.
- Consider showing it after a short delay or after first scroll.

Acceptance criteria:

- On a 390x844 viewport, the hero title, role, and at least one CTA remain comfortably visible.
- Cookie banner does not cover the primary CTA stack.
- Accept and Decline remain accessible and readable.

## High-Impact Content Improvements

### Add a Homepage Proof Strip

Recommended content:

```text
6+ years | TransUnion + HighRadius | Fortune 500 AI systems | 92% API latency reduction | TB-scale search
```

Why it matters:

- Recruiters skim quickly.
- Hiring managers need evidence, not just titles.
- This compresses the strongest claims into one scannable line.

Possible placement:

- Directly under hero copy.
- Between the hero CTAs and profile image.
- As a compact row immediately after the hero.

Acceptance criteria:

- The proof strip is visible on desktop without scrolling.
- On mobile, it appears before Featured Work.
- It uses concise, factual claims only.

### Clarify Target Roles

Recommended roles:

- Senior Software Engineer
- AI Agent Engineer
- Applied AI Engineer
- Backend / Platform Engineer
- LLM Engineer

Why it matters:

- Recruiters search and match against role titles.
- The current title is strong, but adding adjacent role language improves findability and decision speed.

Possible placement:

- Home page near the hero or CTA section.
- About page near the top in a recruiter summary block.
- Footer or contact page as a compact availability note.

Acceptance criteria:

- The site explicitly names the most relevant target roles.
- Role language feels natural, not keyword-stuffed.

### Add a Recruiter Summary

Suggested copy:

```text
Senior software engineer with 6+ years building enterprise fintech and AI systems.
Currently building production AI agents at TransUnion using LangGraph, MLFlow, RAG, and knowledge graphs.
Previously shipped TB-scale search and high-throughput backend systems across Java, Spring Boot, Python, and cloud infrastructure.
Open to Senior SWE, AI Agent Engineer, Applied AI, and Backend Platform roles.
```

Why it matters:

- The About page is rich but long.
- Recruiters benefit from a short, skimmable summary before the detailed career narrative.

Acceptance criteria:

- Summary appears near the top of About or Home.
- It does not repeat the hero word-for-word.
- It includes experience, current focus, strongest technical domains, and target roles.

## Project and Case Study Improvements

### Expand Featured Work with Key Personal Products

Current issue:

- Featured Work currently does not represent the full set of important personal products Ayush wants surfaced.
- Accountability Agent is present as a featured/personal AI project.
- OnlyYours is already present in the Projects section, but should be considered for stronger featured placement.
- Forge and Phone Down should be added to the portfolio's featured/personal-project story.

Why it matters:

- Featured Work should show the best evidence of product thinking, not just isolated coding exercises.
- These projects can demonstrate end-to-end ownership across product definition, architecture, implementation, deployment, and iteration.
- Recruiters and hiring managers get a fuller view of Ayush as someone who can build complete products, not only enterprise internal systems.

Known project context:

- Accountability Agent: multi-agent AI Telegram bot with supervisor orchestration, gamification, pattern detection, Firestore, FastAPI, Gemini, and reporting.
- Forge: premium daily planner / personal execution PWA with Today, Plan, Insights, and Settings surfaces. Built with React 19, TypeScript, Vite, Material UI, Zustand, TanStack Query, Firebase Auth, Firestore, Cloud Storage, Firebase Functions, Firebase Hosting, and PWA tooling. The repo shows cloud-backed authenticated state, guest/demo mode, analytics snapshots, scheduled notifications, scheduled backups, sync services, backup/restore, calendar abstractions, health-provider abstractions, and route-level architecture across `src/domain`, `src/features`, `src/services`, and Firebase `functions/`.
- OnlyYours: realtime couples game app where partners link, play category-based two-round games, answer about themselves, guess each other's answers, then review scores, history, stats, and badges. Active client is `OnlyYoursExpo` using Expo 54, React 19, React Native 0.81, React Navigation 7, Expo Notifications, Axios, AsyncStorage, and raw WebSocket STOMP. Backend is Spring Boot 3.5 / Java 17 with Spring Security, Spring Data JPA, Spring WebSocket + STOMP, PostgreSQL, Flyway, JWT, and rate limiting. Important correction: current runtime uses email/password auth with refresh tokens; Google sign-in exists only in historical/legacy docs and is intentionally disabled in the current backend.
- Phone Down: native Android focus timer where sessions only progress while the phone is face down and stable. Built with Kotlin, Jetpack Compose, multi-module Gradle architecture, Hilt, Room, DataStore, foreground service, Android sensors, notifications, domain-level session engine, insights use cases, Paparazzi screenshot checks, ktlint, detekt, Android lint, unit tests, and release build verification. The product is privacy-first and local-first: session data stays on device, with optional/deferred backup and account/billing integrations.

Recommended Featured Work treatment:

- Keep enterprise case studies as the highest-trust professional proof.
- Add a personal-products cluster that includes Accountability Agent, Forge, Phone Down, and OnlyYours.
- Frame these as product case studies where possible, not just repository links.
- For each project, show problem, user, product decision, architecture, current status, and what Ayush learned.

Suggested card framing:

- Accountability Agent: `Multi-Agent Accountability Coach`
- Forge: `Personal Execution PWA with Firebase Intelligence`
- Phone Down: `Sensor-Enforced Android Focus Timer`
- OnlyYours: `Realtime Couples Game with Spring Boot + Expo`

Suggested Featured Work card copy:

```text
Forge
Personal Execution PWA with Firebase Intelligence
Premium daily planner for Today, Plan, Insights, and Settings workflows, backed by authenticated cloud state, scheduled analytics snapshots, scheduled backups, and notification evaluation.
React 19, TypeScript, Vite, MUI, Zustand, TanStack Query, Firebase Auth, Firestore, Cloud Functions, PWA
```

```text
Phone Down
Sensor-Enforced Android Focus Timer
Native Android focus app where time only counts while the phone is face down and stable, using sensors, a foreground service, local-first persistence, and a pure domain session engine.
Kotlin, Jetpack Compose, Hilt, Room, DataStore, Sensors, Foreground Service, Paparazzi
```

```text
OnlyYours
Realtime Couples Game with Spring Boot + Expo
Full-stack mobile game where partners link, answer questions, guess each other's answers, and receive realtime scoring, history, stats, badges, and notifications.
Spring Boot, Java 17, PostgreSQL, Flyway, WebSocket/STOMP, JWT, Expo, React Native
```

Suggested case-study angles:

- Forge: product strategy and architecture for a complete personal operating system; best for showing product judgment, Firebase platform engineering, frontend architecture, scheduled backend workflows, and PWA thinking.
- Phone Down: native Android systems engineering; best for showing sensor-driven product mechanics, local-first privacy, foreground service orchestration, explicit domain state machines, multi-module architecture, and release-readiness discipline.
- OnlyYours: full-stack realtime mobile product; best for showing backend business rules, WebSocket gameplay, partner/couple lifecycle modeling, auth/session handling, notifications, mobile UX, and testable product flows.

Current implementation confidence:

- Forge: verified from README, PRS, package metadata, source tree, service names, and Firebase Functions entry points. Some live usage/cost data exists from earlier analysis but should not be used as current product copy without refresh.
- Phone Down: verified from README, architecture guide, release-readiness docs, Play Store metadata, Gradle settings, dependency versions, and module list.
- OnlyYours: verified from README, Codebase Expert Guide, Project Status, package metadata, backend build file, and active Expo source tree.

Acceptance criteria:

- Forge, Phone Down, and OnlyYours are represented in Featured Work or an equivalent high-visibility personal-products section.
- OnlyYours remains in Projects but receives stronger positioning if promoted.
- Phone Down copy is based on verified project context, not assumptions. This is now satisfied for the source-of-truth copy candidates above.
- Featured Work remains selective and does not become a noisy repository list.

### Make Project Cards More Outcome-Led

Current issue:

- Project cards are good, but some titles are framed more as internal project names than outcomes.

Recommended card framing:

- `Production AI Agents for Research Analysts`
- `Sub-7s Search Across TB-Scale Data`
- `92% Faster Enterprise Parsing APIs`
- `Multi-Agent Accountability Bot`

Why it matters:

- Outcomes are easier for hiring managers to value than project names.
- Project names can remain as subtitles or detail-page titles.

Acceptance criteria:

- Each top project card includes one clear outcome.
- Each card still preserves employer/project context where appropriate.

### Add Confidentiality Notes to Enterprise Case Studies

Recommended copy:

```text
Details generalized to respect employer confidentiality while preserving the architecture, tradeoffs, and impact.
```

Why it matters:

- Enterprise projects often cannot show code, screenshots, or exact business data.
- A confidentiality note turns that limitation into a professional signal.

Acceptance criteria:

- Professional case studies include the note near the top or before architecture details.
- The note is concise and does not distract from the case study.

### Add Architecture Diagrams

Observed issue:

- Case studies include a `System Architecture` section.
- The content would be stronger with visible architecture diagrams for each major system.

Recommended diagrams:

- AI Agents for Research Perspective: supervisor agent, specialized agents, retrieval/search, Neo4j, Superset, MLFlow, user workflow.
- TB-Scale Search Product: routing layer, DuckDB, Trino, Dataproc, Kubernetes scaling, geofencing.
- Enterprise Parsing Engine: request flow, parser module, API layer, database, testing/performance path.
- Accountability Agent: Telegram, FastAPI, supervisor, specialized agents, Firestore, reporting.

Why it matters:

- Diagrams prove system thinking faster than paragraphs.
- They help a hiring manager evaluate architecture skill.

Acceptance criteria:

- Each major case study has a simple readable diagram.
- Diagrams work in both dark and light themes.
- Diagrams are legible on mobile.

### Add End-of-Case-Study CTAs

Recommended CTAs:

- `Interested in similar AI/backend work? Get in touch.`
- `Download resume`
- `View more case studies`

Why it matters:

- Case studies are high-trust pages.
- A visitor who reaches the end should have an obvious next action.

Acceptance criteria:

- Every case study ends with at least one contact or resume CTA.
- CTAs do not feel repetitive or overly salesy.

## Recruiter Lens Findings

What works:

- The portfolio immediately identifies Ayush and his target domain.
- Resume is easy to access from navigation and hero.
- Location and openness to opportunities are visible.
- Enterprise credibility is clear.
- Case studies provide stronger evidence than generic project lists.

What can improve:

- Add explicit best-fit role language.
- Add a short recruiter summary.
- Surface strongest metrics earlier.
- Make professional impact more scannable.
- Keep personal projects clearly secondary to enterprise proof.

Recruiter risk areas:

- `0+ Years Experience` contradiction.
- Contact form uncertainty.
- Skills list may feel broad unless hierarchy remains clear.

## Product Manager Lens Findings

The portfolio funnel:

```text
Landing -> Trust -> Evidence -> Resume or Contact
```

What works:

- Hero CTA is clear.
- Featured work is relevant.
- Project pages have useful structure.
- Blog content supports technical credibility.
- Footer repeats contact and profile links.

What can improve:

- Increase evidence density above the fold.
- Reduce mobile cookie-banner friction.
- Add a clearer `Why me` section.
- Add stronger conversion CTAs at the end of case studies.
- Prioritize case-study evidence over blog content on the homepage.

Suggested `Why me` message:

```text
I bridge enterprise backend reliability with production LLM systems: Java/Spring and cloud systems on one side, LangGraph/RAG/LLMOps on the other.
```

## First-Time Visitor / Hiring Manager Findings

What works:

- The site feels serious and polished.
- Dark theme, profile image, and hero composition create a strong first impression on desktop.
- Case studies communicate architecture, role, decisions, results, and lessons.
- Blog posts suggest depth and learning orientation.

What can improve:

- Make the strongest proof visible faster.
- Reduce repeated phrasing across sections.
- Use diagrams to break up dense case-study text.
- Add more concrete business context where confidentiality allows.
- Tune mobile first impression.

## Design and UX Findings

Strong areas:

- Desktop hero looks polished.
- Navigation is simple and familiar.
- Mobile menu works.
- Project cards are readable.
- Visual hierarchy is generally clear.
- Dark theme gives the portfolio a premium technical feel.

Improvement areas:

- Mobile cookie banner is too dominant.
- Mobile hero appears cramped when the banner is visible.
- Some content sections have similar rhythm and could benefit from stronger section differentiation.
- Blog may be lower hiring value than case studies and could be visually de-emphasized on the homepage.
- Social icon-only links should be checked for accessible names.

## Accessibility and Technical Checks

Items to verify:

- Icon-only GitHub, LinkedIn, and email links have accessible names.
- Mobile menu button has accurate open and close labels.
- Form labels are correctly associated with inputs.
- Contact form inputs have usable `name` attributes.
- Focus states are visible in both themes.
- Resume link opens/downloads correctly.
- Cookie consent buttons remain keyboard accessible.
- Color contrast is acceptable in dark and light modes.

## Suggested Implementation Order

### Pass 1: Trust and Conversion Fixes

- Fix `0+ Years Experience`.
- Verify or replace contact form behavior.
- Reduce mobile cookie banner footprint.
- Add proof strip.

Why this pass first:

- These changes directly affect credibility and conversion.
- They are likely small-to-medium implementation effort.
- They improve the first impression immediately.

### Pass 2: Recruiter Clarity

- Add best-fit roles.
- Add recruiter summary.
- Sharpen homepage value proposition.
- Reorder homepage content if needed so case-study proof outranks blog content.

Why this pass second:

- It improves skim value.
- It helps the site match real hiring workflows.

### Pass 3: Case Study Depth

- Add confidentiality notes.
- Add architecture diagrams.
- Make project cards more outcome-led.
- Add end-of-case-study CTAs.

Why this pass third:

- It deepens credibility after the first-impression issues are fixed.
- It improves hiring-manager confidence.

### Pass 4: Polish and Accessibility

- Audit icon-only links.
- Verify keyboard navigation.
- Test mobile and desktop layouts.
- Check light and dark theme behavior.
- Confirm no console warnings or errors.

Why this pass fourth:

- It makes the portfolio feel more mature and production-quality.

## Running Decision Log

Use this section during the session to record decisions as they are made.

| Date | Decision | Reason | Status |
| --- | --- | --- | --- |
| June 6, 2026 | Create this file as the single source of truth for portfolio audit findings. | User requested one canonical session file for findings and future tracking. | Done |
| June 6, 2026 | Implement P0, P1, P2 fixes and accessibility patches. | Follow through with findings in the source of truth audit document. | Done |
| June 7, 2026 | Expand Featured Work direction to include Forge, Phone Down, and OnlyYours alongside Accountability Agent. | User wants the portfolio to better represent important personal products; OnlyYours exists in Projects already but should be considered for featured placement. | Documented |
| June 7, 2026 | Use sibling repo inspection as the source for Forge, Phone Down, and OnlyYours portfolio copy. | Prevents invented project claims and gives Featured Work implementation verified product/architecture details. | Done |
| June 7, 2026 | Create a dedicated Personal Products homepage section. | Enterprise case studies and personal products need separate space so professional scale and product ownership are both clear. | Done |
| June 7, 2026 | Replace the profile picture site-wide with the new generated portrait. | Keeps the homepage, about page, and blog author identity consistent while using an optimized square crop for circular display. | Done |

## Implementation Tracker

| Priority | Item | Status | Notes |
| --- | --- | --- | --- |
| P0 | Fix `0+ Years Experience` hero stat | Implemented | Wrapped MetricsBar numbers in ClientOnly with metric.value fallback. |
| P0 | Verify or fix contact form | Implemented | Added name and autocomplete attributes to contact.vue. |
| P0 | Reduce mobile cookie banner intrusion | Implemented | Reduced mobile padding/font size, added 2-second timeout delay on mount. |
| P1 | Add homepage proof strip | Implemented | Added scannable proof strip below the index.vue hero. |
| P1 | Add explicit best-fit roles | Implemented | Roles mapped in index.vue and about.vue recruiter summary card. |
| P1 | Add recruiter summary | Implemented | Added Recruiter Quick Summary Card at the top of about.vue. |
| P1 | Make project cards outcome-led | Implemented | Adjusted titles in data/projects.ts to lead with measurable outcomes. |
| P1 | Add Forge, Phone Down, and OnlyYours to Featured Work direction | Discovery complete | Source-of-truth now contains verified card copy candidates and case-study angles from sibling repos. |
| P1 | Implement Forge, Phone Down, and OnlyYours in portfolio Featured Work | Implemented | Added a dedicated Personal Products section instead of expanding the enterprise case-study grid. |
| P2 | Add confidentiality notes | Implemented | Injected amber disclaimer callouts in pages/projects/[slug].vue. |
| P2 | Add architecture diagrams | Implemented | Already verified SVGs rendering properly in slug case studies. |
| P2 | Add case-study CTAs | Implemented | Added contact link + resume download button below learnings block in slug.vue. |
| P2 | Accessibility pass | Implemented | Repaired footer text contrast (AppFooter.vue) and declared html lang="en" (nuxt.config.ts). |

## Validation Checklist

After implementation, verify:

- Desktop home page above the fold.
- Mobile home page at approximately 390x844.
- Mobile menu open and close behavior.
- Resume link.
- Contact page form or replacement CTA.
- All professional project detail pages.
- Light and dark theme.
- Console errors and warnings.
- Keyboard navigation.
- Basic accessibility labels.

## Iteration Notes

### June 7, 2026: Product Design Audit

What changed:

- Added a dedicated product design audit report at `product-design-audit-2026-06-07/PRODUCT_DESIGN_AUDIT_REPORT.md`.
- Captured 12 live-site audit screenshots in `product-design-audit-2026-06-07/screenshots/`.
- Audited the deployed portfolio across homepage, about, projects, project detail pages, blog, contact, and mobile states.

Key findings:

- Fix production blog share URLs that still point to localhost.
- Improve mobile cookie/banner/menu interaction.
- Add case-study summary rails for faster recruiter evaluation.
- Make the visual system feel more authored and less template-like.
- Upgrade personal-product visuals and project cards into stronger evidence cards.

Status:

- Report written.
- No implementation changes made in this audit pass.

### June 7, 2026: Phase 1 Planning

What changed:

- Added Phase 1 implementation plan at `portfolio-improvement-plans/PHASE_1_PRODUCTION_TRUST_AND_MOBILE_FRICTION_PLAN.md`.
- Scoped Phase 1 to production trust and mobile friction:
  - Fix blog share URLs that point to localhost.
  - Improve mobile cookie/banner/menu interaction.
  - Add focused automated regression coverage.
  - Validate with production generation and Browser checks.

Status:

- Plan written.
- User approved the plan and Phase 1 implementation proceeded.

### June 7, 2026: Phase 1 Implementation - Production Trust and Mobile Friction

What changed:

- Added a canonical site URL runtime config in `nuxt.config.ts`.
- Added canonical URL utilities in `utils/canonicalUrl.ts`.
- Added a Nuxt-facing canonical URL composable in `composables/useCanonicalUrl.ts`.
- Updated `pages/blog/[...slug].vue` so share URLs use production canonical URLs instead of development localhost URLs.
- Added shared mobile menu state in `composables/useMobileMenuState.ts`.
- Updated `components/AppHeader.vue` with mobile menu state publishing, `aria-controls`, stable menu `id`, accurate open/close accessible labels, and Escape-to-close behavior.
- Updated `components/CookieConsent.vue` so the cookie banner stays out of the way while the mobile menu is open and uses tighter mobile spacing.
- Added `components/content/ProseImg.vue` so Markdown-rendered images are resolved through the app base URL and do not break under GitHub Pages.
- Added Vitest coverage in `tests/canonicalUrl.test.ts`.
- Added the `npm test` script and Vitest dependency in `package.json` and `package-lock.json`.

Why it changed:

- Blog share links previously risked publishing `localhost` URLs, which is a direct production trust issue for recruiters, hiring managers, and anyone sharing the content.
- The mobile cookie banner could compete with the first impression and navigation, especially on smaller screens.
- The mobile menu needed clearer accessibility contracts so the current state is understandable to assistive technology and keyboard users.
- The production-shaped preview surfaced Markdown diagram image requests escaping the `/Personal-Portfolio/` base path; this needed to be fixed before calling the phase production-ready.
- The repo needed a small regression-test foothold before more portfolio phases add broader UI behavior.

Validation completed:

- `npm test` passed: 1 test file, 6 tests.
- `npm run generate` passed and generated 55 static routes.
- Production-shaped local preview was served at `http://127.0.0.1:4174/Personal-Portfolio/`.
- Browser mobile check at 390x844 verified:
  - menu button starts closed with `aria-expanded="false"` and `aria-label="Open main menu"`;
  - menu opens with `aria-expanded="true"` and `aria-label="Close main menu"`;
  - Escape closes the menu and restores the closed accessible label;
  - no console errors were reported on checked routes.
- Static artifact check verified Twitter, LinkedIn, and Facebook share URLs all contain `https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents`.
- Static artifact check verified generated HTML and JSON contain no `localhost:3000`, `http://localhost`, or `127.0.0.1`.
- Static artifact check verified Markdown image URLs now render as `/Personal-Portfolio/images/...`.
- HTTP smoke check returned 200 for the AI agent blog diagrams, Gmail-scale blog architecture image, and both checked blog routes.
- Browser check verified no broken images on the AI agent blog and Gmail-scale system design blog.

Known non-blocking notes:

- Generation still reports stale Browserslist `caniuse-lite` data. This is dependency metadata maintenance, not a Phase 1 blocker.
- Installing Vitest surfaced existing npm audit findings. They were not remediated during Phase 1 because automated audit fixes could create broad dependency churn outside the approved scope.

Status:

- Phase 1 implementation is complete.
- Deployment is ready for explicit approval.

### June 7, 2026: Final Production Readiness Pass

What changed:

- Ran a production static generation pass with `npm run generate`.
- Previewed the generated `.output/public` artifact using a GitHub Pages-shaped local mount at `/Personal-Portfolio/`.
- Verified the homepage, about page, projects index, core personal-product detail pages, Accountability Agent detail page, and a blog article in Browser.
- Verified key production assets returned HTTP 200: new profile image, Forge image, Phone Down image, Accountability Agent SVG, and resume PDF.

Why it changed:

- Production deployment depends on generated static output, correct GitHub Pages base paths, and committed assets.
- The local dev server had previously shown a stale Nuxt generated-output failure, so the final pass intentionally separated dev serving from production generation.

Validation completed:

- `npm run generate` completed successfully.
- Browser production preview showed no console errors on the checked routes.
- HTTP smoke check returned 200 for all checked routes and assets.

Known non-blocking note:

- Browserslist reported stale `caniuse-lite` data during generation; this is maintenance noise, not a deployment blocker.

### June 7, 2026: Dedicated Personal Products Section

What changed:

- Added `components/PersonalProducts.vue`.
- Updated `pages/index.vue` so the homepage now flows as Hero, Metrics, Enterprise Case Studies, Personal Products, Skills, Latest Posts, and CTA.
- Updated `components/FeaturedProjects.vue` copy so the existing featured section is clearly enterprise/professional case studies.
- Updated `components/ProjectCard.vue` so personal projects with rich `caseStudy` data open internal detail pages instead of going only to GitHub.
- Updated `data/projects.ts` with `personalProduct` support, verified project copy for Forge, Phone Down, and OnlyYours, richer personal-product case studies, and corrected OnlyYours current auth/stack language.
- Added `public/images/projects/forge.png` from the Forge repo.
- Added `public/images/projects/phone-down.png` from the Phone Down repo.
- Added `public/images/projects/accountability-agent-product.svg` to replace the misleading Twitter-style visual on the Accountability Agent card.

Why it changed:

- The homepage previously mixed professional and personal work in one Featured Work story.
- The new structure lets enterprise case studies prove scale and impact first, then lets personal products prove ownership, product judgment, architecture, and release discipline.

Validation completed:

- Ran `npm run build` successfully.
- Verified the homepage in Browser at `http://127.0.0.1:3000/`.
- Verified desktop rendering of the Personal Products section.
- Verified mobile rendering of the Personal Products section after entrance motion settled.
- Verified detail routes for `/projects/forge`, `/projects/phone-down`, `/projects/only-yours`, and `/projects/accountability-agent`.

Known follow-up:

- The existing cookie banner can still overlap lower mobile content until dismissed.
- OnlyYours still uses the existing generic phone image; a stronger product-specific visual would improve that card.

### June 7, 2026: Profile Picture Refresh

What changed:

- Added `public/ayush-jaipuriar-profile.png` as an 800x800 centered crop derived from the supplied portrait image.
- Updated `pages/index.vue` so the homepage hero profile photo uses the new portrait.
- Updated `pages/about.vue` so the about page quick profile card uses the same portrait.
- Updated `pages/blog/[...slug].vue` so blog author sections use the same portrait.
- Removed lazy loading from the small blog author portrait so the identity image loads dependably when an article renders.

Why it changed:

- The profile photo is a repeated identity element across the portfolio.
- Using a square image that matches the component's declared dimensions keeps circular cropping predictable and avoids layout shifts.

Validation completed:

- Verify the homepage hero photo, about page profile card, and at least one blog detail author block in Browser.

### June 7, 2026: Phase 2 - Technical Dossier Enhancements (Case Study Summary Rail & Filter Tabs)

What changed:
- Added a 4-column responsive grid card "Executive Summary Rail" to the top of case study detail pages in `pages/projects/[slug].vue`.
- Added interactive category filter tabs ("All Work", "AI & Agentic Systems", "Enterprise Scale", "Personal Products") on the Projects index page at `pages/projects/index.vue`.
- Integrated a "Related Technical Writing" section at the bottom of case study detail pages to fetch and link relevant blog posts using Nuxt Content.

Why it changed:
- Enhances recruiter navigation by offering instant category filtering and giving them a summary of key metrics (duration, role, outcome, stack) at a glance before reading the full case study.
- Connects written thought-leadership directly with hands-on projects.

Validation completed:
- `npm test` and `npm run generate` succeeded cleanly.
- Verified that empty categories are dynamically hidden when filtering.

---

### June 7, 2026: Phase 3 - Upgrade Visual Taste (macOS Terminal Cards & Background Grids)

What changed:
- Implemented a clean systems-inspired background grid motif `.bg-grid-motif` in `assets/css/main.css` and applied it to the homepage hero and projects page header.
- Generated a custom mobile game UI screenshot `only-yours-product.png` for the OnlyYours project card.
- Redesigned `components/CaseStudyCard.vue`, `components/ProjectCard.vue`, and `components/PersonalProducts.vue` to wrap cards in a macOS-style terminal shell with custom simulated filenames (e.g., `agent_orchestrator.py`), control dots, and active/pulse status badges.

Why it changed:
- Standard card templates look generic. Introducing a macOS-style terminal dossier theme provides an authentic systems/platform engineering feel aligned with Ayush's skillset.
- Provides a custom visual asset for OnlyYours instead of a generic placeholder.

Validation completed:
- `npm test` and `npm run generate` succeeded cleanly.
- Verified visual alignment and responsiveness of terminal cards on mobile and desktop.

---

### June 7, 2026: Phase 4 - Make It Feel Premium (Dividers, Learning Table, & Recruiter Dossier)

What changed:
- Implemented the `.systems-divider` CSS rules in `assets/css/main.css` (thin linear-gradient divider line with a centered tech-node dot) and applied it between sections in `pages/index.vue`.
- Refactored `pages/projects/index.vue` to display personal/learning builds (Camunda dispute resolution, LangChain QA) in a clean, high-density table list layout instead of cards, highlighting technology stack, GitHub links, and project scale.
- Redesigned `pages/contact.vue` into a modern two-column recruiter conversion point. The left column presents a "Recruiter Dossier" fit-matrix (roles, domains, availability) and an interactive copy-to-clipboard email action button with instant visual micro-feedback. The right column styles the contact form with custom focus transitions and a response time promise.

Why it changed:
- Thin connecting lines create an architectural, blueprint-like visual structure.
- Presenting small learning builds in a high-density table separates them visually from complete personal products, breaking card monotony and establishing varied rhythm.
- Recruiter Dossier converts casual visitors into leads by explicitly addressing recruiter questions (role alignment, availability, easy contact).

Validation completed:
- Run Vitest tests (`npm test`) - all 6 tests passed successfully.
- Run static generation build (`npm run generate`) - prerendered all 57 routes with zero compilation errors.
- Visual inspection of dividers, table list, and recruiter contact page layout in local preview mode.
