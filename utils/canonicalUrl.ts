const DEFAULT_SITE_URL = 'https://ayush-jaipuriar.github.io/Personal-Portfolio'
const DEFAULT_BASE_PATH = '/Personal-Portfolio'

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

const normalizeBasePath = (basePath: string) => {
  if (!basePath || basePath === '/') return ''
  return `/${basePath.replace(/^\/+|\/+$/g, '')}`
}

export const normalizeCanonicalPath = (
  path: string,
  basePath: string = DEFAULT_BASE_PATH
) => {
  const normalizedBasePath = normalizeBasePath(basePath)
  let normalizedPath = path || '/'

  if (/^https?:\/\//i.test(normalizedPath)) {
    try {
      normalizedPath = new URL(normalizedPath).pathname
    } catch {
      normalizedPath = '/'
    }
  }

  normalizedPath = `/${normalizedPath.replace(/^\/+/, '')}`

  if (
    normalizedBasePath &&
    (normalizedPath === normalizedBasePath ||
      normalizedPath.startsWith(`${normalizedBasePath}/`))
  ) {
    normalizedPath = normalizedPath.slice(normalizedBasePath.length) || '/'
  }

  return normalizedPath === '/' ? '/' : normalizedPath.replace(/\/+$/, '')
}

export const buildCanonicalUrl = (
  path: string,
  siteUrl: string = DEFAULT_SITE_URL,
  basePath: string = DEFAULT_BASE_PATH
) => {
  const normalizedSiteUrl = trimTrailingSlash(siteUrl || DEFAULT_SITE_URL)
  const normalizedPath = normalizeCanonicalPath(path, basePath)

  return `${normalizedSiteUrl}${normalizedPath === '/' ? '' : normalizedPath}`
}

