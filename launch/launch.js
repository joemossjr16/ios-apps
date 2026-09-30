/* No account credentials or analytics. Only the saved game identity is handed to OpenNOW. */
(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  const id = params.get('appid') || '';
  const title = (params.get('title') || 'OpenNOW game').slice(0, 200);
  const store = (params.get('store') || '').slice(0, 40);
  const uuid = params.get('gameid') || '';
  const setup = params.get('setup') === '1';
  const heading = document.getElementById('game-title');
  const status = document.getElementById('status');
  const button = document.getElementById('launch');
  if (!/^[1-9]\d{0,9}$/.test(id)) {
    status.textContent = 'This link is missing a valid GeForce NOW game ID. Create a new icon from the game’s details in OpenNOW.';
    return;
  }
  const target = new URL('opennowios://launch/' + id);
  target.searchParams.set('title', title);
  if (store) target.searchParams.set('store', store);
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid)) {
    target.searchParams.set('gameid', uuid);
  }
  heading.textContent = title;
  document.title = title;
  document.querySelector('meta[name="apple-mobile-web-app-title"]').content = title;
  try {
    const art = new URL(params.get('art') || '');
    if (art.protocol === 'https:' && art.hostname === 'img.nvidiagrid.net' && !art.username && !art.password) {
      const image = document.getElementById('artwork');
      image.src = art.href;
      image.alt = title;
      document.getElementById('home-icon').href = art.href;
    }
  } catch (_) { /* Keep the bundled OpenNOW icon. */ }
  button.href = target.href;
  button.hidden = false;
  status.textContent = setup ? 'Save this game to your Home Screen using Safari’s Share menu.' : 'Opening ' + title + ' in OpenNOW…';
  // Setup visits stay on the page, but the saved bookmark must use the launch URL.
  if (setup) {
    const saved = new URL(location.href);
    saved.searchParams.delete('setup');
    history.replaceState(null, '', saved.href);
  } else {
    document.getElementById('home-help').hidden = true;
    setTimeout(() => {
      if (document.visibilityState === 'visible') location.href = target.href;
    }, 350);
  }
})();
