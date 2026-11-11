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
  cleaning: {
    sub: "Cleaning & Support",
    full: "MSNA Cleaning & Support",
    home: "/cleaning/",
    blurb:
      "Professionele schoonmaak voor kantoren, recepties, showrooms, sanitaire ruimten, garages en werkplaatsen.",
    nav: [
      { label: "Home", url: "/cleaning/" },
      { label: "Diensten", url: "/cleaning/diensten/", prefix: "/cleaning/diensten/", exclude: "/cleaning/diensten/stoom-dieptereiniging/" },
      { label: "Stoom- & dieptereiniging", url: "/cleaning/diensten/stoom-dieptereiniging/" },
      { label: "Onze aanpak", url: "/cleaning/werkwijze/" },
      { label: "Over MSNA", url: "/cleaning/over/" },
      { label: "Contact", url: "/cleaning/offerte/#contact" },
    ],
    cta: { label: "Offerte aanvragen", url: "/cleaning/offerte/" },
    mobileBar: true,
  },
  mode: {
    sub: "MODE",
    full: "MSNA MODE",
    home: "/mode/",
    blurb: "Stijl met mentaliteit en ambitie. De webshop van MSNA MODE is in voorbereiding.",
    nav: [],
  },
  estate: {
    sub: "Estate",
    full: "MSNA Estate",
    home: "/estate/",
    blurb: "Vastgoed, projecten en toekomstgerichte ontwikkeling. De website van MSNA Estate is in voorbereiding.",
    nav: [],
  },
};
