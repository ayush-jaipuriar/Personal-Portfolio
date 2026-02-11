<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-5xl mx-auto">
      <!-- Page Header -->
      <div v-motion-fade-visible-once class="text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From enterprise fintech to production AI systems — here's how I got here and what I'm building next.
        </p>
      </div>

      <!-- Hero: Photo + Summary side-by-side -->
      <div v-motion-fade-visible-once class="flex flex-col md:flex-row gap-10 mb-16">
        <!-- Photo column -->
        <div class="md:w-2/5 flex flex-col items-center md:items-start">
          <div class="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-apple-lg mb-6">
            <img
              :src="toAssetPath('/ayush-jaipuriar.jpeg')"
              alt="Ayush Jaipuriar"
              width="800"
              height="800"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Quick profile card -->
          <div class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-apple-sm">
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3">
                <Icon name="heroicons:map-pin" class="h-4 w-4 text-gray-400" aria-hidden="true" />
                <span class="text-gray-700 dark:text-gray-300">Hyderabad, India</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="heroicons:envelope" class="h-4 w-4 text-gray-400" aria-hidden="true" />
                <a
                  href="mailto:jaipuriar.ayush@gmail.com"
                  class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline"
                >
                  jaipuriar.ayush@gmail.com
                </a>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="heroicons:building-office" class="h-4 w-4 text-gray-400" aria-hidden="true" />
                <span class="text-gray-700 dark:text-gray-300">TransUnion (current)</span>
              </div>
            </div>

            <!-- Social links -->
            <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex gap-4">
              <a
                href="https://github.com/ayush-jaipuriar"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Icon name="mdi:github" class="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-jaipuriar"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            <!-- Resume download -->
            <a
              :href="resumeUrl"
              download
              class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-apple-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-apple-blue-700 transition-colors"
            >
              <Icon name="heroicons:document-arrow-down" class="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        <!-- Summary column — AI-first narrative -->
        <div class="md:w-3/5">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Agent Engineer &amp; Senior Full-Stack Developer
          </h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I build production AI systems at Fortune 500 scale. My career arc runs from deep enterprise backend engineering at HighRadius (a unicorn fintech startup) to AI agent orchestration at TransUnion, where I currently lead the Insights AI Agent Team.
            </p>
            <p>
              Over 6+ years I've shipped everything from TB-scale search engines and high-throughput financial parsers to multi-agent LLM workflows deployed with LangGraph and MLFlow. I bring a rare combination of enterprise-grade systems thinking and hands-on AI engineering — production reliability meets cutting-edge LLM capabilities.
            </p>
          </div>

          <!-- Explicit TransUnion split: current AI work + previous search work -->
          <div class="mt-6 space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">At TransUnion</h3>

            <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:cpu-chip" class="h-4 w-4 text-apple-blue-500" aria-hidden="true" />
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white">
                  AI Agent Engineering (Current)
                </h4>
              </div>
              <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Leading the Insights AI Agent Team as an AI Agent Engineer &amp; Software Developer. Building production agents for NLP-to-SQL conversion, NLP-based search, Neo4j knowledge graph construction, Apache Superset dashboard auto-generation, RAG-based Q&amp;A on chart data, anomaly detection, and missing-pattern detection. Using LangGraph supervisor and orchestration patterns and deploying production workflows with MLFlow. Day-to-day delivery also leverages modern AI coding tools such as Opus 4.6, Codex 5.3, and Claude Code with subagents and hooks.
              </p>
            </div>

            <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:magnifying-glass-circle" class="h-4 w-4 text-apple-blue-500" aria-hidden="true" />
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white">
                  Search Product Development (Previous)
                </h4>
              </div>
              <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Built a TB-scale search product with under 7-second latency using DuckDB, Google Cloud Dataproc, and Trino. Implemented dynamic scaling of search pods and geofencing/location-aware search on proprietary datasets.
              </p>
            </div>

            <div class="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-4 py-3">
              <p class="text-sm font-medium text-amber-800 dark:text-amber-300">
                Won the TransUnion Champ Award (Jan 2025) for work on Research Perspective and CIBIL Dispute Resolution Platform.
              </p>
            </div>
          </div>

          <!-- Reordered technical expertise — AI/ML first -->
          <div class="mt-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Expertise</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:cpu-chip" class="mt-0.5 h-4 w-4 text-apple-blue-500 flex-shrink-0" aria-hidden="true" />
                <span><strong class="text-gray-900 dark:text-white">AI &amp; ML:</strong> LangChain, LangGraph, MLFlow, RAG pipelines, OpenAI API, FAISS, LLMOps, multi-agent orchestration</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:server-stack" class="mt-0.5 h-4 w-4 text-apple-blue-500 flex-shrink-0" aria-hidden="true" />
                <span><strong class="text-gray-900 dark:text-white">Backend:</strong> Java (8–17), Spring Boot, Hibernate, Microservices, REST APIs, Python, FastAPI</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:device-phone-mobile" class="mt-0.5 h-4 w-4 text-apple-blue-500 flex-shrink-0" aria-hidden="true" />
                <span><strong class="text-gray-900 dark:text-white">Frontend:</strong> React, React Native, Vue.js, TypeScript, Redux</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:cloud" class="mt-0.5 h-4 w-4 text-apple-blue-500 flex-shrink-0" aria-hidden="true" />
                <span><strong class="text-gray-900 dark:text-white">DevOps &amp; Cloud:</strong> AWS, GCP, Docker, Kubernetes, Jenkins CI/CD, Linux</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:wrench-screwdriver" class="mt-0.5 h-4 w-4 text-apple-blue-500 flex-shrink-0" aria-hidden="true" />
                <span><strong class="text-gray-900 dark:text-white">Tools:</strong> Git, GitHub, Postman, Jira, Confluence, VS Code, IntelliJ, Eclipse</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Achievement Highlight Cards -->
      <section v-motion-fade-visible-once class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Impact at a Glance
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="card in achievements"
            :key="card.label"
            class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-apple-sm"
          >
            <Icon :name="card.icon" class="h-6 w-6 text-apple-blue-600 dark:text-apple-blue-400 mb-2" aria-hidden="true" />
            <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ card.value }}</p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ card.label }}</p>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">{{ card.context }}</p>
          </div>
        </div>
      </section>

      <!-- Career Timeline -->
      <section v-motion-fade-visible-once class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Career Journey
        </h2>
        <CareerTimeline />
      </section>

      <!-- Education -->
      <section v-motion-fade-visible-once class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Education
        </h2>
        <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-apple-sm">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            BTech — Computer Science
          </h3>
          <p class="text-apple-blue-600 dark:text-apple-blue-400 font-medium">
            Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">June 2017 – June 2021</p>
          <p class="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Foundational CS education covering algorithms, data structures, operating systems, database management, networking, and software engineering methodologies.
          </p>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong class="text-gray-800 dark:text-gray-200">Activities:</strong> KIIT ECELL, KodeRunners
          </p>
        </div>
      </section>

      <!-- Certifications — compact grid -->
      <section v-motion-fade-visible-once class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Certifications
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="cert in certifications"
            :key="cert.title"
            class="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-apple-sm"
          >
            <Icon name="heroicons:academic-cap" class="mt-0.5 h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ cert.title }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{{ cert.note }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What Drives Me -->
      <section v-motion-fade-visible-once class="mb-16">
        <div class="rounded-2xl bg-gradient-to-br from-apple-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 md:p-10 border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Drives Me
          </h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm obsessed with AI — building AI agents, following the latest breakthroughs, and pushing the boundaries of what's possible with LLMs in production. My career has given me the rare combination of deep enterprise engineering experience at both a unicorn fintech startup (HighRadius) and a major Fortune 500 company (TransUnion), both deeply rooted in enterprise tech.
            </p>
            <p>
              I thrive at the intersection of building robust, scalable systems and experimenting with cutting-edge AI. Whether it's optimizing a TB-scale search engine or orchestrating multi-agent LLM workflows, I'm driven by the challenge of shipping production systems that make a real impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssetPath } from '~/composables/useAssetPath'

