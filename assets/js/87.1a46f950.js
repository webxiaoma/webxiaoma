(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{301:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/configuration/module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("module 模块"),n("OutboundLink")],1),t._v("选项决定了如何处理项目中的不同类型的模块。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("需要注意的是选项值并不一定时布尔值。例如，内部的 NodeStuffPlugin 差距，可以接收一个对象，而不是 true，来为特定的规则添加额外的选项")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"module-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" module 模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"module-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" module.rules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("rules")]),this._v(" 配置webpack在编译文件时，使用哪种"),s("code",[this._v("Loader")]),this._v("去编译。配置"),s("code",[this._v("Rules")]),this._v("时我们大致会通过这几步来完成")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("1. 设置匹配条件：")]),t._v(" 我们可以通过"),n("code",[t._v("test")]),t._v("、"),n("code",[t._v("incluede")]),t._v("、"),n("code",[t._v("exclude")]),t._v(" 来筛选我们要编译处理的文件。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("2. 设置编译loader：")]),t._v(" 我们可以通过"),n("code",[t._v("use")]),t._v("、"),n("code",[t._v("loader")]),t._v("来规定使用哪种"),n("code",[t._v("loader")]),t._v("来编译文件，"),n("code",[t._v("use")]),t._v("是一个数组，"),n("code",[t._v("webpack")]),t._v("默认是从后往前的顺序去按照"),n("code",[t._v("loader")]),t._v("规则去编译, "),n("code",[t._v("loader")]),t._v(" 是"),n("code",[t._v("use: [ { loader } ]")]),t._v(" 的简写。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("3. 设置loader的使用：")]),t._v(" 我们可以通过"),n("code",[t._v("enforce")]),t._v("、"),n("code",[t._v("oneOf")]),t._v("、设置loader的使用，当"),n("code",[t._v("enforce")]),t._v("设置为"),n("code",[t._v("pre")]),t._v("时，"),n("code",[t._v("webpack")]),t._v("将从前往后根据"),n("code",[t._v("loader")]),t._v("执行编译。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们来看一下"),s("code",[this._v("rules")]),this._v("的配置")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配less文件")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配多个文件")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 不会编译 node_modules 目录下的文件")]),t._v("\n        exclude"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'node_modules'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 只编译中src目录里的文件")]),t._v("\n        include"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'src'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配类似foo.css?inline的带有?inline的css")]),t._v("\n        resourceQuery"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/inline/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// ?cacheDirectory 表示传给 babel-loader 的参数，")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 用于缓存 babel 编译结果加快重新编译速度")]),t._v("\n        use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 这种方法同上面的方法，当loader需要传入很多参数时")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以使用options对象")]),t._v("\n        user"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'babel-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将query形式转换成options对象")]),t._v("\n                    cacheDirectory"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 处理顺序为从后到前，即先交给 less-loader 处理，")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 再把结果交给 css-loader 最后再给 style-loader。")]),t._v("\n        use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'less-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配less文件")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'less-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//将安照从左往右顺序执行loader。")]),t._v("\n        enforce"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'pre'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/.css$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//只使用第一个匹配规则")]),t._v("\n        oneOf"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配类似foo.css?inline的带有?inline的css")]),t._v("\n                resourceQuery"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/inline/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'url-loader'")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),n("span",{attrs:{class:"token comment"}},[t._v("// 匹配类似foo.css?external的带有?external的css")]),t._v("\n                resourceQuery"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/external/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'file-loader'")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rules-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" rules.parser")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("rules.parser")]),this._v("解析器(parser)可以告诉"),s("code",[this._v("webpack")]),this._v("那些模块语法要解析那些不需要解析，大多数默认插件，会如下解释值：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("将选项设置为 "),n("code",[t._v("false")]),t._v("，将禁用解析器。")]),t._v(" "),n("li",[t._v("将选项设置为 "),n("code",[t._v("true")]),t._v("，或不修改将其保留为 "),n("code",[t._v("undefined")]),t._v("，可以启用解析器。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token regex"}},[t._v("/\\*.js$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        parser"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            amd"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 AMD")]),t._v("\n            commonjs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 CommonJS")]),t._v("\n            system"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 SystemJS")]),t._v("\n            harmony"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 ES2015 Harmony import/export")]),t._v("\n            requireInclude"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 require.include")]),t._v("\n            requireEnsure"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 require.ensure")]),t._v("\n            requireContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 require.context")]),t._v("\n            browserify"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用特殊处理的 browserify bundle")]),t._v("\n            requireJs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 requirejs.*")]),t._v("\n            node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 禁用 __dirname, __filename, module, require.extensions, require.main 等。")]),t._v("\n            node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 在模块级别(module level)上重新配置 node 层(layer)")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rules-noparse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules-noparse","aria-hidden":"true"}},[this._v("#")]),this._v(" rules.noParse")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("防止 "),n("code",[t._v("webpack")]),t._v(" 解析那些任何与给定正则表达式相匹配的文件。"),n("strong",[t._v("忽略的文件中不应该含有 "),n("code",[t._v("import")]),t._v(", "),n("code",[t._v("require")]),t._v(", "),n("code",[t._v("define")]),t._v(" 的调用，或任何其他导入机制")]),t._v(", 不然编译出来的文件会存在问题，其实这里就是让"),n("code",[t._v("webpack")]),t._v("不去处理那些没有使用模块化标准的库（例如：jquery,jquerUl,EchartJS,lodsh等等）")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token regex"}},[t._v("/\\*.js$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 以字符串形式，忽略掉jquery和lodash")]),t._v("\n        noParse"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/jquery|lodash/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 使用函数形式")]),t._v("\n        noParse"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/jquery|lodash/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("test")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="module.md";s.default=e.exports}}]);