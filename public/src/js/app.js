if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {scope: '/help/'})
    .then(function() {
      console.log('service worker registered!');
    });
}