<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-3xl mx-auto">
      <!-- Back Link -->
      <div class="mb-8 animate-fade-in">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Blog
        </NuxtLink>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-apple-blue-600"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading post...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error || !data" class="text-center py-20">
        <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 text-red-500 mb-4 mx-auto" aria-hidden="true" />
        <h1 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Post Not Found</h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-apple-blue-600 hover:bg-apple-blue-700 transition-colors duration-200"
        >
          Browse All Posts
        </NuxtLink>
      </div>

      <!-- Blog Post Content (only if data exists and no error) -->
      <article v-else class="animate-fade-in">
         <!-- Post Title -->
         <header class="mb-12">
           <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{{ data.title }}</h1>
           
           <!-- Post Metadata -->
           <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
             <!-- Date -->
             <time :datetime="data.date">{{ formatDate(data.date) }}</time>
             
             <!-- Reading Time -->
             <span class="mx-2">·</span>
             <span>{{ data.readingTime || '5 min read' }}</span>

             <!-- Categories -->
             <span v-if="data.categories && data.categories.length" class="mx-2">·</span>
             <div v-if="data.categories && data.categories.length" class="flex gap-2">
               <NuxtLink 
                 v-for="(category, index) in data.categories" 
                 :key="index" 
                 :to="`/blog?category=${category}`" 
                 class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline"
               >
                 #{{ category }}
               </NuxtLink>
             </div>
           </div>
           
           <!-- Featured Image -->
          <div v-if="data.image" class="rounded-2xl overflow-hidden mb-10">
            <img 
              :src="toAssetPath(data.image)" 
              :alt="data.title"
              width="1200"
              height="630"
              class="w-full h-auto"
            />
          </div>
         </header>

         <!-- Post Content -->
         <div class="prose prose-lg dark:prose-invert mx-auto">
           <ContentRenderer :value="data" />
         </div>

         <!-- Author Section -->
         <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
           <div class="flex items-center">
             <img 
               :src="toAssetPath('/ayush-jaipuriar.jpeg')" 
               alt="Ayush Jaipuriar"
               width="48"
               height="48"
               loading="lazy"
               class="h-12 w-12 rounded-full mr-4"
             />
             <div>
               <h3 class="text-lg font-medium text-gray-900 dark:text-white">Ayush Jaipuriar</h3>
               <p class="text-gray-600 dark:text-gray-400">
                 Full Stack Software Engineer at TransUnion, specializing in modern web technologies and cloud solutions.
               </p>
             </div>
           </div>
         </div>

         <!-- Share Post -->
         <div class="mt-12">
           <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Share this post</h3>
           <div class="flex space-x-4">
             <a 
               :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(shareUrl)}`" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="text-gray-600 hover:text-twitter dark:text-gray-400 dark:hover:text-twitter transition-colors duration-200"
               aria-label="Share on Twitter"
             >
               <Icon name="mdi:twitter" class="h-6 w-6" aria-hidden="true" />
             </a>
             <a 
               :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(data.title)}`" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="text-gray-600 hover:text-linkedin dark:text-gray-400 dark:hover:text-linkedin transition-colors duration-200"
               aria-label="Share on LinkedIn"
             >
               <Icon name="mdi:linkedin" class="h-6 w-6" aria-hidden="true" />
             </a>
             <a 
               :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="text-gray-600 hover:text-facebook dark:text-gray-400 dark:hover:text-facebook transition-colors duration-200"
               aria-label="Share on Facebook"
             >
               <Icon name="mdi:facebook" class="h-6 w-6" aria-hidden="true" />
             </a>
           </div>
         </div>

         <!-- Related Posts -->
         <div v-if="relatedPosts && relatedPosts.length > 0" class="mt-24">
           <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Posts</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div v-for="relatedPost in relatedPosts" :key="relatedPost._path" class="group">
               <NuxtLink :to="relatedPost._path">
                 <div v-if="relatedPost.image" class="mb-2 rounded-lg overflow-hidden">
                   <img 
                    :src="toAssetPath(relatedPost.image)" 
                     :alt="relatedPost.title"
                     width="400"
                     height="192"
                     loading="lazy"
                     class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                   />
                 </div>
                 <h3 class="font-medium text-gray-900 dark:text-white group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-200">
                   {{ relatedPost.title }}
                 </h3>
                 <p v-if="relatedPost.description" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                   {{ relatedPost.description.substring(0, 100) }}...
                 </p>
               </NuxtLink>
             </div>
           </div>
         </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useAsyncData, useHead, useRuntimeConfig } from 'nuxt/app';
