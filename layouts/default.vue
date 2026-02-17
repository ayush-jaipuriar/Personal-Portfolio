<template>
  <div class="min-h-screen flex flex-col">
    <!-- Scroll-progress indicator — sits above the header at z-60 -->
    <ScrollProgress />

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot /> <!-- Page content will be injected here -->
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Cookie consent banner — renders once per visitor until they make a choice -->
    <CookieConsent />
  </div>
</template>

<script setup>
// Layout-specific logic can go here.
// Console Easter egg is in app.vue (fires once, not per-layout mount).
</script>

<style scoped>
/* Scoped styles for the layout */
</style> 