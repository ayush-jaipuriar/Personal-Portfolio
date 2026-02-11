import { defineEventHandler } from 'h3'
import { allProjects } from '~/data/projects'

/**
 * server/routes/sitemap.xml.ts
 *
 * Dynamically generates a sitemap.xml file for search engines.
 * This server route is prerendered during `yarn generate` and
 * outputs a static sitemap.xml file at the site root.
 *
 * Why not use @nuxtjs/sitemap?
 * - Latest versions require Node 20+; creating a manual server route
 *   ensures compatibility with Node 18 and gives full control.
 *
 * XML Structure:
 * - <urlset> root element with xmlns namespace
 * - <url> for each page, containing:
 *   - <loc> (location/URL)
 *   - <lastmod> (last modified date, ISO 8601 format)
 *   - <changefreq> (how often the page changes)
 *   - <priority> (0.0-1.0, relative importance)
 */

export default defineEventHandler((event) => {
  // Set XML content-type header
  event.node.res.setHeader('Content-Type', 'application/xml')
  

  const baseURL = 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  // Static pages with their metadata
  const staticPages = [
    { path: '/', changefreq: 'monthly', priority: 1 },
    { path: '/about', changefreq: 'monthly', priority: 0.9 },
    { path: '/projects', changefreq: 'weekly', priority: 0.9 },
    { path: '/skills', changefreq: 'monthly', priority: 0.8 },
    { path: '/blog', changefreq: 'weekly', priority: 0.8 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  ]

  // Generate project detail page URLs dynamically from data/projects.ts
  const projectPages = allProjects.map((project) => ({
    path: `/projects/${project.slug}`,
    changefreq: 'monthly',
    priority: 0.7,
  }))

  // Blog posts (currently only one, can be expanded with queryContent if needed)
  const blogPages = [
    { path: '/blog/building-production-ai-agents', changefreq: 'monthly', priority: 0.7 },
  ]

  // Combine all URLs
  const allPages = [...staticPages, ...projectPages, ...blogPages]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseURL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  // Return XML response with correct content-type header
  return sitemap
})
