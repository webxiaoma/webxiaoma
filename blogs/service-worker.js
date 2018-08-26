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
    "revision": "212c6bc3ec1e8b70b0394db00625b7a0"
  },
  {
    "url": "6f0a76321d30f3c8120915e57f7bd77e.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/css/0.styles.39fbe732.css",
    "revision": "d0b2b9474e66f1cb99f94acc74e3bc65"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.250f6a96.js",
    "revision": "eec922f275a726c713345a7de96b7675"
  },
  {
    "url": "assets/js/11.19875c99.js",
    "revision": "3e80832b6debbb7a57fe51e44e97a725"
  },
  {
    "url": "assets/js/12.a3196328.js",
    "revision": "638eed38742e57326795a739067d003f"
  },
  {
    "url": "assets/js/13.0afad265.js",
    "revision": "e6ac9668dc2c137bcf595d23ca6808b7"
  },
  {
    "url": "assets/js/14.9b26ca35.js",
    "revision": "887f42baebfef9b6a3014906aaecffc3"
  },
  {
    "url": "assets/js/15.e2945067.js",
    "revision": "83f6d10ab38826c0eca7f260287ee903"
  },
  {
    "url": "assets/js/16.cdc52b37.js",
    "revision": "601bfc2bf96f73457a6f44540e516ed1"
  },
  {
    "url": "assets/js/17.a03f7c10.js",
    "revision": "921676c5edbfe0735fafb8323cf9a91a"
  },
  {
    "url": "assets/js/18.f06ade7a.js",
    "revision": "65dbde00c97d01a0288ab82791158370"
  },
  {
    "url": "assets/js/19.f0f7eec9.js",
    "revision": "0567b657761636dcd9bd52c8f8dd81f1"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/20.ae5be8e9.js",
    "revision": "a8b81332bd30cde90b005d7b01728e49"
  },
  {
    "url": "assets/js/3.27c1bd43.js",
    "revision": "a951f5f23b9b618f17af075bf57ecb1c"
  },
  {
    "url": "assets/js/4.a43b64b4.js",
    "revision": "55432579f0a0dd6b518aeddf26da9679"
  },
  {
    "url": "assets/js/5.ae25cb65.js",
    "revision": "958b82e4f4a15bd25e556e9139235bd5"
  },
  {
    "url": "assets/js/6.df32b4f2.js",
    "revision": "53dfbce5c8e19b9efdcae818479c18cf"
  },
  {
    "url": "assets/js/7.13f8a246.js",
    "revision": "5a6576f790a191fbe321e84e1366d746"
  },
  {
    "url": "assets/js/8.96c18b6e.js",
    "revision": "f13f73eeecdcbd7d0bf4bf18ecf8ed3f"
  },
  {
    "url": "assets/js/9.2e0d2fe0.js",
    "revision": "b2a04a4fc36bcdd421c9c3a1737e5345"
  },
  {
    "url": "assets/js/app.cac2270b.js",
    "revision": "095eaa0b9b7a2b7136ff08c5a15e9089"
  },
  {
    "url": "css/index.html",
    "revision": "98c96449a2dfdf139bce51e0ba4a9014"
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
    "revision": "c7ec78837f80bc00aecbfb6de4ed1cbc"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "35b2e047d114682972b8cdef1b9f055b"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "a2b9d4ebce484c5956ae919b3b013406"
  },
  {
    "url": "git/index.html",
    "revision": "1936585fc0a77268f8cc4ab50bba705c"
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
    "url": "img/git-4-1.png",
    "revision": "ff5db4ae08215872698aaf701ce0dc27"
  },
  {
    "url": "img/git-4-2.png",
    "revision": "4fa0c993304094aa5d0511aa7fa5e753"
  },
  {
    "url": "img/git-4-3.png",
    "revision": "fdcbeeda125759b1174321f2a029b518"
  },
  {
    "url": "img/git-4-4.png",
    "revision": "3157de4f284f563145b8d1f8edf9f7fc"
  },
  {
    "url": "img/git-4-5.png",
    "revision": "7839256d913c465b1a85f9fcabf7ff86"
  },
  {
    "url": "img/git-4-6.png",
    "revision": "ebff2b282ed7c43f4d3226f3a83bbf95"
  },
  {
    "url": "img/git-4-7.png",
    "revision": "ab750f8b428409684066f8bea9b1a13f"
  },
  {
    "url": "img/git-4-8.png",
    "revision": "3574b263542ff6166f4cb9b83c018bef"
  },
  {
    "url": "img/git-4-9.png",
    "revision": "3bf5244a4cdafdc1ecaebb7feb581c89"
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
    "revision": "78e9539cf440aab1d3c18388c2b18e65"
  },
  {
    "url": "javascript/index.html",
    "revision": "a44ebfd2a5ac6e270b40d8ec340ee482"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "956634e19b6afc1b2743e19a2a3b05b0"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "99f7987e579aac26fa7de0f1f0df64d2"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "f44880c4a41caa2c6d70384fb273cd06"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "0bf3320a14096b74e603bc4c96c7d58b"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "fe00652994ce7d93a7001dcfb6374d63"
  },
  {
    "url": "network/index.html",
    "revision": "645afd66391602898af6487996512464"
  },
  {
    "url": "vue/index.html",
    "revision": "fd2262ef6a2691774f989b87b1c05109"
  },
  {
    "url": "vue/vue.html",
    "revision": "d2e339a64f3bff0cb866033194e31009"
  },
  {
    "url": "webpack/index.html",
    "revision": "6d5705c101d780de3f8029a37c34dfb7"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "8dab84de2f78a32af7364a4ff11ce962"
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
