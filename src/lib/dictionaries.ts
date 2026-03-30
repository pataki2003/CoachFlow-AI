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
      bookingLabel: "Book a call",
      description:
        "Online personal training for busy adults who want a clear plan, better habits, and steady progress.",
      dmLabel: "DM on Instagram",
      quickLinksLabel: "Quick links",
      rights: "All rights reserved.",
    },
    home: {
      hero: {
        badge: "Alex Carter | Online Personal Trainer",
        body:
          "Get a free plan built around your goal, your routine, and the thing that has been holding you back.",
        note:
          "Start with the free plan. If you want help applying it, book a call or send a DM.",
        primaryLabel: "Get my plan",
        proofPoints: [
          "Stop starting over every Monday",
          "Know what to focus on this week",
          "Build habits that fit real life",
        ],
        secondaryBookingLabel: "Book a call",
        secondaryFallbackLabel: "Book a call",
        secondaryInstagramLabel: "DM on Instagram",
        title:
          "Lose fat, build muscle, and stay consistent with a plan that fits real life",
        eyebrow: "For busy adults who want results without overcomplicating fitness",
      },
      about: {
        badge: "Who this is for",
        body:
          "Alex Carter helps busy adults lose fat, build muscle, and stay consistent with simple training, clear habits, and a plan they can actually follow.",
        cardTitle: "What the coaching focuses on",
        focusAreas: ["Training plan", "Nutrition habits", "Consistency"],
        points: [
          "Simple training structure you can follow week to week.",
          "Nutrition habits that support progress without taking over your life.",
          "Consistency so you stop losing momentum and starting again.",
        ],
        title:
          "Online coaching for busy adults who want results they can actually keep.",
      },
      howItWorks: {
        badge: "How it works",
        body:
          "Start with a free plan. If it makes sense, book a call or send a DM and take the next step with Alex.",
        steps: [
          {
            title: "Tell Alex your goal",
            description:
              "Share your goal, your current level, and what is getting in the way.",
          },
          {
            title: "Get your free plan",
            description:
              "See what to focus on first without second-guessing every step.",
          },
          {
            title: "Book a call or send a DM",
            description:
              "If you want help applying it, Alex can help you turn the plan into a routine.",
          },
        ],
        title: "Get clear on your next step in three simple moves",
      },
      gallery: {
        badge: "What coaching looks like",
        body:
          "The goal is not to make fitness feel bigger. It is to make the right next step feel clear, practical, and easy to follow.",
        items: [
          {
            alt: "Trainer coaching on the gym floor",
            description:
              "Get direct guidance so you know what to do and what matters most.",
            title: "Guided coaching",
          },
          {
            alt: "Fitness plan and habit tracking setup",
            description:
              "A simple weekly structure makes consistency much easier to keep.",
            title: "A plan you can follow",
          },
          {
            alt: "Strength training environment",
            description:
              "Focused training builds confidence when you stop guessing each session.",
            title: "Focused training",
          },
          {
            alt: "Lifestyle-focused personal training moment",
            description:
              "Progress lasts longer when the routine fits your real life.",
            title: "Lifestyle-fit progress",
          },
        ],
        title: "Simple training. Better habits. Progress you can keep.",
      },
      freePlanTeaser: {
        badge: "Free personalized plan",
        body:
          "Answer a few quick questions and get a clear first step based on your goal, your routine, and your current level.",
        primaryLabel: "Get my plan",
        secondaryLabel: "Book a call",
        title: "Get your free plan and see what to focus on first",
      },
      contactCta: {
        badge: "Ready to get moving?",
        body:
          "Start with the free plan, book a call, or send a DM. The important part is knowing what to do next.",
        bookingLabel: "Book a call",
        dmLabel: "DM on Instagram",
        fallbackLabel: "See contact options",
        fallbackNote:
          "If booking or Instagram is not connected yet, use the contact page to reach out directly.",
        title: "Choose your next step and get moving",
      },
    },
    freePlan: {
      intro: {
        badge: "Free personalized plan",
        body:
          "Answer a few focused questions about your goal, your routine, and what has been getting in the way. You’ll get a simple starter plan that shows what to focus on next.",
        title: "Get your free fitness plan",
      },
      form: {
        badge: "Free personalized plan",
        body:
          "This quick intake helps Alex spot what is slowing you down and what to focus on first.",
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
        submit: "Get my plan",
        submitting: "Building your plan...",
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
        badge: "Your free plan",
        body:
          "Based on what you shared, this is the kind of practical guidance Alex would use to help you simplify the next step instead of trying to fix everything at once.",
        contextLabels: {
          budget: "Budget",
          currentLevel: "Current level",
          timeCommitment: "Time commitment",
        },
        cta: {
          badge: "Next step",
          bookingLabel: "Book a call",
          dmLabel: "DM on Instagram",
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

  if (language === "en") {
    return {
      ...dictionary,
      freePlan: {
        ...dictionary.freePlan,
        intro: {
          ...dictionary.freePlan.intro,
          body:
            "Answer a few quick questions and get a simple plan for fat loss, muscle gain, and consistency.",
          title: "Get your free fitness plan",
        },
        form: {
          ...dictionary.freePlan.form,
          body:
            "This quick intake helps Alex spot what is slowing you down and what to focus on first.",
          note:
            "You will get a clear first step, then you can book a call or send a DM if you want help applying it.",
          submit: "Get my plan",
          submitting: "Building your plan...",
          submittingNote: "Putting your plan together now.",
        },
        result: {
          ...dictionary.freePlan.result,
          badge: "Your free plan",
          body:
            "Based on what you shared, this is the first place Alex would focus so you can stop guessing and start moving.",
          cta: {
            ...dictionary.freePlan.result.cta,
            badge: "Next step",
            bookingLabel: "Book a call",
            dmLabel: "DM on Instagram",
            fallbackNote:
              "If booking or Instagram is not connected yet, use the contact page and Alex will point you to the best next step.",
            title: "Want help putting this into action?",
          },
          title: "Here is what to focus on first",
        },
      },
      contact: {
        ...dictionary.contact,
        body:
          "If you want help applying the plan, improving your routine, or getting a clear next step, reach out here.",
        bookingLabel: "Book a call",
        dmLabel: "DM on Instagram",
        note:
          "If you have a quick question first, use the contact details below.",
        title: "Book a call or send a DM",
      },
    };
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
    footer: {
      ...dictionary.footer,
      bookingLabel: "Foglalj h\u00edv\u00e1st",
      description:
        "Online szem\u00e9lyi edz\u00e9s elfoglalt feln\u0151tteknek, akik tiszta tervet, jobb szok\u00e1sokat \u00e9s biztosabb halad\u00e1st szeretn\u00e9nek.",
      dmLabel: "\u00cdrj Instagramon",
    },
    home: {
      ...dictionary.home,
      hero: {
        ...dictionary.home.hero,
        body:
          "Kapj egy ingyenes tervet a c\u00e9lodra, a rutinodra \u00e9s arra a dologra szabva, ami most visszatart.",
        note:
          "Kezdd az ingyenes tervvel. Ha seg\u00edts\u00e9get is szeretn\u00e9l a megval\u00f3s\u00edt\u00e1shoz, foglalj egy h\u00edv\u00e1st vagy \u00edrj Instagramon.",
        primaryLabel: "K\u00e9rem a tervem",
        proofPoints: [
          "Ne kezdd \u00fajra minden h\u00e9tf\u0151n",
          "L\u00e1sd tiszt\u00e1n, mire f\u00f3kusz\u00e1lj ezen a h\u00e9ten",
          "\u00c9p\u00edts olyan szok\u00e1sokat, amik belef\u00e9rnek a val\u00f3 \u00e9letbe",
        ],
        secondaryBookingLabel: "Foglalj h\u00edv\u00e1st",
        secondaryFallbackLabel: "Foglalj h\u00edv\u00e1st",
        secondaryInstagramLabel: "\u00cdrj Instagramon",
        title:
          "Cs\u00f6kkents testzs\u00edrt, \u00e9p\u00edts izmot, \u00e9s maradj k\u00f6vetkezetes egy tarthat\u00f3 tervvel",
        eyebrow:
          "Elfoglalt feln\u0151tteknek, akik eredm\u00e9nyt akarnak t\u00falbonyol\u00edt\u00e1s n\u00e9lk\u00fcl",
      },
      about: {
        ...dictionary.home.about,
        badge: "Kinek sz\u00f3l",
        body:
          "Alex Carter elfoglalt feln\u0151tteknek seg\u00edt testzs\u00edrt cs\u00f6kkenteni, izmot \u00e9p\u00edteni \u00e9s k\u00f6vetkezetesnek maradni egyszer\u0171 edz\u00e9ssel, tiszta szok\u00e1sokkal \u00e9s egy k\u00f6vethet\u0151 tervvel.",
        focusAreas: [
          "Edz\u00e9sterv",
          "T\u00e1pl\u00e1lkoz\u00e1si szok\u00e1sok",
          "K\u00f6vetkezetess\u00e9g",
        ],
        points: [
          "Egyszer\u0171 edz\u00e9sstrukt\u00fara, amit h\u00e9tr\u0151l h\u00e9tre tudsz k\u00f6vetni.",
          "Olyan t\u00e1pl\u00e1lkoz\u00e1si szok\u00e1sok, amik t\u00e1mogatj\u00e1k a fejl\u0151d\u00e9st an\u00e9lk\u00fcl, hogy az eg\u00e9sz \u00e9leted err\u0151l sz\u00f3lna.",
          "K\u00f6vetkezetess\u00e9g, hogy ne vesz\u00edts lend\u00fcletet \u00e9s ne kelljen mindig el\u00f6lr\u0151l kezdened.",
        ],
        title:
          "Online coaching elfoglalt feln\u0151tteknek, akik tart\u00f3s eredm\u00e9nyt akarnak.",
      },
      howItWorks: {
        ...dictionary.home.howItWorks,
        badge: "\u00cdgy m\u0171k\u00f6dik",
        body:
          "Kezdd egy ingyenes tervvel. Ha j\u00f3 ir\u00e1nynak \u00e9rzed, foglalj h\u00edv\u00e1st vagy \u00edrj Instagramon, \u00e9s tedd meg a k\u00f6vetkez\u0151 l\u00e9p\u00e9st Alexszel.",
        steps: [
          {
            title: "Mondd el Alexnek a c\u00e9lod",
            description:
              "Oszd meg a c\u00e9lod, a jelenlegi szinted \u00e9s azt, mi tart vissza.",
          },
          {
            title: "Kapd meg az ingyenes terved",
            description:
              "L\u00e1sd tiszt\u00e1n, mire \u00e9rdemes el\u0151sz\u00f6r f\u00f3kusz\u00e1lnod an\u00e9lk\u00fcl, hogy mindent t\u00falgondoln\u00e1l.",
          },
          {
            title: "Foglalj h\u00edv\u00e1st vagy \u00edrj",
            description:
              "Ha seg\u00edts\u00e9get szeretn\u00e9l a megval\u00f3s\u00edt\u00e1shoz, Alex seg\u00edt rutinba tenni a tervet.",
          },
        ],
        title:
          "L\u00e1sd tiszt\u00e1n a k\u00f6vetkez\u0151 l\u00e9p\u00e9st 3 egyszer\u0171 l\u00e9p\u00e9sben",
      },
      gallery: {
        ...dictionary.home.gallery,
        badge: "Ilyen a coaching a gyakorlatban",
        body:
          "A c\u00e9l nem az, hogy a fitnesz nagyobbnak t\u0171nj\u00f6n. Az a c\u00e9l, hogy a k\u00f6vetkez\u0151 j\u00f3 l\u00e9p\u00e9s tiszta, gyakorlatias \u00e9s k\u00f6vethet\u0151 legyen.",
        items: [
          {
            alt: "Edz\u0151i seg\u00edts\u00e9g az edz\u0151teremben",
            description:
              "Kapj egy\u00e9rtelm\u0171 ir\u00e1nyt, hogy tudd, mit \u00e9rdemes csin\u00e1lnod \u00e9s mi sz\u00e1m\u00edt igaz\u00e1n.",
            title: "Vezetett coaching",
          },
          {
            alt: "Edz\u00e9sterv \u00e9s szok\u00e1sk\u00f6vet\u00e9s",
            description:
              "Egy egyszer\u0171 heti strukt\u00fara sokkal k\u00f6nnyebb\u00e9 teszi a k\u00f6vetkezetess\u00e9get.",
            title: "K\u00f6vethet\u0151 terv",
          },
          {
            alt: "Er\u0151nl\u00e9ti edz\u00e9s hangulata",
            description:
              "A f\u00f3kusz\u00e1lt edz\u00e9s magabiztoss\u00e1got ad, amikor nem minden alkalommal kell tal\u00e1lgatnod.",
            title: "F\u00f3kusz\u00e1lt edz\u00e9s",
          },
          {
            alt: "\u00c9letm\u00f3dalap\u00fa szem\u00e9lyi edz\u00e9s pillanat",
            description:
              "Az eredm\u00e9ny tov\u00e1bb tart, ha a rutin belef\u00e9r a val\u00f3 \u00e9letedbe.",
            title: "\u00c9lethez ill\u0151 fejl\u0151d\u00e9s",
          },
        ],
        title:
          "Egyszer\u0171 edz\u00e9s. Jobb szok\u00e1sok. Tart\u00f3sabb fejl\u0151d\u00e9s.",
      },
      freePlanTeaser: {
        ...dictionary.home.freePlanTeaser,
        body:
          "V\u00e1laszolj n\u00e9h\u00e1ny gyors k\u00e9rd\u00e9sre, \u00e9s kapj egy tiszta els\u0151 l\u00e9p\u00e9st a c\u00e9lod, a rutinod \u00e9s a jelenlegi szinted alapj\u00e1n.",
        primaryLabel: "K\u00e9rem a tervem",
        secondaryLabel: "Foglalj h\u00edv\u00e1st",
        title:
          "K\u00e9rd az ingyenes terved, \u00e9s l\u00e1sd, mire \u00e9rdemes el\u0151sz\u00f6r f\u00f3kusz\u00e1lnod",
      },
      contactCta: {
        ...dictionary.home.contactCta,
        badge: "K\u00e9szen \u00e1llsz belev\u00e1gni?",
        body:
          "Kezdd az ingyenes tervvel, foglalj h\u00edv\u00e1st, vagy \u00edrj Instagramon. A fontos az, hogy tudd, mi legyen a k\u00f6vetkez\u0151 l\u00e9p\u00e9s.",
        bookingLabel: "Foglalj h\u00edv\u00e1st",
        dmLabel: "\u00cdrj Instagramon",
        fallbackLabel: "Kapcsolati lehet\u0151s\u00e9gek",
        fallbackNote:
          "Ha a foglal\u00e1s vagy az Instagram m\u00e9g nincs bek\u00f6tve, a kapcsolat oldalon is el tudod ind\u00edtani a besz\u00e9lget\u00e9st.",
        title:
          "V\u00e1laszd ki a k\u00f6vetkez\u0151 l\u00e9p\u00e9sed, \u00e9s indulj el",
      },
    },
    freePlan: {
      ...dictionary.freePlan,
      intro: {
        ...dictionary.freePlan.intro,
        body:
          "V\u00e1laszolj n\u00e9h\u00e1ny gyors k\u00e9rd\u00e9sre, \u00e9s kapj egy egyszer\u0171 tervet zs\u00edrcs\u00f6kkent\u00e9shez, izom\u00e9p\u00edt\u00e9shez \u00e9s k\u00f6vetkezetess\u00e9ghez.",
        title: "K\u00e9rd az ingyenes fitnesz terved",
      },
      form: {
        ...dictionary.freePlan.form,
        body:
          "Ez a gyors kit\u00f6lt\u00e9s seg\u00edt Alexnek megl\u00e1tni, mi lass\u00edt most legink\u00e1bb, \u00e9s mire \u00e9rdemes el\u0151sz\u00f6r f\u00f3kusz\u00e1lnod.",
        note:
          "Kapsz egy tiszta els\u0151 l\u00e9p\u00e9st, ut\u00e1na foglalhatsz h\u00edv\u00e1st vagy \u00edrhatsz Instagramon, ha seg\u00edts\u00e9get szeretn\u00e9l a megval\u00f3s\u00edt\u00e1shoz.",
        submit: "K\u00e9rem a tervem",
        submitting: "K\u00e9sz\u00fcl a terved...",
        submittingNote: "Most \u00e1ll\u00edtjuk \u00f6ssze a terved.",
      },
      result: {
        ...dictionary.freePlan.result,
        badge: "A te ingyenes terved",
        body:
          "A v\u00e1laszaid alapj\u00e1n Alex el\u0151sz\u00f6r erre f\u00f3kusz\u00e1lna, hogy abbahagyd a tal\u00e1lgat\u00e1st \u00e9s el tudd kezdeni a halad\u00e1st.",
        cta: {
          ...dictionary.freePlan.result.cta,
          badge: "K\u00f6vetkez\u0151 l\u00e9p\u00e9s",
          bookingLabel: "Foglalj h\u00edv\u00e1st",
          dmLabel: "\u00cdrj Instagramon",
          fallbackNote:
            "Ha a foglal\u00e1s vagy az Instagram m\u00e9g nincs bek\u00f6tve, a kapcsolat oldalon kereszt\u00fcl Alex seg\u00edt a legjobb k\u00f6vetkez\u0151 l\u00e9p\u00e9sben.",
          title: "Szeretn\u00e9d ezt tettekre v\u00e1ltani?",
        },
        title:
          "Erre \u00e9rdemes most el\u0151sz\u00f6r f\u00f3kusz\u00e1lnod",
      },
    },
    contact: {
      ...dictionary.contact,
      body:
        "Ha seg\u00edts\u00e9get szeretn\u00e9l a terv megval\u00f3s\u00edt\u00e1s\u00e1hoz, a rutinod jav\u00edt\u00e1s\u00e1hoz, vagy egy tiszta k\u00f6vetkez\u0151 l\u00e9p\u00e9shez, itt el tudod ind\u00edtani a besz\u00e9lget\u00e9st.",
      bookingLabel: "Foglalj h\u00edv\u00e1st",
      dmLabel: "\u00cdrj Instagramon",
      note:
        "Ha van egy gyors k\u00e9rd\u00e9sed, haszn\u00e1ld az al\u00e1bbi el\u00e9rhet\u0151s\u00e9geket.",
      title: "Foglalj h\u00edv\u00e1st vagy \u00edrj",
    },
  };
}
