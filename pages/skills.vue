<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div 
        v-motion-fade-visible-once
        class="text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Skills & Expertise</h1>
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
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Programming Languages
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="Java (8-17)" icon="logos:java" />
            <SkillItem name="JavaScript" icon="logos:javascript" />
            <SkillItem name="SQL" icon="devicon:sqldeveloper" /> 
            <SkillItem name="BASH Scripting" icon="logos:bash-icon" />
            <SkillItem name="Python" icon="logos:python" />
            <SkillItem name="HTML5" icon="logos:html-5" />
            <SkillItem name="CSS3" icon="logos:css-3" />
            <SkillItem name="TypeScript" icon="logos:typescript-icon" />
          </div>
        </div>

        <!-- Frameworks & Libraries -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Frameworks & Libraries
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="Spring Framework" icon="logos:spring-icon" />
            <SkillItem name="Spring Boot" icon="logos:spring-icon" />
            <SkillItem name="Hibernate" icon="logos:hibernate" />
            <SkillItem name="Struts" />  
            <SkillItem name="React" icon="logos:react" />
            <SkillItem name="React Native" icon="logos:react" />
            <SkillItem name="Expo" icon="logos:expo-icon" />
            <SkillItem name="Redux" icon="logos:redux" />
            <SkillItem name="ExtJS 6" /> 
            <SkillItem name="VueJS" icon="logos:vue" />
            <SkillItem name="Node.js" icon="logos:nodejs-icon" />
            <SkillItem name="JUnit" /> 
            <SkillItem name="JMeter" />
            <SkillItem name="Pandas" icon="simple-icons:pandas" />
            <SkillItem name="NumPy" icon="logos:numpy" />
            <SkillItem name="Matplotlib" icon="logos:matplotlib-icon" />
            <SkillItem name="Crossfilter" />
            <SkillItem name="Highcharts" icon="logos:highcharts" />
            <SkillItem name="Langchain" /> 
          </div>
        </div>

        <!-- Databases -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Databases
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="MySQL" icon="logos:mysql-icon" />
            <SkillItem name="PostgreSQL" icon="logos:postgresql" />
            <SkillItem name="MongoDB" icon="logos:mongodb-icon" />
            <SkillItem name="Redis" icon="logos:redis" />
            <SkillItem name="Firebase" icon="logos:firebase" />
          </div>
        </div>

        <!-- Cloud & DevOps -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Cloud & DevOps
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="Google Cloud (GCP)" icon="logos:google-cloud" />
            <SkillItem name="AWS (inc. EKS)" icon="logos:aws" />
            <SkillItem name="Docker" icon="logos:docker-icon" />
            <SkillItem name="Docker Swarm" icon="logos:docker-icon" />
            <SkillItem name="Kubernetes" icon="logos:kubernetes" />
            <SkillItem name="Jenkins" icon="logos:jenkins" />
            <SkillItem name="Git" icon="logos:git-icon" />
            <SkillItem name="GitHub" icon="mdi:github" />
            <SkillItem name="GitLab" icon="logos:gitlab" />
            <SkillItem name="Linux" icon="logos:linux-tux" />
          </div>
        </div>

        <!-- Tools & Software -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Tools & Software
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="VS Code" icon="logos:visual-studio-code" />
            <SkillItem name="Eclipse" icon="logos:eclipse-icon" />
            <SkillItem name="IntelliJ IDEA" icon="logos:intellij-idea" />
            <SkillItem name="Postman" icon="logos:postman-icon" />
            <SkillItem name="JIRA" icon="logos:jira" />
            <SkillItem name="Confluence" icon="logos:confluence" />
            <SkillItem name="DialogFlow" icon="logos:google-dialogflow" />
            <SkillItem name="Cursor AI" />
            <SkillItem name="Windsurf" /> 
            <SkillItem name="Claude" />
          </div>
        </div>

        <!-- Concepts & Methodologies -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Concepts & Methodologies
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillItem name="MVC Architecture" />
            <SkillItem name="Dependency Injection" />
            <SkillItem name="Microservices" />
            <SkillItem name="RESTful APIs" />
            <SkillItem name="CI/CD" />
            <SkillItem name="Agile Development" />
            <SkillItem name="Clean Code Principles" />
            <SkillItem name="ORM" /> 
            <SkillItem name="Web Scraping" />
            <SkillItem name="NLP" />
            <SkillItem name="Machine Learning" />
          </div>
        </div>

        <!-- Soft Skills -->
        <div>
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
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
  title: 'Skills & Expertise | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content: 'Explore the technical skills, frameworks, tools, and expertise of Ayush Jaipuriar, Software Engineer.'
    }
  ]
});
</script> 