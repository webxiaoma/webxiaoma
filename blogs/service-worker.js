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
    "revision": "44d289be91f83c46923a988755417242"
  },
  {
    "url": "assets/css/0.styles.5ce267f4.css",
    "revision": "07100388c0c6aef34f0485b0bdd49395"
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
    "url": "assets/js/10.468a59c3.js",
    "revision": "7383a0962f9a2918b9d988b92864f1b8"
  },
  {
    "url": "assets/js/11.0788df0e.js",
    "revision": "707b68aa92d48557c0a0170b57584304"
  },
  {
    "url": "assets/js/12.b5afb921.js",
    "revision": "3a3c15c3768c90880529f7146e33c9c8"
  },
  {
    "url": "assets/js/13.d0406113.js",
    "revision": "073d660b439c53b46da206ebdebfab4c"
  },
  {
    "url": "assets/js/14.e6797965.js",
    "revision": "08f14730767d3f18a8d6ff792a33c954"
  },
  {
    "url": "assets/js/15.75f99c61.js",
    "revision": "88599acd30c5dd0a960cd86fdd2eccd5"
  },
  {
    "url": "assets/js/16.b06724fe.js",
    "revision": "e8b9892273389c8e6322e8572a45a9ec"
  },
  {
    "url": "assets/js/17.b351679a.js",
    "revision": "00d9deda53bd60d056584bb2a5699d6f"
  },
  {
    "url": "assets/js/18.5d88a391.js",
    "revision": "d6fdf1373b08fe581831ca76078ead38"
  },
  {
    "url": "assets/js/19.e15ca414.js",
    "revision": "849d3c2262b151f9cf29fd7074e1d41c"
  },
  {
    "url": "assets/js/2.eea0509a.js",
    "revision": "ba0abd703fb0d990eef06f5e005973f3"
  },
  {
    "url": "assets/js/20.7cd6c86c.js",
    "revision": "f25874186f33a90d59a90f20b0b5f7d0"
  },
  {
    "url": "assets/js/21.ad7db65e.js",
    "revision": "82d499bc9b644fbfdac3d938ba522804"
  },
  {
    "url": "assets/js/22.8ded776a.js",
    "revision": "be7b1ceeb96afc3d6479bebb9ffc1ca9"
  },
  {
    "url": "assets/js/23.f5a05efd.js",
    "revision": "33f452a4ca64de3808f63f6d04b7ebfb"
  },
  {
    "url": "assets/js/24.119b66f4.js",
    "revision": "e4addea5c53f8831e95debacbba29e6f"
  },
  {
    "url": "assets/js/25.d2bb8f49.js",
    "revision": "b4fa358e0e236219f650c4ba129f002c"
  },
  {
    "url": "assets/js/26.fe641d24.js",
    "revision": "d48fae020fde352ddce7237e1d33a7ff"
  },
  {
    "url": "assets/js/27.effc1136.js",
    "revision": "0889775840ce555045b985bad0faff57"
  },
  {
    "url": "assets/js/28.1df2fbd1.js",
    "revision": "94942cd76eba0daed079a91386f15e45"
  },
  {
    "url": "assets/js/29.dae28d44.js",
    "revision": "b7597bfd3b95dda614a3eb87057feb18"
  },
  {
    "url": "assets/js/3.ea9f714d.js",
    "revision": "302db76a110c5e1e2f938943c9820959"
  },
  {
    "url": "assets/js/4.dacd879f.js",
    "revision": "d9859ba154e5d6d7c297350144725a93"
  },
  {
    "url": "assets/js/5.7c667622.js",
    "revision": "6d6ef1cb5304f70b3c14956fe6b0606a"
  },
  {
    "url": "assets/js/6.0ef40c55.js",
    "revision": "2cd1b336696dc14bddac6b32296620ba"
  },
  {
    "url": "assets/js/7.6e0caa17.js",
    "revision": "357551464a250077bcbe2f7efd6264ed"
  },
  {
    "url": "assets/js/8.4ce6631d.js",
    "revision": "696fad111f1da057223c24c6a24444cc"
  },
  {
    "url": "assets/js/9.9812e890.js",
    "revision": "1116fc86ddc0df6a8dd6bba5634fcffc"
  },
  {
    "url": "assets/js/app.5ea3dbea.js",
    "revision": "000f05cd2980f69c08eba732a9883180"
  },
  {
    "url": "css/index.html",
    "revision": "a773b931d0f7b5ea077c98046ad1d050"
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
    "revision": "cf03110fba63d837670d6b8eaab1b90e"
  },
  {
    "url": "git/Git多账户管理.html",
    "revision": "918d5bdf1d14116a4968b06413d48adc"
  },
  {
    "url": "git/Git标签操作.html",
    "revision": "7f0373272fc286d92e0b284ea216d033"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "7005687e342368acb2b698546438a128"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "abc763ba55123502d9b5ac33cf9c67e8"
  },
  {
    "url": "git/Git的子模块.html",
    "revision": "8c4c9278ca8814fa5561f32ff1589e10"
  },
  {
    "url": "git/Git的相关配置.html",
    "revision": "c76a19ad148cabd943df2ee6a9f138dc"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "78d52c69c97b5ea499424761e35411f8"
  },
  {
    "url": "git/index.html",
    "revision": "0de4d3281ef640fd2042cc34e49b8c75"
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
    "url": "img/phone-1-1.jpg",
    "revision": "f9a4a0072db76ac5d5ce87a9e7e7fcb6"
  },
  {
    "url": "img/webpack-1.png",
    "revision": "43e2d3bb59dc5af712ebc67e5d7c269a"
  },
  {
    "url": "index.html",
    "revision": "e59edb960de54e5b9ed51d68df8e1ce1"
  },
  {
    "url": "javascript/index.html",
    "revision": "349ae1af25a8502268143232e05b277b"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "c8f38fd5fe2a0a4fbf8c95a5d1bfc4cc"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "0d15fb0beeb7b4f53f06319654a9e514"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "b86f39d000ce74f16e08f192425e0ea7"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "046d81e05c9d54aeca7e7702c2f4673c"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "5ca1c34775acae9d663cf5f445f0e53a"
  },
  {
    "url": "network/index.html",
    "revision": "5db375919c602fca091663539dfcf245"
  },
  {
    "url": "phone/css常见问题.html",
    "revision": "00ce9de78f878e5dbf55f16d50a8f998"
  },
  {
    "url": "phone/index.html",
    "revision": "bb99e70049beba4063ec0ad8f225740d"
  },
  {
    "url": "phone/移动端的事件处理.html",
    "revision": "2a7b499b61093184440cfaaac491fba9"
  },
  {
    "url": "phone/移动端的适配.html",
    "revision": "9a08b4035e092bf2b059594712172132"
  },
  {
    "url": "vue/index.html",
    "revision": "0cd1ebcb56df86130994af341c2bd391"
  },
  {
    "url": "vue/vue.html",
    "revision": "a5e7ee6cd08b7b4acf45080ffe4a02fd"
  },
  {
    "url": "webpack/index.html",
    "revision": "092e952849ce7d499af1b6fa8a882d85"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "f094309b983e0c67ee517baf39fc31cc"
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
