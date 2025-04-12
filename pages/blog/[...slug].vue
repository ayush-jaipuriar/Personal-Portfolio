<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-3xl mx-auto">
      <!-- Back Link -->
      <div class="mb-8 animate-fade-in">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Blog
        </NuxtLink>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-apple-blue-600"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading post...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 text-red-500 mb-4 mx-auto" aria-hidden="true" />
        <h1 class="text-2xl font-bold mb-2">Post Not Found</h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200"
        >
          Browse All Posts
        </NuxtLink>
      </div>

      <!-- Blog Post Content -->
      <article v-else class="animate-fade-in">
        <!-- Post Header -->
        <header class="mb-12">
          <!-- Post Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{{ data.title }}</h1>
          
          <!-- Post Metadata -->
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <!-- Date -->
            <time :datetime="data.date">{{ formatDate(data.date) }}</time>
            
            <!-- Reading Time -->
            <span class="mx-2">·</span>
            <span>{{ data.readingTime || '8 min read' }}</span>
            
            <!-- Categories -->
            <span v-if="data.categories && data.categories.length" class="mx-2">·</span>
            <div v-if="data.categories && data.categories.length" class="flex gap-2">
              <NuxtLink 
                v-for="(category, index) in data.categories" 
                :key="index" 
                :to="`/blog?category=${category}`" 
                class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline"
              >
                #{{ category }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Featured Image -->
          <div v-if="data.image" class="rounded-2xl overflow-hidden mb-10">
            <img 
              :src="data.image" 
              :alt="data.title" 
              class="w-full h-auto"
            />
          </div>
        </header>

        <!-- Post Content -->
        <div class="prose prose-lg dark:prose-invert mx-auto">
          <ContentRenderer :value="data" />
        </div>

        <!-- Author Section -->
        <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div class="flex items-center">
            <img 
              src="/placeholder-headshot.jpg" 
              alt="Author" 
              class="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Your Name</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Software Developer specializing in modern web technologies and user experience.
              </p>
            </div>
          </div>
        </div>

        <!-- Share Post -->
        <div class="mt-12">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Share this post</h3>
          <div class="flex space-x-4">
            <a 
              :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(window.location.href)}`" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-twitter dark:text-gray-400 dark:hover:text-twitter transition-colors duration-200"
              aria-label="Share on Twitter"
            >
              <Icon name="mdi:twitter" class="h-6 w-6" aria-hidden="true" />
            </a>
            <a 
              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(data.title)}`" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-linkedin dark:text-gray-400 dark:hover:text-linkedin transition-colors duration-200"
              aria-label="Share on LinkedIn"
            >
              <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
            </a>
            <a 
              :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-facebook dark:text-gray-400 dark:hover:text-facebook transition-colors duration-200"
              aria-label="Share on Facebook"
            >
              <Icon name="mdi:facebook" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <div v-if="!pending && !error" class="mt-24">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="relatedPost in relatedPosts" :key="relatedPost._path" class="group">
            <NuxtLink :to="relatedPost._path">
              <div class="mb-2 rounded-lg overflow-hidden">
                <img 
                  :src="relatedPost.image" 
                  :alt="relatedPost.title" 
                  class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 class="font-medium text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-200">
                {{ relatedPost.title }}
              </h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Get the current route params to fetch the correct blog post
const route = useRoute();

// Fetch the blog post content using Nuxt Content
// In a real application, this would use Nuxt Content to fetch the markdown file
// For now, we're using sample data
const { data, pending, error } = await useAsyncData(
  `blog-${route.params.slug.join('/')}`,
  () => {
    // Simulate content fetch with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Sample blog post content
        resolve({
          title: 'Building a Personal Portfolio with Nuxt 3',
          date: '2023-09-15',
          readingTime: '8 min read',
          categories: ['web-development', 'vue', 'nuxt'],
          image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          content: 'This is the main content of the blog post. In a real application, this would be Markdown content rendered by Nuxt Content.'
        });
      }, 500);
    });
  }
);

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

// Sample related posts
const relatedPosts = [
  {
    _path: '/blog/optimizing-website-performance',
    title: 'Optimizing Website Performance: A Comprehensive Guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    _path: '/blog/modern-javascript-features',
    title: 'Modern JavaScript Features Every Developer Should Know',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

// Define metadata for the page
useHead({
  title: computed(() => data.value ? `${data.value.title} | Your Name` : 'Blog Post | Your Name'),
  meta: [
    {
      name: 'description',
      content: computed(() => data.value ? data.value.description || `Read ${data.value.title} by Your Name` : 'Blog post by Your Name')
    }
  ]
});
</script>

<style>
.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose code {
  @apply px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm;
}

.prose pre {
  @apply p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-auto text-sm mb-4;
}

.prose ul, .prose ol {
  @apply mb-4 pl-5;
}

.prose li {
  @apply mb-1;
}

.prose blockquote {
  @apply pl-4 border-l-4 border-gray-300 dark:border-gray-700 italic my-4;
}

.text-twitter {
  color: #1DA1F2;
}

.text-linkedin {
  color: #0077B5;
}

.text-facebook {
  color: #1877F2;
}
</style> 