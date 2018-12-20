---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: vue-cli3.0  vue-cli vue脚手架 vue
  - name: description
    content: 本文章主要讲述vue-cli3.0 版本的基本使用。
---

# vue项目中的常见问题(2.x)

##  样式问题

1. `vue`中使用`less`

 安装`less`依赖 `npm install less less-loader --save-dev`

 在使用时 在style标签中加入 `lang="less"` 也可以加上`scoped`代表样式只在此作用域中有效。

2. 使用`element`插件时修改其样式，在`vue`中不起作用，这里有几种方法可以尝试
- 如果 `style` 中加了 `scoped` 去掉它。
- 在要改变的样式前加 `/deep/`

```less
 /deep/.el-submenu__title .el-icon-arrow-down{
    margin-top:-5px;
}
```

##  vue-router 问题

1. 去掉`vue`项目路径中的 `#`，但是需要后台配合

主要用到`router` 的 `history`模式。官网说的很详细，以及注意点：[vue-router官网 HTML5 History模式][1]

2. 当我们通过`router` 中的query从一A页面想给B页面传递一个`Object` 对象形式的数据时，第一次`B`页面可以拿到数据，但是刷新`B`页面后，数据会消失。这里有一下解决方法：
 

 - 将A页面的数据通过 `JSON.stringify()` 变成字符串，传递
 - 将A页面数据存储在`sessionStorage` 中，`B`页面同该`sessionStorage` 获取
 - 后台提供单独的接口，在`B`页面请求`A`页面传过来的数据

## 页面预渲染（seo优化问题）

官网也指出，如果你只是为了改善营销页面的`SEO`优化，你可能需要预渲染了。而无需使用web服务器实时动态变异`html`，而是使用预渲染方式，在构建时简单地生成针对特定路由的静态 `HTML` 文件

1.预渲染

 如果你想要预渲染需要使用 `prerender-spa-plugin` 插件来处理你的文件。这里建议你直接看官网的`api`， `2.x`版本的和`3.x`版本的`api`不同。所以建议直接看官网了解最新的`api`。  [prerender-spa-plugin GitHub](https://github.com/chrisvfritz/prerender-spa-plugin)

```js
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  plugins: [
    ...
    new PrerenderSPAPlugin({
      // 生成文件的路径
      staticDir: path.join(__dirname, 'dist'),
      // 对应路由生成的目录
      routes: [ '/', '/about', '/some/deep/nested/route' ],
    })
  ]
}
```
另外为页面做`Meta SEO`优化 可以使用 `vue-meta-info` [GitHub地址](https://github.com/monkeyWangs/vue-meta-info)

[vue-meta-info的相关文章](https://zhuanlan.zhihu.com/p/29148760)


##  数据响应失效

首先在`Vue.js` 中对象的响应时依赖`Object.defineProperty` 方法的，而对于数组是没有这个方法的。

> 这里需要注意，如果数组中是对象，当对象里数据变化时是可以渲染的，如果类似`[0,1,2,3]`这样的数组，数据变化时，是不会渲染的。

所以数组存储的数据在更改时是没有响应变化的。所以`Vue`提供了`$set()` 方法： [官网][2]

```javascript
vue.array.$set(0,'change')
```

## 数据双向绑定问题

1.在使用`vuex`时，我们两个模块可能使用同一个数据，比如两模块中的表单使用的是同一个数据，当其中一个模块中的表单填写好时，我们进入另一个模块表单时，也会显示该数据，如果该数据少还可以，如果有很多字段，我们一个一个清空会和麻烦，我这里解决的办法就是：使用`JSON.stringify` 和 `JSON.parse()`

```js
let evaluateReq = { // 初始数据
    type:'0',
    pageSize:10,
    pageNum:1,
}

const state = {
    evaluateListReq:JSON.parse(JSON.stringify(evaluateReq)), 
}
```

这样做，当我们初始化 `evaluateListReq` 数据时，可以讲 `evaluateReq` 数据 通过 `mutations` 赋值给`evaluateListReq` ，如果我们这里不使用`JSON.stringify` 和 `JSON.parse()` 而直接赋值， `evaluateReq` 中的数据与 `evaluateListReq` 会被vue认为是同一个数据，都绑定上，一个值变化，都会随着变化。


## 使用ElementUI插件问题

1. `<le-input>`表单使用回车触发事件。

```html
<el-input  @keyup.enter.native="onSubmit" ></el-input>
```
这里需要在`@keyup.enter` 后面加上`native`才会触发回车事件。这个东西在一些实际上处理 DOM 原生事件的场合才需要添加额外的标识符。

2. 当浏览器窗口变小时，`el-table`组件宽度不随窗口响应变小。

这里我们需要冲突掉`Element` 中`el-table` 的 `max-width:100%` 样式，该值不能设置成100%,可以改成99%,小于100%即可。

```css
.el-table{
   max-width:99.9%
}
```

## axios 交互问题

1. `vue`中创建`excel` 的下载，解决`excel`下载乱码问题

我们可以在`axios`的请求拦截或响应拦截中去动态创建`a`标签下载`excel`

```js
function excelDown(res){  // excel 下载请求
  //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
  var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
　　var downloadElement = document.createElement('a');
　　var href = window.URL.createObjectURL(blob); //创建下载的链接
　　downloadElement.href = res.request.responseURL +`&token=${sessionStorage.JRYC_TOKEN}`;
　　downloadElement.download = '列表.xls'; //下载后文件名
　　document.body.appendChild(downloadElement);
　　downloadElement.click(); //点击下载
　　document.body.removeChild(downloadElement); //下载完成移除元素
　　window.URL.revokeObjectURL(href); //释放掉blob对象
}

axios.interceptors.response.use(res => {

   if (res.headers['content-type'] == 'application/vnd.ms-excel' || res.headers['content-type'] == 'application/vnd.ms-excel;charset=UTF-8') {
        excelDown(res)
        return {code:0,state:'success'}
    }else{
      return res
    }
})
```

2. `axios` 使用`application/x-www-form-urlencoded`参数问题

使用`axios`传输formdata数据时，经常不成功，可以尝试将传输的数据使用`qs`序列化：

```js
var qs = require('qs');
axios.post('/url', qs.stringify({ 'name': "king","age":23 });
```

## 兼容性问题

**1. 使用`vue`兼容`IE9+`**

`Vue` 官方对于 `ie` 浏览器版本兼容情况的描述是 `ie9+`

使用`babel-polyfill` 插件，它可以将 `es6` 的代码翻译成低版本浏览器可以识别的 `es5` 代码

```js
npm i babel-polyfill -S
```
安装后在`main.js`中引入`import 'babel-polyfill'`, 或在`webpack`打包的入口处引入

[更详细的解决方案](https://www.jb51.net/article/142232.htm)

## 其它注意事项

1. 使用`v-for` 时我们尽量携带`key`值，以方便`vue`的渲染。

```js
v-for="(item, index) in list" class="list" :key="index"
```

2. 在使用 `import ... from ...` 引入同级目录下的组件时，尽量加上 `./` ， 不然有时会报错 

```js
import Header from './Header';
```

3. 使用`$emit` 不起作用，这里我建议你在子组件绑定父组件事件时 使用 `v-on` 全写，尽量不使用`@` 缩写，因为使用`@` 缩写有时会不起作用

```html
 <edit-add-ver   v-on:childMethodShow="showEdit"></edit-add-ver>
```
