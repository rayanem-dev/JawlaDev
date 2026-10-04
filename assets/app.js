(function () {
  const P = window.PORTAL;
  const $ = (s) => document.querySelector(s);
  const T = (o, l) => (o && typeof o === "object" ? o[l] || o.fr : o);
  let lang = localStorage.getItem("lang") || (navigator.language || "fr").slice(0, 2);
  if (!P.i18n[lang]) lang = "fr";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Releases GitHub (si "repo" renseigné), sinon liste statique
  async function getReleases(app) {
    if (!app.repo) return app.releases || [];
    try {
      const r = await fetch("https://api.github.com/repos/" + app.repo + "/releases?per_page=5");
      if (!r.ok) throw 0;
      return (await r.json()).map((x) => ({
        version: x.tag_name, date: (x.published_at || "").slice(0, 10),
        notes: x.body || "", url: x.html_url }));
    } catch (e) { return app.releases || []; }
  }
  const relCache = {};

  async function render() {
    const t = P.i18n[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = P.brand;
    $("#brand").textContent = P.brand; $("#brand2").textContent = P.brand;
    $("#year").textContent = new Date().getFullYear();
    $("#lang").value = lang;
    document.querySelectorAll("[data-i]").forEach((e) => (e.textContent = t[e.dataset.i]));
    $("#mail").textContent = P.contactEmail;
    $("#mail").href = "mailto:" + P.contactEmail;

    $("#appGrid").innerHTML = P.apps.map((a) => `
      <div class="card"><div class="ico">${a.icon}</div><h3>${esc(a.name)}</h3>
      <p>${esc(T(a.tagline, lang))}</p><p>${esc(T(a.desc, lang))}</p>
      <a class="btn" href="${esc(a.url)}">${t.open}</a></div>`).join("");

    $("#upGrid").innerHTML = P.upcoming.map((u) => `
      <div class="card"><div class="ico">${u.icon}</div><h3>${esc(T(u.name, lang))}</h3>
      <p>${esc(T(u.desc, lang))}</p>
      <div class="pct"><span>${t.progress}</span><b>${u.progress}%</b></div>
      <div class="gauge"><i style="width:${u.progress}%"></i></div></div>`).join("");

    const blocks = [];
    for (const a of P.apps) {
      relCache[a.id] = relCache[a.id] || (await getReleases(a));
      const rels = relCache[a.id];
      blocks.push(`<div class="rel"><h3>${a.icon} ${esc(a.name)}</h3>` + (rels.length
        ? rels.map((r) => `<ul><li><span class="tag">${esc(r.version)}</span>${esc(r.date)} — ${esc(T(r.notes, lang)).slice(0, 200)}
            ${r.url && r.url !== "#" ? ` <a href="${esc(r.url)}">${t.download}</a>` : ""}</li></ul>`).join("")
        : `<p>${t.noRel}</p>`) + `</div>`);
    }
    $("#relList").innerHTML = blocks.join("");
  }

  $("#lang").addEventListener("change", (e) => { lang = e.target.value; localStorage.setItem("lang", lang); render(); });
  render();
})();
