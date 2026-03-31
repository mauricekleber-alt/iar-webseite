import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum — IAR Sicherheit GmbH',
  description: 'Impressum der IAR Sicherheit GmbH, Schlosshof 2, 66564 Ottweiler. Geschäftsführer David Rosenfeldt. HRB 103108.',
  openGraph: {
    title: 'Impressum — IAR Sicherheit GmbH',
    description: 'Impressum der IAR Sicherheit GmbH, Schlosshof 2, 66564 Ottweiler. Geschäftsführer David Rosenfeldt. HRB 103108.',
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
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Rechtliches</span>
<h1 style="margin-top:12px">Impressum</h1>
<p class="legal-sub">IAR Sicherheit GmbH — Ihr Sicherheitspartner in Saarland und Heilbronn.</p>
<div class="legal-section"><h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Verantwortlich</h2><p>IAR Sicherheit GmbH<br>Geschäftsführer: David Rosenfeldt<br>Schlosshof 2, 66564 Ottweiler</p></div>
<div class="legal-section"><h2><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> Kontakt</h2><p>Fon: +49 (0) 6824 302528<br>Fax: +49 (0) 6824 701575<br>E-Mail: info(at)iar-sicherheit.de</p></div>
<div class="legal-section"><h2><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Registerdaten</h2><p>Umsatzsteuer-ID: DE 305574144<br>Amtsgericht Saarbrücken, HRB 103108</p></div>
<div class="legal-section"><h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Haftung für Inhalte</h2><p>Als Diensteanbieter sind wir für eigene Inhalte verantwortlich. Haftung erst ab Kenntnis konkreter Rechtsverletzung. Bei Bekanntwerden werden wir rechtswidrige Inhalte umgehend entfernen.</p></div>
<div class="legal-section"><h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Urheberrecht</h2><p>Inhalte unterliegen dem deutschen Urheberrecht. Downloads und Kopien nur für privaten, nicht kommerziellen Gebrauch gestattet.</p></div>
<div style="margin-top:40px"><a href="#/" class="btn btn-o" style="font-size:.84rem;padding:10px 20px">← Zurück zur Startseite</a></div>
</div>` }} />
}
