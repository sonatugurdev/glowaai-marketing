"use client";
import { useEffect, useRef } from "react";

function CompareSlider({ before, after, beforeAlt, afterAlt, afterLabel }: {
  before: string; after: string; beforeAlt: string; afterAlt: string; afterLabel: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let dragging = false;

    function setFromX(clientX: number) {
      const rect = slider!.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      slider!.style.setProperty("--pos", pct + "%");
    }

    const start = (e: MouseEvent | TouchEvent) => {
      dragging = true;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromX(x);
      if ("touches" in e) return;
      e.preventDefault();
    };
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromX(x);
    };
    const end = () => { dragging = false; };

    slider.addEventListener("mousedown", start as EventListener);
    slider.addEventListener("touchstart", start as EventListener, { passive: true });
    window.addEventListener("mousemove", move as EventListener);
    window.addEventListener("touchmove", move as EventListener, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);

    // Entrance hint animation
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const startTime = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - startTime) / 1800);
          slider!.style.setProperty("--pos", (50 + Math.sin(t * Math.PI * 2) * 22) + "%");
          if (t < 1) requestAnimationFrame(step);
          else slider!.style.setProperty("--pos", "50%");
        };
        requestAnimationFrame(step);
        io.unobserve(slider!);
      });
    }, { threshold: 0.4 });
    io.observe(slider);

    return () => {
      slider.removeEventListener("mousedown", start as EventListener);
      slider.removeEventListener("touchstart", start as EventListener);
      window.removeEventListener("mousemove", move as EventListener);
      window.removeEventListener("touchmove", move as EventListener);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
      io.disconnect();
    };
  }, []);

  return (
    <div className="compare-slider" ref={sliderRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cmp-img cmp-before" src={before} alt={beforeAlt} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cmp-img cmp-after" src={after} alt={afterAlt} />
      <span className="cmp-tag cmp-tag-before">Before</span>
      <span className="cmp-tag cmp-tag-after">{afterLabel}</span>
      <div className="cmp-handle">
        <button className="cmp-handle-knob" aria-label="Drag to compare">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 4L2 8l3 4M11 4l3 4-3 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export function ResultsSection() {
  return (
    <section className="results-section snap-section" id="results-section" data-snap-index="4" data-snap-label="Results">
      <div className="container">
        <div className="section-header">
          <span className="label">Real Client Results</span>
          <h2>The proof is on their <em style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: 300, color: "var(--sage)" }}>skin.</em></h2>
          <p>Drag the slider on each photo to see the change. Stories straight from the chair.</p>
        </div>
        <div className="results-grid">
          <article className="result-card">
            <CompareSlider
              before="/assets/result-1-before.png"
              after="/assets/result-1-after.png"
              beforeAlt="Before treatment"
              afterAlt="After treatment"
              afterLabel="After · 8 wks"
            />
            <div className="result-meta">
              <span className="result-treatment">Vitamin C Peel · 3 sessions</span>
              <span className="result-weeks">8 weeks</span>
            </div>
            <p className="result-quote">"The AI flagged pigmentation I didn't even know I had. The plan it built actually worked."</p>
            <div className="result-author">
              <div className="result-avatar">MA</div>
              <div>
                <div className="result-author-name">Maya A.</div>
                <div className="result-author-sub">Age 28 · combination skin</div>
              </div>
            </div>
          </article>

          <article className="result-card">
            <CompareSlider
              before="/assets/result-2-before.png"
              after="/assets/result-2-after.png"
              beforeAlt="Before treatment"
              afterAlt="After treatment"
              afterLabel="After · 12 wks"
            />
            <div className="result-meta">
              <span className="result-treatment">IPL + Microneedling · 4 sessions</span>
              <span className="result-weeks">12 weeks</span>
            </div>
            <p className="result-quote">"I came in for one thing and left with a real plan. It felt clinical, not pushy."</p>
            <div className="result-author">
              <div className="result-avatar">MR</div>
              <div>
                <div className="result-author-name">Mark R.</div>
                <div className="result-author-sub">Age 51 · rosacea &amp; redness</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
