---
sidebarDepth: 2
meta:
  - name: keywords
    content: web worker  多线程 js多线程 webWorker
  - name: description
    content: 本文章主要总结在js中使用多线程web worker api来处理密集的数据
---

# 多线程 Web Worker

---

## 简介

[Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)是运行在后台的`JavaScript`, 不会影响页面的性能，说白了就是在另一个线程中执行的js代码，执行过程中不会影响主线程的代码，他的支持都可以[查看这里](https://caniuse.com/#search=web%20worker)，所有我们可以使用`web worker`。使用`web worker`时也需要注意以下几点：

- `Worker`线程运行的脚本文件需要与主线程的文件在统一源下,也就是不能跨越加载js，并且在`Worker`中无法读取本地文件，只能读取网络文件

- 在`Worker`中是无法操作`DOM`的，并且无法访问`window`,并且`this`可以使用`self`替代


## 使用方法

**1. 在主线程中创建一个新的`worker`线程**

```js
let worker = new Worker('worker.js')
```

`Worker()`构造函数接收一个脚本文件，这个文件就是`Worker`线程所要执行的任务

**2. 主线程和`worker`线程的通信**

我们可以在主线程中使用`worker.postMessage()`方法，来给`Worker`线程传递信息，在主线程中可以通过监听`message`事件获取`Worker`线程传过来的数据。

```js
// 在主线程中
let worker = new Worker('worker.js')
worker.postMessage('主线程消息');
worker.onmessage = function(e){
    // 可以获取 Worker线程传递过来的消息
    console.log(d.data) 
}


// 在Worker线程中
self.addEventListener('message', function (e) {
  console.log( e.data); // 获取主线程发送的消息
}, false);

// 向主线程发送消息
self.postMessage("worker 线程消息") 
```



**3. 在`Worker`线程中加载脚本**

使用`importSCRIPTS()`可以在`worker`内部可以加载其它的脚本

```js
// 加载单个脚本
importScripts('test.js')

//加载多个脚本
importScripts('test.js','other.js')
```


**4. 错误处理**

在主线程中我们可以通过监听`Worker`的`error`事件来获取错误信息

```js
let worker = new Worker('worker.js')
worker.addEventListener('error',function(err){
   // 处理错误
})
```

**5. 关闭Worker**

为了节省系统资源，我们有时需要关闭`Worker`

```js
// 主线程
worker.terminate();

// Worker 线程
self.close();
```

## 共享线程 Share Worker

[Share Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker)的使用方法和`web worker`的用法基本相同，它们都是脱离js主线程，浏览器有开了一个线程去执行代码。`Share Worker`和`web worker`不同的是，`Share Worker`在同一域下的不同页面之间是可以共享数据的，而`web worker`不可以。不过目前`Share Worker`的兼容性不是很好，我们现在可以了解一下。他的使用方法如下：

```js
// 在主线程中
let work = new SharedWorker('./worker.js', 'work'),
 port = work.port;
 port.start();
 // 监听message 事件
 port.addEventListener('message', function (e) {
   // 从端口port获取信息
 });

 // 从端口发送数据
 port.postMessage({
   status: 0,
 });
```

在`worker.js`线程中

```js
// 当线程链接是触发connect事件，可以监听该事件
self.addEventListener('connect', function (e) {
    let port  = e.ports[0]
    port.start();
    // 监听message 事件
    port.addEventListener('message', function (e) {
      // 从端口port获取信息
    });

    // 从端口发送数据
    port.postMessage({
      status: 1,
    });
});
```

**参考文章**

- [Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)
- [Web Workers API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)