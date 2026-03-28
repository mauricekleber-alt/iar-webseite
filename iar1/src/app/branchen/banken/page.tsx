import type { Metadata } from 'next'
import { BranchPageTemplate } from '@/components/BranchPageTemplate'

export const metadata: Metadata = {
  title: 'Sicherheitsdienst fuer Banken und Finanzinstitute',
  description: 'Spezialisierte Sicherheitsloesungen fuer Banken: Gebaeudesicherheit, Interventionsfahrten, Krisenmanagement. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/branchen/banken' },
}

export default function Page() {
  return <BranchPageTemplate slug="banken" />
}
