import Link from 'next/link'
import Image from 'next/image'
import { IAR } from '@/lib/utils'
import { LockIcon } from '@/lib/icons'

export function Footer() {
  return (
    <footer className="pt-[60px] pb-7 border-t border-iar-border">
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image src={IAR.logo} alt={IAR.name} width={160} height={65} className="h-10 w-auto" />
            </Link>
            <p className="text-[0.8rem] text-iar-gray-400 mt-3 leading-[1.7] max-w-[300px]">
              Professioneller Sicherheitsdienst in Saarland und Heilbronn. Seit über 15 Jahren Ihr Partner.
            </p>
            <p className="mt-2 text-iar-gray-500 text-[0.76rem]">
              {IAR.address.street}, {IAR.address.zip} {IAR.address.city}
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-[0.76rem] text-iar-gray-300 font-semibold mb-3.5 uppercase tracking-[0.08em]">
              Leistungen
            </h4>
            {['Objektschutz', 'Werkschutz', 'Revierdienst', 'Alarmintervention', 'Empfangsdienst'].map((s) => (
              <Link
                key={s}
                href={`/leistungen/${s.toLowerCase()}`}
                className="block text-[0.8rem] text-iar-gray-500 py-0.5 hover:text-iar-accent-glow transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-[0.76rem] text-iar-gray-300 font-semibold mb-3.5 uppercase tracking-[0.08em]">
              Unternehmen
            </h4>
            {[
              { href: '/ueber-uns', label: 'Über IAR' },
              { href: '/branchen/banken', label: 'Bankensicherheit' },
              { href: '/ratgeber', label: 'Ratgeber' },
              { href: '/karriere', label: 'Karriere' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-[0.8rem] text-iar-gray-500 py-0.5 hover:text-iar-accent-glow transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-[0.76rem] text-iar-gray-300 font-semibold mb-3.5 uppercase tracking-[0.08em]">
              Rechtliches
            </h4>
            {[
              { href: '/impressum', label: 'Impressum' },
              { href: '/datenschutz', label: 'Datenschutz' },
              { href: '/hinweisgebersystem', label: 'Hinweisgebersystem' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-[0.8rem] text-iar-gray-500 py-0.5 hover:text-iar-accent-glow transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 border-t border-iar-border text-[0.73rem] text-iar-gray-500 gap-4">
          <span>© 2026 {IAR.name}</span>
          <div className="flex items-center gap-4">
            <LockIcon size={13} className="text-iar-gray-500" />
            <a href={IAR.phoneHref} className="text-iar-accent-glow hover:underline">{IAR.phone}</a>
            <a href={IAR.emailHref} className="text-iar-accent-glow hover:underline">{IAR.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
