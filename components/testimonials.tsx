"use client";
export function Testimonials() {
  const cards = [
    { av: "DR", avBg: "linear-gradient(135deg,#3FAD6A,#2D8A52)", quote: '"Our intake time dropped from 35 minutes to under 10. Clients arrive already knowing their skin concerns and excited about the treatment plan. It completely changed how our consultations feel — and our revenue reflects it."', name: "Dr. Diana R., MD", role: "Medical Director · JUVA Skin & Laser Center, Park Ave", delay: "d1" },
    { av: "JS", avBg: "linear-gradient(135deg,#8ED4A8,#5DB87A)", quote: '"The AI recommendations are remarkably accurate. Clients trust the report far more than a verbal suggestion. Our average ticket size went up 38% in the first two months. The sales process is genuinely easier now."', name: "Dr. James S., MD", role: "Founder · Shafer Clinic Fifth Avenue", delay: "d2" },
    { av: "NK", avBg: "linear-gradient(135deg,#5DB87A,#3a9a5c)", quote: '"We were skeptical at first, but the results were immediate. Clients complete the intake before arriving, see their before/after potential, and book on the spot. Glowa AI has made closing a treatment conversation completely natural."', name: "Nicole K., NP", role: "Clinical Director · Tribeca MedSpa", delay: "d3" },
  ];

  return (
    <section id="testimonials" className="section" style={{ background: "#fff" }}>
      <div className="wrap tc">
        <span className="label reveal">What practitioners say</span>
        <h2 className="reveal d1">Trusted by New York&apos;s leading aesthetic practices</h2>
        <div className="test-grid-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 48 }}>
          {cards.map(c => (
            <div key={c.name} className={`reveal ${c.delay}`} style={{ background: "#F2F2EE", border: "1px solid #E0EAE4", borderRadius: 16, padding: 28, transition: "transform 0.2s,box-shadow 0.2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
              <div style={{ color: "#3FAD6A", fontSize: "0.9rem", marginBottom: 14, letterSpacing: "2px" }}>★★★★★</div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4A5E50", marginBottom: 20, fontStyle: "italic" }}>{c.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: c.avBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 600, color: "#fff", flexShrink: 0 }}>{c.av}</div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1C3022" }}>{c.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#7A9080" }}>{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){ .test-grid-wrap { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
