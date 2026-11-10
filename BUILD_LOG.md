# BUILD_LOG

## 2026-11-10 · Session 1 (one-day build)

**Done**
- Privacy: header subtitle now "Viaje familiar" (no child name or age); flight numbers removed from stops and place cards.
- Trip strip in header: París 4–8 · Múnich 8–12 · Milán 12–19 · París (CDG) 19–20 dic.
- City tabs are real: París (existing plan), Múnich (wife's draft, "propuesta en revisión"), Milán ("Pendiente de planificar").
- Map rebuilds layers per city; each stop can carry an optional search query (6th field) for accurate Google Maps links.
- Place cards: Munich details added; new "Volver al hotel" button (Google Maps transit from stop to the city's hotel).
- Disney plan (`disney.js`), opened from the Dec 5 card: 58 rides/shows across both parks with official map numbers, type, duration, min height and "may frighten" flags; per-ride priority (Imprescindible/Alta/Opcional/Descartado) and done checkbox; Christmas shows tab; preparation checklist. Saved in the phone's browser storage (not synced between phones).

- Trip guide (`guide.js`): whole-trip summary with travel days, bookings checklist, per-city tips from the transcripts and planning docs, packing list. Source tag on every tip.

- Fact-check pass (2026-11-10): ~35 claims checked against official sources; tips retagged/corrected. 2 items remain to confirm.

- Guide layout changed to topic tiles per tab (owner request).

**Sources and limits**
- Ride facts: official Disneyland Paris "Attractions Accessibility Map" PDFs (March 2026). No Disney artwork is hosted; the panel links to the official map.
- Default priorities are suggestions; show info and prep tips are video tips, to confirm in the official app.
- Munich pin positions are approximate; navigation links search by place name.
- Testing: headless browser on file:// (city tabs, Disney panel, persistence, stubbed map rebuild). The real Google Map could not load here (key is restricted to the published site, as intended); smoke-test on the live URL after merge.

**Decisions**
- No full file refactor, no Discover layer, no sync, no own Disney park map (out of scope for a one-day build).
- Public site never holds booking codes, passport data, flight numbers or the apartment unit. Travel times and cities are shown (owner's choice: useful on the go).

**Open**
- Milan itinerary (when planned).
- Munich decisions: Himmelswerkstatt (language, booking ~Nov 29), Residenz vs Medieval market, restaurant.
- Disney: ticket purchase, family ride priorities, child's height.
- CDG hotel for Dec 19 (Roissypole suggested).
