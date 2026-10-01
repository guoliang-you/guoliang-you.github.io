(() => {
  'use strict';

  const section = document.getElementById('global-visitors');
  const map = document.getElementById('visitor-map');
  const status = document.getElementById('visitor-map-status');
  if (!section || !map || !status) return;

  // Keep the original public widget ID; never create or reset a counter.
  const widgetUrl = 'https://clustrmaps.com/map_v2.js?d=BCzXnllK7DALNmWsuEPPoh2DRAH282QR2m3XPzLQJkg&cl=ffffff&w=a';

  // Previewing locally must not add visits to the historical record.
  if (location.hostname !== 'guoliang-you.github.io') {
    section.dataset.state = 'preview';
    section.title = 'The visitor map loads on the published website.';
    return;
  }

  let settled = false;
  const observer = new MutationObserver(checkMap);
  const timeout = setTimeout(unavailable, 8000);

  function unavailable() {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    observer.disconnect();
    section.dataset.state = 'unavailable';
    map.hidden = true;
    status.textContent = 'Visitor map temporarily unavailable.';
    status.hidden = false;
  }

  function ready() {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    observer.disconnect();
    section.dataset.state = 'ready';
    map.hidden = false;
    status.hidden = true;
  }

  function checkMap() {
    const image = map.querySelector('img');
    if (!image) return;
    if (image.complete) {
      if (image.naturalWidth > 0) ready();
      else unavailable();
      return;
    }
    image.addEventListener('load', ready, { once: true });
    image.addEventListener('error', unavailable, { once: true });
  }

  const script = document.createElement('script');
  script.id = 'clustrmaps';
  script.src = widgetUrl;
  script.async = true;
  script.referrerPolicy = 'origin';
  script.addEventListener('error', unavailable, { once: true });
  script.addEventListener('load', checkMap, { once: true });
  observer.observe(map, { childList: true, subtree: true });
  section.dataset.state = 'loading';
  map.hidden = false;
  map.append(script);
})();
