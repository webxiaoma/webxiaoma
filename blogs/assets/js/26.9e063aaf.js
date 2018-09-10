(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{319:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/webxiaoma/phone-demo/tree/master/self-adaption",target:"_blank",rel:"noopener noreferrer"}},[t._v("布局 GitHub 练习仓库"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("我们来简单的实现一下这种方式：")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("我们的思路是这样的，我们将手机屏幕宽度等分成10份，每一份的大小做为我们的跟字体大小")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("p",[t._v("另外这里更推荐你使用"),s("a",{attrs:{href:"https://github.com/postcss/postcss/blob/master/README-cn.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("posstcss工具"),s("OutboundLink")],1),t._v("中的"),s("code",[t._v("postcss-px2rem")]),t._v("插件，你也可以在你的编辑器中集成该插件。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("扫描二维码查看 "),s("a",{attrs:{href:"https://webxiaoma.github.io/phone-demo/self-adaption/rem-phone.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("或点击链接地址 以手机模式"),s("OutboundLink")],1)]),t._v(" "),s("MyImg",{attrs:{src:"/img/phone.png",alt:"phone"}}),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("使用vw和上边方法类似，"),s("code",[t._v("vw")]),t._v("、"),s("code",[t._v("vh")]),t._v("、"),s("code",[t._v("vmain")]),t._v("、"),s("code",[t._v("vmax")]),t._v("他们是百分比的意思，而他们的百分比是相对于视口"),s("code",[t._v("viewport")]),t._v("的，"),s("a",{attrs:{href:"http://localhost:5555/phone/#%E7%A7%BB%E5%8A%A8%E7%AB%AFcss%E5%8D%95%E4%BD%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里我们已经讲了"),s("OutboundLink")],1),t._v("。 还是以我们的"),s("code",[t._v("750 X 1334")]),t._v("的设计稿为例。"),s("code",[t._v("100vw")]),t._v("其实就是"),s("code",[t._v("100%")]),t._v("，我们当我们测的psd上的尺寸时，我们算一下它占我们psd宽度的多少，还是以上边为例")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("使用vw就是将我们屏幕自动分成了"),s("code",[t._v("100")]),t._v("份, "),s("code",[t._v("1vw")]),t._v("占"),s("code",[t._v("1")]),t._v("份，不用我们在去使用"),s("code",[t._v("js")]),t._v("设置。所以我们只需要计算我们在psd上量的尺寸占我们psd的百分比就可以。比如设计稿有一个展示区是"),s("code",[t._v("375px")]),t._v("时，我们可以计算出它占我们设计稿的"),s("code",[t._v("375/750 = 50%")]),t._v("，也就是设计稿的一半，当我们要呈现在手机上是，也要让他占一半，也就是五份换算成"),s("code",[t._v("vw")]),t._v("就是"),s("code",[t._v("50vw")]),t._v("。所以我们不用写任何js，不过我们还是要进行尺寸的计算，除了使用"),s("code",[t._v("less")]),t._v("或其他css预处理器。我们还是更推荐使用"),s("a",{attrs:{href:"https://github.com/postcss/postcss/blob/master/README-cn.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("posstcss工具"),s("OutboundLink")],1),t._v("，"),s("code",[t._v("posstcss工具")]),t._v(" 中有一个"),s("a",{attrs:{href:"https://github.com/evrone/postcss-px-to-viewport",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-px-to-viewport"),s("OutboundLink")],1),t._v("插件可以将px转换为"),s("code",[t._v("vw")])]),t._v(" "),s("p",[t._v("扫描二维码查看 "),s("a",{attrs:{href:"https://webxiaoma.github.io/phone-demo/self-adaption/vw-phone.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("或点击链接地址 以手机模式"),s("OutboundLink")],1)]),t._v(" "),s("MyImg",{attrs:{src:"/img/phon-two.png",alt:"phone"}}),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Flexible实现手淘H5页面的终端适配 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/lyzg/p/4877277.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("拉钩、网易和淘宝的移动端处理对比"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5a8c12935188257a6049a0a4#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端布局方案探究"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/entry/584e427361ff4b006cd22c7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("7 种方法解决移动端 Retina 屏幕 1px 边框问题"),s("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"移动端的适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端的适配","aria-hidden":"true"}},[this._v("#")]),this._v(" 移动端的适配")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适配方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 适配方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-rem-布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-rem-布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Rem 布局")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("rem")]),this._v(" 布局不是什么新鲜的布局方式了，它的原理就是利用rem单为是相对html根元素的font-size 进行变化的，我们在不同的屏幕尺寸下动态的改变根元素字体大小，这样我们就可以达到页面自动的使用不同手机屏幕。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先我们有一个 "),e("code",[this._v("750 X 1334")]),this._v("的设计稿")]),this._v(" "),e("li",[this._v("我们将其展示在手机端（这里以"),e("code",[this._v("375*667")]),this._v("的iphone6 为例）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" screen"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhtml"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" width"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'px'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("以"),s("code",[t._v("375*667")]),t._v("的iphone6 为例这时我们根字体就是"),s("code",[t._v("37.5px")]),t._v("。（为什么等分成10份，这是为了方便我们进行换算，另外有些浏览器有默认的最小字体大小，如果你等分成100份，将跟字体就为"),s("code",[t._v("3.75px")]),t._v("这时有可能不起作用。）现在我们"),s("code",[t._v("1rem")]),t._v("就等于"),s("code",[t._v("37.5px")]),t._v("，也就是手机屏幕的十份之一。这时我们将我们的设计稿也等分成十份，每一份就是"),s("code",[t._v("75px")]),t._v("。当我们设计稿有一个展示区是"),s("code",[t._v("375px")]),t._v("时，我们可以计算出它占我们设计稿的"),s("code",[t._v("375/75 = 5份")]),t._v("，也就是设计稿的一半，当我们要呈现在手机上是，也要让他占一半，也就是五份换算成"),s("code",[t._v("rem")]),t._v("就是"),s("code",[t._v("5rem")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最终我们可以得出一个结论就是在"),e("code",[this._v("375*667")]),this._v("的iphone6 这我们量出尺寸后可以除以设计稿宽堵塞十分之一就得出他所有占的份数，这个份数就是我们要换算成的"),e("code",[this._v("rem")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("再比如我们量出一个 200px宽度的div，换算成rem为"),e("code",[this._v("200/75 = 2.666")]),this._v("（大约）。我们每次量的psd尺寸都要处理"),e("code",[this._v("75")]),this._v("才可以换成rem，这样操作起来很麻烦，我们可以使用"),e("code",[this._v("less")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{attrs:{class:"token atrule"}},[t._v("@w"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("75rem\n\ndiv")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token variable"}},[t._v("@w")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 上面less编译后就成了这样")]),t._v("\n\n"),s("span",{attrs:{class:"token selector"}},[t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.666666rem"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v("我们需要注意的是在设置根节点的字体大小时，最好不要低于12px，因为有些浏览器对"),e("code",[this._v("font-size")]),this._v("有默认的最小值。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-vw-布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vw-布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. vw 布局")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先我们有一个 "),e("code",[this._v("750 X 1334")]),this._v("的设计稿")]),this._v(" "),e("li",[this._v("我们将其展示在手机端（这里以"),e("code",[this._v("375*667")]),this._v("的iphone6 为例）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v("需要注意的是上边我们只说了布局的方法，没有考虑移动端"),e("code",[this._v("border 1px")]),this._v(" 问题。也没有说图片处理问题。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"边框1px问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#边框1px问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 边框1px问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图片处理问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片处理问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片处理问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("相关文章")])])}],!1,null,null,null);n.options.__file="移动端的适配.md";e.default=n.exports}}]);