<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-5xl mx-auto">
      <!-- Page Header -->
      <div v-motion-fade-visible-once class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a question, opportunity, or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <!-- ── Availability Banner ─────────────────────────────────── -->
      <div
        v-motion-fade-visible-once
        class="mb-12 rounded-xl border border-green-200 dark:border-green-800/40 bg-green-50 dark:bg-green-900/20 p-5 shadow-sm"
      >
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-green-100 dark:bg-green-800/40">
            <Icon name="heroicons:briefcase" class="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          </div>
          <div>
            <p class="text-sm font-semibold text-green-800 dark:text-green-300">
              Currently exploring Senior SWE & AI Engineering roles
            </p>
            <p class="mt-1 text-sm text-green-700 dark:text-green-400">
              Based in Hyderabad. Open to Bengaluru, remote, or relocation. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Grid (Dossier Left, Form Right) -->
      <div
        v-motion-fade-visible-once
        class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start"
      >
        <!-- ── Recruiter Dossier Left Column ────────────────────────── -->
        <div class="space-y-8">
          <div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-6 md:p-8 backdrop-blur-sm shadow-sm">
            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
              Recruiter Dossier
            </h2>
            
            <!-- Best-Fit Roles -->
            <div class="mb-6">
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Best-Fit Roles</span>
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded bg-apple-blue-100 dark:bg-apple-blue-900/30 text-[11px] font-semibold text-apple-blue-700 dark:text-apple-blue-300">
                  Senior Software Engineer
                </span>
                <span class="inline-flex items-center px-2.5 py-1 rounded bg-apple-blue-100 dark:bg-apple-blue-900/30 text-[11px] font-semibold text-apple-blue-700 dark:text-apple-blue-300">
                  AI Agent Engineer
                </span>
                <span class="inline-flex items-center px-2.5 py-1 rounded bg-apple-blue-100 dark:bg-apple-blue-900/30 text-[11px] font-semibold text-apple-blue-700 dark:text-apple-blue-300">
                  Applied AI Engineer
                </span>
                <span class="inline-flex items-center px-2.5 py-1 rounded bg-apple-blue-100 dark:bg-apple-blue-900/30 text-[11px] font-semibold text-apple-blue-700 dark:text-apple-blue-300">
                  Backend / Platform Engineer
                </span>
              </div>
            </div>

            <!-- Target Domains -->
            <div class="mb-6">
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Target Domains</span>
              <div class="flex flex-wrap gap-x-3 gap-y-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span class="flex items-center gap-1"><Icon name="heroicons:currency-dollar" class="text-apple-blue-500 w-4 h-4" /> Fintech</span>
                <span class="text-gray-350 dark:text-gray-700 select-none">•</span>
                <span class="flex items-center gap-1"><Icon name="heroicons:cpu-chip" class="text-apple-blue-500 w-4 h-4" /> AI Automation</span>
                <span class="text-gray-350 dark:text-gray-700 select-none">•</span>
                <span class="flex items-center gap-1"><Icon name="heroicons:server-stack" class="text-apple-blue-500 w-4 h-4" /> Distributed Systems</span>
              </div>
            </div>

            <!-- Copy-to-Clipboard Email Action -->
            <div>
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Direct Contact</span>
              <div class="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 select-all font-mono text-sm text-gray-800 dark:text-gray-200">
                <span class="truncate">jaipuriar.ayush@gmail.com</span>
                <button
                  @click="copyEmail"
                  class="ml-3 p-1.5 rounded bg-gray-150 hover:bg-apple-blue-100 hover:text-apple-blue-600 dark:bg-gray-800 dark:hover:bg-apple-blue-900/40 dark:hover:text-apple-blue-450 text-gray-500 dark:text-gray-400 transition-all cursor-pointer relative group/btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  <Icon :name="isCopied ? 'heroicons:check-circle' : 'heroicons:clipboard'" class="h-4.5 w-4.5" />
                  <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-2 py-1 text-[10px] font-sans font-semibold text-white bg-gray-900 rounded opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-sm">
                    {{ isCopied ? 'Copied!' : 'Copy Address' }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Contact Details (Location, Response Time) -->
          <div class="space-y-6 pl-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 flex items-center justify-center">
                <Icon name="heroicons:map-pin" class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400" aria-hidden="true" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Hyderabad, India</p>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-450">Open to Bengaluru, remote, or relocation.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-apple-blue-100 dark:bg-apple-blue-900/30 flex items-center justify-center">
                <Icon name="heroicons:clock" class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400" aria-hidden="true" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Response Time</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Typically within 24 hours</p>
              </div>
            </div>
          </div>

          <!-- Socials -->
          <div class="pl-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect Online</h3>
            <div class="flex gap-4">
              <a
                href="https://github.com/ayush-jaipuriar"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 font-semibold text-sm text-gray-700 dark:text-gray-300"
              >
                <Icon name="mdi:github" class="h-5 w-5 mr-2" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-jaipuriar"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 font-semibold text-sm text-gray-700 dark:text-gray-300"
              >
                <Icon name="mdi:linkedin" class="h-5 w-5 mr-2 text-[#0077B5]" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- ── Contact Message Form Right Column ───────────────────── -->
        <div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-apple-sm p-6 md:p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
            Send a Message
          </h2>

          <!-- ── Success State ──────────────────────────────────── -->
          <div v-if="submitStatus === 'success'" class="text-center py-12">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <Icon name="heroicons:check" class="h-7 w-7 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Message sent!
            </h3>
            <p class="text-gray-650 dark:text-gray-400 mb-6">
              Thank you for reaching out. I'll get back to you shortly.
            </p>
            <button
              @click="resetForm"
              class="text-sm font-medium text-apple-blue-600 dark:text-apple-blue-400 hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>

          <!-- ── Form ───────────────────────────────────────────── -->
          <form v-else @submit.prevent="submitContactForm" class="space-y-6">
            <!-- Honeypot — invisible to humans, catches bots -->
            <input
              type="text"
              name="_gotcha"
              v-model="honeypot"
              style="display: none"
              tabindex="-1"
              autocomplete="off"
            />

            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="contactForm.name"
                required
                autocomplete="name"
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-350 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-colors duration-200"
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
                name="email"
                v-model="contactForm.email"
                required
                autocomplete="email"
                placeholder="you@example.com"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-350 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-colors duration-200"
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
                name="subject"
                v-model="contactForm.subject"
                required
                placeholder="What's this about?"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-355 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-colors duration-200"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                v-model="contactForm.message"
                rows="5"
                required
                placeholder="Your message..."
                class="w-full px-4 py-2.5 rounded-lg border border-gray-355 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500 transition-colors duration-200 resize-y"
              ></textarea>
            </div>

            <!-- Error message -->
            <div
              v-if="submitStatus === 'error'"
              class="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 p-4"
            >
              <div class="flex items-start gap-3">
                <Icon name="heroicons:exclamation-triangle" class="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p class="text-sm font-medium text-red-800 dark:text-red-300">
                    Something went wrong. Please try again or email me directly at
                    <a href="mailto:jaipuriar.ayush@gmail.com" class="underline font-semibold">jaipuriar.ayush@gmail.com</a>.
                  </p>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-apple-blue-600 text-white rounded-lg font-semibold hover:bg-apple-blue-700 btn-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              <span
                v-if="isSubmitting"
                class="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"
              ></span>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAnalytics } from '~/composables/useAnalytics'

