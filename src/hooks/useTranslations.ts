import { useState } from 'react';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  whyYawya: {
    title: string;
    points: string[];
  };
  howItWorks: {
    title: string;
    steps: {
      capture: string;
      render: string;
      see: string;
    };
  };
  vision: {
    text: string;
  };
  forMaisons: {
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  footer: {
    legal: string;
    contact: string;
    social: string;
  };
}

const translations: Record<string, Translations> = {
  en: {
    hero: {
      title: "Play with the Future of Fashion",
      subtitle: "Effortless virtual fitting, powered by proprietary AI — designed for discerning fashion maisons.",
      cta: "Request Your Demo"
    },
    whyYawya: {
      title: "Why YAWYA",
      points: [
        "An engaging boutique moment — bring AI fitting to life in-store, beautifully.",
        "Smart meets sensorial — see yourself in the garment, instantly and elegantly.",
        "Tailored for tomorrow — a hint at what's next, grounded in today's tech."
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: {
        capture: "Capture — discreet scanning, shaped for salon settings.",
        render: "Render — our proprietary AI brings garments to life on your silhouette.",
        see: "See — photorealistic representation, instantly visible and intuitive."
      }
    },
    vision: {
      text: "Every YAWYA fitting is a step towards a world where fashion is made-to-order, as unique as the person wearing it."
    },
    forMaisons: {
      title: "For Fashion Maisons",
      description: "Create new experiences, reduce returns, stand apart.",
      cta: "Schedule Your Private Presentation"
    },
    about: {
      title: "About",
      description: "AI meets real-world fashion — quick fittings, limitless exploration for your customers."
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      social: "Follow us"
    }
  },
  fr: {
    hero: {
      title: "Jouez avec l'avenir de la mode",
      subtitle: "L'essayage virtuel, sans effort, par une IA propriétaire — conçu pour les maisons de mode.",
      cta: "Demandez une démo"
    },
    whyYawya: {
      title: "Pourquoi YAWYA",
      points: [
        "Une expérience engageante — donnez vie à l'essayage IA en boutique.",
        "Intelligence et sensorialité — voyez-vous instantanément avec toute la collection.",
        "Pensé pour demain — un aperçu de l'avenir, ancré à la pointe de la technologie."
      ]
    },
    howItWorks: {
      title: "Comment ça Marche",
      steps: {
        capture: "Capture — prise de vue discrète, conçue pour les boutiques.",
        render: "Rendu — notre IA propriétaire présente la collection sur votre silhouette.",
        see: "Visualiser — représentation photoréaliste, instantanée et intuitive."
      }
    },
    vision: {
      text: "Chaque essayage YAWYA est un pas vers un monde où la mode est faite à la commande, aussi unique que la personne qui la porte."
    },
    forMaisons: {
      title: "Pour les Maisons de Mode",
      description: "Créer de nouvelles expériences, réduire les retours, renforcer votre singularité.",
      cta: "Planifiez votre présentation privée"
    },
    about: {
      title: "À Propos",
      description: "L'IA réinvente l'essayage — toute la collection à portée de main."
    },
    footer: {
      legal: "Mentions légales",
      contact: "Contact",
      social: "Suivez-nous"
    }
  },
  it: {
    hero: {
      title: "Gioca con il Futuro della Moda",
      subtitle: "Prova virtuale senza sforzo, alimentata da IA proprietaria — progettata per maisons di moda esigenti.",
      cta: "Richiedi una Demo"
    },
    whyYawya: {
      title: "Perché YAWYA",
      points: [
        "Un'esperienza coinvolgente — dai vita alla prova IA in boutique.",
        "Intelligente incontra sensoriale — vediti istantaneamente con tutta la collezione.",
        "Progettato per il domani — uno sguardo al futuro, radicato nella tecnologia all'avanguardia."
      ]
    },
    howItWorks: {
      title: "Come Funziona",
      steps: {
        capture: "Cattura — ripresa discreta, progettata per le boutique.",
        render: "Rendering — la nostra IA proprietaria presenta la collezione sulla tua silhouette.",
        see: "Visualizza — rappresentazione fotorealistica, istantanea e intuitiva."
      }
    },
    vision: {
      text: "Ogni prova YAWYA è un passo verso un mondo dove la moda è su misura, unica come la persona che la indossa."
    },
    forMaisons: {
      title: "Per le Maisons di Moda",
      description: "Crea nuove esperienze, riduci i resi, rafforzare la tua unicità.",
      cta: "Programma la Tua Presentazione Privata"
    },
    about: {
      title: "Chi Siamo",
      description: "L'IA rivoluziona la prova — l'intera collezione a portata di mano."
    },
    footer: {
      legal: "Legale",
      contact: "Contatto",
      social: "Seguici"
    }
  }
};

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const t = translations[currentLanguage] || translations.en;

  return {
    t,
    currentLanguage,
    setLanguage: setCurrentLanguage,
  };
};