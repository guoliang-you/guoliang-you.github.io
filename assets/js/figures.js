(() => {
  const viewer = document.querySelector('#figure-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;

  const title = viewer.querySelector('#figure-title');
  const image = viewer.querySelector('#figure-image');
  const panel = viewer.querySelector('#figure-panel');
  const caption = viewer.querySelector('#figure-caption');
  const fullSize = viewer.querySelector('#figure-full-size');
  const status = viewer.querySelector('#figure-status');
  const tabs = Array.from(viewer.querySelectorAll('[role="tab"]'));
  let currentPaper;
  let opener;

  function selectView(mode) {
    const isSketch = mode === 'sketch';
    const selectedTab = tabs.find(tab => tab.dataset.view === mode);
    tabs.forEach(tab => {
      const selected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', selectedTab.id);
    const source = isSketch ? currentPaper.href : currentPaper.dataset.originalFigure;
    image.alt = isSketch
      ? currentPaper.querySelector('img').alt
      : currentPaper.dataset.originalAlt;
    image.hidden = true;
    status.textContent = 'Loading figure…';
    status.hidden = false;
    caption.textContent = isSketch ? 'Hand-drawn research overview' : 'Original figure from the paper';
    fullSize.href = source;
    image.src = source;
    if (image.complete && image.naturalWidth > 0) {
      image.hidden = false;
      status.hidden = true;
    }
  }

  image.addEventListener('load', () => {
    image.hidden = false;
    status.hidden = true;
  });
  image.addEventListener('error', () => {
    image.hidden = true;
    status.textContent = 'This figure could not be loaded. Try the full-size image link.';
    status.hidden = false;
  });

  document.querySelectorAll('.paper-image[data-original-figure]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      currentPaper = link;
      title.textContent = link.closest('.paper').querySelector('h4').textContent;
      selectView('sketch');
      document.body.classList.add('figure-viewer-open');
      viewer.showModal();
    });
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => selectView(tab.dataset.view));
    tab.addEventListener('keydown', event => {
      let next;
      const index = tabs.indexOf(tab);
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectView(tabs[next].dataset.view);
      tabs[next].focus();
    });
  });

  viewer.querySelector('#figure-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const box = viewer.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right ||
        event.clientY < box.top || event.clientY > box.bottom) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('figure-viewer-open');
    image.removeAttribute('src');
    image.hidden = true;
    if (opener) opener.focus({ preventScroll: true });
    currentPaper = undefined;
  });
})();
