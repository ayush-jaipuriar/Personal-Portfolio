<template>
  <!--
    SkillsSnapshot.vue — Compact visual display of top 8-10 skills.
    
    UX pattern: "Dual coding" — each skill is represented by both an icon
    and a text label, making it faster to scan and more memorable.
    
    Icons come from Simple Icons (brand logos) via Iconify.
    Naming convention: `simple-icons:langchain`, `simple-icons:java`, etc.
    Some skills use Heroicons or Material Design Icons as fallback when
    a Simple Icons entry doesn't exist.
  -->
  <section class="py-16 bg-gray-50/50 dark:bg-gray-800/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Core Expertise
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Technologies I work with daily to build production systems.
        </p>
      </div>

      <!-- Skills grid — pills layout -->
      <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          v-motion-fade-visible-once
          :delay="index * 60"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                 bg-white dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700
                 shadow-apple-sm hover:shadow-apple-md
                 hover:-translate-y-0.5
                 transition-all duration-200"
        >
          <Icon
            :name="skill.icon"
            class="h-5 w-5 flex-shrink-0"
            :class="skill.iconClass || 'text-gray-700 dark:text-gray-300'"
            aria-hidden="true"
          />
          <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
            {{ skill.name }}
          </span>
        </div>
      </div>

      <!-- See all skills link -->
      <div class="text-center mt-10">
        <NuxtLink
          to="/skills"
          class="inline-flex items-center text-sm font-medium
                 text-apple-blue-600 dark:text-apple-blue-400
                 hover:text-apple-blue-700 dark:hover:text-apple-blue-300
                 transition-colors duration-200"
        >
          See All Skills
          <Icon name="heroicons:arrow-right" class="ml-1.5 h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Top skills — curated list of the most relevant technologies.
 * 
 * Icon naming conventions in Iconify/nuxt-icon:
 * - Brand icons: `simple-icons:brandname` (e.g., `simple-icons:python`)
 * - Heroicons: `heroicons:icon-name` (outline) or `heroicons:icon-name-solid`
 * - Material Design: `mdi:icon-name`
 * 
 * Some brands don't have Simple Icons entries, so we use fallbacks.
 * The `iconClass` property allows per-icon color customization
 * (e.g., Python's blue/yellow, Java's red).
 */
const skills = [
  { name: 'LangChain',   icon: 'simple-icons:langchain',    iconClass: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Python',      icon: 'simple-icons:python',       iconClass: 'text-blue-600 dark:text-blue-400' },
  { name: 'Java',        icon: 'mdi:language-java',         iconClass: 'text-red-600 dark:text-red-400' },
  { name: 'Spring Boot', icon: 'simple-icons:springboot',   iconClass: 'text-green-600 dark:text-green-400' },
  { name: 'TypeScript',  icon: 'simple-icons:typescript',   iconClass: 'text-blue-600 dark:text-blue-400' },
  { name: 'PostgreSQL',  icon: 'simple-icons:postgresql',   iconClass: 'text-blue-700 dark:text-blue-400' },
  { name: 'AWS',         icon: 'simple-icons:amazonaws',    iconClass: 'text-orange-500 dark:text-orange-400' },
  { name: 'Docker',      icon: 'simple-icons:docker',       iconClass: 'text-blue-500 dark:text-blue-400' },
  { name: 'React',       icon: 'simple-icons:react',        iconClass: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'Kubernetes',  icon: 'simple-icons:kubernetes',   iconClass: 'text-blue-600 dark:text-blue-400' },
]
</script>
