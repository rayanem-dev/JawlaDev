// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "RayaNet",            // changer en "Jawla Tech" / "JawlaDev" si besoin
  contactEmail: "rayanesmartdemo@gmail.com",


  // Services proposés (modifiable)
  services: [
    { name: { fr: "Sites web et pages de vente", en: "Websites and landing pages", ar: "مواقع الويب وصفحات البيع" },
      desc: { fr: "Site vitrine, portfolio, page de présentation d'un produit. Rapide à charger, adapté au téléphone, en plusieurs langues.",
              en: "Showcase site, portfolio, product page. Fast to load, mobile-friendly, multilingual.",
              ar: "موقع تعريفي ومعرض أعمال وصفحة تقديم منتج. سريع التحميل ومتوافق مع الهاتف ومتعدد اللغات." } },
    { name: { fr: "Développement SaaS", en: "SaaS development", ar: "تطوير تطبيقات SaaS" },
      desc: { fr: "Votre logiciel en ligne, prêt à vendre : comptes par entreprise, rôles et droits, période d'essai, tableaux de bord, exports PDF et Excel.",
              en: "Your online software, ready to sell: per-company accounts, roles and permissions, free trial, dashboards, PDF and Excel exports.",
              ar: "برنامجك على الإنترنت جاهز للبيع: حسابات لكل شركة وأدوار وصلاحيات وفترة تجريبية ولوحات قيادة وتصدير PDF وExcel." } },
    { name: { fr: "Applications web sur mesure", en: "Custom web applications", ar: "تطبيقات ويب حسب الطلب" },
      desc: { fr: "Gestion de stock, pointage, suivi de paiements, commandes : l'outil qui correspond à votre métier, installable sur l'écran d'accueil.",
              en: "Stock, attendance, payment tracking, orders: the tool that fits your business, installable on the home screen.",
              ar: "إدارة المخزون والحضور ومتابعة المدفوعات والطلبات: الأداة التي تناسب نشاطك وقابلة للتثبيت على الشاشة الرئيسية." } },
    { name: { fr: "Applications Google Workspace", en: "Google Workspace apps", ar: "تطبيقات Google Workspace" },
      desc: { fr: "Une base Google Sheets avec Apps Script : mise en service rapide, coût d'hébergement très faible, vos données restent dans votre compte.",
              en: "A Google Sheets database with Apps Script: quick to launch, very low hosting cost, your data stays in your account.",
              ar: "قاعدة بيانات Google Sheets مع Apps Script: إطلاق سريع وتكلفة استضافة منخفضة جدًا وبياناتك تبقى في حسابك." } },
    { name: { fr: "Présentations et kits commerciaux", en: "Presentations and sales kits", ar: "العروض والحقائب التجارية" },
      desc: { fr: "Présentation PowerPoint, manuel utilisateur en PDF, vidéo de démonstration, e-mails de présentation : tout pour convaincre vos clients.",
              en: "PowerPoint presentation, PDF user manual, demo video, introduction emails: everything to win over your customers.",
              ar: "عرض PowerPoint ودليل مستخدم PDF وفيديو توضيحي ورسائل تعريفية: كل ما يلزم لإقناع عملائك." } },
    { name: { fr: "Tableaux de bord et rapports", en: "Dashboards and reports", ar: "لوحات القيادة والتقارير" },
      desc: { fr: "Indicateurs clairs, rapports filtrables par période et par site, exports PDF et Excel prêts à envoyer.",
              en: "Clear indicators, reports filterable by period and site, PDF and Excel exports ready to send.",
              ar: "مؤشرات واضحة وتقارير قابلة للتصفية حسب الفترة والموقع وتصدير PDF وExcel جاهز للإرسال." } },
    { name: { fr: "Automatisation et notifications", en: "Automation and notifications", ar: "الأتمتة والإشعارات" },
      desc: { fr: "E-mails automatiques, rappels, import et export de données, liaison entre vos outils : moins de saisie, moins d'erreurs.",
              en: "Automatic emails, reminders, data import and export, links between your tools: less typing, fewer mistakes.",
              ar: "رسائل بريد تلقائية وتذكيرات واستيراد وتصدير البيانات وربط أدواتك: إدخال أقل وأخطاء أقل." } },
    { name: { fr: "Formation, support et mises à jour", en: "Training, support and updates", ar: "التدريب والدعم والتحديثات" },
      desc: { fr: "Manuel en français et en arabe, prise en main de votre équipe, corrections et nouvelles fonctions après la livraison.",
              en: "Manual in French and Arabic, team onboarding, fixes and new features after delivery.",
              ar: "دليل بالفرنسية والعربية وتأهيل فريقك وإصلاحات وميزات جديدة بعد التسليم." } }
  ],

  // Arguments (modifiable)
  why: [
    { name: { fr: "Rapide", en: "Fast", ar: "سريع" },
      desc: { fr: "Une première version à tester vite, puis on améliore ensemble. Pas de longs cahiers des charges.", en: "A first version to test quickly, then we improve together. No lengthy specifications.", ar: "نسخة أولى للتجربة بسرعة ثم نطوّرها معًا. بلا دفاتر شروط طويلة." } },
    { name: { fr: "Professionnel", en: "Professional", ar: "احترافي" },
      desc: { fr: "Interface soignée, données protégées par des droits d'accès, documents propres en PDF et Excel.", en: "Polished interface, data protected by access rights, clean PDF and Excel documents.", ar: "واجهة أنيقة وبيانات محمية بصلاحيات وصول ووثائق نظيفة بصيغتي PDF وExcel." } },
    { name: { fr: "Accompagné", en: "Supported", ar: "مُرافَق" },
      desc: { fr: "Nous restons disponibles après la livraison : manuel, formation et mises à jour suivies.", en: "We stay available after delivery: manual, training and regular updates.", ar: "نبقى متاحين بعد التسليم: دليل وتدريب وتحديثات منتظمة." } }
  ],

  // Étapes (l'ordre compte)
  process: [
    { name: { fr: "On discute", en: "We talk", ar: "نتحاور" }, desc: { fr: "Votre besoin, vos utilisateurs, vos priorités.", en: "Your need, your users, your priorities.", ar: "حاجتك ومستخدموك وأولوياتك." } },
    { name: { fr: "Maquette", en: "Mockup", ar: "نموذج أولي" }, desc: { fr: "Vous voyez le résultat avant le développement complet.", en: "You see the result before full development.", ar: "ترى النتيجة قبل التطوير الكامل." } },
    { name: { fr: "Développement", en: "Development", ar: "التطوير" }, desc: { fr: "Livraison par étapes, avec démonstration à chaque étape.", en: "Delivered in stages, with a demo at each stage.", ar: "تسليم على مراحل مع عرض في كل مرحلة." } },
    { name: { fr: "Mise en service", en: "Go live", ar: "الإطلاق" }, desc: { fr: "Installation, formation et suivi.", en: "Installation, training and follow-up.", ar: "التثبيت والتدريب والمتابعة." } }
  ],

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
    fr: { services: "Nos services", why: "Pourquoi nous choisir", process: "Comment on travaille", apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Sites web, présentations et logiciels SaaS", heroSub: "Livrés rapidement, avec un rendu professionnel, du premier échange à la mise en service.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { services: "Our services", why: "Why choose us", process: "How we work", apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Websites, presentations and SaaS software", heroSub: "Delivered fast, with a professional finish, from the first conversation to go-live.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { services: "خدماتنا", why: "لماذا نحن", process: "كيف نعمل", apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "مواقع وعروض تقديمية وبرمجيات SaaS", heroSub: "تسليم سريع ومظهر احترافي، من أول حوار حتى الإطلاق.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
