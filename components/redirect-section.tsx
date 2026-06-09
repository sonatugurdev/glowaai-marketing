const NAMES = ["Elite MedSpa", "Revive Aesthetics", "Luxe Skin Studio", "Pure Glow Clinic"];

export function RedirectSection() {
  const doubled = [...NAMES, ...NAMES];
  return (
    <section className="redirect-section snap-section" id="contact" data-snap-index="6" data-snap-label="Get started" data-snap-dark="">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <span className="label" style={{ color: "rgba(34,211,238,.85)" }}>Ready to begin</span>
          <h2 style={{ color: "var(--white)" }}>
            Join the MedSpas growing with{" "}
            <em style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: 300, color: "var(--sage-l)" }}>Glowa.</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,.55)" }}>
            See exactly how Glowa would work for your practice — with your intake flow, your treatments, your branding.
          </p>
        </div>

        <div className="cta-actions">
          <a href="https://calendly.com/emre-glowaai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-sage btn-lg">
            Book a demo
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="mailto:hello@glowa.ai" className="btn btn-outline-white btn-lg">Contact us</a>
        </div>

        <div className="cta-badges">
          {[
            { label: "HIPAA compliant", d: "M13 6V5a5 5 0 00-10 0v1M3 6h10a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" },
            { label: "Clinically validated", d: "M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.3l4.2-.7L8 1z" },
            { label: "Live in 1 day", d: "M8 2v4l3 3M14 8A6 6 0 112 8a6 6 0 0112 0z" },
            { label: "Dedicated onboarding", d: "M13 5l-7 7-3-3" },
          ].map(b => (
            <span key={b.label} className="cta-badge">
              <svg viewBox="0 0 16 16" fill="none"><path d={b.d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
