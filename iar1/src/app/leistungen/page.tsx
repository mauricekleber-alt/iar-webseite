import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel, SectionTitle, SectionSub, Button, PlainBox, FeatureItem } from '@/components/ui'
import { ShieldIcon, ArrowRightIcon } from '@/lib/icons'
import { SERVICES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Leistungen — Sicherheitsdienst Saarland & Heilbronn',
  description: 'Alle Sicherheitsdienstleistungen von IAR Sicherheit: Objektschutz, Werkschutz, Revierdienst, Alarmintervention, Empfangsdienst, Fahrdienst.',
  alternates: { canonical: 'https://iar-sicherheit.de/leistungen' },
}

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[160px] pb-20 text-center relative overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-7 relative">
          <SectionLabel className="justify-center">Unsere Leistungen</SectionLabel>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-heading font-bold mb-4">
            Sicherheit, <span className="gradient-text">die man versteht.</span>
          </h1>
          <p className="text-iar-gray-300 text-[1.05rem] max-w-[580px] mx-auto leading-[1.8] mb-8">
            Kein Fachchinesisch — hier erfahren Sie im Klartext, wie wir Ihr Unternehmen schuetzen.
          </p>
          <Button href="/anfrage" variant="cta">
            Angebot anfragen <ArrowRightIcon size={14} strokeWidth={2.5} />
          </Button>
        </div>
      </section>

      {/* Service Blocks - alternating layout */}
      {SERVICES.map((service, i) => (
        <section
          key={service.slug}
          className={`py-20 border-b border-iar-border ${i % 2 === 1 ? 'bg-iar-surface' : ''}`}
        >
          <div className="max-w-[1200px] mx-auto px-7">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl] [&>*]:lg:[direction:ltr]' : ''}`}>
              {/* Image */}
              <div className="rounded-[var(--radius-md)] overflow-hidden border border-iar-border">
                <Image
                  src={service.image}
                  alt={`${service.title} — IAR Sicherheit`}
                  width={800}
                  height={600}
                  className="w-full h-[340px] object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[var(--radius-xs)] text-[0.72rem] font-semibold bg-iar-accent-soft text-iar-accent-glow border border-iar-accent-border mb-4">
                  <ShieldIcon size={12} /> {service.subtitle}
                </span>
                <h2 className="text-[1.5rem] font-heading font-bold mb-3">{service.title}</h2>
                <PlainBox>{service.plain}</PlainBox>
                <p className="text-iar-gray-300 text-[0.96rem] leading-[1.8] mb-5">{service.description}</p>

                <div className="flex flex-col gap-2 mb-6">
                  {service.features.map((f) => (
                    <FeatureItem key={f}>{f}</FeatureItem>
                  ))}
                </div>

                <Button href={`/leistungen/${service.slug}`} variant="primary" className="text-[0.84rem] px-6 py-3">
                  {service.title} Details <ArrowRightIcon size={13} strokeWidth={2.5} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: '/images/empfang.jpg' }} />
            <h2 className="text-white text-[1.6rem] font-heading font-bold mb-3 relative">
              Welche Sicherheit brauchen Sie?
            </h2>
            <p className="text-white/75 max-w-[460px] mx-auto mb-7 relative">
              In 60 Sekunden ein unverbindliches Angebot anfragen.
            </p>
            <Button href="/anfrage" variant="white" className="relative">
              Jetzt Angebot anfragen <ArrowRightIcon size={14} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
