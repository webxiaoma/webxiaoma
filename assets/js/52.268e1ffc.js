(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{297:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/configuration/plugins/#plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugins插件"),n("OutboundLink")],1),t._v("是 "),n("code",[t._v("webpack")]),t._v(" 的支柱功能。"),n("code",[t._v("webpack")]),t._v(" 自身也是构建于，你在 "),n("code",[t._v("webpack")]),t._v(" 配置中用到的相同的插件系统之上！")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),n("p",[t._v("可以看出插件的使用非常简单，另外webpack上边已经自带了很多插件，可以访问"),n("a",{attrs:{href:"https://webpack.docschina.org/plugins/aggressive-splitting-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack plugins"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"plugins-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins 插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("插件目的在于解决 "),s("code",[this._v("loader")]),this._v(" 无法实现的其他事。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插件-plugins-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件-plugins-的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件(plugins) 的使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们使用"),s("code",[this._v("wepback")]),this._v("  的插件官方提供了两种方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("在 "),s("code",[this._v("webpack.config.js")]),this._v(" 中配置使用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("webpack.config.js")]),this._v("中我们可以在"),s("code",[this._v("plugins")]),this._v(" 字段数组中镜进行配置，这个方法也是官网比较推荐的方法，如：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//通过 npm 安装")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'webpack'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//访问内置的插件")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'path'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./path/to/my/entry/file.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'test.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'dist'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//  配置插件")]),t._v("\n     "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("template"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./src/index.html'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("通过"),s("code",[this._v("Node API")]),this._v(" 调用")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'webpack'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//访问 webpack 运行时(runtime)")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//通过 npm 安装")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" compiler "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("webpack")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("apply")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="plugins.md";s.default=e.exports}}]);