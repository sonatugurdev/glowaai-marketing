"use client";
export function BeforeAfter() {
  const cards = [
    { before: { bg: "linear-gradient(160deg,#e8d5c4 0%,#d4b89a 100%)", cond: "Uneven tone · Dark spots" }, after: { bg: "linear-gradient(160deg,#c8e6d4 0%,#a8d4b8 100%)", cond: "Even · Radiant · Clear" }, treatment: "HydraFacial + Vitamin C Series", sessions: "3 sessions over 6 weeks", result: "42% improvement in tone score", delay: "d1" },
    { before: { bg: "linear-gradient(160deg,#d4b8b8 0%,#c4a0a0 100%)", cond: "Active acne · Redness" }, after: { bg: "linear-gradient(160deg,#d4e8d4 0%,#b8d4b8 100%)", cond: "Clear · Calm · Balanced" }, treatment: "LED Therapy + Chemical Peel", sessions: "4 sessions over 8 weeks", result: "68% reduction in acne score", delay: "d2" },
    { before: { bg: "linear-gradient(160deg,#e0cca8 0%,#cdb888 100%)", cond: "Fine lines · Volume loss" }, after: { bg: "linear-gradient(160deg,#d4eadc 0%,#b8d8c4 100%)", cond: "Lifted · Firmer · Youthful" }, treatment: "Microneedling RF + Filler", sessions: "2 sessions over 4 weeks", result: "Skin age reduced by 6 years", delay: "d3" },
  ];

  return (
    <section id="before-after" className="section" style={{ background: "#F2F2EE" }}>
      <div className="wrap tc">
        <span className="label reveal">Client Results</span>
        <h2 className="reveal d1">Real transformations your clients can see before they book</h2>
        <p className="reveal d2" style={{ maxWidth: 560, margin: "0 auto" }}>
          Glowa AI shows prospective clients what&apos;s possible based on their skin profile — turning hesitation into confidence and consultations into confirmed appointments.
        </p>
        <div className="ba-grid-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 56 }}>
          {cards.map(c => (
            <div key={c.treatment} className={`ba-card reveal ${c.delay}`} style={{ background: "#fff", border: "1px solid #E0EAE4", borderRadius: 24, overflow: "hidden", transition: "transform 0.25s,box-shadow 0.25s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 48px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
              {/* Panels */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: 220, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 14, position: "relative", overflow: "hidden", background: c.before.bg }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 40%,rgba(180,120,80,0.35) 0%,transparent 25%),radial-gradient(circle at 60% 30%,rgba(160,100,60,0.25) 0%,transparent 20%),radial-gradient(circle at 50% 60%,rgba(190,140,90,0.2) 0%,transparent 30%)" }}/>
                  <div style={{ position: "relative", zIndex: 1, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 4 }}>Before</div>
                  <div style={{ position: "relative", zIndex: 1, fontSize: "0.75rem", fontWeight: 500, color: "rgba(0,0,0,0.65)" }}>{c.before.cond}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 14, position: "relative", overflow: "hidden", background: c.after.bg }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,255,255,0.2) 0%,transparent 100%)" }}/>
                  <div style={{ position: "relative", zIndex: 1, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 4 }}>After</div>
                  <div style={{ position: "relative", zIndex: 1, fontSize: "0.75rem", fontWeight: 500, color: "rgba(0,0,0,0.65)" }}>{c.after.cond}</div>
                </div>
                {/* Divider */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#fff", zIndex: 2, transform: "translateX(-50%)" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#1C3022", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", lineHeight: "28px", textAlign: "center" }}>↔</div>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C3022", marginBottom: 4 }}>{c.treatment}</div>
                <div style={{ fontSize: "0.75rem", color: "#7A9080" }}>{c.sessions}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(63,173,106,0.1)", color: "#3FAD6A", fontSize: "0.72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 100, marginTop: 8 }}>↑ {c.result}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="reveal" style={{ marginTop: 32, fontSize: "0.88rem", color: "#7A9080" }}>
          Results shown are representative of treatment outcomes. Individual results may vary. All treatments performed by licensed practitioners.
        </p>
      </div>
      <style>{`@media(max-width:768px){ .ba-grid-wrap { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
