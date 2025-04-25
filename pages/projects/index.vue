<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <!-- Page Header -->
    <div class="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A showcase of my recent work, personal projects, and contributions.
      </p>
    </div>

    <!-- Project Grid -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
      />
    </div>

    <!-- GitHub Integration Section -->
    <div class="max-w-4xl mx-auto mt-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">GitHub Activity</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Check out my latest contributions and activity on GitHub.
        </p>
      </div>
      
      <!-- GitHub Contribution Graph -->
      <div class="mb-8">
        <!-- The github-calendar library targets this div -->
        <div class="calendar">
          <!-- Loading state (optional) -->
          <p class="text-center text-gray-500 dark:text-gray-400 py-12">
            Loading GitHub contribution graph...
          </p>
        </div>
      </div>
      
      <!-- GitHub Profile Link -->
      <div class="text-center">
        <a
          v-tooltip.bottom="'Visit my GitHub'"
          target="_blank"
          href="https://github.com/ayush-jaipuriar"
          class="group flex items-center rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <Icon name="mdi:github" class="w-5 h-5 mr-2" aria-hidden="true" />
          View GitHub Profile
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';

// Declare the global function for TypeScript
declare global {
  function GitHubCalendar(selector: string, username: string, options?: any): void;
}

// Define metadata for the page
useHead({
  title: 'Projects | Your Name',
  meta: [
    {
      name: 'description',
      content: 'Browse my portfolio of software development projects, featuring web applications, APIs, and more.'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css'
    }
  ],
  script: [
    {
      src: 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js',
      defer: true,
      onload: () => {
        if (typeof GitHubCalendar === 'function') {
           GitHubCalendar(".calendar", "ayush-jaipuriar", { responsive: true, tooltips: true });
        } else {
           console.error('GitHubCalendar function not loaded');
        }
      }
    }
  ]
});

// Sample project data (would typically come from an API or content module)
const projects = [
  {
    id: 1,
    title: 'Learning Camunda',
    slug: 'learning-camunda',
    description: 'A Dispute Resolution System demo with PII validation integrated using Camunda BPM.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
    technologies: ['Java', 'Camunda BPM', 'Spring Boot', 'Gradle', 'PostgreSQL'],
    githubLink: 'https://github.com/ayush-jaipuriar/Learning-Camunda',
    liveLink: '' // No live link provided
  },
  {
    id: 2,
    title: 'Learning Langchain',
    slug: 'learning-langchain',
    description: 'Exploring LangChain for building LLM applications, including a customer data Q&A pipeline with OpenAI and FAISS.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
    technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Jupyter Notebook'],
    githubLink: 'https://github.com/ayush-jaipuriar/Learning-Langchain',
    liveLink: '' // No live link provided
  },
  {
    id: 3,
    title: '1000 Days of Code Challenge',
    slug: '1000-days-of-code',
    description: 'Tracking progress and projects for the #1000DaysOfCode challenge.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
    technologies: ['Git', 'Markdown', 'Code Challenges'],
    githubLink: 'https://github.com/ayush-jaipuriar/1000DaysOfCode',
    liveLink: '' // No live link provided
  }
];
</script>

<style scoped>
/* Override GitHub Calendar Styles for Theme Integration */
.calendar :deep(svg.js-calendar-graph-svg) {
  /* Ensure the SVG fills the container */
  width: 100%; 
  font-family: inherit; /* Use the site's font */
}

/* Text Colors (Months, Weekdays, Legend) */
.calendar :deep(text.month),
.calendar :deep(text.wday),
.calendar :deep(.contrib-legend text) {
  fill: theme('colors.gray.600'); /* Tailwind CSS utility for text color */
  font-size: 10px; /* Adjust font size if needed */
}

/* Text Colors in Dark Mode */
.dark .calendar :deep(text.month),
.dark .calendar :deep(text.wday),
.dark .calendar :deep(.contrib-legend text) {
  fill: theme('colors.gray.400'); /* Tailwind CSS utility for dark mode text color */
}

/* Contribution Square Colors (Example using theme blues) */
/* Adjust these colors to match your desired theme */
.calendar :deep(rect.day[data-level="1"]) {
  fill: #9ecbff; /* Lightest Blue */
}
.calendar :deep(rect.day[data-level="2"]) {
  fill: #5fa8ff; /* Medium Blue */
}
.calendar :deep(rect.day[data-level="3"]) {
  fill: #007aff; /* Apple Blue */
}
.calendar :deep(rect.day[data-level="4"]) {
  fill: #005ec4; /* Darker Blue */
}

/* Legend Colors */
.calendar :deep(.contrib-legend rect[data-level="0"]) {
  fill: theme('colors.gray.100');
}
.dark .calendar :deep(.contrib-legend rect[data-level="0"]) {
  fill: theme('colors.gray.700');
}
.calendar :deep(.contrib-legend rect[data-level="1"]) { fill: #9ecbff; }
.calendar :deep(.contrib-legend rect[data-level="2"]) { fill: #5fa8ff; }
.calendar :deep(.contrib-legend rect[data-level="3"]) { fill: #007aff; }
.calendar :deep(.contrib-legend rect[data-level="4"]) { fill: #005ec4; }

/* Tooltip Styling (Optional - If default needs adjustment) */
/* You might need to inspect the tooltip element generated by the library */
/* and add styles here if needed */

</style> 