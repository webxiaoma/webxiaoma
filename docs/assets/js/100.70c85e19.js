(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{624:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript之面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript之面向对象"}},[t._v("#")]),t._v(" JavaScript之面向对象")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#概念"}},[t._v("概念")])]),a("li",[a("a",{attrs:{href:"#创建对象的方法"}},[t._v("创建对象的方法")]),a("ul",[a("li",[a("a",{attrs:{href:"#对象字面量"}},[t._v("对象字面量")])]),a("li",[a("a",{attrs:{href:"#new实例化对象"}},[t._v("New实例化对象")])]),a("li",[a("a",{attrs:{href:"#object-creat"}},[t._v("Object.creat()")])])])]),a("li",[a("a",{attrs:{href:"#原型和原型链"}},[t._v("原型和原型链")])])])]),a("p"),t._v(" "),a("p",[t._v("🐴")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("面向对象（"),a("code",[t._v("Object-oriented, OO")]),t._v("）的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。在"),a("code",[t._v("ES5")]),t._v("中是没有类的概念，但是"),a("code",[t._v("ES6")]),t._v("中有类的概念。")]),t._v(" "),a("p",[t._v("在js中的对象是无序属性集合，属性可以包含基本值、对象、或者函数，并以名值形式存在。")]),t._v(" "),a("h2",{attrs:{id:"创建对象的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的方法"}},[t._v("#")]),t._v(" 创建对象的方法")]),t._v(" "),a("h3",{attrs:{id:"对象字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量"}},[t._v("#")]),t._v(" 对象字面量")]),t._v(" "),a("p",[t._v("这种中创建对象的方式是我们经常用到的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建了一个动物")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'猫'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名字叫猫 （属性值是字符串）")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 颜色白色 （属性值是字符串）")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 年龄 3 岁 （属性值是数字）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("eat")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会吃老鼠 （属性值是函数）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'老鼠'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一般我们将属性值为函数的叫做该对象的方法，比如上面猫会吃老鼠"),a("code",[t._v("eat")]),t._v(" 就是它的方法。")]),t._v(" "),a("h3",{attrs:{id:"new实例化对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new实例化对象"}},[t._v("#")]),t._v(" New实例化对象")]),t._v(" "),a("ul",[a("li",[t._v("内置构造函数，通过"),a("code",[t._v("new")]),t._v("操作符实例化为对象")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上边这些js内置的构造函数也是js的对象。")]),t._v(" "),a("ul",[a("li",[t._v("自定义构造函数,并实例化为对象")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("eat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"屎"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Dog1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"旺旺"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Dog2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"仔仔"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nDog1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "旺旺"')]),t._v("\nDog2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "仔仔"')]),t._v("\n")])])]),a("p",[t._v("上面"),a("code",[t._v("Dog1")]),t._v("和"),a("code",[t._v("Dog2")]),t._v("就是我们自己写的实例化对象，这两个对象互不影响，这里可以这么理解函数"),a("code",[t._v("Dog")]),t._v(" 指的是颜色为黑色，年龄为4，会吃翔的狗，而这类狗有很多个，下边我们使用"),a("code",[t._v("new")]),t._v(" 创建出来的构造函数（对象）就相当于具体是哪只狗,"),a("code",[t._v("Dog1")]),t._v('是老李家的叫"旺旺"，'),a("code",[t._v("Dog2")]),t._v('是老王家的叫"仔仔",比如老李将他家的狗颜色染成了白色，老王家的狗颜色是不会受影响的，就像下面代码')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Dog1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"white"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dog1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'white'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dog2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'black'")]),t._v("\n")])])]),a("h3",{attrs:{id:"object-creat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-creat"}},[t._v("#")]),t._v(" Object.creat()")]),t._v(" "),a("p",[t._v("第三种方式就是使用 "),a("code",[t._v("Object.creat()")]),t._v(" 去创建对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" emptryObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个空对象")]),t._v("\n")])])]),a("p",[t._v("上边我们创建了一个空对象，该空对象和上边的字面量对象"),a("code",[t._v("{}")]),t._v(" 是不同的，"),a("code",[t._v("Object.create(null)")]),t._v(" 创建的空对象没有任何属性也没有原型链。而字面量对象"),a("code",[t._v("{}")]),t._v("是存在原型"),a("code",[t._v("prototype")]),t._v("的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"玛莎拉蒂"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Car "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个以obj对象为原型的对象")]),t._v("\n \n Car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "玛莎拉蒂"')]),t._v("\n")])])]),a("p",[t._v("上边创建的Car 对象它继承obj，也就Car原型链指向的是obj。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("Object.creat()")]),t._v(" 它还有第二个参数，第二个参数是一个对象，来定义属性的特性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Car "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义属性name 的特性")]),t._v("\n        writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可写入,false 为不能修改name")]),t._v("\n        configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可配置，true为可以配置")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"玛莎拉蒂"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给name属性附值")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "玛莎拉蒂"')]),t._v("\nCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'red'")]),t._v("\n\nCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"宝马"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name值不会被改变")]),t._v("\nCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// color值改变了")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "玛莎拉蒂" ')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'black'")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("Object.creat()")]),t._v(" 创建出来的对象，原型链指向"),a("code",[t._v("Object.creat()")]),t._v("中的第一个参数，如果第一个参数是"),a("code",[t._v("null")]),t._v(",那么就会创建一个空对象（没有原型链），而 "),a("code",[t._v("new Object()")]),t._v("创建的对象，是存在原型链的，并且它的原型链默认指向"),a("code",[t._v("Object")])])]),t._v(" "),a("h2",{attrs:{id:"原型和原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),a("p",[t._v("首先es5 中不包含传统类继承模型的，而是使用 "),a("code",[t._v("prototype")]),t._v("原型模型。js很多对象是有原型"),a("code",[t._v("prototype")]),t._v(",当然也有一些对象不存在原型，例如："),a("code",[t._v("Object.prototype")]),t._v(" 和 "),a("code",[t._v("Object.create(null)")]),t._v("以及使用 "),a("code",[t._v("new")]),t._v(" 创建的构造函数。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原型（"),a("code",[t._v("prototype")]),t._v("）:在javaScript中，每当定义一个对象（个别对象不含有原型）时候，对象中都会包含一些预定义的属性，其中每个函数对象都有一个"),a("code",[t._v("prototype")]),t._v("属性，这个属性指的就是它的原型对象。")])]),t._v(" "),a("li",[a("p",[t._v("原型链（"),a("code",[t._v("__proto__")]),t._v("）:当一个对象需要引用一个属性时，js引擎首先会从这个对象自身的属性表中寻找这个属性标识，如果找到则进行相应读写操作，若没有找到，就在"),a("code",[t._v("__proto__")]),t._v("属性引用的对象的属性表中查找，如此查找，直到找到这个属性或者"),a("code",[t._v("__proto__")]),t._v("属性指向为 "),a("code",[t._v("null")]),t._v("，就会停止查找，属性返回"),a("code",[t._v("undefind")]),t._v("，这个"),a("code",[t._v("__proto__")]),t._v("引用链就被称为原型链。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);