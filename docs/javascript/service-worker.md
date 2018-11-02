---
sidebarDepth: 2
meta:
  - name: keywords
    content: Service Worker  Service-Worker离线缓存 wpa 
  - name: description
    content: 本文章主要总结Service Worker API 在离线缓存中如何使用。
---


# Service Worker API

[GitHub 仓库](https://github.com/webxiaoma/JavaScript-demos/tree/master/web-api/service-worker)
---

##  简介

[Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)是W3C组织提出的主要用来做持久的离线缓存。它脱离了`javascript`的主线程，在另一个线程上进行运行的，和`javascript`的主线程互不干扰，因为js运行在单线程上，所以使用`Service Worker`可以避免js一直等待耗资源、耗时间的复杂运算。这些耗资源、耗时间的复杂运算可以放到其他线程去操作，并且还可以将一些静态资源缓存起来。

**`Service Worker` 有以下功能和特性：**

- 一个独立的`worker`线程，独立于当前网页进程，有自己独立的`worker context`。
- 一旦被`install`，就永远存在，除非被手动 `unregister`
- 用到的时候可以直接唤醒，不用的时候自动睡眠
- 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
- 离线内容开发者可控
- 能向客户端推送消息
- 不能直接操作`DOM`，没有`window`,但是可以使用`self`或`this`
- 必须在 `HTTPS`环境下才能工作（在本地测试时可以使用`localhost`和 `http://127.0.0.0`)
- 异步实现，内部大都是通过 `Promise` 实现

