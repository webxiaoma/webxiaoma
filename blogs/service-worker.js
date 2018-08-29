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
    "revision": "7596caaffe1901740a81ec266f0606f8"
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
    "url": "assets/js/10.b0931966.js",
    "revision": "4d84d687487e3bc867bdc45725bac5ab"
  },
  {
    "url": "assets/js/11.7e0c4480.js",
    "revision": "748ab079e3ae4c173ea854a8325d49e6"
  },
  {
    "url": "assets/js/12.d784d9c3.js",
    "revision": "5a57ebef7f1a349b6f6d1f780d6b9742"
  },
  {
    "url": "assets/js/13.57b39f5d.js",
    "revision": "a76d1ab350ed17e8b9855205387bfc97"
  },
  {
    "url": "assets/js/14.7fa930f2.js",
    "revision": "07851ed0f63300b8d08fc5111a2a3a33"
  },
  {
    "url": "assets/js/15.4621a26e.js",
    "revision": "bdad0b125194414d7d0ebc94fa8ff167"
  },
  {
    "url": "assets/js/16.4b118620.js",
    "revision": "d374fb7ee3d53098e45b64e98e20244f"
  },
  {
    "url": "assets/js/17.60d8da61.js",
    "revision": "408e4c27602ecb6941676fbf1a1afad8"
  },
  {
    "url": "assets/js/18.adbd1d91.js",
    "revision": "4eb9ae7afd40f7db4e5ad370dc203941"
  },
  {
    "url": "assets/js/19.d72e69ab.js",
    "revision": "d842891702c2f7a7637c831c5b7a5cd5"
  },
  {
    "url": "assets/js/2.eea0509a.js",
    "revision": "ba0abd703fb0d990eef06f5e005973f3"
  },
  {
    "url": "assets/js/20.9c52346c.js",
    "revision": "90a9a71919acef974d124a949badec5e"
  },
  {
    "url": "assets/js/21.213ebdb7.js",
    "revision": "2ef0708c3345006aea425378379aa60d"
  },
  {
    "url": "assets/js/22.6b891363.js",
    "revision": "414041cb2e8da4bc995fce0b8d81c61d"
  },
  {
    "url": "assets/js/23.78f8ecfd.js",
    "revision": "d2cc4cbb2e96fd2db0b7d5830a903753"
  },
  {
    "url": "assets/js/24.c850ad67.js",
    "revision": "02e60993fce24a5c5e3c415b4f69a623"
  },
  {
    "url": "assets/js/25.64aa69ec.js",
    "revision": "a72732999be455e889668b6e542e911c"
  },
  {
    "url": "assets/js/3.42e4fdd9.js",
    "revision": "19b13b7687eb7cbf0bd17791b8eed3d6"
  },
  {
    "url": "assets/js/4.0d943f4e.js",
    "revision": "39e52cc42cae7152ba03fe026f81570f"
  },
  {
    "url": "assets/js/5.4f433c51.js",
    "revision": "7593e437d4e2f1f96e3f57ec4d346937"
  },
  {
    "url": "assets/js/6.9d7bb77e.js",
    "revision": "cf2b7a224c1a6087cd809b73be0fc71c"
  },
  {
    "url": "assets/js/7.1b3b3736.js",
    "revision": "ae4e3cede4e8e8e1f9a31ab501a68671"
  },
  {
    "url": "assets/js/8.3855d0d9.js",
    "revision": "7d82eb99091d836a61b732d3c7cecbce"
  },
  {
    "url": "assets/js/9.9e85b059.js",
    "revision": "fa0c8d20a1cba5cf234a0e1972ae32fe"
  },
  {
    "url": "assets/js/app.151dbb62.js",
    "revision": "b6082eb1e3e07016fcd5229a644d273a"
  },
  {
    "url": "css/index.html",
    "revision": "dee76d083c2e3ac3aac41c453ca7183e"
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
    "revision": "9225798c1d1a871712962dfc838ad3ca"
  },
  {
    "url": "git/Git多账户管理.html",
    "revision": "e652eb5860aad651d907a58f6cd9bca0"
  },
  {
    "url": "git/Git标签操作.html",
    "revision": "552d8ee4426fcfd20c17de4c3bd0d187"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "ac0261f114df3b4ab725d12ad6f7c690"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "bd739dcdf08ef146ffd73ed45cadd437"
  },
  {
    "url": "git/Git的子模块.html",
    "revision": "b4872e990b600e1b591e1e5262a2c0cc"
  },
  {
    "url": "git/Git的相关配置.html",
    "revision": "c6bd0a5490c916756b7ec1f28ea5195d"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "294313cacd366e97d5aa0480e94440f8"
  },
  {
    "url": "git/index.html",
    "revision": "fdf517baa33c64a767be84b54e55ff1c"
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
    "revision": "6cbe71409804c703830ba783f385b987"
  },
  {
    "url": "javascript/index.html",
    "revision": "c254bf4c53da80f5ef0065d819b88966"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "58d70b4fd8154ee34e1d9e62e14fc159"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "6c5d2850910f51894c5ed6274163ef49"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "08644a544939824e71b51225bcdeeb04"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "de2d4d9ab25cbdbe07bae24d807f4956"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "2449db60a1cafe9dc291d6334364cf93"
  },
  {
    "url": "network/index.html",
    "revision": "1e0a43cf51d02affb959ce691feb085b"
  },
  {
    "url": "vue/index.html",
    "revision": "099f47833db18bedc00b75e90767afa4"
  },
  {
    "url": "vue/vue.html",
    "revision": "75b96c8e11dc7379ba0ad4d1304c0d7a"
  },
  {
    "url": "webpack/index.html",
    "revision": "b2263e611ae7607c24069d5d20069b1b"
  },
  {
    "url": "webpack/webpack配置篇.html",
    "revision": "e2cbc42baed399630f081182ac51b5b6"
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
