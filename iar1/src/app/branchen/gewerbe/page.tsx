import type { Metadata } from 'next'
import { BranchPageTemplate } from '@/components/BranchPageTemplate'

export const metadata: Metadata = {
  title: 'Sicherheitsdienst fuer Gewerbe und Handel',
  description: 'Objektschutz, Revierdienst und Empfangsdienst fuer Gewerbeimmobilien und Einzelhandel. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/branchen/gewerbe' },
}

export default function Page() {
  return <BranchPageTemplate slug="gewerbe" />
}
