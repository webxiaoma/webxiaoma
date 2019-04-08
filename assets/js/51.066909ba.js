(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{375:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("我们在"),a("router-link",{attrs:{to:"/javascript/execution-contexts.html"}},[t._v("JavaScript之执行上下文")]),t._v("中已经讨论过"),a("code",[t._v("执行上下文")]),t._v("，并且提到在执行代码执行中，"),a("code",[t._v("执行上下文")]),t._v("会初始化三个很重要的对象("),a("code",[t._v("变量对象")]),t._v("、"),a("code",[t._v("作用域链")]),t._v("、"),a("code",[t._v("this")]),t._v(")，这里我们讲解其中的一个变量对象。")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("另外在全局中声明的变量或函数，也会自动添加到全局对象上")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("下面我们来看看这两个阶段的执行。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),a("p",[t._v("在上面代码在执行前，变量对象会是这样：")]),t._v(" "),t._m(26),a("p",[t._v("这是代码在执行阶段前，执行上下文中变量对象所做的一些前期工作。函数执行上下文中的活动对象和全局执行上下文中的变量对象在代码执行前处理大同小异，只是活动对象中的一些属性不同。")]),t._v(" "),t._m(27),a("p",[t._v("在上面代码在执行前，活动对象会是这样：")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("执行代码的前期准备工作完成后，该进入代码的执行阶段了，在这个阶段，主要就是将变量对象中提升的变量进行赋值，我们通过下面例子来看看这是变量对象的变化。")]),t._v(" "),t._m(32),a("p",[t._v("上面的代码展示了进入执行上下文阶段时的变量对象。当进入执行阶段后，代码会按触发顺序从上向下去执行可执行代码。")]),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("通过上面的讲解，我们会很清楚为什么会出现下面这种情况：")]),t._v(" "),t._m(34),a("p",[t._v("关于执行上下文中变量对象的知识目前先整理到这里。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript之变量对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript之变量对象","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript之变量对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"变量对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("变量对象（Variable object）")]),this._v("对象作为一个对象，我们可以使用伪代码来表示：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("// 伪代码")]),this._v("\nVo "),s("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("变量对象（Variable object）")]),this._v("作为执行上下文的一个对象属性，也会因为执行上下文的不同，而有所不同。下面我们来看看"),s("code",[this._v("全局上下文中的变量对象")]),this._v("和"),s("code",[this._v("函数上下文中的变量对象")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局上下文中的变量对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局上下文中的变量对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局上下文中的变量对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在说"),s("code",[this._v("全局上下文中的变量对象")]),this._v("对象之前我们先来确定一下"),s("code",[this._v("全局对象")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("全局对象")]),t._v(" "),a("p",[t._v("全局对象是预定义的对象，作为"),a("code",[t._v("JavaScript")]),t._v("的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象(比如"),a("code",[t._v("Math")]),t._v(")、函数(比如"),a("code",[t._v("parseInt")]),t._v(")和属性(比如"),a("code",[t._v("innerHeight")]),t._v(")。全局对象不是任何对象的属性。")]),t._v(" "),a("p",[t._v("全局对象(Global object) 是在进入任何执行上下文之前就已经创建了的对象；\n这个对象只存在一份，它的属性在程序中任何地方都可以访问，全局对象的生命周期终止于程序退出那一刻。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在全局对象中我们可以通过"),s("code",[this._v("this")]),this._v("来引用，并且在"),s("code",[this._v("DOM")]),this._v("中，全局对象有一个"),s("code",[this._v("window")]),this._v("属性也可以应用自身")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除了上面提到的属性，函数等等，全局对象还包含很多的属性、函数。在"),s("code",[this._v("DOM")]),this._v("中还包含大量的"),s("code",[this._v("DOM")]),this._v("的节点信息以及事件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数 f")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在全局中访问全局变量或函数时，我们还可以省略"),s("code",[this._v("window")]),this._v("对象，直接访问"),s("code",[this._v("console.log(a)")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("说了这么多，其实就是想说："),s("strong",[this._v("全局对象就是全局上下文中的变量对象")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("Vo")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("globalContext"),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v(" global\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"函数上下文中的变量对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数上下文中的变量对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数上下文中的变量对象")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("函数上下文中的变量对象和全局上下文中的变量对象有所不同。在函数中通常是用"),a("code",[t._v("活动对象（activation object）")]),t._v(" 来表示"),a("code",[t._v("变量对象（Variable object）")]),t._v("，其实他俩是一个东西"),a("code",[t._v("VO(functionContext) === AO")]),t._v("，只不过"),a("code",[t._v("变量对象（VO）")]),t._v("不能直接访问，并且"),a("code",[t._v("活动对象（activation object）")]),t._v(" 只有在函数激活（执行）时会产生。其他情况下无法访问"),a("code",[t._v("活动对象")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在进入函数执行上下文时，变量对象会被激活成为活动对象（AO)，在活动对象中为代码的执行做一些初始化，比如变量和函数的提升，初始化"),s("code",[this._v("arguments")]),this._v("属性，并为"),s("code",[this._v("arguments")]),this._v("赋值为"),s("code",[this._v("Arguments")]),this._v("对象。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 初始化变量")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 初始化函数声明")]),t._v("\n    arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Arguments "),a("span",{attrs:{class:"token comment"}},[t._v("// 初始化arguments 对象")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"可执行代码执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可执行代码执行过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 可执行代码执行过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("JavaScript")]),this._v("中执行上下文中的代码被分为分两个阶段来执行：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("进入执行上下文阶段")])]),this._v(" "),s("li",[s("code",[this._v("执行阶段")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"进入执行上下文阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入执行上下文阶段","aria-hidden":"true"}},[this._v("#")]),this._v(" 进入执行上下文阶段")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("进入执行上下文阶段时，为代码的执行做前期准备，不只是准备"),a("code",[t._v("变量对象")]),t._v("，还好处理"),a("code",[t._v("作用域链")]),t._v("、"),a("code",[t._v("this")]),t._v("，这里我们只讲"),a("code",[t._v("变量对象")]),t._v("的处理。在以后的文章中我们会讨论"),a("code",[t._v("作用域链")]),t._v("和"),a("code",[t._v("this")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("全局环境中，在进入执行上下文时，变量就是全局对象，拥有全局对象的所有属性方法。另外在变量对象中会将"),a("code",[t._v("var")]),t._v("声明的变量（ES6中的"),a("code",[t._v("let")]),t._v("和"),a("code",[t._v("const")]),t._v("不会被提升）存储起来，并赋值为"),a("code",[t._v("undefined")]),t._v(", 并且将函数声明提升(函数表达式作为变量处理)。例如下面这段代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("cf")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nb "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Window"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("global"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 等等全局属性、函数或对象")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 变量a被提升，并赋值为undefined")]),t._v("\n    cf"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数表达式cf 按变量处理")]),t._v("\n    f"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数声明f被提升，并指向函数f")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("text")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// arguments 对象初始化")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 变量b被提升，并赋值为undefined")]),t._v("\n    text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("text"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数声明text被提升，并指向函数text")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("当变量明和函数名称相同时，变量对象会先提升变量，在提升函数声明，如果名称相同就覆盖变量")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    f"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数声明f被提升，和变量f同名，覆盖变量值")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"执行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行阶段")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("cf")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nb "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Window"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("global"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 等等全局属性、函数或对象")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 变量a被提升，并赋值为undefined")]),t._v("\n    cf"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数表达式cf 按变量处理")]),t._v("\n    f"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数声明f被提升，覆盖同名变量f, 并指向函数f")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("当遇到"),a("code",[t._v("var a = 1")]),t._v(" 时，变量对象中的"),a("code",[t._v("a")]),t._v("的值将不在是"),a("code",[t._v("undefined")]),t._v(",将会变为"),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("li",[t._v("当运行到"),a("code",[t._v("var f = true")]),t._v(" 时,变量对象中的"),a("code",[t._v("f")]),t._v("的值将不在是"),a("code",[t._v("函数f")]),t._v(",将会变为"),a("code",[t._v("ture")]),t._v("。")]),t._v(" "),a("li",[t._v("当运行到"),a("code",[t._v("function f(){}")]),t._v(" 时,"),a("code",[t._v("函数f")]),t._v("并不会在影响变量对象了。")]),t._v(" "),a("li",[t._v("当运行到"),a("code",[t._v("var cf = function(){}")]),t._v(" 时,"),a("code",[t._v("cf")]),t._v("的值将不在是"),a("code",[t._v("undefined")]),t._v(",将会指向"),a("code",[t._v("函数")]),t._v("。")]),t._v(" "),a("li",[t._v("当运行到"),a("code",[t._v("b = 2;")]),t._v(" 时,会为全局对象添加"),a("code",[t._v("b")]),t._v("属性并赋值为"),a("code",[t._v("2")]),t._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 函数f")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="variable-object.md";s.default=e.exports}}]);