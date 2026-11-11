# MSNA Group Services – websites

Startpagina plus vier websites voor MSNA Group Services, gebouwd met [Eleventy](https://www.11ty.dev/) en automatisch gepubliceerd via GitHub Pages.

| Pad | Website | Status |
|---|---|---|
| `/` | Startpagina – kies een MSNA-bedrijf | live |
| `/group/` | MSNA Group Services (corporate site) | live |
| `/cleaning/` | MSNA Cleaning & Support – NL / EN / FR (`/cleaning/nl/`, `/en/`, `/fr/`) | live |
| `/mode/` | MSNA-Mode – Collectie 01, wachtlijst – NL / EN / FR | live |
| `/estate/` | MSNA Estate | placeholder |
| `/privacy/` | Privacyverklaring en cookies (gedeeld) | concept |

`/cleaning/` en `/mode/` kiezen automatisch de taal van de browser (NL/FR, anders EN).
Beide sites hebben hun eigen ontwerp (Bodoni Moda + Jost) en zijn omgezet vanuit de oorspronkelijke HTML-bestanden.

## Lokaal bekijken

```bash
npm install
npm start        # http://localhost:8080
```

## Waar pas je wat aan?

| Wat | Bestand |
|---|---|
| Telefoon, contactpersoon, e-mail, adres, ondernemingsnummer, formulier-endpoint | `src/_data/site.js` |
| Menu's en knoppen (hub, Group, Estate) | `src/_data/brands.js` |
| De vier bedrijfstegels (hub, footer, groepssite) | `src/_data/companies.js` |
| Pagina's | `src/group/`, `src/cleaning/<taal>/`, `src/mode/<taal>/`, `src/estate/` |
| Huisstijl hub/Group/Estate | `src/assets/css/style.css` |
| **Cleaning & Support:** menu, footer en teksten per taal | `src/_data/cleaningSite.js` |
| **Cleaning & Support:** header/footer-opmaak | `src/_includes/layouts/cleaning-site.njk` |
| **Cleaning & Support:** stijl en script | `src/cleaning/assets/` |
| **MODE:** stijl, wachtlijst-script | `src/mode/assets/` |

Elke Cleaning-pagina (bv. `src/cleaning/nl/services.njk`) bevat alleen de eigen inhoud; header, menu, taalkeuze en footer komen uit de gedeelde layout.

Estate wordt een volwaardige site door pagina's toe te voegen in `src/estate/`, een menu in `brands.js` te zetten en `status` in `companies.js` op `"live"` te zetten.

## Formulieren koppelen

GitHub Pages heeft geen server, dus formulieren hebben een externe dienst nodig, bv. [Formspree](https://formspree.io) (gratis tot 50 inzendingen/maand):

1. Maak een formulier aan en kopieer het endpoint (`https://formspree.io/f/xxxxxx`).
2. Zet het in `src/_data/site.js` bij `formEndpoint`.

Zolang dit leeg is, tonen formulieren een nette melding met het telefoonnummer.

## Publiceren

Elke push naar `main` bouwt en publiceert de site automatisch (`.github/workflows/deploy.yml`).
Eenmalig instellen: **Settings → Pages → Source: GitHub Actions**.

Eigen domein later? Voeg het toe onder Settings → Pages → Custom domain; links passen zich automatisch aan.

## Nog te bevestigen vóór officiële lancering

Uit het dossier – deze gegevens staan bewust nog niet op de site:

- [ ] Definitief zakelijk e-mailadres voor de groepssite (Cleaning gebruikt `info@msna-cleaning.be`, MODE `Shauki.ridouani@msna-mode.be` – controleer dat die mailboxen bestaan)
- [ ] MODE: de tijdelijke quote ("Tijdelijke quote.") vervangen en echte collectiebeelden toevoegen
- [ ] Vestigingsadres en ondernemingsnummer
- [ ] Definitieve domeinnamen per website
- [ ] Formulier-endpoint (zie hierboven)
- [ ] Juridische controle van de privacyverklaring
- [ ] Welke schoonmaakdiensten en regio's operationeel gedekt zijn
- [ ] Echte foto's (met toestemming) i.p.v. de huidige logo-/marmerbeelden
