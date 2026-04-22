"use client";

import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Features() {
  return (
    <section id="product" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
              <span className="h-1 w-1 rounded-full bg-mint" />
              The product
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-display font-light text-forest text-balance">
              A clinical layer, not <em className="font-normal text-mint-dark">another EMR</em> to fight.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
              Glowa AI sits upstream of your scheduling and charting tools. It
              doesn&apos;t replace them — it feeds them better input.
            </p>
          </Reveal>
        </div>

        {/* Hero feature */}
        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-10 overflow-hidden rounded-3xl border border-line bg-white p-8 md:grid-cols-2 md:p-12">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-mint-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mint-dark">
                Flagship feature
              </span>
              <h3 className="mt-4 font-display text-3xl font-normal text-forest text-balance md:text-4xl">
                AI-generated pre-visit reports
              </h3>
              <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-muted">
                Two parallel analyses — <strong className="font-medium text-forest">Claude Vision</strong> for
                qualitative clinical assessment and <strong className="font-medium text-forest">MakeupAR HD</strong>{" "}
                for quantitative skin metrics — produce a structured report your
                practitioner can read in under a minute.
              </p>
              <ul className="mt-6 space-y-2.5 text-[14px]">
                {[
                  "Glogau & Fitzpatrick classification",
                  "Zone-by-zone concern scoring",
                  "Volume, laxity, and photodamage markers",
                  "First-pass treatment recommendations"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <circle cx="7" cy="7" r="6.25" fill="#EDF7F0" />
                      <path
                        d="M4.5 7l1.75 1.75L9.5 5.5"
                        stroke="#4A9A64"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual panel - stylized report */}
            <ReportVisual />
          </div>
        </Reveal>

        {/* Supporting features grid */}
        <RevealStagger className="mt-6 grid gap-5 md:grid-cols-3">
          {supportingFeatures.map((f) => (
            <RevealItem key={f.title}>
              <article className="card-lift group h-full rounded-2xl border border-line bg-white p-7 hover:border-mint/60 hover:shadow-[0_20px_50px_-25px_rgba(15,35,24,0.18)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-mint-pale bg-mint-muted">
                  <f.icon />
                </div>
                <h3 className="font-display text-lg font-normal text-forest">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-muted">
                  {f.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ReportVisual() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mint-muted via-cream to-white"
        aria-hidden
      />

      <div className="relative rounded-2xl border border-line bg-white/60 p-5 backdrop-blur-sm">
        {/* Stacked cards effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-line bg-white p-5 shadow-sm"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-medium uppercase tracking-widest text-ink-soft">
              Zone detail — Forehead
            </div>
            <div className="font-mono text-[11px] text-mint-dark">HD scan</div>
          </div>

          <div className="space-y-2.5">
            {[
              { label: "Horizontal lines", val: 72, severity: "Mild" },
              { label: "Pore density", val: 58, severity: "Moderate" },
              { label: "Pigmentation", val: 81, severity: "Minimal" },
              { label: "Sebum index", val: 65, severity: "Mild" }
            ].map((m, i) => (
              <div key={m.label} className="flex items-center gap-3">
                <span className="w-[120px] text-[11px] text-ink-muted">
                  {m.label}
                </span>
                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-mint-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.val}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-mint to-mint-dark"
                  />
                </div>
                <span className="w-14 text-right font-mono text-[11px] text-forest">
                  {m.val}/100
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-mint-pale bg-mint-muted/50 px-3 py-2 text-[11px] text-mint-dark">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1v2M6 9v2M2 6h1M9 6h1M3.2 3.2l.7.7M8.1 8.1l.7.7M3.2 8.8l.7-.7M8.1 3.9l.7-.7"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
            </svg>
            Recommend: retinoid + monthly chemical peel
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 rounded-xl border border-line bg-white p-4 shadow-sm"
        >
          <div className="mb-2 text-[11px] font-medium uppercase tracking-widest text-ink-soft">
            Clinical notes
          </div>
          <div className="space-y-1.5 text-[12.5px] leading-[1.6] text-ink">
            <div>
              <span className="font-mono text-[10px] text-ink-soft">
                FITZPATRICK
              </span>{" "}
              Type III · Moderate tolerance to peels
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-soft">LAXITY</span>{" "}
              Mild, lower face
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Feature icons (minimal line style)
function SMSIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 6a3 3 0 013-3h8a3 3 0 013 3v5a3 3 0 01-3 3H8l-3 3v-3a3 3 0 01-3-3V6z"
        stroke="#4A9A64"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="8.5" r="0.75" fill="#4A9A64" />
      <circle cx="10" cy="8.5" r="0.75" fill="#4A9A64" />
      <circle cx="13" cy="8.5" r="0.75" fill="#4A9A64" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2l6 2.5v5c0 4-3 7-6 8-3-1-6-4-6-8v-5L10 2z"
        stroke="#4A9A64"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10l2 2 3.5-3.5"
        stroke="#4A9A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="14" height="14" rx="3" stroke="#4A9A64" strokeWidth="1.3" />
      <path d="M7 10l2 2 4-4" stroke="#4A9A64" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const supportingFeatures = [
  {
    icon: SMSIcon,
    title: "SMS-first, no app",
    body:
      "Patients click a link, capture photos, submit history — all in the browser. Zero friction, zero install, zero support tickets."
  },
  {
    icon: ShieldIcon,
    title: "HIPAA infrastructure built in",
    body:
      "Encrypted photo storage, signed URLs, audit logs. Compliance is a default, not a project. You stay clean without a compliance hire."
  },
  {
    icon: BrandIcon,
    title: "Branded per practice",
    body:
      "Multi-location ready. Each location gets its own slug, theme, concern configuration, and logo. One backend, many practices."
  }
];
