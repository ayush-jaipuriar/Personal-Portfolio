<template>
  <article
    class="group flex flex-col md:flex-row gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <!-- Blog Post Image (Optional) -->
    <div v-if="post.image" class="md:w-1/3 rounded-lg overflow-hidden">
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
      <div
        class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mb-2"
      >
        <!-- Author -->
        <span class="font-medium text-gray-700 dark:text-gray-300">
          {{ post.author || 'Ayush Jaipuriar' }}
        </span>
        <span>·</span>

        <!-- Date -->
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>

        <!-- Reading Time -->
        <span>·</span>
        <span>{{ post.readingTime || '5 min read' }}</span>

        <!-- Categories -->
        <template v-if="post.categories && post.categories.length">
          <span>·</span>
          <div class="flex gap-1.5">
            <span
              v-for="(category, index) in post.categories"
              :key="index"
              class="text-apple-blue-600 dark:text-apple-blue-400"
            >
              #{{ category }}
            </span>
          </div>
        </template>
      </div>

      <!-- Post Title -->
      <h2
        class="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-200"
      >
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
          class="inline-flex items-center text-apple-blue-600 dark:text-apple-blue-400 hover:text-apple-blue-700 dark:hover:text-apple-blue-300 font-medium transition-colors duration-200"
        >
          Read more
          <Icon
            name="heroicons:arrow-right"
            class="ml-1 h-4 w-4"
            aria-hidden="true"
          />
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
    default: () => ({
      _path: '',
      title: '',
      date: '',
      description: '',
      image: '',
      readingTime: '',
      categories: [],
      author: 'Ayush Jaipuriar',
    }),
  },
})

// Format the date to a readable format
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''

  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
