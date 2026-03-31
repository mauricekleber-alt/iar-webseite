'use client'

export default function AnfragePage() {
  return <div dangerouslySetInnerHTML={{ __html: `
<div class="fnl-wrap"><div class="fnl-inner">

<!-- Progress bar -->
<div class="fnl-progress" id="fnlProgress"></div>

<!-- STEP 0: Category selection -->
<div class="fnl-step active" id="fnlStep0">
<div class="sub-tag" style="margin-bottom:20px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Angebot anfragen</div>
<h1 class="fnl-q" style="font-size:1.8rem">Für welche Dienstleistung interessieren Sie sich?</h1>
<p class="fnl-sub">Wählen Sie eine Kategorie — wir stellen Ihnen dann ein paar kurze Fragen, um ein passendes Angebot zu erstellen.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px">
<div class="fnl-cat" onclick="selectCat('objektschutz')" id="cat-objektschutz"><div class="fnl-icon" style="background:rgba(37,99,235,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Objektschutz</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Gebäudebewachung & Zugangskontrolle</div></div></div>
<div class="fnl-cat" onclick="selectCat('werkschutz')" id="cat-werkschutz"><div class="fnl-icon" style="background:rgba(16,185,129,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Werkschutz</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Sicherheit auf Ihrem Werksgelände</div></div></div>
<div class="fnl-cat" onclick="selectCat('revierdienst')" id="cat-revierdienst"><div class="fnl-icon" style="background:rgba(245,158,11,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Revierdienst</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Mobile Patrouillen & Kontrollfahrten</div></div></div>
<div class="fnl-cat" onclick="selectCat('alarmintervention')" id="cat-alarmintervention"><div class="fnl-icon" style="background:rgba(239,68,68,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Alarmintervention</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Sofort-Reaktion bei Alarm</div></div></div>
<div class="fnl-cat" onclick="selectCat('empfangsdienst')" id="cat-empfangsdienst"><div class="fnl-icon" style="background:rgba(139,92,246,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Empfangsdienst</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">Professioneller Pfortendienst</div></div></div>
<div class="fnl-cat" onclick="selectCat('fahrdienst')" id="cat-fahrdienst"><div class="fnl-icon" style="background:rgba(6,182,212,.08)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div><div><div style="color:var(--w);font-weight:700;font-size:.95rem">Fahrdienst</div><div style="color:var(--g4);font-size:.78rem;margin-top:2px">VIP- & Werttransport</div></div></div>
<a href="#/" class="fnl-back" style="display:inline-flex;margin-top:4px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Zurück zur Startseite</a>
</div>
</div>

<!-- DYNAMIC QUESTION STEPS (rendered by JS) -->
<div id="fnlDynamic"></div>

<!-- CONTACT FORM STEP (last step, always same) -->
<div class="fnl-step" id="fnlContact">
<div class="sub-tag" style="margin-bottom:20px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Fast geschafft!</div>
<h2 class="fnl-q">Wie können wir Sie erreichen?</h2>
<p class="fnl-sub">Hinterlassen Sie Ihre Kontaktdaten und wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.</p>
<div class="hcard" style="max-width:100%;background:var(--dc)">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Vorname *</label><input id="fnlVorname" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="Max"></div>
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Nachname *</label><input id="fnlNachname" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="Mustermann"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">E-Mail *</label><input id="fnlEmail" type="email" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="max@firma.de"></div>
<div><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Telefon *</label><input id="fnlTel" type="tel" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="+49 6824 302528"></div>
</div>
<div style="margin-bottom:12px"><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Unternehmen</label><input id="fnlFirma" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none" placeholder="Firma GmbH"></div>
<div style="margin-bottom:12px"><label style="font-size:.74rem;font-weight:600;color:var(--g4);text-transform:uppercase;margin-bottom:6px;display:block">Nachricht</label><textarea id="fnlMsg" rows="3" style="width:100%;padding:12px 16px;background:var(--ds);border:1.5px solid var(--db);border-radius:var(--rx);color:var(--w);font-size:.88rem;outline:none;resize:vertical" placeholder="Besondere Anforderungen oder Anmerkungen..."></textarea></div>
<div style="display:flex;align-items:start;gap:10px;margin-bottom:16px"><input type="checkbox" id="fnlDsgvo" style="margin-top:4px;accent-color:var(--ac)"><label for="fnlDsgvo" style="font-size:.76rem;color:var(--g4);line-height:1.5">Ich habe die <a href="#/datenschutz" style="color:var(--ag)">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.</label></div>
</div>
<div class="fnl-btns">
<button class="fnl-back" onclick="fnlBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Zurück</button>
<button class="fnl-next" onclick="fnlSubmit()" style="background:var(--ct);box-shadow:0 4px 16px rgba(245,158,11,.25)">Angebot anfragen <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
</div>
<p style="font-size:.7rem;color:var(--g5);margin-top:16px;text-align:center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> SSL-verschlüsselt · Antwort innerhalb von 24h</p>
</div>

<!-- SUCCESS -->
<div class="fnl-step" id="fnlSuccess">
<div style="text-align:center;padding:60px 0">
<div style="width:64px;height:64px;border-radius:50%;background:rgba(16,185,129,.1);border:2px solid #10B981;display:flex;align-items:center;justify-content:center;margin:0 auto 24px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
<h2 style="font-size:1.6rem;margin-bottom:12px;color:var(--w)">Anfrage gesendet!</h2>
<p style="color:var(--g3);font-size:1rem;line-height:1.7;max-width:440px;margin:0 auto 28px">Vielen Dank für Ihre Anfrage. David Rosenfeldt meldet sich innerhalb von 24 Stunden persönlich bei Ihnen.</p>
<a href="#/" class="btn btn-o">← Zurück zur Startseite</a>
</div>
</div>

</div></div>` }} />
}
