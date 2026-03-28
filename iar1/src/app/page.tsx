'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAnimateOnScroll, AnimateWrapper } from '@/lib/useAnimateOnScroll'
import { IAR, SERVICES, TRUST_NUMBERS, BRANCHES, JOB_OPENINGS } from '@/lib/utils'
import { SectionLabel, SectionTitle, SectionSub, Button, Badge, GlassCard, TrustCard, ServiceCard, BranchCard } from '@/components/ui'
import { ShieldIcon, LockIcon, CheckCircleIcon, AlertCircleIcon, ArrowRightIcon, PhoneIcon, MailIcon, BookOpenIcon, UsersIcon, GridIcon, CheckIcon, MapPinIcon, LayersIcon } from '@/lib/icons'
import { HeroLiveFeed } from '@/components/HeroLiveFeed'
import { SocialMediaSection } from '@/components/SocialMediaSection'
import { LogoTicker } from '@/components/LogoTicker'

// Service icon mapping
const serviceIcons: Record<string, { icon: React.ReactNode; colorClass: string }> = {
  shield: { icon: <ShieldIcon size={20} className="text-iar-accent-glow" />, colorClass: 'bg-[rgba(37,99,235,0.08)]' },
  building: { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10M9 6h.01M15 6h.01M9 10h.01M15 10h.01"/></svg>, colorClass: 'bg-[rgba(16,185,129,0.08)]' },
  clock: { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, colorClass: 'bg-[rgba(245,158,11,0.08)]' },
  alarm: { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>, colorClass: 'bg-[rgba(239,68,68,0.08)]' },
  users: { icon: <UsersIcon size={20} className="text-[#8B5CF6]" />, colorClass: 'bg-[rgba(139,92,246,0.08)]' },
  truck: { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, colorClass: 'bg-[rgba(6,182,212,0.08)]' },
}

export default function HomePage() {
  const scrollRef = useAnimateOnScroll()

  return (
    <div ref={scrollRef}>
      {/* ========== HERO ========== */}
      <section className="min-h-screen flex items-center relative pt-[120px] pb-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${IAR.images.team})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,10,20,0.97)] via-[rgba(6,10,20,0.9)] to-[rgba(6,10,20,0.78)]" />
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-iar-dark to-transparent z-[1]" />
        <div className="scan-line" />

        <div className="max-w-[1200px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative z-[4]">
          <div>
            <AnimateWrapper>
              <div className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-iar-accent-glow mb-5 flex items-center gap-2.5">
                <ShieldIcon size={15} /> Sicherheitsdienst Saarland & Heilbronn
              </div>
            </AnimateWrapper>

            <AnimateWrapper delay={80}>
              <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] mb-6 leading-[1.06]">
                Wir bewachen<br />Ihr <span className="gradient-text">Unternehmen.</span><br />24/7.
              </h1>
            </AnimateWrapper>

            <AnimateWrapper delay={160}>
              <p className="text-[1.1rem] text-iar-gray-300 mb-9 max-w-[500px] leading-[1.8]">
                Objektschutz, Werkschutz, Revierdienst und Alarmintervention — von echten Sicherheitsexperten. Persönlich. Zuverlässig. Rund um die Uhr.
              </p>
            </AnimateWrapper>

            <AnimateWrapper delay={240}>
              <div className="flex gap-3.5 flex-wrap">
                <Button href="/anfrage" variant="cta">
                  Angebot anfragen <ArrowRightIcon size={15} strokeWidth={2.5} />
                </Button>
                <Button href="/leistungen" variant="outline">
                  Leistungen ansehen
                </Button>
              </div>
            </AnimateWrapper>

            <AnimateWrapper delay={320}>
              <div className="flex gap-9 mt-11 pt-7 border-t border-iar-border">
                {[
                  { num: '15', suffix: '+', label: 'Jahre Erfahrung' },
                  { num: '24', suffix: '/7', label: 'Einsatzbereit' },
                  { num: '2', suffix: '', label: 'Regionen' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-[1.8rem] font-extrabold text-iar-white">
                      {stat.num}<span className="text-[1rem] text-iar-accent-glow font-semibold">{stat.suffix}</span>
                    </div>
                    <div className="text-[0.72rem] text-iar-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateWrapper>
          </div>

          {/* Hero Live Feed Card */}
          <AnimateWrapper delay={240} className="hidden lg:block">
            <HeroLiveFeed />
          </AnimateWrapper>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-[100px] relative">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel>Was wir machen</SectionLabel>
          <SectionTitle>Sicherheit, die man versteht.</SectionTitle>
          <SectionSub>Kein Fachchinesisch. Unsere Leistungen im Klartext.</SectionSub>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {SERVICES.map((service, i) => {
              const { icon, colorClass } = serviceIcons[service.icon] || serviceIcons.shield
              return (
                <AnimateWrapper key={service.slug} delay={i * 80}>
                  <ServiceCard
                    title={service.title}
                    description={service.description.slice(0, 120) + '...'}
                    tag={service.subtitle}
                    image={service.image}
                    icon={icon}
                    colorClass={colorClass}
                  />
                </AnimateWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== TRUST NUMBERS ========== */}
      <section className="py-[100px] bg-iar-surface border-t border-b border-iar-border relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.02] pointer-events-none">
          <ShieldIcon size={300} strokeWidth={0.5} className="text-iar-accent-glow" />
        </div>
        <div className="max-w-[1200px] mx-auto px-7 text-center">
          <SectionLabel className="justify-center" icon={<CheckCircleIcon size={14} />}>
            Nachgewiesene Kompetenz
          </SectionLabel>
          <SectionTitle className="mx-auto">Zahlen sprechen lassen.</SectionTitle>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {TRUST_NUMBERS.map((t, i) => (
              <AnimateWrapper key={t.label} delay={i * 80}>
                <TrustCard value={t.value} label={t.label} description={t.description} />
              </AnimateWrapper>
            ))}
          </div>

          <div className="bg-iar-surface">
            <LogoTicker />
          </div>
        </div>
      </section>

      {/* ========== BRANCHEN ========== */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<GridIcon size={14} />}>Spezialisiert auf Ihre Branche</SectionLabel>
          <SectionTitle>Sicherheit, die Ihre Sprache spricht.</SectionTitle>
          <SectionSub>Jede Branche hat eigene Herausforderungen. Wir kennen sie.</SectionSub>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {BRANCHES.map((branch, i) => (
              <AnimateWrapper key={branch.slug} delay={i * 80}>
                <BranchCard
                  title={branch.title}
                  description={branch.description}
                  image={branch.image}
                  href={`/branchen/${branch.slug}`}
                  isSpecial={branch.isSpecial}
                />
              </AnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GF SECTION ========== */}
      <section className="py-[100px] bg-iar-surface border-t border-b border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
            <div className="relative">
              <Image
                src={IAR.gf.image}
                alt={IAR.gf.name}
                width={600}
                height={800}
                className="w-full rounded-[var(--radius-md)] border border-iar-border"
              />
              <div className="absolute bottom-[-16px] left-6 bg-iar-accent text-white px-5 py-2.5 rounded-[var(--radius-sm)] font-heading font-bold text-[0.8rem] flex items-center gap-1.5 shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                <ShieldIcon size={14} strokeWidth={2.5} /> 15+ Jahre Erfahrung
              </div>
            </div>

            <div>
              <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}>
                Ihr Ansprechpartner
              </SectionLabel>
              <SectionTitle>{IAR.gf.name}</SectionTitle>
              <p className="text-[0.9rem] text-iar-cta font-semibold mb-3.5">{IAR.gf.title}</p>
              <SectionSub className="max-w-full">
                Seit über einem Jahrzehnt in der Sicherheitsbranche. Hat IAR Sicherheit zu einem der führenden Anbieter in Saarland und Heilbronn aufgebaut. Maßgeschneiderte Konzepte statt Lösungen von der Stange.
              </SectionSub>

              <div className="flex gap-4 mt-7 flex-wrap">
                <div className="flex items-center gap-2.5 px-[18px] py-3 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                  <PhoneIcon size={18} className="text-iar-accent-glow" />
                  <a href={IAR.phoneHref} className="text-iar-white font-semibold text-[0.86rem]">{IAR.phone}</a>
                </div>
                <div className="flex items-center gap-2.5 px-[18px] py-3 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                  <MailIcon size={18} className="text-iar-accent-glow" />
                  <a href={IAR.emailHref} className="text-iar-white font-semibold text-[0.86rem]">{IAR.email}</a>
                </div>
              </div>

              <div className="mt-6">
                <Button href="/ueber-uns" variant="outline" className="text-[0.8rem] px-[22px] py-2.5">
                  Mehr über IAR erfahren →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL MEDIA SCROLL-LOCK ========== */}
      <SocialMediaSection />

      {/* ========== FUNNEL CTA ========== */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="bg-gradient-to-br from-iar-accent to-[#1D4ED8] rounded-[20px] p-14 grid grid-cols-1 lg:grid-cols-2 gap-11 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${IAR.images.einsatz})` }} />
            <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-[1]">
              <Badge variant="cta" className="mb-3.5">
                <LockIcon size={10} strokeWidth={2.5} /> In 60 Sekunden
              </Badge>
              <h2 className="text-white text-[clamp(1.5rem,3vw,2.2rem)] mb-3 font-heading font-bold">
                Unverbindliches Angebot anfragen.
              </h2>
              <p className="text-white/75 text-[1rem] leading-[1.8] mb-7">
                Sagen Sie uns was Sie brauchen — wir melden uns innerhalb von 24 Stunden.
              </p>
              <Button href="/anfrage" variant="white">
                Jetzt anfragen <ArrowRightIcon size={15} strokeWidth={2.5} />
              </Button>
            </div>

            <div className="relative z-[1] flex flex-col gap-3">
              {['Branche & Standort angeben', 'Gewünschte Leistungen wählen', 'Kontaktdaten hinterlassen'].map((text, i) => (
                <div key={i} className="flex items-center gap-3.5 px-[18px] py-3.5 bg-white/[0.08] rounded-[var(--radius-sm)] border border-white/10 backdrop-blur-[8px]">
                  <div className="w-8 h-8 rounded-[var(--radius-xs)] bg-white/[0.15] flex items-center justify-center font-heading font-bold text-white text-[0.8rem] shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-white/85 text-[0.84rem] font-medium">{text}</span>
                </div>
              ))}
              <div className="flex items-center gap-3.5 px-[18px] py-3.5 bg-white/[0.08] rounded-[var(--radius-sm)] border border-white/10 backdrop-blur-[8px]">
                <div className="w-8 h-8 rounded-[var(--radius-xs)] bg-white/[0.15] flex items-center justify-center shrink-0">
                  <CheckIcon size={13} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-white/85 text-[0.84rem] font-medium">Wir melden uns in 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG PREVIEW ========== */}
      <section className="py-[100px] bg-iar-surface border-t border-iar-border">
        <div className="max-w-[1200px] mx-auto px-7">
          <SectionLabel icon={<BookOpenIcon size={14} />}>Ratgeber</SectionLabel>
          <SectionTitle>Wissen rund um Sicherheit.</SectionTitle>
          <SectionSub>Praxis-Tipps und Fachwissen von Geschäftsführer David Rosenfeldt.</SectionSub>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { title: 'Was kostet ein Sicherheitsdienst im Saarland?', desc: 'Alle Kostenfaktoren: Von Stundensätzen bis zum Komplettpaket.', tag: 'Objektschutz', time: '5 Min', image: IAR.images.objektschutz },
              { title: 'Werkschutz vs. Objektschutz: Der Unterschied', desc: 'Zwei Begriffe, oft verwechselt. Wann Sie was brauchen.', tag: 'Werkschutz', time: '4 Min', image: IAR.images.empfang },
              { title: 'Einbruchschutz für Unternehmen: 7 Tipps', desc: 'Praktische Maßnahmen, die sofort wirken.', tag: 'Saarbrücken', time: '6 Min', image: IAR.images.revierdienst },
            ].map((post, i) => (
              <AnimateWrapper key={i} delay={i * 80}>
                <div className="bg-iar-card rounded-[var(--radius-md)] overflow-hidden border border-iar-border transition-all duration-400 hover:border-iar-border-hover hover:-translate-y-1 group">
                  <div className="h-[180px] relative overflow-hidden">
                    <Image src={post.image} alt={post.title} width={600} height={360} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-[var(--radius-xs)] text-[0.66rem] font-semibold bg-[rgba(6,10,20,0.75)] backdrop-blur-[8px] text-iar-accent-glow border border-iar-glass-border">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-[22px]">
                    <h3 className="text-[0.98rem] mb-2 leading-[1.4]">{post.title}</h3>
                    <p className="text-[0.8rem] text-iar-gray-400 leading-[1.65] mb-3.5">{post.desc}</p>
                    <div className="flex items-center gap-2.5 text-[0.7rem] text-iar-gray-500">
                      <span>David Rosenfeldt</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-iar-gray-500" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </AnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========== KARRIERE TEASER ========== */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <SectionLabel icon={<UsersIcon size={14} />}>Karriere bei IAR</SectionLabel>
              <SectionTitle>Dein neuer Job in der Sicherheit.</SectionTitle>
              <SectionSub>Faire Bezahlung, unbefristete Verträge, familiäres Team. Bewirb dich in 90 Sekunden.</SectionSub>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                {[
                  { icon: <CheckIcon size={14} className="text-iar-accent-glow" strokeWidth={2.5} />, title: 'Unbefristeter Vertrag', desc: 'Sicherheit auch für dich' },
                  { icon: <LayersIcon size={14} className="text-iar-accent-glow" />, title: 'Faire Bezahlung', desc: 'Übertariflich + Zuschläge' },
                  { icon: <BookOpenIcon size={14} className="text-iar-accent-glow" />, title: 'Weiterbildung', desc: '§34a & mehr, wir zahlen' },
                  { icon: <MapPinIcon size={14} className="text-iar-accent-glow" />, title: 'Regionale Einsätze', desc: 'Keine langen Anfahrten' },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-3.5 bg-iar-card rounded-[var(--radius-sm)] border border-iar-border">
                    <div className="w-8 h-8 rounded-[var(--radius-xs)] bg-iar-accent-soft flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-[0.84rem] font-semibold mb-0.5">{b.title}</h4>
                      <p className="text-[0.76rem] text-iar-gray-400 leading-[1.5]">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Button href="/karriere/bewerben" variant="primary">
                  Jetzt bewerben <ArrowRightIcon size={15} strokeWidth={2.5} />
                </Button>
              </div>
            </div>

            <div>
              <Image
                src={IAR.images.karriere}
                alt="Karriere bei IAR Sicherheit"
                width={600}
                height={400}
                className="w-full rounded-[var(--radius-md)] mb-4 border border-iar-border h-[200px] object-cover"
              />
              <div className="flex flex-col gap-2.5">
                {JOB_OPENINGS.map((job, i) => (
                  <Link key={i} href="/karriere/bewerben" className="bg-iar-card border border-iar-border rounded-[var(--radius-sm)] p-[18px] flex items-center gap-3.5 transition-all duration-300 cursor-pointer hover:border-iar-accent-border hover:bg-iar-accent-soft">
                    <div>
                      <div className="text-[0.88rem] text-iar-white font-semibold">{job.title}</div>
                      <div className="text-[0.76rem] text-iar-gray-400 mt-0.5">{job.location} · {job.type} · {job.contract}</div>
                    </div>
                    <span className={`ml-auto px-2.5 py-1 rounded-[6px] text-[0.66rem] font-semibold border ${job.badge === 'Neu' ? 'bg-iar-cta-soft text-iar-cta border-[rgba(245,158,11,0.15)]' : 'bg-[rgba(16,185,129,0.08)] text-iar-success border-[rgba(16,185,129,0.15)]'}`}>
                      {job.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
