import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Revierdienst und Alarmintervention',
  description: 'Mobile Patrouillen und sofortige Alarmreaktion fuer Ihre Standorte. Saarland und Heilbronn.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/revierdienst' },
}

export default function Page() {
  return <ServicePageTemplate slug="revierdienst" />
}
