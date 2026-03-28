import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionLabel, Button } from '@/components/ui'
import { PhoneIcon, MailIcon, MapPinIcon, ShieldIcon, LockIcon } from '@/lib/icons'
import { IAR } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie IAR Sicherheit GmbH. David Rosenfeldt beraet Sie persoenlich. Telefon: (06824) 302528.',
  alternates: { canonical: 'https://iar-sicherheit.de/kontakt' },
}

export default function KontaktPage() {
  return (
    <>
      <section className="pt-[160px] pb-10 text-center relative">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel className="justify-center" icon={<PhoneIcon size={14} />}>Kontakt</SectionLabel>
          <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-heading font-bold mb-4">
            Sprechen Sie <span className="gradient-text">mit uns.</span>
          </h1>
          <p className="text-iar-gray-300 text-[1rem] max-w-[520px] mx-auto leading-[1.8]">
            Ob Frage, Beratungswunsch oder konkretes Anliegen — wir sind fuer Sie da. David Rosenfeldt beraet Sie persoenlich.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-7 pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {[
              { icon: <PhoneIcon size={20} className="text-iar-accent-glow" />, bg: 'rgba(37,99,235,0.08)', title: 'Telefon', sub: 'Mo–Fr, 8:00–18:00 Uhr', link: IAR.phoneHref, linkText: IAR.phone },
              { icon: <MailIcon size={20} className="text-[#F59E0B]" />, bg: 'rgba(245,158,11,0.08)', title: 'E-Mail', sub: 'Antwort innerhalb von 24h', link: IAR.emailHref, linkText: IAR.email },
              { icon: <MapPinIcon size={20} className="text-[#10B981]" />, bg: 'rgba(16,185,129,0.08)', title: 'Standort Saarland', sub: `${IAR.address.street}, ${IAR.address.zip} ${IAR.address.city}`, link: undefined, linkText: undefined },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, bg: 'rgba(139,92,246,0.08)', title: '24/7 Notfall', sub: 'Fuer bestehende Kunden', link: IAR.phoneHref, linkText: IAR.phone },
            ].map((card) => (
              <div key={card.title} className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-6 flex gap-4 items-start transition-all hover:border-[rgba(255,255,255,0.12)]">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0" style={{ background: card.bg }}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-heading font-bold mb-1">{card.title}</h3>
                  <p className="text-[0.86rem] text-iar-gray-400 leading-[1.6]">{card.sub}</p>
                  {card.link && <a href={card.link} className="text-iar-accent-glow font-semibold text-[0.88rem]">{card.linkText}</a>}
                </div>
              </div>
            ))}

            {/* GF Card */}
            <div className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-6 flex gap-4 items-center mt-2">
              <Image src={IAR.gf.image} alt={IAR.gf.name} width={56} height={56} className="w-14 h-14 rounded-[var(--radius-sm)] object-cover border-2 border-iar-border" />
              <div>
                <div className="text-iar-white font-bold text-[0.95rem] font-heading">{IAR.gf.name}</div>
                <div className="text-[#F59E0B] text-[0.78rem] font-semibold">Geschaeftsfuehrer</div>
                <a href={IAR.phoneHref} className="text-iar-accent-glow font-semibold text-[0.84rem]">{IAR.phone}</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-[20px] p-9 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.4)] to-transparent" />
            <h2 className="text-[1.3rem] font-heading font-bold mb-1">Nachricht senden</h2>
            <p className="text-[0.86rem] text-iar-gray-400 mb-7">
              Oder nutzen Sie unseren <a href="/anfrage" className="text-iar-accent-glow font-semibold">Schnell-Anfrage Funnel</a> fuer ein Angebot.
            </p>

            <form className="space-y-4" action="#" method="POST">
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="vorname">Vorname *</label>
                  <input id="vorname" name="vorname" required className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Max" />
                </div>
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="nachname">Nachname *</label>
                  <input id="nachname" name="nachname" required className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Mustermann" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="firma">Firma</label>
                  <input id="firma" name="firma" className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="Muster GmbH" />
                </div>
                <div>
                  <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="telefon">Telefon</label>
                  <input id="telefon" name="telefon" type="tel" className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="0681 12345678" />
                </div>
              </div>
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="email">E-Mail *</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" placeholder="max@firma.de" />
              </div>
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="betreff">Betreff</label>
                <select id="betreff" name="betreff" className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow transition-all appearance-none">
                  <option value="">Bitte waehlen</option>
                  <option>Angebot anfragen</option>
                  <option>Beratung gewuenscht</option>
                  <option>Karriere / Bewerbung</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="text-[0.74rem] font-semibold text-iar-gray-400 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="nachricht">Nachricht *</label>
                <textarea id="nachricht" name="nachricht" required rows={5} className="w-full px-4 py-3 bg-iar-surface border-[1.5px] border-iar-border rounded-[var(--radius-xs)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all resize-y" placeholder="Wie koennen wir Ihnen helfen?" />
              </div>

              {/* DSGVO Consent */}
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 rounded border-iar-border bg-iar-card accent-iar-accent" />
                <label htmlFor="consent" className="text-[0.78rem] text-iar-gray-400 leading-[1.5]">
                  Ich habe die <a href="/datenschutz" className="text-iar-accent-glow hover:underline">Datenschutzerklaerung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                </label>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-iar-dark font-heading font-semibold rounded-[var(--radius-sm)] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
                Nachricht senden
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>

              <p className="text-[0.7rem] text-iar-gray-500 text-center flex items-center justify-center gap-1.5">
                <LockIcon size={11} /> SSL-verschluesselt · <a href="/datenschutz" className="text-iar-gray-500 hover:text-iar-accent-glow">Datenschutz</a>
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-[var(--radius-md)] overflow-hidden border border-iar-border h-[300px] bg-iar-card flex items-center justify-center text-iar-gray-500 text-[0.9rem]" role="img" aria-label="Standort IAR Sicherheit GmbH auf Google Maps">
          <MapPinIcon size={24} className="mr-2" />
          Google Maps — Schlosshof 2, 66564 Ottweiler
        </div>
      </div>
    </>
  )
}
