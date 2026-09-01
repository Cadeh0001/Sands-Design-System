import React from "react";
export function SlideFooter({ dark = false, assetsBase = "../assets" }) {
  return (
    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: dark ? "1px solid var(--line-dark)" : "1px solid var(--line)" }}>
      <span style={{ fontSize: 24, fontFamily: "var(--font-body)", color: dark ? "rgba(255,255,255,0.55)" : "#8a97a0" }}>Sands Investment Group | Confidential</span>
      <img src={assetsBase + (dark ? "/sig-icon-white.png" : "/sig-icon-color.png")} alt="SIG" style={{ height: 42 }} />
    </div>
  );
}
