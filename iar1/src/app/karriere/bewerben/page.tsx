'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IAR } from '@/lib/utils'
import { ShieldIcon, LockIcon, ArrowRightIcon, CheckCircleIcon } from '@/lib/icons'

const STELLEN = [
  { value: 'werkschutz', label: 'Werkschutz' },
  { value: 'objektschutz', label: 'Objektschutz' },
  { value: 'revierdienst', label: 'Revierdienst' },
  { value: 'empfang', label: 'Empfangsdienst' },
  { value: 'heilbronn', label: 'Heilbronn (alle)' },
  { value: 'initiativ', label: 'Initiativbewerbung' },
]

export default function BewerbenPage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    stelle: '', sachkunde: '', fuehrerschein: '', erfahrung: '', schicht: '',
    vorname: '', nachname: '', telefon: '', email: '', plz: '', start: '',
  })

  const goTo = (s: number) => { setStep(s); window.scrollTo(0, 0) }

  const submit = () => {
    if (!data.vorname || !data.nachname || !data.telefon || !data.email) {
      alert('Bitte alle Pflichtfelder ausfuellen.'); return
    }
    console.log('Bewerbung:', data)
    goTo(4)
  }

  const dots = Array.from({ length: 4 }, (_, i) => (
    <div key={i} className={`flex-1 h-1 rounded-full transition-all duration-300 ${i < step - 1 ? 'bg-[#10B981]' : i === step - 1 ? 'bg-iar-accent' : 'bg-iar-border'}`} />
  ))

  const pillBtn = (group: string, value: string, label: string) => (
    <button
      key={value}
      onClick={() => setData({ ...data, [group]: value })}
      className={`px-[22px] py-2.5 rounded-full text-[0.88rem] font-medium border-[1.5px] transition-all ${
        data[group as keyof typeof data] === value
          ? 'border-iar-accent-glow bg-iar-accent-soft text-iar-white'
          : 'border-iar-border bg-iar-card text-iar-gray-300 hover:border-[rgba(37,99,235,0.15)]'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="security-grid" />

      {/* Top */}
      <div className="relative z-10 px-8 py-5 flex items-center justify-between border-b border-iar-border">
        <Link href="/"><Image src={IAR.logo} alt="IAR Sicherheit" width={160} height={65} className="h-9 w-auto" /></Link>
        <Link href="/karriere" className="flex items-center gap-1.5 text-iar-gray-400 text-[0.84rem] hover:text-iar-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Zurueck zu Karriere
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 relative z-[2]">
        <div className="max-w-[680px] w-full">
          {/* Section header */}
          <div className="text-center mb-2">
            <div className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-iar-accent-glow mb-2 flex items-center justify-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              In 90 Sekunden bewerben
            </div>
            <h2 className="text-[1.6rem] font-heading font-bold text-iar-white mb-1">Kein Anschreiben noetig.</h2>
            <p className="text-iar-gray-300 text-[0.92rem] mb-8">3 kurze Fragen, Kontaktdaten — fertig.</p>
          </div>

          {/* Progress */}
          <div className="flex gap-2 mb-8">{dots}</div>

          {/* Step 1: Stelle */}
          {step === 1 && (
            <div className="animate-up visible">
              <h3 className="text-[1.4rem] font-heading font-bold mb-2">Fuer welche Stelle?</h3>
              <p className="text-iar-gray-300 mb-7">Waehle die passende Stelle.</p>
              <div className="grid grid-cols-2 gap-3">
                {STELLEN.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setData({ ...data, stelle: s.value })}
                    className={`p-4 rounded-[var(--radius-md)] border-[1.5px] text-center font-semibold text-[0.92rem] transition-all ${
                      data.stelle === s.value
                        ? 'border-iar-accent-glow bg-iar-accent-soft text-iar-white'
                        : 'border-iar-border bg-iar-card text-iar-gray-200 hover:border-[rgba(37,99,235,0.15)]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <button disabled={!data.stelle} onClick={() => goTo(2)} className="inline-flex items-center gap-2 px-9 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:pointer-events-none">
                  Weiter <ArrowRightIcon size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Schnellcheck */}
          {step === 2 && (
            <div className="animate-up visible">
              <h3 className="text-[1.4rem] font-heading font-bold mb-2">Kurzer Schnellcheck</h3>
              <p className="text-iar-gray-300 mb-7">Keine Sorge — auch ohne 34a kannst du dich bewerben!</p>
              <div className="space-y-6">
                <div>
                  <div className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-2">34a-Sachkundepruefung?</div>
                  <div className="flex gap-2.5 flex-wrap">
                    {pillBtn('sachkunde', 'ja', 'Ja')}
                    {pillBtn('sachkunde', 'interesse', 'Nein, hab Interesse')}
                    {pillBtn('sachkunde', 'nein', 'Nein')}
                  </div>
                </div>
                <div>
                  <div className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-2">Fuehrerschein Klasse B?</div>
                  <div className="flex gap-2.5 flex-wrap">
                    {pillBtn('fuehrerschein', 'ja', 'Ja')}
                    {pillBtn('fuehrerschein', 'nein', 'Nein')}
                  </div>
                </div>
                <div>
                  <div className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-2">Berufserfahrung Sicherheit?</div>
                  <div className="flex gap-2.5 flex-wrap">
                    {pillBtn('erfahrung', 'ja', 'Ja')}
                    {pillBtn('erfahrung', 'quer', 'Quereinsteiger')}
                    {pillBtn('erfahrung', 'nein', 'Nein')}
                  </div>
                </div>
                <div>
                  <div className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-2">Nacht-/Wochenenddienst?</div>
                  <div className="flex gap-2.5 flex-wrap">
                    {pillBtn('schicht', 'ja', 'Ja')}
                    {pillBtn('schicht', 'eingeschraenkt', 'Eingeschraenkt')}
                    {pillBtn('schicht', 'nein', 'Nein')}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={() => goTo(1)} className="px-7 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-transparent text-iar-gray-400 border-[1.5px] border-iar-border hover:text-iar-white transition-all">Zurueck</button>
                <button onClick={() => goTo(3)} className="inline-flex items-center gap-2 px-9 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all">
                  Weiter <ArrowRightIcon size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Kontaktdaten */}
          {step === 3 && (
            <div className="animate-up visible">
              <h3 className="text-[1.4rem] font-heading font-bold mb-2">Fast geschafft — deine Kontaktdaten</h3>
              <p className="text-iar-gray-300 mb-7">Wir melden uns innerhalb von 48 Stunden.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bv">Vorname *</label>
                    <input id="bv" value={data.vorname} onChange={(e) => setData({ ...data, vorname: e.target.value })} placeholder="Max" required className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                  </div>
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bn">Nachname *</label>
                    <input id="bn" value={data.nachname} onChange={(e) => setData({ ...data, nachname: e.target.value })} placeholder="Mustermann" required className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bt">Telefon *</label>
                    <input id="bt" type="tel" value={data.telefon} onChange={(e) => setData({ ...data, telefon: e.target.value })} placeholder="0171 1234567" required className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                  </div>
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="be">E-Mail *</label>
                    <input id="be" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="max@gmail.com" required className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bplz">Wohnort / PLZ</label>
                    <input id="bplz" value={data.plz} onChange={(e) => setData({ ...data, plz: e.target.value })} placeholder="66564 Ottweiler" className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow placeholder:text-iar-gray-500 transition-all" />
                  </div>
                  <div>
                    <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bstart">Fruehester Start</label>
                    <input id="bstart" type="date" value={data.start} onChange={(e) => setData({ ...data, start: e.target.value })} className="w-full px-4 py-3.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.92rem] outline-none focus:border-iar-accent-glow transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-[0.78rem] font-semibold text-iar-gray-300 uppercase tracking-[0.04em] mb-1.5 block" htmlFor="bcv">Lebenslauf (optional)</label>
                  <input id="bcv" type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-2.5 bg-iar-card border-[1.5px] border-iar-border rounded-[var(--radius-sm)] text-iar-white text-[0.88rem] outline-none focus:border-iar-accent-glow transition-all file:mr-3 file:py-1 file:px-3 file:rounded-[var(--radius-xs)] file:border-0 file:bg-iar-accent-soft file:text-iar-accent-glow file:font-semibold file:text-[0.78rem]" />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={() => goTo(2)} className="px-7 py-4 rounded-[var(--radius-md)] font-heading font-semibold bg-transparent text-iar-gray-400 border-[1.5px] border-iar-border hover:text-iar-white transition-all">Zurueck</button>
                <button onClick={submit} className="inline-flex items-center gap-2 px-9 py-[18px] rounded-[var(--radius-md)] font-heading font-semibold text-[1.05rem] bg-[#F59E0B] text-iar-dark shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:bg-[#FBBF24] hover:-translate-y-0.5 transition-all">
                  Bewerbung absenden <ShieldIcon size={16} strokeWidth={2.5} />
                </button>
              </div>
              <p className="text-[0.7rem] text-iar-gray-500 mt-4 flex items-center gap-1.5">
                <LockIcon size={11} /> SSL-verschluesselt. <a href="/datenschutz" className="text-iar-accent-glow hover:underline">Datenschutz</a>
              </p>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="animate-up visible text-center py-10">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center mx-auto mb-5 border-2 border-[rgba(16,185,129,0.2)]">
                <CheckCircleIcon size={28} className="text-[#10B981]" />
              </div>
              <h3 className="text-[1.6rem] font-heading font-bold text-iar-white mb-3">Bewerbung erhalten!</h3>
              <p className="text-iar-gray-300 max-w-[420px] mx-auto mb-8">
                Danke fuer dein Interesse! Wir melden uns innerhalb von <strong className="text-iar-white">48 Stunden</strong>.
              </p>

              <div className="flex items-center gap-4 justify-center bg-iar-card border border-iar-border rounded-[var(--radius-md)] p-5 max-w-[400px] mx-auto">
                <Image src={IAR.gf.image} alt={IAR.gf.name} width={50} height={50} className="w-[50px] h-[50px] rounded-[var(--radius-sm)] object-cover border-2 border-iar-border" />
                <div className="text-left">
                  <div className="text-iar-white font-bold text-[0.92rem] font-heading">{IAR.gf.name}</div>
                  <div className="text-iar-gray-400 text-[0.78rem]">Geschaeftsfuehrer</div>
                  <a href={IAR.phoneHref} className="text-iar-accent-glow font-semibold text-[0.84rem]">{IAR.phone}</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust strip */}
      <div className="px-8 py-4 border-t border-iar-border flex justify-center gap-7 items-center relative z-10">
        <Image src={IAR.logos.bvwsw} alt="BVWSW" width={100} height={40} className="h-[26px] w-auto opacity-30 grayscale brightness-[2]" />
        <Image src={IAR.logos.bdsw} alt="BDSW" width={100} height={40} className="h-[26px] w-auto opacity-30 grayscale brightness-[2]" />
        <span className="text-[0.72rem] text-iar-gray-500 flex items-center gap-1.5">
          <LockIcon size={12} /> Deine Daten sind sicher
        </span>
      </div>
    </div>
  )
}
