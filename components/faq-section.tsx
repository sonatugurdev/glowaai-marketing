"use client";
import { useState } from "react";

const FAQS = [
  { q: "Is Glowa AI HIPAA compliant?", a: "Yes. All PHI is encrypted at rest and in transit. We sign a Business Associate Agreement (BAA) with every account. Client photo data is auto-purged according to your retention policy, and all audit logs are maintained for compliance." },
  { q: "How does Glowa AI actually increase sales by 42%?", a: "When clients receive a personalized AI skin analysis before their appointment, they arrive educated and already invested in the results. The AI makes specific treatment recommendations with clear clinical rationale — removing the hesitation that typically blocks upsells. Clients say yes because the recommendation comes from objective analysis, not a sales pitch." },
  { q: "How long does setup take?", a: "Most MedSpas are live within a single day. Our dedicated onboarding team configures your account, customizes your intake questions and branding, and walks your front desk through the workflow before you go live. No IT team required." },
  { q: "How accurate is the AI skin analysis?", a: "Glowa's skin analysis has been validated by Logan M. Horejsi — Physician Associate and Glowa AI Medical Advisor. The model scores 6 skin metrics on a 0–100 scale based on frontal and profile photo analysis. Individual results may vary based on skin type, photo quality, and lighting conditions." },
  { q: "Do clients need to download an app?", a: "No. The entire intake flow — questions, photo upload, and AI report — runs in the client's mobile browser via the SMS link you send. No app download, no account creation. The link is secure and expires after 48 hours." },
  { q: "What integrations do you support?", a: "Glowa AI integrates with Aesthetic Record, Jane App, and Mindbody. Custom integrations are available for enterprise accounts. Contact us if your software isn't listed — we're actively expanding our integration library." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section snap-section faq-section" id="faq" data-snap-index="7" data-snap-label="FAQ" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header">
          <span className="label">FAQ</span>
          <h2>Common questions from MedSpa owners</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <div className="faq-icon">
                  <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>
              <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
