<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <NuxtLink 
          to="/" 
          class="text-xl font-bold tracking-tight hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
        >
          Ayush Jaipuriar
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.name" 
            :to="item.href" 
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            active-class="text-apple-blue-600 dark:text-apple-blue-400"
          >
            {{ item.name }}
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
            <!-- Heroicon name: menu (shown when closed) -->
            <Icon 
              v-if="!isOpen" 
              name="heroicons:bars-3" 
              class="block h-6 w-6" 
              aria-hidden="true" 
            />
            <!-- Heroicon name: x (shown when open) -->
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
          v-for="item in navigationItems" 
          :key="item.name" 
          :to="item.href" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          active-class="text-apple-blue-600 dark:text-apple-blue-400 bg-gray-100 dark:bg-gray-800"
          @click="isOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mobile menu open state
const isOpen = ref(false);

// Navigation items
const navigationItems = [
  { name: 'About Me', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Close mobile menu on route change
useRouter().afterEach(() => {
  isOpen.value = false;
});
</script> 