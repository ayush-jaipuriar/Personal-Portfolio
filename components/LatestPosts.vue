<template>
  <!--
    LatestPosts.vue — Shows latest 3 blog posts on the homepage.
    
    Key UX concept: "Graceful empty state"
    When no posts exist, instead of showing nothing (which looks broken),
    we display a friendly message redirecting to projects. This turns
    a potential negative into a positive engagement opportunity.
    
    Data source: Nuxt Content's `queryContent('/blog')` composable.
    This queries Markdown files in `content/blog/` like a database.
  -->
  <section class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Insights
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Thoughts on AI engineering, system design, and software craft.
        </p>
      </div>

      <!-- Posts grid — shown when posts exist -->
      <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="group block rounded-2xl overflow-hidden
                 bg-white dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700
                 shadow-apple-sm hover:shadow-apple-lg
                 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="p-6">
            <!-- Date -->
            <time
              v-if="post.date"
              :datetime="post.date"
              class="text-sm text-gray-500 dark:text-gray-400"
            >
              {{ formatDate(post.date) }}
            </time>

            <!-- Title -->
            <h3 class="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>

            <!-- Excerpt / description -->
            <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {{ post.description || 'Read this article to learn more.' }}
            </p>

            <!-- Read more link -->
            <span class="mt-4 inline-flex items-center text-sm font-medium text-apple-blue-600 dark:text-apple-blue-400">
              Read more
              <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty state — shown when no posts exist yet -->
      <div v-else class="text-center py-12">
        <div class="mx-auto w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
          <Icon name="heroicons:pencil-square" class="h-8 w-8 text-gray-400" aria-hidden="true" />
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Blog posts coming soon. In the meantime, check out my projects.
        </p>
        <NuxtLink
          to="/projects"
          class="inline-flex items-center text-sm font-medium
                 text-apple-blue-600 dark:text-apple-blue-400
                 hover:text-apple-blue-700 dark:hover:text-apple-blue-300
                 transition-colors"
        >
          View Projects
          <Icon name="heroicons:arrow-right" class="ml-1.5 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <!-- View all posts link — only shown when posts exist -->
      <div v-if="posts && posts.length > 0" class="text-center mt-10">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-sm font-medium
                 text-apple-blue-600 dark:text-apple-blue-400
                 hover:text-apple-blue-700 dark:hover:text-apple-blue-300
                 transition-colors duration-200"
        >
          View All Posts
          <Icon name="heroicons:arrow-right" class="ml-1.5 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Query the latest 3 blog posts from Nuxt Content.
 * 
 * `useAsyncData` is a Nuxt composable that handles:
 * 1. Server-side data fetching during SSG/SSR
 * 2. Client-side caching so data isn't re-fetched on navigation
 * 3. Suspense integration for loading states
 * 
 * `queryContent('/blog')` queries Markdown files in `content/blog/`.
 * The chained methods work like a query builder:
 * - `.sort({ date: -1 })` = newest first (descending)
 * - `.limit(3)` = only take 3 results
 * - `.find()` = execute the query
 * 
 * If no blog posts exist, `posts` will be an empty array.
 */
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
    .catch(() => [])  // Gracefully handle case where content/blog/ doesn't exist
)

/**
 * Format ISO date string to a human-readable format.
 * Uses the Intl.DateTimeFormat API — a built-in browser API that handles
 * locale-aware date formatting without any library dependency.
 */
function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))
}
</script>
