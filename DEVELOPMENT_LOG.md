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
