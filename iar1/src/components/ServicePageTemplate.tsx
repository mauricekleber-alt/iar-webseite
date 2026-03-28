// src/components/ServicePageTemplate.tsx
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel, SectionTitle, Button, FeatureItem, PlainBox, Badge } from '@/components/ui'
import { ShieldIcon, ArrowRightIcon, LockIcon, PhoneIcon, CheckCircleIcon } from '@/lib/icons'
import { IAR, SERVICES } from '@/lib/utils'

interface ServicePageProps {
  slug: string
}

export function ServicePageTemplate({ slug }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return null

  // Get related services (exclude current)
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  // SEO: Service Schema is added via generateMetadata in each page.tsx

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[160px] pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${service.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-iar-dark via-iar-dark/95 to-iar-dark" />
        <div className="scan-line" />

        <div className="max-w-[1200px] mx-auto px-7 relative z-[4]">
          <SectionLabel>{service.subtitle}</SectionLabel>
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-heading font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-[1.1rem] text-iar-gray-300 max-w-[600px] leading-[1.8] mb-8">
            {service.description}
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Button href="/anfrage" variant="cta">
              {service.title} anfragen <ArrowRightIcon size={15} strokeWidth={2.5} />
            </Button>
            <Button href="tel:+496824302528" variant="outline">
              <PhoneIcon size={14} /> Direkt anrufen
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
            {/* Image */}
            <div className="rounded-[var(--radius-md)] overflow-hidden border border-iar-border sticky top-[120px]">
              <Image
                src={service.image}
                alt={`${service.title} — IAR Sicherheit GmbH`}
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-[1.6rem] font-heading font-bold mb-4">
                Was ist {service.title}?
              </h2>
              <PlainBox>{service.plain}</PlainBox>
              <p className="text-iar-gray-300 leading-[1.8] mb-8">{service.description}</p>

              <h3 className="text-[1.2rem] font-heading font-bold mb-4">Was wir konkret machen:</h3>
              <div className="flex flex-col gap-3 mb-8">
                {service.features.map((f) => (
                  <FeatureItem key={f}>{f}</FeatureItem>
                ))}
              </div>

              {/* CTA Card */}
              <div className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={IAR.gf.image}
                    alt={IAR.gf.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-[var(--radius-sm)] object-cover border-2 border-iar-border"
                  />
                  <div>
                    <div className="text-iar-white font-semibold text-[0.92rem]">{IAR.gf.name}</div>
                    <div className="text-iar-gray-400 text-[0.78rem]">Geschäftsführer</div>
                  </div>
                </div>
                <p className="text-iar-gray-300 text-[0.9rem] mb-4 leading-[1.7]">
                  Haben Sie Fragen zum {service.title}? Ich berate Sie persönlich — rufen Sie mich an oder nutzen Sie unseren Anfrage-Funnel.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button href="/anfrage" variant="primary" className="text-[0.84rem] px-6 py-3">
                    Angebot anfragen
                  </Button>
                  <Button href={IAR.phoneHref} variant="outline" className="text-[0.84rem] px-6 py-3">
                    <PhoneIcon size={14} /> {IAR.phone}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-iar-surface border-t border-b border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ShieldIcon size={20} className="text-iar-accent-glow" />, label: '15+ Jahre', desc: 'Branchenerfahrung' },
              { icon: <LockIcon size={20} className="text-iar-accent-glow" />, label: 'VdS-zertifiziert', desc: 'Höchste Standards' },
              { icon: <CheckCircleIcon size={20} className="text-iar-accent-glow" />, label: '24/7', desc: 'Einsatzbereit' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iar-accent-glow"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: '2 Regionen', desc: 'Saarland & Heilbronn' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                <div className="w-10 h-10 rounded-[var(--radius-xs)] bg-iar-accent-soft flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-iar-white font-semibold text-[0.88rem]">{item.label}</div>
                  <div className="text-iar-gray-500 text-[0.74rem]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel>Weitere Leistungen</SectionLabel>
          <SectionTitle>Das bieten wir außerdem.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-6 hover:border-iar-border-hover hover:-translate-y-1 transition-all group"
              >
                <Image src={s.image} alt={s.title} width={600} height={300} className="w-full h-36 object-cover rounded-[var(--radius-xs)] mb-4" />
                <h3 className="text-[1rem] font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-[0.82rem] text-iar-gray-400 leading-[1.6] mb-3">{s.plain.slice(0, 100)}...</p>
                <span className="text-[0.78rem] text-iar-accent-glow font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRightIcon size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${service.image})` }} />
            <h2 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-3 relative">
              {service.title} für Ihr Unternehmen?
            </h2>
            <p className="text-white/75 max-w-[460px] mx-auto mb-7 relative">
              In 60 Sekunden ein unverbindliches Angebot anfragen — David Rosenfeldt berät Sie persönlich.
            </p>
            <Button href="/anfrage" variant="white" className="relative">
              Jetzt Angebot anfragen <ArrowRightIcon size={15} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
