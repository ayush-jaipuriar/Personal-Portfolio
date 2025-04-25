<template>
  <article 
    class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900"
  >
    <!-- Project Image with Aspect Ratio -->
    <div class="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    
    <!-- Project Info -->
    <div class="flex-1 flex flex-col p-6">
      <!-- Tags/Technologies -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="(tech, index) in project.technologies" 
          :key="index"
          class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {{ project.description }}
      </p>
      
      <!-- Links and More Info - Push to Bottom -->
      <div class="mt-auto flex justify-between items-center pt-4">
        <!-- View Project Button -->
        <a 
          v-if="project.githubLink" 
          :href="project.githubLink" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
        >
          View Project
          <Icon name="heroicons:arrow-up-right" class="ml-1 h-4 w-4" aria-hidden="true" />
        </a>
        <!-- Fallback if no GitHub link -->
        <span v-else class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-600">No Link</span>
        
        <!-- External Links -->
        <div class="flex space-x-2">
          <a 
            v-if="project.githubLink" 
            :href="project.githubLink" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="View GitHub Repository"
          >
            <Icon name="mdi:github" class="h-6 w-6" aria-hidden="true" />
          </a>
          <a 
            v-if="project.liveLink" 
            :href="project.liveLink" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="View Live Demo"
          >
            <Icon name="heroicons:globe-alt" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// Define props
defineProps({
  project: {
    type: Object,
    required: true,
    // Expected project object structure
    default: () => ({
      title: '',
      slug: '',
      description: '',
      image: '',
      technologies: [],
      detailsLink: '', // Optional: Will use /projects/{slug} if not provided
      githubLink: '',  // Optional: GitHub repository URL
      liveLink: ''     // Optional: Live demo URL
    })
  }
});
</script> 