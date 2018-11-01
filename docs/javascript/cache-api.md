---
sidebarDepth: 2
meta:
  - name: keywords
    content: Service Worker  Service-Worker离线缓存 wpa 
  - name: description
    content: 本文章主要总结Service Worker API 在离线缓存中如何使用。
---

# 缓存对象Cache API

---

`cache api` 可以用来缓存对象，它的使用方法也很简单，网络上也有大量的博客在介绍它，下面我们来详细了解一下它的使用方法。

## 创建缓存对象

使用 `caches.open()` 方法我们可以创建缓存对象

```js
if('caches' in window){ // 判读浏览器是否支持caches
  caches.open('cache-data').then(function(cache) {
     console.log('创建成功')
  });
}else{
  alert('您的浏览器不支持caches')
}
```
创建成功后，浏览器就为我们开辟出了一个名为`cache-data`的内存空间，我们可以在这个空间中来缓存我们的数据，另外`caches.open()`方法返回的是一个`promise`，`cache`对象中存在大量的操作方法和属性。



## 添加缓存数据

我们创建了名为`cache-data`的内存空间后，接下来就需要向空间中添加我们的缓存数据了。添加缓存数据我们有以下几种方法：

- `cache.addAll()` 以数组形式批量添加缓存地址
- `cache.add()` 添加单个缓存地址并且可以配置请求信息
- `cache.put()` 添加单个缓存地址和响应数据(必须有两个参数，第一个为请求地址，第二个为请求数据)

使用 `cache.addAll()`方法，该方法接收一个数组，数组中的地址会被请求，响应的数据将会被缓存到我们创建的`cache`对象中

```js
caches.open('cache-data').then(function(cache) {
     cache.addAll(['./', './img/logo.jpg']).then(function() { 
        console.log("添加数据成功")
    });
});
```

使用 `cache.add()`方法，该方法有两个参数，第一个是请求的资源地址也可以是`Request`对象，响应的数据也会自动缓存到我们创建的`cache`对象中，第二个参数是一个配置请求参数的对象并且可以省略。

```js
caches.open('cache-data').then(function(cache) {
 // 第一个参数是资源地址
 cache.add('./test.html');
// 第一个参数是Request对象
 cache.add(new Request('./test.html'));
 // 第一个参数是资源地址，第二个参数是请求配置
 cache.add('./test.html', { /* 请求参数 */ }));
});
```

使用 `cache.put()`方法，该方法和`cache.add()`方法很相似，不同是该方法有两个必须参数，第一个是缓存数据的键名，第二个是缓存的响应数据，该数据是`Response`类型

```js
fetch('./test2.html').then(function(response) {
 caches.open('test-cache').then(function(cache) {
     cache.put('dataName', response);
 });
});
```

`cache`缓存我们也可以从浏览器中去查看

![cache](/img/cache.jpg)

## 访问缓存数据信息

缓存对象中的数据其实就是以键值的形式存在，我们访问缓存的一些信息可以使用以下方法

- `cache.match()` 获取缓存的`Request`请求的响应内容
- `cache.matchAll()` 获取所有缓存的`Request`请求的响应内容

```js
 caches.open('cache-data').then(function(cache) {
    cache.match('./img/logo.jpg').then(function(matchedResponse) {
        console.log(matchedResponse); //返回一个响应对象
    });

    cache.matchAll().then(function(matchedResponseAry) {
        console.log(matchedResponseAry); // 返回一个数组
    });
});
```

另外我们可以通过`keys()` 来获取缓存`Request`对象和缓存里的缓存名称

```js
caches.open('cache-data').then(function(cache) {
   cache.keys().then(function(cachedRequests) { 
      console.log(cachedRequests); // Request对象   数组形式
   });
});

// 这里需要注意keys()是在caches对象 上触发的，和上边的不同
caches.keys().then(function(cacheKeys) { 
  console.log(cacheKeys); // 获取缓存数据的键名
});
```

## 删除缓存数据

删除缓存中的数据很简单，使用`delete()`方法 就可以

```js
caches.open('cache-data').then(function(cache) {
  cache.delete('./test2.html'); // 删除./test2.html 的缓存数据
});
```

## 删除缓存对象

删除缓存对象也是很简单的，可以使用`caches.delete()`方法

```js
// 删除cache-data 缓存空间
caches.delete('cache-data').then(function() { 
  console.log('删除成功'); 
});
```