import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — IAR Sicherheit GmbH',
  description: 'Datenschutzerklärung der IAR Sicherheit GmbH. Verantwortlicher: David Rosenfeldt. DSB: Michael Knauber, Kompass Datenschutz GmbH.',
  openGraph: {
    title: 'Datenschutzerklärung — IAR Sicherheit GmbH',
    description: 'Datenschutzerklärung der IAR Sicherheit GmbH. Verantwortlicher: David Rosenfeldt. DSB: Michael Knauber, Kompass Datenschutz GmbH.',
    url: 'https://iar-sicherheit.de',
    siteName: 'IAR Sicherheit GmbH',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://iar-sicherheit.de',
  },
}


export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<div class="legal-modern">
<span class="sub-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Rechtliches</span>
<h1 style="margin-top:12px">Datenschutzerklärung</h1>
<p class="legal-sub">Stand: Januar 2025</p>
<div class="legal-section"><h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Verantwortlicher</h2><p>IAR Sicherheit GmbH, David Rosenfeldt<br>Schlosshof 2, 66564 Ottweiler<br>info(at)iar-sicherheit.de | +49 (0) 6824 302528</p></div>
<div class="legal-section"><h2><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8"/></svg> Datenschutzbeauftragter</h2><p>Kompass Datenschutz GmbH<br>Michael Knauber<br>knauber(at)kompass-datenschutz.de | 02233 / 6290596</p></div>
<div class="legal-section"><h2><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Rechtsgrundlagen</h2><p>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), Vertragserfüllung (lit. b), Rechtliche Verpflichtung (lit. c), Berechtigte Interessen (lit. f).</p></div>
<div class="legal-section"><h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Ihre Rechte</h2><p>Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21), Widerruf (Art. 7 Abs. 3), Beschwerderecht (Art. 77).</p></div>
<div class="legal-section"><h2><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Kontaktaufnahme</h2><p>Bei Kontaktaufnahme werden Angaben zur Beantwortung verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p></div>
<div style="margin-top:40px"><a href="#/" class="btn btn-o" style="font-size:.84rem;padding:10px 20px">← Zurück zur Startseite</a></div>
</div>` }} />
}
