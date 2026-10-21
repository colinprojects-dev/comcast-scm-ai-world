# Comcast · Oracle AI World 2026 SCM Guide

An enrichment of the existing site at http://127.0.0.1:8799/. Its Josh-template design foundation, original SCM areas, session choices, chronological navigation, personal agenda controls and original storage schema are preserved. No other persona project was modified. Nothing was published, deployed or registered.

## Contents

- **110 unique session choices / 111 official IDs / 113 scheduled offerings**. All 99 original choices remain, with their indices and 102 offering identities intact.
- **16 Essential / 62 Useful alternative / 32 Adjacent / requested** choices. Requested session is an independent label, not a relevance tier.
- All **26 screenshot sessions** were live-verified in the already-open terminal-browser catalog and labeled Requested session. Five screenshot day/time differences are flagged in Sources & limitations, along with an additional THR1577 offering.
- BOO1584 is explicitly marked **Repeated Session** in the official catalog: Monday and Tuesday are separate offerings of one session, not a confirmed multipart course.
- Eleven new choices cover business projects (3), adjacent enterprise-data governance (2), Oracle Integration (4) and customer adoption/release readiness (2).
- The revised **13-offering recommendation** covers the original seven investment areas, has zero overlaps and minimum 30-minute same-day buffers. These are planning allowances, not measured walking times.

The source is plain static HTML, CSS and JavaScript with embedded data matching sessions.json. There is no runtime backend, account, installation dependency or required environment variable. Relative asset paths work at the root and under /scm-ai-world/.

## Local preview and maintenance

With an existing Node.js runtime: **node build.mjs**, **node verify.mjs**, then **node serve.mjs**. The preview uses port 8799 by default and supports both / and /scm-ai-world/. Set PORT only if an alternate local port is needed. GitHub Pages does not use this server. No dependencies were changed or added.

Edit sessions.json and/or layout.html, then rebuild index.html. verify.mjs checks embedded/source consistency, counts, source links, offering identities, requested labels, repeat consolidation, partial overlaps, unknown-time exclusion, plan validation, calendar UTC conversion and static asset paths. Keep all runtime files together.

## Manual GitHub Pages upload — use the repository root

This package preserves the earlier SCM root deployment approach. Do not switch it to /docs.

1. Extract the ZIP. Open the existing SCM repository (for example scm-ai-world), or create a separate repository with that name if one does not exist. Do not upload to Josh’s separate repository or another persona repository.
2. Choose **Add file → Upload files**. Upload **all 15 files inside the extracted comcast-scm-ai-world-enriched-20261021 folder directly to the repository root**. Do not upload the enclosing folder or the ZIP. Include .nojekyll and .gitignore.
3. Commit to main. Under **Settings → Pages**, select **Deploy from a branch → main → /(root)**. Keep that publishing folder consistent with the root upload.
4. Use the Pages URL shown by GitHub after it deploys. With account colinprojects-dev and repository scm-ai-world, the expected URL is https://colinprojects-dev.github.io/scm-ai-world/. No publication has been performed by this preparation.

The 15 files are:

index.html, sessions.json, agenda.css, catalog-ui.js, agenda-core.js, agenda.js, calendar.js, discovery.js, .nojekyll, .gitignore, README.md, layout.html, build.mjs, serve.mjs, verify.mjs.

The first nine are runtime files. The remaining files document or reproduce the build and checks. No private raw catalog, research notes, browser exports, backups, credentials, tokens, caches or dependency directories are included. Review customer-specific interests before choosing public visibility.

## Saving, reset and transfer

The existing **oracle-scm-ai-world-plan-v1** key and **oracle-scm-ai-world-plan** version-1 JSON schema are unchanged. All original 99 session indices and 102 scheduled offering identities remain compatible. Existing custom selections are not automatically overwritten by the new baseline. The expandable reference plan shows the updated recommendation; **Reset to recommended** applies it only after confirmation and preserves notes and discovery answers. The original 12 answer slots remain, with related question refinements; three more focused questions were added. Review earlier answers against the revised wording.

Notes, answers and choices save only in this browser and origin. They do not automatically transfer from localhost to GitHub Pages, another port, device or browser. Export plan JSON on the original site, then import it on the hosted site. Import replaces selections, notes and answers; export a backup first. Unknown/duplicate offering IDs and other-guide schemas are rejected without changing displayed data. Personal exports include notes and answers; review them before sharing. Sharing the site URL shares the guide, not private selections. Calendar exports are tentative holds and do not register seats.

Conflict detection covers partial overlaps, including a short theater inside a longer breakout. The notice reads **Scheduling conflict — choose an option**. Keep both for comparison or explicitly replace conflicting selections; none is silently removed. Each repeated session can be selected by its individual time slot. On-demand/unknown-time entries are excluded from timed selection.

## Source and accuracy boundaries

The previous SCM research was reused. This expansion checked **26 requested pages and 11 additions** through the official catalog already open in the terminal browser on October 21, 2026, without broad recollection, external search or API retrieval. Existing retained evidence plus the new checks cover 111 official IDs. The event year is confirmed by an explicit Oracle AI World 2026 catalog title; date filters show October 25–28 and schedules publish **PDT (UTC−07:00)**. Titles, dates, times, rooms, speakers and published attributes are catalog facts; topic mappings, tiers and concise value explanations are advisory.

Official screenshot corrections: LRN1498 Monday 8:15–9:00 AM; LRN1080 Monday 2:00–2:45 PM; LRN1503 Tuesday 8:00–8:45 AM; LRN1083 Monday 2:00–2:45 PM; LRN1082 Monday 3:15–4:00 PM. All are PDT. The screenshot lacked full dates, AM/PM and timezone. THR1577 additionally offers Wednesday 11:40 AM–12:00 PM. Use the complete in-site checklist for all 26 exact titles and schedules.

PDH, Product Hub and cycle counting searches returned No matching sessions. PLM/product-data and EDM examples are adjacent; EDM is not automatically PDH, and PLM is not a verified PDH customer story. No cycle-counting practice, reconciliation procedure or cycle-count-specific BI demonstration is claimed. FDI is distinguished from OTBI, Oracle Analytics and other analytics products; a topic tag alone is not product/capability evidence. Comcast’s business project application and middleware architecture remain unknown. Oracle Integration development projects are not the business project module. Capital-construction examples are conditional.

Customer results, demonstrations, exploration, current functions and roadmaps remain distinct. No agent is claimed to solve a Comcast operational error without technical validation. Product codes from the earlier brief remain supplied context, not independent proof of installed submodules, availability or contractual rights. Meta is evaluating; CSG’s 80–90% figure is a target; Watlow’s 60% result is case-specific. First Solar’s learning example includes HR goal creation and does not prove SCM error resolution.

Sunday paid courses and the closed hackathon remain optional, with published fees/prerequisites/equipment notices preserved. Missing fields are Not provided, which does not mean free or unrestricted. The HOL2769/HOL2325 workshop remains one choice with two official IDs and offerings. Room and registration requirements remain external Oracle dependencies; recheck schedules before attending.
