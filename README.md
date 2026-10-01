# Guoliang You — Academic Homepage

Personal academic website covering multimodal AI for healthcare, clinical reasoning and agents, and collaborations in embodied AI.

This repository is an independent static website. The entry point is `index.html`; styling is in `assets/css/home.css`.

Publication thumbnails show hand-drawn research overviews. Clicking one opens a viewer with **Hand-drawn** and **Paper figure** tabs; reopening always starts with the hand-drawn image. The viewer is in `assets/js/figures.js`, and optimized illustrations are in `images/research/handdrawn/`. Original paper figures remain at their existing paths.

The footer shows total page views recorded since October 2026, including repeat visits, using [Busuanzi](https://www.busuanzi.cc/). `assets/js/visits.js` sends only the canonical public homepage URL to its JSON endpoint, without cookies, URL parameters or referrers. Counting runs only on the published domain, never during local previews. A dash appears if statistics are unavailable; no estimated or historical counts are added.

## Local preview

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open `http://127.0.0.1:8766/`.

## GitHub Pages

When ready to publish, select **Settings → Pages → Deploy from a branch → master → /(root)**. The `.nojekyll` file keeps the site as plain static HTML. Publishing is controlled separately from pushing code.

Keep credentials, private documents, CV files, and local backups outside the repository. The original template's MIT license is retained in `LICENSE`.
