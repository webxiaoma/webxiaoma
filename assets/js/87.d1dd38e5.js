(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{330:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resolve 配置"),a("OutboundLink")],1),t._v("的作用是告诉"),a("code",[t._v("webpack")]),t._v("如何查找模块所对应的文件。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("也就是当我们直接引入js文件或json文件时可以不带扩展名：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"resolve-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Resolve 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"resolve-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alias","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.alias")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("resolve.alias")]),this._v(" 可以通过别名来替换路径，例如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        alias"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v("'@'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/components'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 精准匹配")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v("'vue$'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/vue'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上边当我们使用 "),s("code",[this._v("import Input form @/input")]),this._v("时，webpack会将其解析为"),s("code",[this._v("import Input form ./src/components/input")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而$vue只会替换导入语句结尾是vue的路径,例如当我们使用"),s("code",[this._v("import Input form 'vue'")]),this._v("时，将被解析为"),s("code",[this._v("import Input form './src/vue'")]),this._v("，但是webpack并不是解析"),s("code",[this._v("import Input form 'vue/test'")]),this._v("这样的路径。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"resolve-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.modules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("resolve.modules")]),this._v("可以配置webpack在那些目录下查找第三方模块，webpack模式是查找"),s("code",[this._v("node_modules")]),this._v(" 目录下的模块。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们在使用项目中经常需要使用"),s("code",[this._v("../../../public/")]),this._v(" 导入"),s("code",[this._v("public")]),this._v("下的某个模块时，我们可以这样做：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'../../../public'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时我们可以直接使用 "),s("code",[this._v("import test.vue")]),this._v("，这时webpack会从"),s("code",[this._v("../../../public")]),this._v("、"),s("code",[this._v("node_modules")]),this._v(" 中去查找。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"resolve-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.extensions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("resolve.extensions")]),this._v("配置webpack自动解析的扩展文件，webpack默认会查找"),s("code",[this._v(".js")]),this._v(" 和 "),s("code",[this._v(".json")]),this._v(" 文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("extensions"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('".js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('".json"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" test "),s("span",{attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v("'../../public/test'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时webpack会自动先查找"),s("code",[this._v("test.js")]),this._v(" 文件，如果没有找到，就会在查找"),s("code",[this._v("test.json")]),this._v(" 文件。我们可以扩展"),s("code",[this._v("vue")]),this._v("文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       extensions"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('".js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('".json"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('".vue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="resolve.md";s.default=e.exports}}]);