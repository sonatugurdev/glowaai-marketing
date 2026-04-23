"use client";

import { Reveal, RevealStagger, RevealItem } from "./reveal";

const benefits = [
  {
    who: "For patients",
    title: "No more clipboard in the waiting room.",
    body: "Patients complete intake at home, in 10 minutes, on their phone. Guided photo capture, medication autocomplete, zero paperwork on arrival. First impressions matter — especially in aesthetics.",
    items: ["Done from home, before the visit", "No app download required", "Guided, not intimidating"]
  },
  {
    who: "For practitioners",
    title: "Walk in knowing exactly where to focus.",
    body: "A structured skin analysis and Glogau classification lands in your dashboard before the patient sits down. No discovery questions. No blank pages. Just the consult.",
    items: ["AI-generated clinical report in <90 sec", "Glogau, Fitzpatrick, zone-by-zone scoring", "First-pass treatment suggestions"]
  },
  {
    who: "For owners",
    title: "More treatments closed per visit.",
    body: "When practitioners walk in prepared, consultations are faster, more specific, and more likely to result in a same-day booking. Glowa pays for itself in the first week.",
    items: ["Higher same-day treatment conversion", "Consistent consult quality across staff", "HIPAA-compliant out of the box"]
  }
];

export function PatientBenefits() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
              <span className="h-1 w-1 rounded-full bg-mint" />
              Everyone wins
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-display-lg font-light text-forest text-balance">
              Better experience for patients.{" "}
              <em className="font-normal text-mint-dark">Better outcomes for your practice.</em>
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <RevealItem key={b.who}>
              <article className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-cream p-7 hover:border-mint/60 hover:shadow-[0_20px_50px_-25px_rgba(15,35,24,0.2)]">
                <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  {b.who}
                </div>
                <h3 className="font-display text-xl font-normal text-forest text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted flex-1">
                  {b.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-ink">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                        <circle cx="7" cy="7" r="6.25" fill="#EDF7F0" />
                        <path d="M4.5 7l1.75 1.75L9.5 5.5" stroke="#4A9A64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
