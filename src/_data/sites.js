// Gedeelde huisstijl voor MSNA Group Services, Cleaning & Support en Estate.
// Per site: woordmerk, talen, pagina's (sleutel -> pad), menu en teksten per taal.
// Pagina-inhoud staat in src/group/, src/cleaning/<taal>/ en src/estate/.

// "MSNA home"-knop (terug naar de startpagina) in elke taal
const homeButton = { nl: "MSNA home", en: "MSNA home", fr: "Accueil MSNA" };

const groupStrip = {
  nl: {
    text: "MSNA Group Services brengt MSNA Cleaning & Support, MSNA-Mode en MSNA Estate samen onder één groep.",
    links: [
      { label: "MSNA Cleaning & Support", url: "/cleaning/nl/", tag: "(ander MSNA-bedrijf)" },
      { label: "MSNA-Mode", url: "/mode/nl/", tag: "(ander MSNA-bedrijf)" },
    ],
  },
};

export default {
  homeButton,

  // Startpagina (/): kiest het juiste MSNA-bedrijf. Geen menu en geen home-knop.
  hub: {
    isHub: true,
    wordmark: "GROUP SERVICES",
    base: "/",
    langs: ["nl"],
    slugs: { home: { nl: "" }, contact: { nl: "/group/contact/" } },
    navOrder: [],
    ctaKey: "contact",
    t: {
      nl: {
        sub: "ONDERNEMERSCHAP · DIENSTVERLENING · MODE · VASTGOED",
        cta: "Neem contact op",
        navHeading: "MSNA-bedrijven",
        blurb: "MSNA Group Services brengt ondernemerschap, dienstverlening, mode en vastgoed samen onder één groep.",
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — bedrijfsgegevens en juridische informatie volgen voor publicatie.",
        privacy: "Privacyverklaring",
      },
    },
  },

  cleaning: {
    wordmark: "CLEANING &amp; SUPPORT",
    base: "/cleaning/",
    langs: ["nl", "en", "fr"],
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
    t: {
      nl: {
        sub: "ONDERDEEL VAN MSNA GROUP SERVICES",
        nav: { home: "Home", services: "Diensten", steam: "Stoom- & Dieptereiniging", approach: "Onze aanpak", about: "Over MSNA", contact: "Contact" },
        cta: "Offerte aanvragen",
        navHeading: "Navigatie",
        blurb: "MSNA Cleaning & Support verzorgt de schoonmaak van kantoren, showrooms, sanitaire ruimtes en andere zakelijke locaties, met een aanpak die is afgestemd op elke werkomgeving.",
        strip: "MSNA Cleaning & Support maakt deel uit van MSNA Group Services, samen met MSNA-Mode.",
        stripLinks: [{ label: "Bekijk MSNA-Mode", url: "/mode/nl/", tag: "(ander MSNA-bedrijf)" }],
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — bedrijfsgegevens en juridische informatie volgen voor publicatie.",
        privacy: "Privacyverklaring",
      },
      en: {
        sub: "PART OF MSNA GROUP SERVICES",
        nav: { home: "Home", services: "Services", steam: "Steam & Deep Cleaning", approach: "Our Approach", about: "About MSNA", contact: "Contact" },
        cta: "Request a Quote",
        navHeading: "Navigation",
        blurb: "MSNA Cleaning & Support takes care of cleaning for offices, showrooms, washrooms and other business premises, with an approach built around each individual workplace.",
        strip: "MSNA Cleaning & Support is part of MSNA Group Services, alongside MSNA-Mode.",
        stripLinks: [{ label: "Visit MSNA-Mode", url: "/mode/en/", tag: "(another MSNA company)" }],
        bottom: "© 2026 MSNA Group Services. All rights reserved. Site in development — company and legal details to follow before launch.",
        privacy: "Privacy policy (NL)",
      },
      fr: {
        sub: "FILIALE DE MSNA GROUP SERVICES",
        nav: { home: "Accueil", services: "Services", steam: "Nettoyage vapeur", approach: "Notre démarche", about: "À propos", contact: "Contact" },
        cta: "Demander un devis",
        navHeading: "Navigation",
        blurb: "MSNA Cleaning & Support assure le nettoyage de bureaux, showrooms, sanitaires et autres locaux professionnels, avec une approche adaptée à chaque environnement de travail.",
        strip: "MSNA Cleaning & Support fait partie de MSNA Group Services, aux côtés de MSNA-Mode.",
        stripLinks: [{ label: "Découvrir MSNA-Mode", url: "/mode/fr/", tag: "(autre société MSNA)" }],
        bottom: "© 2026 MSNA Group Services. Tous droits réservés. Site en développement — coordonnées légales à venir avant la mise en ligne.",
        privacy: "Confidentialité (NL)",
      },
    },
  },

  group: {
    wordmark: "GROUP SERVICES",
    base: "/group/",
    langs: ["nl"],
    slugs: {
      home: { nl: "" },
      about: { nl: "over/" },
      activities: { nl: "activiteiten/" },
      partners: { nl: "samenwerken/" },
      contact: { nl: "contact/" },
      privacy: { nl: "/privacy/" },
    },
    navOrder: ["home", "about", "activities", "partners", "contact"],
    ctaKey: "contact",
    t: {
      nl: {
        sub: "ONDERNEMERSCHAP · DIENSTVERLENING · MODE · VASTGOED",
        nav: { home: "Home", about: "Over de groep", activities: "Onze activiteiten", partners: "Samenwerken", contact: "Contact", privacy: "Privacy" },
        cta: "Neem contact op",
        navHeading: "Navigatie",
        blurb: "MSNA Group Services is het professionele toegangspunt tot de groep, haar activiteiten en zakelijke contacten.",
        strip: groupStrip.nl.text,
        stripLinks: groupStrip.nl.links,
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — bedrijfsgegevens en juridische informatie volgen voor publicatie.",
        privacy: "Privacyverklaring",
      },
    },
  },

  estate: {
    wordmark: "ESTATE",
    base: "/estate/",
    langs: ["nl"],
    slugs: {
      home: { nl: "" },
      approach: { nl: "#aanpak" },
      contact: { nl: "/group/contact/" },
    },
    navOrder: ["home", "approach", "contact"],
    ctaKey: "contact",
    t: {
      nl: {
        sub: "ONDERDEEL VAN MSNA GROUP SERVICES",
        nav: { home: "Home", approach: "Onze aanpak", contact: "Contact" },
        cta: "Neem contact op",
        navHeading: "Navigatie",
        blurb: "MSNA Estate: vastgoed, projecten en toekomstgerichte ontwikkeling. De website is in voorbereiding.",
        strip: "MSNA Estate maakt deel uit van MSNA Group Services, samen met MSNA Cleaning & Support en MSNA-Mode.",
        stripLinks: groupStrip.nl.links,
        bottom: "© 2026 MSNA Group Services. Alle rechten voorbehouden. Website in ontwikkeling — projecten en aanbod worden pas na bevestiging gepubliceerd.",
        privacy: "Privacyverklaring",
      },
    },
  },
};
