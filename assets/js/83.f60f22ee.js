(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{301:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.webpackjs.com/concepts/mode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mode 配置选项"),e("OutboundLink")],1),t._v("，告知 webpack 使用相应模式来进行打包并是使用相应的内置优化。"),e("a",{attrs:{href:""}},[t._v("Gihub练习")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("MyImg",{attrs:{src:"/img/daima1.jpg",alt:"webpack"}}),t._v(" "),t._m(15),t._v(" "),t._m(16),e("p",[t._v("这种模式和生产模式相比，打包出来的代码没有进行压缩，并且我们的代码并没有被编译成字符串。")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mode-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode-模式","aria-hidden":"true"}},[this._v("#")]),this._v(" Mode 模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mode配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Mode配置")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("webpack")]),t._v(" 提供了三种模式 "),e("code",[t._v("production")]),t._v(" 生产模式、 "),e("code",[t._v("development")]),t._v("开发模式 和 "),e("code",[t._v("none")]),t._v("不使用任何模式, 默认情况下webpack是使用的"),e("code",[t._v("production")]),t._v(" 生产模式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以在配置中的"),s("code",[this._v("mode")]),this._v("字段中来配置"),s("code",[this._v("webpack")]),this._v("的编译模式。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("当然我们还可以使用"),e("code",[t._v("npx webpack --mode 模式")]),t._v("命令来告诉"),e("code",[t._v("webpack")]),t._v("使用什么模式来进行编译打包。我们来尝试一下这几种编译打包的模式。我们先建一个 "),e("code",[t._v("src")]),t._v(" 文件夹在文件夹中建一个"),e("code",[t._v("index.js文件")]),t._v("，此时我们的目录结构是这样的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| --- node_modules\n| --- src\n    |--- index.js\n| --- package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在 "),s("code",[this._v("index.js")]),this._v(" 中写点内容")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("test")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("log")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'hello world'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("test")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"以生产模式打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以生产模式打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 以生产模式打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npx webpack "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("mode production\n或\nnpx webpack "),s("span",{attrs:{class:"token comment"}},[this._v("// 这种情况会提示警告")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("我们执行完可以看到，"),e("code",[t._v("webpack")]),t._v(" 自动寻找 "),e("code",[t._v("src")]),t._v(" 下面的 "),e("code",[t._v("index.js")]),t._v(" 为入口文件 并将其打包到 "),e("code",[t._v("dist")]),t._v(" 文件下的 "),e("code",[t._v("main.js")]),t._v(" 中，除此之外我们的代码还进行了压缩，并且"),e("code",[t._v("webpack")]),t._v("还为我们做了一些优化。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"以开发模式打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以开发模式打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 以开发模式打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npx webpack "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("mode development\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这种模式和生成模式下比，打包出来的代码没有进行压缩，并且我们的代码被编译成了字符串并通过"),s("code",[this._v("evel")]),this._v(" 来触发执行。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"以none模式打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以none模式打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 以none模式打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npx webpack "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("mode none\n")])])])}],!1,null,null,null);n.options.__file="mode.md";s.default=n.exports}}]);