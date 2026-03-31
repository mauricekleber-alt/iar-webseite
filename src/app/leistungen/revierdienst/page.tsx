import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revierdienst & Mobile Patrouillen — IAR Sicherheit GmbH',
  description: 'Regelmäßige, unvorhersehbare Kontrollen Ihrer Standorte. GPS-dokumentierte Rundgänge, flexible Intervalle. Saarland & Heilbronn.',
  openGraph: {
    title: 'Revierdienst & Mobile Patrouillen — IAR Sicherheit GmbH',
    description: 'Regelmäßige, unvorhersehbare Kontrollen Ihrer Standorte. GPS-dokumentierte Rundgänge, flexible Intervalle. Saarland & Heilbronn.',
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
<section class="sub-hero" style="background-image:url('https://iar-sicherheit.de/wp-content/uploads/2024/03/Revierdienst-1.jpg')">
<div class="hscan"></div>
<div class="ctn">
<span class="sub-tag" style="background:rgba(245,158,11,.08);color:#F59E0B;border-color:#F59E0B30"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Mobile Patrouille</span>
<h1 class="sub-h1">Revierdienst</h1>
<p class="sub-lead">Regelmäßige, unvorhersehbare Kontrollen Ihrer Standorte — mobil, flexibel und GPS-dokumentiert. Ideal für mehrere Objekte.</p>
<div class="stats-bar"><div class="stat-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <strong>24/7</strong> verfügbar</div><div class="stat-pill"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>VdS</strong> zertifiziert</div></div>
</div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0"><div class="ctn"><div class="split" style="align-items:start">
<div style="position:sticky;top:120px"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/03/Revierdienst-1.jpg" alt="Revierdienst" style="width:100%;height:440px;object-fit:cover;border-radius:var(--r);border:1px solid var(--db)">
<div class="quote-card"><div class="quote-mark">"</div><p style="color:var(--g3);font-size:.9rem;line-height:1.7;font-style:italic;padding-left:24px">Sicherheit ist für mich mehr als ein Beruf — es ist Verantwortung.</p><p style="color:var(--w);font-size:.8rem;font-weight:600;margin-top:10px;padding-left:24px">— David Rosenfeldt, Geschäftsführer</p></div>
</div>
<div>
<h2 style="font-size:1.7rem;margin-bottom:16px">Was ist Revierdienst?</h2>
<div class="plainbox">Unsere mobilen Teams fahren regelmäßig und unvorhersehbar Ihre Standorte ab — per Auto und zu Fuß. Jeder Rundgang wird GPS-dokumentiert.</div>
<p style="color:var(--g3);line-height:1.8;margin-bottom:32px;font-size:.96rem">Regelmäßige, unvorhersehbare Kontrollen Ihrer Standorte — mobil, flexibel und GPS-dokumentiert. Ideal für mehrere Objekte.</p>
<h3 style="font-size:1.15rem;margin-bottom:16px;display:flex;align-items:center;gap:8px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Was wir konkret machen</h3>
<div class="feat-grid"><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>Mobile Patrouillen (Auto + zu Fuß)</div><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>Unvorhersehbare Kontrollzeiten</div><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>Sofortige Alarmintervention</div><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>Koordination mit Polizei & Feuerwehr</div><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>GPS-dokumentierte Rundgänge</div><div class="feat-item"><div class="feat-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>Echtzeit-Reporting</div></div>
<div style="margin-top:36px;padding:28px;background:var(--dc);border:1px solid var(--db);border-radius:var(--r)">
<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
<img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-daivd-rosenfeldt.jpg" style="width:52px;height:52px;border-radius:var(--rs);object-fit:cover;border:2px solid var(--db)">
<div><div style="color:var(--w);font-weight:700;font-size:.95rem">David Rosenfeldt</div><div style="color:var(--ct);font-size:.78rem;font-weight:600">Geschäftsführer</div></div>
</div>
<p style="color:var(--g3);font-size:.9rem;line-height:1.7;margin-bottom:20px">Fragen zum Revierdienst? Ich berate Sie persönlich — unverbindlich und kostenlos.</p>
</div>
</div>
</div></div></section>

<section class="faq-section"><div class="ctn">
<span class="sub-tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Häufige Fragen</span>
<h2 class="stt" style="margin-top:12px">FAQ — Revierdienst</h2>
<div class="faq-grid">
<div class="faq-card">
<h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Wie oft werden meine Standorte kontrolliert?</h3>
<p>Die Intervalle legen wir gemeinsam fest — von stündlich bis einmal pro Nacht. Wichtig: Die Kontrollzeiten variieren bewusst, damit kein vorhersehbares Muster entsteht.</p>
</div>
<div class="faq-card">
<h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Werden die Rundgänge dokumentiert?</h3>
<p>Ja, jeder Rundgang wird per GPS protokolliert. Sie erhalten auf Wunsch regelmäßige Berichte mit Zeitstempeln, Fotos und Auffälligkeiten.</p>
</div>
<div class="faq-card">
<h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Was passiert, wenn bei einem Rundgang etwas auffällt?</h3>
<p>Unser Mitarbeiter bewertet die Lage vor Ort, sichert wenn nötig das Objekt und benachrichtigt Sie sowie bei Bedarf Polizei oder Feuerwehr — sofort.</p>
</div>
<div class="faq-card">
<h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Kann der Revierdienst auch tagsüber eingesetzt werden?</h3>
<p>Ja. Obwohl die meisten Einsätze nachts und am Wochenende stattfinden, bieten wir auch Tagkontrollen an — z.B. für leerstehende Objekte oder Baustellen.</p>
</div>
<div class="faq-card">
<h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ag)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Wie groß ist das Einsatzgebiet?</h3>
<p>Wir decken das gesamte Saarland und den Raum Heilbronn ab. Bei mehreren Standorten planen wir die Routen so, dass alle effizient abgedeckt werden.</p>
</div>
</div>
<div style="margin-top:32px;padding:28px;background:var(--dc);border:1px solid var(--db);border-radius:var(--r)">
<h3 style="font-size:1rem;margin-bottom:6px;display:flex;align-items:center;gap:8px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ct)" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg> Ihre Frage nicht dabei?</h3>
<p style="font-size:.84rem;color:var(--g4);margin-bottom:16px">Stellen Sie uns Ihre Frage — wir antworten innerhalb von 24 Stunden.</p>
<div style="display:flex;gap:10px"><textarea rows="2" style="flex:1;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none;resize:vertical" placeholder="Ihre Frage eingeben..."></textarea><button class="btn btn-c" style="padding:12px 20px;align-self:flex-end;white-space:nowrap;font-size:.84rem">Absenden</button></div>
</div>

