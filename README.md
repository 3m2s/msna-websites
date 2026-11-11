# MSNA Group Services – websites

De startpagina van MSNA Group Services plus drie bedrijfswebsites, in het Nederlands, Engels en Frans. Gebouwd met [Eleventy](https://www.11ty.dev/) en automatisch gepubliceerd via GitHub Pages.

| Website | NL | EN | FR | Status |
|---|---|---|---|---|
| **MSNA Group Services** (startpagina: over de groep, bedrijven, samenwerken, contact, privacy) | `/` | `/en/` | `/fr/` | live |
| **MSNA Cleaning & Support** | `/cleaning/nl/` | `/cleaning/en/` | `/cleaning/fr/` | live |
| **MSNA-Mode** (Collectie 01, wachtlijst) | `/mode/nl/` | `/mode/en/` | `/mode/fr/` | live |
| **MSNA Estate** | `/estate/nl/` | `/estate/en/` | `/estate/fr/` | in voorbereiding |

### Talen

- Elke pagina heeft een taalkeuze (NL / EN / FR) die naar dezelfde pagina in de andere taal gaat.
- **Je blijft in je taal:** alle links naar een ander MSNA-bedrijf (kaarten, knoppen, "MSNA home", footer) gaan naar de versie in dezelfde taal.
- De gekozen taal wordt in de browser onthouden (`localStorage`, geen cookie). `/cleaning/`, `/mode/` en `/estate/` openen daarmee in die taal (anders de taal van de browser), en wie eerder Engels of Frans koos, komt op `/` meteen op `/en/` of `/fr/`.
- Oude adressen van de vroegere losse groepssite (`/group/...`) sturen automatisch door naar de nieuwe pagina's.

### Ontwerp

Startpagina, Cleaning & Support en Estate delen één ontwerp (zwart/goud, Bodoni Moda + Jost), afkomstig van de oorspronkelijke Cleaning-site. MSNA-Mode heeft een eigen editorial ontwerp. Elke bedrijfssite heeft rechtsboven een **MSNA home**-knop naar de startpagina.

## Lokaal bekijken

```bash
npm install
npm start        # http://localhost:8080
```

## Waar pas je wat aan?

| Wat | Bestand |
|---|---|
| Telefoon, contactpersoon, e-mail, adres, ondernemingsnummer, formulier-endpoint | `src/_data/site.js` |
| Menu's, adressen per taal, header- en footerteksten van alle sites | `src/_data/sites.js` |
| Teksten startpagina en groepspagina's (NL/EN/FR) | `src/_data/hubText.js` |
| Teksten Estate (NL/EN/FR) | `src/_data/estateText.js` |
| De drie bedrijfskaarten op de startpagina | `src/_data/companies.js` |
| Pagina-opbouw startpagina (één bestand per pagina, voor alle talen) | `src/hub/` |
| Pagina's Cleaning (één bestand per pagina per taal) | `src/cleaning/<taal>/` |
| Pagina's MODE | `src/mode/<taal>/`, stijl en script in `src/mode/assets/` |
| Gedeelde header/footer (startpagina, Cleaning, Estate) | `src/_includes/layouts/msna-site.njk` |
| Gedeelde stijl en script | `src/assets/css/msna.css`, `src/assets/js/msna.js` |

Links tussen pagina's gebruiken de filter `msnaUrl` (in `eleventy.config.js`), bv. `{{ "cleaning:contact" | msnaUrl(lang) }}`. Zo kloppen taal en adres altijd vanzelf.

Estate wordt een volwaardige site door pagina's toe te voegen in `src/estate/`, ze in het menu van `estate` in `sites.js` te zetten en `status` in `companies.js` op `"live"` te zetten.

> **Let op bij `npm install`:** npm op Windows haalt soms de regel voor `fsevents` uit `package-lock.json`, waardoor de build op GitHub faalt. Controleer na een install dat `node_modules/fsevents` nog in het lockfile staat met `"optional": true`.

## Formulieren koppelen

GitHub Pages heeft geen server, dus formulieren hebben een externe dienst nodig, bv. [Formspree](https://formspree.io) (gratis tot 50 inzendingen/maand):

1. Maak een formulier aan en kopieer het endpoint (`https://formspree.io/f/xxxxxx`).
2. Zet het in `src/_data/site.js` bij `formEndpoint`.

Zolang dit leeg is, tonen formulieren een nette melding met het telefoonnummer (in de taal van de pagina).

## Publiceren

Elke push naar `main` bouwt en publiceert de site automatisch (`.github/workflows/deploy.yml`).
Eenmalig instellen: **Settings → Pages → Source: GitHub Actions**.

Eigen domein later? Voeg het toe onder Settings → Pages → Custom domain; links passen zich automatisch aan.

## Nog te bevestigen vóór officiële lancering

Uit het dossier – deze gegevens staan bewust nog niet op de site:

- [ ] Definitief zakelijk e-mailadres voor de groep (Cleaning gebruikt `info@msna-cleaning.be`, MODE `Shauki.ridouani@msna-mode.be` – controleer dat die mailboxen bestaan)
- [ ] MODE: de tijdelijke quote ("Tijdelijke quote.") vervangen en echte collectiebeelden toevoegen
- [ ] Vestigingsadres en ondernemingsnummer
- [ ] Definitieve domeinnamen per website
- [ ] Formulier-endpoint (zie hierboven)
- [ ] Juridische controle van de privacyverklaring (NL, EN en FR)
- [ ] Engelse en Franse teksten van startpagina, groepspagina's en Estate laten nalezen door een moedertaalspreker
- [ ] Welke schoonmaakdiensten en regio's operationeel gedekt zijn
- [ ] Echte foto's (met toestemming) i.p.v. de huidige logo-/marmerbeelden