关于浏览器的兼容性可以[查看这里](https://caniuse.com/#feat=serviceworkers)

##  生命周期

`Service Worker` 的生命周期如下：

![生命周期](/img/sw-lifecycle.png)

**1. `installing`安装：** 这个状态发生在` Service Worker `注册之后，表示开始安装，触发 `install` 事件回调指定一些静态资源进行离线缓存。
`install` 事件回调中有两个方法：

- `event.waitUntil()`：传入一个 `Promise` 为参数，等到该 `Promise` 为 `resolve` 状态为止。
- `self.skipWaiting()`：`self` 是当前 `context` 的 `global` 变量，执行该方法表示强制当前处在 `waiting` 状态的 `Service Worker`进入 `activate` 状态。

**2. `installed`安装后：** `Service Worker` 已经完成了安装，并且等待其他的 `Service Worker` 线程被关闭。

**3. `activating` 激活：** 这个状态下没有被其他的 `Service Worker` 控制的客户端，允许当前的 `worker` 完成安装，并且清除了其他的 `worker` 以及关联缓存的旧缓存资源，等待新的 `Service Worker` 线程被激活。`activate` 回调中有两个方法：

- `event.waitUntil()`：传入一个 `Promise` 为参数，等到该 `Promise` 为 `resolve` 状态为止。
- `self.clients.claim()`：在 `activate` 事件回调中执行该方法表示取得页面的控制权, 这样之后打开页面都会使用版本更新的缓存。旧的 `Service Worker` 脚本不再控制着页面，之后会被停止。


**4. `activated` 激活后：** 在这个状态会处理 `activate` 事件回调 (提供了更新缓存策略的机会)。并可以处理功能性的事件 `fetch` (请求)、`sync` (后台同步)、`push` (推送)。

**5. `redundant` 废弃状态：** 这个状态表示一个 `Service Worker` 的生命周期结束。进入废弃 (`redundant`) 状态的原因可能为这几种：

- 安装 (`install`) 失败
- 激活 (`activating`) 失败
- 新版本的 `Service Worker` 替换了它并成为激活状态


## 事件类型

![Service Worker 的事件](/img/sw-events.png)

- **`install`：** `Service Worker` 安装成功后被触发的事件，在事件处理函数中可以添加需要缓存的文件
- **`activate`：**  当 `Service Worker` 安装完成后并进入激活状态，会触发 `activate` 事件。通过监听 `activate` 事件你可以做一些预处理，如对旧版本的更新、对无用缓存的清理等。
- **`message`：**  `Service Worker` 运行于独立 `context` 中，无法直接访问当前页面主线程的 `DOM` 等信息，但是通过 `postMessage API`，可以实现他们之间的消息传递，这样主线程就可以接受 `Service Worker` 的指令操作 `DOM`。

`Service Worker` 有几个重要的功能性的的事件，这些功能性的事件支撑和实现了 `Service Worker` 的特性。

- **`fetch` (请求)：** 当浏览器在当前指定的 `scope` 下发起请求时，会触发 `fetch` 事件，并得到传有 `response` 参数的回调函数，回调中就可以做各种代理缓存的事情了。
- **`push` (推送)：** `push` 事件是为推送准备的。不过首先需要了解一下 `Notification API` 和 `PUSH API`。通过 `PUSH API`，当订阅了推送服务后，可以使用推送方式唤醒 `Service Worker` 以响应来自系统消息传递服务的消息，即使用户已经关闭了页面。
- **`sync `(后台同步)：** `sync` 事件由 `background sync` (后台同步)发出。`background sync` 配合 `Service Worker` 推出的 `API`，用于为 `Service Worker` 提供一个可以实现注册和监听同步处理的方法。但它还不在 `W3C Web API` 标准中。在 `Chrome` 中这也只是一个实验性功能，需要访问 `chrome://flags/#enable-experimental-web-platform-features`，开启该功能，然后重启生效。

## 使用方法


### 注册 Service Worker

了解了`Service Worker`的生命周期和事件类型，我们使用`Service Worker`也是很简单。
第一步我们需要在js主线程中注册`Service Worker`, 这个主线程可以是任意一个`js`文件，比如这里我们是`main.js`。

```js
// 判断浏览器是否支持serviceWorker
if ('serviceWorker' in navigator) {
    // 监听页面onload事件，等页面加载完成后注册serviceWorker
    window.addEventListener('load', function () {
        // 注册serviceWorker
        // 调用register方法时，浏览器会判断Service Worker 线程是否已注册并做出相应的处理。
        navigator.serviceWorker.register('./service-worker.js', {scope: './'})
            .then(function (registration) {
                // 注册成功
                console.log("ServiceWorker 注册成功");
            })
            .catch(function (err) {
                // 注册失败:(
                console.log('ServiceWorker 注册失败: ', err);
            });
    });
}
```
需要注意的是`register`方法中的`scope`属性是设置`Service Worker`的作用域目录的，设置该作用域目录后，`Service Worker` 线程只能捕获到该域下的页面中的`fetch`事件。

判断石佛注册成功我们可以查看这里：

![注册service worker](/img/service-worker1.jpg)

### 安装

我们将`service-worker.js`文件注册为`Service Worker`后，浏览器就中就有了也给`worker context`了，这时，浏览器会安装并激活它，此时会触发`intall`事件，我们可以监听`install`事件，并在该事件下使用[Cache API](/javascript/cache-api.html)缓存我们的静态资源。

```js
//service-worker.js

// 监听 service worker 的 install 事件
 self.addEventListener('install', function (event) {
      // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
      event.waitUntil(
          // 安装成功后 ServiceWorker 状 态会从 installing 变为 installed
          // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
          caches.open('v1.0.0').then(function (cache) {
              // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
              return cache.addAll([
                './index.html',
                './main.css',
                './main.js',
                './img/manong.jpg',
              ]);
          })
      );
  });
```
我们可以通过下面方法，来查看缓存的资源列表：

![安装service worker](/img/service-worker2.jpg)

### 代理请求

我们的`Service Worker`已经建立起来了，并且我们也缓存了我们的静态资源，那么我们如何使用这写缓存的静态资源呢，这里就用到了`fetch`事件，我们可以监听`fetch`事件，当目录域内有交互请求时都会触发`Service Worker`的`fetch`事件，这时我们就可以做一些处理，是继续进行交互请求资源，还是拦截，使用缓存的资源。

```js
//service-worker.js

 // 捕获请求并返回缓存数据
self.addEventListener('fetch', function (event) {
    // respondWith 方法可以劫持我们的请求
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // 处理一些请求，代理的事情
            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if (response) {
                return response;
            }
            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            let request = event.request.clone(); // 把原始请求拷过来
            return fetch(request).then(function (httpRes) {
                // http请求的返回已被抓到，可以处置了。

                // 请求失败了，直接返回失败的结果就好了。。
                if (!httpRes || httpRes.status !== 200) {
                    return httpRes;
                }
                // 请求成功的话，将请求缓存起来。
                var responseClone = httpRes.clone();
                caches.open('v1.0.0').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return httpRes;
            });
        })
    );
});
```
我们可以通过下面，看出请求的资源是否来自`server worker`:

![安装service worker](/img/service-worker3.jpg)

### 更新

当我们的文件更新了怎么办呢，不用担心，首先对于`service-worker.js`的更新，`Service Worker`会逐字节对比，发现不同时会启动更新算法，然后会安装最新的`service-worker.js`并触发`install`事件, 此时旧的`Service Worker`还真正使用，处于激活状态，新的`Service Worker`会进入`waiting`状态直到页面tab被全部关闭，新的`Service Worker`才会生效，另外`Service Worker` 在24小时内会自动更新一次。

另外我们也可以通过关闭页面tab，而是刷新浏览器使我们跟新的资源生效。我们需要做的就是：
- 在`Service Worker`进入安装阶段时，使用`self.skipWaiting()` 跳过`waiting`状态直接进入激活（activate)状态
- 监听`activate`事件，在`activate`事件中执行`self.clients.claim()`来触发更新客户端上的`Service Worker`，并清理旧的`Service Worker`
- 修改`Service Worker`的版本

