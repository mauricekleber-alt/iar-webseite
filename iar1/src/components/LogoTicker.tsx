'use client'

// src/components/LogoTicker.tsx
// Infinite horizontal scroll of membership logos — slow, smooth, DSGVO-safe (no external tracking)

import Image from 'next/image'
import { IAR } from '@/lib/utils'

const logos = [
  { src: IAR.logos.bvwsw, alt: 'BVWSW Gründungsmitglied', h: 38 },
  { src: IAR.logos.verband, alt: 'Sicherheitsverband Mitglied', h: 32 },
  { src: IAR.logos.bdsw, alt: 'BDSW Mitglied', h: 38 },
  { src: IAR.logos.bvwsw, alt: 'BVWSW Gründungsmitglied', h: 38 },
  { src: IAR.logos.verband, alt: 'Sicherheitsverband Mitglied', h: 32 },
  { src: IAR.logos.bdsw, alt: 'BDSW Mitglied', h: 38 },
]

export function LogoTicker() {
  return (
    <div className="w-full overflow-hidden py-8 border-t border-iar-border relative" aria-label="Mitgliedschaften und Zertifizierungen">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-iar-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-iar-surface to-transparent z-10 pointer-events-none" />

      <div className="flex animate-ticker">
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-12 flex items-center gap-3 opacity-40 hover:opacity-70 transition-opacity">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="grayscale brightness-[2] transition-all"
              style={{ height: `${logo.h}px`, width: 'auto' }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
          width: max-content;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
