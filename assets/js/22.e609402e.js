(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{381:function(t,e,s){"use strict";s.r(e);var _=s(1),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 官网"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),s("OutboundLink")],1)]),t._v(" "),s("MyImg",{attrs:{src:"/img/git-2.jpg",alt:"git"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("做程序的人对于 "),s("a",{attrs:{href:"https://baike.baidu.com/item/GIT/12647237",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://baike.baidu.com/item/SVN/3311103",target:"_blank",rel:"noopener noreferrer"}},[t._v("svn"),s("OutboundLink")],1),t._v(" 应该是在熟悉不过了，当我们想控制我们的项目版本时会经常用到这两个工具，而他们的工作原理却有很大差别。它们的大致区别如下：")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("怎么理解分布式和集中式，我这里是这里去理解的，git 和 svn在远程都有一个仓库（集中版本库），但是不同的是当我们克隆下来项目时，git会在本地建立一个和远程仓库一样的本地版本库，而svn是不存在这个版本库的，也就是说我们每个人在自己的电脑上使用git克隆的项目都会有一个版本库，我们在进行我们的版本控制时添加新分支是不会影响其他人的。而svn由于是集中式管理工具，当我们把本地项目推送到远程仓库后，会对其他人带来影响，并且因为git在本地有一个版本库，这使得在没有网络链接的情况下，仍然可以正常管理我们项目的版本，而svn则必须在链接网络的情况才可以使用")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("在window上安装git "),s("a",{attrs:{href:"https://git-for-windows.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v(", 下载下来后一直点击下一步就可以了。\n安装成功后在任意一个文件夹中右击鼠标会出现, "),s("code",[t._v("Git Bush Here")]),t._v(" 和 "),s("code",[t._v("Git Gui Here")]),t._v(" 说明我们已经安装成功了。点击"),s("code",[t._v("Git Bush Here")]),t._v(" 我们可以在命令面板中进行一些git命令操作。")]),t._v(" "),s("p",[t._v("安装成功后，我们需要设置我们的邮箱和账号，因为Git是分布式版本控制系统，每个机器都要进行区分")]),t._v(" "),s("p",[t._v("全局配置：")]),t._v(" "),t._m(15),s("p",[t._v("局部配置")]),t._v(" "),t._m(16),s("p",[t._v("查看所有配置")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),s("p",[t._v("接下来在讲git工作原理前，我们先要明白几个概念")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("我们在使用git时经常是用的过程就是：")]),t._v(" "),s("p",[s("code",[t._v("git")]),t._v("的工作流程如下图 以下内容来自 "),s("a",{attrs:{href:"http://www.runoob.com/git/git-workspace-index-repo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程"),s("OutboundLink")],1)]),t._v(" "),s("MyImg",{attrs:{src:"../img/git-1.jpg",alt:"git"}}),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git-初识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-初识"}},[this._v("#")]),this._v(" GIT 初识")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-的由来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-的由来"}},[this._v("#")]),this._v(" GIT 的由来")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Git")]),this._v(" 名字由来是林纳斯·托瓦兹自嘲地取了这个名字“git”，该词源自英国俚语，意思大约是“混账”")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("自2002年开始，林纳斯·托瓦兹决定使用"),s("code",[t._v("BitKeeper")]),t._v("作为Linux内核主要的版本控制系统用以维护代码。因为"),s("code",[t._v("BitKeeper")]),t._v("为专有软件，这个决定在社群中长期遭受质疑。在Linux社群中，特别是理查德·斯托曼与自由软件基金会的成员，主张应该使用开放源代码的软件来作为"),s("code",[t._v("Linux")]),t._v("核心的版本控制系统。林纳斯·托瓦兹曾考虑过采用现成软件作为版本控制系统（例如Monotone），但这些软件都存在一些问题，特别是性能不佳。现成的方案，如"),s("code",[t._v("CVS")]),t._v(" ("),s("code",[t._v("svn")]),t._v("就是"),s("code",[t._v("cvs")]),t._v(" )的架构，受到林纳斯·托瓦兹的批评。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("2005年，安德鲁·垂鸠写了一个简单程序，可以连接"),s("code",[t._v("BitKeeper")]),t._v("的存储库，"),s("code",[t._v("BitKeeper")]),t._v("著作权拥有者拉里·麦沃伊认为安德鲁·垂鸠对"),s("code",[t._v("BitKeeper")]),t._v("内部使用的协议进行逆向工程，决定收回无偿使用"),s("code",[t._v("BitKeeper")]),t._v("的许可。"),s("code",[t._v("Linux")]),t._v("内核开发团队与"),s("code",[t._v("BitMover")]),t._v("公司进行磋商，但无法解决他们之间的歧见。林纳斯·托瓦兹决定自行开发版本控制系统替代"),s("code",[t._v("BitKeeper")]),t._v("，以十天的时间，编写出第一个git版本。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("说白了"),s("code",[t._v("Git")]),t._v(" 解决了我们什么痛点的，比如我们有一个 "),s("code",[t._v("v1.0.0")]),t._v(" 版本的项目，如果我们不是用版本控制工具，发布一个"),s("code",[t._v("v1.1.0")]),t._v("版本后，我们想保留"),s("code",[t._v("v1.0.0")]),t._v(" 版本的项目供以后某些情况下使用或提供用户不同版本项目的使用，我们只能将"),s("code",[t._v("v1.0.0")]),t._v(" 版本的项目复制一份保留起来，如果我们在发布一个版本"),s("code",[t._v("v1.2.0")]),t._v("，我们又要保留一个"),s("code",[t._v("v1.0.0")]),t._v(" 版本的项目，如此一来，如果版本发布了很多我们将会有大量的版本项目，这样我们管理起来也会很麻烦。而版本工具的出现正好解决了我们这个问题，当然版本工具也解决了多个人共同开发一个项目的问题以及一些提高团队开发效率的问题，并且还可以在不连接网络的情况下对我们的版本进行控制，而像svn这样的集中式管理工具只能在联网的情况下才可以使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-vs-svn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-vs-svn"}},[this._v("#")]),this._v(" Git vs SVN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1. GIT是分布是版本控制工具，svn是集中式管理工具")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2. GIT把内容按元数据方式存储，而SVN是按文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3. GIT分支和SVN的分支不同")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("4. GIT没有一个全局的版本号，而SVN有")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("5. GIT的内容完整性要优于SVN")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("需要注意的是，上面列举的git和svn区别并不是为了说明git要比svn好很多，这也不能成为它们好坏的评判标准，一个工具的优势主要还是要看我们项目的实际需求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-安装"}},[this._v("#")]),this._v(" Git 安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("window 上的安装")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$ git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$ git config  user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ git config  user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("$ git config "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("--")]),this._v("list\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-工作原理"}},[this._v("#")]),this._v(" Git 工作原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("假设我们有一个本地的使用git控制版本的"),e("code",[this._v("project")]),this._v("项目，目录结构如下")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// git版本库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("概念")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("工作区")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("所谓工作区就是指的你的本地目录也就上上边的"),s("code",[t._v("project")]),t._v("项目，当然不包括"),s("code",[t._v(".git目录")])])]),t._v(" "),s("tr",[s("td",[t._v("暂存区（索引）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放在"),s("code",[t._v(".git目录")]),t._v("下的"),s("code",[t._v("index")]),t._v("文件中")])]),t._v(" "),s("tr",[s("td",[t._v("版本库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指我们工作区中的"),s("code",[t._v(".git目录")]),t._v("，该目录是个隐藏目录")])]),t._v(" "),s("tr",[s("td",[t._v("远程仓库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指的是我们网上托管项目的地方，比如github、码云")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("图中左侧为工作区，右侧为版本库。在版本库中标记为 "),s("code",[t._v("index")]),t._v(" 的区域是暂存区（"),s("code",[t._v("stage, index")]),t._v("），标记为 "),s("code",[t._v("master")]),t._v(" 的是 "),s("code",[t._v("master")]),t._v(" 分支所代表的目录树,分支范畴下面会讲到")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("图中我们可以看出此时 "),s("code",[t._v("HEAD")]),t._v(" 实际是指向 "),s("code",[t._v("master")]),t._v(' 分支的一个"游标"。所以图示的命令中出现 '),s("code",[t._v("HEAD")]),t._v(" 的地方可以用 "),s("code",[t._v("master")]),t._v(" 来替换。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("图中的 "),e("code",[this._v("objects")]),this._v(" 标识的区域为 "),e("code",[this._v("Git")]),this._v(" 的对象库，实际位于 "),e("code",[this._v(".git/objects")]),this._v(" 目录下，里面包含了创建的各种对象及内容。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("当对工作区修改（或新增）的文件执行 "),s("code",[t._v("git add .")]),t._v(" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。")])]),t._v(" "),s("li",[s("p",[t._v("当执行提交操作（"),s("code",[t._v("git commit")]),t._v("）时，暂存区的目录树写到版本库（对象库）中，"),s("code",[t._v("master")]),t._v(" 分支会做相应的更新。即 "),s("code",[t._v("master")]),t._v(" 指向的目录树就更新成了提交时暂存区的目录树。")])]),t._v(" "),s("li",[s("p",[t._v("当执行 "),s("code",[t._v("git reset HEAD")]),t._v(" 命令时，暂存区的目录树会被重写，被 "),s("code",[t._v("master")]),t._v(" 分支指向的目录树所替换，但是工作区不受影响。")])]),t._v(" "),s("li",[s("p",[t._v("当执行 "),s("code",[t._v("git rm --cached <file>")]),t._v(" 命令时，会直接从暂存区删除文件，工作区则不做出改变。")])]),t._v(" "),s("li",[s("p",[t._v("当执行 "),s("code",[t._v("git checkout .")]),t._v(" 或者 "),s("code",[t._v("git checkout -- <file>")]),t._v(" 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。")])]),t._v(" "),s("li",[s("p",[t._v("当执行 "),s("code",[t._v("git checkout HEAD .")]),t._v(" 或者 "),s("code",[t._v("git checkout HEAD <file>")]),t._v(" 命令时，会用 "),s("code",[t._v("HEAD")]),t._v(" 指向的 "),s("code",[t._v("master")]),t._v(" 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。")])]),t._v(" "),s("li",[s("p",[t._v("当执行 "),s("code",[t._v("git push")]),t._v(" 时，我们本地版本库中的项目将会推送到远程仓库中。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("接下来让我们来详细的学习"),e("code",[this._v("git")]),this._v("的基本操作")])}],!1,null,null,null);e.default=r.exports}}]);