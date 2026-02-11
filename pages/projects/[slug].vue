<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div v-if="project && detail" class="max-w-5xl mx-auto">
      <div class="mb-8">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors"
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
                ? 'bg-apple-blue-100 dark:bg-apple-blue-900/30 text-apple-blue-700 dark:text-apple-blue-300'
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
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
            class="inline-flex items-center rounded-lg bg-apple-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-apple-blue-700 transition-colors"
          >
            <Icon name="heroicons:globe-alt" class="mr-2 h-5 w-5" aria-hidden="true" />
            Live Demo
          </a>
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
            View Repository
          </a>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </div>
      </header>

      <div class="mb-12 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
        <img :src="project.image" :alt="project.title" class="w-full h-auto object-cover" />
      </div>

      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            The Challenge
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.problem }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
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
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            My Role &amp; Contributions
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.role }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Key Technical Decisions
          </h2>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li
              v-for="decision in detail.keyTechnicalDecisions"
              :key="decision"
              class="flex items-start gap-3"
            >
              <Icon name="heroicons:check-badge" class="mt-0.5 h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400 flex-shrink-0" aria-hidden="true" />
              <span>{{ decision }}</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Results &amp; Impact
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div
              v-for="metric in detail.impactMetrics"
              :key="`${metric.label}-${metric.value}`"
              class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
            >
              <p class="text-2xl font-bold text-apple-blue-600 dark:text-apple-blue-400">
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
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Lessons Learned
          </h2>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            {{ detail.learnings }}
          </p>
        </section>
      </div>

      <div class="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <NuxtLink
            v-if="adjacent.prev"
            :to="`/projects/${adjacent.prev.slug}`"
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors"
          >
            <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
            {{ adjacent.prev.title }}
          </NuxtLink>
          <span v-else class="text-sm text-gray-400 dark:text-gray-600">No previous project</span>

          <NuxtLink
            v-if="adjacent.next"
            :to="`/projects/${adjacent.next.slug}`"
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors"
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
        class="inline-flex items-center px-4 py-2 rounded-md text-base font-medium text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors"
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

const route = useRoute()

const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value
})

const project = computed(() =>
  slug.value ? getProjectBySlug(slug.value) : undefined
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
  ],
})
</script>