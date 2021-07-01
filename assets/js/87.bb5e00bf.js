(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{607:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-基础类型和引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-基础类型和引用类型"}},[t._v("#")]),t._v(" JS-基础类型和引用类型")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#前言"}},[t._v("前言")])]),a("li",[a("a",{attrs:{href:"#基础数据类型"}},[t._v("基础数据类型")])]),a("li",[a("a",{attrs:{href:"#引用数据类型"}},[t._v("引用数据类型")])])])]),a("p"),t._v(" "),a("p",[t._v("🐴")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("我们都知道在"),a("code",[t._v("JavaScript")]),t._v("中有六种数据类型"),a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("Blooean")]),t._v("、"),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Undefined")]),t._v("、"),a("code",[t._v("Null")]),t._v("，还有一种复杂的数据类型"),a("code",[t._v("Object")]),t._v("（"),a("code",[t._v("Array")]),t._v("是一种特殊的"),a("code",[t._v("Object")]),t._v("），另外在"),a("code",[t._v("ES6")]),t._v("中新增加一种"),a("code",[t._v("Symbol")]),t._v("数据类型，表示独一无二的值。此外我们还可以将它们分为基础类型和引用类型，这是从它们存储数据的方式来区分的。")]),t._v(" "),a("h2",{attrs:{id:"基础数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础数据类型"}},[t._v("#")]),t._v(" 基础数据类型")]),t._v(" "),a("p",[t._v("基础数据类型的值是不可以改变的，我们常见的数据类型中,如 "),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("undefined")]),t._v("、"),a("code",[t._v("null")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("，都是基本数据类型，基本数据类型的变量是存放在栈区的（栈区指内存里的栈内存），一经设置就不会被修改。此外基本数据类型的比较时，比较的是数据类型，我们来看下面例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"老王"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "hello world"  str字符串并未被改变')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"hello 老王"  返回了一个新字符串')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数据类型的比较")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true 比较的是数据类型")]),t._v("\n")])])]),a("p",[t._v("字符串"),a("code",[t._v("str")]),t._v(" 和 "),a("code",[t._v("newStr")]),t._v(" 用内存图展示如下：")]),t._v(" "),a("images",{attrs:{src:"/web/js/this-1.png"}}),t._v(" "),a("p",[t._v("上面的例子，通过"),a("code",[t._v("replace")]),t._v("方法替换"),a("code",[t._v("world")]),t._v("后，并没有修改"),a("code",[t._v("str")]),t._v("本身，因为我们打印"),a("code",[t._v("str")]),t._v("时，输出还是"),a("code",[t._v('"hello world"')]),t._v(", 通过"),a("code",[t._v("replace")]),t._v("方法替换"),a("code",[t._v("world")]),t._v("后而是返回了一个新的字符串。")]),t._v(" "),a("h2",{attrs:{id:"引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[t._v("#")]),t._v(" 引用数据类型")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("JavaScript")]),t._v("中常见的引用数据类型就是对象了（包括数组）。引用类型的值是同时保存在栈内存和堆内存(数据保存在堆内存中)中的对象，并且引用类型的值在比较时，比较的是内存地址是否相同。我们来看下面的例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一种情况")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'King'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnewObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 50 obj 中的age被改变了")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数据类型的比较")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false 比较的是内存地址")]),t._v("\n")])])]),a("p",[t._v("对象"),a("code",[t._v("obj")]),t._v(" 和 "),a("code",[t._v("newObj")]),t._v(" 用内存图展示如下：")]),t._v(" "),a("images",{attrs:{src:"/web/js/this2.png"}}),t._v(" "),a("p",[t._v("上面提到的将"),a("code",[t._v("obj")]),t._v("赋值给"),a("code",[t._v("newObj")]),t._v("对象后，"),a("code",[t._v("obj")]),t._v("和"),a("code",[t._v("newObj")]),t._v("都是引用数据类型，他们的内存地址指向同一个对象，当"),a("code",[t._v("obj")]),t._v("和"),a("code",[t._v("newObj")]),t._v("对象中某一个属性发生变化时，都会影响对应的对象。")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);