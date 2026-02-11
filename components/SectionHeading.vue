<template>
  <div class="mb-6">
    <div class="flex items-center gap-3 mb-2">
      <div
        v-if="icon"
        class="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700"
      >
        <Icon
          :name="icon"
          class="h-5 w-5 text-gray-600 dark:text-gray-300"
          aria-hidden="true"
        />
      </div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        {{ title }}
      </h2>
    </div>
    <p
      v-if="subtitle"
      class="text-sm text-gray-600 dark:text-gray-400 ml-12"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon?: string
}>()
</script>
