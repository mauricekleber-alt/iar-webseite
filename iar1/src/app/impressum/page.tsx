import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der IAR Sicherheit GmbH, Schlosshof 2, 66564 Ottweiler. Geschaeftsfuehrer David Rosenfeldt.',
  robots: 'noindex, follow',
}

export default function ImpressumPage() {
  return (
    <div className="pt-[160px] pb-[100px]">
      <div className="max-w-[800px] mx-auto px-7">
        <h1 className="text-[2rem] font-heading font-bold mb-8">Impressum</h1>

        <div className="prose-dark space-y-6 text-iar-gray-300 text-[0.92rem] leading-[1.8]">
          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Verantwortlich</h2>
            <p>
              IAR Sicherheit GmbH<br />
              Geschaeftsfuehrer: David Rosenfeldt<br />
              Schlosshof 2<br />
              66564 Ottweiler
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Kontakt</h2>
            <p>
              Fon: +49 (0) 6824 302528<br />
              Fax: +49 (0) 6824 701575<br />
              E-Mail: info(at)iar-sicherheit.de
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemaess Paragraph 27 a Umsatzsteuergesetz: DE 305574144</p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Registereintrag</h2>
            <p>Eintragung im Handelsregister. Amtsgericht Saarbruecken, Registernummer: HRB 103108</p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Hinweisgebersystem</h2>
            <p>
              <a href="https://iar-sicherheit-gmbh.hinweis.digital/" target="_blank" rel="noopener noreferrer" className="text-iar-accent-glow hover:underline">
                https://iar-sicherheit-gmbh.hinweis.digital/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Haftung fuer Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir fuer die eigenen Inhalte auf unseren Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen oder nach Hinweisen auf rechtswidrige Taetigkeiten zu suchen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Haftung fuer Links</h2>
            <p>
              Unser Angebot enthaelt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb koennen wir fuer diese fremden Inhalte auch keine Gewaehr uebernehmen. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf moegliche Rechtsverstoesse ueberprueft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h2 className="text-[1.2rem] font-heading font-bold text-iar-white mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
