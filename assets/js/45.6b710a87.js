(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{368:function(t,s,a){"use strict";a.r(s);var n=a(1),c=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("我们在"),a("router-link",{attrs:{to:"/javascript/execution-contexts.html"}},[t._v("JavaScript之执行上下文")]),t._v("中已经讨论过"),a("code",[t._v("执行上下文")]),t._v("，并且提到在执行代码执行中，"),a("code",[t._v("执行上下文")]),t._v("会初始化三个很重要的对象("),a("code",[t._v("变量对象")]),t._v("、"),a("code",[t._v("作用域链")]),t._v("、"),a("code",[t._v("this")]),t._v(")，这里我们讲解其中"),a("code",[t._v("作用域链")]),t._v("。")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("在这里我们首先需要很确定的指明的是：")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("下面我们来了解一下词法作用域和动态作用域：")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("我们来看看下面的代码：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("我们再来看一个例子:")]),t._v(" "),t._m(7),t._m(8),t._m(9),t._v(" "),t._m(10),a("p",[t._v("打印结果如下图：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("函数分为两个声明周期：创建和激活。")]),t._v(" "),a("p",[t._v("我们来看下面简单的例子：")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),a("p",[t._v("此时fun的作用域链就会被创建好：")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),a("p",[t._v("此时作用域链就是这样：")]),t._v(" "),t._m(28),a("p",[t._v("关于作用域链的知识，就先汇总到这里。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript之作用域和作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript之作用域和作用域链","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript之作用域和作用域链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"词法作用域和动态作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域和动态作用域","aria-hidden":"true"}},[this._v("#")]),this._v(" 词法作用域和动态作用域")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("重要")]),this._v(" "),s("p",[s("code",[this._v("JavaScript")]),this._v("中的语法采用的是词法作用域（lexical scoping），也被称为静态作用域。词法作用域和动态作用域的概念并不是"),s("code",[this._v("JavaScript")]),this._v("所特有的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("code",[this._v("词法作用域")]),this._v("：词法作用域是在词法分析阶段就确定了，之后不会改变。比如在js中，函数在书写时就应经确定好了作用域。")])]),this._v(" "),s("li",[s("p",[s("code",[this._v("动态作用域")]),this._v("：动态作用域是在运行时根据程序的流程信息来动态确定的，而不是在写代码时进行静态确定的。比如在函数执行时才会确定好作用域。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"King"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Waring"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("上面"),a("code",[t._v("console.log(name)")]),t._v(" 打印的结果是"),a("code",[t._v("King")]),t._v(",而不是"),a("code",[t._v("Waring")]),t._v(",这很说明了在"),a("code",[t._v("JavaScript")]),t._v("中使用的是"),a("code",[t._v("词法作用域")]),t._v("。函数"),a("code",[t._v("fun")]),t._v("在创建时就应经确定了作用域，运行时不会再改变。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而假如JavaScript使用的动态作用域，那么上面"),s("code",[this._v("console.log(name)")]),this._v(" 打印的结果是"),s("code",[this._v("Waring")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"fun scope"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"fun scope"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面结果都会是"),s("code",[this._v("fun scope")]),this._v(", 这也是因为"),s("code",[this._v("JavaScript")]),this._v("使用的词法作用域的结果。我们可以打印一个函数，会看到它有一个"),s("code",[this._v("[[Scope]]")]),this._v("属性，该属存储着这个函数的父级的变量对象。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/img/scoep1.png",alt:"scope"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[this._v("#")]),this._v(" 作用域链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们知道了"),s("code",[this._v("JavaScript")]),this._v("中是使用的词法作用域来确定的作用域。在"),s("code",[this._v("JavaScript")]),this._v("中一个函数是可以访问到他父函数的作用域内的变量的。而这种访问机制就是通过作用域链来完成的。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"fun scope"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 可以访问fun函数内的变量")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("上面例子，当函数"),a("code",[t._v("f")]),t._v("中在查找变量"),a("code",[t._v("a")]),t._v("时，会先从函数"),a("code",[t._v("f")]),t._v("的活动对象中去查找，如果没有找到会向父级函数"),a("code",[t._v("fun")]),t._v("的活动对象中去查找"),a("code",[t._v("a")]),t._v("。如果还没有找到将会继续向上查找，查找全局对象中是否有变量"),a("code",[t._v("a")]),t._v("。这种层级的变量对象查找就形成了一条链就是作用域链。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数的生命周期")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1 "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" str2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面的例子我们在全局声明了变量"),s("code",[this._v("str1")]),this._v("，并创建了函数"),s("code",[this._v("fun")]),this._v("，在程序初始化时他们都将成为全局对象的属性（全局变量对象的属性，全局变量对象等于全局对象）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("函数"),s("code",[this._v("fun")]),this._v("在被创建时，就创建了作用域，也就是拥有了"),s("code",[this._v("[[Scope]]")]),this._v("属性，该属是父级的层级链，并存储了父级上下文中的变量对象")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 其他属性，对象，函数")]),t._v("\n  str1"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfun"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在函数"),s("code",[this._v("fun")]),this._v("激活时(执行时)，函数"),s("code",[this._v("fun")]),this._v("的活动对象会被创建")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  str2"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("scope")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scopes"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// fun函数的作用域链将会变成下面这样")]),t._v("\nfunContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scope "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("VO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("此时"),a("code",[t._v("fun")]),t._v("的活动对象将会放到作用域的最前端。这时函数"),a("code",[t._v("fun")]),t._v("中的代码开始执行，当代码执行到"),a("code",[t._v("str1 + str2")]),t._v(" 时，从"),a("code",[t._v("scope")]),t._v("中的最前端开始查找变量"),a("code",[t._v("str1")]),t._v(" 和 变量"),a("code",[t._v("str2")]),t._v("，如果找到将会拿到某个变量的值并停止查找，如果未找到，将通过作用域链继续向后去查找。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"影响作用域的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#影响作用域的代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 影响作用域的代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当使用"),s("code",[this._v("with")]),this._v("或"),s("code",[this._v("catch")]),this._v("时，会修改作用域链。他们会被添加到作用域链的最前端：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("with")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Scope "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("AO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("  obj "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);c.options.__file="scope-chain.md";s.default=c.exports}}]);