<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div v-if="project" class="max-w-4xl mx-auto">
      <div class="mb-8">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Projects
        </NuxtLink>
      </div>

      <div class="mb-10">
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <span
            :class="[
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              project.type === 'professional'
                ? 'bg-apple-blue-100 dark:bg-apple-blue-900/30 text-apple-blue-700 dark:text-apple-blue-300'
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
            ]"
          >
            {{ project.type === 'professional' ? 'Professional' : 'Personal' }}
          </span>
          <span v-if="project.company" class="text-sm text-gray-500 dark:text-gray-400">
            @ {{ project.company }}
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ project.title }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-4 mb-8">
        <a
          v-if="project.liveLink"
          :href="project.liveLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors"
        >
          <Icon name="heroicons:globe-alt" class="mr-2 h-5 w-5" aria-hidden="true" />
          Live Demo
        </a>
        <a
          v-if="project.githubLink"
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
          View Code
        </a>
      </div>

      <div class="mb-12">
        <h2 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-auto object-cover"
        />
      </div>

      <div v-if="project.caseStudy" class="space-y-10">
        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Problem
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.caseStudy.problem }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Architecture
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.caseStudy.architecture }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            My Role
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.caseStudy.role }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Approach
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.caseStudy.approach }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Results
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li v-for="result in project.caseStudy.results" :key="result">
              {{ result }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-3 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Learnings
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.caseStudy.learnings }}
          </p>
        </section>
      </div>

      <div v-else class="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-gray-600 dark:text-gray-400">
        Detailed case study content for this project will be expanded in Phase 3.
      </div>

      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
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
        The project you're looking for doesn't exist or has been removed.
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