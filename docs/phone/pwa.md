---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: pwa  pwa轻应用 pwa初识 webp pwa
  - name: description
    content: 本文章主要记录对pwa的初步认识，已经如何使用pwa来开发轻应用。
---

# PWA 应用初识


---

## 什么是PWA

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) 是 Google 提出的用前沿的 `Web` 技术为网页提供 `App` 般使用体验的一系列方案，说白了就是可以让我们的手机网站具有以下特点：

- **消息推送**。用户只要允许，即使网页关闭后仍然可以在系统通知栏收到推送消息。
- **后台加载**。往常的网页应用只要关闭了网页他的生命就结束了，现在引入了一个 [Service Worker](/javascript/service-worker.html) 的概念，即使网页关闭，`PWA` 仍然可以在后台运行获取数据更新（当然有限制）。
- **离线使用**。`PWA` 打开后会缓存一些内容，之后再次访问即使没有网络也可以浏览之前的页面（如同IE时代的离线浏览）。
- **原生应用界面**。在某些情况下 `PWA` 应用可以隐藏浏览器本身的所有视觉成分，光从UI和UX上看，很容易认为这就是一个原生界面。
- **桌面图标**。`PWA`只要配上一个图标，再放快捷方式在桌面上（比如一定时间内第二次访问PWA会自动询问是否添加快捷方式到桌面），就真的和原生系统无异了，打开的速度也很快（当然功能不能很庞大）。另一方面，和原生应用比，`PWA` 又不需要用户安装，只需要浏览器支持 `PWA` 就可以了。



## 开发PWA的前期准备

开发`PWA`之前你需要先了解一些知识：

- [Cache API](/javascript/cache-api.html)， 该api可以创建一个缓存空间，让我们用来缓存页面数据，

- [Service Worker API](/javascript/service-worker.html)，可编程拦截代理请求配合`Cache API`实现离线缓存


## 配置文件 manifest.json

`manifest.json` 配置文件在`pwa`中很重要，目前这个文件的支持度可以[查看这里](https://caniuse.com/#search=manifest)，我们来看看`manifest.json`配置文件。

```json
"name": "马新想的个人网站",  //应用名称，用于安装横幅、启动画面显示
"short_name": "马新想",  //应用短名称，用于主屏幕显示的名字
"icons": [  //应用图标列表，数组形式
    {
        "src": "./img/mxx48.jpg",  //图标 url
        "type": "image/jpg",   //图标的 mime 类型，非必填项，该字段可让浏览器快速忽略掉不支持的图标类型
        "sizes": "48x48"  //图标尺寸，以px为单位。
    },{
        "src": "./img/mxx72.jpg",
        "type": "image/jpg",
        "sizes": "72x72"
    }
],
"scope":'/',  // 设置作用域
"start_url": "./index.html", //应用启动页地址，必须在作用域范围内
"theme_color": "#8888ff",  //设置主题颜色(状态栏、内容页中状态栏、地址栏的颜色)
"background_color": "#409EFF", //设置启动画面的背景颜色。
"display": "standalone", //设置启动显示类型，有fullscreen，standalone，minimal-ui，browser
"orientation":"landscape-primary", //指定页面显示方向
```
需要知道的是:

**1. 关于`display`属性设置启动显示类型：**

|显示类型	|描述	|降级显示类型|
| --------  | -----   | :----: |
|fullscreen	|应用的显示界面将占满整个屏幕	|standalone
|standalone	|浏览器相关UI（如导航栏、工具栏等）将会被隐藏	|minimal-ui
|minimal-ui	|显示形式与standalone类似，浏览器相关UI会最小化为一个按钮，不同浏览器在实现上略有不同	|browser|
|browser	|浏览器模式，与普通网页在浏览器中打开的显示一致	|(None)|


**2. 关于`theme_color`主题颜色**

当页面的`display`处于`browser`值时，虽然设置了`theme_color`，地址栏也可能不会出现你设置的颜色，这时我们可以在页面中加入下面的`meta`标签

```js
<meta name="theme-color" content="green">
```

**3. 关于`orientation`指定页面显示方向**

由于不同的设备的宽高比不同，因此对于“横屏”、“竖屏”不能简单地通过屏幕旋转角去定义。如对于手机来说，`90°` 和 `270°` 为横屏，而在某些平板电脑中，`0°` 和 `180°` 才是横屏。因此需要通过应用视窗去定义。

- 当视窗宽度大于高度时，当前应用处于“横屏”状态。横屏分为两种角度，两者相位差为 `180°`，分别为 `landscape-primary` 和 `landscape-secondary`。
- 当视窗宽度小于等于高度时，当前应用处于“竖屏”状态。同样，竖屏分为两种，两者相位差为 `180°`，分别为 `portrait-primary` 和 `portrait-secondary`。
- `landscape`: 根据不同平台的规则，该值可等效于 `landscape-primary` 或 `landscape-secondary`，或者根据当前屏幕旋转角不同，去自由切换 `landscape-primary` 或 `landscape-secondary`；
- `portrait`: 根据不同平台的规则，该值可等效于 `portrait-primary` 或 `portrait-secondary`，或者根据当前屏幕旋转角不同，去自由切换 `portrait-primary` 或 `portrait-secondary`；
- `natural`: 根据不同平台的规则，该值可等效于 `portrait-primary` 或 `landscape-primary`，即当前屏幕旋转角为` 0°` 时所对应的显示方向；
- `any`: 根据屏幕旋转角自由切换 `landscape-primary`、`landscape-secondary`、`portrait-primary`、`portrait-secondary`。


## 实例







**参考文章**

- [说说 PWA 和微信小程序](https://www.cnblogs.com/softidea/p/6230565.html)
- [PWA 文档](https://lavas.baidu.com/pwa/README)
- [面向下一代的Progressive Web APP](https://github.com/SangKa/PWA-Book-CN)