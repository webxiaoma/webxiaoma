(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{380:function(t,_,v){"use strict";v.r(_);var s=v(1),a=Object(s.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base64笔记 by 阮一峰"),v("OutboundLink")],1)]),t._v(" "),v("hr"),t._v(" "),t._m(1),t._v(" "),v("p",[v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),v("OutboundLink")],1),t._v(" 上定义Base64是一种基于64个可打印字符（可见字符）来表示二进制数据的表示方法。由于 2^6 =64 ，所以每6个比特为一个单元，对应某个可打印字符。3个字节有24个比特，对应于4个Base64单元，即3个字节可由4个可打印字符来表示。它可用来作为电子邮件的传输编码。在Base64中的可打印字符包括字母A-Z、a-z、数字0-9，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。一些如uuencode的其他编码方法，和之后BinHex的版本使用不同的64字符集来代表6个二进制数字，但是不被称为Base64。")]),t._v(" "),v("p",[t._v('所谓Base64，就是说选出64个字符----小写字母a-z、大写字母A-Z、数字0-9、符号"+"、"/"（再加上作为垫字的"="，实际上是65个字符）----作为一个基本字符集。然后，其他所有符号都转换成这个字符集中的字符。')]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),v("p",[t._v("这里需要注意的是当字节数不足三个字节时，则这样处理：")]),t._v(" "),t._m(18),t._v(" "),v("p",[t._v('比如，"Ma"这个字符串是两个字节，可以转化成三组00010011、00010110、00010000以后，对应Base64值分别为T、W、E，再补上一个"="号，因此"Ma"的Base64编码就是TWE=。')]),t._v(" "),t._m(19),t._v(" "),v("p",[t._v('比如，"M"这个字母是一个字节，可以转化为二组00010011、00010000，对应的Base64值分别为T、Q，再补上二个"="号，因此"M"的Base64编码就是TQ==。')])])},[function(){var t=this.$createElement,_=this._self._c||t;return _("h1",{attrs:{id:"base64处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#base64处理","aria-hidden":"true"}},[this._v("#")]),this._v(" base64处理")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"一、base64定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、base64定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、base64定义")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"二、js中-base64格式的编码和解码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、js中-base64格式的编码和解码","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、js中 base64格式的编码和解码")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h4",{attrs:{id:"_1-btoa-转码-和-atob-解码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-btoa-转码-和-atob-解码","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. "),_("code",[this._v("btoa()")]),this._v("转码 和 "),_("code",[this._v("atob()")]),this._v(" 解码")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("js中提供了"),_("code",[this._v("btoa()")]),this._v("转码 和 "),_("code",[this._v("atob()")]),this._v(" 解码的方法处理 Base64格式")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("例如我们将 "),_("code",[this._v("http://webxiaoma.com/assets/images/manong.jpg")]),this._v(" 进行编码和解码")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"language-JavaScript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[t._v("\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"http://webxiaoma.com/assets/images/manong.jpg"')]),t._v("\n\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" btoaStr "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token function"}},[t._v("btoa")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{attrs:{class:"token comment"}},[t._v("// 将url编码为Base64格式")]),t._v("\n"),v("span",{attrs:{class:"token comment"}},[t._v("//aHR0cDovL3dlYnhpYW9tYS5jb20vYXNzZXRzL2ltYWdlcy9tYW5vbmcuanBn")]),t._v("\n\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" atobStr "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token function"}},[t._v("atob")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("btoaStr"),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{attrs:{class:"token comment"}},[t._v("//将Base64格式解码")]),t._v("\n"),v("span",{attrs:{class:"token comment"}},[t._v("//http://webxiaoma.com/assets/images/manong.jpg")]),t._v("\n")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h4",{attrs:{id:"_2-btoa-转码-和-atob-解码的中文问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-btoa-转码-和-atob-解码的中文问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),_("code",[this._v("btoa()")]),this._v("转码 和 "),_("code",[this._v("atob()")]),this._v(" 解码的中文问题")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("当我们要将中文编码为"),_("code",[this._v("Base64")]),this._v("格式后，在进行解码是会乱码，而在谷歌浏览器上在编码中文时会直接报错")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"language-JavaScript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[t._v("\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"你好"')]),t._v("\n\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" btoaStr "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token function"}},[t._v("btoa")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{attrs:{class:"token comment"}},[t._v("// 在谷歌浏览器上报错")]),t._v("\n\n")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("我们这时需要借助 "),v("code",[t._v("encodeURIComponent")]),t._v(" 和 "),v("code",[t._v("decodeURIComponent")]),t._v(" 转义中文字符,这里是由于"),v("code",[t._v("btoa")]),t._v("仅支持 "),v("code",[t._v("A")]),t._v("SCII"),v("code",[t._v("字符序列，如果通过")]),t._v("encodeURIComponent` 将中文字符编码成ASCII字符序列，再通过 btoa 进行 base64 编码。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"language-JavaScript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[t._v("\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"你好"')]),t._v("\n\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" btoaStr "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token function"}},[t._v("encodeURIComponent")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{attrs:{class:"token function"}},[t._v("btoa")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{attrs:{class:"token comment"}},[t._v("//编码: JUU0JUJEJUEwJUU1JUE1JUJE")]),t._v("\n\n"),v("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" atobStr "),v("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{attrs:{class:"token function"}},[t._v("decodeURIComponent")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{attrs:{class:"token function"}},[t._v("atob")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("btoaStr"),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{attrs:{class:"token comment"}},[t._v("// 解码: 你好")]),t._v("\n\n")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"三、base64编码的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、base64编码的原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、Base64编码的原理")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("第一步，将每三个字节作为一组，一共是24个二进制位。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("第二步，将这24个二进制位分为四组，每个组有6个二进制位。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("第三步，在每组前面加两个00，扩展成32个二进制位，即四个字节。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("第四步，根据下表，得到扩展后的每个字节的对应符号，这就是Base64的编码值。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"wikitable",staticStyle:{"text-align":"center"}},[v("tbody",[v("tr",[v("th",{attrs:{scope:"col"}},[t._v("数值")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("字符\n")]),t._v(" "),v("td",{attrs:{rowspan:"18"}},[t._v(" \n")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("数值")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("字符\n")]),t._v(" "),v("td",{attrs:{rowspan:"18"}},[t._v(" \n")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("数值")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("字符\n")]),t._v(" "),v("td",{attrs:{rowspan:"18"}},[t._v(" \n")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("数值")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("字符\n")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("A")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[t._v("Q")]),t._v(" "),v("td",[t._v("32")]),t._v(" "),v("td",[t._v("g")]),t._v(" "),v("td",[t._v("48")]),t._v(" "),v("td",[t._v("w\n")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("B")]),t._v(" "),v("td",[t._v("17")]),t._v(" "),v("td",[t._v("R")]),t._v(" "),v("td",[t._v("33")]),t._v(" "),v("td",[t._v("h")]),t._v(" "),v("td",[t._v("49")]),t._v(" "),v("td",[t._v("x\n")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("C")]),t._v(" "),v("td",[t._v("18")]),t._v(" "),v("td",[t._v("S")]),t._v(" "),v("td",[t._v("34")]),t._v(" "),v("td",[t._v("i")]),t._v(" "),v("td",[t._v("50")]),t._v(" "),v("td",[t._v("y\n")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("D")]),t._v(" "),v("td",[t._v("19")]),t._v(" "),v("td",[t._v("T")]),t._v(" "),v("td",[t._v("35")]),t._v(" "),v("td",[t._v("j")]),t._v(" "),v("td",[t._v("51")]),t._v(" "),v("td",[t._v("z\n")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("E")]),t._v(" "),v("td",[t._v("20")]),t._v(" "),v("td",[t._v("U")]),t._v(" "),v("td",[t._v("36")]),t._v(" "),v("td",[t._v("k")]),t._v(" "),v("td",[t._v("52")]),t._v(" "),v("td",[t._v("0\n")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("F")]),t._v(" "),v("td",[t._v("21")]),t._v(" "),v("td",[t._v("V")]),t._v(" "),v("td",[t._v("37")]),t._v(" "),v("td",[t._v("l")]),t._v(" "),v("td",[t._v("53")]),t._v(" "),v("td",[t._v("1\n")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("G")]),t._v(" "),v("td",[t._v("22")]),t._v(" "),v("td",[t._v("W")]),t._v(" "),v("td",[t._v("38")]),t._v(" "),v("td",[t._v("m")]),t._v(" "),v("td",[t._v("54")]),t._v(" "),v("td",[t._v("2\n")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("H")]),t._v(" "),v("td",[t._v("23")]),t._v(" "),v("td",[t._v("X")]),t._v(" "),v("td",[t._v("39")]),t._v(" "),v("td",[t._v("n")]),t._v(" "),v("td",[t._v("55")]),t._v(" "),v("td",[t._v("3\n")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("I")]),t._v(" "),v("td",[t._v("24")]),t._v(" "),v("td",[t._v("Y")]),t._v(" "),v("td",[t._v("40")]),t._v(" "),v("td",[t._v("o")]),t._v(" "),v("td",[t._v("56")]),t._v(" "),v("td",[t._v("4\n")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("J")]),t._v(" "),v("td",[t._v("25")]),t._v(" "),v("td",[t._v("Z")]),t._v(" "),v("td",[t._v("41")]),t._v(" "),v("td",[t._v("p")]),t._v(" "),v("td",[t._v("57")]),t._v(" "),v("td",[t._v("5\n")])]),t._v(" "),v("tr",[v("td",[t._v("10")]),t._v(" "),v("td",[t._v("K")]),t._v(" "),v("td",[t._v("26")]),t._v(" "),v("td",[t._v("a")]),t._v(" "),v("td",[t._v("42")]),t._v(" "),v("td",[t._v("q")]),t._v(" "),v("td",[t._v("58")]),t._v(" "),v("td",[t._v("6\n")])]),t._v(" "),v("tr",[v("td",[t._v("11")]),t._v(" "),v("td",[t._v("L")]),t._v(" "),v("td",[t._v("27")]),t._v(" "),v("td",[t._v("b")]),t._v(" "),v("td",[t._v("43")]),t._v(" "),v("td",[t._v("r")]),t._v(" "),v("td",[t._v("59")]),t._v(" "),v("td",[t._v("7\n")])]),t._v(" "),v("tr",[v("td",[t._v("12")]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td",[t._v("28")]),t._v(" "),v("td",[t._v("c")]),t._v(" "),v("td",[t._v("44")]),t._v(" "),v("td",[t._v("s")]),t._v(" "),v("td",[t._v("60")]),t._v(" "),v("td",[t._v("8\n")])]),t._v(" "),v("tr",[v("td",[t._v("13")]),t._v(" "),v("td",[t._v("N")]),t._v(" "),v("td",[t._v("29")]),t._v(" "),v("td",[t._v("d")]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("t")]),t._v(" "),v("td",[t._v("61")]),t._v(" "),v("td",[t._v("9\n")])]),t._v(" "),v("tr",[v("td",[t._v("14")]),t._v(" "),v("td",[t._v("O")]),t._v(" "),v("td",[t._v("30")]),t._v(" "),v("td",[t._v("e")]),t._v(" "),v("td",[t._v("46")]),t._v(" "),v("td",[t._v("u")]),t._v(" "),v("td",[t._v("62")]),t._v(" "),v("td",[t._v("+\n")])]),t._v(" "),v("tr",[v("td",[t._v("15")]),t._v(" "),v("td",[t._v("P")]),t._v(" "),v("td",[t._v("31")]),t._v(" "),v("td",[t._v("f")]),t._v(" "),v("td",[t._v("47")]),t._v(" "),v("td",[t._v("v")]),t._v(" "),v("td",[t._v("63")]),t._v(" "),v("td",[t._v("/\n")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ol",[_("li",[this._v('二个字节的情况：将这二个字节的一共16个二进制位，按照上面的规则，转成三组，最后一组除了前面加两个0以外，后面也要加两个0。这样得到一个三位的Base64编码，再在末尾补上一个"="号。')])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ol",{attrs:{start:"2"}},[_("li",[this._v('一个字节的情况：将这一个字节的8个二进制位，按照上面的规则转成二组，最后一组除了前面加二个0以外，后面再加4个0。这样得到一个二位的Base64编码，再在末尾补上两个"="号。')])])}],!1,null,null,null);a.options.__file="base64.md";_.default=a.exports}}]);