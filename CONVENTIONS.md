# SIG BOV — Deck Conventions

Standards for building a Broker Opinion of Value deck. **This file supersedes any earlier copy in
the repo** — where a rule here contradicts an older note or a committed template, this file wins,
and the template gets corrected. Everything the previous version carried is retained below. Derived from the Shriber, Smith and
Bank of America BOVs. The slide templates in this repo are the source of truth — read and copy
them verbatim, swap only per-deal data.

## Structure

Four sections, roughly 18–21 slides:

1. **The Asset** — current situation, capital structure, asset, lease abstract, tenant overview
2. **The Comps** — on-market, sold, ask vs. close
3. **Pricing Analysis** — value by cap rate, net proceeds
4. **Why We Are at the Table** — credentials, buyer universe, marketing plan, team

Plus cover, agenda, one divider per section, and confidentiality. No section runs long enough
to need a subsection. Resist adding slides — if content doesn't fit, it's usually two slides or none.

**Not every deal uses every slide.** An all-cash, unlevered asset has no Capital Structure and no
Net Proceeds slide; drop them rather than filling them with zeroes. Asset and Lease Abstract are
always two separate slides — see below.

## Standardized slides

These never change deal to deal. Read them from the repo and copy verbatim:

- Cover, Agenda, section dividers
- By the Numbers, Track Record
- Marketing Plan, Buyer Universe
- Team, Confidentiality

Do not rebuild them from a PPTX, a screenshot, or memory. If a committed file and a PowerPoint
disagree, the committed file wins.

**By the Numbers** carries the firm figures ($12B / 6,100+ / $2.5B) over a supporting band
(founded, states transacted, SIGives). **Track Record** carries four numbered reasons sellers
price tighter with SIG, named to the product type — it does not repeat the firm figures. Product-
specific transaction counts go on By the Numbers or nowhere; if there is no credible figure for
the exact product type, use the overall practice numbers rather than leaving dashes on a slide.

## Deal slides

Per-deal, but the layout is fixed:

- **Current Situation** — two descriptive stat tiles, summary paragraph, one banded fact
- **Capital Structure** — three stat tiles (DSCR, annual cash flow, cash-on-cash) over a detail table
- **Asset** — six-field property table, demographics, four highlights, photo right
- **Lease Abstract** — terms band, rent schedule, landlord/tenant responsibility split
- **Tenant Overview** — stat band above, then three columns: the institution / the footprint / credit table
- **Comps — On-Market**, **Comps — Sold**, **Ask vs. Close**
- **Pricing Analysis**, **Net Proceeds**

### Asset vs. Lease Abstract

Two slides, and the split is strict. **Asset** is real estate and market: building, land, lease
structure, guarantor, market, ownership entity, demographics, and four highlights. **Lease
Abstract** is everything else about the lease: the terms band, the rent schedule, the obligation
split, and any capital-recovery mechanism. Frontage, parking, position, access and occupancy
detail are optional — cut them before cutting building/land, structure/guarantor, or market,
which always appear.

Demographics belong on the Asset slide as a compact 1 / 3 / 5-mile table — population and median
household income only. Do not put demographics in a comps table (see below), and do not expand
the rings into a stat band; the table reads at 24px and the band does not.

Reserve the four highlight slots even when they are empty at first draft. Real highlight copy runs
two to three lines and will push the footer off-slide if the space was not held for it.

### Deal logos and brand assets

**Mat the logo onto opaque white.** PPTX / Google Slides export flattens an alpha channel to
black, so a transparent logo PNG arrives as a black box in the exported deck. Ship the tenant mark
as an opaque white-background PNG — every logo placement is on a white slide, so the mat is
invisible on screen and correct in export. Draw it with `fillRect('#ffffff')` then `drawImage`;
never call `getImageData` (see below).

**Never trim or re-encode a logo through canvas readback.** Canvas readback of a transparent PNG returns zero
alpha in this environment, so any trim/downscale/flatten pass writes black RGB under an unusable
alpha channel — the logo then renders as a black box. Copy the uploaded file byte-for-byte
(`copy_files`) and size it with CSS `height`. If a logo shows a black or grey plate, the cause is
a processing pass or the slot's empty-state wash, never the tenant's file.

**Logos are plain `<img>`, not `image-slot`.** The component paints an 8% grey empty-state wash on
its frame that stays behind a filled image, so a transparent logo reads as a grey plate and the
plate survives the PPTX / Slides export. `image-slot.js` carries the fix
(`:host([data-filled]) .frame{background:transparent}`) — re-apply it after any starter upgrade —
but the custom element registers once per page session, so the fix only takes effect on a fresh
load. Use `image-slot` for property photos, where an empty drop zone is the point, and a plain
`<img>` for the tenant mark. Swap the logo by replacing the file at `assets/<tenant>.png`.

