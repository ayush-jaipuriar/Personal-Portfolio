<template>
  <!--
    MetricsBar.vue — Key career metrics with scroll-triggered count-up.

    Design pattern: "Social proof bar" — common on SaaS landing pages.
    Shows quantifiable achievements to build immediate credibility.

    Phase 8 upgrade: Numbers now animate from 0 → target when the
    section scrolls into view using the `useCounter` composable
    (requestAnimationFrame + Intersection Observer + easeOutCubic).

    Non-numeric values (like "TB-Scale", "Production") display as-is
    because they can't meaningfully count up.
  -->
  <section ref="sectionRef" class="py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="(metric, index) in metrics"
          :key="metric.label"
          v-motion-fade-visible-once
          :delay="index * 80"
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
          <!-- Animated / static number -->
          <span class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ metric.animated ? `${animatedValues[index]?.current.value ?? 0}${metric.suffix}` : metric.value }}
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
import { ref } from 'vue'
import { useCounter } from '~/composables/useCounter'

/**
 * Metrics data — each metric represents a key career achievement.
 *
 * `animated: true` means the numeric portion will count up.
 * `numericTarget` is the integer we animate to; `suffix` is appended
 * (e.g. "+" after "6", "%" after "92").
 *
 * Non-numeric values (TB-Scale, Production) use `animated: false`
 * and render their `value` string directly.
 */
const metrics = [
  { icon: 'heroicons:clock',        animated: true,  numericTarget: 6, suffix: '+', value: '6+',         label: 'Years Experience' },
  { icon: 'heroicons:server-stack', animated: false, numericTarget: 0, suffix: '',  value: 'TB-Scale',   label: 'Scale of Systems' },
  { icon: 'heroicons:cpu-chip',     animated: false, numericTarget: 0, suffix: '',  value: 'Production', label: 'AI Agents' },
]

/**
 * We use a single ref as the Intersection Observer target.
 * The `useCounter` composable observes this ref and triggers
 * the animation when it enters the viewport (30 % visible).
 */
const sectionRef = ref<HTMLElement | null>(null)

/**
 * Create a counter instance for every animated metric.
 * Non-animated metrics get a placeholder (current stays at 0,
 * but it's never read in the template for those items).
 */
const animatedValues = metrics.map((m) =>
  m.animated
    ? useCounter(m.numericTarget, sectionRef, 1800)
    : { current: ref(0) }
)
</script>
