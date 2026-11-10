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
