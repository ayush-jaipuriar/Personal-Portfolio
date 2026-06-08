<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div v-if="project && detail" class="max-w-5xl mx-auto">
      <div class="mb-8">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-signal-400 transition-colors"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Projects
        </NuxtLink>
      </div>

      <header class="mb-10">
        <div class="mb-4 flex flex-wrap items-center gap-2">
          <span
            :class="[
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
              project.type === 'professional'
                ? 'bg-apple-blue-100 dark:bg-signal-900/30 text-apple-blue-700 dark:text-signal-300'
                : 'bg-apple-blue-100 dark:bg-signal-900/30 text-apple-blue-700 dark:text-signal-300',
            ]"
          >
            {{ project.type === 'professional' ? 'Case Study' : 'Personal Project' }}
          </span>
          <span v-if="project.company" class="text-sm text-gray-500 dark:text-gray-400">
            {{ project.company }}
          </span>
        </div>

        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {{ project.title }}
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {{ project.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-if="project.liveLink"
            :href="project.liveLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-apple-blue-600 dark:bg-signal-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-apple-blue-700 dark:hover:bg-signal-400 transition-colors"
          >
            <Icon name="heroicons:globe-alt" class="mr-2 h-5 w-5" aria-hidden="true" />
            Live Demo
          </a>
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg border border-gray-300 dark:border-graphite-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-graphite-900 transition-colors"
          >
            <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
            View Repository
          </a>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-full bg-gray-100 dark:bg-graphite-900 px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </div>
      </header>

      <!-- Executive Summary Panel -->
      <div class="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl border border-gray-200 dark:border-graphite-800 bg-gray-50/50 dark:bg-graphite-950/30 backdrop-blur-sm">
        <div class="flex flex-col">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">My Role</span>
          <span class="mt-1.5 text-base font-bold text-gray-900 dark:text-white leading-tight">
            {{ project.roleTitle || 'Solo Product Builder' }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Core Stack</span>
          <span class="mt-1.5 text-base font-bold text-gray-900 dark:text-white leading-tight">
            {{ project.technologies.slice(0, 3).join(', ') }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scope</span>
          <span class="mt-1.5 text-base font-bold text-gray-900 dark:text-white leading-tight">
            {{ project.type === 'professional' ? 'Production Deployed' : 'Active Release' }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Primary Outcome</span>
          <span class="mt-1.5 text-base font-bold text-apple-blue-600 dark:text-signal-400 leading-tight">
            {{ detail?.impactMetrics?.[0]?.value || 'N/A' }}
            <span class="block text-xs font-normal text-gray-500 dark:text-gray-400 mt-0.5">
              {{ detail?.impactMetrics?.[0]?.label || '' }}
            </span>
          </span>
        </div>
      </div>

      <!-- Confidentiality Note for Professional Case Studies -->
      <div
        v-if="project.type === 'professional'"
        class="mb-8 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/10 p-4"
      >
        <div class="flex items-start gap-3 text-sm text-amber-800 dark:text-amber-300">
          <Icon name="heroicons:shield-exclamation" class="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          <p class="leading-relaxed">
            <strong>Confidentiality Note:</strong> Details have been generalized to respect employer confidentiality and non-disclosure agreements, while preserving the core system architectures, trade-offs, and business impacts.
          </p>
        </div>
      </div>

      <div class="mb-12 overflow-hidden rounded-2xl border border-gray-200 dark:border-graphite-800">
        <img :src="toAssetPath(project.image)" :alt="project.title" width="1200" height="675" class="w-full h-auto object-cover" />
      </div>

      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            The Challenge
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.problem }}
          </p>
        </section>

        <!--
          System Architecture Diagram — only rendered when the case study
          includes a diagramUrl. This gives visual depth to the technical
          narrative while keeping the section entirely absent for projects
          that don't have a diagram yet.
        -->
        <section v-if="detail.diagramUrl">
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            System Architecture
          </h2>
          <div class="my-4 p-4 bg-gray-50 dark:bg-graphite-950/40 border border-gray-200 dark:border-graphite-700 rounded-lg overflow-x-auto">
            <img
              :src="toAssetPath(detail.diagramUrl)"
              :alt="`${project.title} system architecture diagram`"
              width="960"
              height="500"
              loading="lazy"
              class="w-full h-auto block"
            />
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            Architecture &amp; Approach
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.architecture }}
          </p>
          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.approach }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            My Role &amp; Contributions
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.role }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            Key Technical Decisions
          </h2>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li
              v-for="decision in detail.keyTechnicalDecisions"
              :key="decision"
              class="flex items-start gap-3"
            >
              <Icon name="heroicons:check-badge" class="mt-0.5 h-5 w-5 text-apple-blue-600 dark:text-signal-400 flex-shrink-0" aria-hidden="true" />
              <span>{{ decision }}</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            Results &amp; Impact
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div
              v-for="metric in detail.impactMetrics"
              :key="`${metric.label}-${metric.value}`"
              class="rounded-xl border border-gray-200 dark:border-graphite-800 bg-white dark:bg-graphite-950 p-4"
            >
              <p class="text-2xl font-bold text-apple-blue-600 dark:text-signal-400">
                {{ metric.value }}
              </p>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {{ metric.label }}
              </p>
            </div>
          </div>

          <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li v-for="result in detail.results" :key="result">
              {{ result }}
            </li>
          </ul>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.outcome }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            Lessons Learned
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.learnings }}
          </p>
        </section>

        <!-- Related Technical Writing -->
        <section v-if="relatedArticles && relatedArticles.length > 0">
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-graphite-800 text-gray-900 dark:text-white">
            Related Technical Writing
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink
              v-for="article in relatedArticles"
              :key="article._path"
              :to="article._path"
              class="group block p-5 rounded-2xl border border-gray-200 dark:border-graphite-800 bg-white dark:bg-graphite-950 hover:border-apple-blue-500 dark:hover:border-signal-500 hover:shadow-md transition-all duration-300"
            >
              <div class="flex flex-col h-full justify-between">
                <div>
                  <span class="text-xs font-semibold text-apple-blue-600 dark:text-signal-400 uppercase tracking-wider">Article</span>
                  <h3 class="mt-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-signal-400 transition-colors">
                    {{ article.title }}
                  </h3>
                  <p v-if="article.description" class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {{ article.description }}
                  </p>
                </div>
                <div class="mt-4 flex items-center text-sm font-semibold text-apple-blue-600 dark:text-signal-400 group-hover:underline">
                  Read Article
                  <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- End of Case Study CTA -->
      <div class="mt-16 rounded-2xl bg-gradient-to-br from-apple-blue-50 via-white to-apple-blue-50 dark:from-graphite-900 dark:via-graphite-950 dark:to-graphite-900 p-8 text-center border border-gray-200 dark:border-graphite-700">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Interested in similar engineering or AI agent work?
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
          I'm currently looking for Senior SWE and AI Engineering roles. Let's discuss how I can help your team ship systems that scale.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-apple-blue-600 dark:bg-signal-500 hover:bg-apple-blue-700 dark:hover:bg-signal-400 transition-colors shadow-sm"
          >
            Get In Touch
            <Icon name="heroicons:paper-airplane" class="ml-2 h-4 w-4" aria-hidden="true" />
          </NuxtLink>
          <a
            :href="resumeUrl"
            download
            class="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-graphite-800 border border-gray-300 dark:border-graphite-600 hover:bg-gray-50 dark:hover:bg-graphite-800 transition-colors shadow-sm"
          >
            Download Resume
            <Icon name="heroicons:document-arrow-down" class="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="mt-16 border-t border-gray-200 dark:border-graphite-800 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <NuxtLink
            v-if="adjacent.prev"
            :to="`/projects/${adjacent.prev.slug}`"
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-signal-400 transition-colors"
          >
            <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
            {{ adjacent.prev.title }}
          </NuxtLink>
          <span v-else class="text-sm text-gray-400 dark:text-gray-600">No previous project</span>

          <NuxtLink
            v-if="adjacent.next"
            :to="`/projects/${adjacent.next.slug}`"
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-signal-400 transition-colors"
          >
            {{ adjacent.next.title }}
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" aria-hidden="true" />
          </NuxtLink>
          <span v-else class="text-sm text-gray-400 dark:text-gray-600">No next project</span>
        </div>
      </div>
    </div>

    <div v-else class="max-w-4xl mx-auto text-center py-12">
      <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        The project you are looking for does not exist or has been removed.
      </p>
      <NuxtLink
        to="/projects"
        class="inline-flex items-center px-4 py-2 rounded-md text-base font-medium text-white bg-apple-blue-600 dark:bg-signal-500 hover:bg-apple-blue-700 dark:hover:bg-signal-400 transition-colors"
      >
        View All Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CaseStudy } from '~/data/projects'
