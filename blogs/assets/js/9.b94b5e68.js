(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{305:function(t,s,e){"use strict";e.r(s);var a=e(1),_=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("知道了git的大概工作的大概流程我们来实践一下git的基础操作")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),e("p",[t._v("初始化之后我们的"),e("code",[t._v("project")]),t._v("目录下回有一个"),e("code",[t._v(".git")]),t._v(" 目录，由于该目录是隐藏目录，可能你的"),e("code",[t._v("project")]),t._v("目录看不到该目录，window上你可以这样设置"),e("a",{attrs:{href:"https://jingyan.baidu.com/article/acf728fd2853fef8e410a37f.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("显示隐藏目录"),e("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),e("p",[t._v("这时会出现下面输出")]),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-4.jpg",alt:"git初始化"}}),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("并且此时我们的工作目录、版本库和缓存区它们的状态就是这样的：")]),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-1.jpg",alt:"git初始化"}}),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-5.jpg",alt:"git缓存区"}}),t._v(" "),e("p",[t._v("并且此时我们的工作目录、版本库和缓存区它们的状态就是这样的：")]),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-2.jpg",alt:"git缓存区"}}),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-6.jpg",alt:"git缓存区"}}),t._v(" "),e("p",[t._v("此时我们的工作目录、版本库和缓存区它们的状态就是这样的：")]),t._v(" "),e("MyImg",{attrs:{src:"/img/git-2-3.jpg",alt:"git提交"}}),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("该操作有一下几种用法：")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),e("p",[t._v("获取当前版本完整id")]),t._v(" "),t._m(32),e("p",[t._v("获取短的 commit id")]),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),e("p",[t._v("我们可以看到输出结果")]),t._v(" "),t._m(36),t._m(37)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git的基础操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git的基础操作","aria-hidden":"true"}},[this._v("#")]),this._v(" Git的基础操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用基础指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用基础指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用基础指令")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("本章命令")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git init")]),t._v(" 初始化项目")]),t._v(" "),e("li",[e("code",[t._v("git add")]),t._v("  添加项目到暂存区")]),t._v(" "),e("li",[e("code",[t._v("git commit -m '备注'")]),t._v(" 提交项目到版本库（必须写上备注）")]),t._v(" "),e("li",[e("code",[t._v("git status")]),t._v(" 查看当前仓库状态")]),t._v(" "),e("li",[e("code",[t._v("git diff")]),t._v(" 查看修改仓库内容")]),t._v(" "),e("li",[e("code",[t._v("git rev-parse HEAD")]),t._v(" 获取完整commitID")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如我们本地项目创建一个"),s("code",[this._v("project")]),this._v("目录，然后使用"),s("code",[this._v("git init")]),this._v("命令将我们的项目初始化为一个"),s("code",[this._v("git")]),this._v("仓库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("// 创建project 目录")]),this._v("\nmkdir project \n\n"),s("span",{attrs:{class:"token comment"}},[this._v("// 进入project目录")]),this._v("\ncd project \n\n"),s("span",{attrs:{class:"token comment"}},[this._v("//初始化本地仓库")]),this._v("\ngit init \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v(".git")]),this._v(" 这个目录就版本库，里边记录着我们的项目的版本（提交记录），还有暂存区以及一些其它的git信息。需要注意的是这个目录下的文件不要随意去更改，不然可能会影响git的使用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"添加到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加到暂存区","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加到暂存区")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("初始化我们的仓库后，我们在"),e("code",[t._v("project")]),t._v("目录下新建一个"),e("code",[t._v("test.js")]),t._v("文件。此时我们的工作区就会有一个"),e("code",[t._v("test.js")]),t._v(" 文件，在这里我们可以使用 "),e("code",[t._v("git status")]),t._v("命令来查看本地仓库的状态")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git status\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("图中红色的文字就是指的是我们创建的"),s("code",[this._v("test.js")]),this._v("文件, 只要在工作区中新增的文件或修改过的文件没有被添加到缓存区中，当我们查看仓库状态时就会将这些文件以红色标记出来，并提示我们将它们添加到缓存区。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("工作区中有一个 "),s("code",[this._v("test.js")]),this._v(" 文件，而暂存区中不存在任何东西，"),s("code",[this._v("master")]),this._v("分支中也不存在任何东西，（需要知道的是当我们初始化git仓库时，git会为我们自动生成一个master分支，并将"),s("code",[this._v("HEAD")]),this._v("指针指向该分支。在接下来分支管理的文章中我们会详细的讨论）。object对象库此时也是空的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("接下来我们使用 "),s("code",[this._v("git add")]),this._v("命令将"),s("code",[this._v("test.js")]),this._v(" 文件添加到我们的暂存区中")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git add test"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们也可以使用 "),s("code",[this._v("git add .")]),this._v(" 将我们工作区内的所有文件添加到暂存区，添加到缓存区后我们在执行"),s("code",[this._v("git status")]),this._v(" 命令可以看到添加到缓存区的文件会显示绿色，并提示我们将它提交到版本库中")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("工作区中有一个 "),e("code",[t._v("test.js")]),t._v(" 文件，执行完"),e("code",[t._v("git add test.js")]),t._v("命令后暂存区中会生成（或更新）和工作区对应的目录，每个目录和文件生成对应的id，并且将我们的工作区"),e("code",[t._v("test.js")]),t._v("文件写入 "),e("code",[t._v("objces")]),t._v(" 对象库中，并且该对象的ID对应暂存区的索引中，形成对应关系（有点像书的目录对应某一页书的内容一样）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("需要注意的是：git在添加项目到缓存区时，会忽略项目中的空文件夹，也就是不会把空文件夹添加到缓存区。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"提交项目到版本库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交项目到版本库","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交项目到版本库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们将 "),s("code",[this._v("test.js")]),this._v(" 文件添加到缓存区后，使用"),s("code",[this._v("git commit")]),this._v(" 命令将它提交到本地版本库，提交时我们需要使用"),s("code",[this._v("-m")]),this._v("为我们提交的项目版本加上备注。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git commit "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("m "),s("span",{attrs:{class:"token string"}},[this._v("'提交练习'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("使用 "),s("code",[this._v("git commit")]),this._v(" 提交时需要加上备注 "),s("code",[this._v("git commit -m '备注'")]),this._v(" ，否则你可能提交不成功")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("提交完成后我们在次执行"),s("code",[this._v("git status")]),this._v(" 命令，可以看到提示我们"),s("code",[this._v("working tree clean")]),this._v(" 工作区是干净的，这说明我们已经提交成功。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("提交后，我们暂存区中的项目目录会存入到 "),s("code",[this._v("objces")]),this._v(" 对象库中，并且master分支上会更新目录信息，并和 "),s("code",[this._v("objces")]),this._v(" 对象库对应起来。到此一次项目版本的更新在git仓库中就完成了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"查看修改内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看修改内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看修改内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们修改文件后，git会通过工作区文件和版本库中的对比来发现我们修改了那些文件以及文件中的那些内容。我们将修改后的项目提交到版本库后，我们可以通过 "),s("code",[this._v("git diff")]),this._v(" 来查看我们的项目做了那些修改，也就是通过该命令获取我们仓库中工作区、暂存区、版本库之间的差异信息。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("git diff 常见用法")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("git diff 不加参数")]),t._v(" 比较工作区和暂存区的差别（只比较修改文件和删除的，不会比较新增加的）")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git diff --cached")]),t._v("比较暂存区与最新本地版本库差别")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git diff HEAD")]),t._v(" 比较工作区和最新版本库的差别")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git diff commit-id")]),t._v(" 比较工作区与指定"),e("code",[t._v("commitId")]),t._v("版本的差异")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git diff --cached commit-id")]),t._v(" 比较暂存区与指定"),e("code",[t._v("commitId")]),t._v("版本的差异")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git diff commit-id1 commit-id2")]),t._v(" 比较两个"),e("code",[t._v("commitId")]),t._v("版本之间的差异")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们来操作一下，我们修改"),s("code",[this._v("project")]),this._v(" 目录下的"),s("code",[this._v("test.js")]),this._v(" 文件。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// test.js")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"test.js 文件被修改"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后我们执行 "),s("code",[this._v("git diff")]),this._v("，比较工作区和暂存区的差别，我们会看到输出以下结果")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("diff "),e("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("git a"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js b"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nindex e69de29"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c6f586a "),e("span",{attrs:{class:"token number"}},[t._v("100644")]),t._v("\n"),e("span",{attrs:{class:"token operator"}},[t._v("--")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),e("span",{attrs:{class:"token operator"}},[t._v("++")]),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n@@ "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token number"}},[t._v("0")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" @@\n"),e("span",{attrs:{class:"token operator"}},[t._v("+")]),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"test.js 文件被修改"')]),t._v("\n\\ No newline at end "),e("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" file\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们很清楚的看到，上边信息显示了在工作区中"),s("code",[this._v("test.js")]),this._v("文件比缓存区中的"),s("code",[this._v("test.js")]),this._v("文件多了一行"),s("code",[this._v('var a = "test.js 文件被修改"')]),this._v("代码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在来练习一个 比较工作区与指定"),s("code",[this._v("commitId")]),this._v("版本的差异，首先我们要先获取我们的"),s("code",[this._v("commitId")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git rev"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("parse "),s("span",{attrs:{class:"token constant"}},[this._v("HEAD")]),this._v(" \n\n"),s("span",{attrs:{class:"token comment"}},[this._v("// 输出")]),this._v("\nc2ef6296d6b1119bfc9d4142fe1407a3bc0d8aed\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// 获取当前版本完整id")]),t._v("\ngit rev"),e("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("parse "),e("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("short "),e("span",{attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" \n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\nc2ef629\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比较工作区与指定"),s("code",[this._v("commitId")]),this._v("版本的差异")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git diff c2ef6296d6b1119bfc9d4142fe1407a3bc0d8aed\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("diff "),e("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("git a"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js b"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nindex e69de29"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c6f586a "),e("span",{attrs:{class:"token number"}},[t._v("100644")]),t._v("\n"),e("span",{attrs:{class:"token operator"}},[t._v("--")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),e("span",{attrs:{class:"token operator"}},[t._v("++")]),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n@@ "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token number"}},[t._v("0")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" @@\n"),e("span",{attrs:{class:"token operator"}},[t._v("+")]),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"test.js 文件被修改"')]),t._v("\n\\ No newline at end "),e("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" file\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们看到当前目录和最新版本库中的差异也是"),s("code",[this._v('var a = "test.js 文件被修改"')]),this._v(",其它的"),s("code",[this._v("git diff")]),this._v("参数使用方法和我们列举的两个都大同小异，这里不在列举，可以自己动手尝试一下。")])}],!1,null,null,null);_.options.__file="Git的基本操作.md";s.default=_.exports}}]);