import { computed, nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from 'vue';

// Define an interface for the blog post data structure
interface BlogPost {
  _path: string;
  title: string;
  date: string;
  readingTime?: string;
  categories?: string[];
  image?: string;
  description?: string;
  body?: any; // For content body
}

type MermaidApi = typeof import('mermaid').default;

// Nuxt auto-imports queryContent at runtime, but local TS tooling may not always infer it.
declare const queryContent: <T = BlogPost>(...args: any[]) => any;

// Get the current route params
const route = useRoute();
const fullPath = route.fullPath;
const runtimeConfig = useRuntimeConfig();
const mermaidApi = shallowRef<MermaidApi | null>(null);
let colorModeObserver: MutationObserver | null = null;

const toAssetPath = (path?: string) => {
  if (!path) return '';

  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const baseURL = runtimeConfig.app.baseURL || '/';
  if (baseURL !== '/' && path.startsWith(baseURL)) {
    return path;
  }

  return `${baseURL}${path.replace(/^\/+/, '')}`;
};

// Construct the blog post path from route params
const blogPath = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug;
  return `/blog/${slug}`;
});

// Fetch the blog post content using Nuxt Content
const { data, pending, error } = await useAsyncData<BlogPost>(
  `blog-${blogPath.value}`,
  () => queryContent<BlogPost>(blogPath.value).findOne()
);

// Fetch related posts
const { data: relatedPosts } = await useAsyncData(
  `related-posts-${blogPath.value}`,
  async () => {
    if (!data.value?.categories?.length) return [];
    
    // Find posts that share at least one category
    const related = await queryContent<BlogPost>('/blog')
      .where({ _path: { $ne: blogPath.value } })
      .sort({ date: -1 })
      .limit(4)
      .find();

    // Filter posts that share categories and limit to 2
    return related.filter(post => 
      post.categories?.some(cat => data.value?.categories?.includes(cat))
    ).slice(0, 2);
  },
  {
    default: () => []
  }
);

// Base URL for constructing absolute URLs for sharing
const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
  : 'http://localhost:3000';

const shareUrl = computed(() => `${baseUrl}${fullPath}`);

// Format the date
const formatDate = (dateStr: string | undefined) => {
  if (!dateStr) return '';
  
  const date = new Date(dateStr);
  // Format: Month Day, Year (e.g., January 1, 2023)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getMermaidTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'default';

const ensureMermaidApi = async (): Promise<MermaidApi | null> => {
  if (import.meta.server) return null;

  if (!mermaidApi.value) {
    const module = await import('mermaid');
    mermaidApi.value = module.default;
  }

  return mermaidApi.value;
};

const replaceMermaidCodeBlocks = () => {
  if (import.meta.server) return;

  const mermaidBlocks = document.querySelectorAll<HTMLElement>(
    '.prose pre code.language-mermaid, .prose pre code.lang-mermaid'
  );

  mermaidBlocks.forEach((codeBlock, index) => {
    const pre = codeBlock.closest('pre');
    const source = codeBlock.textContent?.trim();
    if (!pre || !source) return;

    const container = document.createElement('div');
    container.className = 'mermaid-diagram';
    container.dataset.mermaidSource = source;
    container.dataset.diagramIndex = String(index);

    pre.replaceWith(container);
  });
};

const mountMermaidSvg = (container: HTMLElement, svgMarkup: string) => {
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgMarkup, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement.nodeName.toLowerCase() !== 'svg') {
    throw new Error('Mermaid output did not produce an SVG element');
  }

  container.replaceChildren(svgElement);
};

