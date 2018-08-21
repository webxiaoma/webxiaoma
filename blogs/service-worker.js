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
    "revision": "f75b16d60377a11a210c26c58c645580"
  },
  {
    "url": "6f0a76321d30f3c8120915e57f7bd77e.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/css/0.styles.8c268e6a.css",
    "revision": "a1ef98acd5cb756b85929348a4e4d38d"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.71eb2887.js",
    "revision": "3af8495210059e384f51c3260f4682e9"
  },
  {
    "url": "assets/js/11.b00e77e2.js",
    "revision": "59f88b15f390e4cb5f9aa0dc7d541146"
  },
  {
    "url": "assets/js/12.cdd2c52c.js",
    "revision": "ad1186410bfd23f92b9f9ceb934caff7"
  },
  {
    "url": "assets/js/13.8346ab98.js",
    "revision": "3a132850bb7105de74ee6750490c3483"
  },
  {
    "url": "assets/js/14.9b0da80a.js",
    "revision": "13ba26a0a3f5f7d9f9d5333cef21fdf8"
  },
  {
    "url": "assets/js/15.2af8c40d.js",
    "revision": "b81afa9ed8a99ab618130e48d9b45292"
  },
  {
    "url": "assets/js/16.b87677d7.js",
    "revision": "a8568202b8f953892d56fdeca4ea40a2"
  },
  {
    "url": "assets/js/17.0f23f391.js",
    "revision": "75c6774bedc40a181ee27b6a830c0173"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/3.d85068dd.js",
    "revision": "6d6a497439456c8b1cddfcafe24d4990"
  },
  {
    "url": "assets/js/4.d71db08f.js",
    "revision": "b6bf3ff77584d719c9303b32c316a759"
  },
  {
    "url": "assets/js/5.31fc68ab.js",
    "revision": "bf0ed26d2621d61b8e97d4aa0bf4c1e2"
  },
  {
    "url": "assets/js/6.45b7b4f0.js",
    "revision": "df9f998270f8fb514b4f5a060b684b51"
  },
  {
    "url": "assets/js/7.25419c64.js",
    "revision": "d869be650fb1eda8e4e174f3c6e4e0e2"
  },
  {
    "url": "assets/js/8.9a821deb.js",
    "revision": "b86217d4166b307a61a1135f57d3286b"
  },
  {
    "url": "assets/js/9.9fc56228.js",
    "revision": "1dea0b633168434607e8338efec4f12a"
  },
  {
    "url": "assets/js/app.60240b76.js",
    "revision": "d6b71f18537a5732ddbb0ed0da4582a0"
  },
  {
    "url": "css/index.html",
    "revision": "95666ed00c3e122bf02165ac5a2b5746"
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
    "url": "git/index.html",
    "revision": "62974ea53592be4ab67630a7cea9836d"
  },
  {
    "url": "img/daima1.jpg",
    "revision": "a7e06ab6f5a575506183efb99c08b3e5"
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
    "revision": "de6e71836c6b7d5b118784e6a0807f2d"
  },
  {
    "url": "javascript/index.html",
    "revision": "6d5bd1ae5d854baa44cfca144495b10f"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "3d9a36d341e54b8ccd0c6f7b571a99f9"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "fdd870f0f15b65e23799d374c6713bff"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "77117dd34f9e1fc239db399d48616e7e"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "4dadee4959a743df16176b258ab1de2a"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "bb7e962fe5d8863f4084cb7d0972f651"
  },
  {
    "url": "network/index.html",
    "revision": "4630cb1dd65941d60a0d6dbe7ea48abf"
  },
  {
    "url": "vue/index.html",
    "revision": "9b431faf9b83a49ce7e0def55281b571"
  },
  {
    "url": "vue/vue.html",
    "revision": "1d41b51fbed0edd5a9e966ecc52dff0f"
  },
  {
    "url": "webpack/index.html",
    "revision": "eb6db4f426c5096e5945d33f3a0eb2fe"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "c2b843059a9db2e86bbaaf140e7db366"
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
