import React from "react";
export function InfoCard({ eyebrow, title, children, footnote, dark = false }) {
  const base = dark
    ? { background: "var(--navy)", color: "#ffffff" }
    : { background: "#ffffff", border: "1px solid var(--line)", borderTop: "5px solid var(--orange)", color: "var(--navy)" };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 32, fontFamily: "var(--font-body)", ...base }}>
      {eyebrow && <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 24, letterSpacing: "0.2em", textTransform: "uppercase", color: dark ? "var(--orange)" : "var(--blue)" }}>{eyebrow}</div>}
      <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 36, lineHeight: 1.1 }}>{title}</div>
      <div style={{ fontSize: 26, fontWeight: 300, lineHeight: 1.42, color: dark ? "rgba(255,255,255,0.85)" : "var(--iron)" }}>{children}</div>
      {footnote && <div style={{ marginTop: "auto", paddingTop: 20, borderTop: dark ? "1px solid var(--line-dark)" : "1px solid var(--line)", fontSize: 25, fontWeight: 300, lineHeight: 1.4, color: dark ? "var(--mut-dark)" : "var(--mut)" }}>{footnote}</div>}
    </div>
  );
}
