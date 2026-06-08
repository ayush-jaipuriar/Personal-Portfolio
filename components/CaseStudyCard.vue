<template>
  <article
    ref="cardRef"
    class="group overflow-hidden rounded-xl border border-gray-200 dark:border-graphite-800 bg-white dark:bg-graphite-950 hover:border-apple-blue-500/50 dark:hover:border-signal-500/50 hover:shadow-apple-md transition-all duration-300"
  >
    <!-- Terminal Header Bar -->
    <div class="flex items-center justify-between h-8 px-4 bg-gray-50/80 dark:bg-graphite-950/80 border-b border-gray-200 dark:border-graphite-800 text-xs font-mono select-none">
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-red-400/40 border border-red-500/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/40 border border-yellow-500/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-green-400/40 border border-green-500/20"></span>
      </div>
      <div class="font-semibold text-[11px] text-gray-500 dark:text-gray-400">
        {{ cardFileName }}
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-apple-blue-500 dark:bg-signal-400 animate-pulse"></span>
        <span class="text-[10px] font-bold text-apple-blue-600 dark:text-signal-400 uppercase tracking-wider">{{ cardStatus }}</span>
      </div>
    </div>

    <div class="border-l-4 border-apple-blue-600 dark:border-signal-500 h-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 h-full">
        <NuxtLink
          :to="`/projects/${project.slug}`"
          class="lg:col-span-5 block overflow-hidden bg-gray-100 dark:bg-graphite-900"
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
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-apple-blue-100 dark:bg-signal-900/30 text-apple-blue-700 dark:text-signal-300">
              Case Study
            </span>
            <span v-if="project.company" class="text-sm text-gray-500 dark:text-gray-400">
              {{ project.company }}
            </span>
          </div>

          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-signal-400 transition-colors"
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
              class="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-graphite-900 text-gray-700 dark:text-gray-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-auto pt-6">
            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="inline-flex items-center text-sm font-semibold text-apple-blue-600 dark:text-signal-400 group-hover:gap-2 transition-all"
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
import { ref, computed } from 'vue'
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

const cardFileName = computed(() => {
  const files: Record<string, string> = {
    'ai-agents-research-perspective': 'agent_orchestrator.py',
    'tb-scale-search': 'query_router.trino',
    'enterprise-parsing-engine': 'parsing_pipeline.java',
  }
  return files[props.project.slug] || 'module.conf'
})

const cardStatus = computed(() => {
  const statuses: Record<string, string> = {
    'ai-agents-research-perspective': 'active',
    'tb-scale-search': 'stable',
    'enterprise-parsing-engine': 'optimized',
  }
  return statuses[props.project.slug] || 'stable'
})

// 3D tilt hover — adds subtle perspective rotation following the cursor
const cardRef = ref<HTMLElement | null>(null)
useTilt(cardRef, { maxDeg: 4, transitionMs: 300 })
</script>
