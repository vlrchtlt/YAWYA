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
      cta: "Request Your Exclusive Demo"
    },
    whyYawya: {
      title: "Why YAWYA",
      points: [
        "An engaging boutique moment — bring AI fitting to life in-store, beautifully.",
        "Smart meets sensorial — see yourself in the garment, instantly and elegantly.",
        "Tailored for the atelier of tomorrow — a hint at what's next, grounded in today's tech."
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: {
        capture: "Capture — discreet scanning, shaped for salon settings.",
        render: "Render — our proprietary AI brings garments to life on your silhouette.",
        see: "See — authentic representation, instantly visible and intuitive."
      }
    },
    vision: {
      text: "Every YAWYA fitting is a step towards a world where fashion is made-to-order, size-free, and as unique as the person wearing it."
    },
    forMaisons: {
      title: "For Fashion Maisons",
      description: "Enchant clients, reduce returns, stand apart.",
      cta: "Schedule Your Private Presentation"
    },
    about: {
      title: "About",
      description: "Where atelier sensibility meets AI precision — redefining how fashion is worn and imagined."
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
      subtitle: "L'essayage virtuel, sans effort, propulsé par une IA propriétaire — conçu pour les maisons de mode exigeantes.",
      cta: "Demandez votre démonstration exclusive"
    },
    whyYawya: {
      title: "Pourquoi YAWYA",
      points: [
        "Un moment boutique captivant — donnez vie à l'essayage IA en magasin, avec élégance.",
        "Intelligence et sensorialité — voyez-vous instantanément dans le vêtement, avec raffinement.",
        "Pensé pour l'atelier de demain — un aperçu de l'avenir, ancré dans la technologie d'aujourd'hui."
      ]
    },
    howItWorks: {
      title: "Comment ça Marche",
      steps: {
        capture: "Capture — scan discret, conçu pour les boutiques.",
        render: "Rendu — notre IA propriétaire fait apparaître le vêtement sur votre silhouette.",
        see: "Visualiser — représentation fidèle, instantanée et intuitive."
      }
    },
    vision: {
      text: "Chaque essayage YAWYA est un pas vers un monde où la mode est faite à la commande, sans tailles, et aussi unique que la personne qui la porte."
    },
    forMaisons: {
      title: "Pour les Maisons de Mode",
      description: "Enchanter les clients, réduire les retours, se distinguer.",
      cta: "Planifiez votre présentation privée"
    },
    about: {
      title: "À Propos",
      description: "Où le sens de l'atelier rencontre la précision de l'IA — redéfinir la manière dont la mode est portée et imaginée."
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
      cta: "Richiedi la Tua Demo Esclusiva"
    },
    whyYawya: {
      title: "Perché YAWYA",
      points: [
        "Un momento boutique coinvolgente — porta la prova IA alla vita in negozio, con eleganza.",
        "Intelligente incontra sensoriale — vediti nell'indumento, istantaneamente ed elegantemente.",
        "Su misura per l'atelier di domani — un assaggio del futuro, radicato nella tecnologia di oggi."
      ]
    },
    howItWorks: {
      title: "Come Funziona",
      steps: {
        capture: "Cattura — scansione discreta, progettata per ambienti salon.",
        render: "Rendering — la nostra IA proprietaria dà vita agli indumenti sulla tua silhouette.",
        see: "Visualizza — rappresentazione autentica, istantaneamente visibile e intuitiva."
      }
    },
    vision: {
      text: "Ogni prova YAWYA è un passo verso un mondo dove la moda è su misura, senza taglie, e unica come la persona che la indossa."
    },
    forMaisons: {
      title: "Per le Maisons di Moda",
      description: "Incanta i clienti, riduci i resi, distinguiti.",
      cta: "Programma la Tua Presentazione Privata"
    },
    about: {
      title: "Chi Siamo",
      description: "Dove la sensibilità dell'atelier incontra la precisione dell'IA — ridefinendo come la moda viene indossata e immaginata."
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