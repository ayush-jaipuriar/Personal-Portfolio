<template>
  <div>
    <!-- Header with Stats Rail and Grid Background Motif -->
    <div class="relative overflow-hidden bg-grid-motif border-b border-gray-200 dark:border-graphite-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Technical Dossier
            </h1>
             <p class="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
               Real-world case studies from enterprise systems and personal products where I design and implement end-to-end architectures.
             </p>
          </div>
          
          <!-- Stats Rail -->
          <div class="flex flex-row gap-4 flex-wrap bg-white/60 dark:bg-graphite-950/40 p-4 rounded-xl border border-gray-200 dark:border-graphite-800/80 backdrop-blur-sm shadow-sm">
            <div class="flex flex-col pr-4 border-r border-gray-200 dark:border-graphite-700">
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Enterprise</span>
              <span class="text-xl font-bold text-apple-blue-600 dark:text-signal-400 mt-1">{{ enterpriseCount }} Systems</span>
            </div>
            <div class="flex flex-col pr-4 border-r border-gray-200 dark:border-graphite-700 last:border-0 last:pr-0">
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Personal</span>
              <span class="text-xl font-bold text-apple-blue-600 dark:text-signal-400 mt-1">{{ personalProductsCount }} Products</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</span>
              <span class="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">{{ totalProjectsCount }} Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <!-- Filter Tabs -->
      <div class="mb-12 flex flex-wrap gap-2 border-b border-gray-200 dark:border-graphite-800 pb-5">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer',
          activeTab === tab.id
            ? 'bg-apple-blue-600 dark:bg-signal-500 text-white shadow-sm'
            : 'text-gray-650 dark:text-gray-450 hover:bg-gray-100 dark:hover:bg-graphite-900/60 hover:text-gray-900 dark:hover:text-white'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Professional Case Studies Section -->
    <section v-if="filteredProfessionalProjects.length > 0" class="mb-16">
      <div class="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Professional Case Studies
          </h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Architecture, trade-offs, and measurable outcomes from production systems.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <CaseStudyCard
          v-for="(project, index) in filteredProfessionalProjects"
          :key="project.id"
          v-motion-fade-visible-once
          :delay="index * 120"
          :project="project"
        />
      </div>
    </section>

    <!-- Personal Products Section -->
    <section v-if="personalProducts.length > 0" class="mb-16">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal Products
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Complete, end-to-end user-facing products with deployment and release discipline.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in personalProducts"
          :key="project.id"
          v-motion-fade-visible-once
          :delay="index * 120"
          :project="project"
        />
      </div>
    </section>

    <!-- Systems Labs & Learning Experiments Section -->
    <section v-if="learningBuilds.length > 0" class="mb-16">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Systems Labs &amp; Experiments
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Targeted builds and integrations to explore workflow automation, vector indexing, and AI agent frameworks.
        </p>
      </div>

      <!-- High-Density Dossier Table -->
      <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-graphite-800 bg-white dark:bg-graphite-950 shadow-sm">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-graphite-800 text-left text-sm">
          <thead class="bg-gray-50 dark:bg-graphite-950/80 text-xs font-semibold text-gray-550 dark:text-gray-450 uppercase tracking-wider">
            <tr>
              <th scope="col" class="px-6 py-4">Lab Module</th>
              <th scope="col" class="px-6 py-4">Stack / Technologies</th>
              <th scope="col" class="px-6 py-4 text-right">Repository</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-graphite-800 text-gray-700 dark:text-gray-300">
            <tr
              v-for="project in learningBuilds"
              :key="project.id"
              class="hover:bg-gray-50/50 dark:hover:bg-graphite-900/30 transition-colors"
            >
              <td class="px-6 py-5">
                <div class="font-mono text-[11px] text-apple-blue-650 dark:text-signal-400 font-semibold mb-1">
                  {{ project.slug === 'learning-camunda' ? 'dispute_workflow.bpmn' : 'qa_retrieval.ipynb' }}
                </div>
                <div class="text-base font-bold text-gray-900 dark:text-white">
                  {{ project.title }}
                </div>
                <div class="mt-1 text-sm text-gray-550 dark:text-gray-400 max-w-xl leading-relaxed">
                  {{ project.description }}
                </div>
              </td>
              <td class="px-6 py-5">
                <div class="flex flex-wrap gap-1.5 max-w-xs">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="rounded bg-gray-150 dark:bg-graphite-900 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:text-gray-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-5 text-right whitespace-nowrap">
                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-apple-blue-600 dark:text-signal-400 hover:underline"
                >
                  Code Repo
                  <Icon name="heroicons:arrow-up-right" class="h-4 w-4" aria-hidden="true" />
                </a>
                <span v-else class="text-gray-400 dark:text-gray-650">N/A</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- GitHub Activity Banner -->
    <section class="max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-graphite-800 bg-gray-50/50 dark:bg-graphite-950/40 p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub Activity</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Prefer browsing code directly? Explore repositories, commits, and project notes.
          </p>
        </div>
        <a
          href="https://github.com/ayush-jaipuriar"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-apple-blue-600 dark:bg-signal-500 px-5 py-3 text-sm font-medium text-white hover:bg-apple-blue-700 dark:hover:bg-signal-400 transition-colors"
        >
          <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
          View GitHub Profile
        </a>
      </div>
    </section>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getProjectsByType } from '~/data/projects'