**Every logo placement is identical:** `height:112px;flex:none;display:block;` in the top-right of
the slide header, on every slide that carries it. No per-slide sizes.

**No deal-specific logo is ever committed.** The tenant or operator mark is an `<image-slot>` drop
zone, id `tenant-logo`, so each deal drops in the brand it is working with:

```html
<image-slot id="tenant-logo" shape="rect" fit="contain"
            placeholder="Tenant logo — drop PNG"
            style="width:340px;height:88px;flex:none;display:block;"></image-slot>
```

It sits top-right of the header block on the white content slides — Current Situation, Asset,
Lease Abstract, Tenant Overview, and all three comp slides. The only committed logos are SIG's own
(`sig-wide-color`, `sig-wide-white`, `sig-icon-color`, `sig-icon-white`).

**The tenant mark stays off the navy cover.** Brand PNGs are dark-on-transparent, so on the navy
gradient the wordmark goes near-invisible; the three ways out are all worse than omission — a white
plate reads as a sticker, recoloring the mark is not ours to do, and shrinking it to just the
emblem crops the brand. The cover carries the SIG mark alone and names the tenant in the title,
which is where the eye goes anyway. Put the logo on a reversed lockup only if the brand publishes
one. Logo slots therefore live on the white content slides.

The mark appears on Current Situation, the Asset slide, the Lease Abstract, the Tenant Overview,
all three comp sets and the Pricing slide — eight placements, one size.

Property photography is the same: an `<image-slot>` with id `property-photo`, never a committed image.

### Per-deal fields

Every brand- or property-specific value ships as a bracketed placeholder, not as leftover data from
the last deal: `[TENANT / OPERATOR]`, `[TENANT LEGAL NAME]`, `[TENANT ENTITY]`, `[GUARANTOR]`,
`[OWNERSHIP ENTITY]`, `[000 Street Name, City, ST 00000]`, `APN [000-000-000]`, `[$000,000]`,
`[0.00]%`, `[00/00/0000]`, `[product type]`. A template that still names a real tenant is a bug —
the next author will ship it.

### Fixed layout, variable rows

On Lease Abstract, the **layout is locked** and two row sets are explicitly per-deal:

- **Rent-roll periods** — add or remove rows to match the lease. Keep the in-place period tinted
  orange and first, and keep the NOI column inclusive of any additional rent.
- **Landlord / tenant obligations** — add, remove, or relabel line items to match the lease.
  Every row carries exactly one pill: navy `Tenant` or orange `Landlord`. Never a shared row, never
  a third state. If an obligation is genuinely split, write it as two rows.

Seven to ten obligation rows fit. Past that, cut the items a reader can infer from the rows that
remain rather than shrinking the type or the row padding.

## Comps tables

- **12 columns maximum.** More than that forces type below the floor.
- Tenant/Address left-aligned, Guarantor left-aligned, every column between centered.
- Subject row pinned to the top, orange tint, labeled `SUBJECT` — no property or banner name.
- Guarantor format, consistent across all rows, picked by what the guarantee actually is:
  - Corporate credit tenant → `Corporate (S&P A+)` — the agency named in every cell, the rating
    the operating entity that signs the lease carries, not the holding company. Verify each one
    against the issuer's own IR page; ratings repeat when the same tenant recurs, which is fine.
  - Operator or franchisee → `Entity (unit count)` — e.g. `AAA Mgmt (80+)`.
  - Neither published → **Undisclosed**.
- One term for unknowns: **Undisclosed**. Never mix in "Not stated" or "N/A".
- **Sort is not optional.** On-market sorted by days on market, fewest first; sold sorted by close
  date, most recent first. Never by tenant, geography, or cap rate — DOM is the market's own read on
  what is priced right, and reordering it hides that.
- Comp-set slides carry a **Full market survey** link in the footer, after the sandsig.com link, in
  SIG blue and underlined. Ship it as `href="#"` — the broker pastes the survey URL after export.
- Average row bold over a 3px navy rule, labeled just **Average**, and it averages the comps shown —
  never the wider survey. Do not annotate the row with the count; the reader can see how many rows
  there are. If a survey-wide number is wanted too, it goes in the READ, named as such.
