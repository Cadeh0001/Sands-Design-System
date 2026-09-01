import React from "react";
export function Eyebrow({ children, dark = false }) {
  return <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", color: dark ? "var(--orange)" : "var(--blue)" }}>{children}</div>;
}
