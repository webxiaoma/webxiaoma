(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{555:function(t,e,l){"use strict";l.r(e);var v=l(23),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"集合-collection"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#集合-collection"}},[t._v("#")]),t._v(" 集合-Collection")]),t._v(" "),l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#前言"}},[t._v("前言")])]),l("li",[l("a",{attrs:{href:"#集合结构"}},[t._v("集合结构")])]),l("li",[l("a",{attrs:{href:"#collection接口"}},[t._v("Collection接口")])])])]),l("p"),t._v(" "),l("p",[t._v("🐴")]),t._v(" "),l("h2",{attrs:{id:"前言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),l("p",[t._v("我们在使用"),l("code",[t._v("java")]),t._v("数组时，会发现数组的长度是固定的，初始化后就不能改变，但是实际我们开发时会遇到无法确定数量的数据，这时就会用到集合。 另外集合和数组是有如下区别：")]),t._v(" "),l("ol",[l("li",[t._v("数组长度固定，集合长度可变")]),t._v(" "),l("li",[t._v("数组可以存储基本数据类型或引用类型，集合只能存储引用类型")]),t._v(" "),l("li",[t._v("数组只能存储同一数据类型，集合可以存储不同数据类型（实际也是同一类型，只是类型都是"),l("code",[t._v("Object")]),t._v("类）")])]),t._v(" "),l("h2",{attrs:{id:"集合结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#集合结构"}},[t._v("#")]),t._v(" 集合结构")]),t._v(" "),l("p",[l("code",[t._v("java")]),t._v("集合主要分为 "),l("code",[t._v("Collection")]),t._v(" 和 "),l("code",[t._v("Map")]),t._v(", 其它的实现类基本都是这俩接口的子类，下边为来自"),l("a",{attrs:{href:"https://www.runoob.com/java/java-collections.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程的"),l("OutboundLink")],1),t._v("的结构图")]),t._v(" "),l("images",{attrs:{src:"/java/collection.gif",width:"580"}}),t._v(" "),l("p",[t._v("结构图中, "),l("strong",[t._v("实线")]),t._v("边框的是实现类，如"),l("code",[t._v("ArrayList")]),t._v("，"),l("code",[t._v("LinkedList")]),t._v("，"),l("code",[t._v("HashMap")]),t._v("等，"),l("strong",[t._v("折线")]),t._v("边框的是抽象类，比如"),l("code",[t._v("AbstractCollection")]),t._v("，"),l("code",[t._v("AbstractList")]),t._v("，"),l("code",[t._v("AbstractMap")]),t._v("等，而"),l("strong",[t._v("点线")]),t._v("边框的是接口，比如"),l("code",[t._v("Collection")]),t._v("，"),l("code",[t._v("Iterator")]),t._v("，"),l("code",[t._v("List")]),t._v("等")]),t._v(" "),l("h2",{attrs:{id:"collection接口"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#collection接口"}},[t._v("#")]),t._v(" Collection接口")]),t._v(" "),l("p",[l("code",[t._v("Collection")]),t._v("接口是 "),l("code",[t._v("List")]),t._v(","),l("code",[t._v("Set")]),t._v(" 和 "),l("code",[t._v("Queue")]),t._v("的父类接口，"),l("code",[t._v("java")]),t._v("不提供直接继承"),l("code",[t._v("Collection")]),t._v("的类，只能继承其子接口。"),l("code",[t._v("Collection")]),t._v("接口定义了一些常用的方法，如下：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean add(type e)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("向集合中添加一个元素，如果集合对象被添加操作改变了，则返回"),l("code",[t._v("true")]),t._v("。 "),l("code",[t._v("type")]),t._v("是元素的数据类型")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean addAll(Collection c)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("向集合中添加集合 c 中的所有元素，如果集合对象被添加操作改变了，则返回 true。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("void clear()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("清除集合中的所有元素，将集合长度变为 0。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean contains(Object o)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("判断集合中是否存在指定元素")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean containsAll(Collection c)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("判断集合中是否包含集合 c 中的所有元素")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean isEmpty()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("判断集合是否为空")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Iterator<E>iterator()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回一个"),l("code",[t._v("Iterator")]),t._v("对象，用于遍历集合中的元素")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean remove(Object o)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从集合中删除一个指定元素，当集合中包含了一个或多个元素 o 时，该方法只删除第一个符合条件的元素，该方法将返回"),l("code",[t._v("true")]),t._v("。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean removeAll(Collection c)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从集合中删除所有在集合 c 中出现的元素（相当于把调用该方法的集合减去集合 c）。如果该操作改变了调用该方法的集合，则该方法返回"),l("code",[t._v("true")]),t._v("。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean retainAll(Collection c)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从集合中删除集合 c 里不包含的元素（相当于把调用该方法的集合变成该集合和集合 c 的交集），如果该操作改变了调用该方法的集合，则该方法返回 true。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("int size()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回集合中元素的个数")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Object[] toArray()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("把集合转换为一个数组，所有的集合元素变成对应的数组元素。")])])])]),t._v(" "),l("p",[l("strong",[t._v("参考文献")])]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://www.runoob.com/java/java-collections.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 集合框架-菜鸟教程"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"http://c.biancheng.net/view/6824.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java集合详解"),l("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);