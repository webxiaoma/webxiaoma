(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{334:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/%E6%87%92%E5%8A%A0%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/lazy-loading/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack中的懒加载"),a("OutboundLink")],1),t._v("也称为按需加载，它是一种很好的优化网页或应用的方式。我们在做单页面应用时，因为只有一个"),a("code",[t._v("HTML")]),t._v("，我们许多功能的js或css等都会引入到其中，导致我们网页的首屏加载速度回变的很慢，这时候我们可以使用懒加载来解决这个问题，我们开始时只加载用户需要的功能，其他功能后续在去加载。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("比如现在我们目录结构是这样的")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),a("p",[t._v("另外我们使用动态的"),a("code",[t._v("import")]),t._v("语句需要安装"),a("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel插件 babel-plugin-syntax-dynamic-import"),a("OutboundLink")],1),t._v(",并在"),a("code",[t._v(".babelrc.")]),t._v("中配置")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 中使用懒加载"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.css88.com/doc/webpack2/guides/lazy-load-react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 中使用懒加载"),a("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 懒加载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实现懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现懒加载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("|--- node_modules\n|--- src\n   |--- alert.js\n   |--- index.js\n|--- .babelrc.\n|--- index.html\n|--- package.json\n|--- webpack.config.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在"),s("code",[this._v("alert.js")]),this._v("中写入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"我是后加载的alert.js文件中的内容"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("index.js")]),this._v("中写入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" btn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'button'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 当点击按钮时加载 alert.js")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v('/*webpackChunkName: "alert"*/')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./alert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("该文件中当"),a("code",[t._v("webpack")]),t._v("遇到"),a("code",[t._v("import()")]),t._v("时会以"),a("code",[t._v("./alert")]),t._v("为入口生成一个"),a("code",[t._v("chunk")]),t._v("，并且当代码执行到"),a("code",[t._v("import()")]),t._v("后才会加载由"),a("code",[t._v("Chunk")]),t._v("对应生成的文件。  "),a("code",[t._v('/*webpackChunkName: "alert"*/')]),t._v(" 这个注释的意思是为动态生成的"),a("code",[t._v("Chunk")]),t._v(" 起一个名字, 这里需要结合"),a("code",[t._v("chunkFilenmae")]),t._v(" 来输出文件名")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'[name].[hash:5].js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("index.html")]),this._v("页面中我们代码如下")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--body部分--\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("懒加载"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击加载 alert.js"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 引入打包后的js --\x3e")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"syntax-dynamic-import"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们运行后，页面并没有加载"),s("code",[this._v("alert.js")]),this._v(", 我们点击按钮button 时，"),s("code",[this._v("alert.js")]),this._v(" 才会被加载，并执行相应的代码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"框架中实现懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架中实现懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 框架中实现懒加载")])}],!1,null,null,null);e.options.__file="懒加载.md";s.default=e.exports}}]);