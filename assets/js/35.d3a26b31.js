(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{390:function(t,n,s){"use strict";s.r(n);var a=s(1),o=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("我们可以将执行上下文栈当做一个数组来看，并且全局代码中的执行上下文永远会在执行上下文栈的最底部：")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("我们在来看下面这个例子")]),t._v(" "),t._m(12),s("p",[t._v("我们现在来分析一下这几个例子中执行上下文是如何放入执行上下问栈中的。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("上面我们说了在JavaScript执行一段可执行的代码时会创建一个执行上下文，为代码的执行做一些前期准备。这个执行上下文具有三个很重要的对象：")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("关于这三个对象在接下来的文章中我们去详细的讨论。")]),t._v(" "),s("p",[t._v("关于执行上下文的知识目前先整理到这里。")]),t._v(" "),t._m(21),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行上下文"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"javascript之执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript之执行上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript之执行上下文")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在"),n("code",[this._v("ECMAScript")]),this._v(" 中当进入可执行代码（executable code）时，会进入一个叫做执行上下文（Execution context ）的环境。在该环境中为代码的执行做了一些前期准备。在"),n("code",[this._v("js")]),this._v("中可执行代码有哪些呢?")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"可执行代码类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可执行代码类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 可执行代码类型")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("在"),s("code",[t._v("javascript")]),t._v("中可执行代码有三种"),s("code",[t._v("全局代码")]),t._v("，"),s("code",[t._v("函数代码")]),t._v("，"),s("code",[t._v("evel")]),t._v("代码。 当js引擎遇到这些代码时，就会创建一个执行上下文，并为这些代码的执行做一些前期的准备工作，比如 变量提升，函数提升，"),s("code",[t._v("this")]),t._v("确定等等，这些我们会在后面的文章中去介绍。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"执行上下文栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文栈")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在"),n("code",[this._v("javascript")]),this._v("可执行的代码会有很多，那么所产生的执行上下文相应的也会有很多，而"),n("code",[this._v("js")]),this._v("是则会通过**执行上下文栈（Execution context stack）**来管理这些"),n("code",[this._v("执行上下文")]),this._v("。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"全局执行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局执行代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局执行代码")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 执行上下文栈")]),t._v("\n   globalContext  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"函数执行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数执行代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数执行代码")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("当"),n("code",[this._v("javascript")]),this._v("遇到函数执行的代码时，也会创建一个执行上下文并推入执行上下文的堆栈中, 并将当前指针执行推入的执行上下文")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"执行"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 执行时才会创建执行上下文")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" functionContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// ECStack 将变成下面这样")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n   "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" functionContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" pointer\n   globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("上面例子当函数"),s("code",[t._v("fun")]),t._v("内部遇到 "),s("code",[t._v("return")]),t._v(" 或执行结束后, 执行上下文栈中将会清楚"),s("code",[t._v("fun")]),t._v("函数的执行上下文，并将指针指向下面的执行上下文"),s("code",[t._v("globalContext")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 案例一")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 案例二")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 案例三")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newFun "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("newFun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("案例一：")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 在fun函数中的f() 执行时")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContex"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// fun执行上下文")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 函数f执行完成后")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 函数fun执行完成后")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("案例二：")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fun函数执行完成后返回了函数f并执行函数f")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 函数f执行完成后")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("案例三：")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("f")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newFun "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("newFun")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fun函数执行完成后返回了函数f并赋值给了newFun函数")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     globalContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 函数newFun执行完成后")]),t._v("\nECStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("pop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[n("a",{attrs:{href:""}},[this._v("变量对象(Variable object，VO)")])]),this._v(" "),n("li",[n("a",{attrs:{href:""}},[this._v("作用域链(Scope chain)")])]),this._v(" "),n("li",[n("a",{attrs:{href:""}},[this._v("this 对象")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("参考文章")])])}],!1,null,null,null);o.options.__file="execution-contexts.md";n.default=o.exports}}]);