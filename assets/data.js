// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "RayaNet",            // changer en "Jawla Tech" / "JawlaDev" si besoin
  contactEmail: "rayanesmartdemo@gmail.com",


  // Services proposés (modifiable)
  services: [
    { group: "dev", name: { fr: "Sites web et pages de vente", en: "Websites and landing pages", ar: "مواقع الويب وصفحات البيع" },
      desc: { fr: "Site vitrine, portfolio, page de présentation d'un produit. Rapide à charger, adapté au téléphone, en plusieurs langues.",
              en: "Showcase site, portfolio, product page. Fast to load, mobile-friendly, multilingual.",
              ar: "موقع تعريفي ومعرض أعمال وصفحة تقديم منتج. سريع التحميل ومتوافق مع الهاتف ومتعدد اللغات." } },
    { group: "dev", name: { fr: "Développement SaaS", en: "SaaS development", ar: "تطوير تطبيقات SaaS" },
      desc: { fr: "Votre logiciel en ligne, prêt à vendre : comptes par entreprise, rôles et droits, période d'essai, tableaux de bord, exports PDF et Excel.",
              en: "Your online software, ready to sell: per-company accounts, roles and permissions, free trial, dashboards, PDF and Excel exports.",
              ar: "برنامجك على الإنترنت جاهز للبيع: حسابات لكل شركة وأدوار وصلاحيات وفترة تجريبية ولوحات قيادة وتصدير PDF وExcel." } },
    { group: "dev", name: { fr: "Applications web sur mesure", en: "Custom web applications", ar: "تطبيقات ويب حسب الطلب" },
      desc: { fr: "Gestion de stock, pointage, suivi de paiements, commandes : l'outil qui correspond à votre métier, installable sur l'écran d'accueil.",
              en: "Stock, attendance, payment tracking, orders: the tool that fits your business, installable on the home screen.",
              ar: "إدارة المخزون والحضور ومتابعة المدفوعات والطلبات: الأداة التي تناسب نشاطك وقابلة للتثبيت على الشاشة الرئيسية." } },
    { group: "dev", name: { fr: "Applications Google Workspace", en: "Google Workspace apps", ar: "تطبيقات Google Workspace" },
      desc: { fr: "Une base Google Sheets avec Apps Script : mise en service rapide, coût d'hébergement très faible, vos données restent dans votre compte.",
              en: "A Google Sheets database with Apps Script: quick to launch, very low hosting cost, your data stays in your account.",
              ar: "قاعدة بيانات Google Sheets مع Apps Script: إطلاق سريع وتكلفة استضافة منخفضة جدًا وبياناتك تبقى في حسابك." } },
    { group: "online", name: { fr: "Présentations et kits commerciaux", en: "Presentations and sales kits", ar: "العروض والحقائب التجارية" },
      desc: { fr: "Présentation PowerPoint, manuel utilisateur en PDF, vidéo de démonstration, e-mails de présentation : tout pour convaincre vos clients.",
              en: "PowerPoint presentation, PDF user manual, demo video, introduction emails: everything to win over your customers.",
              ar: "عرض PowerPoint ودليل مستخدم PDF وفيديو توضيحي ورسائل تعريفية: كل ما يلزم لإقناع عملائك." } },
    { group: "dev", name: { fr: "Tableaux de bord et rapports", en: "Dashboards and reports", ar: "لوحات القيادة والتقارير" },
      desc: { fr: "Indicateurs clairs, rapports filtrables par période et par site, exports PDF et Excel prêts à envoyer.",
              en: "Clear indicators, reports filterable by period and site, PDF and Excel exports ready to send.",
              ar: "مؤشرات واضحة وتقارير قابلة للتصفية حسب الفترة والموقع وتصدير PDF وExcel جاهز للإرسال." } },
    { group: "dev", name: { fr: "Automatisation et notifications", en: "Automation and notifications", ar: "الأتمتة والإشعارات" },
      desc: { fr: "E-mails automatiques, rappels, import et export de données, liaison entre vos outils : moins de saisie, moins d'erreurs.",
              en: "Automatic emails, reminders, data import and export, links between your tools: less typing, fewer mistakes.",
              ar: "رسائل بريد تلقائية وتذكيرات واستيراد وتصدير البيانات وربط أدواتك: إدخال أقل وأخطاء أقل." } },
    { group: "online", name: { fr: "Community management", en: "Community management", ar: "إدارة مواقع التواصل الاجتماعي" },
      desc: { fr: "Facebook et Instagram : publications et stories, campagnes sponsorisées, modération des commentaires, rapport mensuel de résultats.",
              en: "Facebook and Instagram: posts and stories, sponsored campaigns, comment moderation, monthly results report.",
              ar: "فيسبوك وإنستغرام: منشورات وستوريز وحملات ممولة وإدارة التعليقات وتقرير شهري بالنتائج." } },
    { group: "online", name: { fr: "Création graphique", en: "Graphic design", ar: "التصميم الغرافيكي" },
      desc: { fr: "Logo, flyers, visuels pour les réseaux sociaux, cartes de visite : une image cohérente pour votre activité.",
              en: "Logo, flyers, social media visuals, business cards: a consistent image for your business.",
              ar: "شعار ومطويات وصور للتواصل الاجتماعي وبطاقات زيارة: صورة متناسقة لنشاطك." } },
    { group: "online", name: { fr: "Référencement Google et Google Maps", en: "Google and Google Maps listing", ar: "الظهور على جوجل وجوجل مابس" },
      desc: { fr: "Votre commerce visible sur Google Maps : adresse, téléphone, horaires, photos, site web. Vos clients vous trouvent facilement.",
              en: "Your business visible on Google Maps: address, phone, opening hours, photos, website. Customers find you easily.",
              ar: "نشاطك ظاهر على جوجل مابس: العنوان والهاتف وأوقات العمل والصور والموقع. عملاؤك يجدونك بسهولة." } },
    { group: "online", name: { fr: "Hébergement, nom de domaine et e-mail pro", en: "Hosting, domain name and business email", ar: "الاستضافة واسم النطاق والبريد المهني" },
      desc: { fr: "Votre site en ligne avec une adresse à votre nom et des e-mails professionnels, sans vous occuper de la technique.",
              en: "Your site online with an address in your name and professional emails, without handling the technical side.",
              ar: "موقعك على الإنترنت بعنوان باسمك وبريد مهني دون أن تهتم بالجانب التقني." } },
    { group: "infra", name: { fr: "Réseaux informatiques et téléphonie", en: "Computer networks and telephony", ar: "الشبكات المعلوماتية والهاتف" },
      desc: { fr: "Installation de réseaux d'entreprise et de standards téléphoniques, avec interconnexion entre les bâtiments.",
              en: "Installation of company networks and phone systems, with links between buildings.",
              ar: "تركيب شبكات المؤسسات والمقاسم الهاتفية مع الربط بين المباني." } },
    { group: "infra", name: { fr: "Fibre optique et télécoms", en: "Fiber optics and telecoms", ar: "الألياف البصرية والاتصالات" },
      desc: { fr: "Fourniture, pose, raccordement et maintenance de réseaux en fibre optique.",
              en: "Supply, installation, connection and maintenance of fiber optic networks.",
              ar: "توريد وتمديد وتوصيل وصيانة شبكات الألياف البصرية." } },
    { group: "infra", name: { fr: "Matériel informatique", en: "IT equipment", ar: "العتاد المعلوماتي" },
      desc: { fr: "Fourniture d'ordinateurs, de pointeuses et d'équipements pour vos bureaux, installés et prêts à l'emploi.",
              en: "Supply of computers, time clocks and office equipment, installed and ready to use.",
              ar: "توريد حواسيب وأجهزة الحضور ومعدات المكاتب جاهزة للاستعمال ومركّبة." } },
    { group: "infra", name: { fr: "Formation, support et mises à jour", en: "Training, support and updates", ar: "التدريب والدعم والتحديثات" },
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
    { id: "coursup", kind: "phone",
      points: [
          { fr: "Un agenda des séances pour chaque enfant", en: "A lesson calendar for each child", ar: "جدول حصص لكل طفل" },
          { fr: "Les paiements aux professeurs et ce qu'il reste à payer", en: "Teacher payments and what is left to pay", ar: "مدفوعات الأساتذة والمتبقي للدفع" },
          { fr: "Rappels automatiques dans Google Agenda", en: "Automatic reminders in Google Calendar", ar: "تذكيرات تلقائية في تقويم جوجل" },
          { fr: "S'installe sur le téléphone comme une application", en: "Installs on your phone like an app", ar: "يُثبَّت على الهاتف كتطبيق" }],
      shots: [
          { src: "assets/img/coursup-1.jpg", alt: { fr: "Accueil : ce qu'il reste à payer", en: "Home: what is left to pay", ar: "الرئيسية: المتبقي للدفع" } },
          { src: "assets/img/coursup-3.jpg", alt: { fr: "Dépenses par mois et par enfant", en: "Spending per month and per child", ar: "المصاريف حسب الشهر والطفل" } },
          { src: "assets/img/coursup-4.jpg", alt: { fr: "Les séances de chaque cours", en: "The sessions of each course", ar: "حصص كل دورة" } }
      ],
      links: [],
      icon: "🎓", url: "https://rayanem-dev.github.io/coursup/",
      name: "Coursup",
      tagline: { fr: "Le suivi des cours particuliers de vos enfants", en: "Track your children's private lessons", ar: "متابعة الدروس الخصوصية لأطفالك" },
      desc: { fr: "Agenda des séances, sessions de cours, paiements aux professeurs et alertes « reste à payer », par enfant. Application installable sur téléphone.",
              en: "Lesson calendar, course sessions, teacher payments and \"left to pay\" alerts, per child. Installable on your phone.",
              ar: "جدول الحصص ودورات الدروس ومدفوعات الأساتذة وتنبيهات «المتبقي للدفع» لكل طفل. قابل للتثبيت على الهاتف." },
      releases: [
        { version: "2026.10.04", date: "2026-10-04", notes: { fr: "Accueil : détail par enfant des paiements à prévoir et des dépenses du mois.", en: "Home: per-child detail of upcoming payments and monthly spending.", ar: "الرئيسية: تفاصيل لكل طفل للمدفوعات القادمة ومصاريف الشهر." } }
      ] },
    { id: "horeca", kind: "web",
      points: [
          { fr: "Une seule saisie : stock, coûts et facturation s'en déduisent", en: "Enter once: stock, costs and invoicing follow", ar: "إدخال واحد: المخزون والتكاليف والفوترة تُستخرج منه" },
          { fr: "Commandes, réceptions et inventaires pour chaque site", en: "Orders, receipts and inventories for each site", ar: "الطلبات والاستلام والجرد لكل موقع" },
          { fr: "Caisse, pertes, incidents et rapport quotidien", en: "Cash, losses, incidents and daily report", ar: "الصندوق والخسائر والحوادث والتقرير اليومي" },
          { fr: "Rapports PDF et Excel, interface en français et en arabe", en: "PDF and Excel reports, French and Arabic interface", ar: "تقارير PDF وExcel وواجهة بالفرنسية والعربية" }],
      shots: [],
      links: [],
      icon: "🍽️", url: "",
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
    { id: "sijil", kind: "web",
      points: [
          { fr: "Pointage en rotation travail/repos, soldes de congé calculés tout seuls", en: "Work/rest rotation attendance, leave balances calculated automatically", ar: "تسجيل الحضور بنظام المناوبة وأرصدة العطل تُحسب تلقائيًا" },
          { fr: "Demandes et documents des agents au même endroit", en: "Agents' requests and documents in one place", ar: "طلبات ووثائق الأعوان في مكان واحد" },
          { fr: "Fiche de pointage, attachement et facture en Excel et PDF", en: "Attendance sheet, attachment and invoice in Excel and PDF", ar: "ورقة الحضور والملحق والفاتورة بصيغتي Excel وPDF" },
          { fr: "Un accès par rôle : agent, chef de groupe, client, administrateur", en: "One access per role: agent, team leader, client, administrator", ar: "صلاحية لكل دور: عون ورئيس فوج وزبون ومدير" }],
      shots: [
          { src: "assets/img/sijil-12-global-mois.jpg", alt: { fr: "Pointage global du mois", en: "Monthly overview", ar: "الحضور العام للشهر" } },
          { src: "assets/img/sijil-10-pointer.jpg", alt: { fr: "Pointer un agent", en: "Marking an agent", ar: "تسجيل حضور عون" } },
          { src: "assets/img/sijil-50-exports.jpg", alt: { fr: "Fiche de pointage, attachement, facture", en: "Attendance sheet, attachment, invoice", ar: "ورقة الحضور والملحق والفاتورة" } },
          { src: "assets/img/sijil-60-agent-accueil.jpg", alt: { fr: "Espace de l'agent", en: "Agent space", ar: "فضاء العون" } },
          { src: "assets/img/sijil-92-arabe.jpg", alt: { fr: "Interface en arabe", en: "Arabic interface", ar: "الواجهة بالعربية" } }
      ],
      links: [{ href: "assets/docs/Sijil-Presentation.pptx", type: "deck" }, { href: "assets/docs/Sijil-Manuel.pdf", type: "manual" }],
      icon: "📒", url: "",
      name: "Sijil",
      tagline: { fr: "La gestion du temps de travail du personnel en rotation", en: "Working time management for rotating staff", ar: "تسيير وقت العمل للمستخدمين بنظام المناوبة" },
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
    fr: { l_deck: "Présentation (PowerPoint)", l_manual: "Manuel (PDF)", shotsNote: "Captures d'écran avec des données fictives", write: "Écrire", features: "Fonctions", soon: "Bientôt", g_dev: "Logiciels et sites", g_online: "Présence en ligne et communication", g_infra: "Réseaux, matériel et accompagnement", services: "Nos services", why: "Pourquoi nous choisir", process: "Comment on travaille", apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Sites web, présentations et logiciels SaaS", heroSub: "Livrés rapidement, avec un rendu professionnel, du premier échange à la mise en service.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { l_deck: "Presentation (PowerPoint)", l_manual: "Manual (PDF)", shotsNote: "Screenshots with sample data", write: "Write to us", features: "Features", soon: "Soon", g_dev: "Software and websites", g_online: "Online presence and communication", g_infra: "Networks, equipment and support", services: "Our services", why: "Why choose us", process: "How we work", apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Websites, presentations and SaaS software", heroSub: "Delivered fast, with a professional finish, from the first conversation to go-live.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { l_deck: "العرض التقديمي (PowerPoint)", l_manual: "الدليل (PDF)", shotsNote: "لقطات شاشة ببيانات تجريبية", write: "راسلنا", features: "المزايا", soon: "قريبًا", g_dev: "البرمجيات والمواقع", g_online: "الحضور الرقمي والتواصل", g_infra: "الشبكات والعتاد والمرافقة", services: "خدماتنا", why: "لماذا نحن", process: "كيف نعمل", apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "مواقع وعروض تقديمية وبرمجيات SaaS", heroSub: "تسليم سريع ومظهر احترافي، من أول حوار حتى الإطلاق.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
