<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div v-if="project" class="max-w-4xl mx-auto">
      <!-- Back Link -->
      <div class="mb-8 animate-fade-in">
        <NuxtLink 
          to="/projects" 
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Projects
        </NuxtLink>
      </div>

      <!-- Project Header -->
      <div class="mb-12 animate-fade-in">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{{ project.title }}</h1>
        
        <!-- Project Links -->
        <div class="flex flex-wrap gap-4 mb-8">
          <a 
            v-if="project.liveLink" 
            :href="project.liveLink" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
          >
            <Icon name="heroicons:globe-alt" class="mr-2 h-5 w-5" aria-hidden="true" />
            Live Demo
          </a>
          <a 
            v-if="project.githubLink" 
            :href="project.githubLink" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
          >
            <Icon name="mdi:github" class="mr-2 h-5 w-5" aria-hidden="true" />
            View Code
          </a>
        </div>
        
        <!-- Technologies Used -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Technologies Used</h2>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tech, index) in project.technologies" 
              :key="index"
              class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Project Hero Image -->
      <div class="mb-12 animate-slide-up rounded-2xl overflow-hidden shadow-lg">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-auto object-cover"
        />
      </div>
      
      <!-- Project Content Sections -->
      <div class="space-y-12 animate-slide-up" style="animation-delay: 0.3s;">
        <!-- Overview Section -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>{{ project.description }}</p>
            <p>
              This is a detailed description of the project that would typically include information about its purpose,
              the problem it solves, and an overview of its features and functionality.
            </p>
          </div>
        </section>
        
        <!-- Problem/Challenge Section -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Problem & Challenge
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Describe the specific problem or challenge that this project was designed to address.
              What were the pain points or limitations of existing solutions? What were the requirements or constraints?
            </p>
          </div>
        </section>
        
        <!-- My Role & Contributions -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            My Role & Contributions
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Detail your specific role in the project and your key contributions. What responsibilities did you have?
              What parts of the project did you work on? If it was a team project, how did you collaborate with others?
            </p>
          </div>
        </section>
        
        <!-- Process & Solution -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Process & Solution
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Explain the process you followed to create the solution. This might include your approach to design,
              development methodologies, architecture decisions, and how you overcame technical challenges.
            </p>
            
            <h3>Key Features</h3>
            <ul>
              <li>Feature 1: Brief description of this feature</li>
              <li>Feature 2: Brief description of this feature</li>
              <li>Feature 3: Brief description of this feature</li>
            </ul>
            
            <h3>Technical Architecture</h3>
            <p>
              Provide an overview of the technical architecture and key decisions made during development.
              This might include the choice of technology stack, database schema, API design, etc.
            </p>
          </div>
        </section>
        
        <!-- Project Outcome & Impact -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Outcome & Impact
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Describe the outcome of the project and its impact. Were the objectives achieved?
              What were the quantifiable results? How did users/clients respond to the solution?
            </p>
            
            <h3>Results</h3>
            <ul>
              <li>Metric 1: E.g., 30% increase in user engagement</li>
              <li>Metric 2: E.g., Reduced loading time by 40%</li>
              <li>Metric 3: E.g., Successfully processed X transactions per day</li>
            </ul>
          </div>
        </section>
        
        <!-- Lessons Learned -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Lessons Learned
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Reflect on what you learned from this project. What went well? What challenges did you face and how did you overcome them?
              What would you do differently if you were to start this project again?
            </p>
          </div>
        </section>
        
        <!-- Additional Screenshots -->
        <section>
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
            Project Gallery
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project screenshot 1" class="w-full h-auto" />
            </div>
            <div class="rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project screenshot 2" class="w-full h-auto" />
            </div>
          </div>
        </section>
      </div>
      
      <!-- Next/Previous Project Navigation -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <NuxtLink 
            to="/projects/task-management-app" 
            class="mb-4 sm:mb-0 inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
          >
            <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
            Previous Project
          </NuxtLink>
          
          <NuxtLink 
            to="/projects/weather-dashboard" 
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
          >
            Next Project
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Error State -->
    <div v-else class="max-w-4xl mx-auto text-center py-12">
      <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <NuxtLink 
        to="/projects" 
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200"
      >
        View All Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Get the current route to access the project slug
const route = useRoute();
const slug = route.params.slug as string;

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

// Find the project that matches the current slug
const project = computed(() => {
  return projects.find(p => p.slug === slug);
});

// Define metadata for the page
useHead({
  title: computed(() => project.value ? `${project.value.title} | Ayush Jaipuriar` : 'Project Not Found | Ayush Jaipuriar'),
  meta: [
    {
      name: 'description',
      content: computed(() => project.value 
        ? `Case study of ${project.value.title}: ${project.value.description}`
        : 'Project not found - Check out my other projects')
    }
  ]
});
</script> 