"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="/" aria-label="Glowa AI">
            <svg width="172" height="62" viewBox="0 0 148 52" fill="none">
              <g transform="translate(0,6)">
                <path d="M18 2 C18 2 6 8 6 20 C6 29 13 36 20 36 C20 36 20 24 30 16 C22 20 20 28 20 28 C20 28 26 14 18 2Z" fill="#0891B2"/>
                <text x="40" y="30" fontFamily="DM Sans, sans-serif" fontSize="22" fontWeight="500" fill="#0B1F26" letterSpacing="-0.5">Glowa</text>
                <rect x="108" y="18" width="24" height="15" rx="4" fill="#0B1F26"/>
                <text x="120" y="29.5" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.5">AI</text>
              </g>
            </svg>
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#results-section">Results</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-outline" style={{ padding: "10px 20px", fontSize: ".88rem" }}>Sign in</a>
            <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: ".88rem" }}>Book a demo</a>
          </div>
          <button className="nav-hamburger" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : undefined }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : undefined }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <a href="#features" onClick={close}>Features</a>
        <a href="#results-section" onClick={close}>Results</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <div className="mobile-actions">
          <a href="#contact" className="btn btn-outline btn-lg" onClick={close}>Sign in</a>
          <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" onClick={close}>Book a demo</a>
        </div>
      </div>
    </>
  );
}
