"use client";
import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("up"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));

    // Active nav link on scroll
    const sects = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let cur = "";
      sects.forEach(s => { if (window.scrollY >= (s as HTMLElement).offsetTop - 100) cur = s.id; });
      document.querySelectorAll(".nav-link-item").forEach(a => {
        const active = (a as HTMLAnchorElement).getAttribute("href") === `#${cur}`;
        (a as HTMLElement).style.color = active ? "#fff" : "rgba(255,255,255,0.7)";
        (a as HTMLElement).style.fontWeight = active ? "500" : "400";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return null;
}
