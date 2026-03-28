// src/payload/payload.config.ts
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BlogArticles } from '@/collections/BlogArticles'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— IAR Sicherheit CMS',
    },
  },
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  collections: [
    BlogArticles,
    // Users
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'name', group: 'System' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'select', options: [
          { label: 'Admin', value: 'admin' },
          { label: 'Redakteur', value: 'editor' },
        ], defaultValue: 'editor' },
      ],
    },
    // Media
    {
      slug: 'media',
      upload: {
        staticDir: 'public/media',
        mimeTypes: ['image/*', 'application/pdf'],
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 432, position: 'centre' },
          { name: 'hero', width: 1920, height: 1080, position: 'centre' },
        ],
      },
      admin: { useAsTitle: 'alt', group: 'Medien' },
      fields: [
        { name: 'alt', type: 'text', required: true, label: 'Alt-Text (Bildbeschreibung)' },
      ],
    },
    // Job Openings
    {
      slug: 'job-openings',
      admin: { useAsTitle: 'title', group: 'Inhalte' },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Stellentitel' },
        { name: 'location', type: 'text', required: true, label: 'Standort' },
        { name: 'type', type: 'select', options: [
          { label: 'Vollzeit', value: 'vollzeit' },
          { label: 'Teilzeit', value: 'teilzeit' },
          { label: 'Minijob', value: 'minijob' },
        ], defaultValue: 'vollzeit' },
        { name: 'contract', type: 'select', options: [
          { label: 'Unbefristet', value: 'unbefristet' },
          { label: 'Befristet', value: 'befristet' },
        ], defaultValue: 'unbefristet' },
        { name: 'description', type: 'richText', label: 'Stellenbeschreibung' },
        { name: 'requirements', type: 'array', label: 'Anforderungen', fields: [
          { name: 'text', type: 'text' },
        ]},
        { name: 'benefits', type: 'array', label: 'Benefits', fields: [
          { name: 'text', type: 'text' },
        ]},
        { name: 'active', type: 'checkbox', defaultValue: true, label: 'Aktiv' },
      ],
    },
  ],
  globals: [
    {
      slug: 'site-settings',
      label: 'Website-Einstellungen',
      fields: [
        { name: 'companyName', type: 'text', defaultValue: 'IAR Sicherheit GmbH' },
        { name: 'phone', type: 'text', defaultValue: '(06824) 302528' },
        { name: 'email', type: 'text', defaultValue: 'info@iar-sicherheit.de' },
        { name: 'address', type: 'textarea', defaultValue: 'Schlosshof 2\n66564 Ottweiler' },
      ],
    },
  ],
  typescript: { outputFile: 'src/payload-types.ts' },
})