import { getAdjacentProjects, getProjectBySlug } from '~/data/projects'
import { useAssetPath } from '~/composables/useAssetPath'
import { useRuntimeConfig, useAsyncData } from 'nuxt/app'

interface BlogPost {
  _path: string
  title: string
  description?: string
  date: string
  readingTime?: string
  categories?: string[]
}

declare const queryContent: <T = BlogPost>(...args: any[]) => any

const route = useRoute()
const { toAssetPath } = useAssetPath()
const runtimeConfig = useRuntimeConfig()
const resumeUrl = `${runtimeConfig.app.baseURL}resume/Ayush_Jaipuriar_Resume.pdf`

const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value
})

const project = computed(() =>
  slug.value ? getProjectBySlug(slug.value) : undefined
)

// Fetch related articles using Nuxt Content
const { data: relatedArticles } = await useAsyncData<BlogPost[]>(
  `project-related-articles-${slug.value}`,
  async () => {
    if (!project.value?.relatedPosts || project.value.relatedPosts.length === 0) {
      return []
    }
    const paths = project.value.relatedPosts.map(p => `/blog/${p}`)
    return queryContent<BlogPost>('/blog')
      .where({ _path: { $in: paths } })
      .find()
  },
  {
    watch: [slug]
  }
)

const adjacent = computed(() =>
  project.value
    ? getAdjacentProjects(project.value.slug)
    : { prev: null, next: null }
)

