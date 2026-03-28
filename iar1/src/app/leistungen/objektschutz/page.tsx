import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Objektschutz — 24/7 Gebaeudeewachung',
  description: 'Professioneller Objektschutz mit Zugangskontrollen und Videoueberwachung. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/objektschutz' },
}

export default function Page() {
  return <ServicePageTemplate slug="objektschutz" />
}
