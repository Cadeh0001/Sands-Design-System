# BOV deck — locked order

The structure below is fixed for every Broker Opinion of Value. It does not change from deal to
deal unless the broker explicitly asks for a change. The only per-deal variation inside a slide is
the row count on the rent roll / option periods and the landlord–tenant obligation split
(see CONVENTIONS.md → Fixed layout, variable rows). Everything else is copied from the template
verbatim with the bracketed fields filled.

`S` = standard slide, copied verbatim (only the deal name / date fields change).
`D` = deal slide, fixed layout, bracketed fields filled from the deal file.
`O` = optional, included only when the deal has the thing (or on request).

| # | Slide | Kind | Template |
|---|---|---|---|
| 1 | Cover | S | slides/common/Cover.html |
| 2 | Agenda | S | slides/bov/Agenda.html |
| 3 | I — The Asset (divider) | S | slides/common/I-The-Market.html |
| 4 | Current Situation | D | slides/bov/Current-Situation.html |
| 5 | Capital Structure | O (debt only) | slides/bov/Debt-Facility-Detail.html |
| 6 | Asset | D | slides/bov/Asset-Detail.html |
| 7 | Lease Abstract | D (variable rows) | slides/bov/Lease-Abstract.html |
| 8 | Tenant Overview | D | slides/bov/Tenant-Overview.html |
| 9 | II — The Comps (divider) | S | slides/common/II-Your-Options.html |
| 10 | Comps — On-Market | D (≤7 rows; 8th comp = second slide) | slides/bov/Comps-On-Market.html |
| 11 | Comps — Sold | D (≤7 rows) | slides/bov/Comps-Sold.html |
| 12 | Ask vs. Close | D | slides/bov/Ask-vs-Close.html |
| 13 | III — Pricing Analysis (divider) | S | slides/common/III-Valuation.html |
| 14 | Pricing Analysis | D | slides/bov/Pricing-Matrix.html |
| 15 | Net Proceeds | O (debt only) | slides/bov/Net-Proceeds-Waterfall.html |
| 16 | IV — Why We Are at the Table (divider) | S | slides/common/Why-SIG-Divider.html |
| 17 | By the Numbers | S | slides/common/By-the-Numbers.html |
| 18 | Track Record | S (four reasons, named to product type) | slides/common/Track-Record-Product-Type.html |
| 19 | Buyer Universe | S | slides/common/Buyer-Universe.html |
| 20 | Marketing Plan | S | slides/common/Marketing-Plan-Timeline.html |
| 21 | Team | S | slides/common/Team-Three-Profiles.html |
| 22 | Confidentiality | S (navy, no footer) | slides/common/Confidentiality-Agreement.html |

Divider titles are retitled per section ("The Asset", "The Comps", "Pricing Analysis") — the
divider files are the layout, the section names above are the copy.

Not in the BOV unless asked: Sensitivity, Valuation-Summary, Value-Drivers, The-Offering,
Tenant-and-Brand-Overview (slides/bov/, kept for proposals and OM-style decks).

Master file: `BOV-Template.dc.html` at the repo root. Change the master first, then re-cut the
templates.
