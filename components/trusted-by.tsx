"use client";
export function TrustedBy() {
  return (
    <div style={{ background: "#F2F2EE", borderTop: "1px solid #E0EAE4", borderBottom: "1px solid #E0EAE4", padding: "32px 0" }}>
      <div className="wrap">
        <div style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "2.5px", textTransform: "uppercase", color: "#7A9080", textAlign: "center", marginBottom: 22 }}>
          Trusted by leading MedSpas across New York City
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", maxWidth: 860, margin: "0 auto" }}>
          {["Elite MedSpa","Wellspa","Revive Aesthetics","Luxe Skin Studio","Pure Glow Clinic"].map((name, i) => (
            <span key={name} style={{
              fontSize: "0.9rem", fontWeight: 500, color: "#4A5E50", whiteSpace: "nowrap",
              padding: "0 32px", borderLeft: i > 0 ? "1px solid #E0EAE4" : "none"
            }}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
