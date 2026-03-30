import type { LanguageCode } from "@/lib/site-preferences";

type HomeDictionary = {
  about: {
    badge: string;
    body: string;
    cardTitle: string;
    focusAreas: string[];
    points: string[];
    title: string;
  };
  contactCta: {
    badge: string;
    body: string;
    bookingLabel: string;
    dmLabel: string;
    fallbackLabel: string;
    fallbackNote: string;
    title: string;
  };
  freePlanTeaser: {
    badge: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
    title: string;
  };
  gallery: {
    badge: string;
    body: string;
    items: Array<{
      alt: string;
      description: string;
      title: string;
    }>;
    title: string;
  };
  hero: {
    badge: string;
    body: string;
    note: string;
    primaryLabel: string;
    proofPoints: string[];
    secondaryFallbackLabel: string;
    secondaryInstagramLabel: string;
    secondaryBookingLabel: string;
    title: string;
    eyebrow: string;
  };
  howItWorks: {
    badge: string;
    body: string;
    steps: Array<{
      description: string;
      title: string;
    }>;
    title: string;
  };
};

type FreePlanDictionary = {
  intro: {
    badge: string;
    body: string;
    title: string;
  };
  form: {
    badge: string;
    body: string;
    fields: {
      biggestStruggle: {
        label: string;
        placeholder: string;
      };
      budget: {
        label: string;
        placeholder: string;
      };
      currentLevel: {
        label: string;
        placeholder: string;
      };
      goal: {
        label: string;
        placeholder: string;
      };
      timeCommitment: {
        label: string;
        placeholder: string;
      };
    };
    note: string;
    options: {
      budget: string[];
      currentLevel: string[];
      timeCommitment: string[];
    };
    submit: string;
    submitting: string;
    submittingNote: string;
    title: string;
    validation: {
      biggestStruggleMax: string;
      biggestStruggleMin: string;
      budgetInvalid: string;
      currentLevelRequired: string;
      goalMax: string;
      goalMin: string;
      timeCommitmentRequired: string;
    };
  };
  messages: {
    genericError: string;
    incompleteResponse: string;
  };
  result: {
    badge: string;
    body: string;
    contextLabels: {
      budget: string;
      currentLevel: string;
      timeCommitment: string;
    };
    cta: {
      badge: string;
      bookingLabel: string;
      dmLabel: string;
      fallbackLabel: string;
      fallbackNote: string;
      title: string;
    };
    sectionLabels: {
      biggestBottleneck: string;
      focusNext7Days: string;
      goalClarity: string;
      simplePlan: string;
    };
    title: string;
  };
};

type ContactDictionary = {
  badge: string;
  body: string;
  bookingLabel: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  detailsTitle: string;
  dmLabel: string;
  note: string;
  title: string;
};

export type SiteDictionary = {
  contact: ContactDictionary;
  footer: {
    bookingLabel: string;
    description: string;
    dmLabel: string;
    quickLinksLabel: string;
    rights: string;
  };
  freePlan: FreePlanDictionary;
  home: HomeDictionary;
  nav: {
    contact: string;
    darkModeText: string;
    freePlan: string;
    home: string;
    languageLabel: string;
    lightModeText: string;
    menuLabel: string;
    siteName: string;
    switchToDark: string;
    switchToLight: string;
    themeLabel: string;
  };
};

