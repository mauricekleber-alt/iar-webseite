import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SocialBar } from '@/components/SocialBar'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IAR Sicherheit GmbH — Sicherheitsdienst Saarland & Heilbronn',
    template: '%s | IAR Sicherheit',
  },
  description:
    'Professioneller Sicherheitsdienst in Saarland & Heilbronn. Objektschutz, Werkschutz, Revierdienst & Alarmintervention. 24/7 für Ihr Unternehmen da.',
  metadataBase: new URL('https://iar-sicherheit.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'IAR Sicherheit GmbH',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://iar-sicherheit.de',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SecurityGuard',
              name: 'IAR Sicherheit GmbH',
              url: 'https://iar-sicherheit.de',
              telephone: '(06824) 302528',
              email: 'info@iar-sicherheit.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Schlosshof 2',
                addressLocality: 'Ottweiler',
                postalCode: '66564',
                addressRegion: 'Saarland',
                addressCountry: 'DE',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 49.3991, longitude: 7.1667 },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              areaServed: [
                { '@type': 'State', name: 'Saarland' },
                { '@type': 'City', name: 'Heilbronn' },
              ],
              founder: { '@type': 'Person', name: 'David Rosenfeldt', jobTitle: 'Geschäftsführer' },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        {/* Security Grid Background */}
        <div className="security-grid" />

        {/* Social Media Top Bar */}
        <SocialBar />

        <Nav />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
