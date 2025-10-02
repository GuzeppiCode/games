importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
/*
workbox.routing.registerRoute(
    /\.(?:css|js|html|xml|png)$/,
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": "Guzu",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 60*60 * 24 * 7
            })
        ]
    })
);

*/