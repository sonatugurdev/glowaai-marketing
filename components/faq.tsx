"use client";
import { useState } from "react";

const faqs = [
  { q: "Is Glowa AI HIPAA compliant?", a: "Yes. All PHI is encrypted at rest (AES-256) and in transit (TLS 1.3). We sign a Business Associate Agreement (BAA) with every MedSpa partner. Photos are automatically purged after 90 days. Staff access requires MFA and role-based permissions. We maintain signed BAAs with AWS, Supabase, Twilio, and all data processors." },
  { q: "How does Glowa AI actually increase sales by 42%?", a: "The core mechanism is simple: when a client receives an objective AI skin analysis before their appointment, they arrive already understanding their concerns and already seeing the value of specific treatments. The sales conversation changes from \"let me explain why you need this\" to \"which date works for you?\" Clients convert at a significantly higher rate because the AI has already done the education and trust-building work." },
  { q: "How long does setup take?", a: "Most MedSpas are live within a single day. A dedicated onboarding specialist walks you through adding your treatment catalog, customizing your SMS template, and sending your first intake link. No complex integrations required, no technical expertise needed from your team." },
  { q: "How accurate is the AI skin analysis?", a: "Our analysis is validated by a board-certified dermatologist clinical advisor. It uses clinical-grade computer vision to analyze skin texture, tone, pigmentation, and aging markers from 3 guided photos. Results are objective and consistent — unlike visual assessments that can vary between practitioners. We recommend using Glowa AI as a clinical decision-support tool alongside practitioner expertise." },
  { q: "Do clients need to download an app?", a: "No. Everything happens in the browser via an SMS link. Clients tap the link, complete the intake form, upload their photos, and receive their AI report — all without downloading anything or creating an account. This is by design: app download requirements dramatically reduce completion rates." },
  { q: "What integrations do you support?", a: "Glowa AI operates as a standalone platform with direct SMS intake and booking. We integrate with Aesthetic Record, Jane App, and Mindbody for scheduling. Custom EHR integrations are available — contact our team to discuss your specific setup." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ background: "#F2F2EE" }}>
      <div className="wrap tc">
        <span className="label reveal">FAQ</span>
        <h2 className="reveal d1">Questions we get asked</h2>
        <div style={{ maxWidth: 720, margin: "48px auto 0" }}>
          {faqs.map((f, i) => (
            <div key={i} className={`reveal d${Math.min(i+1,5)}`} style={{ borderBottom: "1px solid #E0EAE4", overflow: "hidden" }}>
              <div onClick={() => setOpen(open === i ? null : i)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer", gap: 16 }}>
                <span style={{ fontSize: "0.97rem", fontWeight: 500, color: "#1C3022", textAlign: "left" }}>{f.q}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: "0.8rem", transition: "transform 0.3s,background 0.2s",
                  background: open === i ? "#3FAD6A" : "#E0EAE4", color: open === i ? "#fff" : "#1C3022",
                  transform: open === i ? "rotate(45deg)" : "none"
                }}>+</div>
              </div>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                <div style={{ fontSize: "0.9rem", color: "#4A5E50", lineHeight: 1.7, paddingBottom: 20, textAlign: "left" }}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
