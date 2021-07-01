(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{607:function(t,s,n){"use strict";n.r(s);var a=n(24),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"js-执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-执行上下文"}},[t._v("#")]),t._v(" JS-执行上下文")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#生命周期"}},[t._v("生命周期")]),n("ul",[n("li",[n("a",{attrs:{href:"#创建阶段"}},[t._v("创建阶段")])]),n("li",[n("a",{attrs:{href:"#执行阶段"}},[t._v("执行阶段")])])])]),n("li",[n("a",{attrs:{href:"#可执行代码类型"}},[t._v("可执行代码类型")])]),n("li",[n("a",{attrs:{href:"#执行上下文栈"}},[t._v("执行上下文栈")]),n("ul",[n("li",[n("a",{attrs:{href:"#全局执行代码"}},[t._v("全局执行代码")])]),n("li",[n("a",{attrs:{href:"#函数执行代码"}},[t._v("函数执行代码")])])])]),n("li",[n("a",{attrs:{href:"#执行上下文中三个对象"}},[t._v("执行上下文中三个对象")])])])]),n("p"),t._v(" "),n("p",[t._v("🐴")]),t._v(" "),n("h2",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("ECMAScript")]),t._v(" 中当进入可执行代码（executable code）时，会进入一个叫做执行上下文（Execution context ）的环境。在该环境中为代码的执行做了一些前期准备。执行上下文主要分为"),n("code",[t._v("创建阶段")]),t._v(" 和 "),n("code",[t._v("执行阶段")]),t._v(" 两个阶段")]),t._v(" "),n("h3",{attrs:{id:"创建阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),n("p",[t._v("在创建阶段主要做了")]),t._v(" "),n("ul",[n("li",[t._v("生成变量对象 （创建"),n("code",[t._v("arguments")]),t._v(", 检索函数声明，检索变量声明）")]),t._v(" "),n("li",[t._v("建立作用域链")]),t._v(" "),n("li",[t._v("确定"),n("code",[t._v("this")]),t._v("的指向")])]),t._v(" "),n("h3",{attrs:{id:"执行阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),n("p",[t._v("在执行阶段主要做了")]),t._v(" "),n("ul",[n("li",[t._v("变量赋值")]),t._v(" "),n("li",[t._v("函数的引用")]),t._v(" "),n("li",[t._v("执行其它代码")])]),t._v(" "),n("images",{attrs:{src:"/web/js/context1.jpg",width:"700"}}),t._v(" "),n("h2",{attrs:{id:"可执行代码类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可执行代码类型"}},[t._v("#")]),t._v(" 可执行代码类型")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("javascript")]),t._v("中可执行代码有三种：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("全局代码")])]),t._v(" "),n("li",[n("code",[t._v("函数代码")])]),t._v(" "),n("li",[n("code",[t._v("evel")]),t._v("代码")])]),t._v(" "),n("p",[t._v("当js引擎遇到这些代码时，就会创建一个执行上下文，并为这些代码的执行做一些前期的准备工作，比如 变量提升，函数提升，"),n("code",[t._v("this")]),t._v("确定等等，这些我们会在后面的文章中去介绍。")]),t._v(" "),n("h2",{attrs:{id:"执行上下文栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[t._v("#")]),t._v(" 执行上下文栈")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("javascript")]),t._v("可执行的代码会有很多，那么所产生的执行上下文相应的也会有很多，而"),n("code",[t._v("js")]),t._v("是则会通过"),n("code",[t._v("执行上下文栈（Execution context stack）")]),t._v(" 来管理这些"),n("code",[t._v("执行上下文")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"全局执行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局执行代码"}},[t._v("#")]),t._v(" 全局执行代码")]),t._v(" "),n("p",[t._v("我们可以将执行上下文栈当做一个数组来看，并且全局代码中的执行上下文永远会在执行上下文栈的最底部：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行上下文栈")]),t._v("\n   globalContext  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h3",{attrs:{id:"函数执行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数执行代码"}},[t._v("#")]),t._v(" 函数执行代码")]),t._v(" "),n("p",[t._v("当"),n("code",[t._v("javascript")]),t._v("遇到函数执行的代码时，也会创建一个执行上下文并推入执行上下文的堆栈中, 并将当前指针执行推入的执行上下文")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"执行"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行时才会创建执行上下文")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" functionContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ECStack 将变成下面这样")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" functionContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" pointer\n   globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("上面例子当函数"),n("code",[t._v("fun")]),t._v("内部遇到 "),n("code",[t._v("return")]),t._v(" 或执行结束后, 执行上下文栈中将会清楚"),n("code",[t._v("fun")]),t._v("函数的执行上下文，并将指针指向下面的执行上下文"),n("code",[t._v("globalContext")])]),t._v(" "),n("p",[t._v("我们在来看下面这个例子")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 案例一")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 案例二")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 案例三")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newFun "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("我们现在来分析一下这几个例子中执行上下文是如何放入执行上下问栈中的。")]),t._v(" "),n("p",[n("strong",[t._v("案例一：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在fun函数中的f() 执行时")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun执行上下文")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数f执行完成后")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数fun执行完成后")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[n("strong",[t._v("案例二：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun函数执行完成后返回了函数f并执行函数f")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数f执行完成后")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[n("strong",[t._v("案例三：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newFun "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFun")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入全局代码环境时")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   globalContext  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun 函数执行时")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" funContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun函数执行完成后返回了函数f并赋值给了newFun函数")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ECStack ")]),t._v("\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f执行上下文")]),t._v("\n     globalContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数newFun执行完成后")]),t._v("\nECStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newFun"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" newFunContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n当全局代码执行完成后，执行上下文栈中将是空的。\nECStack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h2",{attrs:{id:"执行上下文中三个对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文中三个对象"}},[t._v("#")]),t._v(" 执行上下文中三个对象")]),t._v(" "),n("p",[t._v("上面我们说了在JavaScript执行一段可执行的代码时会创建一个执行上下文，为代码的执行做一些前期准备。这个执行上下文具有三个很重要的对象：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/web/js/js-variable"}},[t._v("变量对象(Variable object，VO)")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/web/js/js-scope-chain"}},[t._v("作用域链(Scope chain)")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/web/js/js-this1"}},[t._v("this 对象")])])]),t._v(" "),n("p",[t._v("关于这三个对象在接下来的文章中我们去详细的讨论。")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("参考文章")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#javascript_%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 执行上下文"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行上下文"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/72959191",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解JavaScript的执行上下文"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/6f8556b10379",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 执行上下文"),n("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);