- **Two-line rows: tenant over address, stacked.** Real comp labels ("[TENANT] — 11315 N Rodney
  Parham Rd, Little Rock, AR") run 550–660px against a ~478px first column, so a single-line cell
  wraps anyway and silently pushes the slide over. Size for two lines from the start.
- **Seven comp rows is the ceiling** with 12 columns, the 24px floor and the footer. An eighth comp
  is a second slide — not tighter padding, not a smaller font, not a dropped footer.
- The comp slides carry **no READ bar** unless the read says something the table does not. The
  footer is the anchor; an empty bar costs 91px, which is two comps.
- Demographics do not belong in a comps table — they are the columns that force sub-24px type.
  They live on the Asset slide as a 1 / 3 / 5-mile ring table (population and median household
  income), sourced from the demographic report rather than the comp survey, and labeled with the
  estimate year. Ship unfilled rings as bracketed placeholders — never invent a ring to fill a row.

## Copy

- **No second person.** "The ownership structure," not "how you own it."
- **Don't assign things to people.** "The basis," not "what the Smiths paid." The audience knows who they are.
- **Nothing stating the obvious** to the people in the room. This keeps taking three forms, all
  banned: a subhead that narrates the slide's own contents ("the real estate, the market, and what
  sets the asset apart"); a caption repeating what the reader can see or what the title already says
  ("Subject property · 107 Main Street"); and a cross-reference to another section ("pricing in
  Section III") — the agenda is the table of contents. Label a row **Average**, not "Average — seven
  comps shown."
- **No promises or expectations.** A READ states what the data shows and stops — no "expect,"
  no "this should," no forward-looking claims.
- `Gas / C-Store` — capitalized, both words.
- Titles are topic labels or neutral statements of fact.
- **Say a fact once — in prose.** If a rent step is on Current Situation, it does not reappear in
  the Lease Abstract prose. Duplication reads as padding and it is usually what pushes a slide over.
- **The exception is a highlights row.** The Asset slide's four highlight cards are deliberately a
  summary of arguments the deck makes at length later — credit, escalations, occupancy, location.
  Repetition there is the point, so do not "de-duplicate" them against the Tenant Overview, the
  Lease Abstract, or the Rent Schedule bar. The rule governs body copy and tables, not a card row
  whose job is to preview.

## Speaker notes

The deck ships with none. `data-speaker-notes` is a drafting aid, not a deliverable — strip every
one before handing the file over. A note that contradicts what is on the slide is worse than no note.

## READ blocks

One fact, stated plainly, then stop. When two numbers could be confused for each other, label
the basis explicitly — e.g. unmatched averages vs. matched ask-to-close pairs are different
measurements and must say so.

The bar is two cells: an orange label on navy, left-aligned, `white-space:nowrap`; and the copy
cell, which **centers its text** — `flex:1` with `justify-content:center` and `text-align:center`.
Key Takeaway bars are built the same way.

A bar is not a substitute for the footer. **Every white content slide carries both** — the bar,
then the footer beneath it at `margin-top:24px`. Dividers and the cover carry neither.

## Publish only what the source carries

Every figure on a slide traces to the survey, the lease, or a named public source. Do not fill a
table to make it look complete: an invented demographic ring, a drive-time, a distance to an
interstate exit, or a rounded "about" figure is a fabrication a buyer will underwrite against, and
the confidentiality slide's "sources believed reliable" does not cover a number with no source.
If the survey gives one ring, show one ring. If a distance is not in the file, cut the clause.

## Comp data integrity

Comps pulled from outside Crexi or CoStar frame a range; they do not set the price. Never peg the
subject to a specific print, and never write a read that implies the pricing recommendation is
contradicted by the comps. Caveat the source, don't level the data.

## Pricing

- **Pricing appears once, in Section III.** No opinion of value, cap rate, or price per foot
  on Current Situation or any Section I slide — those slides describe the asset. The second
  Current Situation tile is descriptive (term ahead, occupancy, basis), never the ask.
- **The subject row on a comps table carries no pricing.** Price, $/SF and Cap are dashes on the
  SUBJECT row; rent, NOI, term, structure, land, year built and guarantor all fill in. The subject
  row exists to frame the comparison, not to peg the asset before the pricing slide — and an ask
  printed beside the comp set reads as though the comps set it.
- **Price off current rent by default.** Year 2 rent is a per-deal call — use it only when asked.
- When Year 2 rent is used: name the effective date, and show current rent once for context and
  nowhere else.
- Show ask / expect / floor, with the basis as a footer row.
- Gross value indications only — always state that proceeds are net of nothing.

## Layout

- **24px type floor**, everywhere, no exceptions. If content won't fit at 24px, cut content —
  don't shrink type.
- **Footer on every white content slide**, bottom edge at y=1016 — including slides that already
  end in a READ or Key Takeaway bar, where it sits below the bar. No footer on dividers or the cover.
- Slide padding 84px 100px 64px — every slide, cover included. Footers pinned with `margin-top:auto`.
- New content needs a slide with slack. If existing elements plus a new block don't fit, that's a
  two-slide answer — not a compression exercise. Never quietly absorb space from content the
  client has approved.
- Squared corners, no shadows, no animation. Emphasis via background tint, never elevation.
- Orange appears on every slide but only in small bites.
- **No grey content slides.** White, or a navy gradient for covers and dividers.

### Symmetric padding

**Every cell in a table uses one identical left/right padding value, edges included.** No flush-left
first column, no flush-right last column, no different recipe for the header row or for zebra-
striped rows. A single asymmetric cell makes its row start or end out of line with the rows above
it, and it is the most common defect in these decks.

One value per table — 8px on the 12-column comps tables, 10px everywhere else — applied to
`<th>` and `<td>` alike. Vertical padding may vary by row role (header, body, average); horizontal
padding may not.

Column gutters in **field grids** are the one exception, and they are not cells: a two-column
detail grid pads the left cell on the right, the right cell on the left, with a hairline between —
that is the gutter, and it stays symmetric about the rule. The same applies to stat bands, where
the first tile has no left padding and the last has no right padding.

### Spacing scale

**The footer is the `margin-top:auto` element, never the bar.** `margin-top:auto` only absorbs free
space while free space exists; put it on the bar and the moment bar + footer exceed the box it
collapses to zero and everything below spills off the slide. Bar gets `margin-top:24px`, footer gets
`margin-top:auto`.

Gaps and margins come from one scale: **6 / 12 / 16 / 24 / 32 / 40 / 52**. Header block to first body
element is always 32px. The gap above a Key Takeaway or READ bar is 28px. Footer rules are
`padding-top:24px`. Bar labels are `22px 30px`, bar copy `20px 30px` — the same on every slide.

### Label tracking

- Eyebrow (the blue kicker above the title): `0.3em`
- Section-divider kicker: `0.55em`
- Sub-section label inside a slide, and bar labels: `0.18em`
- Field labels: `0.14em`
- Stat-tile labels and obligation pills: `0.1em`
- Table headers: `0.08em`


### Export-safe text
**Parallel column headings must fit on one line.** When columns start with sibling headings
(the Marketing Plan phases, card titles), set `white-space:nowrap` and tighten tracking to 0.08em
so none wraps. The exporter sizes each text box to its on-screen height, so one wrapped heading
pushes that column's first row down and the rows stop lining up across columns.

**One line, one element.** Never stack lines with `<br>` inside a single text box, and never mix a
bare text node with a link in the same box — the PPTX / Google Slides exporter drops the unwrapped
run (it is how the team phone numbers vanished). Contact stacks are a flex column of one `<div>`
per line: phone, email (link inside its own div), office.

**Contact lines are full-width boxes** (`width:100%;text-align:center`), never shrink-wrapped
to the text. The exporter sizes each text box to its content; Google Slides renders the font a
touch wider, so an unbreakable token like a phone number overflows by one character, wraps to a
second line outside the box, and appears to vanish.

**Phone numbers are a `tel:` link**, no label — `<a href="tel:+13108531266">(310) 853-1266</a>`, in a full-width box like every contact line..

## Added 2026-09-29

- **The master is `BOV-Template.dc.html`.** Every slide template in this repo is cut from it. Change
  the master first, then re-cut the templates — never edit a template alone, or the two drift.
- **The broker selects the rent basis for pricing.** Current rent is the default. When a contractual
  step is close enough that the broker prices on it, say so in three places — the Pricing subhead
  ("[Rent basis] ÷ cap"), the NOI label, and the subject row of both comp tables — so every figure
  in the deck sits on the same basis. There is no automatic rule; do not step pricing up unasked.
- **Rent add-ons are stated once, with their end date.** When a lease carries an additional rent
  (capital recovery, a CAM true-up) that is later folded into contract rent, the lease-specific
  clause card says when it stops being separate. Rent-roll NOI must not add it on top after that date.
- **Confidentiality sits on the navy divider background** with the white SIG wordmark — no grey,
  no white. It is the closer, not a content slide, so it carries no footer.
- **Marketing Plan phase headings share one fixed height** so the first step under each phase
  aligns after Google Slides export, where a two-line heading otherwise pushes its column down.
- **Team contact lines are separate full-width boxes**, one line each. A stacked `<br>` block is
  flattened by the Slides export and the phone line drops out of the box.
