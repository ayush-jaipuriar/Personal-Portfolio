import { useRuntimeConfig } from 'nuxt/app'

/**
 * Resolves static asset paths so they work in both:
 * - local dev (`/`)
 * - GitHub Pages deploys (`/Personal-Portfolio/`)
 */
export const useAssetPath = () => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'

  const toAssetPath = (path?: string) => {
    if (!path) return ''

    // Keep absolute/data/blob URLs unchanged.
    if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
      return path
    }

    // Avoid double-prefixing when path already includes the configured base URL.
    if (baseURL !== '/' && path.startsWith(baseURL)) {
      return path
    }

    return `${baseURL}${path.replace(/^\/+/, '')}`
  }

  return { toAssetPath }
}
