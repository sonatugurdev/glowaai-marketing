"use client";
export function Footer() {
  return (
    <footer style={{ background: "#132B1C", padding: "56px 0 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="wrap">
        <div className="footer-grid-wrap" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <svg width="152" height="52" viewBox="0 0 210 74" fill="none">
              <text x="0" y="52" fontFamily="'DM Sans',sans-serif" fontSize="52" fontWeight="400" fill="#FFFFFF" letterSpacing="-1">Glowa</text>
              <rect x="160" y="33" width="34" height="22" rx="5" fill="#3FAD6A"/>
              <text x="165" y="49" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="500" fill="#FFFFFF" letterSpacing="1.5">AI</text>
              <rect x="0" y="62" width="194" height="0.5" fill="#1E3D2A"/>
              <text x="0" y="73" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="400" fill="#8ED4A8" letterSpacing="2">AI-POWERED SKIN INTELLIGENCE</text>
            </svg>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: "14px 0 20px", maxWidth: 280 }}>
              Clinical-grade AI that increases MedSpa sales by 42% and makes the client intake experience exceptional.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["𝕏","in","📘","📸"].map((icon, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,0.12)"; (e.currentTarget as HTMLDivElement).style.color="#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.color="rgba(255,255,255,0.5)"; }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <FooterCol title="Product" links={[["Features","#features"],["Results","#before-after"],["FAQ","#faq"],["Book a Demo","#cta-bar"]]}/>
          <FooterCol title="Company" links={[["About","#"],["Blog","#"],["Careers","#"],["Contact","mailto:hello@glowa.ai"],["Press","#"]]}/>
          <FooterCol title="Legal" links={[["Privacy Policy","#"],["Terms of Service","#"],["HIPAA Compliance","#"],["Security","#"],["Cookie Policy","#"]]}/>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }} className="footer-bottom-wrap">
          <span>© 2026 Glowa AI, Inc. All rights reserved.</span>
          <div>
            <a href="mailto:hello@glowa.ai" style={{ color: "rgba(255,255,255,0.25)", marginLeft: 20, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.25)")}>hello@glowa.ai</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.25)", marginLeft: 20, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.25)")}>Privacy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.25)", marginLeft: 20, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.25)")}>Terms</a>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .footer-grid-wrap { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media(max-width:480px){ .footer-grid-wrap { grid-template-columns: 1fr !important; } }
        @media(max-width:768px){ .footer-bottom-wrap { flex-direction: column !important; gap: 10px !important; text-align: center !important; } }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h5 style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>{title}</h5>
      <ul style={{ listStyle: "none" }}>
        {links.map(([label, href]) => (
          <li key={label} style={{ marginBottom: 10 }}>
            <a href={href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color="#fff")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.5)")}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
