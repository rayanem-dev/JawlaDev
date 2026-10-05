(function () {
  const P = window.PORTAL;
  const $ = (s) => document.querySelector(s);
  const T = (o, l) => (o && typeof o === "object" ? o[l] || o.fr : o);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let lang;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  lang = lang || (navigator.language || "fr").slice(0, 2);
  if (!P.i18n[lang]) lang = "fr";
  const cur = {}; // capture affichée par appli (type web)

  function shots(a, t) {
    if (!a.shots.length) return `<div class="soon">${t.soon}</div>`;
    if (a.kind === "phone")
      return `<div class="phones">${a.shots.map((s) => `
        <button class="ph" data-zoom="${esc(s.src)}" aria-label="${esc(T(s.alt, lang))}"><img src="${esc(s.src)}" alt="${esc(T(s.alt, lang))}" loading="lazy"></button>`).join("")}</div>
        <p class="note">${t.shotsNote}</p>`;
    const i = cur[a.id] || 0, s = a.shots[i];
    return `<button class="viewer" data-zoom="${esc(s.src)}"><img src="${esc(s.src)}" alt="${esc(T(s.alt, lang))}"></button>
      <div class="thumbs">${a.shots.map((x, k) => `
        <button class="thumb" data-app="${a.id}" data-i="${k}" aria-current="${k === i}" aria-label="${esc(T(x.alt, lang))}"><img src="${esc(x.src)}" alt="" loading="lazy"></button>`).join("")}</div>
      <p class="cap">${esc(T(s.alt, lang))}</p><p class="note">${t.shotsNote}</p>`;
  }

  function links(a, t) {
    const open = a.url
      ? `<a class="btn sm" href="${esc(a.url)}">${t.open}</a>`
      : `<a class="btn sm" href="#contact">${t.demo}</a>`;
    return open + a.links.map((l) => {
      const label = l.label ? T(l.label, lang) : (l.type === "deck" ? t.l_deck : t.l_manual);
      return l.type === "video"
        ? `<button class="btn ghost sm" data-video="${esc(l.href)}">${esc(label)}</button>`
        : `<a class="btn ghost sm" href="${esc(l.href)}" download>${esc(label)}</a>`;
    }).join("");
  }

  function render() {
    const t = P.i18n[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = P.brand;
    $("#brand").textContent = P.brand; $("#brand2").textContent = P.brand;
    $("#year").textContent = new Date().getFullYear();
    $("#lang").value = lang;
    document.querySelectorAll("[data-i]").forEach((e) => (e.textContent = t[e.dataset.i]));
    $("#mail").textContent = P.contactEmail;

    $("#appList").innerHTML = P.apps.map((a) => `
      <article class="app">
        <div class="app-info">
          <h3>${esc(a.name)}</h3><p class="tag">${esc(T(a.tagline, lang))}</p>
          <p>${esc(T(a.desc, lang))}</p>
          <ul class="points">${a.points.map((p) => `<li>${esc(T(p, lang))}</li>`).join("")}</ul>
          <div class="acts">${links(a, t)}</div>
        </div>
        <div class="shots">${shots(a, t)}</div>
      </article>`).join("");

    $("#svcGrid").innerHTML = ["dev", "online"].map((g) => `
      <h3 class="sub">${t["g_" + g]}</h3>
      <div class="list">${P.services.filter((x) => x.group === g).map((x) => `
        <div class="item"><h3>${esc(T(x.name, lang))}</h3><p>${esc(T(x.desc, lang))}</p></div>`).join("")}</div>`).join("");
    $("#whyGrid").innerHTML = P.why.map((x) => `
      <div class="why"><h3>${esc(T(x.name, lang))}</h3><p>${esc(T(x.desc, lang))}</p></div>`).join("");
    $("#stepList").innerHTML = P.process.map((x) => `
      <li><b>${esc(T(x.name, lang))}</b><span>${esc(T(x.desc, lang))}</span></li>`).join("");

    $("#upGrid").innerHTML = P.upcoming.map((u) => `
      <div class="card"><div class="ico">${u.icon}</div><h3>${esc(T(u.name, lang))}</h3>
      <p>${esc(T(u.desc, lang))}</p>
      <div class="pct"><span>${t.progress}</span><b>${u.progress}%</b></div>
      <div class="gauge"><i style="width:${u.progress}%"></i></div></div>`).join("");

    $("#relList").innerHTML = P.apps.map((a) => `
      <div class="rel"><h3>${esc(a.name)}</h3>${a.releases.length
        ? `<ul>${a.releases.map((r) => `<li><span class="vtag">${esc(r.version)}</span>${esc(r.date)} — ${esc(T(r.notes, lang))}</li>`).join("")}</ul>`
        : `<p>${t.noRel}</p>`}</div>`).join("");
  }

  const lb = $("#lb"), lbc = $("#lbc");
  const closeLb = () => { lb.hidden = true; lbc.innerHTML = ""; };
  document.addEventListener("click", (e) => {
    const th = e.target.closest(".thumb");
    if (th) { cur[th.dataset.app] = +th.dataset.i; render(); return; }
    const z = e.target.closest("[data-zoom]");
    if (z) { lbc.innerHTML = `<img src="${esc(z.dataset.zoom)}" alt="">`; lb.hidden = false; return; }
    const v = e.target.closest("[data-video]");
    if (v) { lbc.innerHTML = `<video src="${esc(v.dataset.video)}" controls autoplay></video>`; lb.hidden = false; return; }
    if (e.target === lb || e.target.id === "lbx") closeLb();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  $("#lang").addEventListener("change", (e) => {
    lang = e.target.value;
    try { localStorage.setItem("lang", lang); } catch (x) {}
    render();
  });
  render();
})();
