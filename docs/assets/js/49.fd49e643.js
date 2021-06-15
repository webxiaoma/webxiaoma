(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{571:function(t,a,e){"use strict";e.r(a);var s=e(24),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"集合-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合-queue"}},[t._v("#")]),t._v(" 集合-Queue")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#前言"}},[t._v("前言")])]),e("li",[e("a",{attrs:{href:"#方法"}},[t._v("方法")])]),e("li",[e("a",{attrs:{href:"#queue实现类"}},[t._v("Queue实现类")]),e("ul",[e("li",[e("a",{attrs:{href:"#priorityqueue"}},[t._v("PriorityQueue")])]),e("li",[e("a",{attrs:{href:"#priorityblockingqueue"}},[t._v("PriorityBlockingQueue")])]),e("li",[e("a",{attrs:{href:"#arrayblockingqueue"}},[t._v("ArrayBlockingQueue")])])])])])]),e("p"),t._v(" "),e("p",[t._v("🐴")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[e("code",[t._v("Queue")]),t._v("队列是一种常见的集合，实现了先进先出("),e("code",[t._v("FIFO")]),t._v("："),e("code",[t._v("First In First Out")]),t._v(") 的有序表。他得操作只有两个：")]),t._v(" "),e("ul",[e("li",[t._v("尾部添加")]),t._v(" "),e("li",[t._v("头部取出")])]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("java")]),t._v("中"),e("code",[t._v("Queue")]),t._v("继承自"),e("code",[t._v("Collection")]),t._v("接口，并且"),e("code",[t._v("Deque")]),t._v(", "),e("code",[t._v("LinkedList")]),t._v(", "),e("code",[t._v("PriorityQueue")]),t._v(", "),e("code",[t._v("BlockingQueue")]),t._v(" 等类都实现了它。"),e("code",[t._v("Queue")]),t._v("常用来存放等待处理元素的集合，如："),e("code",[t._v("缓冲")]),t._v("，"),e("code",[t._v("并发访问")]),t._v("。")]),t._v(" "),e("p",[t._v("下来来自"),e("a",{attrs:{href:""}}),t._v("的"),e("code",[t._v("Queue")]),t._v("结构图")]),t._v(" "),e("images",{attrs:{src:"/java/queue.png",width:"100%"}}),t._v(" "),e("h2",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),e("p",[e("code",[t._v("Queue")]),t._v("除了继承"),e("code",[t._v("Collection")]),t._v("接口外，还有实现了一下自己的方法，常见的方法如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("add")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("增加一个元索 如果队列已满，则抛出一个"),e("code",[t._v("IIIegaISlabEepeplian")]),t._v("异常")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("offer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("添加一个元素并返回true 如果队列已满，则返回"),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("put")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("添加一个元素 如果队列满，则阻塞")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("element")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("返回队列头部的元素 如果队列为空，则抛出一个"),e("code",[t._v("NoSuchElementException")]),t._v("异常")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("offer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("添加一个元素并返回"),e("code",[t._v("true")]),t._v(" 如果队列已满，则返回"),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("remove")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("移除并返回队列头部的元素 如果队列为空，则抛出一个"),e("code",[t._v("NoSuchElementException")]),t._v("异常·")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("poll")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("移除并返问队列头部的元素 如果队列为空，则返回"),e("code",[t._v("null")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("take")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("移除并返回队列头部的元素 如果队列为空，则阻塞")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("peek")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("返回队列头部的元素 如果队列为空，则返回"),e("code",[t._v("null")])])])])]),t._v(" "),e("h2",{attrs:{id:"queue实现类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue实现类"}},[t._v("#")]),t._v(" Queue实现类")]),t._v(" "),e("h3",{attrs:{id:"priorityqueue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#priorityqueue"}},[t._v("#")]),t._v(" PriorityQueue")]),t._v(" "),e("p",[e("code",[t._v("PriorityQueue")]),t._v("是非线程安全类，"),e("code",[t._v("PriorityQueue")]),t._v("保存队列元素的顺序不是按照元素添加的顺序来保存的，而是在添加元素的时候对元素的大小排序后再保存的。因此在"),e("code",[t._v("PriorityQueue")]),t._v("中使用"),e("code",[t._v("peek()")]),t._v("或"),e("code",[t._v("pool()")]),t._v("取出队列中头部的元素，取出的不是最先添加的元素，而是最小的元素。")]),t._v(" "),e("p",[e("code",[t._v("PriorityQueue")]),t._v("中不允许拆入"),e("code",[t._v("null")]),t._v("元素，并且"),e("code",[t._v("PriorityQueue")]),t._v("有两种排列方式：")]),t._v(" "),e("ul",[e("li",[t._v("自然排序: 采用自然排序的"),e("code",[t._v("PriorityQueue")]),t._v("集合中的元素必须实现"),e("code",[t._v("Comparator")]),t._v("接口，而且应该是一个类的多个实例，否则可能导致"),e("code",[t._v("ClassCastException")]),t._v("异常。")]),t._v(" "),e("li",[t._v("定制排序: 创建"),e("code",[t._v("PriorityQueue")]),t._v("队列时，传入一个"),e("code",[t._v("Comparable")]),t._v("对象，该对象负责对所有队列中的所有元素进行排序。采用定制排序不要求必须实现"),e("code",[t._v("Comparator")]),t._v("接口。")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchElementException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),t._v(" pq "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除并返问队列头部的元素 如果队列为空，则返回null")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" first "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回队列头部的元素 如果队列为空，则抛出一个NoSuchElementException异常")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" head "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchElementException")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"priorityblockingqueue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#priorityblockingqueue"}},[t._v("#")]),t._v(" PriorityBlockingQueue")]),t._v(" "),e("p",[e("code",[t._v("PriorityBlockingQueue")]),t._v("是线程安全的，其它的和"),e("code",[t._v("PriorityQueue")]),t._v("基本相同。")]),t._v(" "),e("h3",{attrs:{id:"arrayblockingqueue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arrayblockingqueue"}},[t._v("#")]),t._v(" ArrayBlockingQueue")]),t._v(" "),e("p",[e("code",[t._v("ArrayBlockingQueue")]),t._v("是一个阻塞的队列，继承了"),e("code",[t._v("AbstractBlockingQueue")]),t._v("，间接的实现了"),e("code",[t._v("Queue")]),t._v("接口和"),e("code",[t._v("Collection")]),t._v("接口。底层以数组的形式保存数据，所以它是基于数组的阻塞队列。"),e("code",[t._v("ArrayBlockingQueue")]),t._v("是有边界值的，在创建"),e("code",[t._v("ArrayBlockingQueue")]),t._v("时就要确定好该队列的大小，一旦创建，该队列大小不可更改。内部的全局锁是使用的"),e("code",[t._v("ReentrantLock")]),t._v("。")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("参考文献")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/mercuryli/p/4636231.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java集合 之 Queue集合"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.runoob.com/java/data-queue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 实例 - 队列（Queue）用法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://plentymore.github.io/2019/01/09/Java-Queue%E6%8E%A5%E5%8F%A3%E5%B8%B8%E7%94%A8%E5%AE%9E%E7%8E%B0%E7%B1%BB/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Queue接口常用实现类"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1265121791832960",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Queue"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);