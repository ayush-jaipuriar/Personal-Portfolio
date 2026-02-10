<template>
  <!--
    FeaturedProjects.vue — Showcases top 3-4 projects on the homepage.
    
    Design pattern: "Featured content" with progressive disclosure.
    Shows the strongest work first; "View All Projects" link lets
    interested visitors explore the full portfolio.
    
    Data flows from `data/projects.ts` → `getFeaturedProjects()` helper.
    In Phase 3, this will use a dedicated CaseStudyCard component.
  -->
  <section class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Work
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Selected case studies from my professional career and passion projects.
        </p>
      </div>

      <!-- Project cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="project in featured"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="group block rounded-2xl overflow-hidden
                 bg-white dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700
                 shadow-apple-sm hover:shadow-apple-lg
                 transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Card image — aspect-video maintains 16:9 ratio -->
          <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <!-- Card body -->
          <div class="p-6">
            <!-- Type badge + company -->
            <div class="flex items-center gap-2 mb-3">
              <span
                :class="[
                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                  project.type === 'professional'
                    ? 'bg-apple-blue-100 dark:bg-apple-blue-900/30 text-apple-blue-700 dark:text-apple-blue-300'
                    : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                ]"
              >
                {{ project.type === 'professional' ? 'Professional' : 'Personal' }}
              </span>
              <span v-if="project.company" class="text-sm text-gray-500 dark:text-gray-400">
                @ {{ project.company }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors">
              {{ project.title }}
            </h3>

            <!-- Short description -->
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {{ project.shortDescription }}
            </p>

            <!-- Tech tags — show first 4 technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium
                       bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 4"
                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium
                       bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
              >
                +{{ project.technologies.length - 4 }} more
              </span>
            </div>

            <!-- CTA link -->
            <span class="inline-flex items-center text-sm font-medium text-apple-blue-600 dark:text-apple-blue-400 group-hover:gap-2 transition-all">
              {{ project.caseStudy ? 'Read Case Study' : 'View Project' }}
              <Icon name="heroicons:arrow-right" class="h-4 w-4 ml-1" aria-hidden="true" />
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- View all projects link -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium
                 text-apple-blue-600 dark:text-apple-blue-400
                 border border-apple-blue-200 dark:border-apple-blue-800
                 hover:bg-apple-blue-50 dark:hover:bg-apple-blue-900/20
                 transition-colors duration-200"
        >
          View All Projects
          <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getFeaturedProjects } from '~/data/projects'

/**
 * getFeaturedProjects() returns projects where `featured: true`,
 * sorted by the `order` field. This ensures the homepage always
 * shows the most impressive work in a consistent order.
 */
const featured = getFeaturedProjects()
</script>
