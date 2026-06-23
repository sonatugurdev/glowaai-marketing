"use client";
import { useEffect, useRef, useState } from "react";

const EVENTS = [
  { title: "Booking confirmed", sub: "HydraFacial · booked in-app", icon: <svg viewBox="0 0 16 16" fill="none"><path d="M13 5l-7 7-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "AI analysis complete", sub: "6 metrics scored · Sarah R.", icon: <svg viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: "New intake received", sub: "3 photos uploaded · 2 min ago", icon: <svg viewBox="0 0 16 16" fill="none"><path d="M2 12V4l6 4 6-4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Treatment plan sent", sub: "SMS delivered to client", icon: <svg viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4v8h12V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Revenue attributed", sub: "+$420 · Microneedling booked", icon: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2v12M5 4.5h4.5a2 2 0 110 4H6a2 2 0 100 4H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

const METRICS = [
  { name: "Hydration", val: 91, color: "var(--sage)", warn: false, desc: "Excellent moisture retention detected across cheek & forehead zones.", rec: "Maintain with current routine — no action needed", recIcon: "check" },
  { name: "Texture", val: 74, color: "var(--sage)", warn: false, desc: "Mild surface irregularity on cheeks. Pore visibility within normal range.", rec: "Recommend · HydraFacial", recIcon: "plus" },
  { name: "Pigmentation", val: 68, color: "#E8A22A", warn: true, desc: "Sun-induced melanin clustering across upper cheeks & temples.", rec: "Top recommendation · Vitamin C Peel", recIcon: "plus" },
  { name: "Acne", val: 88, color: "var(--sage)", warn: false, desc: "Minimal active breakouts. No comedonal clustering detected.", rec: "No treatment recommended", recIcon: "check" },
  { name: "Aging", val: 85, color: "var(--sage)", warn: false, desc: "Fine periorbital lines detected. Skin elasticity above age-bracket average.", rec: "Consider · Microneedling RF", recIcon: "plus" },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [floatIdx, setFloatIdx] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [score, setScore] = useState(0);

  // Canvas dot grid
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const SPACING = 26, BASE_R = 1.05, MAX_R = 3.6, INFLUENCE = 150, BASE_ALPHA = 0.22, MAX_ALPHA = 0.85;
    let dots: { x: number; y: number; phase: number }[] = [];
    let w = 0, h = 0;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    function resize() {
      const rect = hero!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      canvas!.style.width = w + "px"; canvas!.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      const ox = (w - (cols - 1) * SPACING) / 2;
      const oy = (h - (rows - 1) * SPACING) / 2;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          dots.push({ x: ox + c * SPACING, y: oy + r * SPACING, phase: Math.random() * Math.PI * 2 });
    }

    let t = 0, animId = 0;
    function tick() {
      t += 0.012;
      mouse.x += (mouse.tx - mouse.x) * 0.18;
      mouse.y += (mouse.ty - mouse.y) * 0.18;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let prox = dist < INFLUENCE ? Math.pow(1 - dist / INFLUENCE, 2) : 0;
        const breathe = Math.sin(t + d.phase) * 0.15;
        const r = BASE_R + (MAX_R - BASE_R) * prox + breathe * 0.18;
        const a = BASE_ALPHA + (MAX_ALPHA - BASE_ALPHA) * prox;
        const mix = prox;
        const cr = Math.round(122 + (8 - 122) * mix);
        const cg = Math.round(164 + (145 - 164) * mix);
        const cb = Math.round(174 + (178 - 174) * mix);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${a})`;
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(tick);
    }

    const onMove = (e: MouseEvent) => {
      const rect = hero!.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999; };

    resize();
    tick();
    window.addEventListener("resize", resize);
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      hero?.removeEventListener("mousemove", onMove);
      hero?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Float cycler
  useEffect(() => {
    const id = setInterval(() => {
      setSwapping(true);
      setTimeout(() => {
        setFloatIdx(i => (i + 1) % EVENTS.length);
        setSwapping(false);
      }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  // Score count-up
  useEffect(() => {
    const el = document.getElementById("overallScore");
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const dur = 1400, start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setScore(Math.round(82 * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Touch auto-rotate for metric bubbles
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) return;
    let i = 0;
    const id = setInterval(() => {
      setActiveMetric(i);
      i = (i + 1) % METRICS.length;
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const ev = EVENTS[floatIdx];

  return (
    <section className="hero snap-section" data-snap-index="0" data-snap-label="Home" ref={heroRef}>
      <canvas id="dotGrid" ref={canvasRef} aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow"><span />AI-Powered Skin Intelligence</div>
            <h1>Clinical-grade AI for <em>MedSpas</em></h1>
            <p className="hero-sub">AI skin analysis that increases your sales by <strong style={{ color: "var(--ink)", fontWeight: 600 }}>42%</strong> and makes the sales process effortless — delivered to your clients before they walk through the door.</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-sage btn-lg">
                Book a demo
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#features" className="btn btn-outline btn-lg">See how it works</a>
            </div>
            <div className="hero-badges">
              {[
                { label: "HIPAA Compliant", path: "M13 6V5a5 5 0 00-10 0v1M3 6h10a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" },
                { label: "Clinically Validated", path: "M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.3l4.2-.7L8 1z" },
                { label: "Live in 1 Day", path: "M8 2v4l3 3M14 8A6 6 0 112 8a6 6 0 0112 0z" },
                { label: "Dedicated Onboarding", path: "M13 5l-7 7-3-3" },
              ].map(b => (
                <span key={b.label} className="hero-badge">
                  <svg viewBox="0 0 16 16" fill="none"><path d={b.path} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="report-card">
              <div className="report-scan" />
              <div className="report-header">
                <span className="report-title">Skin Report</span>
                <span className="report-live">Live</span>
              </div>
              <div className="report-client">
                <div className="report-avatar">SR</div>
                <div>
                  <div className="report-client-name">Sarah R.</div>
                  <div className="report-client-sub">Skin assessment · 3 photos analyzed</div>
                </div>
              </div>
              <div className="overall-score">
                <span className="overall-label">Overall Skin Score</span>
                <span className="overall-val" id="overallScore">{score}</span>
              </div>
              <div className="skin-metrics" onMouseLeave={() => setActiveMetric(null)}>
                {METRICS.map((m, i) => (
                  <div
                    key={m.name}
                    className={`metric-row${activeMetric === i ? " is-active" : ""}`}
                    onMouseEnter={() => setActiveMetric(i)}
                    tabIndex={0}
                    onFocus={() => setActiveMetric(i)}
                  >
                    <span className="metric-name">{m.name}</span>
                    <div className="metric-bar-wrap">
                      <div className="metric-bar" style={{ width: `${m.val}%`, background: m.color }} />
                    </div>
                    <span className="metric-score">{m.val}</span>
                    <div className="metric-bubble">
                      <div className="metric-bubble-head">
                        <span className="metric-bubble-title">{m.name}</span>
                        <span className={`metric-bubble-score${m.warn ? " warn" : ""}`}>{m.val} / 100</span>
                      </div>
                      <p className="metric-bubble-desc">{m.desc}</p>
                      <div className="metric-bubble-rec">
                        <svg viewBox="0 0 16 16" fill="none">
                          {m.recIcon === "check"
                            ? <path d="M13 5l-7 7-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            : <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          }
                        </svg>
                        {m.rec}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="report-rec">
                <div className="report-rec-label">Top Recommendation <span className="report-rec-priority">Priority #1</span></div>
                <div className="report-rec-text">Botox & Peel — targets texture and pigmentation score</div>
              </div>
            </div>

            <div className={`hero-float${swapping ? " is-swapping" : ""}`}>
              <div className="f-icon">{ev.icon}</div>
              <div className="f-text">
                <p>{ev.title}</p>
                <span>{ev.sub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
