// src/components/BranchPageTemplate.tsx
import Image from 'next/image'
import { SectionLabel, SectionTitle, SectionSub, Button, FeatureItem, Badge } from '@/components/ui'
import { ShieldIcon, LockIcon, ArrowRightIcon, PhoneIcon, MailIcon, CheckCircleIcon, SearchIcon, AlarmIcon, FileTextIcon } from '@/lib/icons'
import { IAR } from '@/lib/utils'

// Branch-specific data
const BRANCH_DATA: Record<string, {
  title: string; headline: string; heroImage: string; intro: string; quote: string
  painPoints: { num: string; title: string; desc: string }[]
  solutions: { icon: React.ReactNode; title: string; desc: string; features: string[] }[]
}> = {
  banken: {
    title: 'Banken & Finanzinstitute',
    headline: 'Ihr Finanzinstitut.\nSicher geschützt.',
    heroImage: '/images/einsatz.jpg',
    intro: 'Von der Filialsicherheit bis zum Krisenmanagement — wir verstehen die besonderen Herausforderungen im Bankensektor und liefern maßgeschneiderte Lösungen.',
    quote: 'Banken brauchen mehr als einen Wachmann am Eingang. Sie brauchen ein durchdachtes Sicherheitskonzept.',
    painPoints: [
      { num: '01', title: 'Komplexe Anforderungen', desc: 'Vermögen, Mitarbeiter und Kunden gleichzeitig schützen — mit verschiedenen Systemen die zusammenarbeiten.' },
      { num: '02', title: 'Schnelle Reaktion', desc: 'Vom technischen Alarm bis zum Notfall: Jede Minute zählt. Schäden minimieren, Polizei koordinieren.' },
      { num: '03', title: 'Sicherheit ohne Störung', desc: 'Strenge Maßnahmen dürfen weder den Kundenservice noch die Effizienz beeinträchtigen.' },
    ],
    solutions: [
      { icon: <SearchIcon size={18} className="text-iar-accent-glow" />, title: 'Sicherheitsberatung', desc: 'Wir analysieren Schwachstellen und entwickeln ein individuelles Konzept.', features: ['Risikoanalyse & Schwachstellenbewertung', 'Individuelle Sicherheitskonzepte', 'Technologie-Beratung'] },
      { icon: <LockIcon size={18} className="text-[#10B981]" />, title: 'Gebäudesicherheit', desc: 'Physischer Schutz durch geschultes Personal und moderne Technik.', features: ['Überwachungssysteme & Kameras', 'Zugangskontrolle & Einbruchschutz', 'Notfallplanung & Evakuierung'] },
      { icon: <AlarmIcon size={18} className="text-[#EF4444]" />, title: 'Interventionsfahrt', desc: 'Sofortige Reaktion wenn der Alarm auslöst.', features: ['Sofortige Alarmreaktion', 'Geschultes Notfallpersonal', 'Polizei-Koordination'] },
      { icon: <FileTextIcon size={18} className="text-[#F59E0B]" />, title: 'Krisenmanagement', desc: 'Notfallpläne, Schulungen und Krisensimulationen.', features: ['Notfallpläne & Prozesse', 'Personalschulungen', 'Krisensimulationen & Übungen'] },
    ],
  },
  industrie: {
    title: 'Industrie & Produktion',
    headline: 'Ihr Werk.\nProfessionell gesichert.',
    heroImage: '/images/werkschutz.jpg',
    intro: 'Werksgelände, Produktionshallen, Lagerbereiche — wir kennen die Sicherheitsanforderungen der Industrie und liefern Werkschutz, der funktioniert.',
    quote: 'Industriegelände brauchen Sicherheit, die den Betrieb nicht aufhält — sondern ermöglicht.',
    painPoints: [
      { num: '01', title: 'Große Gelände', desc: 'Weitläufige Areale mit vielen Zugängen, Fahrzeugen und Lieferantenverkehr — schwer zu überblicken.' },
      { num: '02', title: 'Gefahrstoffe & Compliance', desc: 'Strenge Vorschriften für Gefahrgut, Brandschutz und Arbeitssicherheit müssen eingehalten werden.' },
      { num: '03', title: 'Schichtbetrieb', desc: '24/7-Produktion erfordert lückenlose Sicherheit rund um die Uhr — ohne den Betrieb zu stören.' },
    ],
    solutions: [
      { icon: <ShieldIcon size={18} className="text-iar-accent-glow" />, title: 'Werkschutz', desc: 'Sicherheitspersonal direkt auf Ihrem Gelände.', features: ['Tor-Management & Schrankensteuerung', 'Regelmäßige Kontrollrundgänge', 'LKW- & Lieferantenabfertigung'] },
      { icon: <LockIcon size={18} className="text-[#10B981]" />, title: 'Zugangskontrolle', desc: 'Wer darf rein, wer nicht — professionell gemanagt.', features: ['Ausweiskontrollen & Besuchermanagement', 'Fahrzeugregistrierung', 'Zugangsprotokollierung'] },
      { icon: <AlarmIcon size={18} className="text-[#EF4444]" />, title: 'Alarmintervention', desc: 'Sofortige Reaktion bei Sicherheitsvorfällen.', features: ['24/7 Einsatzbereitschaft', 'Koordination mit Werkfeuerwehr', 'Notfallprozeduren'] },
      { icon: <SearchIcon size={18} className="text-[#F59E0B]" />, title: 'Sicherheitsberatung', desc: 'Analyse und Optimierung Ihres Sicherheitskonzepts.', features: ['Schwachstellenanalyse', 'Brandschutzkonzepte', 'Compliance-Beratung'] },
    ],
  },
  gewerbe: {
    title: 'Gewerbe & Handel',
    headline: 'Ihr Geschäft.\nRundum geschützt.',
    heroImage: '/images/iar-team.jpg',
    intro: 'Bürogebäude, Einkaufszentren, Einzelhandel — wir schützen Gewerbeimmobilien mit Objektschutz, Revierdienst und professionellem Empfangsdienst.',
    quote: 'Guter Schutz fällt nicht auf — aber sein Fehlen schon. Wir sorgen dafür, dass Sie sich auf Ihr Geschäft konzentrieren können.',
    painPoints: [
      { num: '01', title: 'Hoher Publikumsverkehr', desc: 'Viele Besucher bedeuten viele potenzielle Risiken — vom Diebstahl bis zum Vandalismus.' },
      { num: '02', title: 'Öffnungszeiten & Nachts', desc: 'Tagsüber Empfangsdienst, nachts Objektschutz — unterschiedliche Anforderungen zu verschiedenen Zeiten.' },
      { num: '03', title: 'Image & Kundenerlebnis', desc: 'Sicherheit muss professionell und freundlich sein — sie darf Kunden nicht abschrecken.' },
    ],
    solutions: [
      { icon: <ShieldIcon size={18} className="text-iar-accent-glow" />, title: 'Objektschutz', desc: '24/7 Bewachung Ihrer Gewerbeimmobilie.', features: ['Zugangskontrollen & Videoüberwachung', 'Regelmäßige Rundgänge', 'Alarmaufschaltung nach VdS'] },
      { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title: 'Empfangsdienst', desc: 'Professioneller erster Eindruck für Ihre Besucher.', features: ['Besucherregistrierung', 'Freundlicher Empfang', 'Schlüsselverwaltung'] },
      { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: 'Revierdienst', desc: 'Mobile Kontrollen für mehrere Standorte.', features: ['Unvorhersehbare Patrouillen', 'Nacht- und Wochenenddienst', 'Schnelle Alarmreaktion'] },
      { icon: <SearchIcon size={18} className="text-[#10B981]" />, title: 'Sicherheitsberatung', desc: 'Maßgeschneidertes Konzept für Ihr Gewerbe.', features: ['Risikoanalyse', 'Einbruchschutz-Beratung', 'Technologie-Empfehlungen'] },
    ],
  },
}