```js
// 版本号，每当更新时，我们需要修改版本号，来更新，
// 当然你也可以使用随机生成的哈希值。
var version = 'v1.0.0'; 
  // 安装阶段跳过等待，直接进入 active
self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        Promise.all([
            // 更新客户端
            self.clients.claim(),
            // 清理旧版本
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (cacheName !== version) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});
```
另外因为浏览器可能会缓存`service-worker.js`文件，我们需要刷新浏览器，才会看到效果，当然你也可以将`service-worker.js`文件配置`cache-control: no-cache`来禁止浏览器缓存该文件。

## 传递信息

有时候我们需要`Service Worker`进程和`js`的主进程进行通信，或者是其他两种进程之间通信。我们可以这样做

### 主进程向Service Worker通信

主进程向`Service Worker`通信我们可以在js主进程中通过`navigator.serviceWorker.controller.postMessage()`方法进行, 并在`Service Worker`进程中通过监听`message`事件来获取。

```js
// main.js 主进程

if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      console.log('success', reg);
      navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("来自主进程消息");
    });
}
```

```js
// service-worker.js service-worker 进程
this.addEventListener('message', function (event) {
  console.log(event.data); // 接收主进程消息
});
```


:::tip 提示
注册`service worker`后 `registration.active` 对象中也有`postMessage()` 方法。

```js
 navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (registration) {
     registration.active.postMessage()
    }
```
:::


### Service Worker向主进程通信

从`Service Worker`进程向js主进程发送信息，我们可以这样做

```js
// service-worker.js 

self.clients.matchAll().then(client => {
   //service-worker 进程发送消息
  client[0].postMessage('service-worker 进程发来的消息');
})

```

```js
// main.js

navigator.serviceWorker.addEventListener('message', function (e) {
  console.log(e.data); // 接收到的消息
});
。
```


### 使用 MessageChannel 通信

除了上面两种通信方法外，我们还可以是要用`MessageChannel API`来实现通信。它允许我们创建一个新的信道并通过信道的两个 `MessagePort` 属性来传递数据。也就是`MessageChannel`创建了一个信息通道，而这个通道有两个通信路径`port1`和`port2`,每个路径都可以通过`postMessage`来发送数据，通过`onmessage` 回调接收数据。

```js
// main.js
const messageChannel = new MessageChannel();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./service-worker.js', {scope: './'})
            .then(function (registration) {
                 messageChannel.port1.onmessage = e => {
                    console.log(e.data); //接收来自port2的信息
                 }
                 // 将messageChannel 的 第二个通道port2通道端口传给 service worker 进程
                 registration.active.postMessage('来自主线程的消息',[messageChannel.port2])
                console.log("ServiceWorker 注册成功");
               
            })
            .catch(function (err) {
                // 注册失败:(
                console.log('ServiceWorker 注册失败: ', err);
            });
    });
}
```

```js
// service-worker.js 

self.addEventListener('message',event=>{
    console.log(event.data) // 来自主线程的消息
    //event.ports[0] 就是port2 通道端口
    event.ports[0].onmessage = function(e){
        console.log(e)
    }
    event.ports[0].postMessage('来自service worker 的消息')
})
```

## 消息通知

`service worker api`有一个功能`notification`可以实现消息通知，它允许服务器向用户提示一些信息，并根据用户不同的行为进行一些简单的处理。

