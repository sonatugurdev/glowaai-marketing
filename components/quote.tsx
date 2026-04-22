"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-cream md:py-32">
      {/* Ambient glow */}
      <div className="mesh-bg-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      {/* Radial highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(93,184,122,0.35) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      {/* Grid dots texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #8ED4A8 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden
      />

      <div className="container-narrow relative">
        <Reveal className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-light">
            <span className="h-1 w-1 rounded-full bg-mint-light" />
            Why now
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.blockquote className="text-center">
            {/* Decorative quotes */}
            <span
              className="mx-auto mb-6 block font-display text-6xl font-light italic leading-none text-mint"
              aria-hidden
            >
              &ldquo;
            </span>

            <p className="mx-auto max-w-3xl font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-light leading-[1.35] tracking-[-0.015em] text-balance text-cream/90">
              The medspa industry is in the middle of a clinical renaissance —
              but independent practices are still running <em className="not-italic font-normal text-mint-light">million-dollar decisions</em> on
              clipboards and gut instinct. Glowa AI closes that gap.
            </p>

            <footer className="mt-10 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-mint/40" />
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-mint-light">
                The Glowa team
              </span>
              <div className="h-px w-10 bg-mint/40" />
            </footer>
          </motion.blockquote>
        </Reveal>
      </div>
    </section>
  );
}
