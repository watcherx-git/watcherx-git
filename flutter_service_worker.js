'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6fe82a4c943f1d83786d54e27de9c841",
".git/config": "962da3ce51c010483cec806c5dbbf95d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "827931640c0d3e1ab5a1e512ef8443d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1b3c63bb65214d246d648e4f7f04dbc",
".git/logs/refs/heads/main": "264997bdeba395105ceb0fb3ca2628dd",
".git/objects/08/a6046b11a09c5059e2d12411d198b5e674fa99": "aa76434f0d78992af9acc273e5ddef72",
".git/objects/0a/b84c9ef6c914dc4a4c46478cecafcbc678f23b": "1818e348416315e9cb5d5931165bfe0e",
".git/objects/0b/eb5b99add4429e8aed564b7cad77ea6f437105": "9509fd32f37e32b82e1fe9c4ec1fb0cc",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/19/22d2fd0d021a8fdd7699d2d27f9ec4988ecd72": "2fcee9d0a14b093f93d0f9692caf87fc",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/aa7f52555329ce9967e689f4415c4745e74dfb": "b45d27e1329bf808af7288cadf369d43",
".git/objects/25/da45aa823a8aaceb6183bb9b1440f4d16ade54": "64a4dfe54f3fc81d774079616cf59e28",
".git/objects/29/e3bd3f01b5bc1e10557ddf283d03790e6726b0": "5de6afcf09b87466628af36f48a3b72a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/3f89cebdb05ed88c92711809421c479746cc31": "7378535431f3a12544a8cb8f5bf7877c",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/66/1f1080a88cd6c4463003e4d557947605dad382": "e7af066858819a1223db23b8d9f909df",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/d84c936f7601d35e6eb850385aa48717214038": "57147abb3f7ca85438186d094f82c715",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
".git/objects/8e/b56d1d8b72236391d6bdcc7e81e070f5799bf4": "75e29a431a343f8d527e22860e8ca40c",
".git/objects/97/831c6661e2daf099d6655bf8805259a50b4ba2": "ff2733fe59970dfbde75029dda2a7480",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/5179c7304003e5e6a6df9bd5b36f9b4bd21085": "85bd05c518784ec00b04ad611b264010",
".git/objects/9f/28048c84b573c5e5ce3e4c89dda447134294f9": "2db938719eea277f8ee2875afb40923c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/ec269434cdddc30c947fdcd2d69c3b710e8def": "e647d22a8176fff1f2e5e60f485cba33",
".git/objects/a9/fd9fe6f7d081276351b2d4f44032085e1ebe4c": "c5b56fc825cff1859567d8f4d141c4c3",
".git/objects/ad/e84baeed76774c42afeb9321cfc6294ae1b117": "7783106774d2fac8156bf3bd1c6f8e56",
".git/objects/bb/b57330ead9cf4daea2ee007f02a8265fac1647": "44db549578f38266cbd3f79038b8094d",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/86d231dcf4c718b7927dc770d6f0e1ab27dc85": "6cec3c3ffcf1174f161eab156bb1ffef",
".git/objects/d2/d4b3f4e55f6aeb792c4cd7507cbf723d376668": "954b7f5f6d104b928f483db2787fab17",
".git/objects/d3/24851b77df77000c5945273d0dc928ad44d356": "e54e202896c24e852e104c33e357ffdd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/8d0f618386c206fdd6eefa66df08755d7ccdb6": "134860ad6073c4ecb563275be77c75b8",
".git/objects/dd/5bb48f333a85d9a62ecb111d6544b80cdd12d4": "9f814171d05ac277ef2ed877453b7102",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/3753838801c9e3a2f6b574d0a97d577b2b1632": "a0ad97e35607d743fb7557b28f85ec5f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/224ba2da49241df2ab90d942f26249141f386c": "059d057dc4b6c19f1a26941c1fea943e",
".git/refs/heads/main": "3585db61c9793621ace2224534ed8ea4",
"assets/AssetManifest.json": "a675d26c712d6166ed8f984d74d112b1",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/app-store-icon.jpg": "6b60eb5f8554e8939756adf5ab33330d",
"assets/lib/assets/connecting.json": "fedcf42b436dec97bac8a6f72e4373d6",
"assets/lib/assets/man-watching-a-movie.json": "353ab276896516b68f59b0f27beaca8a",
"assets/lib/assets/play-store-icon.jpg": "f9c8aa44f520ea446b401970382d114a",
"assets/lib/assets/satellite.json": "a573dfef41ef3e6c50c69e1d6c04c1e8",
"assets/lib/assets/searching.json": "b766f3d087f40bf6c3da3adeee47a77f",
"assets/lib/assets/splash_logo.png": "76f9db1bb9de7e60d17379def3e47165",
"assets/lib/assets/three_emulators.png": "8471b96ab0ad6d1c05548da209790fd5",
"assets/NOTICES": "a7e91d5d6b0e835afb013ea1acb5e7d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "5c80cf1d7e400463ee7486d78b6fcfcf",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "1a62a0d6593dba034cde14db03384288",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "1a62a0d6593dba034cde14db03384288",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "898ff345e4efe28488106f5cb661aed7",
"/": "898ff345e4efe28488106f5cb661aed7",
"main.dart.js": "ca98130e6116b9c877cf07caecb659ec",
"manifest.json": "818f8f0749404f9e117ede28556f22b3",
"version.json": "3a8b9b22cc4f25a990a9391e65e18f0f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
