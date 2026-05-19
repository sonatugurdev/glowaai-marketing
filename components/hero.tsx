"use client";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); obs.unobserve(e.target); }});
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero" style={{
      background: "linear-gradient(170deg,#E8F5EE 0%,#F2FAF5 40%,#F8FBF9 100%)",
      padding: "148px 0 0", position: "relative", overflow: "hidden"
    }}>
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.25,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`
      }}/>
      {/* Glow */}
      <div style={{
        position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
        width: 900, height: 600, pointerEvents: "none",
        background: "radial-gradient(ellipse at center,rgba(63,173,106,0.13) 0%,transparent 65%)"
      }}/>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800, margin: "0 auto", padding: "0 28px" }}>
        <h1 className="reveal" style={{ color: "#1C3022", marginBottom: 20 }}>
          AI-Powered Skin<br/>Intelligence for <em style={{ fontStyle: "normal", color: "#3FAD6A" }}>MedSpas</em>
        </h1>
        <p className="reveal d1" style={{ fontSize: "1.1rem", color: "rgba(28,48,34,0.58)", maxWidth: 600, margin: "0 auto 36px" }}>
          Clinical-grade AI skin analysis that increases your sales by <strong style={{ color: "#72C896" }}>42%</strong> and makes the sales process effortless — delivered to your clients before they walk through the door.
        </p>
        <div className="reveal d2" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-mint btn-lg">Book a demo →</a>
          <a href="#features" className="btn btn-ghost btn-lg">See how it works</a>
        </div>
        <div className="reveal d3" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, fontSize: "0.8rem", color: "rgba(28,48,34,0.42)", flexWrap: "wrap" }}>
          {["HIPAA Compliant","Clinically Validated","Live in 1 Day","Dedicated Onboarding"].map(t => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#3FAD6A", fontWeight: 700 }}>✓</span>{t}
            </span>
          ))}
        </div>
      </div>

      {/* Mockup */}
      <div className="reveal d4" style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "48px auto 0", padding: "0 28px" }}>
        <div style={{
          background: "#1F5535", border: "1px solid rgba(26,74,46,0.25)",
          borderRadius: "16px 16px 0 0", overflow: "hidden",
          boxShadow: "0 -8px 60px rgba(26,74,46,0.18),0 0 0 1px rgba(26,74,46,0.08)"
        }}>
          {/* Browser bar */}
          <div style={{ background: "#162D1F", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
            <div>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", marginRight: 6 }}/>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", marginRight: 6 }}/>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }}/>
            </div>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 5, padding: "5px 12px", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
              app.glowa.ai/dashboard
            </div>
          </div>

          {/* Body */}
          <div className="mockup-body-grid" style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 400 }}>
            {/* Sidebar */}
            <div className="mock-sidebar-panel" style={{ background: "#0B1C12", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "20px 0" }}>
              <div style={{ padding: "0 18px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 16 }}>
                <svg width="90" height="32" viewBox="0 0 210 74" fill="none">
                  <text x="0" y="52" fontFamily="'DM Sans',sans-serif" fontSize="52" fontWeight="400" fill="#FFFFFF" letterSpacing="-1">Glowa</text>
                  <rect x="160" y="33" width="34" height="22" rx="5" fill="#3FAD6A"/>
                  <text x="165" y="49" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="500" fill="#FFFFFF" letterSpacing="1.5">AI</text>
                </svg>
              </div>
              {[
                { icon: "📊", label: "Dashboard", active: true },
                { icon: "👥", label: "Clients" },
                { icon: "💬", label: "Intake Links" },
                { icon: "✨", label: "AI Reports" },
                { icon: "📅", label: "Bookings" },
                { icon: "📈", label: "Analytics" },
                { icon: "⚙️", label: "Settings" },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 18px", fontSize: "0.8rem",
                  color: item.active ? "#fff" : "rgba(255,255,255,0.45)",
                  background: item.active ? "rgba(93,184,122,0.1)" : "transparent",
                  borderLeft: item.active ? "2px solid #3FAD6A" : "2px solid transparent",
                  cursor: "pointer"
                }}>
                  <span style={{ fontSize: "0.95rem", width: 16, textAlign: "center" }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main */}
            <div style={{ padding: 24 }}>
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>Good morning, Dr. Logan 👋</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Tuesday, April 29, 2026 · JUVA Skin & Laser Center</div>
                </div>
                <button style={{ background: "#3FAD6A", color: "#fff", border: "none", borderRadius: 6, padding: "7px 14px", fontSize: "0.72rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                  + Send Intake Link
                </button>
              </div>

              {/* Stats */}
              <div className="mock-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
                {[
                  { val: "48", lbl: "Intakes this month", chg: "↑ 23% vs last month" },
                  { val: "91%", lbl: "Completion rate", chg: "↑ 12% vs last month" },
                  { val: "38", lbl: "Bookings from AI", chg: "↑ 42% sales increase" },
                  { val: "$42K", lbl: "Revenue attributed", chg: "↑ $8K per client avg" },
                ].map(s => (
                  <div key={s.lbl} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: 14 }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.5px" }}>{s.val}</div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.lbl}</div>
                    <div style={{ fontSize: "0.65rem", color: "#3FAD6A", marginTop: 4 }}>{s.chg}</div>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "9px 14px", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.65rem", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  <span>Client</span><span>Skin Score</span><span>Recommendation</span><span>Status</span>
                </div>
                {[
                  { av: "SJ", name: "Sarah J.", score: 82, scoreHi: true, rec: "HydraFacial", statusColor: "#3FAD6A", status: "Booked", avBg: "linear-gradient(135deg,#3FAD6A,#2D8A52)" },
                  { av: "ML", name: "Maria L.", score: 67, scoreHi: false, rec: "Chemical Peel", statusColor: "#FFBD2E", status: "Pending", avBg: "linear-gradient(135deg,#8ED4A8,#5DB87A)" },
                  { av: "AK", name: "Amy K.", score: 91, scoreHi: true, rec: "Microneedling", statusColor: "#3FAD6A", status: "Booked", avBg: "linear-gradient(135deg,#5DB87A,#3a9a5c)" },
                ].map((row, i) => (
                  <div key={row.name} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "10px 14px", borderBottom: i < 2 ? "1px solid rgba(30,61,42,0.5)" : "none", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", alignItems: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: row.avBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 600, color: "#fff", flexShrink: 0 }}>{row.av}</div>
                      {row.name}
                    </div>
                    <div>
                      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 20, borderRadius: 4, fontSize: "0.65rem", fontWeight: 600, background: row.scoreHi ? "rgba(93,184,122,0.15)" : "rgba(255,189,46,0.12)", color: row.scoreHi ? "#3FAD6A" : "#FFBD2E" }}>{row.score}</span>
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.5)" }}>{row.rec}</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: row.statusColor, flexShrink: 0 }}/>
                      <span style={{ color: row.statusColor, fontSize: "0.68rem", fontWeight: 500 }}>{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #hero { padding: 120px 0 0 !important; }
          .mock-sidebar-panel { display: none !important; }
          .mockup-body-grid { grid-template-columns: 1fr !important; }
          .mock-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
        }
        @media(max-width:1024px){
          .mockup-body-grid { grid-template-columns: 180px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
