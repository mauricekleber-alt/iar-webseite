import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel, SectionTitle, SectionSub, Button, FeatureItem } from '@/components/ui'
import { ShieldIcon, ArrowRightIcon, CheckIcon, BookOpenIcon, MapPinIcon, LayersIcon, UsersIcon, BriefcaseIcon, QuestionIcon, LockIcon } from '@/lib/icons'
import { IAR, JOB_OPENINGS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Karriere bei IAR Sicherheit — Jobs im Sicherheitsdienst',
  description: 'Dein neuer Job in der Sicherheitsbranche. Unbefristete Vertraege, faire Bezahlung, Weiterbildung. Bewirb dich in 90 Sekunden.',
  alternates: { canonical: 'https://iar-sicherheit.de/karriere' },
}

const BENEFITS = [
  { icon: <LayersIcon size={20} className="text-[#F59E0B]" />, bg: 'rgba(245,158,11,0.08)', title: 'Faire Bezahlung', desc: 'Uebertarifliche Verguetung plus Nacht-, Wochenend- und Feiertagszuschlaege.' },
  { icon: <CheckIcon size={20} className="text-[#10B981]" strokeWidth={2.5} />, bg: 'rgba(16,185,129,0.08)', title: 'Unbefristeter Vertrag', desc: 'Keine befristeten Vertraege, keine Zeitarbeit. Sicherheit fuer dich.' },
  { icon: <BookOpenIcon size={20} className="text-iar-accent-glow" />, bg: 'rgba(37,99,235,0.08)', title: 'Weiterbildung', desc: '34a-Sachkunde, Erste-Hilfe, Brandschutz — wir zahlen alles. Auch Quereinsteiger.' },
  { icon: <MapPinIcon size={20} className="text-[#8B5CF6]" />, bg: 'rgba(139,92,246,0.08)', title: 'Regionale Einsaetze', desc: 'Du arbeitest in deiner Region. Keine langen Anfahrtswege.' },
  { icon: <UsersIcon size={20} className="text-[#EF4444]" />, bg: 'rgba(239,68,68,0.08)', title: 'Familiaeres Team', desc: 'Flache Hierarchien, direkter Draht zum Chef.' },
  { icon: <ShieldIcon size={20} className="text-[#06B6D4]" />, bg: 'rgba(6,182,212,0.08)', title: 'Moderne Ausruestung', desc: 'Professionelle Arbeitskleidung, aktuelle Technik, gepflegte Fahrzeuge.' },
]

const GALLERY = [
  { src: IAR.images.team, caption: 'Team-Briefing' },
  { src: IAR.images.werkschutz, caption: 'Werkschutz' },
  { src: IAR.images.revierdienst, caption: 'Revierdienst' },
  { src: IAR.images.einsatz, caption: 'Nachtrundgang' },
]

