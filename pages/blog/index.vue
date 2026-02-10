<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-6xl mx-auto">
      <!-- Page Header -->
      <div 
        v-motion-fade-visible-once
        class="text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Blog</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My thoughts, tutorials, and insights about web development, technology, and software engineering.
        </p>
      </div>

      <!-- Category Filter -->
      <div 
        v-motion-fade-visible-once
        class="mb-12"
      >
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            @click="selectedCategory = null"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
              selectedCategory === null
                ? 'bg-apple-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            All Posts
          </button>
          <button
            v-for="category in availableCategories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 capitalize',
              selectedCategory === category
                ? 'bg-apple-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ category.replace('-', ' ') }}
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-apple-blue-600"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 text-red-500 mb-4 mx-auto" aria-hidden="true" />
        <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Failed to Load Posts</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          There was an error loading the blog posts. Please try again later.
        </p>
        <button 
          @click="refresh()"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else-if="paginatedPosts.length > 0" class="space-y-8">
        <!-- Posts List -->
        <div 
          v-motion-fade-visible-once
          class="space-y-12"
        >
          <BlogPostItem 
            v-for="post in paginatedPosts" 
            :key="post._path" 
            :post="post"
          />
        </div>

        <!-- Pagination -->
        <div 
          v-if="totalPages > 1"
          v-motion-fade-visible-once
          class="flex justify-center items-center space-x-2 mt-16"
        >
          <!-- Previous Button -->
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            :class="[
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
              currentPage === 1
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            <Icon name="heroicons:chevron-left" class="h-5 w-5 mr-1" aria-hidden="true" />
            Previous
          </button>

          <!-- Page Numbers -->
          <div class="flex space-x-1">
            <!-- First page -->
            <button
              v-if="currentPage > 3"
              @click="goToPage(1)"
              class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
            >
              1
            </button>
            
            <!-- Ellipsis -->
            <span v-if="currentPage > 4" class="px-3 py-2 text-sm text-gray-500">...</span>

            <!-- Page numbers around current page -->
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                page === currentPage
                  ? 'bg-apple-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              ]"
            >
              {{ page }}
            </button>

            <!-- Ellipsis -->
            <span v-if="currentPage < totalPages - 3" class="px-3 py-2 text-sm text-gray-500">...</span>

            <!-- Last page -->
            <button
              v-if="currentPage < totalPages - 2"
              @click="goToPage(totalPages)"
              class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
            >
              {{ totalPages }}
            </button>
          </div>

          <!-- Next Button -->
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            :class="[
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
              currentPage === totalPages
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            Next
            <Icon name="heroicons:chevron-right" class="h-5 w-5 ml-1" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <Icon name="heroicons:document-text" class="h-16 w-16 text-gray-400 mb-4 mx-auto" aria-hidden="true" />
        <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">No Posts Found</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          {{ selectedCategory ? `No posts found in the "${selectedCategory}" category.` : 'No blog posts have been published yet.' }}
        </p>
        <button 
          v-if="selectedCategory"
          @click="selectedCategory = null"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200"
        >
          View All Posts
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useHead, useAsyncData } from 'nuxt/app';

// Define interface for blog post
interface BlogPost {
  _path: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  readingTime?: string;
  categories?: string[];
}

// Nuxt auto-imports queryContent at runtime, but local TS tooling may not always infer it.
declare const queryContent: <T = BlogPost>(...args: any[]) => any;

// Page metadata
useHead({
  title: 'Blog | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content: 'Read the latest blog posts about web development, technology, and software engineering by Ayush Jaipuriar.'
    }
  ]
});

// Reactive state
const currentPage = ref(1);
const selectedCategory = ref<string | null>(null);
const postsPerPage = 6;

// Fetch blog posts using Nuxt Content
const { data: allPosts, pending, error, refresh } = await useAsyncData<BlogPost[]>('blog-posts', () => 
  queryContent<BlogPost>('/blog')
    .sort({ date: -1 }) // Sort by date, newest first
    .find()
);

// Computed properties
const availableCategories = computed(() => {
  if (!allPosts.value) return [];
  
  const categories = new Set<string>();
  allPosts.value.forEach(post => {
    if (post.categories) {
      post.categories.forEach(category => categories.add(category));
    }
  });
  
  return Array.from(categories).sort();
});

const filteredPosts = computed(() => {
  if (!allPosts.value) return [];
  
  if (!selectedCategory.value) return allPosts.value;
  
  return allPosts.value.filter(post => 
    post.categories?.includes(selectedCategory.value!)
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage);
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filteredPosts.value.slice(start, end);
});

const visiblePages = computed(() => {
  const pages: number[] = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

// Methods
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// Reset to first page when category changes
watch(selectedCategory, () => {
  currentPage.value = 1;
});

// Reset to first page when posts change (e.g., after refresh)
watch(filteredPosts, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = 1;
  }
});
</script>

<style scoped>
/* Custom styles for the blog index page */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 