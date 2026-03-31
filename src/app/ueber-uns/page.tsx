import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über IAR Sicherheit — 200+ Mitarbeiter, seit 1996',
  description: 'IAR Sicherheit GmbH: Über 200 Mitarbeiter, Kunden von Saarland bis Heilbronn. Geschäftsführer David Rosenfeldt. Erfahrung trifft Innovation.',
  openGraph: {
    title: 'Über IAR Sicherheit — 200+ Mitarbeiter, seit 1996',
    description: 'IAR Sicherheit GmbH: Über 200 Mitarbeiter, Kunden von Saarland bis Heilbronn. Geschäftsführer David Rosenfeldt. Erfahrung trifft Innovation.',
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
<section class="sub-hero" style="background-image:url('https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-900x600-1-1.jpg')">
<div class="hscan"></div>
<div class="ctn">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Über IAR Sicherheit</span>
<h1 class="sub-h1">We take care —<br><span class="grad">Ihre Sicherheit ist unsere Mission.</span></h1>
<p class="sub-lead">Mit über 200 Mitarbeitern sind wir einer der führenden Sicherheitsdienstleister der Region. Seit 1996 betreuen wir Kunden vom Saarland bis nach Heilbronn — als vertrauenswürdiger Partner auf Augenhöhe.</p>
<div style="display:flex;gap:12px"><a href="#/anfrage" class="btn btn-c">Angebot anfragen <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="#/kontakt" class="btn btn-o">Kontakt aufnehmen</a></div>
</div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0"><div class="ctn"><div class="split" style="align-items:center">
<div>
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Das Unternehmen</span>
<h2 style="font-size:1.7rem;margin-bottom:16px;margin-top:12px">Erfahrung trifft Innovation.</h2>
<p style="color:var(--g3);line-height:1.8;margin-bottom:20px">IAR Sicherheit GmbH steht für Vertrauen, Professionalität und maßgeschneiderte Sicherheitslösungen. Was als kleines Sicherheitsunternehmen im Saarland begann, ist heute ein Unternehmen mit über 200 Mitarbeitern, das Kunden vom Saarland bis nach Heilbronn betreut.</p>
<div class="plainbox">Von Objektschutz und Empfangsdiensten über mobile Patrouillen bis hin zu Alarmintervention — unser Portfolio deckt alle Aspekte der Sicherheit ab. Mit über einem Jahrzehnt Erfahrung kombinieren wir bewährte Methoden mit modernster Technologie.</div>
<p style="color:var(--g3);line-height:1.8;margin-bottom:0">Unser Team aus über 200 geschulten Sicherheitskräften betreut Kunden unterschiedlichster Branchen — von Banken und Industrieunternehmen bis hin zu Gewerbeimmobilien. Qualität und Kundenzufriedenheit stehen im Mittelpunkt. Bei IAR geht es um den Aufbau langfristiger, vertrauensvoller Beziehungen.</p>
</div>
<div><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-900x600-1-1.jpg" alt="IAR Team" style="width:100%;height:450px;object-fit:cover;border-radius:var(--r);border:1px solid var(--db)"></div>
</div></div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0;background:var(--ds)"><div class="ctn" style="text-align:center">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Unsere Werte</span>
<h2 class="stt" style="margin-top:12px">Wofür wir stehen.</h2>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:40px;text-align:left">
<div class="sol-modern" style="flex-direction:column;align-items:flex-start;padding:28px;gap:12px"><div class="icon-box" style="background:rgba(37,99,235,.08)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 style="font-size:1.05rem">Erfahrung trifft Innovation</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7">Über ein Jahrzehnt Branchenerfahrung, kombiniert mit modernster Technologie.</p></div><div class="sol-modern" style="flex-direction:column;align-items:flex-start;padding:28px;gap:12px"><div class="icon-box" style="background:rgba(245,158,11,.08)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 style="font-size:1.05rem">Kundenorientierung & Vertrauen</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7">Langfristige Beziehungen basierend auf Transparenz und exzellentem Service.</p></div><div class="sol-modern" style="flex-direction:column;align-items:flex-start;padding:28px;gap:12px"><div class="icon-box" style="background:rgba(16,185,129,.08)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 style="font-size:1.05rem">Qualität & ständige Verbesserung</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7">Kundenzufriedenheit im Mittelpunkt. Ständige Verbesserung unserer Prozesse.</p></div><div class="sol-modern" style="flex-direction:column;align-items:flex-start;padding:28px;gap:12px"><div class="icon-box" style="background:rgba(139,92,246,.08)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 style="font-size:1.05rem">Team & Mitarbeiterentwicklung</h3><p style="font-size:.86rem;color:var(--g4);line-height:1.7">Unternehmenskultur basierend auf Respekt, Wachstum und kontinuierlicher Weiterbildung.</p></div>
</div></div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0"><div class="ctn"><div class="split" style="align-items:center">
<div style="position:relative"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-daivd-rosenfeldt.jpg" alt="David Rosenfeldt" style="width:100%;border-radius:var(--r);border:1px solid var(--db)"><div class="gbdg"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Gründer & GF</div></div>
<div>
<span class="sub-tag"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8"/></svg> Der Geschäftsführer</span>
<h2 style="font-size:1.7rem;margin:12px 0 8px">David Rosenfeldt</h2>
<p style="color:var(--ct);font-weight:600;font-size:.9rem;margin-bottom:16px">Inhaber & Geschäftsführer</p>
<p style="color:var(--g3);line-height:1.8;margin-bottom:16px">David Rosenfeldt steht als Inhaber nicht nur an der Spitze des Unternehmens, sondern ist das Herzstück unserer Vision. Mit einer Karriere über mehrere Jahrzehnte bringt er tiefgreifendes Wissen ein.</p>
<div class="quote-card"><div class="quote-mark">"</div><p style="color:var(--g3);font-size:.9rem;line-height:1.7;font-style:italic;padding-left:24px">Sicherheit ist für mich mehr als ein Beruf — es ist die Verantwortung, Menschen und Unternehmen zu schützen, damit sie sich auf das konzentrieren können, was wirklich zählt.</p></div>
<div style="display:flex;gap:14px;margin-top:24px;flex-wrap:wrap">
<div class="gci"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg><a href="tel:+496824302528">(06824) 302528</a></div>
<div class="gci"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:info@iar-sicherheit.de">info@iar-sicherheit.de</a></div>
</div></div>
</div></div></section>
<div class="glow-divider"></div>
<section style="padding:100px 0;background:var(--ds)"><div class="ctn" style="text-align:center">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> In Zahlen</span>
<h2 class="stt" style="margin-top:12px">IAR Sicherheit auf einen Blick.</h2>
<div class="tgr" style="grid-template-columns:repeat(5,1fr)"><div class="tc"><div class="grad-g" style="font-family:var(--fh);font-size:2.4rem;font-weight:800">200+</div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-top:4px">Mitarbeiter</div></div><div class="tc"><div class="grad-g" style="font-family:var(--fh);font-size:2.4rem;font-weight:800">12.400+</div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-top:4px">Rundgänge / Jahr</div></div><div class="tc"><div class="grad-g" style="font-family:var(--fh);font-size:2.4rem;font-weight:800">850+</div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-top:4px">Alarmeinsätze</div></div><div class="tc"><div class="grad-g" style="font-family:var(--fh);font-size:2.4rem;font-weight:800">15+</div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-top:4px">Jahre Erfahrung</div></div><div class="tc"><div class="grad-g" style="font-family:var(--fh);font-size:2.4rem;font-weight:800">2</div><div style="font-size:.95rem;color:var(--w);font-weight:600;margin-top:4px">Regionen</div><div style="font-size:.75rem;color:var(--g5);margin-top:2px">Saarland & Heilbronn</div></div></div>
</div></section>
<section class="cta-section"><div class="ctn"><div class="cta-box" style="background-image:none">
<h2 style="color:#fff;font-size:1.6rem;margin-bottom:14px;position:relative;z-index:1">Sichern Sie Ihr Umfeld — kontaktieren Sie uns jetzt!</h2>
<p style="color:rgba(255,255,255,.7);max-width:520px;margin:0 auto 28px;position:relative;z-index:1">Proaktive Sicherheit ist kein Luxus, sondern eine Notwendigkeit.</p>
<a href="#/anfrage" class="btn btn-w" style="position:relative;z-index:1">Jetzt Angebot anfragen <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
</div></div></section>` }} />
}
