<template>
  <div>
    <!--
      Homepage — Full marketing landing page.
      Structure: Hero → Metrics → Featured Projects → Skills → Latest Posts → CTA.
    -->
    <!-- ============================================================
         SECTION 1: HERO
         The hero is inline (not a component) because it's tightly
         coupled to the page and unlikely to be reused elsewhere.
         ============================================================ -->
    <section
      v-motion-fade-visible-once
      class="relative py-20 md:py-28 overflow-hidden"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center md:space-x-12">
          <!-- Text Content -->
          <div class="md:w-3/5 mb-12 md:mb-0">
            <!-- Available badge — signals job-seeking status -->
            <AvailableBadge class="mb-6" />

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span class="block mb-1 text-gray-900 dark:text-white">Hi, I'm</span>
              <span class="bg-gradient-to-r from-apple-blue-600 to-purple-600 bg-clip-text text-transparent text-glow">
                Ayush Jaipuriar
              </span>
            </h1>

            <!-- Primary tagline — communicates the "what" -->
            <p class="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-4">
              AI Agent Engineer &amp; Senior Full-Stack Developer
            </p>

            <!-- Secondary tagline — communicates the "proof" -->
            <p class="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-8">
              Building production AI systems at Fortune 500 scale.
              6+ years shipping enterprise fintech at TransUnion and HighRadius.
            </p>

            <!-- CTA buttons -->
            <div class="flex flex-wrap gap-4">
              <!-- Primary CTA: See My Work -->
              <NuxtLink
                to="/projects"
                class="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium
                       text-white bg-apple-blue-600 hover:bg-apple-blue-700
                       shadow-lg shadow-apple-blue-600/25 hover:shadow-apple-blue-600/40
                       transition-all duration-200 btn-glow
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
              >
                See My Work
                <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" aria-hidden="true" />
              </NuxtLink>

              <!-- Secondary CTA: Download Resume -->
              <a
                :href="resumeUrl"
                download
                @click="trackEvent('resume_download', { event_category: 'engagement', source: 'hero' })"
                class="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium
                       text-gray-700 dark:text-gray-200
                       bg-white dark:bg-gray-800
                       border border-gray-300 dark:border-gray-600
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       shadow-sm hover:shadow-md
                       transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue-500"
              >
                <Icon name="heroicons:document-arrow-down" class="mr-2 h-5 w-5" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <!-- Profile Photo -->
          <div class="md:w-2/5">
            <!--
              Phase 8 profile photo treatment:
              - Rotating conic-gradient ring (4px)
              - Soft glow halo layer behind the ring
              - Subtle hover scale for tactile feedback
            -->
            <div class="group/photo relative w-64 h-64 md:w-80 md:h-80 mx-auto transition-transform duration-300 hover:scale-[1.02]">
              <div class="absolute inset-0 rounded-full profile-ring"></div>
              <div class="absolute inset-0 rounded-full profile-ring-glow"></div>
              <div class="relative w-full h-full p-[4px] rounded-full">
                <div class="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  :src="toAssetPath('/ayush-jaipuriar.jpeg')"
                  alt="Ayush Jaipuriar - AI Agent Engineer"
                  width="800"
                  height="800"
                  class="w-full h-full object-cover"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Animated gradient mesh — replaces static blur circles (Phase 8) -->
      <GradientMesh />
    </section>

    <!-- ============================================================
         SECTION 2: KEY METRICS BAR
         ============================================================ -->
    <MetricsBar />

    <!-- ============================================================
         SECTION 3: FEATURED PROJECTS
         ============================================================ -->
    <FeaturedProjects />

    <!-- ============================================================
         SECTION 4: SKILLS SNAPSHOT
         ============================================================ -->
    <SkillsSnapshot />

    <!-- ============================================================
         SECTION 5: LATEST BLOG POSTS
         ============================================================ -->
    <LatestPosts />

    <!-- ============================================================
         SECTION 6: CONNECT CTA
         ============================================================ -->
    <ConnectCTA />
  </div>
</template>

<script setup lang="ts">
import { useAssetPath } from '~/composables/useAssetPath'
import { useAnalytics } from '~/composables/useAnalytics'

const runtimeConfig = useRuntimeConfig()
const resumeUrl = `${runtimeConfig.app.baseURL}resume/Ayush_Jaipuriar_Resume.pdf`
const { toAssetPath } = useAssetPath()
const { trackEvent } = useAnalytics()

/**
 * Homepage metadata.
 * 
 * `useHead` is a Nuxt composable that manages the <head> section of the page.
 * It uses @unhead/vue under the hood — a universal head management library.
 * 
 * The title and description are critical for SEO. The title follows the
 * "Name | Role" convention that search engines prefer for personal sites.
 */
useHead({
  title: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio of Ayush Jaipuriar — AI Agent Engineer and Senior Full-Stack Developer building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech.',
    },
    { property: 'og:title', content: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer' },
    { property: 'og:description', content: 'Building production AI systems at Fortune 500 scale. 6+ years shipping enterprise fintech at TransUnion and HighRadius.' },
    { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/' },
    { name: 'twitter:title', content: 'Ayush Jaipuriar | AI Agent Engineer & Senior Full-Stack Developer' },
    { name: 'twitter:description', content: 'Building production AI systems at Fortune 500 scale. 6+ years in enterprise fintech.' },
  ],
})
</script>

<style scoped>
@keyframes ring-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-ring {
  background: conic-gradient(
    from 0deg,
    rgba(0, 122, 255, 0.95) 0deg,
    rgba(147, 51, 234, 0.95) 180deg,
    rgba(0, 122, 255, 0.95) 360deg
  );
  animation: ring-spin 8s linear infinite;
}

.profile-ring-glow {
  background: conic-gradient(
    from 0deg,
    rgba(0, 122, 255, 0.45) 0deg,
    rgba(147, 51, 234, 0.45) 180deg,
    rgba(0, 122, 255, 0.45) 360deg
  );
  filter: blur(10px);
  opacity: 0.6;
  animation: ring-spin 10s linear infinite reverse;
}

@media (prefers-reduced-motion: reduce) {
  .profile-ring,
  .profile-ring-glow {
    animation: none !important;
  }
}
</style>
