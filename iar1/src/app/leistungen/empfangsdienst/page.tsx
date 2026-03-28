import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Empfangsdienst — Professioneller Pfortendienst',
  description: 'Professioneller Empfangs- und Pfortendienst mit Besucherregistrierung und Zugangskontrolle.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/empfangsdienst' },
}

export default function Page() {
  return <ServicePageTemplate slug="empfangsdienst" />
}
