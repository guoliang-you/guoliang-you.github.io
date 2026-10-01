(() => {
  'use strict';

  const section = document.getElementById('global-visitors');
  const map = document.getElementById('visitor-map');
  const image = document.getElementById('visitor-map-image');
  const summary = document.getElementById('visitor-map-summary');
  const period = document.getElementById('visitor-map-period');
  const status = document.getElementById('visitor-map-status');
  if (!section || !map || !image || !summary || !period || !status) return;

  // Public counter ID only. Its private management link stays outside Git.
  const counterId = '6611225750';
  const provider = 'https://www.stats4u.net';

  // A neutral, uncounted map lets local previews show the layout. Never use
  // the provider's demo data or send local URLs to the public counter.
  if (location.hostname !== 'guoliang-you.github.io') {
    section.dataset.state = 'preview';
    period.textContent = 'Local preview · not counted';
    return;
  }

  section.dataset.state = 'loading';
  map.hidden = true;
  let settled = false;
  const timeout = setTimeout(unavailable, 10000);

  function unavailable() {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    section.dataset.state = 'unavailable';
    map.hidden = true;
    status.textContent = 'Visitor map temporarily unavailable.';
    status.hidden = false;
  }

  async function loadSummary() {
    // This read-only endpoint also powers the provider's live map. It does
    // not count visits; the image request is the single counting call.
    const controller = new AbortController();
    const deadline = setTimeout(() => controller.abort(), 6000);
    try {
      const response = await fetch(`${provider}/?action=globedata&s4uid=${counterId}&r=${Date.now()}`, {
        credentials: 'omit',
        referrerPolicy: 'origin',
        signal: controller.signal
      });
      if (!response.ok) return;
      const data = await response.json();
      if (!Number.isSafeInteger(data.t) || data.t < 0 || !data.c || typeof data.c !== 'object' || Array.isArray(data.c)) return;
      const countries = Object.entries(data.c).filter(([code, counts]) =>
        /^[A-Z]{2}$/.test(code) && code !== 'ZZ' && Array.isArray(counts) && counts[0] > 0
      ).length;
      summary.textContent = `${data.t.toLocaleString('en-US')} ${data.t === 1 ? 'pageview' : 'pageviews'} · ${countries} ${countries === 1 ? 'country' : 'countries'}`;
      summary.hidden = false;
    } catch {
      // The map and its statistics link remain useful if the summary fails.
    } finally {
      clearTimeout(deadline);
    }
  }

  image.addEventListener('load', () => {
    if (settled) return;
    if (!image.naturalWidth) { unavailable(); return; }
    settled = true;
    clearTimeout(timeout);
    section.dataset.state = 'ready';
    map.hidden = false;
    loadSummary();
  }, { once: true });
  image.addEventListener('error', unavailable, { once: true });
  image.crossOrigin = 'anonymous';
  image.referrerPolicy = 'origin';
  image.src = `${provider}/c/${counterId}-map_w.png?pal=ocean&bg=none&zahlen=0&kopf=0&orte=1&plang=en`;
})();
