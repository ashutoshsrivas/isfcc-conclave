# CLAUDE.md — 3rd International Smart & Future Cities Conclave (ISFCC)

Project brief for building the **event website** and **promotional banners** for the
3rd International Smart & Future Cities Conclave. Read this file top to bottom before
generating any code or design. All facts below come from the official proposal, agenda,
and invitation documents (in `/logo` and the source PDFs). Do not invent data — if
something isn't here, mark it `TBD` and flag it.

---

## 1. What we're building

1. **A Next.js website** — the public landing / information site for the conclave.
2. **Banners** — three formats, all sharing one visual system:
   - **Website hero banner** (digital, top of homepage)
   - **Social media banner** (LinkedIn / Facebook / Twitter promotion)
   - **Print standee / hoarding** (large-format, on-campus display)

Everything must feel like one consistent brand for a prestigious, international,
government-and-diplomat-facing event.

---

## 2. The event at a glance (single source of truth)

| Field | Value |
|---|---|
| Event name | 3rd International Smart & Future Cities Conclave (ISFCC) |
| Theme | **Intelligent Urban Futures — Technology, Sustainability & Governance** |
| Tagline | **Evolving Uttarakhand — Rising India** |
| Dates | **21–22 August 2026** (two days, Friday & Saturday) |
| Venue | **Graphic Era University (GEU) Campus, Dehradun, Uttarakhand, India** |
| Organiser | Global Chamber of Commerce & Industry (GCCI), Noida |
| Host / Knowledge & Venue Partner | Graphic Era University (GEU), Dehradun |
| Expected delegates | 500+ over two days (Industry, Government, Academia, Diplomats, Start-ups) |
| International representation | 10+ countries (offline & online); 27 African nations invited |
| Official event URL | https://www.gcci.live/3rd-international-smart-and-future-cities-conclave |

**Precision rules:** always write the dates as "21–22 August 2026", the theme and
tagline exactly as above, and "Graphic Era University (GEU), Dehradun". The event is
*organised by GCCI* and *hosted at Graphic Era University*.

---

## 3. Brand & visual system

### Logos (in `/logo`)
- `logo/1.png` — **Graphic Era University** logo (host). Red wordmark + charcoal "deemed
  to be University", circular torch/gear emblem. Red `#C8102E`-ish, charcoal `#3A3A3A`.
- `logo/2.png` — **GCCI** (Global Chamber of Commerce & Industry) crest. Navy/indigo ring,
  laurel wreath, multicolor "people" swirl, red star. Navy `#2E2C7A`-ish.

Both logos must appear together in the header, footer, and on every banner (GCCI as
organiser, GEU as host — treat them as co-branded, equal weight).

### Suggested palette
Derive the palette from the two logos so the site and print co-brand cleanly:

| Token | Hex | Use |
|---|---|---|
| `--geu-red` | `#C8102E` | Primary accent, CTAs, highlights |
| `--charcoal` | `#333333` | Body text, headings |
| `--gcci-navy` | `#2E2C7A` | Secondary/section backgrounds, headers |
| `--gold` | `#C9A227` | Awards / "diplomatic" accents, dividers |
| `--sky` | `#2E9BD6` | "Smart / tech" accent (from GCCI swirl) |
| `--off-white` | `#F7F7F4` | Page background |

Confirm exact hexes by sampling the logo PNGs before finalizing.

### Typography
- Headings: a strong, authoritative serif or geometric sans (e.g. Playfair Display /
  Poppins / Inter). Keep it dignified — this is a diplomatic/academic event, not a startup.
- Body: a clean, highly readable sans (Inter / Source Sans).

### Tone
Prestigious, international, forward-looking. "Smart cities," sustainability, governance,
India–Africa partnership. Avoid gimmicks; favor clarity and gravitas.

---

## 4. Website — structure & content

Build as a Next.js app. Prefer the App Router. A single long-scroll landing page with
anchored sections is fine for v1; keep components modular so sub-pages can be split out
later (multiple editions, gallery, blog).

### Recommended sections (in order)

1. **Hero** — event name, theme, tagline, dates, venue, both logos, a primary CTA
   ("Register / Express Interest") linking to the official URL, and a countdown to
   21 Aug 2026.
2. **About the Conclave** — 2–3 paragraphs. It convenes diplomats, senior government
   officials, global industry leaders, and academia to shape smart urban ecosystems.
   Focus themes this edition: digital diplomacy, renewable energy, infrastructure,
   education, agriculture, healthcare, and MSME exchange.