const { trackEvent } = useAnalytics()

// ── SEO ──────────────────────────────────────────────────────────────
useHead({
  title: 'Contact | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Ayush Jaipuriar — AI Agent Engineer exploring Senior SWE & AI Engineering roles. Based in Hyderabad, open to relocation.',
    },
    { property: 'og:title', content: 'Contact | Ayush Jaipuriar' },
    { property: 'og:description', content: 'Get in touch — currently exploring Senior SWE & AI Engineering roles. Based in Hyderabad, open to remote or relocation.' },
    { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/contact' },
    { name: 'twitter:title', content: 'Contact | Ayush Jaipuriar' },
    { name: 'twitter:description', content: 'Get in touch — exploring Senior SWE & AI Engineering roles.' },
  ],
})

// ── Copy to Clipboard ───────────────────────────────────────────────
const isCopied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('jaipuriar.ayush@gmail.com')
    isCopied.value = true
    trackEvent('email_copied', { event_category: 'engagement' })
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email: ', err)
  }
}

// ── Form state ───────────────────────────────────────────────────────
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const honeypot = ref('') // Formspree _gotcha — bots fill this, humans don't
const isSubmitting = ref(false)
const submitStatus = ref<'' | 'success' | 'error'>('')

// ── Form actions ─────────────────────────────────────────────────────

/**
 * Submits the form to Formspree via fetch POST.
 */
const submitContactForm = async () => {
  isSubmitting.value = true
  submitStatus.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mojnjppk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: contactForm.value.name,
        _replyto: contactForm.value.email,
        email: contactForm.value.email,
        subject: contactForm.value.subject,
        message: contactForm.value.message,
        _gotcha: honeypot.value,
      }),
    })

    if (response.ok) {
      submitStatus.value = 'success'
      trackEvent('contact_form_submit', { event_category: 'conversion' })
      contactForm.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
      honeypot.value = ''
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  contactForm.value = { name: '', email: '', subject: '', message: '' }
  honeypot.value = ''
  submitStatus.value = ''
}
</script>
