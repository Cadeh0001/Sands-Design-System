import React from "react";
export function KeyTakeawayBar({ label = "Key Takeaway", children }) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", background: "var(--navy)", color: "#ffffff" }}>
      <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", padding: "22px 30px", borderRight: "1px solid var(--line-dark)", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>{label}</div>
      <div style={{ fontSize: 27, fontWeight: 300, lineHeight: 1.4, padding: "20px 30px", display: "flex", alignItems: "center", fontFamily: "var(--font-body)" }}>{children}</div>
    </div>
  );
}
