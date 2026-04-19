# Development Log

## 2026-04-18

### What changed

- Added a new Nuxt Content blog post at `content/blog/3.designing-a-gmail-scale-email-system.md`.
- Created a matching local SVG visual at `public/images/blog/gmail-scale-email-system-architecture.svg`.
- Added this log file to record the iteration and the reasoning behind it.

### Files touched

- `content/blog/3.designing-a-gmail-scale-email-system.md`
  - Added frontmatter that matches the existing blog schema.
  - Wrote the full article covering requirements, scale assumptions, architecture planes, mailbox modeling, send flow, storage, async pipelines, consistency, and failure handling.
- `public/images/blog/gmail-scale-email-system-architecture.svg`
  - Added a local blog-safe illustration that can be used as the card image and post hero image.
- `DEVELOPMENT_LOG.md`
  - Logged the scope of this iteration, why it was done, and next steps.

### Why this change was made

The portfolio already uses Nuxt Content for blog posts, so the cleanest way to publish the email system design study was to add a new Markdown article that matches the current frontmatter format and let the existing `/blog` index page pick it up automatically.

I also added a local SVG because blog cards render better with a dedicated visual, and the post topic benefits from a quick architecture overview before the reader gets into the detailed breakdown.

### Verification

- Ran `npm run generate` locally.
- Verified that Nuxt prerendered `/blog/designing-a-gmail-scale-email-system` successfully.
- Verified that the SVG asset was emitted into the generated public output.

### Next steps

- Review the article copy for any wording you want to make more personal or more interview-focused.
- If needed, add a second inline diagram or supporting screenshots from the source study material.
- Confirm the GitHub Pages deployment is live after the main-branch update finishes.

## 2026-04-19

### What changed

- Fixed dark-mode readability for blog articles globally instead of patching a single post.
- Audited the rest of the portfolio for dark-mode contrast issues and applied a shared typography contrast lift for muted text tokens.

### Files touched

- `pages/blog/[...slug].vue`
  - Added a dedicated `blog-prose` wrapper class around article content.
  - Applied explicit dark-mode-safe text styles for paragraphs, lists, blockquotes, headings, links, and inline code.
- `tailwind.config.js`
  - Reworked the typography theme to use Tailwind Typography CSS variables instead of a hard-coded light-mode body color.
  - Replaced the unused `dark` typography override with the correct `invert` override so `dark:prose-invert` works as intended.
- `app.vue`
  - Added global dark-mode utility overrides for `dark:text-gray-400` and `dark:text-gray-500` so muted supporting copy renders one step brighter across the site.
- `DEVELOPMENT_LOG.md`
  - Logged the follow-up audit and the shared contrast tuning approach.

### Why this change was made

The blog detail page already used `dark:prose-invert`, but the custom typography config set a fixed light-mode text color. That fought the typography plugin in dark mode and caused article body text to render too dark against the dark background.

After fixing the blog renderer, I reviewed the rest of the portfolio and found a softer version of the same issue: many pages and cards used muted dark-mode copy tokens that were technically styled, but still a bit too dim on the current dark surfaces. Moving the fix into a shared global override was the cleanest way to improve readability across the portfolio without hand-editing every component.

### Verification

- `npm run generate` completed successfully after the typography fix for blog posts.
- The blog routes still prerendered correctly, including the Gmail system design post.
- Existing Nuxt timing-label warnings and the stale Browserslist warning are still present, but they did not block the build.
- A full local browser audit was partially blocked by shell and browser-tooling permission issues, so the follow-up portfolio-wide pass was completed by reviewing the shared dark-mode token usage and lifting the muted dark utility values globally.
