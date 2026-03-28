// src/components/ui/index.tsx
import { cn } from '@/lib/utils'
import { ShieldIcon, LockIcon, ArrowRightIcon, CheckIcon } from '@/lib/icons'
import Image from 'next/image'
import Link from 'next/link'

// --- Section Label with icon ---
export function SectionLabel({ children, icon, className }: { children: React.ReactNode; icon?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-iar-accent-glow mb-3.5 flex items-center gap-2', className)}>
      {icon || <ShieldIcon size={14} className="opacity-70" />}
      {children}
    </div>
  )
}

// --- Section Title ---
export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('text-[clamp(1.8rem,4vw,2.8rem)] mb-4 font-heading', className)}>{children}</h2>
  )
}

// --- Section Subtitle ---
export function SectionSub({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-[1rem] text-iar-gray-300 max-w-[560px] leading-[1.8]', className)}>{children}</p>
  )
}

// --- Button ---
type ButtonVariant = 'primary' | 'cta' | 'outline' | 'white'
export function Button({ children, href, variant = 'primary', className, ...props }: {
  children: React.ReactNode; href?: string; variant?: ButtonVariant; className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = 'inline-flex items-center gap-2 px-[30px] py-3.5 rounded-[var(--radius-sm)] font-heading font-semibold text-[0.9rem] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer border-none relative overflow-hidden'
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-iar-accent text-white shadow-[0_4px_20px_rgba(37,99,235,0.3),0_0_0_1px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)]',
    cta: 'bg-iar-cta text-iar-dark shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:bg-iar-cta-hover hover:-translate-y-0.5',
    outline: 'bg-iar-glass text-iar-white border border-iar-glass-border backdrop-blur-[12px] hover:border-iar-accent-border hover:text-iar-accent-glow hover:bg-iar-accent-soft',
    white: 'bg-white text-iar-accent font-bold hover:bg-iar-cta hover:text-iar-dark hover:-translate-y-0.5',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button className={classes} {...props}>{children}</button>
}

// --- Badge ---
export function Badge({ children, variant = 'accent', className }: {
  children: React.ReactNode; variant?: 'accent' | 'cta'; className?: string
}) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.06em] uppercase backdrop-blur-[12px]',
      variant === 'accent' && 'bg-iar-accent-soft text-iar-accent-glow border border-iar-accent-border',
      variant === 'cta' && 'bg-iar-cta-soft text-iar-cta border border-[rgba(245,158,11,0.15)]',
      className
    )}>
      {children}
    </span>
  )
}

// --- Glass Card ---
export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('glass-card rounded-[20px] p-7 relative overflow-hidden', className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.4)] to-transparent" />
      {children}
    </div>
  )
}

// --- Trust Number Card ---
export function TrustCard({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="text-center py-7 px-4 bg-iar-card rounded-[var(--radius-md)] border border-iar-border relative overflow-hidden">
      <div className="absolute top-[-1px] left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-iar-accent-glow to-transparent opacity-40" />
      <div className="font-heading text-[2.4rem] font-extrabold gradient-text-gold">{value}</div>
      <div className="text-[0.95rem] text-iar-white font-semibold mt-1">{label}</div>
      <div className="text-[0.78rem] text-iar-gray-500 mt-1.5">{description}</div>
    </div>
  )
}

// --- Service Card (for homepage grid) ---
export function ServiceCard({ title, description, tag, image, icon, colorClass }: {
  title: string; description: string; tag: string; image: string; icon: React.ReactNode; colorClass: string
}) {
  return (
    <div className="bg-iar-card border border-iar-border rounded-[var(--radius-md)] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer relative gradient-top-bar hover:border-iar-border-hover hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group">
      <Image src={image} alt={title} width={600} height={320} className="w-full h-40 object-cover" />
      <div className="p-6">
        <div className={cn('w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center mb-3.5', colorClass)}>
          {icon}
        </div>
        <h3 className="text-[1.05rem] mb-2">{title}</h3>
        <p className="text-[0.84rem] text-iar-gray-400 leading-[1.7]">{description}</p>
        <span className="inline-flex items-center gap-1 mt-3.5 text-[0.7rem] text-iar-accent-glow font-semibold">
          <LockIcon size={11} />
          {tag}
        </span>
      </div>
    </div>
  )
}

// --- Branch Card ---
export function BranchCard({ title, description, image, href, isSpecial }: {
  title: string; description: string; image: string; href: string; isSpecial?: boolean
}) {
  return (
    <Link href={href} className="relative rounded-[var(--radius-md)] overflow-hidden h-[340px] cursor-pointer border border-iar-border transition-all duration-400 hover:border-iar-border-hover hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group block">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.06]" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,20,0.96)] via-[rgba(6,10,20,0.3)] to-transparent p-7 flex flex-col justify-end">
        {isSpecial && (
          <Badge variant="accent" className="self-start mb-2.5">
            <ShieldIcon size={10} strokeWidth={2.5} /> Spezial
          </Badge>
        )}
        <h3 className="text-[1.15rem] mb-2">{title}</h3>
        <p className="text-[0.8rem] text-iar-gray-300 mb-3.5 leading-[1.65]">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-iar-accent-glow text-[0.8rem] font-semibold">
          Mehr erfahren
          <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

// --- Feature Item (checkmark + text) ---
export function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[0.88rem] text-iar-gray-200">
      <CheckIcon size={14} className="text-iar-success flex-shrink-0" strokeWidth={2.5} />
      {children}
    </div>
  )
}

// --- "Auf gut Deutsch" Box ---
export function PlainBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.92rem] text-iar-gray-200 mb-[18px] leading-[1.8] p-4 pl-5 bg-iar-card rounded-[var(--radius-sm)] border-l-[3px] border-iar-cta">
      {children}
    </div>
  )
}
