"use client";

import { Reveal } from "./reveal";

const comparisons = [
  { label: "Intake time",        before: "45 min",     after: "12 min" },
  { label: "Consult prep",       before: "Zero info",  after: "Full report" },
  { label: "Same-day bookings",  before: "Rare",       after: "2× more" },
  { label: "Treatment acceptance", before: "Hit or miss", after: "3× higher" },
  { label: "Patient experience", before: "Clipboard",  after: "Guided digital" },
  { label: "Setup time",         before: "Weeks",      after: "< 1 week" },
];

export function CompetitiveStrip() {
  return (
    <section className="relative bg-forest py-20 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(93,184,122,0.5) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container-edge relative">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-light">
            <span className="h-1 w-1 rounded-full bg-mint-light" />
            The difference
          </span>
          <h2 className="mt-4 font-display text-display-md font-light text-cream text-balance">
            Manual intake vs. <em className="font-normal text-mint-light">Glowa AI</em>
          </h2>
        </Reveal>

        <div className="overflow-hidden rounded-2xl border border-cream/10">
          {/* Header */}
          <div className="grid grid-cols-3 bg-cream/5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em]">
            <span className="text-cream/40"></span>
            <span className="text-center text-cream/40">Without Glowa</span>
            <span className="text-center text-mint-light">With Glowa AI</span>
          </div>

          {comparisons.map((row, i) => (
            <Reveal
              key={row.label}
              delay={i * 0.05}
              className={`grid grid-cols-3 items-center px-6 py-4 ${
                i % 2 === 0 ? "bg-white/[0.03]" : ""
              } border-t border-cream/5`}
            >
              <span className="text-[13px] font-medium text-cream/70">
                {row.label}
              </span>
              <span className="text-center text-[14px] text-cream/40 line-through decoration-cream/20">
                {row.before}
              </span>
              <span className="text-center text-[14px] font-semibold text-mint-light">
                {row.after}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
