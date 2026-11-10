# AGENTS.md: rules for any AI working on this repo (Claude, ChatGPT/Codex, others)

## Before you change anything
1. Read `MAILBOX.md` (newest entry first) and `BUILD_LOG.md`.
2. Fetch the latest `main` and work on a branch. Never overwrite files with an older copy.
3. Make a small, focused change. Show the owner a short plan first if the change touches more than one feature.

## After you change something
1. Add a new entry at the TOP of `MAILBOX.md` using the template there.
2. Add a dated line to `BUILD_LOG.md` if a feature was added, removed or decided.
3. Commit with a clear message and push to your branch. Do not merge to `main` without the owner's OK.

## What this project is
A Spanish-language, mobile-first family trip site on GitHub Pages (public repo):
París 4–8 · Múnich 8–12 · Milán 12–19 · París (CDG) 19–20 dic. 2026.
Plain HTML/CSS/JS, no build step. Files:
- `index.html`: layout, styles, city data (`PARIS_DAYS`, `MUNICH_DAYS`, `CITIES`), Google Map, city tabs.
- `place-details.js`: rich place cards (`PLACES`, keyed by stop name), "Cómo llegar" and "Volver al hotel".
- `disney.js`: Dec 5 Disney plan (rides, shows, prep checklist; saved in browser storage).
- `guide.js`: "Guía del viaje" panel: travel days, bookings checklist, per-city tips (transport, markets, food), packing. Every tip has a source tag: o=Oficial, v=Video, s=Sugerencia, c=Confirmar. Add new tips there.
- `guide-details.js`: `GUIDE_DETAILS` (dropdown text per tip, key = first words of the tip, include the source) and `GUIDE_FOOD` (place tiles in "Comer y beber": photo, website, address for "Ver dónde", why, hours).
- Stop format: `[time, name, description, lat, lng, optionalSearchQuery]`.

## Hard rules
- **Never print, copy or replace the Google Maps key** in `index.html`. It is restricted to the published site.
- **Public repo:** no booking codes, passport data, flight numbers, apartment unit, full names, the child's name or age.
- **No invented facts:** opening hours, prices, show times and heights must come from an official source or be labeled "por confirmar".
- **No Disney artwork:** do not host or copy the official park maps; link to Disney's own PDFs (`PDF_DLP`, `PDF_DAW` in `disney.js`). Ride numbers (#) refer to those PDFs and link to them. **Owner exception (2026-11-10):** `assets/disneyland-park-map.webp` is the owner's own recreated map, published at the owner's request; pins in `DLP_PINS` (disney.js) are % positions on that image. Do not add other Disney artwork without the owner's OK.
- Keep the UI in Spanish. Keep changes simple: no frameworks, no build tools, no backend.
