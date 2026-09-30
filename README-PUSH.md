# BOV push — 2026-09-29 update

**Supersedes the file list below.** Commit everything in this folder to the REPO ROOT, overwriting
same-named files. Delete the stray `repo-push/` folder from the 9/22 commit once these land.

- **Overwrite at root:** CONVENTIONS.md (superset), Comps-On-Market, Comps-Sold, Pricing-Matrix,
  Marketing-Plan-Timeline, Track-Record-Product-Type, By-the-Numbers, Buyer-Universe,
  Team-Three-Profiles, Confidentiality-Agreement, Why-SIG-Divider.
- **New at root:** BOV-Template.dc.html (the master — expects deck-stage.js, image-slot.js and
  assets/ beside it), Cover, Agenda, Current-Situation, Asset-Detail, Lease-Abstract,
  Tenant-Overview, Ask-vs-Close.
- **Untouched:** sig-design-system/, slides/, github-upload 2/, Debt-Facility-Detail,
  Net-Proceeds-Waterfall, headshots, readme.md, README-UPLOAD.md.

---

# Repo push — BOV layout

> **These files belong at the REPO ROOT, not in a `repo-push/` folder.** The previous commit landed
> them under `repo-push/`, so root `CONVENTIONS.md` and the five root slide templates were never
> overwritten and still carry the old versions. Move/commit these at the top level, then delete
> `repo-push/` from the repo.

Thirteen slide templates plus CONVENTIONS.md, all at the repo root. **Nothing is deleted.** Files not
listed here — Buyer-Universe, Team-Three-Profiles, Confidentiality-Agreement, Why-SIG-Divider,
Debt-Facility-Detail, Net-Proceeds-Waterfall, slides/, sig-design-system/ — are untouched and stay
as committed.

## New files

| File | What it is |
| --- | --- |
| `Cover.html` | Cover |
| `Agenda.html` | Four-section agenda |
| `Current-Situation.html` | Two descriptive tiles, summary, banded fact — no pricing |
| `Asset-Detail.html` | Property table, 1/3/5-mi demographics, four highlights, photo slot |
| `Lease-Abstract.html` | Terms band, rent schedule, landlord/tenant obligation split |
| `Tenant-Overview.html` | Stat band, institution / footprint / credit table |
| `Ask-vs-Close.html` | Matched ask-to-close pairs with concession column |

## Overwrites

| File | What changed |
| --- | --- |
| `Comps-On-Market.html` | Symmetric 8px cell padding, two-line rows, seven comp rows, footer, no empty READ bar |
| `Comps-Sold.html` | Same, plus the Sold column |
| `Pricing-Matrix.html` | Footer added; the rent-schedule restatement row removed |
| `Marketing-Plan-Timeline.html` | Footer added beneath the combined-reach bar |
| `Track-Record-Product-Type.html` | Four numbered reasons replace the three stat tiles, which duplicated By the Numbers |
| `By-the-Numbers.html` | Second supporting stat band; both bands flex to share leftover height |
| `CONVENTIONS.md` | See below |

## How this lands

This push is **authoritative over what is in the repo today, and additive to everything else.**

- `CONVENTIONS.md` **replaces** the root copy. It is a superset: every rule the old 4.5 KB version
  carried is still in it, verbatim or tightened, plus everything settled since. Two rules changed
  rather than grew — guarantor format now covers rated corporate credit alongside the operator
  `(unit count)` form, and demographics moved onto the Asset slide instead of the backup file.
  Both are marked as overrides in the file.
- The 6 template files listed below **replace** their root counterparts.
- The 7 new templates are **additions**.
- Everything else in the repo is **untouched** — `sig-design-system/`, `slides/`,
  `github-upload 2/`, the headshots, `readme.md`, and every template not named below.

## Rules added since the last commit

- **The comps subject row carries no pricing** — Price, $/SF and Cap are dashes; rent, NOI, term,
  structure, land, year built and guarantor fill in. An ask printed beside the comp set reads as
  though the comps set it.
- **Sort is not optional** — on-market by days on market ascending, sold by close date descending.
  Never by tenant, geography or cap rate.
- **No speaker notes ship** — `data-speaker-notes` is a drafting aid; strip every one before handoff.

## What CONVENTIONS.md gained

- **Symmetric padding** — one identical left/right value per table, `th` and `td` alike, edges
  included. Field-grid gutters and stat-band edges are the documented non-cell exception.
- **Deal logos and brand assets** — the tenant mark is an `<image-slot>`, never a committed PNG;
  SIG's own marks are the only committed logos; tenant logo stays off the navy cover.
- **Per-deal fields** — the bracketed placeholder vocabulary, and the rule that a template naming a
  real tenant is a bug.
- **Asset vs. Lease Abstract** — the strict split, and which fields always appear.
- **Fixed layout, variable rows** — rent-roll periods and obligation line items are per-deal; every
  obligation row carries exactly one Tenant or Landlord pill.
- **Footer on every white content slide**, below the bar where there is one, and the footer — not the
  bar — is the `margin-top:auto` element.
- **Bar construction** — label cell left, copy cell `flex:1` centered.
- **Comps ceiling** — seven comp rows, two-line cells, eighth comp is a second slide.
- **Pricing appears once, in Section III.**
- Spacing scale, label-tracking table, no grey content slides, 84/100/64 on every slide including
  the cover.

## Fill order

1. Drop the tenant logo into the `tenant-logo` slot and the photo into `property-photo`.
2. Replace every `[bracketed]` field. Search for `[` before shipping — a leftover bracket is
   obvious on screen, a leftover tenant name is not.
3. Add or remove rent-roll periods and obligation rows to match the lease.
4. Fill comps; if the set runs past seven, split it across two slides.
