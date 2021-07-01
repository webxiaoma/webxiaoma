(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{602:function(v,_,e){"use strict";e.r(_);var t=e(24),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"css-bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-bfc"}},[v._v("#")]),v._v(" CSS-BFC")]),v._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概念"}},[v._v("概念")])]),e("li",[e("a",{attrs:{href:"#bfc的特点"}},[v._v("BFC的特点")])]),e("li",[e("a",{attrs:{href:"#bfc触发情况"}},[v._v("BFC触发情况")])]),e("li",[e("a",{attrs:{href:"#bfc的作用"}},[v._v("BFC的作用")]),e("ul",[e("li",[e("a",{attrs:{href:"#解决margin重合问题"}},[v._v("解决margin重合问题")])]),e("li",[e("a",{attrs:{href:"#清楚浮动问题"}},[v._v("清楚浮动问题")])]),e("li",[e("a",{attrs:{href:"#自适应两栏布局"}},[v._v("自适应两栏布局")])])])])])]),e("p"),v._v(" "),e("p",[v._v("🐴")]),v._v(" "),e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),e("p",[e("code",[v._v("Block Fromating Context")]),v._v(" 简写为 "),e("code",[v._v("BFC")]),v._v("，被称作"),e("strong",[v._v("块级格式化上下文")])]),v._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN"),e("OutboundLink")],1),v._v("上是这样解释"),e("code",[v._v("BFC")]),v._v("的")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("BFC")]),v._v(" "),e("p",[e("strong",[v._v("块格式化上下文（Block Formatting Context，BFC）")]),v._v(" 是"),e("code",[v._v("Web")]),v._v("页面的可视"),e("code",[v._v("CSS")]),v._v("渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。")])]),v._v(" "),e("p",[v._v("说白了，其实就是页面中某个元素(如"),e("code",[v._v("div")]),v._v(")中拥有特定的"),e("code",[v._v("css")]),v._v("渲染规则，该区域不影响其它区域，为它起了一个名字叫做"),e("code",[v._v("块级格式化上下文(Block Fromating Context)")])]),v._v(" "),e("p",[v._v("其实"),e("code",[v._v("css")]),v._v("格式化上下文概念中除了"),e("code",[v._v("BFC")]),v._v("(块级格式化上下文), 还有："),e("code",[v._v("IFC")]),v._v("(行内格式化上下文) , "),e("code",[v._v("GFC")]),v._v("(网格布局格式化上下文), "),e("code",[v._v("FFC")]),v._v("(自适应格式化上下文)。")]),v._v(" "),e("h2",{attrs:{id:"bfc的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc的特点"}},[v._v("#")]),v._v(" BFC的特点")]),v._v(" "),e("ol",[e("li",[v._v("同一个"),e("code",[v._v("BFC")]),v._v("区域中"),e("code",[v._v("margin")]),v._v(" 会发生重叠，距离取最大"),e("code",[v._v("margin")]),v._v("距离")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("区域中的元素会垂直的方向，一个接一个的放置。")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("区域中如果有浮动元素，那么计算"),e("code",[v._v("BFC")]),v._v("高度时，也会算上浮动元素的高度")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("区域中, 每个盒子的左外边界挨着包含块的左边界 (对于从右到左的格式化, 则为右边界互相挨着)。")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("的区域不会与"),e("code",[v._v("float")]),v._v("元素重叠")]),v._v(" "),e("li",[v._v("每个"),e("code",[v._v("BFC")]),v._v("之间是相互独立的块域（独立容器），里边的子元素不会相互影响")])]),v._v(" "),e("h2",{attrs:{id:"bfc触发情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc触发情况"}},[v._v("#")]),v._v(" BFC触发情况")]),v._v(" "),e("p",[v._v("一般下面的情下，会触发(或形成)"),e("code",[v._v("BFC")])]),v._v(" "),e("ul",[e("li",[v._v("给元素设置"),e("code",[v._v("float")]),v._v("，但是值不为"),e("code",[v._v("none")])]),v._v(" "),e("li",[v._v("给元素设置"),e("code",[v._v("overflow")]),v._v(",但是值不为"),e("code",[v._v("visibility")])]),v._v(" "),e("li",[v._v("设置"),e("code",[v._v("display")]),v._v("的值为 "),e("code",[v._v("inline-block")]),v._v("、"),e("code",[v._v("table-cell")]),v._v("、"),e("code",[v._v("table-caption")]),v._v("、"),e("code",[v._v("flex")]),v._v("、"),e("code",[v._v("inline-flex")])]),v._v(" "),e("li",[v._v("设置"),e("code",[v._v("position")]),v._v("的值为 "),e("code",[v._v("absolute")]),v._v(" 或 "),e("code",[v._v("fixed")])])]),v._v(" "),e("h2",{attrs:{id:"bfc的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc的作用"}},[v._v("#")]),v._v(" BFC的作用")]),v._v(" "),e("p",[v._v("知道了"),e("code",[v._v("BFC")]),v._v("的特点，以及触发条件，我们来看看, "),e("code",[v._v("BFC")]),v._v("在实际应用中有什么作用")]),v._v(" "),e("h3",{attrs:{id:"解决margin重合问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决margin重合问题"}},[v._v("#")]),v._v(" 解决margin重合问题")]),v._v(" "),e("p",[v._v("我们经常遇到"),e("code",[v._v("margin")]),v._v("重叠问题，在同一个"),e("code",[v._v("BFC")]),v._v("区域中"),e("code",[v._v("margin")]),v._v(" 会发生重叠，为了不让"),e("code",[v._v("margin")]),v._v("\n重叠我们可以创建两个"),e("code",[v._v("BFC")]),v._v("区域，将有"),e("code",[v._v("margin")]),v._v("的元素分别放到两个"),e("code",[v._v("BFC")]),v._v("区域中，因为两个"),e("code",[v._v("BFC")]),v._v("区域是相互不受影响的。")]),v._v(" "),e("h3",{attrs:{id:"清楚浮动问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清楚浮动问题"}},[v._v("#")]),v._v(" 清楚浮动问题")]),v._v(" "),e("p",[v._v("我们给"),e("code",[v._v("One")]),v._v(" div 进行浮动后，其父元素的到高度就不会被"),e("code",[v._v("One")]),v._v("撑开，受到浮动的影响，"),e("code",[v._v("底部DIV元素")]),v._v(" 就会受影响，往上移动，")]),v._v(" "),e("images",{attrs:{src:"/web/csshtml/bfc1.png"}}),v._v(" "),e("p",[v._v("然后我们给"),e("code",[v._v("父Div")]),v._v(" 加上"),e("code",[v._v("display: inline-block;")]),v._v(" 变成一个"),e("code",[v._v("BFC")]),v._v("，这时就会清除浮动，也是因为每个"),e("code",[v._v("BFC")]),v._v("之间是相互独立的块域（独立容器），里边的子元素不会相互影响")]),v._v(" "),e("images",{attrs:{src:"/web/csshtml/bfc2.png"}}),v._v(" "),e("h3",{attrs:{id:"自适应两栏布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自适应两栏布局"}},[v._v("#")]),v._v(" 自适应两栏布局")]),v._v(" "),e("p",[v._v("我们看下面布局，当"),e("code",[v._v("One")]),v._v(" div元素浮动，而"),e("code",[v._v("Two")]),v._v(" div 元素不浮动时，就会出现，"),e("code",[v._v("Two")]),v._v(" 元素在"),e("code",[v._v("One")]),v._v(" 元素下面，但是文字（不会在下面）会围绕"),e("code",[v._v("One")]),v._v("元素")]),v._v(" "),e("images",{attrs:{src:"/web/csshtml/bfc3.png"}}),v._v(" "),e("p",[v._v("为了让"),e("code",[v._v("One")]),v._v("元素和"),e("code",[v._v("Two")]),v._v("元素左右并排，我们可以将"),e("code",[v._v("Two")]),v._v("元素变成"),e("code",[v._v("BFC")]),v._v("，这是利用了"),e("code",[v._v("BFC")]),v._v("的区域不会与"),e("code",[v._v("float")]),v._v("元素重叠的特点")]),v._v(" "),e("images",{attrs:{src:"/web/csshtml/bfc4.png"}}),v._v(" "),e("hr"),v._v(" "),e("p",[e("strong",[v._v("参考文献")]),v._v(" 👈")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN-块格式化上下文"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/828023418450",target:"_blank",rel:"noopener noreferrer"}},[v._v("CSS-BFC"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);_.default=o.exports}}]);