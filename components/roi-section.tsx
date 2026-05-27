export function ROISection() {
  return (
    <section className="roi-section section snap-section" id="roi" data-snap-index="2" data-snap-label="ROI">
      <div className="container">
        <div className="section-header">
          <span className="label">The ROI</span>
          <h2>Results MedSpa owners actually <em style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: 300, color: "var(--sage)" }}>feel.</em></h2>
          <p>What changes after Glowa goes live — measured across our first 90 days with every new MedSpa.</p>
        </div>
        <div className="roi-grid">
          <div className="roi-card">
            <span className="roi-card-eyebrow">Revenue</span>
            <div className="roi-card-val"><em>+42%</em></div>
            <p className="roi-card-label">Average sales lift</p>
            <p className="roi-card-sub">In the first 90 days post-launch</p>
          </div>
          <div className="roi-card">
            <span className="roi-card-eyebrow">Efficiency</span>
            <div className="roi-card-val"><em>50%</em><span className="roi-card-unit">faster</span></div>
            <p className="roi-card-label">Intake completion</p>
            <p className="roi-card-sub">vs. traditional paper forms</p>
          </div>
          <div className="roi-card">
            <span className="roi-card-eyebrow">Onboarding</span>
            <div className="roi-card-val"><em>1</em><span className="roi-card-unit">day</span></div>
            <p className="roi-card-label">Average time to go live</p>
            <p className="roi-card-sub">With a dedicated onboarding team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
