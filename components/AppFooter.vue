<template>
  <footer class="mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <!-- Copyright -->
        <div class="mb-4 md:mb-0">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex space-x-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Icon name="mdi:github" class="h-6 w-6" aria-hidden="true" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Icon name="mdi:twitter" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
      
      <!-- Easter egg message for developers -->
      <div class="mt-8 text-center text-xs text-gray-500 dark:text-gray-500">
        <p>
          Designed and built with 
          <span role="img" aria-label="love">❤️</span> 
          using Vue.js and Nuxt 3
        </p>
        <!-- Console Easter Egg Script removed from here -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Component logic can go here if needed

onMounted(() => {
  console.info(
    "%c👋 Hello fellow developer!",
    "font-size: 1.5em; font-weight: bold; color: #0c8ee9;"
  );
  console.info(
    "%cThanks for checking out my portfolio. Feel free to explore the code and get in touch if you have any questions!",
    "font-size: 1em; color: #064a86;"
  );
});
</script> 