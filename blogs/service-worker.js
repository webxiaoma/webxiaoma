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
    "revision": "c51a9fead7e4cd3c23e9f75fa533f400"
  },
  {
    "url": "6f0a76321d30f3c8120915e57f7bd77e.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/css/0.styles.9ce42a0c.css",
    "revision": "4796ceff285e08ae526d918fcba454c5"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.f8396dd8.js",
    "revision": "22071b506debd1f27e5c3873687f2670"
  },
  {
    "url": "assets/js/11.86eec2db.js",
    "revision": "376e8601dd51a8fd15f08ddfc9f0a7d5"
  },
  {
    "url": "assets/js/12.f413f7a7.js",
    "revision": "f994bfdf45246b8239961105fde81c7f"
  },
  {
    "url": "assets/js/13.fabe7c5d.js",
    "revision": "6ca6eb9e8e7fa6a726e96a70d0192359"
  },
  {
    "url": "assets/js/14.589068d4.js",
    "revision": "64498c9184637e9e0661eb127508f4fa"
  },
  {
    "url": "assets/js/15.48b82d1a.js",
    "revision": "fb853647da0e4d2c10d3a7124cb4f952"
  },
  {
    "url": "assets/js/16.bd218b88.js",
    "revision": "620e283fdfc576302925e2565235ae7e"
  },
  {
    "url": "assets/js/17.1601aed5.js",
    "revision": "cf3b15d39572afbb109490b92b9bfbcb"
  },
  {
    "url": "assets/js/18.fdf11021.js",
    "revision": "134caf23bf3dbd6a46e141bddf54f0ae"
  },
  {
    "url": "assets/js/19.e45136de.js",
    "revision": "80b74039589304c9392563f0c43d3096"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/3.27c1bd43.js",
    "revision": "a951f5f23b9b618f17af075bf57ecb1c"
  },
  {
    "url": "assets/js/4.6da4da2d.js",
    "revision": "76e164114a84e884a6602c5cba3307ec"
  },
  {
    "url": "assets/js/5.40e82097.js",
    "revision": "45d82abd93a86d438a59ad8ff46c8e4b"
  },
  {
    "url": "assets/js/6.47c54a4c.js",
    "revision": "f55672643ef4339fd880af066b555122"
  },
  {
    "url": "assets/js/7.0f1cf6ae.js",
    "revision": "b53c067ef3f1d6c3fb2b04747b286b07"
  },
  {
    "url": "assets/js/8.8c2eb696.js",
    "revision": "cbbfad269eadb391cacb94c5b814c0a3"
  },
  {
    "url": "assets/js/9.8693f33a.js",
    "revision": "3090cb68efdac2792f2f6d6e17e91760"
  },
  {
    "url": "assets/js/app.f3571754.js",
    "revision": "682aeaaaca58a74d6d491ab246140f42"
  },
  {
    "url": "css/index.html",
    "revision": "9d28d0f0b290c9a875f1f6f4a1cf2eac"
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
    "revision": "f08ca8a85a4f976b86125c58885b6451"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "443c20fd2a7844d097c4c0c225234a14"
  },
  {
    "url": "git/index.html",
    "revision": "b1731051e9afd4cb4ea79341f3635403"
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
    "revision": "f46a935a70306d1db47273828d3838ef"
  },
  {
    "url": "javascript/index.html",
    "revision": "91829f3502a05e9a92a492e8e585c730"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "58aae6ffcf93366ad680d3d279ae8cd0"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "fa2a723d0a1b1a8030fec9914d98bdf5"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "c9cac95b2a9f886733d749aac1875d3c"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "a15cf3adce7114bf63a5e032282323ad"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "7586688267b9fc4fcba0fd1b9e7a297b"
  },
  {
    "url": "network/index.html",
    "revision": "6364cad1e9df4e1f5c568c9a1d66b8a6"
  },
  {
    "url": "vue/index.html",
    "revision": "71bbd53fa1178394da316d6f1167f97b"
  },
  {
    "url": "vue/vue.html",
    "revision": "cc1aca04a8b7c384d74d3c6b510f4aa1"
  },
  {
    "url": "webpack/index.html",
    "revision": "e8402962f4931d47ca1ae719c55aac7e"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "760223e261cc2c4eabe00f3d0182c726"
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
