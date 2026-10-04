(function () {
  const P = window.PORTAL;
  const $ = (s) => document.querySelector(s);
  const T = (o, l) => (o && typeof o === "object" ? o[l] || o.fr : o);
  let lang;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  lang = lang || (navigator.language || "fr").slice(0, 2);
  if (!P.i18n[lang]) lang = "fr";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));


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
    $("#mail").href = "mailto:" + P.contactEmail;

    $("#appGrid").innerHTML = P.apps.map((a) => `
      <div class="card"><div class="ico">${a.icon}</div><h3>${esc(a.name)}</h3>
      <p>${esc(T(a.tagline, lang))}</p><p>${esc(T(a.desc, lang))}</p>
      ${a.url ? `<a class="btn" href="${esc(a.url)}">${t.open}</a>` : `<a class="btn" href="#contact">${t.demo}</a>`}</div>`).join("");

    $("#upGrid").innerHTML = P.upcoming.map((u) => `
      <div class="card"><div class="ico">${u.icon}</div><h3>${esc(T(u.name, lang))}</h3>
      <p>${esc(T(u.desc, lang))}</p>
      <div class="pct"><span>${t.progress}</span><b>${u.progress}%</b></div>
      <div class="gauge"><i style="width:${u.progress}%"></i></div></div>`).join("");

    const blocks = [];
    for (const a of P.apps) {
      const rels = a.releases || [];
      blocks.push(`<div class="rel"><h3>${a.icon} ${esc(a.name)}</h3>` + (rels.length
        ? rels.map((r) => `<ul><li><span class="tag">${esc(r.version)}</span>${esc(r.date)} — ${esc(T(r.notes, lang))}</li></ul>`).join("")
        : `<p>${t.noRel}</p>`) + `</div>`);
    }
    $("#relList").innerHTML = blocks.join("");
  }

  $("#lang").addEventListener("change", (e) => { lang = e.target.value; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  render();
})();
