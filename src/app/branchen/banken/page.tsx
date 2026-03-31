import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sicherheit für Banken & Finanzinstitute — IAR Sicherheit',
  description: 'Spezialisierte Sicherheitslösungen für Banken: Gebäudesicherheit, Interventionsfahrten, Krisenmanagement. Erfahrung seit 1996.',
  openGraph: {
    title: 'Sicherheit für Banken & Finanzinstitute — IAR Sicherheit',
    description: 'Spezialisierte Sicherheitslösungen für Banken: Gebäudesicherheit, Interventionsfahrten, Krisenmanagement. Erfahrung seit 1996.',
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
  return <div dangerouslySetInnerHTML={{ __html: `
<section class="sub-hero" style="background-image:url('https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-900x600-3.jpg')">
<div class="hscan" style="background:linear-gradient(90deg,transparent,var(--ct),transparent)"></div>
<div class="ctn">
<span class="sub-tag sub-tag-gold"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Sicherheit für Banken & Finanzinstitute</span>
<h1 class="sub-h1">Ihr Finanzinstitut.<br><span class="grad">Sicher geschützt.</span></h1>
<p class="sub-lead">Von der Filialsicherheit bis zum Krisenmanagement — wir verstehen die besonderen Herausforderungen im Bankensektor.</p>
</div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0"><div class="ctn">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Die Herausforderungen</span>
<h2 class="stt" style="margin-top:12px">Warum Banken & Finanzinstitute besondere Sicherheit brauchen.</h2>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px">
<div class="mod-card" style="padding:28px"><div class="pain-num">01</div><h3 style="font-size:1rem;margin-bottom:10px;position:relative">Komplexe Anforderungen</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7;position:relative">Vermögen, Mitarbeiter und Kunden gleichzeitig schützen — mit verschiedenen Systemen die zusammenarbeiten.</p></div><div class="mod-card" style="padding:28px"><div class="pain-num">02</div><h3 style="font-size:1rem;margin-bottom:10px;position:relative">Schnelle Reaktion</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7;position:relative">Vom technischen Alarm bis zum Notfall: Jede Minute zählt. Schäden minimieren, Polizei koordinieren.</p></div><div class="mod-card" style="padding:28px"><div class="pain-num">03</div><h3 style="font-size:1rem;margin-bottom:10px;position:relative">Sicherheit ohne Störung</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7;position:relative">Strenge Maßnahmen dürfen weder den Kundenservice noch die Effizienz beeinträchtigen.</p></div>
</div></div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0;background:var(--ds)"><div class="ctn">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Unsere Lösungen</span>
<h2 class="stt" style="margin-top:12px">Sicherheit für Banken & Finanzinstitute.</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:40px">
<div class="sol-modern"><div class="icon-box" style="background:var(--as)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-bottom:4px">Sicherheitsberatung & Risikoanalyse</div></div></div><div class="sol-modern"><div class="icon-box" style="background:var(--as)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-bottom:4px">Gebäudesicherheit & Zugangskontrolle</div></div></div><div class="sol-modern"><div class="icon-box" style="background:var(--as)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-bottom:4px">Interventionsfahrt & Sofort-Reaktion</div></div></div><div class="sol-modern"><div class="icon-box" style="background:var(--as)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-bottom:4px">Krisenmanagement & Notfallpläne</div></div></div>
</div></div></section>` }} />
}
