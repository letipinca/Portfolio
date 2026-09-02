# Portfolio — Letizia Pinca

Sito statico, nessun build step. Si apre `index.html` direttamente nel browser
o si pubblica così com'è (es. GitHub Pages).

## Struttura

```
index.html                  Markup di tutte le sezioni (Home, Portfolio, About, Contact)
assets/
  style.css                 Tutti gli stili + @font-face + animazioni
  app.js                    Logica: cambio sezione, accordion, hover card, contatori
  detail-content.js         Testo dei case study (Nespresso, Socialite Family, EVT)
  fonts/                     Cormorant Garamond + DM Sans (woff2, latin + latin-ext)
files/                       PDF collegati (CV, business case)
img/                         Immagini del sito (vedi sotto)
```

## Modifiche frequenti

- **Testo delle sezioni** → `index.html`
- **Testo dei case study** → `assets/detail-content.js` (blocchi `{ h: ... }` titolo,
  `{ p: ... }` paragrafo, `{ v: {...} }` immagine con didascalia)
- **Colori / font / spaziature** → `assets/style.css` (variabili in `:root`)
- **Aggiungere un PDF** → metti il file in `files/` (nome senza spazi) e linkalo
  con `<a href="files/nome-file.pdf" target="_blank">`

## Immagini

Nel design le immagini sono segnaposto vuoti. Per attivarle:

1. Metti i file in `img/` (es. `work-01.jpg`, `about-portrait.jpg`).
2. In `index.html`, dentro la `.card` corrispondente aggiungi come primo figlio:
   `<img src="img/work-01.jpg" alt="...">`
3. Per il ritratto in About, togli il commento in `.about__photo`.
4. Per i visual dei case study, in `assets/app.js` il blocco `{ v: {...} }` crea
   un `<div class="frame" id="...">`: puoi trasformarlo in `<img>` o dargli un
   `background-image` via CSS usando l'`id`.
