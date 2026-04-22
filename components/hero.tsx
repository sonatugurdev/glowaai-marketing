"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[140px] pb-24 md:pt-[180px] md:pb-32"
    >
      {/* Gradient mesh background */}
      <div className="mesh-bg absolute inset-0 -z-10" aria-hidden />

      {/* Subtle grid overlay for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F2318 1px, transparent 1px), linear-gradient(to bottom, #0F2318 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)"
        }}
        aria-hidden
      />

      <div className="container-edge relative">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-pale bg-mint-muted/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-mint-dark backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            Now onboarding founding practices
          </div>
        </motion.div>

        {/* Headline — editorial, mixed-weight, with italic accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 text-center text-display-xl font-display font-light text-balance text-forest"
        >
          The intelligence layer{" "}
          <span className="italic text-mint-dark">
            between
          </span>
          <br className="hidden sm:block" /> intake and consultation.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mx-auto mt-7 max-w-[620px] text-center text-[17px] leading-[1.65] text-ink-muted text-pretty"
        >
          Glowa AI sends your patients a link before the visit. They capture
          photos, answer a medical history, and receive a structured skin
          analysis — so your practitioners walk into every consult with a plan
          instead of a blank page.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#waitlist"
            className="group relative inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-cream shadow-[0_10px_40px_-10px_rgba(15,35,24,0.4)] transition-all hover:bg-forest-mid hover:shadow-[0_14px_50px_-10px_rgba(15,35,24,0.5)]"
          >
            Join the waitlist
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </svg>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-6 py-3.5 text-sm font-medium text-forest backdrop-blur-sm transition-all hover:border-mint hover:bg-white"
          >
            See how it works
          </a>
        </motion.div>

        {/* Product preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-[960px]"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * A stylized "product preview" that evokes the Glowa patient report
 * without requiring real screenshots. Three-panel mockup with animated
 * score counter that feels like a real app.
 */
function ProductPreview() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const target = 78;
    const duration = 1600;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    const t = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 700);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, []);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative">
      {/* Glow underneath */}
      <div
        className="absolute inset-x-12 -bottom-10 h-32 rounded-full bg-mint/25 blur-3xl"
        aria-hidden
      />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_30px_80px_-30px_rgba(15,35,24,0.25),0_10px_30px_-10px_rgba(15,35,24,0.12)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-cream-warm/50 px-5 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-line" />
            <div className="h-2.5 w-2.5 rounded-full bg-line" />
            <div className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-mono text-ink-soft">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1.5v3.5l2 1.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1" />
            </svg>
            glowa.ai/r/sarah-chen
          </div>
          <div className="w-12" />
        </div>

        {/* Content grid */}
        <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
          {/* Left: score visualization */}
          <div className="relative border-b border-line bg-gradient-to-br from-cream to-white p-8 md:border-b-0 md:border-r md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                  Pre-visit report
                </div>
                <div className="mt-1 font-display text-lg italic text-forest">
                  Sarah Chen · 34
                </div>
              </div>
              <div className="rounded-full border border-mint-pale bg-mint-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-mint-dark">
                Ready
              </div>
            </div>

            {/* Circular score */}
            <div className="flex items-center gap-6">
              <div className="relative h-[132px] w-[132px] flex-shrink-0">
                <svg
                  width="132"
                  height="132"
                  viewBox="0 0 132 132"
                  className="-rotate-90"
                >
                  <circle
                    cx="66"
                    cy="66"
                    r="54"
                    stroke="#EDF7F0"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="66"
                    cy="66"
                    r="54"
                    stroke="#5DB87A"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display text-4xl font-light text-forest">
                    {score}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-ink-soft">
                    /100
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-[13px]">
                <ScoreRow label="Texture" value={82} />
                <ScoreRow label="Pigmentation" value={71} />
                <ScoreRow label="Pores" value={76} />
                <ScoreRow label="Fine lines" value={84} />
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-line bg-white/70 p-4">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                Glogau classification
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl italic text-forest">
                  Type II
                </span>
                <span className="text-[12px] text-ink-muted">
                  · Early wrinkles, mild photodamage
                </span>
              </div>
            </div>
          </div>

          {/* Right: concerns list */}
          <div className="bg-white p-8 md:p-10">
            <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft">
              Active concerns · 3
            </div>

            <ul className="space-y-3.5">
              <ConcernRow
                title="Nasolabial folds"
                severity="Moderate"
                tone="amber"
              />
              <ConcernRow title="Melasma, cheeks" severity="Mild" tone="mint" />
              <ConcernRow
                title="Enlarged pores, T-zone"
                severity="Mild"
                tone="mint"
              />
            </ul>

            <div className="mt-7 border-t border-line pt-5">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                Suggested protocol
              </div>
              <div className="space-y-1.5 text-[13px] text-ink">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  Hydroquinone 4% + tretinoin
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  IPL, 3-session course
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  Filler consult — NL folds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-6 -right-4 hidden w-[260px] rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-20px_rgba(15,35,24,0.25)] md:block"
      >
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-mint-muted">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1.5 6l3 3 6-6"
                stroke="#4A9A64"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            New report
          </div>
        </div>
        <div className="text-[13px] font-medium text-forest">
          Sarah's intake is complete
        </div>
        <div className="mt-0.5 text-[12px] text-ink-muted">
          Review before her 2:30 appointment
        </div>
      </motion.div>
    </div>
  );
}

function ScoreRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-[80px] text-[11px] uppercase tracking-wide text-ink-muted">
        {label}
      </span>
      <div className="relative h-1 w-20 overflow-hidden rounded-full bg-mint-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 bg-mint"
        />
      </div>
      <span className="font-mono text-[11px] text-forest">{value}</span>
    </div>
  );
}

function ConcernRow({
  title,
  severity,
  tone
}: {
  title: string;
  severity: string;
  tone: "mint" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "bg-amber-50 text-amber-700 border-amber-100"
      : "bg-mint-muted text-mint-dark border-mint-pale";
  return (
    <li className="flex items-center justify-between rounded-lg border border-line bg-cream/50 px-3.5 py-2.5">
      <span className="text-[13px] font-medium text-forest">{title}</span>
      <span
        className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${toneClass}`}
      >
        {severity}
      </span>
    </li>
  );
}
