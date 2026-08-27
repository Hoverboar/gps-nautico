const CACHE = "gps-nautico-v2";

const ARQUIVOS = [
  "./",
  "./index.html",
  "./service-worker.js",
  "https://unpkg.com/leaflet/dist/leaflet.js",
  "https://unpkg.com/leaflet/dist/leaflet.css"
];


self.addEventListener("install", function(event){

event.waitUntil(

caches.open(CACHE).then(function(cache){

return cache.addAll(ARQUIVOS);

})

);

});



self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request)

.then(function(resposta){

return resposta || fetch(event.request);

})

);

});
