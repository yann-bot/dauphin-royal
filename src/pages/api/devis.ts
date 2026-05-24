import type { APIRoute } from 'astro';
import { devisSchema, formatErrors } from '../../lib/validate';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };
  try {
    // multipart/form-data so the optional file upload comes through.
    const form = await request.formData();

    const data = {
      prefix:        String(form.get('prefix') ?? ''),
      name:          String(form.get('name') ?? ''),
      company:       String(form.get('company') ?? ''),
      email:         String(form.get('email') ?? ''),
      phone:         String(form.get('phone') ?? ''),
      services:      form.getAll('services').map(String),
      notes:         String(form.get('notes') ?? ''),
      contactMethod: String(form.get('contactMethod') ?? ''),
      honeypot:      String(form.get('honeypot') ?? ''),
    };

    const result = devisSchema.safeParse(data);
    if (!result.success) {
      return new Response(JSON.stringify({ success: false, errors: formatErrors(result.error) }), { status: 422, headers });
    }

    const FORMSPREE_ID = import.meta.env.FORMSPREE_ID;
    if (FORMSPREE_ID) {
      // Forward the original FormData (incl. file) to Formspree as multipart.
      form.append('_subject', `Demande de devis — Dauphin Royal — ${data.name}`);
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Votre demande de devis a bien été envoyée. Nous revenons vers vous sous 24 heures ouvrées.' }), { status: 200, headers });
  } catch {
    return new Response(JSON.stringify({ success: false, errors: { _: ['Erreur serveur'] } }), { status: 500, headers });
  }
};
