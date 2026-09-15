const CACHE = 'workbench-v3';

// network-first：联网时始终拉最新版；代码(html/js/css)强制向服务器重新校验，更新立即生效
// 音频等大文件仍走常规缓存；离线时回退缓存
self.addEventListener('install', e => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isMedia = /\.(mp3|m4a|wav|ogg|png|jpg|jpeg|webp)(\?|$)/i.test(url.pathname);
  const fetchOpts = { cache: isMedia ? 'default' : 'no-cache' };

  e.respondWith(
    fetch(e.request, fetchOpts)
      .then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
