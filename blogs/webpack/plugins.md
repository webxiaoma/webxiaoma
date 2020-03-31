---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, webpack插件, plugins，plugins配置
  - name: description
    content: 本文主要讲述webpack的插件介绍以及简单的配置。
---

# Plugins 插件

---

[Plugins插件](https://www.webpackjs.com/configuration/plugins/#plugins)是 `webpack` 的支柱功能。`webpack` 自身也是构建于，你在 `webpack` 配置中用到的相同的插件系统之上！

插件目的在于解决 `loader` 无法实现的其他事。



## 插件(plugins) 的使用

我们使用`wepback`  的插件官方提供了两种方法

1. 在 `webpack.config.js` 中配置使用  

在`webpack.config.js `中我们可以在`plugins` 字段数组中镜进行配置，这个方法也是官网比较推荐的方法，如：

```JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [ //  配置插件
     new HtmlWebpackPlugin({template: './src/index.html'})，
  ]
};

```

2. 通过`Node API` 调用

```JavaScript
const webpack = require('webpack'); //访问 webpack 运行时(runtime)
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

let compiler = webpack(configuration);
compiler.apply(new HtmlWebpackPlugin());
```


可以看出插件的使用非常简单，另外webpack上边已经自带了很多插件，可以访问[webpack plugins](https://webpack.docschina.org/plugins/aggressive-splitting-plugin/)