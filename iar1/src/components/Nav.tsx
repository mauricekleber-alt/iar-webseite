'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn, IAR } from '@/lib/utils'
import { ShieldIcon, PhoneIcon } from '@/lib/icons'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/branchen/banken', label: 'Branchen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/karriere', label: 'Karriere' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-3.5 transition-all duration-400',
        scrolled && 'bg-[rgba(6,10,20,0.9)] backdrop-blur-[24px] backdrop-saturate-[1.2] border-b border-iar-border'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between">
        <Link href="/">
          <Image
            src={IAR.logo}
            alt={IAR.name}
            width={160}
            height={65}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.84rem] font-medium text-iar-gray-400 hover:text-iar-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={IAR.phoneHref}
            className="flex items-center gap-1.5 text-iar-gray-400 text-[0.82rem] font-medium"
          >
            <PhoneIcon size={13} />
            {IAR.phone}
          </a>

          <Link
            href="/anfrage"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-iar-accent text-white rounded-[var(--radius-xs)] font-semibold text-[0.8rem] shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:-translate-y-px transition-all"
          >
            <ShieldIcon size={11} strokeWidth={2.5} />
            Angebot anfragen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-iar-white p-2" aria-label="Menü">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
