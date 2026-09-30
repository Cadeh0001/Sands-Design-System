# 1031 exchange deck — locked order

PROPOSED — not yet approved

The structure below is fixed for every 1031 exchange (buy-side) deck. It does not change from
client to client unless the broker explicitly asks for a change. The only per-client variation
inside a slide is the row or card count where the template allows it (replacement scenario cards,
the client's holdings). Everything else is copied from the template verbatim with the bracketed
fields filled.

Built from `slides/common/` and `slides/1031/`. Modeled on two decks, neither in this repo:

- **Exchange deck, September 2026** (Google Slides, September 2026). Its per-client data was
  converted to placeholders and uploaded as the `1031/` slides. Its four sections are the section
  structure below.
- **Buy-side representation program, July 2026** (PDF, July 2026). Source for the buy-side process,
  the candidate-portfolio slides and the closing "four questions". Its layouts are not in the bank;
  see Missing from the bank.

`S` = standard slide, copied verbatim (only the client name / date fields change).
`D` = client slide, fixed layout, bracketed fields filled from the client file.
`O` = optional, included only when the client has the thing (or on request).
`M` = the deck needs it and the bank has no template. See Missing from the bank.

| # | Slide | Kind | Template |
|---|---|---|---|
| 1 | Cover | S (copy retitled, see below) | slides/common/Cover.html |
| 2 | Agenda | M | — |
| 3 | I — Where the Client Stands (divider) | S | slides/common/I-The-Market.html |
| 4 | Where You Stand | D | slides/1031/Where-You-Stand.html |
| 5 | Exchange vs. Taxable Sale | O (only with the CPA's basis and rates) | slides/1031/Exchange-Economics.html |
| 6 | II — How the Exchange Works (divider) | S | slides/common/II-Your-Options.html |
| 7 | What a 1031 Exchange Does | M | — |
| 8 | Two Deadlines | S | slides/1031/1031-Timeline.html |
| 9 | Value Replacement | D | slides/1031/Value-Replacement.html |
| 10 | Income Before and After | O | slides/1031/Income-Replacement.html |
| 11 | III — What the Client Would Own (divider) | S | slides/common/III-Valuation.html |
| 12 | Ownership Comparison | O (residential or management-heavy relinquished property) | slides/1031/Ownership-Comparison.html |
| 13 | Buy Box | S | slides/1031/Buy-Box.html |
| 14 | Bonus Depreciation | O (inherited or fully depreciated basis, or on request) | slides/1031/Bonus-Depreciation.html |
| 15 | Replacement Scenarios | D (four cards) | slides/1031/Replacement-Scenarios.html |
| 16 | IV — Working Together (divider) | S | slides/common/Why-SIG-Divider.html |
| 17 | 1031 Track Record | S | slides/1031/1031-Firm-Stats.html |
| 18 | Next Steps | M | — |
| 19 | Team | S | slides/common/Team-Three-Profiles.html |
| 20 | Confidentiality | M (navy, no footer) | — |

Divider titles are retitled per section ("Where the Client Stands", "How the Exchange Works",
"What the Client Would Own", "Working Together"). The divider files are the layout; the section
names above are the copy. Section I carries a divider for consistency with the BOV; the September exchange deck went straight from the agenda to Where You Stand.

The cover layout is the BOV cover. Its copy ("Broker Opinion of Value", tenant, address, APN) is
replaced with the buy-side kicker, the client name and the date. The client has no subject
property on this cover.

Not in the 1031 deck unless asked: By-the-Numbers, Track-Record-Product-Type, Buyer-Universe,
Marketing-Plan-Timeline (slides/common/). They are sell-side credentials; the exchange deck carries
the firm's 1031 figures on 1031-Firm-Stats instead (CONVENTIONS.md, Locked 2026-09-29).

## Missing from the bank

These slides are needed and have no template. No file name is assigned until one is built.

- **Agenda (1031).** Four sections as above. `slides/bov/Agenda.html` is the layout; its copy is
  BOV-only.
- **What a 1031 Exchange Does.** Three numbered points: tax deferred, not forgiven; value replaced
  in full or the shortfall is boot; proceeds held by a qualified intermediary. Key Takeaway bar.
  Present in the September exchange deck.
- **Next Steps.** Four numbered steps after the meeting: confirm goals with the client and CPA,
  finalize the buy box in writing, source before the sale lists, set the identification strategy.
  the September exchange deck's version. The July buy-side program closes on four questions (cap rate, credit, size, timing)
  instead; pick one layout. `slides/services/The-Ask.html` is sell-side and does not fit.
- **Confidentiality (1031).** `slides/common/Confidentiality-Agreement.html` carries BOV language
  (broker opinion of value, Pricing Analysis section). The exchange version needs the no-tax-or-
  legal-advice clause and the line that client figures are as described and unverified. The September exchange deck has the wording.
- **Buy-side process.** Week-by-week steps from buy box to close (July buy-side program, "Steps Towards
  Execution"). Would sit in Section IV before Next Steps. `1031-Timeline` covers the statutory
  deadlines only.
- **How We Underwrite Value.** Location and asset quality against lease and market metrics
  (July buy-side program). Would sit in Section III after the Buy Box.
- **Candidate portfolio set** (O, when live targets exist): portfolio at a glance stat band,
  deal-by-deal table, asset cards, mark-to-market and leverage, two portfolios side by side,
  five-year cash flow comparison (July buy-side program, Sections II and III). `Replacement-Scenarios` is the
  illustrative placeholder version only.
- **Team with role split** (optional alternative). The September exchange deck showed who does what across SIG, the
  referring broker, and the CPA / intermediary. `slides/services/Team.html` is close but sits
  outside `common/` and `1031/`.

## Template conflicts to fix before approval

- Second person in `Where-You-Stand` (title), `Buy-Box`, `1031-Timeline`, `Exchange-Economics` and
  `Bonus-Depreciation` (eleven instances). CONVENTIONS.md retires "you/your".
- The `1031/` slides have no master file. CONVENTIONS.md says templates are cut from
  `BOV-Template.dc.html`; the exchange deck needs its own master or a stated exception.

Master file: none yet for this deck.
