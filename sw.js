// Service worker minimal — requis par Android pour que l'installation PWA
// (WebAPK) fonctionne correctement. Ne fait aucune mise en cache.
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  // laisse passer toutes les requêtes normalement
});
