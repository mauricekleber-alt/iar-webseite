import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel, SectionTitle, SectionSub, Button } from '@/components/ui'
import { BookOpenIcon, ArrowRightIcon, ShieldIcon } from '@/lib/icons'
import { IAR } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Ratgeber — Wissen rund um Sicherheit',
  description: 'Praxis-Tipps, Checklisten und Fachwissen von Geschaeftsfuehrer David Rosenfeldt. Objektschutz, Werkschutz, Einbruchschutz und mehr.',
  alternates: { canonical: 'https://iar-sicherheit.de/ratgeber' },
}

// Placeholder articles until Payload CMS is connected
const PLACEHOLDER_ARTICLES = [
  { slug: 'was-kostet-sicherheitsdienst-saarland', title: 'Was kostet ein Sicherheitsdienst im Saarland?', intro: 'Alle Kostenfaktoren auf einen Blick: Von Stundensaetzen bis zum Komplettpaket — transparent erklaert.', category: 'Objektschutz', region: 'Saarland', image: '/images/objektschutz.jpg', readTime: '5 Min' },
  { slug: 'werkschutz-vs-objektschutz', title: 'Werkschutz vs. Objektschutz: Der Unterschied', intro: 'Zwei Begriffe, die oft verwechselt werden. Wir erklaeren den Unterschied und wann Sie was brauchen.', category: 'Werkschutz', region: 'Ueberregional', image: '/images/werkschutz.jpg', readTime: '4 Min' },
  { slug: 'einbruchschutz-unternehmen-saarbruecken', title: 'Einbruchschutz fuer Unternehmen in Saarbruecken: 7 Tipps', intro: 'Praktische Massnahmen, die sofort wirken. Vom Sicherheitsexperten fuer die Region empfohlen.', category: 'Sicherheitstipps', region: 'Saarbruecken', image: '/images/revierdienst.jpg', readTime: '6 Min' },
  { slug: '34a-sachkundepruefung-saarland', title: 'Die 34a-Sachkundepruefung: Alles was du wissen musst', intro: 'Voraussetzungen, Ablauf, Kosten und Tipps fuer die Pruefung im Saarland.', category: 'Karriere', region: 'Saarland', image: '/images/karriere.jpg', readTime: '8 Min' },
  { slug: 'sicherheitsdienst-fuer-banken', title: 'Sicherheitsdienst fuer Banken: Worauf es ankommt', intro: 'Banken haben besondere Sicherheitsanforderungen. Wir erklaeren was ein guter Partner mitbringen muss.', category: 'Bankensicherheit', region: 'Ueberregional', image: '/images/einsatz.jpg', readTime: '5 Min' },
  { slug: 'revierdienst-oder-objektschutz', title: 'Revierdienst oder Objektschutz — Was passt zu Ihnen?', intro: 'Nicht jedes Unternehmen braucht einen permanenten Wachschutz. Wir helfen bei der Entscheidung.', category: 'Revierdienst', region: 'Saarland', image: '/images/empfang.jpg', readTime: '4 Min' },
]

export default function RatgeberPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[160px] pb-16 text-center relative overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-7 relative">
          <SectionLabel className="justify-center" icon={<BookOpenIcon size={14} />}>Ratgeber</SectionLabel>
          <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-heading font-bold mb-4">
            Wissen rund um <span className="gradient-text">Sicherheit.</span>
          </h1>
          <p className="text-iar-gray-300 text-[1.05rem] max-w-[560px] mx-auto leading-[1.8]">
            Praxis-Tipps, Checklisten und Fachwissen — von Geschaeftsfuehrer David Rosenfeldt persoenlich.
          </p>
        </div>
      </section>

      {/* Author Info */}
      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="flex items-center gap-4 p-5 bg-iar-card border border-iar-border rounded-[var(--radius-md)] max-w-[500px] mx-auto">
            <Image src={IAR.gf.image} alt={IAR.gf.name} width={56} height={56} className="w-14 h-14 rounded-[var(--radius-sm)] object-cover border-2 border-iar-border" />
            <div>
              <div className="text-iar-white font-bold text-[0.95rem] font-heading">{IAR.gf.name}</div>
              <div className="text-[#F59E0B] text-[0.78rem] font-semibold">Geschaeftsfuehrer &amp; Autor</div>
              <div className="text-iar-gray-400 text-[0.78rem]">Ueber 15 Jahre Erfahrung in der Sicherheitsbranche</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEHOLDER_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/ratgeber/${article.slug}`}
                className="bg-iar-card rounded-[var(--radius-md)] overflow-hidden border border-iar-border transition-all duration-400 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1 group"
              >
                <div className="h-[180px] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-[var(--radius-xs)] text-[0.66rem] font-semibold bg-[rgba(6,10,20,0.75)] backdrop-blur-[8px] text-iar-accent-glow border border-[rgba(255,255,255,0.08)]">
                      {article.category}
                    </span>
                    <span className="px-3 py-1 rounded-[var(--radius-xs)] text-[0.66rem] font-semibold bg-[rgba(6,10,20,0.75)] backdrop-blur-[8px] text-[#F59E0B] border border-[rgba(255,255,255,0.08)]">
                      {article.region}
                    </span>
                  </div>
                </div>
                <div className="p-[22px]">
                  <h2 className="text-[0.98rem] font-heading font-bold mb-2 leading-[1.4]">{article.title}</h2>
                  <p className="text-[0.8rem] text-iar-gray-400 leading-[1.65] mb-3.5">{article.intro}</p>
                  <div className="flex items-center gap-2.5 text-[0.7rem] text-iar-gray-500">
                    <span>David Rosenfeldt</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-iar-gray-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-iar-surface border-t border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7 text-center">
          <ShieldIcon size={32} className="text-iar-accent-glow mx-auto mb-4 opacity-50" />
          <h2 className="text-[1.6rem] font-heading font-bold mb-3">
            Sicherheitsberatung gewuenscht?
          </h2>
          <p className="text-iar-gray-300 max-w-[460px] mx-auto mb-7">
            Unsere Artikel helfen bei der Orientierung — fuer ein konkretes Angebot sind wir nur einen Klick entfernt.
          </p>
          <Button href="/anfrage" variant="cta">
            Angebot anfragen <ArrowRightIcon size={14} strokeWidth={2.5} />
          </Button>
        </div>
      </section>
    </>
  )
}
