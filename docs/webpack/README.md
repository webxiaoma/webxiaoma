---
meta:
  - name: keywords
    content: webpack概念, wepback4, wepback使用
  - name: description
    content: 本文基于webpack4 来 讲述webpack 的安装和核心概念和一些操作基础。
---

# webpack 基础篇


## webpack 初识

[Webpack](https://www.webpackjs.com/concepts/) 是js中的一个打包模块化工具，在webpack的理念就是一切皆模块。也就说 JavaScript、CSS、LESS、SASS、JSON、图片等等包括一些类似vue 的模块在webpack中都是一个模块。正如官网提供的图片也说明了这一点

<MyImg src="/img/webpack-1.png" alt="webpack"/>

webpack 在构建项目时通过我们提供的入口文件来查找每一个相关的文件或资源，并将它们压缩，代码合并然后输出我们想要的最终文件，而这这个过程中我们可以做一些响应的配置，来告诉webpack如何编译文件，又如何打包输出文件。接下来让我们来安装webpack，本文将书写时webpack 版本为 <Badge v4.16.5</Badge>。 webpack4+ 更新后相对于webpack3 大致做了以下更新(部分)

:::tip
- 不在支持Nodejs 4，使用的是v8.5.0+版本。
- webpack4 优化编译速度（速度提升了98%）
- webpack 的编译和命令操作拆分成两块 `webpack` 和 `webpack-cli`
- 零配置，webpack4不再强制需要 `webpack.config.js` 作为打包的入口配置文件了，它默认的入口为'src/index.js' 和默认出口'dist/main.js'。
- webpack 提供了三种模式 `production` 生产模式、 `development`开发模式 和 `none` 我们不指定时，默认使用  `production` 生产模式
:::

具体更新详情：[webpack4.0 更新日志](https://github.com/webpack/webpack/releases/tag/v4.0.0)

本文使用的主要工具及环境版本:

- <Badge href="https://github.com/webpack/webpack">webpack v4.16.5</Badge>
- <Badge  href="https://github.com/webpack/webpack-cli">webpack-cli v3.1.0</Badge>
- <Badge href="http://nodejs.cn/">nodejs v8.11.3</Badge>
- <Badge>npm v6.3.0</Badge>

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
webpack使用时可以通过命令行的方法使用，也可以通过配置`webpack.config.js` 文件使用，我们着重来介绍配置文件的使用。

## webpack 概念

### Entry 入口

入口起点`(entry point)`指示 `webpack` 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，`webpack` 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

### Output 出口

`output` 属性告诉 `webpack` 在哪里输出它所编译后的文件，以及如何命名这些文件，默认值为 `./dist`。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 `output` 字段，来处理输出的规则

### Mode 模式

模式是指`webpack`通过选择 `development` 、 `production` 和 `none`之中的一个，来进设置`webpack`编译的方式。我们可以通过设置配置文件中的 `mode` 字段，来配置`webpack`的编译模式

### Module 模块

`Module`即模块，在 `Webpack` 里一切皆模块，图片`json`文件，`js`文件，`css`文件等在`wepbakc`中都会被当做模块，在`webpack`执行时会被打包编译。

### Chunk 代码块

`Chunk`代码块，是指经过`webpack`编译过后的代码，`webpack`会将每个由用户定义的模块，编译成`chunk`的形式。


### Loader 编译器

`loader` 让 `webpack` 能够去处理那些非 `JavaScript` 文件（`webpack` 自身只理解 `JavaScript`）。`loader` 可以将所有类型的文件转换为 `webpack` 能够处理的有效模块，然后你就可以利用 `webpack` 的打包能力，对它们进行处理。

### Plugin 插件

`loader` 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。


### 模块热加载

模块热替换`(HMR - Hot Module Replacement)`功能会在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

- 保留在完全重新加载页面时丢失的应用程序状态。
- 只更新变更内容，以节省宝贵的开发时间。
- 调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。