const FAQS = [
  { q: 'Brauche ich eine 34a-Sachkundepruefung?', a: 'Nicht unbedingt. Wir unterstuetzen dich bei der Weiterbildung — Kosten uebernehmen wir.' },
  { q: 'Wo werde ich eingesetzt?', a: 'Im Saarland oder Raum Heilbronn. Wir versuchen Einsatzorte nah an deinem Wohnort.' },
  { q: 'Wie schnell bekomme ich Rueckmeldung?', a: 'Innerhalb von 48 Stunden. Meistens noch am selben Tag.' },
  { q: 'Kann ich als Quereinsteiger anfangen?', a: 'Ja! Wir bilden dich ein und uebernehmen alle Schulungskosten.' },
  { q: 'Wie sieht es mit Schichtarbeit aus?', a: 'Die meisten Stellen beinhalten Schichtarbeit mit Zuschlaegen. Individuelle Einschraenkungen besprechen wir.' },
]

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center pt-[140px] pb-20 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${IAR.images.karriere})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,10,20,0.96)] to-[rgba(6,10,20,0.82)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-iar-dark to-transparent z-[1]" />
        <div className="scan-line" style={{ background: 'linear-gradient(90deg,transparent,#F59E0B,transparent)' }} />

        <div className="max-w-[1200px] mx-auto px-7 relative z-[4] max-w-[680px]">
          <div className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#F59E0B] mb-5 flex items-center gap-2.5">
            <ShieldIcon size={15} /> Karriere bei IAR Sicherheit
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-bold mb-5">
            Dein neuer Job<br />in der <span className="text-[#F59E0B]">Sicherheit.</span>
          </h1>
          <p className="text-[1.1rem] text-iar-gray-200 mb-7 max-w-[540px]">
            Kein Anschreiben. Keine komplizierten Formulare. Bewirb dich in 90 Sekunden und wir melden uns innerhalb von 48 Stunden.
          </p>

          <div className="flex gap-2.5 flex-wrap mb-8">
            {['Unbefristeter Vertrag', 'Faire Bezahlung', 'Weiterbildung', 'Saarland & Heilbronn'].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 px-4 py-[7px] rounded-full text-[0.78rem] font-semibold bg-[rgba(245,158,11,0.08)] text-[#F59E0B] border border-[rgba(245,158,11,0.15)]">
                <CheckIcon size={12} strokeWidth={2.5} /> {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3.5 flex-wrap">
            <Button href="/karriere/bewerben" variant="cta">In 90 Sek. bewerben <ArrowRightIcon size={15} strokeWidth={2.5} /></Button>
            <Button href="#stellen" variant="outline">Offene Stellen</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel>Warum IAR?</SectionLabel>
          <SectionTitle>Was wir dir bieten.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-7 transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center mb-4" style={{ background: b.bg }}>
                  {b.icon}
                </div>
                <h3 className="text-[1.05rem] font-heading font-bold mb-2">{b.title}</h3>
                <p className="text-[0.86rem] text-iar-gray-400 leading-[1.7]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[100px] bg-iar-surface border-t border-b border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}>Einblicke</SectionLabel>
          <SectionTitle>So sieht dein Arbeitsalltag aus.</SectionTitle>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {GALLERY.map((img) => (
              <div key={img.caption} className="rounded-[var(--radius-md)] overflow-hidden border border-iar-border h-[220px] relative">
                <Image src={img.src} alt={img.caption} width={400} height={300} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[rgba(6,10,20,0.9)] to-transparent">
                  <span className="text-[0.78rem] text-iar-gray-200 font-medium">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offene Stellen */}
      <section id="stellen" className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<BriefcaseIcon size={14} />}>Offene Stellen</SectionLabel>
          <SectionTitle>Aktuell suchen wir:</SectionTitle>

          <div className="flex flex-col gap-3.5 mt-12 max-w-[800px]">
            {JOB_OPENINGS.map((job, i) => (
              <Link key={i} href="/karriere/bewerben" className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-[22px_26px] grid grid-cols-[1fr_auto] gap-5 items-center transition-all duration-300 hover:border-iar-accent-border hover:bg-iar-accent-soft cursor-pointer">
                <div>
                  <div className="text-[1.02rem] text-iar-white font-bold font-heading">{job.title}</div>
                  <div className="flex gap-3.5 mt-1.5 text-[0.82rem] text-iar-gray-400">
                    <span>{job.location}</span><span>{job.type}</span><span>{job.contract}</span>
                  </div>
                </div>
                <span className={`px-3.5 py-1.5 rounded-[var(--radius-xs)] text-[0.72rem] font-semibold border ${job.badge === 'Neu' ? 'bg-[rgba(245,158,11,0.08)] text-[#F59E0B] border-[rgba(245,158,11,0.15)]' : 'bg-[rgba(16,185,129,0.08)] text-[#10B981] border-[rgba(16,185,129,0.15)]'}`}>
                  {job.badge}
                </span>
              </Link>
            ))}

            {/* Initiativbewerbung */}
            <Link href="/karriere/bewerben" className="bg-iar-card border border-iar-border border-dashed rounded-[var(--radius-md)] p-[22px_26px] grid grid-cols-[1fr_auto] gap-5 items-center transition-all duration-300 hover:border-iar-accent-border hover:bg-iar-accent-soft cursor-pointer">
              <div>
                <div className="text-[1.02rem] text-iar-white font-bold font-heading">Initiativbewerbung</div>
                <div className="text-[0.82rem] text-iar-gray-400 mt-1.5">Saarland oder Heilbronn — Kein passender Job? Bewirb dich trotzdem!</div>
              </div>
              <span className="text-iar-accent-glow font-semibold">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[100px] bg-iar-surface border-t border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<QuestionIcon size={14} />}>Haeufige Fragen</SectionLabel>
          <SectionTitle>Noch Fragen?</SectionTitle>

          <div className="max-w-[700px] mt-10">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border-b border-iar-border group">
                <summary className="py-5 text-[1rem] font-semibold text-iar-white cursor-pointer list-none flex justify-between items-center select-none">
                  {faq.q}
                  <span className="text-iar-accent-glow text-[1.3rem] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-[0.88rem] text-iar-gray-300 leading-[1.8]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${IAR.images.karriere})` }} />
            <h2 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-3 relative">
              Bereit fuer deinen neuen Job?
            </h2>
            <p className="text-white/75 max-w-[460px] mx-auto mb-7 relative">
              In 90 Sekunden bewerben — kein Anschreiben noetig.
            </p>
            <Button href="/karriere/bewerben" variant="white" className="relative">
              Jetzt bewerben <ArrowRightIcon size={14} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