const runtimeConfig = useRuntimeConfig()
const resumeUrl = `${runtimeConfig.app.baseURL}resume/Ayush_Jaipuriar_Resume.pdf`
const { toAssetPath } = useAssetPath()

useHead({
  title: 'About Me | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content:
        'AI Agent Engineer and Senior Full-Stack Developer with 6+ years building production systems at TransUnion and HighRadius. Specializing in LangChain, LangGraph, and enterprise-scale engineering.',
    },
    { property: 'og:title', content: 'About Me | Ayush Jaipuriar' },
    { property: 'og:description', content: 'AI Agent Engineer at TransUnion with 6+ years building enterprise AI systems, TB-scale search products, and fintech platforms at Fortune 500 companies.' },
    { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/about' },
    { name: 'twitter:title', content: 'About Me | Ayush Jaipuriar' },
    { name: 'twitter:description', content: 'AI Agent Engineer at TransUnion with 6+ years building enterprise AI systems and fintech platforms.' },
  ],
})

const achievements = [
  { icon: 'heroicons:bolt', value: '92%', label: 'API Optimization', context: 'Reduced API load time for enterprise parsing module' },
  { icon: 'heroicons:building-office', value: '30+', label: 'Enterprise Clients', context: 'Parsing agents serving 30+ financial institutions' },
  { icon: 'heroicons:beaker', value: '50+', label: 'Automated Tests', context: 'JUnit and JMeter automation across key modules' },
  { icon: 'heroicons:cpu-chip', value: 'Active', label: 'Production AI Agents', context: 'Building and deploying LangChain/LangGraph agents at TransUnion' },
]

const certifications = [
  { title: 'Modern Java — Functional Programming, Lambdas, Streams & Beyond', note: 'Advanced Java 8+ features' },
  { title: 'Clean Code', note: 'Readable, maintainable software principles' },
  { title: 'DevOps Tools: Git, Jenkins, Docker & Kubernetes', note: 'End-to-end CI/CD tooling' },
  { title: 'Java In-Depth: Become a Complete Java Engineer', note: 'Comprehensive Java platform mastery' },
]
</script>
