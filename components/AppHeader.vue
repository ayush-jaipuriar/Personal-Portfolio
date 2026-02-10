<template>
  <!--
    AppHeader.vue — Sticky navigation bar.
    
    Design: Glass morphism effect via `backdrop-blur` + semi-transparent bg.
    This technique layers a blurred version of the content behind the header,
    creating a frosted-glass look popularized by Apple's UI design.
    
    Structure:
    - Logo (name) on the left
    - "Open to Work" badge (desktop only, between logo and nav)
    - Navigation links + ThemeToggle on the right (desktop)
    - Hamburger menu (mobile)
  -->
  <header class="sticky top-0 z-50 backdrop-blur bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-between items-center h-16">
        <!-- Left: Logo + Open to Work badge -->
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/"
            class="text-xl font-bold tracking-tight hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
          >
            Ayush Jaipuriar
          </NuxtLink>

          <!--
            "Open to Work" mini-badge — desktop only.
            `hidden md:inline-flex` hides it below 768px to prevent
            the header from feeling cramped on smaller screens.
          -->
          <span class="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            Open to Work
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink
            v-for="item in internalNavItems"
            :key="item.name"
            :to="item.href"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            active-class="text-apple-blue-600 dark:text-apple-blue-400"
          >
            {{ item.name }}
          </NuxtLink>

          <!--
            Resume link uses a native <a> tag instead of NuxtLink.
            Reason: `download` attribute requires a real anchor tag — NuxtLink
            handles client-side navigation via Vue Router, which doesn't
            support the browser's native download behavior.
          -->
          <a
            :href="resumeUrl"
            download
            class="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Icon name="heroicons:document-arrow-down" class="mr-1 h-4 w-4" aria-hidden="true" />
            Resume
          </a>

          <NuxtLink
            to="/contact"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            active-class="text-apple-blue-600 dark:text-apple-blue-400"
          >
            Contact
          </NuxtLink>

          <ThemeToggle class="ml-2" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <ThemeToggle class="mr-2" />
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-apple-blue-500"
            :aria-expanded="isOpen"
            aria-label="Main menu"
          >
            <span class="sr-only">{{ isOpen ? 'Close main menu' : 'Open main menu' }}</span>
            <Icon
              v-if="!isOpen"
              name="heroicons:bars-3"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <Icon
              v-else
              name="heroicons:x-mark"
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <NuxtLink
          v-for="item in internalNavItems"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          active-class="text-apple-blue-600 dark:text-apple-blue-400 bg-gray-100 dark:bg-gray-800"
          @click="isOpen = false"
        >
          {{ item.name }}
        </NuxtLink>

        <!-- Resume download link in mobile menu -->
        <a
          :href="resumeUrl"
          download
          class="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="isOpen = false"
        >
          <Icon name="heroicons:document-arrow-down" class="mr-2 h-5 w-5" aria-hidden="true" />
          Resume
        </a>

        <NuxtLink
          to="/contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          active-class="text-apple-blue-600 dark:text-apple-blue-400 bg-gray-100 dark:bg-gray-800"
          @click="isOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRuntimeConfig } from 'nuxt/app'

// Mobile menu open state
const isOpen = ref(false)
const runtimeConfig = useRuntimeConfig()
const resumeUrl = `${runtimeConfig.app.baseURL}resume/Ayush_Jaipuriar_Resume.pdf`

/**
 * Navigation items — internal links handled by Vue Router.
 * 
 * Order rationale (follows the recruiter's mental model):
 * 1. About Me → "Who is this person?"
 * 2. Skills → "What can they do?"
 * 3. Projects → "What have they built?"
 * 4. Blog → "How do they think?"
 * 5. Contact → "How do I reach them?"
 * 
 * Resume is separate because it uses a native <a> tag with `download`.
 */
const internalNavItems = [
  { name: 'About Me', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
]

// Close mobile menu on route change
useRouter().afterEach(() => {
  isOpen.value = false
})
</script>
