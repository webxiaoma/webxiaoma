(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{603:function(t,e,_){"use strict";_.r(e);var r=_(24),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"css-格式化上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css-格式化上下文"}},[t._v("#")]),t._v(" CSS-格式化上下文")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#概念"}},[t._v("概念")])]),_("li",[_("a",{attrs:{href:"#格式化上下文种类"}},[t._v("格式化上下文种类")])]),_("li",[_("a",{attrs:{href:"#块级格式化上下文bfc"}},[t._v("块级格式化上下文BFC")])]),_("li",[_("a",{attrs:{href:"#行内格式化上下文ifc"}},[t._v("行内格式化上下文IFC")])]),_("li",[_("a",{attrs:{href:"#弹性盒格式化上下文ffc"}},[t._v("弹性盒格式化上下文FFC")])]),_("li",[_("a",{attrs:{href:"#网格格式化上下文gfc"}},[t._v("网格格式化上下文GFC")])])])]),_("p"),t._v(" "),_("p",[t._v("🐴")]),t._v(" "),_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),_("p",[t._v("格式化上下文（Formatting context） 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。")]),t._v(" "),_("p",[t._v("通俗点理解就是，"),_("code",[t._v("CSS")]),t._v("的布局渲染是分块进行的，也就是"),_("code",[t._v("CSS")]),t._v("中划分了很多"),_("code",[t._v("Box")]),t._v(", "),_("code",[t._v("Box")]),t._v("作为"),_("code",[t._v("CSS")]),t._v("的布局对象和基本单位，不同种类的"),_("code",[t._v("Box")]),t._v("以不同形式的进行渲染，而这个"),_("code",[t._v("Box")]),t._v("就代表格式化上下文。")]),t._v(" "),_("h2",{attrs:{id:"格式化上下文种类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#格式化上下文种类"}},[t._v("#")]),t._v(" 格式化上下文种类")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("BFC")]),t._v("(Block Formatting Contexts) 块级格式化上下文")]),t._v(" "),_("li",[_("code",[t._v("IFC")]),t._v("(Inline Formatting Contexts) 内联格式化上下文")]),t._v(" "),_("li",[_("code",[t._v("FFC")]),t._v("(Flex Formatting Contexts) 弹性盒格式化上下文")]),t._v(" "),_("li",[_("code",[t._v("GFC")]),t._v("(GridLayout Formatting Contexts) 网格格式化上下文")])]),t._v(" "),_("h2",{attrs:{id:"块级格式化上下文bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#块级格式化上下文bfc"}},[t._v("#")]),t._v(" 块级格式化上下文BFC")]),t._v(" "),_("p",[_("code",[t._v("Block Fromating Context")]),t._v(" 简写为 "),_("code",[t._v("BFC")]),t._v("，被称作"),_("strong",[t._v("块级格式化上下文")]),t._v("。文档最外层元素使用块布局规则或称为初始块格式上下文。这意味着"),_("code",[t._v("<html>")]),t._v("元素块中的每个元素都是按照正常流程遵循块和内联布局规则进行布局的。该模型定义了元素的边距、边框和填充如何与同一上下文中的其他块交互。")]),t._v(" "),_("p",[t._v("关于"),_("code",[t._v("BFC")]),t._v("的特点与作用的详细介绍，可以"),_("RouterLink",{attrs:{to:"/web/csshtml/css-bfc.html"}},[t._v("查看这里")])],1),t._v(" "),_("h2",{attrs:{id:"行内格式化上下文ifc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#行内格式化上下文ifc"}},[t._v("#")]),t._v(" 行内格式化上下文IFC")]),t._v(" "),_("p",[t._v("行内格式化上下文（"),_("code",[t._v("Inline Formatting Contexts")]),t._v("）被称作"),_("code",[t._v("line-box")]),t._v("（行盒），"),_("code",[t._v("IFC的布局规则是")])]),t._v(" "),_("ul",[_("li",[t._v("在行盒中元素是从盒顶端水平的一个接一个排列")]),t._v(" "),_("li",[t._v("行盒之间的"),_("code",[t._v("margin")]),t._v(" "),_("code",[t._v("padding")]),t._v(" "),_("code",[t._v("border")]),t._v(" 都有效")]),t._v(" "),_("li",[t._v("盒可能以不同的方式竖直对齐：以它们的底部或者顶部对齐，或者以它们里面的文本的基线对齐（一般用"),_("code",[t._v("vertical-align")]),t._v("设置）")]),t._v(" "),_("li",[t._v("当行内元素的总宽度超过了行盒，那么行内元素会被分配到多个行盒中去，并且可以通过"),_("code",[t._v("text-align")]),t._v("来控制水平布局，如果设置了不可折行等属性，那么行内元素会溢出行盒。")]),t._v(" "),_("li",[t._v("同一"),_("code",[t._v("IFC")]),t._v("中的行框通常有不同的高度（图片和文字在同一行时）。")])]),t._v(" "),_("h2",{attrs:{id:"弹性盒格式化上下文ffc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒格式化上下文ffc"}},[t._v("#")]),t._v(" 弹性盒格式化上下文FFC")]),t._v(" "),_("p",[t._v("弹性盒格式化上下文（Flexible Formatting Context），为了适应各种类型的显示设备，更加方便的布局，在"),_("code",[t._v("CSS3")]),t._v("中引入了"),_("code",[t._v("flex")]),t._v("布局，被称为弹性盒模型。"),_("code",[t._v("flex")]),t._v("布局拥有许多属性。具体的使用方法可以查看下面两篇文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 布局教程：语法篇"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 布局教程：实例篇"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"网格格式化上下文gfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网格格式化上下文gfc"}},[t._v("#")]),t._v(" 网格格式化上下文GFC")]),t._v(" "),_("p",[t._v("网格格式化上下文(Grids Formatting Context), "),_("code",[t._v("CSS3")]),t._v("中引入了一种"),_("code",[t._v("Grids")]),t._v("网格布局，在"),_("code",[t._v("GFC")]),t._v("块中会划分成行和列的网格状。这种布局目前使用率不是很高（目前指"),_("code",[t._v("2020-06")]),t._v("）。想要了解具体的用法，可以查看下面文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Grid 网格布局教程"),_("OutboundLink")],1)])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("参考文献")]),t._v(" 👈")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN-格式化上下文"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://blog.csdn.net/WuLex/article/details/99626766",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS-格式化上下文（Formatting Context）"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000018878825",target:"_blank",rel:"noopener noreferrer"}},[t._v("解析 CSS 格式化上下文"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);