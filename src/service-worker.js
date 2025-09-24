self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("app-saudacao-cache").then(cache => {
        return cache.addAll([
          "corhorario.html",
          "manifest.json",
          "yin_yang_192x192.png",
          "yin_yang_512x512.png",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });  