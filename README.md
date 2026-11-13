# TCS MS Digital Sovereignty - Experience — V5.5

Landing hub (Home button, top right of every screen): guided tour, or jump straight to CxO priorities, industry value chains, Microsoft 365,
Active Sovereignty in practice, What TCS brings (framework first) or Run Active Sovereignty with TCS (the roadmap · Design MVE deep dive).

Flow: 1 Choose · 2 Six pillars · 3 Risk posture · 4 Disruption test · 5 Operating model · 6 Microsoft 365 · 7 Framework · 8 What TCS brings · 9 In practice · 10 Roadmap · 11 Design MVE deep dive (90 days) · 12 Priorities + QR
Industry screens (risk posture, disruption, operating model) and the report open the industry picker first if no MVE is chosen.

11 industries · 46 MVEs · 46 ten-page reports in pdfs/ — identical across both editions.
Content and settings: data.js (EDITION, VERSION, bench, roadmap, routes, framework). Leads export includes the edition and the board weights.

Publish: see DEPLOY.md (GitHub Pages, no build step). QR links follow the site address automatically; BASE_URL in data.js is only for offline kiosk use.
Kiosk: `msedge --kiosk "file:///C:/mve/index.html" --edge-kiosk-type=fullscreen` · idle reset 90 s returns to the landing hub · leads: tap TCS logo 5x (or Ctrl+Shift+E) → Export CSV.
Before the event: TCS Privacy approval · partner-name clearance · client approval of anonymised cases · QR test on iPhone/Android.

V5.2 changes
- CxO priorities: importance slider (0–100%) per question, live sovereignty fingerprint, indicative industry benchmark (TCS view). Weights carry into the
  pillars screen, pre-fill the top-3 priorities and are included in the leads export. Pillar footers and sub-question tags removed.
- Pick your industry: smaller tiles (collage kept), more white space.
- Six pillars: the Enterprise House (Choice = roof, four pillars, Proof on Demand = foundation). Card per pillar: Risk · Minimum · Decisions · Evidence, de-duplicated.
- Risk posture: "Recommendation based on the TCS Active Sovereignty Framework". D·O·T shown as whole SEAL levels with a band; no decimals; nothing above SEAL 3;
  SEAL-4 aspirational (chips, hardware, software & SaaS remain largely non-EU).
- Realistic operating mix (see "SEAL changes V5.2.xlsx"): public + enhanced public 47% of MVE activities (was 26%), hybrid 21%, private 29% (was 39%), national 3% (was 13%).
  Rules: lowest defensible tier; identity/keys and OT on private (floors); national only for strict national-control workloads; collaboration and corporate on public tiers.
- New screen: TCS Active Sovereignty Framework (before What TCS brings).
- What TCS brings: EDeN™ = operational backbone for sovereignty — 31+ locations · 15,000+ professionals · 10 availability zones on TCS Private Cloud plus public-cloud operations · dedicated SOC in Spain.
- Run Active Sovereignty with TCS: Step 1 roadmap (Discovery → Operate, waves, indicative timeline, outcomes checklist and accelerators per phase, Microsoft-relevant accelerators highlighted);
  Step 2 the 90-day acceleration with two routes (go broad / go deep) → direction set.
- Reports: nine pages — Enterprise House, D·O·T bands, EDeN backbone, new roadmap page, 90-day as Step 2. File names and QR links unchanged.

V5.3 changes
- Four cloud tiers, no Hybrid: Public · Public Sovereign · Private (TCS Private Cloud or on-prem) · National (accredited national cloud).
  Former Hybrid activities with cleared operations → Private; the rest → Public Sovereign. Mix: Public 12% · Public Sovereign 46% · Private 39% · National 3%.
- Government Shared Services (SGC model): + Government cloud platform & brokerage (Private), Secure government cloud (National), Shared back-office platforms (Public Sovereign). 12 activities.
- CxO priorities: select the industry → sliders show the TCS recommended focus (data.js "rec"); a visitor's adjustment is shown as the dashed ghost.
  Scale: Nice to have 0–39 · Must have 40–74 · Critical 75–100. Reset returns to the recommendation.
- Roadmap: Design MVE = Discover · Strategize; Operate Active Sovereignty = an active state maintained continuously ("MVE implemented and active").
- Design MVE deep dive (90 days): scope toggle Enterprise-wide / One value chain changes sprints, design and the executive decision pack
  (Board sovereignty strategy vs Executive proof point). No Step 1 / Step 2 labels.
- Reports regenerated (nine pages). Government Shared Services report renamed "Government Shared Services MVE - TCS Active Sovereignty.pdf" (QR link by id, unchanged).

V5.4 changes
- Operating model: "Private cloud or on-prem" (no TCS-specific naming); short descriptors on every layer — Cloud, Security, Data & AI, Workplace.
- Framework control plane shows all four cloud tiers, ordered Public → National.
- Lighter, cleaner type on crowded screens (CxO priorities, roadmap, operating model, Design MVE); roadmap cards and accelerators no longer clipped.
- Light themes (white, gray, light blue): slow drifting gradient and animated network background.
- Enterprise House pillars evenly spaced. Reports regenerated: control plane with four cloud tiers and layer descriptors.

V5.5 changes
- Kiosk: dropdown lists readable in night blue; automatic fit on every card (no clipped text on long MVEs, any screen size);
  brighter muted labels in night blue. Full sweep: all 46 MVEs, every screen, light and dark themes, three screen sizes.
- Executive reports rebuilt in the kiosk design system (HTML printed to PDF, vector figures, one typeface), ten pages:
  cover · executive summary · six questions with TCS focus · framework · risk posture · resilience & operating model ·
  business case · what TCS brings · roadmap · Design MVE (enterprise-wide and one value chain side by side).
- Operating model stays provider-neutral ("Private cloud or on-prem"); TCS Private Cloud named only in What TCS brings.
- Report source: _source/report (build_report.py → render.py).
