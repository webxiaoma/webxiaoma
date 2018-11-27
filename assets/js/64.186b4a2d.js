(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{359:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/css%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("目录结构：")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[a("Badge",[t._v("webpack v3.0+")]),t._v(" 使用 ExtractTextPlugin  \n")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack-contrib/extract-text-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github地址"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/extract-text-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Npm地址"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("Badge",[t._v("webpack v4.0+")]),t._v(" 使用 MiniCssExtractPlugin \n")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github地址"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Npm地址"),a("OutboundLink")],1)])]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),a("p",[t._v("在css文件夹中新建一个test.less文件，并写入：")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("在使用PostCss时我们需要先把css文件交给"),a("code",[t._v("PostCss-loader")]),t._v("处理，然后在交给"),a("code",[t._v("css-loader")]),t._v("处理，如果你使用"),a("code",[t._v("less")]),t._v("或"),a("code",[t._v("sass")]),t._v(",需要先交给"),a("code",[t._v("less-loader")]),t._v("或"),a("code",[t._v("sass-loader")]),t._v("处理。另外PostCss提供了很多插件来处理css，比如"),a("code",[t._v("postcss-preset-env")]),t._v("插件允许使用未来的css特性，比如"),a("code",[t._v("autoprefixer")]),t._v("插件可以自动补全浏览器前缀（关于"),a("a",{attrs:{href:"https://github.com/postcss/postcss/blob/master/README-cn.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCss 的更多插件"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"处理css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理css","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理CSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| --- node_modules\n| --- css\n    | -- index.css\n| --- src\n    |--- index.js\n| --- package.json\n| --- index.html\n| --- webpack.config.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在"),s("code",[this._v("index.css")]),this._v("文件中写入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("300px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("300px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("index.js")]),this._v("中写入")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v("'./src/index.css'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("index.html")]),this._v(" 中写入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--body部分--\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("webpack练习"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 引入打包后的js --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./dist/build.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"编译css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译css","aria-hidden":"true"}},[this._v("#")]),this._v(" 编译CSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在js中导入"),s("code",[this._v("css")]),this._v("文件，我们需要使用"),s("code",[this._v("style-loader")]),this._v(" 和 "),s("code",[this._v("css-loader")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev style"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("loader css"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("webpack.config.js")]),this._v("中写入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("css-loader")]),t._v(" 会找出 "),a("code",[t._v("CSS")]),t._v(" 代码中的 "),a("code",[t._v("@import")]),t._v(" 和 "),a("code",[t._v("url()")]),t._v(" 这样的导入语句，告诉 "),a("code",[t._v("Webpack")]),t._v(" 依赖这些资源。同时还支持 "),a("code",[t._v("CSS Modules")]),t._v("、"),a("code",[t._v("压缩 CSS")]),t._v(" 等功能。处理完后再把结果交给 "),a("code",[t._v("style-loader")]),t._v(" 去处理。")]),t._v(" "),a("li",[a("code",[t._v("style-loade")]),t._v("r 会把 "),a("code",[t._v("CSS")]),t._v(" 代码转换成字符串后，注入到 "),a("code",[t._v("JavaScript")]),t._v(" 代码中去，通过 "),a("code",[t._v("JavaScript")]),t._v(" 去给"),a("code",[t._v("DOM")]),t._v(" 增加样式。如果你想把 "),a("code",[t._v("CSS")]),t._v(" 代码提取到一个单独的文件而不是和 "),a("code",[t._v("JavaScript")]),t._v(" 混在一起，可以使用 "),a("code",[t._v("MiniCssExtractPlugin")]),t._v(", 下面我们会有介绍")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们执行"),a("code",[t._v("npx webpack")]),t._v("，打开"),a("code",[t._v("index.html")]),t._v("可以看到效果，并且"),a("code",[t._v("css")]),t._v("样式是直接嵌在"),a("code",[t._v("html")]),t._v("中的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分离css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分离css","aria-hidden":"true"}},[this._v("#")]),this._v(" 分离CSS")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("因为上面的"),a("code",[t._v("css")]),t._v("是嵌在"),a("code",[t._v("html")]),t._v("中的，我们可以使用"),a("code",[t._v("MiniCssExtractPlugin")]),t._v("插件将"),a("code",[t._v("css")]),t._v("与"),a("code",[t._v("html")]),t._v("分离。首先安装"),a("code",[t._v("MiniCssExtractPlugin")]),t._v(" 插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npm install "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),s("span",{attrs:{class:"token constant"}},[this._v("D")]),this._v(" MiniCssExtractPlugin\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("webpack.config.js")]),this._v("中加入"),s("code",[this._v("MiniCssExtractPlugin")]),this._v("插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MiniCssExtractPlugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mini-css-extract-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                 "),a("span",{attrs:{class:"token comment"}},[t._v("// 使用 MiniCssExtractPlugin 插件后就不做需要style-loader了")]),t._v("\n                     MiniCssExtractPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v("\n               "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[name].css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            chunkFilename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[id].css'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("执行"),a("code",[t._v("npx webpack")]),t._v(" 后我们会看到"),a("code",[t._v("dist")]),t._v("文件中生成了一份"),a("code",[t._v("css")]),t._v("文件，并且"),a("code",[t._v("html")]),t._v("中不存在内嵌的"),a("code",[t._v("css")]),t._v("代码了，需要手动使用"),a("code",[t._v("link")]),t._v("引入"),a("code",[t._v("css")]),t._v("代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("MiniCssExtractPlugin")]),t._v(" 插件适合用在生产模式下，我们在开发模式下就不要在使用。这时我们可以这样做：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("MiniCssExtractPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v("\n "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用less","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用Less")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("实际开发项目中我们经常会用到css预处理器如 "),a("code",[t._v("less")]),t._v("、"),a("code",[t._v("sass")]),t._v("、 "),a("code",[t._v("stylus")]),t._v(" 等，这里我们以使用"),a("code",[t._v("less")]),t._v("为例，安装"),a("code",[t._v("less")]),t._v(" 和"),a("code",[t._v("less-loader")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npm install "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),s("span",{attrs:{class:"token constant"}},[this._v("D")]),this._v(" less less"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("loader\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("@color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token variable"}},[t._v("@color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("src/index.js")]),this._v(" 中引入"),s("code",[this._v("import '../css/test.less'")]),this._v("。修改"),s("code",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v("\n               "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们执行"),s("code",[this._v("npx webpack")]),this._v(" 后可以看到，"),s("code",[this._v("test.less")]),this._v("文件被编译了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用Postcss")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("PostCSS")]),this._v("是一个用JS插件转换CSS的工具。它可以使css支持变量和mixin，使用未来的CSS语法，内联图片等等。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这些插件我们需要下载，并在项目的根目录下新建一个"),a("code",[t._v("postcss.config.js")]),t._v(" 文件(或"),a("code",[t._v(".postcssrc.js")]),t._v("文件)，在该文件中进行插件的配置，当"),a("code",[t._v("postcss")]),t._v("编译时会自动读取该文件下的配置。现在我们来实现使用"),a("code",[t._v("postcss-preset-env")]),t._v("插件允许和"),a("code",[t._v("autoprefixer")]),t._v("插件。首先安装")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 安装 postcss-loader")]),t._v("\nnpm install "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" postcss"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("loader\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 安装postcss插件")]),t._v("\nnpm install "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" postcss"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("preset"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("env  autoprefixer\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在根目录下新建"),s("code",[this._v("postcss.config.js")]),this._v(" 文件(或"),s("code",[this._v(".postcssrc.js")]),this._v("文件)，并使用上面下载的两个插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//允许你使用未来的 CSS 特性。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" postcssPresetEnv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-preset-env'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 自动添加浏览器前缀")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" autoprefixer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      postcssPresetEnv"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("autoprefixer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 配置要兼容的浏览器版本")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 也可以在package.json中的browserslist字段中添加浏览器版本")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"browsers"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"defaults"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"not ie < 11"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"last 100 versions"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"> 1%"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"iOS 7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"last 3 iOS versions"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在我们在我们"),s("code",[this._v("test.less")]),this._v(" 文件中写点")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("@color2"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v("blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 添加兼容性前缀")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token variable"}},[t._v("@color2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 新语法")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--mainColor")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("18"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 52"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 86"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.47059"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("mainColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" system"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ui"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("apple"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("system"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("word-wrap")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" break"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("word"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后我们来修改"),s("code",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                 MiniCssExtractPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'postcss-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("执行"),s("code",[this._v("npx webpack")]),this._v("后我们可以看到我们最终的结果。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先css要先经过"),a("code",[t._v("postcss-loader")]),t._v("处理交给"),a("code",[t._v("css-loader")]),t._v("，如果使用"),a("code",[t._v("less")]),t._v("或类似的css预处理器，要先交给"),a("code",[t._v("less-loader")]),t._v("处理在交给"),a("code",[t._v("postcss-loader")]),t._v("处理，最后交给"),a("code",[t._v("css-loader")])])]),t._v(" "),a("li",[a("p",[t._v("在使用"),a("code",[t._v("autoprefixer")]),t._v("做兼容性前缀时，我们要指定浏览器版本来确定在指定版本中添加兼容性前缀。可以像上面的方式指定，也可以在"),a("code",[t._v("package.json")]),t._v("中的"),a("code",[t._v("browserslist")]),t._v(" 字段中指定。")])])])])}],!1,null,null,null);e.options.__file="处理css.md";s.default=e.exports}}]);