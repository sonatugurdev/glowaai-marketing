"use client";
import { useEffect, useRef } from "react";

const SECTIONS = [
  { label: "Home" },
  { label: "How it works" },
  { label: "ROI" },
  { label: "Built with MDs" },
  { label: "Results" },
  { label: "Advisor" },
  { label: "Get started" },
  { label: "FAQ" },
];

export function SectionNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const buttons = nav.querySelectorAll<HTMLButtonElement>("button");

    function update() {
      const sections = document.querySelectorAll<HTMLElement>(".snap-section");
      const mid = window.innerHeight * 0.5;
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      sections.forEach(s => {
        const r = s.getBoundingClientRect();
        const dist = Math.abs((r.top + r.bottom) / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = s; }
      });
      if (!best) return;
      const idx = (best as HTMLElement).dataset.snapIndex;
      buttons.forEach(b => b.classList.toggle("active", b.dataset.snapTarget === idx));
      nav?.classList.toggle("on-dark", (best as HTMLElement).hasAttribute("data-snap-dark"));
    }

    update();
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollTo(idx: number) {
    const target = document.querySelector<HTMLElement>(`.snap-section[data-snap-index="${idx}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside className="section-nav" ref={navRef} aria-label="Section navigation">
      {SECTIONS.map((s, i) => (
        <button key={i} type="button" data-snap-target={String(i)} className={i === 0 ? "active" : ""} aria-label={s.label} onClick={() => scrollTo(i)}>
          <span className="lbl">{s.label}</span>
        </button>
      ))}
    </aside>
  );
}
