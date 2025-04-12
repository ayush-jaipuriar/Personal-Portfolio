<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get to know more about my background, journey, and what drives me as a developer.
        </p>
      </div>

      <!-- About Content with Responsive Layout -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Personal Info -->
        <div class="lg:w-2/5 animate-slide-up" style="animation-delay: 0.2s;">
          <!-- Profile Photo -->
          <div class="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/placeholder-headshot.jpg" 
              alt="Your Name" 
              class="w-full h-auto"
            />
          </div>

          <!-- Quick Info -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Profile</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h3>
                <p class="text-gray-900 dark:text-white">Your Name</p>
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                <p class="text-gray-900 dark:text-white">City, Country</p>
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                <a href="mailto:your.email@example.com" class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline">your.email@example.com</a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Icon name="mdi:github" class="h-8 w-8" aria-hidden="true" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="h-8 w-8" aria-hidden="true" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Icon name="mdi:twitter" class="h-8 w-8" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Right Column: Story/Journey -->
        <div class="lg:w-3/5 animate-slide-up" style="animation-delay: 0.4s;">
          <!-- My Story -->
          <div class="prose dark:prose-invert prose-lg max-w-none mb-12">
            <h2 class="text-3xl font-semibold mb-6">My Story</h2>
            
            <p>
              I'm a passionate full stack software developer with a keen interest in building 
              accessible, user-friendly web applications that solve real-world problems.
            </p>
            
            <p>
              My journey in software development began when I was [how you started], and since then, 
              I've been constantly learning and improving my skills across various technologies and frameworks.
            </p>
            
            <p>
              I believe in writing clean, maintainable code that not only works well but is also easy to 
              understand and build upon. My experience spans from front-end development with modern JavaScript 
              frameworks to back-end systems and database design.
            </p>
            
            <p>
              When I'm not coding, I enjoy [your hobbies/interests]. I find that these activities help 
              me maintain a creative mindset and bring fresh perspectives to my development work.
            </p>
          </div>

          <!-- Education & Work History -->
          <div class="space-y-12">
            <!-- Education -->
            <div>
              <h2 class="text-3xl font-semibold mb-6">Education</h2>
              
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Degree Name</h3>
                  <p class="text-gray-600 dark:text-gray-400">University Name</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">2015 - 2019</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-400">
                    Brief description of your studies, achievements, or relevant coursework.
                  </p>
                </div>
                
                <!-- Add more education items as needed -->
              </div>
            </div>
            
            <!-- Work Experience -->
            <div>
              <h2 class="text-3xl font-semibold mb-6">Work Experience</h2>
              
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Job Title</h3>
                  <p class="text-gray-600 dark:text-gray-400">Company Name</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">2019 - Present</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-400">
                    Description of your responsibilities, achievements, and the technologies you worked with.
                  </p>
                </div>
                
                <!-- Add more work experience items as needed -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define metadata for the page
useHead({
  title: 'About Me | Your Name',
  meta: [
    {
      name: 'description',
      content: 'Learn more about [Your Name], my background, skills, and journey as a software developer.'
    }
  ]
});
</script> 