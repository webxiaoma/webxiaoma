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


## 插件的使用方法

webpack中插件的使用方法很简单，我们只需要在`plugins`字段中写入插件即可，`plugins`字段是一个数组，例如下面

```js
var webpack = require('webpack');
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    // 在配置中添加插件
    plugins: [
    // 构建优化插件
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor-[hash].min.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
        warnings: false,
        drop_console: false,
        }
    }),
    new ExtractTextPlugin({
        filename: 'build.min.css',
        allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // 编译时(compile time)插件
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
    }),
    // webpack-dev-server 强化插件
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ]
}
```

我们可以看到，我们可以是有webpack自带的一些插件，也可以使用外部的一些插件，在使用时我们将插件的构造函数写入`plugins`数组中即可，对于插件来说，配置插件并不是很难，我们主要是需要知道各个插件的使用方法。