'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IAR } from '@/lib/utils'
import { ShieldIcon, LockIcon, ArrowRightIcon, CheckCircleIcon, BuildingIcon, HomeIcon, AlertCircleIcon } from '@/lib/icons'

type FunnelData = {
  branche: string
  leistungen: string[]
  region: string
  standorte: string
  timing: string
  vorname: string
  nachname: string
  firma: string
  telefon: string
  email: string
  kontaktweg: string
  nachricht: string
}

const BRANCHEN = [
  { value: 'industrie', label: 'Industrie & Produktion', desc: 'Werke, Fabriken, Produktionsgelände', icon: <BuildingIcon size={18} className="text-iar-accent-glow" /> },
  { value: 'bank', label: 'Bank & Finanzinstitut', desc: 'Filialen, Hauptsitze, Rechenzentren', icon: <LockIcon size={18} className="text-iar-accent-glow" /> },
  { value: 'gewerbe', label: 'Gewerbe & Einzelhandel', desc: 'Bürogebäude, Geschäfte', icon: <HomeIcon size={18} className="text-iar-accent-glow" /> },
  { value: 'oeffentlich', label: 'Öffentliche Einrichtung', desc: 'Behörden, Schulen, Krankenhäuser', icon: <ShieldIcon size={18} className="text-iar-accent-glow" /> },
  { value: 'sonstige', label: 'Sonstige / Andere', desc: 'Veranstaltungen, Baustellen, Privat', icon: <AlertCircleIcon size={18} className="text-iar-accent-glow" /> },
]

const LEISTUNGEN = [
  { value: 'objektschutz', label: 'Objektschutz', desc: '24/7 Gebäudebewachung' },
  { value: 'werkschutz', label: 'Werkschutz', desc: 'Personal auf Ihrem Gelände' },
  { value: 'revierdienst', label: 'Revierdienst', desc: 'Mobile Patrouillen' },
  { value: 'alarm', label: 'Alarmintervention', desc: 'Sofort-Reaktion' },
  { value: 'empfang', label: 'Empfangsdienst', desc: 'Pfortendienst' },
  { value: 'beratung', label: 'Bin unsicher', desc: 'Beratung gewünscht' },
]

