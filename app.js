(function () {
  const D = window.MVE, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const ASSET = window.ASSET || {}, asset = f => ASSET[f] || ("assets/" + f);
  const SV = p => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const I = {
    choice: '<circle cx="12" cy="12" r="10"/><path d="M16 8l-2 6-6 2 2-6z"/>',
    continuity: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3 12h4l2-3 3 6 2-3h7"/>',
    control: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    defence: '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>', shield: '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>',
    independence: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    proof: '<path d="M5 12l5 5L20 7"/>', check: '<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>', db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2"/>', phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    truck: '<path d="M1 4h14v11H1zM15 9h4l3 3v3h-7"/><circle cx="5.5" cy="18" r="2"/><circle cx="18.5" cy="18" r="2"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>', plane: '<path d="M2 16l20-8-3 9-6-3-3 5v-6z"/>',
    heartp: '<path d="M3 12h4l2-4 4 8 2-4h6"/>', doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    store: '<path d="M3 9l1.5-5h15L21 9M3 9h18v11H3zM3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/>',
    signal: '<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/>', bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
    data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/>', law: '<path d="M12 3v18M5 21h14M3 8l4-4 4 4M13 8l4-4 4 4M3 8l2 6a3 3 0 0 0 4 0l2-6M13 8l2 6a3 3 0 0 0 4 0l2-6"/>',
    radar: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 12l7-7"/>',
    layers: '<path d="M12 2l10 5-10 5L2 7z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>', flow: '<circle cx="5" cy="6" r="3"/><circle cx="19" cy="18" r="3"/><path d="M8 6h5a3 3 0 0 1 3 3v6"/>',
    heat: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', grid: '<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>',
    route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>',
    flag: '<path d="M4 22V4M4 4h13l-2 4 2 4H4"/>', gavel: '<path d="M14 4l6 6M11 7l6 6M12.5 5.5l-5 5M18.5 11.5l-5 5M10 12L3 19l2 2 7-7M14 21h7"/>',
    present: '<rect x="3" y="3" width="18" height="12" rx="1"/><path d="M12 15v4M8 21l4-2 4 2M7 11l3-3 2 2 4-4"/>', money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
    agent: '<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6M2 12h2M20 12h2"/>',
    cloudoff: '<path d="M2 2l20 20M5.8 5.8A6 6 0 0 0 7 18h10.5M12 6a6 6 0 0 1 5.7 4H18a4 4 0 0 1 3 6.6"/>', cloudoff2: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M9 8l6 4M15 8l-6 4"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>', pod: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M12 8v8"/>',
    swap: '<path d="M4 7h13l-3-3M20 17H7l3 3"/>', car: '<path d="M5 16h14M3 16v-3l2-5h14l2 5v3h-2M5 16H3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    flask: '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
    factory: '<path d="M2 21V10l6 4V10l6 4V6l8 4v11z"/><path d="M6 17h2M11 17h2M16 17h2"/>', tv: '<rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8M8 2l4 3 4-3"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h7M8.5 14h4"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M5 11h3l2-3 3 6 2-3h4"/>'
  };
  const icon = k => SV(I[k] || I.gear);
  const actIcon = n => { n = n.toLowerCase();
    return /authoris|switching|clearing|settlement|pension/.test(n) ? "card" : /onboarding|participant|employer/.test(n) ? "phone" : /registr|login|digital identity/.test(n) ? "key" : /messaging|inbox|consent/.test(n) ? "chat" : /satellite|satcom|vessel traffic|air traffic/.test(n) ? "radar" : /power & cooling|control plane|interconnect/.test(n) ? "layers" : /firmware|device cloud/.test(n) ? "gear" : /sorting|parcel|delivery/.test(n) ? "truck" : /check-in|guest/.test(n) ? "key" : /water|treatment/.test(n) ? "flow" : /wind-farm|generation/.test(n) ? "sun" : /refinery|subsurface/.test(n) ? "heat" : /signalling|path planning|timetable|rolling-stock|crew/.test(n) ? "route" : /port|terminal|cargo|booking|bridge|port-call/.test(n) ? "route" : /fab |chip design|tool/.test(n) ? "factory" : /production instance|release pipeline|support & operations/.test(n) ? "layers" : /collaboration/.test(n) ? "chat" : /observability|itsm/.test(n) ? "monitor" : /identity|key/.test(n) ? "key" : /command|mission|intelligence/.test(n) ? "radar" : /classified|export-controlled/.test(n) ? "lock"
      : /playout|broadcast|newsroom|streaming/.test(n) ? "tv" : /vehicle/.test(n) ? "car" : /process control|formulation|recipe|sensory|chemic/.test(n) ? "flask"
      : /payment|billing|revenue collection|benefit/.test(n) ? "card" : /recovery|soc|cyber/.test(n) ? "shield" : /\bai\b|analytic|model|surveillance|diagnostic|planning &|demand/.test(n) ? "spark"
      : /portal|digital|mobile|app|channel|e-commerce|customer|loyalty|consumer|public information|ticket|member|dealer|audience/.test(n) ? "phone" : /corporate|commercial|sales/.test(n) ? "brief"
      : /supply|logistics|freight|distribution|warehous|fleet|readiness/.test(n) ? "truck" : /trading|market|pricing/.test(n) ? "chart" : /flight|reservation/.test(n) ? "plane"
      : /grid|scada|energy|meter/.test(n) ? "bolt" : /network|lawful|telco|oss/.test(n) ? "signal" : /store|point of sale/.test(n) ? "store"
      : /plant|production|manufactur|mro/.test(n) ? "factory" : /regulatory|compliance|reporting|vigilance/.test(n) ? "doc"
      : /record|ledger|data|policy|case|claims|code|ehr|entitlement|r&d|design|archive|plm/.test(n) ? "db" : /emergency|clinical|care|prescription|device/.test(n) ? "heartp" : "gear"; };
  const isBB = v => /collaboration|observability/i.test(v.name);
  const SC = s => s >= 3 ? "#2F5BB8" : s >= 2 ? "#1FA2A6" : "#8a93a8";
  const band = v => v.lo === v.seal ? String(v.seal) : `${v.lo}–${v.seal}`;
  const TIER_ORDER = ["Public", "Public Sovereign", "Private", "National"];
  const fresh = () => ({ step: 1, mve: null, pillar: 0, sel: 0, scen: null, withMve: 1, prio: [], concern: [], time: null, trace: null,
    w: null, ind: null, route: "broad" });
  let st = fresh();

  const ED = D.config.EDITION || "tcs";
  const ORDER = ED === "ms" ? [1, 2, 3, 4, 5, 9, 12, 6, 10, 13, 7, 8] : [1, 2, 3, 4, 5, 12, 6, 10, 13, 7, 8];
  const NEEDS = [3, 4, 5, 8];
  const NAMES = { 1: "Pick your industry", 2: "Pillars", 3: "Risk posture", 4: "Disruption", 5: "Operating model", 9: "Microsoft 365", 12: "Framework", 6: "What TCS brings", 10: "In practice", 13: "Roadmap", 7: "90-day acceleration", 8: "Priorities", 11: "CxO priorities", 0: "Home" };
  const LAST = ORDER[ORDER.length - 1];

  const THEMES = ["dark", "white", "gray", "lightblue"], isDark = () => document.body.classList.contains("theme-dark");
  function setTheme(t) {
    if (!THEMES.includes(t)) t = "dark";
    THEMES.forEach(x => document.body.classList.remove("theme-" + x)); document.body.classList.add("theme-" + t);
    localStorage.setItem("mveTheme", t); $$("#theme-menu button").forEach(b => b.classList.toggle("on", b.dataset.t === t));
    if (st.step === 2 && st.mve) renderPillars();
  }
  setTheme(new URLSearchParams(location.search).get("theme") || localStorage.getItem("mveTheme") || D.config.DEFAULT_THEME);
  $("#theme-btn").onclick = e => { e.stopPropagation(); $("#theme-menu").classList.toggle("show"); };
  $$("#theme-menu button").forEach(b => b.onclick = () => { setTheme(b.dataset.t); $("#theme-menu").classList.remove("show"); });
  document.addEventListener("click", e => { if (!e.target.closest(".theme-pick")) $("#theme-menu").classList.remove("show"); });

  const cv = $("#stars"), cx = cv.getContext("2d"); let P = [];
  function size() { cv.width = innerWidth; cv.height = innerHeight; sizeNet(); P = Array.from({ length: 160 }, () => ({ x: Math.random() * cv.width, y: Math.random() * cv.height, r: Math.random() * 1.6 + .2, v: Math.random() * .3 + .05, a: Math.random() })); }
  let NW = [];
  function sizeNet() { const n = Math.round(Math.min(70, cv.width * cv.height / 30000)); NW = Array.from({ length: n }, () => ({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.8 + 1.1 })); }
  function drawNet() {
    cx.clearRect(0, 0, cv.width, cv.height); const L = 170;
    NW.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < -20) p.x = cv.width + 20; if (p.x > cv.width + 20) p.x = -20; if (p.y < -20) p.y = cv.height + 20; if (p.y > cv.height + 20) p.y = -20; });
    cx.lineWidth = 1;
    for (let i = 0; i < NW.length; i++) for (let j = i + 1; j < NW.length; j++) { const a = NW[i], b = NW[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < L) { cx.strokeStyle = `rgba(47,91,184,${.13 * (1 - d / L)})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); } }
    NW.forEach(p => { cx.fillStyle = "rgba(47,91,184,.26)"; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); });
  }
  function tick() { if (!isDark()) drawNet(); else { cx.clearRect(0, 0, cv.width, cv.height); P.forEach(p => { p.y -= p.v; if (p.y < 0) p.y = cv.height; p.a += .02; cx.fillStyle = `rgba(160,190,255,${.35 + .35 * Math.sin(p.a)})`; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); }); } requestAnimationFrame(tick); }
  addEventListener("resize", () => { size(); layoutOrbit(); if (st.step === 13) renderRoad(); if (st.mve && st.step === 3) fitLadder(); if (st.mve && st.step === 4) fitTest(); if (st.step === 6) fitOffer(); if (st.step === 9) fitLadder($("#m-ladder")); if (st.step === 10) fitCases(); }); size(); tick();

  $("#steps").innerHTML = ORDER.map((s, i) => `<button title="${NAMES[s]}" data-s="${s}">${i + 1}</button>`).join("");
  $$("#steps button").forEach(b => b.onclick = () => want(+b.dataset.s));
  $("#pdots").innerHTML = D.pillars.map((p, i) => `<i style="background:${p.color}" title="${p.name}" data-i="${i}"></i>`).join("");
  $$("#pdots i").forEach(d => d.onclick = () => { st.pillar = +d.dataset.i; go(2); });

  function go(n) {
    st.step = n;
    $$(".screen").forEach(s => s.classList.toggle("active", +s.dataset.step === n));
    const ix = ORDER.indexOf(n), nx = ORDER[ix + 1];
    $$("#steps button").forEach(b => { const k = ORDER.indexOf(+b.dataset.s); b.classList.toggle("on", k === ix); b.classList.toggle("done", ix > -1 && k < ix); });
    $("#home-btn").classList.toggle("on", n === 0);
    $("#step-name").textContent = n === 0 ? "" : NAMES[n] || "";
    $("#nav").classList.toggle("hide", n <= 1);
    $$(".k-mve").forEach(e => e.textContent = st.mve ? st.mve.short + " MVE" : "Active Sovereignty");
    $("#next").style.visibility = n === LAST ? "hidden" : "visible";
    $("#next").textContent = n === 11 ? "See the minimum answer for your industry →" : nx === 13 ? "Run Active Sovereignty with TCS →" : nx === 7 ? "Deep dive · Design MVE →" : nx === 8 ? "Your priorities →" : "Next →";
    ({ 2: renderPillars, 3: renderLadder, 4: renderTest, 5: renderModel, 6: renderOffer, 7: renderAssess, 8: renderPrio, 9: renderM365, 10: renderCases, 11: renderCxo, 12: renderFrame, 13: renderRoad })[n]?.();
  }
  $("#back").onclick = () => { if (st.step === 11) return go(0); let i = ORDER.indexOf(st.step) - 1; while (i >= 0 && NEEDS.includes(ORDER[i]) && !st.mve) i--; go(i >= 0 ? ORDER[i] : 0); };
  $("#next").onclick = () => { const i = ORDER.indexOf(st.step); if (i < ORDER.length - 1) want(ORDER[i + 1]); };

  /* 1 · industry picker — card grid */
  const IG = $("#igrid");
  IG.innerHTML = D.clusters.map((c, i) => `<button class="icard" data-i="${i}" style="animation-delay:${i * .03}s"><span class="ip" style="background-image:url('${asset(c.img)}')"></span><span class="it"><b>${c.name}</b><span>${c.mves.length} MVE${c.mves.length > 1 ? "s" : ""}</span></span></button>`).join("")
    + (D.clusters.length % 4 ? `<div class="icard cta"><b>Your industry not listed?</b><span>Start from the closest one — the TCS team tailors the MVE to your value chain in the assessment.</span></div>` : "");
  $$("#igrid .icard[data-i]").forEach(b => b.onclick = () => openCluster(+b.dataset.i));
  function layoutOrbit() {}
  function openCluster(i) {
    const c = D.clusters[i]; $("#v-img").src = asset(c.img); $("#v-cluster").textContent = c.name;
    $("#v-list").innerHTML = c.mves.map((m, k) => `<button class="vbtn" data-k="${k}"><b>${m.short}</b><small>${m.who}</small><span>Must never stop: <i>${m.never}</i></span></button>`).join("");
    $("#v-list").classList.toggle("many", c.mves.length > 3);
    $$(".vbtn").forEach(b => { const m = c.mves[+b.dataset.k];
      b.onmouseenter = () => $("#v-img").src = asset(m.img); b.onmouseleave = () => $("#v-img").src = asset(c.img); b.onclick = () => chooseMve(m); });
    $("#variants").classList.add("show");
  }
  $("#v-close").onclick = () => $("#variants").classList.remove("show");
  function chooseMve(m) {
    const keep = { prio: st.prio, concern: st.concern, time: st.time, w: st.w, ind: st.ind, route: st.route }, tgt = st.target || 2;
    st = Object.assign(fresh(), keep, { mve: m }); $("#variants").classList.remove("show");
    go(tgt);
  }

  const art = s => /^[AEIOU]/.test(s) ? "an" : "a";
  const titleCol = p => p.id === "proof" ? "var(--strong)" : p.id === "choice" ? (isDark() ? "#7EA6EC" : "#1B3A6B") : p.color;
  /* 2 · six pillars — the Enterprise House: Choice is the roof, four pillars, Proof on Demand is the foundation */
  const ICG = (k, x, y, sz, col) => `<g transform="translate(${x},${y}) scale(${sz / 24})" fill="none" stroke="${col}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[k]}</g>`;
  function houseSVG(sel, sh, small) {
    const P = D.pillars, on = i => sel === null || sel === i, op = i => on(i) ? 1 : .32, wt = i => wv() && !small ? `${wv()[i]}%` : "";
    const stroke = i => sel === i ? `stroke="#F2A33A" stroke-width="3"` : `stroke="none"`;
    const cx = [40, 113.3, 186.7, 260];
    let g = `<svg viewBox="0 0 300 352" class="house-svg" role="img" aria-label="The Enterprise House">`;
    g += `<g class="hp" data-i="0" style="opacity:${op(0)}"><path d="M150 8 L8 104 L292 104 Z" fill="${P[0].color}" ${stroke(0)}/>${ICG("choice", 138, 40, 24, "#fff")}
      <text x="150" y="84" text-anchor="middle" class="ht">CHOICE</text><text x="150" y="97" text-anchor="middle" class="hs">${wt(0) || "Strategic autonomy"}</text></g>`;
    g += `<rect x="14" y="108" width="272" height="20" rx="3" class="beam"/><text x="150" y="122" text-anchor="middle" class="hb">MVE · ${sh || "Your enterprise"}</text>`;
    [1, 2, 3, 4].forEach((pi, k) => { const x = cx[k] - 26;
      g += `<g class="hp" data-i="${pi}" style="opacity:${op(pi)}"><rect x="${x}" y="133" width="52" height="153" rx="4" fill="${P[pi].color}" ${stroke(pi)}/>
        <rect x="${x - 4}" y="131" width="60" height="7" rx="2" fill="${P[pi].color}"/>${ICG(pi === 1 ? "continuity" : pi === 2 ? "control" : pi === 3 ? "defence" : "independence", cx[k] - 11, 146, 22, "#fff")}
        <text transform="translate(${cx[k] + 4},279) rotate(-90)" class="hv">${P[pi].name.toUpperCase()}</text>
        ${wt(pi) ? `<text x="${cx[k]}" y="185" text-anchor="middle" class="hw">${wt(pi)}</text>` : ""}</g>`; });
    g += `<g class="hp" data-i="5" style="opacity:${op(5)}"><rect x="6" y="291" width="288" height="34" rx="4" class="found" ${stroke(5)}/>${ICG("proof", 22, 299, 18, "#fff")}
      <text x="48" y="307" class="ht" style="text-anchor:start">PROOF ON DEMAND</text><text x="48" y="319" class="hs" style="text-anchor:start">${wt(5) || "Continuous, active evidence"}</text></g>`;
    g += `<rect x="0" y="329" width="300" height="8" rx="2" class="ground"/></svg>`;
    return g;
  }
  function renderPillars() {
    const sh = st.mve ? st.mve.short : null;
    $("#ring").innerHTML = houseSVG(st.pillar, sh);
    $$("#ring .hp").forEach(e => e.onclick = () => { st.pillar = +e.dataset.i; renderPillars(); });
    const p = D.pillars[st.pillar];
    $("#pcard").innerHTML = `<div class="pc-top"><div><div class="kicker">Pillar ${st.pillar + 1} of 6 · ${p.who}</div><div class="pn" style="color:${titleCol(p)}">${p.name}</div><div class="ps">${p.sub}${wv() ? ` · <b class="bw">focus ${wv()[st.pillar]}% · ${scaleTxt(wv()[st.pillar])}</b>` : ""}</div></div>
      <div class="pc-nav"><button type="button" class="ghost" id="pp">‹ Previous</button><button type="button" class="ghost" id="pn">Next ›</button></div></div>
      <div class="prow risk"><small>The risk</small><p>${p.risk}</p></div>
      ${sh ? `<div class="min"><small>The minimum for ${art(sh)} ${sh}</small>${st.mve.min[p.id]}</div>` : `<div class="min"><small>The question</small>${p.q}</div>`}
      <div class="decs-title">Decisions to converge on</div>
      <div class="decs">${p.decisions.map(([q, d], k) => `<div class="dec"><h4><i>${k + 1}</i>${q}</h4><p>${d}</p></div>`).join("")}</div>
      <div class="ev"><small>Evidence that proves it</small><div>${p.evidence.map(e => `<span>${icon("check")}${e}</span>`).join("")}</div></div>
      <div class="pc-foot">${sh ? "TCS answers these per value-chain activity — <b>see the risk posture next</b>." : "Choose your industry to see the minimum answer for your MVE."}</div>`;
    $("#pp").onclick = () => { st.pillar = (st.pillar + 5) % 6; renderPillars(); };
    $("#pn").onclick = () => { st.pillar = (st.pillar + 1) % 6; renderPillars(); };
  }
  let sx = null; $("#s-pillars").addEventListener("touchstart", e => sx = e.touches[0].clientX);
  $("#s-pillars").addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 80) { st.pillar = (st.pillar + (dx < 0 ? 1 : 5)) % 6; renderPillars(); } sx = null; });

  const ypos = l => (l + .5) / 5 * 100;
  const tags = v => `<div class="tag d${v.dl}"><u>Data · SEAL ${v.d}</u>${v.data}</div><div class="tag o${v.ol}"><u>Operations · SEAL ${v.o}</u>${v.ops}</div><div class="tag t${v.tl}"><u>Technology · SEAL ${v.t}</u>${v.tech}</div>`;
  /* one column of the risk-posture ladder: a band from the lowest to the highest D·O·T level, three whole-level dots, label on top */
  function bandCol(x, i, sel, cls, tip) {
    const lo = Math.min(x.d, x.o, x.t), hi = Math.max(x.d, x.o, x.t), txt = lo === hi ? String(hi) : `${lo}–${hi}`;
    const dots = [["D", x.d, "bd"], ["O", x.o, "bo"], ["T", x.t, "bt"]].map(([k, l, c], j) => `<i class="dt ${c}" style="bottom:${ypos(l)}%;left:calc(50% + ${(j - 1) * 1.25}*var(--u))" title="${k === "D" ? "Data" : k === "O" ? "Operations" : "Technology"} · SEAL ${l}">${k}</i>`).join("");
    return `<div class="col ${i === sel ? "sel" : ""} ${cls}" data-i="${i}"><div class="stem" style="height:${ypos(lo)}%"></div>
      <div class="band" style="bottom:calc(${ypos(lo)}% - 1.1*var(--u));height:calc(${ypos(hi) - ypos(lo)}% + 2.2*var(--u))"></div>${dots}
      <div class="bub" style="bottom:calc(${ypos(hi)}% + 1.6*var(--u));background:${SC(hi)}">${txt}</div>${tip || ""}</div>`;
  }
  const sealRows = note => D.seal.map(l => `<div class="row r${l.lvl}"><div class="rl"><b><em>SEAL-${l.lvl}</em>${l.name}</b><span>${l.lvl === 4 ? (note || l.note) : l.desc}</span></div></div>`).join("");
  const legend = `<div class="dlegend"><span><i class="dt bd">D</i>Data</span><span><i class="dt bo">O</i>Operations</span><span><i class="dt bt">T</i>Technology</span><span class="bl"><i class="bandk"></i>Band = lowest to highest · whole SEAL levels</span></div>`;
  // Keep SEAL rows inside their box at any screen size: compact the labels instead of letting rows spill over the activity names.
  function fitLadder(L = $("#ladder")) {
    if (!L || !L.offsetParent) return;
    const over = () => [...L.querySelectorAll(".row")].some(r => { const rl = r.querySelector(".rl"); return rl.offsetHeight > r.clientHeight - 2 || rl.scrollWidth > rl.clientWidth + 1; });
    L.classList.remove("c1", "c2", "c3");
    for (const c of ["c1", "c2", "c3"]) { if (!over()) break; L.classList.add(c); }
  }
  // Keep every disruption card's content inside the card.
  function fitTest() {
    const C = $("#tchain"); if (!C || !C.offsetParent) return;
    const over = () => [...C.querySelectorAll(".node")].some(n => n.scrollHeight > n.clientHeight + 1);
    C.classList.remove("k1", "k2", "k3");
    for (const k of ["k1", "k2", "k3"]) { if (!over()) break; C.classList.add(k); }
  }
  // Keep the offer cards' content inside the cards.
  function fitOffer() {
    const V = $("#vp"); if (!V || !V.offsetParent) return;
    const over = () => [...V.querySelectorAll(".vp-card")].some(c => c.scrollHeight > c.clientHeight + 1);
    V.classList.remove("v1", "v2", "v3");
    for (const k of ["v1", "v2", "v3"]) { if (!over()) break; V.classList.add(k); }
  }
  function renderLadder() {
    const ch = st.mve.chain, fbb = ch.findIndex(isBB);
    const cols = ch.map((v, i) => bandCol(v, i, st.sel, `${isBB(v) ? "bb" : ""} ${i === fbb ? "bbf" : ""}`,
        `<div class="tip ${i >= ch.length - 3 ? "lft" : ""}" style="bottom:${ypos(v.seal)}%">${tags(v)}</div>`)).join("");
    $("#ladder").innerHTML = `<div class="rows">${sealRows()}<div class="cols">${cols}</div></div>
      <div class="names">${ch.map((v, i) => `<div data-i="${i}" class="${i === st.sel ? "sel" : ""} ${isBB(v) ? "bb" : ""}">${icon(actIcon(v.name))}${isBB(v) ? "<small>Backbone</small>" : ""}${v.name}</div>`).join("")}</div>${legend}`;
    $$("#ladder .col, #ladder .names div").forEach(c => c.onclick = () => { st.sel = +c.dataset.i; renderLadder(); });
    const v = ch[st.sel];
    $("#detail").innerHTML = `<div><h5>${isBB(v) ? "Enterprise backbone · why this target" : "Why this target"}</h5><div class="dn">${v.name}</div><span class="sealpill" style="background:${SC(v.seal)}">SEAL ${band(v)}</span> <span class="tierpill">${v.cloud}</span><p>${v.why}</p></div>
      <div><h5>Data · SEAL ${v.d}</h5><div class="tag d${v.dl}">${v.data}</div><p>${v.dd}</p></div>
      <div><h5>Operations · SEAL ${v.o}</h5><div class="tag o${v.ol}">${v.ops}</div><p>${v.od}</p></div>
      <div><h5>Technology · SEAL ${v.t}</h5><div class="tag t${v.tl}">${v.tech}</div><p>${v.td}</p></div>
      <div><h5>Under disruption</h5><p>${v.dis}</p></div>`;
    fitLadder();
  }

  $("#scen").innerHTML = D.scenarios.map(s => `<button data-id="${s.id}">${icon(s.icon)}<span>${s.name}</span></button>`).join("");
  $$("#scen button").forEach(b => b.onclick = () => { st.scen = b.dataset.id; renderTest(); });
  document.addEventListener("click", e => { const t = e.target.closest("#toggle button"); if (t) { st.withMve = +t.dataset.v; renderTest(); } });
  const AI = /\bai\b|analytic|model|diagnostic|demand planning|collaboration/i;
  const EXPOSE = { cut: "Single provider, no tested exit", ransom: "Backups reachable by the attacker", legal: "Provider holds the keys", ai: "Depends on one frontier model", saas: "Process and data locked in the platform", proof: "Evidence assembled by hand" };
  const OPT = { cut: ["pod", "Continuity pod"], ransom: ["key", "Break-glass identity"], ai: ["swap", "BYOM switch-over"], saas: ["pod", "In-country standby"] };
  const leverIcon = { data: "db", ops: "gear", tech: "shield" };
  function outcome(v, sc, w) {
    const crit = v.seal >= 3, mid = !crit && v.cloud !== "Public";
    if (sc === "ai" && !AI.test(v.name) && crit) return w ? ["g", "Unaffected"] : ["a", "Indirect impact"];
    if (sc === "proof") return w ? (crit ? ["g", "Evidence ready"] : ["p", "Out of scope"]) : (crit ? ["r", "No evidence"] : ["a", "Manual scramble"]);
    if (w) return crit ? ["g", "Keeps running"] : mid ? ["a", "Degraded · recovers to plan"] : ["p", "Paused by design"];
    return crit ? ["r", sc === "legal" ? "Data exposed" : "Stops"] : ["a", "Disrupted"];
  }
  function renderTest() {
    $$("#scen button").forEach(b => b.classList.toggle("on", b.dataset.id === st.scen));
    const ch = st.mve.chain;
    if (!st.scen) {
      $("#dt-panel").innerHTML = `<div class="dt-empty">Choose a disruption above to start the test</div>`;
      $("#tchain").innerHTML = ch.map(v => `<div class="node ${isBB(v) ? "bb" : ""}"><div class="nh"><div class="n">${v.name}</div><span class="sl" style="background:${SC(v.seal)}">${band(v)}</span></div><div class="fb">${icon(actIcon(v.name))}<div>${isBB(v) ? "Enterprise backbone" : v.seal >= 3 ? "Load-bearing" : "Supporting"}</div></div></div>`).join("");
      fitTest(); return;
    }
    const s = D.scenarios.find(x => x.id === st.scen), w = st.withMve;
    const res = ch.map(v => outcome(v, s.id, w)), critIdx = ch.map((v, i) => i).filter(i => ch[i].seal >= 3);
    const held = critIdx.filter(i => res[i][0] === "g").length, pct = Math.round(held / critIdx.length * 100);
    const P = id => D.pillars.find(p => p.id === id);
    const tl = w ? s.tl_with : s.tl_without, tc = w ? ["a", "g", "g", "g"] : ["r", "r", "a", "r"];
    const hd = w ? `<small>With the MVE — recommended deployment</small><b>${s.with}</b>${s.option ? `<span class="opt"><i>Recommended fallback · on top of the MVE</i>${s.option}</span>` : ""}`
                 : `<small>Without an MVE</small><b>${s.without}</b>`;
    $("#dt-panel").innerHTML = `<div class="dt-left"><div class="sd">${s.desc}</div>
        <div class="pt">Pillars tested: ${s.pillars.map(id => `<span style="background:${id === "proof" ? "#5B6B8C" : P(id).color}">${P(id).name}</span>`).join("")}</div>
        <div class="meter"><div class="ml"><span>Load-bearing activities running</span><b>${held} / ${critIdx.length}</b></div>
          <div class="bar"><i style="width:${pct}%;background:${w ? "linear-gradient(90deg,#2E9E5B,#6ff0a0)" : "linear-gradient(90deg,#e04848,#ff8a8a)"}"></i></div></div></div>
      <div class="dt-right"><div class="dt-top"><div class="hd">${hd}</div>
          <div class="toggle" id="toggle"><button data-v="0" class="${w ? "" : "on"}">Without MVE</button><button data-v="1" class="${w ? "on" : ""}">With MVE</button></div></div>
        <div class="tl">${tl.map((t, i) => `<div class="ts ${tc[i]}" style="animation-delay:${i * .12}s"><small>${D.timeline[i]}</small><p>${t}</p></div>`).join("")}</div></div>`;
    const lever = v => s.id === "proof" ? "Continuous control evidence" : s.lever === "data" ? v.data : s.lever === "ops" ? v.ops : v.tech;
    const optFor = v => { if (!w || !OPT[s.id]) return false; const n = v.name.toLowerCase();
      return s.id === "ai" ? /\bai\b|analytic|model|diagnostic|demand planning|collaboration/.test(n) : s.id === "ransom" ? /identity|key/.test(n)
        : s.id === "cut" ? v.cloud === "Private" && !/identity|key/.test(n)
        : /erp|order|supply|billing|oss|reservation|policy admin|point of sale|collaboration|itsm/.test(n) && v.seal >= 3; };
    $("#tchain").innerHTML = ch.map((v, i) => {
      const [c, t] = res[i];
      let body;
      if (!w) body = `<div class="fb">${icon("cloudoff")}<div><b>Exposure</b>${v.seal >= 3 ? EXPOSE[s.id] : "Shares the core's exposure"}</div></div>`;
      else if (c === "p") body = `<div class="fb">${icon("check")}<div><b>By design</b>Not load-bearing — paused safely</div></div>`;
      else if (t === "Unaffected") body = `<div class="fb held">${icon("check")}<div><b>Held by</b>No dependency on the withdrawn model</div></div>`;
      else body = `<div class="fb held">${icon(leverIcon[s.lever])}<div><b>${c === "a" ? "Recovers via" : "Held by"}</b>${lever(v)}</div></div>`;
      if (optFor(v)) body += `<div class="fb opt">${icon(OPT[s.id][0])}<div><b>Recommended fallback</b>${OPT[s.id][1]}</div></div>`;
      return `<div class="node ${c} ${isBB(v) ? "bb" : ""}" style="animation-delay:${i * .05}s"><div class="nh"><div class="n">${v.name}</div><span class="sl" style="background:${SC(v.seal)}">${band(v)}</span></div><div class="st">${t}</div>${body}</div>`;
    }).join("");
    fitTest();
  }

  function renderModel() {
    const ch = st.mve.chain, cnt = {};
    ch.forEach(v => cnt[v.cloud] = (cnt[v.cloud] || 0) + 1);
    const order = Object.entries(cnt).sort((a, b) => b[1] - a[1] || TIER_ORDER.indexOf(a[0]) - TIER_ORDER.indexOf(b[0]));
    const pub = (cnt["Public"] || 0) + (cnt["Public Sovereign"] || 0), sov = (cnt["Private"] || 0) + (cnt["National"] || 0);
    $("#mix-line").innerHTML = `Each MVE activity lands where its risk posture puts it: <b>${pub} of ${ch.length}</b> on public and public sovereign cloud, and <b>${sov}</b> on private${cnt["National"] ? " or national" : ""} — the load-bearing core. The wider estate stays mostly on public cloud. <b>Darker = more of the MVE.</b>`;
    const mx = Math.max(...Object.entries(D.tiers).flatMap(([row, ts]) => ts.map(t => ch.filter(v => v.plane[row] === t).length)));
    $("#model").innerHTML = Object.entries(D.tiers).map(([row, tiers]) => `<div class="mrow"><div class="lbl">${row}</div>${tiers.map(t => {
      const w = ch.filter(v => v.plane[row] === t), n = w.length, h = n === 0 ? 0 : Math.max(1, Math.ceil(n / mx * 3));
      const a1 = Math.min(...w.map(v => v.lo)), a2 = Math.max(...w.map(v => v.seal)), sr = n ? (a1 === a2 ? `SEAL ${a2}` : `SEAL ${a1}–${a2}`) : "";
      const hit = st.trace !== null && ch[st.trace].plane[row] === t;
      const td = D.tierdefs && D.tierdefs[row] ? D.tierdefs[row][t] || "" : "";
      return `<div class="tier h${h} ${hit ? "hit" : ""}"><div class="tn">${t}${td ? `<small class="tdef">${td}</small>` : ""}</div>${n ? `<span class="sp">${sr}</span>` : ""}</div>`;
    }).join("")}</div>`).join("") +
      `<div class="heat-legend">Share of estate: <i style="background:transparent;border:1px dashed var(--line)"></i>none <i style="background:#DCE6FA"></i>low <i style="background:#8FB0EE"></i>medium <i style="background:#2F5BB8"></i>high</div>`;
    const idx = ch.map((v, i) => i).sort((a, b) => ch[b].seal - ch[a].seal || ch[b].lo - ch[a].lo || TIER_ORDER.indexOf(ch[b].cloud) - TIER_ORDER.indexOf(ch[a].cloud));
    $("#wl").innerHTML = idx.map(i => `<button class="wl ${st.trace === i ? "on" : ""}" data-i="${i}">${ch[i].name}<span>${band(ch[i])}</span></button>`).join("");
    $$("#wl .wl").forEach(b => b.onclick = () => { st.trace = st.trace === +b.dataset.i ? null : +b.dataset.i; renderModel(); });
    $("#model").classList.toggle("tracing", st.trace !== null);
    $("#trace").innerHTML = st.trace === null ? "Tap any workload to see exactly where it runs." :
      `<b>${ch[st.trace].name}</b> runs on ${Object.entries(ch[st.trace].plane).map(([k, v]) => `${k}: ${v}`).join(" · ")}. Tap again to clear.`;
    $("#takeaways").innerHTML = D.takeaways.map((t, i) => `<div><b>${i + 1}</b>${t}</div>`).join("");
  }

  /* 6 · what TCS brings — value proposition */
  function renderOffer() {
    const V = D.valueprop;
    $("#vp").innerHTML = `<div class="vp-adv"><div class="vi">${icon(V.advisory.icon)}</div><div><b>${V.advisory.name}</b><p>${V.advisory.desc} <i>${V.advisory.scope}</i></p></div></div>
      <div class="vp-grid">${V.offers.map((o, i) => `<div class="vp-card" style="animation-delay:${i * .08}s"><div class="vh">${icon(o.icon)}<b>${o.name}</b></div>
        <ul>${o.items.map(t => `<li>${t}</li>`).join("")}</ul>
        <div class="vp-eco"><small>${o.eco_label}</small><div>${o.eco.map(e => `<span>${e}</span>`).join("")}</div></div></div>`).join("")}</div>
      <div class="vp-eden"><div class="vi">${icon("sun")}</div><div class="vt"><small>${V.eden.name}</small><p>${V.eden.desc}</p></div>
        <div class="stats">${V.eden.stats.map(([n, l, d]) => `<div><b>${n}</b><span>${l}</span><em>${d}</em></div>`).join("")}</div></div>` + (D.msmap ? `<div class="vp-ms"><span class="lb">${D.msmap.title}</span>
        <div class="tiers">${D.msmap.tiers.map(([t, d]) => `<div><b>${t}</b>${d}</div>`).join("")}</div>
        <div class="adds"><small>${D.msmap.adds_label}</small>${D.msmap.adds.map(x => `<span>${x}</span>`).join("")}</div></div>` : "");
    fitOffer();
  }

  function renderAssess() {
    const A = D.assessment, R = D.routes, rt = A.routes[st.route] || A.routes.broad;
    $("#a-title").textContent = A.title; $("#a-sub").textContent = A.sub;
    $("#pre").innerHTML = `<div class="pi">${icon("agent")}</div><div class="pt"><small>${A.pre.tag}</small>${A.pre.name}</div><div class="pd">${A.pre.desc}</div>
      <div class="chipsx">${A.pre.items.map(([k, t]) => `<div>${icon(k)}${t}</div>`).join("")}</div>`;
    $("#stages").innerHTML = rt.stages.map((s, i) => `<div class="stage" style="animation-delay:${i * .1}s"><span class="no">${rt.label} · Sprint ${i + 1}</span><h3>${s.name}</h3><div class="fc">${s.focus}</div>
        <ul>${s.items.map(([k, t]) => `<li><span class="ii">${icon(k)}</span><div>${t}</div></li>`).join("")}</ul></div>`).join("");
    const Dz = rt.design;
    $("#design").innerHTML = `<div class="dh"><small>${Dz.tag}</small><b>${Dz.name}</b></div><p>${Dz.desc}</p>
      <div class="areas">${Dz.items.map(([k, t]) => `<div>${icon(k)}${t}</div>`).join("")}</div>`;
    $("#pack").innerHTML = `<span class="no">The outcome · Day 90</span><h3>${rt.pack.name}</h3><div class="fc">${rt.pack.fc}</div>
        <ul>${rt.pack.items.map(([k, t, d]) => `<li><span class="ii">${icon(k)}</span><div><b>${t}</b><span>${d}</span></div></li>`).join("")}</ul>
        <div class="bd">${rt.pack.bd}</div>`;
    $("#a-foot").innerHTML = `<div class="routes"><small>${R.label}</small><div class="toggle" role="group" aria-label="Scope">${R.opts.map(o => `<button type="button" data-r="${o[0]}" class="${o[0] === st.route ? "on" : ""}" aria-pressed="${o[0] === st.route}">${o[1]}</button>`).join("")}</div>
        <p aria-live="polite">${rt.line}</p><span class="flagx">${icon("flag")}${R.end}</span></div>`;
    $$("#a-foot .toggle button").forEach(b => b.onclick = () => { st.route = b.dataset.r; renderAssess(); });
  }

  const TIMES = ["Within 6 months", "6–12 months", "12+ months"];
  function renderPrio() {
    if (wv() && !st.prio.length) st.prio = D.pillars.map((p, i) => [p.id, wv()[i]]).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]);
    $("#pr-pillars").innerHTML = D.pillars.map(p => { const r = st.prio.indexOf(p.id); return `<button data-id="${p.id}" class="${r > -1 ? "on" : ""}">${p.name}${r > -1 ? `<span class="rk">${r + 1}</span>` : ""}</button>`; }).join("");
    $$("#pr-pillars button").forEach(b => b.onclick = () => { const id = b.dataset.id, r = st.prio.indexOf(id); if (r > -1) st.prio.splice(r, 1); else if (st.prio.length < 3) st.prio.push(id); renderPrio(); });
    $("#pr-concern").innerHTML = D.scenarios.map(s => `<button data-id="${s.id}" class="${st.concern.includes(s.id) ? "on" : ""}">${s.name}</button>`).join("");
    $$("#pr-concern button").forEach(b => b.onclick = () => { const i = st.concern.indexOf(b.dataset.id); i > -1 ? st.concern.splice(i, 1) : st.concern.push(b.dataset.id); renderPrio(); });
    $("#pr-time").innerHTML = TIMES.map((t, i) => `<button data-i="${i}" class="${st.time === i ? "on" : ""}">${t}</button>`).join("");
    $$("#pr-time button").forEach(b => b.onclick = () => { st.time = +b.dataset.i; renderPrio(); });
  }
  // When served from a real website (e.g. GitHub Pages) the QR link follows the site's own address;
  // from file:// (kiosk) or localhost it falls back to BASE_URL in data.js.
  const siteBase = () => /^https?:$/.test(location.protocol) && !/^(localhost$|127\.|\[::1\]$)/.test(location.hostname)
    ? new URL(".", location.href).href : D.config.BASE_URL.replace(/\/?$/, "/");
  const dlUrl = () => siteBase() + "download/?m=" + st.mve.id;
  function showQR() {
    const q = new QRCodeLib(-1, QRLevel.M); q.addData(dlUrl()); q.make();
    const n = q.getModuleCount(); let d = "";
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c},${r}h1v1h-1z`;
    $("#qr").innerHTML = `<svg viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges"><path d="${d}" fill="#0B1533"/></svg>`;
    $("#qr-file").innerHTML = `<b>${st.mve.file}</b><br>Opens on your phone · executive PDF report · nothing installed`;
    $("#lead").style.display = "none"; $("#qr-panel").classList.add("show");
  }
  $("#lead").onsubmit = e => {
    e.preventDefault(); const f = new FormData(e.target), P = id => (D.pillars.find(p => p.id === id) || {}).name || "";
    const leads = JSON.parse(localStorage.getItem("mveLeads") || "[]");
    leads.push({ edition: D.config.TITLE + " " + D.config.VERSION, timestamp: new Date().toISOString(), name: f.get("name"), company: f.get("company"), role: f.get("role"), email: f.get("email"), consent: "yes",
      mve: st.mve.name, priority1: P(st.prio[0]), priority2: P(st.prio[1]), priority3: P(st.prio[2]),
      concerns: st.concern.map(c => D.scenarios.find(s => s.id === c).name).join("; "), timeline: st.time !== null ? TIMES[st.time] : "",
      weights: wv() ? D.pillars.map((p, i) => `${p.name} ${wv()[i]}%`).join("; ") + (st.ind ? ` (industry ${st.ind}${st.w ? ", adjusted" : ""})` : "") : "" });
    localStorage.setItem("mveLeads", JSON.stringify(leads)); showQR();
  };
  $("#skip").onclick = e => { e.preventDefault(); showQR(); };
  $("#restart").onclick = reset;

  $("#privacy-box").innerHTML = `<h2>Privacy notice — MVE interactive experience</h2>
   <h4>Who we are</h4><p>Tata Consultancy Services (TCS) is the controller of the personal data collected through this experience.</p>
   <h4>What we collect</h4><p>Name, company, role, business email and the priorities you select on screen.</p>
   <h4>Why</h4><p>To send you your MVE report and to follow up with you about Active Sovereignty, based on your consent.</p>
   <h4>Storage & retention</h4><p>Data is stored locally on this device during the event, then transferred to TCS systems. Retention: [to be confirmed by TCS Privacy].</p>
   <h4>Your rights</h4><p>You can withdraw consent and exercise your rights of access, correction and deletion at any time by contacting ${D.config.PRIVACY_CONTACT}. Full details: ${D.config.PRIVACY_POLICY_URL}</p>
   <p><i>The download link contains no personal data.</i></p><button class="primary" id="pv-close">Close</button>`;
  $("#privacy-link").onclick = e => { e.preventDefault(); $("#privacy").classList.add("show"); };
  document.addEventListener("click", e => { if (e.target.id === "pv-close") $("#privacy").classList.remove("show"); });

  let taps = 0, tt; $("#brand").onclick = () => { taps++; clearTimeout(tt); tt = setTimeout(() => taps = 0, 1500); if (taps >= 5) { taps = 0; openOp(); } };
  addEventListener("keydown", e => { if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") openOp(); });
  function openOp() { const l = JSON.parse(localStorage.getItem("mveLeads") || "[]"); $("#op-count").textContent = `${l.length} lead(s) stored on this device.`; $("#op-ver").textContent = `${D.config.TITLE} · ${D.config.VERSION}`; $("#operator").classList.add("show"); }
  $("#op-close").onclick = () => $("#operator").classList.remove("show");
  $("#op-export").onclick = () => {
    const l = JSON.parse(localStorage.getItem("mveLeads") || "[]"); if (!l.length) return alert("No leads yet.");
    const h = Object.keys(l[0]), esc = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + [h.join(","), ...l.map(r => h.map(k => esc(r[k])).join(","))].join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = `Leads - ${D.config.TITLE} ${D.config.VERSION} - ${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  };
  $("#op-clear").onclick = () => { if (confirm("Delete all stored leads? Export first!")) { localStorage.removeItem("mveLeads"); openOp(); } };

  function reset() { st = fresh(); $("#lead").reset(); $("#lead").style.display = ""; $("#qr-panel").classList.remove("show"); $("#qr").innerHTML = ""; $$(".overlay").forEach(o => o.classList.remove("show")); go(0); }
  let idle; const bump = () => { clearTimeout(idle); idle = setTimeout(() => { if (st.step !== 0 || $("#variants").classList.contains("show")) reset(); }, D.config.IDLE_SECONDS * 1000); };
  ["pointerdown", "keydown", "touchstart"].forEach(ev => addEventListener(ev, bump)); bump();

  /* 0 · landing hub — jump straight to any part of the story */
  function pick() { st.target = 2; go(1); }
  function want(n) { if (NEEDS.includes(n) && !st.mve) pick(n); else go(n); }
  const TILES = [
    { k: "target", t: "CxO priorities on sovereignty", d: "Six board questions — the TCS recommended focus for your industry.", em: "Your sovereignty fingerprint", fn: () => go(11) },
    { k: "heat", t: "Pick your industry", d: "Your MVE — from the six pillars to your value chain, in your industry's context.", em: `${D.clusters.length} industries · ${D.clusters.reduce((n, c) => n + c.mves.length, 0)} MVEs`, fn: () => pick() },
    ...(ED === "ms" ? [{ k: "chat", t: "Microsoft 365 value chain", d: "Not one workload — where each M365 value chain needs to be.", em: "Example value chain", fn: () => go(9) }] : []),
    { k: "check", t: "Active Sovereignty in practice", d: "Anonymised client journeys — current state.", em: "Client cases", fn: () => go(10) },
    { k: "layers", t: "What TCS brings", d: "The TCS Active Sovereignty Framework, four implementation planes and the EDeN™ operations backbone.", em: "Framework · offer · operations", fn: () => go(12) },
    { k: "route", t: "Run Active Sovereignty with TCS", d: "The roadmap from Design to Operate — and a deep dive on Design MVE.", em: "Roadmap · Design MVE deep dive", fn: () => go(13) }];
  $("#home-grid").innerHTML = TILES.map((x, i) => `<button class="tile ${TILES.length % 2 && i === TILES.length - 1 ? "wide" : ""}" data-i="${i}" style="animation-delay:${i * .06}s"><span class="tic">${icon(x.k)}</span><b>${x.t}</b><span>${x.d}</span><em>${x.em}</em></button>`).join("");
  $$("#home-grid .tile").forEach(b => b.onclick = () => TILES[+b.dataset.i].fn());
  $("#tour .ti").innerHTML = icon("route"); $("#tour").onclick = () => pick(2);
  $("#home-btn").onclick = () => go(0);

  /* 9 · Microsoft 365 value chain (Ignite edition) */
  function renderM365() {
    const M = D.m365; if (!M) return; const it = M.items, sel = st.msel || 0;
    const X = v => ({ d: v[3][0], o: v[3][1], t: v[3][2] });
    const cols = it.map((v, i) => bandCol(X(v), i, sel, i >= M.layers[0].n ? "bb" : "")).join("");
    $("#m-ladder").innerHTML = `<div class="rows">${sealRows(M.note)}<div class="cols">${cols}</div></div>
      <div class="names">${it.map((v, i) => `<div data-i="${i}" class="${i === sel ? "sel" : ""}">${icon(v[4])}${v[0]}<small>${v[1]}</small></div>`).join("")}</div>
      <div class="mlayers">${M.layers.map((l, i) => `<div class="${i ? "prod" : ""}" style="flex:${l.n}">${l.name}<small>${l.sub}</small></div>`).join("")}</div>${legend}`;
    $$("#m-ladder .col, #m-ladder .names div").forEach(c => c.onclick = () => { st.msel = +c.dataset.i; renderM365(); });
    const v = it[sel], [d, o, t] = v[3], lo = Math.min(d, o, t), hi = Math.max(d, o, t);
    $("#m-detail").innerHTML = `<div><h5>Value chain</h5><div class="dn">${v[0]}</div><span class="sealpill" style="background:${SC(hi)}">SEAL ${lo === hi ? hi : lo + "–" + hi}</span><p>${v[1]}</p></div>
      <div><h5>Data · Operations · Technology</h5><div class="dot"><div class="tag d${d}"><u>Data</u>SEAL ${d}</div><div class="tag o${o}"><u>Operations</u>SEAL ${o}</div><div class="tag t${t}"><u>Technology</u>SEAL ${t}</div></div></div>
      <div><h5>Recommended deployment</h5><p>${v[5]}</p></div>
      <div><h5>Why it matters</h5><p class="ins">${M.insight}</p></div>`;
    fitLadder($("#m-ladder"));
  }

  /* 10 · Active Sovereignty in practice — grounded, current-state case cards */
  function renderCases() {
    const SC_ALL = D.scopeAll;
    $("#cases").innerHTML = D.cases.map((c, i) => `<div class="case" style="animation-delay:${i * .08}s">
      <div class="ch">${icon(c.icon)}<b>${c.label}</b><span class="stt ${c.status === "In progress" ? "prog" : ""}">${c.status}</span></div>
      <div class="take">${c.take}</div>
      <div class="viz"><div class="vz fr"><small>From</small><div class="ics">${c.from_i.map(k => `<i>${icon(k)}</i>`).join("")}</div><p>${c.from_t}</p></div>
        <span class="arr">→</span>
        <div class="vz to"><small>Today</small><div class="ics">${c.to_i.map(k => `<i>${icon(k)}</i>`).join("")}</div><p>${c.to_t}</p></div></div>
      <div class="scope"><small>What TCS covered</small><div>${SC_ALL.map(s => { const on = c.scope.some(x => x.startsWith(s.split(" ")[0])); const lab = c.scope.find(x => x.startsWith(s.split(" ")[0])) || s; return `<span class="${on ? "on" : ""}">${lab}</span>`; }).join("")}</div></div>
      <ul>${c.bullets.map(x => `<li>${x}</li>`).join("")}</ul>
      ${c.facts.length ? `<div class="facts">${c.facts.map(f => `<span>${f}</span>`).join("")}</div>` : ""}
      <div class="pil"><small>Pillars evidenced</small><div>${D.pillars.map(p => { const on = c.pillars.includes(p.id); return `<span class="${on ? "on" : ""}" style="${on ? `background:${p.id === "proof" ? "#5B6B8C" : p.color}` : ""}">${icon(p.id)}${p.name}</span>`; }).join("")}</div></div>
      <div class="iv">${c.inview}</div></div>`).join("");
    fitCases();
  }
  function fitCases() {
    const C = $("#cases"); if (!C || !C.offsetParent) return;
    const over = () => [...C.querySelectorAll(".case")].some(c => c.scrollHeight > c.clientHeight + 1);
    C.classList.remove("q1", "q2", "q3");
    for (const k of ["q1", "q2", "q3"]) { if (!over()) break; C.classList.add(k); }
  }

  /* 11 · CxO priorities — weigh each question; the fingerprint carries through the journey */
  const PCOL = p => p.id === "proof" ? "#5B6B8C" : p.id === "choice" ? "#3E6BB8" : p.color;
  function radar(vals, ghost) {
    const R = 100, c = 130, n = 6, pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, r = R * Math.max(4, v) / 100; return [c + r * Math.cos(a), c + r * Math.sin(a)]; };
    const poly = v => v.map((x, i) => pt(i, x).map(z => z.toFixed(1)).join(",")).join(" ");
    let g = `<svg viewBox="0 0 260 260" class="radar" role="img" aria-label="Sovereignty fingerprint">`;
    [25, 50, 75, 100].forEach(l => g += `<polygon points="${poly(Array(6).fill(l))}" class="rg"/>`);
    D.pillars.forEach((p, i) => { const [x, y] = pt(i, 100), [lx, ly] = pt(i, 122); g += `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" class="rg"/><text x="${lx}" y="${ly + 3}" text-anchor="middle" class="rl2" fill="${PCOL(p)}">${p.name}</text>`; });
    g += `<polygon points="${poly(vals)}" class="me-p"/>` + vals.map((v, i) => { const [x, y] = pt(i, v); return `<circle cx="${x}" cy="${y}" r="4" fill="${PCOL(D.pillars[i])}" stroke="#fff" stroke-width="1.5"/>`; }).join("");
    if (ghost) g += `<polygon points="${poly(ghost)}" class="ghost-p"/>`;
    return g + `</svg>`;
  }
  /* TCS recommendation per industry leads; a visitor's adjustment is the ghost */
  const indId = () => st.ind || (st.mve ? (D.clusters.find(c => c.mves.includes(st.mve)) || {}).id : null) || null;
  const recV = () => indId() ? D.rec[indId()] : null;
  const wv = () => st.w || recV();
  const scaleTxt = v => D.scale.filter(x => v >= x[0]).pop()[1];
  function renderCxo() {
    const id = indId(), rec = recV(), cur = st.w || rec;
    $("#cxo").innerHTML = D.pillars.map((p, i) => { const col = PCOL(p), v = cur ? cur[i] : 0;
      return `<div class="cq ${cur ? "" : "off"}" style="--pc:${col};animation-delay:${i * .05}s"><span class="who">${p.who}</span><div class="q">${p.q}</div>
        <div class="sl"><div class="trk"><input type="range" min="0" max="100" step="5" value="${v}" data-i="${i}" ${cur ? "" : "disabled"} style="--v:${v}%;--pc:${col}" aria-label="Focus for ${p.who}">
          ${rec ? `<i class="rtick" style="left:${rec[i]}%" title="TCS recommends ${rec[i]}%"></i>` : ""}</div>
          <output id="wv${i}">${cur ? `${v}%<small>${scaleTxt(v)}</small>` : "—"}</output></div>
        <div class="scale"><span>Nice to have</span><span>Must have</span><span>Critical</span></div>
        <div class="recl" id="rl${i}">${rec ? (st.w && st.w[i] !== rec[i] ? `TCS recommends <b>${rec[i]}% · ${scaleTxt(rec[i])}</b> · adjusted` : `<b>TCS recommendation</b> for this industry`) : "Select your industry to see the TCS recommendation"}</div></div>`; }).join("");
    $("#fp").innerHTML = `<div class="fp-h"><small>Sovereignty fingerprint</small><b>${id ? D.clusters.find(c => c.id === id).name : "Select your industry"}</b></div>
      <label class="fp-sel"><span>Industry</span><select id="isel"><option value="">— select —</option>${D.clusters.map(c => `<option value="${c.id}" ${c.id === id ? "selected" : ""}>${c.name}</option>`).join("")}</select></label>
      <div class="fp-r" id="fp-r">${rec ? radar(rec, st.w) : radar([0, 0, 0, 0, 0, 0])}</div>
      <div class="fp-k"><span><i class="k-me"></i>TCS recommended focus</span><span><i class="k-gh"></i>Your adjustment</span></div>
      ${st.w ? `<button type="button" class="ghost" id="rreset">Reset to the TCS recommendation</button>` : ""}`;
    $$("#cxo input[type=range]").forEach(r => r.addEventListener("input", () => { const i = +r.dataset.i, v = Math.max(0, Math.min(100, +r.value || 0));
      if (!st.w) st.w = rec.slice(); st.w[i] = v; r.style.setProperty("--v", v + "%"); $("#wv" + i).innerHTML = `${v}%<small>${scaleTxt(v)}</small>`;
      $("#rl" + i).innerHTML = v !== rec[i] ? `TCS recommends <b>${rec[i]}% · ${scaleTxt(rec[i])}</b> · adjusted` : `<b>TCS recommendation</b> for this industry`;
      $("#fp-r").innerHTML = radar(rec, st.w); if (!$("#rreset")) renderCxoFoot(); }));
    $("#isel").onchange = e => { st.ind = e.target.value || null; st.w = null; renderCxo(); };
    const rr = $("#rreset"); if (rr) rr.onclick = () => { st.w = null; renderCxo(); };
  }
  function renderCxoFoot() { const b = document.createElement("button"); b.type = "button"; b.className = "ghost"; b.id = "rreset"; b.textContent = "Reset to the TCS recommendation"; b.onclick = () => { st.w = null; renderCxo(); }; $("#fp").appendChild(b); }

  /* 12 · TCS Active Sovereignty Framework */
  function renderFrame() {
    const F = D.framework, P = D.pillars;
    const L = F.layers;
    $("#frame").innerHTML = `<div class="fr-left"><div class="fr-house">${houseSVG(null, "Minimum Viable Enterprise", true)}</div><p>${F.left}</p></div>
      <div class="fr-arrow" aria-hidden="true"></div>
      <div class="fr-right"><div class="fr-t">The path to MVE for <b>Active Sovereignty</b></div>
        <div class="fl l1"><div class="fn"><i>${L[0].no}</i><b>${L[0].name}</b><span>${L[0].tag}</span></div><div class="fb2"><small>${L[0].lead}</small><div class="bx4">${L[0].boxes.map(([a, b]) => `<div>${a}<br><b>${b}</b></div>`).join("")}</div></div></div>
        <div class="fl l2"><div class="fn"><i>${L[1].no}</i><b>${L[1].name}</b><span>${L[1].tag}</span></div><div class="fb2"><small>${L[1].lead}</small><div class="bx3">${L[1].boxes.map(([a, b]) => `<div><b>${a.toUpperCase()}</b><span>${b}</span></div>`).join("")}</div></div></div>
        <div class="fl l3"><div class="fn"><i>${L[2].no}</i><b>${L[2].name}</b><span>${L[2].tag}</span></div><div class="fb2"><small>${L[2].lead}</small><div class="cp">${L[2].cols.map(([h, t]) => `<div><b>${h.toUpperCase()}</b>${t.map((x, j) => `<span class="c${j}">${x}</span>`).join("")}</div>`).join("")}</div></div></div>
        <div class="fr-foot">${F.foot[0]}<em>${F.foot[1]}</em>${F.foot[2]}<em>${F.foot[3]}</em></div></div>`;
  }

  /* 13 · Run Active Sovereignty with TCS — the roadmap */
  function phaseViz(id, col) {
    if (id === "design") return `<svg viewBox="0 0 120 80" class="pviz"><path d="M60 6 L18 30 L102 30 Z" fill="${col}"/><rect x="24" y="33" width="10" height="26" fill="${col}" opacity=".8"/><rect x="45" y="33" width="10" height="26" fill="${col}" opacity=".7"/><rect x="66" y="33" width="10" height="26" fill="${col}" opacity=".6"/><rect x="87" y="33" width="10" height="26" fill="${col}" opacity=".5"/><rect x="16" y="61" width="88" height="9" rx="2" fill="${col}"/>
      <g class="pv-l"><text x="60" y="78" text-anchor="middle">MVE + D·O·T band per activity</text></g></svg>`;
    if (id === "build") return `<svg viewBox="0 0 120 80" class="pviz">${[["Workloads, wave by wave", 14, .55], ["Keys & identity", 34, .75], ["Sovereign landing zone", 54, 1]].map(([t, y, o], k) => `<rect x="10" y="${y}" width="100" height="16" rx="3" fill="${col}" opacity="${o}" class="${k === 0 ? "fillup" : ""}"/><text x="60" y="${y + 11}" text-anchor="middle" class="pv-w">${t}</text>`).join("")}<text x="60" y="78" text-anchor="middle" class="pv-l2">Built in waves</text></svg>`;
    return `<svg viewBox="0 0 120 80" class="pviz"><circle cx="60" cy="38" r="28" fill="none" stroke="${col}" stroke-opacity=".22" stroke-width="9"/><circle cx="60" cy="38" r="28" fill="none" stroke="${col}" stroke-width="9" stroke-dasharray="150 176" transform="rotate(-90 60 38)" stroke-linecap="round"/><path d="M48 38 l8 8 l16 -18" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="60" y="78" text-anchor="middle" class="pv-l2">Proof on demand</text></svg>`;
  }
  function renderRoad() {
    const R = D.roadmap, S = R.steps;
    const W = 1000, H = 100, xs = [80, 290, 500, 710, 920], ys = [86, 72, 55, 38, 20];
    let p = `M8 ${H - 6} C 40 ${H - 7}, 50 ${ys[0] + 3}, ${xs[0]} ${ys[0]}`;
    for (let i = 1; i < 5; i++) { const mx = (xs[i - 1] + xs[i]) / 2; p += ` C ${mx} ${ys[i - 1]}, ${mx} ${ys[i]}, ${xs[i]} ${ys[i]}`; }
    p += ` C 950 ${ys[4] - 3}, 970 10, 994 6`;
    const waves = [0, 1, 2, 3, 4].map(k => { const x = 548 + k * 34, y = 40 - k * 3.6; return `<path d="M${x - 11} ${y} q11 -13 22 0" class="wave"/>`; }).join("");
    const svg = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="road-svg" aria-hidden="true"><defs><linearGradient id="rg1" x1="0" x2="1"><stop offset="0" stop-color="#2E9E5B"/><stop offset=".42" stop-color="#2F6BD8"/><stop offset=".82" stop-color="#2F6BD8"/><stop offset="1" stop-color="#E39A1F"/></linearGradient></defs>
      <path d="${p}" class="road-bed"/><path d="${p}" class="road" stroke="url(#rg1)"/>${waves}</svg>`;
    const colr = i => i < 2 ? "#2E9E5B" : i < 4 ? "#2F6BD8" : "#E39A1F";
    const nodes = S.map((s, i) => `<div class="rn" style="left:${xs[i] / 10}%;top:${ys[i]}%"><span class="rd" style="--c:${colr(i)}">${icon(s[3])}</span></div>`).join("");
    const labels = S.map((s, i) => `<div class="rlab" style="left:${xs[i] / 10}%;--c:${colr(i)}"><b>${s[1]}</b><span>${s[2]}</span></div>`).join("");
    $("#road").innerHTML = `<div class="road-wrap"><div class="road-top">${svg}${nodes}<div class="wave-l">Waves · value chain by value chain</div></div><div class="road-labs">${labels}</div></div>
      <div class="axis">${R.phases.map(f => `<div style="--c:${f.color}"><b>${f.name}</b><span>${f.steps} · ${f.time}</span></div>`).join("")}</div>
      <div class="phases">${R.phases.map(f => `<div class="ph" style="--c:${f.color}"><div class="ph-v">${phaseViz(f.id, f.color)}</div>
        <div class="ph-o"><small>Outcomes</small><ul>${f.outcomes.map(o => `<li>${icon("check")}${o}</li>`).join("")}</ul></div>
        <div class="ph-a"><small>TCS accelerators</small><div>${f.acc.map(a => `<span class="${ED === "ms" && f.ms.includes(a) ? "ms" : ""}">${a}</span>`).join("")}</div></div></div>`).join("")}</div>
      <div class="road-foot"><span>From <b>measured exposure</b> to <b>enforceable control</b> · ${R.note}${ED === "ms" ? " · <b class='msk'>■</b> Microsoft-relevant accelerators highlighted" : ""}</span></div>`;
  }

  /* V5.5 · autofit — shrink the local type scale of any box whose content would be clipped */
  const FIT_SEL = ".pillar-card,.cq,.ph,.stage,.vp-card,.vp-adv,.vp-eden,.case,.fp,.tier,.node,.detail,.design,.pre,.routes,.fl,.rlab,.tile,.icard .it,.prio-col,.sc-card";
  const baseU = () => getComputedStyle(document.documentElement).getPropertyValue("--u").trim() || "min(1vw,1.75vh)";
  function autofit(el) {
    el.style.removeProperty("--u");
    const over = () => el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1;
    if (!over()) return;
    const b = baseU(); let k = 1;
    while (over() && k > .7) { k = +(k - .03).toFixed(2); el.style.setProperty("--u", `calc(${b} * ${k})`); }
  }
  let fitQ = 0;
  function fitScreen() { if (fitQ) return; fitQ = requestAnimationFrame(() => { fitQ = 0; const sc = document.querySelector(".screen.active"); if (sc) sc.querySelectorAll(FIT_SEL).forEach(autofit); }); }
  new MutationObserver(fitScreen).observe(document.body, { childList: true, subtree: true });
  addEventListener("resize", fitScreen);
  window.__fit = fitScreen;
  window.__I = I; window.__mve = { go, chooseMve, get st() { return st; } };
  go(0);
})();
