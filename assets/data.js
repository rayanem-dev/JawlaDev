// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "RayaNet",            // changer en "Jawla Tech" / "JawlaDev" si besoin
  contactEmail: "rayanesmartdemo@gmail.com",


  // Applis terminées. Le code reste privé : on n'affiche que des notes de version (pas de téléchargement).
  // "url" = adresse de l'appli en ligne ; si vide, le bouton devient "Demander une démo".
  apps: [
    { id: "coursup", icon: "🎓", url: "https://rayanem-dev.github.io/coursup/",
      name: "Coursup",
      tagline: { fr: "Le suivi des cours particuliers de vos enfants", en: "Track your children's private lessons", ar: "متابعة الدروس الخصوصية لأطفالك" },
      desc: { fr: "Agenda des séances, sessions de cours, paiements aux professeurs et alertes « reste à payer », par enfant. Application installable sur téléphone.",
              en: "Lesson calendar, course sessions, teacher payments and \"left to pay\" alerts, per child. Installable on your phone.",
              ar: "جدول الحصص ودورات الدروس ومدفوعات الأساتذة وتنبيهات «المتبقي للدفع» لكل طفل. قابل للتثبيت على الهاتف." },
      releases: [
        { version: "2026.10.04", date: "2026-10-04", notes: { fr: "Accueil : détail par enfant des paiements à prévoir et des dépenses du mois.", en: "Home: per-child detail of upcoming payments and monthly spending.", ar: "الرئيسية: تفاصيل لكل طفل للمدفوعات القادمة ومصاريف الشهر." } }
      ] },
    { id: "horeca", icon: "🍽️", url: "",
      name: "Horeca",
      tagline: { fr: "La gestion complète d'une restauration collective multi-sites", en: "Complete multi-site catering management", ar: "إدارة متكاملة للإطعام الجماعي متعدد المواقع" },
      desc: { fr: "Achats, bons de commande, stock, commandes et réceptions par site, caisse, inventaires, pertes, incidents, rapports PDF/Excel, tableau de bord du gérant. Interface en français et en arabe.",
              en: "Purchasing, purchase orders, stock, orders and receipts per site, cash, inventories, losses, incidents, PDF/Excel reports, manager dashboard. French and Arabic interface.",
              ar: "المشتريات وطلبيات الشراء والمخزون والطلبات والاستلام لكل موقع، الصندوق والجرد والخسائر والحوادث، تقارير PDF/Excel ولوحة قيادة للمسيّر. واجهة بالفرنسية والعربية." },
      releases: [
        { version: "v21", date: "2026-10", notes: { fr: "Démonstration complète de bout en bout et kit commercial (manuel FR/AR, vidéo).", en: "Full end-to-end demo and sales kit (FR/AR manual, video).", ar: "عرض تجريبي كامل وحقيبة تجارية (دليل FR/AR وفيديو)." } },
        { version: "v20", date: "2026-10", notes: { fr: "Application installable sur l'écran d'accueil (PWA).", en: "Installable on the home screen (PWA).", ar: "تطبيق قابل للتثبيت على الشاشة الرئيسية." } },
        { version: "v16", date: "2026-10", notes: { fr: "Signature électronique.", en: "Electronic signature.", ar: "التوقيع الإلكتروني." } }
      ] },
    { id: "sijil", icon: "📒", url: "",
      name: "Sijil",
      tagline: { fr: "Le pointage du personnel détaché, simplifié", en: "Seconded staff attendance, simplified", ar: "تسجيل حضور المستخدمين المنتدبين بكل بساطة" },
      desc: { fr: "Rotation travail/repos, soldes, demandes (congés, attestations…), documents, exports fiche de pointage, attachement et facture en Excel et PDF. Multi-entreprises, application installable.",
              en: "Work/rest rotation, balances, requests (leave, certificates…), documents, attendance sheet, attachment and invoice exports in Excel and PDF. Multi-company, installable.",
              ar: "نظام المناوبة عمل/راحة، الأرصدة، الطلبات (عطل، شهادات…)، الوثائق، تصدير ورقة الحضور والملحق والفاتورة بصيغتي Excel وPDF. متعدد الشركات وقابل للتثبيت." },
      releases: [
        { version: "3.24", date: "2026-10-04", notes: { fr: "Détection des doublons et notifications de documents fiabilisées.", en: "Duplicate detection and more reliable document notifications.", ar: "كشف التكرار وإشعارات وثائق أكثر موثوقية." } },
        { version: "3.23", date: "2026-10-04", notes: { fr: "Connexion par utilisateur, carte Version, conversion PDF des grosses photos.", en: "Per-user login, Version card, PDF conversion of large photos.", ar: "تسجيل دخول لكل مستخدم وبطاقة الإصدار وتحويل الصور الكبيرة إلى PDF." } }
      ] }
  ],

  // Projets en cours de développement avec jauge (progress = 0..100)
  upcoming: [
    { id: "idea1", icon: "🧪", progress: 15,
      name: { fr: "Nouvelle appli #1", en: "New app #1", ar: "تطبيق جديد #1" },
      desc: { fr: "Idée en cours de conception.", en: "Idea being designed.", ar: "فكرة قيد التصميم." } }
  ],

  i18n: {
    fr: { apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Des applications web sur mesure", heroSub: "Découvrez nos solutions et suivez leurs dernières nouveautés.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Custom web applications", heroSub: "Discover our solutions and follow their latest updates.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "تطبيقات ويب مخصّصة", heroSub: "اكتشف حلولنا وتابع آخر مستجداتها.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
