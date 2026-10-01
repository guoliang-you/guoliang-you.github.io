# Guoliang You — Academic Homepage

Personal academic website covering multimodal AI for healthcare, clinical reasoning and agents, and collaborations in embodied AI.

This repository is an independent static website. The entry point is `index.html`; styling is in `assets/css/home.css`.

Publication thumbnails show hand-drawn research overviews. Clicking one opens a viewer with **Hand-drawn** and **Paper figure** tabs; reopening always starts with the hand-drawn image. The viewer is in `assets/js/figures.js`, and optimized illustrations are in `images/research/handdrawn/`. Original paper figures remain at their existing paths.

The footer uses a [Stats4U world map](https://www.stats4u.net/en/maps), with country shading, approximate city markers, pageviews, country totals, and a link to [public statistics](https://www.stats4u.net/live/6611225750). Its public counter ID is `6611225750`. These are new statistics starting on **1 October 2026**; the unavailable ClustrMaps history has not been imported or recreated.

`assets/js/visits.js` requests the counting SVG image only on `guoliang-you.github.io`, then reads aggregate totals from the provider's public `globedata` endpoint without counting again. Pageviews count page loads, not distinct people. No third-party JavaScript, advertisements, screen measurements, or link-click tracking are embedded. Both requests send only the public origin as their referrer and omit page paths and query strings. The provider derives approximate locations from network requests; see its [privacy policy](https://www.stats4u.net/en/privacy).

Local previews show only `images/visitor-map-preview.svg`, a neutral world map captured from this counter before any recorded visits, with no demo points or invented counts. If the live map cannot load, a short message and the statistics link remain. The private counter-management link is saved separately outside the repository and must never be committed.

## Local preview

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open `http://127.0.0.1:8766/`.

## GitHub Pages

When ready to publish, select **Settings → Pages → Deploy from a branch → master → /(root)**. The `.nojekyll` file keeps the site as plain static HTML. Publishing is controlled separately from pushing code.

Keep credentials, private documents, CV files, and local backups outside the repository. The original template's MIT license is retained in `LICENSE`.
