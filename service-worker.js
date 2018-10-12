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
    "revision": "2d0baaeaa92a513a61388ad3ce4a1cd2"
  },
  {
    "url": "assets/css/0.styles.74caf1e0.css",
    "revision": "887bfc5ece6d63cd0fe93e98148141b5"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.a67c81d4.js",
    "revision": "439320f4be7a755f5b6648bc3f826f60"
  },
  {
    "url": "assets/js/11.5c78d958.js",
    "revision": "49e64627d90266dcfaeb827ae835c85a"
  },
  {
    "url": "assets/js/12.bed41476.js",
    "revision": "f9376dfb179616a2607a96863ec3ebb1"
  },
  {
    "url": "assets/js/13.d73a27cd.js",
    "revision": "f0decde82d925a9f9bbdc632f823f332"
  },
  {
    "url": "assets/js/14.dc3eb6ac.js",
    "revision": "a15be0932a8c03918a3d739d9113e50b"
  },
  {
    "url": "assets/js/15.7b00a7ae.js",
    "revision": "abe40cc988ec2af685c243f9f3a5baef"
  },
  {
    "url": "assets/js/16.cfcbf433.js",
    "revision": "ea5c9ae0ca0f4d0bae149827d515aedb"
  },
  {
    "url": "assets/js/17.0e63d637.js",
    "revision": "6019bfb7c3259ff550561f266b2f9ad1"
  },
  {
    "url": "assets/js/18.2f16314b.js",
    "revision": "f2d2837b280fbe838ce2623960c1a3fe"
  },
  {
    "url": "assets/js/19.c67cd72e.js",
    "revision": "c42ccbcfbcaa672d188ce1ff517af908"
  },
  {
    "url": "assets/js/2.eea0509a.js",
    "revision": "ba0abd703fb0d990eef06f5e005973f3"
  },
  {
    "url": "assets/js/20.bdcc8c57.js",
    "revision": "09598455c2b3c03b10251007e96f39c4"
  },
  {
    "url": "assets/js/21.bf7463cc.js",
    "revision": "ca45bcaab07af9dc0e0887e66ed13585"
  },
  {
    "url": "assets/js/22.c77f0486.js",
    "revision": "d7ac24c1f5d704b7446401056a865dd6"
  },
  {
    "url": "assets/js/23.300448b3.js",
    "revision": "7d79b6bde9e8e924441eecc8e6d450db"
  },
  {
    "url": "assets/js/24.80b098e9.js",
    "revision": "b3b1d696b0447da622e145d2264ed51b"
  },
  {
    "url": "assets/js/25.15ec3655.js",
    "revision": "c9c06ec4128272fa17d661de97a11e04"
  },
  {
    "url": "assets/js/26.8be96a65.js",
    "revision": "7c299382b1b2f7065ee832870cb265df"
  },
  {
    "url": "assets/js/27.dd70fc2e.js",
    "revision": "df6d6d038ac42dd637f2b5ec2369c206"
  },
  {
    "url": "assets/js/28.ee4f8ba0.js",
    "revision": "bbacce58b5a5753b83f8f625b4fbd513"
  },
  {
    "url": "assets/js/29.d9fddddf.js",
    "revision": "0d4cde00b3953d49a519b04c97f2228b"
  },
  {
    "url": "assets/js/3.92cc4fac.js",
    "revision": "501be4317b564fca57a7609f850d247b"
  },
  {
    "url": "assets/js/30.c827a4e5.js",
    "revision": "a911efa548ac2712c9cad8feb1958f93"
  },
  {
    "url": "assets/js/31.47bb34b8.js",
    "revision": "0a9b0aefdcb86445f6361f85afa7e8df"
  },
  {
    "url": "assets/js/32.7ceacea2.js",
    "revision": "e692947eed91aa830fbf45f6bfec3bce"
  },
  {
    "url": "assets/js/33.93580df8.js",
    "revision": "1c56b1e385e0a7ecaeb3567b6f800485"
  },
  {
    "url": "assets/js/34.ecfb40d6.js",
    "revision": "29661161a51441a78327443c0d102164"
  },
  {
    "url": "assets/js/35.4147e405.js",
    "revision": "e2d91fb34d3593fb23f64b969216f200"
  },
  {
    "url": "assets/js/36.76a2c7ae.js",
    "revision": "a064088986f60cdbc9bb920e254d4ee9"
  },
  {
    "url": "assets/js/37.ed120e6a.js",
    "revision": "22a1852219d54a0602e1802115fd2596"
  },
  {
    "url": "assets/js/38.2167e20f.js",
    "revision": "a3d06889c66c5895227ece02b16d0e51"
  },
  {
    "url": "assets/js/39.b0a48843.js",
    "revision": "fbcd97763482d8165ee3fb67d20e9079"
  },
  {
    "url": "assets/js/4.61ad26dd.js",
    "revision": "880a349bf8f8ce046da7b5219829ffe3"
  },
  {
    "url": "assets/js/40.c37092f9.js",
    "revision": "5d4410a67c2b1e28148ca91aa477e48d"
  },
  {
    "url": "assets/js/41.c7f416e7.js",
    "revision": "e5ad5b31a2e20d8b701c6f566e389cd4"
  },
  {
    "url": "assets/js/42.d13bfea5.js",
    "revision": "832e8575a5e7d63581b5291f04908d93"
  },
  {
    "url": "assets/js/43.5818c5ba.js",
    "revision": "79e06df49350336cf134ece85ebbdf44"
  },
  {
    "url": "assets/js/44.3e0582ed.js",
    "revision": "63bc1b353c8ecb7eeb7048a14bffbcc2"
  },
  {
    "url": "assets/js/45.7b1991ea.js",
    "revision": "440ba0c635c9fca349bed5e3736e575a"
  },
  {
    "url": "assets/js/46.04b42bb3.js",
    "revision": "3861db7c0c3001c5168a044b407b8c02"
  },
  {
    "url": "assets/js/47.0d53c32a.js",
    "revision": "ec7ca3a2dc4c8f0283619c4587e5cae2"
  },
  {
    "url": "assets/js/48.62cd859a.js",
    "revision": "a254d1ed48af90cd19704729814543a0"
  },
  {
    "url": "assets/js/49.c082456b.js",
    "revision": "e0789bc5fedb9d136351d9d5a8c9c6cb"
  },
  {
    "url": "assets/js/5.c2a26591.js",
    "revision": "6a3329cf2f8f978bd10a5f5f89c31ed0"
  },
  {
    "url": "assets/js/50.ddc7b866.js",
    "revision": "5b9d204eb3e54b1e4e825fe8408c08d7"
  },
  {
    "url": "assets/js/51.9bba5ada.js",
    "revision": "50ca78a4863d623fde2817f38ac08d89"
  },
  {
    "url": "assets/js/52.01db5f03.js",
    "revision": "fb55c833c0b6008b44f05b68b2be3252"
  },
  {
    "url": "assets/js/53.ff3b5bec.js",
    "revision": "57e5a6c4d0f919c840ced7c164d01b07"
  },
  {
    "url": "assets/js/54.071ea6c3.js",
    "revision": "af2a8f921af6963b81a77a38a83f88c7"
  },
  {
    "url": "assets/js/55.b6b473ea.js",
    "revision": "e019c09434408f6e3df88da238e811cd"
  },
  {
    "url": "assets/js/56.3af6e9bd.js",
    "revision": "aa5c76040a0b590bc3c4e766b0b21787"
  },
  {
    "url": "assets/js/57.7a2755da.js",
    "revision": "6c7f47ee159aef8ec98c28d3aa0a14e8"
  },
  {
    "url": "assets/js/58.900d84e5.js",
    "revision": "69685cb8cd2e119201d4217ee96440f5"
  },
  {
    "url": "assets/js/59.f33a4752.js",
    "revision": "f6af3f9f32261a7c1605c030a27fa813"
  },
  {
    "url": "assets/js/6.2132a336.js",
    "revision": "f8ee5a51b4525181e3a53af4590e3e0c"
  },
  {
    "url": "assets/js/60.f8f70daa.js",
    "revision": "53937f869bf54127d9961344886a4af1"
  },
  {
    "url": "assets/js/61.ec10a736.js",
    "revision": "19f1348b0885de50d9f5596aa1480c50"
  },
  {
    "url": "assets/js/62.744b1d97.js",
    "revision": "7f86722afb27e545ad0e101d6b09e3d6"
  },
  {
    "url": "assets/js/63.fa7dc119.js",
    "revision": "e14932ec8266cc6331a7699b5fb8853c"
  },
  {
    "url": "assets/js/64.238ad0a9.js",
    "revision": "9f37f8a7989d44b8a74f8bed452cd5d6"
  },
  {
    "url": "assets/js/65.75fdbfb9.js",
    "revision": "47c4a15bd1f602c45ee4bcf582cc5ead"
  },
  {
    "url": "assets/js/66.a8982041.js",
    "revision": "609c3bcb62e80a2754e3b69457b8e8b8"
  },
  {
    "url": "assets/js/67.067a87f0.js",
    "revision": "5ae7206e4f178a200557dc5a1ad5a5bf"
  },
  {
    "url": "assets/js/68.3a5900a1.js",
    "revision": "7be968b122f0e509e334e1825f8c3693"
  },
  {
    "url": "assets/js/7.80d26d60.js",
    "revision": "6ad45868e969d7e7418e267b43209613"
  },
  {
    "url": "assets/js/8.7ebc0969.js",
    "revision": "08bea0c3f6da147a24b56aa17f28ca49"
  },
  {
    "url": "assets/js/9.59eafed8.js",
    "revision": "9219d0fe6157769e181745d5996e1539"
  },
  {
    "url": "assets/js/app.69b58b33.js",
    "revision": "ad849b6ad697bf243f14a211889b7569"
  },
  {
    "url": "css/index.html",
    "revision": "24f4a7db98c1c55451cd4c5206695c7b"
  },
  {
    "url": "english/index.html",
    "revision": "4838445fb9a66b8d5865446fcc7cdbac"
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
    "revision": "5cbc46cd19f9e148d5dd78dcbca6fb5a"
  },
  {
    "url": "git/Git多账户管理.html",
    "revision": "7f8eeb71c0745e907281c5aef53a6c0e"
  },
  {
    "url": "git/Git标签操作.html",
    "revision": "df29f3e1597c74d84d9789d9a88c2dba"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "7f5bf88600991ae3b882b7ab0cb89761"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "4e705559a447617bec43e8342138390b"
  },
  {
    "url": "git/Git的子模块.html",
    "revision": "65114865bf0e90df4bb886fe2902fd03"
  },
  {
    "url": "git/Git的相关配置.html",
    "revision": "08eaed006e7c3730714c357d1f786986"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "1e5b45da758666551d56b9338500bf1b"
  },
  {
    "url": "git/index.html",
    "revision": "16120753cc2d2b76843cfedd5f9397c2"
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
    "url": "img/audio.png",
    "revision": "42aa2f0173cb2efc36e925b45d3bf3e0"
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
    "url": "img/linux-2.png",
    "revision": "9e9f2ef604e80ba8a9e8f4970f21e6cf"
  },
  {
    "url": "img/manong.jpg",
    "revision": "472f33f99d8badf129ab547293b11746"
  },
  {
    "url": "img/phon-two.png",
    "revision": "a967e615832c493f7bc94c663cd8bb19"
  },
  {
    "url": "img/phone-1-1.jpg",
    "revision": "f9a4a0072db76ac5d5ce87a9e7e7fcb6"
  },
  {
    "url": "img/phone.png",
    "revision": "16f2b51b3d593e9c4868c6861aa9ec89"
  },
  {
    "url": "img/webpack-1.png",
    "revision": "43e2d3bb59dc5af712ebc67e5d7c269a"
  },
  {
    "url": "index.html",
    "revision": "348fc526b78d5d162c8cc72ad61d4251"
  },
  {
    "url": "javascript/ArrayBuffer处理二进制.html",
    "revision": "324b566369c3d9e7234d0170c2c22d2a"
  },
  {
    "url": "javascript/audio.html",
    "revision": "37394a67c90c96ab8c8ef0c79b7b38c5"
  },
  {
    "url": "javascript/babel.html",
    "revision": "70d42b6e8039f5663aea17ad3768f800"
  },
  {
    "url": "javascript/base64处理.html",
    "revision": "0cea0e7f926f2c59ea836fd237335dab"
  },
  {
    "url": "javascript/Blob处理类文件对象.html",
    "revision": "7f89aef8351d77a71cf420c2682fdffa"
  },
  {
    "url": "javascript/FileReader和FormData对象.html",
    "revision": "4901b6bda0ef276164116e50496c243a"
  },
  {
    "url": "javascript/index.html",
    "revision": "eca62c672a2d18616fe762bfe388ddb1"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "7d302d3ef111b4236d08261a5fc7ff0f"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "7224a0331cd2321a7bad5617d5c01941"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "dc89f32f948e199006c561da79fc8eea"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "54364c88db56e67977e973994963fd56"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "cb0709656d12ea9af3f7ce712cf9f81f"
  },
  {
    "url": "javascript/video.html",
    "revision": "bcf8a6e9e9873fa038e7e7355d2b6ce9"
  },
  {
    "url": "knowledge/index.html",
    "revision": "4d1162ea613178b2f85c09dea1ea264b"
  },
  {
    "url": "knowledge/常见面试题.html",
    "revision": "b1f6f07cedaace5c6f3ab111deb8cef0"
  },
  {
    "url": "linux/index.html",
    "revision": "255fa5ab9d1ab15b1baa30c0c4f036d9"
  },
  {
    "url": "linux/linux-init.html",
    "revision": "0c44dc7670722562dac0a70290456d7c"
  },
  {
    "url": "network/index.html",
    "revision": "52d2159e21e354d0e3db1ccab754ad74"
  },
  {
    "url": "network/交换机和路由区别.html",
    "revision": "36ba7a9b4072119c6341fa03182dc3f9"
  },
  {
    "url": "network/编码处理.html",
    "revision": "7b6ec4925147b83b4621ce7e6af1f340"
  },
  {
    "url": "node/index.html",
    "revision": "9a25f435ed20d8dbf745926b4f3c3cc8"
  },
  {
    "url": "node/nodejs搭建简易服务器.html",
    "revision": "31d40db5408f391209c3a80caf24233e"
  },
  {
    "url": "node/NodeJS的安装.html",
    "revision": "231ca84f4e9fba6b8202ac63b7cf0a8a"
  },
  {
    "url": "node/npm.html",
    "revision": "062c78e6505967fd16e609b1dfc75237"
  },
  {
    "url": "phone/css常见问题.html",
    "revision": "c3d6e6c6589523c1af2b74564068b1b8"
  },
  {
    "url": "phone/index.html",
    "revision": "c7e1fe4f7c32c9875819ff496171f511"
  },
  {
    "url": "phone/移动端的一些概念.html",
    "revision": "5d6a2f836cf2545a5efb7c17d2d2f503"
  },
  {
    "url": "phone/移动端的事件处理.html",
    "revision": "624cefd45155bf6fc0a86787c493cab5"
  },
  {
    "url": "phone/移动端的适配.html",
    "revision": "87a1654aa5a467a8a3b189bfad463471"
  },
  {
    "url": "vue/index.html",
    "revision": "467d83bceebaf16a22f15b00a4fd9c43"
  },
  {
    "url": "vue/学习须知.html",
    "revision": "5dbcb49305df3407d16f7f820c68ae5b"
  },
  {
    "url": "webpack/devserver.html",
    "revision": "bec0199767f5f27ecfcb681e4fd16a7a"
  },
  {
    "url": "webpack/devtool.html",
    "revision": "7a181f6d14c56f99d20b521f36dba969"
  },
  {
    "url": "webpack/Dllplugin.html",
    "revision": "e19174d773c0e618123c10ada16ab05d"
  },
  {
    "url": "webpack/entry.html",
    "revision": "f7787cdf91d3feb8d43dcb14f4a036d0"
  },
  {
    "url": "webpack/index.html",
    "revision": "9a750aed9f72f54195a0411fefc44449"
  },
  {
    "url": "webpack/mode.html",
    "revision": "048cbb72032099ebb8bdaf9f9b6a5c43"
  },
  {
    "url": "webpack/module.html",
    "revision": "a47174f51e646660385accf60f1a45fb"
  },
  {
    "url": "webpack/output.html",
    "revision": "9fa3765e71eadd929af5df558f6d7506"
  },
  {
    "url": "webpack/plugins.html",
    "revision": "a5f540eb552a38716e0b147aa186a48f"
  },
  {
    "url": "webpack/resolve.html",
    "revision": "b42b5f0804ff17de3e2576afd611116e"
  },
  {
    "url": "webpack/使用react.html",
    "revision": "3051792e1f9d25caedc36a78fb71ccb1"
  },
  {
    "url": "webpack/使用vue.html",
    "revision": "12827bdae0a746f4a7f7378c3791c97d"
  },
  {
    "url": "webpack/其它配置.html",
    "revision": "c2f244ba3b344989cd9f5e76360a2ebe"
  },
  {
    "url": "webpack/基础篇.html",
    "revision": "9718f04edbb47f7be44b9d11a98fdea9"
  },
  {
    "url": "webpack/处理css.html",
    "revision": "a3bfba5af35437486ba0d8838603cadf"
  },
  {
    "url": "webpack/处理es6.html",
    "revision": "48627e6792b3fd98d54dc4078d430501"
  },
  {
    "url": "webpack/处理目录文件.html",
    "revision": "3fc60e0377ef51d01d604ac53618bac4"
  },
  {
    "url": "webpack/处理静态资源.html",
    "revision": "fee6ba789983e9e29aa9c704d8867171"
  },
  {
    "url": "webpack/懒加载.html",
    "revision": "caecdd20db826e765b114ce7003cb3f6"
  },
  {
    "url": "webpack/提取公共模块.html",
    "revision": "ab34cf4723a16edc862edb46a9d93716"
  },
  {
    "url": "webpack/编写loader.html",
    "revision": "36ea6656c3af8e9125ba713c9368d20f"
  },
  {
    "url": "webpack/编译plugins.html",
    "revision": "4db2a2882bb50ca11d1553145f4b308c"
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
