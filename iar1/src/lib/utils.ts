// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// IAR Sicherheit Constants
export const IAR = {
  name: 'IAR Sicherheit GmbH',
  phone: '(06824) 302528',
  phoneHref: 'tel:+496824302528',
  email: 'info@iar-sicherheit.de',
  emailHref: 'mailto:info@iar-sicherheit.de',
  address: {
    street: 'Schlosshof 2',
    zip: '66564',
    city: 'Ottweiler',
    country: 'Germany',
  },
  gf: {
    name: 'David Rosenfeldt',
    title: 'Geschäftsführer & Gründer',
    image: '/images/david-rosenfeldt.jpg',
  },
  logo: '/images/iar-logo.png',
  images: {
    team: '/images/iar-team.jpg',
    werkschutz: '/images/werkschutz.jpg',
    revierdienst: '/images/revierdienst.jpg',
    objektschutz: '/images/objektschutz.jpg',
    empfang: '/images/empfang.jpg',
    fahrdienst: '/images/fahrdienst.jpg',
    alarm: '/images/alarm.jpg',
    karriere: '/images/karriere.jpg',
    einsatz: '/images/einsatz.jpg',
  },
  logos: {
    bvwsw: '/images/logo-bvwsw.png',
    bdsw: '/images/logo-bdsw.png',
    verband: '/images/logo-verband.png',
  },
} as const

export const SERVICES = [
  {
    slug: 'objektschutz',
    title: 'Objektschutz',
    subtitle: '24/7 Bewachung',
    plain: 'Auf gut Deutsch: Wir bewachen Ihr Gebäude. Tag und Nacht, 365 Tage im Jahr. Niemand kommt rein, der nicht rein soll.',
    description: 'Komplette physische Absicherung Ihrer Immobilie — von der Zugangskontrolle über Videoüberwachung bis zur VdS-zertifizierten Alarmaufschaltung.',
    features: [
      '24/7 Bewachung durch geschultes Personal',
      'Zugangskontrollen & Besuchermanagement',
      'Kameraüberwachung & Alarmsysteme',
      'VdS-zertifizierte Alarmaufschaltung',
    ],
    icon: 'shield',
    color: 'blue',
    image: '/images/objektschutz.jpg',
  },
  {
    slug: 'werkschutz',
    title: 'Werkschutz',
    subtitle: 'Industrie & Produktion',
    plain: 'Sicherheitsleute direkt bei Ihnen auf dem Werksgelände. Die kontrollieren wer rein- und rausgeht, machen Rundgänge und passen auf, dass alles sicher ist.',
    description: 'Werkschutz ist speziell für Industrie- und Produktionsgelände konzipiert. Unsere Mitarbeiter kennen die besonderen Anforderungen — von Gefahrgut bis Schichtbetrieb.',
    features: [
      'Tor-Management & Schrankensteuerung',
      'Regelmäßige Kontrollrundgänge',
      'LKW- & Lieferantenabfertigung',
      'Meldewesen & Dokumentation',
    ],
    icon: 'building',
    color: 'green',
    image: '/images/werkschutz.jpg',
  },
  {
    slug: 'revierdienst',
    title: 'Revierdienst & Alarmintervention',
    subtitle: 'Mobile Patrouille',
    plain: 'Unsere mobilen Teams fahren regelmäßig Ihre Standorte ab. Wenn ein Alarm auslöst, sind wir sofort da — nicht erst in einer Stunde.',
    description: 'Der Revierdienst kombiniert regelmäßige, unvorhersehbare Kontrollen mit sofortiger Alarmreaktion. Ideal wenn Sie mehrere Standorte haben.',
    features: [
      'Mobile Patrouillen (Auto + zu Fuß)',
      'Unvorhersehbare Kontrollzeiten',
      'Sofortige Alarmintervention',
      'Koordination mit Polizei & Feuerwehr',
    ],
    icon: 'clock',
    color: 'amber',
    image: '/images/revierdienst.jpg',
  },
  {
    slug: 'alarmintervention',
    title: 'Alarmintervention',
    subtitle: 'Sofort-Reaktion',
    plain: 'Alarm ausgelöst? Unsere Einsatzkräfte sind sofort vor Ort, bewerten die Lage und greifen ein. Schnell und professionell.',
    description: 'Im Falle eines Alarms sind unsere Einsatzteams sofort zur Stelle, um die Situation zu bewerten und Maßnahmen zu ergreifen.',
    features: [
      'Sofortige Reaktion auf Alarme',
      'Geschultes Einsatzpersonal',
      'Lagebeurteilung vor Ort',
      'Koordination mit Behörden',
    ],
    icon: 'alarm',
    color: 'red',
    image: '/images/alarm.jpg',
  },
  {
    slug: 'empfangsdienst',
    title: 'Empfangsdienst',
    subtitle: 'Pfortendienst',
    plain: 'Der professionelle Empfang für Ihre Besucher: Freundlich begrüßen, Ausweise kontrollieren, Besucher registrieren. Sicherheit trifft Gastfreundschaft.',
    description: 'Unser Empfangsdienst kombiniert Sicherheit mit einem positiven ersten Eindruck. Geschultes Personal für Besuchermanagement und Zugangskontrollen.',
    features: [
      'Besucherregistrierung & Ausweiskontrolle',
      'Professioneller erster Eindruck',
      'Postannahme & Telefonservice',
      'Schlüsselverwaltung',
    ],
    icon: 'users',
    color: 'purple',
    image: '/images/empfang.jpg',
  },
  {
    slug: 'fahrdienst',
    title: 'Fahrdienst',
    subtitle: 'VIP & Werttransport',
    plain: 'Sicherer Transport von Personen, Dokumenten oder Wertgegenständen. Von A nach B, diskret und pünktlich.',
    description: 'Ob regelmäßige Mitarbeitertransfers, VIP-Fahrten oder der sichere Transport sensibler Dokumente — unsere Fahrer sind in defensiver Fahrweise geschult.',
    features: [
      'VIP- & Personentransport',
      'Dokumenten- & Werttransport',
      'Geschulte Fahrer mit Erste-Hilfe',
      'Moderne, gepflegte Fahrzeugflotte',
    ],
    icon: 'truck',
    color: 'cyan',
    image: '/images/fahrdienst.jpg',
  },
] as const

