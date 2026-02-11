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
  order: number
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Agents for Research Perspective',
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
    caseStudy: {
      problem:
        'Research analysts needed to query massive datasets, build visualizations, and detect patterns without depending on specialist engineering teams for every request.',
      architecture:
        'LangGraph supervisor pattern orchestrating specialized agents for NLP-to-SQL, semantic search, knowledge graph construction, Superset dashboard generation, RAG Q&A, and anomaly detection.',
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
    title: 'TB-Scale Search Product',
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
    caseStudy: {
      problem:
        'Users needed reliable search on multi-terabyte proprietary datasets with strict latency targets and region-sensitive data constraints.',
      architecture:
        'Hybrid query stack combining DuckDB for local analytical paths, Trino for federated distributed queries, and Dataproc for heavy workloads, orchestrated by a routing and scaling layer.',
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
    title: 'Enterprise Parsing Engine',
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
    title: 'Accountability Agent',
    slug: 'accountability-agent',
    type: 'personal',
    description:
      'Production-grade AI accountability Telegram bot with supervisor architecture, 5 specialized agents, pattern detection, gamification, and weekly AI reporting.',
    shortDescription:
      'Multi-agent AI Telegram bot with supervisor orchestration and gamification.',
    image: '/images/projects/accountability-agent.jpg',
    technologies: ['Python', 'FastAPI', 'Google Gemini', 'Firestore', 'GCP Cloud Run', 'Docker'],
    githubLink: 'https://github.com/ayush-jaipuriar/accountability_agent',
    featured: true,
    order: 4,
    caseStudy: {
      problem:
        'People struggle to stay consistent with personal goals because most habit tools do not adapt to emotional context, patterns, or accountability dynamics.',
      architecture:
        'Supervisor-driven multi-agent system with CheckIn, Query, Emotional, Pattern Detection, and Reporting agents backed by Firestore and Cloud Run.',
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
    title: 'OnlyYours',
    slug: 'only-yours',
    type: 'personal',
    description:
      'Full-stack mobile application with React Native frontend and Spring Boot backend. Includes Google Auth, JWT authentication, and Flyway-driven database migrations.',
    shortDescription:
      'Full-stack React Native + Spring Boot app with Google Auth and JWT.',
    image: '/images/projects/only-yours.jpg',
    technologies: ['React Native', 'Spring Boot', 'PostgreSQL', 'Google Auth', 'JWT', 'Flyway'],
    githubLink: 'https://github.com/ayush-jaipuriar/only-yours',
    featured: false,
    order: 5,
  },
  {
    id: 6,
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
    order: 6,
  },
  {
    id: 7,
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
    order: 7,
  },
]

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured).sort((a, b) => a.order - b.order)

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
