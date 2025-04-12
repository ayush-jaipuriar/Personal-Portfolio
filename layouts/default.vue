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
// Layout-specific logic can go here
</script>

<style scoped>
/* Scoped styles for the layout */
</style> 