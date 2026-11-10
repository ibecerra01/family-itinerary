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
