import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Fahrdienst — VIP und Werttransport',
  description: 'Sicherer Transport von Personen, Dokumenten und Wertgegenstaenden.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/fahrdienst' },
}

export default function Page() {
  return <ServicePageTemplate slug="fahrdienst" />
}
