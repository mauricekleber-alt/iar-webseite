import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Werkschutz — Sicherheit fuer Ihr Industriegelaende',
  description: 'Werkschutz mit Tor-Management und Rundgaengen auf Ihrem Werksgelaende. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/werkschutz' },
}

export default function Page() {
  return <ServicePageTemplate slug="werkschutz" />
}
