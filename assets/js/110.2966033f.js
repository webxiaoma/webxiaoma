(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{350:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("对于使用webpack的人来说"),a("a",{attrs:{href:"https://webpack.docschina.org/concepts/loaders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loader"),a("OutboundLink")],1),t._v("已经不陌生了。下面我们来看看编写"),a("code",[t._v("loader")]),t._v("的大致思路")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("平常我们在使用"),a("code",[t._v("loader")]),t._v("时，是使用"),a("code",[t._v("npm")]),t._v("将"),a("code",[t._v("loader")]),t._v("下载到了"),a("code",[t._v("node_module")]),t._v("中，当我们在开发"),a("code",[t._v("loader")]),t._v("时，也不太可能放入"),a("code",[t._v("node_module")]),t._v("中，我们该如何引入我们的"),a("code",[t._v("loader")]),t._v("进行调试呢。"),a("a",{attrs:{href:"https://webpack.docschina.org/contribute/writing-a-loader/#%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("中给了我们三种方法:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("第三中方法是使用"),a("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/npm.html#toc18",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM Link"),a("OutboundLink")],1),t._v("，"),a("code",[t._v("NPM Link")]),t._v("是专门在我们开发和调试本地npm模块时候用的，它可以让我们在本地正常使用我们开发中的模块。使用方法也很简单")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("使用异步形式编写Loader的方式如下：")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/api/loaders/#loader-%E4%B8%8A%E4%B8%8B%E6%96%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多API请查看官网"),a("OutboundLink")],1)]),t._v(" "),t._m(22),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/webpack/loader-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader-utils 包"),a("OutboundLink")],1),t._v("提供了许多有用的工具，但最常用的一种工具是获取传递给 "),a("code",[t._v("loader")]),t._v(" 的选项。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/schema-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("schema-utils 包"),a("OutboundLink")],1),t._v("经常和"),a("code",[t._v("loader-utils")]),t._v("配合使用")])]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),a("p",[t._v("我们想将"),a("code",[t._v(t._s(t.name))]),t._v(" 和 "),a("code",[t._v(t._s(t.age))]),t._v(" 替换成配置中的内容，如")]),t._v(" "),t._m(26),a("p",[t._v("如果没有配置"),a("code",[t._v(t._s(t.name))]),t._v(" 将被替换为"),a("code",[t._v("暂无姓名")]),t._v("， "),a("code",[t._v(t._s(t.age))]),t._v("将被替换为0，我们"),a("code",[t._v("test-loader")]),t._v("就应该这样写：")]),t._v(" "),t._m(27)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"编写-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-loader"}},[this._v("#")]),this._v(" 编写 Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"加载本地loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载本地loader"}},[this._v("#")]),this._v(" 加载本地Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-第一种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一种方法"}},[this._v("#")]),this._v(" 1.第一种方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过path 直接引入")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-第二种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二种方法"}},[this._v("#")]),this._v(" 2.第二种方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("配置"),s("code",[this._v("resolveLoader")]),this._v("字段")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  resolveLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack 会先从node_modules目录下寻找，然后在去loader目录下寻找")]),t._v("\n    modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-第三中方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-第三中方法"}},[this._v("#")]),this._v(" 3.第三中方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("首先要将我们模块的名字添加到"),a("code",[t._v("package.json")]),t._v("配置文件中，")]),t._v(" "),a("li",[t._v("在我们开发的模块中执行"),a("code",[t._v("npm link")]),t._v(", 这样会在npm的全局模块目录内，生成一个符号链接文件。")]),t._v(" "),a("li",[t._v("在我们使用模块的项目中执行"),a("code",[t._v("npm link 开发模块名")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在我们就可以像往常一样使用开发中的模块了，另外如果你不想使用该模块了，可以执行"),s("code",[this._v("npm unlink 模块名")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开发loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发loader"}},[this._v("#")]),this._v(" 开发Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"同步loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步loader"}},[this._v("#")]),this._v(" 同步Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最简单的"),s("code",[this._v("Loader")]),this._v("就像下面这样")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// source 里面存储着要处理的文件内容，")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们这里没有做任何处理直接返回了。")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" source\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("编写同步的loader除了上面的写法我们还可以使用"),s("code",[this._v("this.callback()")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当调用 callback() 时总是返回 undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("this.callback()")]),this._v("的使用方法大致如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传给webpack的错误信息")]),t._v("\n    err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递处理后的内容，可以是字符串也可以是Buffer类型")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于把转换后的内容得出原内容的 Source Map")]),t._v("\n    sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能")]),t._v("\n    abstractSyntaxTree"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AST")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"异步loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步loader"}},[this._v("#")]),this._v(" 异步Loader")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someAsyncOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用api"}},[this._v("#")]),this._v(" 常用API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("code",[t._v("this.context")]),t._v("："),a("code",[t._v("loader")]),t._v(" 上下文，即当前处理文件的所在目录。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.query")]),t._v("：如果这个 "),a("code",[t._v("loader")]),t._v(" 配置了"),a("code",[t._v("options")]),t._v(" 对象的话，"),a("code",[t._v("this.query")]),t._v(" 就指向这个 "),a("code",[t._v("option")]),t._v(" 对象。\n如果 "),a("code",[t._v("loader")]),t._v(" 中没有 "),a("code",[t._v("options")]),t._v("，而是以 "),a("code",[t._v("query")]),t._v(" 字符串作为参数调用时，"),a("code",[t._v("this.query")]),t._v(" 就是一个以 "),a("code",[t._v("?")]),t._v(" 开头的字符串。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.resource")]),t._v("：当前处理文件的完整请求路径，包括 "),a("code",[t._v("querystring")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.resourcePath")]),t._v("：当前处理文件的路径。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.resourceQuery")]),t._v("：当前处理文件的 "),a("code",[t._v("querystring")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.sourceMap")]),t._v("：应该生成一个 source map。因为生成 source map 可能会非常耗时，你应该确认 source map 确实有必要请求。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("this.emitFile")]),t._v("：输出一个文件，使用方法为 "),a("code",[t._v("emitFile(name: string, content: Buffer|string, sourceMap: {...})")]),t._v("。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("另外除了常用"),s("code",[this._v("API")]),this._v("我们还有一些在开发"),s("code",[this._v("loader")]),this._v("时常用的库:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[this._v("#")]),this._v(" 实践")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如我们开发一个"),s("code",[this._v("test-loader")]),this._v("，我们有下面的"),s("code",[this._v("js")]),this._v("文件内容")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>我是{{name}}</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今年{{age}}岁'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小明'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader-utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("option "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'暂无姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\{\\{name\\}\\}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\{\\{age\\}\\}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" option "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);