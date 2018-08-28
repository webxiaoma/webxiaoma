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
    "revision": "7369615c25f6ab67a9427c5268cdf664"
  },
  {
    "url": "assets/css/0.styles.6a1e987c.css",
    "revision": "d5d108e42f8b00c487982380475aed7e"
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
    "url": "assets/js/10.c4006f0b.js",
    "revision": "a84563cf98a5559fd17074877aee97c9"
  },
  {
    "url": "assets/js/11.96b58f92.js",
    "revision": "af9399045dc2cb2e8090a52230714e29"
  },
  {
    "url": "assets/js/12.5575243b.js",
    "revision": "9f964b19d7d0c6f4d95d9e1dbbcad366"
  },
  {
    "url": "assets/js/13.a5aa50dc.js",
    "revision": "132aad7ed0933dbece492b42c337182a"
  },
  {
    "url": "assets/js/14.67a48957.js",
    "revision": "9da1a4b853f3a5b6b78b0a2ac51ec0bc"
  },
  {
    "url": "assets/js/15.cb1d42c5.js",
    "revision": "baa82e500b0606670ed0bccd2661af8f"
  },
  {
    "url": "assets/js/16.5b2722a5.js",
    "revision": "a5d667f117b3496d47903d351525a100"
  },
  {
    "url": "assets/js/17.e742e057.js",
    "revision": "6aca586ef8a3a5d1af092e4f8331557c"
  },
  {
    "url": "assets/js/18.8a491cef.js",
    "revision": "29cdbd01f532a11bdb2296b48c8ea158"
  },
  {
    "url": "assets/js/19.e0f9eb9f.js",
    "revision": "64e42356b3571ab28e06e4921dadc75e"
  },
  {
    "url": "assets/js/2.541ddb8d.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/20.471c7399.js",
    "revision": "ac0506c11ccfddccae866dcc309830cd"
  },
  {
    "url": "assets/js/21.0b8e2400.js",
    "revision": "8216678f53d92d202e7c7b922ca20833"
  },
  {
    "url": "assets/js/22.4c3e294e.js",
    "revision": "2dcfe0732e287a3bcb941546d995862e"
  },
  {
    "url": "assets/js/3.3410e2ea.js",
    "revision": "bedbb2aec690d65f3e4a870864eb19a0"
  },
  {
    "url": "assets/js/4.65c9f68f.js",
    "revision": "bed18e51a3aa34156301c95bb8058db2"
  },
  {
    "url": "assets/js/5.ab33df05.js",
    "revision": "accf438b4048050180e7e77266af0def"
  },
  {
    "url": "assets/js/6.b8077d6e.js",
    "revision": "9fad9fec4abf6f7345d24104da25b2be"
  },
  {
    "url": "assets/js/7.a8e658d8.js",
    "revision": "b10b1eb53f2b11ac0073bd04bd80a2b5"
  },
  {
    "url": "assets/js/8.620fc841.js",
    "revision": "99f2b882db6fdecb7b094c3e7cda8984"
  },
  {
    "url": "assets/js/9.b94b5e68.js",
    "revision": "769d98452e3a9e0b1e06a68a6c5dda2b"
  },
  {
    "url": "assets/js/app.a8be5589.js",
    "revision": "3a9cdf83fbc2b5240b526f9731f77f72"
  },
  {
    "url": "css/index.html",
    "revision": "75102207d77300e9518a9050d270f563"
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
    "url": "git/Git团队协作.html",
    "revision": "fcdd4e33af80e457cfdfa26de752f74c"
  },
  {
    "url": "git/Git多账户管理.html",
    "revision": "c3fba3126890be423fb221b3e676649d"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "8fffa70e7cf0916d41c9b39b90eba7bc"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "760f3532344f2da4d571237cf4a40e2c"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "a5100b0818f445b5673e57097cc89c53"
  },
  {
    "url": "git/index.html",
    "revision": "de66dd2b78d5ba334b0ad4eff5d1ee32"
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
    "url": "img/git-4-10.png",
    "revision": "e9655acb1d36402bbab0c9682df10e1b"
  },
  {
    "url": "img/git-4-11.png",
    "revision": "787b3f69cc225bf443c9171394e72696"
  },
  {
    "url": "img/git-4-12.png",
    "revision": "e7451a7e15ef79382e27e6ebbc55d192"
  },
  {
    "url": "img/git-4-13.jpg",
    "revision": "6cd7692efbaa25a4d700ed1cb6652dcb"
  },
  {
    "url": "img/git-4-13.png",
    "revision": "794e87fc48c92e1543661f893cf33473"
  },
  {
    "url": "img/git-4-14.png",
    "revision": "925e336e7accd401699bf1d531d389db"
  },
  {
    "url": "img/git-4-15.png",
    "revision": "9a7489a61da9285b7ac91bc8a4d37926"
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
    "revision": "1b7de38fbba0605c4771ff65d28bf0dc"
  },
  {
    "url": "javascript/index.html",
    "revision": "9ea8e02c7cc86b7eebf4d4838a96be1c"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "f4287d64d223a4ae875f489f11ef5e15"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "7fd5386a42f740863eca7ae54db414ef"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "18bac887d96f69605f2a73ef881c92d3"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "9ddb4e6b7f43e6095e0234e9db0190df"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "234f28100dbdf208f1d81703ff53c531"
  },
  {
    "url": "network/index.html",
    "revision": "a7b436f462c92d9c49a10c127c5bb0b9"
  },
  {
    "url": "vue/index.html",
    "revision": "1001a6b93080b649d6f121e2be8b2f61"
  },
  {
    "url": "vue/vue.html",
    "revision": "a761a5001c0d82017547d4c2eb79ee10"
  },
  {
    "url": "webpack/index.html",
    "revision": "d0042628a1a92b6bac708902b7384391"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "0fcde4e313ffb2b0bba59bfb655acdc2"
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
