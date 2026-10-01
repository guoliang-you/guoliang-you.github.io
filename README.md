# Guoliang You — Academic Homepage

Personal academic website covering multimodal AI for healthcare, clinical reasoning and agents, and collaborations in embodied AI.

This repository is an independent static website. The entry point is `index.html`; styling is in `assets/css/home.css`.

Publication thumbnails show hand-drawn research overviews. Clicking one opens a viewer with **Hand-drawn** and **Paper figure** tabs; reopening always starts with the hand-drawn image. The viewer is in `assets/js/figures.js`, and optimized illustrations are in `images/research/handdrawn/`. Original paper figures remain at their existing paths.

The footer reuses the original [ClustrMaps](https://clustrmaps.com/) global visitor-map embed, recovered from the old homepage's Git history. Its existing public widget ID is `BCzXnllK7DALNmWsuEPPoh2DRAH282QR2m3XPzLQJkg`; no new counter is created or historical count initialized. `assets/js/visits.js` loads the original embed only on the published domain, never during local previews. The map links to its statistics through the provider's original widget when available.

At the time of restoration, ClustrMaps was unreachable and the old ID was not found on MapMyVisitors. Historical records have not been verified or recovered. The footer gracefully collapses the unavailable map and displays a short status instead of a broken image or fabricated count. A working historical statistics URL or provider export is needed if the original service does not return.

## Local preview

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open `http://127.0.0.1:8766/`.

## GitHub Pages

When ready to publish, select **Settings → Pages → Deploy from a branch → master → /(root)**. The `.nojekyll` file keeps the site as plain static HTML. Publishing is controlled separately from pushing code.

Keep credentials, private documents, CV files, and local backups outside the repository. The original template's MIT license is retained in `LICENSE`.