const detail = computed<CaseStudy | null>(() => {
  if (!project.value) return null
  if (project.value.caseStudy) return project.value.caseStudy

  return {
    problem: project.value.description,
    architecture: `${project.value.title} uses ${project.value.technologies.slice(0, 4).join(', ')} as the core stack, with a practical implementation focused on reliability and maintainability.`,
    role: 'I designed and implemented this project end-to-end, including architecture choices, implementation details, and repository documentation.',
    approach: 'Built iteratively from core functionality to polished workflows, validating each feature through real usage and refining based on developer and user experience goals.',
    keyTechnicalDecisions: [
      'Prioritized a modular structure so features could evolve without rewrites.',
      'Used familiar production-grade tooling to keep the architecture realistic and transferable to enterprise work.',
      'Documented setup and behavior clearly to make onboarding and contribution easier.',
    ],
    impactMetrics: [
      { value: 'Personal', label: 'Project Type' },
      { value: `${project.value.technologies.length}`, label: 'Core Technologies' },
      { value: project.value.githubLink ? 'Public Repo' : 'N/A', label: 'Source Availability' },
    ],
    results: [
      'Delivered a complete working implementation with versioned source control.',
      'Captured reusable architecture and tooling patterns for future production projects.',
      'Strengthened practical expertise in modern backend and AI-oriented engineering workflows.',
    ],
    outcome:
      'This project served as a focused environment to test ideas quickly while still following production-minded engineering practices.',
    learnings:
      'Even personal builds benefit from clear architecture boundaries, measurable milestones, and documentation discipline.',
  }
})

useHead({
  title: computed(() =>
    project.value
      ? `${project.value.title} | Ayush Jaipuriar`
      : 'Project Not Found | Ayush Jaipuriar'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        project.value
          ? `Case study of ${project.value.title}: ${project.value.description}`
          : 'Project not found - check out my other projects.'
      ),
    },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:title',
      content: computed(() => project.value?.title || 'Project')
    },
    {
      property: 'og:description',
      content: computed(() => project.value?.description || 'Project case study by Ayush Jaipuriar')
    },
    {
      property: 'og:image',
      content: computed(() => {
        if (!project.value?.image) return 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png'
        const img = project.value.image
        if (img.startsWith('http')) return img
        return `https://ayush-jaipuriar.github.io/Personal-Portfolio${img}`
      })
    },
    {
      property: 'og:url',
      content: computed(() => `https://ayush-jaipuriar.github.io/Personal-Portfolio/projects/${route.params.slug}`)
    },
    {
      name: 'twitter:title',
      content: computed(() => project.value?.title || 'Project')
    },
    {
      name: 'twitter:description',
      content: computed(() => project.value?.shortDescription || project.value?.description || 'Project case study')
    },
    {
      name: 'twitter:image',
      content: computed(() => {
        if (!project.value?.image) return 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png'
        const img = project.value.image
        if (img.startsWith('http')) return img
        return `https://ayush-jaipuriar.github.io/Personal-Portfolio${img}`
      })
    },
  ],
})
</script>