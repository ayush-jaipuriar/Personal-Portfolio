import { useRuntimeConfig } from 'nuxt/app'
import { buildCanonicalUrl } from '~/utils/canonicalUrl'

export const useCanonicalUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl =
    runtimeConfig.public.siteUrl ||
    'https://ayush-jaipuriar.github.io/Personal-Portfolio'
  const basePath = runtimeConfig.app.baseURL || '/'

  return {
    toCanonicalUrl: (path: string) =>
      buildCanonicalUrl(path, siteUrl, basePath),
  }
}

