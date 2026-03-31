import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karriere bei IAR Sicherheit — Offene Stellen im Sicherheitsdienst',
  description: 'Jobs im Sicherheitsdienst: Werkschutz, Objektschutz, Revierdienst. Unbefristeter Vertrag, faire Bezahlung. Jetzt in 90 Sekunden bewerben.',
  openGraph: {
    title: 'Karriere bei IAR Sicherheit — Offene Stellen im Sicherheitsdienst',
    description: 'Jobs im Sicherheitsdienst: Werkschutz, Objektschutz, Revierdienst. Unbefristeter Vertrag, faire Bezahlung. Jetzt in 90 Sekunden bewerben.',
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
<section class="sub-hero" style="background-image:url('https://iar-sicherheit.de/wp-content/uploads/2024/02/13-768x512.jpg')">
<div class="hscan" style="background:linear-gradient(90deg,transparent,var(--ct),transparent)"></div>
<div class="ctn" style="max-width:680px">
<span class="sub-tag sub-tag-gold"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Karriere bei IAR Sicherheit</span>
<h1 class="sub-h1" style="margin-top:12px">Dein neuer Job<br>in der <span style="color:var(--ct)">Sicherheit.</span></h1>
<p class="sub-lead">Kein Anschreiben. Keine komplizierten Formulare. Bewirb dich in 90 Sekunden und wir melden uns innerhalb von 48 Stunden.</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px"><span style="display:flex;align-items:center;gap:5px;padding:7px 16px;border-radius:100px;font-size:.78rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid rgba(245,158,11,.15)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Unbefristeter Vertrag</span><span style="display:flex;align-items:center;gap:5px;padding:7px 16px;border-radius:100px;font-size:.78rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid rgba(245,158,11,.15)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Faire Bezahlung</span><span style="display:flex;align-items:center;gap:5px;padding:7px 16px;border-radius:100px;font-size:.78rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid rgba(245,158,11,.15)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Weiterbildung</span><span style="display:flex;align-items:center;gap:5px;padding:7px 16px;border-radius:100px;font-size:.78rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid rgba(245,158,11,.15)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Saarland & Heilbronn</span></div>
<a href="#/karriere-bewerben" class="btn btn-c">In 90 Sek. bewerben <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
</div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0"><div class="ctn">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Offene Stellen</span>
<h2 class="stt" style="margin-top:12px">Aktuell suchen wir:</h2>
<div style="display:flex;flex-direction:column;gap:12px;margin-top:36px;max-width:800px">
<div class="mod-card" style="padding:22px 26px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><div><div style="color:var(--w);font-weight:700;font-size:.98rem;font-family:var(--fh)">Sicherheitsmitarbeiter Werkschutz (m/w/d)</div><div style="color:var(--g4);font-size:.82rem;margin-top:6px;display:flex;gap:12px"><span>Wadern</span><span>Vollzeit</span><span>Unbefristet</span></div></div><span style="padding:5px 14px;border-radius:var(--rx);font-size:.72rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid var(--cs)">Neu</span></div><div class="mod-card" style="padding:22px 26px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><div><div style="color:var(--w);font-weight:700;font-size:.98rem;font-family:var(--fh)">Sicherheitsmitarbeiter Objektschutz (m/w/d)</div><div style="color:var(--g4);font-size:.82rem;margin-top:6px;display:flex;gap:12px"><span>Saarbrücken</span><span>Vollzeit</span><span>Unbefristet</span></div></div><span style="padding:5px 14px;border-radius:var(--rx);font-size:.72rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08)">Offen</span></div><div class="mod-card" style="padding:22px 26px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><div><div style="color:var(--w);font-weight:700;font-size:.98rem;font-family:var(--fh)">Revierdienst / Mobile Patrouille (m/w/d)</div><div style="color:var(--g4);font-size:.82rem;margin-top:6px;display:flex;gap:12px"><span>Saarland</span><span>Vollzeit</span><span>Unbefristet</span></div></div><span style="padding:5px 14px;border-radius:var(--rx);font-size:.72rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08)">Offen</span></div><div class="mod-card" style="padding:22px 26px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><div><div style="color:var(--w);font-weight:700;font-size:.98rem;font-family:var(--fh)">Sicherheitsfachkraft (m/w/d)</div><div style="color:var(--g4);font-size:.82rem;margin-top:6px;display:flex;gap:12px"><span>Heilbronn</span><span>Vollzeit</span><span>Unbefristet</span></div></div><span style="padding:5px 14px;border-radius:var(--rx);font-size:.72rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08)">Offen</span></div>
<div class="mod-card" style="padding:22px 26px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;border-style:dashed"><div><div style="color:var(--w);font-weight:700;font-size:.98rem;font-family:var(--fh)">Initiativbewerbung</div><div style="color:var(--g4);font-size:.82rem;margin-top:6px">Saarland oder Heilbronn — Kein passender Job? Bewirb dich trotzdem!</div></div><span style="color:var(--ag);font-weight:600;font-size:1.2rem">→</span></div>
</div></div></section>` }} />
}
