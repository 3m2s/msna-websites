// Eén entry per website: naam, menu en hoofdknop.
// `prefix` markeert een menu-item ook actief op onderliggende pagina's.
export default {
  hub: {
    sub: "Group Services",
    full: "MSNA Group Services",
    home: "/",
    nav: [],
  },
  group: {
    sub: "Group Services",
    full: "MSNA Group Services",
    home: "/group/",
    blurb:
      "Corporate portaal van MSNA Group Services: ondernemerschap, dienstverlening, mode en vastgoed onder één groep.",
    nav: [
      { label: "Home", url: "/group/" },
      { label: "Over de groep", url: "/group/over/" },
      { label: "Onze activiteiten", url: "/group/activiteiten/" },
      { label: "Samenwerken", url: "/group/samenwerken/" },
      { label: "Contact", url: "/group/contact/" },
    ],
    cta: { label: "Neem contact op", url: "/group/contact/" },
  },
  // Cleaning & Support en MODE hebben hun eigen layout en teksten:
  // zie src/_includes/layouts/cleaning-site.njk, mode-site.njk en src/_data/cleaningSite.js
  estate: {
    sub: "Estate",
    full: "MSNA Estate",
    home: "/estate/",
    blurb: "Vastgoed, projecten en toekomstgerichte ontwikkeling. De website van MSNA Estate is in voorbereiding.",
    nav: [],
  },
};
