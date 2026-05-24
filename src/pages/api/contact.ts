import type { APIRoute } from 'astro';
import { contactSchema, formatErrors } from '../../lib/validate';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };
  try {
    const body   = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return new Response(JSON.stringify({ success:false, errors:formatErrors(result.error) }), { status:422, headers });
    }

    const FORMSPREE_ID = import.meta.env.FORMSPREE_ID;
    if (FORMSPREE_ID) {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(result.data),
      });
    }

    return new Response(JSON.stringify({ success:true, message:'Message reçu !' }), { status:200, headers });
  } catch {
    return new Response(JSON.stringify({ success:false, errors:{ _:['Erreur serveur'] } }), { status:500, headers });
  }
};
