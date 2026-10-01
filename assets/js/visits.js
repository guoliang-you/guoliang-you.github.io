(() => {
  'use strict';

  const stats = document.getElementById('site-visits');
  const count = document.getElementById('visits-count');
  if (!stats || !count) return;

  // Local previews never contact the counter or add to the public total.
  if (location.hostname !== 'guoliang-you.github.io') {
    stats.dataset.state = 'preview';
    stats.title = 'Visit counts are available on the live website.';
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  stats.dataset.state = 'loading';

  // Send only the canonical public URL; omit cookies, query strings and referrers.
  // Read JSON directly instead of executing a third-party counter script.
  fetch('https://cdn.busuanzi.cc/api.php', {
    method: 'POST',
    body: JSON.stringify({ url: 'https://guoliang-you.github.io/', referrer: '' }),
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then((data) => {
      const total = data.busuanzi_site_pv;
      if (!Number.isSafeInteger(total) || total < 1) throw new Error('Invalid count');
      count.textContent = new Intl.NumberFormat('en-US').format(total);
      stats.dataset.state = 'ready';
    })
    .catch(() => {
      // Keep an honest placeholder when the service is blocked or unavailable.
      stats.dataset.state = 'unavailable';
      stats.title = 'Visit statistics are temporarily unavailable.';
    })
    .finally(() => clearTimeout(timeout));
})();
