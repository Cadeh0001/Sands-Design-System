import React from "react";
export function SigTable({ columns, rows, zebra = true, subjectRow, averageRow }) {
  const thS = a => ({ textAlign: a || "left", fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 24, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mut)", padding: "0 0 12px", borderBottom: "2px solid var(--navy)" });
  const tdS = (a, last) => ({ textAlign: a || "left", fontSize: 26, fontFamily: a === "right" ? "var(--font-condensed)" : "var(--font-body)", padding: "13px 0", borderBottom: last ? "none" : "1px solid var(--line)", color: "var(--navy)" });
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead><tr>{columns.map((c, i) => <th key={i} style={thS(c.align)}>{c.label}</th>)}</tr></thead>
      <tbody>
        {subjectRow && (
          <tr style={{ background: "rgba(247,153,28,0.10)" }}>
            {subjectRow.map((cell, i) => <td key={i} style={{ ...tdS(columns[i].align), fontFamily: "var(--font-condensed)", fontWeight: 700 }}>{cell}</td>)}
          </tr>
        )}
        {rows.map((r, ri) => (
          <tr key={ri} style={zebra && ri % 2 === 1 ? { background: "var(--zebra)" } : undefined}>
            {r.map((cell, i) => <td key={i} style={tdS(columns[i].align, !averageRow && ri === rows.length - 1)}>{cell}</td>)}
          </tr>
        ))}
        {averageRow && (
          <tr>
            {averageRow.map((cell, i) => <td key={i} style={{ ...tdS(columns[i].align), fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: 27, padding: "17px 0", borderBottom: "3px solid var(--navy)" }}>{cell}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
}
