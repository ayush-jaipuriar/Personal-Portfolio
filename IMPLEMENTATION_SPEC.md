# Portfolio Overhaul — Implementation Spec / PRD

**Version:** 1.1 (Updated with all owner inputs)  
**Date:** February 10, 2026  
**Author:** AI Engineering Assistant  
**Source Document:** [PORTFOLIO_REVIEW.md](./PORTFOLIO_REVIEW.md)  
**Framework:** Nuxt 3 (Vue 3) + Tailwind CSS + Nuxt Content  
**Hosting:** GitHub Pages (static generation via `npm run generate`)

---

## Table of Contents

- [1. Overview & Goals](#1-overview--goals)
- [2. Architecture & Tech Stack Notes](#2-architecture--tech-stack-notes)
- [3. Phase 0 — Repo Cleanup & Housekeeping](#3-phase-0--repo-cleanup--housekeeping)
- [4. Phase 1 — Critical Bug Fixes](#4-phase-1--critical-bug-fixes)
- [5. Phase 2 — Core Positioning & Homepage Overhaul](#5-phase-2--core-positioning--homepage-overhaul)
- [6. Phase 3 — Projects & Case Studies](#6-phase-3--projects--case-studies)
- [7. Phase 4 — About Page Rewrite](#7-phase-4--about-page-rewrite)
- [8. Phase 5 — Skills Page Overhaul](#8-phase-5--skills-page-overhaul)
- [9. Phase 6 — Blog System Rebuild](#9-phase-6--blog-system-rebuild)
- [10. Phase 7 — Contact Page & Form Integration](#10-phase-7--contact-page--form-integration)
- [11. Phase 8 — Design "Wow Factor" Pass](#11-phase-8--design-wow-factor-pass)
- [12. Phase 9 — SEO, Meta & Performance](#12-phase-9--seo-meta--performance)
- [13. Phase 10 — Final QA & Launch](#13-phase-10--final-qa--launch)
- [14. Post-Launch Roadmap](#14-post-launch-roadmap)
- [15. Content Authoring Guide](#15-content-authoring-guide)
- [Appendix A — Data Dictionaries](#appendix-a--data-dictionaries)
- [Appendix B — Design Tokens & Style Guide](#appendix-b--design-tokens--style-guide)

---

## 0. Resolved Owner Inputs (Feb 10, 2026)

All `[OWNER INPUT]` placeholders have been resolved. Summary of decisions:

| Question | Answer |
|----------|--------|
| **AI Agents at TransUnion (shareable details)** | NLP-to-SQL, NLP search, Neo4j knowledge graphs, auto-build Superset dashboards, RAG Q&A on chart data, anomaly/pattern detection. LangGraph supervisor + orchestration patterns. Deployed via MLFlow. |
| **TB-Scale Search Product (shareable details)** | Multiple TBs, <7 sec search, DuckDB + Cloud Dataproc + Trino, dynamic pod scaling, geofencing on proprietary data. |
| **Resume PDF** | Use current `Profile.pdf` from `.cursor/rules/` as-is for initial launch. |
| **"What Drives Me" section** | Content provided — obsessed with AI, experience at both unicorn startup and Fortune 500, thrives at intersection of robust systems and cutting-edge AI. (See section 7.4) |
| **First blog post** | Will draft during implementation with AI assistance for structuring. Topic: "Building Production AI Agents with LangChain and LangGraph." |
| **Calendly/scheduling link** | No — just contact form and email. |
| **Contact form backend** | Formspree (free tier). |
| **Accountability Agent repo** | Now public at https://github.com/ayush-jaipuriar/accountability_agent — production-grade multi-agent AI Telegram bot. Promoted to **star personal project** in portfolio. |

---

## 1. Overview & Goals

### 1.1 What We're Building

A complete overhaul of Ayush Jaipuriar's personal portfolio — repositioning it from a generic "Full Stack Developer" site to an **AI Agent Engineer & Senior Full-Stack Developer** portfolio targeting Senior SWE / Lead Engineer / AI Engineer roles at FAANG and fintech startups.

### 1.2 Success Criteria

| Criterion | Measurement |
|-----------|-------------|
| All pages render correctly in both light and dark mode | Manual QA on Chrome, Safari, Firefox — desktop and mobile |
| A recruiter can understand Ayush's value proposition within 5 seconds of landing | Peer review — first-impression test with 2-3 people |
| Resume is downloadable within 2 clicks from any page | PDF download link in header/hero |
| At least 3 professional case studies are live with real content | Content audit |
| Contact form actually delivers messages to `jaipuriar.ayush@gmail.com` | End-to-end test submission |
| Lighthouse Performance score > 90 | Lighthouse audit on deployed site |
| Site feels "alive" — animations, transitions, micro-interactions | Visual review against reference sites |
| All content is consistent across portfolio, LinkedIn, and resume | Cross-reference audit (see PORTFOLIO_REVIEW.md consistency table) |

### 1.3 Guiding Principles

1. **AI-first narrative** — Ayush's AI agent work at TransUnion is the headline, not a footnote
2. **Show, don't tell** — Case studies with architecture decisions and results, not just bullet points
3. **Recruiter-optimized** — Every page should help someone decide to reach out within 60 seconds
4. **Apple-inspired, alive** — Clean, premium, with intentional motion and depth
5. **No placeholder content** — Every word, image, and link must be real and accurate

### 1.4 Constraints

- Must stay on **Nuxt 3 / Vue 3** (no framework switch)
- Must remain deployable to **GitHub Pages** (static generation only, no server routes)
- **No proprietary code** from TransUnion or HighRadius — professional projects are case studies only
- Owner must provide final copy for case study specifics (architecture details, exact metrics, etc.)

---

## 2. Architecture & Tech Stack Notes

### 2.1 Current Stack (Keeping)

| Layer | Technology | Config File |
|-------|-----------|-------------|
| Framework | Nuxt 3.8+ | `nuxt.config.ts` |
| UI | Vue 3.3+ | — |
| Styling | Tailwind CSS via `@nuxtjs/tailwindcss` | `tailwind.config.js` |
| Content | `@nuxt/content` (Markdown blog posts) | `nuxt.config.ts` |
| Theme | `@nuxtjs/color-mode` (system, light, dark) | `nuxt.config.ts` |
| Animation | `@vueuse/motion` | `nuxt.config.ts` |
| Icons | `nuxt-icon` | `nuxt.config.ts` |
| SEO | `@nuxtjs/robots` | `nuxt.config.ts` |
| Deployment | GitHub Actions → GitHub Pages | `.github/workflows/deploy.yml` |

### 2.2 New Dependencies to Add

| Package | Purpose | Phase |
|---------|---------|-------|
| `@formspree/core` or raw `fetch` to Formspree API | Contact form backend | Phase 7 |
| `@nuxtjs/sitemap` | Auto-generate sitemap.xml | Phase 9 |
| `nuxt-og-image` or manual OG tags | Social sharing previews | Phase 9 |
| `vueuse` (if not already via `@vueuse/motion`) | Composables for scroll position, intersection observer, counters | Phase 8 |

### 2.3 Files to Create (New)

| File | Purpose | Phase |
|------|---------|-------|
| `components/MetricsBar.vue` | Animated counter stats on homepage | Phase 2 |
| `components/FeaturedProjects.vue` | Homepage featured project cards | Phase 2 |
| `components/SkillsSnapshot.vue` | Homepage skills preview (top 8-10) | Phase 2 |
| `components/LatestPosts.vue` | Homepage latest blog posts | Phase 2 |
| `components/ConnectCTA.vue` | Homepage "Let's Connect" section | Phase 2 |
| `components/AvailableBadge.vue` | "Open to Opportunities" pulsing badge | Phase 2 |
| `components/CareerTimeline.vue` | Animated career timeline for About page | Phase 4 |
| `components/CaseStudyCard.vue` | Card component for professional case studies | Phase 3 |
| `components/ScrollProgress.vue` | Scroll progress bar in header | Phase 8 |
| `components/GradientMesh.vue` | Animated gradient mesh background | Phase 8 |
| `composables/useCounter.ts` | Animated number counter composable | Phase 8 |
| `composables/useIntersection.ts` | Intersection Observer composable for scroll triggers | Phase 8 |
| `public/resume/Ayush_Jaipuriar_Resume.pdf` | Downloadable resume PDF | Phase 2 |

### 2.4 Files to Delete

| File | Reason | Phase |
|------|--------|-------|
| `package-lock 2.json` | Duplicate lock file | Phase 0 |
| `Profile (3).pdf` | Stale duplicate resume in root | Phase 0 |
| `public/about.txt` | Irrelevant favicon metadata | Phase 0 |
| `.github/workflows/nuxtjs.yml` | Duplicate broken workflow (uses wrong output path `./dist`) | Phase 0 |
| `content/blog/1.sample-post.md` | Generic template post | Phase 6 |
| `content/blog/2.modern-javascript-features.md` | Generic template post | Phase 6 |
| `content/blog/3.optimizing-website-performance.md` | Generic template post | Phase 6 |

---

## 3. Phase 0 — Repo Cleanup & Housekeeping

**Goal:** Clean working environment before making functional changes.

### 3.1 Tasks

| # | Task | File(s) to Modify | Details |
|---|------|--------------------|---------|
| 0.1 | Delete duplicate package lock | Delete `package-lock 2.json` | Just remove the file |
| 0.2 | Delete stale root PDF | Delete `Profile (3).pdf` | Resume lives in `.cursor/rules/` and `public/resume/` |
| 0.3 | Delete `public/about.txt` | Delete `public/about.txt` | Contains favicon generation metadata, not needed publicly |
| 0.4 | Delete duplicate workflow | Delete `.github/workflows/nuxtjs.yml` | Uses `./dist` output path which is wrong for Nuxt 3 (should be `.output/public`, which `deploy.yml` uses correctly) |
| 0.5 | Fix circular self-dependency | `package.json` | Remove `"personal-portfolio": "file:"` from `dependencies` |
| 0.6 | Fix `site.webmanifest` | `public/site.webmanifest` | Set `name` to `"Ayush Jaipuriar - Portfolio"`, `short_name` to `"AJ Portfolio"` |
| 0.7 | Update `.gitignore` | `.gitignore` | Ensure `*.pdf` in root is ignored (but not in `public/resume/`). Add `*.bak` pattern. |
| 0.8 | Update `README.md` | `README.md` | Replace generic template README with personalized content. Fix `yourusername` placeholder. |

### 3.2 Checklist

- [x] `package-lock 2.json` deleted
- [x] `Profile (3).pdf` deleted from root
- [x] `public/about.txt` deleted
- [x] `.github/workflows/nuxtjs.yml` deleted
- [x] `package.json` — `"personal-portfolio": "file:"` removed from dependencies
- [x] `site.webmanifest` — `name` and `short_name` populated
- [x] `.gitignore` — `*.bak` pattern added, root PDFs excluded
- [x] `README.md` — updated with real project info and `ayush-jaipuriar` username
- [x] `npm install` / `yarn install` runs without errors after cleanup
- [x] `npm run dev` starts without errors after cleanup

---

## 4. Phase 1 — Critical Bug Fixes

**Goal:** Make the site actually functional. No point doing content or design work on a broken site.

### 4.1 Bug Fix: Projects Page Blank Render

**Root Cause Analysis:**
1. `v-tooltip.bottom` directive on line 43 of `pages/projects/index.vue` — no tooltip library installed, causes Vue runtime error
2. GitHub Calendar `<script>` loaded via `useHead()` with `onload` callback — may throw in SSG context

**Files to modify:** `pages/projects/index.vue`

**Changes:**

| # | Change | Location in File | Details |
|---|--------|------------------|---------|
| 1.1a | Remove `v-tooltip` directive | Line 43: `v-tooltip.bottom="'Visit my GitHub'"` | Delete the `v-tooltip.bottom` attribute entirely. Replace `<a v-tooltip.bottom="'Visit my GitHub'"` with just `<a` |
| 1.1b | Wrap GitHub Calendar in `<ClientOnly>` | The `<div class="calendar">` block (lines 32-37) | Wrap in `<ClientOnly>` to prevent SSG issues. Add `<template #fallback>` for loading state |
| 1.1c | Move GitHub Calendar script to `onMounted` | `<script setup>` section (lines 80-93) | Instead of `useHead({ script: [...] })`, dynamically create and append the script element inside `onMounted()` with try/catch error handling |
| 1.1d | Add `title` attribute as tooltip fallback | The GitHub profile link (line 43) | Add `title="Visit my GitHub"` as a native HTML tooltip replacement |

**Acceptance Criteria:**
- Projects page renders header, project cards, footer in both `npm run dev` and `npm run generate` → `npx serve .output/public`
- No console errors related to `v-tooltip` or `GitHubCalendar`
- GitHub Calendar loads gracefully or shows fallback "View my contributions on GitHub" link

### 4.2 Bug Fix: Dark Mode Text Contrast

**Root Cause Analysis:**
Page headings likely use classes that resolve to a low-contrast gray in dark mode. Need to audit all `h1` and `h2` elements across pages.

**Files to modify:** `pages/about.vue`, `pages/skills.vue`, `pages/contact.vue`, `pages/blog/index.vue`, `pages/projects/index.vue`

**Changes:**

| # | Page | Current Heading Classes (likely) | Fix |
|---|------|----------------------------------|-----|
| 1.2a | About — "About Me" h1 | Missing explicit `dark:text-white` | Add `text-gray-900 dark:text-white` to h1 |
| 1.2b | About — subtitle | Low-contrast gray | Ensure `text-gray-600 dark:text-gray-300` (not `dark:text-gray-600`) |
| 1.2c | Skills — "Skills & Expertise" h1 | Same issue | Add `text-gray-900 dark:text-white` |
| 1.2d | Contact — "Get In Touch" h1 | Same issue | Add `text-gray-900 dark:text-white` |
| 1.2e | Blog — "Blog" h1 | Same issue | Add `text-gray-900 dark:text-white` |
| 1.2f | Projects — "Projects" h1 | Same issue | Add `text-gray-900 dark:text-white` |
| 1.2g | All section h2s across all pages | Audit each | Ensure all h2 headings have proper dark mode text classes |

**Systematic approach:** Search all `.vue` files for `<h1` and `<h2` tags. For each, verify the class includes an explicit `dark:text-white` or `dark:text-gray-100` class. If not, add it.

**Acceptance Criteria:**
- All headings are clearly readable in both light and dark mode
- Verified on: Homepage, About, Skills, Projects, Blog, Contact
- No heading text has contrast ratio below 4.5:1 in either mode

### 4.3 Bug Fix: Desktop Navigation Not Showing

**Root Cause Analysis:**
`components/AppHeader.vue` uses `hidden md:flex` for desktop nav (line 14). This should show nav links at 768px+. If it's not working in production, possible causes:
1. Tailwind CSS PurgeCSS is removing `md:flex` because it doesn't detect usage
2. A more specific CSS rule is overriding it
3. The `nuxt.config.ts` Tailwind config isn't generating responsive variants correctly

**Files to modify:** `components/AppHeader.vue`, possibly `tailwind.config.js` or `nuxt.config.ts`

**Debugging steps:**
1. Run `npm run dev` locally and check if desktop nav shows at 768px+ — if yes, it's a build issue
2. If not, inspect the element and check computed styles for the desktop nav `div`
3. Check if `tailwind.config.js` `content` array includes all `.vue` files: should have `'./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue'` etc.
4. Check if `@nuxtjs/tailwindcss` module config has any overrides that might break responsive utilities

**Changes (contingent on diagnosis):**

| # | Scenario | Fix |
|---|----------|-----|
| 1.3a | PurgeCSS issue | Ensure `tailwind.config.js` `content` array covers all template files. Add explicit safelist if needed: `safelist: ['md:flex', 'md:hidden']` |
| 1.3b | CSS override | Inspect and fix specificity. Possibly move from `hidden md:flex` to explicit `flex` with `@screen md` |
| 1.3c | Build config | Check `nuxt.config.ts` tailwind module options. Ensure no `purge` or `content` overrides that exclude responsive classes |

**Acceptance Criteria:**
- At viewport 768px+, full navigation links (About Me, Skills, Projects, Blog, Contact) + ThemeToggle are visible
- At viewport < 768px, hamburger menu is shown and works
- Verified in both `dev` server and `generate` + static serve

### 4.4 Quick Fixes (Small But Important)

| # | Task | File | Change | Acceptance |
|---|------|------|--------|------------|
| 1.4a | Fix hero image alt text | `pages/index.vue` line 58 | Change `alt="Your Name"` → `alt="Ayush Jaipuriar - AI Agent Engineer"` | Alt text correct in DOM |
| 1.4b | Fix project detail `useHead` placeholder | `pages/projects/[slug].vue` line 268 | Change `Your Name` → `Ayush Jaipuriar` (in both title expressions) | Browser tab shows "Ayush Jaipuriar" not "Your Name" |
| 1.4c | Fix copyright year | `components/AppFooter.vue` | Replace any hardcoded year with `{{ new Date().getFullYear() }}` in template | Footer shows current year dynamically on every page |

### 4.5 Phase 1 Checklist

- [x] **Bug 1 — Projects page renders:** `v-tooltip` removed, GitHub Calendar wrapped in `<ClientOnly>` with error handling
- [x] **Bug 2 — Dark mode contrast:** All h1/h2 headings across all pages have proper `dark:text-*` classes
- [x] **Bug 3 — Desktop nav:** Navigation links visible at desktop width in both dev and production build
- [x] **Quick fix:** Hero image alt text = "Ayush Jaipuriar - AI Agent Engineer"
- [x] **Quick fix:** Project detail page shows "Ayush Jaipuriar" in browser tab, not "Your Name"
- [x] **Quick fix:** Footer shows dynamic current year on all pages
- [x] All pages tested in both light mode and dark mode (Chrome DevTools toggle)
- [ ] All pages tested at mobile (375px), tablet (768px), and desktop (1440px) widths
- [x] `npm run generate` completes without errors
- [x] Static output served locally (`npx serve .output/public`) — all pages functional

**Implementation Notes (Feb 10, 2026):**
- Updated `pages/projects/index.vue` to remove `v-tooltip`, wrap the GitHub calendar in `<ClientOnly>`, and load the calendar script from `onMounted()` with fallback states (`calendarLoaded` / `calendarError`).
- Updated heading contrast classes in `pages/about.vue`, `pages/skills.vue`, `pages/contact.vue`, `pages/blog/index.vue`, `pages/blog/[...slug].vue`, and `pages/projects/[slug].vue` to include explicit dark-mode-safe text classes.
- Quick fixes completed in `pages/index.vue` (hero image alt text) and `pages/projects/[slug].vue` (`useHead` title now uses `Ayush Jaipuriar`).
- Verified static generation via `yarn generate` and static preview via `npx serve .output/public`.
- **Next step:** final manual responsive pass at 375px/768px/1440px in local browser, then proceed to Phase 2 after approval.

---

## 5. Phase 2 — Core Positioning & Homepage Overhaul

**Goal:** Transform the homepage from a minimal hero into a dynamic hub that communicates Ayush's value proposition within 5 seconds.

### 5.1 Homepage Layout Specification (Top to Bottom)

#### Section 1: Hero

**File:** `pages/index.vue` — rewrite the existing hero `<section>`

| Element | Content | Spec |
|---------|---------|------|
| **Available badge** | "Open to Opportunities" | Pulsing green dot + text. Positioned above the name. Component: `AvailableBadge.vue` |
| **Name** | "Ayush Jaipuriar" | Same gradient text treatment as current, but larger (5xl→6xl on desktop) |
| **Primary tagline** | "AI Agent Engineer & Senior Full-Stack Developer" | `text-2xl md:text-3xl`, `text-gray-600 dark:text-gray-300` |
| **Secondary tagline** | "Building production AI systems at Fortune 500 scale. 6+ years shipping enterprise fintech." | `text-lg`, `text-gray-500 dark:text-gray-400`, `max-w-xl` |
| **CTA: Primary** | "See My Work" → links to `/projects` | Blue filled button (`bg-apple-blue-600`) with right arrow icon |
| **CTA: Secondary** | "Download Resume" → downloads PDF | Outlined button with download icon. Links to `/resume/Ayush_Jaipuriar_Resume.pdf` with `download` attribute |
| **Photo** | Current `ayush-jaipuriar.jpeg` | Circular frame with animated gradient border ring. Same size as current (w-64/h-64 → w-80/h-80 on desktop) |
| **Background** | Animated gradient mesh (replaces static blur circles) | Implemented in Phase 8. For now, keep current background but fix contrast |

**Data needed from owner:** None — all content is defined.

#### Section 2: Key Metrics Bar

**New component:** `components/MetricsBar.vue`

| Metric | Value | Icon |
|--------|-------|------|
| Years Experience | "6+" | `heroicons:clock` |
| Scale of Systems | "TB-Scale" | `heroicons:server-stack` |
| Enterprise Clients | "30+" | `heroicons:building-office` |
| Performance Gains | "92%" | `heroicons:bolt` |
| AI Agents | "Production" | `heroicons:cpu-chip` |

**Spec:**
- Horizontal row of 5 metric cards
- Each: icon (24px, `text-apple-blue-600`) + large number (2xl, bold) + small label (sm, gray)
- Cards: `bg-white/50 dark:bg-gray-800/50 backdrop-blur` with subtle border
- Mobile: wraps into 2-3 columns grid
- Numbers animate (count up from 0) when scrolled into view — uses `useCounter` composable (Phase 8). For Phase 2, static numbers are fine.

#### Section 3: Featured Projects

**New component:** `components/FeaturedProjects.vue`

**Spec:**
- Section heading: "Featured Work" with subtitle "Selected case studies from my professional career."
- Grid: 3 columns on desktop, 1 on mobile
- Shows top 3-4 featured projects (data comes from a shared `data/projects.ts` file, filtered by `featured: true`)
- Recommended featured set: AI Agents at TransUnion, TB-Scale Search, Accountability Agent (personal star project), Enterprise Parsing Engine
- Each card: image (aspect-video), title, 1-line description, tech tags (top 3-4), "Read Case Study →" or "View Project →" link
- Uses a new `CaseStudyCard.vue` component (built in Phase 3)
- "View All Projects" link at bottom → `/projects`

**For Phase 2:** Use placeholder case study data with real titles. Case study content is written in Phase 3.

#### Section 4: Skills Snapshot

**New component:** `components/SkillsSnapshot.vue`

**Spec:**
- Section heading: "Core Expertise"
- Horizontal row of 8-10 top skills with icons
- Each skill: icon (32px) + name (sm) in a pill/badge shape
- Skills to feature: LangChain, Java, Spring Boot, Python, PostgreSQL, AWS, Docker, React, TypeScript, Kubernetes
- "See All Skills →" link at bottom → `/skills`
- Mobile: wraps into 2-row grid

#### Section 5: Latest Blog Posts

**New component:** `components/LatestPosts.vue`

**Spec:**
- Section heading: "Latest Insights"
- Uses `queryContent('/blog').sort({ date: -1 }).limit(3).find()` to get latest 3 posts
- If no posts exist, shows: "Blog posts coming soon. In the meantime, check out my projects." with link to `/projects`
- Each post card: date + title + excerpt + "Read more →" link
- "View All Posts →" link at bottom → `/blog`

#### Section 6: Connect CTA

**New component:** `components/ConnectCTA.vue`

**Spec:**
- Background: subtle gradient or different shade to visually separate
- Heading: "Let's Build Something Together"
- Subtext: "I'm currently exploring Senior SWE and AI Engineering roles. Based in Hyderabad, open to remote or relocation."
- CTA button: "Get In Touch" → `/contact`
- Social links row: GitHub, LinkedIn icons

### 5.2 Header Updates

**File:** `components/AppHeader.vue`

| # | Change | Details |
|---|--------|---------|
| 2.1 | Add "Open to Opportunities" badge | Small green pulsing dot + "Open to Work" text, visible on desktop only (`hidden md:inline-flex`). Positioned between logo and nav links. |
| 2.2 | Add Resume download link to nav | Add `{ name: 'Resume', href: '/resume/Ayush_Jaipuriar_Resume.pdf', external: true }` to navigation items, with a download icon. Uses native `<a>` tag with `download` attribute instead of `NuxtLink`. |
| 2.3 | Update navigation order | Reorder: About Me, Skills, Projects, Blog, Resume (download), Contact |

### 5.3 Footer Updates

**File:** `components/AppFooter.vue`

| # | Change | Details |
|---|--------|---------|
| 2.4 | Add email to footer | `jaipuriar.ayush@gmail.com` as a clickable `mailto:` link |
| 2.5 | Add quick nav links | About, Projects, Blog, Contact — as text links |
| 2.6 | Add "Open to Opportunities" note | "Currently exploring Senior SWE & AI Engineering roles" — small text |
| 2.7 | Dynamic copyright year | `{{ new Date().getFullYear() }}` (if not already done in Phase 1) |

### 5.4 Resume PDF

**Decision:** Use the current `Profile.pdf` from `.cursor/rules/` as-is for initial launch. Owner will provide an updated version later.

| # | Task | Details |
|---|------|---------|
| 2.8 | Copy resume PDF to `public/resume/` | Create `public/resume/` directory. Copy `.cursor/rules/Profile.pdf` as `Ayush_Jaipuriar_Resume.pdf`. This makes it accessible at `/Personal-Portfolio/resume/Ayush_Jaipuriar_Resume.pdf` in production. |

### 5.5 Shared Data File

**New file:** `data/projects.ts`

**Purpose:** Single source of truth for all project data, used by homepage featured section, projects index, and project detail pages. Eliminates the current problem of duplicate, mismatched project arrays across files.

```typescript
// data/projects.ts — TypeScript interface + data
export interface Project {
  id: number
  title: string
  slug: string
  type: 'professional' | 'personal'
  company?: string
  description: string
  shortDescription: string  // 1 line for cards
  image: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
  featured: boolean
  caseStudy?: {            // Only for professional projects
    problem: string
    architecture: string
    role: string
    approach: string
    results: string[]
    learnings: string
    gallery?: string[]
  }
}
```

This file is populated with real data in Phase 3.

### 5.6 Phase 2 Checklist

- [x] Homepage hero rewritten: new tagline, new CTAs ("See My Work" + "Download Resume")
- [x] `AvailableBadge.vue` component created and visible in hero
- [x] `MetricsBar.vue` component created with 5 metrics (static numbers for now)
- [x] `FeaturedProjects.vue` component created (placeholder data OK, real data in Phase 3)
- [x] `SkillsSnapshot.vue` component created with top 8-10 skills and icons
- [x] `LatestPosts.vue` component created (graceful empty state if no blog posts)
- [x] `ConnectCTA.vue` component created with availability messaging
- [x] Header updated: "Open to Work" badge, Resume download link, reordered nav
- [x] Footer updated: email, quick nav, availability note, dynamic year
- [x] `public/resume/Ayush_Jaipuriar_Resume.pdf` exists and is downloadable
- [x] `data/projects.ts` created with TypeScript interface (data filled in Phase 3)
- [x] Homepage tested in light/dark mode at mobile/tablet/desktop
- [x] All internal links work (no 404s)
- [x] "Download Resume" initiates browser download of the PDF

**Implementation Notes (Feb 10, 2026):**
- Rebuilt `pages/index.vue` into a six-section landing flow: hero, metrics, featured projects, skills snapshot, latest posts, and connect CTA.
- Added new homepage components: `components/AvailableBadge.vue`, `components/MetricsBar.vue`, `components/FeaturedProjects.vue`, `components/SkillsSnapshot.vue`, `components/LatestPosts.vue`, and `components/ConnectCTA.vue`.
- Added shared project data model in `data/projects.ts` and wired `FeaturedProjects` to this single source of truth.
- Updated `components/AppHeader.vue` (open-to-work badge, nav reorder, resume download link) and `components/AppFooter.vue` (email, quick links, availability note, dynamic year).
- Fixed slug compatibility by refactoring `pages/projects/[slug].vue` to consume `data/projects.ts`, preventing homepage featured cards from routing to "Project Not Found".
- Fixed Nuxt page-root warning in `pages/index.vue` and validated clean diagnostics with `ReadLints`.
- Made resume links deployment-safe for GitHub Pages subpath by using `runtimeConfig.app.baseURL` in `pages/index.vue`, `components/AppHeader.vue`, and `components/ConnectCTA.vue`.
- Verification completed: browser checks (home/about/skills/projects/blog/contact and project slug), resume link attributes (`href` + `download`), and successful static generation via `yarn generate` (50 prerendered routes).
- **Next step:** Phase 3 — rewrite `pages/projects/index.vue` and deepen case-study presentation components.

---

## 6. Phase 3 — Projects & Case Studies

**Goal:** Replace learning repos and fake placeholder data with real professional case studies and personal projects.

### 6.1 Project Data Population

**File:** `data/projects.ts`

**Professional Case Studies (owner input received):**

| # | Project | Details (from owner) |
|---|---------|----------------------|
| 1 | **AI Agents for Research Perspective** | Agents perform: NLP-to-SQL conversion, NLP-based searches, Neo4j knowledge graph construction of user data assets, recommended chart generation and auto-building dashboards on Apache Superset, RAG on user chart data for Q&A, anomaly detection and missing pattern detection on user data. Runs on LangGraph using supervisor pattern and orchestration pattern. Deployed to production using MLFlow. |
| 2 | **TB-Scale Search Product** | Multiple TBs of data, under 7 second search latency. Utilizes DuckDB, Google Cloud Dataproc, and Trino query engines. Dynamic scaling of search pods based on query data volume. Geofencing and user location search on proprietary datasets. |
| 3 | **Enterprise Parsing Engine** (HighRadius) | BAI/MT940/CSV financial file parsing for 30+ enterprise clients. Configurable rule engine feeding into cash reconciliation features. 92% API load time reduction, 62% parsing time reduction via SQL tuning and code refactoring. |

**Personal Projects (data available from GitHub):**

| # | Project | Data Source |
|---|---------|-------------|
| 4 | **Accountability Agent** (STAR PROJECT) | GitHub (public): Production-grade AI accountability Telegram bot. Multi-agent supervisor architecture with 5 specialized agents (CheckIn, Query, Emotional, Pattern Detection, Reporting). Python 3.11+, FastAPI, Google Gemini 2.5 Flash, Firestore, GCP Cloud Run, Docker. Features: 9 pattern detection types, gamification with 15+ achievements, streak tracking, CBT-based emotional support, weekly AI reports with 4 visualization graphs, accountability partners, data export (CSV/JSON/PDF), leaderboard. Custom multi-agent routing (no LangChain dependency). GitHub: https://github.com/ayush-jaipuriar/accountability_agent |
| 5 | **OnlyYours** | GitHub: Full-stack app — React Native + Spring Boot + PostgreSQL + Google Auth + JWT + Flyway migrations. Client-server architecture with REST API. In progress. GitHub: https://github.com/ayush-jaipuriar/only-yours |
| 6 | **Learning Camunda** | GitHub: Camunda BPM + Spring Boot + Gradle + PostgreSQL |
| 7 | **Learning LangChain** | GitHub: Python + LangChain + OpenAI + FAISS |

### 6.2 Project Index Page Rewrite

**File:** `pages/projects/index.vue` — complete rewrite

**Layout Spec:**

```
[Page Header: "My Work" + subtitle]

[Section: "Professional Case Studies"]
  [CaseStudyCard x3 — large cards, one per row on mobile, 2-col on desktop]
  
[Section: "Personal Projects"]  
  [ProjectCard x3-4 — smaller cards, grid 1/2/3 cols]

[Section: GitHub Activity — Optional]
  [GitHub stats badge OR contribution graph — only if it works reliably]
  [Link to GitHub profile]
```

**Key changes from current:**
- Import projects from shared `data/projects.ts` instead of inline array
- Remove `v-tooltip` entirely
- Split into "Professional" and "Personal" sections using `project.type` filter
- Professional projects link to `/projects/[slug]` (case study detail page)
- Personal projects link to GitHub directly + optional detail page
- Make GitHub Calendar optional/removable — wrap in `<ClientOnly>` with graceful fallback

### 6.3 Case Study Detail Page Rewrite

**File:** `pages/projects/[slug].vue` — complete rewrite

**Layout Spec:**

```
[Back link → /projects]

[Hero: Project title + tech tags + links (GitHub/Live Demo if applicable)]
[Hero image or architecture diagram placeholder]

[Section: "The Challenge"]
  [Rich text: What problem was being solved]
  
[Section: "Architecture & Approach"]
  [Rich text: Technical decisions, system design]
  [Optional: Simple architecture diagram image]

[Section: "My Role & Contributions"]
  [Rich text: What specifically I did]

[Section: "Key Technical Decisions"]
  [Bullet points or cards: Major technical decisions and why]

[Section: "Results & Impact"]
  [Metric cards: e.g., "92% API load time reduction", "30+ enterprise clients"]
  [Rich text: Outcomes description]

[Section: "Lessons Learned"]
  [Rich text: Reflections]

[Navigation: Previous/Next project links — dynamically generated from data/projects.ts]
```

**Key changes from current:**
- Import projects from shared `data/projects.ts` instead of inline array with fake data
- Replace ALL placeholder text with real content from `project.caseStudy` object
- Dynamic previous/next navigation based on actual project list (not hardcoded slugs)
- `useHead` title uses `project.title + " | Ayush Jaipuriar"` not `"Your Name"`
- Remove hardcoded gallery Unsplash images — use project-specific images or omit section
- Results section uses styled metric cards, not plain text

### 6.4 New Component: CaseStudyCard.vue

**Spec:**
- Larger than `ProjectCard.vue` — designed for prominent display
- Horizontal layout on desktop (image left, content right), stacked on mobile
- Shows: image, title, company name, 1-line description, top 4 tech tags, "Read Case Study →" link
- Subtle left border accent in `apple-blue-600`
- Hover: slight lift shadow

### 6.5 Update Existing ProjectCard.vue

**File:** `components/ProjectCard.vue`

| # | Change | Details |
|---|--------|---------|
| 3.5a | Add `NuxtLink` to detail page | Card title/image should link to `/projects/${project.slug}` for professional projects |
| 3.5b | Add project type indicator | Small "Case Study" or "Personal" badge in top-right corner of card |
| 3.5c | Differentiate link behavior | Professional projects: "Read Case Study" button. Personal projects: "View on GitHub" button |

### 6.6 Project Images

**Current:** Generic Unsplash stock photos.  
**Target:** Project-specific images — ideally screenshots or architecture diagrams.

| Project | Image Strategy |
|---------|---------------|
| AI Agents | Abstract AI/neural network illustration or simplified architecture diagram |
| TB-Scale Search | Data/search visualization illustration |
| Enterprise Parsing | Financial data/document processing illustration |
| Accountability Agent | Telegram bot screenshot or the architecture diagram from README (Supervisor Agent → 5 specialized agents flow) |
| OnlyYours | App screenshot (if available) or mobile app illustration |
| Learning Camunda | Camunda BPM process diagram screenshot |
| Learning LangChain | LLM/AI illustration |

**Action:** For Phase 3, use high-quality relevant Unsplash images with proper credit. Replace with actual screenshots/diagrams as they become available.

**Important:** Download images locally into `public/images/projects/` rather than hotlinking Unsplash URLs. This improves performance and avoids external dependency.

### 6.7 Phase 3 Checklist

- [x] `data/projects.ts` populated with all 7+ projects (3 professional case studies + 4+ personal projects including Accountability Agent as star project)
- [x] Professional projects have complete `caseStudy` objects with real content (owner details provided — see section 6.1)
- [x] `pages/projects/index.vue` completely rewritten — imports from `data/projects.ts`, no `v-tooltip`, split "Professional" / "Personal" sections
- [x] `pages/projects/[slug].vue` completely rewritten — imports from `data/projects.ts`, real content, dynamic prev/next, correct `useHead`
- [x] `CaseStudyCard.vue` component created
- [x] `ProjectCard.vue` updated with NuxtLink, type indicator, differentiated buttons
- [x] GitHub Calendar wrapped in `<ClientOnly>` or replaced with simpler GitHub badge
- [x] Project images downloaded to `public/images/projects/` (no external hotlinking)
- [x] Every project detail page renders with real content (no placeholder text)
- [x] Previous/Next navigation links are dynamically generated and all work
- [x] Tested in light/dark mode, mobile/desktop

**Implementation Notes (Feb 10, 2026):**
- Expanded `data/projects.ts` with richer case-study schema (`keyTechnicalDecisions`, `impactMetrics`, `outcome`) and populated all 7 projects, including complete professional case-study content from owner-provided details.
- Downloaded project imagery into `public/images/projects/` and switched project image references from external URLs to local paths for reliability and performance.
- Added new `components/CaseStudyCard.vue` with desktop-horizontal layout, left accent border, company metadata, and focused "Read Case Study" CTA.
- Reworked `components/ProjectCard.vue` to include: type badges ("Case Study" / "Personal"), conditional link behavior, professional-project detail linking, and differentiated CTA labels.
- Completely rewrote `pages/projects/index.vue`: now imports project data, separates "Professional Case Studies" and "Personal Projects", removes legacy GitHub calendar script complexity, and uses a simpler GitHub profile activity block.
- Rebuilt `pages/projects/[slug].vue` as a structured case-study template with required sections: The Challenge, Architecture & Approach, My Role & Contributions, Key Technical Decisions, Results & Impact (metric cards), and Lessons Learned.
- Implemented dynamic fallback detail content for personal projects so all slug pages render meaningful real text without placeholders.
- Verified dynamic previous/next navigation using `getAdjacentProjects(...)` from `data/projects.ts`.
- Validation completed: lint checks clean via `ReadLints`, route checks for `/projects` and multiple slug pages, responsive passes (375/768/1440), dark-mode toggle verification, and successful static generation via `yarn generate` (50 prerendered routes).
- **Next step:** Phase 4 — About page rewrite with AI-agent-first narrative, career timeline component, and quantified achievement cards.

---

## 7. Phase 4 — About Page Rewrite

**Goal:** Transform from a resume text dump into visual storytelling with updated TransUnion description.

### 7.1 Content Updates

**File:** `pages/about.vue`

| # | Section | Current Content | New Content |
|---|---------|-----------------|-------------|
| 4.1 | TransUnion role title | "Software Developer" | "AI Agent Engineer & Software Developer" |
| 4.2 | TransUnion description | "Key Developer in the OneTru Research Perspective and CIBIL Dispute Resolution Platform Team..." | Complete rewrite: Two sub-sections: **(a) AI Agent Engineering (Current):** Leading the Insights AI Agent Team. Building production agents that perform NLP-to-SQL conversion, NLP-based searches, Neo4j knowledge graph construction, auto-build dashboards on Apache Superset, RAG-based Q&A on chart data, anomaly detection and missing pattern detection. LangGraph orchestration using supervisor and orchestration patterns. Deployed agents to production with MLFlow. Uses cutting-edge AI coding tools (Opus 4.6, Codex 5.3, Claude Code with subagents and hooks). **(b) Search Product Development (Previous):** Built TB-scale search product with under 7 second latency. Utilizes DuckDB, Google Cloud Dataproc, and Trino engines. Dynamic scaling of search pods. Geofencing and user location search on proprietary datasets. |
| 4.3 | Champ Award | Listed generically | Move to TransUnion section. Update: "Won the TransUnion Champ Award (Jan 2025) for work on Research Perspective and CIBIL Dispute Resolution Platform" |
| 4.4 | Education activities | Not listed | Add "Activities: KIIT ECELL, KodeRunners" |
| 4.5 | Summary paragraph | Generic "highly motivated..." | Rewrite to lead with AI agent engineering narrative. Emphasize the trajectory from full-stack → enterprise systems → AI engineering. |
| 4.6 | Technical expertise bullets | Current list | Reorder: AI/ML first (LangChain, LangGraph, MLFlow, LLMOps, RAG), then Backend, then Frontend, then DevOps, then Tools |

### 7.2 New Component: Career Timeline

**New file:** `components/CareerTimeline.vue`

**Spec:**
- Vertical timeline with alternating left/right cards (centered line on desktop, left-aligned on mobile)
- Each entry: date range, role title, company, 1-2 line description, tech tag pills
- Entries (top = most recent):
  1. **2024–Present:** AI Agent Engineer, TransUnion — "Building production AI agents with LangChain/LangGraph"
  2. **2024:** Software Developer, TransUnion — "TB-scale search product with geofencing"
  3. **2023–2024:** Associate Software Engineer II, HighRadius — "Enterprise parsing engines, 92% API optimization"
  4. **2021–2023:** Associate Software Engineer, HighRadius — "Account Status, Cash Position Worksheet"
  5. **2020–2021:** Software Engineer Intern, HighRadius — "Web scraping agents for 15+ clients"
  6. **2020:** Summer Trainee, HighRadius — "ML-powered invoice management app"
  7. **2017–2021:** BTech CS, KIIT Bhubaneswar
- Each card animates in (fade + slide) when scrolled into view using `v-motion` or Intersection Observer
- Active/current role has a pulsing indicator

### 7.3 Achievement Highlight Cards

**Spec:** 3-4 styled cards inline in the About page, showing quantified achievements:

| Metric | Value | Context |
|--------|-------|---------|
| API Optimization | 92% | "Reduced API load time for enterprise parsing module" |
| Enterprise Clients | 30+ | "Parsing agents serving 30+ financial institutions" |
| Automated Tests | 50+ | "JUnit and JMeter test automation across key modules" |
| Production AI Agents | Active | "Building and deploying AI agents with LangChain/LangGraph at TransUnion" |

### 7.4 "What Drives Me" Section

Add a brief personal section (3-4 sentences) after the professional content. Content based on owner input:

> **What Drives Me**
>
> I'm obsessed with AI — building AI agents, following the latest breakthroughs, and pushing the boundaries of what's possible with LLMs in production. My career has given me the rare combination of deep enterprise engineering experience at both a unicorn fintech startup (HighRadius) and a major Fortune 500 company (TransUnion), both deeply rooted in enterprise tech. I thrive at the intersection of building robust, scalable systems and experimenting with cutting-edge AI. Whether it's optimizing a TB-scale search engine or orchestrating multi-agent LLM workflows, I'm driven by the challenge of shipping production systems that make a real impact.

### 7.5 Phase 4 Checklist

- [x] TransUnion role title updated to reflect AI Agent Engineering
- [x] TransUnion description completely rewritten with AI agent + search product details
- [x] Champ Award correctly attributed to TransUnion with description
- [x] Education section includes KIIT ECELL and KodeRunners activities
- [x] Summary paragraph rewritten to lead with AI narrative
- [x] Technical expertise reordered: AI/ML first
- [x] `CareerTimeline.vue` component created with all 7 career entries
- [x] Timeline animates on scroll
- [x] Achievement highlight cards added (92%, 30+, 50+, Production AI)
- [x] "What Drives Me" section added (content provided — see section 7.4)
- [x] Resume download button added to About page
- [x] Tested in light/dark mode, mobile/desktop

**Implementation Notes (Feb 11, 2026):**
- Rewrote `pages/about.vue` into a storytelling layout with stronger information hierarchy: profile + resume CTA, AI-first summary, explicit TransUnion split section, quantified impact cards, timeline section, education, certifications, and "What Drives Me".
- Added explicit TransUnion narrative with two focused subsections:
  - **AI Agent Engineering (Current):** NLP-to-SQL, NLP search, Neo4j knowledge graph workflows, Superset dashboard generation, RAG Q&A, anomaly and missing-pattern detection, plus LangGraph orchestration and MLFlow deployment.
  - **Search Product Development (Previous):** TB-scale search architecture with sub-7-second latency using DuckDB, Google Cloud Dataproc, and Trino, including dynamic pod scaling and geofencing use cases.
- Moved and clarified recognition inside the TransUnion context: "Champ Award (Jan 2025) for work on Research Perspective and CIBIL Dispute Resolution Platform".
- Reordered technical expertise to match spec intent: **AI/ML -> Backend -> Frontend -> DevOps/Cloud -> Tools**.
- Created new `components/CareerTimeline.vue` with all 7 entries, mobile-left/desktop-centered timeline structure, alternating desktop card alignment, active-role pulsing indicator, and per-entry `v-motion` fade + slide animation (`:initial` + `:visible-once`).
- Added achievement cards in `pages/about.vue` with value + metric + supporting context copy:
  - `92%` API Optimization
  - `30+` Enterprise Clients
  - `50+` Automated Tests
  - `Active` Production AI Agents
- Updated education content to include activities ("KIIT ECELL, KodeRunners") and preserved resume download with deployment-safe base URL via `useRuntimeConfig().app.baseURL`.
- Validation completed:
  - Lint checks (`ReadLints`) clean for `pages/about.vue` and `components/CareerTimeline.vue`.
  - Runtime checks on `/about` confirm correct title/meta, content rendering, link presence, and responsive navigation behavior.
  - Theme toggle and mobile/desktop viewport checks executed via browser automation.
  - Static generation succeeded via `yarn generate` with 50 prerendered routes including `/about`.
- Environment fix (non-source): removed accidental duplicated dependency artifacts in `node_modules` (files suffixed with ` 2`) that were causing Nuxt auto-import compilation failures. No tracked source code behavior was changed by this cleanup.
- Repository hygiene fix (non-source): removed invalid duplicate git refs (`refs/heads/main 2` and `refs/remotes/origin/main 2`) that caused `git push`/`git fsck` failures (`fatal: bad object ...`). Branch refs are now healthy.
- **Next step:** Phase 5 - Skills page overhaul (`data/skills.ts`, tiered skill modeling, and strategic skill presentation).

---

## 8. Phase 5 — Skills Page Overhaul

**Goal:** Transform from a flat list of 60+ equally-weighted skills into a strategic presentation highlighting core strengths.

### 8.1 Skill Data Restructure

**New file:** `data/skills.ts`

```typescript
export interface Skill {
  name: string
  icon?: string         // icon identifier for nuxt-icon (e.g., 'logos:java', 'logos:python')
  tier: 'core' | 'proficient' | 'familiar'
  category: string
  context?: string      // e.g., "Production AI agents, RAG, multi-agent orchestration"
  yearsOfExperience?: number
  usedProfessionally: boolean
}
```

### 8.2 Tiered Skill Categories

**Tier 1 — "Core Expertise" (featured prominently, large cards with context):**

| Skill | Icon | Context | Years |
|-------|------|---------|-------|
| LangChain / LangGraph | `simple-icons:langchain` | Production AI agents, RAG, multi-agent orchestration | 1+ |
| Java (8–17) | `logos:java` | Enterprise backend, Spring ecosystem, 6+ years | 6+ |
| Spring Boot | `logos:spring-icon` | Microservices, REST APIs, enterprise applications | 5+ |
| Python | `logos:python` | AI/ML, data pipelines, automation | 3+ |
| PostgreSQL | `logos:postgresql` | TB-scale datasets, query optimization | 4+ |
| AWS | `logos:aws` | EKS, cloud infrastructure, deployment | 3+ |
| Docker / Kubernetes | `logos:docker-icon` | Container orchestration, microservices deployment | 3+ |
| MLFlow | — | Model lifecycle, experiment tracking, LLMOps | 1+ |

**Tier 2 — "Proficient" (medium cards with brief context):**

React, React Native, Vue.js, Node.js, Redux, TypeScript, Redis, MySQL, MongoDB, Hibernate, JUnit/JMeter, Jenkins CI/CD, Git/GitHub, Linux/BASH, Apache Superset

**Tier 3 — "Familiar / Exploring" (smaller pills, no individual context):**

ExtJS, Struts, Expo, Firebase, GCP, Crossfilter, Highcharts, Pandas, NumPy, Matplotlib, DialogFlow, Confluence, JIRA, VS Code, Eclipse, IntelliJ, Postman

**New: "AI & ML" Section (featured separately at the top):**

| Skill | Context |
|-------|---------|
| LangChain / LangGraph | Production AI agent orchestration |
| MLFlow | Model lifecycle management, LLMOps |
| RAG Pipelines | Retrieval-augmented generation for enterprise data |
| OpenAI API | LLM integration, prompt engineering |
| FAISS | Vector similarity search |
| Claude Code | AI-augmented development with subagents and hooks |
| LLMOps | Production deployment, monitoring, iteration |

### 8.3 Page Layout Spec

```
[Page Header: "Skills & Expertise" + subtitle]

[Section: "AI & Machine Learning" — highlighted with accent background]
  [Large cards with icon + name + context for each AI skill]

[Section: "Core Expertise"]
  [Large cards with icon + name + context + years badge for each core skill]

[Section: "Proficient"]
  [Medium cards in grid with icon + name for each]

[Section: "Familiar"]
  [Small pill badges in flex-wrap row]

[Section: "Concepts & Methodologies"]
  [Tags: Microservices, REST APIs, CI/CD, Agile, Clean Code, etc.]

[Section: "Soft Skills"]
  [Tags or brief list]
```

### 8.4 Updated SkillItem Component

**File:** `components/SkillItem.vue` — needs to support tiers

Current component is minimal (32 lines). Needs:
- Icon display (using `nuxt-icon`)
- Context text (tier 1 and 2)
- Years badge (tier 1)
- Professional badge ("Used in Production" indicator)
- Different sizes for different tiers
- Staggered entrance animation

### 8.5 Phase 5 Checklist

- [x] `data/skills.ts` created with all skills categorized into tiers
- [x] "AI & Machine Learning" section prominently featured at top of page
- [x] Core Expertise skills displayed with icons, context, and years
- [x] Proficient skills in medium grid
- [x] Familiar skills as small pills
- [x] `SkillItem.vue` updated to support tier-based rendering
- [x] Icons render correctly for each skill (test `nuxt-icon` with logo identifiers)
- [x] Page tested in light/dark mode, mobile/desktop
- [x] Staggered entrance animations work on scroll

**Implementation Notes (Feb 11, 2026):**
- Added new typed skill source at `data/skills.ts` with tier-based modeling (`core` / `proficient` / `familiar`), category grouping, contextual descriptions, years of experience, and production-usage markers.
- Rebuilt `pages/skills.vue` into a data-driven architecture with explicit section hierarchy:
  - **AI & Machine Learning** (accent-highlighted top section)
  - **Core Expertise** (large cards with context + years + production badges)
  - **Proficient** (medium grid cards)
  - **Familiar & Exploring** (compact pill layout)
  - **Concepts & Methodologies** and **Soft Skills** (tag/grid presentation)
- Updated `components/SkillItem.vue` to support tier-based rendering in one reusable component, including conditional icon display, context text, years badge, and production indicator.
- Added `components/SectionHeading.vue` to standardize section title/subtitle/icon structure and reduce repeated markup in the page.
- Implemented staggered, scroll-triggered animations with `v-motion` using index-based delays across AI, core, proficient, and soft-skill sections.
- Validation completed:
  - Lint checks (`ReadLints`) are clean for `pages/skills.vue`, `components/SkillItem.vue`, `components/SectionHeading.vue`, and `data/skills.ts`.
  - Runtime checks on `/skills` confirm section rendering, AI-first ordering, and responsive behavior.
  - Theme toggle and mobile navigation behavior verified via browser automation.
  - Browser console shows no skill-page-specific errors during rendering.
  - Static generation succeeded via `yarn generate` with 50 prerendered routes including `/skills`.
- **Next step:** Phase 6 - Blog system rebuild (content cleanup, empty state, and reusable post template).

---

## 9. Phase 6 — Blog System Rebuild

**Goal:** Remove generic posts, set up clean blog infrastructure for future domain-specific content.

### 9.1 Content Cleanup

| # | Task | Details |
|---|------|---------|
| 6.1 | Delete `content/blog/1.sample-post.md` | Generic "Building a Portfolio" post |
| 6.2 | Delete `content/blog/2.modern-javascript-features.md` | Generic JS tutorial |
| 6.3 | Delete `content/blog/3.optimizing-website-performance.md` | Generic performance guide |

### 9.2 Blog Page Empty State

**File:** `pages/blog/index.vue`

When no posts exist, instead of showing nothing or an error, show:

```
[Page Header: "Blog" + subtitle "My thoughts on AI engineering, system design, and building at scale."]

[Empty State Card]
  Icon: document/pencil icon
  "Blog posts coming soon."
  "I'm writing about AI agent architectures, production LLMOps, and lessons from 
   6 years of enterprise engineering."
  Button: "See My Projects Instead →" → /projects
```

### 9.3 Blog Post Template

Create a template/example file for future posts:

**New file:** `content/blog/.template.md` (prefixed with `.` so Nuxt Content ignores it)

```markdown
---
title: "Post Title Here"
description: "Brief description for SEO and cards"
date: 2026-02-10
image: "/images/blog/post-slug.jpg"
categories:
  - ai-engineering
  - langchain
author: "Ayush Jaipuriar"
readingTime: 8
---

## Introduction

...

## Section 1

...

## Conclusion

...
```

### 9.4 First Blog Post (Confirmed — will draft during implementation)

Owner confirmed they will draft the first blog post during implementation with AI assistance for structuring.

**Suggested topic:** "Building Production AI Agents with LangChain and LangGraph — Lessons from the Trenches"

**Suggested outline:**
1. Why AI agents in enterprise settings differ from demos — reliability, cost, latency constraints
2. Architecture: LangGraph supervisor pattern and orchestration pattern in practice (drawing from TransUnion experience)
3. Practical agent types: NLP-to-SQL, knowledge graph builders, anomaly detectors, RAG Q&A
4. LLMOps with MLFlow: experiment tracking, model deployment, production monitoring
5. Tools that accelerate development: Claude Code (subagents, hooks), Opus 4.6, Codex 5.3, Cursor AI
6. Key takeaways and what's next for AI agents in enterprise

**Secondary blog post idea:** "Building an AI Accountability Agent: Multi-Agent Architecture from Scratch" — a deep dive into the accountability_agent project architecture (supervisor routing, 5 specialized agents, pattern detection, Gemini integration)

### 9.5 BlogPostItem Update

**File:** `components/BlogPostItem.vue`

Minor updates:
- Ensure dark mode styles work
- Update author name from any placeholder to "Ayush Jaipuriar"

### 9.6 Phase 6 Checklist

- [x] All 3 generic blog posts deleted from `content/blog/`
- [x] Blog page shows intentional empty state when no posts exist
- [x] Empty state has proper styling and links to Projects
- [x] Blog post template `.template.md` created for future use
- [x] First real blog post written and published (owner will draft during implementation — see section 9.4)
- [x] Blog page tested in light/dark mode
- [x] Category filters still work if posts exist
- [x] Pagination still works if enough posts exist

**Implementation Notes (Feb 11, 2026):**
- Deleted placeholder/generic blog content files:
  - `content/blog/1.sample-post.md`
  - `content/blog/2.modern-javascript-features.md`
  - `content/blog/3.optimizing-website-performance.md`
- Reworked `pages/blog/index.vue` with stronger, intent-driven messaging:
  - Updated subtitle to AI/system-design positioning
  - Updated SEO description copy to match portfolio narrative
  - Kept category filters and pagination behavior for future scale
  - Added a polished empty-state card with icon, explanatory copy, and CTA to `/projects`
  - Added category-aware empty-state behavior (clear filter + project CTA)
- Added reusable authoring template at `content/blog/.template.md` for future posts. File is intentionally prefixed with `.` so Nuxt Content ignores it while keeping it near real content.
- Published first real blog post:
  - `content/blog/1.building-production-ai-agents.md`
  - Topic: production AI agents with LangChain/LangGraph, supervisor orchestration, NLP-to-SQL, RAG, and MLFlow-based LLMOps
  - Includes categories (`ai-engineering`, `langchain`, `llmops`) and portfolio-aligned technical narrative.
- Updated `components/BlogPostItem.vue`:
  - Added explicit author rendering with fallback to `"Ayush Jaipuriar"`
  - Improved card treatment for light/dark visual consistency
  - Preserved category tags, reading-time metadata, and read-more interaction.
- Validation completed:
  - Lint checks (`ReadLints`) clean for `pages/blog/index.vue` and `components/BlogPostItem.vue`.
  - Runtime checks performed on `/blog` and `/blog/building-production-ai-agents`:
    - category filters render and apply
    - blog detail route renders with generated table of contents and metadata
    - theme toggle and mobile navigation behavior verified
  - Static generation succeeded via `yarn generate` with 42 prerendered routes, including:
    - `/blog`
    - `/blog/building-production-ai-agents`
  - Route count reduction from earlier phases is expected due removal of 3 generic posts and their payload routes.
- **Next step:** Phase 7 - Contact page form integration with Formspree and delivery-safe submit/error states.

---

## 10. Phase 7 — Contact Page & Form Integration

**Goal:** Make the contact form actually deliver messages.

### 10.1 Formspree Integration

**Service:** [Formspree](https://formspree.io) (free tier: 50 submissions/month)

**Setup Steps:**
1. Create Formspree account at formspree.io
2. Create a new form — get the form endpoint URL (format: `https://formspree.io/f/xxxxxxxx`)
3. Store the endpoint ID

**File:** `pages/contact.vue`

**Changes:**

| # | Change | Details |
|---|--------|---------|
| 7.1 | Replace simulated `setTimeout` submit | Replace with actual `fetch()` POST to Formspree endpoint |
| 7.2 | Handle success/error states properly | On success: show "Message sent!" with checkmark. On error: show "Something went wrong, please email me directly at jaipuriar.ayush@gmail.com" |
| 7.3 | Add honeypot field for spam protection | Formspree supports `_gotcha` hidden field for bot detection |
| 7.4 | Add loading state | Show spinner/disabled button while submitting |

**Form submission code spec:**

```javascript
const submitForm = async () => {
  isSubmitting.value = true
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        _gotcha: '' // honeypot
      })
    })
    if (response.ok) {
      isSuccess.value = true
      // Reset form
    } else {
      isError.value = true
    }
  } catch {
    isError.value = true
  } finally {
    isSubmitting.value = false
  }
}
```

### 10.2 Content Updates

| # | Change | Details |
|---|--------|---------|
| 7.5 | Add availability message | "I'm currently exploring Senior SWE and AI Engineering roles. Based in Hyderabad, open to Bengaluru, remote, or relocation." |
| 7.6 | Add response time note | "I typically respond within 24-48 hours" |
| ~~7.7~~ | ~~Calendly link~~ | **SKIPPED** — Owner confirmed no scheduling link needed. Just contact form and email. |

### 10.3 Phase 7 Checklist

- [x] Formspree account created and form endpoint obtained
- [x] Contact form submits to Formspree via `fetch()` POST
- [x] Success state shows confirmation message
- [x] Error state shows fallback email link
- [x] Loading/submitting state disables button and shows indicator
- [x] Honeypot field added for spam protection
- [ ] Test: submit form → message arrives in email inbox (owner-side inbox confirmation pending)
- [x] Availability message added to contact page
- [x] Response time note added
- [x] Tested in light/dark mode

**Implementation Notes (Feb 11, 2026):**
- Reworked `pages/contact.vue` from a simulated demo form to a production-like Formspree integration:
  - Replaced `setTimeout` submit simulation with real `fetch()` POST to `https://formspree.io/f/mojnjppk`
  - Added `Accept: application/json` and structured JSON payload (`name`, `email`, `_replyto`, `subject`, `message`, `_gotcha`)
  - Added built-in honeypot support via hidden `_gotcha` field for low-friction spam filtering
- Improved submit UX/state handling:
  - Loading state now disables submit and shows spinner (`Sending...`)
  - Success state renders dedicated confirmation panel with check icon and "Send another message" reset action
  - Error state renders clear fallback with direct email link (`mailto:jaipuriar.ayush@gmail.com`)
  - Form values are reset after successful submission
- Updated contact-page content and hierarchy to match portfolio positioning:
  - Added explicit availability banner for Senior SWE/AI Engineering role exploration
  - Added response-time commitment ("typically within 24-48 hours")
  - Tightened copy for clarity and professional tone across form + sidebar
- Validation completed:
  - Lint checks (`ReadLints`) clean for `pages/contact.vue`
  - Runtime checks completed on `/contact`:
    - Desktop: form fields, loading state, and success confirmation behavior verified
    - Dark mode: toggle state and readability verified
    - Mobile viewport: responsive layout and menu interaction verified
  - Live submission test to Formspree endpoint returned success UI state (`Message sent!`)
  - Static generation succeeded via `yarn generate` with 42 prerendered routes including `/contact` and `/Personal-Portfolio/contact`
- **Next step:** Phase 8 - Design "Wow Factor" pass (gradient mesh, scroll progress, counters, and interaction polish).

**Post-deployment hotfix (Feb 11, 2026): GitHub Pages image path regression**
- **Issue observed:** Project card and case-study images were broken on the deployed site (`ayush-jaipuriar.github.io/Personal-Portfolio`) even though files existed in `public/images/projects/`.
- **Root cause:** Image URLs were stored/rendered as root-relative paths (for example, `/images/projects/ai-agents.jpg`). On GitHub Pages project hosting, assets must be resolved under the repo base path (`/Personal-Portfolio/...`), so root-relative paths pointed to the wrong origin path.
- **Fix implemented:** Introduced baseURL-aware asset resolution and wired it across project and profile images:
  - New composable: `composables/useAssetPath.ts` (`toAssetPath()`)
  - Updated components/pages: `components/ProjectCard.vue`, `components/CaseStudyCard.vue`, `components/FeaturedProjects.vue`, `pages/projects/[slug].vue`, `pages/index.vue`, `pages/about.vue`, `components/BlogPostItem.vue`, `pages/blog/[...slug].vue`
- **Validation:**
  - Lint checks clean for all modified files.
  - Static build succeeded (`yarn generate`).
  - Generated HTML now contains baseURL-prefixed image sources (for example, `src="/Personal-Portfolio/images/projects/ai-agents.jpg"`) and no remaining unprefixed `src="/images/projects/..."`
  - Profile image sources are also baseURL-safe (`/Personal-Portfolio/ayush-jaipuriar.jpeg`).

---

## 11. Phase 8 — Design "Wow Factor" Pass

**Goal:** Elevate the visual design from "clean template" to "this developer cares about craft."

### 11.1 Animated Gradient Mesh Background

**New component:** `components/GradientMesh.vue`

**Spec:**
- 2-3 large, soft, animated gradient blobs (apple-blue, purple, teal)
- Positioned absolutely behind hero content
- Slow, organic movement animation (CSS `@keyframes` with `translate` and `scale`)
- Opacity: ~20-30% (subtle, not distracting)
- `filter: blur(80px)` for soft edges
- Respects `prefers-reduced-motion` — static if reduced motion enabled
- Used on: Homepage hero, optionally Contact page hero

**Replaces:** Current static `<div>` circles with `animate-pulse` in `pages/index.vue`

### 11.2 Scroll Progress Indicator

**New component:** `components/ScrollProgress.vue`

**Spec:**
- Thin bar (3px height) at the very top of the page, above the header
- Width = scroll percentage (0% at top, 100% at bottom)
- Color: `bg-gradient-to-r from-apple-blue-600 to-purple-600` (matches name gradient)
- Uses `@vueuse/core` `useScroll` or native scroll event listener
- Positioned `fixed top-0 left-0 z-[60]`

### 11.3 Counter Animations

**New composable:** `composables/useCounter.ts`

**Spec:**
- Input: target number, duration (ms), start trigger (boolean ref)
- Output: reactive current number (animates from 0 to target)
- Uses `requestAnimationFrame` with easing function
- Triggered when element is scrolled into view (using Intersection Observer)

**Usage:** `MetricsBar.vue` numbers, `CareerTimeline.vue` stats, About page achievement cards

### 11.4 Staggered Card Entrance Animations

**Approach:** Use `v-motion` (already installed via `@vueuse/motion`) with `:delay` prop

**Spec:**
- Each card in a grid gets `v-motion-fade-visible-once` with `:delay="index * 100"` (100ms stagger)
- Apply to: project cards, skill cards, blog post cards, metric cards
- Cards animate: opacity 0→1 + translateY 20px→0px over 400ms with ease-out

### 11.5 3D Tilt Hover Effect on Project Cards

**New composable or directive:** `composables/useTilt.ts`

**Spec:**
- On mousemove over a card: calculate cursor position relative to card center
- Apply CSS `transform: perspective(1000px) rotateX(Xdeg) rotateY(Ydeg)` where X and Y are ±5-8 degrees max
- On mouseleave: smoothly reset to `transform: none` with 300ms ease-out
- Add subtle box-shadow shift that follows the tilt direction
- Respects `prefers-reduced-motion`

**Apply to:** `CaseStudyCard.vue`, `ProjectCard.vue`

### 11.6 Dark Mode Glow Effects

**CSS additions to `assets/css/main.css` or Tailwind config:**

```css
/* Glow effect on gradient text in dark mode */
.dark .text-glow {
  text-shadow: 0 0 20px rgba(0, 122, 255, 0.3), 0 0 40px rgba(0, 122, 255, 0.1);
}

/* Glow effect on primary buttons in dark mode */
.dark .btn-glow {
  box-shadow: 0 0 15px rgba(0, 122, 255, 0.25);
}

/* Subtle glow on active nav link */
.dark .nav-glow {
  text-shadow: 0 0 10px rgba(0, 122, 255, 0.4);
}
```

**Apply to:** Hero name gradient text, primary CTA buttons, active nav links

### 11.7 Smooth Page Transitions

**File:** `app.vue` and/or `nuxt.config.ts`

**Current:** Simple opacity fade (`page-enter-active` / `page-leave-active` with `opacity 0.3s`)

**Upgrade:**
- Increase duration to 400ms
- Add subtle `translateY` movement (enter from bottom, exit to top) for a slide-fade effect
- Optionally explore View Transitions API for cross-fade between pages (progressive enhancement — works in Chrome/Edge, ignored in other browsers)

### 11.8 Profile Photo Enhancement

**File:** `pages/index.vue` (hero section)

**Spec:**
- Add animated gradient border ring around circular photo
- Border: 4px with animated gradient (apple-blue → purple → apple-blue, rotating)
- CSS `@keyframes` rotating `conic-gradient`
- Subtle scale-up (1.02) on hover with 300ms ease

### 11.9 Console Easter Egg

**File:** `app.vue` — add in `onMounted`

```javascript
onMounted(() => {
  console.log(
    '%c Hey there, curious developer! 👋',
    'color: #007aff; font-size: 16px; font-weight: bold;'
  )
  console.log(
    '%c I see you\'re inspecting my code. I like that.\n' +
    'Let\'s connect: jaipuriar.ayush@gmail.com\n' +
    'Or check out my GitHub: github.com/ayush-jaipuriar',
    'color: #6b7280; font-size: 12px;'
  )
})
```

### 11.10 Phase 8 Checklist

- [ ] `GradientMesh.vue` created and added to homepage hero (replaces static circles)
- [ ] `ScrollProgress.vue` created and visible at top of every page
- [ ] `useCounter.ts` composable created and animates MetricsBar numbers on scroll
- [ ] Staggered entrance animations on all card grids (projects, skills, blog, metrics)
- [ ] 3D tilt hover effect on project/case study cards
- [ ] Dark mode glow effects on gradient text and primary buttons
- [ ] Smooth page transitions upgraded (slide-fade, 400ms)
- [ ] Profile photo has animated gradient border ring
- [ ] Console Easter egg shows when DevTools opened
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Performance: no visible jank or frame drops during animations (60fps target)
- [ ] Tested on Chrome, Safari, Firefox — desktop and mobile

---

## 12. Phase 9 — SEO, Meta & Performance

**Goal:** Make the site discoverable and shareable.

### 12.1 Open Graph & Twitter Card Meta Tags

**File:** All page files + `nuxt.config.ts` for global defaults

**Global defaults (nuxt.config.ts `app.head`):**

```typescript
meta: [
  { property: 'og:site_name', content: 'Ayush Jaipuriar - Portfolio' },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: '/og-default.png' },  // Need to create this
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@ayush_jaipuriar' },  // If applicable
]
```

**Per-page overrides (in each page's `useHead`):**

| Page | `og:title` | `og:description` | `og:image` |
|------|-----------|-------------------|------------|
| Home | "Ayush Jaipuriar - AI Agent Engineer & Senior Full-Stack Developer" | "Building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech." | `/og-default.png` |
| About | "About Ayush Jaipuriar" | "AI Agent Engineer at TransUnion. 6+ years building enterprise systems..." | `/og-default.png` |
| Projects | "Projects - Ayush Jaipuriar" | "Case studies and projects from AI agents to TB-scale search systems" | `/og-default.png` |
| Blog | "Blog - Ayush Jaipuriar" | "Insights on AI engineering, system design, and building at scale" | `/og-default.png` |
| Blog Post | `[post.title] - Ayush Jaipuriar` | `[post.description]` | `[post.image]` or default |

**Action:** Create a `public/og-default.png` image (1200x630px) with name, title, and branding.

### 12.2 Structured Data (JSON-LD)

**File:** `nuxt.config.ts` or `app.vue`

Add Person schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayush Jaipuriar",
  "jobTitle": "AI Agent Engineer & Senior Full-Stack Developer",
  "worksFor": { "@type": "Organization", "name": "TransUnion" },
  "url": "https://ayush-jaipuriar.github.io/Personal-Portfolio/",
  "sameAs": [
    "https://github.com/ayush-jaipuriar",
    "https://www.linkedin.com/in/ayush-jaipuriar/"
  ]
}
```

### 12.3 Sitemap

**New module:** Add `@nuxtjs/sitemap` to `nuxt.config.ts`

```typescript
modules: [...existing, '@nuxtjs/sitemap'],
sitemap: {
  hostname: 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
}
```

### 12.4 Image Optimization

| # | Task | Details |
|---|------|---------|
| 9.4a | Download all Unsplash images locally | Save to `public/images/projects/` and `public/images/blog/` |
| 9.4b | Convert profile photo to WebP | Keep JPEG as fallback, add WebP version for modern browsers |
| 9.4c | Add responsive image sizing | Use `srcset` and `sizes` attributes for key images |
| 9.4d | Add explicit `width` and `height` to all `<img>` tags | Prevents Cumulative Layout Shift (CLS) |
| 9.4e | Add `loading="lazy"` to below-fold images | Project cards, blog post images, gallery |

### 12.5 Performance Audit

Run Lighthouse after all changes:
- Target: Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 95
- Fix any issues found

### 12.6 Phase 9 Checklist

- [ ] Open Graph meta tags on all pages
- [ ] Twitter Card meta tags on all pages
- [ ] `og-default.png` (1200x630) created and placed in `public/`
- [ ] JSON-LD Person schema added
- [ ] `@nuxtjs/sitemap` installed and configured
- [ ] All external images downloaded to `public/images/`
- [ ] Profile photo has WebP version
- [ ] All `<img>` tags have `width`, `height`, and `loading="lazy"` (below fold)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse SEO > 95

---

## 13. Phase 10 — Final QA & Launch

**Goal:** Comprehensive quality check before pushing to production.

### 13.1 Cross-Browser Testing Matrix

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome (latest) | Test | Test (Android) |
| Safari (latest) | Test | Test (iOS) |
| Firefox (latest) | Test | — |
| Edge (latest) | Test | — |

### 13.2 Responsive Breakpoint Testing

| Breakpoint | Width | Device Simulation |
|------------|-------|-------------------|
| Mobile S | 320px | iPhone SE |
| Mobile M | 375px | iPhone 12 |
| Mobile L | 425px | iPhone 12 Pro Max |
| Tablet | 768px | iPad |
| Laptop | 1024px | — |
| Desktop | 1440px | — |

### 13.3 Page-by-Page QA Checklist

**Homepage:**
- [ ] Hero renders correctly in light mode (all text visible, readable)
- [ ] Hero renders correctly in dark mode (all text visible, readable)
- [ ] "Open to Opportunities" badge visible
- [ ] "See My Work" button links to `/projects`
- [ ] "Download Resume" button initiates PDF download
- [ ] Metrics bar shows all 5 metrics
- [ ] Featured projects show 3 case study cards with correct data
- [ ] Skills snapshot shows icons and labels
- [ ] Latest posts section shows empty state OR actual posts
- [ ] Connect CTA section renders with correct messaging
- [ ] Profile photo loads and displays correctly
- [ ] All animations play smoothly

**About:**
- [ ] TransUnion description reflects AI agent work
- [ ] Career timeline renders all entries
- [ ] Timeline animations work on scroll
- [ ] Champ Award attributed to TransUnion
- [ ] Education includes KIIT ECELL, KodeRunners
- [ ] Achievement cards display with correct numbers
- [ ] Resume download button works

**Skills:**
- [ ] AI & ML section featured prominently at top
- [ ] Core Expertise skills have icons, context, years
- [ ] Proficient skills display in grid
- [ ] Familiar skills display as pills
- [ ] All icons load correctly

**Projects:**
- [ ] Page renders (not blank!)
- [ ] Professional case studies section shows 3 case studies
- [ ] Personal projects section shows 3+ projects
- [ ] Each case study card links to detail page
- [ ] Each detail page has real content (no placeholders)
- [ ] Previous/Next navigation works
- [ ] GitHub links open in new tab

**Blog:**
- [ ] Page renders with empty state or actual posts
- [ ] If posts exist: pagination works, categories work
- [ ] Blog post detail page renders correctly

**Contact:**
- [ ] Form submits successfully (test with real email)
- [ ] Success state shows after submission
- [ ] Error state shows on failure
- [ ] Availability message present
- [ ] Email, phone, location, social links all correct
- [ ] Phone number is clickable (`tel:` link)
- [ ] Email is clickable (`mailto:` link)

**Global:**
- [ ] Navigation links all work (desktop: visible links; mobile: hamburger menu)
- [ ] Dark/light mode toggle works on every page
- [ ] Page transitions are smooth
- [ ] Scroll progress bar works
- [ ] Footer shows correct year, email, links on every page
- [ ] No console errors on any page
- [ ] No broken images on any page
- [ ] No 404s when clicking any internal link

### 13.4 Content Accuracy Audit

- [ ] All text matches the latest version of resume and LinkedIn
- [ ] No instances of "Your Name" anywhere in the site
- [ ] No instances of `yourusername` or `example.com` in any links
- [ ] All dates are accurate (employment, education)
- [ ] All metrics are accurate (92%, 30+, etc.)
- [ ] No generic/placeholder text remaining

### 13.5 Pre-Push Checklist

- [ ] `npm run generate` completes without errors
- [ ] Static output tested locally: `npx serve .output/public`
- [ ] All pages load from static files
- [ ] No `.env` files, `.bak` files, or credentials in staged changes
- [ ] `git diff --cached` reviewed for any sensitive content
- [ ] Commit message is descriptive

### 13.6 Phase 10 Checklist

- [ ] All page-by-page QA checks passed
- [ ] Cross-browser testing completed (Chrome, Safari, Firefox, Edge)
- [ ] Responsive testing completed (320px → 1440px)
- [ ] Content accuracy audit passed — no placeholders, no inaccuracies
- [ ] Lighthouse audit completed — all scores > 90
- [ ] Static generation + local serve tested
- [ ] Security review: no secrets, credentials, or backup files
- [ ] Ready to deploy

---

## 14. Post-Launch Roadmap

Items for after the main overhaul is deployed.

| # | Task | Priority | Effort | Notes |
|---|------|----------|--------|-------|
| 1 | Write 1 blog post per week | High | 2-3 hrs/week | Maintains freshness and thought leadership |
| 2 | Set up TinaCMS or Prose.io for web-based editing | Medium | 3 hrs | When you want a GUI for blog posts instead of Git |
| 3 | Add Google Analytics or Plausible | Medium | 30 min | Track visitor behavior |
| 4 | Get custom domain (e.g., `ayushjaipuriar.dev`) | Medium | 1 hr | More professional URL |
| 5 | Add testimonials section | Medium | 2 hrs | When you have quotes from colleagues/managers |
| 6 | Add real architecture diagrams to case studies | Medium | 3-4 hrs | Requires creating diagrams (Excalidraw, Mermaid, etc.) |
| 7 | Update LinkedIn profile to match portfolio | High | 30 min | Must be done right after portfolio launch |
| 8 | Update resume PDF to match portfolio narrative | High | 1 hr | AI Agent Engineer positioning should be consistent |
| 9 | Add Calendly/Cal.com scheduling link | Low | 30 min | "Schedule a Call" button on Contact page |
| 10 | Explore `nuxt-image` module for automatic optimization | Low | 2 hrs | Auto WebP, responsive sizes, lazy loading |

---

## 15. Content Authoring Guide

### 15.1 How to Add a New Blog Post

1. Create a new Markdown file in `content/blog/`:
   - Naming: `YYYY-MM-DD-post-slug.md` (e.g., `2026-02-15-building-ai-agents.md`)
   - Or use numbered prefix: `4.building-ai-agents.md`

2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description for SEO and card previews"
   date: 2026-02-15
   image: "/images/blog/your-image.jpg"
   categories:
     - ai-engineering
     - langchain
   author: "Ayush Jaipuriar"
   readingTime: 8
   ---
   ```

3. Write content in Markdown below the frontmatter.

4. Add any images to `public/images/blog/`.

5. Commit and push → GitHub Actions auto-deploys.

### 15.2 How to Add a New Project

1. Open `data/projects.ts`.

2. Add a new entry to the `projects` array following the `Project` interface.

3. For professional projects: fill in the `caseStudy` object with all sections.

4. For personal projects: provide `githubLink` and `description`.

5. Add project image to `public/images/projects/`.

6. Set `featured: true` if it should appear on the homepage.

### 15.3 How to Update Personal Info

- **Name/title/tagline:** `pages/index.vue` hero section
- **Work experience:** `pages/about.vue` experience section
- **Skills:** `data/skills.ts`
- **Contact info:** `pages/contact.vue` + `pages/about.vue`
- **Resume PDF:** Replace `public/resume/Ayush_Jaipuriar_Resume.pdf`

---

## Appendix A — Data Dictionaries

### Project Object Shape

```typescript
interface Project {
  id: number
  title: string                    // "AI Agents for Research Perspective"
  slug: string                     // "ai-agents-research-perspective"
  type: 'professional' | 'personal'
  company?: string                 // "TransUnion"
  description: string              // Full description
  shortDescription: string         // 1-line for cards
  image: string                    // "/images/projects/ai-agents.jpg"
  technologies: string[]           // ["LangChain", "LangGraph", "Python", "MLFlow"]
  githubLink?: string              // Only for personal projects
  liveLink?: string
  featured: boolean                // Show on homepage?
  order: number                    // Display order
  caseStudy?: {
    problem: string
    architecture: string
    role: string
    approach: string
    results: string[]              // ["92% API load time reduction", ...]
    learnings: string
    gallery?: string[]             // Image paths
  }
}
```

### Skill Object Shape

```typescript
interface Skill {
  name: string                     // "LangChain / LangGraph"
  icon?: string                    // "simple-icons:langchain"
  tier: 'core' | 'proficient' | 'familiar'
  category: 'ai-ml' | 'languages' | 'frameworks' | 'databases' | 'devops' | 'tools' | 'concepts' | 'soft-skills'
  context?: string                 // "Production AI agents, RAG, multi-agent orchestration"
  yearsOfExperience?: number
  usedProfessionally: boolean
}
```

---

## Appendix B — Design Tokens & Style Guide

### Color Palette (from `tailwind.config.js`)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `apple-blue-600` | `#007AFF` | `#007AFF` | Primary accent, CTAs, links |
| `apple-blue-400` | — | lighter blue | Dark mode hover state |
| `purple-600` | `#7C3AED` | `#7C3AED` | Gradient secondary, accents |
| `gray-900` | `#111827` | — | Light mode text, dark mode bg |
| `gray-100` | `#F3F4F6` | — | Light mode backgrounds |
| `white` | `#FFFFFF` | — | Light mode bg, dark mode text |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (page title) | Inter | 4xl–6xl | Bold (700) |
| H2 (section heading) | Inter | 2xl–3xl | Bold (700) |
| H3 (subsection) | Inter | xl | Semibold (600) |
| Body | Inter | base (16px) | Normal (400) |
| Small/caption | Inter | sm (14px) | Normal/Medium |
| Code | Mono stack | sm | Normal |

### Spacing

| Context | Value |
|---------|-------|
| Page padding (horizontal) | `px-4 sm:px-6 lg:px-8` |
| Section spacing (vertical) | `py-16 md:py-24` |
| Card padding | `p-6` |
| Grid gap | `gap-6` or `gap-8` |
| Max content width | `max-w-7xl mx-auto` |

### Animation Tokens

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Card entrance (fade + slide) | 400ms | ease-out | Scroll into view |
| Stagger delay between cards | 100ms | — | Sequential |
| Page transition | 400ms | ease-in-out | Route change |
| Counter animation | 1500ms | ease-out | Scroll into view |
| Hover tilt | Immediate (mousemove) | — | Mousemove |
| Hover tilt reset | 300ms | ease-out | Mouseleave |
| Gradient mesh movement | 15-20s | linear (loop) | Always |
| Progress bar | Immediate | — | Scroll |

---

*This spec document should be updated as implementation progresses. Mark checklist items as completed. Add notes for any deviations from the spec and the reasoning behind them.*
