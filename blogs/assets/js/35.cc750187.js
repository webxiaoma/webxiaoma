(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{297:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/configuration/plugins/#plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugins插件"),n("OutboundLink")],1),t._v("是 "),n("code",[t._v("webpack")]),t._v(" 的支柱功能。"),n("code",[t._v("webpack")]),t._v(" 自身也是构建于，你在 "),n("code",[t._v("webpack")]),t._v(" 配置中用到的相同的插件系统之上！")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"plugins-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins 插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("插件目的在于解决 "),s("code",[this._v("loader")]),this._v(" 无法实现的其他事。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插件的使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的使用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件的使用方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack中插件的使用方法很简单，我们只需要在"),s("code",[this._v("plugins")]),this._v("字段中写入插件即可，"),s("code",[this._v("plugins")]),this._v("字段是一个数组，例如下面")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'webpack'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 导入非 webpack 自带默认插件")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ExtractTextPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'extract-text-webpack-plugin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" DashboardPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'webpack-dashboard/plugin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 在配置中添加插件")]),t._v("\n    plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 构建优化插件")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vendor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vendor-[hash].min.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UglifyJsPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        compress"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        warnings"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        drop_console"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ExtractTextPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'build.min.css'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        allChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IgnorePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/^\\.\\/locale$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/moment$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 编译时(compile time)插件")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'process.env.NODE_ENV'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'\"production\"'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// webpack-dev-server 强化插件")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DashboardPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HotModuleReplacementPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以看到，我们可以是有webpack自带的一些插件，也可以使用外部的一些插件，在使用时我们将插件的构造函数写入"),s("code",[this._v("plugins")]),this._v("数组中即可，对于插件来说，配置插件并不是很难，我们主要是需要知道各个插件的使用方法。")])}],!1,null,null,null);e.options.__file="plugins.md";s.default=e.exports}}]);