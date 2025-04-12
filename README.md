# Personal Developer Portfolio

This is a personal portfolio website built with Nuxt 3, utilizing the Static Site Generation (SSG) capabilities to ensure optimal performance and SEO benefits.

## Features

- 📱 **Responsive Design**: Fully mobile-responsive with Apple-inspired design aesthetics
- 🌓 **Dark/Light Mode**: Seamless theme toggle with local storage persistence
- ⚡ **Performance Optimized**: Built for high Lighthouse scores and Core Web Vitals
- 📝 **Blog with Markdown**: Integrated blog section with Nuxt Content
- 🔍 **SEO Ready**: Configured for optimal search engine visibility
- ♿ **Accessibility**: Follows WCAG 2.1 AA standards
- 📊 **GitHub Integration**: Ready to display GitHub profile information

## Tech Stack

- [Nuxt 3](https://nuxt.com) - Vue.js framework with SSG support
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Nuxt Content](https://content.nuxtjs.org) - File-based CMS for Nuxt
- [TypeScript](https://www.typescriptlang.org) - For type-safe code

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser at `http://localhost:3000`

## Customization Guide

### Personal Information

1. Update your personal details in:
   - `app.vue` - For the site title and metadata
   - `layouts/default.vue` - For your name in the header/footer
   - `pages/index.vue` - For your intro and hero section
   - `pages/about.vue` - For your bio and background
   - `pages/skills.vue` - For your technical skills
   - `pages/contact.vue` - For your contact information

### Projects

Add your projects in the `content/projects/` directory. Each project should have its own markdown file with front matter.

### Blog Posts

Add blog posts in the `content/blog/` directory as markdown files.

## Deployment

To generate a static version of your website:

```bash
npm run generate
# or
yarn generate
```

This will create a `dist` directory that can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

## License

[MIT License](LICENSE)

## Acknowledgements

- Design inspired by Apple's clean aesthetic
- Icons provided by [Nuxt Icon](https://github.com/nuxt-modules/icon)
