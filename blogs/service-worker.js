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
    "revision": "10dd812df1c87f4ba163a83ec3d076ae"
  },
  {
    "url": "assets/css/0.styles.4f537f06.css",
    "revision": "f7e8cae98bc9f183095571e7dd837760"
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
    "url": "assets/js/10.bad1af34.js",
    "revision": "3c8ca1a5f2f1e1a95e883ace9c6d51d8"
  },
  {
    "url": "assets/js/11.8416d273.js",
    "revision": "5d8a85181c506c84632677cee9ea3d82"
  },
  {
    "url": "assets/js/12.3f621c95.js",
    "revision": "9fcc0c0a776c7a39eabdec336af6e6af"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/3.7c948216.js",
    "revision": "800d5c67e139193ecce6d921340f101a"
  },
  {
    "url": "assets/js/4.52ae1315.js",
    "revision": "b4427d9378d8b89342bb5b21937745a2"
  },
  {
    "url": "assets/js/5.2d236136.js",
    "revision": "26c256ef937839dc3064003b675121a6"
  },
  {
    "url": "assets/js/6.16727791.js",
    "revision": "5fd742795e84aa53bae5c5554e6263ee"
  },
  {
    "url": "assets/js/7.7377030b.js",
    "revision": "f00f04d6c18d43e54c2a6dfcd6539613"
  },
  {
    "url": "assets/js/8.2820b60e.js",
    "revision": "2db8b0c067264b5855e340f657b2ef95"
  },
  {
    "url": "assets/js/9.fa6c5475.js",
    "revision": "51c838b753af0b316223579af691978d"
  },
  {
    "url": "assets/js/app.c7e0ba69.js",
    "revision": "8f9b3dac9ce586f5f4dbf7be68f10363"
  },
  {
    "url": "css/index.html",
    "revision": "939115be6cdf069beac07dd7ff852f58"
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
    "url": "img/manong.jpg",
    "revision": "472f33f99d8badf129ab547293b11746"
  },
  {
    "url": "index.html",
    "revision": "ad9e56f34222ec5281a43bb48e3bdbc8"
  },
  {
    "url": "javascript/functiona.html",
    "revision": "316e4e31473202692d329e4ad66d0d85"
  },
  {
    "url": "javascript/index.html",
    "revision": "e11710e193a35830eb84bd4e9350a411"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "9a21b4f37aeeab74c14999d2f46f7260"
  },
  {
    "url": "network/index.html",
    "revision": "d905368ad11363b9018477e7a0a315a9"
  },
  {
    "url": "vue/index.html",
    "revision": "a0c0d8991cc8a927017175cdd06060d4"
  },
  {
    "url": "vue/vue.html",
    "revision": "89a534ec19fa0839e6395f9cf047902a"
  },
  {
    "url": "webpack/index.html",
    "revision": "cd09c57be5605065cbe69261f0c81400"
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
