<template>
  <article
    ref="cardRef"
    class="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-apple-sm hover:shadow-apple-lg transition-all duration-300"
  >
    <div class="border-l-4 border-apple-blue-600 h-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 h-full">
        <NuxtLink
          :to="`/projects/${project.slug}`"
          class="lg:col-span-5 block overflow-hidden bg-gray-100 dark:bg-gray-800"
          :aria-label="`Read case study: ${project.title}`"
        >
          <img
            :src="toAssetPath(project.image)"
            :alt="project.title"
            width="800"
            height="600"
            class="h-full w-full object-cover min-h-[220px] lg:min-h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </NuxtLink>

        <div class="lg:col-span-7 p-6 md:p-7 flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-apple-blue-100 dark:bg-apple-blue-900/30 text-apple-blue-700 dark:text-apple-blue-300">
              Case Study
            </span>
            <span v-if="project.company" class="text-sm text-gray-500 dark:text-gray-400">
              {{ project.company }}
            </span>
          </div>

          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors"
          >
            {{ project.title }}
          </NuxtLink>

          <p class="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">
            {{ project.shortDescription }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies.slice(0, 4)"
              :key="tech"
              class="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-auto pt-6">
            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="inline-flex items-center text-sm font-semibold text-apple-blue-600 dark:text-apple-blue-400 group-hover:gap-2 transition-all"
              @click="trackProjectClick"
            >
              Read Case Study
              <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '~/data/projects'
import { useAssetPath } from '~/composables/useAssetPath'
import { useTilt } from '~/composables/useTilt'
import { useAnalytics } from '~/composables/useAnalytics'

const props = defineProps<{
  project: Project
}>()

const { toAssetPath } = useAssetPath()
const { trackEvent } = useAnalytics()

const trackProjectClick = () => {
  trackEvent('project_click', {
    event_category: 'engagement',
    event_label: props.project.slug,
  })
}

// 3D tilt hover — adds subtle perspective rotation following the cursor
const cardRef = ref<HTMLElement | null>(null)
useTilt(cardRef, { maxDeg: 4, transitionMs: 300 })
</script>