const dictionaries: Record<LanguageCode, SiteDictionary> = {
  en: {
    nav: {
      contact: "Contact",
      darkModeText: "Dark",
      freePlan: "Free Plan",
      home: "Home",
      languageLabel: "Language",
      lightModeText: "Light",
      menuLabel: "Menu",
      siteName: "Alex Carter",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      themeLabel: "Theme",
    },
    footer: {
      bookingLabel: "Book a coaching call",
      description:
        "Online personal training for busy adults who want clearer structure, better habits, and steady progress.",
      dmLabel: "DM on Instagram",
      quickLinksLabel: "Quick links",
      rights: "All rights reserved.",
    },
    home: {
      hero: {
        badge: "Alex Carter | Online Personal Trainer",
        body:
          "Alex helps busy adults train with more structure, build better habits, and stop guessing what to do next. Start with a free personalized starter plan to see what deserves your focus first.",
        note:
          "If you want a quick first step, the personalized plan will show you what to focus on now. If you want help applying it, you can book a coaching call or start the conversation in DMs.",
        primaryLabel: "Get my personalized plan",
        proofPoints: [
          "Build a routine you can actually stick to",
          "Get clear on what to focus on first",
          "Start with simple habits that fit real life",
        ],
        secondaryBookingLabel: "Book a coaching call",
        secondaryFallbackLabel: "Contact Alex",
        secondaryInstagramLabel: "DM Alex on Instagram",
        title: "Get a clearer plan for fat loss, muscle gain, and consistency",
        eyebrow: "For busy adults who want a plan they can stick to",
      },
      about: {
        badge: "About Alex",
        body:
          "Alex Carter is an online personal trainer focused on helping busy adults lose fat, build muscle, and stay consistent without turning fitness into a second full-time job. The approach is practical, clear, and built around what someone can actually sustain week to week.",
        cardTitle: "What the coaching focuses on",
        focusAreas: ["Training structure", "Nutrition habits", "Consistency"],
        points: [
          "Helps busy adults build a training routine that fits real schedules.",
          "Focuses on simple nutrition habits, steady progress, and better consistency.",
          "Uses straightforward starter plans so the next step feels realistic from day one.",
        ],
        title:
          "Simple coaching built around realistic routines and steady progress.",
      },
      howItWorks: {
        badge: "How the process works",
        body:
          "The goal is to make the next move easier to see, so you can stop overthinking the process and focus on what will help most right now.",
        steps: [
          {
            title: "Share your goal and current routine",
            description:
              "Answer a few quick questions about your goal, your current level, and what has been getting in the way.",
          },
          {
            title: "Get your personalized starter plan",
            description:
              "The intake turns your answers into a practical first-pass plan with the clearest next steps to focus on.",
          },
          {
            title: "Book a call or send a DM",
            description:
              "If the plan feels right, the next step is simple: talk it through with Alex and get help applying it.",
          },
        ],
        title: "A simple first step before you commit to coaching",
      },
      gallery: {
        badge: "Inside the coaching style",
        body:
          "A strong trainer site should feel visual, calm, and grounded in real coaching moments. This section adds atmosphere without turning the page into a noisy transformation feed.",
        items: [
          {
            alt: "Trainer coaching on the gym floor",
            description:
              "Training sessions should feel guided, focused, and easy to trust.",
            title: "Coaching on the floor",
          },
          {
            alt: "Fitness plan and habit tracking setup",
            description:
              "Simple planning and habit structure keep the process realistic.",
            title: "Simple weekly structure",
          },
          {
            alt: "Strength training environment",
            description:
              "The visual style stays clean and premium without relying on gimmicks.",
            title: "Strong training atmosphere",
          },
          {
            alt: "Lifestyle-focused personal training moment",
            description:
              "A trainer site should show progress that fits real life, not extremes.",
            title: "Lifestyle-based coaching",
          },
        ],
        title: "A premium trainer site should feel personal and believable",
      },
      freePlanTeaser: {
        badge: "Free personalized plan",
        body:
          "If you want a clear starting point, the free-plan page gives you a quick personalized outline before you book a call or send a DM.",
        primaryLabel: "Go to the free plan",
        secondaryLabel: "Contact Alex",
        title: "See what to focus on first",
      },
      contactCta: {
        badge: "Ready to take this further?",
        body:
          "If the plan feels like the right fit, the next move is simple: book a coaching call or start the conversation on Instagram.",
        bookingLabel: "Book a coaching call",
        dmLabel: "DM on Instagram",
        fallbackLabel: "Contact Alex",
        fallbackNote:
          "If booking or Instagram is easier for you, you can also use the contact page to reach out directly.",
        title: "Keep the next step simple",
      },
    },
    freePlan: {
      intro: {
        badge: "Free personalized plan",
        body:
          "Answer a few focused questions about your goal, your routine, and what has been getting in the way. You’ll get a simple starter plan that shows what to focus on next.",
        title: "Get your personalized fitness starter plan",
      },
      form: {
        badge: "Free personalized plan",
        body:
          "This short intake helps Alex see where your progress may be getting stuck, then turn that into a practical starter plan you can use right away.",
        fields: {
          biggestStruggle: {
            label: "What is the biggest thing getting in your way?",
            placeholder:
              "For example: lack of consistency, not knowing what to do at the gym, low energy, nutrition habits, or trouble staying on track.",
          },
          budget: {
            label: "What budget feels realistic for support right now?",
            placeholder: "Select a budget range (optional)",
          },
          currentLevel: {
            label: "What best describes your current level?",
            placeholder: "Select your current level",
          },
          goal: {
            label: "What is your main fitness goal right now?",
            placeholder:
              "For example: lose body fat, build muscle, feel stronger, or get back into a routine I can actually stick to.",
          },
          timeCommitment: {
            label: "How much time can you realistically commit each week?",
            placeholder: "Select your time commitment",
          },
        },
        note:
          "You’ll get a simple first-pass plan with the clearest next step to focus on, then you can decide whether to book a call or start in DMs.",
        options: {
          budget: [
            "Under 30,000 HUF/month",
            "30,000-80,000 HUF/month",
            "80,000-150,000 HUF/month",
            "150,000+ HUF/month",
            "Not sure yet",
          ],
          currentLevel: [
            "Just getting started",
            "Back into training after a break",
            "Training inconsistently",
            "Training regularly but not seeing results",
          ],
          timeCommitment: [
            "2 workouts a week",
            "3 workouts a week",
            "4 workouts a week",
            "5+ workouts a week",
          ],
        },
        submit: "Get my personalized plan",
        submitting: "Building your personalized plan...",
        submittingNote:
          "Generating Alex Carter’s personalized plan from your answers.",
        title: "Answer a few quick questions",
        validation: {
          biggestStruggleMax: "Keep this under 500 characters.",
          biggestStruggleMin: "Enter at least 10 characters.",
          budgetInvalid: "Select a valid budget range or leave it blank.",
          currentLevelRequired: "Select your current level.",
          goalMax: "Keep this under 500 characters.",
          goalMin: "Enter at least 10 characters.",
          timeCommitmentRequired: "Select your time commitment.",
        },
      },
      messages: {
        genericError: "Unable to generate a plan right now. Please try again.",
        incompleteResponse:
          "The plan response was incomplete. Please try again.",
      },
      result: {
        badge: "Your personalized starter plan",
        body:
          "Based on what you shared, this is the kind of practical guidance Alex would use to help you simplify the next step instead of trying to fix everything at once.",
        contextLabels: {
          budget: "Budget",
          currentLevel: "Current level",
          timeCommitment: "Time commitment",
        },
        cta: {
          badge: "Continue with Alex",
          bookingLabel: "Book a coaching call",
          dmLabel: "DM Alex on Instagram",
          fallbackLabel: "Go to contact page",
          fallbackNote:
            "These actions are ready to connect directly to Alex’s booking page and Instagram inbox.",
          title: "Want help applying this plan?",
        },
        sectionLabels: {
          biggestBottleneck: "Biggest obstacle",
          focusNext7Days: "What to focus on next 7 days",
          goalClarity: "Goal clarity",
          simplePlan: "Simple starter plan",
        },
        title: "Here’s where Alex would focus first",
      },
    },
    contact: {
      badge: "Contact",
      body:
        "If you want help applying the plan, improving your routine, or talking through the next step, this page gives you a clean way to start the conversation.",
      bookingLabel: "Book a coaching call",
      details: [
        {
          label: "Coaching format",
          value: "Online coaching with personalized plans and check-ins",
        },
        {
          label: "Best fit",
          value: "Busy adults focused on fat loss, muscle gain, and consistency",
        },
        {
          label: "Reply rhythm",
          value: "Usually within one business day",
        },
      ],
      detailsTitle: "What to expect",
      dmLabel: "DM on Instagram",
      note:
        "If booking or Instagram feels easiest, use those. If you would rather ask a quick question first, reach out here.",
      title: "Reach out when you’re ready for the next step",
    },
  },
  hu: {
    nav: {
      contact: "Kapcsolat",
      darkModeText: "S\u00f6t\u00e9t",
      freePlan: "Ingyenes terv",
      home: "Kezdőlap",
      languageLabel: "Nyelv",
      lightModeText: "Vil\u00e1gos",
      menuLabel: "Menü",
      siteName: "Alex Carter",
      switchToDark: "Váltás sötét módra",
      switchToLight: "Váltás világos módra",
      themeLabel: "Téma",
    },
    footer: {
      bookingLabel: "Időpontfoglalás",
      description:
        "Online személyi edzés elfoglalt felnőtteknek, akik átláthatóbb struktúrát, jobb szokásokat és stabil fejlődést szeretnének.",
      dmLabel: "Írj Instagramon",
      quickLinksLabel: "Gyors linkek",
      rights: "Minden jog fenntartva.",
    },
    home: {
      hero: {
        badge: "Alex Carter | Online személyi edző",
        body:
          "Alex elfoglalt felnőtteknek segít abban, hogy rendezettebben eddzenek, jobb szokásokat építsenek, és ne találgatniuk kelljen a következő lépést. Kezdd egy ingyenes, személyre szabott induló tervvel, és nézd meg, mire érdemes először fókuszálnod.",
        note:
          "Ha gyors első lépést szeretnél, a személyre szabott terv megmutatja, mire figyelj most. Ha segítséget is kérnél a megvalósításhoz, foglalhatsz hívást vagy írhatsz Instagramon.",
        primaryLabel: "Kérem a személyre szabott tervem",
        proofPoints: [
          "Építs olyan rutint, amit tényleg tartani tudsz",
          "Lásd tisztán, mire érdemes először fókuszálnod",
          "Kezdd egyszerű szokásokkal, amik beleférnek a való életbe",
        ],
        secondaryBookingLabel: "Időpontfoglalás",
        secondaryFallbackLabel: "Kapcsolat",
        secondaryInstagramLabel: "Írj Alexnek Instagramon",
        title:
          "Kapj egy tisztább tervet zsírégetéshez, izomépítéshez és a következetességhez",
        eyebrow: "Elfoglalt felnőtteknek, akik tartható tervet szeretnének",
      },
      about: {
        badge: "Alexről",
        body:
          "Alex Carter online személyi edzőként abban segít elfoglalt felnőtteknek, hogy zsírt veszítsenek, izmot építsenek, és következetesebbek legyenek anélkül, hogy a fitnesz egy második teljes állássá válna. A megközelítés gyakorlatias, átlátható, és arra épül, amit valaki valóban fenn tud tartani hétről hétre.",
        cardTitle: "Mire fókuszál a coaching",
        focusAreas: ["Edzésstruktúra", "Táplálkozási szokások", "Következetesség"],
        points: [
          "Elfoglalt felnőtteknek segít olyan edzésrutint kialakítani, ami belefér a való életbe.",
          "Egyszerű táplálkozási szokásokra, egyenletes haladásra és jobb következetességre épít.",
          "Gyakorlati induló terveket használ, hogy a következő lépés már az elejétől reális legyen.",
        ],
        title:
          "Egyszerű coaching reális rutinokra és egyenletes fejlődésre építve.",
      },
      howItWorks: {
        badge: "Így működik",
        body:
          "A cél az, hogy könnyebben lásd a következő lépést, és ne kelljen túlgondolnod az egészet, hanem arra fókuszálj, ami most a legtöbbet segíti.",
        steps: [
          {
            title: "Oszd meg a célod és a jelenlegi helyzeted",
            description:
              "Válaszolj néhány rövid kérdésre a célodról, a jelenlegi szintedről és arról, mi akadályoz most leginkább.",
          },
          {
            title: "Kapd meg a személyre szabott induló terved",
            description:
              "A kitöltésből egy gyakorlatias első terv készül, ami megmutatja, mire érdemes most leginkább fókuszálnod.",
          },
          {
            title: "Foglalj hívást vagy írj üzenetet",
            description:
              "Ha a terv szimpatikus, a következő lépés egyszerű: beszéljétek át Alexszel, és kapj segítséget a megvalósításhoz.",
          },
        ],
        title: "Egy egyszerű első lépés, mielőtt coachingba vágnál",
      },
      gallery: {
        badge: "Edzői weboldal galéria",
        body:
          "Egy jó edzői oldal legyen vizuális, prémium hatású és valós coaching helyzetekre épülő. Ez a szekció megmutatja, milyen hangulatot és képi világot kaphat egy kész ügyféloldal.",
        items: [
          {
            alt: "Edzői segítség az edzőteremben",
            description:
              "Az edzéseknek vezetettnek, fókuszáltnak és bizalomépítőnek kell hatniuk.",
            title: "Coaching az edzőteremben",
          },
          {
            alt: "Edzésterv és szokáskövetés",
            description:
              "Az egyszerű tervezés és a jó szokásrendszer teszi reálissá a folyamatot.",
            title: "Egyszerű heti struktúra",
          },
          {
            alt: "Erőnléti edzés hangulata",
            description:
              "A vizuális stílus maradjon letisztult és prémium, fölösleges túlzás nélkül.",
            title: "Erős edzés hangulat",
          },
          {
            alt: "Életmódalapú személyi edzés pillanat",
            description:
              "Egy jó edzői oldal való életbe illő fejlődést mutat, nem szélsőségeket.",
            title: "Életmódba illő coaching",
          },
        ],
        title:
          "Egy edzői oldalnak olyan erősnek kell hatnia, mint maga az ajánlat",
      },
      freePlanTeaser: {
        badge: "Ingyenes személyre szabott terv",
        body:
          "A külön ingyenes-terv oldal legyen a fő leadgyűjtő lépés. Gyors, hasznos első eredményt ad, mielőtt valaki időpontot foglal vagy írna Instagramon.",
        primaryLabel: "Tovább az ingyenes tervhez",
        secondaryLabel: "Kapcsolat oldal megnyitása",
        title: "Az AI induló terv legyen egy fókuszált belépő pont",
      },
      contactCta: {
        badge: "Készen állsz a következő lépésre?",
        body:
          "Ha ez a terv jó iránynak tűnik, a következő lépés egyszerű: foglalj egy coaching hívást, vagy írj Alexnek Instagramon.",
        bookingLabel: "Időpontfoglalás",
        dmLabel: "Írj Instagramon",
        fallbackLabel: "Kapcsolat",
        fallbackNote:
          "Ezekhez a gombokhoz egy élő ügyféloldalon közvetlen foglalási és Instagram link csatlakoztatható.",
        title: "A weboldal legyen kész valódi érdeklődőkre is",
      },
    },
    freePlan: {
      intro: {
        badge: "Ingyenes személyre szabott terv",
        body:
          "Válaszolj néhány rövid kérdésre a célodról, a rutinodról és arról, mi akadályoz most leginkább. Egy egyszerű induló tervet kapsz, ami megmutatja, mire érdemes most fókuszálnod.",
        title: "Kérd a személyre szabott fitnesz induló terved",
      },
      form: {
        badge: "Ingyenes személyre szabott terv",
        body:
          "Ez a rövid kitöltés segít Alexnek megérteni, hol akadhat el a fejlődésed, majd ebből egy gyakorlatias induló tervet készít, amit azonnal használhatsz.",
        fields: {
          biggestStruggle: {
            label: "Mi akadályoz a legjobban jelenleg?",
            placeholder:
              "Például: nehéz tartani a rutint, nem tudod mit csinálj az edzőteremben, alacsony az energiaszinted, gond a táplálkozás, vagy nehéz következetesnek maradni.",
          },
          budget: {
            label: "Mekkora keret lenne most reális támogatásra?",
            placeholder: "Válassz egy ársávot (opcionális)",
          },
          currentLevel: {
            label: "Melyik ír le legjobban most?",
            placeholder: "Válaszd ki a jelenlegi szinted",
          },
          goal: {
            label: "Mi a fő fitnesz célod most?",
            placeholder:
              "Például: testzsírt csökkenteni, izmot építeni, erősebb lenni, vagy visszatérni egy tartható rutinba.",
          },
          timeCommitment: {
            label: "Mennyi időt tudsz reálisan rászánni hetente?",
            placeholder: "Válaszd ki az időráfordításod",
          },
        },
        note:
          "Egy egyszerű első tervet kapsz a legfontosabb következő lépéssel, utána eldöntheted, hogy hívást foglalsz vagy inkább üzenetet írsz.",
        options: {
          budget: [
            "30 000 Ft/hó alatt",
            "30 000-80 000 Ft/hó",
            "80 000-150 000 Ft/hó",
            "150 000+ Ft/hó",
            "Még nem tudom",
          ],
          currentLevel: [
            "Most kezdem",
            "Kihagyás után térnék vissza",
            "Rendszertelenül edzek",
            "Rendszeresen edzek, de nem jön az eredmény",
          ],
          timeCommitment: [
            "Heti 2 edzés",
            "Heti 3 edzés",
            "Heti 4 edzés",
            "Heti 5+ edzés",
          ],
        },
        submit: "Kérem a személyre szabott tervem",
        submitting: "Készül a személyre szabott terved...",
        submittingNote:
          "Alex Carter személyre szabott tervét készítjük a válaszaid alapján.",
        title: "Válaszolj néhány rövid kérdésre",
        validation: {
          biggestStruggleMax: "Legfeljebb 500 karakter lehet.",
          biggestStruggleMin: "Írj legalább 10 karaktert.",
          budgetInvalid: "Válassz érvényes ársávot vagy hagyd üresen.",
          currentLevelRequired: "Válaszd ki a jelenlegi szinted.",
          goalMax: "Legfeljebb 500 karakter lehet.",
          goalMin: "Írj legalább 10 karaktert.",
          timeCommitmentRequired: "Válaszd ki az időráfordításod.",
        },
      },
      messages: {
        genericError:
          "A tervet most nem sikerült elkészíteni. Kérlek, próbáld újra.",
        incompleteResponse:
          "A kapott terv hiányos volt. Kérlek, próbáld újra.",
      },
      result: {
        badge: "A személyre szabott induló terved",
        body:
          "A megadott válaszok alapján ez az a gyakorlatias irány, amivel Alex először egyszerűsítené a következő lépést, ahelyett hogy mindent egyszerre próbálnál megoldani.",
        contextLabels: {
          budget: "Keret",
          currentLevel: "Jelenlegi szint",
          timeCommitment: "Időráfordítás",
        },
        cta: {
          badge: "Folytasd Alexszel",
          bookingLabel: "Időpontfoglalás",
          dmLabel: "Írj Alexnek Instagramon",
          fallbackLabel: "Kapcsolat oldal",
          fallbackNote:
            "Ezek a gombok egy élő ügyféloldalon közvetlenül a foglalási oldalra és az Instagram üzenetekhez vezetnének.",
          title: "Szeretnél segítséget a megvalósításhoz?",
        },
        sectionLabels: {
          biggestBottleneck: "Legnagyobb akadály",
          focusNext7Days: "Mire fókuszálj a következő 7 napban",
          goalClarity: "A cél tisztázása",
          simplePlan: "Egyszerű induló terv",
        },
        title: "Alex erre fókuszálna először",
      },
    },
    contact: {
      badge: "Kapcsolat",
      body:
        "Ha szeretnél segítséget a terv megvalósításához, a rutinod finomításához, vagy egyszerűen átbeszélnéd a következő lépést, itt tiszta és egyszerű módon el tudod indítani a beszélgetést.",
      bookingLabel: "Időpontfoglalás",
      details: [
        {
          label: "Coaching forma",
          value: "Online coaching személyre szabott tervekkel és check-inekkel",
        },
        {
          label: "Kinek ideális",
          value: "Elfoglalt felnőtteknek, akik zsírt csökkentenének, izmot építenének és következetesebbek lennének",
        },
        {
          label: "Válaszidő",
          value: "Általában 1 munkanapon belül",
        },
      ],
      detailsTitle: "Mire számíthatsz",
      dmLabel: "Írj Instagramon",
      note:
        "Ez az oldal maradjon egyszerű és konverzióbarát, hogy egy valódi edző ügyfél könnyen kicserélhesse a saját foglalási linkjére, Instagramjára és elérhetőségeire.",
      title: "Keress, amikor készen állsz a következő lépésre",
    },
  },
};

