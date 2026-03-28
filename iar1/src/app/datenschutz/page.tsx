import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklaerung der IAR Sicherheit GmbH gemaess DSGVO.',
  robots: 'noindex, follow',
}

export default function DatenschutzPage() {
  return (
    <div className="pt-[160px] pb-[100px]">
      <div className="max-w-[800px] mx-auto px-7">
        <h1 className="text-[2rem] font-heading font-bold mb-4">Datenschutzerklaerung</h1>
        <p className="text-iar-gray-400 text-[0.85rem] mb-8">Stand: Januar 2025</p>

        <div className="space-y-8 text-iar-gray-300 text-[0.92rem] leading-[1.8]">
          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Praeambel</h2>
            <p>
              Mit der folgenden Datenschutzerklaerung moechten wir Sie darueber aufklaeren, welche Arten Ihrer personenbezogenen Daten wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklaerung gilt fuer alle von uns durchgefuehrten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepraesenzen.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Verantwortlicher</h2>
            <p>
              IAR Sicherheit GmbH<br />
              Geschaeftsfuehrer: David Rosenfeldt<br />
              Schlosshof 2<br />
              66564 Ottweiler<br />
              Deutschland<br /><br />
              E-Mail: info(at)iar-sicherheit.de<br />
              Telefon: +49 (0) 6824 302528<br />
              Impressum: <a href="/impressum" className="text-iar-accent-glow hover:underline">iar-sicherheit.de/impressum</a>
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Kontakt Datenschutzbeauftragter</h2>
            <p>
              Kompass Datenschutz GmbH<br />
              Externer Datenschutzbeauftragter: Michael Knauber<br />
              E-Mail: knauber (at) kompass-datenschutz.de<br />
              Telefon: 02233 / 6290596
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Uebersicht der Verarbeitungen</h2>
            <p className="mb-3">Die nachfolgende Uebersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen:</p>
            <h3 className="text-[1rem] font-heading font-bold text-iar-white mb-2">Arten der verarbeiteten Daten</h3>
            <p>Bestandsdaten, Beschaeftigtendaten, Zahlungsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten, Bewerberdaten.</p>
            <h3 className="text-[1rem] font-heading font-bold text-iar-white mb-2 mt-4">Kategorien betroffener Personen</h3>
            <p>Beschaeftigte, Interessenten, Kommunikationspartner, Nutzer, Bewerber, Geschaefts- und Vertragspartner, Hinweisgeber.</p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Rechtsgrundlagen</h2>
            <p>Wir verarbeiten personenbezogene Daten auf Basis folgender Rechtsgrundlagen der DSGVO:</p>
            <div className="mt-3 space-y-2">
              {[
                'Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)',
                'Vertragerfuellung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)',
                'Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)',
                'Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)',
              ].map((basis) => (
                <div key={basis} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iar-accent-glow mt-1 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-[0.88rem]">{basis}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Sicherheitsmassnahmen</h2>
            <p>
              Wir treffen nach Massgabe der gesetzlichen Vorgaben unter Beruecksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstaende und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos fuer die Rechte und Freiheiten natuerlicher Personen, geeignete technische und organisatorische Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewaehrleisten.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Cookies</h2>
            <p>
              Wir setzen Cookies ein. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgeraet gespeichert werden. Einige Cookies sind technisch notwendig fuer den Betrieb der Website. Andere Cookies werden nur mit Ihrer ausdruecklichen Einwilligung gesetzt (z.B. fuer Analyse und Marketing). Sie koennen Ihre Einwilligung jederzeit ueber unseren Cookie-Banner widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Kontaktaufnahme</h2>
            <p>
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Massnahmen erforderlich ist. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b DSGVO (vorvertragliche Anfragen) bzw. Art. 6 Abs. 1 S. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Bewerbungsverfahren</h2>
            <p>
              Im Rahmen des Bewerbungsverfahrens werden personenbezogene Daten der Bewerber verarbeitet, soweit dies fuer die Begruendung eines Beschaeftigungsverhaeltnisses erforderlich ist. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b DSGVO (Vertragsanbahnung) i.V.m. Paragraph 26 BDSG.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Ihre Rechte</h2>
            <p>Sie haben folgende Rechte gegenueber uns:</p>
            <div className="mt-3 space-y-2">
              {[
                'Auskunftsrecht (Art. 15 DSGVO)',
                'Recht auf Berichtigung (Art. 16 DSGVO)',
                'Recht auf Loeschung (Art. 17 DSGVO)',
                'Recht auf Einschraenkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Datenuebertragbarkeit (Art. 20 DSGVO)',
                'Widerspruchsrecht (Art. 21 DSGVO)',
                'Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)',
                'Beschwerderecht bei einer Aufsichtsbehoerde (Art. 77 DSGVO)',
              ].map((right) => (
                <div key={right} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iar-accent-glow mt-1 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-[0.88rem]">{right}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Hinweisgebersystem</h2>
            <p>
              Informationen zu unserem Hinweisgebersystem finden Sie unter:{' '}
              <a href="https://iar-sicherheit-gmbh.hinweis.digital/" target="_blank" rel="noopener noreferrer" className="text-iar-accent-glow hover:underline">
                iar-sicherheit-gmbh.hinweis.digital
              </a>
            </p>
          </section>

          <section className="pt-4 border-t border-iar-border">
            <p className="text-[0.82rem] text-iar-gray-500">
              Die vollstaendige Datenschutzerklaerung mit allen Details zu eingesetzten Diensten, Cookies und Tracking-Technologien wird regelmaessig aktualisiert. Bei Fragen wenden Sie sich an unseren Datenschutzbeauftragten.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
