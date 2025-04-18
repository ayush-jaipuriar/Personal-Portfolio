<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section 
      v-motion-fade-visible-once
      class="relative py-24 md:py-32 overflow-hidden"
    >
      <!-- Container -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center md:space-x-12">
          <!-- Text Content -->
          <div class="md:w-3/5 mb-12 md:mb-0 animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span class="block mb-2">Hello, I'm</span>
              <span class="bg-gradient-to-r from-apple-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            
            <p class="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Software Developer
            </p>
            
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10">
              I build exceptional and accessible digital experiences for the web. Focused on creating products that are inclusive, performant, and delightful to use.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <NuxtLink 
                to="/projects" 
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
              >
                View My Work
                <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" aria-hidden="true" />
              </NuxtLink>
              
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
              >
                Contact Me
              </NuxtLink>
            </div>
          </div>
          
          <!-- Image/Avatar -->
          <div class="md:w-2/5 animate-slide-in-right">
            <div class="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src="/placeholder-headshot.jpg" 
                alt="Your Name" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Design Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-apple-blue-100 dark:bg-apple-blue-900/20 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
    </section>
    
    <!-- Featured Projects Section Preview -->
    <section 
      v-motion-fade-visible-once
      class="py-12 bg-gray-50 dark:bg-gray-900/50"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Featured Projects</h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and passion for building exceptional digital experiences.
          </p>
        </div>
        
        <!-- Just a preview - will link to full projects page -->
        <div class="flex flex-col items-center">
          <NuxtLink 
            to="/projects" 
            class="inline-flex items-center px-6 py-3 text-base font-medium text-apple-blue-600 dark:text-apple-blue-400 hover:text-apple-blue-700 dark:hover:text-apple-blue-300 transition-colors duration-200"
          >
            View All Projects
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Import { useMotions } from '@vueuse/motion' // REMOVE this import

// Define metadata for the page
useHead({
  title: 'Your Name | Full Stack Software Developer',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio of [Your Name], a full stack software developer specializing in building exceptional digital experiences.'
    }
  ]
});

// // If auto-import isn't working, you might need this: // REMOVE this comment block
// // const motions = useMotions()
</script>

<style>
/* Page-specific styles can go here if needed */
</style> 