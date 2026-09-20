# SIG BOV — Deck Conventions

Standards for building a Broker Opinion of Value deck. Derived from the Shriber and Smith BOVs.
The slide templates in this repo are the source of truth — read and copy them verbatim, swap only per-deal data.

## Structure

Four sections, roughly 18–21 slides:

1. **The Asset** — current situation, capital structure, asset & lease, tenant overview
2. **The Comps** — on-market, sold, ask vs. close
3. **Pricing Analysis** — value by cap rate, net proceeds
4. **Why We Are at the Table** — credentials, buyer universe, marketing plan, team

Plus cover, agenda, one divider per section, and confidentiality. No section runs long enough
to need a subsection. Resist adding slides — if content doesn't fit, it's usually two slides or none.

## Standardized slides

These never change deal to deal. Read them from the repo and copy verbatim:

- Cover, Agenda, section dividers
- By the Numbers, Track Record
- Marketing Plan, Buyer Universe
- Team, Confidentiality

Do not rebuild them from a PPTX, a screenshot, or memory. If a committed file and a PowerPoint
disagree, the committed file wins.

## Deal slides

Per-deal, but the layout is fixed:

- **Current Situation** — one property or portfolio summary, NOI and total investment tiles
- **Capital Structure** — three stat tiles (DSCR, annual cash flow, cash-on-cash) over a detail table
- **Asset & Lease** — detail table left, property photo right
- **Tenant Overview** — three columns: Operator / Footprint / financials table, stat band above
- **Comps — On-Market**, **Comps — Sold**, **Ask vs. Close**
- **Pricing Analysis**, **Net Proceeds**

## Comps tables

- **12 columns maximum.** More than that forces type below the floor.
- Tenant/Address left-aligned, Guarantor left-aligned, every column between centered.
- Subject row pinned to the top, orange tint, labeled `SUBJECT` — no property or banner name.
- Guarantor format: `Entity (unit count)` — e.g. `AAA Mgmt (80+)`. Consistent across all rows.
- One term for unknowns: **Undisclosed**. Never mix in "Not stated" or "N/A".
- Sold comps sorted by close date, most recent first.
- Average row bold over a 3px navy rule. Gap of 28px between the average row and the READ block.
- Demographics (3-mi pop, HHI) live in the backup file, not on the slide. They are the columns
  that force sub-24px type, and they are usually placeholders anyway.

## Copy

- **No second person.** "The ownership structure," not "how you own it."
- **Don't assign things to people.** "The basis," not "what the Smiths paid." The audience knows who they are.
- **Nothing stating the obvious** to the people in the room.
- **No promises or expectations.** A READ states what the data shows and stops — no "expect,"
  no "this should," no forward-looking claims.
- `Gas / C-Store` — capitalized, both words.
- Titles are topic labels or neutral statements of fact.

## READ blocks

One fact, stated plainly, then stop. When two numbers could be confused for each other, label
the basis explicitly — e.g. unmatched averages vs. matched ask-to-close pairs are different
measurements and must say so.

## Comp data integrity

Comps pulled from outside Crexi or CoStar frame a range; they do not set the price. Never peg the
subject to a specific print, and never write a read that implies the pricing recommendation is
contradicted by the comps. Caveat the source, don't level the data.

## Pricing

- **Price off current rent by default.** Year 2 rent is a per-deal call — use it only when asked.
- When Year 2 rent is used: name the effective date, and show current rent once for context and
  nowhere else.
- Show ask / expect / floor, with the basis as a footer row.
- Gross value indications only — always state that proceeds are net of nothing.

## Layout

- **24px type floor**, everywhere, no exceptions. If content won't fit at 24px, cut content —
  don't shrink type.
- **Footer on every content slide**, bottom edge at y=1016. No footer on dividers or the cover.
- Slide padding 84px 100px 64px. Footers pinned with `margin-top:auto`.
- New content needs a slide with slack. If existing elements plus a new block don't fit, that's a
  two-slide answer — not a compression exercise. Never quietly absorb space from content the
  client has approved.
- Squared corners, no shadows, no animation. Emphasis via background tint, never elevation.
- Orange appears on every slide but only in small bites.
