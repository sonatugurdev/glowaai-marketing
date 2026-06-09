"use client";
import { useState } from "react";

const CARDS = [
  {
    step: "Step 01",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12c0 4.5 4 8 9 8a9.9 9.9 0 0 0 4.3-1L21 20l-1.4-3.7C20.5 15 21 13.6 21 12c0-4.5-4-8-9-8s-9 3.5-9 8z" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11h.01M12 11h.01M16 11h.01" strokeLinecap="round"/></svg>,
    title: "SMS-first intake",
    body: "One link sent. Ten smart questions answered. Three guided photos uploaded — all before they walk in.",
    backTitle: "Frictionless, mobile-native intake",
    backBody: "Glowa replaces clipboards with a personalized SMS link. Clients complete an adaptive 10-question flow and upload 3 guided selfies — no app, no account, no wait.",
    bullets: ["Adaptive questions based on goals & history", "Pose-guided photo capture for clinical accuracy", "Secure link expires after 48 hours"],
  },
  {
    step: "Step 02",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" strokeLinecap="round"/><circle cx="11" cy="11" r="3" strokeLinecap="round"/><path d="M16 16l4.5 4.5" strokeLinecap="round"/></svg>,
    title: "Photo analysis",
    body: "Clinical-grade computer vision scores 6 skin metrics on a 0–100 scale — validated by a board-certified dermatologist.",
    backTitle: "Six metrics. One objective score.",
    backBody: "Each uploaded photo is analyzed by Glowa's vision model — trained on dermatology-grade imagery and clinically validated by Logan M. Horejsi, Board-Certified Dermatologist.",
    bullets: ["Hydration, Texture, Pigmentation, Acne, Aging, Redness", "Frontal + profile analysis with zone mapping", "HIPAA-compliant photo storage & auto-purge"],
  },
  {
    step: "Step 03",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Treatment plan",
    body: "Personalized recommendations ranked by priority — with clear rationale and one-tap booking from the report.",
    backTitle: "The AI makes the case. Clients say yes.",
    backBody: "Every plan ranks treatments by clinical priority and ties them back to specific metrics — so recommendations feel earned, not pitched.",
    bullets: ["Treatments ranked by impact on weakest metrics", "One-tap booking directly from the AI report", "Revenue confirmed before the consultation begins"],
  },
];

export function HowItWorks() {
  const [flipped, setFlipped] = useState<number | null>(null);
  function toggle(i: number) { setFlipped(f => f === i ? null : i); }

  return (
    <section className="features section snap-section" id="features" data-snap-index="1" data-snap-label="How it works">
      <div className="container">
        <div className="section-header">
          <span className="label">How It Works</span>
          <h2>Meet your patients before they meet you</h2>
          <p>From the first SMS to the final treatment plan — one seamless workflow that converts before clients even arrive.</p>
        </div>
        <div className="flip-grid">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`flip-card${flipped === i ? " is-flipped" : ""}`}
              tabIndex={0}
              role="button"
              aria-pressed={flipped === i}
              onClick={() => toggle(i)}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); } }}
            >
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <span className="flip-step">{c.step}</span>
                  <div className="flip-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="flip-tap">
                    Tap to learn more
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <div className="flip-face flip-back">
                  <span className="flip-step">{c.step} · Detail</span>
                  <h3>{c.backTitle}</h3>
                  <p>{c.backBody}</p>
                  <ul>{c.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  <span className="flip-back-close">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Tap to flip back
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
