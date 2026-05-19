"use client";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav id="nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(26,74,46,0.97)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)", transition: "box-shadow 0.3s"
      }}>
        <div className="nav-inner" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64, maxWidth: 1120, margin: "0 auto", padding: "0 28px"
        }}>
          {/* Logo */}
          <a href="#">
            <svg width="164" height="56" viewBox="0 0 210 74" fill="none">
              <text x="0" y="52" fontFamily="'DM Sans',sans-serif" fontSize="52" fontWeight="400" fill="#FFFFFF" letterSpacing="-1">Glowa</text>
              <rect x="160" y="33" width="34" height="22" rx="5" fill="#3FAD6A"/>
              <text x="165" y="49" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="500" fill="#FFFFFF" letterSpacing="1.5">AI</text>
              <rect x="0" y="62" width="194" height="0.5" fill="#1E3D2A"/>
              <text x="0" y="73" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="400" fill="#8ED4A8" letterSpacing="2">AI-POWERED SKIN INTELLIGENCE</text>
            </svg>
          </a>

          {/* Desktop links */}
          <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }} className="nav-links-desktop">
            {[["Features","#features"],["Results","#before-after"],["Testimonials","#testimonials"],["FAQ","#faq"]].map(([l,h]) => (
              <li key={h}><a href={h} style={{ fontSize: "0.88rem", fontWeight: 400, color: "rgba(255,255,255,0.7)", transition: "color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.color="#fff")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.7)")}>{l}</a></li>
            ))}
          </ul>

          {/* Desktop right */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-right-desktop">
            <a href="#cta-bar" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color="#fff")} onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")}>Sign in</a>
            <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-mint" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>Book a demo</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(v => !v)} className="hamburger-btn" style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", padding: 4, background: "none", border: "none" }}
            aria-label="Menu">
            <span style={{ display: "block", width: 20, height: 1.5, background: "#fff", borderRadius: 2 }}/>
            <span style={{ display: "block", width: 20, height: 1.5, background: "#fff", borderRadius: 2 }}/>
            <span style={{ display: "block", width: 20, height: 1.5, background: "#fff", borderRadius: 2 }}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        display: open ? "block" : "none",
        position: "fixed", top: 64, left: 0, right: 0,
        background: "#1A4A2E", borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "16px 28px 24px", zIndex: 99
      }}>
        {[["Features","#features"],["Results","#before-after"],["Testimonials","#testimonials"],["FAQ","#faq"]].map(([l,h]) => (
          <a key={h} href={h} onClick={() => setOpen(false)} style={{
            display: "block", padding: "12px 0", fontSize: "0.95rem",
            color: "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.1)"
          }}>{l}</a>
        ))}
        <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-mint" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>Book a demo</a>
      </div>

      <style>{`
        @media(max-width:768px){
          .nav-links-desktop { display: none !important; }
          .nav-right-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
