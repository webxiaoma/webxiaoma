(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{367:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),a("p",[t._v("关于更多"),a("code",[t._v("ES6 class")]),t._v("类的知识可以查看"),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 calss"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript之原型与原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript之原型与原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript之原型与原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("JavaScript")]),this._v(" 函数都有一个"),s("code",[this._v("prototype")]),this._v("对象（除ES6箭头函数），大部分对象都有一个"),s("code",[this._v("__proto__")]),this._v("原型链指针（原型链最末端的对象不存在）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[this._v("#")]),this._v(" 继承")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("JavaScript")]),this._v("中的继承和"),s("code",[this._v("Java")]),this._v("的继承实现是不一样的，在"),s("code",[this._v("JavaScript")]),this._v("中是通过原型和原型链来实现继承的。我们来看下面的例子：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("People")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nPeople"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("eating")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"没有食物"')]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用new创建一个对象")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xiaoMing "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("People")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"小明"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("24")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 现在 xiaoMing这个对象就有下面属性了")]),t._v("\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token comment"}},[t._v("// 小明")]),t._v("\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token comment"}},[t._v("//  24")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// xiaoMing同时也具有`eating` 方法了")]),t._v("\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("eating")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"屎"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以看到通过构造函数创建出来的"),s("code",[this._v("xiaoMing")]),this._v("对象继承了"),s("code",[this._v("People")]),this._v("的原型上的"),s("code",[this._v("eating")]),this._v("方法。下面我们来看看原型和原型链。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("JavaScript")]),this._v("中每一个函数都有一个属性"),s("code",[this._v("prototype")]),this._v("("),s("code",[this._v("ES6")]),this._v("中的箭头函数没有原型属性)，这个属性就是我们经常提及的原型。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 函数声明形式")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Object")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 函数表达式形式")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Object")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 箭头函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("a")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("既然原型是一个对象，那我们是可以在原型上添加方法和属性的。比如上面第一个例子中我们就在构造函数"),s("code",[this._v("People")]),this._v("的原型上添加了"),s("code",[this._v("eating")]),this._v("方法。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("People"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("eating")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"没有食物"')]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以打印出构造函数"),s("code",[this._v("People")]),this._v("的原型来看看")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("People")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nPeople"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("eating")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"没有食物"')]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("People"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * 结果如下：\n {\n    eating: ƒ (foods)\n    constructor: ƒ People(name,age)\n    __proto__: Object\n  \n  }  \n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们从原型"),s("code",[this._v("prototype")]),this._v("上可以看到我们定义的"),s("code",[this._v("eating")]),this._v("方法，也会看到一个"),s("code",[this._v("constructor")]),this._v("方法，这个方法指向的是我们构造函数本身")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("People"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" People  "),a("span",{attrs:{class:"token comment"}},[t._v("// true  ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们从原型"),s("code",[this._v("prototype")]),this._v("对象上还看到了一个属性"),s("code",[this._v("__proto__")]),this._v("(前后各两个下划线)，这个属性指向另一个对象的原型，下面我们来看看这个属性。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们知道了属性"),s("code",[this._v("__proto__")]),this._v("可以指向另一个对象的原型，从而继承另一个对象原型上的方法或属性。我们接着来看我们第一个例子。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("People")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nPeople"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("eating")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foods "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"没有食物"')]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foods"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xiaoMing "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("People")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"小明"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("24")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们打印出来"),a("code",[t._v("xiaoMing")]),t._v("这个对象之后，会发现这个对象包含"),a("code",[t._v("name")]),t._v("属性、"),a("code",[t._v("age")]),t._v("属性、还有"),a("code",[t._v("__proto__")]),t._v("，但是并没有原型"),a("code",[t._v("prototype")]),t._v(", 但是我们也同样可以在"),a("code",[t._v("xiaoMing")]),t._v("这个对象上使用"),a("code",[t._v("eating()")]),t._v("方法。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("xiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("eating")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"屎"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这里就是"),s("code",[this._v("__proto__")]),this._v("原型链起到了作用，"),s("code",[this._v("__proto__")]),this._v("指向了构造函数的原型，使得创建出来的"),s("code",[this._v("xiaoMing")]),this._v("这个对象继承了构造函数的原型。我们从下面判断中可以得知")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" People"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype  \n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("所以在"),a("code",[t._v("js")]),t._v("中有了原型链，我们很好的实现了继承。我们可以用下面这个图来表示，构造函数函数（"),a("code",[t._v("People")]),t._v("）、构造函数的原型("),a("code",[t._v("People.prototype")]),t._v(")，对象("),a("code",[t._v("xiaoMing")]),t._v(")、 原型链("),a("code",[t._v("__proto__")]),t._v("):")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/img/prototype1.png",alt:"js prototype"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们很清楚的看到"),a("code",[t._v("js")]),t._v("的中的继承, 正是因为"),a("code",[t._v("js")]),t._v("的继承关系，当我们在访问"),a("code",[t._v("xiaoMing.eating()")]),t._v("方法时，在"),a("code",[t._v("xiaoMing")]),t._v("对象上没有找到，"),a("code",[t._v("js")]),t._v("会通过原型链"),a("code",[t._v("__proto__")]),t._v("去查找，直到找到原型链的最末端"),a("code",[t._v("Object.prototype")]),t._v("对象上为止，如果还没有找到该方法，就会返回"),a("code",[t._v("undefined")]),t._v("。上面例子中"),a("code",[t._v("xiaoMing.__proto__")]),t._v("指向的是构造函数的原型"),a("code",[t._v("People.prototype")]),t._v(", 那么构造函数上也存在"),a("code",[t._v("__proto__")]),t._v(", 并指向最终的对象"),a("code",[t._v("Object.prototype")]),t._v("，在该对象("),a("code",[t._v("Object.prototype")]),t._v(")上就不再有"),a("code",[t._v("__proto__")]),t._v("了，因为该"),a("code",[t._v("对象")]),t._v("已经是原型链的最末端对象了，"),a("code",[t._v("js")]),t._v("中几乎所有的函数和对象都继承自该对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("另外"),s("code",[this._v("js")]),this._v("中还提供了一些很有用的的方法：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("code",[this._v("hasOwnProperty")]),this._v(" 该方法可以判断属性是自己本身属性还是由原型链继承来的属性。（该方法位于"),s("code",[this._v("Object.prototype")]),this._v("对象上）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 还以上面的方法为例")]),t._v("\n\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"name"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nxiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"eacting"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[s("code",[this._v("isPrototypeOf")]),this._v(" 检测一个对象是否是另一个对象的原型")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isPrototypeOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nPeople"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isPrototypeOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xiaoMing"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[s("code",[this._v("instanceof")]),this._v(" 运算符左操作数是一个对象，右操作数标识对象的类。如果左侧对象是右侧类的实例，则表达式返回为"),s("code",[this._v("true")]),this._v("，否则返回"),s("code",[this._v("false")]),this._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 对象xiaoMing 是People的实例")]),t._v("\nxiaoMing "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("People")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// ture")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"修改原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在创建对象时，可以使用"),s("code",[this._v("Object.create()")]),this._v("来创建对象，并设置原型链的指针"),s("code",[this._v("__proto__")]),this._v("指向。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"King"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" createObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncreateObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Obj "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es6继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6继承","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6继承")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("ES6")]),this._v("中可以通过"),s("code",[this._v("class")]),this._v("来声明类了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("class")]),this._v(" "),s("span",{attrs:{class:"token class-name"}},[this._v("fun")]),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n"),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("并且通过"),s("code",[this._v("class")]),this._v("声明的类就是一个函数，它是构造函数的一个语法糖，并且通过class声明的类中既包含"),s("code",[this._v("prototype")]),this._v("属性也包含"),s("code",[this._v("__proto__")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("typeof")]),this._v(" fun "),s("span",{attrs:{class:"token comment"}},[this._v("// function")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在"),a("code",[t._v("ES6")]),t._v("中实现继承可以使用"),a("code",[t._v("extends")]),t._v("关键字。因为类既包含"),a("code",[t._v("prototype")]),t._v("属性也包含"),a("code",[t._v("__proto__")]),t._v("所以它有两条继承链")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("子类的"),a("code",[t._v("__proto__")]),t._v("属性，表示构造函数的继承，总是指向父类。")])]),t._v(" "),a("li",[a("p",[t._v("子类"),a("code",[t._v("prototype")]),t._v("属性的"),a("code",[t._v("__proto__")]),t._v("属性，表示方法的继承，总是指向父类的"),a("code",[t._v("prototype")]),t._v("属性。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("NewFun")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nNewFun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Fun  "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nNewFun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__  "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nNewFun"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" NewFun "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="prototype-proto.md";s.default=e.exports}}]);