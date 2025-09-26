self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("app-saudacao-cache").then(cache => {
        return cache.addAll([
          "index.html",
          "manifest.json",
          "icone_192.png",
          "icone_512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });  