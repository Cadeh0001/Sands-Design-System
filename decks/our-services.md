# Our Services deck — locked order

PROPOSED — not yet approved

The structure below is fixed for every Our Services credentials deck. It does not change from
pitch to pitch unless the broker explicitly asks for a change. The only per-pitch variation is the
practice content: market figures, comps, formats and selected transactions are refilled for the
asset class being pitched. Everything else is copied from the template verbatim with the bracketed
fields filled.

Built from `slides/common/` and `slides/services/`. The `services/` slides were extracted from the
Dealership BOV Proposal v2 and still carry automotive example content; treat it as swap-in content
for any other practice.

`S` = standard slide, copied verbatim (only the client name / date fields change).
`D` = practice slide, fixed layout, refilled per asset class from the current market survey.
`O` = optional, included only when the pitch needs it (or on request).
`M` = the deck needs it and the bank has no template. See Missing from the bank.

| # | Slide | Kind | Template |
|---|---|---|---|
| 1 | Cover | S (copy retitled, see below) | slides/common/Cover.html |
| 2 | Agenda | M | — |
| 3 | I — The Market (divider) | S | slides/common/I-The-Market.html |
| 4 | Market Conditions | D | slides/services/Market-Conditions.html |
| 5 | Comparables | D | slides/services/Dealership-Comps.html |
| 6 | Asset Formats | O (multi-format owner) | slides/services/Asset-Formats.html |
| 7 | II — The Options (divider) | S | slides/common/II-Your-Options.html |
| 8 | Three Paths | S | slides/services/Three-Paths.html |
| 9 | III — The Exchange (divider) | S | slides/common/IV-The-Exchange.html |
| 10 | Case Study — 1031 Exchange | S | slides/services/Case-Study-SoCal-Ford.html |
| 11 | Case Study — Replacement Portfolio | S | slides/services/Case-Study-Portfolio.html |
| 12 | IV — Why We Are at the Table (divider) | S | slides/common/V-Why-SIG.html |
| 13 | By the Numbers | S | slides/common/By-the-Numbers.html |
| 14 | Track Record | S (four reasons, named to product type) | slides/common/Track-Record-Product-Type.html |
| 15 | Buyer Universe | S | slides/common/Buyer-Universe.html |
| 16 | Selected Transactions | D (three closed deals for the practice) | slides/services/Selected-Transactions.html |
| 17 | V — Execution (divider) | S | slides/common/VI-Execution.html |
| 18 | Bidding Process | S (institutional column cut for a single asset) | slides/services/Bidding-Process.html |
| 19 | Execution Timeline | S | slides/services/Retail-Execution-Timeline.html |
| 20 | Summary | S | slides/services/Actionable-Takeaways.html |
| 21 | The Ask | D | slides/services/The-Ask.html |
| 22 | Team | S | slides/common/Team-Three-Profiles.html |
| 23 | Confidentiality | M (navy, no footer) | — |

Divider titles and numerals are retitled per section ("The Market", "The Options", "The Exchange",
"Why We Are at the Table", "Execution"). The divider files are the layout; the section names above
are the copy. There is no valuation section; `III-Valuation` is not used.

The cover layout is the BOV cover. Its copy ("Broker Opinion of Value", tenant, address, APN) is
replaced with "Our Services", the practice, the prospect and the date.

Not in the Our Services deck unless asked: Marketing-Plan-Timeline (slides/common/; overlaps the
Execution Timeline), Confidentiality-Agreement (BOV wording, see below), services/Team (the
role-split alternative to the three profiles).

## Missing from the bank

These slides are needed and have no template. No file name is assigned until one is built.

- **Agenda (Our Services).** Five sections as above. `slides/bov/Agenda.html` is the layout; its
  copy is BOV-only.
- **Confidentiality (Our Services).** `slides/common/Confidentiality-Agreement.html` refers to a
  broker opinion of value, a subject property and the Pricing Analysis section, none of which this
  deck has. Needs a credentials version of the three-paragraph closer.
- **Services overview.** A single slide stating what the team does (dispositions, sale-leasebacks,
  1031 buy-side, portfolio execution). Nothing in `common/` or `services/` states the service lines
  directly; the deck currently infers them from the case studies.

## Template conflicts to fix before approval

- The 72,000 database figure is retired (CONVENTIONS.md: 50,000+). It remains in
  `Actionable-Takeaways` and `Bidding-Process`.
- Second person in `Three-Paths` (title and body), `The-Ask`, `Bidding-Process`, and the
  `II-Your-Options` and `VI-Execution` divider copy.
- `The-Ask` is framed for pricing a specific asset ("the data we need to complete your pricing")
  and has a stacked contact line instead of the full-width `tel:` boxes CONVENTIONS.md requires.
- `Case-Study-Portfolio` names real tenants, markets and prices. Confirm the client has approved
  publishing them before the slide is treated as standard.
- `Dealership-Comps`, `Asset-Formats`, `Selected-Transactions` and `Market-Conditions` are
  automotive-specific. Each non-automotive pitch refills them from the current survey.

Master file: none yet for this deck.
