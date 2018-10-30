---
sidebarDepth: 1
meta:
  - name: keywords
    content: H5视频处理 video h5 video js视频
  - name: description
    content: 本文章主要总结在H5中处理视频video。
---


# Service Worker

---

##  简介

[Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)是W3C组织提出的主要用来做持久的离线缓存。它脱离了`javascript`的主线程，在另一个线程上进行运行的，和`javascript`的主线程互不干扰，因为js运行在单线程上，所以使用`Service Worker`可以避免js一直等待耗资源、耗时间的复杂运算。这些耗资源、耗时间的复杂运算可以放到其他线程去操作，并且还可以将一些静态资源缓存起来。

**`Service Worker` 有以下功能和特性：**

- 一个独立的`worker`线程，独立于当前网页进程，有自己独立的`worker context`。
- 一旦被`install`，就永远存在，除非被手动 `unregister`
- 用到的时候可以直接唤醒，不用的时候自动睡眠
- 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
- 离线内容开发者可控
- 能向客户端推送消息
- 不能直接操作`DOM`
- 必须在 `HTTPS`环境下才能工作
- 异步实现，内部大都是通过 `Promise` 实现

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



## 开发调试


## 实例



**参考文章**

- [Service Worker](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction)