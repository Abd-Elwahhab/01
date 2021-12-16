self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./css/main.css", "./css/all.css", "./css/media-query.css", "./css/nova-5t-media.css", "./images/logo.svg", "./images/sdaia.svg", "./js/main.js"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});