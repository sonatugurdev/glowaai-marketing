/**
 * Lightweight Supabase REST helper — no SDK dependency.
 * Uses the service role key (server-side only, never exposed to the client).
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseKey);
}

export async function supabaseInsert(
  table: string,
  payload: Record<string, unknown>
): Promise<{ ok: boolean; duplicate: boolean; error?: string }> {
  if (!supabaseUrl || !supabaseKey) {
    return { ok: false, duplicate: false, error: "Supabase not configured" };
  }

  const res = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=minimal,resolution=ignore-duplicates"
    },
    body: JSON.stringify(payload)
  });

  if (res.status === 409) return { ok: true, duplicate: true };
  if (!res.ok) {
    const text = await res.text().catch(() => "unknown");
    return { ok: false, duplicate: false, error: `${res.status}: ${text}` };
  }
  return { ok: true, duplicate: false };
}