const renderMermaidDiagrams = async () => {
  if (import.meta.server) return;

  await nextTick();
  replaceMermaidCodeBlocks();

  const diagramContainers = document.querySelectorAll<HTMLElement>(
    '.prose .mermaid-diagram[data-mermaid-source]'
  );

  // Skip loading Mermaid runtime when the post has no Mermaid fences.
  if (diagramContainers.length === 0) return;

  const mermaid = await ensureMermaidApi();
  if (!mermaid) return;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: getMermaidTheme(),
  });

  for (const [index, container] of Array.from(diagramContainers).entries()) {
    const source = container.dataset.mermaidSource;
    if (!source) continue;

    try {
      const renderId = `mermaid-${blogPath.value.replaceAll(/[^a-zA-Z0-9-_]/g, '-')}-${index}-${Date.now()}`;
      const { svg } = await mermaid.render(renderId, source);
      mountMermaidSvg(container, svg);
    } catch (renderError) {
      console.error('Mermaid render failed:', renderError);
      const fallbackPre = document.createElement('pre');
      fallbackPre.className = 'mermaid-fallback';
      fallbackPre.textContent = source;
      container.replaceChildren(fallbackPre);
    }
  }
};

onMounted(() => {
  void renderMermaidDiagrams();

  colorModeObserver = new MutationObserver((mutations) => {
    const classChanged = mutations.some((mutation) => mutation.attributeName === 'class');
    if (classChanged) {
      void renderMermaidDiagrams();
    }
  });

  colorModeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
});

watch(
  () => data.value?._path,
  () => {
    void renderMermaidDiagrams();
  }
);

onBeforeUnmount(() => {
  colorModeObserver?.disconnect();
  colorModeObserver = null;
});

// Define metadata for the page
useHead({
  title: computed(() => data.value ? `${data.value.title} | Ayush Jaipuriar` : 'Blog Post | Ayush Jaipuriar'),
  meta: [
    {
      name: 'description',
      content: computed(() => data.value ? data.value.description || `Read ${data.value.title} by Ayush Jaipuriar` : 'Blog post by Ayush Jaipuriar')
    },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:title',
      content: computed(() => data.value?.title || 'Blog Post')
    },
    {
      property: 'og:description',
      content: computed(() => data.value?.description || 'Blog post by Ayush Jaipuriar')
    },
    {
      property: 'og:image',
      content: computed(() => {
        const img = data.value?.image
        if (!img) return 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png'
        if (img.startsWith('http')) return img
        return `https://ayush-jaipuriar.github.io/Personal-Portfolio${img}`
      })
    },
    {
      property: 'og:url',
      content: computed(() => shareUrl.value)
    },
    { property: 'article:published_time', content: computed(() => data.value?.date || '') },
    { property: 'article:author', content: 'Ayush Jaipuriar' },
    {
      name: 'twitter:title',
      content: computed(() => data.value?.title || 'Blog Post')
    },
    {
      name: 'twitter:description',
      content: computed(() => data.value?.description || 'Blog post by Ayush Jaipuriar')
    },
    {
      name: 'twitter:image',
      content: computed(() => {
        const img = data.value?.image
        if (!img) return 'https://ayush-jaipuriar.github.io/Personal-Portfolio/og-default.png'
        if (img.startsWith('http')) return img
        return `https://ayush-jaipuriar.github.io/Personal-Portfolio${img}`
      })
    },
  ]
});
</script>

<style>
.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose code {
  @apply px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm;
}

.prose pre {
  @apply p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto text-sm mb-4;
}

/* Ensure plain-text / ASCII diagrams inside code blocks have strong contrast.
   Without a language tag, Shiki/Nuxt Content renders code as plain text,
   which can inherit low-contrast colors. This forces high-contrast text. */
.prose pre code {
  @apply block text-gray-800 dark:text-gray-100;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.prose .mermaid-diagram {
  @apply my-6 p-4 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg overflow-x-auto;
}

.prose .mermaid-diagram svg {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.prose .mermaid-fallback {
  @apply m-0 p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-800 dark:text-gray-100 overflow-x-auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.prose ul, .prose ol {
  @apply mb-4 pl-5;
}

.prose li {
  @apply mb-1;
}

.prose blockquote {
  @apply pl-4 border-l-4 border-gray-300 dark:border-gray-700 italic my-4;
}

.text-twitter {
  color: #1DA1F2;
}

.text-linkedin {
  color: #0077B5;
}

.text-facebook {
  color: #1877F2;
}
</style> 