export function BranchPageTemplate({ slug }: { slug: string }) {
  const data = BRANCH_DATA[slug]
  if (!data) return null

  return (
    <>
      {/* Hero with Contact Form */}
      <section className="min-h-[85vh] flex items-center pt-[140px] pb-20 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,10,20,0.97)] to-[rgba(6,10,20,0.86)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-iar-dark to-transparent z-[1]" />
        <div className="scan-line" />

        <div className="max-w-[1200px] mx-auto px-7 relative z-[4] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <div className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#F59E0B] mb-4 flex items-center gap-2.5">
              <LockIcon size={15} /> Sicherheit für {data.title}
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-heading font-bold mb-5 whitespace-pre-line">
              {data.headline.split('\n').map((line, i) => (
                <span key={i}>{i === 1 ? <span className="gradient-text">{line}</span> : line}<br /></span>
              ))}
            </h1>
            <p className="text-[1.08rem] text-iar-gray-200 mb-7 max-w-[520px] leading-[1.8]">{data.intro}</p>
            <div className="flex gap-3 flex-wrap">
              <Button href="#kontakt" variant="cta">Beratung anfragen <ArrowRightIcon size={14} strokeWidth={2.5} /></Button>
              <Button href="#loesungen" variant="outline">Unsere Lösungen</Button>
            </div>

            {/* GF Quote */}
            <div className="flex gap-4 items-center glass-card rounded-[var(--radius-md)] p-5 mt-7 max-w-[480px]">
              <Image src={IAR.gf.image} alt={IAR.gf.name} width={52} height={52} className="w-[52px] h-[52px] rounded-[var(--radius-sm)] object-cover border-2 border-iar-border" />
              <div>
                <p className="text-[0.86rem] text-iar-gray-300 leading-[1.6] italic">{data.quote}</p>
                <p className="text-[0.78rem] text-iar-white font-semibold mt-1">{IAR.gf.name}, Geschäftsführer</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="kontakt" className="glass-card rounded-[20px] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.4)] to-transparent" />
            <h3 className="text-[1.15rem] font-heading font-bold mb-1">Beratung anfragen</h3>
            <p className="text-[0.84rem] text-iar-gray-400 mb-6">Wir melden uns innerhalb von 24 Stunden.</p>

            <div className="space-y-3.5">
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Thema</label>
                <select className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow transition-all appearance-none" aria-label="Thema auswählen">
                  <option value="">Bitte wählen</option>
                  {data.solutions.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Allgemeine Beratung</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Vorname</label>
                  <input className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Max" aria-label="Vorname" />
                </div>
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Nachname</label>
                  <input className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Mustermann" aria-label="Nachname" />
                </div>
              </div>
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Firma / Institut</label>
                <input className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Firma GmbH" aria-label="Firma" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="0681 12345678" aria-label="Telefon" />
                </div>
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">E-Mail</label>
                  <input type="email" className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="m.mustermann@firma.de" aria-label="E-Mail" />
                </div>
              </div>
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block">Nachricht (optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all resize-y" placeholder="Was können wir für Sie tun?" aria-label="Nachricht" />
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-iar-dark font-heading font-semibold rounded-[var(--radius-sm)] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
                Beratung anfordern <ShieldIcon size={14} strokeWidth={2.5} />
              </button>
              <p className="text-[0.68rem] text-iar-gray-500 text-center flex items-center justify-center gap-1.5 mt-1">
                <LockIcon size={11} /> SSL-verschlüsselt · <a href="/datenschutz" className="text-iar-gray-500 hover:text-iar-accent-glow">Datenschutz</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>}>
            Die Herausforderungen
          </SectionLabel>
          <SectionTitle>Warum {data.title} besondere Sicherheit brauchen.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {data.painPoints.map((p) => (
              <div key={p.num} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-iar-accent to-[#F59E0B]" />
                <div className="absolute top-4 right-5 font-heading text-[2.6rem] font-extrabold text-white/[0.03]">{p.num}</div>
                <h3 className="text-[1.02rem] font-heading font-bold mb-2.5 relative">{p.title}</h3>
                <p className="text-[0.84rem] text-iar-gray-400 leading-[1.7] relative">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="loesungen" className="py-[100px] bg-iar-surface border-t border-b border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel>Unsere Lösungen</SectionLabel>
          <SectionTitle>Sicherheit für {data.title}.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {data.solutions.map((s) => (
              <div key={s.title} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-7 transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-iar-accent-soft flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="text-[1.05rem] font-heading font-bold mb-2.5">{s.title}</h3>
                <p className="text-[0.84rem] text-iar-gray-400 leading-[1.7] mb-4">{s.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {s.features.map((f) => (
                    <FeatureItem key={f}>{f}</FeatureItem>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <h2 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-heading font-bold mb-3 relative">
              Bereit für professionelle Sicherheit?
            </h2>
            <p className="text-white/75 max-w-[460px] mx-auto mb-7 relative">
              Kontaktieren Sie uns für eine persönliche Beratung — unverbindlich und kostenlos.
            </p>
            <Button href="#kontakt" variant="white" className="relative">
              Beratung anfragen <ArrowRightIcon size={14} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
