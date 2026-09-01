import React from "react";
export function SlideTitle({ children, dark = false, size = 56 }) {
  return <h2 style={{ margin: 0, fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: size, lineHeight: 1.05, color: dark ? "#ffffff" : "var(--navy)" }}>{children}</h2>;
}
