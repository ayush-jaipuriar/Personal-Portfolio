<template>
  <!--
    MetricsBar.vue — Key career metrics displayed as a horizontal card row.
    
    Design pattern: "Social proof bar" — common on SaaS landing pages.
    Shows quantifiable achievements to build immediate credibility.
    
    Phase 8 will add scroll-triggered count-up animations.
    For now, numbers are static which is perfectly fine for initial launch.
  -->
  <section class="py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="flex flex-col items-center p-4 rounded-xl
                 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                 border border-gray-200/60 dark:border-gray-700/60
                 shadow-apple-sm hover:shadow-apple-md transition-shadow duration-300"
        >
          <!-- Icon — uses Nuxt Icon module (iconify under the hood) -->
          <Icon
            :name="metric.icon"
            class="h-6 w-6 text-apple-blue-600 dark:text-apple-blue-400 mb-2"
            aria-hidden="true"
          />
          <!-- Large number — the eye-catching element -->
          <span class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ metric.value }}
          </span>
          <!-- Small label below -->
          <span class="text-sm text-gray-500 dark:text-gray-400 text-center">
            {{ metric.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Metrics data — each metric represents a key career achievement.
 * 
 * The icons use Heroicons (via the `nuxt-icon` module which wraps Iconify).
 * Heroicons follow a naming convention: `heroicons:icon-name` for outline,
 * `heroicons:icon-name-solid` for solid variants.
 */
const metrics = [
  { icon: 'heroicons:clock',            value: '6+',         label: 'Years Experience' },
  { icon: 'heroicons:server-stack',     value: 'TB-Scale',   label: 'Scale of Systems' },
  { icon: 'heroicons:building-office',  value: '30+',        label: 'Enterprise Clients' },
  { icon: 'heroicons:bolt',             value: '92%',        label: 'Performance Gains' },
  { icon: 'heroicons:cpu-chip',         value: 'Production', label: 'AI Agents' },
]
</script>