const professionalProjects = getProjectsByType('professional')
const personalProjects = getProjectsByType('personal')

// Counts for Stats Rail
const enterpriseCount = computed(() => professionalProjects.length)
const personalProductsCount = computed(() => personalProjects.filter(p => p.personalProduct).length)
const totalProjectsCount = computed(() => professionalProjects.length + personalProjects.length)

// Interactive Tabs
const activeTab = ref<'all' | 'ai' | 'enterprise' | 'personal'>('all')

const tabs = [
  { id: 'all', label: 'All Work' },
  { id: 'ai', label: 'AI & Agentic Systems' },
  { id: 'enterprise', label: 'Enterprise Scale' },
  { id: 'personal', label: 'Personal Products' }
] as const

const filteredProfessionalProjects = computed(() => {
  if (activeTab.value === 'all') return professionalProjects
  if (activeTab.value === 'enterprise') return professionalProjects
  if (activeTab.value === 'ai') {
    return professionalProjects.filter(p =>
      p.technologies.some(tech => ['LangChain', 'LangGraph', 'Google Gemini', 'OpenAI'].includes(tech))
    )
  }
  return []
})

const filteredPersonalProjects = computed(() => {
  if (activeTab.value === 'all') return personalProjects
  if (activeTab.value === 'personal') return personalProjects.filter(p => p.personalProduct)
  if (activeTab.value === 'ai') {
    return personalProjects.filter(p =>
      p.technologies.some(tech => ['LangChain', 'LangGraph', 'Google Gemini', 'OpenAI'].includes(tech))
    )
  }
  return []
})

const personalProducts = computed(() => {
  return filteredPersonalProjects.value.filter(p => p.personalProduct)
})

const learningBuilds = computed(() => {
  return filteredPersonalProjects.value.filter(p => !p.personalProduct)
})

useHead({
  title: 'Projects | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content:
        'Professional case studies and personal projects by Ayush Jaipuriar, covering AI agent systems, TB-scale search, and enterprise application engineering.',
    },
    { property: 'og:title', content: 'Projects | Ayush Jaipuriar' },
    { property: 'og:description', content: 'Case studies and projects from AI agents to TB-scale search systems — real production work at Fortune 500 companies and personal experiments.' },
    { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/projects' },
    { name: 'twitter:title', content: 'Projects | Ayush Jaipuriar' },
    { name: 'twitter:description', content: 'Case studies from AI agents to TB-scale search systems at Fortune 500 companies.' },
  ],
})
</script>
