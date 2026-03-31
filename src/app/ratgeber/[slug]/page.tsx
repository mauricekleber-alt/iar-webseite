// app/ratgeber/[slug]/page.tsx
// Blog-Artikel Seite mit voller SEO/GEO-Optimierung
// Payload CMS 3.x + Next.js 15 App Router

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import Image from 'next/image'

// ---------------------------------------------------------
// TYPES
// ---------------------------------------------------------

interface BlogArticle {
  id: string
  title: string
  subtitle?: string
  slug: string
  heroImage: { url: string; alt?: string; width: number; height: number }
  intro: string
  content: any // Lexical RichText
  category: string
  region: string
  city?: string[]
  targetAudience?: string
  tags?: string[]
  seoTitle?: string
  seoDescription?: string
  focusKeyword?: string
  noIndex?: boolean
  canonicalUrl?: string
  faqItems?: { question: string; answer: string }[]
  localBusiness?: { serviceArea?: string; geoLat?: number; geoLng?: number }
  callToAction?: {
    enabled: boolean
    heading: string
    text: string
    buttonText: string
    buttonLink: string
  }
  author?: { name: string }
  publishedAt: string
  updatedAt: string
  updatedNote?: string
  relatedArticles?: BlogArticle[]
  status: 'draft' | 'review' | 'published'
}

// ---------------------------------------------------------
// DATA FETCHING
// ---------------------------------------------------------

async function getArticle(slug: string): Promise<BlogArticle | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blog-articles',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    depth: 2,
    limit: 1,
  })
  return (result.docs[0] as BlogArticle) || null
}

async function getRelatedArticles(
  category: string,
  region: string,
  excludeId: string,
): Promise<BlogArticle[]> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blog-articles',
    where: {
      and: [
        { status: { equals: 'published' } },
        { id: { not_equals: excludeId } },
        {
          or: [{ category: { equals: category } }, { region: { equals: region } }],
        },
      ],
    },
    limit: 3,
    sort: '-publishedAt',
  })
  return result.docs as BlogArticle[]
}

// ---------------------------------------------------------
// STATIC PARAMS (ISR)
// ---------------------------------------------------------

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'blog-articles',
    where: { status: { equals: 'published' } },
    limit: 500,
    select: { slug: true },
  })
  return articles.docs.map((a) => ({ slug: a.slug }))
}

// ---------------------------------------------------------
// METADATA (SEO)
// ---------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: 'Artikel nicht gefunden' }

  const title = article.seoTitle || `${article.title} | IAR Sicherheit`
  const description = article.seoDescription || article.intro

  return {
    title,
    description,
    robots: article.noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: article.canonicalUrl || `https://iar-sicherheit.de/ratgeber/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://iar-sicherheit.de/ratgeber/${article.slug}`,
      type: 'article',
      locale: 'de_DE',
      images: article.heroImage?.url
        ? [
            {
              url: article.heroImage.url,
              width: article.heroImage.width,
              height: article.heroImage.height,
              alt: article.heroImage.alt || article.title,
            },
          ]
        : undefined,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ['David Rosenfeldt'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

// ---------------------------------------------------------
// HELPERS
// ---------------------------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  objektschutz: 'Objektschutz',
  werkschutz: 'Werkschutz',
  revierdienst: 'Revierdienst & Patrouille',
  alarmintervention: 'Alarmintervention',
  empfangsdienst: 'Empfangsdienst',
  fahrdienst: 'Fahrdienst',
  alarmtechnik: 'Alarmtechnik',
  bankensicherheit: 'Bankensicherheit',
  allgemein: 'Sicherheitstipps',
  karriere: 'Karriere',
}

const REGION_LABELS: Record<string, string> = {
  saarland: 'Saarland',
  heilbronn: 'Raum Heilbronn',
  beide: 'Saarland & Heilbronn',
  ueberregional: 'Überregional',
}

const CITY_LABELS: Record<string, string> = {
  saarbruecken: 'Saarbrücken',
  neunkirchen: 'Neunkirchen',
  homburg: 'Homburg',
  voelklingen: 'Völklingen',
  'st-ingbert': 'St. Ingbert',
  merzig: 'Merzig',
  'st-wendel': 'St. Wendel',
  saarlouis: 'Saarlouis',
  dillingen: 'Dillingen',
  ottweiler: 'Ottweiler',
  wadern: 'Wadern',
  lebach: 'Lebach',
  blieskastel: 'Blieskastel',
  'heilbronn-stadt': 'Heilbronn',
  neckarsulm: 'Neckarsulm',
  weinsberg: 'Weinsberg',
  'bad-friedrichshall': 'Bad Friedrichshall',
  eppingen: 'Eppingen',
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function generateSchemaMarkup(article: BlogArticle) {
  const schemas: object[] = [
    // BlogPosting Schema
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.seoTitle || article.title,
      description: article.seoDescription || article.intro,
      image: article.heroImage?.url,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Person',
        name: 'David Rosenfeldt',
        jobTitle: 'Geschäftsführer, IAR Sicherheit GmbH',
        url: 'https://iar-sicherheit.de/ueber-uns',
      },
      publisher: {
        '@type': 'Organization',
        name: 'IAR Sicherheit GmbH',
        logo: {
          '@type': 'ImageObject',
          url: 'https://iar-sicherheit.de/logo.svg',
        },
      },
      mainEntityOfPage: `https://iar-sicherheit.de/ratgeber/${article.slug}`,
      about: {
        '@type': 'Service',
        name: CATEGORY_LABELS[article.category] || article.category,
      },
      ...(article.localBusiness?.serviceArea && {
        spatialCoverage: {
          '@type': 'Place',
          name: article.localBusiness.serviceArea,
          ...(article.localBusiness.geoLat && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: article.localBusiness.geoLat,
              longitude: article.localBusiness.geoLng,
            },
          }),
        },
      }),
    },
    // BreadcrumbList Schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://iar-sicherheit.de',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ratgeber',
          item: 'https://iar-sicherheit.de/ratgeber',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: `https://iar-sicherheit.de/ratgeber/${article.slug}`,
        },
      ],
    },
  ]

  // FAQ Schema (wenn vorhanden)
  if (article.faqItems && article.faqItems.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return schemas
}

