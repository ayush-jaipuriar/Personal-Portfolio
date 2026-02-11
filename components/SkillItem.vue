<template>
  <!--
    SkillItem — tier-based polymorphic rendering.

    Tier 'core':       Large card with icon, name, context, years badge, and "Production" marker.
    Tier 'proficient': Medium card with icon, name, and optional context.
    Tier 'familiar':   Small pill with optional icon and name only.
  -->

  <!-- CORE — large card -->
  <div
    v-if="tier === 'core'"
    class="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-apple-sm hover:shadow-apple-md transition-all duration-300"
  >
    <!-- Subtle gradient accent on hover -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-apple-blue-50/0 to-purple-50/0 group-hover:from-apple-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-apple-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500"
    />
    <div class="relative flex items-start gap-4">
      <div
        v-if="icon"
        class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700"
      >
        <Icon :name="icon" class="h-7 w-7" aria-hidden="true" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <h3 class="text-base font-bold text-gray-900 dark:text-white">{{ name }}</h3>
          <span
            v-if="yearsOfExperience"
            class="inline-flex items-center rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 px-2 py-0.5 text-xs font-semibold text-apple-blue-700 dark:text-apple-blue-300"
          >
            {{ yearsOfExperience }}+ yr{{ yearsOfExperience > 1 ? 's' : '' }}
          </span>
          <span
            v-if="usedProfessionally"
            class="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-500" />
            Production
          </span>
        </div>
        <p
          v-if="context"
          class="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {{ context }}
        </p>
      </div>
    </div>
  </div>

  <!-- PROFICIENT — medium card -->
  <div
    v-else-if="tier === 'proficient'"
    class="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div
      v-if="icon"
      class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700"
    >
      <Icon :name="icon" class="h-5 w-5" aria-hidden="true" />
    </div>
    <div class="min-w-0">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white truncate">{{ name }}</h3>
      <p
        v-if="context"
        class="text-xs text-gray-500 dark:text-gray-400 truncate"
      >
        {{ context }}
      </p>
    </div>
  </div>

  <!-- FAMILIAR — small pill -->
  <span
    v-else
    class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-200"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="h-3.5 w-3.5 flex-shrink-0"
      aria-hidden="true"
    />
    {{ name }}
  </span>
</template>

<script setup lang="ts">
/**
 * Props mirror the Skill interface from data/skills.ts, but all are individually
 * declared so the component can be used both with `v-bind="skill"` destructuring
 * and manually specified props.
 */
defineProps<{
  name: string
  icon?: string
  tier?: 'core' | 'proficient' | 'familiar'
  context?: string
  yearsOfExperience?: number
  usedProfessionally?: boolean
}>()
</script>
