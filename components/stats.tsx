"use client";

import { Reveal, RevealStagger, RevealItem } from "./reveal";

const stats = [
  { value: "12 min", label: "Average intake time", sub: "Patient-side" },
  { value: "3×", label: "Faster consultation planning", sub: "Practitioner-side" },
  { value: "HIPAA", label: "Infrastructure & storage", sub: "Built-in" },
  { value: "< 1 wk", label: "To go live per practice", sub: "Setup" }
];

export function Stats() {
  return (
    <section className="relative border-y border-line bg-white py-14">
      <div className="container-edge">
        <Reveal className="mb-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Built for the way independent medspas actually run
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="font-display text-4xl font-light text-forest">
                {s.value}
              </div>
              <div className="mt-2 text-[13px] font-medium text-ink">
                {s.label}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-ink-soft">
                {s.sub}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
