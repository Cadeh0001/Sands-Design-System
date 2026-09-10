# Sands Investment Group — Design System

Design system for **Sands Investment Group (SIG)**, a commercial real estate advisory firm specializing in net lease investment sales, sale-leasebacks, and 1031 exchange advisory across all asset classes — retail, industrial, medical, automotive, QSR, and more. It encodes SIG's slide language for BOVs, disposition proposals, offering memorandums, and credentials decks.

**The slide bank is a blank slate for any product type**: every layout (offering, tenant overview, lease abstract, comps, pricing matrix, timelines, case studies, credentials) works for any asset class and any service line (BOV, disposition, 1031 exchange, credentials). All formerly automotive example content — tenant names, comps, credentials figures, sector labels — has been converted to bracketed placeholder fields (`[TENANT / OPERATOR]`, `[Sector]`, `[$0.00M]`). Fill every bracket with the deal's real data; nothing sector-specific remains hard-coded.

## Sources
- GitHub: https://github.com/Cadeh0001/Sands-Design-System (branch `main`, `sig-design-system/` subtree) — the repo this project was imported from; explore it for the original automotive-flavored versions and deck provenance
- `Dealership BOV Proposal v2.dc.html` (in the source repo) — the 34-slide bank this system was extracted from
- SIG 2025 Brand Manual (`brand-guide.pdf`, from the Broker Tool Kit Drive folder)
- SIG logo set (Broker Tool Kit → 2025 Logo Files; copied to `assets/`)
- SIG Master Slides Template (`uploads/SIG Master Template_MAKE A COPY.pptx`)
- Take 5 Oil Change proposal (`take5.pptx`) — source for the offering / lease abstract / comps / pricing-matrix slide patterns
- Reference decks in Drive: Valvoline SLB presentation (style benchmark), CarMax White Marsh OM, Upland Ford SLB
- sandsig.com/asset-class/retail/automotive-properties — credentials figures (596 transactions, $791M closed, $263M active)
- Shriber Family NNN Gas Portfolio BOV (shipped 9/2026) — source of the ship-state, footnote, and scope-default standards below

## CONTENT FUNDAMENTALS
- **Tone: factual, never salesy.** No urgency framing ("the time is now", "window is closing"), no imperatives, no exclamation points. State the data and let it argue: "Market conditions are measurable", not "Act now".
- **Titles are topic labels or neutral statements of fact** in Roboto Condensed 700: "Four Things Drive Your Value", "What Buyers Actually Paid".
- **Voice:** first-person plural "we" for SIG; direct "you/your" for the owner. Sophisticated but plain-English — sentences a non-real-estate spouse could follow, precision a CPA would respect ("bps", "EBITDAR", "boot" are fine, defined by context).
- **Numbers carry the argument.** Every claim quantified; every figure traceable to a source (SIG market report, closed comps, the underwriting model). No invented statistics.
- **Ship-state rule.** Client-facing output contains zero meta-commentary about the document's own completeness: no "to be finalized", "pending confirmation", "model to follow", "subject to reconciliation", or promises of future work. Unknown values in tables render as em dashes (—), never `[TBD]`. Bracketed placeholders are working-draft furniture only — every bracket is resolved or its line is cut before the deck ships.
- **Placeholders (working drafts only):** all per-deal data appears as bracketed uppercase fields — `[TENANT NAME]`, `[$0,000,000]`, `[0.00%]` — styled with the placeholder treatment so unfilled fields are impossible to miss.
- **Key Takeaway / Read bars: max 2 sentences, one idea.** Never restate math visible in the table above, never make forward promises, never carry document-status notes.
- **Asterisk footnotes for methodology qualifiers.** Qualifiers like "*Going-in cap based on Y1 rents, not current" live in a small muted footnote line adjacent to the footer — not in Read bars, subheads, or table cells.
- **One headline cap per deal**, anchored to underwriting-year rent and asterisk-footnoted. Never recompute headline caps mid-deck as rents escalate.
- **No emoji, ever.** Unicode ▼/▲ only as data-direction markers in stat blocks.
- **Every content slide ends with one anchor:** either a "Key Takeaway" bar (one neutral sentence) or the standard confidential footer.
- Case studies are anonymized on request ("a Southern California Ford dealer"); never overstate SIG's role in a deal.

## SCOPE DEFAULTS (BOV / proposal)
- **Financing is a line, not a slide.** Sources (loan, cash, notes) appear as one sentence in the Current Situation slide. The Debt slide and the Net-Proceeds Waterfall slide remain in the bank but are **include-only-on-request** — generate them exactly like any other slide when explicitly asked; never by default.
- **Gross value indications only** in default pricing analysis; a Read bar may state what is excluded (payoff, prepayment, costs of sale) and stop. Full net-proceeds math is the opt-in waterfall slide.
- **Comp tables:** subject rows pinned at top (orange tint), average/total row bold over a 3px navy rule, dashes for missing fields. On-market comps default to DOM ascending; sold comps default to most-recent first; other orders on request.

