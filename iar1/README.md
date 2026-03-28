# IAR Sicherheit GmbH — Website

Moderne Website fuer IAR Sicherheit GmbH, entwickelt von MindWebMedia GbR.

## Tech Stack
- **Next.js 15** (App Router, ISR, Server Components)
- **Payload CMS 3.x** (headless, self-hosted)
- **PostgreSQL** (Datenbank)
- **Tailwind CSS 4** (Styling)
- **Hetzner Cloud** (Hosting, DSGVO-konform)

## Setup

```bash
# Dependencies installieren
npm install

# .env anlegen (siehe .env.example)
cp .env.example .env

# Datenbank migrieren
npm run payload migrate

# Dev Server starten
npm run dev
```

## Projektstruktur

```
src/
  app/              # Next.js App Router Pages
    page.tsx        # Homepage
    leistungen/     # Leistungen-Seiten
    branchen/       # Branchen-Landingpages
    karriere/       # Karriere + Bewerbungsfunnel
    anfrage/        # Kundenfunnel
    ueber-uns/      # Ueber-uns-Seite
    kontakt/        # Kontaktseite
    ratgeber/       # Blog (Payload CMS)
  components/       # React Komponenten
    Nav.tsx         # Navigation
    Footer.tsx      # Footer
    HeroLiveFeed.tsx
    ui/             # Shared UI Components
  lib/              # Utilities
    icons.tsx       # SVG Security Icons
    utils.ts        # Helpers, Constants, Data
  collections/      # Payload CMS Collections
    BlogArticles.ts # Blog mit GEO-SEO Feldern
  payload/          # Payload CMS Config
```

## Entwickelt von
MindWebMedia GbR — Joel Westenburger & Luca Weigerding
