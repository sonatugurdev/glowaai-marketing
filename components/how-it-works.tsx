"use client";

import { Reveal, RevealStagger, RevealItem } from "./reveal";

const steps = [
  {
    number: "01",
    title: "SMS link goes out",
    body: "The moment a patient books, they get a branded intake link. No app download. No account creation. It opens in the browser they&apos;re already in.",
    detail: "Sent automatically via your booking flow"
  },
  {
    number: "02",
    title: "Patient captures photos + history",
    body: "Guided photo capture — frontal and two 45° angles — plus structured medical history with medication autocomplete. Under ten minutes, done at home.",
    detail: "HIPAA-compliant, photos stored encrypted"
  },
  {
    number: "03",
    title: "Glowa generates the report",
    body: "Claude Vision and MakeupAR HD analyze the photos in parallel. The result: a structured skin analysis, Glogau and Fitzpatrick classification, and a first-pass treatment suggestion.",
    detail: "Ready in under 90 seconds"
  },
  {
    number: "04",
    title: "Practitioner walks in ready",
    body: "Your clinician opens the report on the dashboard before the visit. They start the consult with context, a plan, and time to focus on the patient — not the paperwork.",
    detail: "Integrates with your existing workflow"
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-white py-24 md:py-32">
      <div className="container-edge">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
                <span className="h-1 w-1 rounded-full bg-mint" />
                How it works
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-display font-light text-forest text-balance">
                Four steps. <em className="font-normal text-mint-dark">One visit, already underway</em> before the patient arrives.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-6 md:mt-0">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-muted">
              No new systems to learn. Plugs into your current intake and
              scheduling. Your patients get a better experience; your
              practitioners get fifteen minutes back.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-16 grid gap-px bg-line md:grid-cols-2" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <RevealItem key={step.number} className="bg-white">
              <div className="group flex h-full flex-col p-8 transition-colors hover:bg-cream/50 md:p-10">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-mono text-[12px] font-medium tracking-widest text-mint-dark">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                    {`Step ${i + 1} / 4`}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-normal text-forest text-balance">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-muted">
                  {step.body}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] text-mint-dark">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1" />
                    <path
                      d="M4 6l1.5 1.5L8.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {step.detail}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