export default function AnfragePage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FunnelData>({
    branche: '', leistungen: [], region: '', standorte: '', timing: '',
    vorname: '', nachname: '', firma: '', telefon: '', email: '', kontaktweg: 'anruf', nachricht: '',
  })

  const progress = step * 25

  const selectBranche = (value: string) => setData({ ...data, branche: value })

  const toggleLeistung = (value: string) => {
    const current = data.leistungen
    setData({
      ...data,
      leistungen: current.includes(value)
        ? current.filter((l) => l !== value)
        : [...current, value],
    })
  }

  const goTo = (s: number) => {
    setStep(s)
    window.scrollTo(0, 0)
  }

  const submit = () => {
    if (!data.vorname || !data.nachname || !data.telefon || !data.email) {
      alert('Bitte alle Pflichtfelder ausfüllen.')
      return
    }
    // TODO: API call to save lead
    console.log('Funnel submission:', data)
    goTo(5)
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="security-grid" />

      {/* Top Bar */}
      <div className="relative z-10 px-8 py-5 flex items-center justify-between border-b border-iar-border">
        <Link href="/">
          <Image src={IAR.logo} alt="IAR Sicherheit" width={160} height={65} className="h-9 w-auto" />
        </Link>
        <Link href="/" className="flex items-center gap-1.5 text-iar-gray-400 text-[0.84rem] hover:text-iar-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Zurück zur Website
        </Link>
      </div>

      {/* Progress */}
      <div className="h-[3px] bg-iar-surface relative">
        <div
          className="h-full bg-gradient-to-r from-iar-accent to-iar-cta rounded-r-sm transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Steps */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 relative z-[2]">
        <div className="max-w-[640px] w-full">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-up visible">
              <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-iar-accent-glow mb-3 flex items-center gap-1.5">
                <ShieldIcon size={13} /> Schritt 1 von 4
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] mb-2 font-heading font-bold text-iar-white">
                In welcher Branche sind Sie tätig?
              </h2>
              <p className="text-iar-gray-300 mb-8">Damit wir den richtigen Ansprechpartner bereitstellen.</p>

              <div className="flex flex-col gap-3">
                {BRANCHEN.map((b) => (
                  <button
                    key={b.value}
                    onClick={() => selectBranche(b.value)}
                    className={`flex items-center gap-3.5 px-5 py-[18px] rounded-[var(--radius-md)] border-[1.5px] transition-all duration-200 text-left relative ${
                      data.branche === b.value
                        ? 'border-iar-accent-glow bg-iar-accent-soft shadow-[0_0_0_1px_var(--color-iar-accent-glow)]'
                        : 'border-iar-border bg-iar-card hover:border-iar-accent-border hover:bg-iar-accent-soft'
                    }`}
                  >
                    <div className="w-[42px] h-[42px] rounded-[var(--radius-sm)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <div className="text-[0.92rem] text-iar-white font-semibold">{b.label}</div>
                      <div className="text-[0.78rem] text-iar-gray-400">{b.desc}</div>
                    </div>
                    <div className={`absolute top-3 right-3 w-[22px] h-[22px] rounded-[6px] border-[1.5px] flex items-center justify-center text-[0.7rem] transition-all ${
                      data.branche === b.value
                        ? 'border-iar-accent-glow bg-iar-accent text-white'
                        : 'border-iar-border text-transparent'
                    }`}>
                      ✓
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <button
                  disabled={!data.branche}
                  onClick={() => goTo(2)}
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  Weiter <ArrowRightIcon size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-up visible">
              <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-iar-accent-glow mb-3 flex items-center gap-1.5">
                <LockIcon size={13} /> Schritt 2 von 4
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] mb-2 font-heading font-bold text-iar-white">
                Welche Sicherheitsleistungen brauchen Sie?
              </h2>
              <p className="text-iar-gray-300 mb-8">Mehrfachauswahl möglich.</p>

              <div className="grid grid-cols-2 gap-3">
                {LEISTUNGEN.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => toggleLeistung(l.value)}
                    className={`flex items-center gap-3 px-5 py-[18px] rounded-[var(--radius-md)] border-[1.5px] transition-all text-left relative ${
                      data.leistungen.includes(l.value)
                        ? 'border-iar-accent-glow bg-iar-accent-soft shadow-[0_0_0_1px_var(--color-iar-accent-glow)]'
                        : 'border-iar-border bg-iar-card hover:border-iar-accent-border hover:bg-iar-accent-soft'
                    }`}
                  >
                    <div>
                      <div className="text-[0.92rem] text-iar-white font-semibold">{l.label}</div>
                      <div className="text-[0.78rem] text-iar-gray-400">{l.desc}</div>
                    </div>
                    <div className={`absolute top-3 right-3 w-[22px] h-[22px] rounded-[6px] border-[1.5px] flex items-center justify-center text-[0.7rem] transition-all ${
                      data.leistungen.includes(l.value)
                        ? 'border-iar-accent-glow bg-iar-accent text-white'
                        : 'border-iar-border text-transparent'
                    }`}>
                      ✓
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => goTo(1)} className="px-7 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-transparent text-iar-gray-400 border-[1.5px] border-iar-border hover:border-iar-gray-400 hover:text-iar-white transition-all">
                  Zurück
                </button>
                <button
                  disabled={data.leistungen.length === 0}
                  onClick={() => goTo(3)}
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  Weiter <ArrowRightIcon size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - Details */}
          {step === 3 && (
            <div className="animate-up visible">
              <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-iar-accent-glow mb-3 flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                Schritt 3 von 4
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] mb-2 font-heading font-bold text-iar-white">
                Ein paar Details zu Ihrem Bedarf.
              </h2>
              <p className="text-iar-gray-300 mb-8">Damit wir direkt ein passendes Angebot erstellen können.</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Region / Standort</label>
                  <select value={data.region} onChange={(e) => setData({ ...data, region: e.target.value })} className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow transition-all appearance-none">
                    <option value="">Bitte wählen</option>
                    <option>Raum Saarbrücken</option>
                    <option>Raum Neunkirchen / Ottweiler</option>
                    <option>Raum Homburg / St. Ingbert</option>
                    <option>Raum Saarlouis / Merzig</option>
                    <option>Raum Wadern / St. Wendel</option>
                    <option>Raum Heilbronn / Neckarsulm</option>
                    <option>Andere Region</option>
                  </select>
                </div>
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Anzahl Standorte</label>
                  <select value={data.standorte} onChange={(e) => setData({ ...data, standorte: e.target.value })} className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow transition-all appearance-none">
                    <option value="">Bitte wählen</option>
                    <option>1 Standort</option>
                    <option>2–3 Standorte</option>
                    <option>4–10 Standorte</option>
                    <option>Mehr als 10</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Wann soll es losgehen?</label>
                  <div className="flex gap-2.5 flex-wrap">
                    {['Sofort / Dringend', 'In 1–3 Monaten', 'Nur informieren'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, timing: t })}
                        className={`px-6 py-3 rounded-full text-[0.88rem] font-medium border-[1.5px] transition-all ${
                          data.timing === t
                            ? 'border-iar-accent-glow bg-iar-accent-soft text-iar-white'
                            : 'border-iar-border bg-iar-card text-iar-gray-300 hover:border-iar-accent-border'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => goTo(2)} className="px-7 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-transparent text-iar-gray-400 border-[1.5px] border-iar-border hover:text-iar-white transition-all">Zurück</button>
                <button onClick={() => goTo(4)} className="inline-flex items-center gap-2 px-9 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all">
                  Weiter <ArrowRightIcon size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 - Kontakt */}
          {step === 4 && (
            <div className="animate-up visible">
              <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-iar-accent-glow mb-3 flex items-center gap-1.5">
                <CheckCircleIcon size={13} /> Schritt 4 von 4 — Fast geschafft!
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] mb-2 font-heading font-bold text-iar-white">
                Wie können wir Sie erreichen?
              </h2>
              <p className="text-iar-gray-300 mb-8">Wir melden uns innerhalb von 24 Stunden — garantiert.</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Vorname *</label>
                  <input type="text" value={data.vorname} onChange={(e) => setData({ ...data, vorname: e.target.value })} placeholder="Max" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                </div>
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Nachname *</label>
                  <input type="text" value={data.nachname} onChange={(e) => setData({ ...data, nachname: e.target.value })} placeholder="Mustermann" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                </div>
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Firma</label>
                  <input type="text" value={data.firma} onChange={(e) => setData({ ...data, firma: e.target.value })} placeholder="Muster GmbH" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                </div>
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Telefon *</label>
                  <input type="tel" value={data.telefon} onChange={(e) => setData({ ...data, telefon: e.target.value })} placeholder="0681 12345678" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                </div>
                <div className="col-span-2">
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">E-Mail *</label>
                  <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="max@firma.de" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                </div>
                <div className="col-span-2">
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block">Nachricht (optional)</label>
                  <textarea value={data.nachricht} onChange={(e) => setData({ ...data, nachricht: e.target.value })} placeholder="Gibt es etwas, das wir wissen sollten?" rows={3} className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all resize-y" />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => goTo(3)} className="px-7 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-transparent text-iar-gray-400 border-[1.5px] border-iar-border hover:text-iar-white transition-all">Zurück</button>
                <button onClick={submit} className="inline-flex items-center gap-2 px-9 py-[18px] rounded-[var(--radius-md)] font-heading font-semibold text-[1.05rem] bg-iar-cta text-iar-dark shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:bg-iar-cta-hover hover:-translate-y-0.5 transition-all">
                  Angebot anfragen <ShieldIcon size={16} strokeWidth={2.5} />
                </button>
              </div>
              <p className="text-[0.72rem] text-iar-gray-500 mt-4 flex items-center gap-1.5">
                <LockIcon size={12} /> SSL-verschlüsselt. <a href="/datenschutz" className="text-iar-accent-glow">Datenschutz</a>
              </p>
            </div>
          )}

          {/* STEP 5 - Success */}
          {step === 5 && (
            <div className="animate-up visible text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center mx-auto mb-6 border-2 border-[rgba(16,185,129,0.2)]">
                <CheckCircleIcon size={32} className="text-iar-success" />
              </div>
              <h2 className="text-[1.8rem] font-heading font-bold text-iar-white mb-3">Anfrage erhalten!</h2>
              <p className="text-iar-gray-300 max-w-[440px] mx-auto">
                Vielen Dank. Wir melden uns innerhalb von <strong className="text-iar-white">24 Stunden</strong> mit einem individuellen Angebot.
              </p>

              <div className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-6 mt-8 text-left max-w-[440px] mx-auto">
                {[
                  { label: 'Name', value: `${data.vorname} ${data.nachname}` },
                  data.firma && { label: 'Firma', value: data.firma },
                  { label: 'Branche', value: data.branche },
                  { label: 'Leistungen', value: data.leistungen.join(', ') },
                  { label: 'Kontakt', value: data.telefon },
                ].filter(Boolean).map((row, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-iar-border last:border-none text-[0.88rem]">
                    <span className="text-iar-gray-400">{row!.label}</span>
                    <span className="text-iar-white font-semibold">{row!.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 p-5 bg-iar-accent-soft border border-iar-accent-border rounded-[var(--radius-sm)] text-center max-w-[440px] mx-auto">
                <p className="text-[0.84rem] text-iar-gray-300 mb-2">Sie möchten nicht warten?</p>
                <a href={IAR.phoneHref} className="text-iar-accent-glow font-bold text-[1.1rem]">{IAR.phone}</a>
                <p className="text-[0.78rem] text-iar-gray-400 mt-1">David Rosenfeldt, Geschäftsführer</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="px-8 py-4 border-t border-iar-border flex justify-center gap-7 items-center relative z-10">
        <Image src={IAR.logos.bvwsw} alt="BVWSW" width={100} height={40} className="h-[26px] w-auto opacity-30 grayscale brightness-[2]" />
        <Image src={IAR.logos.bdsw} alt="BDSW" width={100} height={40} className="h-[26px] w-auto opacity-30 grayscale brightness-[2]" />
        <span className="text-[0.72rem] text-iar-gray-500 flex items-center gap-1.5">
          <LockIcon size={12} /> Ihre Daten sind sicher
        </span>
      </div>
    </div>
  )
}
