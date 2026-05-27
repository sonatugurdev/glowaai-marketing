"use client";
export function AdvisorsSection() {
  return (
    <section className="advisors section snap-section" id="advisors" data-snap-index="5" data-snap-label="Advisor">
      <div className="container">
        <div className="section-header">
          <span className="label">Built with Doctors</span>
          <h2>Clinical expertise behind every recommendation</h2>
          <p>Glowa AI is designed and validated in partnership with board-certified physicians — not just engineers. Every skin analysis reflects what a real dermatologist would advise.</p>
        </div>
        <div className="advisor-card">
          <div className="advisor-photo" role="img" aria-label="Dr. Logan M. Horejsi, MD">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/advisor-lh.png"
              alt="Dr. Logan M. Horejsi, MD"
              onError={(e) => {
                (e.currentTarget.parentElement as HTMLElement).classList.add("no-img");
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="advisor-fallback" aria-hidden="true">LH</div>
          </div>
          <div className="advisor-info">
            <span className="advisor-eyebrow">Medical Advisor</span>
            <h3>Dr. Logan M. Horejsi, <em>MD</em></h3>
            <p className="advisor-role">Board-Certified Dermatologist</p>
            <p className="advisor-bio">
              Logan leads clinical validation at Glowa AI — ensuring every skin score and treatment recommendation reflects clinical standards developed across years of dermatology practice. Her oversight is what makes Glowa&apos;s AI <em>clinical-grade</em>, not just <em>smart</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
