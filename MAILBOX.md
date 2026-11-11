# MAILBOX

Shared message log between the owner and any AI (Claude, ChatGPT, others).
**Newest entry on top.** Read before working; add an entry after working.

## Template

```
### YYYY-MM-DD · <who: Claude / ChatGPT / Owner> · branch <name>
**Did:** what changed (files)
**Status:** done / in progress / blocked
**Next / requests:** what the next person should do or decide
```

---

### 2026-11-11 · Claude · branch claude/serene-allen-n8r43a
**Did:** Owner's corrected Disney Adventure World map (`assets/disney-adventure-world-map.webp`) checked against the official PDF: all 22 numbers match. Wired as `DAW_PINS`; "Mapas" tab now switches between Disneyland Park and Disney Adventure World. Added #1, #2, #7, #9 (shows) to the ride list.
**Status:** done on branch, NOT yet merged.
**Next / requests:** Owner: "publica".

### 2026-11-11 · Claude · branch claude/serene-allen-n8r43a
**Did:** Added Cédric Grolet tiles (Opéra and Le Meurice) to Paris "Comer y beber". Both closed Mon–Tue (official sites): only Fri 4 or Sun 6 work; Opéra suggested Sun 6 before 19:00.
**Status:** done on branch, NOT yet merged.
**Next / requests:** Owner is regenerating the Disney Adventure World map to match the official PDF numbering (9 of 22 numbers were misplaced: 4, 5, 6, 8, 9, 12, 13, 19, 20). Wire it like `DLP_PINS` when it arrives.

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Guide tips are now dropdowns with the why/details and source (61 of 91 tips; `guide-details.js`). "Comer y beber" shows place tiles (10 Paris, 2 Munich) with official photo/site, address, why, hours and "📍 Ver dónde" (Google Maps search). Found La Jacobine is closed Mondays, so it is no longer suggested for Mon Dec 7.
**Status:** done on branch, NOT yet merged (together with: Disney tab + PDFs, clickable Disneyland Park map, navigation and "?" fixes).
**Next / requests:**
- Owner reported the downloaded Disney Adventure World recreated map: its numbers do not match the official legend (e.g. #20 drawn on Tower of Terror, which is #8). Not wired. Only add it if a version matching the official PDF numbering is provided.
- Unconfirmed in tiles: Disco Burgers and La Flânerie hours (Instagram only), Au P'tit Grec Mouffetard hours, Jacques Genin hours.
- Owner: "publica".

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Clickable Disneyland Park map in Disney plan → "Mapas": owner's recreated map image (`assets/disneyland-park-map.webp`), 46 tap targets on the numbered circles (`DLP_PINS`, % positions; railroad stations 12/25/38 open #1). Tapping opens a ride card (priority + done); circles show status rings (gold top, purple high, green done, grey discarded). Zoom −/+, scroll/pan. Added #5 and #8 to the ride list (extra-charge).
**Status:** done on branch, NOT yet merged (with the Disney tab, PDF links, navigation and "?" fixes).
**Next / requests:** Owner: test on phone, then "publica". If the owner sends a recreated Disney Adventure World map, add `DAW_PINS` the same way.

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Separate "🏰 Disney" button in the city bar (opens the Disney plan from any city). New "Mapas" tab in the Disney plan linking Disney's official March 2026 PDFs (hosted on brochure.disneylandparis.com) plus the interactive map; every ride # now opens its park's PDF. Panel tabs wrap on narrow phones.
**Status:** done on branch, NOT yet merged to `main` (together with the navigation and "?" fixes below).
**Next / requests:** Owner: say "publica". If Disney moves the PDFs, update `PDF_DLP` / `PDF_DAW` in `disney.js`.

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Navigation fix after owner report ("can't come back"). Phone back button/swipe now steps back (topic → tiles → map; Disney panel → map) via history states `fi:"guide"`, `fi:"guide-sec"`, `fi:"disney"`. Close buttons are now labeled "← Mapa" (guide) and "← Volver" (Disney). Guide tiles (PR #3) are live. Map help bubble and "?" moved below Google's fullscreen button (top 58–62px) so they no longer overlap.
**Status:** done on branch, NOT yet merged to `main`.
**Next / requests:** Owner: say "publica".

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Guía del viaje now shows each tab as topic tiles (icon, title, count); tapping a tile opens its tips with a "← Temas" back button. Icons live in `ICONS` in `guide.js` (keyed by section title; new sections fall back to 📌).
**Status:** done on branch, NOT yet merged to `main`.
**Next / requests:** Owner: say "publica" to put it live.

### 2026-11-10 · Claude · main (via PR #1)
**Did:** Owner approved; PR #1 merged into `main`. Live site verified: new version served, map loads, child's name/age gone.
**Status:** LIVE. Earlier entries saying "NOT yet merged" are superseded.
**Next / requests:** Owner: test on both phones. Late Nov: Disney Dec 5 park hours. Milan plan when ready.

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Disney park tickets for Sat Dec 5 purchased by the owner (booking number kept private). Marked as bought in the Paris Dec 5 stop, the Disney card, the guide checklist (fixed "Comprado" state) and the Disney prep list.
**Status:** done on branch, NOT yet merged to `main`.
**Next / requests:** Resolved: tickets are 1 day / 2 parks (both parks stay in the Disney panel).

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Fact-checked the guide, Disney panel and Munich cards against official 2026 sources (IDFM/RATP, paris.fr, Notre-Dame, Tour Eiffel, Galeries Lafayette, Sainte-Chapelle, ANSM, Disneyland Paris, Malpensa Express, ATM, Paris Aéroport, CBP, easyJet, MVV, muenchen.de, Tollwood, Märchenbazar, Deutsches Museum, Nymphenburg, BMW Welt, LEGO). Retagged verified tips as Oficial with links; corrected fares (2026), Notre-Dame booking window, RER A branch warning, Disney Christmas show list, Munich hours and child fares.
**Status:** done on branch, NOT yet merged to `main`.
**Next / requests:**
- Only 2 tips remain "Confirmar": Hôtel de Ville market 2026 (not in official calendar yet) and the Milan apartment checkout/luggage policy (ask the host).
- Late November: check Disney park hours for Dec 5 (not published as of Nov 10) and update the Disney panel.
- Unverified (left as Video/Sugerencia): Premier Access prices, LEGO Build-a-Minifigure, Disney "no pharmacy" (only first aid is documented).

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** Added `guide.js` ("📘 Guía" button in header): tabs Viaje (travel days with times, hotels by area, 12-item bookings checklist), París (transport, Christmas markets and lights, food, warnings), Múnich (transport, markets with official 2026 dates, food, decisions), Milán (arrival, plan ideas, Dec 19 departure logistics), Equipaje (clothes, health, plugs, apps). Transcript tips are now in the site, each tagged by source.
**Status:** done on branch, NOT yet merged to `main`.
**Next / requests:**
- Owner: review "Confirmar" items; they are not verified (fares 2025, line 1 / RER A route, Newark re-check, Milano Centrale arrival).
- Any AI: when a "Confirmar" item is verified against an official source, change its tag to `o` and add the link.

### 2026-11-10 · Claude · branch claude/serene-allen-n8r43a
**Did:** City tabs (París, Múnich draft, Milán pending), trip strip, Disney plan panel (`disney.js`) with rides from the official accessibility map PDFs, "Volver al hotel" button, privacy fixes (no child name/age, no flight numbers). Added `BUILD_LOG.md`, `AGENTS.md`, `CLAUDE.md`, this mailbox.
**Status:** done on branch, NOT yet merged to `main` (not live).
**Next / requests:**
- Owner: approve merge to `main`, then test the live site on both phones (map, Munich tab, Disney panel).
- Owner: decide Disney ride priorities with the family; measure the child's height.
- Owner: send the Milan plan when ready; confirm Munich decisions (Himmelswerkstatt, market, restaurant).
- Any AI: Munich pins are approximate; do not change Paris coordinates without reason.
