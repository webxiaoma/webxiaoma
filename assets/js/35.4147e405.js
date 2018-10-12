(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{318:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/hguisu/article/details/7106394",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符编码详解及由来"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符编码笔记：ASCII，Unicode 和 UTF-8"),a("OutboundLink")],1)])]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("计算机一开始发明出来时是用来解决数字计算问题的，后来人们发现，计算机还可以做更多的事，例如文本处理。")]),t._v(" "),a("p",[t._v("计算机只“认识” 010110111000…这样由0和1两个数字组成的二进制数字，这是因为计算机的底层硬件实现就是用电路的开和闭两种状态来表示0和1两个数字的。因此，计算机只可以直接存储和处理二进制数字。另外控制开关这两种状态的底层硬件其实就是晶体管（由Bell实验室的William B. Shockley、 John Bardeen和Walter H. Brattain.发明的）")]),t._v(" "),a("p",[t._v('晶体管是一种微型电子开关。它们是计算机的"大脑"－－微处理器的基本组成部分。与基本的照明开关类似，晶体管有两种工作状态：通和断。晶体管的通/断（二进制功能）实现了计算机内部的信息处理。\n计算机唯一能够理解的信息就是通和断两种状态的电信号。我们知道开关式电子电路由电线（电流流经的电路）和开关（通过闭合或切断电路来开/关闭电路的设备）。晶体管没有机械运动的部件，它通过电信号在通和断两种状态之间转换。晶体管的通/断转换使微处理器能够完成工作。')]),t._v(" "),a("p",[t._v('计算机所处理的数据信息,是以二进制数编码表示的,其二进制数"0"和"1"是构成信息的最小单位(也是目前表示信息最简单的方式),称作"位"或"比特(bit)".')]),t._v(" "),a("p",[t._v("另外磁盘里的二进制是用N极和S极表示0和1的最终在变成电流信号 “断”和“通”来交给CPU处理，光盘上使用“长”和“短”的小镜子来表示1和0的，光盘上边都是长点和短点，通过激光的照射，根据反光的长度来表示数据")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("网上经常说二进制是逢二进一，十进制是逢十进一，我们日常生活中计算都是以十进制运算的。那么二进制运算是怎么来表示出和十进制相同的含义的。")]),t._v(" "),a("p",[t._v("这里有一个人们常提及的例子：比如我想用灯泡的开关（亮/暗）来表示屋子里进入了多少人。为了尽可能少的使用灯泡，我们定义了从右边开始第一个灯泡亮时代表 2的0次方个人，第二个灯泡亮时代表2的1次方个人，第三个灯泡亮时代表2的3次方个人，暗灯泡代表没有人以此类推。")]),t._v(" "),a("p",[t._v("屋里有1个人时：一个暗灯泡即可表示（二进制 1）\n屋里有2个人时：一个亮灯泡即可表示（二进制 10）\n屋里有3个人时：2个亮灯泡即可表示（二进制 11）\n屋里有4个人时：2个暗灯泡和1个亮灯泡即可表示（二进制 100）\n屋里有5个人时：1个暗灯泡两个亮即可表示（二进制 101）\n屋里有6个人时：二进制 110\n屋里有7个人时：二进制位 111\n屋里有8个人时：二进制位 1000\n屋里有9个人时：二进制位 1001\n.\n.\n.\n屋里有255个人时：二进制位 11111111\n屋里有256个人时：二进制位 100000000")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("多个晶体管产生的1和0所形成的特定序列和模式可以表示字母、数字、颜色和图形等字符。这就是我们所熟悉的二进制表示法。")]),t._v(" "),a("p",[t._v("计算机是美国发明的，怎么表示他们的英文符号，数字，标点符号等。这些符号加起来共有127个，即2的7次方，于是他们规定8位二进制表示一个字符，其中用一个位来进行数据校验，其他七个位用来记录数据。于是规定8个位为一个“字节”，相当于用8个可以开合的晶体管来组成不同的状态以表示字符。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("开始计算机只在美国用。八位的字节一共可以组合出256(2的8次方)种不同的状态。")]),t._v(" "),a("p",[t._v('他们把其中的编号从0开始的32种状态分别规定了特殊的用途，一但终端、打印机遇上约定好的这些字节被传过来时，就要做一些约定的动作。遇上00x10, 终端就换行，遇上0x07, 终端就向人们嘟嘟叫，例如遇上0x1b, 打印机就打印反白的字，或者终端就用彩色显示字母。他们看到这样很好，于是就把这些0x20以下的字节状态称为"控制码"．')]),t._v(" "),a("p",[t._v('他们又把所有的空格、标点符号、数字、大小写字母分别用连续的字节状态表示，一直编到了第127号，这样计算机就可以用不同字节来存储英语的文字了。大家 看到这样，都感觉很好，于是大家都把这个方案叫做 ANSI 的"Ascii"编码（American Standard Code for Information Interchange，美国信息互换标准代码）。当时世界上所有的计算机都用同样的ASCII方案来保存英文文字。')]),t._v(" "),a("p",[t._v("ASCII码使用7位2进制数表示一个字符，这样，7位2进制数可以表示出2的7次方个字符，共128个字符.。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的1位（最高位）在计算机内部通常保持为 0 （在数据传输时可用作奇偶校验位）。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("英语用128个符号编码就够了，但随着计算机技术发展，一些发达国家也开始使用了计算机，而有些国家用的不是英文，他们的字母里有许多是ASCII里没有的，比如，在法语中，字母上方有注音符号，它就无法用ASCII码表示。为此，国际标准化组织又制定了 ISO2022 标准，它规定了在保持与 ISO646 兼容的前提下将 ASCII 字符集扩充为 8 位代码的统一方法。 ISO 陆续制定了一批适用于不同地区的扩充 ASCII 字符集，每种扩充 ASCII 字符集分别可以扩充 128 个字符，比如，法语中的é的编码为130（二进制10000010）。这些扩充字符的编码均为高位为 1 的 8 位代码（即十进制数 128~255 ），称为扩展 ASCII 码。")]),t._v(" "),a("p",[t._v("由于不同的国家有不同的字母，因此， 扩充的ASCII编码，虽然它们都使用256个符号的编码方式，代表的字母却不一样。比如，130在法语编码中代表了é，在希伯来语编码中却代表了字母Gimel (ג)，在俄语编码中又会代表另一个符号。但是不管怎样，所有这些编码方式中，0—127表示的符号是一样的，不一样的只是128—255的这一段。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("计算机发明之处及后面很长一段时间，只用应用于美国及西方一些发达国家，ASCII能够很好满足用户的需求.  一个以字节就可以对这些字符进行编码。 但人类的贪婪是无限的，后来世界各个地区也将会用到计算机。而这些国家的语言字符不止256个，像咱祖先留给我们的常用汉字就有6000多个。")]),t._v(" "),a("p",[t._v('为了显示本国语言，必须对ASCII编码进行扩充，于是不同的国家和地区制定了不同的标准，由此产生了 GB2312, BIG5, JIS 等各自的编码标准。这些使用 2 个字节来代表一个字符的各种汉字延伸编码方式，称为 ANSI 编码，又称为"MBCS（Muilti-Bytes Charecter Set，多字节字符集）"。在简体中文系统下，ANSI 编码代表 GB2312 编码，在日文操作系统下，ANSI 编码代表 JIS 编码，所以在中文 windows下要转码成gb2312,gbk只需要把文本保存为ANSI 编码即可.')]),t._v(" "),a("p",[t._v("不同 ANSI 编码之间互不兼容，当信息在国际间交流时，无法将属于两种语言的文字，存储在同一段 ANSI 编码的文本中。一个很大的缺点是，同一个编码值，在不同的编码体系里代表着不同的字。这样就容易造成混乱。导致了unicode码的诞生。")]),t._v(" "),a("p",[t._v("其中每个语言下的ANSI编码，都有一套一对一的编码转换器，Unicode变成所有编码转换的中间介质。所有的编码都有一个转换器可以转换到Unicode，而Unicode也可以转换到其他所有的编码。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("需要注意的是，Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储。")]),t._v(" "),a("p",[t._v("比如，汉字严的 Unicode 是十六进制数4E25，转换成二进制数足足有15位（100111000100101），也就是说，这个符号的表示至少需要2个字节。表示其他更大的符号，可能需要3个字节或者4个字节，甚至更多。")]),t._v(" "),a("p",[t._v("这里就有两个严重的问题，第一个问题是，如何才能区别 Unicode 和 ASCII ？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果 Unicode 统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的。")]),t._v(" "),a("p",[t._v("它们造成的结果是：1）出现了 Unicode 的多种存储方式，也就是说有许多种不同的二进制格式，可以用来表示 Unicode。2）Unicode 在很长一段时间内无法推广，直到互联网的出现。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("等中国人们得到计算机时，已经没有可以利用的字节状态来表示汉字，况且有6000多个常用汉字需要保存呢。但是这难不倒智慧的中国人民，我们不客气地把那些127号之后的奇异符号们直接取消掉,")]),t._v(" "),a("p",[t._v('规定：一个小于127的字符的意义与原来相同，但两个大于127的字符连在一起时，就表示一个汉字，前面的一个字节（他称之为高字节）从0xA1用到 0xF7，后面一个字节（低字节）从0xA1到0xFE，这样我们就可以组合出大约7000多个简体汉字了。在这些编码里，我们还把数学符号、罗马希腊的 字母、日文的假名们都编进去了，连在 ASCII 里本来就有的数字、标点、字母都统统重新编了两个字节长的编码，这就是常说的"全角"字符，而原来在127号以下的那些就叫"半角"字符了。')]),t._v(" "),a("p",[t._v("GB 2312是一个简体中文字符集，由6763个常用汉字和682个全角的非汉字字符组成。其中汉字根据使用的频率分为两级。一级汉字3755个，二级汉字3008个。由于字符数量比较大，GB2312采用了二维矩阵编码法对所有字符进行编码。首先构造一个94行94列的方阵，对每一行称为一个“区”，每一列称为一个“位”，然后将所有字符依照下表的规律填写到方阵中。这样所有的字符在方阵中都有一个唯一的位置，这个位置可以用区号、位号合成表示，称为字符的区位码。如第一个汉字“啊”出现在第16区的第1位上，其区位码为1601。因为区位码同字符的位置是完全对应的，因此区位码同字符之间也是一一对应的。这样所有的字符都可通过其区位码转换为数字编码信息。")]),t._v(" "),a("p",[t._v('中国人民看到这样很不错，于是就把这种汉字方案叫做 "GB2312"。GB2312是ANSI编码的一种，即对 ASCII 的中文扩展。是中国国家标准总局发布了一系列的汉字字符集国家标准编码，统称为GB码，或国标码。其中最有影响的是于1980年发布的《信息交换用汉字编码字符集 基本集》，标准号为GB 2312-1980,因其使用非常普遍，也常被通称为国标码。GB2312编码通行于我国内地；新加坡等地也采用此编码。几乎所有的中文系统和国际化的软件都支持GB 2312。')]),t._v(" "),a("p",[t._v("GB2312编码用两个字节(8位2进制)表示一个汉字，所以理论上最多可以表示256×256=65536个汉字。但这种编码方式也仅仅在中国行得通，如果您的网页使用的GB2312编码，那么很多外国人在浏览你的网页时就可能无法正常显示，因为其浏览器不支持GB2312编码。当然，中国人在浏览外国网页(比如日文)时，也会出现乱码或无法打开的情况，因为我们的浏览器没有安装日文的编码表。")]),t._v(" "),a("p",[t._v("但由于中国的汉字太多了，我们很快就就发现有许多人的人名没有办法在这里打出来，特别是某些很会麻烦别人的国家领导人。于是我们不得不继续把 GB2312 没有用到的码位找出来老实不客气地用上。")]),t._v(" "),a("p",[t._v("GBK:后来还是不够用，于是干脆不再要求低字节一定是127号之后的内码，只要第一个字节是大于127就固定表示这是一个汉字的开始，不管后面跟的是不是扩展字 符集里的内容。结果扩展之后的编码方案被称为 GBK 标准，GBK 包括了 GB2312 的所有内容，同时又增加了近20000个新的汉字（包括繁体字）和符号。")]),t._v(" "),a("p",[t._v("GB18030:后来少数民族也要用电脑了，于是我们再扩展，又加了几千个新的少数民族的字，GBK 扩成了GB18030。从此之后，中华民族的文化就可以在计算机时代中传承了。")]),t._v(" "),a("p",[t._v("GB 18030，全称：国家标准GB 18030-2005《信息技术 中文编码字符集》，是中华人民共和国现时最新的内码字集，是GB 18030-2000《信息技术 信息交换用汉字编码字符集 基本集的扩充》的修订版。与GB 2312完全兼容，与GBK基本兼容，支持GB 13000及Unicode的全部统一汉字，共收录汉字70244个。GB 18030主要有以下特点：")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v('中国的程序员们看到这一系列汉字编码的标准是好的，于是通称他们叫做 "DBCS"（Double Byte Charecter Set 双字节字符集）。在DBCS系列标准里，最大的特点是两字节长的汉字字符和一字节长的英文字符并存于同一套编码方案里，因此他们写的程序为了支持中文处 理，必须要注意字串里的每一个字节的值，如果这个值是大于127的，那么就认为一个双字节字符集里的字符出现了。那时候凡是受过加持，会编程的计算机僧侣 们都要每天念下面这个咒语数百遍：')]),t._v(" "),a("p",[t._v('"一个汉字算两个英文字符！一个汉字算两个英文字符……"')]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("互联网的普及，强烈要求出现一种统一的编码方式。UTF-8 就是在互联网上使用最广的一种 Unicode 的实现方式。其他实现方式还包括 UTF-16（字符用两个字节或四个字节表示）和 UTF-32（字符用四个字节表示），不过在互联网上基本不用。重复一遍，这里的关系是，UTF-8 是 Unicode 的实现方式之一。")]),t._v(" "),a("p",[t._v("UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。")]),t._v(" "),a("p",[t._v("UTF-8 的编码规则很简单，只有二条：")]),t._v(" "),a("p",[t._v("1）对于单字节的符号，字节的第一位设为0，后面7位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。")]),t._v(" "),a("p",[t._v("2）对于n字节的符号（n > 1），第一个字节的前n位都设为1，第n + 1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。")]),t._v(" "),a("p",[t._v("下表总结了编码规则，字母x表示可用编码的位。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("通过上一节的例子，可以看到严的 Unicode码 是4E25，UTF-8 编码是E4B8A5，两者是不一样的。它们之间的转换可以通过程序实现。")]),t._v(" "),a("p",[t._v("Windows平台，有一个最简单的转化方法，就是使用内置的记事本小程序notepad.exe。打开文件后，点击文件菜单中的另存为命令，会跳出一个对话框，在最底部有一个编码的下拉条。")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("里面有四个选项：ANSI，Unicode，Unicode big endian和UTF-8。")]),t._v(" "),a("p",[t._v("1）ANSI是默认的编码方式。对于英文文件是ASCII编码，对于简体中文文件是GB2312编码（只针对 Windows 简体中文版，如果是繁体中文版会采用 Big5 码）。")]),t._v(" "),a("p",[t._v("2）Unicode编码这里指的是notepad.exe使用的 UCS-2 编码方式，即直接用两个字节存入字符的 Unicode 码，这个选项用的 little endian 格式。")]),t._v(" "),a("p",[t._v("3）Unicode big endian编码与上一个选项相对应。我在下一节会解释 little endian 和 big endian 的涵义。")]),t._v(" "),a("p",[t._v("4）UTF-8编码，也就是上一节谈到的编码方法。")]),t._v(" "),a("p",[t._v('选择完"编码方式"后，点击"保存"按钮，文件的编码方式就立刻转换好了。')]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("上一节已经提到，UCS-2 格式可以存储 Unicode 码（码点不超过0xFFFF）。以汉字严为例，Unicode 码是4E25，需要用两个字节存储，一个字节是4E，另一个字节是25。存储的时候，4E在前，25在后，这就是 Big endian 方式；25在前，4E在后，这是 Little endian 方式。")]),t._v(" "),a("p",[t._v("这两个古怪的名称来自英国作家斯威夫特的《格列佛游记》。在该书中，小人国里爆发了内战，战争起因是人们争论，吃鸡蛋时究竟是从大头(Big-endian)敲开还是从小头(Little-endian)敲开。为了这件事情，前后爆发了六次战争，一个皇帝送了命，另一个皇帝丢了王位。")]),t._v(" "),a("p",[t._v('第一个字节在前，就是"大头方式"（Big endian），第二个字节在前就是"小头方式"（Little endian）。')]),t._v(" "),a("p",[t._v("那么很自然的，就会出现一个问题：计算机怎么知道某一个文件到底采用哪一种方式编码？")]),t._v(" "),a("p",[t._v('Unicode 规范定义，每一个文件的最前面分别加入一个表示编码顺序的字符，这个字符的名字叫做"零宽度非换行空格"（zero width no-break space），用FEFF表示。这正好是两个字节，而且FF比FE大1。')]),t._v(" "),a("p",[t._v("如果一个文本文件的头两个字节是FE FF，就表示该文件采用大头方式；如果头两个字节是FF FE，就表示该文件采用小头方式。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"编码处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 编码处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二进制（bit）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制（bit）","aria-hidden":"true"}},[this._v("#")]),this._v(" 二进制（bit）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"二进制的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制的由来","aria-hidden":"true"}},[this._v("#")]),this._v(" 二进制的由来")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"二进制数值的通俗含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制数值的通俗含义","aria-hidden":"true"}},[this._v("#")]),this._v(" 二进制数值的通俗含义")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"字节（b）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节（b）","aria-hidden":"true"}},[this._v("#")]),this._v(" 字节（B）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"字节单位的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节单位的由来","aria-hidden":"true"}},[this._v("#")]),this._v(" 字节单位的由来")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"存储单位的换算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储单位的换算","aria-hidden":"true"}},[this._v("#")]),this._v(" 存储单位的换算")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("1b (字节)  = 8bit (比特)")]),t._v(" "),a("li",[t._v("1kb (千字节) = 1024b (字节)")]),t._v(" "),a("li",[t._v("1MB (兆字节) = 1024kb (千字节)")]),t._v(" "),a("li",[t._v("1GB (吉字节)- 1024MB (兆字节)")]),t._v(" "),a("li",[t._v("1TB = 1024GB (吉字节)")]),t._v(" "),a("li",[t._v("1PB = 1024TB")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ascii码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ascii码","aria-hidden":"true"}},[this._v("#")]),this._v(" ASCII码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ascii码的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ascii码的由来","aria-hidden":"true"}},[this._v("#")]),this._v(" ASCII码的由来")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.my.csdn.net/uploads/201301/10/1357825617_4008.png",alt:"ascii表"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ascii扩展码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ascii扩展码","aria-hidden":"true"}},[this._v("#")]),this._v(" ASCII扩展码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"unicod编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicod编码","aria-hidden":"true"}},[this._v("#")]),this._v(" Unicod编码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unicod编码的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicod编码的由来","aria-hidden":"true"}},[this._v("#")]),this._v(" Unicod编码的由来")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unicod编码的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicod编码的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" Unicod编码的问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gb2312（ascii的中文扩展）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gb2312（ascii的中文扩展）","aria-hidden":"true"}},[this._v("#")]),this._v(" GB2312（ASCII的中文扩展）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("与UTF-8相同，采用多字节编码，每个字可以由1个、2个或4个字节组成。")]),this._v(" "),s("li",[this._v("编码空间庞大，最多可定义161万个字符。")]),this._v(" "),s("li",[this._v("支持中国国内少数民族的文字，不需要动用造字区。")]),this._v(" "),s("li",[this._v("汉字收录范围包含繁体汉字以及日韩汉字")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"utf-8-编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utf-8-编码","aria-hidden":"true"}},[this._v("#")]),this._v(" utf-8 编码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\nUnicode符号范围     "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token function"}},[t._v("编码方式")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("十六进制"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("              （二进制）\n"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0000")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("007")]),t._v("F "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("xxxxxxx\n"),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0080")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("07")]),t._v("FF "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("110")]),t._v("xxxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx\n"),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0800")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("FFFF")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1110")]),t._v("xxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx\n"),a("span",{attrs:{class:"token number"}},[t._v("0001")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0000")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0010")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("FFFF")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("11110")]),t._v("xxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx\n跟据上表，解读 "),a("span",{attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v(" 编码非常简单。如果一个字节的第一位是"),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("，则这个字节单独就是一个字符；如果第一位是"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("，则连续有多少个"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("，就表示当前字符占用多少个字节。\n\n下面，还是以汉字严为例，演示如何实现 "),a("span",{attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v(" 编码。\n\n严的 Unicode 是"),a("span",{attrs:{class:"token number"}},[t._v("4E25")]),t._v("（"),a("span",{attrs:{class:"token number"}},[t._v("100111000100101")]),t._v("），根据上表，可以发现"),a("span",{attrs:{class:"token number"}},[t._v("4E25")]),t._v("处在第三行的范围内（"),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0800")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0000")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("FFFF")]),t._v("），因此严的 "),a("span",{attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v(" 编码需要三个字节，即格式是"),a("span",{attrs:{class:"token number"}},[t._v("1110")]),t._v("xxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("xxxxxx。然后，从严的最后一个二进制位开始，依次从后向前填入格式中的x，多出的位补"),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("。这样就得到了，严的 "),a("span",{attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v(" 编码是"),a("span",{attrs:{class:"token number"}},[t._v("11100100")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10111000")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10100101")]),t._v("，转换成十六进制就是"),a("span",{attrs:{class:"token constant"}},[t._v("E4B8A5")]),t._v("。\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"unicode-与-utf-8-之间的转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicode-与-utf-8-之间的转","aria-hidden":"true"}},[this._v("#")]),this._v(" Unicode 与 UTF-8 之间的转")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blog/2007/10/bg2007102801-thumb.jpg",alt:"下拉条"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"little-endian-和-big-endian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#little-endian-和-big-endian","aria-hidden":"true"}},[this._v("#")]),this._v(" Little endian 和 Big endian")])}],!1,null,null,null);e.options.__file="编码处理.md";s.default=e.exports}}]);