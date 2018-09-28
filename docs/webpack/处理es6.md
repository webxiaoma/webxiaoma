---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, webpack处理ES6, es6,es6转码
  - name: description
    content: 本文主要讲述webpack中处理es6，将es6转码成es5。
---

# 处理ES6

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/es6%E5%A4%84%E7%90%86)

---

`webpack`处理 `ES6`需要用到[babel转码器](/javascript/babel.html)，这里我们主要讲webpack如何处理`ES6`。


## 安装必须模块

webpack中如果接入babel需要安装一些必须模块，来做编译准备工作。

```js
npm i -D babel-core babel-loader@7.0.0 
```
::: warning 注意 截止2018-9-13日

`webpack4`中这里安装的`babel-loader`版本是`7.0.0`的，这里可能是`babel-core`依赖以<Badge>babel-loader 7.x</Badge>的版本，如果使用`8.x`版本会编译不成功。[webpack-cli issues](https://github.com/webpack/webpack-cli/issues/296)。
:::

## 安装ES6预设

安装好必须依赖后，我们还需要安装编译ES6的预设（`preset`），它的作用就是编译`es6`中的一些新语法，但是不能够编译`es6`中的一些`api`,编译`api`需要一些插件，下来我们会安装。关于`babel`的`preset`可以[查看这里](/javascript/babel.html#_1-babel预设)

现在我们来安装`babel-preset-env`

```js
npm install -D babel-preset-env
```

然后我们在项目根目录`.babelrc`配置文件中配置一下

```json
{
    "presets": [
        "env",
    ]
}
```

我们在来配置一下`webpack.config.js`
```js
const path = require('path');
module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               use: ['babel-loader'],
               exclude: /(node_modules)/
            }
        ]
    },
   
};
```


这时我们就可以编译一些es6的新语法了。

## 安装ES6插件

我们上面提到了，es6的预设只能编译一些新的语法，不能编译`es6`的一些新的`API`，比如`Iterator`、`Generator`、`Set`、`Maps`、`Proxy`、`Reflect`、`Symbol`、`Promise`等全局对象,以及一些定义在全局对象上的方法（比如`Object.assign`）。

这时候我们要用的`ES6`的一些插件例如`transform-runtime`和`babel-polyfill`，这里我们使用`transform-runtime`插件。`transform-runtime`插件对应的全名叫`babel-plugin-transform-runtime`，另外还需要安装`babel-runtime`插件来配合`babel-plugin-transform-runtime`的使用

```js
npm i -D babel-plugin-transform-runtime babel-runtime
```
安装好后我们在`.babelrc.`中添加插件

```js
{
    "presets": [
        "env",
    ],
    "plugins":[
        "transform-runtime"
    ]
}
```

到现在我们就可以来尽情的写`ES6`代码了。
