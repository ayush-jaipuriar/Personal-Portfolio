# Portfolio In-Depth Review (v2 — Updated with Owner Context)

**Reviewer:** AI Product Manager & Recruiter Perspective  
**Date:** February 10, 2026  
**Site URL:** https://ayush-jaipuriar.github.io/Personal-Portfolio/  
**Sources:** Live site, codebase, LinkedIn, Profile PDF, owner interview

---

## Table of Contents

1. [Owner Profile & Goals](#owner-profile--goals)
2. [Executive Summary](#executive-summary)
3. [Critical Bugs (Site-Breaking)](#critical-bugs-site-breaking)
4. [Strategic Positioning: The Story Your Portfolio Should Tell](#strategic-positioning-the-story-your-portfolio-should-tell)
5. [Content & Data Issues](#content--data-issues)
6. [Design & UX Review](#design--ux-review)
7. [Recruiter Perspective: What's Missing](#recruiter-perspective-whats-missing)
8. [Product Manager Perspective: Strategic Gaps](#product-manager-perspective-strategic-gaps)
9. [LinkedIn vs Portfolio vs Resume: Consistency Audit](#linkedin-vs-portfolio-vs-resume-consistency-audit)
10. [Technical Code Quality Issues](#technical-code-quality-issues)
11. [Blog CMS Strategy](#blog-cms-strategy)
12. [SEO & Performance](#seo--performance)
13. [Design Inspiration & "Wow Factor" Direction](#design-inspiration--wow-factor-direction)
14. [Prioritized Action Plan (Multi-Week Roadmap)](#prioritized-action-plan-multi-week-roadmap)
15. [Detailed Recommendations per Page](#detailed-recommendations-per-page)

---

## Owner Profile & Goals

Based on the owner interview conducted on Feb 10, 2026:

- **Current Role:** AI Agent Engineer at TransUnion (Insights AI Agent Team) — building production AI agents with LangChain/LangGraph, MLFlow, LLMOps, integrating into Apache Superset
- **Previous Role:** Full-stack Java developer at TransUnion — built TB-scale search product with geofencing on proprietary location data
- **Job Search Status:** Actively looking for new opportunities
- **Target Roles:** Senior Software Engineer, AI Engineer, AI Agentic Engineer
- **Dream Role:** Lead Engineer doing AI products at FAANG or fintech startup
- **Geographic Preference:** Hyderabad/Bengaluru preferred, open to remote global and relocation for good opportunities
- **Framework:** Staying with Vue.js / Nuxt 3
- **Hosting:** GitHub Pages (for now)
- **Time Investment:** Dedicated multi-week effort, no corners cut
- **Desired Impression:** "This person is a serious enterprise engineer who ships fast and learns constantly"
- **Design Direction:** Apple-inspired but more alive, advanced, polished — "wow factor"
- **Blog Strategy:** Remove current generic posts, wants dynamic CMS-like admin for adding posts
- **New Projects to Feature:** `only-yours` (React Native + Spring Boot), `accountability_agent` (may be private), `hookhub`

---

## Executive Summary

### The Gap Between Reality and Presentation

Ayush is currently an **AI Agent Engineer** at a Fortune 500 company, building production-grade agents with LangChain/LangGraph, doing LLMOps with MLFlow, and integrating AI into Apache Superset. He previously built **TB-scale search systems** with geofencing. He actively uses cutting-edge tools like Claude Code with subagents and hooks, Opus 4.6, and Codex 5.3.

**But his portfolio presents him as a generic "Full Stack Developer" with three learning repos and a broken Projects page.**

This is the single biggest problem. The portfolio is actively *underselling* one of the most in-demand skill sets in tech right now (AI agent engineering with production deployment experience). A recruiter looking at this site would have no idea that Ayush builds AI agents for a living.

**Updated Overall Grade: D+** (Tech foundation is OK, but the *positioning* is catastrophically misaligned with career goals)

**After the overhaul (target): A-**

---

## Critical Bugs (Site-Breaking)

These must be fixed before anything else. No point polishing content on a broken site.

### Bug 1: Projects Page Renders Completely Blank
- **Severity:** CRITICAL
- **File:** `pages/projects/index.vue`
- **What happens:** Navigating to `/projects` shows a completely empty dark page — no header, no footer, no content whatsoever.
- **Root causes (likely two):**
  1. `v-tooltip.bottom` directive used on line 43 but no tooltip plugin is installed — causes a Vue runtime error that aborts page rendering during static generation
  2. GitHub Calendar `<script>` loaded via `useHead()` with an `onload` callback that may throw in SSG context when `GitHubCalendar` isn't available at the right moment
- **Impact:** The homepage's primary CTA button ("View My Projects") leads to a blank page. This is like sending your resume with a broken link to your portfolio — it's worse than having no link at all.
- **Fix:** Remove `v-tooltip` directive, wrap GitHub Calendar in proper client-only error handling, or use `<ClientOnly>` wrapper.

### Bug 2: Dark Mode Text Is Nearly Invisible
- **Severity:** CRITICAL
- **Affected pages:** About, Skills, Contact, Blog — every page except the homepage hero
- **What happens:** Page headings ("About Me", "Get In Touch", "Skills & Expertise", "Blog") are rendered in very low-contrast dark gray on dark background. Content is present in the DOM but invisible to the human eye.
- **Impact:** Since dark mode is the default for most modern devices, the majority of visitors see what looks like a broken/empty site.
- **Fix:** Audit all heading classes — likely need to add explicit `dark:text-white` or `dark:text-gray-100` classes to h1/h2 headings across pages.

### Bug 3: Desktop Navigation Always Shows Hamburger Menu
- **Severity:** HIGH
- **File:** `components/AppHeader.vue`
- **What happens:** Even at 1440px desktop width, only a hamburger menu is visible. The desktop nav links (About, Skills, Projects, Blog, Contact) are never shown.
- **Code:** Desktop nav uses `hidden md:flex` which should work at 768px+, but doesn't in production.
- **Likely cause:** Tailwind CSS `md:` breakpoint not generating correctly in the static build, or a CSS specificity/ordering issue.
- **Impact:** Desktop visitors must click a hamburger to navigate. This hides the site's full scope and is non-standard UX. Recruiters browsing on a desktop (which is the majority for professional portfolio review) get a degraded experience.

---

## Strategic Positioning: The Story Your Portfolio Should Tell

This is the most important section. Before fixing any code, the **narrative** needs to be right.

### Current Narrative (what the site says)
> "Hello, I'm Ayush Jaipuriar. Full Stack Developer at TransUnion. I build exceptional and accessible digital experiences for the web."

### What This Communicates to a Recruiter
Generic full-stack developer. Could be anyone with 1-3 years of experience. No specialization. No indication of seniority, impact, or domain expertise.

### Recommended Narrative (what the site should say)

> **Primary Identity:** AI Agent Engineer & Senior Full-Stack Developer  
> **Proof Points:** 6+ years in enterprise fintech | Building production AI agents with LangChain/LangGraph | TB-scale search systems | 30+ enterprise clients | Fortune 500 experience  
> **Trajectory:** Started full-stack → grew into enterprise systems → now leading AI agent development  
> **Unique Angle:** One of few engineers who combines deep enterprise Java/Spring expertise with modern AI agent engineering — can build the whole stack from database to deployed agent

### Why This Matters for Target Roles

For **Senior SWE at FAANG**: They want to see scale (TB-scale search), impact (92% optimization), and system design depth.

For **AI Engineer / AI Agentic Engineer**: They want to see production AI systems, not just tutorials. Ayush actually builds and deploys agents with LangChain/LangGraph and MLFlow — this is gold. Most candidates only have toy projects.

For **Lead Engineer at a Fintech Startup**: They want full-stack capability + domain knowledge + ability to ship independently. Ayush's trajectory from summer trainee to leading an AI agent team tells exactly this story.

### Recommended Tagline Options (Pick One)

1. "AI Agent Engineer & Senior Full-Stack Developer — Building production AI systems at Fortune 500 scale"
2. "From enterprise fintech to AI agents — 6 years of shipping systems that matter"  
3. "I build production AI agents and TB-scale search systems. Currently leading AI engineering at TransUnion."

---

## Content & Data Issues

### Issue 1: Projects Are Learning Repos, Not Professional Showcases
- **Severity:** CRITICAL (for job search)
- **Current state:** Learning Camunda, Learning Langchain, 1000 Days of Code
- **What a recruiter thinks:** "This person only has tutorial projects? No real work?"

**What should be featured instead (in priority order):**

| # | Project | Type | Why It's Impressive | Showcasable? |
|---|---------|------|---------------------|--------------|
| 1 | **AI Agents for Research Perspective** | Professional (TransUnion) | Production AI agents with LangChain/LangGraph, MLFlow, LLMOps, Apache Superset integration | Case study (no code) — describe architecture, approach, challenges, outcomes |
| 2 | **TB-Scale Search Product** | Professional (TransUnion) | Search over multi-TB datasets with geofencing and user location search | Case study (no code) — focus on scale challenges, architecture decisions |
| 3 | **Enterprise Parsing Agents** | Professional (HighRadius) | BAI/MT940/CSV parsing for 30+ clients, 92% API optimization, 62% parsing time reduction | Case study (no code) — great for showing optimization skills |
| 4 | **OnlyYours App** | Personal | Full-stack: React Native + Spring Boot + PostgreSQL + Google Auth + JWT + Flyway migrations | Code on GitHub — shows modern full-stack capability |
| 5 | **Learning Camunda** | Personal | Camunda BPM dispute resolution with PII validation | Code on GitHub — shows BPM/workflow expertise |
| 6 | **Learning LangChain** | Personal | LLM apps with OpenAI + FAISS | Code on GitHub — supports AI narrative |
| 7 | **Accountability Agent** | Personal | (May be private — needs to be made public or described) | TBD |
| 8 | **AI-Enabled Invoice Management** | Professional (HighRadius Training) | ML prediction + NLP chatbot + analytics dashboard + React SPA | Case study — but no screenshots/code currently available |

**Key insight:** Professional work should be presented as **case studies** (Problem → Architecture → My Role → Approach → Results → Learnings), not as code repos. You don't need to share proprietary code — you need to show **how you think and what you've achieved**.

### Issue 2: Project Detail Page Has Fake Placeholder Data
- **Severity:** HIGH
- **File:** `pages/projects/[slug].vue`
- **What happens:** Detail page has completely different fake projects ("E-Commerce Platform", "Task Management App", "Weather Dashboard") with `github.com/yourusername/project-1` links and lorem-ipsum-style content sections.
- **Fix:** Rewrite with real project data matching the list above. Each professional project gets a rich case study. Each personal project links to GitHub with a proper description.

### Issue 3: Blog Posts Are Generic Templates
- **Severity:** MEDIUM
- **Current state:** 3 generic tutorials (JavaScript features, website performance, building portfolios)
- **Owner decision:** Remove all current posts. Wants dynamic CMS-like admin for adding future posts.
- **See [Blog CMS Strategy](#blog-cms-strategy) section for detailed plan.**

### Issue 4: Contact Form Is Non-Functional
- **Severity:** MEDIUM
- **File:** `pages/contact.vue`
- **What happens:** Form uses `setTimeout` to simulate success. Messages go nowhere.
- **Fix:** Integrate Formspree (free tier: 50 submissions/month) or EmailJS. Both work with static sites on GitHub Pages. See implementation plan below.

### Issue 5: Champ Award Attribution Is Wrong
- **Severity:** MEDIUM
- **File:** `pages/about.vue`
- **Current:** Listed under HighRadius context
- **Actual:** TransUnion (Jan 2025) — for work on Research Perspective and CIBIL Dispute Resolution Platform
- **Fix:** Move to TransUnion section, add description matching LinkedIn

### Issue 6: Copyright Year Inconsistency
- **Severity:** LOW
- **What:** Homepage footer says "© 2026", About and Blog pages say "© 2025"
- **Fix:** Use dynamic `new Date().getFullYear()` in `AppFooter.vue`

---

## Design & UX Review

### What Works Well
- Apple-inspired clean aesthetic with `apple-blue` color system and Inter font
- Dark mode support (concept is good, execution needs fixing)
- Glassmorphism sticky header with backdrop blur
- Smooth page transitions with vue motion
- The overall Tailwind setup is solid and extensible

### What Needs the "Wow Factor" (Owner's Request)

The current design is clean but **flat and lifeless**. Here are specific enhancements to make it feel more alive, advanced, and polished — while staying within the Apple-inspired aesthetic:

#### A. Micro-Interactions & Motion
| Enhancement | Where | Effort | Impact |
|-------------|-------|--------|--------|
| **Staggered card entrance animations** | Projects grid, Skills grid | Low | Cards fade/slide in one-by-one with slight delays rather than all at once |
| **Hover parallax on project cards** | Project cards | Medium | Subtle 3D tilt effect on hover (like Apple product cards) using CSS transforms |
| **Magnetic cursor effect on CTAs** | Buttons | Medium | Buttons subtly follow the cursor when hovering nearby |
| **Smooth scroll-linked progress bar** | Header | Low | Thin colored bar at top of page showing scroll progress |
| **Text reveal animations** | Headings | Low | Characters or words animate in sequentially on scroll into view |
| **Counter animations** | Key metrics (homepage) | Low | Numbers count up from 0 when scrolled into view |

#### B. Visual Depth & Polish
| Enhancement | Where | Effort | Impact |
|-------------|-------|--------|--------|
| **Gradient mesh backgrounds** | Hero sections | Medium | Animated, subtle gradient mesh blobs (like Apple's event pages) instead of static blur circles |
| **Glassmorphism cards** | Project cards, skill cards | Low | Semi-transparent backgrounds with backdrop-blur and subtle borders |
| **Noise texture overlay** | Background | Low | Very subtle noise/grain texture over backgrounds adds depth |
| **Custom cursor** | Sitewide | Medium | Custom dot cursor with trailing effect — signals "this site is crafted" |
| **Dark mode glow effects** | Headings, buttons | Low | Subtle glow/bloom on primary-colored text in dark mode |
| **Bento grid layout** | Homepage or About page | Medium | Apple-style bento grid for showcasing key info (like Apple's feature pages) |

#### C. Content Presentation
| Enhancement | Where | Effort | Impact |
|-------------|-------|--------|--------|
| **Horizontal scrolling project showcase** | Homepage featured projects | Medium | Horizontally scrollable project cards like Apple product carousels |
| **Interactive skills visualization** | Skills page | High | Radial/circular skill chart, or interactive tag cloud, instead of plain grid |
| **Career timeline with scroll animation** | About page | Medium | Vertical timeline that animates/reveals as you scroll down |
| **Terminal-style "Currently" widget** | Homepage or sidebar | Low | Blinking cursor showing "Currently: Building AI agents at TransUnion" |
| **"Available for work" badge** | Header or hero | Low | Subtle pulsing green dot with "Open to opportunities" — signals to recruiters immediately |

#### D. Technical Polish
| Enhancement | Where | Effort | Impact |
|-------------|-------|--------|--------|
| **Page transition animations** | Route changes | Medium | Full-page slide/morph transitions instead of simple fade |
| **View Transitions API** | Route changes | Medium | Native browser view transitions for seamless page navigation |
| **Skeleton loading states** | Projects, blog | Low | Pulse-animated placeholder content while data loads |
| **Smooth anchor scrolling** | All pages | Low | Smooth scroll with easing to internal anchors |
| **Easter egg in console** | Dev tools | Trivial | ASCII art + "Hey, I see you're inspecting my code! Let's connect." — signals engineering pride |

### Current UX Issues to Fix

| Issue | Severity | Details |
|-------|----------|---------|
| **Homepage is too minimal** | HIGH | Just a hero. Missing featured projects, key metrics, skills preview, recent blog posts. Homepage should be a hub, not a landing page. The `<!-- Removed Featured Projects Section -->` comment confirms this was stripped out. |
| **No visual hierarchy on Skills page** | MEDIUM | Every skill looks identical. No proficiency indicators, no icons, no grouping by strength level. A recruiter can't quickly identify core strengths vs. peripheral knowledge. |
| **About page is a text wall** | MEDIUM | Good content but poor visual storytelling. Needs visual breaks: timeline, metric cards, section icons. |
| **Profile photo presentation** | LOW | Photo works but could benefit from a gradient border ring (like Instagram stories) or a subtle animation on hover. |
| **Footer is too minimal** | LOW | Should include: email, "Open to opportunities" note, quick nav links, and possibly a recent blog post title. |

---

## Recruiter Perspective: What's Missing

Evaluated through the lens of hiring for **Senior SWE / AI Engineer / Lead Engineer** roles:

### Tier 1 — Must Have (Dealbreakers If Missing)

| # | Missing Element | Why It Matters | Current State |
|---|-----------------|----------------|---------------|
| 1 | **"Open to Opportunities" Signal** | Recruiters need to know immediately that you're available. Without this, they may assume you're passively employed and skip outreach. | Not present anywhere on the site |
| 2 | **Resume/CV Download** | Standard recruiter workflow: see portfolio → download resume → forward to hiring manager. If they can't download your resume in 2 clicks, many will move on. | No download link exists |
| 3 | **Professional Work Case Studies** | For senior roles, recruiters and hiring managers want to see *how you think*, not just what you code. Case studies of production systems demonstrate technical depth, leadership, and impact. | All projects are learning repos with no professional work showcased |
| 4 | **Quantified Impact Upfront** | Numbers on the first screen: years of experience, scale of systems, optimization percentages. This immediately signals seniority. | Homepage has zero metrics — just a generic tagline |
| 5 | **AI/ML Experience Featured Prominently** | AI engineering is the hottest skill in tech right now. Ayush is *actually doing this in production* at a Fortune 500 company. This should be the #1 thing a visitor sees. | The word "AI" doesn't appear on the homepage at all |

### Tier 2 — Strongly Recommended

| # | Missing Element | Why It Matters |
|---|-----------------|----------------|
| 6 | **Technologies with context** | Don't just list "LangChain" — say "LangChain/LangGraph — building production AI agents with RAG pipelines and multi-agent orchestration" |
| 7 | **Current work highlight** | A "What I'm Working On Now" section showing the AI agent team work. This signals recency and relevance. |
| 8 | **Testimonials or peer endorsements** | Even one quote from a colleague or manager adds credibility for senior-level roles |
| 9 | **System design artifacts** | Architecture diagrams, even simplified ones, for the search product or parsing agents. These demonstrate principal-engineer-level thinking. |
| 10 | **Location + visa/relocation info** | "Based in Hyderabad. Open to Bengaluru, remote global, or relocation." — saves recruiters a question |

### Tier 3 — Nice to Have

| # | Missing Element | Why It Matters |
|---|-----------------|----------------|
| 11 | **GitHub activity integration** (working) | Shows consistent coding habit — but the current GitHub Calendar is broken |
| 12 | **Conference talks or writing** | Domain-specific blog posts partially fulfill this |
| 13 | **Education extracurriculars** | KIIT ECELL, KodeRunners from LinkedIn — shows initiative beyond academics |
| 14 | **LinkedIn recommendations embedded** | Social proof from peers/managers |

---

## Product Manager Perspective: Strategic Gaps

### Gap 1: No Clear Value Proposition
- **Current:** "Full Stack Developer at TransUnion" — tells me *where*, not *what value*
- **Target:** "AI Agent Engineer building production LLM systems | 6 years enterprise fintech | TB-scale search & 92% optimization | Shipping AI at Fortune 500 scale"
- **Why it matters:** For a lead engineer role at FAANG/startup, they need to know in 5 seconds what you bring

### Gap 2: The Portfolio Doesn't Tell a Growth Story
Your career arc is genuinely impressive and rare:
```
Summer Trainee (ML + NLP + Full-stack)
  → Intern (Web scraping agents at scale)
    → ASE (Enterprise Java, product modules)
      → ASE II (Parsing engines, 92% optimization, 30+ clients)
        → Software Developer (TB-scale search systems)
          → AI Agent Engineer (Production LangChain/LangGraph, MLFlow, LLMOps)
```

This shows a clear trajectory from full-stack generalist → enterprise systems specialist → AI engineering leader. **This story is not told anywhere on the portfolio.** The About page lists jobs but doesn't connect them into a narrative.

### Gap 3: AI Narrative Is Completely Absent
Your daily work involves:
- LangChain / LangGraph for advanced AI agents
- MLFlow for model lifecycle management
- LLMOps for production deployment
- Integration with Apache Superset
- Using Opus 4.6, Codex 5.3, Claude Code with subagents and hooks

**None of this appears on the portfolio.** The About page still describes you as working on "OneTru Research Perspective and CIBIL Dispute Resolution Platform" with no mention of AI agents. The Skills page lists "Langchain" as one item in a sea of 60+ skills with no special emphasis.

This is the most critical content gap. AI agent engineering in production is an extremely rare and in-demand skillset. Most engineers at your level are only doing this in side projects or tutorials — you're doing it professionally. This needs to be the **headline**, not a footnote.

### Gap 4: No Case Studies for the Work That Matters Most
Each of these deserves a dedicated, rich case study page:

1. **Production AI Agents at TransUnion** — Problem: How do you build reliable, deployable AI agents for enterprise data products? Architecture: LangChain/LangGraph agent design, RAG pipelines, MLFlow for experiment tracking and model deployment, integration with Apache Superset. Outcome: Production deployment, measurable business impact.

2. **TB-Scale Search Product** — Problem: Search over multi-terabyte datasets with geofencing and location queries. Architecture: (whatever you can share). Challenges: Scale, latency, accuracy. Outcome: Serving TransUnion's Research Perspective product.

3. **Enterprise Parsing Engine** — Problem: Parse diverse financial file formats (BAI, MT940, CSV) with configurable rules for 30+ clients. Approach: Rule engine design, performance optimization. Outcome: 92% API load time reduction, 62% parsing time reduction.

### Gap 5: Blog Strategy Misalignment
Generic tutorials don't support the "serious enterprise engineer who ships fast" brand. Blog posts should demonstrate expertise in:
- AI agent architecture and orchestration patterns
- Scaling search systems to TB-scale
- Production LLMOps with MLFlow
- Enterprise Java optimization techniques
- Building with modern AI coding tools (Claude Code, Cursor, etc.)

### Gap 6: Missing Call-to-Action Strategy for Job Seekers
Current CTAs: "View My Projects" (broken), "About Me", "Contact Me"

Recommended CTA hierarchy for someone actively job-seeking:
1. **Primary:** "See My Work" → leads to case studies (proof of capability)
2. **Secondary:** "Download Resume" → immediate actionable item for recruiters
3. **Tertiary:** "Let's Connect" → contact form + calendar link

---

## LinkedIn vs Portfolio vs Resume: Consistency Audit

| Data Point | LinkedIn | Resume PDF | Portfolio | Status | Action Needed |
|------------|----------|-----------|-----------|--------|---------------|
| **Current Title** | "Developer at TransUnion" | "Developer at TransUnion" | "Full Stack Developer at TransUnion" | Partial | Update all to "AI Agent Engineer & Senior Full-Stack Developer at TransUnion" or similar |
| **Current Work Description** | "Developer for OneTru Research Perspective and CIBIL Dispute Resolution Platform Team" | Same | Same | **OUTDATED** | All three need updating — now leading AI agent work with LangChain/LangGraph, MLFlow, Apache Superset |
| **Total Experience** | "5 years and 9 months" | Not stated | Not stated | Missing | Portfolio should prominently show "6+ years" |
| **Champ Award** | TransUnion (Jan 2025) | "Champ Award" (no org) | Listed under HighRadius | **WRONG** | Fix to TransUnion with description |
| **AI Tools** | "Github Copilot, Perplexity AI, Phind, Microsoft Copilot, Claude 3 and ChatGPT 4+" | "Cursor AI, Windsurf, Claude" | "Cursor AI, Windsurf, Claude, and Langchain" | **INCONSISTENT** | Update all to current: Claude Code (subagents, hooks), Opus 4.6, Codex 5.3, Cursor AI, Windsurf, LangChain/LangGraph |
| **AI/Agent Skills** | Not mentioned as primary skill | Not prominent | LangChain listed as one of 20+ frameworks | **MASSIVELY UNDERSOLD** | LangChain, LangGraph, MLFlow, LLMOps, RAG should be top-tier featured skills |
| **TransUnion Search Product** | Not mentioned | Not mentioned | Not mentioned | **MISSING** | Add TB-scale search with geofencing as a featured project/case study |
| **OnlyYours Project** | Not listed | Not listed | Not listed | Missing | Add to portfolio as personal project |
| **Frontend Skills** | Includes "React Router, HTML5, CSS3" | Different subset | Different subset | Inconsistent | Standardize across all |
| **HighRadius Tenure** | "4 years 2 months" | Same | Individual roles only | OK | Consider showing aggregate tenure for impact |
| **Projects** | "AI-Enabled FinTech B2B Invoice Management" | Summer Trainee description | Learning repos only | **MISMATCH** | Portfolio has weakest project list of all three |
| **Education Activities** | "KIIT ECELL, KodeRunners" | Not mentioned | Not mentioned | Missing | Add to education section |

---

## Technical Code Quality Issues

| # | Issue | File(s) | Severity | Fix |
|---|-------|---------|----------|-----|
| 1 | `v-tooltip` used without plugin installed | `pages/projects/index.vue:43` | Critical (causes page crash) | Remove `v-tooltip.bottom` directive |
| 2 | Project detail page has fake placeholder projects | `pages/projects/[slug].vue` | High | Replace with real project data |
| 3 | `useHead` title uses "Your Name" placeholder | `pages/projects/[slug].vue:268` | Medium | Replace with "Ayush Jaipuriar" |
| 4 | Hero image `alt="Your Name"` | `pages/index.vue:58` | Medium | Change to "Ayush Jaipuriar" |
| 5 | Duplicate package lock files | `package-lock.json`, `package-lock 2.json` | Low | Delete `package-lock 2.json` |
| 6 | Circular self-dependency in package.json | `package.json` → `"personal-portfolio": "file:"` | Low | Remove the entry |
| 7 | Duplicate GitHub Actions workflows | `.github/workflows/deploy.yml` + `nuxtjs.yml` | Low | Delete `nuxtjs.yml` (uses wrong output path `./dist`) |
| 8 | `public/about.txt` shouldn't be public | `public/about.txt` | Trivial | Delete file |
| 9 | Stale PDF in root | `Profile (3).pdf` | Trivial | Delete, add `*.pdf` to `.gitignore` root (keep in .cursor/rules) |
| 10 | `site.webmanifest` has empty name fields | `public/site.webmanifest` | Low | Fill in name: "Ayush Jaipuriar" and short_name: "AJ" |

---

## Blog CMS Strategy

### Owner Requirement
"Remove all blog posts currently present. I want to be able to add blog posts dynamically. There should be an admin endpoint where I can go and make the required blog posts and it should reflect in the site."

### Recommended Approach: Nuxt Content + GitHub-Based Workflow

Since the site is statically generated and hosted on GitHub Pages, a traditional database-backed CMS won't work directly. Here are three viable approaches, ranked by fit:

#### Option A: Nuxt Content + GitHub as CMS (Recommended)
- **How it works:** Continue using `@nuxt/content` (already installed). Write blog posts as Markdown files in `content/blog/`. Push to GitHub → GitHub Actions auto-builds and deploys.
- **"Admin" workflow:** Use GitHub's web editor or a tool like **Prose.io** or **TinaCMS** (has a free tier) that provides a visual editor backed by GitHub commits.
- **Pros:** Zero additional infrastructure. Already set up. Full version control of posts. Markdown is portable.
- **Cons:** Not a true "admin panel" — requires committing to Git (but can be made visual with Prose.io/TinaCMS).
- **Effort:** Low — mostly removing existing posts and configuring an editor tool.

#### Option B: Headless CMS (Strapi / Sanity / Contentful) + Nuxt Content API
- **How it works:** Use a headless CMS with a visual admin panel. Fetch blog posts at build time via API. Trigger GitHub Actions rebuild when content is published (via webhook).
- **Pros:** True admin panel with rich editor, image uploads, drafts. Sanity and Contentful have generous free tiers.
- **Cons:** Adds external dependency. Posts won't be instant (need rebuild + deploy, ~2-5 min). More complex setup.
- **Effort:** Medium — need to set up CMS, configure API fetching, add webhook to trigger deploys.

#### Option C: Nuxt Content + Local Markdown + Cursor/Claude as Writing Tool
- **How it works:** Write posts in Markdown locally (using Cursor with AI assistance for drafting/editing), commit and push. GitHub Actions handles the rest.
- **"Admin" is your IDE:** Use Cursor's AI to help draft, edit, and format blog posts in Markdown.
- **Pros:** Simplest setup. You're already in the IDE daily. AI-assisted writing workflow.
- **Cons:** No web-based admin panel. Must use Git.
- **Effort:** Minimal — just remove existing posts and start writing.

### Recommendation

**Start with Option C** (it's already working — just needs content), and **migrate to Option A** (with TinaCMS or Prose.io) when you want a web-based editor. Both use Markdown files in `content/blog/`, so migration is seamless.

### Blog Content Strategy (Topics That Support Your Brand)
1. "Building Production AI Agents with LangChain and LangGraph — Lessons from the Trenches"
2. "LLMOps in Practice: From Experiment to Production with MLFlow"
3. "How I Optimized API Load Times by 92% at HighRadius"
4. "Scaling Search to Terabyte Datasets: Architecture Decisions That Mattered"
5. "AI-Augmented Development: How I Use Claude Code, Opus 4.6, and Codex 5.3 Daily"
6. "From Summer Trainee to AI Agent Engineer: My 6-Year Journey in Tech"
7. "Camunda BPM for Dispute Resolution: A Deep Dive"
8. "Why I'm Building a Full-Stack App with React Native + Spring Boot (OnlyYours)"

---

## SEO & Performance

### SEO Issues (Priority Order)
1. **No Open Graph / Twitter Card meta tags** — sharing on social media produces no preview
2. **No structured data (JSON-LD)** — no schema.org Person/WebSite markup
3. **No sitemap.xml** — could use `@nuxtjs/sitemap` module
4. **Blog post SEO metadata** — no per-post OG images
5. **No canonical URLs** — important for trailing slash handling

### Performance Concerns
1. **External Unsplash images** — should be locally hosted or use `nuxt-image`
2. **GitHub Calendar from unpkg CDN** — external script that can fail or slow load
3. **No image optimization** — profile photo served as raw JPEG without responsive sizes
4. **No Web Vitals monitoring** — consider Vercel Analytics (free) or web-vitals library

---

## Design Inspiration & "Wow Factor" Direction

Based on the owner's request for "Apple-inspired but more alive, advanced, polished — wow factor," here are reference sites and the specific techniques to borrow:

### Reference Sites to Study
1. **Brittany Chiang** (brittanychiang.com) — The gold standard for developer portfolios. Clean, minimal, but with subtle depth: custom cursor, staggered animations, sticky sections, beautiful typography.
2. **Lynn Fisher** (lynnandtonic.com) — Creative but professional. Shows personality without sacrificing readability.
3. **Apple product pages** (apple.com/macbook-pro) — Scroll-triggered animations, hero videos, bento grids, parallax effects, gradient mesh backgrounds.
4. **Rauno Freiberg** (rauno.me) — Minimalist with incredible micro-interactions. Every hover and transition is intentional.
5. **Josh Comeau** (joshwcomeau.com) — Developer blog with personality. Great example of technical blog with playful interactions.

### Specific "Wow Factor" Implementation Priorities
Given the multi-week timeline and Apple-inspired direction:

**Week 1-2 Focus (High Impact, Moderate Effort):**
- Animated gradient mesh hero background (replaces static blur circles)
- Staggered entrance animations on all card grids
- Scroll-progress indicator in header
- "Available for opportunities" pulsing badge
- Counter animations for key metrics
- Dark mode glow effects on accent-colored text

**Week 3-4 Focus (Premium Polish):**
- 3D tilt hover effect on project cards
- Smooth page transitions with View Transitions API
- Interactive career timeline with scroll animations
- Bento grid layout for homepage highlights
- Custom cursor with blend-mode effects
- Terminal/typing animation for a "Currently working on" widget

---

## Prioritized Action Plan (Multi-Week Roadmap)

### Week 1: Fix Critical Bugs + Core Positioning

| Day | Task | Files | Effort | Why First |
|-----|------|-------|--------|-----------|
| 1 | Fix Projects page blank render (remove v-tooltip, fix GitHub Calendar) | `pages/projects/index.vue` | 2 hrs | Primary CTA is broken |
| 1 | Fix dark mode text contrast across all pages | All page files | 2 hrs | Site appears broken to majority of visitors |
| 1 | Fix desktop navigation display | `components/AppHeader.vue`, Tailwind config | 1 hr | Navigation is fundamental |
| 2 | Rewrite homepage hero with new positioning | `pages/index.vue` | 3 hrs | First impression is everything |
| 2 | Add "Open to opportunities" badge in header | `components/AppHeader.vue` | 1 hr | Immediate recruiter signal |
| 2 | Add resume PDF download button | Header or hero | 30 min | Recruiter essential |
| 3 | Fix Champ Award attribution | `pages/about.vue` | 15 min | Factual accuracy |
| 3 | Fix all "Your Name" placeholders | `pages/index.vue`, `pages/projects/[slug].vue` | 15 min | Basic professionalism |
| 3 | Fix copyright year + site.webmanifest | `components/AppFooter.vue`, `public/site.webmanifest` | 15 min | Polish |
| 3 | Clean up repo (delete duplicate files, fix package.json) | Root directory | 30 min | Code hygiene |
| 4-5 | Build homepage hub layout: featured projects, key metrics, skills preview | `pages/index.vue` | 6 hrs | Homepage = primary recruiter landing page |

### Week 2: Project Case Studies + About Page Overhaul

| Day | Task | Files | Effort | Notes |
|-----|------|-------|--------|-------|
| 1-2 | Write case study: AI Agents at TransUnion | New content/project file or page data | 4 hrs | Most impressive & current work |
| 2-3 | Write case study: TB-Scale Search Product | Same | 3 hrs | Shows system design at scale |
| 3 | Write case study: Enterprise Parsing Engine (HighRadius) | Same | 3 hrs | Shows optimization & client impact |
| 4 | Add OnlyYours, Learning Camunda, Learning LangChain as personal projects | `pages/projects/index.vue` data | 2 hrs | Shows breadth + initiative |
| 4 | Fix project detail page to use real data, sync slugs | `pages/projects/[slug].vue` | 2 hrs | No more fake data |
| 5 | Rewrite About page: career narrative + timeline + updated TransUnion description | `pages/about.vue` | 4 hrs | Must reflect AI agent work |
| 5 | Update Skills page: add proficiency indicators, reorder to emphasize AI/enterprise | `pages/skills.vue` | 3 hrs | Strategic skill presentation |

### Week 3: Blog System + Contact + Wow Factor Pass 1

| Day | Task | Files | Effort | Notes |
|-----|------|-------|--------|-------|
| 1 | Remove all existing blog posts, set up clean Nuxt Content blog structure | `content/blog/` | 1 hr | Clean slate |
| 1 | Write first real blog post (e.g., "Building Production AI Agents") | `content/blog/` | 4 hrs | Establishes thought leadership |
| 2 | Integrate Formspree for contact form | `pages/contact.vue` | 1 hr | Make contact form functional |
| 2 | Add Open Graph + Twitter Card meta tags to all pages | Page files + `nuxt.config.ts` | 2 hrs | Social sharing support |
| 3-4 | Implement animated gradient mesh hero background | `pages/index.vue`, CSS | 3 hrs | Wow factor #1 |
| 3-4 | Implement staggered card entrance animations | Components | 2 hrs | Wow factor #2 |
| 4-5 | Implement scroll progress indicator | `components/AppHeader.vue` | 1 hr | Polish |
| 4-5 | Implement counter animations for metrics | Homepage | 2 hrs | Wow factor #3 |
| 5 | Implement dark mode glow effects on accent text | CSS/Tailwind | 1 hr | Visual depth |

### Week 4: Premium Polish + Final Touches

| Day | Task | Files | Effort | Notes |
|-----|------|-------|--------|-------|
| 1-2 | Implement interactive career timeline on About page | `pages/about.vue` | 4 hrs | Visual storytelling |
| 2 | Implement 3D tilt hover on project cards | `components/ProjectCard.vue` | 2 hrs | Premium feel |
| 3 | Add Bento grid layout section to homepage | `pages/index.vue` | 3 hrs | Apple-style presentation |
| 3 | Add "What I'm Working On" / "Currently" widget | Homepage | 1 hr | Shows recency |
| 4 | Write second blog post | `content/blog/` | 3 hrs | Content pipeline |
| 4 | Implement skeleton loading states | Components | 1 hr | Professional UX |
| 5 | Final QA: test all pages in light/dark mode, desktop/mobile, all links | All | 3 hrs | Quality gate |
| 5 | SEO: Add structured data, sitemap, verify robots.txt | `nuxt.config.ts` | 2 hrs | Discoverability |
| 5 | Console Easter egg | `app.vue` | 15 min | Personality touch |

### Post-Launch / Ongoing

| Task | Effort | When |
|------|--------|------|
| Write 1 blog post per week (maintain thought leadership) | 2-3 hrs/week | Ongoing |
| Set up TinaCMS or Prose.io for web-based blog editing | 3 hrs | When you want a visual editor |
| Add Google Analytics or Plausible | 30 min | After launch |
| Get custom domain (ayushjaipuriar.dev) | 1 hr | When ready |
| Add testimonials/recommendations section | 2 hrs | When you have quotes |
| Optimize images (WebP, responsive sizes, nuxt-image) | 2 hrs | Performance pass |
| Update LinkedIn profile to match portfolio | 30 min | After portfolio is live |

---

## Detailed Recommendations per Page

### Homepage (`/`)

**Current:** Minimal hero with name, generic tagline, 3 buttons, photo, and nothing else.

**Target:** A dynamic hub that immediately communicates who Ayush is, what he does, and why he's impressive.

**Recommended Layout (top to bottom):**

1. **Hero Section** — Animated gradient mesh background. "Available for opportunities" badge. Name with gradient text. New tagline: "AI Agent Engineer & Senior Full-Stack Developer". Subtext: "Building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech." Two CTAs: "See My Work" (primary), "Download Resume" (secondary). Profile photo with gradient border ring.

2. **Key Metrics Bar** — Horizontal strip with animated counters: "6+ Years Experience" | "TB-Scale Systems" | "30+ Enterprise Clients" | "92% Performance Gains" | "Production AI Agents"

3. **Featured Projects** (2-3 cards) — The best case studies: AI Agents at TransUnion, TB-Scale Search, Enterprise Parsing Engine. Each with a brief description, tech tags, and "Read Case Study" link. Cards with glassmorphism and hover tilt effects.

4. **Skills Snapshot** — Top 8-10 skills with icons: LangChain, Java, Spring Boot, Python, AWS, Docker, PostgreSQL, React. "See All Skills" link.

5. **Latest Blog Posts** (2-3 cards) — Most recent posts. When the blog has content, this auto-populates.

6. **"Let's Connect" Mini Section** — Brief line + "Get In Touch" button + social links.

### About Page (`/about`)

**Current:** Wall of text resume dump.

**Target:** Visual storytelling of career journey + updated TransUnion description.

**Key Changes:**
1. Update TransUnion description to reflect current AI Agent work: Leading the Insights AI Agent Team, building production agents with LangChain/LangGraph, MLFlow deployment, Apache Superset integration, TB-scale search with geofencing
2. Add career timeline visualization (animated on scroll)
3. Add key achievement callout cards with numbers
4. Fix Champ Award to TransUnion
5. Add "KIIT ECELL, KodeRunners" to education
6. Add "What Drives Me" personal section (shows personality)
7. Add resume download button

### Skills Page (`/skills`)

**Current:** Flat grid of 60+ skills, all looking identical.

**Target:** Strategic skill presentation that highlights core strengths.

**Key Changes:**
1. **Tiered presentation:**
   - "Core Expertise" (tier 1): LangChain/LangGraph, Java 17, Spring Boot, Python, PostgreSQL, AWS, Docker
   - "Proficient" (tier 2): React, Vue, Redis, Kubernetes, MLFlow, etc.
   - "Familiar" (tier 3): Everything else
2. Add icons (devicons or simple-icons)
3. Add context labels: "LangChain/LangGraph — Production AI agents, RAG, multi-agent orchestration"
4. Add years of experience or "Production" / "Side Projects" badges
5. Feature "AI & ML" as its own prominent section: LangChain, LangGraph, MLFlow, LLMOps, RAG, OpenAI, FAISS

### Projects Page (`/projects`)

**Current:** Completely broken (blank page).

**Target:** Showcase of best work, divided into Professional Case Studies and Personal Projects.

**Key Changes:**
1. Fix the render bug
2. Split into two sections: "Professional Work" (case studies) and "Personal Projects" (GitHub repos)
3. Professional Work: AI Agents at TransUnion, TB-Scale Search, Enterprise Parsing Engine, (optionally Invoice Management App)
4. Personal Projects: OnlyYours, Learning Camunda, Learning LangChain, Accountability Agent (if public)
5. Each professional project links to a detailed case study page
6. Each personal project links to GitHub + has a brief description
7. Fix or remove GitHub Calendar (replace with a simpler GitHub stats badge if needed)

### Blog Page (`/blog`)

**Current:** Three generic tutorial posts.

**Target:** Clean, empty blog ready for domain-specific content.

**Key Changes:**
1. Remove all three existing posts
2. Keep the blog infrastructure (Nuxt Content, category filters, pagination)
3. Add an "empty state" that looks intentional: "Blog posts coming soon. In the meantime, check out my projects."
4. Write first real post before launch (AI agents topic recommended)

### Contact Page (`/contact`)

**Current:** Non-functional form + contact info.

**Target:** Working form + clear availability signal.

**Key Changes:**
1. Integrate Formspree (free tier: 50 submissions/month, works with static sites)
2. Add "Open to Opportunities" message: "I'm currently exploring Senior SWE and AI Engineering roles. Based in Hyderabad, open to Bengaluru, remote, or relocation."
3. Keep phone number (owner confirmed)
4. Add Calendly/Cal.com link for scheduling calls (optional but powerful)
5. Add expected response time: "I typically respond within 24-48 hours"

---

## Summary of Changes from v1

| Aspect | v1 Review | v2 Review (Updated) |
|--------|-----------|---------------------|
| **Grade** | C- | D+ (because positioning gap is worse than initially assessed) |
| **Primary Issue** | Broken projects page | Broken projects page + AI agent work completely invisible |
| **Target Persona** | Generic developer | Senior SWE / AI Agent Engineer targeting FAANG/startup lead roles |
| **Tagline** | Keep current | Complete rewrite to lead with AI + enterprise |
| **Projects** | Fix the three learning repos | Replace with professional case studies + add new personal projects (OnlyYours, etc.) |
| **Blog** | Write domain-specific posts alongside existing | Remove all existing, build CMS workflow, write AI-focused content |
| **Design** | Fix bugs only | Apple-inspired "wow factor" overhaul with animations, gradients, micro-interactions |
| **Timeline** | 2-4 weeks casual | 4-week dedicated sprint with daily tasks |
| **TransUnion Description** | Keep current About page text | Major rewrite to reflect AI agent team, LangChain/LangGraph, MLFlow, TB-scale search |
| **Skills Emphasis** | Add proficiency indicators | Complete restructure — tier AI/ML skills as top expertise |

---

*This review (v2) was generated on February 10, 2026 by analyzing the live deployed site, full codebase, LinkedIn profile, Profile PDF resume, and detailed owner interview about current work, career goals, and preferences.*