## VISUAL FOUNDATIONS
- **Colors:** navy #0d324f is the anchor (dark slides, bars, headings); SIG blue #2789b9 for eyebrows/accents; mid-navy #2b5c81 for large numerics. **Offer Orange #f7991c appears on every slide but only in small bites** — eyebrow labels on navy, step numerals, one highlighted stat, 5px card top borders. Slate #e4e9eb as an alternate light section background.
- **Type:** Roboto Condensed 700 for ALL headlines, labels, and numerics; Roboto 300 for body. Slide floor is 24px (1920×1080). Dividers: uppercase 120px titles with 0.55em-tracked kickers.
- **Backgrounds:** flat white or slate for content; navy gradients (120–135°, #0d324f → #2b5c81) for cover, dividers, and emphasis slides. No imagery backgrounds; photos live in rectangular `<image-slot>` drop zones.
- **Layout:** 84px 100px 64px slide padding; CSS grid with generous gaps; hairline column separators (1px --line / --line-dark). Footers pinned with margin-top:auto.
- **Footer consistency:** every content slide carries the standard footer — "Sands Investment Group | Confidential · sandsig.com" (sandsig.com as a live link, inherit color, underlined) on the left, SIG icon logo at 42px on the right, pinned with margin-top:auto above a 1px hairline rule. Dark slides use `sig-icon-white.png`; light slides use `sig-icon-color.png`. Only the cover and section dividers omit it. A methodology footnote (asterisk pattern) sits directly above the footer when present.
- **Tables** are the signature element: 2px navy header rule, uppercase condensed headers (0.08em), hairline rows, zebra striping rgba(43,92,129,0.05), right-aligned numerics in Condensed, subject row orange-tinted at top, average/total row bold over a 3px navy rule.
- **Corners & shadows: none.** Everything squared and flat. Cards are white with 1px hairline border + 5px orange top border, or solid navy. Emphasis via background tint rgba(43,92,129,0.07), never shadow.
- **Animation: none.** Static slides.
- **Imagery:** real property photos and headshots only, dropped into `<image-slot>` placeholders (rect for property and headshots — portrait rect ~300×344 with 4px orange border for team headshots). Never SVG illustrations or stock art.

## ICONOGRAPHY
- **No icon system.** SIG slides use no icons — hierarchy is carried by type, rules, and numerals (01/02/03 step numbers in orange Condensed).
- Logos are the only marks: `assets/sig-wide-color.png`, `sig-wide-white.png` (covers/closers), `sig-icon-color.png`, `sig-icon-white.png` (footers at 42px; 50% opacity corner mark on dividers).
- Unicode ▼/▲ for data direction. No emoji, no icon fonts.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, effects)
- `components/core/` — Eyebrow, SlideTitle, PlaceholderField, KeyTakeawayBar, StatBand, InfoCard, SlideFooter, SigTable (each with .d.ts + .prompt.md). FootnoteLine pattern: small muted text (20–22px, --mut) directly above the footer for asterisk methodology notes.
- `slides/` — the full 37-slide bank as standalone HTML templates: cover, agenda, 6 section dividers, market conditions, comps snapshot, asset formats, options grid (three paths), offering, tenant overview, value drivers, lease abstract, on-market + sold comps, valuation summary, sensitivity, pricing matrix, 1031 timeline, buy box, exchange economics, income replacement, replacement scenarios, track record, buyer universe, case study — exchange, case study — portfolio, selected transactions, bidding process, retail execution timeline, actionable takeaways, the ask, team, confidentiality. Debt and net-proceeds-waterfall layouts are include-only-on-request (see Scope Defaults).
- `guidelines/` — foundation specimen cards
- `assets/` — logo set
- `image-slot.js` — drag-and-drop photo placeholder component used by the slides

## Intentional additions
The component set is extracted from the deck we built (no pre-existing component library was provided): each primitive corresponds to a repeated pattern in the slide bank, not an invention.

## Caveats
- **Fonts load from Google Fonts CDN** (`tokens/fonts.css`); no licensed font binaries were provided. If SIG has licensed webfont files, drop them in and replace the @import with @font-face rules.
- Component preview card is a static specimen (renders the patterns with real tokens) rather than a live bundle mount.
- Brand Manual specifies more than is encoded here (photography, social, print); this system covers the proposal-deck surface.

## How to build a deck from this system
Attach this design system to a new project, paste the deal information (tenant, lease abstract, comps, pricing — any asset class), and ask for the deck you need — full BOV/proposal, credentials-only, or a subset. Compose from the `slides/` bank, fill every bracketed placeholder, keep orange small, and end content slides with a Key Takeaway bar or footer. Before shipping: resolve or cut every bracket, strip all document-status language, and confirm the standard footer is on every content slide.
