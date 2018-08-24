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
    "revision": "ca8cb6e13b2cc826088db6a9a70aaaea"
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
    "url": "assets/js/10.fd37fa40.js",
    "revision": "fde88417bedb96ff8e524731d76f616a"
  },
  {
    "url": "assets/js/11.5f8c22b3.js",
    "revision": "177c3890599dddabd27bd8843465c9fb"
  },
  {
    "url": "assets/js/12.96f7638e.js",
    "revision": "18ad82498896afbcdfb235c9343f90f9"
  },
  {
    "url": "assets/js/13.1507adf0.js",
    "revision": "bd25a56c990558c48d87566ab80a41c3"
  },
  {
    "url": "assets/js/14.2d2ec564.js",
    "revision": "966d6ad15891d43df71e52d678c5940a"
  },
  {
    "url": "assets/js/15.4bc53c38.js",
    "revision": "fd9d42e3c137861b985d69045c52cd67"
  },
  {
    "url": "assets/js/16.acc70397.js",
    "revision": "ab9e5fafc51d9215c08e9f2e2f99d816"
  },
  {
    "url": "assets/js/17.72018111.js",
    "revision": "02e1070448c0c5169ce535a5f09e4137"
  },
  {
    "url": "assets/js/18.c2cc6fcc.js",
    "revision": "65fac5becf9b5108a46b7c24384c12cb"
  },
  {
    "url": "assets/js/19.16dc8357.js",
    "revision": "3f0a4be501dc0b316fffb7c230e103e6"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/20.0fc2b8ef.js",
    "revision": "20adb97e17506629d3a34802e53d09e6"
  },
  {
    "url": "assets/js/21.320de4bd.js",
    "revision": "352b3b2ff6b2260682ba3e09120866b3"
  },
  {
    "url": "assets/js/3.87cb5b5f.js",
    "revision": "e9200ff7f60fbac3c0031e63c423220a"
  },
  {
    "url": "assets/js/4.6da4da2d.js",
    "revision": "76e164114a84e884a6602c5cba3307ec"
  },
  {
    "url": "assets/js/5.4580ed80.js",
    "revision": "9cc65b9fb654011df20b55c35fc9db68"
  },
  {
    "url": "assets/js/6.1b5700a4.js",
    "revision": "7d6102185507182d0563924d4283ec56"
  },
  {
    "url": "assets/js/7.b22dc395.js",
    "revision": "df016d67be354cb777ce2eaba1920367"
  },
  {
    "url": "assets/js/8.c8cde0c1.js",
    "revision": "7a02ee4467c7331ee64bda70a5c36645"
  },
  {
    "url": "assets/js/9.327a7aeb.js",
    "revision": "a7f9be716be8f7fd4c85071984fab66a"
  },
  {
    "url": "assets/js/app.5f692eae.js",
    "revision": "1faf5d0fb6d7b09519229fd7f09f72dc"
  },
  {
    "url": "css/index.html",
    "revision": "bda94a1f41e61bb85073bfcef332edc5"
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
    "revision": "f18f88f32f53274b2499973a2420a775"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "b3b29cfc71fad17eb2f43b6fe946f4d3"
  },
  {
    "url": "git/Git的版本控制.html",
    "revision": "aea3d9f0756256c111239e5d72005678"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "7954fc470844e03ae43cef33c350da96"
  },
  {
    "url": "git/index.html",
    "revision": "efac3d8d8d4223ecc68753a1e86a0201"
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
    "revision": "e7dbe64731e1a3738a67fe6e9272ffd3"
  },
  {
    "url": "javascript/index.html",
    "revision": "d6072847259a811f091526cc7e7e40b5"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "51da1b3ead6faddaa3bc421f844db91e"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "f7b0b551a853af3af51b409a792615e8"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "bc22f641d3e74356327f6982a27e6c83"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "093e195a6def58ad6e35e22ada37aa67"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "34453a50a879ada1c33a45751b5c883d"
  },
  {
    "url": "network/index.html",
    "revision": "a9361b99997a6cbc3bd36a8725f9031f"
  },
  {
    "url": "vue/index.html",
    "revision": "7c141e47a4b5bf677379dddb53c02b54"
  },
  {
    "url": "vue/vue.html",
    "revision": "ec0521594977887c507122227d86db5f"
  },
  {
    "url": "webpack/index.html",
    "revision": "131e2e6c7efec7f1d5a65f17ecd5eb8d"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "cc3c5e67bab8652cc85893c98de399d2"
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
