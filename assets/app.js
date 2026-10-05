(function () {
  const P = window.PORTAL;
  const $ = (s) => document.querySelector(s);
  const T = (o, l) => (o && typeof o === "object" ? o[l] || o.fr : o);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let lang;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  lang = lang || (navigator.language || "fr").slice(0, 2);
  if (!P.i18n[lang]) lang = "fr";
  let shot = {};   // capture affichée par appli
  let svc = -1;    // service sélectionné

  const route = () => decodeURIComponent(location.hash.slice(1));
  const tile = (href, color, inner, name) =>
    `<a class="tile" href="#${href}"><span class="ic" style="--c:${color}">${inner}</span><span class="tn">${esc(name)}</span></a>`;

  function home(t) {
    return `<p class="tag">${esc(t.homeTag)}</p>
      <div class="chips"><span class="chip">${t.w1}</span><span class="chip">${t.w2}</span><span class="chip">${t.w3}</span></div>
      <div class="tiles">
        ${P.apps.map((a) => tile(a.id, a.color, a.icon, a.name)).join("")}
        ${P.upcoming.map((u) => tile(u.id, "#59606F", `<span class="ring" style="--p:${u.progress}"><b>${u.progress}%</b></span>`, T(u.name, lang))).join("")}
        ${tile("services", "#F59E0B", "💼", t.services)}
        ${tile("contact", "#E5584F", "✉️", t.contact)}
      </div>`;
  }

  function shotsView(a, t) {
    if (!a.shots.length) return "";
    if (a.kind === "phone")
      return `<div class="phones">${a.shots.map((s) => `
        <button class="ph" data-zoom="${esc(s.src)}" aria-label="${esc(T(s.alt, lang))}"><img src="${esc(s.src)}" alt="${esc(T(s.alt, lang))}"></button>`).join("")}</div>
        <p class="note">${t.shotsNote}</p>`;
    const i = shot[a.id] || 0, s = a.shots[i];
    return `<button class="viewer" data-zoom="${esc(s.src)}"><img src="${esc(s.src)}" alt="${esc(T(s.alt, lang))}"></button>
      <div class="thumbs">${a.shots.map((x, k) => `
        <button class="thumb" data-app="${a.id}" data-i="${k}" aria-current="${k === i}" aria-label="${esc(T(x.alt, lang))}"><img src="${esc(x.src)}" alt=""></button>`).join("")}</div>
      <p class="cap">${esc(T(s.alt, lang))}</p><p class="note">${t.shotsNote}</p>`;
  }

  function appView(a, t) {
    const open = a.url ? `<a class="btn" href="${esc(a.url)}">${t.open}</a>` : `<a class="btn" href="#contact">${t.demo}</a>`;
    const extra = a.links.map((l) => {
      const label = l.label ? T(l.label, lang) : (l.type === "deck" ? t.l_deck : t.l_manual);
      return `<a class="btn ghost" href="${esc(l.href)}" download>${esc(label)}</a>`;
    }).join("");
    return `<div style="--c:${a.color}">
      <div class="page-h"><span class="ic" style="--c:${a.color}">${a.icon}</span>
        <div><h1>${esc(a.name)}</h1><p>${esc(T(a.tagline, lang))}</p></div></div>
      <div class="acts">${open}${extra}</div>
      <ul class="pts">${a.points.map((p) => `<li>${esc(T(p, lang))}</li>`).join("")}</ul>
      ${shotsView(a, t)}
      ${a.releases.length ? `<div class="vers"><h2>${t.versions}</h2><ul>${a.releases.map((r) =>
        `<li><span class="vtag">${esc(r.version)}</span>${esc(r.date)} — ${esc(T(r.notes, lang))}</li>`).join("")}</ul></div>` : ""}
    </div>`;
  }

  function servicesView(t) {
    const s = P.services[svc];
    return `<div class="page-h"><span class="ic" style="--c:#F59E0B">💼</span><div><h1>${t.services}</h1></div></div>
      <div class="tiles">${P.services.map((x, i) => `
        <button class="tile" data-svc="${i}"><span class="ic" style="--c:${i === svc ? "#1F2230" : "#F59E0B"}">${x.icon}</span><span class="tn">${esc(T(x.name, lang))}</span></button>`).join("")}</div>
      ${s ? `<div class="panel"><h2>${esc(T(s.name, lang))}</h2><p>${esc(T(s.desc, lang))}</p></div>` : ""}
      <ol class="steps">${P.process.map((x) => `<li><b>${esc(T(x.name, lang))}</b><span>${esc(T(x.desc, lang))}</span></li>`).join("")}</ol>`;
  }

  function upView(u) {
    return `<div class="page-h"><span class="ic soon"><span class="ring" style="--p:${u.progress}"><b>${u.progress}%</b></span></span>
      <div><h1>${esc(T(u.name, lang))}</h1><p>${esc(T(u.desc, lang))}</p></div></div>
      <div class="gauge"><i style="width:${u.progress}%"></i></div>`;
  }

  function contactView(t) {
    return `<div class="page-h"><span class="ic" style="--c:#E5584F">✉️</span><div><h1>${t.contact}</h1><p>${esc(t.contactText)}</p></div></div>
      <p class="mail">${esc(P.contactEmail)}</p>
      <div class="acts"><button class="btn" id="copy" style="--c:#E5584F">${t.copy}</button></div>`;
  }

  function render() {
    const t = P.i18n[lang], r = route();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = P.brand;
    $("#brandName").textContent = P.brand; $("#brand2").textContent = P.brand;
    $("#year").textContent = new Date().getFullYear();
    $("#lang").value = lang;
    const app = P.apps.find((a) => a.id === r), up = P.upcoming.find((u) => u.id === r);
    let html, name = "";
    if (app) { html = appView(app, t); name = app.name; }
    else if (up) { html = upView(up); name = T(up.name, lang); }
    else if (r === "services") { html = servicesView(t); name = t.services; }
    else if (r === "contact") { html = contactView(t); name = t.contact; }
    else html = home(t);
    $("#crumb").textContent = name ? "›  " + name : "";
    $("#view").innerHTML = html;
  }

  const lb = $("#lb"), lbc = $("#lbc");
  const closeLb = () => { lb.hidden = true; lbc.innerHTML = ""; };
  document.addEventListener("click", (e) => {
    const th = e.target.closest(".thumb");
    if (th) { shot[th.dataset.app] = +th.dataset.i; render(); return; }
    const sv = e.target.closest("[data-svc]");
    if (sv) { svc = +sv.dataset.svc; render(); return; }
    const z = e.target.closest("[data-zoom]");
    if (z) { lbc.innerHTML = `<img src="${esc(z.dataset.zoom)}" alt="">`; lb.hidden = false; return; }
    if (e.target.id === "copy") {
      const b = e.target, t = P.i18n[lang];
      const done = () => { b.textContent = t.copied; };
      try { navigator.clipboard.writeText(P.contactEmail).then(done, () => {}); } catch (x) {}
      return;
    }
    if (e.target === lb || e.target.id === "lbx") closeLb();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  window.addEventListener("hashchange", () => { svc = -1; render(); window.scrollTo(0, 0); });
  $("#lang").addEventListener("change", (e) => {
    lang = e.target.value;
    try { localStorage.setItem("lang", lang); } catch (x) {}
    render();
  });
  render();
})();
