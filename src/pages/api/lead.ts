import type { APIRoute } from 'astro';

const PIXEL_ID = '2347878375704800';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN ?? import.meta.env.META_ACCESS_TOKEN;

export const POST: APIRoute = async ({ request }) => {
  if (!ACCESS_TOKEN) {
    return new Response(JSON.stringify({ error: 'META_ACCESS_TOKEN manquant' }), { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'JSON invalide' }), { status: 400 });
  }

  const { eventId, sourceUrl, userAgent, fbp, fbc, externalId } = body;

  // IP côté serveur (plus fiable que côté client)
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '';

  const userData: Record<string, string> = {};
  if (fbp)        userData.fbp = fbp;
  if (fbc)        userData.fbc = fbc;
  if (externalId) userData.external_id = externalId;
  if (clientIp)   userData.client_ip_address = clientIp;
  if (userAgent)  userData.client_user_agent = userAgent;

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,           // même ID que le pixel client → dédoublonnage automatique
      event_source_url: sourceUrl,
      action_source: 'website',
      user_data: userData,
    }],
    access_token: ACCESS_TOKEN,
  };

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.ok ? 200 : res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
