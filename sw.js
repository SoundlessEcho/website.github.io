
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('predecessor-v1').then(cache=>cache.addAll([
    '/index.html','/showcase.html','/download.html','/store.html','/about.html',
    '/assets/css/styles.css','/assets/js/main.js','/assets/js/matrix.js','/assets/img/logo.svg','/assets/img/favicon.svg'
  ])));
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
