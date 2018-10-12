(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{301:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/entry-context/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack入口配置"),a("OutboundLink")],1)]),t._v("，告诉了"),a("code",[t._v("webpack")]),t._v("开始构建的起点。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("另外我们还可以设置多个入口文件，这在多页面应用中很有用：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("当项目中有多个页面入口时，并且这些入口文件的数量不确定，以后可能会增加，这时我们尽量将入口文件写出函数形式来返回入口文件：")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"enter-入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enter-入口","aria-hidden":"true"}},[this._v("#")]),this._v(" Enter 入口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("执行上下文"),a("code",[t._v("context")]),t._v("是webpack的基础目录，webpack在查找相对路径时默认使用当前目录，我们可以配置"),a("code",[t._v("context")]),t._v("来修改"),a("code",[t._v("webpack")]),t._v("的查找基目录。需要注意的是设置的目录必须是一个绝对路径，我们可以使用"),a("code",[t._v("nodejs")]),t._v("中的"),a("code",[t._v("path")]),t._v("模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js 中")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'./project'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面设置，当我们打包时，打包后的项目就会被打包到当前目录下边的"),s("code",[this._v("project")]),this._v("目录中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("webpack4.0+")]),this._v("以后不在强制配置入口文件，它有了默认的入口文件，即"),s("code",[this._v("webpack")]),this._v("执行时，如果没有设置入口文件则默认为"),s("code",[this._v("src/index.js")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("不配置入口文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npx webpack \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这种情况下webpack按照默认的配置来查找"),s("code",[this._v("src")]),this._v("目录下的"),s("code",[this._v("index.js")]),this._v("文件，如果没有找到将会报错。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("配置入口文件这的"),s("code",[this._v("entry")]),this._v("字段")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js 中")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在"),a("code",[t._v("webpack.config.js")]),t._v("文件中配置了入口文件路径"),a("code",[t._v("./home")]),t._v("，这时"),a("code",[t._v("webpack")]),t._v("在执行时将会采用"),a("code",[t._v("webpack.config.js")]),t._v("文件中同级目录下的"),a("code",[t._v("home文件")]),t._v("作为入口文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"多入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多入口","aria-hidden":"true"}},[this._v("#")]),this._v(" 多入口")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js 中")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'one'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./one.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'two'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./two.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'three'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./three.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"chunk命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunk命名","aria-hidden":"true"}},[this._v("#")]),this._v(" Chunk命名")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Webpack 会为每个生成的 Chunk 取一个名称，如果传入一个字符串或字符串数组，"),a("code",[t._v("chunk")]),t._v("会被命名为 "),a("code",[t._v("main")]),t._v("。如果传入一个对象，则每个键"),a("code",[t._v("(key)")]),t._v("会是 "),a("code",[t._v("chunk")]),t._v(" 的名称，该值描述了"),a("code",[t._v("chunk")]),t._v("的入口起点。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动态入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态入口","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态入口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("同步形式")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js 中")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token string"}},[t._v("'./home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("异步形式")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js 中")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'one'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./one.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'two'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./two.js'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("入口"),a("code",[t._v("entry")]),t._v("字段可以是字符串、数组、对象、函数。当"),a("code",[t._v("entry")]),t._v("为数组时，webpack会将多个入口的依赖导向(graph)到一个"),a("code",[t._v("chunk")]),t._v("，当我们开发多页面应用程序时，我们可以将"),a("code",[t._v("entry")]),t._v("设置为对象的形式，当我们入口文件是动态的，入口数量不确定时，我们可以将"),a("code",[t._v("entry")]),t._v("设置为函数的形式，在函数中返回我们动态生成的入口文件（可能是字符串、数组、对象）。")]),t._v(" "),a("p",[t._v("另外需要注意的"),a("code",[t._v("entry")]),t._v("字段必须是绝对路径。")])])}],!1,null,null,null);e.options.__file="entry.md";s.default=e.exports}}]);