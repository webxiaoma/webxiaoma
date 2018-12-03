(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{366:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("来自"),s("a",{attrs:{href:"http://javascript.ruanyifeng.com/stdlib/arraybuffer.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript 标准参考教程（alpha）》"),s("OutboundLink")],1),t._v("，by 阮一峰")]),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("p",[t._v("上面代码对同一段内存，分别建立两种视图：32位带符号整数（Int32Array构造函数）和8位不带符号整数（Uint8Array构造函数）。由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("目前，TypedArray对象一共提供9种类型的视图，每一种视图都是一种构造函数。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("buffer为底层ArrayBuffer,byteOffset为开始字节序号默认为0，length为长度默认直到本段内存区域结束")]),t._v(" "),t._m(24),s("p",[t._v("需要注意的是：byteOffset必须与所要建立的数据类型一致（也就是创建的内存数据字节数要是其视图规定的整数倍），否则会报错")]),t._v(" "),t._m(25),t._v(" "),t._m(26),s("p",[t._v("TypedArray数组也可以转换回普通数组")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("这一系列get方法的参数都是一个字节序号（不能是负数，否则会报错），表示从哪个字节开始读取。")]),t._v(" "),t._m(39),t._m(40),t._v(" "),s("p",[t._v("如果一次读取两个或两个以上字节，就必须明确数据的存储方式，到底是小端字节序还是大端字节序。默认情况下，DataView的get方法使用大端字节序解读数据，如果需要使用小端字节序解读，必须在get方法的第二个参数指定true。")]),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"arraybuffer处理二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer处理二进制","aria-hidden":"true"}},[this._v("#")]),this._v(" ArrayBuffer处理二进制")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("ArrayBuffer")]),t._v("对象、T"),s("code",[t._v("ypedArray")]),t._v("对象、"),s("code",[t._v("DataView")]),t._v("对象是"),s("code",[t._v("JavaScript")]),t._v("操作二进制数据的一个接口。这些对象早就存在，属于独立的规格，ES6将它们纳入了ECMAScript规格，并且增加了新的方法。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("首先，这个 "),s("code",[t._v("ArrayBuffer")]),t._v(" 类型化数组，类型化   数组是"),s("code",[t._v("JavaScript")]),t._v("操作二进制数据的一个接口。最初为了满足"),s("code",[t._v("JavaScript")]),t._v("与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。"),s("code",[t._v("Arraybuffer")]),t._v("就是一片内存空间，不能直接引用里面的数据，用户只能通过"),s("code",[t._v("typedarray")]),t._v("类型和"),s("code",[t._v("dataView")]),t._v("类型引用。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("p",[s("code",[t._v("ArrayBuffer")]),t._v("对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("TypedArray")]),t._v("对象：用来生成内存的视图，通过9个构造函数，可以生成9种数据格式的视图，比如"),s("code",[t._v("Uint8Array")]),t._v("（无符号8位整数）数组视图, Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("DataView")]),t._v("对象：用来生成内存的视图，可以自定义格式和字节序，比如第一个字节是"),s("code",[t._v("Uint8")]),t._v("（无符号8位整数）、第二个字节是Int16（16位整数）、第三个字节是Float32（32位浮点数）等等。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("简单说，"),s("code",[t._v("ArrayBuffer")]),t._v("对象代表原始的二进制数据，"),s("code",[t._v("TypedArray")]),t._v("对象代表确定类型的二进制数据，"),s("code",[t._v("DataView")]),t._v("对象代表不确定类型的二进制数据。它们支持的数据类型一共有9种（"),s("code",[t._v("DataView")]),t._v("对象支持除"),s("code",[t._v("Uint8C")]),t._v("以外的其他8种）。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"arraybuffer对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer对象","aria-hidden":"true"}},[this._v("#")]),this._v(" "),a("code",[this._v("ArrayBuffer")]),this._v("对象")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("ArrayBuffer")]),this._v("对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（"),a("code",[this._v("T")]),this._v("ypedArray"),a("code",[this._v("视图和")]),this._v("DataView`视图)来读写，视图的作用是以指定格式解读二进制数据。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("创建 "),a("code",[this._v("ArrayBuffer")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 生成了一个32字节的内存区域，每个字节默认为0")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("读取 "),a("code",[this._v("ArrayBuffer")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("读取"),a("code",[this._v("ArrayBuffer")]),this._v(" 我们上边提了有两种方式：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("第一种方式通过 "),a("code",[this._v("DataView")]),this._v(" 视图读取")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dataView "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DataView")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndataView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUnt8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 建立DataView视图，然后以不带符号的8位整数格式，读取第一个元素")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("第二种方式通过 "),a("code",[this._v("TypeArray")]),this._v(" 视图,与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" int32 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uint8 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Uint8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int32"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 还可以直接修改")]),t._v("\nint32"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int32"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[a("code",[this._v("ArrayBuffer")]),this._v("的其它属性方法")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[a("code",[this._v("ArrayBuffer.prototype.byteLength")]),this._v(" 返回所分配的内存区域的字节长度。\n"),a("code",[this._v("ArrayBuffer.prototype.slice(start,len)")]),this._v(" 允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象,并返回，start 为开始看吧的位置，len为拷贝长度\n"),a("code",[this._v("ArrayBuffer.isView()")]),this._v(" 返回一个布尔值，表示参数是否为ArrayBuffer的视图实例(也就是是否为是否为TypedArray实例或DataView实例)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"typedarray对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedarray对象","aria-hidden":"true"}},[this._v("#")]),this._v(" "),a("code",[this._v("TypedArray对象")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("ArrayBuffer")]),t._v("对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。"),s("code",[t._v("ArrayBuffer")]),t._v("有两种视图，一种是"),s("code",[t._v("TypedArray")]),t._v("视图，另一种是"),s("code",[t._v("DataView")]),t._v("视图，两者的区别主要是字节序，前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[a("code",[this._v("TypedArray对象")]),this._v("提供的视图")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("视图函数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Int8Array")]),t._v(" "),s("td",[t._v("8位有符号整数，长度1个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Uint8Array")]),t._v(" "),s("td",[t._v("8位无符号整数，长度1个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Uint8ClampedArray")]),t._v(" "),s("td",[t._v("位无符号整数，长度1个字节，溢出处理不同")])]),t._v(" "),s("tr",[s("td",[t._v("Int16Array")]),t._v(" "),s("td",[t._v("16位有符号整数，长度2个字")])]),t._v(" "),s("tr",[s("td",[t._v("Uint16Array")]),t._v(" "),s("td",[t._v("16位无符号整数，长度2个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Int32Array")]),t._v(" "),s("td",[t._v("32位有符号整数，长度4个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Uint32Array")]),t._v(" "),s("td",[t._v("32位无符号整数，长度4个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Float32Array")]),t._v(" "),s("td",[t._v("32位浮点数，长度4个字节")])]),t._v(" "),s("tr",[s("td",[t._v("Float64Array")]),t._v(" "),s("td",[t._v("64位浮点数，长度8个字节")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("这9个构造函数生成的对象，统称为"),a("code",[this._v("TypedArray")]),this._v("对象。它们很像正常数组，都有length属性，都能用方括号运算符（[]）获取单个元素，所有数组的方法，在类型化数组上面都能使用。两者的差异主要在以下方面。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("TypedArray")]),t._v("数组的所有成员，都是同一种类型和格式。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray")]),t._v("数组的成员是连续的，不会有空位。")]),t._v(" "),s("li",[s("code",[t._v("Typed")]),t._v("化数组成员的默认值为0。比如，"),s("code",[t._v("new Array(10)")]),t._v("返回一个正常数组，里面没有任何成员，只是10个空位；"),s("code",[t._v("new Uint8Array(10)")]),t._v("返回一个类型化数组，里面10个成员都是0。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray")]),t._v("数组只是一层视图，本身不储存数据，它的数据都储存在底层的"),s("code",[t._v("ArrayBuffer")]),t._v("对象之中，要获取底层对象必须使用buffer属性。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("TypedArray")]),t._v(" 提供的9中构造函数的用法")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[a("code",[this._v("TypedArray(buffer, byteOffset=0, length?)")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建一个8字节的ArrayBuffer")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedAry1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("//创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedAry2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Uin8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 创建一个指向b的Int16视图，开始于字节2，长度为2")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedAry2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int16Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[a("code",[this._v("TypedArray(ArrayObj)")]),this._v(" 视图还可以不通过ArrayBuffer对象，直接分配内存而生成")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 直接写长度，创建一个有八个成员的 32位有符号整数数组（共32个字节）")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedAry1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 类型化数组的构造函数，可以接受另一个视图实例作为参数。")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedArray2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Uint8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 构造函数的参数也可以是一个普通数组，然后直接生成TypedArray实例。")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" typedArray3 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Uint8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" normalArray "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("call")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("typedArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("TypedArray 的其它方法与属性")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("-"),a("code",[this._v("TypedArray.prototype.buffer")]),this._v(" 返回整段内存区域对应的`ArrayBuffer对象。该属性为只读属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("TypedArray.prototype.byteLength")]),t._v(" byteLength属性返回"),s("code",[t._v("TypedArray")]),t._v("数组占据的内存长度，单位为字节(只读)")]),t._v(" "),s("li",[s("code",[t._v("ypedArray.prototype.byteOffset")]),t._v(" byteOffset属性返回"),s("code",[t._v("TypedArray")]),t._v("数组从底层"),s("code",[t._v("ArrayBuffer")]),t._v("对象的哪个字节开始(只读)")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.prototype.length")]),t._v("  length属性表示"),s("code",[t._v("TypedArray")]),t._v("数组含有多少个成员。注意将"),s("code",[t._v("byteLength")]),t._v("属性和length属性区分，前者是字节长度，后者是成员长度。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.prototype.set()")]),t._v(" TypedArray数组的set方法用于复制数组（正常数组或TypedArray数组），也就是将一段内容完全复制到另一段内存。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.prototype.subarray(start,end)")]),t._v(" subarray方法是对于"),s("code",[t._v("TypedArray")]),t._v("数组的一部分，再建立一个新的视图。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.prototype.slice()")]),t._v("  TypeArray实例的"),s("code",[t._v("slice")]),t._v("方法，可以返回一个指定位置的新的"),s("code",[t._v("TypedArray")]),t._v("实例。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.of()")]),t._v(" ypedArray数组的所有构造函数，都有一个静态方法of，用于将参数转为一个"),s("code",[t._v("TypedArray")]),t._v("实例。")]),t._v(" "),s("li",[s("code",[t._v("TypedArray.from()")]),t._v(" 静态方法from接受一个可遍历的数据结构（比如数组）作为参数，返回一个基于这个结构的TypedArray实例。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dataview对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataview对象","aria-hidden":"true"}},[this._v("#")]),this._v(" "),a("code",[this._v("DataView对象")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如果一段数据包括多种类型（比如服务器传来的HTTP数据），这时除了建立"),a("code",[this._v("ArrayBuffer")]),this._v("对象的复合视图以外，还可以通过"),a("code",[this._v("DataView")]),this._v("视图进行操作。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("DataView")]),t._v("视图提供更多操作选项，而且支持设定字节序。本来，在设计目的上，"),s("code",[t._v("ArrayBuffer")]),t._v("对"),s("code",[t._v("象的各种")]),t._v("TypedArray"),s("code",[t._v("视图，是用来向网卡、声卡之类的本机设备传送数据，所以使用本机的字节序就可以了；而")]),t._v("DataView`视图的设计目的，是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("DataView")]),this._v("视图本身也是构造函数，接受一个"),a("code",[this._v("ArrayBuffer")]),this._v("对象作为参数，生成视图。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("1. 使用方法")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buffer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dv "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("DataView")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("2.DataView实例提供8个方法读取内存。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("getInt8")]),t._v("：读取1个字节，返回一个8位整数。")]),t._v(" "),s("li",[s("code",[t._v("getUint8")]),t._v("：读取1个字节，返回一个无符号的8位整数。")]),t._v(" "),s("li",[s("code",[t._v("getInt16")]),t._v("：读取2个字节，返回一个16位整数。")]),t._v(" "),s("li",[s("code",[t._v("getUint16")]),t._v("：读取2个字节，返回一个无符号的16位整数。")]),t._v(" "),s("li",[s("code",[t._v("getInt32")]),t._v("：读取4个字节，返回一个32位整数。")]),t._v(" "),s("li",[s("code",[t._v("getUint32")]),t._v("：读取4个字节，返回一个无符号的32位整数。")]),t._v(" "),s("li",[s("code",[t._v("getFloat32")]),t._v("：读取4个字节，返回一个32位浮点数。")]),t._v(" "),s("li",[s("code",[t._v("getFloat64")]),t._v("：读取8个字节，返回一个64位浮点数。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buffer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dv "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("DataView")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 从第1个字节读取一个8位无符号整数")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 从第2个字节读取一个16位无符号整数")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint16")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 从第4个字节读取一个16位无符号整数")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v3 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint16")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("上面代码读取了"),a("code",[this._v("ArrayBuffer")]),this._v("对象的前5个字节，其中有一个8位整数和两个十六位整数。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 小端字节序")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint16")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 大端字节序")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint16")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 大端字节序 默认")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v3 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUint16")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("2.DataView视图提供8个方法写入内存。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("setInt8")]),t._v("：写入1个字节的8位整数。")]),t._v(" "),s("li",[s("code",[t._v("setUint8")]),t._v("：写入1个字节的8位无符号整数。")]),t._v(" "),s("li",[s("code",[t._v("setInt16")]),t._v("：写入2个字节的16位整数。")]),t._v(" "),s("li",[s("code",[t._v("setUint16")]),t._v("：写入2个字节的16位无符号整数。")]),t._v(" "),s("li",[s("code",[t._v("setInt32")]),t._v("：写入4个字节的32位整数。")]),t._v(" "),s("li",[s("code",[t._v("setUint32")]),t._v("：写入4个字节的32位无符号整数。")]),t._v(" "),s("li",[s("code",[t._v("setFloat32")]),t._v("：写入4个字节的32位浮点数。")]),t._v(" "),s("li",[s("code",[t._v("setFloat64")]),t._v("：写入8个字节的64位浮点数。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("这一系列"),a("code",[this._v("set")]),this._v("方法，接受两个参数，第一个参数是字节序号，表示从哪个字节开始写入，第二个参数为写入的数据。对于那些写入两个或两个以上字节的方法，需要指定第三个参数，false或者undefined表示使用大端字节序写入，true表示使用小端字节序写入。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 在第1个字节，以大端字节序写入值为25的32位整数")]),t._v("\ndv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setInt32")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("25")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 在第5个字节，以大端字节序写入值为25的32位整数")]),t._v("\ndv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setInt32")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("25")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 在第9个字节，以小端字节序写入值为2.5的32位浮点数")]),t._v("\ndv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setFloat32")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2.5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="ArrayBuffer处理二进制.md";a.default=e.exports}}]);