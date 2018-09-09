---
sidebarDepth: 1
meta:
  - name: keywords
    content: 移动端开发, viewport, 移动端知识点，H5页面，H5，rem、em，meta标签，css媒体查询，@media
  - name: description
    content: 本文章为移动端开发的前言，以及开发移动端提前需要知道的知识点，比如viewport css单位如：px、rem、em、vh、vw，以及css媒体查询@media和移动端常用的meta标签。
---

# 移动端的一些概念

随着智能手机的发展，移动端的页面越来越来火爆，慢慢的人们将其叫做H5页面。我们在写手机端页面时如果完全按照ｐc端写页面的方法是行不通的。 PC网站的是在电脑端上运行的，对于网页的大小要求不是太高，而且可以有绚丽多彩以及丰富的动态展示效果。但是移动端的网站就不一样了，它的屏幕要比电脑小很多，如果有过多的动态效果，加载速度会变得非常慢，而且需要花费用户很多的流量，并且移动端和ｐc端分辨率是不一样的。下面我们在做移动端页面时，来先了解一下移动端的一些基本概念和知识。


## 移动端css单位

我们在pc端常用的css属性有　`px`、`em`、`rem`，这些也可以在移动端去使用，另外移动端还有 `vw`、`vh`、`vmain`、`vmax`。下面我们来看一下他们的用法和区别

**1. px单位**

`pixel`的缩写，`pixel`即像素，它不是自然界的长度单位。像素`px`是相对于显示器屏幕分辨率而言的。

**2. em单位**

是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

em的特点就是它的值并不是固定的，当被设置的元素的父元素有`font-size` 值时，它会相对父元素有一个对应值，如果父元素没有`font-size` 值时，它会相对于浏览器默认字体，例如

```html
<div style="font-size:16px">
  <span style="font-size:2em">span中的字体是32px</span>  
</div>
<p style="font-size:2em">p中的字体相对于浏览器默认值<p>
```
上面`span`设置的字体是`2em`，它的父元素`div`设置的字体是`16px`，那么`span`字体换算成`px`就是`32px`，而p中的字体换算成`px`是根据浏览器默认字体的，如果浏览器默认字体为`12px`，那么p中的字体就是`24px`


**3. rem单位**

`rem`是CSS3新增的一个相对单位，它和`em` 的区别就是，它是相对于根元素（html元素）的，例如，我们给`html`元素设置`font-size` 为 `16px`，那么页面中一个`div`元素字体设置的是`3rem`，那么换算成`px`就是`48px`