3. **Thematic tracks** (cards) — see §5.
4. **Agenda / Program** — two-day schedule, see §6. Consider tabs (Day 1 / Day 2).
5. **Who attends / By the numbers** — 500+ delegates, 10+ countries, 27 African nations,
   ambassadors, ministers, vice-chancellors, industry CEOs, startups, students.
6. **International participation** — India–Africa focus; list of invited nations &
   ambassadors, see §7. Add the "subject to confirmation" disclaimer.
7. **Partners** — GCCI (organiser) and Graphic Era University (host / Knowledge & Venue
   Partner). Room for future sponsors.
8. **About GCCI** — active in 122 countries, 60+ MOUs, ISO-certified, bridges academia/
   industry/government. Past editions: 1st (2025, Gautam Buddha University, Greater Noida,
   300+ delegates), 2nd (2026, J.K. Business School, Gurgaon, 500+ delegates, 9 countries).
9. **Venue** — Graphic Era University, Dehradun, Uttarakhand. Add map + travel note.
10. **Register / Contact** — CTA + organiser contact (see §8).
11. **Footer** — both logos, contact, official links, confidentiality-free public info only.

### Behavior
- Fully responsive (mobile-first). Delegates and diplomats will open this on phones.
- Accessible: WCAG AA contrast, semantic headings, alt text on both logos.
- SEO: title "3rd International Smart & Future Cities Conclave 2026 | Dehradun",
  meta description from §2, Open Graph image = the social banner (§9).

---

## 5. Thematic tracks (for cards / sections)

- Smart & Sustainable Urban Infrastructure
- Digital Governance & Citizen-Centric Services
- AI, IoT & Emerging Technologies for Cities
- Climate Resilience, Energy Efficiency & Green Urban Development
- Smart Mobility & Intelligent Transportation
- Urban Innovation, Entrepreneurship & Startup Ecosystems
- Research, Policy & Capacity Building for Future Cities
- Industry–Academia–Government Collaboration

Sector focus across the two days: Smart Cities, Healthcare & Wellness, Waste Management,
Real Estate, Power & Renewable Energy, Urban Mobility, Civil Aviation, Information
Technology, Tourism, Diplomatic Conclave & International Citizenship.

---

## 6. Agenda (tentative program)

Label clearly as **"Tentative Program — subject to change."**

### Day 1 — Friday, 21 August 2026
- 09:00–09:30 — Registration
- 09:30–09:45 — Tea/Coffee & Networking
- 09:45–10:00 — Opening: Curtain raising, Saraswati Vandana, Lamp lighting
- 10:00–10:30 — Welcome address by organiser & partners
- 10:30–11:30 — Inauguration by Chief Guest, Guests of Honour & Special Guests; speeches
- 11:30–13:30 — Conclave: Smart & Future Cities, Healthcare & Wellness, Waste Management (+ MoUs)
- 13:30–14:30 — Lunch
- 14:30–15:30 — Real Estate & Power sectors (roundtable + Q&A)
- 15:30–15:45 — Cultural program
- 15:45–16:00 — Tea/Coffee & Networking
- 16:00–17:00 — Urban Mobility & Civil Aviation (presentations + Q&A)
- 17:00–17:30 — Awards
- 17:30–18:00 — Day-1 closing remarks & National Anthem

### Day 2 — Saturday, 22 August 2026
- 09:00–09:30 — Registration, Tea/Coffee & Networking
- 09:30–10:00 — Lamp lighting, introduction of Chief Guest & Guests of Honour
- 10:00–12:00 — Information Technology & Tourism sectors (presentation + Q&A)
- 12:00–13:30 — Student presentations (Mayor of the Day, Smart & Clean Rivers Challenge,
  Youth Parliament, Smart Police & Traffic, Pledge)
- 13:30–14:30 — Lunch
- 14:30–16:30 — Diplomatic Conclave & International Citizenship (roundtable, Q&A, MoUs)
- 16:30–16:45 — Cultural program
- 16:45–17:00 — Tea/Coffee & Networking
- 17:00–17:30 — Spiritual session
- 17:30–17:45 — Final awards
- 17:45–18:00 — Day-2 closing remarks, National Anthem, curtain close

**Note:** B2B meetings run both days 16:00–17:00 in the Meeting Room.

---

## 7. Invited international delegations (India–Africa focus)

