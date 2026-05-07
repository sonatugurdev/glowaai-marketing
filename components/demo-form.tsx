"use client";
import { useState } from "react";

export function DemoForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"error"|"done">("idle");

  function handleCta() {
    if (!email || !email.includes("@")) { setStatus("error"); setTimeout(() => setStatus("idle"), 2000); return; }
    setEmail("");
    setStatus("done");
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <section id="cta-bar" style={{ background: "#1A4A2E", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.25, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }}/>
      {/* Glow */}
      <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, pointerEvents: "none", background: "radial-gradient(ellipse at center,rgba(63,173,106,0.13) 0%,transparent 65%)", opacity: 0.5 }}/>
      <div className="wrap">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <span className="label label-dark reveal">Get started</span>
          <h2 style={{ color: "#fff" }} className="reveal d1">Ready to increase your MedSpa revenue by 42%?</h2>
          <p className="reveal d2" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 36px" }}>
            Book a personalized demo and we&apos;ll show you exactly how Glowa AI works with your practice — your treatments, your clients, your workflow.
          </p>
          <div className="reveal d3 cta-form-wrap" style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto 16px" }}>
            <input
              type="email"
              placeholder={status === "done" ? "✓ We'll be in touch within 24 hours." : "Enter your work email"}
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1, padding: "13px 18px", borderRadius: 8, outline: "none", transition: "all 0.2s",
                border: `1px solid ${status === "error" ? "#ff5f57" : status === "done" ? "#3FAD6A" : "rgba(255,255,255,0.1)"}`,
                background: "rgba(255,255,255,0.06)", color: "#fff",
                fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem"
              }}
            />
            <button onClick={handleCta} className="btn btn-mint">Book a demo →</button>
          </div>
          <div className="reveal d4 cta-trust-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, marginTop: 28, flexWrap: "wrap" }}>
            {["HIPAA Compliant","Clinically Validated","Dedicated Onboarding","Live in 1 Day"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
                <span style={{ color: "#3FAD6A", fontWeight: 700 }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .cta-form-wrap { flex-direction: column !important; }
          .cta-trust-wrap { gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