// ---------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const relatedArticles =
    article.relatedArticles?.length > 0
      ? article.relatedArticles
      : await getRelatedArticles(article.category, article.region, article.id)

  const schemas = generateSchemaMarkup(article)

  return (
    <>
      {/* Schema Markup */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="blog-article">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ratgeber">Ratgeber</Link>
            </li>
            <li aria-current="page">{article.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="article-header">
          <div className="article-meta-top">
            <span className="article-category">
              {CATEGORY_LABELS[article.category]}
            </span>
            {article.city?.map((c) => (
              <span key={c} className="article-city-tag">
                {CITY_LABELS[c] || c}
              </span>
            ))}
            <span className="article-region">
              {REGION_LABELS[article.region]}
            </span>
          </div>

          <h1>{article.title}</h1>
          {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}

          <div className="article-meta">
            <div className="author-info">
              <Image
                src="/images/david-rosenfeldt.jpg"
                alt="David Rosenfeldt"
                width={40}
                height={40}
                className="author-avatar"
              />
              <div>
                <span className="author-name">David Rosenfeldt</span>
                <span className="author-role">Geschäftsführer</span>
              </div>
            </div>
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            {article.updatedNote && (
              <span className="update-badge">{article.updatedNote}</span>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {article.heroImage && (
          <div className="article-hero-image">
            <Image
              src={article.heroImage.url}
              alt={article.heroImage.alt || article.title}
              width={article.heroImage.width}
              height={article.heroImage.height}
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Intro */}
        <div className="article-intro">
          <p>{article.intro}</p>
        </div>

        {/* Main Content (Lexical RichText) */}
        <div className="article-content">
          <RichText data={article.content} />
        </div>

        {/* FAQ Section */}
        {article.faqItems && article.faqItems.length > 0 && (
          <section className="article-faq">
            <h2>Häufig gestellte Fragen</h2>
            <div className="faq-list">
              {article.faqItems.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA Box */}
        {article.callToAction?.enabled && (
          <aside className="article-cta-box">
            <h3>{article.callToAction.heading}</h3>
            <p>{article.callToAction.text}</p>
            <Link href={article.callToAction.buttonLink} className="btn btn--cta">
              {article.callToAction.buttonText}
            </Link>
            <div className="cta-contact">
              <span>Oder direkt anrufen:</span>
              <a href="tel:+496824302528">(06824) 302528</a>
            </div>
          </aside>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="article-tags">
            {article.tags.map((tag) => (
              <Link key={tag} href={`/ratgeber?tag=${tag}`} className="tag-pill">
                {tag.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <h2>Weiterlesen</h2>
          <div className="related-grid">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/ratgeber/${related.slug}`}
                className="related-card"
              >
                {related.heroImage && (
                  <Image
                    src={related.heroImage.url}
                    alt={related.heroImage.alt || related.title}
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className="related-card-body">
                  <span className="related-category">
                    {CATEGORY_LABELS[related.category]}
                  </span>
                  <h3>{related.title}</h3>
                  <time dateTime={related.publishedAt}>
                    {formatDate(related.publishedAt)}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
