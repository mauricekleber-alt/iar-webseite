'use client'

export default function BewerbenPage() {
  return <div dangerouslySetInnerHTML={{ __html: `
<div class="fnl-wrap"><div class="fnl-inner">

<div class="fnl-progress" id="recProgress"></div>

<!-- STEP 0: Job selection -->
<div class="fnl-step active" id="recStep0">
<div class="sub-tag sub-tag-gold" style="margin-bottom:20px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> In 90 Sekunden bewerben</div>
<h1 class="fnl-q" style="font-size:1.8rem">Für welche Stelle interessierst du dich?</h1>
<p class="fnl-sub">Wähle eine Stelle — wir stellen dir dann ein paar kurze Fragen. Kein Anschreiben nötig.</p>
<div style="display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:32px">
<div class="fnl-cat" onclick="selectRecJob('werkschutz')" id="rec-werkschutz" style="justify-content:space-between"><div style="display:flex;align-items:center;gap:16px"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Sicherheitsmitarbeiter Werkschutz (m/w/d)</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Wadern · Vollzeit · Unbefristet</div></div></div><span style="padding:4px 12px;border-radius:6px;font-size:.7rem;font-weight:600;background:var(--cs);color:var(--ct);border:1px solid var(--cs);flex-shrink:0">Neu</span></div>
<div class="fnl-cat" onclick="selectRecJob('objektschutz')" id="rec-objektschutz" style="justify-content:space-between"><div style="display:flex;align-items:center;gap:16px"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Sicherheitsmitarbeiter Objektschutz (m/w/d)</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Saarbrücken · Vollzeit · Unbefristet</div></div></div><span style="padding:4px 12px;border-radius:6px;font-size:.7rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08);flex-shrink:0">Offen</span></div>
<div class="fnl-cat" onclick="selectRecJob('revierdienst')" id="rec-revierdienst" style="justify-content:space-between"><div style="display:flex;align-items:center;gap:16px"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Revierdienst / Mobile Patrouille (m/w/d)</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Saarland · Vollzeit · Unbefristet</div></div></div><span style="padding:4px 12px;border-radius:6px;font-size:.7rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08);flex-shrink:0">Offen</span></div>
<div class="fnl-cat" onclick="selectRecJob('fachkraft')" id="rec-fachkraft" style="justify-content:space-between"><div style="display:flex;align-items:center;gap:16px"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Sicherheitsfachkraft (m/w/d)</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Heilbronn · Vollzeit · Unbefristet</div></div></div><span style="padding:4px 12px;border-radius:6px;font-size:.7rem;font-weight:600;background:rgba(16,185,129,.08);color:var(--ok);border:1px solid rgba(16,185,129,.08);flex-shrink:0">Offen</span></div>
<div class="fnl-cat" onclick="selectRecJob('initiativ')" id="rec-initiativ" style="justify-content:space-between"><div style="display:flex;align-items:center;gap:16px"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Initiativbewerbung</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Saarland oder Heilbronn · Kein passender Job? Bewirb dich trotzdem!</div></div></div></div>
</div>
<a href="#/karriere" class="fnl-back" style="display:inline-flex"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Zurück zur Karriereseite</a>
</div>

<!-- DYNAMIC QUESTIONS -->
<div id="recDynamic"></div>

<!-- CONTACT FORM -->
<div class="fnl-step" id="recContact">
<div class="sub-tag sub-tag-gold" style="margin-bottom:20px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Fast geschafft!</div>
<h2 class="fnl-q">Erzähl uns etwas über dich.</h2>
<p class="fnl-sub">Hinterlasse deine Kontaktdaten und lade deinen Lebenslauf hoch. Wir melden uns innerhalb von 48 Stunden.</p>
<div class="hcard" style="max-width:100%;background:var(--dc)">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Vorname *</label><input style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="Max"></div>
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Nachname *</label><input style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="Mustermann"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">E-Mail *</label><input type="email" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="max@email.de"></div>
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Telefon *</label><input type="tel" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="+49 176 12345678"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Geburtsdatum</label><input type="date" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none;color-scheme:dark"></div>
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Wohnort</label><input style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="z.B. Saarbrücken"></div>
</div>
<div style="margin-bottom:16px"><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Kurze Nachricht an uns</label><textarea rows="3" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none;resize:vertical" placeholder="Warum willst du bei IAR arbeiten? Was motiviert dich?"></textarea></div>

<!-- CV Upload -->
<label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:8px;display:block">Lebenslauf hochladen</label>
<div class="cv-drop" id="cvDrop">
<input type="file" id="cvFile" accept=".pdf,.doc,.docx">
<div id="cvPlaceholder">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--g4)" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
<p style="color:var(--g3);font-size:.88rem;margin-top:8px;font-weight:600">Lebenslauf hier reinziehen</p>
<p style="color:var(--g5);font-size:.76rem;margin-top:4px">oder klicken zum Auswählen · PDF, DOC, DOCX</p>
</div>
<div id="cvFileInfo" style="display:none" class="cv-filename"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> <span id="cvName"></span></div>
</div>

<div style="display:flex;align-items:start;gap:10px;margin:16px 0"><input type="checkbox" id="recDsgvo" style="margin-top:4px;accent-color:var(--ac)"><label for="recDsgvo" style="font-size:.76rem;color:var(--g4);line-height:1.5">Ich habe die <a href="#/datenschutz" style="color:var(--ag)">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.</label></div>
</div>
<div class="fnl-btns">
<button class="fnl-back" onclick="recBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Zurück</button>
<button class="fnl-next" onclick="recSubmit()" style="background:var(--ct);box-shadow:0 4px 16px rgba(245,158,11,.25)">Bewerbung absenden <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
</div>
<p style="font-size:.7rem;color:var(--g5);margin-top:16px;text-align:center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> SSL-verschlüsselt · Antwort innerhalb von 48h · Kein Anschreiben nötig</p>
</div>

<!-- SUCCESS -->
<div class="fnl-step" id="recSuccess">
<div style="text-align:center;padding:60px 0">
<div style="width:64px;height:64px;border-radius:50%;background:rgba(16,185,129,.1);border:2px solid #10B981;display:flex;align-items:center;justify-content:center;margin:0 auto 24px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
<h2 style="font-size:1.6rem;margin-bottom:12px;color:var(--w)">Bewerbung gesendet!</h2>
<p style="color:var(--g3);font-size:1rem;line-height:1.7;max-width:440px;margin:0 auto 28px">Vielen Dank für dein Interesse an IAR Sicherheit. Wir schauen uns deine Bewerbung an und melden uns innerhalb von 48 Stunden bei dir.</p>
<a href="#/" class="btn btn-o">← Zurück zur Startseite</a>
</div>
</div>

</div></div>` }} />
}
