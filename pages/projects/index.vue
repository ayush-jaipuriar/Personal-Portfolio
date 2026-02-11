<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto text-center mb-14">
      <h1 class="text-4xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-white">
        My Work
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
        Real-world case studies from enterprise systems and personal projects where I
        experiment with modern AI engineering patterns.
      </p>
    </div>

    <section class="mb-16">
      <div class="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Professional Case Studies
          </h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Architecture, trade-offs, and measurable outcomes from production systems.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <CaseStudyCard
          v-for="project in professionalProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>

    <section class="mb-16">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal Projects
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Products and learning builds that sharpen my engineering craft.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in personalProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>

    <section class="max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub Activity</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Prefer browsing code directly? Explore repositories, commits, and project notes.
          </p>
        </div>
        <a
          href="https://github.com/ayush-jaipuriar"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-apple-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-apple-blue-700 transition-colors"
        >
          <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
          View GitHub Profile
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProjectsByType } from '~/data/projects'

const professionalProjects = getProjectsByType('professional')
const personalProjects = getProjectsByType('personal')

useHead({
  title: 'Projects | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content:
        'Professional case studies and personal projects by Ayush Jaipuriar, covering AI agent systems, TB-scale search, and enterprise application engineering.',
    },
  ],
})
</script>
