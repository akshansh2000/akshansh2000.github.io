'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "3def3c63a9d71ab0fcb247e578e7ec11",
"/manifest.json": "14e919b7b1dde549ab334b7ee3ce8412",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "2e601e8d56d8b50db3e65c286f1130c2",
"/index.html": "3216e4eace6afd7e9ef6d1ef7b1246c8",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/.git/refs/remotes/origin/master": "8396d51bfb3e66a47b61ec6fb087f123",
"/.git/refs/heads/master": "8396d51bfb3e66a47b61ec6fb087f123",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/index": "0b94c6f0e098cfa067bddcb97b830d34",
"/.git/COMMIT_EDITMSG": "d2c5449fe1cfedac6d510791c8d44a74",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/ORIG_HEAD": "31763469d8b3d9915ac7deac873bdd49",
"/.git/config": "00a85e1c605f4d49e031ed6a3e2b1d58",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/logs/refs/remotes/origin/master": "2a563f49dbce60db5f3124a32fac4e62",
"/.git/logs/refs/heads/master": "b2904f5929a0519cf1f5e12bf4ffa0ad",
"/.git/logs/HEAD": "b2904f5929a0519cf1f5e12bf4ffa0ad",
"/.git/objects/1b/e814d6c9994ea76adb3f22b0179d6941ea4374": "1d5a00ba9ada633b21926d183f20f8a5",
"/.git/objects/1b/c4288e0422f03efd2805dfadc211f3bcbc981f": "edc9a34edd5ee2caed6ad30689b447a0",
"/.git/objects/f4/726a5fbb0c0ae9290d688f873095b4ed02e640": "d2a025bd9cc3f7088aca05d9beda6048",
"/.git/objects/32/f20c8ff40444211d7a1ab8a3fef409ffc148ec": "dfc18ff5e487c272871ca57bd191be8b",
"/.git/objects/df/355d22ab2c95d63217058bb81e33f3dd209641": "da2d98c257bcc0056f3bea7e317f265a",
"/.git/objects/89/b2e48592d6e853991bbf4dc8307b4ccce90358": "9645872f57196f18b7ac8ada1b351644",
"/.git/objects/87/906d2c92ac5849781040cd5fce54e5f3a376e1": "7352569fdfb59ca21a479532cd00015e",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/3c/c78ae9228464d4edac260f38ca3dc8fe37fe86": "176ed87132356dd900e95fc41b05fb3b",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/e5/c40d3952ba7f2d11c465f8358d9c811289f035": "3f87f2f166aa98be36dcf4e39a38d51a",
"/.git/objects/d5/7a3875ac71729717035d977be8c6c40214b87f": "e3dbe88f5c998d044b8557e70ea75f9f",
"/.git/objects/7c/568f9455dcbb2726884ef7f616378382a9cd38": "ea42fb2d1f5928e2be57ed3eed0b8f7c",
"/.git/objects/01/4386cfff880be4f6572d71a570ce615aec6218": "69e5d1175e9e4a590f469a7ca9bdd044",
"/.git/objects/fe/cebb8e7ece6e11fc9454e261c23dfe435bc6ff": "415586b65941dd2b9b1086278e881095",
"/.git/objects/c1/bdeb00c98cfb2ef570cd5bcbb893fc831ebde2": "ae941cb8aa8fa91ba22f0e56291e35af",
"/.git/objects/5c/948d3214d7ce38d93bf21ece9bb33004a227aa": "8345ae489344c32ba239309bb0b3738c",
"/.git/objects/ef/2f81c07064025d75f229059e9a2f12dcb96576": "64e9027b0040eb4a7ad29e476a43f82f",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/51/f0acbab8067389ce5c36bbb964043655bce57f": "77f2529361f7f8118cd1876416c59118",
"/.git/objects/0a/4effe9dbb6680985a3674d1cccb2854546d1f0": "81ce024705d6b3bfbdbdbfe79e875f26",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/9e/f483b96566d64dd4ba85f3bca45dd9b97d1f8c": "5279d102addc8511b1a974a966ed739c",
"/.git/objects/12/7c8c1c7633d699c540219cee75207f92fef1a9": "de458f5bbb63badb8db1366aaf37e114",
"/.git/objects/13/ecc5fd1876130bcd73de3c780d4e2a6132dc53": "6789d55613646374eecdcd1ebb23da62",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/cc/4d6ce319bd93e9ff608bf3810057439eb9109d": "0d83e6a180f663567700f930ad3f8dfb",
"/.git/objects/b0/64a3b12bbeb511e14b5dc57dfbd075fbe136b3": "938843c76d9039fe2774e918d9399600",
"/.git/objects/37/801877fb28bed5d03ea84c951b811a97ec1530": "c29b631c5fd3f1739326ffb696dfa763",
"/.git/objects/c3/05f586eb1e4c847715f403a65a1ee19ed353a6": "9018dab3ed47169badbcc1b7cc6282f0",
"/.git/objects/c2/e8385e6016ba0a6563cf2a2935720c18049c8a": "5cd982cd945c74d63d8e5b541b929800",
"/.git/objects/c2/2cc74ac8920b86a9f5321314dd8d7b76c183cc": "44335790b55cd7577d22b54f7c211c03",
"/.git/objects/c2/8825546c39956f8e62c4315053396362577c90": "b24678e460126cfd841e42f966804943",
"/.git/objects/66/905bd80cbc2f8d706a634a67439e3264bf7fbc": "8f5c4ce1b655201caa13c0033df8f7c3",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/83/96778ed6e8c9678c6fa24ba1efcb19b6db4918": "ca26aa71b179e62e9ec7a7707baa40eb",
"/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/e6/cf3cde18c28621989c59502287a21528e5a1d3": "ac4898eeedcacbf8e436cf92cda66c8a",
"/.git/objects/e2/afadb0137988a6ba530f9d568507271de0d02d": "e7a2e7320b826209f7924fe7b70726b8",
"/.git/objects/75/831ccedd497f6fdc4e8bca2d5166b19962f1f4": "55f1a0b06f04939b82eb9b19646c7c59",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/15/1d1c31cc2fe623eb5de2278aa1a385d3819283": "983284e1b935004df824d68c0f0425b2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
