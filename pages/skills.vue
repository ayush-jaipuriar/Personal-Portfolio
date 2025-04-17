<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div 
        v-motion-fade-visible-once
        class="text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills, tools, and areas of expertise.
        </p>
      </div>

      <!-- Skills Categories -->
      <div 
        v-motion-fade-visible-once
        class="space-y-16"
      >
        <!-- Programming Languages -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Programming Languages
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="JavaScript" icon="logos:javascript" />
            <SkillItem name="TypeScript" icon="logos:typescript-icon" />
            <SkillItem name="HTML5" icon="logos:html-5" />
            <SkillItem name="CSS3" icon="logos:css-3" />
            <SkillItem name="Python" icon="logos:python" />
            <!-- Add more programming languages as needed -->
          </div>
        </div>

        <!-- Frameworks & Libraries -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Frameworks & Libraries
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="Vue.js" icon="logos:vue" />
            <SkillItem name="Nuxt.js" icon="logos:nuxt-icon" />
            <SkillItem name="React" icon="logos:react" />
            <SkillItem name="Next.js" icon="logos:nextjs-icon" />
            <SkillItem name="Tailwind CSS" icon="logos:tailwindcss-icon" />
            <SkillItem name="Node.js" icon="logos:nodejs-icon" />
            <SkillItem name="Express" icon="logos:express" />
            <!-- Add more frameworks & libraries as needed -->
          </div>
        </div>

        <!-- Databases -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Databases
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="MongoDB" icon="logos:mongodb-icon" />
            <SkillItem name="PostgreSQL" icon="logos:postgresql" />
            <SkillItem name="MySQL" icon="logos:mysql-icon" />
            <SkillItem name="Redis" icon="logos:redis" />
            <!-- Add more databases as needed -->
          </div>
        </div>

        <!-- Cloud & DevOps -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Cloud & DevOps
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="AWS" icon="logos:aws" />
            <SkillItem name="Docker" icon="logos:docker-icon" />
            <SkillItem name="GitHub Actions" icon="logos:github-actions" />
            <SkillItem name="Netlify" icon="logos:netlify" />
            <SkillItem name="Vercel" icon="logos:vercel-icon" />
            <!-- Add more cloud & DevOps skills as needed -->
          </div>
        </div>

        <!-- Tools & Software -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Tools & Software
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="Git" icon="logos:git-icon" />
            <SkillItem name="VS Code" icon="logos:visual-studio-code" />
            <SkillItem name="Figma" icon="logos:figma" />
            <SkillItem name="Postman" icon="logos:postman-icon" />
            <!-- Add more tools & software as needed -->
          </div>
        </div>

        <!-- Soft Skills -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            Soft Skills
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Problem Solving</h3>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Communication</h3>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Team Collaboration</h3>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Time Management</h3>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Adaptability</h3>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white">Continuous Learning</h3>
            </div>
            <!-- Add more soft skills as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define metadata for the page
useHead({
  title: 'Skills & Expertise | Your Name',
  meta: [
    {
      name: 'description',
      content: 'Explore my technical skills, programming languages, frameworks, and tools I use as a software developer.'
    }
  ]
});
</script> 