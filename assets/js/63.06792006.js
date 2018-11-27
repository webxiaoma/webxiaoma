(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{360:function(e,t,a){"use strict";a.r(t);var s=a(1),_=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/concepts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),a("OutboundLink")],1),e._v(" 是js中的一个打包模块化工具，在webpack的理念就是一切皆模块。也就说 JavaScript、CSS、LESS、SASS、JSON、图片等等包括一些类似vue 的模块在webpack中都是一个模块。正如官网提供的图片也说明了这一点")]),e._v(" "),a("MyImg",{attrs:{src:"/img/webpack-1.png",alt:"webpack"}}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("具体更新详情："),a("a",{attrs:{href:"https://github.com/webpack/webpack/releases/tag/v4.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack4.0 更新日志"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("本文使用的主要工具及环境版本:")]),e._v(" "),a("ul",[a("li",[a("Badge",{attrs:{href:"https://github.com/webpack/webpack"}},[e._v("webpack v4.16.5")])],1),e._v(" "),a("li",[a("Badge",{attrs:{href:"https://github.com/webpack/webpack-cli"}},[e._v("webpack-cli v3.1.0")])],1),e._v(" "),a("li",[a("Badge",{attrs:{href:"http://nodejs.cn/"}},[e._v("nodejs v8.11.3")])],1),e._v(" "),a("li",[a("Badge",[e._v("npm v6.3.0")])],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"webpack-基础篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础篇","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 基础篇")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack-初识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-初识","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 初识")])},function(){var e=this.$createElement;return(this._self._c||e)("p",[this._v("webpack 在构建项目时通过我们提供的入口文件来查找每一个相关的文件或资源，并将它们压缩，代码合并然后输出我们想要的最终文件，而这这个过程中我们可以做一些响应的配置，来告诉webpack如何编译文件，又如何打包输出文件。接下来让我们来安装webpack，本文将书写时webpack 版本为 <Badge v4.16.5"),this._v("。 webpack4+ 更新后相对于webpack3 大致做了以下更新(部分)")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("ul",[a("li",[e._v("不在支持Nodejs 4，使用的是v8.5.0+版本。")]),e._v(" "),a("li",[e._v("webpack4 优化编译速度（速度提升了98%）")]),e._v(" "),a("li",[e._v("webpack 的编译和命令操作拆分成两块 "),a("code",[e._v("webpack")]),e._v(" 和 "),a("code",[e._v("webpack-cli")])]),e._v(" "),a("li",[e._v("零配置，webpack4不再强制需要 "),a("code",[e._v("webpack.config.js")]),e._v(" 作为打包的入口配置文件了，它默认的入口为'src/index.js' 和默认出口'dist/main.js'。")]),e._v(" "),a("li",[e._v("webpack 提供了三种模式 "),a("code",[e._v("production")]),e._v(" 生产模式、 "),a("code",[e._v("development")]),e._v("开发模式 和 "),a("code",[e._v("none")]),e._v(" 我们不指定时，默认使用  "),a("code",[e._v("production")]),e._v(" 生产模式")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-安装","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("我们创建一个项目"),t("code",[this._v("test")]),this._v(" 在该项目下我们初始化我们的项目")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[this._v("npm init\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("根据提示我们输入相应的内容就可以，输入完成后我们项目的根目录会生成一个 "),t("code",[this._v("package.json")]),this._v(" 文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("webpack 从 "),t("code",[this._v("v4.X")]),this._v(" 开始已经将编译和命令操作拆分成了两块，分别为 "),t("code",[this._v("webpack")]),this._v(" 和 "),t("code",[this._v("webpack-cli")]),this._v("，让我们来安装，这里是局部安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[this._v("npm install "),t("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("save"),t("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("dev webpack webpack"),t("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("cli\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("webpack使用时可以通过命令行的方法使用，也可以通过配置"),t("code",[this._v("webpack.config.js")]),this._v(" 文件使用，我们着重来介绍配置文件的使用。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-概念","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 概念")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"entry-入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry-入口","aria-hidden":"true"}},[this._v("#")]),this._v(" Entry 入口")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("入口起点"),t("code",[this._v("(entry point)")]),this._v("指示 "),t("code",[this._v("webpack")]),this._v(" 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，"),t("code",[this._v("webpack")]),this._v(" 会找出有哪些模块和库是入口起点（直接和间接）依赖的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"output-出口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-出口","aria-hidden":"true"}},[this._v("#")]),this._v(" Output 出口")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("output")]),e._v(" 属性告诉 "),a("code",[e._v("webpack")]),e._v(" 在哪里输出它所编译后的文件，以及如何命名这些文件，默认值为 "),a("code",[e._v("./dist")]),e._v("。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 "),a("code",[e._v("output")]),e._v(" 字段，来处理输出的规则")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mode-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mode-模式","aria-hidden":"true"}},[this._v("#")]),this._v(" Mode 模式")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("模式是指"),a("code",[e._v("webpack")]),e._v("通过选择 "),a("code",[e._v("development")]),e._v(" 、 "),a("code",[e._v("production")]),e._v(" 和 "),a("code",[e._v("none")]),e._v("之中的一个，来进设置"),a("code",[e._v("webpack")]),e._v("编译的方式。我们可以通过设置配置文件中的 "),a("code",[e._v("mode")]),e._v(" 字段，来配置"),a("code",[e._v("webpack")]),e._v("的编译模式")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"module-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" Module 模块")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("Module")]),e._v("即模块，在 "),a("code",[e._v("Webpack")]),e._v(" 里一切皆模块，图片"),a("code",[e._v("json")]),e._v("文件，"),a("code",[e._v("js")]),e._v("文件，"),a("code",[e._v("css")]),e._v("文件等在"),a("code",[e._v("wepbakc")]),e._v("中都会被当做模块，在"),a("code",[e._v("webpack")]),e._v("执行时会被打包编译。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"chunk-代码块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chunk-代码块","aria-hidden":"true"}},[this._v("#")]),this._v(" Chunk 代码块")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("Chunk")]),e._v("代码块，是指经过"),a("code",[e._v("webpack")]),e._v("编译过后的代码，"),a("code",[e._v("webpack")]),e._v("会将每个由用户定义的模块，编译成"),a("code",[e._v("chunk")]),e._v("的形式。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"loader-编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-编译器","aria-hidden":"true"}},[this._v("#")]),this._v(" Loader 编译器")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("loader")]),e._v(" 让 "),a("code",[e._v("webpack")]),e._v(" 能够去处理那些非 "),a("code",[e._v("JavaScript")]),e._v(" 文件（"),a("code",[e._v("webpack")]),e._v(" 自身只理解 "),a("code",[e._v("JavaScript")]),e._v("）。"),a("code",[e._v("loader")]),e._v(" 可以将所有类型的文件转换为 "),a("code",[e._v("webpack")]),e._v(" 能够处理的有效模块，然后你就可以利用 "),a("code",[e._v("webpack")]),e._v(" 的打包能力，对它们进行处理。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plugin-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugin 插件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("loader")]),this._v(" 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"模块热加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块热加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块热加载")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("模块热替换"),t("code",[this._v("(HMR - Hot Module Replacement)")]),this._v("功能会在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("保留在完全重新加载页面时丢失的应用程序状态。")]),this._v(" "),t("li",[this._v("只更新变更内容，以节省宝贵的开发时间。")]),this._v(" "),t("li",[this._v("调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。")])])}],!1,null,null,null);_.options.__file="基础篇.md";t.default=_.exports}}]);