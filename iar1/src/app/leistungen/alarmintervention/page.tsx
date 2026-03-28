import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Alarmintervention — Sofort-Reaktion',
  description: 'Sofortige Reaktion auf Sicherheitsalarme. Einsatzkraefte in kuerzester Zeit vor Ort.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen/alarmintervention' },
}

export default function Page() {
  return <ServicePageTemplate slug="alarmintervention" />
}
