import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thad75.github.io'

  // Add all your pages here. 
  // We don't add trailing slashes here because we'll append them below
  const routes = [
    '',
    '/blog/phd-to-lead-ai',
    '/blog/transversal',
    '/blog/dn-dino-dab',
    '/blog/detr',
  ]

  return routes.map((route) => ({
    // Since trailingSlash: true is set in next.config.ts, we ensure URLs end with a slash
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
