# Oracle AI World 2026 — Your Supply Chain Management Guide

A separate static guide built around the supplied Oracle SCM investment areas. No customer name, deployment, maturity, business challenge, migration decision or additional entitlement is inferred. Other persona projects are unchanged. Nothing has been published, registered or deployed.

## Contents and preview

- 99 unique curated choices, 100 official session IDs, 102 scheduled offerings.
- 14 Essential, 25 Strongly Recommended, 35 Useful Alternative, 25 Discovery choices.
- A fixed 13-offering starting agenda covers all seven investment areas. It has no overlaps and at least 30 minutes between same-day sessions. Buffers are planning allowances, not measured walking times.
- Six supplied SaaS areas and one EBS SCM area reproduce all eight supplied entitlement codes. Product counts overlap across areas.
- Local preview: http://127.0.0.1:8799/. Repository-path preview: http://127.0.0.1:8799/scm-ai-world/.

The website is plain HTML, CSS and JavaScript with embedded session data and a matching JSON source. It requires no backend, account, external font, runtime service, dependency installation or GitHub Actions build. All assets use relative paths.

## GitHub Pages upload — publish from the repository root

1. Extract `scm-ai-world-github-pages.zip` into a local folder. Do not upload the ZIP itself.
2. Create a separate GitHub repository, for example `scm-ai-world`. Use a public repository for free GitHub Pages on a free account. Review the attendee-facing content before publishing it.
3. Choose **Add file → Upload files**. Upload **all extracted files directly to the repository root**, alongside `index.html`. Do not upload an enclosing folder. Include `.nojekyll` and `.gitignore`.
4. Commit the files to `main`.
5. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save. Do not select `/docs`; this package uses the root method.
6. After GitHub finishes deployment, open the Pages URL shown in Settings. With account `colinprojects-dev` and repository `scm-ai-world`, the expected URL would be `https://colinprojects-dev.github.io/scm-ai-world/`. This is an example destination, not an already-published URL.

Runtime files that must remain together:

```text
index.html
sessions.json
catalog-ui.js
agenda-core.js
calendar.js
agenda.js
discovery.js
agenda.css
.nojekyll
```

The ZIP also contains this README, `.gitignore`, and the public authoring/verification scripts `layout.html`, `build.mjs`, `serve.mjs` and `verify.mjs`. Uploading all of them is safe; only the runtime files above are loaded by the website. No private research, raw catalog collection, browser state, personal agenda export, credential, cache or dependency directory is included. Publication is a separate manual action.

## Local authoring

With Node.js available, run `node build.mjs`, `node verify.mjs`, then `node serve.mjs`. The PORT environment variable may change the local port. The preview server exposes only runtime files and supports both `/` and `/scm-ai-world/`. Node and the preview server are not used by GitHub Pages.

Edit `layout.html` or `sessions.json` and rebuild `index.html` before uploading changes. `sessions.json` and the embedded JSON in `index.html` must match. `verify.mjs` checks this, counts, offering identities, agenda buffers, conflicts, imports, repeated IDs, source URLs, calendar conversion and relative paths.

## Research and factual limits

Research used only the already-open official Oracle AI World 2026 catalog in the terminal browser on October 21, 2026: all available pagination, a Supply Chain & Manufacturing filter cross-check, relevance screening, and direct verification of all 100 retained detail pages. All retained pages loaded successfully. The catalog header showed 719 sessions; complete pagination rendered 717 distinct listings and the filter dialog reported 717 results. The discrepancy is unresolved and disclosed in the site; no inspection of two additional unseen listings is claimed.

The year was checked against an explicit Oracle AI World 2026 session title in that catalog. Day filters publish October 25–28 with 2026 date values; all retained offering times are PDT (UTC−07:00). Official titles, IDs, speakers, formats, locations, dates and times are preserved. Concise scope/value summaries, tiers, product mappings, business outcomes, content focus and evidence stages are advisory interpretations. Check official pages before attending because schedules can change.

HOL2769 and HOL2325 are the same repeated FDI workshop and are consolidated into one choice. Each offering keeps its own official title, ID and link. BOO1584 and THR1577 each have two published offerings under one ID. The unique-choice and scheduled-offering totals are deliberately separate.

The Fusion Agent Studio hackathon is fully booked and registration closed. It can only be added after an explicit existing-registration planning acknowledgment; required virtual training and laptop notes are displayed. Sunday courses OUT1006 and OUT1009 are explicitly paid with registration through My Account; prices are not supplied. Laptop notes are preserved for applicable labs. Other absent fees or prerequisites are marked Not provided, which does not imply free or unrestricted.

Seeded, embedded or release-specific catalog wording does not establish your contractual inclusion, release, configuration, permissions or regional availability. Current customer use, exploration, roadmap previews and targets remain distinct. Meta is exploring use cases; CSG’s 80–90% compliance automation figure is a target; Watlow’s 60% process-efficiency improvement is a customer-specific published result. No customer outcome is a promise for your organization.

Specific PLM, inventory, manufacturing, maintenance, WMS, OTM, GTM, Field Service, analytics extensions, OCI and partner-tool rights are unverified. Product-group entitlements do not prove submodule coverage or current deployment. EBS optimization/coexistence coverage is conditional: the catalog has relevant architecture and phased-modernization examples, not a verified comprehensive EBS SCM operations clinic. No migration or product purchase is recommended by default.

## Saved agendas, exports and sharing

The storage key is `oracle-scm-ai-world-plan-v1`. This guide never reads or modifies another persona’s storage keys. Notes, discovery answers and selections save only in the current browser and origin; they do not automatically move to GitHub Pages, another device or another browser. There is no cloud synchronization or shared backend.

To transfer your plan, choose **Export plan JSON** on the old origin. On the hosted site, choose **Import plan JSON**, load or paste that file, and import it. Import replaces the displayed SCM selections, notes and answers; export a backup first. Invalid, unknown-offering and other-guide imports leave data unchanged. Personal JSON exports contain visitor-entered notes and answers; review them before sharing. The public URL shares the fixed guide, not private selections.

Adding an overlapping offering offers explicit keep, replace or cancel actions. The comparator includes alternatives hidden by filters and different-start overlaps. Touching endpoints are not overlaps but are flagged as tight transitions. Reset and clear require confirmation and preserve notes and answers. Typing discovery answers does not automatically change recommendations. Selecting a session never registers you or reserves a seat.

**Export calendar · ICS** creates tentative events for selected offerings. Published PDT times are converted to explicit UTC, including next-day UTC endings where applicable. Each event preserves the specific offering’s official title and link. Calendar exports include session planning information, not private agenda notes or discovery answers. Importing the calendar into a calendar application is your separate manual action.
