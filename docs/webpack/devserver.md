---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack4, DevServer, webpack-dev-server,webpack-serve，热加载，热模块，浏览器自动刷新
  - name: description
    content: 本文主要讲述webpack中使用 webpack-dev-server或 在webpack4+ 中使用webpack-serve来实现浏览器的自动刷新或热加载功能。
---

# 使用 DevServer

- [webpack-dev-server GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/webpack-dev-server)
- [webpack-serve GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/webpack-serve)

---

`Webpack v4.0+` 中提供了几个大模块，一个是核心模块 `webpack`, 命令模块 `webpack-cli` 以及 服务器模块 [webpack-dev-server](https://github.com/webpack/webpack-dev-server)(**目前`Webpack v4.0+` 中也可以使用[webpack-serve](https://github.com/webpack-contrib/webpack-serve)**，该模块推荐使用)。实现浏览器的自动刷新和模块热替换我们可以使用服务器模块 `webpack-dev-server`或`webpack-serve`。

:::warning 注意
- <Badge>webpack3.0+</Badge> 中使用的是 webpack-dev-server 来实现自动刷新和热模块替换的
- <Badge>webpack4.0+</Badge> 可以使用 webpack-dev-server 来实现自动刷新和热模块替换，同时也可以使用官方提供的另一个模块webpack-serve，需要注意的是webpack-serve 模块以后很可能会替代 webpack-dev-server模块。所以建议学习webpack-serve，同时我们也讲一下webpack-dev-server模块的使用。

:::


## 实现自动刷新

以前在写页面的时候，我们每次修改完代码需要刷新浏览器才可以看到页面修改后的效果，为提高效率现在我们可以使用`DevServer` 实现我们的效果。

### 启动监听模式

在webpack中可以使用[watch观察模式](https://webpack.docschina.org/configuration/watch/#watch)来监听文件的变动，而不需要每次都编译。启动监听这模式有两种方式：

1. 执行`webpack --watch` 命令
2. 在配置文件中进行配置

```js
module.exports = {
 watch: true, // 开启观察者模式
  watchOptions:{ //对watch的配置
      // 不监听的文件
      ignored:['node_modules'],
      //当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 
      //将这段时间内进行的任何其他更改都聚合到一次重新构建里
      aggregateTimout:300,
      // 每秒检查一次变动
      poll:1000
  },
}
```
使用观察者模式时每次我们修改代码后，`webpack`都会自动检测出并重新构建我们的项目。其实`webpack`在这里做的就是将我们文件最后一次修改时间记录了下来，并定时的去检测我们文件的修改时间，如果发现我们新的修改时间和我们的不一致就会自动去构建。另外`webpack`在执行的时候，我们是可以设置它长时间去检测一次（设置`poll`），并且检测出变化后，延迟多长时间去构建项目（设置`aggregateTimout`）。我们在开发项目时，建议将不不是经常改动的文件添加的`ignored`中，对其不进行监听来提高我们的监听性能。

### 自动刷新

使用观察者模式时每次我们修改代码后，webpack都会自动检测出并重新构建我们的项目，但是这时侯我们依然要手动动刷新页面，想要自动刷新页面我们还要使用[webpack-dev-server 模块](https://github.com/webpack/webpack-dev-server)

```js
// 安装
npm i -D webapck-dev-server
```

然后我们可以启动`webapck-dev-server`

```js
npx webpack-dev-server
```

当然我们也可以在`package.json`中添加启动命令

```js
// 在`package.json`中添加启动命令
"scripts": {
  "start": "npx webpack-dev-server"
},

// 然后执行
npm start
```

当使用`webapck-dev-server`启动时，它自动启动`webpack`，并且`webpack`的监听模式会被开启，当webpack监听到文件变化后，会通知`webapck-dev-server`模块，`webapck-dev-server`模块会去刷新浏览器。`webapck-dev-server`启动时默认会在`8080`端口上[http://localhost:8080](http://localhost:8080)，此外我们还可以在`webpack.config.js`中根据`devtool`字段来来配置`webapck-dev-server`

```js
module.exports = {
  devServer:{
    // 设置服务器从那个目录提供内容，默认当前
    contentBase: path.join(__dirname, 'dist'),
    //告知服务器，观察 devServer.contentBase 下的文件。
    //文件修改后，会触发一次完整的页面重载
    watchContentBase: true,
    //一切服务都启用 gzip 压缩
    compress: true,
    // 刷新模式，false时启用iiframe模式
    inline:false,
    //默认是 localhost。如果你希望服务器外部可访问设置'0.0.0.0'
    host: 'localhost',
    port: 9000 // 启动端口默认8080
    hot: false, // 是否启动热模块替换,(启用下也会启用自动刷新)
    hotOnly: true, // 仅启动自动刷新
    proxy:{}, // 设置请求代理
    open: true, // 启动后是否自动打开默认浏览器
    //指定打开浏览器时的导航页面。
    openPage: '/different/page',
    //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
    overlay:true,
    //允许浏览器使用本地 IP 打开。
    useLocalIp:true,
    watchOptions:{} // 和watch模式下的相同
  }
}
```
更多配置请查看[官网 开发中 server(devServer)](https://webpack.docschina.org/configuration/dev-server/#devserver)


### 自动刷新原理

浏览器的自动刷新有三种方法：

1. 借助浏览器扩展去通过浏览器提供的接口刷新。
2. 往要开发的网页中注入代理客户端代码，通过代理客户端去刷新整个页面。
3. 把要开发的网页装进一个 `iframe` 中，通过刷新 `iframe` 去看到最新效果。

在`webpack`中`DevServer`支持后两种方法，第二种是DevServer默认采用的。如果想要了解具体原理查看[深入浅出webpack —— 使用自动刷新](http://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-5%E4%BD%BF%E7%94%A8%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0.html)


## 实现模块热替换

上边我们使用`webapck-dev-server`模块自动刷新浏览器来实现我们实时预览的效果，处理自动刷新我们还可以使用模块热替换的方法来实现我们实时预览的效果。

模块热替换的方法的实现非常简单，它也集成在了`webpack-dev-server`中，我们可以通过下面两种方法来实现：

1. 执行命令`npx webpack-dev-server --hot`
2. `webpack.config.js`中配置`DevServer` 启用，同时还要使用`webpack.HotModuleReplacementPlugin` 插件（在方法一种执行时，以及自动注入并使用了该插件）。
```js
const webpack = require('webpack')
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin

module.exports = {
  devServer:{
    // 是否启动热模块替换, 默认关闭(启用下也会启用自动刷新)
    hot: true, 
  },
  plugins:[
       // 模块热替换
       new HotModuleReplacementPlugin()
  ]
}
```

模块热替换并不会刷新浏览器，他只时在检测我们代码有变化时，将变化的模块进行编译，然后在变化后的新模块替换浏览器中对应的旧模块。

:::tip 提示
需要知道的是当设置`hot`为`true`时，也会启动浏览器自动刷新，所以有时候你会看到当模块修改后，我使用的是模块热替换但是浏览器会是会刷新，具体原因可以看看这篇文章[深入浅出webpack —— 开启模块热替换](http://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-6%E5%BC%80%E5%90%AF%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2.html), 当我们设置 `hotOnly`为`true`时，这时就只会开启模块热替换功能
:::


## webpack-serve

上面我们说的是`webpack3.0+`中经常使用的服务器模块，`webpack4.0+`后，官方又出来一个[webpack-serve](https://github.com/webpack-contrib/webpack-serve)，而且将来会有要取代`webpack-dev-server 模块`的趋势。[webpack-dev-server issues](https://github.com/webpack/webpack-dev-server/issues/1493)，使用该模块需要知道的是：

- 该模块至少需要<Badge>Node.js v6.9.0</Badge>和<Badge>Webpack v4.0.0+</Badge>
- 由于此模块利用本机 `WebSockets via webpack-hot-client`，因此使用该模块的浏览器需要支持`WebSocket`。这通常意味着特定浏览器的最后两个主要版本,来查看[支持webSocket的浏览器](https://caniuse.com/#feat=websockets)

使用`webpack-serve`也很简单，首先先让我们安装它
```js
npm i -D webpack-serve
```

配置webpack-serve 也很简单，我们有四种配置方法

- 在`serve`属性中的`package.json`文件中
- 在一个`.serverc`或`.serverc.json`文件中，使用`JSON`或`YML`。
- 在`serve.config.js`导出`CommonJS`模块的文件中（就像`webpack`一样）
- 在`webpack.config.js`中的`serve`字段中配置，如下：

```js
module.exports = {
  serve:{
       port:'9090',
       host:'', // 启动的主机地址
       open:true, //是否自动打开浏览器
       clipboard:true, //是否将服务器URI复制到剪贴板
  },
}
```
更多的配置我们可以查看[webpack-serve](https://github.com/webpack-contrib/webpack-serve)，`webpack-serve`启动后默认就是使用的热模块功能，也不需要像使用`webpack-dev-server` 一样在使用`HotModuleReplacementPlugin`插件。

:::tip
另外`webpack-serve`的配置目前并没有像`webpack-dev-server`有很全的配置，将来什么样我们可以时刻关注。
:::


### 本文参考文献

[深入浅出webpack —— 吴浩麟](http://webpack.wuhaolin.cn)