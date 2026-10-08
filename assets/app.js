(function () {
  const P = window.PORTAL;
  if (!P) {
    const v = document.getElementById("view");
    if (v) v.innerHTML = '<p style="padding:24px;text-align:center;line-height:1.7">Le contenu n\'a pas pu être chargé. Actualisez la page (Ctrl + F5).<br>Content could not be loaded. Please refresh the page (Ctrl + F5).<br>تعذّر تحميل المحتوى. أعد تحميل الصفحة (Ctrl + F5).</p>';
    return;
  }
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
  const tipAttr = (tip) => (tip ? ` data-tip="${esc(JSON.stringify(tip))}"` : "");
  const i18nTip = (key) => ({ fr: P.i18n.fr[key], en: P.i18n.en[key], ar: P.i18n.ar[key] });
  const upIcon = (u) => {
    if (!u.logo) return u.progress == null ? u.icon : `<span class="ring" style="--p:${u.progress}"><b>${u.progress}%</b></span>`;
    return `<img class="lg" src="${esc(u.logo)}" alt="${esc(T(u.name, lang))}">`
      + (u.progress != null ? `<i class="pbar"><b style="width:${u.progress}%"></b></i>` : "")
      + (u.corner ? `<em class="corner">${esc(u.corner)}</em>` : "");
  };
  const upBg = (u) => (u.logo ? (u.logoFill ? "transparent" : "#FFFFFF") : "#59606F");
  const upTip = (u) => {
    const base = { fr: "Projet en cours de développement", en: "Project in development", ar: "مشروع قيد التطوير" };
    const pct = { fr: (n) => ` : ${n} % réalisé`, en: (n) => `: ${n}% complete`, ar: (n) => `: أُنجز ${n}%` };
    const out = {};
    ["fr", "en", "ar"].forEach((l) => {
      const d = u.desc && u.desc[l] ? u.desc[l] + " " : "";
      out[l] = d + "(" + base[l] + (u.progress == null ? "" : pct[l](u.progress)) + ")";
    });
    return out;
  };
  const tile = (href, color, inner, name, badge, tip) =>
    `<a class="tile" href="#${href}"${tipAttr(tip)}><span class="ic${color === "#FFFFFF" ? " logo" : color === "transparent" ? " fill" : ""}" style="--c:${color}">${inner}</span><span class="tn">${esc(name)}</span>${badge ? `<span class="sts">${badge}</span>` : ""}</a>`;
  const icon = (a) => (a.logo ? `<img class="lg" src="${esc(a.logo)}" alt="${esc(a.name)}">` : a.icon);
  const bg = (a) => (a.logo ? (a.logoFill ? "transparent" : "#FFFFFF") : a.color);
  const pill = (cls, text) => `<span class="st ${cls}">${cls === "done" ? "✓ " : ""}${esc(text)}</span>`;

  function home(t) {
    return `<div class="lockup"><img src="assets/img/jawladev-logo.png" alt="${esc(P.brand)} — Development Solutions"></div>
      <p class="tag">${esc(t.homeTag)}</p>
      <div class="chips"><span class="chip">${t.w1}</span><span class="chip">${t.w2}</span><span class="chip">${t.w3}</span></div>
      <div class="tiles">
        ${P.apps.map((a) => tile(a.id, bg(a), icon(a), a.name, pill("done", t.done) + pill(a.stage, t[a.stage]), a.tagline)).join("")}
        ${P.upcoming.map((u) => tile(u.id, upBg(u), upIcon(u), T(u.name, lang), pill("dev", t.inprog + (u.progress == null ? "" : " · " + u.progress + "%")), upTip(u))).join("")}
        ${P.works.map((w) => tile(w.id, w.color, w.icon, T(w.short, lang), pill("done", t.done), w.summary)).join("")}
        ${tile("services", "#F59E0B", "💼", t.services, "", i18nTip("tipServices"))}
        ${tile("contact", "#E5584F", "✉️", t.contact, "", i18nTip("tipContact"))}
      </div>`;
  }

  const sh = (s) => (lang === "ar" && s.srcAr) || s.src;
  function shotsView(a, t) {
    if (!a.shots.length) return "";
    if (a.kind === "phone")
      return `<div class="phones">${a.shots.map((s) => `
        <button class="ph" data-zoom="${esc(sh(s))}" aria-label="${esc(T(s.alt, lang))}"><img src="${esc(sh(s))}" alt="${esc(T(s.alt, lang))}"></button>`).join("")}</div>
        <p class="note">${t.shotsNote}</p>`;
    const i = shot[a.id] || 0, s = a.shots[i];
    return `<button class="viewer" data-zoom="${esc(sh(s))}"><img src="${esc(sh(s))}" alt="${esc(T(s.alt, lang))}"></button>
      <div class="thumbs">${a.shots.map((x, k) => `
        <button class="thumb" data-app="${a.id}" data-i="${k}" aria-current="${k === i}" aria-label="${esc(T(x.alt, lang))}"><img src="${esc(sh(x))}" alt=""></button>`).join("")}</div>
      <p class="cap">${esc(T(s.alt, lang))}</p><p class="note">${t.shotsNote}</p>`;
  }

  const demoHref = (a, t) => a.demo === "whatsapp"
    ? "https://wa.me/" + P.contactWhatsApp.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(t.demoMsg.replace("{app}", a.name))
    : a.demo;

  function appView(a, t) {
    const open = a.url ? `<a class="btn" href="${esc(a.url)}">${t.open}</a>` : a.demo ? `<a class="btn" href="${esc(demoHref(a, t))}" target="_blank" rel="noopener">${t.demo}</a>` : `<a class="btn" href="#contact">${t.demo}</a>`;
    const extra = a.links.map((l) => {
      const label = l.label ? T(l.label, lang) : (l.type === "deck" ? t.l_deck : t.l_manual);
      return `<a class="btn ghost" href="${esc(l.href)}" download>${esc(label)}</a>`;
    }).join("");
    return `<div style="--c:${a.color}">
      <div class="page-h"><span class="ic${a.logo ? (a.logoFill ? " fill" : " logo") : ""}" style="--c:${bg(a)}">${icon(a)}</span>
        <div><h1>${esc(a.name)}</h1><p>${esc(T(a.tagline, lang))}</p><div class="strow">${pill("done", t.done)}${pill(a.stage, t[a.stage])}</div></div></div>
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
        <button class="tile" data-svc="${i}" data-tip="${esc(JSON.stringify(x.desc))}"><span class="ic" style="--c:${i === svc ? "#1F2230" : "#F59E0B"}">${x.icon}</span><span class="tn">${esc(T(x.name, lang))}</span></button>`).join("")}</div>
      ${s ? `<div class="panel"><h2>${esc(T(s.name, lang))}</h2><p>${esc(T(s.desc, lang))}</p></div>` : ""}
      <ol class="steps">${P.process.map((x) => `<li><b>${esc(T(x.name, lang))}</b><span>${esc(T(x.desc, lang))}</span></li>`).join("")}</ol>`;
  }

  function worksView(t) {
    return `<div class="page-h"><span class="ic" style="--c:#2F7D5B">🗂️</span><div><h1>${t.works}</h1></div></div>
      <div class="tiles">${P.works.map((w) => tile(w.id, w.color, w.icon, T(w.title, lang))).join("")}</div>`;
  }

  function workView(w, t) {
    const sec = (h, body) => `<div class="panel"><h2>${h}</h2>${body}</div>`;
    const ul = (items) => `<ul class="bul">${items.map((i) => `<li>${esc(T(i, lang))}</li>`).join("")}</ul>`;
    return `<div style="--c:${w.color}">
      <div class="page-h"><span class="ic" style="--c:${w.color}">${w.icon}</span>
        <div><h1>${esc(T(w.title, lang))}</h1><p>${esc(T(w.sector, lang))}</p></div></div>
      <ul class="pts">${w.status === "done" ? `<li>✓ ${esc(t.done)}</li>` : ""}<li>${esc(T(w.badge, lang))}</li></ul>
      <p class="lead">${esc(T(w.summary, lang))}</p>
      ${w.images.length ? `<div class="pages">${w.images.map((im) => `
        <button class="pg" data-zoom="${esc(im.src)}"><img src="${esc(im.src)}" alt="${esc(T(im.alt, lang))}"></button>`).join("")}</div>` : ""}
      ${sec(t.w_ctx, `<p>${esc(T(w.context, lang))}</p>`)}
      ${sec(t.w_liv, ul(w.deliverables))}
      ${sec(t.w_content, `<p>${esc(T(w.content, lang))}</p>`)}
      ${sec(t.w_design, ul(w.design))}
    </div>`;
  }

  function upView(u, t) {
    const hasP = u.progress != null;
    const cls = u.logo ? (u.logoFill ? " fill" : " logo") : " soon";
    const inner = u.logo ? upIcon(u) : (hasP ? `<span class="ring" style="--p:${u.progress}"><b>${u.progress}%</b></span>` : u.icon);
    return `<div class="page-h"><span class="ic${cls}" style="--c:${u.logo ? upBg(u) : "#59606F"}">${inner}</span>
      <div><h1>${esc(T(u.name, lang))}</h1>${u.desc ? `<p>${esc(T(u.desc, lang))}</p>` : ""}${pill("dev", t.upcoming)}${hasP ? ` <span class="pct-txt">${u.progress}%</span>` : ""}</div></div>
      ${hasP ? `<div class="gauge"><i style="width:${u.progress}%"></i></div>` : ""}`;
  }

  function contactView(t) {
    const digits = (n) => n.replace(/[^0-9+]/g, "");
    const line = (label, num, href, btn, color) => `
      <div class="cline"><div class="cinfo"><span class="cl">${label}</span><bdi dir="ltr" class="cnum">${esc(num)}</bdi></div>
        <div class="acts"><a class="btn" style="--c:${color}" href="${esc(href)}">${btn}</a>
        <button class="btn ghost" style="--c:${color}" data-copy="${esc(num)}">${t.copy}</button></div></div>`;
    const rows = [];
    if (P.contactPhone) rows.push(line(t.phone, P.contactPhone, "tel:" + digits(P.contactPhone), t.call, "#E5584F"));
    if (P.contactWhatsApp) rows.push(line("WhatsApp", P.contactWhatsApp, "https://wa.me/" + digits(P.contactWhatsApp).replace("+", ""), t.chat, "#1FA855"));
    if (P.contactEmail) rows.push(line("E-mail", P.contactEmail, "mailto:" + P.contactEmail, t.write, "#E5584F"));
    return `<div class="page-h"><span class="ic" style="--c:#E5584F">✉️</span><div><h1>${t.contact}</h1><p>${esc(rows.length ? t.contactText : t.contactSoon)}</p></div></div>${rows.join("")}`;
  }

  function render() {
    const t = P.i18n[lang], r = route();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = P.brand;
    $("#brandName").innerHTML = esc(P.brand).replace(/(Dev|Tech)$/, '<span class="b2">$1</span>');
    const app = P.apps.find((a) => a.id === r), up = P.upcoming.find((u) => u.id === r), wk = P.works.find((w) => w.id === r);
    let html, name = "";
    if (app) { html = appView(app, t); name = app.name; }
    else if (up) { html = upView(up, t); name = T(up.name, lang); }
    else if (wk) { html = workView(wk, t); name = T(wk.title, lang); }
    else if (r === "works") { html = worksView(t); name = t.works; }
    else if (r === "services") { html = servicesView(t); name = t.services; }
    else if (r === "contact") { html = contactView(t); name = t.contact; }
    else html = home(t);
    $("#crumb").textContent = name ? "›  " + name : "";
    hideTip();
    $("#view").innerHTML = html;
  }


  // Bulle d'explication au survol (ou au focus clavier) : français + arabe, et anglais en plus si le site est en anglais
  const tipBox = document.createElement("div");
  tipBox.className = "tipbox"; tipBox.id = "tipbox"; tipBox.setAttribute("role", "tooltip"); tipBox.hidden = true;
  document.body.appendChild(tipBox);
  let tipOwner = null;
  const hideTip = () => { tipBox.hidden = true; if (tipOwner) tipOwner.removeAttribute("aria-describedby"); tipOwner = null; };
  const showTip = (el) => {
    let d; try { d = JSON.parse(el.dataset.tip); } catch (x) { return; }
    const rows = [];
    if (lang === "en" && d.en) rows.push(`<p lang="en">${esc(d.en)}</p>`);
    if (d.fr) rows.push(`<p lang="fr">${esc(d.fr)}</p>`);
    if (d.ar) rows.push(`<p lang="ar" dir="rtl">${esc(d.ar)}</p>`);
    tipBox.innerHTML = rows.join("");
    tipBox.hidden = false; tipOwner = el; el.setAttribute("aria-describedby", "tipbox");
    const r = el.getBoundingClientRect(), w = tipBox.offsetWidth, h = tipBox.offsetHeight;
    const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, innerWidth - w - 8));
    const top = r.top - h - 10 >= 8 ? r.top - h - 10 : Math.min(r.bottom + 10, innerHeight - h - 8);
    tipBox.style.left = left + "px"; tipBox.style.top = top + "px";
  };
  document.addEventListener("mouseover", (e) => { const el = e.target.closest("[data-tip]"); if (el && el !== tipOwner) showTip(el); else if (!el) hideTip(); });
  document.addEventListener("focusin", (e) => { const el = e.target.closest("[data-tip]"); if (el) showTip(el); });
  document.addEventListener("focusout", hideTip);
  window.addEventListener("scroll", hideTip, { passive: true });
  window.addEventListener("hashchange", hideTip);

  const lb = $("#lb"), lbc = $("#lbc");
  const closeLb = () => { lb.hidden = true; lbc.innerHTML = ""; };
  document.addEventListener("click", (e) => {
    const th = e.target.closest(".thumb");
    if (th) { shot[th.dataset.app] = +th.dataset.i; render(); return; }
    const sv = e.target.closest("[data-svc]");
    if (sv) { svc = +sv.dataset.svc; render(); return; }
    const z = e.target.closest("[data-zoom]");
    if (z) { lbc.innerHTML = `<img src="${esc(z.dataset.zoom)}" alt="">`; lb.hidden = false; return; }
    const cp = e.target.closest("[data-copy]");
    if (cp) {
      const t = P.i18n[lang];
      try { navigator.clipboard.writeText(cp.dataset.copy).then(() => { cp.textContent = t.copied; }, () => {}); } catch (x) {}
      return;
    }
    if (e.target === lb || e.target.id === "lbx") closeLb();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  window.addEventListener("hashchange", () => { svc = -1; render(); window.scrollTo(0, 0); });

  // ----- bas de page (brique « basdepage » du dépôt lib, copiée telle quelle dans assets/) -----
  const BDP_TITRES = {
    fr: { aJour: "✓ Tout est à jour", retardServeur: "⚠ Le serveur est en retard : à déployer", retardSite: "⚠ Le site est en retard : à publier (patienter 1 à 2 minutes)", inconnu: "? Version du site illisible (fichier version.json absent ou hors ligne)", actualiser: "Relire les données depuis le serveur", langue: "Langue", theme: "Mode clair / sombre", sombre: "Mode sombre" },
    en: { aJour: "✓ Everything is up to date", retardServeur: "⚠ The server is behind: to deploy", retardSite: "⚠ The site is behind: to publish (wait 1 to 2 minutes)", inconnu: "? Site version unreadable (version.json missing or offline)", actualiser: "Reload the page", langue: "Language", theme: "Light / dark mode", sombre: "Dark mode" },
    ar: { aJour: "✓ كل شيء محدّث", retardServeur: "⚠ الخادم متأخر: يجب نشر التحديث", retardSite: "⚠ الموقع متأخر: قيد النشر (انتظر دقيقة إلى دقيقتين)", inconnu: "? تعذّرت قراءة إصدار الموقع (الملف غير موجود أو لا يوجد اتصال)", actualiser: "إعادة تحميل الصفحة", langue: "اللغة", theme: "الوضع الفاتح / الداكن", sombre: "الوضع الداكن" }
  };
  const BDP_TXT = {
    en: { version: "version", Actualiser: "Refresh", Contact: "Contact" },
    ar: { version: "الإصدار", Actualiser: "تحديث", Contact: "اتصل بنا" }
  };
  const BDP_DROITS = { fr: "Tous droits réservés", en: "All rights reserved", ar: "جميع الحقوق محفوظة" };
  const bdpOpts = (l) => ({ titres: BDP_TITRES[l] || BDP_TITRES.fr, copyright: "© 2026 " + P.brand + " — " + (BDP_DROITS[l] || BDP_DROITS.fr) });
  try {
    BasDePage.monter(Object.assign({
      nom: P.brand,
      version: P.version,
      comparer: { urlSite: "version.json" },
      liens: [{ label: "Contact", href: "#contact" }],
      actualiser: () => location.reload(),
      langue: lang,
      theme: "light",   // clair par défaut ; la bascule du bas de page mémorise le choix
      cle: "jd",
      t: (s) => (BDP_TXT[lang] && BDP_TXT[lang][s]) || s,
      surLangue: (code) => { lang = code; BasDePage.maj(bdpOpts(code)); render(); }
    }, bdpOpts(lang)));
    lang = BasDePage.langue();
  } catch (e) { console.error("Bas de page indisponible :", e); }
  render();
})();
