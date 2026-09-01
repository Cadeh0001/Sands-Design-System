import React from "react";
export function StatBand({ stats }) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", background: "var(--navy)", color: "#ffffff" }}>
      {stats.map((s, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2, padding: "20px 26px", borderRight: i < stats.length - 1 ? "1px solid var(--line-dark)" : "none", flex: 1 }}>
          <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 44, lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 24, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