**4.  `vw`、`vh`、`vmain`、`vmax`** [查看兼容性](https://caniuse.com/#search=vw)

- vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）
- vh：视窗高度的百分比
- vmin：当前 vw 和 vh 中较小的一个值
- vmax：当前 vw 和 vh 中较大的一个值

##  一些概念须知

我们这里的三个像素是指：css像素、物理像素（设备像素）、设备独立像素（密度无关像素）。

- **css像素(CSS pixels)** ：是浏览器使用的抽象单位，用来精确度量网页上的内容，独立于设备的用于逻辑上衡量像素的单位，也就是说我们在做网页时用到的CSS像素单位，是抽象的，而不是实际存在的。

- **设备像素(device pixels )**：也被称为物理像素，，是显示屏的最小物理单位，每一像素都包含自己的颜色、亮度。像素是没有大小的、是一个抽象概念、是一个相对单位。 关于像素有一个常见的错误理解：认为像素是一个宽高相等的小方块，并且所有的像素都是“那么大”，但是不知道这个宽高的具体数字。

- **设备独立像素(device independent pixels)**：也被称为密度无关像素，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。所以说，物理像素和设备独立像素之间存在着一定的对应关系。

- **设备像素比(device pixel ratio )**：设备像素比(简称dpr)定义了物理像素和设备独立像素的对应关系，它的值可以按如下的公式的得到

```js
设备像素比(dpr) = 设备像素/设备独立像素 // 在某一方向上，x方向或者y方向
```
在移动端我们可以通过JavaScript中的`window.devicePixelRatio` 获取当前设备的像素比。这个设备像素比很有用处，我们可以根据它来知道一个设备像素对应多少设备独立像素（或css像素），也因为设备像素比的存在实际中1个css像素不一定等于一个设备像素的（也就是1px 不一定等于1个设备像素），例如

1. `iphone6`设备宽高为375×667，可以理解为设备独立像素(或css像素)。
2. `iphone6`的dpr为2，根据上面的计算公式，其设备像素就应该×2，为750×1334。

**这里说明了我们平常在css中写的`1px`,表现在`dpr`为2的`iphone6`中，是占4个设备像素的，假如`iphone6`的`dpr`为3，那么我们平常在0css中写的`1px`就占9个设备像素**


- **分辨率**：泛指量测或显示系统对细节的分辨能力。以PC屏幕，手机屏幕为例，分辨率1920*1080 是指屏幕纵向能显示1920个设备像素，横向能显示1080个设备像素，对于web开发者，我们需要清楚`PPI（ pixel per inch）像素密度`, PPI 全称是（pixel per inch）翻译下就是每英寸内有多少个像素点，这个像素点指的是设备像素点（物理像素）。PPI的值越高，画质越好，也就是越细腻，它的计算公式如下

<MyImg  src="/img/phone-1-1.jpg" alt="ppi"/>

比如苹果6Plus，屏幕尺寸5.5英寸（对角线），分辨率为`1920*1080`，那么按上面计算公式它的像素密度PPI 就约等于`401ppi`


## viewport视口    

在书写移动端页面时我们经常要加上这样下面这句 `meta` 标签。
 
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```
这里我们来大概看一下这段代码中几个属性的含义

| 字段 | 含义  |
|---|---|
| width  | 控制 viewport 的大小，你可以给它指定一个值，如：600，或者甚至还可以给它一个特殊的值，如：device-width，device-width为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。  |
| height  | 与 width 相对应，指定viewport 高度。  |
| initial-scale  | 初始缩放比例，也即是当页面第一次加载页面的时候缩放比例。  |
| maximum-scale  | 允许用户缩放到的最大比例。 |
| minimum-scale  | 允许用户缩放到的最小比例。  |
| user-scalable  | 是否允许用户手动缩放。  |


### 1. viewport 的三个视口

[Peter-Paul Koch](https://www.quirksmode.org/)对viewport的`视口`有三个描述既：布局视口（layout viewport）、 视觉视口（visual viewport）、 理想视口（ideal viewport）。这三个视口我尽量使用大白话去描述，因为专业术语让我也很懵逼。

- 视觉视口（visual viewport）：就是指我们手机屏目
- 布局视口（layout viewport）：是浏览厂商为了解决PC 端网站在移动端显示不佳的一个解决方案，这个视口的分辨率接近于pc端显示器，而且不同浏览器，这个视口的宽度不一样。这个直观的表现就是我们在手机端看pc端页面时会出现左右滚动。
- 理想视口（ideal viewport）：这个视口是我们现在经常使用的，说白了，就是要pc端页面在手机端展示时不会出现左右滚动条。在手机端展示的效果就是我们的pc页面被整体压缩了，宽度等于视觉视口的宽度了，如果我们没有做响应式处理我们页面的文字和图片也会变的很小。

### 2. viewport 的`width`属性

viewport 中的`width`属性时用来定义我们布局视口（layout viewport）的，当我们不指定这个宽度时，他会采用浏览器尝试默认值。而当我们时设置`width=device-width` 时，布局视口（layout viewport）就成为了理想视口（ideal viewport），此外我们还可以通过设置`initial-scale=1`来实现布局视口（layout viewport）成为了理想视口（ideal viewport）


## css 媒体查询

`css`中有一个`@media`媒体查询，它可以让我们根据不同屏幕的大小或一些其他信息来选择性的应用我们的`css`样式。[参考文章](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

### 1. 使用方法

- **link元素中的CSS媒体查询**

```html
<!--在屏幕宽度小于800px引入example.css样式-->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
```

- **样式表中的CSS媒体查询**

```css
// 在屏幕宽度大于800px时类名为facet_sidebar的元素隐藏
@media (min-width: 800px) {
  .facet_sidebar {
    display: none;
  }
}
```


### 2. 逻辑操作

- **and操作符**

```css
// 在屏幕宽度大于400px并且小于800px时类名为facet_sidebar的元素隐藏
@media (min-width: 400px) and (max-width: 800px) {
  .facet_sidebar {
    display: none;
  }
}
```

- **逗号分隔操作符**

```css
// 在屏幕宽度大于400px或者屏幕竖屏时类名为facet_sidebar的元素隐藏
@media (min-width: 400px) , (orientation: landscape) { 
  .facet_sidebar {
    display: none;
  }
}
```


### 3. 媒体类型

css样式的应用可以根据媒体类型来判断：

- `screen` 适用于计算机彩色屏幕。

```css
// 在计算机屏幕下，并且宽度小于400px时类名为facet_sidebar的元素隐藏
@media  screen and (max-width: 500px) { 
  .facet_sidebar {
    display: none;
  }
}
```

- `print` 适用于打印预览模式下查看的内容或者打印机打印的内容（不常用，未起作用）
- `handheld` 移动设备（不常用，测试并未起作用）
- `all` 所有媒体类型

### 4. 媒体特征

css样式的应用可以根据媒体特征来判断：

- **横竖屏查询**

```css
// 竖屏时应用样式
@media all and (orientation: portrait ) { ... }

// 横屏时应用样式
@media all and (orientation: landscape ) { ... }
```

- **设备像素比查询**

```css
// 设备像素比为2时应用样式
@media(-webkit-min-device-pixel-ratio: 2),(min-device-device-pixel-ratio: 2){

}
```

## 屏幕常见宽度

- 手机 - 小于 768px
- 平板 - 屏幕宽度等于或大于 768px 
- 大桌面显示器 - 屏幕宽度等于或大于 992px
- 超大桌面显示器 - 屏幕宽度等于或大于 1200px


## 移动端常用mate标签

```html
<!-- 是否禁止浏览器自动识别手机号或邮箱 -->
<meta name="format-detection" content="telephone=no,email=no">
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

<!-- Ios特有 启用 webapp 模式, 会隐藏工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- Ios特有 在webapp模式下，改变顶部状态条的颜色。 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```



- [参考文章](http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041)
- [参考文章](http://yunkus.com/physical-pixel-device-independent-pixels/)
- [参考文章](https://segmentfault.com/a/1190000004978598)