import { describe, expect, it } from 'vitest'
import { buildCanonicalUrl, normalizeCanonicalPath } from '../utils/canonicalUrl'

const siteUrl = 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
const basePath = '/Personal-Portfolio/'

describe('canonical URL helpers', () => {
  it('builds a production URL for a root-relative blog path', () => {
    expect(buildCanonicalUrl('/blog/building-production-ai-agents', siteUrl, basePath)).toBe(
      'https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents'
    )
  })

  it('builds a production URL for a path without a leading slash', () => {
    expect(buildCanonicalUrl('blog/building-production-ai-agents', siteUrl, basePath)).toBe(
      'https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents'
    )
  })

  it('does not duplicate the GitHub Pages base path', () => {
    expect(
      buildCanonicalUrl(
        '/Personal-Portfolio/blog/building-production-ai-agents',
        siteUrl,
        basePath
      )
    ).toBe(
      'https://ayush-jaipuriar.github.io/Personal-Portfolio/blog/building-production-ai-agents'
    )
  })

  it('normalizes the root path without a trailing slash after the site URL', () => {
    expect(buildCanonicalUrl('/', siteUrl, basePath)).toBe(
      'https://ayush-jaipuriar.github.io/Personal-Portfolio'
    )
  })

  it('never emits localhost when given the production site URL', () => {
    expect(buildCanonicalUrl('/blog/example', siteUrl, basePath)).not.toContain('localhost')
  })

  it('strips the base path when normalizing paths', () => {
    expect(normalizeCanonicalPath('/Personal-Portfolio/projects/forge', basePath)).toBe(
      '/projects/forge'
    )
  })
})

