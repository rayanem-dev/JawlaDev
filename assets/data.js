// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "RayaNet",            // changer en "Jawla Tech" / "JawlaDev" si besoin
  contactEmail: "rayanesmartdemo@gmail.com",

  // Applis terminées. "repo": "owner/repo" => les releases sont lues depuis GitHub.
  // Sans "repo", la liste "releases" ci-dessous est utilisée.
  apps: [
    { id: "coursup", icon: "🎓", repo: null, url: "#",
      name: "Coursup",
      tagline: { fr: "Gestion des cours et du soutien scolaire", en: "Course and tutoring management", ar: "إدارة الدروس والدعم المدرسي" },
      desc: { fr: "À compléter : description de Coursup.", en: "To complete: Coursup description.", ar: "للإكمال: وصف Coursup." },
      releases: [{ version: "1.0.0", date: "2026-10-01", notes: { fr: "Première version.", en: "First release.", ar: "الإصدار الأول." }, url: "#" }] },
    { id: "horeca", icon: "🍽️", repo: null, url: "#",
      name: "Horeca",
      tagline: { fr: "Solution pour hôtels, restaurants et cafés", en: "Solution for hotels, restaurants and cafés", ar: "حل للفنادق والمطاعم والمقاهي" },
      desc: { fr: "À compléter : description de Horeca.", en: "To complete: Horeca description.", ar: "للإكمال: وصف Horeca." },
      releases: [{ version: "1.0.0", date: "2026-10-01", notes: { fr: "Première version.", en: "First release.", ar: "الإصدار الأول." }, url: "#" }] },
    { id: "sijil", icon: "📒", repo: null, url: "#",
      name: "Sijil",
      tagline: { fr: "Registres et suivi simplifiés", en: "Simplified records and tracking", ar: "سجلات ومتابعة مبسّطة" },
      desc: { fr: "À compléter : description de Sijil.", en: "To complete: Sijil description.", ar: "للإكمال: وصف Sijil." },
      releases: [{ version: "1.0.0", date: "2026-10-01", notes: { fr: "Première version.", en: "First release.", ar: "الإصدار الأول." }, url: "#" }] }
  ],

  // Projets en cours de développement avec jauge (progress = 0..100)
  upcoming: [
    { id: "idea1", icon: "🧪", progress: 15,
      name: { fr: "Nouvelle appli #1", en: "New app #1", ar: "تطبيق جديد #1" },
      desc: { fr: "Idée en cours de conception.", en: "Idea being designed.", ar: "فكرة قيد التصميم." } }
  ],

  i18n: {
    fr: { apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Des applications web sur mesure", heroSub: "Découvrez nos solutions et téléchargez leurs dernières versions.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Custom web applications", heroSub: "Discover our solutions and download their latest versions.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "تطبيقات ويب مخصّصة", heroSub: "اكتشف حلولنا وحمّل آخر إصداراتها.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