通知比较常见的使用情景包括电商网站提醒用户一些关注商品的价格变化，或是在线聊天网站提醒用户收到了新消息等等。

使用消息通知也很简单。

```js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./service-worker.js', {scope: './'})
            .then(function (registration) {
                // 发送通知
                 registration.showNotification('webxiaoma',{
                     // 视觉相关
                    "body": "发送消息了",
                    "icon": './img/mxx48.jpg',
                    "badge": './img/mxx.ico',
                    "image": './img/mxx188.jpg',
                    "actions": [
                        {
                            action: 'coffee-action',
                            title: '确定',
                            icon: './img/mxx.ico'
                        },
                        {
                            action: 'doughnut-action',
                            title: '取消',
                            icon: './img/mxx.ico'
                        }
                    ],
                });
                // 注册成功
                console.log("ServiceWorker 注册成功");
               
            })
            .catch(function (err) {
                // 注册失败:(
                console.log('ServiceWorker 注册失败: ', err);
            });
    });
}
```
`registration.showNotification(title ,options)` 方法接收两个参数：

- `title`: 必填 字符串类型 表示通知的标题
- `options`: 选填 对象类型 集合众多配置项，可用项如下

```json
// 视觉相关
"body": "消息主题", // 消息主体
"icon": "<URL String>", //消息图标
"image": "<URL String>", //图片(image)在通知的展现尺寸要大不少，可以给用户展现一些预览图片。
"badge": "<URL String>", //手机上展现通知缩略信息时使用的小图标
"vibrate": [500, 110, 500, 110, 450, 110], // 震动(部分设备支持)
"sound": "path/to/sound.mp3", //声音,目前没有浏览器支持
"dir": "<String of 'auto' | 'ltr' | 'rtl'>", // 文字方向

// 行为相关
"tag": "<String>", //标签 通知归类时会用到
"data": {  // 从主程序向service worker 传递数据
    "message":"主程序消息"
},
"requireInteraction": "<boolean>", //是否一直显示通知
//在使用 tag 的同时，设置 renotify 为 true 可以让浏览器在替换通知时提示声音或者震动
"renotify": "<Boolean>", //重新通知和 tag 一同使用
"silent": "<Boolean>", //静默通知

// 视觉行为均会影响
"actions": [ // 消息按钮
     {
        "action": "coffee-action", // 按钮id
        "title": "确定", // 按钮文本
        "icon": "./img/mxx.ico" // 按钮图片
    },
    {
        "action": "doughnut-action", 
        "title": "取消",
        "icon": "./img/mxx.ico"
    }
],

// 定时发送时间戳
"timestamp": Date.parse('01 Jan 2000 00:00:00') //定时发布
```

知道了消息通知的配置后我们还需要知道下面一些东西：

**1. 监听点击通知**

我们可以在`service-worker.js`文件中监听通知的点击事件，来获取一些点击信息

```js
// 监听通知点击事件
self.addEventListener('notificationclick', event => {

    //关闭通知
    event.notification.close();

    //获取点击的按钮id（确定按钮或取消按钮等）
    let id = event.action

    //可以通过 clients.openWindow() 跳转页面
   
});
```

**2. 监听通知关闭事件**

```js
self.addEventListener('notificationclose', event => {
    let dismissedNotification = event.notification;
    let promiseChain = notificationCloseAnalytics();
    event.waitUntil(promiseChain);
});
```

更多关于消息通知的使用以及介绍可以[访问这里](https://lavas.baidu.com/pwa/engage-retain-users/notification/notification-introduction)


## 开发调试

关于`service-worker`的开发调试，在浏览器端主要在`Application` 中的 `Service Workers`中，

![注册service worker](/img/service-worker1.jpg)

具体的调试方法可以[查看这篇文章](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-debug)


## 实例

上边的练习可以查看源代码[GitHub 仓库]()自己来测试, 也可使用手机扫描下面二维码，打开页面后，你在关闭手机的所有网络，刷新浏览器你会发现，页面依然可以访问（因为页面已经被缓存起来了）（建议用高版本的Chorme 测试）

![二维码](https://webxiaoma.github.io/JavaScript-demos/web-api/service-worker/img/1540978100.png)

---
**参考文章**

- [Service Worker](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction)
- [Service Worker 与页面通信](https://lavas.baidu.com/guide/vue/doc/vue/advanced/service-worker-postMessage#%E6%89%A9%E5%B1%95)
- [MDN Service Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)