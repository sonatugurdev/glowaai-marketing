"use client";

import { Reveal, RevealStagger, RevealItem } from "./reveal";

const problems = [
  {
    tag: "For owners",
    title: "Consults eat your margins",
    body: "Every minute your practitioner spends asking intake questions is a minute they're not billing. And inconsistent consults mean inconsistent treatment plans — and revenue."
  },
  {
    tag: "For practitioners",
    title: "You're meeting patients cold",
    body: "Paper forms tell you their medications but nothing about their skin. You spend the first ten minutes of every visit doing discovery the patient could have done at home."
  },
  {
    tag: "For patients",
    title: "Intake feels like the DMV",
    body: "Clipboards in a waiting room. Questions they can't remember the answer to. No sense of what the visit will be about. First impressions matter — especially in aesthetics."
  }
];

export function Problem() {
  return (
    <section id="why" className="relative bg-cream py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <SectionTag>The gap</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-display font-light text-forest text-balance">
              The first ten minutes of every consult <em className="font-normal text-mint-dark">shouldn&apos;t be a stranger interview.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted">
              Medspas capture clinical gold during intake and then throw it away.
              Glowa AI catches it, structures it, and hands it to the practitioner
              before the patient sits down.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title}>
              <article className="card-lift group h-full rounded-2xl border border-line bg-white p-7 hover:border-mint/60 hover:shadow-[0_20px_50px_-25px_rgba(15,35,24,0.2)]">
                <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  {p.tag}
                </div>
                <h3 className="font-display text-xl font-normal text-forest text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
                  {p.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
      <span className="h-1 w-1 rounded-full bg-mint" />
      {children}
    </span>
  );
}
