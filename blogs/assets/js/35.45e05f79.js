(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{304:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/output/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置output"),a("OutboundLink")],1),t._v(" 选项可以控制 "),a("code",[t._v("webpack")]),t._v(" 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。")]),t._v(" "),t._m(1),t._v(" "),a("p",[a("code",[t._v("Output")]),t._v("字段的值是一个对象，从"),a("Badge",[t._v("webpack v4+")]),t._v("开始"),a("code",[t._v("Output")]),t._v("字段不在是必须配置项，当没有配置"),a("code",[t._v("Output")]),t._v("字段时，webpack默认输出"),a("code",[t._v("dist")]),t._v("目录下的"),a("code",[t._v("main.js")]),t._v("文件中。当我们在"),a("code",[t._v("webpack.config.js")]),t._v("中配置了"),a("code",[t._v("Output")]),t._v("字段时，将按照我们配置的输出目录进行输出。配置"),a("code",[t._v("Output")]),t._v("时需要最少配置输出文件名称"),a("code",[t._v("filename")]),t._v("和输出路径"),a("code",[t._v("path")]),t._v("，例如：")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),a("p",[t._v("现在我们将我们的项目目录改成这样")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),a("p",[t._v("我们在我们项目中的css中引入背景图片")]),t._v(" "),t._m(27),t._m(28)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"output-出口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-出口","aria-hidden":"true"}},[this._v("#")]),this._v(" Output 出口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'bundle_test.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'/dist'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面webpack打包时会将test.js文件及其依赖编译到"),s("code",[this._v("bundle_test.js")]),this._v("文件中，并输出到根目录下的"),s("code",[this._v("/dist")]),this._v("目录中。我们来操作一下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("目录结构")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| --- node_modules\n| --- src\n    |--- test.js\n| --- webpack.config.js\n| --- package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("src/index.js")]),this._v("内容为"),s("code",[this._v("console.log(1111)")]),this._v(", "),s("code",[this._v("webpack.config.js")]),this._v(" 内容为")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/test.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bundle_test.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们执行"),s("code",[this._v("npx webpack")]),this._v(" 后我们可以看到在dist目录下生产了一个"),s("code",[this._v("bundle_test.js")]),this._v("文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"output-filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-filename","aria-hidden":"true"}},[this._v("#")]),this._v(" output.filename")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("output.filename")]),this._v(" 可以配置我们输出文件的名称，当我们值输出一个文件时，我们可以将名字写成固定的名称")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("filename"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v("'bundle_test.js'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们要输出多个Chunk 时，可以使用"),s("code",[this._v("name")]),this._v("变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("filename"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[this._v("`bundle_[name].js`")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| --- node_modules\n| --- src\n    |--- one.js\n    |--- two.js\n    |--- three.js\n| --- webpack.config.js\n| --- package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原来的"),s("code",[this._v("webpack.config.js")]),this._v(" 文件修改为：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'one'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/one.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'two'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/two.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'three'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/three.js'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bundle_[name].js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("当我们执行"),a("code",[t._v("npx webpack")]),t._v(" 后我们可以看到在dist目录下产生了"),a("code",[t._v("bundle_[name].js")]),t._v("、"),a("code",[t._v("bundle_[name].js")]),t._v("、"),a("code",[t._v("bundle_[name].js")]),t._v(" 三个文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("除了变量"),a("code",[t._v("name")]),t._v("之外我们还可以使用"),a("code",[t._v("id")]),t._v(","),a("code",[t._v("hash")]),t._v("来命名输出的文件")]),t._v("`")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("变量名")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("Chunk的名称")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("Chunk的唯一标识，从0开始逐渐递增")])]),t._v(" "),a("tr",[a("td",[t._v("hash")]),t._v(" "),a("td",[t._v("Chunk的唯一标识的Hash值")])]),t._v(" "),a("tr",[a("td",[t._v("chunkhash")]),t._v(" "),a("td",[t._v("Chunk内容的Hash值")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("[hash]")]),t._v(" 和 "),a("code",[t._v("[chunkhash]")]),t._v(" 的长度可以使用 "),a("code",[t._v("[hash:16]")]),t._v("（默认为20）来指定。或者，通过指定"),a("code",[t._v("output.hashDigestLength")]),t._v(" 在全局配置长度。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"output-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-path","aria-hidden":"true"}},[this._v("#")]),this._v(" output.path")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("output.path")]),this._v(" 配置输出文件存放在本地的目录，该配置必须是绝对路径。一般我们会使用 "),s("code",[this._v("Node")]),this._v(" 的 "),s("code",[this._v("path")]),this._v(" 模块来获取绝对路径：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'dist_[hash]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"output-publicpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-publicpath","aria-hidden":"true"}},[this._v("#")]),this._v(" output.publicPath")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("output.publicPath")]),this._v(" 配置按需加载或静态资源（如js、图片、css）等的公共路径。例如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bundle_[name].js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        publicPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'http://www.webxiaoma/com'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v("background-image")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),s("span",{attrs:{class:"token url"}},[this._v("url('/assets/test.png')")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么打包出来这个图片的访问路径就会是"),s("code",[this._v("http://www.webxiaoma/com/assets/test.png")])])}],!1,null,null,null);e.options.__file="output.md";s.default=e.exports}}]);