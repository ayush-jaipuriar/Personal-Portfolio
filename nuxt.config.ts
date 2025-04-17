// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@nuxt/content', {
      highlight: {
        theme: {
          default: 'github-light',
          dark: 'github-dark',
        }
      }
    }],
    'nuxt-icon',
    '@nuxtjs/robots',
    '@vueuse/motion/nuxt',
    // Add more modules as needed
  ],

  // TypeScript
  typescript: {
    strict: true
  },

  // Nuxt Content configuration
  // content: {
  //   highlight: {
  //     theme: {
  //       default: 'github-light',
  //       dark: 'github-dark',
  //     }
  //   }
  // },

  // Color Mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // Head metadata
  app: {
    head: {
      title: 'Your Name | Software Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description',
          name: 'description', 
          content: 'Personal portfolio website showcasing software development projects and skills.' 
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' 
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Robots.txt configuration
  robots: {
    // Use rules array for standard configuration
    rules: [
      { UserAgent: '*' },
      { Disallow: '' },
      { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
    ]
  },

  // Caching and optimization
  nitro: {
    compressPublicAssets: true
  },

  // Global CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Build configuration
  build: {
    transpile: []
  },

  compatibilityDate: '2025-04-13'
})