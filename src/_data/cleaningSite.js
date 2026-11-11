// MSNA Cleaning & Support – gedeelde teksten per taal (header, menu, footer).
// De inhoud van elke pagina staat in src/cleaning/<taal>/*.njk.
export default {
  langs: ["nl", "en", "fr"],

  // Paginasleutel -> URL-pad per taal (onder /cleaning/<taal>/)
  slugs: {
    home: { nl: "", en: "", fr: "" },
    services: { nl: "diensten/", en: "services/", fr: "services/" },
    steam: { nl: "stoom-dieptereiniging/", en: "steam-deep-cleaning/", fr: "nettoyage-vapeur/" },
    approach: { nl: "werkwijze/", en: "our-approach/", fr: "notre-demarche/" },
    about: { nl: "over-msna/", en: "about/", fr: "a-propos/" },
    contact: { nl: "contact/", en: "contact/", fr: "contact/" },
  },
  navOrder: ["home", "services", "steam", "approach", "about", "contact"],

  email: "info@msna-cleaning.be",

  t: {
    nl: {
      sub: "ONDERDEEL VAN MSNA GROUP SERVICES",
      nav: { home: "Home", services: "Diensten", steam: "Stoom- & Dieptereiniging", approach: "Onze aanpak", about: "Over MSNA", contact: "Contact" },
      cta: "Offerte aanvragen",
      navHeading: "Navigatie",
      blurb: "MSNA Cleaning & Support verzorgt de schoonmaak van kantoren, showrooms, sanitaire ruimtes en andere zakelijke locaties, met een aanpak die is afgestemd op elke werkomgeving.",
      strip: "MSNA Cleaning & Support maakt deel uit van MSNA Group Services, samen met MSNA-Mode.",
      modeLink: "Bekijk MSNA-Mode",
      otherTag: "(ander MSNA-bedrijf)",
      groupLink: "Alle MSNA-bedrijven",
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
      modeLink: "Visit MSNA-Mode",
      otherTag: "(another MSNA company)",
      groupLink: "All MSNA companies",
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
      modeLink: "Découvrir MSNA-Mode",
      otherTag: "(autre société MSNA)",
      groupLink: "Toutes les sociétés MSNA",
      bottom: "© 2026 MSNA Group Services. Tous droits réservés. Site en développement — coordonnées légales à venir avant la mise en ligne.",
      privacy: "Confidentialité (NL)",
    },
  },
};
