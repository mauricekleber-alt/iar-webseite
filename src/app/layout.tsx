import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { SocialBar } from '@/components/SocialBar'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { LocalBusinessSchema } from '@/components/SchemaMarkup'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://iar-sicherheit.de'),
  title: {
    default: 'IAR Sicherheit GmbH — Sicherheitsdienst Saarland & Heilbronn',
    template: '%s — IAR Sicherheit GmbH',
  },
  description: 'Professioneller Sicherheitsdienst mit über 200 Mitarbeitern. Objektschutz, Werkschutz, Revierdienst, Alarmintervention. Seit 1996.',
  keywords: ['Sicherheitsdienst', 'Objektschutz', 'Werkschutz', 'Revierdienst', 'Alarmintervention', 'Saarland', 'Heilbronn', 'Saarbrücken', 'Ottweiler', 'Sicherheit'],
  authors: [{ name: 'IAR Sicherheit GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://iar-sicherheit.de',
    siteName: 'IAR Sicherheit GmbH',
    title: 'IAR Sicherheit GmbH — Sicherheitsdienst Saarland & Heilbronn',
    description: 'Professioneller Sicherheitsdienst mit über 200 Mitarbeitern. Seit 1996.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'IAR Sicherheit GmbH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAR Sicherheit GmbH',
    description: 'Sicherheitsdienst Saarland & Heilbronn. Seit 1996.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // google: 'GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://iar-sicherheit.de',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body>
        <div className="sg" />
        <SocialBar />
        <Nav />
        <LocalBusinessSchema />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
