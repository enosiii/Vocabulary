const CACHE_NAME = 'vocabulary-v1';
const urlsToCache = [
  '/Vocabulary/',  // Adjusted for GitHub Pages
  '/Vocabulary/index.html',
  '/Vocabulary/styles4.css',
  '/Vocabulary/app4.js',
  '/Vocabulary/install.js',
  '/Vocabulary/manifest.json',
  '/Vocabulary/paragraphs.json',
  '/Vocabulary/assets/icon-512.png',
  '/Vocabulary/assets/icon-192.png',
  '/Vocabulary/assets/icon.png'
];




// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
