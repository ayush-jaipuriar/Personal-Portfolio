<template>
  <article
    ref="cardRef"
    class="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-apple-blue-500/50 dark:hover:border-apple-blue-500/50 hover:shadow-apple-md transition-all duration-300"
  >
    <!-- Terminal Header Bar -->
    <div class="flex items-center justify-between h-8 px-4 bg-gray-50/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 text-xs font-mono select-none">
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-red-400/40 border border-red-500/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/40 border border-yellow-500/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-green-400/40 border border-green-500/20"></span>
      </div>
      <div class="font-semibold text-[11px] text-gray-500 dark:text-gray-400">
        {{ cardFileName }}
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-apple-blue-500 animate-pulse"></span>
        <span class="text-[10px] font-bold text-apple-blue-600 dark:text-apple-blue-400 uppercase tracking-wider">{{ cardStatus }}</span>
      </div>
    </div>

    <NuxtLink
      v-if="hasDetailPage"
      :to="detailPath"
      class="relative block w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800"
      :aria-label="`Open ${project.title} case study`"
    >
      <img
        :src="toAssetPath(project.image)"
        :alt="project.title"
        width="800"
        height="450"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </NuxtLink>

    <a
      v-else-if="project.githubLink"
      :href="project.githubLink"
      target="_blank"
      rel="noopener noreferrer"
      class="relative block w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800"
      :aria-label="`Open ${project.title} on GitHub`"
    >
      <img
        :src="toAssetPath(project.image)"
        :alt="project.title"
        width="800"
        height="450"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </a>

    <div
      v-else
      class="relative block w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <img
        :src="toAssetPath(project.image)"
        :alt="project.title"
        width="800"
        height="450"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="mb-3 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          class="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-300"
        >
          {{ tech }}
        </span>
      </div>

      <NuxtLink
        v-if="hasDetailPage"
        :to="detailPath"
        class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors"
      >
        {{ project.title }}
      </NuxtLink>

      <a
        v-else-if="project.githubLink"
        :href="project.githubLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors"
      >
        {{ project.title }}
      </a>

      <h3 v-else class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h3>

      <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
        {{ project.shortDescription || project.description }}
      </p>

      <div class="mt-auto flex items-center justify-between gap-3">
        <NuxtLink
          v-if="hasDetailPage"
          :to="detailPath"
          class="inline-flex items-center rounded-md bg-apple-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-apple-blue-700 transition-colors"
        >
          Read Case Study
          <Icon name="heroicons:arrow-right" class="ml-1.5 h-4 w-4" aria-hidden="true" />
        </NuxtLink>

        <a
          v-else-if="project.githubLink"
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-md bg-apple-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-apple-blue-700 transition-colors"
        >
          View on GitHub
          <Icon name="heroicons:arrow-up-right" class="ml-1.5 h-4 w-4" aria-hidden="true" />
        </a>

        <span v-else class="text-sm text-gray-400 dark:text-gray-600">No external link</span>

        <div class="flex items-center gap-2">
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View GitHub repository"
          >
            <Icon name="mdi:github" class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            v-if="project.liveLink"
            :href="project.liveLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View live demo"
          >
            <Icon name="heroicons:globe-alt" class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '~/data/projects'
import { useAssetPath } from '~/composables/useAssetPath'
import { useTilt } from '~/composables/useTilt'

const props = defineProps<{
  project: Project
}>()

const isCaseStudy = computed(() => props.project.type === 'professional')
const hasDetailPage = computed(() => props.project.type === 'professional' || Boolean(props.project.caseStudy))
const detailPath = computed(() => `/projects/${props.project.slug}`)
const { toAssetPath } = useAssetPath()

const cardFileName = computed(() => {
  const files: Record<string, string> = {
    'ai-agents-research-perspective': 'agent_orchestrator.py',
    'tb-scale-search': 'query_router.trino',
    'enterprise-parsing-engine': 'parsing_pipeline.java',
    'accountability-agent': 'supervisor_agent.py',
    'forge': 'daily_planner.pwa',
    'phone-down': 'focus_timer.kt',
    'only-yours': 'websocket_sync.java',
    'learning-camunda': 'dispute_workflow.bpmn',
    'learning-langchain': 'qa_retrieval.ipynb'
  }
  return files[props.project.slug] || 'module.conf'
})

const cardStatus = computed(() => {
  const statuses: Record<string, string> = {
    'ai-agents-research-perspective': 'active',
    'tb-scale-search': 'stable',
    'enterprise-parsing-engine': 'optimized',
    'accountability-agent': 'active',
    'forge': 'ready',
    'phone-down': 'local',
    'only-yours': 'realtime',
    'learning-camunda': 'demo',
    'learning-langchain': 'demo'
  }
  return statuses[props.project.slug] || 'stable'
})

// 3D tilt hover — adds subtle perspective rotation following the cursor
const cardRef = ref<HTMLElement | null>(null)
useTilt(cardRef, { maxDeg: 5, transitionMs: 300 })
</script>
