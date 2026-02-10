# Ayush Jaipuriar — Personal Portfolio

A personal portfolio website showcasing my experience as an **AI Agent Engineer & Senior Full-Stack Developer**. Built with Nuxt 3 (Vue 3), Tailwind CSS, and Nuxt Content, deployed via GitHub Pages.

**Live:** [https://ayush-jaipuriar.github.io/Personal-Portfolio/](https://ayush-jaipuriar.github.io/Personal-Portfolio/)

## Features

- Responsive design with Apple-inspired aesthetics
- Dark/light mode with system preference detection
- Professional case studies with real project data
- Blog system powered by Markdown (Nuxt Content)
- Contact form with Formspree integration
- Animated UI with scroll-triggered transitions
- SEO-optimized with Open Graph and structured data
- Static site generation for optimal performance

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Nuxt 3](https://nuxt.com) (Vue 3) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Content | [@nuxt/content](https://content.nuxtjs.org) (Markdown) |
| Animation | [@vueuse/motion](https://motion.vueuse.org/) |
| Icons | [nuxt-icon](https://github.com/nuxt-modules/icon) |
| Theme | [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) |
| Deployment | GitHub Actions → GitHub Pages |

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
git clone https://github.com/ayush-jaipuriar/Personal-Portfolio.git
cd Personal-Portfolio
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Static Generation

```bash
yarn generate
```

The static output is generated in `.output/public/` and can be served with:

```bash
npx serve .output/public
```

### Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

## Project Structure

```
├── assets/css/          # Global styles (Tailwind base)
├── components/          # Reusable Vue components
├── composables/         # Vue composables (shared logic)
├── content/blog/        # Markdown blog posts
├── data/                # TypeScript data files (projects, skills)
├── layouts/             # Page layouts
├── pages/               # File-based routing (Nuxt pages)
├── public/              # Static assets (images, resume, favicons)
└── nuxt.config.ts       # Nuxt configuration
```

## License

[MIT License](LICENSE)
