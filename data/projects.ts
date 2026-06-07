/**
 * data/projects.ts
 * Single source of truth for project cards and detail pages.
 */

export interface ImpactMetric {
  value: string
  label: string
}

export interface CaseStudy {
  problem: string
  architecture: string
  diagramUrl?: string          // Path to a static SVG architecture diagram in public/images/diagrams/
  role: string
  approach: string
  keyTechnicalDecisions: string[]
  impactMetrics: ImpactMetric[]
  results: string[]
  outcome: string
  learnings: string
}

export interface Project {
  id: number
  title: string
  slug: string
  type: 'professional' | 'personal'
  company?: string
  description: string
  shortDescription: string
  image: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
  featured: boolean
  personalProduct?: boolean
  order: number
  roleTitle?: string
  relatedPosts?: string[]
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Production AI Agents for Research Analysts',
    slug: 'ai-agents-research-perspective',
    type: 'professional',
    company: 'TransUnion',
    description:
      'Production AI agents that perform NLP-to-SQL conversion, NLP-based searches, Neo4j knowledge graph construction, auto-build dashboards on Apache Superset, RAG-based Q&A on chart data, and anomaly and pattern detection.',
    shortDescription:
      'Production AI agents with LangGraph orchestration at Fortune 500 scale.',
    image: '/images/projects/ai-agents.jpg',
    technologies: ['LangChain', 'LangGraph', 'Python', 'MLFlow', 'Neo4j', 'Apache Superset'],
    featured: true,
    order: 1,
    roleTitle: 'Lead AI Agent Engineer',
    relatedPosts: ['building-production-ai-agents'],
    caseStudy: {
      problem:
        'Research analysts needed to query massive datasets, build visualizations, and detect patterns without depending on specialist engineering teams for every request.',
      architecture:
        'LangGraph supervisor pattern orchestrating specialized agents for NLP-to-SQL, semantic search, knowledge graph construction, Superset dashboard generation, RAG Q&A, and anomaly detection.',
      diagramUrl: '/images/diagrams/ai-agents-research-architecture.svg',
      role:
        'Lead AI Agent Engineer designing the multi-agent architecture, orchestration policies, and production deployment flow through MLFlow.',
      approach:
        'Implemented intent routing through a supervisor agent, introduced strict guardrails and retries, and deployed each capability as independently testable modules for reliability.',
      keyTechnicalDecisions: [
        'Used supervisor-based orchestration to isolate failures in a single sub-agent without collapsing the full workflow.',
        'Adopted graph-state execution so each user task could persist context across chained agent actions.',
        'Split retrieval, generation, and visualization steps to control latency and make debugging production traces easier.',
      ],
      impactMetrics: [
        { value: 'Production', label: 'Deployment Status' },
        { value: 'Multi-Agent', label: 'Architecture Pattern' },
        { value: 'Hours -> Seconds', label: 'Insight Latency Shift' },
      ],
      results: [
        'Agents deployed to production and used by research analysts.',
        'Time-to-insight dropped from manual multi-step workflows to near real-time responses.',
        'New capabilities can be added by introducing new sub-agents without rewriting the core orchestration layer.',
      ],
      outcome:
        'The platform moved from a static analytics workflow to an AI-assisted insight engine, increasing analyst throughput while preserving enterprise reliability requirements.',
      learnings:
        'Production AI systems require strong orchestration semantics, observability, and fallback strategy. Demo-style prompt chaining is not enough at enterprise scale.',
    },
  },
  {
    id: 2,
    title: 'Sub-7s Search Across TB-Scale Data',
    slug: 'tb-scale-search',
    type: 'professional',
    company: 'TransUnion',
    description:
      'Built a search product handling multiple terabytes of data with under 7-second latency using DuckDB, Google Cloud Dataproc, and Trino query engines.',
    shortDescription:
      'Sub-7-second search across multiple terabytes of proprietary data.',
    image: '/images/projects/tb-scale-search.jpg',
    technologies: ['DuckDB', 'Trino', 'Google Cloud Dataproc', 'Kubernetes', 'Java', 'Spring Boot'],
    featured: true,
    order: 2,
    roleTitle: 'Query Routing & Scaling Lead',
    relatedPosts: ['designing-a-gmail-scale-email-system'],
    caseStudy: {
      problem:
        'Users needed reliable search on multi-terabyte proprietary datasets with strict latency targets and region-sensitive data constraints.',
      architecture:
        'Hybrid query stack combining DuckDB for local analytical paths, Trino for federated distributed queries, and Dataproc for heavy workloads, orchestrated by a routing and scaling layer.',
      diagramUrl: '/images/diagrams/tb-scale-search-architecture.svg',
      role:
        'Built core query-routing logic, implemented dynamic pod scaling strategy, and developed geofencing behavior for user and data locality constraints.',
      approach:
        'Profiled query classes, matched each class to the best execution engine, and introduced autoscaling policies based on estimated scan volume before execution.',
      keyTechnicalDecisions: [
        'Used engine specialization (DuckDB vs Trino vs Dataproc) instead of a single universal engine for better latency consistency.',
        'Introduced predictive pod scaling on estimated data volume to reduce cold-start impact on large searches.',
        'Implemented geofencing rules at routing time to enforce data residency constraints before execution.',
      ],
      impactMetrics: [
        { value: '<7s', label: 'Search Latency' },
        { value: 'TB-Scale', label: 'Data Volume' },
        { value: 'Dynamic', label: 'Pod Scaling Model' },
      ],
      results: [
        'Delivered under 7-second search latency for core user journeys.',
        'Reduced infra waste during low traffic with adaptive scaling.',
        'Enabled compliant region-aware search over proprietary datasets.',
      ],
      outcome:
        'The system met enterprise performance expectations at scale while preserving compliance constraints and cost-aware operation.',
      learnings:
        'At very large data volumes, intelligent workload routing and elasticity policies drive performance more than micro-optimizations in a single query engine.',
    },
  },
  {
    id: 3,
    title: '92% Faster Enterprise Parsing APIs',
    slug: 'enterprise-parsing-engine',
    type: 'professional',
    company: 'HighRadius',
    description:
      'BAI, MT940, and CSV financial file parsing engine for 30+ enterprise clients, with configurable reconciliation rules and major performance gains.',
    shortDescription:
      '92% faster API load times for 30+ enterprise financial clients.',
    image: '/images/projects/enterprise-parsing.jpg',
    technologies: ['Java 17', 'Spring Boot', 'Hibernate', 'SQL', 'AWS', 'Redis'],
    featured: true,
    order: 3,
    roleTitle: 'Performance Engineer',
    caseStudy: {
      problem:
        'Enterprise financial workflows depended on parsing heterogeneous file formats at scale, but latency and parser throughput were blocking downstream reconciliation.',
      architecture:
        'Configurable parser framework with format-specific processors, backed by optimized SQL access paths and cache-assisted configuration lookups.',
      role:
        'Led parser enhancements for enterprise accounts, drove the performance initiative, and delivered production improvements across API and parsing pipeline layers.',
      approach:
        'Combined SQL tuning, parser refactoring, and cache strategy improvements to eliminate expensive repeated lookups and reduce parser overhead.',
      keyTechnicalDecisions: [
        'Built parser behavior around a configurable rule model to avoid client-specific code forks.',
        'Targeted top latency hotspots with profiling data before refactoring.',
        'Added caching for high-frequency config reads to stabilize throughput under load.',
      ],
      impactMetrics: [
        { value: '92%', label: 'API Load Time Reduction' },
        { value: '62%', label: 'Parsing Time Reduction' },
        { value: '30+', label: 'Enterprise Clients Supported' },
      ],
      results: [
        'Reduced API load time by 92%.',
        'Reduced parsing time by 62%.',
        'Sustained parser reliability for 30+ enterprise institutions.',
        'Resolved critical SonarQube vulnerabilities in parser modules.',
      ],
      outcome:
        'The parser became a stable, high-throughput core service that improved reconciliation turnaround and reduced operational incidents.',
      learnings:
        'Performance work is most effective when driven by measurable bottlenecks, not assumptions. Small targeted fixes in hot paths can unlock outsized gains.',
    },
  },
  {
    id: 4,
    title: 'Multi-Agent Accountability Bot',
    slug: 'accountability-agent',
    type: 'personal',
    description:
      'Production-grade AI accountability Telegram bot with supervisor architecture, 5 specialized agents, pattern detection, gamification, and weekly AI reporting.',
    shortDescription:
      'Multi-agent AI Telegram bot with supervisor orchestration and gamification.',
    image: '/images/projects/accountability-agent-product.svg',
    technologies: ['Python', 'FastAPI', 'Google Gemini', 'Firestore', 'GCP Cloud Run', 'Docker'],
    githubLink: 'https://github.com/ayush-jaipuriar/accountability_agent',
    featured: false,
    personalProduct: true,
    order: 4,
    roleTitle: 'Solo Product Builder',
    caseStudy: {
      problem:
        'People struggle to stay consistent with personal goals because most habit tools do not adapt to emotional context, patterns, or accountability dynamics.',
      architecture:
        'Supervisor-driven multi-agent system with CheckIn, Query, Emotional, Pattern Detection, and Reporting agents backed by Firestore and Cloud Run.',
      diagramUrl: '/images/diagrams/accountability-agent-architecture.svg',
      role:
        'Designed and implemented the end-to-end architecture including routing, agent contracts, gamification logic, and deployment pipeline.',
      approach:
        'Built custom routing without heavy framework dependency, added pattern detectors and achievement loops, and paired conversational support with structured weekly reports.',
      keyTechnicalDecisions: [
        'Used specialized agent roles instead of one monolithic assistant to improve response quality and maintainability.',
        'Implemented explicit pattern detectors to support actionable coaching instead of generic motivational responses.',
        'Added report generation and export pathways to make progress visible and measurable over time.',
      ],
      impactMetrics: [
        { value: '5', label: 'Specialized Agents' },
        { value: '15+', label: 'Gamification Achievements' },
        { value: '9', label: 'Pattern Detection Types' },
      ],
      results: [
        'Delivered a production-capable Telegram bot with agent supervision.',
        'Introduced streaks, achievements, and partner accountability features.',
        'Enabled weekly AI summaries with chart-based insights and exports.',
      ],
      outcome:
        'The project demonstrates production-minded AI product engineering beyond prototype chatbots, with state management, orchestration, and user retention mechanics.',
      learnings:
        'User-facing AI products need behavior design as much as model quality. Consistency loops, emotional context, and transparent reporting drive sustained engagement.',
    },
  },
  {
    id: 5,
    title: 'Personal Execution PWA with Firebase Intelligence',
    slug: 'forge',
    type: 'personal',
    description:
      'Premium daily planner and personal execution PWA with Today, Plan, Insights, and Settings workspaces, backed by authenticated Firebase state, scheduled analytics, notifications, and backups.',
    shortDescription:
      'Personal execution PWA with Firebase-backed planning, insights, scheduled jobs, and PWA installability.',
    image: '/images/projects/forge.png',
    technologies: ['React 19', 'TypeScript', 'Firebase', 'Firestore', 'Cloud Functions', 'PWA'],
    githubLink: 'https://github.com/ayush-jaipuriar/forge',
    featured: false,
    personalProduct: true,
    order: 5,
    roleTitle: 'Solo Product Builder',
    caseStudy: {
      problem:
        'Generic productivity apps often become passive dashboards instead of helping a demanding user decide what matters today, what should happen next, and what needs adjustment before the day slips.',
      architecture:
        'React, TypeScript, Vite, Material UI, Zustand, and TanStack Query frontend with Firebase Auth, Firestore, Cloud Storage, Firebase Functions, Firebase Hosting, and PWA tooling for authenticated cloud-backed planning workflows.',
      role:
        'Defined the product direction, architecture boundaries, frontend information architecture, Firebase integration strategy, and implementation roadmap across planning, execution, insights, settings, sync, analytics, notifications, and backup services.',
      approach:
        'Built the product around four primary surfaces: Today for daily execution, Plan for week shaping, Insights for review and pattern interpretation, and Settings for account, integrations, backup, notifications, and platform controls.',
      keyTechnicalDecisions: [
        'Separated domain rules, route-level features, and application services so planning logic, analytics, notifications, backup, sync, and settings can evolve independently.',
        'Moved authenticated usage toward Firebase-backed cloud state while keeping guest/demo exploration lightweight and disposable.',
        'Implemented Firebase Functions for scheduled analytics snapshots, notification evaluation, and user backups instead of treating the app as a static frontend.',
      ],
      impactMetrics: [
        { value: 'PWA', label: 'Installable App Shell' },
        { value: '4', label: 'Core Product Surfaces' },
        { value: '3', label: 'Scheduled Backend Pipelines' },
      ],
      results: [
        'Created a premium planner experience spanning daily execution, weekly planning, insights, and settings.',
        'Established Firebase-backed authenticated state, guest/demo mode, sync services, and platform workflows.',
        'Added scheduled Cloud Functions for analytics snapshots, notification evaluation, and backup generation.',
      ],
      outcome:
        'Forge demonstrates end-to-end product ownership: product strategy, information architecture, frontend systems, Firebase platform engineering, PWA delivery, and operational thinking.',
      learnings:
        'A useful personal operating system needs fewer surfaces with stronger intent. The hard product work is reducing friction while preserving enough structure to make daily decisions easier.',
    },
  },
  {
    id: 6,
    title: 'Sensor-Enforced Android Focus Timer',
    slug: 'phone-down',
    type: 'personal',
    description:
      'Native Android focus timer where sessions only progress while the phone is placed face down and stable, using sensors, foreground service orchestration, local-first persistence, and explicit session semantics.',
    shortDescription:
      'Native Android focus app where time only counts while the phone stays face down and stable.',
    image: '/images/projects/phone-down.png',
    technologies: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'DataStore', 'Sensors'],
    githubLink: 'https://github.com/ayush-jaipuriar/phone-down',
    featured: false,
    personalProduct: true,
    order: 6,
    roleTitle: 'Solo Product Builder',
    caseStudy: {
      problem:
        'Most focus timers trust the user to ignore the phone, but the phone itself is the distraction. Phone Down turns focus into a physical ritual: place the phone face down and keep it stable.',
      architecture:
        'Multi-module native Android app with Compose feature modules, a pure domain session engine, Room session history, DataStore settings, sensor evaluation, foreground service runtime, notifications, and local-first privacy boundaries.',
      role:
        'Designed and implemented the product architecture, session semantics, module boundaries, focus UI, persistence model, release-readiness documentation, and verification workflow.',
      approach:
        'Separated strict timing and interruption rules from UI rendering. The app edge translates Android sensor, call, service, and notification signals into domain inputs, while the domain engine decides legal session transitions.',
      keyTechnicalDecisions: [
        'Made the focus mechanism sensor-enforced so elapsed focus time only accumulates when the device is face down and stable.',
        'Kept core session rules in pure domain modules to make interruption handling and recovery testable without relying on UI state.',
        'Chose local-first Room and DataStore persistence so the app works without login, cloud access, billing, or network connectivity.',
      ],
      impactMetrics: [
        { value: 'Local-first', label: 'Privacy Model' },
        { value: 'Multi-module', label: 'Android Architecture' },
        { value: 'Internal Test', label: 'Release Readiness' },
      ],
      results: [
        'Implemented focus states including waiting, arming, active, paused, completed, interruption, and recovery flows.',
        'Built insights, streaks, clean-session tracking, settings, onboarding, privacy policy, and pro/paywall foundations.',
        'Documented release readiness with lint, unit tests, Paparazzi screenshot checks, Compose UI-test coverage, and release build verification.',
      ],
      outcome:
        'Phone Down demonstrates native Android systems thinking: sensors, foreground services, local persistence, domain state machines, privacy constraints, modular architecture, and release discipline.',
      learnings:
        'When behavior depends on real device signals, product correctness has to live below the UI. Explicit state machines and conservative recovery rules make the app more honest and trustworthy.',
    },
  },
  {
    id: 7,
    title: 'Realtime Couples Game with Spring Boot + Expo',
    slug: 'only-yours',
    type: 'personal',
    description:
      'Full-stack realtime couples game where partners link, answer questions, guess each other\'s answers, and review scores, history, stats, badges, and notifications.',
    shortDescription:
      'Realtime couples game with Expo mobile client, Spring Boot backend, WebSocket gameplay, JWT auth, stats, and badges.',
    image: '/images/projects/only-yours-product.png',
    technologies: ['Expo', 'React Native', 'Spring Boot', 'PostgreSQL', 'WebSocket/STOMP', 'JWT'],
    githubLink: 'https://github.com/ayush-jaipuriar/only-yours',
    featured: false,
    personalProduct: true,
    order: 7,
    roleTitle: 'Solo Product Builder',
    caseStudy: {
      problem:
        'Couples games need more than static questions: partners have to link, play together in real time, recover interrupted sessions, and see meaningful results without the experience falling out of sync.',
      architecture:
        'Spring Boot 3.5 backend with Spring Security, JPA, PostgreSQL, Flyway, JWT, WebSocket/STOMP gameplay events, and an active Expo / React Native mobile client for auth, partner linking, gameplay, history, stats, settings, and notifications.',
      role:
        'Built the full-stack product architecture across backend business rules, mobile flows, realtime game state, auth/session handling, partner lifecycle, notification hooks, and testing/documentation.',
      approach:
        'Made the backend the durable source of truth for users, couples, sessions, answers, scores, stats, badges, history, unlink/recovery flows, and realtime events while the Expo client focuses on state presentation and mobile UX.',
      keyTechnicalDecisions: [
        'Used WebSocket/STOMP for invitation, gameplay, continuation, and results events so both partners stay synchronized.',
        'Modeled couple lifecycle explicitly with pending, active, unlinked, cooldown, and recovery states instead of a simple join table.',
        'Migrated current auth toward email/password with refresh-token rotation while keeping historical Google sign-in code disabled in the active backend path.',
      ],
      impactMetrics: [
        { value: '2 Round', label: 'Gameplay Loop' },
        { value: 'Realtime', label: 'WebSocket Sync' },
        { value: 'Expo-first', label: 'Active Mobile Client' },
      ],
      results: [
        'Implemented partner linking, category selection, invitations, two-round gameplay, scoring, and results.',
        'Added active-session continuation, 7-day expiry, history, dashboard stats, badges, onboarding, themes, settings, profile, unlink, and recovery flows.',
        'Maintained backend and Expo tests around auth, gameplay, state, notification, accessibility, and screen flows.',
      ],
      outcome:
        'OnlyYours demonstrates full-stack mobile product engineering with realtime synchronization, durable backend rules, relational data modeling, auth, notifications, and polished client flows.',
      learnings:
        'Realtime product UX is only as stable as the backend state model. Recovery, expiry, duplicate prevention, and lifecycle rules need to be first-class, not afterthoughts.',
    },
  },
  {
    id: 8,
    title: 'Learning Camunda',
    slug: 'learning-camunda',
    type: 'personal',
    description:
      'Dispute resolution workflow demo integrating PII validation with Camunda BPM, Spring Boot, and PostgreSQL.',
    shortDescription:
      'Camunda BPM workflow automation with Spring Boot.',
    image: '/images/projects/learning-camunda.jpg',
    technologies: ['Java', 'Camunda BPM', 'Spring Boot', 'Gradle', 'PostgreSQL'],
    githubLink: 'https://github.com/ayush-jaipuriar/Learning-Camunda',
    featured: false,
    order: 8,
  },
  {
    id: 9,
    title: 'Learning LangChain',
    slug: 'learning-langchain',
    type: 'personal',
    description:
      'Hands-on exploration of LangChain with OpenAI and FAISS for question-answering and retrieval workflows.',
    shortDescription:
      'LangChain + OpenAI + FAISS for LLM-powered Q&A.',
    image: '/images/projects/learning-langchain.jpg',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Jupyter Notebook'],
    githubLink: 'https://github.com/ayush-jaipuriar/Learning-Langchain',
    featured: false,
    order: 9,
  },
]

// Export projects array for sitemap generation
export const allProjects = projects

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured).sort((a, b) => a.order - b.order)

export const getPersonalProductProjects = () =>
  projects.filter((project) => project.personalProduct).sort((a, b) => a.order - b.order)

export const getProjectsByType = (type: 'professional' | 'personal') =>
  projects.filter((project) => project.type === type).sort((a, b) => a.order - b.order)

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)

export const getAdjacentProjects = (slug: string) => {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const index = sorted.findIndex((project) => project.slug === slug)
  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null,
  }
}
