/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "166c1e3fb534f57d384ff34bd7bc92c8"
  },
  {
    "url": "assets/css/0.styles.e568fa61.css",
    "revision": "386f91b78d722ab90bb6b427f68472c2"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.077124ee.js",
    "revision": "eec922f275a726c713345a7de96b7675"
  },
  {
    "url": "assets/js/11.f716f530.js",
    "revision": "3e80832b6debbb7a57fe51e44e97a725"
  },
  {
    "url": "assets/js/12.a1c41383.js",
    "revision": "638eed38742e57326795a739067d003f"
  },
  {
    "url": "assets/js/13.a8baffa1.js",
    "revision": "e6ac9668dc2c137bcf595d23ca6808b7"
  },
  {
    "url": "assets/js/14.ee0767c5.js",
    "revision": "887f42baebfef9b6a3014906aaecffc3"
  },
  {
    "url": "assets/js/15.8b43d900.js",
    "revision": "83f6d10ab38826c0eca7f260287ee903"
  },
  {
    "url": "assets/js/16.66beadb2.js",
    "revision": "601bfc2bf96f73457a6f44540e516ed1"
  },
  {
    "url": "assets/js/17.64184ba7.js",
    "revision": "921676c5edbfe0735fafb8323cf9a91a"
  },
  {
    "url": "assets/js/18.fc644cc3.js",
    "revision": "65dbde00c97d01a0288ab82791158370"
  },
  {
    "url": "assets/js/19.6e1d7ffc.js",
    "revision": "0567b657761636dcd9bd52c8f8dd81f1"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/20.736519b3.js",
    "revision": "a8b81332bd30cde90b005d7b01728e49"
  },
  {
    "url": "assets/js/3.47584e33.js",
    "revision": "997be6db2cefd836b0be7e4cf1017109"
  },
  {
    "url": "assets/js/4.b9e251d0.js",
    "revision": "55432579f0a0dd6b518aeddf26da9679"
  },
  {
    "url": "assets/js/5.f17c0f67.js",
    "revision": "958b82e4f4a15bd25e556e9139235bd5"
  },
  {
    "url": "assets/js/6.5e23eb53.js",
    "revision": "ac638107fef7bbb5f67468e5813b9586"
  },
  {
    "url": "assets/js/7.4bd76589.js",
    "revision": "5a6576f790a191fbe321e84e1366d746"
  },
  {
    "url": "assets/js/8.3d865f49.js",
    "revision": "925937d1c087a0f1c6452b152326d069"
  },
  {
    "url": "assets/js/9.69ebedec.js",
    "revision": "b2a04a4fc36bcdd421c9c3a1737e5345"
  },
  {
    "url": "assets/js/app.997f9451.js",
    "revision": "f180b1d80e04f0fbab2ca0c2ddfda359"
  },
  {
    "url": "css/index.html",
    "revision": "d86fb48cbef115b5be3fee65d981c2b7"
  },
  {
    "url": "fonts/iconfont.css",
    "revision": "881021835be6141221368b0cc1d164f9"
  },
  {
    "url": "fonts/iconfont.eot",
    "revision": "98171be3becc1615bddbd553c0ae7223"
  },
  {
    "url": "fonts/iconfont.svg",
    "revision": "06aa375cc8a5430c94fb0eabc002396d"
  },
  {
    "url": "fonts/iconfont.ttf",
    "revision": "b08fba3edf7a072f2134fb9f6533ee31"
  },
  {
    "url": "fonts/iconfont.woff",
    "revision": "62e9784e38e22ab5aa151808c935c62d"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "3581cefab5c4237193dbcc08bc818943"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "27bacd38ff5a888fbdf4b4321cceb76f"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "9b693afc75dce96764cfe071229173fc"
  },
  {
    "url": "git/index.html",
    "revision": "aaaf974f91cb88f494e864c5ebc2013b"
  },
  {
    "url": "img/1.png",
    "revision": "c8efc88e57c6d58c4b36b6a41dea7910"
  },
  {
    "url": "img/2.png",
    "revision": "2a73340a3f36a9a3efab25576cb776a5"
  },
  {
    "url": "img/3.png",
    "revision": "88cab9bb2e19cb6c780f500af2d990d0"
  },
  {
    "url": "img/4.png",
    "revision": "e2ed08df06d8b491c7be1ace79871868"
  },
  {
    "url": "img/5.png",
    "revision": "188fc5997ad30a956ae106a858ddb086"
  },
  {
    "url": "img/6.png",
    "revision": "4b7db687f153ee813650b128eea892b7"
  },
  {
    "url": "img/daima1.jpg",
    "revision": "a7e06ab6f5a575506183efb99c08b3e5"
  },
  {
    "url": "img/git-1.jpg",
    "revision": "899c68235dcec0526207a227b9db72a7"
  },
  {
    "url": "img/git-2-1.jpg",
    "revision": "34b1536e403b33b17b40d693ae73f687"
  },
  {
    "url": "img/git-2-2.jpg",
    "revision": "1c54b4e3878fdc4fde3b5d3bc304e7cc"
  },
  {
    "url": "img/git-2-3.jpg",
    "revision": "c1fe68c929d37dd1f019e517caeb5b91"
  },
  {
    "url": "img/git-2-4.jpg",
    "revision": "a4b155b0324eea5cbeaf9da6fb19cf07"
  },
  {
    "url": "img/git-2-5.jpg",
    "revision": "bcd76b1152970cc4163f350865b46368"
  },
  {
    "url": "img/git-2-6.jpg",
    "revision": "7f07a12baf64f297dc2c2cfd33fe16a4"
  },
  {
    "url": "img/git-2.jpg",
    "revision": "d657dd940b2a45621ebf74948368f023"
  },
  {
    "url": "img/git-3-1.jpg",
    "revision": "e1799259c4bbaa55787239c9e8096a7f"
  },
  {
    "url": "img/git-3-2.jpg",
    "revision": "1121f6f892d4199896a7c9da03937d5b"
  },
  {
    "url": "img/git-3-2.png",
    "revision": "eb5f893789e864a50400758b516c6cee"
  },
  {
    "url": "img/git-3-3.jpg",
    "revision": "754e72bbe8d4dd47410b59a871b4d8de"
  },
  {
    "url": "img/git-3-4.jpg",
    "revision": "d829d4209a68796fe81541df4b46d9b6"
  },
  {
    "url": "img/git-3-5.png",
    "revision": "80cd206382222f80e7247d255f7a0b37"
  },
  {
    "url": "img/manong.jpg",
    "revision": "472f33f99d8badf129ab547293b11746"
  },
  {
    "url": "img/webpack-1.png",
    "revision": "43e2d3bb59dc5af712ebc67e5d7c269a"
  },
  {
    "url": "index.html",
    "revision": "5d82a7c53e27163f91830f7984561bba"
  },
  {
    "url": "javascript/index.html",
    "revision": "f82b328e7be80269542e7e4a710c5f22"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "5a9d761697ae9ee32ffe541766504f3d"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "425ab429a807384886ddb6469b78e7f2"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "8e67548d9bba7df6d8789feec6d344c4"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "e70ef04f0375cd2d30840fed1796c2fa"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "2e07f73044a0f77ed2e8e7bada7b671e"
  },
  {
    "url": "network/index.html",
    "revision": "ca18d27676a3dcf3775464b5509e8624"
  },
  {
    "url": "vue/index.html",
    "revision": "10a15b6c767faab6ec8f11e83eb12991"
  },
  {
    "url": "vue/vue.html",
    "revision": "75a29f00dce28a85ba50260f3701499b"
  },
  {
    "url": "webpack/index.html",
    "revision": "94e78b35fd157d1a7882188b17cdcd11"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "145b46bbf435ef4486ac23a4fd4b6bb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
