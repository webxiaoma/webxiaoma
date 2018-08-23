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
    "revision": "284364d9a43f8dadc12880ca09db9094"
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
    "url": "assets/js/10.884ac8a4.js",
    "revision": "22071b506debd1f27e5c3873687f2670"
  },
  {
    "url": "assets/js/11.31dcfc85.js",
    "revision": "376e8601dd51a8fd15f08ddfc9f0a7d5"
  },
  {
    "url": "assets/js/12.3396401d.js",
    "revision": "f994bfdf45246b8239961105fde81c7f"
  },
  {
    "url": "assets/js/13.ea8b68f1.js",
    "revision": "6ca6eb9e8e7fa6a726e96a70d0192359"
  },
  {
    "url": "assets/js/14.12efcec2.js",
    "revision": "64498c9184637e9e0661eb127508f4fa"
  },
  {
    "url": "assets/js/15.603dc955.js",
    "revision": "fb853647da0e4d2c10d3a7124cb4f952"
  },
  {
    "url": "assets/js/16.de4588cd.js",
    "revision": "620e283fdfc576302925e2565235ae7e"
  },
  {
    "url": "assets/js/17.7881717e.js",
    "revision": "cf3b15d39572afbb109490b92b9bfbcb"
  },
  {
    "url": "assets/js/18.69097f26.js",
    "revision": "134caf23bf3dbd6a46e141bddf54f0ae"
  },
  {
    "url": "assets/js/19.8faddab0.js",
    "revision": "80b74039589304c9392563f0c43d3096"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/3.47584e33.js",
    "revision": "997be6db2cefd836b0be7e4cf1017109"
  },
  {
    "url": "assets/js/4.889700a2.js",
    "revision": "76e164114a84e884a6602c5cba3307ec"
  },
  {
    "url": "assets/js/5.88fff5b8.js",
    "revision": "45d82abd93a86d438a59ad8ff46c8e4b"
  },
  {
    "url": "assets/js/6.4fcebc43.js",
    "revision": "f55672643ef4339fd880af066b555122"
  },
  {
    "url": "assets/js/7.f372cbd5.js",
    "revision": "b53c067ef3f1d6c3fb2b04747b286b07"
  },
  {
    "url": "assets/js/8.d2f67782.js",
    "revision": "cbbfad269eadb391cacb94c5b814c0a3"
  },
  {
    "url": "assets/js/9.58d7aff4.js",
    "revision": "3090cb68efdac2792f2f6d6e17e91760"
  },
  {
    "url": "assets/js/app.215daaa3.js",
    "revision": "feb7f2889f2efcaf21eced961a44e9b3"
  },
  {
    "url": "css/index.html",
    "revision": "2faf6ac128b7a6fcb1dfc68b3ddce94f"
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
    "url": "git/Git的基本操作.html",
    "revision": "1d82b6d74970b1e3c6407711876ef302"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "1ed49a0269649c12ecb52a9b4dd20538"
  },
  {
    "url": "git/index.html",
    "revision": "d370f1b0e6a38df34daf4bf94b42bf83"
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
    "url": "img/manong.jpg",
    "revision": "472f33f99d8badf129ab547293b11746"
  },
  {
    "url": "img/webpack-1.png",
    "revision": "43e2d3bb59dc5af712ebc67e5d7c269a"
  },
  {
    "url": "index.html",
    "revision": "875332195fb9c2ea4af46fad37f2c3cf"
  },
  {
    "url": "javascript/index.html",
    "revision": "f4f7d37709e1bfb54d3434cbc4b4dacf"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "79d0d2e98f67644fc811aea8b288d36e"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "2e3900b05377a631b4c3abff04b4ab87"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "849be0949309de60865522799ee47bf6"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "53b0976745a5095473b6c4828ba9dd0f"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "02f983d23850ef13cda950eb949b7513"
  },
  {
    "url": "network/index.html",
    "revision": "7fa667c5b5a5783abdce00506d80f8d1"
  },
  {
    "url": "vue/index.html",
    "revision": "3c762dbc52a97a9cab229b5a8f66e3e9"
  },
  {
    "url": "vue/vue.html",
    "revision": "91bfd514ddeb2c951887fd674b8c6b31"
  },
  {
    "url": "webpack/index.html",
    "revision": "f064db2d6326f53deebac4e3cdbfcc51"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "30cd0ac867c1181366f8e5a8e4fd88d6"
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
