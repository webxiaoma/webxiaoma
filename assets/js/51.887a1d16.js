(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{577:function(t,e,a){"use strict";a.r(e);var v=a(24),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"io-初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-初识"}},[t._v("#")]),t._v(" IO-初识")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#io分类"}},[t._v("IO分类")])]),a("li",[a("a",{attrs:{href:"#输入流"}},[t._v("输入流")]),a("ul",[a("li",[a("a",{attrs:{href:"#输入流结构图"}},[t._v("输入流结构图")])]),a("li",[a("a",{attrs:{href:"#输入流常用方法"}},[t._v("输入流常用方法")])])])]),a("li",[a("a",{attrs:{href:"#输出流"}},[t._v("输出流")]),a("ul",[a("li",[a("a",{attrs:{href:"#输出流结构图"}},[t._v("输出流结构图")])]),a("li",[a("a",{attrs:{href:"#输出流常用方法"}},[t._v("输出流常用方法")])])])])])]),a("p"),t._v(" "),a("p",[t._v("🐴")]),t._v(" "),a("h2",{attrs:{id:"io分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io分类"}},[t._v("#")]),t._v(" IO分类")]),t._v(" "),a("p",[a("strong",[t._v("数据流是 "),a("code",[t._v("Java")]),t._v(" 进行 "),a("code",[t._v("I/O")]),t._v(" 操作的对象，它按照不同的标准可以分为不同的类别。")])]),t._v(" "),a("ul",[a("li",[t._v("按照流的方向主要分为输入流和输出流两大类。")]),t._v(" "),a("li",[t._v("数据流按照数据单位的不同分为字节流和字符流。")]),t._v(" "),a("li",[t._v("按照功能可以划分为节点流和处理流。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("所有输入流类都是 InputStream 抽象类（字节输入流）和 Reader 抽象类（字符输入流）的子类")])]),t._v(" "),a("li",[a("strong",[t._v("在 Java 中所有输出流类都是 OutputStream 抽象类（字节输出流）和 Writer 抽象类（字符输出流）的子类")])])])]),t._v(" "),a("p",[a("code",[t._v("IO")]),t._v("流操作时，出现错误经常会引发"),a("code",[t._v("IOException")]),t._v("异常。在使用系统资源时，在使用完后，需要记得关闭系统资源。")]),t._v(" "),a("p",[a("code",[t._v("IO")]),t._v("流的结构图如下"),a("a",{attrs:{href:"https://www.runoob.com/java/java-files-io.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("images",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/22/1719fdae29b2cd3b?w=687&h=763&f=png&s=191553",width:"600"}}),t._v(" "),a("h2",{attrs:{id:"输入流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入流"}},[t._v("#")]),t._v(" 输入流")]),t._v(" "),a("h3",{attrs:{id:"输入流结构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入流结构图"}},[t._v("#")]),t._v(" 输入流结构图")]),t._v(" "),a("p",[a("code",[t._v("IO")]),t._v("流操作中输入流的结构图如下"),a("a",{attrs:{href:"http://c.biancheng.net/view/1119.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("images",{attrs:{src:"/java/io01.png",width:"600"}}),t._v(" "),a("h3",{attrs:{id:"输入流常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入流常用方法"}},[t._v("#")]),t._v(" 输入流常用方法")]),t._v(" "),a("p",[t._v("输入流"),a("code",[t._v("InputStream")]),t._v("是一个抽象类，不能被实例化，它是所有输入流的超类。在输入流"),a("code",[t._v("InputStream")]),t._v("中常用的方法，")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("void close()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭数据流，当完成对数据流的操作之后需要关闭数据流")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int read()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从输入流读入一个 8 字节的数据，将它转换成一个 0~ 255 的整数，返回一个整数，如果遇到输入流的结尾返回 -1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int read(byte[] b,int off,int len)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从输入流读取若干字节的数据保存到参数 b 指定的字节数组中，其中 off 是指在数组中开始保存数据位置的起始下标，len 是指读取字节的位数。返回的是实际读取的字节数，如果遇到输入流的结尾则返回 -1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int read(byte[] b)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从输入流读取若干字节的数据保存到参数 b 指定的字节数组中，返回的字节数表示读取的字节数，如果遇到输入流的结尾返回 -1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int available()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回可以从数据源读取的数据流的位数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("skip(long n)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从输入流跳过参数 n 指定的字节数目")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boolean markSupported()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("判断输入流是否可以重复读取，如果可以就返回 true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("void mark(int readLimit)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果输入流可以被重复读取，从流的当前位置开始设置标记，readLimit 指定可以设置标记的字节数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("void reset()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使输入流重新定位到刚才被标记的位置，这样可以重新读取标记过的数据")])])])]),t._v(" "),a("p",[t._v("在使用"),a("code",[t._v("mark")]),t._v("标记时，我们一般会安下面步骤进行：")]),t._v(" "),a("ol",[a("li",[t._v("首先使用 "),a("code",[t._v("markSupported()")]),t._v(" 判断，是否可以重复读取。")]),t._v(" "),a("li",[t._v("如果可以重复读取，则使用 "),a("code",[t._v("mark(int readLimit)")]),t._v(" 方法进行标记。")]),t._v(" "),a("li",[t._v("标记完成之后可以使用 "),a("code",[t._v("read()")]),t._v(" 方法读取标记范围内的字节数。")]),t._v(" "),a("li",[t._v("最后使用 "),a("code",[t._v("reset()")]),t._v(" 方法使输入流重新定位到标记的位置，继而完成重复读取操作。")])]),t._v(" "),a("h2",{attrs:{id:"输出流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出流"}},[t._v("#")]),t._v(" 输出流")]),t._v(" "),a("h3",{attrs:{id:"输出流结构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出流结构图"}},[t._v("#")]),t._v(" 输出流结构图")]),t._v(" "),a("p",[a("code",[t._v("IO")]),t._v("流操作中输出流的结构图如下"),a("a",{attrs:{href:"http://c.biancheng.net/view/1119.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("images",{attrs:{src:"/java/io02.png",width:"600"}}),t._v(" "),a("h3",{attrs:{id:"输出流常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出流常用方法"}},[t._v("#")]),t._v(" 输出流常用方法")]),t._v(" "),a("p",[t._v("在输入流"),a("code",[t._v("OutputStream")]),t._v("中常用的方法,输入流"),a("code",[t._v("OutputStream")]),t._v("是一个抽象类，不能被实例化，它是所有输出流的超类。这个抽象类定义的一个最重要的方法就是"),a("code",[t._v("void write(int b)")]),t._v("，其它常用方法如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int write(b)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将指定字节的数据写入到输出流")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int write (byte[] b)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将指定字节数组的内容写入输出流")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("int write (byte[] b,int off,int len)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将指定字节数组从 off 位置开始的 len 字节的内容写入输出流")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("close()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭数据流，当完成对数据流的操作之后需要关闭数据流")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("flush()")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("刷新输出流，强行将缓冲区的内容写入输出流")])])])]),t._v(" "),a("p",[t._v("在向磁盘、网络写入数据的时候，出于效率的考虑，操作系统并不是输出一个字节就立刻写入到文件或者发送到网络，而是把输出的字节先放到内存的一个缓冲区里（本质上就是一个"),a("code",[t._v("byte[]")]),t._v("数组），等到缓冲区写满了，再一次性写入文件或者网络。这时可能会用到"),a("code",[t._v("flush()")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("参考文献")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://c.biancheng.net/view/1119.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java输入/输出流"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/java/java-files-io.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 流(Stream)、文件(File)和IO"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1298069154955297",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰的官方网站Java-IO"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=_.exports}}]);