</div></section>
<div class="glow-divider"></div>
<section style="padding:80px 0;background:var(--ds)"><div class="ctn">
<div class="sl"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Weitere Leistungen</div><h2 class="stt">Das bieten wir außerdem.</h2>
<div class="rel-grid"><a href="#/leistungen-objektschutz" class="rel-card"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/7.jpg" alt="Objektschutz"><div class="rel-body"><h3 style="font-size:1rem;margin-bottom:6px">Objektschutz</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:8px">Auf gut Deutsch: Wir bewachen Ihr Gebäude. Tag und Nacht, 365 Tage. Niemand komm...</p><span style="font-size:.78rem;color:var(--ag);font-weight:600">Mehr erfahren →</span></div></a><a href="#/leistungen-werkschutz" class="rel-card"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/05/werkschutz-iar-sicherheit-saarland.jpg" alt="Werkschutz"><div class="rel-body"><h3 style="font-size:1rem;margin-bottom:6px">Werkschutz</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:8px">Sicherheitsleute direkt bei Ihnen auf dem Werksgelände. Die kontrollieren wer re...</p><span style="font-size:.78rem;color:var(--ag);font-weight:600">Mehr erfahren →</span></div></a><a href="#/leistungen-alarmintervention" class="rel-card"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/9.jpg" alt="Alarmintervention"><div class="rel-body"><h3 style="font-size:1rem;margin-bottom:6px">Alarmintervention</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:8px">Alarm ausgelöst? Unsere Einsatzkräfte sind sofort vor Ort, bewerten die Lage und...</p><span style="font-size:.78rem;color:var(--ag);font-weight:600">Mehr erfahren →</span></div></a></div>
</div></section>` }} />
}
