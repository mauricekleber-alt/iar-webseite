import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ratgeber — Wissen rund um Sicherheit — IAR Sicherheit',
  description: 'Praxis-Tipps und Fachwissen von Geschäftsführer David Rosenfeldt. Kosten, Unterschiede, Einbruchschutz und mehr.',
  openGraph: {
    title: 'Ratgeber — Wissen rund um Sicherheit — IAR Sicherheit',
    description: 'Praxis-Tipps und Fachwissen von Geschäftsführer David Rosenfeldt. Kosten, Unterschiede, Einbruchschutz und mehr.',
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
<div class="hscan"></div>
<div class="ctn" style="text-align:center;max-width:640px;margin:0 auto">
<span class="sub-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Ratgeber</span>
<h1 class="sub-h1" style="margin-top:12px">Wissen rund um <span class="grad">Sicherheit.</span></h1>
<p class="sub-lead" style="margin:0 auto 32px">Praxis-Tipps und Fachwissen von Geschäftsführer David Rosenfeldt.</p>
</div></section>
<div class="glow-divider"></div>
<section style="padding:80px 0"><div class="ctn">
<div style="display:flex;align-items:center;gap:16px;padding:20px;background:var(--dc);border:1px solid var(--db);border-radius:var(--r);max-width:500px;margin:0 auto 48px">
<img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/IAR-Sicherheit-daivd-rosenfeldt.jpg" style="width:52px;height:52px;border-radius:var(--rs);object-fit:cover;border:2px solid var(--db)">
<div><div style="color:var(--w);font-weight:700;font-size:.95rem">David Rosenfeldt</div><div style="color:var(--ct);font-size:.78rem;font-weight:600">Geschäftsführer & Autor</div></div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
<div class="mod-card"><div class="blt"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/2-2.jpg" alt="Was kostet ein Sicherheitsdienst?" style="width:100%;height:180px;object-fit:cover"><span class="tag">Objektschutz</span></div><div style="padding:22px"><h3 style="font-size:.98rem;margin-bottom:8px;line-height:1.4">Was kostet ein Sicherheitsdienst?</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:12px">Alle Kostenfaktoren: Von Stundensätzen bis zum Komplettpaket.</p><div style="font-size:.7rem;color:var(--g5)">David Rosenfeldt · 5 Min</div></div></div><div class="mod-card"><div class="blt"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/02/11.jpg" alt="Werkschutz vs. Objektschutz" style="width:100%;height:180px;object-fit:cover"><span class="tag">Werkschutz</span></div><div style="padding:22px"><h3 style="font-size:.98rem;margin-bottom:8px;line-height:1.4">Werkschutz vs. Objektschutz</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:12px">Zwei Begriffe, oft verwechselt. Wann Sie was brauchen.</p><div style="font-size:.7rem;color:var(--g5)">David Rosenfeldt · 5 Min</div></div></div><div class="mod-card"><div class="blt"><img src="https://iar-sicherheit.de/wp-content/uploads/2024/03/Revierdienst-1.jpg" alt="Einbruchschutz: 7 Tipps" style="width:100%;height:180px;object-fit:cover"><span class="tag">Saarbrücken</span></div><div style="padding:22px"><h3 style="font-size:.98rem;margin-bottom:8px;line-height:1.4">Einbruchschutz: 7 Tipps</h3><p style="font-size:.82rem;color:var(--g4);line-height:1.6;margin-bottom:12px">Praktische Maßnahmen, die sofort wirken.</p><div style="font-size:.7rem;color:var(--g5)">David Rosenfeldt · 5 Min</div></div></div>
</div></div></section>` }} />
}
