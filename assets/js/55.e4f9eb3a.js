(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{334:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/%E5%A4%84%E7%90%86%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("我们使用webpack打包页面时并没有输出html文件，我们需要手动去新建一个html并引入js，这样操作对我们来说也很不方便，这里我们可以使用"),a("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("使用该插件")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("这里只是简单的生成"),a("code",[t._v("html")]),t._v("文件，另外我们还可以使用 "),a("a",{attrs:{href:"https://github.com/jaketrent/html-webpack-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-template"),a("OutboundLink")],1),t._v("结合"),a("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),a("OutboundLink")],1),t._v("来定制我们想要生成的html。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("我们来配置一下")]),t._v(" "),t._m(8),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),a("p",[a("code",[t._v("html-webpack-template")]),t._v(" 给我们提共了一个模板位于"),a("code",[t._v("node_modules/html-webpack-template/index.ejs")]),t._v(",如果我们使用它，则要将"),a("code",[t._v("inject")]),t._v("设置为"),a("code",[t._v("false")]),t._v("，因为当设置为"),a("code",[t._v("true")]),t._v("时，会在生成的html中注入两次我们的静态文件引入路径，（个人认为这是个"),a("code",[t._v("Bug")]),t._v("，测试时其版本为 "),a("Badge",[t._v("html-webpack-template 6.2.0")]),t._v("）。")],1),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gwuhaolin/web-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-webpack-plugin 插件"),a("OutboundLink")],1)])]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("我们每次打包后可能会有上次遗留的文件，这样打包出来的项目会很乱，想要每次构建前清理 "),a("code",[t._v("/dist")]),t._v("文件夹我们可以使用"),a("a",{attrs:{href:"https://github.com/johnagan/clean-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("clean-webpack-plugin 插件"),a("OutboundLink")],1)]),t._v(" "),t._m(12),a("p",[t._v("然后我们来配置一下：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("有时候我们想直接复制一个文件目录到打包出来的目录，而且该目录下的资源不希望被"),a("code",[t._v("webpack")]),t._v("编译，我们可以使用"),a("a",{attrs:{href:"https://github.com/webpack-contrib/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin 插件"),a("OutboundLink")],1)]),t._v(" "),t._m(15),a("p",[t._v("简单配置如下：")]),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"处理目录文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理目录文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理目录文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"单页面自动构建html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单页面自动构建html","aria-hidden":"true"}},[this._v("#")]),this._v(" 单页面自动构建HTML")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"html-webpack-plugin插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin插件","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("html-webpack-plugin")]),this._v("插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" html"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nplugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'新html文件标题'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"html-webpack-template插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-template插件","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("html-webpack-template")]),this._v("插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("例如我们想将我们以我们根目录下的"),s("code",[this._v("index.html")]),this._v("为模板,在此基础上生成新的"),s("code",[this._v("html")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 安装")]),t._v("\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" html"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("template\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{attrs:{class:"token comment"}},[t._v("//使用自带模板时，设置为false,使用自己的html模板是设置为true")]),t._v("\n        inject"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 模板路径'node_modules/html-webpack-template/index.ejs'")]),t._v("\n        template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'html-webpack-template'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// template: './index.html', 使用自己的模板时一下配置不起作用")]),t._v("\n        title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'模版html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        links"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 引入<link>")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                href"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://webxiaoma.com/img/manong.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                rel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'icon'")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        scripts"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 引入<script>")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v("'http://example.com/somescript.js'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("当我们使用自己的html模板时，要将"),a("code",[t._v("inject")]),t._v("设置为"),a("code",[t._v("true")]),t._v("，这样才会将我们生成的静态文件引入到"),a("code",[t._v("html")]),t._v("中, 此时一些其他设置将无效，例如"),a("code",[t._v("title")]),t._v("，"),a("code",[t._v("links")]),t._v(","),a("code",[t._v("scripts")]),t._v(" 等等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"类似其他插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类似其他插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 类似其他插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"清除打包遗留文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除打包遗留文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 清除打包遗留文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 安装")]),t._v("\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" clean"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CleanWebpackPlugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'clean-webpack-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nplugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CleanWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"复制文件夹到打包目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制文件夹到打包目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 复制文件夹到打包目录")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 安装")]),t._v("\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" copy"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CopyWebpackPlugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'copy-webpack-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\nplugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 要复制的目录")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./static'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 打包到输出目录下的static目录中")]),t._v("\n      to"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'static'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 忽略png文件，['.*']表示复制任何文件")]),t._v("\n      ignore"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'*.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="处理目录文件.md";s.default=e.exports}}]);