// Alle MSNA-sites: talen, pagina-adressen, menu's en vaste teksten (header/footer).
// Links tussen sites lopen via de filter `msnaUrl` (eleventy.config.js):
//   {{ "cleaning:contact" | msnaUrl(lang) }}  ->  /cleaning/en/contact/
// zodat een bezoeker altijd in dezelfde taal blijft.
//
// rootLang: die taal staat zonder taal-map in de URL (startpagina NL = "/").

const LANGS = ["nl", "en", "fr"];

// "MSNA home"-knop naar de startpagina, per taal
const homeButton = { nl: "MSNA home", en: "MSNA home", fr: "Accueil MSNA" };

const otherTag = { nl: "(ander MSNA-bedrijf)", en: "(another MSNA company)", fr: "(autre société MSNA)" };

export default {
  LANGS,
  homeButton,
  langNames: { nl: "Nederlands", en: "English", fr: "Français" },

  // ---------- Startpagina = MSNA Group Services ----------
  hub: {
    isHub: true,
    wordmark: "GROUP SERVICES",
    base: "/",
    rootLang: "nl",
    langs: LANGS,
    slugs: {
      home: { nl: "", en: "", fr: "" },
      about: { nl: "over/", en: "about/", fr: "a-propos/" },
      companies: { nl: "bedrijven/", en: "companies/", fr: "societes/" },
      partners: { nl: "samenwerken/", en: "partner-with-us/", fr: "partenariat/" },
      contact: { nl: "contact/", en: "contact/", fr: "contact/" },
      privacy: { nl: "privacy/", en: "privacy/", fr: "confidentialite/" },
    },
    navOrder: ["home", "about", "companies", "partners", "contact"],
    ctaKey: "contact",
    t: {
      nl: {
        sub: "ONDERNEMERSCHAP · DIENSTVERLENING · MODE · VASTGOED",
        nav: { home: "Home", about: "Over de groep", companies: "Onze bedrijven", partners: "Samenwerken", contact: "Contact", privacy: "Privacy" },
        cta: "Neem contact op",
        navHeading: "Navigatie",
        blurb: "MSNA Group Services brengt ondernemerschap, dienstverlening, mode en vastgoed samen onder één groep.",
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — bedrijfsgegevens en juridische informatie volgen voor publicatie.",
        privacy: "Privacyverklaring",
      },
      en: {
        sub: "ENTREPRENEURSHIP · SERVICES · FASHION · REAL ESTATE",
        nav: { home: "Home", about: "About the group", companies: "Our companies", partners: "Partner with us", contact: "Contact", privacy: "Privacy" },
        cta: "Get in touch",
        navHeading: "Navigation",
        blurb: "MSNA Group Services brings entrepreneurship, services, fashion and real estate together in one group.",
        bottom: "© 2026 MSNA Group Services. All rights reserved. Site in development — company and legal details to follow before launch.",
        privacy: "Privacy policy",
      },
      fr: {
        sub: "ENTREPRENEURIAT · SERVICES · MODE · IMMOBILIER",
        nav: { home: "Accueil", about: "Le groupe", companies: "Nos sociétés", partners: "Partenariat", contact: "Contact", privacy: "Confidentialité" },
        cta: "Nous contacter",
        navHeading: "Navigation",
        blurb: "MSNA Group Services réunit entrepreneuriat, services, mode et immobilier au sein d'un même groupe.",
        bottom: "© 2026 MSNA Group Services. Tous droits réservés. Site en développement — coordonnées légales à venir avant la mise en ligne.",
        privacy: "Politique de confidentialité",
      },
    },
  },

  // ---------- MSNA Cleaning & Support ----------
  cleaning: {
    wordmark: "CLEANING &amp; SUPPORT",
    base: "/cleaning/",
    langs: LANGS,
    slugs: {
      home: { nl: "", en: "", fr: "" },
      services: { nl: "diensten/", en: "services/", fr: "services/" },
      steam: { nl: "stoom-dieptereiniging/", en: "steam-deep-cleaning/", fr: "nettoyage-vapeur/" },
      approach: { nl: "werkwijze/", en: "our-approach/", fr: "notre-demarche/" },
      about: { nl: "over-msna/", en: "about/", fr: "a-propos/" },
      contact: { nl: "contact/", en: "contact/", fr: "contact/" },
    },
    navOrder: ["home", "services", "steam", "approach", "about", "contact"],
    ctaKey: "contact",
    email: "info@msna-cleaning.be",
    stripLinks: [
      { site: "mode", label: { nl: "Bekijk MSNA-Mode", en: "Visit MSNA-Mode", fr: "Découvrir MSNA-Mode" } },
      { site: "estate", label: { nl: "MSNA Estate", en: "MSNA Estate", fr: "MSNA Estate" } },
    ],
    t: {
      nl: {
        sub: "ONDERDEEL VAN MSNA GROUP SERVICES",
        nav: { home: "Home", services: "Diensten", steam: "Stoom- & Dieptereiniging", approach: "Onze aanpak", about: "Over MSNA", contact: "Contact" },
        cta: "Offerte aanvragen",
        navHeading: "Navigatie",
        blurb: "MSNA Cleaning & Support verzorgt de schoonmaak van kantoren, showrooms, sanitaire ruimtes en andere zakelijke locaties, met een aanpak die is afgestemd op elke werkomgeving.",
        strip: "MSNA Cleaning & Support maakt deel uit van MSNA Group Services, samen met MSNA-Mode en MSNA Estate.",
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — bedrijfsgegevens en juridische informatie volgen voor publicatie.",
        privacy: "Privacyverklaring",
      },
      en: {
        sub: "PART OF MSNA GROUP SERVICES",
        nav: { home: "Home", services: "Services", steam: "Steam & Deep Cleaning", approach: "Our Approach", about: "About MSNA", contact: "Contact" },
        cta: "Request a Quote",
        navHeading: "Navigation",
        blurb: "MSNA Cleaning & Support takes care of cleaning for offices, showrooms, washrooms and other business premises, with an approach built around each individual workplace.",
        strip: "MSNA Cleaning & Support is part of MSNA Group Services, alongside MSNA-Mode and MSNA Estate.",
        bottom: "© 2026 MSNA Group Services. All rights reserved. Site in development — company and legal details to follow before launch.",
        privacy: "Privacy policy",
      },
      fr: {
        sub: "FILIALE DE MSNA GROUP SERVICES",
        nav: { home: "Accueil", services: "Services", steam: "Nettoyage vapeur", approach: "Notre démarche", about: "À propos", contact: "Contact" },
        cta: "Demander un devis",
        navHeading: "Navigation",
        blurb: "MSNA Cleaning & Support assure le nettoyage de bureaux, showrooms, sanitaires et autres locaux professionnels, avec une approche adaptée à chaque environnement de travail.",
        strip: "MSNA Cleaning & Support fait partie de MSNA Group Services, aux côtés de MSNA-Mode et MSNA Estate.",
        bottom: "© 2026 MSNA Group Services. Tous droits réservés. Site en développement — coordonnées légales à venir avant la mise en ligne.",
        privacy: "Politique de confidentialité",
      },
    },
  },

  // ---------- MSNA Estate ----------
  estate: {
    wordmark: "ESTATE",
    base: "/estate/",
    langs: LANGS,
    slugs: {
      home: { nl: "", en: "", fr: "" },
      approach: { nl: "#aanpak", en: "#aanpak", fr: "#aanpak" },
      contact: { nl: "/contact/", en: "/en/contact/", fr: "/fr/contact/" },
    },
    navOrder: ["home", "approach", "contact"],
    ctaKey: "contact",
    stripLinks: [
      { site: "cleaning", label: { nl: "MSNA Cleaning & Support", en: "MSNA Cleaning & Support", fr: "MSNA Cleaning & Support" } },
      { site: "mode", label: { nl: "MSNA-Mode", en: "MSNA-Mode", fr: "MSNA-Mode" } },
    ],
    t: {
      nl: {
        sub: "ONDERDEEL VAN MSNA GROUP SERVICES",
        nav: { home: "Home", approach: "Onze aanpak", contact: "Contact" },
        cta: "Neem contact op",
        navHeading: "Navigatie",
        blurb: "MSNA Estate: vastgoed, projecten en toekomstgerichte ontwikkeling. De website is in voorbereiding.",
        strip: "MSNA Estate maakt deel uit van MSNA Group Services, samen met MSNA Cleaning & Support en MSNA-Mode.",
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — projecten en aanbod worden pas na bevestiging gepubliceerd.",
        privacy: "Privacyverklaring",
      },
      en: {
        sub: "PART OF MSNA GROUP SERVICES",
        nav: { home: "Home", approach: "Our approach", contact: "Contact" },
        cta: "Get in touch",
        navHeading: "Navigation",
        blurb: "MSNA Estate: real estate, projects and forward-looking development. The website is being prepared.",
        strip: "MSNA Estate is part of MSNA Group Services, alongside MSNA Cleaning & Support and MSNA-Mode.",
        bottom: "© 2026 MSNA Group Services. All rights reserved. Site in development — projects and listings are only published once confirmed.",
        privacy: "Privacy policy",
      },
      fr: {
        sub: "FILIALE DE MSNA GROUP SERVICES",
        nav: { home: "Accueil", approach: "Notre démarche", contact: "Contact" },
        cta: "Nous contacter",
        navHeading: "Navigation",
        blurb: "MSNA Estate : immobilier, projets et développement tourné vers l'avenir. Le site est en préparation.",
        strip: "MSNA Estate fait partie de MSNA Group Services, aux côtés de MSNA Cleaning & Support et MSNA-Mode.",
        bottom: "© 2026 MSNA Group Services. Tous droits réservés. Site en développement — projets et offres publiés uniquement après confirmation.",
        privacy: "Politique de confidentialité",
      },
    },
  },

  // ---------- MSNA-Mode (eigen ontwerp; hier alleen voor de adressen) ----------
  mode: {
    base: "/mode/",
    langs: LANGS,
    slugs: { home: { nl: "", en: "", fr: "" } },
  },

  otherTag,
};
