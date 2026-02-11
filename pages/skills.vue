<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-5xl mx-auto">
      <!-- Page Header -->
      <div v-motion-fade-visible-once class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Skills & Expertise
        </h1>
        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          From production AI agents to enterprise Java, these are the
          technologies I work with every day — ranked by depth and impact.
        </p>
      </div>

      <div class="space-y-20">
        <!-- ────────────────────────────────────────────────────────── -->
        <!-- AI & MACHINE LEARNING — accent background, top billing     -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <div
            class="rounded-2xl bg-gradient-to-br from-purple-50 to-apple-blue-50 dark:from-purple-900/20 dark:to-apple-blue-900/20 border border-purple-200/60 dark:border-purple-700/40 p-6 md:p-8"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-800/40"
              >
                <Icon
                  name="heroicons:cpu-chip"
                  class="h-6 w-6 text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2
                  class="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  AI & Machine Learning
                </h2>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Building production AI agents and LLM-powered systems at
                  TransUnion
                </p>
              </div>
            </div>

            <!-- Core AI skills — large cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div
                v-for="(skill, idx) in aiCore"
                :key="skill.name"
                v-motion
                :initial="{ opacity: 0, y: 16 }"
                :visible-once="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 400, delay: idx * 80 },
                }"
              >
                <SkillItem v-bind="skill" />
              </div>
            </div>

            <!-- Proficient AI skills — medium cards -->
            <div
              v-if="aiProficient.length"
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
            >
              <div
                v-for="(skill, idx) in aiProficient"
                :key="skill.name"
                v-motion
                :initial="{ opacity: 0, y: 12 }"
                :visible-once="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 350, delay: 300 + idx * 60 },
                }"
              >
                <SkillItem v-bind="skill" />
              </div>
            </div>
          </div>
        </section>

        <!-- ────────────────────────────────────────────────────────── -->
        <!-- CORE EXPERTISE (non-AI)                                    -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <SectionHeading
            title="Core Expertise"
            subtitle="Technologies I've used extensively in production with deep hands-on experience."
            icon="heroicons:fire"
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(skill, idx) in coreNonAi"
              :key="skill.name"
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: idx * 80 },
              }"
            >
              <SkillItem v-bind="skill" />
            </div>
          </div>
        </section>

        <!-- ────────────────────────────────────────────────────────── -->
        <!-- PROFICIENT (non-AI)                                        -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <SectionHeading
            title="Proficient"
            subtitle="Solid working knowledge — used in projects or professional settings."
            icon="heroicons:wrench-screwdriver"
          />
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            <div
              v-for="(skill, idx) in proficientNonAi"
              :key="skill.name"
              v-motion
              :initial="{ opacity: 0, y: 12 }"
              :visible-once="{
                opacity: 1,
                y: 0,
                transition: { duration: 350, delay: idx * 50 },
              }"
            >
              <SkillItem v-bind="skill" />
            </div>
          </div>
        </section>

        <!-- ────────────────────────────────────────────────────────── -->
        <!-- FAMILIAR / EXPLORING                                       -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <SectionHeading
            title="Familiar & Exploring"
            subtitle="Technologies I've used in smaller scopes or am actively learning."
            icon="heroicons:beaker"
          />
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1, transition: { duration: 500 } }"
            class="flex flex-wrap gap-2"
          >
            <SkillItem
              v-for="skill in familiarSkills"
              :key="skill.name"
              v-bind="skill"
            />
          </div>
        </section>

        <!-- ────────────────────────────────────────────────────────── -->
        <!-- CONCEPTS & METHODOLOGIES                                   -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <SectionHeading
            title="Concepts & Methodologies"
            subtitle="Design principles and engineering practices I apply daily."
            icon="heroicons:light-bulb"
          />
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1, transition: { duration: 500 } }"
            class="flex flex-wrap gap-2"
          >
            <span
              v-for="skill in conceptSkills"
              :key="skill.name"
              class="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {{ skill.name }}
            </span>
          </div>
        </section>

        <!-- ────────────────────────────────────────────────────────── -->
        <!-- SOFT SKILLS                                                -->
        <!-- ────────────────────────────────────────────────────────── -->
        <section>
          <SectionHeading
            title="Soft Skills"
            subtitle="The non-technical competencies that make the technical ones effective."
            icon="heroicons:users"
          />
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="(skill, idx) in softSkills"
              :key="skill.name"
              v-motion
              :initial="{ opacity: 0, scale: 0.95 }"
              :visible-once="{
                opacity: 1,
                scale: 1,
                transition: { duration: 350, delay: idx * 60 },
              }"
              class="flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm"
            >
              <Icon
                name="heroicons:check-badge"
                class="h-5 w-5 text-apple-blue-500 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills, type Skill } from '~/data/skills'

// ── SEO ──────────────────────────────────────────────────────────────
useHead({
  title: 'Skills & Expertise | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content:
        'AI Agent Engineering, Java, Spring Boot, Python, LangChain — explore the full technology stack of Ayush Jaipuriar, ranked by depth and production impact.',
    },
    { property: 'og:title', content: 'Skills & Expertise | Ayush Jaipuriar' },
    { property: 'og:description', content: 'LangChain, LangGraph, Python, Java, Spring Boot, AWS — the full technology stack ranked by production depth and enterprise impact.' },
    { property: 'og:url', content: 'https://ayush-jaipuriar.github.io/Personal-Portfolio/skills' },
    { name: 'twitter:title', content: 'Skills & Expertise | Ayush Jaipuriar' },
    { name: 'twitter:description', content: 'LangChain, LangGraph, Python, Java, Spring Boot — technology stack ranked by production depth.' },
  ],
})

// ── Computed skill groups ────────────────────────────────────────────
/**
 * We split skills into display groups here rather than on the page
 * template to keep the <template> clean and allow easy reordering.
 *
 * "computed" ensures reactivity (useful if we ever add filtering UI).
 */

const aiCore = computed<Skill[]>(() =>
  skills.filter((s) => s.category === 'ai' && s.tier === 'core')
)

const aiProficient = computed<Skill[]>(() =>
  skills.filter((s) => s.category === 'ai' && s.tier === 'proficient')
)

const coreNonAi = computed<Skill[]>(() =>
  skills.filter((s) => s.tier === 'core' && s.category !== 'ai' && s.category !== 'soft')
)

const proficientNonAi = computed<Skill[]>(() =>
  skills.filter(
    (s) =>
      s.tier === 'proficient' &&
      s.category !== 'ai' &&
      s.category !== 'concepts' &&
      s.category !== 'soft'
  )
)

const familiarSkills = computed<Skill[]>(() =>
  skills.filter((s) => s.tier === 'familiar')
)

const conceptSkills = computed<Skill[]>(() =>
  skills.filter((s) => s.category === 'concepts')
)

const softSkills = computed<Skill[]>(() =>
  skills.filter((s) => s.category === 'soft')
)
</script>
