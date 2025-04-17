<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot /> <!-- Page content will be injected here -->
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log("%c👋 Hey developer! Thanks for checking out the code. Let's build something amazing! ✨", "color: #4F46E5; font-size: 14px; font-weight: bold;");
})

// Layout-specific logic can go here
</script>

<style scoped>
/* Scoped styles for the layout */
</style> 