(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{379:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/docschina/babeljs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.babeljs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1),t._v("是一个 "),a("code",[t._v("JavaScript")]),t._v("编译器，它可以将"),a("code",[t._v("es6")]),t._v("中的代码编译成目前大多数浏览器识别的"),a("code",[t._v("es5")]),t._v("代码。")]),t._v(" "),a("p",[t._v("例如它将以ES6代码下：")]),t._v(" "),t._m(2),a("p",[t._v("编译成ES5 代码：")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("中文官网："),a("a",{attrs:{href:"https://babel.docschina.org/docs/en/babel-core",target:"_blank",rel:"noopener noreferrer"}},[t._v(".babelrc 的使用方法"),a("OutboundLink")],1)]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("以下是4 个不同阶段的（打包的）预设：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("p",[t._v("当然我们还可以设置固定版本的浏览器：")]),t._v(" "),t._m(18),a("p",[t._v("支持超过市场份额5%的浏览器:")]),t._v(" "),t._m(19),a("p",[a("a",{attrs:{href:"http://babeljs.io/docs/en/babel-preset-env/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel 的更多配置"),a("OutboundLink")],1)]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("在页面中引入")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[a("a",{attrs:{href:"https://babel.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-core"),a("OutboundLink")],1),t._v(" 的作用是把 "),a("code",[t._v("js")]),t._v(" 代码分析成 "),a("code",[t._v("ast")]),t._v("( 抽象语法树 ,是源代码的抽象语法结构的树状表现形式) ，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 "),a("code",[t._v("ast")]),t._v("，分析其语法后再转为低版本 "),a("code",[t._v("js")]),t._v("。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),a("p",[t._v("关于"),a("code",[t._v("options")]),t._v("的配置项可以查看"),a("a",{attrs:{href:"https://babel.docschina.org/docs/en/options",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网Options"),a("OutboundLink")],1)]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),a("p",[t._v("另外babel经常和我们的构建工具一起使用，比如通过"),a("router-link",{attrs:{to:"/webpack/处理es6.html"}},[t._v("webpack使用")]),t._v("，通过"),a("code",[t._v("glup")]),t._v("使用。更多使用方法见"),a("a",{attrs:{href:"https://babel.docschina.org/en/setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网配置"),a("OutboundLink")],1)],1),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),a("p",[t._v("安装完成后我们需要在入口页面中引入（尽量放到最上边）")]),t._v(" "),t._m(55),a("p",[t._v("或在webpack中的入口文件中引入")]),t._v(" "),t._m(56),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._m(60),t._v(" "),t._m(61),t._m(62),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000008159877#articleHeader7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel的使用"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 用户手册"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"babel的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" Babel的使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" babel 介绍")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("test")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v('"use strict"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("test")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("并且 "),s("code",[this._v("babel")]),this._v(" 还支持 "),s("code",[this._v("react")]),this._v("的 "),s("code",[this._v("JSX")]),this._v(" 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babelrc-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babelrc-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" .babelrc. 配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在babel 编译es6之前需要知道该以哪种规则或条件去编译，而这些条件和编译方式我们写在"),a("code",[t._v(".babelrc.")]),t._v("  配置文件 中,也可在通过 "),a("code",[t._v("package.json")]),t._v(" 来配置"),a("code",[t._v(".babelrc.")]),t._v(" ，"),a("code",[t._v("Babel")]),t._v("会在正在被转录的文件的当前目录中查找一个"),a("code",[t._v(".babelrc")]),t._v(" 文件。 如果不存在，它会遍历目录树，直到找到一个 "),a("code",[t._v(".babelrc")]),t._v(" 文件，或一个 "),a("code",[t._v("package.json")]),t._v(" 文件中有"),a("code",[t._v('"babel": {}')]),t._v("。另外我们还要下载一些相应的编译插件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 编译规则")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 编译插件")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-babel预设"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel预设","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("1. babel预设")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("官方预设(preset), 有两种，一个是按年份("),a("code",[t._v("babel-preset-2017")]),t._v(")，一个是按阶段("),a("code",[t._v("babel-preset-stage-X")]),t._v(")。 这主要是根据TC39 委员会"),a("code",[t._v("ECMASCRPIT")]),t._v(" 发布流程来制定的。TC39 委员会决定，从2016年开始，每年都会发布一个版本，它包括每年期限内完成的所有功能，同时"),a("code",[t._v("ECMAScript")]),t._v("的版本号也按年份编制，就有了ES2016, ES2017。所以也就有了babel-present-2016, "),a("code",[t._v("babel-preset-2017")]),t._v("， 对每一年新增的语法进行转化。"),a("code",[t._v("babel-preset-latest")]),t._v(" 就是把所有es2015, es2016, es2017 全部包含在一起了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("babel-preset-stage-0")])]),this._v(" "),s("li",[s("code",[this._v("babel-preset-stage-1")])]),this._v(" "),s("li",[s("code",[this._v("babel-preset-stage-2")])]),this._v(" "),s("li",[s("code",[this._v("babel-preset-stage-3")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("babel-preset-latest")]),t._v(" 编译插件是一个特殊的presets，包括了 "),a("code",[t._v("es2015")]),t._v("，"),a("code",[t._v("es2016")]),t._v("，"),a("code",[t._v("es2017")]),t._v("的插件（目前为止，以后有es2018也会包括进去）。即总是包含最新的编译插件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于现在浏览器对ES6 的支持度越来越高，如果我们使用"),s("code",[this._v("babel-preset-latest")]),this._v(" 编译插件则会将一些本不需要的编译（大多数浏览器都支持的ES6 语法）编译成臃肿的es5语法。为此我们可以使用 "),s("code",[this._v("babel-preset-env")]),this._v("编译插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-babelrc-的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-babelrc-的配置","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("2. .babelrc. 的配置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装 "),s("code",[this._v("babel-preset-env")]),this._v("编译插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("preset"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("env\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v(".babelrc.")]),this._v("  配置文件中进行配置，没有选项的默认行为会运行所有转换（行为与"),s("code",[this._v("babel-preset-latest")]),this._v("相同）")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"targets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{attrs:{class:"token string"}},[t._v('"browsers"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"last 2 versions"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ie >=8 "')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 指定支持主流浏览器最新的两个版本以及IE 7+:")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"transform-vue-jsx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 使用编译扩展插件，这里使用的vue扩展插件")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 针对当前node版本进行编译")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"modules"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"amd"')]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 启用将ES6模块语法转换为另一种模块类型")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v('"targets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"chrome"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v('"targets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"browsers"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"> 5%"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-的使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-的使用方式","aria-hidden":"true"}},[this._v("#")]),this._v(" babel 的使用方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"浏览器中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器中")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"https://unpkg.com/babel-standalone@6/babel.min.js"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在 "),s("code",[this._v(".babelrc.")]),this._v(" 配置文件中进行配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"babel-cli命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-cli命令行","aria-hidden":"true"}},[this._v("#")]),this._v(" babel-cli命令行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("babel-cli")]),this._v("是通过命令行来编译"),s("code",[this._v("ES6")]),this._v("代码的，首先先安装 "),s("code",[this._v("babel-cli")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("cli "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev  "),a("span",{attrs:{class:"token comment"}},[t._v("// 局部安装的")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("需要注意的是")]),this._v("：执行以下命令前也需要先在 "),s("code",[this._v(".babelrc.")]),this._v("配置文件中进行配置, 不然不会编译文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在命令版中输出编译的test.js 文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("npx babel test"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("将编译文件输出指定的文件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$ babel example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("out"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("file compiled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n# 或\n$ babel example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("o compiled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("编译整个文件夹中的文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("$ babel src "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("out"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("dir lib\n# 或\n$ babel src "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("d lib\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"babel-core编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-core编译","aria-hidden":"true"}},[this._v("#")]),this._v(" Babel-core编译")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先安装"),s("code",[this._v("babel-core")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("core "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev  "),a("span",{attrs:{class:"token comment"}},[t._v("// 局部安装的")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以使用一下方式引入"),s("code",[this._v("babel-core")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" babel "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"babel-core"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transform "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'babel-core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" babel "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'babel-core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("字符串形式的Js代码可以使用"),s("code",[this._v("babel.transform")]),this._v("来编译")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("babel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"code();"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 编译结果")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 编译的map")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ast"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 编译的ast")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果是文件的话，可以使用异步方法"),s("code",[this._v("babel.transformFile")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("babel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transformFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"filename.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("或者是同步方法"),s("code",[this._v("babel.transformFileSync")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("babel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transformFileSync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"filename.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Babel插件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("上面的"),a("code",[t._v("babel")]),t._v("虽然可以编译所有时新的 "),a("code",[t._v("JavaScript")]),t._v(" 语法，但是，但对于新增 "),a("code",[t._v("APIs")]),t._v(" 来说却没有能力，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如"),a("code",[t._v("Object.assign")]),t._v("）都不会转码。这时候我们就要用到"),a("code",[t._v("babel")]),t._v("的一些插件了。配置"),a("code",[t._v("babel")]),t._v("插件我们可以在"),a("code",[t._v("plugins")]),t._v("字段中配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了达成使用这些新API的目的，社区又有2个实现流派："),s("code",[this._v("babel-polyfill")]),this._v("和"),s("code",[this._v("babel-runtime+babel-plugin-transform-runtime")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这两个模块功能几乎相同，就是转码新增 "),a("code",[t._v("api")]),t._v("，模拟 "),a("code",[t._v("es6")]),t._v(" 环境，但实现方法完全不同。"),a("code",[t._v("babel-polyfill")]),t._v(" 的做法是将全局对象通通污染一遍，比如想在 "),a("code",[t._v("node 0.10")]),t._v(" 上用 "),a("code",[t._v("Promise")]),t._v("，调用 "),a("code",[t._v("babel-polyfill")]),t._v(" 就会往 "),a("code",[t._v("global")]),t._v(" 对象挂上 "),a("code",[t._v("Promise")]),t._v(" 对象。对于普通的业务代码没有关系，但如果用在模块上就有问题了，会把模块使用者的环境污染掉。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("babel-runtime")]),t._v(" 的做法是自己手动引入 "),a("code",[t._v("helper")]),t._v(" 函数，还是上面的例子，"),a("code",[t._v("const Promise = require('babel-runtime/core-js/promise')")]),t._v(" 就可以引入 "),a("code",[t._v("Promise")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("但 "),a("code",[t._v("babel-runtime")]),t._v(" 也有问题，第一，很不方便，第二，在代码中中直接引入 "),a("code",[t._v("helper")]),t._v("函数，意味着不能共享，造成最终打包出来的文件里有很多重复的 "),a("code",[t._v("helper")]),t._v(" 代码。所以，"),a("code",[t._v("babel")]),t._v("又开发了 "),a("code",[t._v("babel-plugin-transform-runtime")]),t._v("，这个模块会将我们的代码重写，如将 "),a("code",[t._v("Promise")]),t._v(" 重写成 "),a("code",[t._v("_Promise")]),t._v("（只是打比方），然后引入"),a("code",[t._v("_Promise helper")]),t._v(" 函数。这样就避免了重复打包代码和手动引入模块的痛苦。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"babel-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill","aria-hidden":"true"}},[this._v("#")]),this._v(" babel-polyfill")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("babel-polyfill")]),t._v(" 使用"),a("code",[t._v("es5")]),t._v("或"),a("code",[t._v("es3")]),t._v("实现一些新的"),a("code",[t._v("api")]),t._v("，并注入全。使用时我们先要安装：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npm i "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),s("span",{attrs:{class:"token constant"}},[this._v("S")]),this._v(" babel"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("polyfill\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"babel-polyfill"')]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'polyfill'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"babel-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime","aria-hidden":"true"}},[this._v("#")]),this._v(" babel-runtime")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("babel-runtime")]),t._v(" 插件和"),a("code",[t._v("babel-polyfill")]),t._v(" 不同的是，它并不会在全局注入一些新"),a("code",[t._v("api")]),t._v("，而是将我们写的新语法转换成浏览器识别的代码。"),a("code",[t._v("babel-runtime")]),t._v("通常和"),a("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 配合使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("S")]),t._v(" babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transform"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在"),s("code",[this._v(".babelrc")]),this._v("配置文件中配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"transform-runtime"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参考文章")])])}],!1,null,null,null);n.options.__file="babel.md";s.default=n.exports}}]);