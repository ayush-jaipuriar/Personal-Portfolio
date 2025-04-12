<template>
  <article class="group flex flex-col md:flex-row gap-6 mb-10">
    <!-- Blog Post Image (Optional) -->
    <div 
      v-if="post.image" 
      class="md:w-1/3 rounded-lg overflow-hidden"
    >
      <NuxtLink :to="post._path">
        <img 
          :src="post.image" 
          :alt="post.title" 
          class="w-full h-full object-cover aspect-video rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </NuxtLink>
    </div>

    <!-- Blog Post Content -->
    <div class="flex-1 flex flex-col">
      <!-- Post Metadata -->
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <!-- Date -->
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        
        <!-- Reading Time -->
        <span class="mx-2">·</span>
        <span>{{ post.readingTime || '5 min read' }}</span>
        
        <!-- Categories -->
        <span v-if="post.categories && post.categories.length" class="mx-2">·</span>
        <div v-if="post.categories && post.categories.length" class="flex gap-2">
          <span 
            v-for="(category, index) in post.categories" 
            :key="index" 
            class="text-apple-blue-600 dark:text-apple-blue-400"
          >
            #{{ category }}
          </span>
        </div>
      </div>
      
      <!-- Post Title -->
      <h2 class="text-xl md:text-2xl font-semibold mb-2 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-200">
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </h2>
      
      <!-- Post Description/Excerpt -->
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {{ post.description }}
      </p>
      
      <!-- Read More Link -->
      <div class="mt-auto">
        <NuxtLink 
          :to="post._path" 
          class="inline-flex items-center text-apple-blue-600 dark:text-apple-blue-400 hover:text-apple-blue-700 dark:hover:text-apple-blue-300 transition-colors duration-200"
        >
          Read more
          <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// Define the expected structure of a blog post
defineProps({
  post: {
    type: Object,
    required: true,
    // Expected post object structure (from Nuxt Content)
    default: () => ({
      _path: '',
      title: '',
      date: '',
      description: '',
      image: '',
      readingTime: '',
      categories: []
    })
  }
});

// Format the date to a readable format
const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  
  const date = new Date(dateStr);
  // Format: Month Day, Year (e.g., January 1, 2023)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script> 