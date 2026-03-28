'use client'

import Image from 'next/image'
import { IAR } from '@/lib/utils'
import { GlassCard } from '@/components/ui'
import { ShieldIcon, LockIcon, CheckCircleIcon, AlertCircleIcon } from '@/lib/icons'

const feedItems = [
  { icon: <ShieldIcon size={15} />, iconClass: 'bg-[rgba(16,185,129,0.08)]', iconColor: 'text-iar-success', title: 'Rundgang abgeschlossen', sub: 'Objekt Saarbrücken-Mitte', time: 'vor 8 Min' },
  { icon: <LockIcon size={15} />, iconClass: 'bg-[rgba(37,99,235,0.08)]', iconColor: 'text-iar-accent-glow', title: 'Objekt gesichert', sub: 'Werkschutz Wadern', time: 'Live' },
  { icon: <CheckCircleIcon size={15} />, iconClass: 'bg-[rgba(16,185,129,0.08)]', iconColor: 'text-iar-success', title: 'Alarm deaktiviert', sub: 'Industriepark Wadern', time: 'vor 23 Min' },
  { icon: <AlertCircleIcon size={15} />, iconClass: 'bg-[rgba(245,158,11,0.08)]', iconColor: 'text-iar-cta', title: 'Revierdienst aktiv', sub: '3 Objekte in Bearbeitung', time: 'vor 1 Std' },
]

export function HeroLiveFeed() {
  return (
    <GlassCard className="max-w-[440px]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-iar-border">
        <Image
          src={IAR.gf.image}
          alt={IAR.gf.name}
          width={36}
          height={36}
          className="w-9 h-9 rounded-[10px] object-cover border-2 border-iar-border"
        />
        <div className="text-[0.8rem] text-iar-gray-400">
          <strong className="text-iar-white block text-[0.88rem] font-semibold">Live Einsatzübersicht</strong>
          Alle Systeme aktiv
        </div>
        <span className="ml-auto w-2 h-2 rounded-full bg-iar-success status-pulse" />
      </div>

      {/* Feed Items */}
      <div className="flex flex-col gap-2">
        {feedItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-[11px] px-3.5 bg-white/[0.02] rounded-[var(--radius-sm)] border border-transparent text-[0.8rem] transition-all duration-300 hover:border-iar-accent-border hover:bg-iar-accent-soft"
          >
            <div className={`w-[34px] h-[34px] rounded-[var(--radius-xs)] flex items-center justify-center shrink-0 ${item.iconClass}`}>
              <span className={item.iconColor}>{item.icon}</span>
            </div>
            <div>
              <div className="text-iar-white font-semibold text-[0.8rem]">{item.title}</div>
              <div className="text-iar-gray-500 text-[0.7rem]">{item.sub}</div>
            </div>
            <span className="ml-auto text-iar-gray-500 text-[0.68rem] font-medium whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
