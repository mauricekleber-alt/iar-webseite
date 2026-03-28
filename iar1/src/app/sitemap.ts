// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://iar-sicherheit.de'
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Leistungen
    { url: `${base}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leistungen/objektschutz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leistungen/werkschutz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leistungen/revierdienst`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leistungen/alarmintervention`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/empfangsdienst`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/fahrdienst`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Branchen
    { url: `${base}/branchen/banken`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/branchen/industrie`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/branchen/gewerbe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Funnels
    { url: `${base}/anfrage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/karriere`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/karriere/bewerben`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Info
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Legal
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Dynamic blog articles from Payload CMS
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const res = await fetch(`${base}/api/blog-articles?where[status][equals]=published&limit=500&select[slug]=true&select[updatedAt]=true`, {
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const data = await res.json()
      blogPages = data.docs.map((article: { slug: string; updatedAt: string }) => ({
        url: `${base}/ratgeber/${article.slug}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch {
    // CMS not available during build — skip blog pages
  }

  return [...staticPages, ...blogPages]
}
