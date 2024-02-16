'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/apple-touch-icon-57x57.png": "7d507fa4abd31ad57c487ff8d5f1db31",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/apple-touch-icon-144x144.png": "ebe39271fd5cfa99203ce10d3cbee884",
"icons/safari-pinned-tab.svg": "95abc832b2d7c0190f6ffc955e53cb14",
"icons/apple-touch-icon-72x72.png": "9f042df1fd38cd9c29818ae6055302aa",
"icons/android-chrome-192x192.png": "dab9d3a3034e56cff10f547b16b603cd",
"icons/favicon-194x194.png": "6c96f6e4a1b4d468a6b39448e03471d9",
"icons/apple-touch-icon-180x180.png": "41970b4f3b4943006c6ee39de076a8da",
"icons/favicon-16x16.png": "3052227a97e188f41be79bc515c0591a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.png": "d196d4a6508d3c08014617d7feb051c6",
"icons/apple-touch-icon-76x76.png": "01a23bc5bf0031149f0a5eb05ef085cf",
"icons/mstile-150x150.png": "9c0e1630f1339259eca941028f42f201",
"icons/apple-touch-icon-60x60.png": "afca6691b427997da446708c7dfd31ff",
"icons/apple-touch-icon.png": "41970b4f3b4943006c6ee39de076a8da",
"icons/apple-touch-icon-114x114.png": "f5aae19ff349202d32b732668dd3a317",
"icons/apple-touch-icon-152x152.png": "ae44cb0d68e6b0b5f40f73424c7f8ac6",
"icons/android-chrome-512x512.png": "21e9068dcc4b1884cc8e5fa09696cc3b",
"icons/apple-touch-icon-120x120.png": "6b796506c2e43717ac27eacaafa1e2fd",
"icons/favicon-32x32.png": "7885327e9857fda1ff8229799caf1bb4",
"version.json": "009c9e65172e010890f7f65fde438006",
"browserconfig.xml": "4bd04b7988dfaf9bfac198b35f77f9e0",
"manifest.json": "2f522bfd4e84891f157374a8612e227e",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"index.html": "5446602979614e2efd2aa4724a06478d",
"/": "5446602979614e2efd2aa4724a06478d",
"favicon.ico": "9c45706817e6a385d1768ced57434a00",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "841a79a6c8381d0a657b87f6bf2e93b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/AssetManifest.bin": "cf792117832835af24eb378b912690c7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "67675dae85008a91053d5ae6dd069613",
"assets/FontManifest.json": "879a13abef58476ecfdc69f1c37c3896",
"assets/fonts/MaterialIcons-Regular.otf": "1e3c983be6abc37c093910ed9a819334",
"assets/AssetManifest.bin.json": "30b6f52f1dbf3e3de7aa20dfb161629b",
"assets/NOTICES": "01963db88f1a8f6b6c17729f1c94d9d9",
"assets/assets/jsons/shapes.json": "28da69b74c33310a675ec89370d8784a",
"assets/assets/jsons/astra_dev.json": "3a8c2816f207188595936b5da4f0a975",
"assets/assets/jsons/skills_set.json": "ed27da329c3e36a4ce314d9f2d6544c8",
"assets/assets/images/google-play-store-icon.png": "97fb290ba81d8121f4996b0e1ec4047f",
"assets/assets/images/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/images/mountain.png": "c3caf953c938f59754941b2fca2f038f",
"assets/assets/images/logo.png": "f48d4c45294bdfea442edf34a4623226",
"assets/assets/images/swift-programming-language-icon.png": "419f94807fc42e3e91f999983252f956",
"assets/assets/images/xml.png": "14393d721c56d0aa799c14e8ec138b59",
"assets/assets/images/dart-programming-language-icon.png": "80e0cfaf4e39a2700665ae5762d76645",
"assets/assets/images/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/mountain_2.png": "6bcb7739deaacea362fdfed676d43ced",
"assets/assets/images/cityhopper_por.png": "784f4e816cf10a2f80b41211e42d0ead",
"assets/assets/images/kotlin-programming-language-icon.png": "e965b11a337c089593e7e2690a2646c7",
"assets/assets/images/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/flag_pak.png": "d78d3783eb7a03a74bda72c5da8e1209",
"assets/assets/images/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/images/mockup.png": "92e7bfdad40c933233d6b41e18a89287",
"assets/assets/images/heart.png": "4f73c096a9b273835b67d071abdd120b",
"assets/assets/images/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/javascript-programming-language-icon.png": "e1fd56fea1d09c846992d362a4f47a72",
"assets/assets/images/linkedIn.png": "97ee04a1328d312dc6ff433797d278d5",
"assets/assets/images/flutter-icon.png": "6ba940675e2cd74bde86ba0bd4201309",
"assets/assets/images/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/images/html-icon.png": "dc216e04d383a6cce92c9c6421565c2e",
"assets/assets/images/google-cloud-icon.png": "9ec61b40b45d30b0589c9951b7c79565",
"assets/assets/images/dev.jpg": "e740c521444ae80cf93c94380c718433",
"assets/assets/images/wadirect_por.png": "e23b76c346b7d827c4c6fbf25a1181cd",
"assets/assets/images/android-studio-icon.png": "f3f830ac6ad4b2f2d9f4be160ae1d4c3",
"assets/assets/images/react-js-icon.png": "1394d581fd7ac0274b5a71c266becb5c",
"assets/assets/images/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/images/skills.png": "c91f1f09652252ed6234204fd8d14be1",
"assets/assets/images/css-icon.png": "28f913a39cb22e472ec65397eae4719f",
"assets/assets/images/aws-icon.png": "818dee616e8696c115b721d664c73322",
"assets/assets/images/person.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/assets/images/google-firebase-icon.png": "c96ff29e54c68c01a6ae1871b37a45b1",
"assets/assets/images/api-code-icon.png": "8721f6fe55e5a2b94bff7ec07e682557",
"assets/assets/images/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/images/android-robot-bot-icon.png": "bf441aaccd3e234c3fc25a83f504db34",
"assets/assets/images/pak_flag.png": "bc4c286bb24b86267afea0e008936798",
"assets/assets/images/git-icon.png": "0a12a85a4f9107d7fb147634b6008c04",
"assets/assets/images/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/font/fair_prosper.ttf": "eae02049df39b7f06719be0af9dbf683"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
