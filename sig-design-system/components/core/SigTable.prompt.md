Standard SIG comp/data table: 2px navy header rule, hairline rows, zebra striping, right-aligned numerics in Roboto Condensed. Subject row = orange tint on top; average row = bold with 3px navy rule.
```jsx
<SigTable
  columns={[{ label: "Tenant" }, { label: "Market" }, { label: "Price", align: "right" }, { label: "Cap", align: "right" }]}
  subjectRow={["SUBJECT — [TENANT]", "[CITY, ST]", "[$0.00M]", "[0.00%]"]}
  rows={[["CarMax", "Schaumburg, IL", "$31.80M", "6.65%"]]}
  averageRow={["Comp Set Average", "—", "[$0.00M]", "[0.00%]"]}
/>
```
