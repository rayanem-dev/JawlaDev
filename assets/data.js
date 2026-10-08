// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "JawlaDev",
  version: "2026.10.08.8",   // à augmenter à chaque livraison (affiché dans le bas de page, publié dans version.json)
  contactPhone: "+213 670 77 97 92",      // téléphone public
  contactWhatsApp: "+213 796 08 79 02",  // WhatsApp public
  contactEmail: "rayanem@gmail.com",   // e-mail public


  // Services proposés (modifiable)
  services: [
    { group: "dev", icon: "🌐", name: { fr: "Sites web et pages de vente", en: "Websites and landing pages", ar: "مواقع الويب وصفحات البيع" },
      desc: { fr: "Site vitrine, portfolio, page de présentation d'un produit. Rapide à charger, adapté au téléphone, en plusieurs langues.",
              en: "Showcase site, portfolio, product page. Fast to load, mobile-friendly, multilingual.",
              ar: "موقع تعريفي ومعرض أعمال وصفحة تقديم منتج. سريع التحميل ومتوافق مع الهاتف ومتعدد اللغات." } },
    { group: "dev", icon: "☁️", name: { fr: "Développement SaaS", en: "SaaS development", ar: "تطوير تطبيقات SaaS" },
      desc: { fr: "Votre logiciel en ligne, prêt à vendre : comptes par entreprise, rôles et droits, période d'essai, tableaux de bord, exports PDF et Excel.",
              en: "Your online software, ready to sell: per-company accounts, roles and permissions, free trial, dashboards, PDF and Excel exports.",
              ar: "برنامجك على الإنترنت جاهز للبيع: حسابات لكل شركة وأدوار وصلاحيات وفترة تجريبية ولوحات قيادة وتصدير PDF وExcel." } },
    { group: "dev", icon: "🧩", name: { fr: "Applications web sur mesure", en: "Custom web applications", ar: "تطبيقات ويب حسب الطلب" },
      desc: { fr: "Gestion de stock, pointage, suivi de paiements, commandes : l'outil qui correspond à votre métier, installable sur l'écran d'accueil.",
              en: "Stock, attendance, payment tracking, orders: the tool that fits your business, installable on the home screen.",
              ar: "إدارة المخزون والحضور ومتابعة المدفوعات والطلبات: الأداة التي تناسب نشاطك وقابلة للتثبيت على الشاشة الرئيسية." } },
    { group: "dev", icon: "📊", name: { fr: "Applications Google Workspace", en: "Google Workspace apps", ar: "تطبيقات Google Workspace" },
      desc: { fr: "Une base Google Sheets avec Apps Script : mise en service rapide, coût d'hébergement très faible, vos données restent dans votre compte.",
              en: "A Google Sheets database with Apps Script: quick to launch, very low hosting cost, your data stays in your account.",
              ar: "قاعدة بيانات Google Sheets مع Apps Script: إطلاق سريع وتكلفة استضافة منخفضة جدًا وبياناتك تبقى في حسابك." } },
    { group: "online", icon: "🎬", name: { fr: "Présentations et kits commerciaux", en: "Presentations and sales kits", ar: "العروض والحقائب التجارية" },
      desc: { fr: "Présentation PowerPoint, manuel utilisateur en PDF, vidéo de démonstration, e-mails de présentation : tout pour convaincre vos clients.",
              en: "PowerPoint presentation, PDF user manual, demo video, introduction emails: everything to win over your customers.",
              ar: "عرض PowerPoint ودليل مستخدم PDF وفيديو توضيحي ورسائل تعريفية: كل ما يلزم لإقناع عملائك." } },
    { group: "dev", icon: "📈", name: { fr: "Tableaux de bord et rapports", en: "Dashboards and reports", ar: "لوحات القيادة والتقارير" },
      desc: { fr: "Indicateurs clairs, rapports filtrables par période et par site, exports PDF et Excel prêts à envoyer.",
              en: "Clear indicators, reports filterable by period and site, PDF and Excel exports ready to send.",
              ar: "مؤشرات واضحة وتقارير قابلة للتصفية حسب الفترة والموقع وتصدير PDF وExcel جاهز للإرسال." } },
    { group: "dev", icon: "⚙️", name: { fr: "Automatisation et notifications", en: "Automation and notifications", ar: "الأتمتة والإشعارات" },
      desc: { fr: "E-mails automatiques, rappels, import et export de données, liaison entre vos outils : moins de saisie, moins d'erreurs.",
              en: "Automatic emails, reminders, data import and export, links between your tools: less typing, fewer mistakes.",
              ar: "رسائل بريد تلقائية وتذكيرات واستيراد وتصدير البيانات وربط أدواتك: إدخال أقل وأخطاء أقل." } },
    { group: "online", icon: "📣", name: { fr: "Community management", en: "Community management", ar: "إدارة مواقع التواصل الاجتماعي" },
      desc: { fr: "Facebook et Instagram : publications et stories, campagnes sponsorisées, modération des commentaires, rapport mensuel de résultats.",
              en: "Facebook and Instagram: posts and stories, sponsored campaigns, comment moderation, monthly results report.",
              ar: "فيسبوك وإنستغرام: منشورات وستوريز وحملات ممولة وإدارة التعليقات وتقرير شهري بالنتائج." } },
    { group: "online", icon: "🎨", name: { fr: "Création graphique", en: "Graphic design", ar: "التصميم الغرافيكي" },
      desc: { fr: "Logo, flyers, visuels pour les réseaux sociaux, cartes de visite : une image cohérente pour votre activité.",
              en: "Logo, flyers, social media visuals, business cards: a consistent image for your business.",
              ar: "شعار ومطويات وصور للتواصل الاجتماعي وبطاقات زيارة: صورة متناسقة لنشاطك." } },
    { group: "online", icon: "📍", name: { fr: "Référencement Google et Google Maps", en: "Google and Google Maps listing", ar: "الظهور على جوجل وجوجل مابس" },
      desc: { fr: "Votre commerce visible sur Google Maps : adresse, téléphone, horaires, photos, site web. Vos clients vous trouvent facilement.",
              en: "Your business visible on Google Maps: address, phone, opening hours, photos, website. Customers find you easily.",
              ar: "نشاطك ظاهر على جوجل مابس: العنوان والهاتف وأوقات العمل والصور والموقع. عملاؤك يجدونك بسهولة." } },
    { group: "online", icon: "🖥️", name: { fr: "Hébergement, nom de domaine et e-mail pro", en: "Hosting, domain name and business email", ar: "الاستضافة واسم النطاق والبريد المهني" },
      desc: { fr: "Votre site en ligne avec une adresse à votre nom et des e-mails professionnels, sans vous occuper de la technique.",
              en: "Your site online with an address in your name and professional emails, without handling the technical side.",
              ar: "موقعك على الإنترنت بعنوان باسمك وبريد مهني دون أن تهتم بالجانب التقني." } }
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

  // Réalisations (design + rédaction commerciale). Les visuels sont anonymisés : nom, partenaires, villes et numéro d'agrément masqués.
  works: [
    {
      "id": "dechets",
      "status": "done",
      "short": {
        "fr": "Offre de service",
        "en": "Service offer",
        "ar": "عرض خدمات"
      },
      "icon": "♻️",
      "color": "#2F7D5B",
      "images": [
        {
          "src": "assets/img/work-dechets-fr-01.jpg",
          "alt": {
            "fr": "Couverture de l'offre en français : un camion devant un site industriel",
            "en": "French cover of the offer: a truck in front of an industrial site",
            "ar": "غلاف العرض بالفرنسية: شاحنة أمام موقع صناعي"
          }
        },
        {
          "src": "assets/img/work-dechets-fr-02.jpg",
          "alt": {
            "fr": "Page de présentation et d'agrément",
            "en": "Company and license presentation page",
            "ar": "صفحة تقديم المؤسسة والاعتماد"
          }
        },
        {
          "src": "assets/img/work-dechets-fr-03.jpg",
          "alt": {
            "fr": "Déchets pris en charge : batteries usagées, métaux ferreux et non ferreux",
            "en": "Waste accepted: used batteries, ferrous and non-ferrous metals",
            "ar": "النفايات المعالجة: البطاريات المستعملة والمعادن الحديدية وغير الحديدية"
          }
        },
        {
          "src": "assets/img/work-dechets-fr-04.jpg",
          "alt": {
            "fr": "Méthode de collecte en cinq étapes et filière de recyclage",
            "en": "Five-step collection method and recycling chain",
            "ar": "منهجية الجمع في خمس مراحل ومسار إعادة التدوير"
          }
        },
        {
          "src": "assets/img/work-dechets-fr-05.jpg",
          "alt": {
            "fr": "Chantiers en images : pelles de manutention, aire de tri, chargement de ferrailles",
            "en": "Worksites in pictures: material handlers, sorting area, scrap loading",
            "ar": "الأوراش بالصور: رافعات المناولة ومنطقة الفرز وتحميل الخردة"
          }
        },
        {
          "src": "assets/img/work-dechets-fr-06.jpg",
          "alt": {
            "fr": "Moyens matériels et humains : flotte, engins et équipe",
            "en": "Resources: fleet, machines and team",
            "ar": "الوسائل المادية والبشرية: الأسطول والآليات والفريق"
          }
        },
        {
          "src": "assets/img/work-dechets-ar-01.jpg",
          "alt": {
            "fr": "Couverture de la version arabe, lecture de droite à gauche",
            "en": "Cover of the Arabic version, right-to-left",
            "ar": "غلاف النسخة العربية من اليمين إلى اليسار"
          }
        },
        {
          "src": "assets/img/work-dechets-ar-05.jpg",
          "alt": {
            "fr": "Page des chantiers en images, en arabe",
            "en": "Worksites page in Arabic",
            "ar": "صفحة الأوراش بالصور بالعربية"
          }
        }
      ],
      "title": {
        "fr": "Offre de service et identité visuelle pour un collecteur de déchets agréé",
        "en": "Service offer and visual identity for a licensed waste collector",
        "ar": "عرض خدمات وهوية بصرية لجامع نفايات معتمد"
      },
      "sector": {
        "fr": "Environnement · collecte de déchets spéciaux (Algérie)",
        "en": "Environment · special waste collection (Algeria)",
        "ar": "البيئة · جمع النفايات الخاصة (الجزائر)"
      },
      "badge": {
        "fr": "Bilingue FR / AR",
        "en": "Bilingual FR / AR",
        "ar": "ثنائي اللغة FR / AR"
      },
      "summary": {
        "fr": "Transformer des pièces administratives en une offre de service claire, rassurante et prête à joindre à un e-mail de prospection, avec une identité visuelle et une papeterie assorties.",
        "en": "Turning administrative papers into a clear, reassuring service offer, ready to attach to a prospecting email, with matching visual identity and stationery.",
        "ar": "تحويل الوثائق الإدارية إلى عرض خدمات واضح ومطمئن وجاهز للإرفاق برسالة تسويقية، مع هوية بصرية وقرطاسية متناسقة."
      },
      "context": {
        "fr": "Un collecteur de déchets agréé par le Ministère de l'Environnement et des Énergies Renouvelables voulait prospecter les compagnies pétrolières et les entreprises étrangères. Il avait un agrément, des camions et des conventions avec des unités de recyclage, mais aucun document commercial structuré.",
        "en": "A waste collector licensed by the Ministry of Environment and Renewable Energies wanted to approach oil companies and foreign firms. It had a license, trucks and agreements with recycling units, but no structured sales document.",
        "ar": "كان جامع نفايات معتمد من وزارة البيئة والطاقات المتجددة يرغب في التواصل مع شركات النفط والشركات الأجنبية. كان يملك الاعتماد والشاحنات واتفاقيات مع وحدات إعادة التدوير، لكن دون أي وثيقة تجارية منظمة."
      },
      "content": {
        "fr": "Présentation de l'entreprise, agrément et cadre réglementaire, déchets pris en charge, méthode de collecte en cinq étapes, filière de recyclage, moyens, sécurité et traçabilité, bénéfices pour le client, contact.",
        "en": "Company presentation, license and regulatory framework, waste accepted, five-step collection method, recycling chain, resources, safety and traceability, customer benefits, contact.",
        "ar": "تقديم المؤسسة، الاعتماد والإطار القانوني، النفايات المعالجة، منهجية الجمع في خمس مراحل، مسار إعادة التدوير، الوسائل، السلامة والتتبع، فوائد العميل، الاتصال."
      },
      "deliverables": [
        {
          "fr": "Offre de service PDF, format A4, 8 pages, en français et en arabe",
          "en": "Service offer PDF, A4, 8 pages, in French and Arabic",
          "ar": "عرض خدمات PDF بحجم A4 من 8 صفحات بالفرنسية والعربية"
        },
        {
          "fr": "Présentation PowerPoint 16:9 de 14 diapositives, en français et en arabe",
          "en": "16:9 PowerPoint presentation of 14 slides, in French and Arabic",
          "ar": "عرض تقديمي PowerPoint بنسبة 16:9 من 14 شريحة بالفرنسية والعربية"
        },
        {
          "fr": "E-mail de présentation bilingue en HTML, prêt à envoyer",
          "en": "Bilingual HTML introduction email, ready to send",
          "ar": "رسالة تعريفية ثنائية اللغة بصيغة HTML جاهزة للإرسال"
        },
        {
          "fr": "Identité visuelle : logo décliné (horizontal en français et en arabe, empilé, icône, avatar), planche de présentation",
          "en": "Visual identity: logo in several versions (horizontal in French and Arabic, stacked, icon, avatar), presentation board",
          "ar": "هوية بصرية: شعار بعدة صيغ (أفقي بالفرنسية والعربية، عمودي، أيقونة، صورة رمزية) ولوحة عرض"
        },
        {
          "fr": "Papeterie : cartes de visite bilingues 85 × 55 mm prêtes pour l'imprimeur, papier à en-tête A4 portrait et paysage, modèles Word",
          "en": "Stationery: bilingual 85 × 55 mm business cards ready for the printer, A4 portrait and landscape letterhead, Word templates",
          "ar": "القرطاسية: بطاقات زيارة ثنائية اللغة 85 × 55 مم جاهزة للطباعة، ورق مراسلة A4 عمودي وأفقي، قوالب Word"
        }
      ],
      "design": [
        {
          "fr": "Charte graphique dédiée (vert profond et ambre), identique sur tous les supports, du logo aux documents imprimés",
          "en": "Dedicated visual identity (deep green and amber), identical on every medium, from the logo to printed documents",
          "ar": "هوية بصرية خاصة (أخضر داكن وعنبري) موحّدة على كل الوسائط، من الشعار إلى الوثائق المطبوعة"
        },
        {
          "fr": "Logo : un symbole qui relie l'identité de l'entreprise à son métier, le recyclage",
          "en": "Logo: a symbol linking the company's identity to its trade, recycling",
          "ar": "الشعار: رمز يربط هوية المؤسسة بمهنتها، إعادة التدوير"
        },
        {
          "fr": "Version arabe construite pour la lecture de droite à gauche, avec une typographie soignée",
          "en": "Arabic version built for right-to-left reading, with refined typography",
          "ar": "نسخة عربية مبنية للقراءة من اليمين إلى اليسار بخط عربي أنيق"
        },
        {
          "fr": "Illustrations vectorielles originales : site industriel, camion, batterie, lingots",
          "en": "Original vector illustrations: industrial site, truck, battery, ingots",
          "ar": "رسوم متجهة أصلية: موقع صناعي وشاحنة وبطارية وسبائك"
        },
        {
          "fr": "Texte rédigé uniquement à partir des documents officiels du client, sans chiffre inventé",
          "en": "Text written only from the client's official documents, no invented figures",
          "ar": "نص مكتوب من الوثائق الرسمية للعميل فقط دون أي رقم مخترع"
        },
        {
          "fr": "Page « Références » construite à partir de cinq attestations de bonne exécution (BTP, recyclage, commerce de métaux)",
          "en": "\"References\" page built from five certificates of good performance (construction, recycling, metal trading)",
          "ar": "صفحة «المراجع» مبنية على خمس شهادات حسن تنفيذ (البناء وإعادة التدوير وتجارة المعادن)"
        }
      ]
    }
  ],

  // Applis terminées. Le code reste privé : on n'affiche que des notes de version (pas de téléchargement).
  // "url" = adresse de l'appli en ligne ; si vide, le bouton devient "Demander une démo".
  apps: [
    { id: "darsy", stage: "alpha", color: "#A8603A", logo: "assets/img/logo-darsy.png", logoFill: true, kind: "phone",
      points: [
          { fr: "Un agenda des séances pour chaque enfant", en: "A lesson calendar for each child", ar: "جدول حصص لكل طفل" },
          { fr: "Les paiements aux professeurs et ce qu'il reste à payer", en: "Teacher payments and what is left to pay", ar: "مدفوعات الأساتذة والمتبقي للدفع" },
          { fr: "Rappels automatiques dans Google Agenda", en: "Automatic reminders in Google Calendar", ar: "تذكيرات تلقائية في تقويم جوجل" },
          { fr: "S'installe sur le téléphone comme une application", en: "Installs on your phone like an app", ar: "يُثبَّت على الهاتف كتطبيق" }],
      shots: [
          { src: "assets/img/darsy-1.jpg", alt: { fr: "Accueil : séances de la semaine et reste à payer", en: "Home: this week's sessions and what is left to pay", ar: "الرئيسية: حصص الأسبوع والمتبقي للدفع" } },
          { src: "assets/img/darsy-2.jpg", alt: { fr: "Les séances de chaque cours", en: "The sessions of each course", ar: "حصص كل دورة" } },
          { src: "assets/img/darsy-3.jpg", alt: { fr: "Enregistrer un nouveau paiement", en: "Recording a new payment", ar: "تسجيل دفعة جديدة" } }
      ],
      links: [],
      icon: "🎓", url: "https://rayanem-dev.github.io/darsy/",
      name: "Darsy+ / درسي+",
      tagline: { fr: "Suivi des cours particuliers, des paiements et des rappels", en: "Tracking of private lessons, payments and reminders", ar: "متابعة الدروس الخصوصية والمدفوعات والتذكيرات" },
      desc: { fr: "Suivi des cours particuliers, des paiements et des rappels", en: "Tracking of private lessons, payments and reminders", ar: "متابعة الدروس الخصوصية والمدفوعات والتذكيرات" },
      releases: [
        { version: "2026.10.10", date: "2026-10-10", notes: { fr: "Carte « Version » dans les Réglages.", en: "\"Version\" card in Settings.", ar: "بطاقة «الإصدار» في الإعدادات." } }
      ] },
    { id: "horeca", stage: "beta", color: "#1F8A70", kind: "web",
      points: [
          { fr: "Une seule saisie : stock, coûts et facturation s'en déduisent", en: "Enter once: stock, costs and invoicing follow", ar: "إدخال واحد: المخزون والتكاليف والفوترة تُستخرج منه" },
          { fr: "Commandes, réceptions et inventaires pour chaque site", en: "Orders, receipts and inventories for each site", ar: "الطلبات والاستلام والجرد لكل موقع" },
          { fr: "Caisse, pertes, incidents et rapport quotidien", en: "Cash, losses, incidents and daily report", ar: "الصندوق والخسائر والحوادث والتقرير اليومي" },
          { fr: "Rapports PDF et Excel, interface en français et en arabe", en: "PDF and Excel reports, French and Arabic interface", ar: "تقارير PDF وExcel وواجهة بالفرنسية والعربية" }],
      shots: [
          { src: "assets/img/horeca-dashboard.jpg", alt: { fr: "Tableau de bord : jauges et points à traiter", en: "Dashboard: gauges and items to handle", ar: "لوحة القيادة: مؤشرات ومهام للمعالجة" } },
          { src: "assets/img/horeca-bons-commande.jpg", alt: { fr: "Bons de commande fournisseurs", en: "Supplier purchase orders", ar: "طلبيات الشراء للموردين" } },
          { src: "assets/img/horeca-caisse-suivi.jpg", alt: { fr: "Caisse de chaque site", en: "Cash of each site", ar: "صندوق كل موقع" } },
          { src: "assets/img/horeca-rapports-resultat.jpg", alt: { fr: "Rapports filtrables par période et par site", en: "Reports filterable by period and site", ar: "تقارير قابلة للتصفية حسب الفترة والموقع" } },
          { src: "assets/img/horeca-langue-arabe.jpg", alt: { fr: "Interface en arabe", en: "Arabic interface", ar: "الواجهة بالعربية" } }
      ],
      links: [],
      icon: "🍽️", url: "",
      name: "Horeca",
      tagline: { fr: "La gestion complète d'une restauration collective multi-sites", en: "Complete multi-site catering management", ar: "إدارة متكاملة للإطعام الجماعي متعدد المواقع" },
      desc: { fr: "Achats, bons de commande, stock, commandes et réceptions par site, caisse, inventaires, pertes, incidents, rapports PDF/Excel, tableau de bord du gérant. Interface en français et en arabe.",
              en: "Purchasing, purchase orders, stock, orders and receipts per site, cash, inventories, losses, incidents, PDF/Excel reports, manager dashboard. French and Arabic interface.",
              ar: "المشتريات وطلبيات الشراء والمخزون والطلبات والاستلام لكل موقع، الصندوق والجرد والخسائر والحوادث، تقارير PDF/Excel ولوحة قيادة للمسيّر. واجهة بالفرنسية والعربية." },
      releases: [
        { version: "v22", date: "2026-10", notes: { fr: "Version PHP / MySQL (essai).", en: "PHP / MySQL version (trial).", ar: "نسخة PHP / MySQL (تجريبية)." } },
        { version: "v21", date: "2026-10", notes: { fr: "Démonstration complète de bout en bout.", en: "Complete end-to-end demo.", ar: "عرض تجريبي كامل من البداية إلى النهاية." } },
        { version: "v20", date: "2026-10", notes: { fr: "Application installable sur l'écran d'accueil (PWA).", en: "Installable on the home screen (PWA).", ar: "تطبيق قابل للتثبيت على الشاشة الرئيسية." } }
      ] },
    { id: "sijil", demo: "https://rayanem-dev.github.io/pointage-app/", stage: "beta", color: "#2A6FDB", logo: "assets/img/logo-sijil.png", kind: "web",
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
      links: [{ href: "assets/docs/Sijil-Presentation.pptx", type: "deck" }],
      icon: "📒", url: "",
      name: "Sijil / سجل",
      tagline: { fr: "La gestion du temps de travail du personnel en rotation", en: "Working time management for rotating staff", ar: "تسيير وقت العمل للمستخدمين بنظام المناوبة" },
      desc: { fr: "Rotation travail/repos, soldes, demandes (congés, attestations…), documents, exports fiche de pointage, attachement et facture en Excel et PDF. Multi-entreprises, application installable.",
              en: "Work/rest rotation, balances, requests (leave, certificates…), documents, attendance sheet, attachment and invoice exports in Excel and PDF. Multi-company, installable.",
              ar: "نظام المناوبة عمل/راحة، الأرصدة، الطلبات (عطل، شهادات…)، الوثائق، تصدير ورقة الحضور والملحق والفاتورة بصيغتي Excel وPDF. متعدد الشركات وقابل للتثبيت." },
      releases: [
        { version: "3.31.2", date: "2026-10-08", notes: { fr: "Page d'accueil épurée.", en: "Simplified home page.", ar: "صفحة رئيسية أبسط." } },
        { version: "3.31.0", date: "2026-10-06", notes: { fr: "E-mails aux couleurs de Sijil.", en: "Emails in Sijil's colors.", ar: "رسائل بريد بألوان Sijil." } },
        { version: "3.29.5", date: "2026-10-06", notes: { fr: "Dates toujours visibles dans la grille de pointage.", en: "Dates always visible in the attendance grid.", ar: "التواريخ ظاهرة دائمًا في جدول الحضور." } }
      ] }
  ],

  // Projets en cours de développement avec jauge (progress = 0..100)
  upcoming: [
    // progress : pourcentage d'avancement (0 à 100), ou null tant qu'il n'est pas connu
    { id: "siraj", icon: "🚧", logo: "assets/img/logo-siraj.png", logoFill: true, progress: 80, name: "Siraj / سراج", desc: { fr: "Gestion intelligente et simple pour les écoles de soutien : cours, séances, élèves, paiements, évaluation et calendriers partagés.", en: "Smart, simple management for tutoring schools: courses, sessions, students, payments, evaluation and shared calendars.", ar: "إدارة ذكية وبسيطة لمدارس الدعم: الدروس والحصص والتلاميذ والمدفوعات والتقييم والتقاويم المشتركة." } },
    { id: "siraj-pro", icon: "🚧", logo: "assets/img/logo-siraj.png", logoFill: true, corner: "PRO", progress: 5, name: "Siraj Pro / سراج برو", desc: null }
  ],

  i18n: {
    fr: { demoMsg: "Bonjour, je souhaite une démonstration de {app}.", tipServices: "Sites web, logiciels SaaS, présentations, community management, référencement Google et plus.", tipContact: "Téléphone, WhatsApp et e-mail pour une démonstration ou un devis.", beta: "Bêta", alpha: "Alpha", inprog: "En cours", done: "Terminé", phone: "Téléphone", call: "Appeler", chat: "Écrire sur WhatsApp", contactSoon: "Nos coordonnées seront publiées très bientôt.", works: "Réalisations", w_ctx: "Contexte", w_content: "Contenu", w_liv: "Livrables", w_design: "Conception", homeTag: "Sites web, présentations et logiciels SaaS. Rapides, professionnels.", home: "Accueil", copy: "Copier", copied: "Copié", versions: "Versions", w1: "Rapide", w2: "Professionnel", w3: "Accompagné", l_deck: "Présentation (PowerPoint)", l_manual: "Manuel (PDF)", shotsNote: "Captures d'écran avec des données fictives", write: "Écrire", features: "Fonctions", soon: "Bientôt", g_dev: "Logiciels et sites", g_online: "Présence en ligne et communication", services: "Nos services", why: "Pourquoi nous choisir", process: "Comment on travaille", apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Sites web, présentations et logiciels SaaS", heroSub: "Livrés rapidement, avec un rendu professionnel, du premier échange à la mise en service.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { demoMsg: "Hello, I would like a demo of {app}.", tipServices: "Websites, SaaS software, presentations, community management, Google listing and more.", tipContact: "Phone, WhatsApp and email for a demo or a quote.", beta: "Beta", alpha: "Alpha", inprog: "In progress", done: "Done", phone: "Phone", call: "Call", chat: "Message on WhatsApp", contactSoon: "Our contact details will be published very soon.", works: "Our work", w_ctx: "Context", w_content: "Content", w_liv: "Deliverables", w_design: "Design", homeTag: "Websites, presentations and SaaS software. Fast, professional.", home: "Home", copy: "Copy", copied: "Copied", versions: "Versions", w1: "Fast", w2: "Professional", w3: "Supported", l_deck: "Presentation (PowerPoint)", l_manual: "Manual (PDF)", shotsNote: "Screenshots with sample data", write: "Write to us", features: "Features", soon: "Soon", g_dev: "Software and websites", g_online: "Online presence and communication", services: "Our services", why: "Why choose us", process: "How we work", apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Websites, presentations and SaaS software", heroSub: "Delivered fast, with a professional finish, from the first conversation to go-live.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { demoMsg: "مرحبًا، أرغب في عرض تجريبي لتطبيق {app}.", tipServices: "مواقع ويب وبرمجيات SaaS وعروض تقديمية وإدارة مواقع التواصل والظهور على جوجل وأكثر.", tipContact: "الهاتف وواتساب والبريد الإلكتروني لطلب عرض تجريبي أو عرض سعر.", beta: "بيتا", alpha: "ألفا", inprog: "قيد التطوير", done: "منتهٍ", phone: "الهاتف", call: "اتصال", chat: "راسلنا على واتساب", contactSoon: "سيتم نشر بيانات الاتصال قريبًا جدًا.", works: "أعمالنا", w_ctx: "السياق", w_content: "المحتوى", w_liv: "المخرجات", w_design: "التصميم", homeTag: "مواقع وعروض تقديمية وبرمجيات SaaS. سريعة واحترافية.", home: "الرئيسية", copy: "نسخ", copied: "تم النسخ", versions: "الإصدارات", w1: "سريع", w2: "احترافي", w3: "مُرافَق", l_deck: "العرض التقديمي (PowerPoint)", l_manual: "الدليل (PDF)", shotsNote: "لقطات شاشة ببيانات تجريبية", write: "راسلنا", features: "المزايا", soon: "قريبًا", g_dev: "البرمجيات والمواقع", g_online: "الحضور الرقمي والتواصل", services: "خدماتنا", why: "لماذا نحن", process: "كيف نعمل", apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "مواقع وعروض تقديمية وبرمجيات SaaS", heroSub: "تسليم سريع ومظهر احترافي، من أول حوار حتى الإطلاق.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
