/**
 * Watad — all site copy. Bilingual: { ar, en } per leaf.
 *
 * SOURCE OF TRUTH: WATAD_WEBSITE_V1_FRAMER_EXECUTION.md S2.
 * Approved copy. No pricing. No invented claims. No fabricated
 * clients, logos, metrics, or case studies — Watad is pre-first-pilot.
 *
 * Live sections: hero, trustedBy, services, methodology (via
 * OperationalCapabilities), whyWatad, engagements, closing.
 * Retired keys (sectors / antiPositioning / commitment / faq /
 * caseStudies) removed in the 2026-05-21 canon cleanup.
 */

import { config } from "./config";

export type Lang = "ar" | "en";
export type Bi = { ar: string; en: string };
export type SectorCard = {
  ar: string;
  en: string;
  subsegments: { ar: string[]; en: string[] };
  fit: Bi;
};

export const content = {
  meta: {
    title: "Watad — Commercial Follow-Up Operations · KSA · GCC",
    descriptionAr:
      "تشغيل المتابعة التجارية لشركات الخدمات في السعودية والخليج.",
    descriptionEn:
      "Commercial follow-up operations for services firms in Saudi Arabia and the GCC.",
  },

  nav: {
    cta: { ar: "احجز جلسة", en: "Book a conversation" } as Bi,
    skipToContent: { ar: "تخطٍّ إلى المحتوى", en: "Skip to content" } as Bi,
  },

  hero: {
    headline1: { ar: "نرتّب متابعة الفرص التجارية", en: "Commercial follow-up operations." } as Bi,
    headline2: {
      ar: "لشركات الخدمات في السعودية والخليج.",
      en: "For services firms in Saudi Arabia and the GCC.",
    } as Bi,
    subhead: {
      ar: "بعد أول اهتمام من العميل، تساعد وتد على تنظيم الخطوات التالية: من يتابع؟ متى؟ وبأي رسالة؟ حتى تتحرك الفرص الجادة نحو اجتماع واضح مع صاحب القرار.",
      en: "After initial interest from a client, Watad helps organise the next steps: who follows up, when, and with what message — so serious opportunities move toward a clear meeting with the decision-maker.",
    } as Bi,
    cta: { ar: "احجز جلسة", en: "Book a conversation" } as Bi,
    ctaSecondary: { ar: "واتساب", en: "WhatsApp" } as Bi,
    trust: {
      ar: `نرتّب متابعة الفرص التجارية لشركات الخدمات. مقرها ${config.cityAr}.`,
      en: `Commercial follow-up operations for services firms. Headquartered in ${config.cityEn}.`,
    } as Bi,
    // Operating principles, not metrics — true descriptors of the model.
    proofChips: [
      { ar: "التزام تعاقدي", en: "Contractual commitment" } as Bi,
      { ar: "نطاق تعارض واضح", en: "Clear conflict boundaries" } as Bi,
      { ar: "تقارير تشغيلية", en: "Operational reporting" } as Bi,
    ],
  },

  methodology: {
    overline: { ar: "منهجية العمل", en: "METHODOLOGY" } as Bi,
    h2: { ar: "منهجية العمل", en: "How we work" } as Bi,
    intro: {
      ar: "أربع خطوات تشغيلية. كل خطوة موثّقة، وكل عميل يرى نتائجها في تقرير أسبوعي واضح.",
      en: "Four operational steps. Every step documented. Every client sees the result in a clear weekly report.",
    } as Bi,
    steps: [
      {
        numAr: "١",
        numEn: "1",
        title: { ar: "التحديد", en: "Identify" } as Bi,
        body: {
          ar: "نبني قائمة مركّزة بالشركات التي تطابق شريحتكم المستهدفة، مع تحديد أسماء صنّاع القرار في كل شركة وإشارات الشراء الحالية لديهم.",
          en: "We build a targeted list of firms matching your target segment, with named decision-makers and current buying signals.",
        } as Bi,
      },
      {
        numAr: "٢",
        numEn: "2",
        title: { ar: "التواصل", en: "Reach" } as Bi,
        body: {
          ar: "نُشغّل سلسلة تواصل احترافية عبر البريد الإلكتروني، لينكدإن، وواتساب الأعمال — بحسب القناة الأنسب لكل شريحة. كل رسالة مبنية على بحث، ليس على قوالب جاهزة.",
          en: "We run structured outreach across email, LinkedIn, and WhatsApp Business — channel-matched to the segment. Every message is research-based, never templated.",
        } as Bi,
      },
      {
        numAr: "٣",
        numEn: "3",
        title: { ar: "المتابعة", en: "Follow up" } as Bi,
        body: {
          ar: "نتابع بإيقاع منظم. كل رد يُعالج خلال ساعات. كل فرصة تُؤهَّل وفق معايير تتفقون عليها معنا في الأسبوع الأول.",
          en: "We follow up with a disciplined cadence. Every reply is handled within hours. Every opportunity is qualified against criteria signed in week one.",
        } as Bi,
      },
      {
        numAr: "٤",
        numEn: "4",
        title: { ar: "التسليم", en: "Deliver" } as Bi,
        body: {
          ar: "لقاءات تجارية جادة تُحجز مباشرة على تقويم فريقكم، مع تقارير تشغيلية منتظمة على مدار الباقة.",
          en: "Qualified meetings booked directly onto your team's calendar, with regular operational reporting throughout the engagement.",
        } as Bi,
      },
    ],
  },

  engagements: {
    overline: { ar: "نموذج التعاقد", en: "ENGAGEMENT MODEL" } as Bi,
    h2: { ar: "كيف نعمل معاً", en: "How we engage" } as Bi,
    opening: {
      ar: "نأخذ عدداً محدوداً من العملاء كل ربع لضمان جودة التشغيل لكل حساب.",
      en: "We onboard a limited number of clients per quarter to protect operational quality per account.",
    } as Bi,
    cards: [
      {
        title: { ar: "الباقة التشغيلية التجريبية", en: "Pilot Engagement" } as Bi,
        points: [
          { ar: "ثلاثون يوماً تشغيلياً", en: "A thirty-day structured operational sprint" },
          {
            ar: "نبني قائمة الحسابات المستهدفة، نُشغّل سلسلة التواصل والمتابعة، نُؤهّل الفرص وفق معايير متفق عليها، ونحرّك الفرص الجادة نحو لقاءات تجارية مؤهلة",
            en: "We build the target account list, operate the outreach and follow-up cadence, qualify opportunities against agreed qualification criteria, and move serious opportunities toward qualified commercial meetings",
          },
          {
            ar: "اتفاقية صفحة واحدة تُثبت النطاق، ومعايير التأهيل، ورسم التشغيل، وإيقاع التقارير، والمراجعة الختامية قبل الانطلاق.",
            en: "A one-page agreement recording scope, qualification criteria, operating fee, reporting rhythm, and close-out review before kickoff.",
          },
        ] as Bi[],
      },
      {
        title: { ar: "الاستمرار التشغيلي", en: "Continued Operations" } as Bi,
        points: [
          {
            ar: "استمرار منظم بعد الباقة التجريبية",
            en: "Sustained engagement after a successful pilot",
          },
          {
            ar: "نفس الانضباط التشغيلي، إيقاع مستمر، واستهداف يُحسَّن بناءً على نتائج التجربة",
            en: "Same operating discipline, ongoing cadence, refined targeting based on pilot learnings",
          },
          {
            ar: "مراجعة أداء شهرية، تجديد ربعي صريح",
            en: "Monthly performance review, quarterly explicit renewal",
          },
        ] as Bi[],
      },
      {
        title: { ar: "نطاق مخصص", en: "Custom Scope" } as Bi,
        points: [
          {
            ar: "نطاق مؤسسي يُحدَّد بعد جلسة استكشاف",
            en: "Enterprise scope defined after a discovery conversation",
          },
          {
            ar: "تكامل مخصص مع منظومتكم التجارية القائمة، فريق تشغيل مخصص، واستهداف متعدد الشرائح",
            en: "Custom integration into your existing commercial operation, a dedicated operating lead, multi-segment targeting",
          },
          {
            ar: "اتفاقية سنوية، النطاق يُحدَّد لكل ارتباط",
            en: "Annual agreement, scope defined per engagement",
          },
        ] as Bi[],
      },
    ],
    cardLink: { ar: "ناقش النطاق", en: "Discuss scope" } as Bi,
    closing: {
      ar: "نطاق العمل والشروط التجارية تُحدَّد بعد جلسة الاستكشاف، وفق احتياج كل شركة.",
      en: "Scope and commercial terms are defined after the discovery conversation, calibrated to each firm.",
    } as Bi,
  },

  closing: {
    h2: { ar: "للحديث المباشر مع فريقنا", en: "Speak with our team" } as Bi,
    body: {
      ar: "نخصص 15 دقيقة لاستعراض احتياج شركتكم وتقدير ما إذا كان النموذج مناسباً. لا التزام، لا عرض مبيعي، فقط محادثة عمل.",
      en: "Fifteen minutes to review your situation and assess whether the model fits. No commitment, no sales pitch — just a working conversation.",
    } as Bi,
    cta: { ar: "احجز جلسة", en: "Book a conversation" } as Bi,
    ctaSecondary: { ar: "راسلنا عبر واتساب", en: "Message us on WhatsApp" } as Bi,
  },

  footer: {
    brandName: "Watad",
    brandDescriptor: {
      ar: "نرتّب متابعة الفرص التجارية لشركات الخدمات.",
      en: "Commercial follow-up operations for services firms.",
    } as Bi,
    brandRegions: { ar: "السعودية · الخليج.", en: "KSA · GCC." } as Bi,
    contactLabel: { ar: "تواصل", en: "Contact" } as Bi,
    legalLabel: { ar: "قانوني", en: "Legal" } as Bi,
    privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" } as Bi,
    terms: { ar: "الشروط والأحكام", en: "Terms" } as Bi,
    crLabel: { ar: "السجل التجاري", en: "Commercial Registration" } as Bi,
    // Trust strip: renders only when config.crNumber is set.
    // Verified legal relationship — Watad operates UNDER the registered entity;
    // it is NOT a separately registered company. Approved phrasing (founder, 2026-06-14).
    trustStrip: {
      ar: `وتد تعمل تحت ${config.legalEntityAr}\nالسجل التجاري: ${config.crNumber}\n${config.cityAr}، المملكة العربية السعودية`,
      en: `Watad operates under ${config.legalEntityAr} · Commercial Registration ${config.crNumber} · ${config.cityEn}, Saudi Arabia`,
    } as Bi,
    copyright: {
      ar: `© ${config.year} Watad. كل الحقوق محفوظة.`,
      en: `© ${config.year} Watad. All rights reserved.`,
    } as Bi,
  },

  trustedBy: {
    overline: { ar: "أين نعمل", en: "WHERE WATAD FITS" } as Bi,
    h2: { ar: "أين يعمل نموذج وتد؟", en: "Where Watad fits" } as Bi,
    // Six service-firm patterns Watad supports. Language-aware display —
    // not bilingual inside cards. No client names, no logos, no metrics.
    fitLabel: { ar: "كيف يعمل وتد", en: "How Watad fits" } as Bi,
    sectors: [
      {
        ar: "الفعاليات والوجهات",
        en: "Events & Destinations",
        subsegments: {
          ar: ["شركات تنظيم الفعاليات", "إدارات الوجهات والمواقع", "شركات التجارب والتفعيل", "شركات إدارة الحشود وخدمات الزوار"],
          en: ["event management companies", "destination & venue operators", "experience & activation companies", "crowd management & visitor services"],
        },
        fit: {
          ar: "نساعد في ترتيب المتابعة مع العملاء والشركاء والرعاة حتى لا تضيع الفرص المتكررة.",
          en: "We help structure follow-up with clients, partners, and sponsors so recurring opportunities are not lost.",
        } as Bi,
      },
      {
        ar: "الضيافة والمطاعم",
        en: "Hospitality & F&B",
        subsegments: {
          ar: ["مجموعات المطاعم والمقاهي", "شركات الضيافة والفنادق", "شركات التموين والضيافة", "العلامات المحلية متعددة الفروع"],
          en: ["restaurant & café groups", "hospitality & hotel companies", "catering & hospitality companies", "multi-branch local brands"],
        },
        fit: {
          ar: "نرتّب المتابعة مع الحسابات المؤسسية والشراكات التجارية حتى لا تبقى الفرص بلا خطوة تالية.",
          en: "We organise follow-up with corporate accounts and business partnerships so opportunities always have a next step.",
        } as Bi,
      },
      {
        ar: "المرافق والخدمات التشغيلية",
        en: "Facilities & Operational Services",
        subsegments: {
          ar: ["شركات إدارة المرافق", "شركات التشغيل والصيانة", "شركات القوى العاملة وخدمات الإسناد", "شركات الخدمات الميدانية"],
          en: ["facilities management companies", "operations & maintenance companies", "manpower & support services", "field services companies"],
        },
        fit: {
          ar: "نوضّح من يتابع ومتى في كل فرصة تشغيلية، بدلاً من الاعتماد على الذاكرة أو الانشغال.",
          en: "We clarify who follows up and when for each operational opportunity, removing reliance on memory or daily pressure.",
        } as Bi,
      },
      {
        ar: "اللوجستيات والعمليات الميدانية",
        en: "Logistics & Field Operations",
        subsegments: {
          ar: ["شركات الخدمات اللوجستية", "شركات التوصيل", "فرق التركيب والتشغيل الميداني", "شركات الخدمات متعددة المدن"],
          en: ["logistics service companies", "delivery companies", "installation & field operations teams", "multi-city service companies"],
        },
        fit: {
          ar: "نرتّب حركة الفرص عبر حسابات موزّعة وفرق متعددة حتى لا تتوقف المتابعة.",
          en: "We organise opportunity movement across distributed accounts and multiple teams so follow-up does not stall.",
        } as Bi,
      },
      {
        ar: "الرياضة والترفيه",
        en: "Sports & Entertainment",
        subsegments: {
          ar: ["الأندية والبطولات", "شركات الترفيه والتجارب", "الجهات المنظمة للبرامج الموسمية", "فرق الشراكات والرعايات"],
          en: ["clubs & tournaments", "entertainment & experience companies", "seasonal program organizers", "partnerships & sponsorship teams"],
        },
        fit: {
          ar: "نساعد في ترتيب المتابعة مع الشركاء والرعاة وشركات الخدمات المشاركة في البرامج.",
          en: "We help structure follow-up with partners, sponsors, and operational service providers.",
        } as Bi,
      },
      {
        ar: "شركات الخدمات المتخصصة",
        en: "Specialized Service Companies",
        subsegments: {
          ar: ["شركات B2B المتخصصة", "فرق تجارية صغيرة", "شركات خدمات يقودها المؤسس", "فرق تطوير الأعمال الصغيرة"],
          en: ["specialized B2B companies", "executive & commercial offices", "founder-led service companies", "small business development teams"],
        },
        fit: {
          ar: "نرتّب حركة المتابعة حتى لا تعتمد الفرص التجارية على ذاكرة المؤسس أو جدول أعماله.",
          en: "We organise follow-up movement so commercial opportunities do not depend on the founder's memory or schedule.",
        } as Bi,
      },
    ] as SectorCard[],
    closing: {
      ar: "القاسم المشترك: شركات خدمات تستحق أن تكون متابعة فرصها منظّمة وواضحة.",
      en: "The common thread: services firms whose commercial follow-up deserves to be organised and clear.",
    } as Bi,
  },

  services: {
    overline: { ar: "الخدمات", en: "SERVICES" } as Bi,
    h2: { ar: "ما نُشغّله لكم", en: "What we operate" } as Bi,
    items: [
      {
        number: { ar: "٠١", en: "01" } as Bi,
        title: { ar: "التواصل والمتابعة", en: "Outreach & Follow-Up" } as Bi,
        body: {
          ar: "نبني قائمة حسابات مؤهلة تطابق شريحتكم المستهدفة، ونُشغّل سلسلة تواصل احترافية عبر البريد الإلكتروني، لينكدإن، وواتساب الأعمال. النتيجة: لقاءات تجارية مؤهلة على تقويم فريقكم.",
          en: "We build a qualified account list matched to your target segment and operate structured outreach across email, LinkedIn, and WhatsApp Business. The result: qualified commercial meetings on your team's calendar.",
        } as Bi,
      },
      {
        number: { ar: "٠٢", en: "02" } as Bi,
        title: { ar: "البنية التشغيلية التجارية", en: "Commercial Infrastructure" } as Bi,
        body: {
          ar: "نبني معايير التأهيل ونُشغّل منظومة التتبع والمتابعة اليومية. كل تفاعل موثّق، كل فرصة تُعالج في الوقت المناسب، كل خطوة قابلة للمراجعة.",
          en: "We build qualification criteria and operate the daily tracking and follow-up system. Every interaction documented, every opportunity handled in time, every step reviewable.",
        } as Bi,
      },
      {
        number: { ar: "٠٣", en: "03" } as Bi,
        title: { ar: "المساءلة والتقارير", en: "Accountability & Reporting" } as Bi,
        body: {
          ar: "تقارير تشغيلية منتظمة، مراجعة أسبوعية، وتقرير ختامي في اليوم الثلاثين. رؤية كاملة لكل ما يحدث في خط التواصل والمتابعة.",
          en: "Regular operational reporting, a weekly review, and a Day-30 close-out report. Full visibility into every action in the outreach and follow-up cadence.",
        } as Bi,
      },
    ],
  },

  whyWatad: {
    overline: { ar: "لماذا وتد", en: "WHY WATAD" } as Bi,
    h2: { ar: "ما يميّزنا", en: "What sets us apart" } as Bi,
    items: [
      {
        title: { ar: "التزام تعاقدي", en: "Contractual Commitment" } as Bi,
        body: {
          ar: "يُثبَّت نطاق الباقة، ومعايير التأهيل، والرسوم، وإيقاع التقارير، والمراجعة الختامية كتابةً قبل بدء العمل.",
          en: "Pilot scope, qualification criteria, fee, reporting rhythm, and close-out review are recorded in writing before work begins.",
        } as Bi,
      },
      {
        title: { ar: "نطاق تعارض واضح", en: "Clear conflict boundaries" } as Bi,
        body: {
          ar: "نحدد حدود التعارض التجاري بحسب قائمة الحسابات، والقطاع الفرعي، والجغرافيا، أو النطاق المتفق عليه — لا بحجب صناعة كاملة.",
          en: "We define commercial conflict boundaries by account list, sub-sector, geography, or agreed scope — not by blocking an entire broad industry.",
        } as Bi,
      },
      {
        title: { ar: "تنفيذ لا استشارة", en: "Execution, Not Advice" } as Bi,
        body: {
          ar: "لسنا وكالة تسويق ولا استشارة بدون تنفيذ. نحن طبقة تشغيلية تُنجز العمل. اللقاءات تصل إلى فريقكم — الإغلاق يبقى عملهم.",
          en: "We are not a marketing agency, not advisory without execution. We are an operating layer that does the work. Meetings land with your team — the close stays theirs.",
        } as Bi,
      },
    ],
  },

  proof: {
    overline: { ar: "نماذج العمل", en: "HOW WE OPERATE" } as Bi,
    heading: { ar: "شكل ما نسلّمه", en: "The structure of our work" } as Bi,
    integrity: {
      ar: "لا ننشر أسماء عملاء ولا أرقامًا مفترضة. نعرض بنية العمل — نماذج لما نسلّمه.",
      en: "We don't publish client names or invented numbers. We show how the work is structured — samples of what we deliver.",
    } as Bi,
    sampleTag: { ar: "نموذج بنية", en: "Sample Structure" } as Bi,
    decisionLabel: { ar: "القرار", en: "DECISION" } as Bi,
    decisionStates: [
      { ar: "أرسل الآن", en: "SEND NOW" },
      { ar: "أمسك", en: "HOLD" },
      { ar: "تحقّق", en: "VERIFY" },
      { ar: "أجّل", en: "DEFER" },
    ] as Bi[],
    artifacts: [
      {
        key: "account-intelligence",
        title: { ar: "تقرير ذكاء الحساب", en: "Account Intelligence Report" } as Bi,
        caption: { ar: "قرار واضح قبل أي تواصل.", en: "A clear decision before any outreach." } as Bi,
        rows: [
          { ar: "الملخص التنفيذي", en: "Executive Summary" },
          { ar: "ذكاء الشركة", en: "Company Intelligence" },
          { ar: "صنّاع القرار", en: "Decision-Makers" },
          { ar: "الإشارات التجارية", en: "Commercial Signals" },
          { ar: "حالة التحقّق", en: "Verification Status" },
        ] as Bi[],
      },
      {
        key: "weekly-review",
        title: { ar: "المراجعة التشغيلية الأسبوعية", en: "Weekly Operating Review" } as Bi,
        caption: { ar: "رؤية تنفيذية كل أسبوع.", en: "Executive visibility every week." } as Bi,
        rows: [
          { ar: "الحالة العامة", en: "Overall Status" },
          { ar: "إجراءات مطلوبة من الإدارة", en: "CEO Actions Required" },
          { ar: "الفرص", en: "Opportunities" },
          { ar: "المخاطر", en: "Risks" },
        ] as Bi[],
      },
      {
        key: "day30",
        title: { ar: "تقرير اليوم الثلاثين", en: "Day-30 Close-Out" } as Bi,
        caption: { ar: "ما بنيناه، وما تعلّمناه، وما تملكونه.", en: "What we built, learned, and what you own." } as Bi,
        rows: [
          { ar: "حسابات مُتحقّقة", en: "Verified Accounts" },
          { ar: "صنّاع قرار محدَّدون", en: "Decision-Makers Identified" },
          { ar: "فرص مؤهلة", en: "Qualified Opportunities" },
          { ar: "إشارات مكتشفة", en: "Signals Discovered" },
          { ar: "مخاطر مُستبعدة", en: "Risks Eliminated" },
          { ar: "خط فرص مبني", en: "Pipeline Created" },
        ] as Bi[],
      },
    ],
    humanLed: {
      ar: "كل رسالة يراجعها ويرسلها شخص.",
      en: "Every message is reviewed and sent by a person.",
    } as Bi,
    verification: {
      ar: "كل ارتباط محكوم باتفاقية مكتوبة، ونتحقق من كل جهة تواصل قبل أي مراسلة.",
      en: "Every engagement is contract-governed, and every contact is verified before any outreach.",
    } as Bi,
    confidentiality: {
      ar: "بيانات العملاء لا تُعرض علنًا أبدًا. كل لقطة هنا نموذج بنية.",
      en: "Client data is never shown publicly. Every preview here is a sample structure.",
    } as Bi,
  },

  privacyPage: {
    title: { ar: "سياسة الخصوصية", en: "Privacy Policy" } as Bi,
    body: [
      {
        ar: "تحترم Watad خصوصية زوّار موقعها. لا نجمع بيانات شخصية إلا ما تشاركونه معنا طوعاً عبر حجز جلسة أو التواصل المباشر بالبريد الإلكتروني أو واتساب الأعمال. تُستخدم هذه البيانات حصراً للرد على استفساركم وتنسيق الجلسة، ولا تُشارك مع أي طرف ثالث.",
        en: "Watad respects the privacy of its website visitors. We collect personal data only where you choose to share it with us — through booking a conversation or contacting us directly by email or WhatsApp Business. This data is used solely to respond to your enquiry and coordinate the conversation, and is not shared with any third party.",
      },
      {
        ar: "لأي استفسار يتعلق بالبيانات أو لطلب حذف معلوماتكم، يُرجى التواصل عبر البريد الإلكتروني الموضّح في تذييل الموقع. هذه سياسة مختصرة للنسخة الأولى من الموقع، وتُحدَّث عند الحاجة.",
        en: "For any data-related enquiry, or to request deletion of your information, please contact us at the email address shown in the site footer. This is a concise first-version policy and will be updated as needed.",
      },
    ] as Bi[],
    back: { ar: "← العودة إلى الصفحة الرئيسية", en: "← Back to home" } as Bi,
  },

  termsPage: {
    title: { ar: "الشروط والأحكام", en: "Terms" } as Bi,
    body: [
      {
        ar: "هذا الموقع تعريفي لخدمات Watad في المتابعة التجارية لشركات الخدمات. المحتوى المعروض لأغراض معلوماتية، ولا يُشكّل عرضاً تعاقدياً ملزماً. نطاق العمل والشروط التجارية تُحدَّد حصراً في اتفاقية مكتوبة يوقّعها الطرفان بعد جلسة الاستكشاف.",
        en: "This website introduces Watad's commercial follow-up operations for services firms. The content shown is informational and does not constitute a binding contractual offer. Scope of work and commercial terms are defined solely in a written agreement signed by both parties after the discovery conversation.",
      },
      {
        ar: "تحتفظ Watad بحق تحديث محتوى الموقع في أي وقت. للأسئلة المتعلقة بهذه الشروط، يُرجى التواصل عبر البريد الإلكتروني الموضّح في تذييل الموقع. هذه نسخة مختصرة للإصدار الأول من الموقع.",
        en: "Watad reserves the right to update website content at any time. For questions regarding these terms, please contact us at the email address shown in the site footer. This is a concise first-version document.",
      },
    ] as Bi[],
    back: { ar: "← العودة إلى الصفحة الرئيسية", en: "← Back to home" } as Bi,
  },
} as const;
