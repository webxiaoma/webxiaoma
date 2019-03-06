(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{348:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"js-dom操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-dom操作","aria-hidden":"true"}},[t._v("#")]),t._v(" JS DOM操作")]),t._v(" "),n("h2",{attrs:{id:"什么是dom-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是dom-操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是DOM 操作")]),t._v(" "),n("p",[t._v("DOM( document Object Model) ,是针对HTML 和 XML 的API, 可以理解为DOM 就是一些列功能集合。")]),t._v(" "),n("h2",{attrs:{id:"什么是dom-树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是dom-树","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是DOM 树")]),t._v(" "),n("ol",[n("li",[t._v("当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。")])]),t._v(" "),n("p",[t._v("HTML DOM 模型被构造为对象的树：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://www.runoob.com/images/pic_htmltree.gif",alt:"DOM树"}})]),t._v(" "),n("h2",{attrs:{id:"dom-操作api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作api","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM 操作API")]),t._v(" "),n("h4",{attrs:{id:"_1-dom-查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-dom-查询","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. DOM 查询")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过id查找元素")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过标签查找元素，返回类数组")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getElementsByClassName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过class查找元素，返回类数组")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过css选择器查找元素，返回一个选中的元素")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过css选择器查找元素，返回类数组")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"_2-dom-属性操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-dom-属性操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. DOM 属性操作")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的所有属性 返回类数组")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"属性名"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素某个属性值")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"属性名"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"属性值"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 为ele元素添加某个属性以及值")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"属性名"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 删除ele元素某个属性")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 比如我们想获取元素的属性 还可以")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n"),n("span",{attrs:{class:"token class-name"}},[t._v("ele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style")]),t._v("\n\n\n")])])]),n("h4",{attrs:{id:"_3-dom-文本节点查询及操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom-文本节点查询及操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. DOM 文本节点查询及操作")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes "),n("span",{attrs:{class:"token comment"}},[t._v("//获取当前节点的所有子节点（包括元素节点和文本节点）。返回类数组")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode "),n("span",{attrs:{class:"token comment"}},[t._v("//只读，获取父元素节点 没有兼容性问题")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),n("span",{attrs:{class:"token comment"}},[t._v("// 返回文本节点值3(文本代码值)")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),n("span",{attrs:{class:"token comment"}},[t._v("// 返回文本节点名称 #text")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue  "),n("span",{attrs:{class:"token comment"}},[t._v("//返回节点所包含的文本")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//将text 添加到节点的末尾。 ")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("deleteData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//从offset 指定的位置开始删除count 个字符。 ")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("insertData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//在offset 指定的位置插入text。 ")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replaceData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//用text 替换从offset 指定的位置开始到offset + count 为止处的文本。 ")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("splitText")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//从offset 指定的位置将当前文本节点分成两个文本节点。 ")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("substringData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//提取从offset 指定的位置开始到offset+count 为止 ")]),t._v("\n")])])]),n("h4",{attrs:{id:"_4-dom-获取祖先，同胞，子元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-dom-获取祖先，同胞，子元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. DOM 获取祖先，同胞，子元素")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentElement "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取父元素")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取子元素返回类数组")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstElementChild "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的第一个子元素 (不包含空格)")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的一个子元素 (包含空格) ")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastElementChild "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的最后一个子元素 (不包含空格)")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextElementSibling "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的后一个兄弟元素 (不包含空格)")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("previousElementSibling "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取ele元素的上一个兄弟元素 (不包含空格)")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"_5-dom-的增加-删除-替换-插入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-dom-的增加-删除-替换-插入","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. DOM 的增加 删除 替换 插入")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 删除替换")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 删除ele元素中的子元素el")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replaceChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("el2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 在ele子元素内将el1替换为el2")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("insertBefore")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newEle"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("oldChildEle"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将newEle 元素 插入到ele元素内oldChildEle元素前边")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将el元素插入到ele元素内的最后边")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cloneNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 为true时指示被复制的节点是否包括原节点的所有属性和子节点")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 创建元素和节点")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"元素名称"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 创建一个新元素")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"文本"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 创建一个新文本节点")]),t._v("\n")])])]),n("h4",{attrs:{id:"_6-dom-获取元素信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-dom-获取元素信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. DOM 获取元素信息")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的可视宽度 padding + content")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的可视高度 padding + content")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth   "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的 border+padding+content 宽度")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的 border+padding+content 高度")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素 position/relative 左定位+ margin（左）")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop   "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素 position/relative 左定位+ margin（上）")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientTop   "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的border 上边宽度")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientLeft  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取元素的border 左边宽度")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight  "),n("span",{attrs:{class:"token comment"}},[t._v("//当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际高度")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollWidth   "),n("span",{attrs:{class:"token comment"}},[t._v("//当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际宽度")]),t._v("\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop  "),n("span",{attrs:{class:"token comment"}},[t._v("// （可读写）指的是当元素其中的内容超出其宽高的时候，元素被卷起的高度")]),t._v("\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft "),n("span",{attrs:{class:"token comment"}},[t._v("// （可读写）指的是当元素其中的内容超出其宽高的时候，元素被卷起的宽度")]),t._v("\n\n\n\nele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 会返回一个对象，包含元素的上下左右距离和宽高 ")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="js-dom.md";s.default=e.exports}}]);