export function getDictionary(language: LanguageCode): SiteDictionary {
  const dictionary = dictionaries[language];

  if (language !== "hu") {
    return dictionary;
  }

  return {
    ...dictionary,
    nav: {
      ...dictionary.nav,
      darkModeText: "S\u00f6t\u00e9t",
      home: "Kezd\u0151lap",
      lightModeText: "Vil\u00e1gos",
      menuLabel: "Men\u00fc",
      switchToDark: "V\u00e1lt\u00e1s s\u00f6t\u00e9t m\u00f3dra",
      switchToLight: "V\u00e1lt\u00e1s vil\u00e1gos m\u00f3dra",
      themeLabel: "T\u00e9ma",
    },
    home: {
      ...dictionary.home,
      gallery: {
        ...dictionary.home.gallery,
        badge: "Az edz\u0151i st\u00edlus hangulata",
        body:
          "Egy er\u0151s edz\u0151i oldal legyen vizu\u00e1lis, nyugodt hat\u00e1s\u00fa, \u00e9s val\u00f3s coaching helyzetekre \u00e9p\u00fclj\u00f6n. Ez a szekci\u00f3 hangulatot ad az oldalnak an\u00e9lk\u00fcl, hogy t\u00falzs\u00fafolt lenne.",
        title: "Egy pr\u00e9mium edz\u0151i oldal legyen szem\u00e9lyes \u00e9s hiteles",
      },
      freePlanTeaser: {
        ...dictionary.home.freePlanTeaser,
        body:
          "Ha szeretn\u00e9l egy tiszta kiindul\u00f3pontot, az ingyenes terv oldalon gyors, szem\u00e9lyre szabott ir\u00e1nyt kapsz, miel\u0151tt id\u0151pontot foglaln\u00e1l vagy \u00edrn\u00e1l Instagramon.",
        secondaryLabel: "Kapcsolat",
        title: "N\u00e9zd meg, mire \u00e9rdemes el\u0151sz\u00f6r f\u00f3kusz\u00e1lnod",
      },
      contactCta: {
        ...dictionary.home.contactCta,
        fallbackNote:
          "Ha neked egyszer\u0171bb, a kapcsolat oldalon kereszt\u00fcl is el tudod ind\u00edtani a besz\u00e9lget\u00e9st.",
        title: "Maradjon egyszer\u0171 a k\u00f6vetkez\u0151 l\u00e9p\u00e9s",
      },
    },
    contact: {
      ...dictionary.contact,
      note:
        "Ha az id\u0151pontfoglal\u00e1s vagy az Instagram a legegyszer\u0171bb, haszn\u00e1ld azt. Ha ink\u00e1bb el\u0151sz\u00f6r k\u00e9rdezn\u00e9l valamit, itt is el\u00e9red Alexet.",
    },
  };
}
