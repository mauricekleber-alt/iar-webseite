import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionLabel, SectionTitle, SectionSub, Button, TrustCard } from '@/components/ui'
import { ShieldIcon, LockIcon, ArrowRightIcon, PhoneIcon, MailIcon, CheckCircleIcon, LightningIcon, MapPinIcon, BookOpenIcon, UserIcon, BarChartIcon } from '@/lib/icons'
import { IAR, TRUST_NUMBERS } from '@/lib/utils'
import { LogoTicker } from '@/components/LogoTicker'

export const metadata: Metadata = {
  title: 'Ueber IAR Sicherheit GmbH — Ihr Sicherheitspartner',
  description: 'Lernen Sie IAR Sicherheit GmbH kennen. Geschaeftsfuehrer David Rosenfeldt, ueber 15 Jahre Erfahrung, Mitglied BVWSW und BDSW.',
  alternates: { canonical: 'https://iar-sicherheit.de/ueber-uns' },
}

const WERTE = [
  { icon: <ShieldIcon size={20} className="text-iar-accent-glow" />, bg: 'rgba(37,99,235,0.08)', title: 'Integritaet', desc: 'Transparent gegenueber Kunden und Mitarbeitern. Vertrauen ist das Fundament jeder Sicherheitspartnerschaft.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, bg: 'rgba(245,158,11,0.08)', title: 'Kundenfokus', desc: 'Jeder Kunde ist einzigartig. Wir hoeren zu und kreieren massgeschneiderte Loesungen.' },
  { icon: <LightningIcon size={20} className="text-[#10B981]" />, bg: 'rgba(16,185,129,0.08)', title: 'Innovation', desc: 'Neueste Technologien und Methoden integriert. Wir bleiben an der Spitze der Branche.' },
  { icon: <BookOpenIcon size={20} className="text-[#8B5CF6]" />, bg: 'rgba(139,92,246,0.08)', title: 'Mitarbeiterentwicklung', desc: 'Unser Team ist unser wertvollstes Gut. Kontinuierliche Aus- und Weiterbildung.' },
  { icon: <MapPinIcon size={20} className="text-[#06B6D4]" />, bg: 'rgba(6,182,212,0.08)', title: 'Regionale Verantwortung', desc: 'In Saarland und Heilbronn verwurzelt. Engagement in regionalen Projekten.' },
  { icon: <LockIcon size={20} className="text-[#EF4444]" />, bg: 'rgba(239,68,68,0.08)', title: 'Zuverlaessigkeit', desc: 'Konstante Leistung, auf die Sie sich verlassen koennen. 24/7, 365 Tage im Jahr.' },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[160px] pb-20 relative overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-7 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Ueber uns</SectionLabel>
              <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-heading font-bold mb-4">
                Mehr als ein<br /><span className="gradient-text">Sicherheitsdienst.</span>
              </h1>
              <SectionSub className="max-w-full">
                IAR Sicherheit GmbH steht fuer Vertrauen, Professionalitaet und massgeschneiderte Sicherheitsloesungen. Seit ueber 15 Jahren schuetzen wir Unternehmen in Saarland und Heilbronn.
              </SectionSub>
              <div className="flex gap-3.5 mt-7 flex-wrap">
                <Button href="/anfrage" variant="cta">Angebot anfragen <ArrowRightIcon size={14} strokeWidth={2.5} /></Button>
                <Button href="/leistungen" variant="outline">Leistungen ansehen</Button>
              </div>
            </div>
            <div className="rounded-[var(--radius-md)] overflow-hidden border border-iar-border relative">
              <Image src={IAR.images.team} alt="IAR Sicherheit Team" width={800} height={600} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-iar-dark to-transparent pointer-events-none" style={{ height: '30%', bottom: 0, top: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Geschaeftsfuehrer */}
      <section className="py-[100px] bg-iar-surface border-t border-b border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-14 items-center">
            <div className="relative">
              <Image src={IAR.gf.image} alt={IAR.gf.name} width={600} height={800} className="w-full rounded-[var(--radius-md)] border border-iar-border" />
              <div className="absolute bottom-[-16px] right-6 bg-iar-accent text-white px-5 py-2.5 rounded-[var(--radius-sm)] font-heading font-bold text-[0.8rem] flex items-center gap-1.5 shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                <ShieldIcon size={14} strokeWidth={2.5} /> Gruender &amp; GF
              </div>
            </div>
            <div>
              <SectionLabel icon={<UserIcon size={14} />}>Der Geschaeftsfuehrer</SectionLabel>
              <SectionTitle>{IAR.gf.name}</SectionTitle>
              <p className="text-[#F59E0B] font-semibold text-[0.9rem] mb-4">{IAR.gf.title}</p>
              <SectionSub className="max-w-full">
                Mit einer beeindruckenden Karriere in der Sicherheitsbranche, die sich ueber mehrere Jahrzehnte erstreckt, bringt David Rosenfeldt tiefgreifendes Wissen und Erfahrung ein. Unter seiner Leitung hat sich IAR Sicherheit zu einem fuehrenden Anbieter entwickelt.
              </SectionSub>

              {/* Quote */}
              <div className="mt-6 p-5 pl-6 bg-iar-card rounded-[var(--radius-sm)] border-l-[3px] border-[#F59E0B] text-[0.94rem] text-iar-gray-300 italic leading-[1.8]">
                Sicherheit ist fuer mich mehr als ein Beruf — es ist die Verantwortung, Menschen und Unternehmen zu schuetzen, damit sie sich auf das konzentrieren koennen, was wirklich zaehlt.
              </div>

              <div className="flex gap-4 mt-7 flex-wrap">
                <div className="flex items-center gap-2.5 px-[18px] py-3 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                  <PhoneIcon size={18} className="text-iar-accent-glow" />
                  <a href={IAR.phoneHref} className="text-iar-white font-semibold text-[0.86rem]">{IAR.phone}</a>
                </div>
                <div className="flex items-center gap-2.5 px-[18px] py-3 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                  <MailIcon size={18} className="text-iar-accent-glow" />
                  <a href={IAR.emailHref} className="text-iar-white font-semibold text-[0.86rem]">{IAR.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<CheckCircleIcon size={14} />}>Unsere Werte</SectionLabel>
          <SectionTitle>Was uns antreibt.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {WERTE.map((w) => (
              <div key={w.title} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-7 transition-all duration-300 relative overflow-hidden gradient-top-bar hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center mb-4" style={{ background: w.bg }}>
                  {w.icon}
                </div>
                <h3 className="text-[1.02rem] font-heading font-bold mb-2">{w.title}</h3>
                <p className="text-[0.84rem] text-iar-gray-400 leading-[1.7]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <section className="py-[100px] bg-iar-surface border-t border-b border-iar-border relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.02] pointer-events-none">
          <ShieldIcon size={300} strokeWidth={0.5} className="text-iar-accent-glow" />
        </div>
        <div className="max-w-[1200px] mx-auto px-7 text-center">
          <SectionLabel className="justify-center" icon={<BarChartIcon size={14} />}>In Zahlen</SectionLabel>
          <SectionTitle className="mx-auto">IAR Sicherheit auf einen Blick.</SectionTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {TRUST_NUMBERS.map((t) => (
              <TrustCard key={t.label} value={t.value} label={t.label} description={t.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Mitgliedschaften with Ticker */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7 mb-8">
          <SectionLabel icon={<CheckCircleIcon size={14} />}>Mitgliedschaften &amp; Zertifizierungen</SectionLabel>
          <SectionTitle>Geprueft und anerkannt.</SectionTitle>
          <SectionSub>Unsere Mitgliedschaften belegen unser Engagement fuer hoechste Qualitaetsstandards.</SectionSub>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto px-7 mb-12">
          {[
            { src: IAR.logos.bvwsw, alt: 'BVWSW', title: 'BVWSW Gruendungsmitglied', desc: 'Bundesverband fuer Werkschutz und Sicherheitswirtschaft.' },
            { src: IAR.logos.verband, alt: 'Sicherheitsverband', title: 'Sicherheitsverband', desc: 'Aktives Mitglied fuer Austausch und Weiterentwicklung.' },
            { src: IAR.logos.bdsw, alt: 'BDSW', title: 'BDSW Mitglied', desc: 'Bundesverband der Sicherheitswirtschaft.' },
          ].map((m) => (
            <div key={m.title} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-8 text-center flex flex-col items-center gap-4">
              <Image src={m.src} alt={m.alt} width={160} height={80} className="h-[50px] w-auto brightness-[2] opacity-60" />
              <h4 className="text-[0.92rem] font-heading font-bold">{m.title}</h4>
              <p className="text-[0.82rem] text-iar-gray-400 leading-[1.6]">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Logo Ticker */}
        <div className="bg-iar-surface">
          <LogoTicker />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${IAR.images.einsatz})` }} />
            <h2 className="text-white text-[1.6rem] font-heading font-bold mb-3 relative">
              Bereit fuer professionelle Sicherheit?
            </h2>
            <p className="text-white/75 max-w-[460px] mx-auto mb-7 relative">
              David Rosenfeldt beraet Sie persoenlich — unverbindlich und kostenlos.
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
