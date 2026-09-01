# Sands Investment Group — Design System

Design system for **Sands Investment Group (SIG)**, a commercial real estate advisory firm specializing in net lease investment sales, sale-leasebacks, and 1031 exchange advisory across all asset classes — retail, industrial, medical, automotive, QSR, and more. It encodes SIG's slide language for BOVs, disposition proposals, offering memorandums, and credentials decks.

**The slide bank is asset-class-agnostic by design**: every layout (offering, tenant overview, lease abstract, comps, pricing matrix, timelines, case studies, credentials) works for any net lease product. The example content currently in the templates comes from the automotive practice — treat tenant names, comps, and credentials figures as swap-in content, not fixed copy. For a non-automotive deck, replace the automotive credentials slide figures with the relevant practice's numbers and refill the comp tables from the current market survey for that asset class.

## Sources
- `Dealership BOV Proposal v2.dc.html` (this project) — the 34-slide bank this system is extracted from
- SIG 2025 Brand Manual (`brand-guide.pdf`, from the Broker Tool Kit Drive folder)
- SIG logo set (Broker Tool Kit → 2025 Logo Files; copied to `assets/`)
- SIG Master Slides Template (`uploads/SIG Master Template_MAKE A COPY.pptx`)
- Take 5 Oil Change proposal (`take5.pptx`) — source for the offering / lease abstract / comps / pricing-matrix slide patterns
- Reference decks in Drive: Valvoline SLB presentation (style benchmark), CarMax White Marsh OM, Upland Ford SLB
- sandsig.com/asset-class/retail/automotive-properties — credentials figures (596 transactions, $791M closed, $263M active)

## CONTENT FUNDAMENTALS
- **Tone: factual, never salesy.** No urgency framing ("the time is now", "window is closing"), no imperatives, no exclamation points. State the data and let it argue: "Market conditions are measurable", not "Act now".
- **Titles are topic labels or neutral statements of fact** in Roboto Condensed 700: "Four Things Drive Your Value", "What Buyers Actually Paid".
- **Voice:** first-person plural "we" for SIG; direct "you/your" for the owner. Sophisticated but plain-English — sentences a non-real-estate spouse could follow, precision a CPA would respect ("bps", "EBITDAR", "boot" are fine, defined by context).
- **Numbers carry the argument.** Every claim quantified; every figure traceable to a source (SIG market report, closed comps, the underwriting model). No invented statistics.
- **Placeholders:** all per-deal data appears as bracketed uppercase fields — `[TENANT NAME]`, `[$0,000,000]`, `[0.00%]` — styled with the placeholder treatment so unfilled fields are impossible to miss.
- **No emoji, ever.** Unicode ▼/▲ only as data-direction markers in stat blocks.
- **Every content slide ends with one anchor:** either a "Key Takeaway" bar (one neutral sentence) or the standard confidential footer.
- Case studies are anonymized on request ("a Southern California Ford dealer"); never overstate SIG's role in a deal.

## VISUAL FOUNDATIONS
- **Colors:** navy #0d324f is the anchor (dark slides, bars, headings); SIG blue #2789b9 for eyebrows/accents; mid-navy #2b5c81 for large numerics. **Offer Orange #f7991c appears on every slide but only in small bites** — eyebrow labels on navy, step numerals, one highlighted stat, 5px card top borders. Slate #e4e9eb as an alternate light section background.
- **Type:** Roboto Condensed 700 for ALL headlines, labels, and numerics; Roboto 300 for body. Slide floor is 24px (1920×1080). Dividers: uppercase 120px titles with 0.55em-tracked kickers.
- **Backgrounds:** flat white or slate for content; navy gradients (120–135°, #0d324f → #2b5c81) for cover, dividers, and emphasis slides. No imagery backgrounds; photos live in rectangular `<image-slot>` drop zones.
- **Layout:** 84px 100px 64px slide padding; CSS grid with generous gaps; hairline column separators (1px --line / --line-dark). Footers pinned with margin-top:auto.
- **Tables** are the signature element: 2px navy header rule, uppercase condensed headers (0.08em), hairline rows, zebra striping rgba(43,92,129,0.05), right-aligned numerics in Condensed, subject row orange-tinted at top, average/total row bold over a 3px navy rule.
- **Corners & shadows: none.** Everything squared and flat. Cards are white with 1px hairline border + 5px orange top border, or solid navy. Emphasis via background tint rgba(43,92,129,0.07), never shadow.
- **Animation: none.** Static slides.
- **Imagery:** real property photos and headshots only, dropped into `<image-slot>` placeholders (rect for property, circle 300px for headshots). Never SVG illustrations or stock art.

## ICONOGRAPHY
- **No icon system.** SIG slides use no icons — hierarchy is carried by type, rules, and numerals (01/02/03 step numbers in orange Condensed).
- Logos are the only marks: `assets/sig-wide-color.png`, `sig-wide-white.png` (covers/closers), `sig-icon-color.png`, `sig-icon-white.png` (footers at 42px; 50% opacity corner mark on dividers).
- Unicode ▼/▲ for data direction. No emoji, no icon fonts.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, effects)
- `components/core/` — Eyebrow, SlideTitle, PlaceholderField, KeyTakeawayBar, StatBand, InfoCard, SlideFooter, SigTable (each with .d.ts + .prompt.md)
- `slides/` — the full 34-slide bank as standalone HTML templates (cards + starting points): cover, agenda, 6 section dividers, market conditions, comps, asset formats, options grid, offering, tenant overview, value drivers, lease abstract, on-market + sold comps, valuation summary, sensitivity, pricing matrix, 1031 timeline, buy box, track record, buyer universe, case study (2), selected transactions, bidding process, retail execution timeline, summary, ask, team, confidentiality
- `guidelines/` — foundation specimen cards
- `assets/` — logo set
- `Dealership BOV Proposal v2.dc.html` — the live working deck the bank was extracted from
- `brand-guide.pdf` — SIG 2025 Brand Manual

## Intentional additions
The component set is extracted from the deck we built (no pre-existing component library was provided): each primitive corresponds to a repeated pattern in the slide bank, not an invention.

## Caveats
- **Fonts load from Google Fonts CDN** (`tokens/fonts.css`); no licensed font binaries were provided. If SIG has licensed webfont files, drop them in and replace the @import with @font-face rules.
- Component preview card is a static specimen (renders the patterns with real tokens) rather than a live bundle mount.
- Brand Manual specifies more than is encoded here (photography, social, print); this system covers the proposal-deck surface.

## How to build a deck from this system
Attach this design system to a new project, paste the deal information (tenant, lease abstract, comps, pricing — any asset class), and ask for the deck you need — full BOV/proposal, credentials-only, or a subset. Compose from the `slides/` bank, fill every bracketed placeholder, keep orange small, and end content slides with a Key Takeaway bar or footer.
