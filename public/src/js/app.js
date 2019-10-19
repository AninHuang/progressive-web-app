
var deferredPrompt;

if ('serviceWorker' in navigator) {
  // Register a SW (only work on pages served via https)
  // (localhost is an exception to make dev easier)
  navigator.serviceWorker
    .register('/sw.js', {scope: '/help/'}) // SW only controls the /help/* pages
    .then(function() {
      console.log('service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});