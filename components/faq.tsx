"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "Does Glowa AI replace our EMR or scheduling software?",
    a: "No — and intentionally. Glowa sits upstream of your existing tools. Your EMR, POS, and booking system stay exactly where they are. We handle the pre-visit intelligence layer: SMS intake, photo analysis, and structured reports that your practitioners read before the consult."
  },
  {
    q: "How long does it take to go live?",
    a: "Most practices are live within a week. We provision your branded intake URL (e.g., yourmedspa.glowa.ai), configure your concern list and clinical preferences, and test the SMS flow with your front desk. No migrations, no data imports, no IT project."
  },
  {
    q: "Is it HIPAA compliant?",
    a: "Yes. Photos are encrypted at rest and in transit, stored in a HIPAA-aligned infrastructure with signed-URL access. We sign a BAA with every practice before go-live. Audit logs are built in."
  },
  {
    q: "What do patients actually do?",
    a: "They tap the SMS link, answer a short medical history (medications autocomplete from an FDA database), and capture three guided photos: one frontal, two at 45°. The whole flow takes about ten minutes and works in any modern mobile browser — no app download."
  },
  {
    q: "How accurate is the AI analysis?",
    a: "Glowa runs two analyses in parallel: MakeupAR HD for quantitative metrics (pore density, wrinkle severity, pigmentation scoring) and Claude Vision for qualitative clinical assessment (Glogau, Fitzpatrick, volume, laxity). The report is framed as a starting point for the practitioner — not a diagnosis. Every protocol suggestion is flagged for clinician review."
  },
  {
    q: "What does it cost?",
    a: "Founding practices get custom pricing during our private beta. We&rsquo;re prioritizing practices committed to working closely with us for three to six months. Join the waitlist and we&rsquo;ll walk you through the details on a 15-minute call."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <div className="container-narrow">
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
                <span className="h-1 w-1 rounded-full bg-mint" />
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-display-md font-light text-forest text-balance">
                Questions we hear <em className="font-normal text-mint-dark">the most</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                Don&apos;t see your question here? Email us at{" "}
                <a
                  href="mailto:hello@glowaai.com"
                  className="text-forest underline decoration-mint decoration-2 underline-offset-4 hover:text-mint-dark"
                >
                  hello@glowaai.com
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`border-b border-line ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="focus-ring flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-mint-dark"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-[18px] font-normal text-forest text-balance">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line text-forest"
                    >
                      <Plus size={14} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[14.5px] leading-[1.75] text-ink-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
