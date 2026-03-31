import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'iar-sicherheit.de' },
    ],
  },
  async redirects() {
    return [
      { source: '/objektschutz-saarland', destination: '/leistungen/objektschutz', permanent: true },
      { source: '/werkschutz-saarland', destination: '/leistungen/werkschutz', permanent: true },
      { source: '/revierdienst-saarland', destination: '/leistungen/revierdienst', permanent: true },
      { source: '/sicherheitsdienst-saarland', destination: '/leistungen', permanent: true },
      { source: '/dienstleistungen', destination: '/leistungen', permanent: true },
      { source: '/dienstleistungen-banken', destination: '/branchen/banken', permanent: true },
      { source: '/ueber-uns', destination: '/ueber-uns', permanent: false },
      { source: '/karriere', destination: '/karriere', permanent: false },
      { source: '/kontakt', destination: '/kontakt', permanent: false },
      { source: '/hinweisgebersystem', destination: '/datenschutz', permanent: true },
      { source: '/cookie-richtlinie', destination: '/datenschutz', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

export default nextConfig
