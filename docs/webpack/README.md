---
meta:
  - name: keywords
    content: webpack概念, wepback4, wepback使用
  - name: description
    content: 本文基于webpack4 来 讲述webpack 的安装和概念基础。
---

# webpack 基础篇


## webpack 初识

[Webpack](https://www.webpackjs.com/concepts/) 是js中的一个打包模块化工具，在webpack的理念就是一切皆模块。也就说 JavaScript、CSS、LESS、SASS、JSON、图片等等包括一些类似vue 的模块在webpack中都是一个模块。正如官网提供的图片也说明了这一点

![webpack](/img/webpack-1.png)

webpack 在构建项目时通过我们提供的入口文件来查找每一个相关的文件或资源，并将它们压缩，代码合并然后输出我们想要的最终文件，而这这个过程中我们可以做一些响应的配置，来告诉webpack如何编译文件，又如何打包输出文件。接下来让我们来安装webpack，本文将书写时webpack 版本为 `v4.16.5`。 webpack4+ 更新后相对于webpack3 大致做了以下更新(部分)

:::tip

- 不在支持Nodejs 4，使用的是v8.5.0+版本。
- webpack4 优化编译速度（速度提升了98%）
- webpack 的编译和命令操作拆分成两块 `webpack` 和 `webpack-cli`
- 零配置，webpack4不再强制需要 `webpack.config.js` 作为打包的入口配置文件了，它默认的入口为'src/index.js' 和默认出口'dist/main.js'。
- webpack 提供了三种模式 `production` 生产模式、 `development`开发模式 和 `none` 我们不指定时，默认使用  `production` 生产模式

:::

具体更新详情：[webpack4.0 更新日志](https://github.com/webpack/webpack/releases/tag/v4.0.0)



## webpack 安装

我们创建一个项目`test` 在该项目下我们初始化我们的项目

```js
npm init
```
根据提示我们输入相应的内容就可以，输入完成后我们项目的根目录会生成一个 `package.json` 文件

webpack 从 `v4.X` 开始已经将编译和命令操作拆分成了两块，分别为 `webpack` 和 `webpack-cli`，让我们来安装，这里是局部安装

```js
npm install --save-dev webpack webpack-cli
```

安装完成后我们来简单的体验一下`webpack4`，我们先建一个 `src` 文件夹在文件夹中建一个`index.js文件`，此时我们的目录结构是这样的

```
| --- node_modules
| --- src
    |--- index.js
| --- package.json
```

我们在 `index.js` 中写点内容

```js
function test() {
  console.log('hello world');
}
test();
```

因为webpack4 提供了三种模式 `production` 生产模式、 `development`开发模式 和 `none`, 所以我们可以尝试以这几种模式进行打包

1. 以生产模式打包

```js
npx webpack --mode production
或
npx webpack // 这种情况会提示警告
```

我们执行完可以看到，`webpack` 自动寻找 src 下面的 index.js 为入口文件 并将其打包到 dist 文件下的 main.js 中，初次之外我们的代码还进行了压缩，并且webpack还为我们做了一些优化。



1. 以开发模式打包

```js
npx webpack --mode development
```

这种模式和生成模式下比，打包出来的代码没有进行压缩，并且我们的代码被编译成了字符串并通过`evel` 来触发执行。

![代码](/img/daima1.jpg)