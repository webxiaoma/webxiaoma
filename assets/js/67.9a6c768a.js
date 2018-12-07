(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{305:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/Dllplugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("我们在"),n("router-link",{attrs:{to:"/webpack/提取公共模块.html"}},[t._v("提取公共模块")]),t._v("中讲了如何提取项目中的公共代码，提取公共代码一个是方便我们利用浏览器缓存，并且还可以使用懒加载技术在适合的场景下加载模块。这里我们将的动态链接库技术"),n("a",{attrs:{href:"https://webpack.docschina.org/plugins/dll-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dllplugin"),n("OutboundLink")],1),t._v("同样也可以实现上面的优化，同时还可以优化"),n("code",[t._v("webpack")]),t._v("的打包编译速度。")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("下来我们来实现一下，首先我们需要两个webpack配置文件，一个用来先行打包动态库文件，另一个打包编译我们的其他模块。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"使用-dllplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-dllplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Dllplugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"了解-dllplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解-dllplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" 了解 Dllplugin")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("使用"),n("code",[t._v("Dllplugin")]),t._v("动态链接技术，在这里其实就是我们将公用的模块代码先打包编译出来，以后不再重复编译打包，这样很大程度上就提高了"),n("code",[t._v("webpack")]),t._v("的编译速度。比如我们在构建"),n("code",[t._v("Vue")]),t._v("时，将"),n("code",[t._v("vue")]),t._v("先打包编译出来，以后不再进行打包编译，只需要引入已经打包好的"),n("code",[t._v("vue")]),t._v("就可以，当然在实际开发项目中我们可以先打包出很多东西如常用的"),n("code",[t._v("vue vue-router vuex")]),t._v("等等")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置-dllplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-dllplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 Dllplugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("webpack")]),this._v("中实现动态链接库我们需要两个插件,并这两个插件"),s("code",[this._v("webpack")]),this._v("已经内置了：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("code",[this._v("DllPlugin")]),this._v(" 插件：作用是打包出动态链接库")])]),this._v(" "),s("li",[s("p",[s("code",[this._v("DllReferencePlugin")]),this._v(" 插件：作用是将打包出来的动态库文件引入项目中")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先我们建一名为"),s("code",[this._v("webpack.dll.config.js")]),this._v("的配置文件用来配置打包动态库文件")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'path'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'webpack'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'development'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'[name].dll.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'./library'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置动态库的全局变量名称")]),t._v("\n        library"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'_dll_[name]'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),n("span",{attrs:{class:"token comment"}},[t._v("// 该名称需要和output.library 保持一致")]),t._v("\n            name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'_dll_[name]'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("join")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'library'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'[name].json'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("接下来我们建一个名为"),s("code",[this._v("webpack.config.js")]),this._v("的配置文件用来打包编译其他模块")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'development'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        publicPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 使用DllReferencePlugin 插件来告诉webpack未用了哪些动态链接库")]),t._v("\n       "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{attrs:{class:"token comment"}},[t._v("// 将描述vue动态链接库的文件引入")]),t._v("\n          manifest"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./library/vue.json'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("编写好相应配置后，我们就可以打包构建项目了，首先我们需要先将动态链接库打包编译出来，执行"),s("code",[this._v("npx webpack --config webpack.dll.config.js")]),this._v("，之后我们项目中会生成一个"),s("code",[this._v("library")]),this._v("文件夹，该文件夹中有两个文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vue.dll.js\nvue.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们选在index.html 模板中手动引入"),s("code",[this._v("vue.dll.js")]),this._v("，（这里打包时可以使用"),s("code",[this._v("HtmlWebpackPlugin")]),this._v("来生成"),s("code",[this._v("index.html")]),this._v("文件）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("动态链接库打包好后，我们来执行其他模块的打包编译，因为我们对其他模块的配置文文件为默认的"),s("code",[this._v("webpack.config.js")]),this._v("，所以我们可以直接执行"),s("code",[this._v("npx webpack")]),this._v("。这时你会发现，打包出的文件变小了，并且打包的速度也会相应的有所提升，当你项目提取的动态链接库越来越多时，你打包的速度也会更加明显。")])])}],!1,null,null,null);e.options.__file="Dllplugin.md";s.default=e.exports}}]);