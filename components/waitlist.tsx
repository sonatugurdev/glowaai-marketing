"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Reveal } from "./reveal";

type FormState = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      practice: formData.get("practice") as string,
      website: formData.get("website") as string,
      role: formData.get("role") as string
    };

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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
    <section
      id="waitlist"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
    >
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[500px] w-[800px] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(93,184,122,0.12) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="container-narrow relative">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-pale bg-mint-muted/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mint-dark">
            <span className="h-1 w-1 rounded-full bg-mint" />
            Founding cohort
          </span>
        </Reveal>

        <Reveal delay={0.05} className="mt-5 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-display-lg font-light text-forest text-balance">
            Join a small group <em className="font-normal text-mint-dark">building this with us.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-5 text-center">
          <p className="mx-auto max-w-xl text-[16px] leading-[1.7] text-ink-muted">
            We&apos;re onboarding a handful of founding practices before our public
            launch. Early access, founding-cohort pricing, and a direct line to
            our product team.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-[520px]">
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-8 shadow-[0_20px_60px_-20px_rgba(15,35,24,0.15)] md:p-10">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mint-muted"
                    >
                      <Check className="text-mint-dark" size={26} strokeWidth={2} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-normal text-forest">
                      You&apos;re on the list.
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-muted">
                      We&apos;ll reach out within a few days to schedule a short
                      intro call and walk through next steps together.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <Field
                      label="Your name"
                      name="name"
                      type="text"
                      placeholder="Dr. Jane Chen"
                      required
                    />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="jane@yourmedspa.com"
                      required
                    />
                    <Field
                      label="Medspa or practice name"
                      name="practice"
                      type="text"
                      placeholder="Glow Aesthetics"
                      required
                    />
                    <Field
                      label="Website (optional)"
                      name="website"
                      type="url"
                      placeholder="https://yourmedspa.com"
                    />

                    {/* Role selector */}
                    <div>
                      <label className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                        Your role
                      </label>
                      <select
                        name="role"
                        required
                        defaultValue=""
                        className="focus-ring w-full rounded-xl border border-line bg-cream/40 px-4 py-3 text-[14px] text-forest transition-colors hover:border-mint/50 focus:border-mint focus:bg-white"
                      >
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option value="owner">Owner / Founder</option>
                        <option value="practitioner">Practitioner</option>
                        <option value="manager">Practice manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {state === "error" && (
                      <div className="rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-[12.5px] text-amber-800">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="focus-ring group mt-2 flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[14px] font-medium text-cream shadow-[0_10px_30px_-10px_rgba(15,35,24,0.45)] transition-all hover:bg-forest-mid hover:shadow-[0_14px_40px_-10px_rgba(15,35,24,0.55)] disabled:opacity-60"
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Request access
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="transition-transform group-hover:translate-x-0.5"
                          >
                            <path
                              d="M3 7h8M7 3l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="mt-1 text-center text-[11.5px] text-ink-soft">
                      No spam. We&apos;ll email only to schedule a short intro
                      call.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-ring w-full rounded-xl border border-line bg-cream/40 px-4 py-3 text-[14px] text-forest placeholder:text-ink-soft/70 transition-colors hover:border-mint/50 focus:border-mint focus:bg-white"
      />
    </div>
  );
}
