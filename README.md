# Glowa AI — Marketing Site

The landing page for [glowaai.com](https://glowaai.com).

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Vercel

---

## Quickstart (local)

```bash
cd glowaai-marketing
npm install
npm run dev
```

Open http://localhost:3000.

The waitlist form will work immediately — submissions are logged to your terminal until you wire Supabase (see below).

---

## Project structure

```
glowaai-marketing/
├── app/
│   ├── api/waitlist/route.ts   # Waitlist API (Supabase-ready)
│   ├── globals.css             # Tailwind + custom utilities
│   ├── layout.tsx              # Fonts, metadata, root HTML
│   └── page.tsx                # Composes all sections
├── components/
│   ├── nav.tsx                 # Scroll-aware navigation
│   ├── hero.tsx                # Hero + animated score preview
│   ├── stats.tsx               # Social proof strip
│   ├── problem.tsx             # "The gap" framing
│   ├── how-it-works.tsx        # 4-step explainer
│   ├── features.tsx            # Flagship + 3 supporting features
│   ├── quote.tsx               # Dark forest testimonial break
│   ├── faq.tsx                 # Accordion FAQ
│   ├── waitlist.tsx            # Form with validation + states
│   ├── footer.tsx              # Footer with nav links
│   ├── logo.tsx                # Reusable logo SVG
│   └── reveal.tsx              # Scroll-triggered animation primitive
├── lib/utils.ts                # `cn()` classname utility
├── tailwind.config.js          # Brand tokens (colors, typography, animations)
└── next.config.js
```

---

## Step 1 — Push to GitHub

```bash
cd glowaai-marketing
git init
git add .
git commit -m "Initial commit: Glowa AI marketing site"
git branch -M main

# Create a new repo on github.com/sonatugurdev named "glowaai-marketing" (public or private)
git remote add origin https://github.com/sonatugurdev/glowaai-marketing.git
git push -u origin main
```

---

## Step 2 — Deploy to Vercel

### Option A — Vercel dashboard (recommended)
1. Go to https://vercel.com/new
2. Import `sonatugurdev/glowaai-marketing`
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy**. First build takes ~45 seconds.
5. You'll get a preview URL like `glowaai-marketing.vercel.app`. Confirm it works.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel         # follow prompts to link project
vercel --prod  # deploy to production
```

---

## Step 3 — Point glowaai.com at Vercel

Wherever you bought the domain (Namecheap, GoDaddy, Porkbun, etc.):

1. In Vercel: **Project → Settings → Domains → Add** → enter `glowaai.com` and `www.glowaai.com`.
2. Vercel will show you which DNS records to add. Typically:
   - For the apex (`glowaai.com`): an **A record** pointing to `76.76.21.21`
   - For `www`: a **CNAME record** pointing to `cname.vercel-dns.com`
3. Add those records in your registrar's DNS panel.
4. DNS propagation: usually 5–15 minutes, occasionally up to 24h. Vercel issues the SSL certificate automatically once DNS resolves.

That's it. `https://glowaai.com` will serve the site.

---

## Step 4 — Wire the waitlist to Supabase (optional but recommended)

Right now, form submissions are logged to your Vercel function logs (fine for testing, not for real). To persist them:

### 4a. Create the table in Supabase

Run this SQL in your Supabase SQL editor (same project you're already using for Glowa, or a new one — your call):

```sql
create table waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique,
  practice text not null,
  website text,
  role text
);

-- Optional: index for querying
create index on waitlist_signups (created_at desc);
```

### 4b. Add env vars in Vercel

**Project → Settings → Environment Variables:**

| Name | Value | Environments |
|---|---|---|
| `SUPABASE_URL` | `https://xxxx.supabase.co` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` (service role, **not** anon) | Production, Preview, Development |

> The service role key bypasses RLS and is server-side only. Never expose it to the client. It's only read inside `app/api/waitlist/route.ts`.

### 4c. Redeploy

Vercel → **Deployments → redeploy latest** (or just push a new commit). The API route will now write to Supabase.

Verify in Supabase:
```sql
select * from waitlist_signups order by created_at desc;
```

---

## Design system

All brand tokens live in `tailwind.config.js`:

- **Mint:** `#5DB87A` (primary accent)
- **Forest:** `#0F2318` (headings, dark sections)
- **Cream:** `#FAFAF8` (page background)
- **Ink:** `#2A2A28` (body text)

**Typography:**
- Display: **Fraunces** (editorial serif, italic for accents)
- Body: **Inter** (clean sans)
- Mono: **JetBrains Mono** (code, metadata labels)

**Animation primitives:** `<Reveal>`, `<RevealStagger>`, `<RevealItem>` from `components/reveal.tsx`. Wrap any element to get scroll-triggered fade-up.

---

## Iterating on content

Most copy lives inside the section components (`components/*.tsx`). Common edits:

- **Headline / hero copy:** `components/hero.tsx`
- **Problem framing:** `components/problem.tsx` → `problems` array
- **How-it-works steps:** `components/how-it-works.tsx` → `steps` array
- **Feature cards:** `components/features.tsx` → `supportingFeatures` array
- **FAQ:** `components/faq.tsx` → `faqs` array
- **Quote section:** `components/quote.tsx`
- **Footer links:** `components/footer.tsx` → `FooterCol` instances

Hot reload runs on save via `npm run dev`.

---

## Next iterations (parking lot)

- Swap the hero's stylized report for an animated phone mockup of the real intake flow (SMS → photo capture → score reveal)
- Add a `/changelog` page with product updates (builds trust during beta)
- Add real medspa logos once the founding cohort signs on
- Replace "The Glowa team" quote with a real founding practitioner testimonial
- Add Plausible or Posthog for analytics

---

## Troubleshooting

**Build fails on Vercel:** Check Node version — this project targets Node 20+. Set in `package.json` → `engines` if needed, or in Vercel project settings.

**Form submits but nothing in Supabase:** Check Vercel function logs for the `[waitlist]` log line. If you see it, env vars aren't set. If you see a Supabase error, verify the table schema matches the SQL above.

**glowaai.com doesn't resolve:** DNS propagation. Run `dig glowaai.com` to see which servers it's hitting. If the registrar records look right, wait an hour and try again.
