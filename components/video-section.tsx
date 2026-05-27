"use client";
import { useRef, useState } from "react";

const MUTED_ICON = `M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07`;
const UNMUTED_ICON_PATHS = ["M11 5L6 9H2v6h4l5 4V5z", "none"];

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <section className="video-section snap-section" id="video-section" data-snap-index="3" data-snap-label="Built with MDs" data-snap-dark="">
      <video ref={videoRef} className="bg-video" autoPlay muted loop playsInline preload="auto">
        <source src="https://assets.mixkit.co/videos/4863/4863-720.mp4" type="video/mp4" />
      </video>

      <div className="v-overlay" />
      <div className="v-scanline" aria-hidden="true" />

      <div className="v-corners" aria-hidden="true">
        <div className="v-corner tl" /><div className="v-corner tr" />
        <div className="v-corner bl" /><div className="v-corner br" />
      </div>

      <div className="v-tag tl">
        <div className="v-tag-icon">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7 3.5-.5 6-3.5 6-7V4l-6-3z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8l1.5 1.5L10 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="v-tag-text"><strong>Board-certified MD</strong><span>Reviewed on every analysis</span></div>
      </div>

      <div className="v-tag tr">
        <div className="v-tag-icon">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="6" width="10" height="8" rx="1.5"/>
            <path d="M5 6V4a3 3 0 016 0v2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="v-tag-text"><strong>HIPAA Compliant</strong><span>PHI encrypted end-to-end</span></div>
      </div>

      <div className="v-tag bl compact">
        <span className="v-tag-dot" /><strong>LIVE</strong>
      </div>

      <button className="v-mute-btn" onClick={toggleMute} aria-label="Toggle mute">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round"/>
          {muted ? (
            <>
              <path d="M19.07 4.93a10 10 0 010 14.14" strokeLinecap="round"/>
              <path d="M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round"/>
            </>
          ) : (
            <>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </>
          )}
        </svg>
      </button>
    </section>
  );
}
