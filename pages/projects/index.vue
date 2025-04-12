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
      
      <!-- GitHub Contribution Graph Placeholder -->
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <p class="text-center text-gray-500 dark:text-gray-400 py-12">
          GitHub contribution graph will be displayed here using GitHub API integration.
        </p>
      </div>
      
      <!-- GitHub Profile Link -->
      <div class="text-center">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <Icon name="mdi:github" class="w-5 h-5 mr-2" aria-hidden="true" />
          View GitHub Profile
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define metadata for the page
useHead({
  title: 'Projects | Your Name',
  meta: [
    {
      name: 'description',
      content: 'Browse my portfolio of software development projects, featuring web applications, APIs, and more.'
    }
  ]
});

// Sample project data (would typically come from an API or content module)
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment processing capabilities.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
    githubLink: 'https://github.com/yourusername/project-1',
    liveLink: 'https://project-1-demo.example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    githubLink: 'https://github.com/yourusername/project-2',
    liveLink: 'https://project-2-demo.example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'An interactive weather dashboard providing real-time forecasts, historical data, and visualization using weather APIs.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/project-3',
    liveLink: 'https://project-3-demo.example.com'
  }
];
</script> 