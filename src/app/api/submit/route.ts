// src/app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'

/**
 * Universelle Submission-API
 * 
 * Nimmt Daten aus allen Formularen entgegen:
 * - Angebotsanfrage (Funnel)
 * - Kontaktformular
 * - Bewerbung (Recruiting Funnel)
 * - FAQ-Frage
 * 
 * Speichert in Payload CMS + sendet E-Mail-Benachrichtigung
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = await getPayload({ config })

    // Validierung
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind Pflichtfelder.' },
        { status: 400 }
      )
    }

    // Type bestimmen
    const type = body.type || 'kontakt'
    const validTypes = ['anfrage', 'kontakt', 'bewerbung', 'faq-frage']
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Ungültiger Formulartyp.' },
        { status: 400 }
      )
    }

    // Subject generieren
    let subject = 'Kontaktanfrage'
    if (type === 'anfrage') {
      subject = `Anfrage: ${body.category || 'Allgemein'}`
    } else if (type === 'bewerbung') {
      subject = `Bewerbung: ${body.position || 'Initiativ'}`
    } else if (type === 'faq-frage') {
      subject = `FAQ-Frage: ${body.service || 'Allgemein'}`
    }

    // In Payload speichern
    const submission = await payload.create({
      collection: 'submissions',
      data: {
        type,
        status: 'neu',
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        company: body.company || '',
        subject,
        message: body.message || '',
        funnelData: body.funnelAnswers ? JSON.stringify(body.funnelAnswers) : null,
        applicantData: type === 'bewerbung' ? {
          birthDate: body.birthDate || null,
          city: body.city || '',
          position: body.position || '',
        } : undefined,
        source: body.source || 'website',
        userAgent: request.headers.get('user-agent') || '',
      },
    })

    // E-Mail-Benachrichtigung
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' })
    const shouldNotify = 
      (type === 'anfrage' && siteSettings.notifyOnAnfrage) ||
      (type === 'bewerbung' && siteSettings.notifyOnBewerbung) ||
      (type === 'kontakt' && siteSettings.notifyOnKontakt) ||
      type === 'faq-frage'

    if (shouldNotify && siteSettings.notifyEmail) {
      await sendNotificationEmail({
        to: siteSettings.notifyEmail,
        subject: `[IAR Website] ${subject}`,
        type,
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company,
        message: body.message,
        funnelAnswers: body.funnelAnswers,
      })
    }

    return NextResponse.json({
      success: true,
      id: submission.id,
      message: type === 'bewerbung'
        ? 'Bewerbung erfolgreich gesendet. Wir melden uns innerhalb von 48 Stunden.'
        : 'Anfrage erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.',
    })
  } catch (error) {
    console.error('[Submit API] Error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}

/**
 * E-Mail senden
 * 
 * Kann mit verschiedenen Providern implementiert werden:
 * - Resend (empfohlen für Next.js)
 * - Nodemailer + SMTP
 * - SendGrid
 * 
 * Aktuell: Console-Log als Platzhalter.
 * Für Produktion: `npm install resend` und API Key in .env
 */
async function sendNotificationEmail(data: {
  to: string
  subject: string
  type: string
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  funnelAnswers?: Record<string, string>
}) {
  // ===== OPTION 1: Resend (empfohlen) =====
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'IAR Website <noreply@iar-sicherheit.de>',
  //   to: data.to,
  //   subject: data.subject,
  //   html: buildEmailHTML(data),
  // })

  // ===== OPTION 2: Nodemailer + SMTP =====
  // import nodemailer from 'nodemailer'
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // })
  // await transporter.sendMail({
  //   from: '"IAR Website" <noreply@iar-sicherheit.de>',
  //   to: data.to,
  //   subject: data.subject,
  //   html: buildEmailHTML(data),
  // })

  // Platzhalter: Log
  console.log(`[E-Mail] An: ${data.to}`)
  console.log(`[E-Mail] Betreff: ${data.subject}`)
  console.log(`[E-Mail] Von: ${data.name} (${data.email})`)
  if (data.phone) console.log(`[E-Mail] Telefon: ${data.phone}`)
  if (data.message) console.log(`[E-Mail] Nachricht: ${data.message}`)
}

function buildEmailHTML(data: any): string {
  const funnelHTML = data.funnelAnswers
    ? Object.entries(data.funnelAnswers)
        .map(([q, a]) => `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">${q}</td><td style="padding:8px;border-bottom:1px solid #eee">${a}</td></tr>`)
        .join('')
    : ''

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#060A14;padding:24px;border-radius:12px 12px 0 0">
        <h1 style="color:#fff;font-size:18px;margin:0">IAR Sicherheit — Neue ${data.type === 'bewerbung' ? 'Bewerbung' : 'Anfrage'}</h1>
      </div>
      <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;font-weight:600">Name:</td><td style="padding:8px">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:600">E-Mail:</td><td style="padding:8px"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          ${data.phone ? `<tr><td style="padding:8px;font-weight:600">Telefon:</td><td style="padding:8px"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
          ${data.company ? `<tr><td style="padding:8px;font-weight:600">Firma:</td><td style="padding:8px">${data.company}</td></tr>` : ''}
        </table>
        ${data.message ? `<div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px"><strong>Nachricht:</strong><br>${data.message}</div>` : ''}
        ${funnelHTML ? `<h3 style="margin-top:24px">Funnel-Antworten:</h3><table style="width:100%;border-collapse:collapse">${funnelHTML}</table>` : ''}
      </div>
    </div>
  `
}
