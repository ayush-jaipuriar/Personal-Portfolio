<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/**
 * app.vue — Root Vue component.
 *
 * Nuxt wraps every page inside this component. Global layout logic,
 * head defaults, and one-time side effects (like the console easter
 * egg below) belong here.
 *
 * Tailwind directives (@tailwind base / components / utilities) are
 * kept in the <style> block so PostCSS processes them correctly.
 */
import { onMounted } from 'vue'

// JSON-LD Person schema for rich search engine understanding
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ayush Jaipuriar',
        jobTitle: 'AI Agent Engineer & Senior Full-Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'TransUnion',
        },
        url: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/',
        sameAs: [
          'https://github.com/ayush-jaipuriar',
          'https://www.linkedin.com/in/ayush-jaipuriar/',
        ],
        email: 'jaipuriar.ayush@gmail.com',
        knowsAbout: [
          'AI Agent Engineering',
          'LangChain',
          'LangGraph',
          'Python',
          'Java',
          'Spring Boot',
          'AWS',
          'Machine Learning',
          'Full-Stack Development',
        ],
      }),
    },
  ],
})

onMounted(() => {
  // ── Console Easter Egg ──────────────────────────────────────────
  // Styled console.log messages that appear when a developer opens
  // DevTools. `%c` enables CSS styling for the subsequent string.
  // The font-size, color, and spacing mimic a mini "splash screen."
  console.log(
    '%c Hey there, curious developer! 👋',
    'color: #007aff; font-size: 16px; font-weight: bold;'
  )
  console.log(
    "%c I see you're inspecting my code. I like that.\n" +
    "Let's connect: jaipuriar.ayush@gmail.com\n" +
    'Or check out my GitHub: github.com/ayush-jaipuriar',
    'color: #6b7280; font-size: 12px;'
  )
})
</script>

<style>
/* Global styles using Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Reduced-motion preferences — override all animations/transitions */
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
