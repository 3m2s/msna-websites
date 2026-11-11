// De drie MSNA-bedrijven op de startpagina (Group Services is de startpagina zelf).
// Link: {{ c.key | msnaUrl(lang) }} -> website van het bedrijf in dezelfde taal.
export default [
  {
    key: "cleaning",
    name: "Cleaning & Support",
    status: "live",
    tagline: {
      nl: "Professionele schoonmaak voor een verzorgde werkomgeving.",
      en: "Professional cleaning for a well-kept workplace.",
      fr: "Un nettoyage professionnel pour un lieu de travail soigné.",
    },
    text: {
      nl: "Schoonmaak en onderhoud voor kantoren, recepties, showrooms, sanitaire ruimten, garages en werkplaatsen – van terugkerend onderhoud tot gerichte stoom- en dieptereiniging.",
      en: "Cleaning and upkeep for offices, receptions, showrooms, washrooms, garages and workshops – from recurring maintenance to targeted steam and deep cleaning.",
      fr: "Nettoyage et entretien de bureaux, accueils, showrooms, sanitaires, garages et ateliers – de l'entretien régulier au nettoyage vapeur et en profondeur.",
    },
    button: { nl: "Bekijk diensten", en: "View services", fr: "Voir les services" },
  },
  {
    key: "mode",
    name: "MODE",
    status: "live",
    tagline: {
      nl: "Mentaliteit. Status. Niveau. Ambitie.",
      en: "Mentality. Status. Level. Ambition.",
      fr: "Mentalité. Statut. Niveau. Ambition.",
    },
    text: {
      nl: "Ultra-exclusief modelabel van MSNA Group Services. Collectie 01 komt er binnenkort aan – schrijf je in voor vroege toegang.",
      en: "Ultra-exclusive fashion label from MSNA Group Services. Collection 01 is coming soon – sign up for early access.",
      fr: "Label de mode ultra-exclusif de MSNA Group Services. La Collection 01 arrive bientôt – inscrivez-vous pour un accès anticipé.",
    },
    button: { nl: "Ontdek collecties", en: "Discover the collection", fr: "Découvrir la collection" },
  },
  {
    key: "estate",
    name: "Estate",
    status: "soon",
    tagline: {
      nl: "Vastgoed, projecten en toekomstgerichte ontwikkeling.",
      en: "Real estate, projects and forward-looking development.",
      fr: "Immobilier, projets et développement tourné vers l'avenir.",
    },
    text: {
      nl: "De vastgoedactiviteiten en projecten van MSNA. Projecten en aanbod worden pas gepubliceerd na bevestiging. De website is in voorbereiding.",
      en: "MSNA's real estate activities and projects. Projects and listings are only published once confirmed. The website is being prepared.",
      fr: "Les activités immobilières et les projets de MSNA. Projets et offres ne sont publiés qu'après confirmation. Le site est en préparation.",
    },
    button: { nl: "Meer informatie", en: "Learn more", fr: "En savoir plus" },
  },
];
