'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionLabel, SectionTitle, SectionSub } from '@/components/ui'
import { TikTokIcon, InstagramIcon } from '@/components/SocialBar'

// Placeholder video thumbnails (replace with real social media content)
const videos = [
  { id: 1, platform: 'tiktok', title: 'Nachtrundgang im Industriepark', views: '12.4K', thumbnail: '/images/iar-team.jpg' },
  { id: 2, platform: 'instagram', title: 'Ein Tag als Sicherheitsmitarbeiter', views: '8.7K', thumbnail: '/images/werkschutz.jpg' },
  { id: 3, platform: 'tiktok', title: 'So sichern wir Ihr Unternehmen', views: '15.2K', thumbnail: '/images/revierdienst.jpg' },
]

export function SocialMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Calculate how far we've scrolled through the sticky section
      if (sectionTop <= 0 && sectionTop > -(sectionHeight - viewportHeight)) {
        const scrolled = Math.abs(sectionTop)
        const totalScroll = sectionHeight - viewportHeight
        const pct = Math.min(scrolled / totalScroll, 1)
        setProgress(pct)

        // Map progress to video index
        const videoIndex = Math.min(Math.floor(pct * videos.length), videos.length - 1)
        setActiveVideo(videoIndex)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${100 + videos.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-iar-dark">
        <div className="max-w-[1200px] mx-auto px-7 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[2]">
          {/* Left: Text */}
          <div>
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            }>
              Folgen Sie uns
            </SectionLabel>
            <SectionTitle>Wir sind auch auf Social Media.</SectionTitle>
            <SectionSub className="mb-8">
              Schauen Sie hinter die Kulissen — Einblicke in unseren Arbeitsalltag, Tipps zur Sicherheit und offene Stellen. Folgen Sie uns auf unseren Kanälen.
            </SectionSub>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap mb-8">
              {[
                { label: 'TikTok', icon: <TikTokIcon size={16} />, href: 'https://tiktok.com/@iarsicherheit', followers: '2.4K' },
                { label: 'Instagram', icon: <InstagramIcon size={16} />, href: 'https://instagram.com/iarsicherheit', followers: '1.8K' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-iar-card border border-iar-border rounded-[var(--radius-sm)] hover:border-iar-accent-border hover:bg-iar-accent-soft transition-all group"
                >
                  <span className="text-iar-gray-400 group-hover:text-iar-accent-glow transition-colors">{s.icon}</span>
                  <div>
                    <div className="text-[0.88rem] text-iar-white font-semibold">{s.label}</div>
                    <div className="text-[0.72rem] text-iar-gray-500">{s.followers} Follower</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {videos.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeVideo ? 'w-8 bg-iar-accent-glow' : 'w-2 bg-iar-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[560px]">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[36px] border-[3px] border-[rgba(255,255,255,0.12)] bg-iar-card overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-iar-dark rounded-b-[14px] z-20" />

                {/* Status bar */}
                <div className="absolute top-[6px] left-4 right-4 flex justify-between items-center z-10 text-[0.6rem] text-iar-gray-400">
                  <span>9:41</span>
                  <div className="flex gap-1 items-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="17" y="4" width="5" height="16" rx="1"/><rect x="11" y="8" width="5" height="12" rx="1"/><rect x="5" y="12" width="5" height="8" rx="1"/></svg>
                  </div>
                </div>

                {/* Video Content Area */}
                <div className="absolute inset-0 pt-[32px]">
                  {videos.map((video, i) => (
                    <div
                      key={video.id}
                      className="absolute inset-0 pt-[32px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        opacity: i === activeVideo ? 1 : 0,
                        transform: `translateY(${(i - activeVideo) * 20}px)`,
                      }}
                    >
                      {/* Video thumbnail */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.3)]" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                        </div>
                      </div>

                      {/* Bottom overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-iar-accent flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          </div>
                          <div>
                            <div className="text-white text-[0.7rem] font-bold">IAR Sicherheit</div>
                            <div className="text-white/60 text-[0.6rem]">{video.views} Aufrufe</div>
                          </div>
                        </div>
                        <p className="text-white text-[0.72rem] leading-[1.4]">{video.title}</p>
                      </div>

                      {/* Side actions */}
                      <div className="absolute right-3 bottom-24 flex flex-col gap-4 items-center">
                        {[
                          <svg key="heart" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                          <svg key="comment" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
                          <svg key="share" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>,
                        ].map((icon, j) => (
                          <div key={j} className="text-white/80">{icon}</div>
                        ))}
                      </div>

                      {/* Platform badge */}
                      <div className="absolute top-[40px] right-3">
                        {video.platform === 'tiktok' ? (
                          <TikTokIcon size={18} className="text-white/70" />
                        ) : (
                          <InstagramIcon size={18} className="text-white/70" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow effect behind phone */}
              <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