27 African nations invited, each represented by its Ambassador/High Commissioner to India.
Render as a grid ("Invited Delegations"). **Always include the disclaimer:** participation
is subject to confirmation via diplomatic channels and may change.

Egypt (H.E. Wael Hamed), Algeria (H.E. Ali Achoui), Angola (H.E. Clemente Camenha),
Botswana (H.E. Gilbert Shimane Mangole), Djibouti (H.E. Isse Abdillahi Assoweh),
Ethiopia (H.E. Bizunesh Meseret), Gabon (H.E. Jules Obame), The Gambia (H.E. Mustapha
Jawara), Ghana (H.E. Kwaku Asomah), Kenya (H.E. Munyiri Maina Peter), Lesotho (H.E.
Thabang Linus Kholumo), Malawi (H.E. Leonard Mengezi), Mauritius (H.E. Haymandoyal
Dillum), Mozambique (H.E. Ermindo Augusto Ferreira), Namibia (H.E. Gabriel Pandureni
Sinimbo), Nigeria (H.E. Eucharia Ngozi Eze), Republic of the Congo (H.E. Raymond Serge
Bale), Rwanda (H.E. Jacqueline Mukangira), Senegal (H.E. Abdoul Aziz Mbaye), Seychelles
(H.E. Conrad Mederic), South Africa (H.E. Joel Sibusiso Ndebele), Sudan (H.E. Muawia
Eltoum Elamin Elbukhari), Togo (H.E. Kokou Nayo Mbeou), Tunisia (H.E. Hayet Talbi EP
Bilel), Uganda (H.E. Joyce Kakuramatsi Kikafunda), Zambia (H.E. Percy P. Chanda),
Zimbabwe (H.E. Stella Nkomo).

---

## 8. Contact & official links

- Organiser: Global Chamber of Commerce & Industry (GCCI), GCCI House, M-5/2, Sector-49,
  Noida, Gautam Budh Nagar, U.P., India
- Email: info@gcci.live · ceo@gcci.live
- Phone: 0120-4010312 · +91 99715 50557 · +91 94114005521
- Signatory: Er. Aashish Gupta, Co-Founder & CEO, GCCI
- Event page: https://www.gcci.live/3rd-international-smart-and-future-cities-conclave
- GCCI: https://www.gcci.live/ · GCCI Education Council: https://www.gcci.live/education

Do **not** publish anything marked confidential in the source proposal (deliverables,
infrastructure asks, terms). Public site = event info, agenda, themes, delegations, CTA.

---

## 9. Banners — specs & shared design

All three banners share: both logos (GEU + GCCI), event name, theme
"Intelligent Urban Futures", tagline "Evolving Uttarakhand — Rising India", dates
"21–22 August 2026", venue "Graphic Era University, Dehradun", and the official URL /
QR to the event page. Visual motif: smart-city skyline + connectivity/India–Africa
partnership, in the §3 palette.

| Banner | Dimensions | Notes |
|---|---|---|
| Website hero | 1920 × 640 px (also export 2× / mobile 1080 × 1350) | Web-optimized; leave safe space for overlaid headline + CTA button |
| Social media | 1200 × 630 px (LinkedIn/FB/Twitter/OG) | Also used as the site's Open Graph image |
| Print standee | 850 × 2000 mm @ 150–300 dpi, CMYK, with bleed | Large-format; vector logos, no low-res raster; "Register / Scan to attend" QR |

Deliverables for print should be high-resolution PDF/PNG; web banners as optimized
PNG/WebP. Keep one master layout and adapt per aspect ratio.

---

## 10. Working conventions

- **Never fabricate** names, dates, quotes, or figures. Use §2–§8 verbatim. Unknown → `TBD`.
- Keep the two logos co-branded and equal weight everywhere.
- Mobile-first, accessible (WCAG AA), fast (optimize images).
- Every banner and page must carry the correct dates, theme, tagline, and venue.
- Suggested repo layout:
  ```
  /app            → Next.js routes (App Router)
  /components     → Hero, Agenda, Tracks, Delegations, Partners, Footer …
  /public/logo    → 1.png (GEU), 2.png (GCCI)
  /public/banners → generated hero / social / print exports
  /content        → agenda.ts, tracks.ts, delegations.ts (data from this file)
  /styles         → tokens (palette from §3)
  ```
- Before shipping: verify dates (21–22 Aug 2026), theme, tagline, venue, both logos
  present, all 27 delegations listed with disclaimer, and CTA links resolve.
