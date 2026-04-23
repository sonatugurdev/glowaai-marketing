"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Reveal } from "./reveal";

type FormState = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name:     fd.get("name") as string,
      email:    fd.get("email") as string,
      practice: fd.get("practice") as string,
      phone:    fd.get("phone") as string,
      country:  fd.get("country") as string,
      message:  fd.get("message") as string,
    };

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="demo" className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] max-w-3xl mx-auto rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(93,184,122,0.15) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container-narrow relative">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16 items-start">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
                <span className="h-1 w-1 rounded-full bg-mint" />
                Founding cohort · 10 spots
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-display-md font-light text-forest text-balance">
                Book a 20-minute demo. <em className="font-normal text-mint-dark">See it live with your own patients.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
                We&apos;ll walk you through the full intake flow, show you a live
                report, and answer every question. No hard sell.
              </p>
            </Reveal>

            {/* What you get */}
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {[
                  "Live demo of the full patient intake flow",
                  "See an AI skin analysis report generated in real time",
                  "Founding cohort pricing — $499/month",
                  "Go live within one week of signing up",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="8" cy="8" r="7.25" fill="#EDF7F0" />
                      <path d="M5 8l2 2 4-4" stroke="#4A9A64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Pricing callout */}
            <Reveal delay={0.2}>
              <div className="mt-8 rounded-2xl border border-mint-pale bg-mint-muted/50 p-5">
                <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark mb-2">
                  Founding cohort pricing
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-light text-forest">$499</span>
                  <span className="text-[14px] text-ink-muted">/month</span>
                </div>
                <div className="mt-1 text-[12px] text-ink-muted">
                  No long-term contract · Cancel anytime
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-[28px] border border-line bg-white p-7 shadow-[0_20px_60px_-20px_rgba(15,35,24,0.15)] md:p-8">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mint-muted"
                    >
                      <Check className="text-mint-dark" size={26} strokeWidth={2} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-normal text-forest">
                      Request received.
                    </h3>
                    <p className="mx-auto mt-3 max-w-xs text-[14.5px] leading-relaxed text-ink-muted">
                      We&apos;ll reach out within 24 hours to schedule your demo. Talk soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3.5"
                  >
                    <div className="grid grid-cols-2 gap-3.5">
                      <Field label="Your name"   name="name"     type="text"  placeholder="Dr. Jane Chen"      required />
                      <Field label="Work email"  name="email"    type="email" placeholder="jane@practice.com"  required />
                    </div>
                    <Field label="Practice name" name="practice" type="text"  placeholder="Glow Aesthetics"    required />
                    <div className="grid grid-cols-2 gap-3.5">
                      <Field label="Phone (optional)" name="phone"   type="tel"  placeholder="+1 555 000 0000" />
                      <div>
                        <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                          Country
                        </label>
                        <select
                          name="country"
                          defaultValue="US"
                          className="focus-ring w-full rounded-xl border border-line bg-cream/40 px-3.5 py-2.5 text-[13px] text-forest transition-colors hover:border-mint/50 focus:border-mint focus:bg-white"
                        >
                          <option value="US">United States</option>
                          <option value="GB">United Kingdom</option>
                          <option value="AE">UAE</option>
                          <option value="DE">Germany</option>
                          <option value="TR">Turkey</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                        Anything you&apos;d like us to know? (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="e.g. how many practitioners, current intake process…"
                        className="focus-ring w-full rounded-xl border border-line bg-cream/40 px-3.5 py-2.5 text-[13px] text-forest placeholder:text-ink-soft/70 transition-colors hover:border-mint/50 focus:border-mint focus:bg-white resize-none"
                      />
                    </div>

                    {state === "error" && (
                      <div className="rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-[12.5px] text-amber-800">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="focus-ring group mt-1 flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[14px] font-medium text-cream shadow-[0_10px_30px_-10px_rgba(15,35,24,0.45)] transition-all hover:bg-forest-mid hover:shadow-[0_14px_40px_-10px_rgba(15,35,24,0.55)] disabled:opacity-60"
                    >
                      {state === "submitting" ? (
                        <><Loader2 size={14} className="animate-spin" /> Sending…</>
                      ) : (
                        <>
                          Book a Demo — it&apos;s free
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-ink-soft">
                      No commitment. We&apos;ll reach out within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="focus-ring w-full rounded-xl border border-line bg-cream/40 px-3.5 py-2.5 text-[13px] text-forest placeholder:text-ink-soft/70 transition-colors hover:border-mint/50 focus:border-mint focus:bg-white"
      />
    </div>
  );
}
