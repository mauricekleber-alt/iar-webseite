import type { Metadata } from 'next'
import { BranchPageTemplate } from '@/components/BranchPageTemplate'

export const metadata: Metadata = {
  title: 'Werkschutz und Sicherheit fuer Industrie und Produktion',
  description: 'Professioneller Werkschutz fuer Industriegelaende. Tor-Management, Rundgaenge, Zugangskontrollen. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/branchen/industrie' },
}

export default function Page() {
  return <BranchPageTemplate slug="industrie" />
}
