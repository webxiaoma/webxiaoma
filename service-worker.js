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
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "assets/css/0.styles.9e6f8717.css",
    "revision": "5ebe2d765892d24f48089a325cc3e1ab"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/js/2.c2865fa5.js",
    "revision": "02cc2c930af074111241d61de2322001"
  },
  {
    "url": "assets/js/3.399283d9.js",
    "revision": "a8df92baa87406d46a31539bfaf7d520"
  },
  {
    "url": "assets/js/app.0fa10eec.js",
    "revision": "8c83969a9c2cab98ea9cf1cb42815d77"
  },
  {
    "url": "css/index.html",
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "english/index.html",
    "revision": "eb1ed8f40b915e21fbc5e7be669d99c1"
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
    "revision": "568e1a9de34d51bd05cc2a869076d6a4"
  },
  {
    "url": "git/Git多账户管理.html",
    "revision": "54bcbcab6067a40a0b38559c7fa08fa9"
  },
  {
    "url": "git/Git标签操作.html",
    "revision": "c3c3d2def179a85146c3141eccd9d1ad"
  },
  {
    "url": "git/Git的分支管理.html",
    "revision": "ad887c7bb5b4ce3068204641d114fd09"
  },
  {
    "url": "git/Git的基本操作.html",
    "revision": "f3f9475cd2e7f0be18a7cd6aab4c625d"
  },
  {
    "url": "git/Git的子模块.html",
    "revision": "470884acd19173c279b28c33681d21ea"
  },
  {
    "url": "git/Git的相关配置.html",
    "revision": "8f29678aee8c4d906d89053255eb581c"
  },
  {
    "url": "git/Git的远程操作.html",
    "revision": "1883c670173c75f094dbca88ab7b3aca"
  },
  {
    "url": "git/index.html",
    "revision": "eaf2bce11776a9e2664ba0674f2dc608"
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
    "revision": "2082e881c7cb30a385fd359ad3872b07"
  },
  {
    "url": "javascript/ArrayBuffer处理二进制.html",
    "revision": "a62226b29d7f063493ef82336908bd70"
  },
  {
    "url": "javascript/audio.html",
    "revision": "a1fb016f6962de6f4694415173326731"
  },
  {
    "url": "javascript/babel.html",
    "revision": "ea8d9507452480ab0aaea57e1ddd017a"
  },
  {
    "url": "javascript/base64处理.html",
    "revision": "ea8d9507452480ab0aaea57e1ddd017a"
  },
  {
    "url": "javascript/Blob处理类文件对象.html",
    "revision": "fae19ae690e9e68bb2f7da014846b1ab"
  },
  {
    "url": "javascript/FileReader和FormData对象.html",
    "revision": "6abcf8438bd6527f6965f326b87ec46f"
  },
  {
    "url": "javascript/index.html",
    "revision": "9072c0d96a5ac9d62706865d49544d38"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "javascript/JS-BOM操作.html",
    "revision": "482def01094815381ea6120cf553d555"
  },
  {
    "url": "javascript/JS-DOM操作.html",
    "revision": "5066e4bd3352a2a9ed6c4574643493c0"
  },
  {
    "url": "javascript/JS-事件.html",
    "revision": "7e3bec17cbb23b550eae7d8c9e08f5ff"
  },
  {
    "url": "javascript/js面向对象.html",
    "revision": "f357202e2f156ee8aa5692a5df6a767b"
  },
  {
    "url": "javascript/video.html",
    "revision": "eb26a159513b43e4f207c7294c63c967"
  },
  {
    "url": "knowledge/index.html",
    "revision": "837d11a9dbfc0faefa1e6afe81815bb5"
  },
  {
    "url": "knowledge/常见面试题.html",
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "linux/index.html",
    "revision": "f19ac01ff39eadbee647e55791343a34"
  },
  {
    "url": "linux/linux-init.html",
    "revision": "ff759e7cdbbc4f9f38f4ddff405d1620"
  },
  {
    "url": "network/index.html",
    "revision": "00d27af63ff4a81a9e78d9924d417529"
  },
  {
    "url": "network/交换机和路由区别.html",
    "revision": "a6eba35a19343c61589e959591b62ad0"
  },
  {
    "url": "network/编码处理.html",
    "revision": "a6eba35a19343c61589e959591b62ad0"
  },
  {
    "url": "node/index.html",
    "revision": "cf483c75dcd1476d262ec75ff2fca8d3"
  },
  {
    "url": "node/nodejs搭建简易服务器.html",
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "node/NodeJS的安装.html",
    "revision": "22d4cab6596983504005536e5c01c1d2"
  },
  {
    "url": "node/npm.html",
    "revision": "cf483c75dcd1476d262ec75ff2fca8d3"
  },
  {
    "url": "phone/css常见问题.html",
    "revision": "7a30149b4f466d1c0b6dd994507a3991"
  },
  {
    "url": "phone/index.html",
    "revision": "46a30241b6702cc6a32aa4cd8e45bcc5"
  },
  {
    "url": "phone/移动端的一些概念.html",
    "revision": "46a30241b6702cc6a32aa4cd8e45bcc5"
  },
  {
    "url": "phone/移动端的事件处理.html",
    "revision": "2ca38b329fafaee21db4e04fc83f0340"
  },
  {
    "url": "phone/移动端的适配.html",
    "revision": "46a30241b6702cc6a32aa4cd8e45bcc5"
  },
  {
    "url": "vue/index.html",
    "revision": "2276a51bf5824bc7ed56ce2a81b1b19a"
  },
  {
    "url": "vue/学习须知.html",
    "revision": "9e5f92cf50fa85b2b5ce0d324e3a44e9"
  },
  {
    "url": "webpack/devserver.html",
    "revision": "138236c069d1758ad9bc1b74bd398c97"
  },
  {
    "url": "webpack/devtool.html",
    "revision": "7be5b26497680be4a479c12c5366c7ee"
  },
  {
    "url": "webpack/Dllplugin.html",
    "revision": "419406955c8f78cfa9c76730149f8aab"
  },
  {
    "url": "webpack/entry.html",
    "revision": "2b5f2dee2c70e20d081c8f7f84884a20"
  },
  {
    "url": "webpack/index.html",
    "revision": "2fcb6177cdcdaf5958ea7bdade9034c1"
  },
  {
    "url": "webpack/mode.html",
    "revision": "d2eff270ba1e93b77147dfdd37aa2eff"
  },
  {
    "url": "webpack/module.html",
    "revision": "ea8d9507452480ab0aaea57e1ddd017a"
  },
  {
    "url": "webpack/output.html",
    "revision": "d0a4b9e684e152de05c9439d5f5642b9"
  },
  {
    "url": "webpack/plugins.html",
    "revision": "e3c2bc265761a1b972b61ed6777a0fd9"
  },
  {
    "url": "webpack/resolve.html",
    "revision": "52a6307697d936e3f8d2d5110df39572"
  },
  {
    "url": "webpack/使用react.html",
    "revision": "717ae17286abc7a7290067729d2d6630"
  },
  {
    "url": "webpack/使用vue.html",
    "revision": "7ca6017d7635dfd9f5921800c3dee0f0"
  },
  {
    "url": "webpack/其它配置.html",
    "revision": "c9a8f6addd59c71f58926c0ada1d2dab"
  },
  {
    "url": "webpack/基础篇.html",
    "revision": "2fcb6177cdcdaf5958ea7bdade9034c1"
  },
  {
    "url": "webpack/处理css.html",
    "revision": "0118caced185c6fa2ed4e83354152edc"
  },
  {
    "url": "webpack/处理es6.html",
    "revision": "c0d1e48be19a54b877f2dc47942f1899"
  },
  {
    "url": "webpack/处理目录文件.html",
    "revision": "8c28915c02b1f75ecd127751dd61c5d6"
  },
  {
    "url": "webpack/处理静态资源.html",
    "revision": "ee59cb245d9ec7d5f669810060b5a104"
  },
  {
    "url": "webpack/懒加载.html",
    "revision": "004d6097e401d4dae937332954d97b53"
  },
  {
    "url": "webpack/提取公共模块.html",
    "revision": "d34f78b9dd92c24b4d23d5707abe07f7"
  },
  {
    "url": "webpack/编写loader.html",
    "revision": "e53419b21425b8f9c477b77a4058e7b4"
  },
  {
    "url": "webpack/编译plugins.html",
    "revision": "3f3a7efda64e668dbd54dfab2e159f99"
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
