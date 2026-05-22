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
    headline1: { ar: "تشغيل المتابعة التجارية.", en: "Commercial follow-up operations." } as Bi,
    headline2: {
      ar: "لشركات الخدمات في السعودية والخليج.",
      en: "For services firms in Saudi Arabia and the GCC.",
    } as Bi,
    subhead: {
      ar: "نُشغّل تواصلاً ومتابعةً منظّمة تحرّك الفرص الجادة نحو لقاءات تجارية مؤهلة.",
      en: "We operate structured outreach and follow-up that moves serious opportunities toward qualified commercial meetings.",
    } as Bi,
    cta: { ar: "احجز جلسة", en: "Book a conversation" } as Bi,
    ctaSecondary: { ar: "واتساب", en: "WhatsApp" } as Bi,
    trust: {
      ar: `تشغيل المتابعة التجارية لشركات الخدمات. مقرها ${config.cityAr}.`,
      en: `Commercial follow-up operations for services firms. Headquartered in ${config.cityEn}.`,
    } as Bi,
    // Operating principles, not metrics — true descriptors of the model.
    proofChips: [
      { ar: "التزام تعاقدي", en: "Contractual commitment" } as Bi,
      { ar: "حصرية القطاع", en: "Sector exclusivity" } as Bi,
      { ar: "تقرير يومي", en: "Daily reporting" } as Bi,
    ],
  },

  methodology: {
    overline: { ar: "منهجية العمل", en: "METHODOLOGY" } as Bi,
    h2: { ar: "منهجية العمل", en: "How we work" } as Bi,
    intro: {
      ar: "أربع خطوات تشغيلية. كل خطوة موثّقة، وكل عميل يرى نتائجها بشكل يومي.",
      en: "Four operational steps. Every step documented. Every client sees the result daily.",
    } as Bi,
    steps: [
      {
        numAr: "١",
        numEn: "1",
        title: { ar: "التحديد", en: "Identify" } as Bi,
        body: {
          ar: "نبني قائمة بـ 200 شركة تطابق شريحتكم المستهدفة، مع تحديد أسماء صنّاع القرار في كل شركة وإشارات الشراء الحالية لديهم.",
          en: "We build a list of 200 firms matching your target segment, with named decision-makers and current buying signals.",
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
          ar: "لقاءات تجارية جادة تُحجز مباشرة على تقويم فريقكم، مع تقرير يومي مختصر يُلخّص ما تم في الأربع والعشرين ساعة الماضية.",
          en: "Qualified meetings booked directly onto your team's calendar, with a brief daily report on the prior 24 hours.",
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
            ar: "نبني قائمة الحسابات المستهدفة، نُشغّل سلسلة التواصل والمتابعة، نُؤهّل الفرص وفق معايير موقّعة، ونحجز اللقاءات على تقويم فريقكم",
            en: "We build the target account list, operate the outreach and follow-up cadence, qualify opportunities against signed criteria, and book qualified meetings to your team's calendar",
          },
          {
            ar: "اتفاقية صفحة واحدة بعدد لقاءات مؤهلة محدد ومُثبَّت كتابياً قبل الانطلاق",
            en: "One-page agreement with a defined qualified-meeting commitment, signed before kickoff",
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
      ar: "تشغيل المتابعة التجارية لشركات الخدمات.",
      en: "Commercial follow-up operations for services firms.",
    } as Bi,
    brandRegions: { ar: "السعودية · الخليج · مصر.", en: "KSA · GCC · Egypt." } as Bi,
    contactLabel: { ar: "تواصل", en: "Contact" } as Bi,
    legalLabel: { ar: "قانوني", en: "Legal" } as Bi,
    privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" } as Bi,
    terms: { ar: "الشروط والأحكام", en: "Terms" } as Bi,
    crLabel: { ar: "السجل التجاري", en: "Commercial Registration" } as Bi,
    // Trust strip: renders only when config.crNumber is set.
    trustStrip: {
      ar: `مرخّصة من وزارة التجارة · س.ت. ${config.crNumber} · مقرها ${config.cityAr}، المملكة العربية السعودية`,
      en: `Licensed by the Ministry of Commerce · CR ${config.crNumber} · Headquartered in ${config.cityEn}, Saudi Arabia`,
    } as Bi,
    copyright: {
      ar: `© ${config.year} Watad. كل الحقوق محفوظة.`,
      en: `© ${config.year} Watad. All rights reserved.`,
    } as Bi,
  },

  trustedBy: {
    overline: { ar: "القطاعات", en: "SECTORS WE SUPPORT" } as Bi,
    h2: { ar: "القطاعات التي ندعمها", en: "Sectors we support" } as Bi,
    // Operational category signals — the landscape Watad operates within.
    // No client names, no logos. Pre-first-pilot: nothing implied as a client.
    sectors: [
      { ar: "البرامج الحكومية", en: "Government Programs" } as Bi,
      { ar: "الفعاليات والأماكن", en: "Events & Venues" } as Bi,
      { ar: "مجموعات الضيافة", en: "Hospitality Groups" } as Bi,
      { ar: "الرياضة والترفيه", en: "Sports & Entertainment" } as Bi,
      { ar: "شبكات التجزئة", en: "Retail Networks" } as Bi,
      { ar: "المكاتب التنفيذية", en: "Executive Offices" } as Bi,
      { ar: "العمليات متعددة المدن", en: "Multi-City Operations" } as Bi,
      { ar: "الفرق التشغيلية", en: "Operational Teams" } as Bi,
    ] as Bi[],
    closing: {
      ar: "القاسم المشترك: عمليات تجارية معقدة تستحق بنية تشغيلية منضبطة.",
      en: "The common thread: complex commercial operations that warrant disciplined infrastructure.",
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
          ar: "تقرير يومي مختصر، مراجعة أسبوعية، وتقرير ختامي في اليوم الثلاثين. رؤية كاملة لكل ما يحدث في خط التواصل والمتابعة.",
          en: "A brief daily report, a weekly review, and a Day-30 close-out report. Full visibility into every action in the outreach and follow-up cadence.",
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
          ar: "نلتزم بعدد محدد من اللقاءات المؤهلة في 30 يوماً، مُثبَّت كتابياً قبل الانطلاق. إن لم نصل للعدد المتفق عليه، رسم النجاح يُلغى ولا يُستحق.",
          en: "We commit to a defined number of qualified meetings in 30 days, recorded in writing before work begins. If the target is not delivered, the success fee is waived and not owed.",
        } as Bi,
      },
      {
        title: { ar: "حصرية القطاع", en: "Sector Exclusivity" } as Bi,
        body: {
          ar: "لا نعمل مع شركتين متنافستين في نفس القطاع في آنٍ واحد. العميل النشط يملك حصرية قطاعه طوال فترة الالتزام.",
          en: "We do not work with competing firms in the same sector simultaneously. The active client owns sector exclusivity for the duration of the engagement.",
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
