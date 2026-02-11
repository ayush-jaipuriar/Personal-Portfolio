<template>
  <!--
    CareerTimeline.vue — Vertical timeline showing career progression.

    Desktop: alternating left/right cards around a center line.
    Mobile: single-column, left-aligned with a thin left border.

    The current/active role gets a pulsing green indicator to draw
    recruiter attention to the most relevant position.
  -->
  <div class="relative">
    <!-- Vertical center line (desktop only) -->
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
    <!-- Vertical left line (mobile only) -->
    <div class="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>

    <div class="space-y-10 md:space-y-12">
      <div
        v-for="(entry, idx) in timeline"
        :key="entry.period"
        class="relative"
      >
        <!-- Dot on the line -->
        <div
          :class="[
            'absolute z-10 flex items-center justify-center',
            'left-4 md:left-1/2 -translate-x-1/2',
            'w-4 h-4 rounded-full border-2',
            entry.current
              ? 'border-green-500 bg-green-500'
              : 'border-apple-blue-500 bg-white dark:bg-gray-900',
          ]"
        >
          <span
            v-if="entry.current"
            class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"
          ></span>
        </div>

        <!-- Card — alternating sides on desktop -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 450, delay: idx * 90 },
          }"
          :class="[
            'ml-10 md:ml-0 md:w-[calc(50%-2rem)]',
            idx % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0',
          ]"
        >
          <div
            class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-apple-sm hover:shadow-apple-md transition-shadow duration-300"
          >
            <!-- Period badge -->
            <div class="flex items-center gap-2 mb-2">
              <span
                :class="[
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                  entry.current
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
                ]"
              >
                {{ entry.period }}
              </span>
              <span
                v-if="entry.current"
                class="text-xs font-medium text-green-600 dark:text-green-400"
              >
                Current
              </span>
            </div>

            <!-- Role + Company -->
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              {{ entry.role }}
            </h3>
            <p class="text-sm text-apple-blue-600 dark:text-apple-blue-400 font-medium">
              {{ entry.company }}
            </p>

            <!-- Description -->
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ entry.description }}
            </p>

            <!-- Award inline (if present) -->
            <div
              v-if="entry.award"
              class="mt-3 flex items-center gap-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 px-3 py-2 text-sm"
            >
              <Icon name="heroicons:trophy" class="h-4 w-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span class="text-amber-800 dark:text-amber-300 font-medium">{{ entry.award }}</span>
            </div>

            <!-- Tech pills -->
            <div v-if="entry.technologies.length" class="mt-3 flex flex-wrap gap-1.5">
              <span
                v-for="tech in entry.technologies"
                :key="tech"
                class="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Timeline data — most recent first.
 *
 * Each entry captures a distinct career chapter. The `current` flag
 * drives the pulsing indicator and green badge styling so it stands
 * out visually from historical entries.
 *
 * The `award` field is optional and renders an inline trophy callout
 * when present (e.g., TransUnion Champ Award).
 */
interface TimelineEntry {
  period: string
  role: string
  company: string
  description: string
  technologies: string[]
  current?: boolean
  award?: string
}

const timeline: TimelineEntry[] = [
  {
    period: '2024 – Present',
    role: 'AI Agent Engineer & Software Developer',
    company: 'TransUnion',
    description:
      'Leading the Insights AI Agent Team. Building production agents for NLP-to-SQL, knowledge graph construction, dashboard generation, RAG Q&A, and anomaly detection. LangGraph orchestration deployed via MLFlow.',
    technologies: ['LangChain', 'LangGraph', 'Python', 'MLFlow', 'Neo4j', 'Apache Superset'],
    current: true,
    award: 'Champ Award (Jan 2025) — Research Perspective & CIBIL Dispute Resolution',
  },
  {
    period: '2024',
    role: 'Software Developer',
    company: 'TransUnion',
    description:
      'Built a TB-scale search product with under 7-second latency using DuckDB, Trino, and Google Cloud Dataproc. Implemented dynamic pod scaling and geofencing on proprietary datasets.',
    technologies: ['DuckDB', 'Trino', 'Google Cloud Dataproc', 'Kubernetes', 'Java', 'Spring Boot'],
  },
  {
    period: '2023 – 2024',
    role: 'Associate Software Engineer II',
    company: 'HighRadius',
    description:
      'Led parsing agent development for 30+ enterprise clients. Achieved 92% API load time reduction and 62% parsing time decrease through profiling-driven optimization.',
    technologies: ['Java 17', 'Spring Boot', 'Hibernate', 'SQL', 'AWS', 'Redis'],
  },
  {
    period: '2021 – 2023',
    role: 'Associate Software Engineer',
    company: 'HighRadius',
    description:
      'Built critical modules (Account Status, Cash Position Worksheet). Automated 50+ JUnit/JMeter tests and resolved 100% of SonarQube vulnerabilities.',
    technologies: ['Java 8', 'Spring', 'Hibernate', 'MySQL', 'ExtJS', 'Struts'],
  },
  {
    period: '2020 – 2021',
    role: 'Software Engineer Intern',
    company: 'HighRadius',
    description:
      'Built and deployed web scraping agents for payment data collection from portals, email, EDI, and OCR sources. Awarded HighFlyer Intern and Star Team accolades.',
    technologies: ['Java', 'Web Scraping', 'Automation'],
    award: 'HighFlyer Intern & Star Team Award',
  },
  {
    period: '2020',
    role: 'Summer Trainee',
    company: 'HighRadius',
    description:
      'Developed a full-stack invoice management app with ML payment prediction, NLP chatbot (DialogFlow), and interactive analytics dashboard.',
    technologies: ['React', 'Java', 'MySQL', 'Python', 'DialogFlow', 'Highcharts'],
  },
  {
    period: '2017 – 2021',
    role: 'BTech Computer Science',
    company: 'KIIT, Bhubaneswar',
    description:
      'Foundational CS education: algorithms, data structures, OS, databases, networking, and software engineering. Activities: KIIT ECELL, KodeRunners.',
    technologies: [],
  },
]
</script>