export const TRUST_NUMBERS = [
  { value: '12.400+', label: 'Rundgänge / Jahr', description: 'Regelmäßige Kontrollen' },
  { value: '850+', label: 'Alarmeinsätze', description: 'Erfolgreiche Interventionen' },
  { value: '15+', label: 'Jahre Erfahrung', description: 'In der Sicherheitsbranche' },
  { value: '98%', label: 'Zufriedenheit', description: 'Langfristige Partnerschaften' },
] as const

export const BRANCHES = [
  {
    slug: 'banken',
    title: 'Banken & Finanzinstitute',
    description: 'Gebäudesicherheit, Interventionsfahrten, Krisenmanagement — alles was Ihre Filiale braucht.',
    image: '/images/einsatz.jpg',
    isSpecial: true,
  },
  {
    slug: 'industrie',
    title: 'Industrie & Produktion',
    description: 'Werkschutz, Tor-Management und Zugangskontrollen für Ihr Industriegelände.',
    image: '/images/werkschutz.jpg',
  },
  {
    slug: 'gewerbe',
    title: 'Gewerbe & Handel',
    description: 'Objektschutz, Revierdienst und Empfangsdienst für Gewerbeimmobilien.',
    image: '/images/iar-team.jpg',
  },
] as const

export const JOB_OPENINGS = [
  { title: 'Sicherheitsmitarbeiter Werkschutz (m/w/d)', location: 'Wadern', type: 'Vollzeit', contract: 'Unbefristet', badge: 'Neu' },
  { title: 'Sicherheitsmitarbeiter Objektschutz (m/w/d)', location: 'Saarbrücken', type: 'Vollzeit', contract: 'Unbefristet', badge: 'Offen' },
  { title: 'Revierdienst / Mobile Patrouille (m/w/d)', location: 'Saarland', type: 'Vollzeit', contract: 'Unbefristet', badge: 'Offen' },
  { title: 'Sicherheitsfachkraft (m/w/d)', location: 'Heilbronn', type: 'Vollzeit', contract: 'Unbefristet', badge: 'Offen' },
] as const
