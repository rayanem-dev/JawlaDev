// ====== TOUT SE MODIFIE ICI : marque, applis, projets en cours, textes ======
window.PORTAL = {
  brand: "JawlaDev",
  version: "2026.10.09.1",   // à augmenter à chaque livraison (affiché dans le bas de page, publié dans version.json)
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
    { id: "darsy", liveLogo: "https://rayanem-dev.github.io/darsy/icon-512.png", feed: "https://rayanem-dev.github.io/darsy/version.json", changelog: "https://raw.githubusercontent.com/rayanem-dev/darsy/main/CHANGELOG.md", pitch: {"intro": {"fr": "Les cours particuliers des enfants, c'est un agenda éclaté, des paiements aux professeurs suivis de mémoire et des rappels qu'on oublie. Darsy+ réunit tout, pour toute la famille.", "en": "Private lessons for children means a scattered schedule, teacher payments tracked from memory and forgotten reminders. Darsy+ brings it all together for the whole family.", "ar": "الدروس الخصوصية للأطفال تعني جدولاً مبعثراً ومدفوعات أساتذة تُتابَع بالذاكرة وتذكيرات تُنسى. يجمع «درسي+» كل شيء لجميع أفراد العائلة."}, "groups": [{"t": {"fr": "Enfants et cours", "en": "Children and courses", "ar": "الأطفال والدروس"}, "items": [{"fr": "Plusieurs enfants, chacun avec ses cours", "en": "Several children, each with their own courses", "ar": "عدة أطفال، ولكل طفل دروسه"}, {"fr": "Matière, professeur, prix de la session, séances par session, jours et horaire", "en": "Subject, teacher, session price, lessons per session, days and time", "ar": "المادة والأستاذ وسعر الدورة وعدد الحصص والأيام والتوقيت"}, {"fr": "Les séances sont créées toutes seules", "en": "Lessons are created automatically", "ar": "تُنشأ الحصص تلقائياً"}]}, {"t": {"fr": "Agenda de la semaine", "en": "Weekly schedule", "ar": "جدول الأسبوع"}, "items": [{"fr": "Accueil : séances de la semaine (elle commence le dimanche), reste à payer, paiements à prévoir", "en": "Home: this week's lessons (the week starts on Sunday), what is left to pay, upcoming payments", "ar": "الرئيسية: حصص الأسبوع (يبدأ يوم الأحد) والمتبقي للدفع والمدفوعات المنتظرة"}, {"fr": "Cocher une séance faite en un geste", "en": "Tick off a lesson in one tap", "ar": "تأشير الحصة المنجزة بنقرة"}, {"fr": "Non faite : la séance est décalée ; ratée : elle est comptée perdue", "en": "Not done: the lesson is postponed; missed: it counts as lost", "ar": "لم تتم: تُؤجَّل الحصة؛ فائتة: تُحسب ضائعة"}, {"fr": "Changer l'heure d'une séance ; corbeille avec « Restaurer »", "en": "Change a lesson's time; bin with “Restore”", "ar": "تغيير توقيت حصة؛ سلة محذوفات مع «استعادة»"}]}, {"t": {"fr": "Paiements", "en": "Payments", "ar": "المدفوعات"}, "items": [{"fr": "Payer une session en un geste, avec pastille rouge (en attente) ou orange (bientôt)", "en": "Pay a session in one tap, with a red (pending) or orange (soon) badge", "ar": "دفع دورة بنقرة، مع شارة حمراء (في الانتظار) أو برتقالية (قريباً)"}, {"fr": "Reste à payer et jauge d'avancement de chaque session", "en": "What is left to pay and a progress gauge for each session", "ar": "المتبقي للدفع ومؤشر تقدّم كل دورة"}, {"fr": "Dépenses mois par mois et enfant par enfant", "en": "Spending month by month and child by child", "ar": "المصاريف شهراً بشهر وطفلاً بطفل"}, {"fr": "Vue Sessions : session 1, 2, 3… faites, à venir, payées ou non", "en": "Sessions view: session 1, 2, 3… done, upcoming, paid or not", "ar": "عرض الدورات: الدورة 1 و2 و3… منجزة وقادمة ومدفوعة أم لا"}]}, {"t": {"fr": "Cas particuliers", "en": "Special cases", "ar": "حالات خاصة"}, "items": [{"fr": "Session offerte : paiement de 0 DA", "en": "Free session: payment of 0 DA", "ar": "دورة مجانية: دفعة بقيمة 0 د.ج"}, {"fr": "Rattrapage d'une première session partielle", "en": "Catch-up for a partial first session", "ar": "تدارك دورة أولى جزئية"}, {"fr": "Frais d'inscription demandés une seule fois ; session unique", "en": "Registration fee asked only once; single session", "ar": "رسوم التسجيل تُطلب مرة واحدة؛ دورة واحدة"}, {"fr": "Tarif libre : gestes de remerciement, jamais d'impayé", "en": "Free rate: thank-you gestures, never an unpaid alert", "ar": "تعريفة حرة: هدايا شكر، دون أي متأخرات"}]}, {"t": {"fr": "Rappels et famille", "en": "Reminders and family", "ar": "التذكيرات والعائلة"}, "items": [{"fr": "Rappels automatiques dans Google Agenda", "en": "Automatic reminders in Google Calendar", "ar": "تذكيرات تلقائية في تقويم جوجل"}, {"fr": "Inviter jusqu'à 5 personnes de la famille par e-mail", "en": "Invite up to 5 family members by e-mail", "ar": "دعوة حتى 5 أفراد من العائلة عبر البريد"}, {"fr": "Case « Rester connecté » pendant 30 jours", "en": "“Stay signed in” option for 30 days", "ar": "خيار «البقاء متصلاً» لمدة 30 يوماً"}]}, {"t": {"fr": "Données et confort", "en": "Data and comfort", "ar": "البيانات والراحة"}, "items": [{"fr": "Sauvegarde : exporter, importer ou vider ses données", "en": "Backup: export, import or clear your data", "ar": "نسخ احتياطي: تصدير البيانات أو استيرادها أو مسحها"}, {"fr": "Un fichier Google Sheets par compte : rien n'est mélangé avec d'autres familles", "en": "One Google Sheets file per account: nothing mixed with other families", "ar": "ملف Google Sheets لكل حساب: لا اختلاط مع عائلات أخرى"}, {"fr": "Français, arabe, anglais ; mode clair ou sombre ; thème de couleurs au choix", "en": "French, Arabic, English; light or dark mode; colour theme of your choice", "ar": "العربية والفرنسية والإنجليزية؛ وضع فاتح أو داكن؛ ألوان على اختيارك"}, {"fr": "S'installe sur le téléphone comme une vraie application", "en": "Installs on your phone like a real app", "ar": "يُثبَّت على الهاتف كتطبيق حقيقي"}]}], "outro": {"fr": "Aide intégrée avec guides pas à pas et captures (bouton « ? »).", "en": "Built-in help with step-by-step guides and screenshots (“?” button).", "ar": "مساعدة مدمجة بأدلة خطوة بخطوة ولقطات (زر «؟»)."}}, stage: "alpha", color: "#3B5BDB", logo: "assets/img/logo-darsy.png", logoFill: true, kind: "phone",
      points: [
          { fr: "Un agenda des séances pour chaque enfant", en: "A lesson calendar for each child", ar: "جدول حصص لكل طفل" },
          { fr: "Les paiements aux professeurs et ce qu'il reste à payer", en: "Teacher payments and what is left to pay", ar: "مدفوعات الأساتذة والمتبقي للدفع" },
          { fr: "Rappels automatiques dans Google Agenda", en: "Automatic reminders in Google Calendar", ar: "تذكيرات تلقائية في تقويم جوجل" },
          { fr: "S'installe sur le téléphone comme une application", en: "Installs on your phone like an app", ar: "يُثبَّت على الهاتف كتطبيق" }],
      shots: [
          { src: "assets/img/darsy-1.jpg", srcAr: "assets/img/darsy-ar-1.jpg", alt: { fr: "Accueil : séances de la semaine et reste à payer", en: "Home: this week's sessions and what is left to pay", ar: "الرئيسية: حصص الأسبوع والمتبقي للدفع" } },
          { src: "assets/img/darsy-2.jpg", srcAr: "assets/img/darsy-ar-2.jpg", alt: { fr: "Les séances de chaque cours", en: "The sessions of each course", ar: "حصص كل دورة" } },
          { src: "assets/img/darsy-3.jpg", srcAr: "assets/img/darsy-ar-3.jpg", alt: { fr: "Enregistrer un nouveau paiement", en: "Recording a new payment", ar: "تسجيل دفعة جديدة" } }
      ],
      links: [],
      icon: "🎓", url: "https://rayanem-dev.github.io/darsy/",
      name: "Darsy+ / درسي+",
      tagline: { fr: "Suivi des cours particuliers, des paiements et des rappels", en: "Tracking of private lessons, payments and reminders", ar: "متابعة الدروس الخصوصية والمدفوعات والتذكيرات" },
      desc: { fr: "Suivi des cours particuliers, des paiements et des rappels", en: "Tracking of private lessons, payments and reminders", ar: "متابعة الدروس الخصوصية والمدفوعات والتذكيرات" },
      releases: [
        { version: "2026.10.10", date: "2026-10-10", notes: { fr: "Carte « Version » dans les Réglages.", en: "\"Version\" card in Settings.", ar: "بطاقة «الإصدار» في الإعدادات." } }
      ] },
    { id: "horeca", pitch: {"intro": {"fr": "Dans la restauration, chaque site a ses stocks, ses menus, ses fournisseurs et ses incidents, et la direction n'a la vue d'ensemble qu'à la fin du mois. Horeca la donne chaque jour, de la commande au repas facturé.", "en": "In catering, each site has its own stock, menus, suppliers and incidents, and management only gets the overview at month end. Horeca gives it every day, from the order to the invoiced meal.", "ar": "في المطاعم، لكل موقع مخزونه وقوائمه وموردوه وحوادثه، ولا تملك الإدارة الصورة الشاملة إلا في نهاية الشهر. يمنحها «هوريكا» كل يوم، من الطلب إلى الوجبة المفوترة."}, "groups": [{"t": {"fr": "Commandes et achats", "en": "Orders and purchasing", "ar": "الطلبات والمشتريات"}, "items": [{"fr": "Commande en un clic depuis le stock : l'application calcule ce qu'il faut commander", "en": "One-click ordering from stock: the app works out what to order", "ar": "طلب بنقرة من المخزون: يحسب التطبيق ما يلزم طلبه"}, {"fr": "Commandes des sites validées par la direction, puis expédiées", "en": "Site orders validated by management, then shipped", "ar": "طلبات المواقع تُعتمد من الإدارة ثم تُشحن"}, {"fr": "Catalogue produits avec import Excel ; achats et bons de commande fournisseurs", "en": "Product catalogue with Excel import; purchases and supplier purchase orders", "ar": "كتالوج المنتجات مع استيراد Excel؛ مشتريات وأوامر شراء للموردين"}, {"fr": "Réceptions contrôlées, avec traitement des anomalies", "en": "Controlled deliveries, with handling of discrepancies", "ar": "استلام مراقَب مع معالجة الفروقات"}]}, {"t": {"fr": "Cuisine et production", "en": "Kitchen and production", "ar": "المطبخ والإنتاج"}, "items": [{"fr": "Effectifs prévus, préparés et servis", "en": "Planned, prepared and served headcounts", "ar": "الأعداد المتوقعة والمحضّرة والمقدَّمة"}, {"fr": "Recettes (fiches techniques) : coût par personne calculé", "en": "Recipes (technical sheets): cost per person calculated", "ar": "وصفات (بطاقات فنية): تكلفة الفرد محسوبة"}, {"fr": "Menus, menu du jour et bons de sortie signés : le stock se met à jour tout seul", "en": "Menus, menu of the day and signed issue slips: stock updates by itself", "ar": "القوائم وقائمة اليوم وسندات إخراج موقّعة: يتحدّث المخزون تلقائياً"}, {"fr": "Sortie libre hors menu ; pertes et gaspillage valorisés", "en": "Free issue outside the menu; losses and waste valued", "ar": "إخراج حر خارج القائمة؛ الخسائر والهدر بقيمتها"}]}, {"t": {"fr": "Stock", "en": "Stock", "ar": "المخزون"}, "items": [{"fr": "Stock central, stock de chaque site et stock global réel", "en": "Central stock, each site's stock and real overall stock", "ar": "مخزون مركزي ومخزون كل موقع والمخزون الفعلي الإجمالي"}, {"fr": "Cessions entre sites", "en": "Transfers between sites", "ar": "تحويلات بين المواقع"}, {"fr": "Inventaires physiques avec écarts", "en": "Physical inventories with discrepancies", "ar": "جرد فعلي مع الفروقات"}]}, {"t": {"fr": "Facturation et finances", "en": "Invoicing and finance", "ar": "الفوترة والمالية"}, "items": [{"fr": "Attachements client journaliers et mensuels, signés, prix figés à la signature", "en": "Daily and monthly client statements, signed, prices frozen at signing", "ar": "كشوف الزبون اليومية والشهرية موقّعة بأسعار مثبّتة عند التوقيع"}, {"fr": "Finances et paiements fournisseurs (DAF) ; dettes par ancienneté", "en": "Finance and supplier payments (CFO); debts by age", "ar": "المالية ومدفوعات الموردين؛ الديون حسب القِدَم"}, {"fr": "Prévisions et écarts ; coût matière comparé à l'objectif", "en": "Forecasts and variances; food cost compared with target", "ar": "التوقعات والفروقات؛ تكلفة المواد مقارنة بالهدف"}]}, {"t": {"fr": "Caisse et qualité", "en": "Cash box and quality", "ar": "الصندوق والجودة"}, "items": [{"fr": "Caisse de site tracée : demande de fonds, achats locaux, clôture ; chaque dépense entre en stock au prix payé", "en": "Traced site cash box: funds request, local purchases, closing; each expense enters stock at the price paid", "ar": "صندوق موقع مُتتبَّع: طلب أموال ومشتريات محلية وإقفال؛ وكل مصروف يدخل المخزون بالسعر المدفوع"}, {"fr": "Incidents et réclamations ; rapport quotidien de chaque base", "en": "Incidents and complaints; daily report for each site", "ar": "حوادث وشكاوى؛ تقرير يومي لكل قاعدة"}, {"fr": "Signature électronique nominative avec sceau vérifiable sur chaque PDF", "en": "Named e-signature with a verifiable seal on each PDF", "ar": "توقيع إلكتروني باسم صاحبه مع ختم قابل للتحقق على كل ملف PDF"}]}, {"t": {"fr": "Pilotage et rôles", "en": "Management and roles", "ar": "القيادة والأدوار"}, "items": [{"fr": "Tableau de bord par profil : la direction voit tous les sites, chaque responsable voit les siens", "en": "Dashboard per profile: management sees every site, each manager sees their own", "ar": "لوحة قيادة لكل صفة: ترى الإدارة كل المواقع ويرى كل مسؤول موقعه"}, {"fr": "8 rôles : gérant, DOP, coordinateur, acheteur, DAF, responsable de base, chef de cuisine, magasinier", "en": "8 roles: general manager, operations director, coordinator, buyer, CFO, site manager, head chef, storekeeper", "ar": "8 أدوار: المسيّر ومدير العمليات والمنسّق والمشتري والمالي ومسؤول القاعدة ورئيس المطبخ وأمين المخزن"}, {"fr": "20 rapports en PDF et Excel ; assistant d'installation pas à pas", "en": "20 reports in PDF and Excel; step-by-step setup assistant", "ar": "20 تقريراً بصيغتي PDF وExcel؛ معالج تثبيت خطوة بخطوة"}]}, {"t": {"fr": "Confort", "en": "Comfort", "ar": "الراحة"}, "items": [{"fr": "Français, anglais et arabe, à vos couleurs, votre logo et votre devise", "en": "French, English and Arabic, with your colours, logo and currency", "ar": "الفرنسية والإنجليزية والعربية، بألوانكم وشعاركم وعملتكم"}, {"fr": "Sur ordinateur et téléphone, sans serveur ni matériel à acheter", "en": "On computer and phone, no server or hardware to buy", "ar": "على الحاسوب والهاتف، دون خادم ولا عتاد للشراء"}]}], "outro": {"fr": "Rien à installer : l'application s'ouvre dans le navigateur et s'ajoute à l'écran d'accueil du téléphone. La mise en service se fait en une journée.", "en": "Nothing to install: the app opens in the browser and adds to the phone's home screen. Setup takes one day.", "ar": "لا حاجة لتثبيت أي شيء: يُفتح التطبيق في المتصفح ويُضاف إلى شاشة الهاتف. ويتم التشغيل في يوم واحد."}}, stage: "beta", color: "#1F8A70", kind: "web",
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
    { id: "sijil", feed: "https://rayanem-dev.github.io/pointage-app/version.json", changelog: "https://raw.githubusercontent.com/rayanem-dev/pointage-app/main/CHANGELOG.md", pitch: {"intro": {"fr": "Le pointage, les demandes (titre de congé, attestation…), les documents et le suivi du contrat se trouvent au même endroit, sur téléphone comme sur ordinateur, en français, en arabe et en anglais. Sijil remplace les fichiers et les messages éparpillés.", "en": "Attendance, requests (leave pass, certificate…), documents and contract follow-up are in one place, on phone and computer, in French, Arabic and English. Sijil replaces scattered files and messages.", "ar": "الحضور والطلبات (رخصة عطلة، شهادة…) والوثائق ومتابعة العقد في مكان واحد، على الهاتف والحاسوب، بالعربية والفرنسية والإنجليزية. يحلّ «سجل» محل الملفات والرسائل المتناثرة."}, "groups": [{"t": {"fr": "Pour l'agent", "en": "For the employee", "ar": "للعامل"}, "items": [{"fr": "Sa situation du jour : en travail ou en congé, jours restants", "en": "Today's status: working or on leave, days left", "ar": "وضعه اليوم: في العمل أو في عطلة، والأيام المتبقية"}, {"fr": "Son solde, sa date de reprise et le solde qu'il aura à son départ", "en": "Balance, return date and the balance at departure", "ar": "رصيده وتاريخ استئنافه والرصيد عند المغادرة"}, {"fr": "Son pointage sur 1, 3, 6 ou 12 mois", "en": "Attendance over 1, 3, 6 or 12 months", "ar": "حضوره على 1 أو 3 أو 6 أو 12 شهراً"}, {"fr": "Remarques sur son pointage : le responsable est prévenu et répond", "en": "Remarks on their attendance: the leader is notified and replies", "ar": "ملاحظات على حضوره: يُبلَّغ المسؤول ويرد"}]}, {"t": {"fr": "Demandes", "en": "Requests", "ar": "الطلبات"}, "items": [{"fr": "Titre de congé, attestation de travail, ATS, fiche d'émoluments, prolongation de congé ou de séjour", "en": "Leave pass, work certificate, social-security certificate, pay statement, leave or stay extension", "ar": "رخصة عطلة وشهادة عمل وشهادة الضمان وكشف الأجر وتمديد العطلة أو الإقامة"}, {"fr": "Deux clics pour demander ; date de reprise calculée automatiquement", "en": "Two clicks to request; return date calculated automatically", "ar": "نقرتان للطلب؛ وتاريخ الاستئناف يُحتسب تلقائياً"}, {"fr": "Le responsable regroupe par thème et envoie une seule demande à la direction ; la réponse s'applique à toutes", "en": "The leader groups by topic and sends a single request to management; the answer applies to all", "ar": "يجمع المسؤول الطلبات حسب الموضوع ويرسل طلباً واحداً للإدارة؛ والرد يسري على الكل"}, {"fr": "Modifier ou annuler une demande en attente", "en": "Edit or cancel a pending request", "ar": "تعديل طلب قيد الانتظار أو إلغاؤه"}]}, {"t": {"fr": "Pour le responsable d'équipe", "en": "For the team leader", "ar": "لمسؤول الفريق"}, "items": [{"fr": "Pointage en un clic (T, R, ABS)", "en": "One-click attendance (T, R, ABS)", "ar": "تسجيل الحضور بنقرة (T، R، ABS)"}, {"fr": "Rattrapage des jours oubliés d'un seul bouton ; prévisions de rotation", "en": "Catch-up of forgotten days with one button; rotation forecasts", "ar": "استدراك الأيام المنسية بزر واحد؛ توقعات المداورة"}, {"fr": "Création des agents, dépôt de documents, listes en ordre alphabétique", "en": "Create employees, upload documents, alphabetical lists", "ar": "إنشاء العمال ورفع الوثائق وقوائم مرتبة أبجدياً"}]}, {"t": {"fr": "Documents", "en": "Documents", "ar": "الوثائق"}, "items": [{"fr": "Fiches de paie, titres de congé et attestations rangés par agent", "en": "Payslips, leave passes and certificates filed per employee", "ar": "كشوف الأجور ورخص العطلة والشهادات مرتّبة لكل عامل"}, {"fr": "Pastille « Nouveau » et e-mail à l'arrivée d'un document", "en": "“New” badge and e-mail when a document arrives", "ar": "شارة «جديد» ورسالة بريد عند وصول وثيقة"}]}, {"t": {"fr": "Direction et facturation", "en": "Management and invoicing", "ar": "الإدارة والفوترة"}, "items": [{"fr": "Paramètres : prestataire, rotation, couleurs, contrats, prix", "en": "Settings: provider, rotation, colours, contracts, prices", "ar": "الإعدادات: المتعامل والمداورة والألوان والعقود والأسعار"}, {"fr": "Attachement validé et figé, puis facture ; historique et PDF à télécharger", "en": "Validated, frozen statement, then invoice; history and downloadable PDFs", "ar": "كشف معتمد ومثبّت ثم فاتورة؛ سجل وملفات PDF للتحميل"}, {"fr": "Exports fiche de pointage, attachement et facture en Excel et PDF", "en": "Exports of attendance sheet, statement and invoice in Excel and PDF", "ar": "تصدير ورقة الحضور والكشف والفاتورة بصيغتي Excel وPDF"}, {"fr": "Espace client en consultation : pointage, contrat, attachements et factures validés", "en": "Read-only client space: attendance, contract, validated statements and invoices", "ar": "فضاء الزبون للاطلاع: الحضور والعقد والكشوف والفواتير المعتمدة"}]}, {"t": {"fr": "Calendrier", "en": "Calendar", "ar": "التقويم"}, "items": [{"fr": "Vues 1, 3, 6 mois et 1 an, avec les couleurs du mois", "en": "1, 3, 6-month and 1-year views, with the monthly colours", "ar": "عروض لشهر و3 و6 أشهر وسنة بألوان الشهر نفسها"}, {"fr": "Jours fériés algériens, fêtes nationales et religieuses", "en": "Algerian public holidays, national and religious", "ar": "الأعياد الجزائرية الوطنية والدينية"}, {"fr": "Ligne des dates toujours visible dans la grille", "en": "Date row always visible in the grid", "ar": "سطر التواريخ ظاهر دائماً في الجدول"}]}, {"t": {"fr": "Sécurité et confort", "en": "Security and comfort", "ar": "الأمان والراحة"}, "items": [{"fr": "Chacun ne voit que ce qui le concerne ; mots de passe jamais en clair", "en": "Everyone sees only what concerns them; passwords never in clear", "ar": "كل شخص يرى ما يخصه فقط؛ وكلمات المرور لا تُخزَّن بوضوح"}, {"fr": "Mot de passe oublié par code e-mail ; « Rester connecté » 30 jours", "en": "Forgotten password by e-mail code; “Stay signed in” for 30 days", "ar": "كلمة المرور المنسية برمز بالبريد؛ «البقاء متصلاً» 30 يوماً"}, {"fr": "Aide intégrée avec recherche, pour chaque profil", "en": "Built-in help with search, for each profile", "ar": "مساعدة مدمجة مع بحث لكل صفة"}, {"fr": "Français, arabe, anglais ; mode clair ou sombre ; s'installe sur le téléphone", "en": "French, Arabic, English; light or dark mode; installs on the phone", "ar": "العربية والفرنسية والإنجليزية؛ وضع فاتح أو داكن؛ يُثبَّت على الهاتف"}]}], "outro": {"fr": "Connexion avec l'identifiant et le mot de passe transmis par votre responsable.", "en": "Sign in with the username and password given by your manager.", "ar": "يتم الدخول بالمعرّف وكلمة المرور اللذين يسلّمهما المسؤول."}}, demo: "https://rayanem-dev.github.io/pointage-app/", stage: "beta", color: "#2A6FDB", logo: "assets/img/logo-sijil.png", kind: "web",
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
    { id: "siraj", kind: "web", shots: [{"src": "assets/img/siraj-1.jpg", "srcAr": "assets/img/siraj-ar-1.jpg", "alt": {"fr": "Accueil du directeur : chiffres clés et santé financière", "en": "Director's home: key figures and financial health", "ar": "رئيسية المدير: الأرقام الأساسية والوضع المالي"}}, {"src": "assets/img/siraj-2.jpg", "srcAr": "assets/img/siraj-ar-2.jpg", "alt": {"fr": "Calendrier partagé de la semaine", "en": "Shared weekly calendar", "ar": "التقويم المشترك للأسبوع"}}, {"src": "assets/img/siraj-3.jpg", "srcAr": "assets/img/siraj-ar-3.jpg", "alt": {"fr": "L'appel : présent, absent, retard, justifié", "en": "Attendance: present, absent, late, excused", "ar": "تسجيل الحضور: حاضر وغائب ومتأخر ومبرَّر"}}, {"src": "assets/img/siraj-4.jpg", "srcAr": "assets/img/siraj-ar-4.jpg", "alt": {"fr": "Reçu de paiement numéroté", "en": "Numbered payment receipt", "ar": "وصل دفع مرقَّم"}}, {"src": "assets/img/siraj-5.jpg", "srcAr": "assets/img/siraj-ar-5.jpg", "alt": {"fr": "Comptabilité : encaissé, dépenses, résultat", "en": "Accounting: collected, expenses, result", "ar": "المحاسبة: المحصَّل والمصاريف والنتيجة"}}, {"src": "assets/img/siraj-6.jpg", "srcAr": "assets/img/siraj-ar-6.jpg", "alt": {"fr": "Accueil du parent : paiements et suivi", "en": "Parent's home: payments and follow-up", "ar": "رئيسية الوليّ: المدفوعات والمتابعة"}}], links: [{"href": "assets/docs/Siraj-Presentation-fr.pptx", "type": "deck", "label": {"fr": "Présentation (PowerPoint, français)", "en": "Presentation (PowerPoint, French)", "ar": "العرض (PowerPoint، بالفرنسية)"}}, {"href": "assets/docs/Siraj-Presentation-ar.pptx", "type": "deck", "label": {"fr": "Présentation (PowerPoint, arabe)", "en": "Presentation (PowerPoint, Arabic)", "ar": "العرض (PowerPoint، بالعربية)"}}], liveLogo: "https://rayanem-dev.github.io/da3m-site/icon-512.png", feed: "https://rayanem-dev.github.io/da3m-site/version.json", changelog: "https://raw.githubusercontent.com/rayanem-dev/da3m-site/main/CHANGELOG.md", pitch: {"intro": {"fr": "Gérer une école de soutien, c'est souvent des cahiers de présence, des paiements suivis de mémoire et des parents qui appellent pour connaître l'horaire. Siraj réunit tout, de l'inscription au reçu de paiement.", "en": "Running a tutoring school often means attendance notebooks, payments tracked from memory and parents calling for the timetable. Siraj brings it all together, from enrolment to the payment receipt.", "ar": "تسيير مدرسة دعم يعني غالباً دفاتر حضور ومدفوعات تُتابَع بالذاكرة وأولياء يتصلون لمعرفة الموعد. يجمع «سراج» كل شيء، من تسجيل التلميذ إلى وصل الدفع."}, "groups": [{"t": {"fr": "Pilotage du directeur", "en": "Director's dashboard", "ar": "لوحة المدير"}, "items": [{"fr": "Chiffres clés : élèves, groupes, encaissé, retards", "en": "Key figures: students, groups, collected, overdue", "ar": "الأرقام الأساسية: التلاميذ والأفواج والمحصَّل والمتأخرات"}, {"fr": "Alertes utiles : séances sans appel, impayés, comptes à activer", "en": "Useful alerts: sessions without attendance, unpaid, accounts to activate", "ar": "تنبيهات مفيدة: حصص دون تسجيل حضور ومتأخرات وحسابات للتفعيل"}, {"fr": "Relance des parents en retard en un clic", "en": "Reminder to late parents in one click", "ar": "تذكير الأولياء المتأخرين بنقرة واحدة"}]}, {"t": {"fr": "Calendrier et appel", "en": "Calendar and attendance", "ar": "التقويم والحضور"}, "items": [{"fr": "Calendrier partagé par toute l'école, semaine commençant le dimanche", "en": "Shared school calendar, week starting on Sunday", "ar": "تقويم مشترك لكل المدرسة، يبدأ الأسبوع يوم الأحد"}, {"fr": "Déplacement ou annulation : parents et professeurs prévenus aussitôt ; rappels la veille et 1 h avant", "en": "Move or cancel: parents and teachers notified at once; reminders the day before and 1 h before", "ar": "التأجيل أو الإلغاء: يُبلَّغ الأولياء والأساتذة فوراً؛ وتذكير قبل يوم وقبل ساعة"}, {"fr": "Appel en quelques secondes : présent, absent, retard, justifié ; « Tous présents » en un geste", "en": "Attendance in seconds: present, absent, late, excused; “All present” in one tap", "ar": "تسجيل الحضور في ثوانٍ: حاضر وغائب ومتأخر ومبرَّر؛ و«الكل حاضر» بنقرة"}, {"fr": "Agenda exportable vers le téléphone, avec rappel", "en": "Agenda exportable to the phone, with reminder", "ar": "جدول قابل للتصدير إلى الهاتف مع تذكير"}]}, {"t": {"fr": "Élèves et groupes", "en": "Students and groups", "ar": "التلاميذ والأفواج"}, "items": [{"fr": "Groupes avec tarif et mode : session de N séances, mois, séance ou tarif libre", "en": "Groups with price and mode: session of N lessons, month, lesson or free rate", "ar": "أفواج بتعريفة ونمط: دورة من N حصة أو شهر أو حصة أو تعريفة حرة"}, {"fr": "Inscription d'un élève, invitation du parent par e-mail, consentement parental enregistré", "en": "Enrol a student, invite the parent by e-mail, parental consent recorded", "ar": "تسجيل التلميذ ودعوة الوليّ بالبريد وموافقة الوليّ مسجَّلة"}, {"fr": "Fiche élève : suivi, paiements, notes de contrôles", "en": "Student file: follow-up, payments, test marks", "ar": "ملف التلميذ: المتابعة والمدفوعات ونقاط الاختبارات"}]}, {"t": {"fr": "Paiements et reçus", "en": "Payments and receipts", "ar": "المدفوعات والوصولات"}, "items": [{"fr": "Sessions de N séances, au prorata si l'élève arrive en cours ; paiements partiels, crédits d'absence", "en": "Sessions of N lessons, pro rata for late joiners; partial payments, absence credits", "ar": "دورات من N حصة، ونسبي لمن ينضم في المنتصف؛ دفع جزئي ورصيد غياب"}, {"fr": "Espèces, virement, CCP, BaridiMob, chèque", "en": "Cash, bank transfer, CCP, BaridiMob, cheque", "ar": "نقداً وتحويل وCCP وبريدي موب وشيك"}, {"fr": "Reçus numérotés R-AAAA-NNNN, imprimables ou en PDF, visibles aussi par le parent", "en": "Numbered receipts R-YYYY-NNNN, printable or PDF, also visible to the parent", "ar": "وصولات مرقَّمة R-AAAA-NNNN قابلة للطباعة أو PDF ويراها الوليّ أيضاً"}, {"fr": "Relances automatiques avant et après l'échéance", "en": "Automatic reminders before and after the due date", "ar": "تذكيرات تلقائية قبل الاستحقاق وبعده"}]}, {"t": {"fr": "Comptabilité", "en": "Accounting", "ar": "المحاسبة"}, "items": [{"fr": "Encaissé, dépenses et résultat, mois par mois", "en": "Collected, expenses and result, month by month", "ar": "المحصَّل والمصاريف والنتيجة شهراً بشهر"}, {"fr": "Paie des professeurs calculée : à l'heure, forfait par élève, fixe ou pourcentage", "en": "Teacher pay calculated: hourly, per student, fixed or percentage", "ar": "أجور الأساتذة محسوبة: بالساعة أو جزافي للتلميذ أو ثابت أو نسبة"}, {"fr": "Répartition par mode de paiement et par groupe ; journal de caisse, bilans, dérogations", "en": "Breakdown by payment method and by group; cash journal, statements, exemptions", "ar": "التوزيع حسب طريقة الدفع وحسب الفوج؛ دفتر الصندوق والحصيلة والاستثناءات"}, {"fr": "Exports Excel et CSV, impression et PDF", "en": "Excel and CSV exports, printing and PDF", "ar": "تصدير Excel وCSV وطباعة وPDF"}]}, {"t": {"fr": "Professeurs", "en": "Teachers", "ar": "الأساتذة"}, "items": [{"fr": "Appel et calendrier depuis le téléphone", "en": "Attendance and calendar from the phone", "ar": "الحضور والتقويم من الهاتف"}, {"fr": "Dépôt de cours et séries pour les élèves", "en": "Upload lessons and exercise sets for students", "ar": "رفع الدروس والسلاسل للتلاميذ"}, {"fr": "Notes de contrôles et suivi mensuel publié aux parents", "en": "Test marks and monthly follow-up published to parents", "ar": "نقاط الاختبارات والمتابعة الشهرية تُنشر للأولياء"}, {"fr": "Revenus cumulés, même en enseignant dans plusieurs écoles Siraj", "en": "Cumulative earnings, even when teaching in several Siraj schools", "ar": "الإيرادات التراكمية حتى مع التدريس في عدة مدارس"}]}, {"t": {"fr": "Parents", "en": "Parents", "ar": "الأولياء"}, "items": [{"fr": "Payé, reste à payer et date limite", "en": "Paid, left to pay and deadline", "ar": "المدفوع والمتبقي وآخر أجل"}, {"fr": "Calendrier de chaque enfant et notifications des changements", "en": "Each child's calendar and change notifications", "ar": "تقويم كل طفل وإشعارات التغييرات"}, {"fr": "Évaluations mensuelles, notes des contrôles, fichiers de cours", "en": "Monthly reviews, test marks, course files", "ar": "التقييمات الشهرية ونقاط الاختبارات وملفات الدروس"}, {"fr": "Messages directs avec l'école, annonces ; SMS automatiques par téléphone passerelle", "en": "Direct messages with the school, announcements; automatic SMS via a gateway phone", "ar": "رسائل مباشرة مع المدرسة وإعلانات؛ ورسائل SMS تلقائية عبر هاتف بوابة"}]}, {"t": {"fr": "Équipe, droits et cadre", "en": "Team, rights and framework", "ar": "الفريق والصلاحيات والإطار"}, "items": [{"fr": "Directeur, secrétaire (les droits que vous choisissez), professeur (même sur plusieurs écoles) et parent", "en": "Director, secretary (the rights you choose), teacher (even across schools) and parent", "ar": "المدير والسكرتيرة (بالصلاحيات التي تحددونها) والأستاذ (ولو في عدة مدارس) والوليّ"}, {"fr": "Un classeur par école : aucune donnée mélangée ; chacun ne voit que son périmètre", "en": "One workbook per school: no data mixed; everyone sees only their scope", "ar": "ملف لكل مدرسة: لا اختلاط للبيانات؛ وكل شخص يرى مجاله فقط"}, {"fr": "Conditions d'utilisation acceptées par chacun, en 3 langues", "en": "Terms of use accepted by everyone, in 3 languages", "ar": "شروط استخدام يوافق عليها كل مستخدم، بثلاث لغات"}, {"fr": "Données exportables à tout moment", "en": "Data exportable at any time", "ar": "البيانات قابلة للتصدير في أي وقت"}]}, {"t": {"fr": "Confort", "en": "Comfort", "ar": "الراحة"}, "items": [{"fr": "Français, arabe (de droite à gauche) et anglais, notifications et e-mails dans la langue de chacun", "en": "French, Arabic (right to left) and English, notifications and e-mails in everyone's language", "ar": "الفرنسية والعربية (من اليمين إلى اليسار) والإنجليزية، والإشعارات والرسائل بلغة كل شخص"}, {"fr": "Mode clair ou sombre, aux couleurs et au logo de l'école", "en": "Light or dark mode, in the school's colours and logo", "ar": "وضع فاتح أو داكن، بألوان المدرسة وشعارها"}, {"fr": "S'installe comme une application sur téléphone et ordinateur", "en": "Installs like an app on phone and computer", "ar": "يُثبَّت كتطبيق على الهاتف والحاسوب"}]}], "outro": {"fr": "Essai gratuit sans engagement, avec vos vraies données ; mise en service en une journée, aide intégrée et support à distance.", "en": "Free trial with no commitment, with your real data; setup in one day, built-in help and remote support.", "ar": "تجربة مجانية دون التزام ببياناتكم الحقيقية؛ تشغيل في يوم واحد ومساعدة مدمجة ودعم عن بُعد."}}, icon: "🚧", logo: "assets/img/logo-siraj.png", logoFill: true, progress: 80, name: "Siraj / سراج", desc: { fr: "Gestion intelligente et simple pour les écoles de soutien : cours, séances, élèves, paiements, évaluation et calendriers partagés.", en: "Smart, simple management for tutoring schools: courses, sessions, students, payments, evaluation and shared calendars.", ar: "إدارة ذكية وبسيطة لمدارس الدعم: الدروس والحصص والتلاميذ والمدفوعات والتقييم والتقاويم المشتركة." } },
    { id: "siraj-pro", icon: "🚧", logo: "assets/img/logo-siraj.png", logoFill: true, corner: "PRO", progress: 5, name: "Siraj Pro / سراج برو", desc: null }
  ],

  i18n: {
    fr: { demoMsg: "Bonjour, je souhaite une démonstration de {app}.", tipServices: "Sites web, logiciels SaaS, présentations, community management, référencement Google et plus.", tipContact: "Téléphone, WhatsApp et e-mail pour une démonstration ou un devis.", beta: "Bêta", alpha: "Alpha", inprog: "En cours", done: "Terminé", phone: "Téléphone", call: "Appeler", chat: "Écrire sur WhatsApp", contactSoon: "Nos coordonnées seront publiées très bientôt.", works: "Réalisations", w_ctx: "Contexte", w_content: "Contenu", w_liv: "Livrables", w_design: "Conception", homeTag: "Sites web, présentations et logiciels SaaS. Rapides, professionnels.", home: "Accueil", copy: "Copier", copied: "Copié", versions: "Versions", news: "Versions", install: "Installer", installIos: "Pour installer : touchez Partager, puis « Sur l'écran d'accueil ».", mailTitle: "Présentation", allNews: "Tout l'historique", newTag: "Nouveau", liveVer: "Version en ligne", close: "Fermer", w1: "Rapide", w2: "Professionnel", w3: "Accompagné", l_deck: "Présentation (PowerPoint)", l_manual: "Manuel (PDF)", shotsNote: "Captures d'écran avec des données fictives", write: "Écrire", features: "Fonctions", soon: "Bientôt", g_dev: "Logiciels et sites", g_online: "Présence en ligne et communication", services: "Nos services", why: "Pourquoi nous choisir", process: "Comment on travaille", apps: "Nos applications", upcoming: "En développement", releases: "Dernières versions", contact: "Contact",
          heroTitle: "Sites web, présentations et logiciels SaaS", heroSub: "Livrés rapidement, avec un rendu professionnel, du premier échange à la mise en service.",
          demo: "Demander une démo", open: "Ouvrir", download: "Télécharger", progress: "Avancement", noRel: "Aucune version pour le moment.",
          contactText: "Une question, une démo ? Écrivez-nous." },
    en: { demoMsg: "Hello, I would like a demo of {app}.", tipServices: "Websites, SaaS software, presentations, community management, Google listing and more.", tipContact: "Phone, WhatsApp and email for a demo or a quote.", beta: "Beta", alpha: "Alpha", inprog: "In progress", done: "Done", phone: "Phone", call: "Call", chat: "Message on WhatsApp", contactSoon: "Our contact details will be published very soon.", works: "Our work", w_ctx: "Context", w_content: "Content", w_liv: "Deliverables", w_design: "Design", homeTag: "Websites, presentations and SaaS software. Fast, professional.", home: "Home", copy: "Copy", copied: "Copied", versions: "Versions", news: "Versions", install: "Install", installIos: "To install: tap Share, then \"Add to Home Screen\".", mailTitle: "Presentation", allNews: "Full history", newTag: "New", liveVer: "Live version", close: "Close", w1: "Fast", w2: "Professional", w3: "Supported", l_deck: "Presentation (PowerPoint)", l_manual: "Manual (PDF)", shotsNote: "Screenshots with sample data", write: "Write to us", features: "Features", soon: "Soon", g_dev: "Software and websites", g_online: "Online presence and communication", services: "Our services", why: "Why choose us", process: "How we work", apps: "Our applications", upcoming: "In development", releases: "Latest releases", contact: "Contact",
          heroTitle: "Websites, presentations and SaaS software", heroSub: "Delivered fast, with a professional finish, from the first conversation to go-live.",
          demo: "Request a demo", open: "Open", download: "Download", progress: "Progress", noRel: "No release yet.",
          contactText: "A question, a demo? Write to us." },
    ar: { demoMsg: "مرحبًا، أرغب في عرض تجريبي لتطبيق {app}.", tipServices: "مواقع ويب وبرمجيات SaaS وعروض تقديمية وإدارة مواقع التواصل والظهور على جوجل وأكثر.", tipContact: "الهاتف وواتساب والبريد الإلكتروني لطلب عرض تجريبي أو عرض سعر.", beta: "بيتا", alpha: "ألفا", inprog: "قيد التطوير", done: "منتهٍ", phone: "الهاتف", call: "اتصال", chat: "راسلنا على واتساب", contactSoon: "سيتم نشر بيانات الاتصال قريبًا جدًا.", works: "أعمالنا", w_ctx: "السياق", w_content: "المحتوى", w_liv: "المخرجات", w_design: "التصميم", homeTag: "مواقع وعروض تقديمية وبرمجيات SaaS. سريعة واحترافية.", home: "الرئيسية", copy: "نسخ", copied: "تم النسخ", versions: "الإصدارات", news: "الإصدارات", install: "تثبيت", installIos: "للتثبيت: اضغط على مشاركة ثم «إضافة إلى الشاشة الرئيسية».", mailTitle: "التقديم", allNews: "السجل الكامل", newTag: "جديد", liveVer: "الإصدار المنشور", close: "إغلاق", w1: "سريع", w2: "احترافي", w3: "مُرافَق", l_deck: "العرض التقديمي (PowerPoint)", l_manual: "الدليل (PDF)", shotsNote: "لقطات شاشة ببيانات تجريبية", write: "راسلنا", features: "المزايا", soon: "قريبًا", g_dev: "البرمجيات والمواقع", g_online: "الحضور الرقمي والتواصل", services: "خدماتنا", why: "لماذا نحن", process: "كيف نعمل", apps: "تطبيقاتنا", upcoming: "قيد التطوير", releases: "آخر الإصدارات", contact: "اتصل بنا",
          heroTitle: "مواقع وعروض تقديمية وبرمجيات SaaS", heroSub: "تسليم سريع ومظهر احترافي، من أول حوار حتى الإطلاق.",
          demo: "اطلب عرضًا تجريبيًا", open: "فتح", download: "تحميل", progress: "التقدّم", noRel: "لا يوجد إصدار بعد.",
          contactText: "سؤال أو عرض تجريبي؟ راسلنا." }
  }
};
