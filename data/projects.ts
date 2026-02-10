/**
 * data/projects.ts — Single source of truth for all project data.
 *
 * Used by:
 *   - pages/index.vue (FeaturedProjects component)
 *   - pages/projects/index.vue (full listing)
 *   - pages/projects/[slug].vue (detail page)
 *
 * Real case-study content will be populated in Phase 3.
 * For Phase 2, the interface and placeholder structure is established.
 */

export interface CaseStudy {
  problem: string
  architecture: string
  role: string
  approach: string
  results: string[]
  learnings: string
  gallery?: string[]
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
  // ── Professional Case Studies ──────────────────────────────────
  {
    id: 1,
    title: 'AI Agents for Research Perspective',
    slug: 'ai-agents-research-perspective',
    type: 'professional',
    company: 'TransUnion',
    description:
      'Production AI agents that perform NLP-to-SQL conversion, NLP-based searches, Neo4j knowledge graph construction, auto-build dashboards on Apache Superset, RAG-based Q&A on chart data, and anomaly/pattern detection. Orchestrated via LangGraph supervisor and orchestration patterns, deployed with MLFlow.',
    shortDescription:
      'Production AI agents with LangGraph orchestration at Fortune 500 scale.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    technologies: ['LangChain', 'LangGraph', 'Python', 'MLFlow', 'Neo4j', 'Apache Superset'],
    featured: true,
    order: 1,
    caseStudy: {
      problem: 'Research analysts needed to query massive datasets, build visualizations, and detect patterns — all requiring deep technical skills that slowed down insight generation.',
      architecture: 'LangGraph supervisor pattern orchestrating specialized agents: NLP-to-SQL, NLP search, Neo4j knowledge graph builder, Superset dashboard generator, RAG Q&A engine, and anomaly detector.',
      role: 'Lead AI Agent Engineer — designed the multi-agent architecture, implemented LangGraph orchestration patterns, and deployed agents to production via MLFlow.',
      approach: 'Built a supervisor agent that routes user intents to specialized sub-agents. Each agent is independently testable and deployable. Used LangGraph for state management and orchestration flow control.',
      results: [
        'Agents deployed to production serving research analysts',
        'Reduced time-to-insight from hours to seconds for common queries',
        'Multi-agent architecture enables adding new capabilities without disrupting existing flows',
      ],
      learnings: 'Production AI agents require fundamentally different engineering than demo agents — reliability, cost management, latency budgets, and graceful degradation are critical.',
    },
  },
  {
    id: 2,
    title: 'TB-Scale Search Product',
    slug: 'tb-scale-search',
    type: 'professional',
    company: 'TransUnion',
    description:
      'Built a search product handling multiple terabytes of data with under 7-second search latency. Utilizes DuckDB, Google Cloud Dataproc, and Trino query engines with dynamic pod scaling and geofencing on proprietary datasets.',
    shortDescription:
      'Sub-7-second search across multiple terabytes of proprietary data.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    technologies: ['DuckDB', 'Trino', 'Google Cloud Dataproc', 'Kubernetes', 'Java', 'Spring Boot'],
    featured: true,
    order: 2,
    caseStudy: {
      problem: 'Users needed to search across terabytes of proprietary datasets with acceptable latency, while respecting geofencing and data residency requirements.',
      architecture: 'Distributed query engine leveraging DuckDB for local analytics, Trino for federated queries, and Cloud Dataproc for heavy batch processing. Dynamic pod scaling based on query data volume.',
      role: 'Key developer — designed the query routing layer, implemented dynamic pod scaling, and built geofencing logic for location-based search on proprietary datasets.',
      approach: 'Profiled query patterns to route to the optimal engine (DuckDB vs Trino vs Dataproc). Implemented Kubernetes-based auto-scaling that provisions pods based on estimated query data volume.',
      results: [
        'Under 7-second search latency on TB-scale datasets',
        'Dynamic scaling reduces infrastructure costs during low-traffic periods',
        'Geofencing ensures data residency compliance across regions',
      ],
      learnings: 'At TB-scale, the choice of query engine per query type matters more than optimizing any single engine. Routing intelligence is the key architectural decision.',
    },
  },
  {
    id: 3,
    title: 'Enterprise Parsing Engine',
    slug: 'enterprise-parsing-engine',
    type: 'professional',
    company: 'HighRadius',
    description:
      'BAI/MT940/CSV financial file parsing for 30+ enterprise clients. Configurable rule engine feeding into cash reconciliation features. Achieved 92% API load time reduction and 62% parsing time reduction via SQL tuning and code refactoring.',
    shortDescription:
      '92% faster API load times for 30+ enterprise financial parsing clients.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Java 17', 'Spring Boot', 'Hibernate', 'SQL', 'AWS', 'Redis'],
    featured: true,
    order: 3,
    caseStudy: {
      problem: 'Enterprise clients needed to parse complex financial file formats (BAI, MT940, CSV) at scale, but the existing system suffered from slow API response times and parsing bottlenecks.',
      architecture: 'Configurable rule engine with pluggable parsers for each file format. Results feed into the cash reconciliation pipeline. Backed by optimized SQL queries and Redis caching.',
      role: 'Led development and maintenance of parsing agents for 30+ enterprise clients. Owned the performance optimization initiative that achieved 92% API load time reduction.',
      approach: 'Profiled SQL queries to identify N+1 patterns and missing indexes. Refactored core parsing algorithms for batch processing. Introduced Redis caching for frequently accessed configuration data.',
      results: [
        '92% reduction in API load time',
        '62% decrease in file parsing time',
        'Serving 30+ enterprise financial institution clients',
        '100% SonarQube vulnerability resolution',
      ],
      learnings: 'Performance optimization at enterprise scale is often about identifying the 20% of code paths that cause 80% of latency — systematic profiling beats intuition every time.',
    },
  },

  // ── Personal Projects ──────────────────────────────────────────
  {
    id: 4,
    title: 'Accountability Agent',
    slug: 'accountability-agent',
    type: 'personal',
    description:
      'Production-grade AI accountability Telegram bot with multi-agent supervisor architecture. Features 5 specialized agents (CheckIn, Query, Emotional, Pattern Detection, Reporting), gamification with 15+ achievements, streak tracking, CBT-based emotional support, weekly AI reports with visualization graphs, and data export.',
    shortDescription:
      'Multi-agent AI Telegram bot with supervisor architecture and gamification.',
    image: 'https://images.unsplash.com/photo-1531746790095-e5995ed7bdbe?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'FastAPI', 'Google Gemini', 'Firestore', 'GCP Cloud Run', 'Docker'],
    githubLink: 'https://github.com/ayush-jaipuriar/accountability_agent',
    featured: true,
    order: 4,
  },
  {
    id: 5,
    title: 'OnlyYours',
    slug: 'only-yours',
    type: 'personal',
    description:
      'Full-stack mobile application with React Native frontend and Spring Boot backend. Features Google Auth, JWT authentication, Flyway database migrations, and a REST API architecture.',
    shortDescription:
      'Full-stack React Native + Spring Boot app with Google Auth and JWT.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
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
      'A Dispute Resolution System demo with PII validation integrated using Camunda BPM, Spring Boot, and PostgreSQL.',
    shortDescription:
      'Camunda BPM workflow automation with Spring Boot.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
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
      'Exploring LangChain for building LLM applications, including a customer data Q&A pipeline with OpenAI and FAISS vector search.',
    shortDescription:
      'LangChain + OpenAI + FAISS for LLM-powered Q&A.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Jupyter Notebook'],
    githubLink: 'https://github.com/ayush-jaipuriar/Learning-Langchain',
    featured: false,
    order: 7,
  },
]

/** Helper: get featured projects sorted by order */
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order)

/** Helper: get projects by type */
export const getProjectsByType = (type: 'professional' | 'personal') =>
  projects.filter((p) => p.type === type).sort((a, b) => a.order - b.order)

/** Helper: find a project by slug */
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)

/** Helper: get prev/next projects for navigation */
export const getAdjacentProjects = (slug: string) => {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const idx = sorted.findIndex((p) => p.slug === slug)
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  }
}
