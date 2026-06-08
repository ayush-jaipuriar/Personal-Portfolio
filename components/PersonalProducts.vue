<template>
  <section class="py-16 bg-gray-50/70 dark:bg-graphite-950/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-apple-blue-600 dark:text-signal-400">
            Personal Products
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Complete products, not just repositories
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            End-to-end builds where I shaped the product idea, architecture, user flows, backend/platform decisions, and release discipline.
          </p>
        </div>

        <NuxtLink
          to="/projects"
          class="inline-flex w-fit items-center rounded-lg border border-apple-blue-200 px-5 py-2.5 text-sm font-semibold text-apple-blue-600 transition-colors hover:bg-apple-blue-50 dark:border-signal-800 dark:text-signal-400 dark:hover:bg-signal-900/20"
        >
          View all projects
          <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article
          v-for="(project, index) in products"
          :key="project.id"
          v-motion-fade-visible-once
          :delay="index * 120"
          class="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-apple-blue-500/50 hover:shadow-apple-md transition-all duration-300 dark:border-graphite-800 dark:bg-graphite-950"
        >
          <!-- Terminal Header Bar -->
          <div class="flex items-center justify-between h-8 px-4 bg-gray-50/80 dark:bg-graphite-950/80 border-b border-gray-200 dark:border-graphite-800 text-xs font-mono select-none">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-red-400/40 border border-red-500/20"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/40 border border-yellow-500/20"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-400/40 border border-green-500/20"></span>
            </div>
            <div class="font-semibold text-[11px] text-gray-500 dark:text-gray-400">
              {{ cardFileName(project.slug) }}
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-apple-blue-500 dark:bg-signal-400 animate-pulse"></span>
              <span class="text-[10px] font-bold text-apple-blue-600 dark:text-signal-400 uppercase tracking-wider">{{ cardStatus(project.slug) }}</span>
            </div>
          </div>

          <div class="grid h-full grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="relative block min-h-[220px] overflow-hidden bg-gray-100 dark:bg-graphite-900"
              :aria-label="`Open ${project.title} product case study`"
            >
              <img
                :src="toAssetPath(project.image)"
                :alt="project.title"
                width="800"
                height="450"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" aria-hidden="true"></div>
            </NuxtLink>

            <div class="flex h-full flex-col p-6">
              <div class="mb-3 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-graphite-900 dark:text-gray-300"
                >
                  {{ tech }}
                </span>
              </div>

              <NuxtLink
                :to="`/projects/${project.slug}`"
                class="text-xl font-bold text-gray-900 transition-colors group-hover:text-apple-blue-600 dark:text-white dark:group-hover:text-signal-400"
              >
                {{ project.title }}
              </NuxtLink>

              <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {{ project.shortDescription }}
              </p>

              <dl class="mt-5 grid grid-cols-3 gap-3">
                <div
                  v-for="metric in project.caseStudy?.impactMetrics.slice(0, 3)"
                  :key="`${project.slug}-${metric.label}`"
                  class="rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-graphite-800 dark:bg-graphite-950/50"
                >
                  <dt class="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                    {{ metric.label }}
                  </dt>
                  <dd class="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                    {{ metric.value }}
                  </dd>
                </div>
              </dl>

              <div class="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <NuxtLink
                  :to="`/projects/${project.slug}`"
                  class="inline-flex items-center rounded-lg bg-apple-blue-600 dark:bg-signal-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-apple-blue-700 dark:hover:bg-signal-400"
                >
                  Read Product Case Study
                  <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" aria-hidden="true" />
                </NuxtLink>
                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Icon name="mdi:github" class="mr-1.5 h-4 w-4" aria-hidden="true" />
                  Repository
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getPersonalProductProjects } from '~/data/projects'
import { useAssetPath } from '~/composables/useAssetPath'

const products = getPersonalProductProjects()
const { toAssetPath } = useAssetPath()

const cardFileName = (slug: string) => {
  const files: Record<string, string> = {
    'accountability-agent': 'supervisor_agent.py',
    forge: 'daily_planner.pwa',
    'phone-down': 'focus_timer.kt',
    'only-yours': 'websocket_sync.java',
  }
  return files[slug] || 'module.conf'
}

const cardStatus = (slug: string) => {
  const statuses: Record<string, string> = {
    'accountability-agent': 'active',
    forge: 'ready',
    'phone-down': 'local',
    'only-yours': 'realtime',
  }
  return statuses[slug] || 'stable'
}
</script>
