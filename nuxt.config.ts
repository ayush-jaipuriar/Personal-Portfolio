import { defineNuxtConfig } from 'nuxt/config';

const deployBasePath = process.env.NODE_ENV === 'production' ? '/Personal-Portfolio' : ''

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/color-mode', {
      preference: 'system',
      fallback: 'light',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
    }],
    ['@nuxt/content', {
      highlight: {
        theme: {
          default: 'github-light',
          dark: 'github-dark',
        }
      }
    }],
    'nuxt-icon',
    ['@nuxtjs/robots', {
      rules: [
        { UserAgent: '*' },
        { Disallow: '' },
        { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
      ]
    }],
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

  // Head metadata
  app: {
    baseURL: `${deployBasePath}/`,
    head: {
      title: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description',
          name: 'description', 
          content: 'Portfolio of Ayush Jaipuriar — AI Agent Engineer and Senior Full-Stack Developer building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Ayush Jaipuriar' },
        
        // Open Graph (global defaults)
        { property: 'og:site_name', content: 'Ayush Jaipuriar - Portfolio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/' },
        { property: 'og:title', content: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer' },
        { property: 'og:description', content: 'Building production AI systems at Fortune 500 scale. 6+ years shipping enterprise fintech at TransUnion and HighRadius.' },
        { property: 'og:image', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Ayush Jaipuriar — AI Agent Engineer & Senior Full-Stack Developer' },
        
        // Twitter Card (global defaults)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer' },
        { name: 'twitter:description', content: 'Building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech.' },
        { name: 'twitter:image', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png' },
        { name: 'twitter:image:alt', content: 'Ayush Jaipuriar — AI Agent Engineer & Senior Full-Stack Developer' },
      ],
      link: [
        // Icon paths include baseURL so GitHub Pages serves them correctly.
        { rel: 'icon', type: 'image/svg+xml', href: `${deployBasePath}/favicon.svg` },
        { rel: 'icon', type: 'image/x-icon', href: `${deployBasePath}/favicon.ico` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${deployBasePath}/favicon-16x16.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${deployBasePath}/favicon-32x32.png` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${deployBasePath}/apple-touch-icon.png` },
        { rel: 'manifest', href: `${deployBasePath}/site.webmanifest` },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' 
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Caching and optimization
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // Global CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Public runtime configuration — accessible via useRuntimeConfig().public
  // GA Measurement ID: replace 'G-XXXXXXXXXX' with your real GA4 ID after
  // creating the property at https://analytics.google.com.
  // This is NOT a secret — GA IDs are public by design (visible in page source).
  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-151411160',
    },
  },

  // Build configuration
  build: {
    transpile: []
  },

  compatibilityDate: '2025-04-13'
})