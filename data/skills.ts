/**
 * data/skills.ts — Single source of truth for all skill data.
 *
 * Skills are organized into tiers that control visual prominence:
 *   - core:       Large cards with icon, context, and years badge.
 *   - proficient: Medium cards with icon and name.
 *   - familiar:   Small pill badges.
 *
 * The `category` field groups skills into logical sections on the page.
 * The `usedProfessionally` flag enables a "Production" indicator on core cards.
 */

export interface Skill {
  name: string
  icon?: string
  tier: 'core' | 'proficient' | 'familiar'
  category: 'ai' | 'backend' | 'frontend' | 'data' | 'devops' | 'tools' | 'concepts' | 'soft'
  context?: string
  yearsOfExperience?: number
  usedProfessionally: boolean
}

export const skills: Skill[] = [
  // ─── AI & Machine Learning ─────────────────────────────────────────
  {
    name: 'LangChain / LangGraph',
    icon: 'simple-icons:langchain',
    tier: 'core',
    category: 'ai',
    context: 'Production AI agents, RAG, multi-agent orchestration',
    yearsOfExperience: 1,
    usedProfessionally: true,
  },
  {
    name: 'MLFlow',
    icon: 'simple-icons:mlflow',
    tier: 'core',
    category: 'ai',
    context: 'Model lifecycle management, LLMOps',
    yearsOfExperience: 1,
    usedProfessionally: true,
  },
  {
    name: 'RAG Pipelines',
    icon: 'heroicons:document-magnifying-glass',
    tier: 'core',
    category: 'ai',
    context: 'Retrieval-augmented generation for enterprise data',
    yearsOfExperience: 1,
    usedProfessionally: true,
  },
  {
    name: 'OpenAI API',
    icon: 'simple-icons:openai',
    tier: 'core',
    category: 'ai',
    context: 'LLM integration, prompt engineering',
    yearsOfExperience: 1,
    usedProfessionally: true,
  },
  {
    name: 'FAISS',
    icon: 'heroicons:magnifying-glass-circle',
    tier: 'proficient',
    category: 'ai',
    context: 'Vector similarity search',
    usedProfessionally: true,
  },
  {
    name: 'Claude Code',
    icon: 'simple-icons:anthropic',
    tier: 'proficient',
    category: 'ai',
    context: 'AI-augmented development with subagents and hooks',
    usedProfessionally: true,
  },
  {
    name: 'LLMOps',
    icon: 'heroicons:cog-8-tooth',
    tier: 'proficient',
    category: 'ai',
    context: 'Production deployment, monitoring, iteration',
    usedProfessionally: true,
  },

  // ─── Backend / Core Expertise ──────────────────────────────────────
  {
    name: 'Java (8–17)',
    icon: 'logos:java',
    tier: 'core',
    category: 'backend',
    context: 'Enterprise backend, Spring ecosystem, 6+ years',
    yearsOfExperience: 6,
    usedProfessionally: true,
  },
  {
    name: 'Spring Boot',
    icon: 'logos:spring-icon',
    tier: 'core',
    category: 'backend',
    context: 'Microservices, REST APIs, enterprise applications',
    yearsOfExperience: 5,
    usedProfessionally: true,
  },
  {
    name: 'Python',
    icon: 'logos:python',
    tier: 'core',
    category: 'backend',
    context: 'AI/ML, data pipelines, automation',
    yearsOfExperience: 3,
    usedProfessionally: true,
  },
  {
    name: 'Hibernate',
    icon: 'logos:hibernate',
    tier: 'proficient',
    category: 'backend',
    usedProfessionally: true,
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    tier: 'proficient',
    category: 'backend',
    usedProfessionally: false,
  },

  // ─── Data ──────────────────────────────────────────────────────────
  {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
    tier: 'core',
    category: 'data',
    context: 'TB-scale datasets, query optimization',
    yearsOfExperience: 4,
    usedProfessionally: true,
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql-icon',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: false,
  },
  {
    name: 'Redis',
    icon: 'logos:redis',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },
  {
    name: 'Neo4j',
    icon: 'simple-icons:neo4j',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },
  {
    name: 'DuckDB',
    icon: 'heroicons:circle-stack',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },
  {
    name: 'Trino',
    icon: 'heroicons:server-stack',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },
  {
    name: 'Apache Superset',
    icon: 'simple-icons:apachesuperset',
    tier: 'proficient',
    category: 'data',
    usedProfessionally: true,
  },

  // ─── Frontend ──────────────────────────────────────────────────────
  {
    name: 'React',
    icon: 'logos:react',
    tier: 'proficient',
    category: 'frontend',
    usedProfessionally: true,
  },
  {
    name: 'React Native',
    icon: 'logos:react',
    tier: 'proficient',
    category: 'frontend',
    usedProfessionally: false,
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    tier: 'proficient',
    category: 'frontend',
    usedProfessionally: false,
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    tier: 'proficient',
    category: 'frontend',
    usedProfessionally: true,
  },
  {
    name: 'Redux',
    icon: 'logos:redux',
    tier: 'proficient',
    category: 'frontend',
    usedProfessionally: true,
  },

  // ─── DevOps & Cloud ────────────────────────────────────────────────
  {
    name: 'AWS',
    icon: 'logos:aws',
    tier: 'core',
    category: 'devops',
    context: 'EKS, cloud infrastructure, deployment',
    yearsOfExperience: 3,
    usedProfessionally: true,
  },
  {
    name: 'Docker / Kubernetes',
    icon: 'logos:docker-icon',
    tier: 'core',
    category: 'devops',
    context: 'Container orchestration, microservices deployment',
    yearsOfExperience: 3,
    usedProfessionally: true,
  },
  {
    name: 'Jenkins CI/CD',
    icon: 'logos:jenkins',
    tier: 'proficient',
    category: 'devops',
    usedProfessionally: true,
  },
  {
    name: 'Git / GitHub',
    icon: 'logos:git-icon',
    tier: 'proficient',
    category: 'devops',
    usedProfessionally: true,
  },
  {
    name: 'Linux / BASH',
    icon: 'logos:linux-tux',
    tier: 'proficient',
    category: 'devops',
    usedProfessionally: true,
  },
  {
    name: 'GCP',
    icon: 'logos:google-cloud',
    tier: 'familiar',
    category: 'devops',
    usedProfessionally: true,
  },

  // ─── Tools (familiar tier) ────────────────────────────────────────
  {
    name: 'JUnit / JMeter',
    tier: 'proficient',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Postman',
    icon: 'logos:postman-icon',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'VS Code',
    icon: 'logos:visual-studio-code',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'IntelliJ IDEA',
    icon: 'logos:intellij-idea',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Eclipse',
    icon: 'logos:eclipse-icon',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'JIRA',
    icon: 'logos:jira',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Confluence',
    icon: 'logos:confluence',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Firebase',
    icon: 'logos:firebase',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },
  {
    name: 'DialogFlow',
    icon: 'logos:google-dialogflow',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },
  {
    name: 'ExtJS',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Struts',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: true,
  },
  {
    name: 'Expo',
    icon: 'logos:expo-icon',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },
  {
    name: 'Pandas',
    icon: 'simple-icons:pandas',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },
  {
    name: 'NumPy',
    icon: 'logos:numpy',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },
  {
    name: 'Highcharts',
    icon: 'logos:highcharts',
    tier: 'familiar',
    category: 'tools',
    usedProfessionally: false,
  },

  // ─── Concepts & Methodologies ──────────────────────────────────────
  {
    name: 'Microservices',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'RESTful APIs',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'CI/CD',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'Agile / Scrum',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'Clean Code',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'MVC Architecture',
    tier: 'familiar',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'Dependency Injection',
    tier: 'familiar',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'ORM',
    tier: 'familiar',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'NLP',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'Machine Learning',
    tier: 'proficient',
    category: 'concepts',
    usedProfessionally: true,
  },
  {
    name: 'Web Scraping',
    tier: 'familiar',
    category: 'concepts',
    usedProfessionally: true,
  },

  // ─── Soft Skills ───────────────────────────────────────────────────
  { name: 'Problem Solving', tier: 'core', category: 'soft', usedProfessionally: true },
  { name: 'Technical Communication', tier: 'core', category: 'soft', usedProfessionally: true },
  { name: 'Team Collaboration', tier: 'core', category: 'soft', usedProfessionally: true },
  { name: 'Adaptability', tier: 'proficient', category: 'soft', usedProfessionally: true },
  { name: 'Time Management', tier: 'proficient', category: 'soft', usedProfessionally: true },
  { name: 'Continuous Learning', tier: 'proficient', category: 'soft', usedProfessionally: true },
]

// ── Helper functions ─────────────────────────────────────────────────

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category)
}

export function getSkillsByTier(tier: Skill['tier'], category?: Skill['category']): Skill[] {
  return skills.filter(
    (s) => s.tier === tier && (category ? s.category === category : true)
  )
}
