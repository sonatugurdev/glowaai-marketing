import { NextResponse } from "next/server";
import { supabaseInsert, isSupabaseConfigured } from "@/lib/supabase";

type Payload = {
  name?: string;
  email?: string;
  practice?: string;
  phone?: string;
  country?: string;
  message?: string;
};

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name     = body.name?.trim();
  const email    = body.email?.trim().toLowerCase();
  const practice = body.practice?.trim();
  const phone    = body.phone?.trim() || null;
  const country  = body.country?.trim() || null;
  const message  = body.message?.trim() || null;

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

  if (isSupabaseConfigured()) {
    const result = await supabaseInsert("demo_requests", {
      name, email, practice, phone, country, message
    });
    if (!result.ok) {
      console.error("[demo] Supabase error:", result.error);
      return NextResponse.json(
        { error: "Couldn't save your request. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.log("[demo] New demo request (Supabase not configured):", {
      name, email, practice, phone, country, message,
      at: new Date().toISOString()
    });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
