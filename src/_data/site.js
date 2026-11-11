// Centrale bedrijfsgegevens. Lege velden worden automatisch niet getoond.
// Vóór publicatie laten bevestigen door de directie (zie README).
export default {
  groupName: "MSNA Group Services",
  phone: "+32 479 01 43 93",
  contactName: "Shauki Ridouani",

  // TODO: definitieve zakelijke gegevens invullen
  email: "", // bv. "info@msna-group.be"
  address: "", // vestigingsadres
  companyNumber: "", // ondernemingsnummer (KBO), bv. "BE 0123.456.789"

  // Formulieren: plak hier een endpoint (bv. https://formspree.io/f/xxxxxx).
  // Zolang dit leeg is, tonen formulieren een melding met het telefoonnummer.
  formEndpoint: "",

  // Volledig webadres van de site (gezet door de deploy-workflow), nodig voor og:image
  url: (process.env.SITE_URL || "").replace(/\/$/, ""),

  year: new Date().getFullYear(),
};
