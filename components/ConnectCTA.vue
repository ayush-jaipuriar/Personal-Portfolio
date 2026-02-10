<template>
  <!--
    ConnectCTA.vue — Closing call-to-action for the homepage.
    
    UX principle: "Don't make me think" — after scrolling through all
    the portfolio content, give the visitor one clear next action.
    
    The gradient background creates visual separation from the content
    above, signaling "this is the end, here's what to do next."
    This pattern is called a "terminal CTA" in marketing design.
  -->
  <section class="py-20 bg-gradient-to-br from-apple-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Build Something Together
      </h2>

      <!-- Subtext with availability info -->
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        I'm currently exploring Senior SWE and AI Engineering roles.
        Based in Hyderabad, open to remote or relocation.
      </p>

      <!-- CTA buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <!-- Primary CTA: Contact -->
        <NuxtLink
          to="/contact"
          class="inline-flex items-center px-8 py-3.5 rounded-lg text-base font-medium
                 text-white bg-apple-blue-600 hover:bg-apple-blue-700
                 shadow-lg shadow-apple-blue-600/25 hover:shadow-apple-blue-600/40
                 transition-all duration-200"
        >
          Get In Touch
          <Icon name="heroicons:paper-airplane" class="ml-2 h-5 w-5" aria-hidden="true" />
        </NuxtLink>

        <!-- Secondary CTA: Resume -->
        <a
          :href="resumeUrl"
          download
          class="inline-flex items-center px-8 py-3.5 rounded-lg text-base font-medium
                 text-gray-700 dark:text-gray-200
                 bg-white dark:bg-gray-800
                 border border-gray-300 dark:border-gray-600
                 hover:bg-gray-50 dark:hover:bg-gray-700
                 shadow-sm hover:shadow-md
                 transition-all duration-200"
        >
          <Icon name="heroicons:document-arrow-down" class="mr-2 h-5 w-5" aria-hidden="true" />
          Download Resume
        </a>
      </div>

      <!-- Social links -->
      <div class="flex justify-center items-center gap-6">
        <a
          href="https://github.com/ayush-jaipuriar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-jaipuriar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href="mailto:jaipuriar.ayush@gmail.com"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Email"
        >
          <Icon name="heroicons:envelope" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const resumeUrl = `${runtimeConfig.app.baseURL}resume/Ayush_Jaipuriar_Resume.pdf`
</script>
