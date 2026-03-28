// src/components/SocialBar.tsx
// Top bar above navigation with social media icons + phone/email

import { IAR } from '@/lib/utils'

export function TikTokIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z"/>
    </svg>
  )
}

export function InstagramIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="5"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

export function FacebookIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

export function LinkedInIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
    </svg>
  )
}

export function SocialBar() {
  const socials = [
    { href: 'https://tiktok.com/@iarsicherheit', label: 'TikTok', icon: <TikTokIcon size={14} /> },
    { href: 'https://instagram.com/iarsicherheit', label: 'Instagram', icon: <InstagramIcon size={14} /> },
    { href: 'https://facebook.com/iarsicherheit', label: 'Facebook', icon: <FacebookIcon size={14} /> },
    { href: 'https://linkedin.com/company/iar-sicherheit', label: 'LinkedIn', icon: <LinkedInIcon size={14} /> },
  ]

  return (
    <div className="w-full bg-iar-surface border-b border-iar-border relative z-[60]">
      <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between h-9">
        <div className="flex items-center gap-2 text-[0.72rem] text-iar-gray-400">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <a href={IAR.phoneHref} className="hover:text-iar-white transition-colors">{IAR.phone}</a>
          <span className="text-iar-gray-500 mx-1">|</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href={IAR.emailHref} className="hover:text-iar-white transition-colors">{IAR.email}</a>
        </div>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`IAR Sicherheit auf ${s.label}`}
              className="w-7 h-7 flex items-center justify-center rounded-[var(--radius-xs)] text-iar-gray-400 hover:text-iar-accent-glow hover:bg-iar-accent-soft transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
