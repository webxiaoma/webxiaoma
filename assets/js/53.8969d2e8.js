(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{346:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/es6%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("webpack")]),t._v("处理 "),a("code",[t._v("ES6")]),t._v("需要用到"),a("router-link",{attrs:{to:"/javascript/babel.html"}},[t._v("babel转码器")]),t._v("，这里我们主要讲webpack如何处理"),a("code",[t._v("ES6")]),t._v("。")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("webpack中如果接入babel需要安装一些必须模块，来做编译准备工作。")]),t._v(" "),t._m(2),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意 截止2018-9-13日")]),t._v(" "),a("p",[a("code",[t._v("webpack4")]),t._v("中这里安装的"),a("code",[t._v("babel-loader")]),t._v("版本是"),a("code",[t._v("7.0.0")]),t._v("的，这里可能是"),a("code",[t._v("babel-core")]),t._v("依赖以"),a("Badge",[t._v("babel-loader 7.x")]),t._v("的版本，如果使用"),a("code",[t._v("8.x")]),t._v("版本会编译不成功。"),a("a",{attrs:{href:"https://github.com/webpack/webpack-cli/issues/296",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-cli issues"),a("OutboundLink")],1),t._v("。")],1)]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("安装好必须依赖后，我们还需要安装编译ES6的预设（"),a("code",[t._v("preset")]),t._v("），它的作用就是编译"),a("code",[t._v("es6")]),t._v("中的一些新语法，但是不能够编译"),a("code",[t._v("es6")]),t._v("中的一些"),a("code",[t._v("api")]),t._v(",编译"),a("code",[t._v("api")]),t._v("需要一些插件，下来我们会安装。关于"),a("code",[t._v("babel")]),t._v("的"),a("code",[t._v("preset")]),t._v("可以"),a("router-link",{attrs:{to:"/javascript/babel.html#_1-babel预设"}},[t._v("查看这里")])],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("这时我们就可以编译一些es6的新语法了。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"处理es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理es6","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理ES6")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装必须模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装必须模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装必须模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("core babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("loader@"),a("span",{attrs:{class:"token number"}},[t._v("7.0")]),a("span",{attrs:{class:"token number"}},[t._v(".0")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装es6预设"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装es6预设","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装ES6预设")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在我们来安装"),s("code",[this._v("babel-preset-env")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("preset"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("env\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后我们在项目根目录"),s("code",[this._v(".babelrc")]),this._v("配置文件中配置一下")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在来配置一下"),s("code",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               exclude"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/(node_modules)/")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装es6插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装es6插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装ES6插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们上面提到了，es6的预设只能编译一些新的语法，不能编译"),a("code",[t._v("es6")]),t._v("的一些新的"),a("code",[t._v("API")]),t._v("，比如"),a("code",[t._v("Iterator")]),t._v("、"),a("code",[t._v("Generator")]),t._v("、"),a("code",[t._v("Set")]),t._v("、"),a("code",[t._v("Maps")]),t._v("、"),a("code",[t._v("Proxy")]),t._v("、"),a("code",[t._v("Reflect")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("、"),a("code",[t._v("Promise")]),t._v("等全局对象,以及一些定义在全局对象上的方法（比如"),a("code",[t._v("Object.assign")]),t._v("）。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这时候我们要用的"),a("code",[t._v("ES6")]),t._v("的一些插件例如"),a("code",[t._v("transform-runtime")]),t._v("和"),a("code",[t._v("babel-polyfill")]),t._v("，这里我们使用"),a("code",[t._v("transform-runtime")]),t._v("插件。"),a("code",[t._v("transform-runtime")]),t._v("插件对应的全名叫"),a("code",[t._v("babel-plugin-transform-runtime")]),t._v("，另外还需要安装"),a("code",[t._v("babel-runtime")]),t._v("插件来配合"),a("code",[t._v("babel-plugin-transform-runtime")]),t._v("的使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transform"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装好后我们在"),s("code",[this._v(".babelrc.")]),this._v("中添加插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"transform-runtime"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到现在我们就可以来尽情的写"),s("code",[this._v("ES6")]),this._v("代码了。")])}],!1,null,null,null);e.options.__file="处理es6.md";s.default=e.exports}}]);