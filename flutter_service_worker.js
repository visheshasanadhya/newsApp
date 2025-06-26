'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "58204c2b6f1e16efb8b2f3fa582dee49",
"assets/AssetManifest.bin.json": "cf11e17ae197ced8479c2550e977b04b",
"assets/AssetManifest.json": "a8b47dbb3fadff9c2c9e371a8601997d",
"assets/assets/font/montserrat/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/font/montserrat/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/font/montserrat/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/font/montserrat/Montserrat-SemiBold.otf": "bb3740d350b0186ce32b5678972bf061",
"assets/assets/image/flags/china.png": "d50f1039cb3d11e16dcd4d6b8843e438",
"assets/assets/image/flags/france.png": "7431536e2942d51c41da372ed284f00e",
"assets/assets/image/flags/germany.png": "29bb72c6f6547003aa40ab08ff8f9c83",
"assets/assets/image/flags/india.png": "a164838297f204705e13cc1556e1d22b",
"assets/assets/image/flags/italy.png": "1e30844869d670a614354b69c783ccfe",
"assets/assets/image/flags/japan.png": "b14bb068b769f865ae068af96263a69e",
"assets/assets/image/flags/russia.png": "7c1a6e2d760cfa3b1c3e8100a1eef5a3",
"assets/assets/image/flags/spain.png": "6fdab1f1ad9bdec6150ff446f9b7d4b3",
"assets/assets/image/flags/uk.png": "1f0567b161c9dec3da09284a89e3ea53",
"assets/assets/image/flags/usa.png": "2cc65a4d091091ed2430fee431a08497",
"assets/assets/image/home/backarrow.png": "75f52a50958ee29da8db21f2f6acc9b3",
"assets/assets/image/home/dropdown.png": "166d11939794d8822557229c5131753f",
"assets/assets/image/home/google.png": "c3f3b26d378c9c4f446acf47d0a01f29",
"assets/assets/image/home/google_theme.png": "85b6be472e8f6585c3efce89a072bfb3",
"assets/assets/image/home/Heart.png": "edefb75d8b0ec93cdcd3df8585515752",
"assets/assets/image/home/home.png": "2b00375a2b3594a03ee86c153759f99f",
"assets/assets/image/home/live.png": "abbd76897f2de6fb84bd9e531cdb2d40",
"assets/assets/image/home/loader.gif": "775cafb4a329633962f267adebb0ca04",
"assets/assets/image/home/loader_big.gif": "6facafe73b373318751f89aeeab2736f",
"assets/assets/image/home/NEWS.png": "1489650aec94f4d9b2121a24e7b2dc43",
"assets/assets/image/home/newsIcon.jpg": "9856911d922930787c279a68165b7678",
"assets/assets/image/home/nextarrow.png": "cfdd70cec3bbbc2dd63f9447c6d55b14",
"assets/assets/image/home/play.png": "e26c83dc7fb07c6166b4b8bed2f6d841",
"assets/assets/image/home/stop.png": "bed662f007d6f146030ba9ad8602ed83",
"assets/assets/image/home/translate_big.png": "635c8b023ad05096c10105c3e3d31271",
"assets/assets/image/home/translate_small.png": "90343116e97a9534352778e35f3bc64b",
"assets/assets/image/home/truemark.png": "6bcfcff0d7bf8d1b5a88523b4637dd6e",
"assets/assets/image/home/unfavorite.png": "43591fdf51a9d8b28995bf6a3f5c59fb",
"assets/assets/image/intro/Group%2520165.png": "b10f80c0fde4a69610a1ad4a032e2013",
"assets/assets/image/intro/Group%2520166.png": "2ef9a88d7f3c456357da1490c4db02fb",
"assets/assets/image/intro/Group%2520167.png": "3ab4d6f4874a999d90b29917d1bd154a",
"assets/assets/image/intro/Group%2520170.png": "87bcccf3b89c4a04f427670ac192d952",
"assets/assets/image/intro/intro1.png": "41cfd2495cc39153927c5cd8d910787b",
"assets/assets/image/intro/intro2.png": "fbaad3bc671daa5b3205edd9e384a515",
"assets/assets/image/intro/intro3.png": "a9ca0f0c761b578e2dce9182ac2247dc",
"assets/assets/image/intro/intro4.png": "788f0f9d2c8f8d6a78b470266f45ea91",
"assets/assets/image/intro/splash.gif": "32536d612f2ea5d318306a7b9498cd2a",
"assets/assets/image/news/china/chinaDaily.png": "f9455f19912fd10d30a89d197b9d9976",
"assets/assets/image/news/china/globalTimes.png": "43e625078b8e4e046023f25e90a4ef3e",
"assets/assets/image/news/china/peoplesDaily.png": "beff7c8c74af10a1f6be644960834ef2",
"assets/assets/image/news/france/leFigaro.png": "ef360a5d2aa78e596bfb143bcc7a5d4a",
"assets/assets/image/news/france/leMonde.png": "869ee113e2e17e0fb9c0e0768fbf9846",
"assets/assets/image/news/france/lePerisian.png": "b7d8eaf61de20da90196a6ac0e9062cc",
"assets/assets/image/news/france/lequipe.png": "ad01204c207ac122b060439c00a307e6",
"assets/assets/image/news/france/liberation.png": "d28a5173594cf12a78196bb3a88085ee",
"assets/assets/image/news/germany/bild.png": "30a7bcfb580cb9dc38394f6f7c04e57b",
"assets/assets/image/news/germany/D&W.png": "7076854e3c4b31b2b332718aaefcbf30",
"assets/assets/image/news/germany/Die_Welt.png": "d2e903f7b6df8a4a4f497b1432a3f148",
"assets/assets/image/news/germany/frankfurter_Allgemeine.png": "7ab8c488c0175fbc9293e4bc1c8527eb",
"assets/assets/image/news/germany/handelsbatt.png": "833bea9e8f306af17d28cd2749aff4f9",
"assets/assets/image/news/india/ananda.png": "62579648830f51b4c714c05462068802",
"assets/assets/image/news/india/dainikBhaskar.png": "d4780e546665d341d9354e38eb33eeb0",
"assets/assets/image/news/india/dinamalar.png": "55c6645ec13df94dc5ff2550d2fe307c",
"assets/assets/image/news/india/ennadu.png": "7677e421540c598092dab8ade81263a6",
"assets/assets/image/news/india/gujarat_samachar.png": "90c6a8e9855bfa887ebd4c5f7bcac79a",
"assets/assets/image/news/india/hindustantimes.png": "92938906d7fc8322759c15facbfb55c1",
"assets/assets/image/news/india/indianExpress.png": "958316885c20888c63514a056ce34b91",
"assets/assets/image/news/india/kashmir.png": "8393896b0824399a23fe3fd7e0f8bb8d",
"assets/assets/image/news/india/lokmat.png": "b985d19200c55f1ec8c5d80da1c547c5",
"assets/assets/image/news/india/mangalam.png": "e513452edec819a06f17f8075fdfcd86",
"assets/assets/image/news/india/punjabkesri.png": "a910a8e5946ac69def9f14a96655af05",
"assets/assets/image/news/india/TheEconomicTimes.png": "5c39c1752774b38732e23393f9dcf328",
"assets/assets/image/news/india/times%2520of%2520india.png": "2a56e4862435032d5987ca4a47a8041e",
"assets/assets/image/news/italy/avvenire.png": "e97af5d753c1e77ab7c3c970a9266473",
"assets/assets/image/news/italy/corrireDellaSera.png": "1e5843b04ed4d59099ad7f3fcdc7e95f",
"assets/assets/image/news/italy/Il_Gazzettino.png": "a554a0c9cf80dc3006738309ab5b17d3",
"assets/assets/image/news/italy/La_Repubblica.png": "ed3fbf7adcd5093612f02eeda40eba60",
"assets/assets/image/news/italy/la_stampa.png": "fcd02d48ed73712f09b94433cce7e992",
"assets/assets/image/news/japan/japannews.png": "351ecdf31e24358a8aed3ca4edd3ef05",
"assets/assets/image/news/japan/japantimes.png": "4606acb5426ffe494a791c4c54e5a81f",
"assets/assets/image/news/japan/japanToday.png": "ff7375c26d5cc2f57fe33d7f656e2eb9",
"assets/assets/image/news/japan/nikkeiAsia.png": "d236ac0febe180378355c226fca0ee77",
"assets/assets/image/news/japan/theAsahiShimbun.png": "92e03ab951f9b2a5d5867719510907b6",
"assets/assets/image/news/russia/argumentryFacty.png": "c1903ab6af46cb0fd9cd64037470d602",
"assets/assets/image/news/russia/kommersant.png": "5737a75e574b0d8a3db56f2590927ffc",
"assets/assets/image/news/russia/komsomolskayaPravda.png": "2cf6bd854bc444880b76ca599c142aa1",
"assets/assets/image/news/russia/theMoscowTimes.png": "e14b4187392b180579b26f7d75aee2ad",
"assets/assets/image/news/russia/trud.png": "36c52081f1d6cfb525fd700657c8f3a8",
"assets/assets/image/news/spain/abc_News.png": "8ff2e438d521fb2d8d27c214f898842f",
"assets/assets/image/news/spain/diariovasco.png": "e7995c5f92ecb3942f9088764b97ec08",
"assets/assets/image/news/spain/el_Mundo.png": "4281392d9fdd35d0a05a71f00d8220ae",
"assets/assets/image/news/spain/el_Pais.png": "853eb9b38459906f25ed06bf1da1e1eb",
"assets/assets/image/news/spain/la_Vanguardia.png": "105bd3cf7d80b34babb1ffce98f2bcef",
"assets/assets/image/news/uk/dailymail.png": "64707dffd94c2e55ad61f7f5b4b91895",
"assets/assets/image/news/uk/metro.png": "adf17e2b722689133fac5833cee3b0d7",
"assets/assets/image/news/uk/mirror.png": "eb75a0ffecbbc4eb5c4b7d310db25bb3",
"assets/assets/image/news/uk/thesun.png": "d8477ef2adee7c83e48e513f15cc1e49",
"assets/assets/image/news/uk/theTimes.png": "ee1e0ce4eddbed9d6baedeb18d9af208",
"assets/assets/image/news/usa/cicagoTribune.png": "bb6273beeff8f0b8d93675d2264ed9a9",
"assets/assets/image/news/usa/deseretNews.png": "983c99197dce9bd1f7101ebfc50a32f8",
"assets/assets/image/news/usa/NYpost.png": "7f1fce96e8ff75658eb245411ec504ad",
"assets/assets/image/news/usa/USAtoday.png": "0a39894cfabf1f43024bad3de1209760",
"assets/assets/image/news/usa/WSJ.png": "5e758e233d1f835f637660bbde402a83",
"assets/FontManifest.json": "81c90913f3d587bb16a0c8e5707a159a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a6481225c21a83b02276f76acd1b9d21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "eeb8277fe8ee9b8daba50429d8ce1539",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0550683abda804b3f73f79270f28f7e3",
"/": "0550683abda804b3f73f79270f28f7e3",
"main.dart.js": "149c833b39b1de679e6c3ae85a26a975",
"manifest.json": "a32ab0eb001625a8d2612b54eb339056",
"version.json": "b5bbf8680e067fa5b5e63130b25cbe97"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
