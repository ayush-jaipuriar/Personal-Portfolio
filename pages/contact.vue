<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div 
        v-motion-fade-visible-once
        class="text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out using the form below or through social media.
        </p>
      </div>

      <!-- Contact Grid -->
      <div 
        v-motion-fade-visible-once
        class="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
          
          <form @submit.prevent="submitContactForm">
            <div class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="contactForm.name" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-apple-blue-500 focus:border-apple-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="contactForm.email" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-apple-blue-500 focus:border-apple-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="contactForm.subject" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-apple-blue-500 focus:border-apple-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  v-model="contactForm.message" 
                  rows="5" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-apple-blue-500 focus:border-apple-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <div>
                <button 
                  type="submit" 
                  class="w-full px-6 py-3 bg-apple-blue-600 text-white rounded-md hover:bg-apple-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500 transition-colors duration-200"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">
                    <span class="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2 align-middle"></span>
                    Sending...
                  </span>
                  <span v-else>Send Message</span>
                </button>
              </div>
              
              <!-- Success/Error Messages -->
              <div v-if="submitStatus" :class="[
                'p-4 rounded-md text-center',
                submitStatus === 'success' ? 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200' : 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200'
              ]">
                {{ submitMessage }}
              </div>
            </div>
          </form>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
          
          <!-- Direct Contact Info -->
          <div class="space-y-6 mb-12">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 flex items-center justify-center">
                <Icon name="heroicons:envelope" class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400" aria-hidden="true" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p class="mt-1">
                  <a href="mailto:jaipuriar.ayush@gmail.com" class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline">
                    jaipuriar.ayush@gmail.com
                  </a>
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Preferred channel for professional correspondence.
                </p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 flex items-center justify-center">
                <Icon name="heroicons:phone" class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400" aria-hidden="true" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Mobile</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                   <a href="tel:9835333016" class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline">9835333016</a>
                </p>
                 <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Available for direct communication.
                </p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 flex items-center justify-center">
                <Icon name="heroicons:map-pin" class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400" aria-hidden="true" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Hyderabad, India
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Strategically based in a major tech hub.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect Online</h3>
            <div class="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/ayush-jaipuriar"
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <Icon name="mdi:github" class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3" aria-hidden="true" />
                <span class="text-gray-700 dark:text-gray-300">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-jaipuriar"
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <Icon name="mdi:linkedin" class="h-6 w-6 text-linkedin mr-3" aria-hidden="true" />
                <span class="text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define metadata for the page
useHead({
  title: 'Contact | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Ayush Jaipuriar. Contact me for job opportunities, collaborations, or any questions about my work.'
    }
  ]
});

// Contact form data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Form submission state
const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success' or 'error'
const submitMessage = ref('');

// Contact form submission (would normally connect to an API)
const submitContactForm = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, let's pretend it was successful
    submitStatus.value = 'success';
    submitMessage.value = 'Your message has been sent successfully! I\'ll get back to you soon.';
    
    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = '';
      submitMessage.value = '';
    }, 5000);
  } catch {
    submitStatus.value = 'error';
    submitMessage.value = 'There was an error sending your message. Please try again or contact me directly via email.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.text-linkedin {
  color: #0077B5;
}

.text-twitter {
  color: #1DA1F2;
}

.text-instagram {
  color: #E4405F;
}
</style> 