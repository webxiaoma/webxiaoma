(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{321:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("以下命令来自网络")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2009/10/5_ways_to_search_for_files_using_the_terminal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查找命令的具体使用"),n("OutboundLink")],1)]),t._v(" "),t._m(16)]),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),t._m(20),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.runoob.com/linux/linux-user-manage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细账号操作"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("账户相关文件")]),t._v(" "),t._m(21),t._v(" "),t._m(22)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"linux-常见命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-常见命令","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 常见命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"linux-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-目录","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 目录")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("├── bin   "),n("span",{attrs:{class:"token comment"}},[t._v("//常用的命令")]),t._v("\n├── boot   "),n("span",{attrs:{class:"token comment"}},[t._v("//放置一些启动用的临时文件,包括一些连接文件以及镜像文件。")]),t._v("\n├── cdrom  "),n("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n├── dev  "),n("span",{attrs:{class:"token comment"}},[t._v("//设备文件,在Linux中访问设备的方式和访问文件的方式是相同的     ")]),t._v("\n├── etc  "),n("span",{attrs:{class:"token comment"}},[t._v("//系统所有配置文件都放在它下面")]),t._v("\n├── home   "),n("span",{attrs:{class:"token comment"}},[t._v("//用户目录，对应权限用户只能查看到自己的目录")]),t._v("\n│   ├── ec2"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("user   "),n("span",{attrs:{class:"token comment"}},[t._v("//aws登录名ec2-user权限的目录")]),t._v("\n├── lib    "),n("span",{attrs:{class:"token comment"}},[t._v("//这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。")]),t._v("\n├── lost"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("found  "),n("span",{attrs:{class:"token comment"}},[t._v("//用于存放系统异常时丢失的文件")]),t._v("\n├── media  "),n("span",{attrs:{class:"token comment"}},[t._v("//用于挂在本地磁盘或者其他储存设备")]),t._v("\n├── mnt  "),n("span",{attrs:{class:"token comment"}},[t._v("//用于挂在其他临时系统文件")]),t._v("\n├── opt   "),n("span",{attrs:{class:"token comment"}},[t._v("//这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")]),t._v("\n├── proc   "),n("span",{attrs:{class:"token comment"}},[t._v("//包含进程等信息，不是内存映射，不是真实目录")]),t._v("\n├── root "),n("span",{attrs:{class:"token comment"}},[t._v("//root用户的目录")]),t._v("\n├── run    "),n("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n├── sbin   "),n("span",{attrs:{class:"token comment"}},[t._v("//里面很多是root用户才能执行的命令，系统的更新备份还原和开关机用的")]),t._v("\n├── selinux  "),n("span",{attrs:{class:"token comment"}},[t._v("// 这个目录是Redhat/CentOS所特有的目录，Selinux是一个安全机制，类似于windows的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。          ")]),t._v("\n├── srv  "),n("span",{attrs:{class:"token comment"}},[t._v("//service的缩写，是一些网路服务启动后，这些服务所需取用资料目录")]),t._v("\n├── sys  "),n("span",{attrs:{class:"token comment"}},[t._v("//系统信息")]),t._v("\n├── tmp  "),n("span",{attrs:{class:"token comment"}},[t._v("//存放各种临时文件")]),t._v("\n├── usr  "),n("span",{attrs:{class:"token comment"}},[t._v("//我们主要的操作空间，多应用程序和文件都放在这个目录下")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("——bin "),n("span",{attrs:{class:"token comment"}},[t._v("//系统用户使用的应用程序。")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("——sbin "),n("span",{attrs:{class:"token comment"}},[t._v("//超级用户使用的比较高级的管理程序和系统守护程序。")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("——src "),n("span",{attrs:{class:"token comment"}},[t._v("//内核源代码默认的放置目录。")]),t._v("\n└── "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("//变量文件--在运行中内容不断变化的文件。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"文件操作命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件操作命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件操作命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用操作")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("ls [-adl]： 列出目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -a ：全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -d ：仅列出目录本身，而不是列出目录内的文件数据")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -l ：长数据串列出，包含文件的属性与权限等等数据；")]),t._v("\ncd：切换目录\npwd：显示目前的目录\nmkdir [-mp] ：创建一个新的目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -m ：配置文件的权限喔！直接配置，不需要看默认权限 (umask)")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！")]),t._v("\nrmdir [-p]： 删除一个空的目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -p ：连同上一级『空的』目录也一起删除")]),t._v("\ncp [-adfilprsu] 复制文件或目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -f：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -r：递归持续复制，用於目录的复制行为")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -i：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -p：连同文件的属性一起复制过去，而非使用默认属性")]),t._v("\nrm [-fir] 文件或目录 :移除文件或目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -i ：互动模式，在删除前会询问使用者是否动作")]),t._v("\nmv [-fiu] 要移动的文件 移动到的目录：移动文件或目录\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -u ：若目标文件已经存在，且 source 比较新，才会升级 (update)")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"文件属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://www.runoob.com/wp-content/uploads/2014/06/363003_1227493859FdXT.png",alt:"linux 文件属性"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("p",[t._v("第一组 表示文件类型")]),t._v(" "),n("ul",[n("li",[t._v("[ d ]则是目录")]),t._v(" "),n("li",[t._v("[ - ]则是文件；")]),t._v(" "),n("li",[t._v("[ l ]则表示为链接文档(link file)；")]),t._v(" "),n("li",[t._v("[ b ]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；")]),t._v(" "),n("li",[t._v("[ c ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)")])])]),t._v(" "),n("li",[n("p",[t._v("第二组 表示文件所有者的权限")])]),t._v(" "),n("li",[n("p",[t._v("第三组 表示所有者的同组用户所拥有的权限")])]),t._v(" "),n("li",[n("p",[t._v("第四组 其他用户拥有的权限")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("没有权限用 "),s("code",[this._v("-")]),this._v("表示")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"vi-vim-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vi-vim-的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" vi/vim 的使用")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("按 esc 退出输入模式，切换到命令模式\n\ni 切换到输入模式，以输入字符。\nx 删除当前光标所在处的字符。\n: 切换到底线命令模式，以在最底一行输入命令。\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    q 退出程序")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    q! 强制退出")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    w 保存文件")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    w! 强制写入（受文件权限影响）")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查看内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看内容")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("cat [-AbEnTv] 由第一行开始显示文件内容\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -A ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -E ：将结尾的断行字节 $ 显示出来；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -T ：将 [tab] 按键以 ^I 显示出来；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -v ：列出一些看不出来的特殊字符")]),t._v("\ntac  从最后一行开始显示，可以看出 tac 是 cat 的倒著写！\nnl [-bnw]  显示的时候，顺道输出行号！\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -b ：指定行号指定的方式，主要有两种：")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("        -b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("        -b t ：如果有空行，空的那一行不要列出行号(默认值)；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -n ：列出行号表示的方法，主要有三种：")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("        -n ln ：行号在荧幕的最左方显示；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("        -n rn ：行号在自己栏位的最右方显示，且不加 0 ；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("        -n rz ：行号在自己栏位的最右方显示，且加 0 ；")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -w ：行号栏位的占用的位数。")]),t._v("\nmore 一页一页的显示文件内容\nless 与 more 类似，但是比 more 更好的是，他可以往前翻页！\nhead [-n number] 只看头几行\ntail [-n number] 只看尾巴几行\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -n ：后面接数字，代表显示几行的意思")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用操作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用操作-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用操作")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("查看电脑ip:\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    ip addr show")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    hostname -I")]),t._v("\n\n查找命令:\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    find 指定目录 指定条件 指定动作：查询目录，会列出目录中的其它文件目录")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    locate： 类似 find -name，区别会查询数据库，数据库每天才会更新一次。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    whereis： 只能用于程序名的搜索")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    which： 在PATH变量指定的路径中，搜索某个系统命令的位置")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    type： 查询命令是否是shell自带命令 type cd")]),t._v("\n\n安装程序：\napt-get\nyum\n\n\n\n链接命令：\nln [bdfinsv] 源文件 目标文件: 链接文件（默认硬链接，加 -s 为软链接）\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -b 删除，覆盖以前建立的链接")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -d 允许超级用户制作目录的硬链接")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -f 强制执行")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -i 交互模式，文件存在则提示用户是否覆盖")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -n 把符号链接视为一般目录")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -s 软链接(符号链接)")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -v 显示详细的处理过程")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("关于 "),s("code",[this._v("ln")]),this._v("命令"),s("code",[this._v("软链接")]),this._v("和"),s("code",[this._v("硬链接")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式")]),t._v(" "),n("li",[t._v("软链接可以 跨文件系统 ，硬链接不可以")]),t._v(" "),n("li",[t._v("软链接可以对一个不存在的文件名进行链接")]),t._v(" "),n("li",[t._v("软链接可以对目录进行链接")]),t._v(" "),n("li",[t._v("硬链接，以文件副本的形式存在。但不占用实际空间。")]),t._v(" "),n("li",[t._v("不允许给目录创建硬链接")]),t._v(" "),n("li",[t._v("硬链接只有在同一个文件系统中才能创建")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 创建fileOne.txt的一个链接文件fileTwo.txt")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// fileTwo.txt 文件若存在使用 ln -b fileOne.txt fileTwo.txt")]),t._v("\nln fileOne"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt fileTwo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt \n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 创建一个软链接（下面是将nodejs添加到全局变量中）")]),t._v("\nln "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//删除软了链接")]),t._v("\nrm "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("rf filetwo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("tileone"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"账户操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账户操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 账户操作")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("切换用户：\nsu 用户名：切换用户，可以切换到root\n\n\n用户操作:\nuseradd [cdgGsu] 用户名： 添加用户\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -c comment 指定一段注释性描述。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -g 用户组 指定用户所属的用户组。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -G 用户组，用户组 指定用户所属的附加组。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -s Shell文件 指定用户的登录Shell。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    例如：sudo useradd -d newuser /home/newuser newuser")]),t._v("\nuserdel [-r] 用户名：删除用户\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -r 把用户的主目录一起删除。")]),t._v("\nusermod [cdmgGsuo] 用户名：修改账号\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    参数同 useradd")]),t._v("\npasswd [ludf] 用户名：设置用户口令(密码)\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -l 锁定口令，即禁用账号。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -u 口令解锁。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -d 删除口令。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -f 强迫用户下次登录时修改口令。")]),t._v("\n\n用户组操作：\ngroupadd [go] 用户组名：添加用户组\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -g GID 指定新用户组的组标识号（GID）。")]),t._v("\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -o 一般与-g选项同时使用，表示新用户组的GID可以与系统已有用户组的GID相同。")]),t._v("\ngroupdel 用户组名：删除用户组\ngroupmod [gon] 用户组名：修改用户组属性\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    -n新用户组 将用户组的名字改为新名字")]),t._v("\nnewgrp 用户组名：切换用户组（一个用户有属于多个用户组时）\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("code",[t._v("/etc/passwd")]),t._v(" 记录每个用户信息")]),t._v(" "),n("li",[n("code",[t._v("/etc/shadow")]),t._v(" 记录每个用户的账号密码以及一些行为")]),t._v(" "),n("li",[n("code",[t._v("/etc/group")]),t._v(" 记录每个用户组信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// /etc/passwd 文件")]),t._v("\nuserone"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1001")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1003")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bash\nusertwo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1002")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1003")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("two"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("sh\n用户名"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("口令"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("用户标识号"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("组标识号"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("注释性描述"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("主目录"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("登录Shell\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// /etc/shadow 文件")]),t._v("\n登录名"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("加密口令"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("最后一次修改时间"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("最小时间间隔"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("最大时间间隔"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("警告时间"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("不活动时间"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("失效时间"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("标志\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//  /etc/group 文件")]),t._v("\nwebxiaoma"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nsam"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1002")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nnewGroup"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1003")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n组名"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("口令"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("组标识号"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("组内用户列表\n")])])])}],!1,null,null,null);e.options.__file="linux-init.md";s.default=e.exports}}]);