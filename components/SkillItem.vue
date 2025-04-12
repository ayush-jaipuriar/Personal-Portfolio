<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center space-x-3 transition-all duration-300 hover:shadow-md">
    <div v-if="icon" class="flex-shrink-0 h-6 w-6">
      <Icon :name="icon" class="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 dark:text-white">{{ name }}</h3>
      <p v-if="description" class="text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props
defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script> 