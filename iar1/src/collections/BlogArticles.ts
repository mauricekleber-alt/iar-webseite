import type { CollectionConfig } from 'payload'

/**
 * IAR Sicherheit — Blog / Ratgeber Collection
 * 
 * Optimiert für GEO-SEO: Jeder Artikel kann einer Region, Stadt und
 * Dienstleistung zugeordnet werden. Die Felder sind so aufgebaut, dass
 * David Rosenfeldt ohne technisches Wissen Artikel schreiben kann,
 * die automatisch für lokale Google-Suchen ranken.
 * 
 * Beispiel-Artikel:
 *   "Objektschutz in Saarbrücken: Was Unternehmen wissen müssen"
 *   → Region: Saarland, Stadt: Saarbrücken, Leistung: Objektschutz
 *   → Generiert URL: /ratgeber/objektschutz-saarbruecken
 */

export const BlogArticles: CollectionConfig = {
  slug: 'blog-articles',
  
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'region', 'category', 'status', 'publishedAt'],
    group: 'Inhalte',
    description: 'Blog-Artikel & Ratgeber für SEO und Kundengewinnung',
    listSearchableFields: ['title', 'region', 'city', 'category'],
  },

  // Versionierung für Entwürfe
  versions: {
    drafts: {
      autosave: {
        interval: 30000, // Alle 30 Sekunden Auto-Speichern
      },
    },
  },

  access: {
    read: () => true, // Öffentlich lesbar
  },

  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug from title if not set
        if (data?.title && !data?.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        }
        return data
      },
    ],
  },

  fields: [
    // ============================================
    // HAUPTINHALTE — Das sieht David beim Schreiben
    // ============================================
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Artikel schreiben',
          description: 'Hier schreiben Sie Ihren Artikel',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Überschrift',
              admin: {
                description: 'Die Hauptüberschrift des Artikels. Tipp: Nennen Sie die Stadt/Region und die Dienstleistung, z.B. "Werkschutz in Neunkirchen: 5 Tipps für Ihr Unternehmen"',
                placeholder: 'z.B. Objektschutz in Saarbrücken: Was Unternehmen wissen müssen',
              },
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Untertitel',
              admin: {
                description: 'Optional: Ein kurzer Untertitel unter der Überschrift',
                placeholder: 'z.B. Alles über professionellen Gebäudeschutz im Saarland',
              },
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Titelbild',
              admin: {
                description: 'Das große Bild oben im Artikel. Idealerweise ein echtes Foto von IAR (Team, Einsatz, Fahrzeug).',
              },
            },
            {
              name: 'intro',
              type: 'textarea',
              required: true,
              label: 'Einleitung',
              maxLength: 300,
              admin: {
                description: 'Die ersten 2-3 Sätze des Artikels. Wird auch als Vorschau in der Übersicht und bei Google angezeigt. Max. 300 Zeichen.',
                placeholder: 'z.B. Sie suchen einen zuverlässigen Sicherheitsdienst in Saarbrücken? Erfahren Sie, worauf es beim Objektschutz ankommt und wie IAR Sicherheit Ihr Unternehmen schützt.',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              label: 'Artikeltext',
              admin: {
                description: 'Der vollständige Artikeltext. Nutzen Sie Zwischenüberschriften (H2, H3), Listen und Bilder.',
              },
            },
            {
              name: 'callToAction',
              type: 'group',
              label: 'Handlungsaufforderung am Ende',
              admin: {
                description: 'Wird als Box am Ende des Artikels angezeigt',
              },
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'CTA-Box anzeigen',
                  defaultValue: true,
                },
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Überschrift',
                  defaultValue: 'Sicherheitsberatung gewünscht?',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'text',
                  type: 'textarea',
                  label: 'Text',
                  defaultValue: 'Kontaktieren Sie uns für ein unverbindliches Angebot — wir beraten Sie gerne persönlich.',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button-Text',
                  defaultValue: 'Jetzt Angebot anfragen',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                  label: 'Button-Link',
                  defaultValue: '/anfrage',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
              ],
            },
          ],
        },

        // ============================================
        // GEO-SEO ZUORDNUNG — Einfache Dropdowns
        // ============================================
        {
          label: 'Region & Kategorie',
          description: 'Ordnen Sie den Artikel einer Region und Dienstleistung zu — das hilft bei Google',
          fields: [
            {
              name: 'category',
              type: 'select',
              required: true,
              label: 'Kategorie / Dienstleistung',
              admin: {
                description: 'Zu welcher Dienstleistung passt der Artikel am besten?',
              },
              options: [
                { label: 'Objektschutz', value: 'objektschutz' },
                { label: 'Werkschutz', value: 'werkschutz' },
                { label: 'Revierdienst & Patrouille', value: 'revierdienst' },
                { label: 'Alarmintervention', value: 'alarmintervention' },
                { label: 'Empfangsdienst', value: 'empfangsdienst' },
                { label: 'Fahrdienst', value: 'fahrdienst' },
                { label: 'Alarmtechnik', value: 'alarmtechnik' },
                { label: 'Bankensicherheit', value: 'bankensicherheit' },
                { label: 'Allgemein / Sicherheitstipps', value: 'allgemein' },
                { label: 'Karriere & Arbeitgeber', value: 'karriere' },
              ],
            },
            {
              name: 'region',
              type: 'select',
              required: true,
              label: 'Region',
              admin: {
                description: 'In welcher Region ist der Artikel relevant?',
              },
              options: [
                { label: 'Saarland (gesamt)', value: 'saarland' },
                { label: 'Raum Heilbronn', value: 'heilbronn' },
                { label: 'Beide Regionen', value: 'beide' },
                { label: 'Überregional / Allgemein', value: 'ueberregional' },
              ],
            },
            {
              name: 'city',
              type: 'select',
              hasMany: true,
              label: 'Stadt/Städte',
              admin: {
                description: 'Optional: Welche Städte werden im Artikel konkret erwähnt? (Mehrfachauswahl möglich)',
                isClearable: true,
              },
              options: [
                // Saarland
                { label: 'Saarbrücken', value: 'saarbruecken' },
                { label: 'Neunkirchen', value: 'neunkirchen' },
                { label: 'Homburg', value: 'homburg' },
                { label: 'Völklingen', value: 'voelklingen' },
                { label: 'St. Ingbert', value: 'st-ingbert' },
                { label: 'Merzig', value: 'merzig' },
                { label: 'St. Wendel', value: 'st-wendel' },
                { label: 'Saarlouis', value: 'saarlouis' },
                { label: 'Dillingen', value: 'dillingen' },
                { label: 'Ottweiler', value: 'ottweiler' },
                { label: 'Wadern', value: 'wadern' },
                { label: 'Lebach', value: 'lebach' },
                { label: 'Blieskastel', value: 'blieskastel' },
                // Heilbronn Region
                { label: 'Heilbronn', value: 'heilbronn-stadt' },
                { label: 'Neckarsulm', value: 'neckarsulm' },
                { label: 'Weinsberg', value: 'weinsberg' },
                { label: 'Bad Friedrichshall', value: 'bad-friedrichshall' },
                { label: 'Eppingen', value: 'eppingen' },
              ],
            },
            {
              name: 'targetAudience',
              type: 'select',
              label: 'Zielgruppe',
              admin: {
                description: 'Für wen ist der Artikel geschrieben?',
              },
              options: [
                { label: 'Geschäftsführer / Entscheider', value: 'entscheider' },
                { label: 'Facility Manager', value: 'facility' },
                { label: 'Banken & Finanzen', value: 'banken' },
                { label: 'Industrieunternehmen', value: 'industrie' },
                { label: 'Bewerber / Jobsuchende', value: 'bewerber' },
                { label: 'Allgemein', value: 'allgemein' },
              ],
              defaultValue: 'entscheider',
            },
            {
              name: 'tags',
              type: 'select',
              hasMany: true,
              label: 'Schlagwörter',
              admin: {
                description: 'Optional: Zusätzliche Themen-Tags für die Filterung',
                isClearable: true,
              },
              options: [
                { label: '§34a Sachkunde', value: '34a-sachkunde' },
                { label: 'VdS-Zertifizierung', value: 'vds' },
                { label: 'Zugangskontrolle', value: 'zugangskontrolle' },
                { label: 'Videoüberwachung', value: 'videoueberwachung' },
                { label: 'Einbruchschutz', value: 'einbruchschutz' },
                { label: 'Notfallmanagement', value: 'notfallmanagement' },
                { label: 'Sicherheitskonzept', value: 'sicherheitskonzept' },
                { label: 'Kosten & Preise', value: 'kosten' },
                { label: 'Checkliste', value: 'checkliste' },
                { label: 'Gesetzgebung', value: 'gesetzgebung' },
              ],
            },
          ],
        },

        // ============================================
        // SEO-EINSTELLUNGEN — Für Fortgeschrittene
        // ============================================
        {
          label: 'SEO',
          description: 'Suchmaschinen-Optimierung — wird automatisch befüllt, kann aber angepasst werden',
          fields: [
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              label: 'URL-Pfad (Slug)',
              admin: {
                description: 'Wird automatisch aus der Überschrift generiert. Beispiel: "objektschutz-saarbruecken"',
                placeholder: 'objektschutz-saarbruecken',
              },
            },
            {
              name: 'seoTitle',
              type: 'text',
              label: 'SEO-Titel (für Google)',
              maxLength: 60,
              admin: {
                description: 'Wird in Google-Suchergebnissen angezeigt. Max. 60 Zeichen. Leer lassen = Überschrift wird verwendet.',
                placeholder: 'z.B. Objektschutz Saarbrücken — Professioneller Gebäudeschutz | IAR Sicherheit',
              },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              label: 'SEO-Beschreibung (für Google)',
              maxLength: 155,
              admin: {
                description: 'Der Text unter dem Titel in Google. Max. 155 Zeichen. Leer lassen = Einleitung wird verwendet.',
                placeholder: 'z.B. Professioneller Objektschutz in Saarbrücken ✓ 24/7 Bewachung ✓ Alarmintervention ✓ VdS-zertifiziert. Jetzt beraten lassen!',
              },
            },
            {
              name: 'focusKeyword',
              type: 'text',
              label: 'Fokus-Keyword',
              admin: {
                description: 'Das Haupt-Suchwort, für das dieser Artikel ranken soll. z.B. "Sicherheitsdienst Saarbrücken"',
                placeholder: 'z.B. Sicherheitsdienst Saarbrücken',
              },
            },
            {
              name: 'secondaryKeywords',
              type: 'text',
              label: 'Neben-Keywords',
              admin: {
                description: 'Weitere Suchbegriffe, kommagetrennt',
                placeholder: 'z.B. Objektschutz Saarland, Wachdienst Saarbrücken, Gebäudeschutz',
              },
            },
            {
              name: 'canonicalUrl',
              type: 'text',
              label: 'Canonical URL',
              admin: {
                description: 'Nur setzen wenn der Artikel auch woanders erscheint. Normalerweise leer lassen.',
              },
            },
            {
              name: 'noIndex',
              type: 'checkbox',
              label: 'Von Google ausschließen (noindex)',
              defaultValue: false,
              admin: {
                description: 'Nur aktivieren wenn der Artikel NICHT bei Google erscheinen soll.',
              },
            },
          ],
        },

        // ============================================
        // SCHEMA / STRUCTURED DATA
        // ============================================
        {
          label: 'Erweitert',
          description: 'Strukturierte Daten für Google — normalerweise nicht anfassen',
          fields: [
            {
              name: 'faqItems',
              type: 'array',
              label: 'FAQ-Abschnitt (für Google FAQ-Snippets)',
              admin: {
                description: 'Häufig gestellte Fragen zum Thema. Erscheinen im Artikel UND als FAQ-Rich-Snippet bei Google.',
              },
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  required: true,
                  label: 'Frage',
                  admin: {
                    placeholder: 'z.B. Was kostet ein Sicherheitsdienst in Saarbrücken?',
                  },
                },
                {
                  name: 'answer',
                  type: 'textarea',
                  required: true,
                  label: 'Antwort',
                  admin: {
                    placeholder: 'z.B. Die Kosten für einen Sicherheitsdienst hängen von verschiedenen Faktoren ab...',
                  },
                },
              ],
            },
            {
              name: 'localBusiness',
              type: 'group',
              label: 'Lokaler Bezug (Schema.org)',
              admin: {
                description: 'Wird automatisch für Google Local Schema verwendet',
              },
              fields: [
                {
                  name: 'serviceArea',
                  type: 'text',
                  label: 'Einsatzgebiet',
                  admin: {
                    placeholder: 'z.B. Saarbrücken und Umgebung, Regionalverband Saarbrücken',
                  },
                },
                {
                  name: 'geoLat',
                  type: 'number',
                  label: 'Breitengrad (Latitude)',
                  admin: {
                    description: 'Für Google Maps Einbettung',
                    placeholder: '49.2354',
                  },
                },
                {
                  name: 'geoLng',
                  type: 'number',
                  label: 'Längengrad (Longitude)',
                  admin: {
                    placeholder: '7.0025',
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // ============================================
    // SIDEBAR — Status & Autor
    // ============================================
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Entwurf', value: 'draft' },
        { label: 'In Prüfung', value: 'review' },
        { label: 'Veröffentlicht', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Autor',
      admin: {
        position: 'sidebar',
        description: 'Wer hat den Artikel geschrieben?',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Veröffentlichungsdatum',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd.MM.yyyy',
        },
      },
    },
    {
      name: 'updatedNote',
      type: 'text',
      label: 'Aktualisierungs-Hinweis',
      admin: {
        position: 'sidebar',
        description: 'z.B. "Aktualisiert am 15.03.2026 mit neuen Preisen"',
      },
    },
    {
      name: 'relatedArticles',
      type: 'relationship',
      relationTo: 'blog-articles',
      hasMany: true,
      label: 'Verwandte Artikel',
      admin: {
        position: 'sidebar',
        description: 'Artikel die unten als "Weiterlesen" angezeigt werden',
      },
    },
  ],
}
