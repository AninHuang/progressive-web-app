self.addEventListener('install', function(event) {
  console.log('Installing service worker...', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activating service worker...', event);
  return self.clients.claim();
});

// fetch event uses the browser default for non-GET requests.
// For GET requests it tries to return a match in the cache, and falls back to the network.
self.addEventListener('fetch', function(event) {
  console.log('Fetching sth...', event);
  // Prevent the default, and handle the request ourselves.
  event.respondWith(fetch(event.request));
});