"use client";
export function Metrics() {
  const cells = [
    { label: "Sales Increase", val: "+42%", desc: "MedSpas using Glowa AI report an average 42% increase in treatment sales within the first 90 days." },
    { label: "Faster Intake", val: "50%", desc: "Reduce onboarding from 30+ minutes to under 10 with SMS-first AI intake. Staff spend time on care, not paperwork." },
    { label: "Treatment Uptake", val: "+40%", desc: "AI-backed recommendations increase client confidence. Clients who see their report are far more likely to book." },
    { label: "Revenue Per Client", val: "+$8K", desc: "Annual client lifetime value boost driven by increased uptake and higher repeat visit frequency." },
    { label: "Client Satisfaction", val: "92%", desc: "Clients consistently rate the personalized intake experience as significantly better than any previous process." },
    { label: "Time to Go Live", val: "1 day", desc: "Your dedicated onboarding specialist gets you live in a single day. No complex integrations. No lengthy setup." },
  ];

  return (
    <section id="metrics" className="section" style={{ background: "#1A4A2E" }}>
      <div className="wrap tc">
        <span className="label label-dark reveal">Impact</span>
        <h2 style={{ color: "#fff" }} className="reveal d1">The numbers speak<br/>for themselves</h2>
        <div className="reveal d2 metrics-grid-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, overflow: "hidden", marginTop: 56 }}>
          {cells.map(c => (
            <div key={c.label} style={{ background: "#1F5535", padding: "40px 32px", transition: "background 0.2s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background="#26633E")} onMouseLeave={e => (e.currentTarget.style.background="#1F5535")}>
              <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "#72C896", marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>{c.label}</div>
              <div style={{ fontSize: "3.2rem", fontWeight: 600, color: "#3FAD6A", letterSpacing: "-2px", lineHeight: 1, marginBottom: 6 }}>{c.val}</div>
              <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .metrics-grid-wrap { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:480px){ .metrics-grid-wrap { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
