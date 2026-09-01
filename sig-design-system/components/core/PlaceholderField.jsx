import React from "react";
export function PlaceholderField({ children, dark = false, size = 27 }) {
  const p = dark ? { color: "var(--phd-c)", background: "var(--phd-bg)", borderBottom: "2px solid var(--phd-b)" } : { color: "var(--ph-c)", background: "var(--ph-bg)", borderBottom: "2px solid var(--ph-b)" };
  return <span style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: size, padding: "0 8px", ...p }}>{children}</span>;
}
