---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack, Dllplugin, 动态链接库，  webpack dell
  - name: description
    content: 本文主要讲述使用webpack4中的Dllplugin插件实现动态链接库，来提高webpack的打包编译速度。
---

# 使用 Dllplugin

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/Dllplugin)

---

我们在[提取公共模块](/webpack/提取公共模块.html)中讲了如何提取项目中的公共代码，提取公共代码一个是方便我们利用浏览器缓存，并且还可以使用懒加载技术在适合的场景下加载模块。这里我们将的动态链接库技术[Dllplugin](https://webpack.docschina.org/plugins/dll-plugin/)同样也可以实现上面的优化，同时还可以优化`webpack`的打包编译速度。



## 了解 Dllplugin

使用`Dllplugin`动态链接技术，在这里其实就是我们将公用的模块代码先打包编译出来，以后不再重复编译打包，这样很大程度上就提高了`webpack`的编译速度。比如我们在构建`Vue`时，将`vue`先打包编译出来，以后不再进行打包编译，只需要引入已经打包好的`vue`就可以，当然在实际开发项目中我们可以先打包出很多东西如常用的`vue vue-router vuex`等等


## 配置 Dllplugin

在`webpack`中实现动态链接库我们需要两个插件,并这两个插件`webpack`已经内置了：

- `DllPlugin` 插件：作用是打包出动态链接库

- `DllReferencePlugin` 插件：作用是将打包出来的动态库文件引入项目中

下来我们来实现一下，首先我们需要两个webpack配置文件，一个用来先行打包动态库文件，另一个打包编译我们的其他模块。

首先我们建一名为`webpack.dll.config.js`的配置文件用来配置打包动态库文件

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry:{
        vue:['vue']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'./library'),
        // 设置动态库的全局变量名称
        library:'_dll_[name]'
    },
    plugins:[
        new webpack.DllPlugin({
           // 该名称需要和output.library 保持一致
            name:'_dll_[name]',
            path: path.join(__dirname,'library','[name].json')
        })
    ]
}
```

接下来我们建一个名为`webpack.config.js`的配置文件用来打包编译其他模块

```js
module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/'
    },
    plugins:[
      // 使用DllReferencePlugin 插件来告诉webpack未用了哪些动态链接库
       new webpack.DllReferencePlugin({
         // 将描述vue动态链接库的文件引入
          manifest: require('./library/vue.json')
       })
    ]
   
};
```

1. 编写好相应配置后，我们就可以打包构建项目了，首先我们需要先将动态链接库打包编译出来，执行`npx webpack --config webpack.dll.config.js`，之后我们项目中会生成一个`library`文件夹，该文件夹中有两个文件

```
vue.dll.js
vue.json
```
我们选在index.html 模板中手动引入`vue.dll.js`，（这里打包时可以使用`HtmlWebpackPlugin`来生成`index.html`文件）。

2. 动态链接库打包好后，我们来执行其他模块的打包编译，因为我们对其他模块的配置文文件为默认的`webpack.config.js`，所以我们可以直接执行`npx webpack`。这时你会发现，打包出的文件变小了，并且打包的速度也会相应的有所提升，当你项目提取的动态链接库越来越多时，你打包的速度也会更加明显。
