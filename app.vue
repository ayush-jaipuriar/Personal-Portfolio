<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global application setup can go here if needed

// Example of setting global SEO metadata (if using Nuxt SEO)
// import { useHead } from '#imports'

// useHead({
//   htmlAttrs: {
//     lang: 'en'
//   },
//   link: [
//     {
//       rel: 'icon',
//       type: 'image/png',
//       href: '/favicon.png'
//     }
//   ]
// })
</script>

<style>
/* Global styles using Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  /* Add any other global base styles here */
}

/* Example: Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Example: Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style> 