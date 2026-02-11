<template>
  <!--
    AppFooter.vue — Site-wide footer with 3-column layout.
    
    UX pattern: "Information scent" footer.
    If a user scrolled to the bottom, they're engaged. Give them:
    1. Contact info (brand column)
    2. Navigation shortcuts (quick nav column)
    3. External links (social column)
    
    The 3-column layout collapses to a single stacked column on mobile
    via `md:grid-cols-3`.
  -->
  <footer class="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- 3-column grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1: Brand + contact -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Ayush Jaipuriar
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            AI Agent Engineer &amp; Senior Full-Stack Developer
          </p>
          <a
            href="mailto:jaipuriar.ayush@gmail.com"
            class="inline-flex items-center text-sm text-apple-blue-600 dark:text-apple-blue-400 hover:text-apple-blue-700 dark:hover:text-apple-blue-300 transition-colors"
          >
            <Icon name="heroicons:envelope" class="mr-1.5 h-4 w-4" aria-hidden="true" />
            jaipuriar.ayush@gmail.com
          </a>
          <!-- Availability note -->
          <p class="mt-3 text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            Currently exploring Senior SWE &amp; AI Engineering roles
          </p>
        </div>

        <!-- Column 2: Quick navigation -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Social -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
            Connect
          </h3>
          <div class="flex space-x-4">
            <a
              href="https://github.com/ayush-jaipuriar"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Icon name="mdi:github" class="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-jaipuriar"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:jaipuriar.ayush@gmail.com"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Icon name="heroicons:envelope" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar: copyright + easter egg -->
      <div class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500 dark:text-gray-500">
            &copy; {{ new Date().getFullYear() }} Ayush Jaipuriar. All rights reserved.
          </p>
          <p class="text-xs text-gray-400 dark:text-gray-600">
            Built with Vue.js &amp; Nuxt 3. Deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]
</script>
