"use client";
export function Features() {
  return (
    <section id="features" className="section" style={{ background: "#fff" }}>
      <div className="wrap">
        {/* Intro */}
        <div className="reveal" style={{ maxWidth: 560 }}>
          <span className="label">Features</span>
          <h2>Everything your MedSpa needs to sell more, effortlessly</h2>
        </div>

        {/* 6-cell grid */}
        <div className="reveal d1 feat-grid-outer" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#E0EAE4", border: "1px solid #E0EAE4", borderRadius: 16, overflow: "hidden", marginTop: 56 }}>
          {[
            { icon: "💬", title: "SMS Intake Links", body: "Send personalized intake links in one click. Clients complete everything on their phone before they arrive." },
            { icon: "📸", title: "AI Skin Analysis", body: "Clinical-grade computer vision analyzes 3 guided photos for texture, tone, pigmentation, and aging signs." },
            { icon: "✨", title: "Smart Recommendations", body: "AI generates personalized treatment plans ranked by priority — clients arrive already wanting to book." },
            { icon: "📅", title: "Direct Booking", body: "Clients book recommended treatments in one tap directly from their AI report. Revenue secured before the visit." },
            { icon: "📊", title: "Revenue Analytics", body: "Track AI-attributed revenue, treatment uptake, and which recommendations convert to sales most reliably." },
            { icon: "🔒", title: "HIPAA Compliant", body: "PHI encrypted at rest and in transit. Signed BAA, audit logs, role-based access, and automatic data expiry." },
          ].map(f => (
            <div key={f.title} className="feat-cell" style={{ background: "#fff", padding: "32px 28px", transition: "background 0.2s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background="#F2F2EE")} onMouseLeave={e => (e.currentTarget.style.background="#fff")}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(63,173,106,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: 18 }}>{f.icon}</div>
              <h4 style={{ marginBottom: 8, color: "#1C3022", fontSize: "0.95rem" }}>{f.title}</h4>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
        </div>

        {/* Feature row 1 — SMS */}
        <div className="reveal feat-row-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", padding: "80px 0", borderBottom: "1px solid #E0EAE4", marginTop: 80 }}>
          <div>
            <span className="label">SMS-First Intake</span>
            <h2 style={{ marginBottom: 16 }}>Clients arrive ready to buy — not ready to fill out forms</h2>
            <p style={{ marginBottom: 24 }}>Send a personalized link and your client completes everything before they walk in. By the time they arrive, they&apos;ve already seen their AI skin report and have a treatment in mind.</p>
            <ul className="feat-bullets">
              <li>One-click SMS send from your dashboard</li>
              <li>10 intelligent questions with branching logic</li>
              <li>67% faster than traditional paper intake</li>
              <li>Links are secure and expire after 48 hours</li>
            </ul>
          </div>
          <div>
            <div style={{ background: "#1A4A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 28 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, color: "#72C896", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Client SMS Thread</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "8px 0" }}>
                <div style={{ maxWidth: "75%", padding: "10px 14px", background: "rgba(63,173,106,0.15)", color: "#72C896", borderRadius: "4px 16px 16px 16px", alignSelf: "flex-start", fontSize: "0.82rem", lineHeight: 1.5 }}>
                  Hi Sarah! JUVA Skin &amp; Laser sent you a skin intake form. Takes about 10 min — complete before your appointment: <span style={{ color: "#3FAD6A", textDecoration: "underline" }}>glowa.ai/i/sarah-juva</span>
                </div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", textAlign: "center", margin: "4px 0" }}>10:24 AM · Delivered ✓</div>
                <div style={{ maxWidth: "75%", padding: "10px 14px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: "16px 4px 16px 16px", alignSelf: "flex-end", fontSize: "0.82rem", lineHeight: 1.5 }}>Just finished! That was so easy 😊</div>
                <div style={{ maxWidth: "75%", padding: "10px 14px", background: "rgba(63,173,106,0.15)", color: "#72C896", borderRadius: "4px 16px 16px 16px", alignSelf: "flex-start", fontSize: "0.82rem", lineHeight: 1.5 }}>
                  Your skin analysis is ready! View your personalized report and book your recommended treatment: <span style={{ color: "#3FAD6A", textDecoration: "underline" }}>glowa.ai/r/sarah-report</span>
                </div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", textAlign: "center", margin: "4px 0" }}>10:41 AM · Delivered ✓</div>
                <div style={{ maxWidth: "75%", padding: "10px 14px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: "16px 4px 16px 16px", alignSelf: "flex-end", fontSize: "0.82rem", lineHeight: 1.5 }}>Just booked the HydraFacial! Can&apos;t wait 🌿</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature row 2 — AI Analysis (reversed) */}
        <div className="reveal feat-row-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", padding: "80px 0", borderBottom: "1px solid #E0EAE4" }}>
          <div style={{ order: 2 }}>
            <span className="label">AI Skin Analysis</span>
            <h2 style={{ marginBottom: 16 }}>Clinical-grade analysis that makes your recommendations unignorable</h2>
            <p style={{ marginBottom: 24 }}>3 guided photos. Our AI analyzes texture, tone, pigmentation, hydration, and aging signs. Clients receive an objective, personalized report — which makes your treatment recommendations feel inevitable, not salesy.</p>
            <ul className="feat-bullets">
              <li>Frontal, left, and right profile photo analysis</li>
              <li>6 scored skin metrics on a 0–100 scale</li>
              <li>Detected concerns ranked by clinical severity</li>
              <li>Estimated skin age based on photo analysis</li>
            </ul>
          </div>
          <div style={{ order: 1 }}>
            <div style={{ background: "#1A4A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 28 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, color: "#72C896", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Sarah&apos;s Skin Report</div>
              {/* Score ring */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none"/>
                    <circle cx="40" cy="40" r="34" stroke="#3FAD6A" strokeWidth="8" fill="none" strokeDasharray="213.6" strokeDashoffset="40" strokeLinecap="round"/>
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>82</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}>Overall Skin Health</div>
                  <div style={{ fontSize: "0.68rem", color: "#3FAD6A", marginTop: 3 }}>↑ Good range · Est. skin age 28</div>
                </div>
              </div>
              {/* Score bars */}
              {[
                { lbl: "Hydration", val: 91, color: "#3FAD6A" },
                { lbl: "Texture", val: 74, color: "#3FAD6A" },
                { lbl: "Pigmentation", val: 68, color: "#FFBD2E" },
                { lbl: "Acne", val: 88, color: "#3FAD6A" },
                { lbl: "Aging", val: 85, color: "#3FAD6A" },
              ].map(m => (
                <div key={m.lbl} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", width: 72, flexShrink: 0 }}>{m.lbl}</div>
                  <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 10, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${m.val}%`, borderRadius: 10, background: m.color }}/>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", width: 24, textAlign: "right" }}>{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature row 3 — Booking */}
        <div className="reveal feat-row-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", padding: "80px 0" }}>
          <div>
            <span className="label">Recommendations & Booking</span>
            <h2 style={{ marginBottom: 16 }}>The AI makes the case. Your client just says yes.</h2>
            <p style={{ marginBottom: 24 }}>When a client sees their skin concerns laid out objectively with a ranked treatment plan from clinical AI — they don&apos;t need to be sold. They need to pick a date. That&apos;s how Glowa AI increases sales by 42%.</p>
            <ul className="feat-bullets">
              <li>Treatments ranked by priority and clinical relevance</li>
              <li>Clear rationale removes hesitation and skepticism</li>
              <li>One-tap booking from inside the AI report</li>
              <li>Revenue confirmed before the consultation begins</li>
            </ul>
          </div>
          <div>
            <div style={{ background: "#1A4A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 28 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, color: "#72C896", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Your Treatment Plan</div>
              {[
                { icon: "💧", title: "HydraFacial — Priority #1", sub: "Addresses: texture, mild pigmentation · 45 min · from $195", tag: "Top Pick" },
                { icon: "⚗️", title: "Vitamin C Brightening Peel", sub: "Addresses: pigmentation, uneven tone · 30 min · from $145", tag: "#2" },
                { icon: "🔬", title: "Microneedling RF", sub: "Addresses: texture, collagen · 60 min · from $299", tag: "#3" },
              ].map(rec => (
                <div key={rec.title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(63,173,106,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{rec.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", marginBottom: 3 }}>{rec.title}</div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>{rec.sub}</div>
                  </div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 500, padding: "3px 8px", borderRadius: 6, background: "rgba(63,173,106,0.15)", color: "#3FAD6A", whiteSpace: "nowrap" }}>{rec.tag}</div>
                </div>
              ))}
              <button style={{ width: "100%", marginTop: 14, background: "#3FAD6A", color: "#fff", border: "none", borderRadius: 8, padding: 12, fontSize: "0.82rem", fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}>
                Book HydraFacial →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .feat-grid-outer { grid-template-columns: 1fr !important; }
          .feat-row-wrap { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 0 !important; }
          .feat-row-wrap > div { order: unset !important; }
        }
        @media(max-width:1024px){
          .feat-row-wrap { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 0 !important; }
          .feat-row-wrap > div { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
