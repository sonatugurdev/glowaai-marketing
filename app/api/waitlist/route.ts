import { NextResponse } from "next/server";

/**
 * Waitlist submission endpoint.
 *
 * Behavior:
 *   - Validates input
 *   - Writes to Supabase if SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY are set
 *   - Otherwise falls back to console logging (works out of the box in dev)
 *
 * To enable Supabase persistence:
 *   1. Create table `waitlist_signups` with columns:
 *      id (uuid, default uuid_generate_v4()), created_at (timestamptz, default now()),
 *      name (text), email (text, unique), practice (text), website (text), role (text)
 *   2. Add env vars to Vercel:
 *      SUPABASE_URL=https://xxxx.supabase.co
 *      SUPABASE_SERVICE_ROLE_KEY=eyJhbG... (service role, server-side only)
 */

type Payload = {
  name?: string;
  email?: string;
  practice?: string;
  website?: string;
  role?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const practice = body.practice?.trim();
  const website = body.website?.trim() || null;
  const role = body.role?.trim() || null;

  if (!name || !email || !practice) {
    return NextResponse.json(
      { error: "Name, email, and practice name are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Honeypot / basic rate-limit could go here in the future.

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseServiceKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/waitlist_signups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceKey,
          Authorization: `Bearer ${supabaseServiceKey}`,
          Prefer: "return=minimal,resolution=ignore-duplicates"
        },
        body: JSON.stringify({ name, email, practice, website, role })
      });

      if (!res.ok && res.status !== 409) {
        // 409 = unique-violation (duplicate email) — treat as idempotent success
        const errText = await res.text();
        console.error("Supabase insert failed:", res.status, errText);
        return NextResponse.json(
          { error: "We couldn't save your entry. Please try again in a moment." },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Supabase request threw:", err);
      return NextResponse.json(
        { error: "Network error. Please try again." },
        { status: 500 }
      );
    }
  } else {
    // Dev fallback: log so Sonat can see submissions in Vercel logs until Supabase is wired.
    console.log("[waitlist] New signup:", {
      name,
      email,
      practice,
      website,
      role,
      at: new Date().toISOString()
    });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
