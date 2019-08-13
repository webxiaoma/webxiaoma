(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("知道了git的大概工作的大概流程我们来实践一下git的基础操作")]),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("来自官网"),s("OutboundLink")],1),t._v("有种情况我们经常会遇到：某个工作中的项目需要包含并使用另一个项目。 也许是第三方库，或者你独立开发的，用于多个父项目的库。 现在问题来了：你想要把它们当做两个独立的项目，同时又想在一个项目中使用另一个。这个时候我们就需要用到"),s("code",[t._v("git")]),t._v("的子模块功能了。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("这种方法克隆下拉的仓库它的子仓库就已经初始化好了")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),s("p",[t._v("删除子模块我们可以使用")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git的子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" Git的子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用基础指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用基础指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用基础指令")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("本章命令")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git submodule add 远程仓库地址")]),t._v(" 添加子模块")]),t._v(" "),s("li",[s("code",[t._v("git submodule init")]),t._v(" 初始化本地配置文件")]),t._v(" "),s("li",[s("code",[t._v("git submodule updata")]),t._v(" 拉取子模块数据")]),t._v(" "),s("li",[s("code",[t._v("git clone --recursive 远程仓库地址")]),t._v(" 克隆包含子模块的仓库（不用初始化）")]),t._v(" "),s("li",[s("code",[t._v("git rm 子模块")]),t._v(" 删除子模块")]),t._v(" "),s("li",[s("code",[t._v("git submodule foreach 操作命令")]),t._v(" 遍历子模块执行同样的命令")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("说白了我们要做的就是在一个"),e("code",[this._v("git")]),this._v("仓库中在克隆一个"),e("code",[this._v("git")]),this._v("仓库做为它的子仓库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-添加子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 添加子模块")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("比如我们已经有一个"),s("code",[t._v("test")]),t._v("仓库了，我们在该仓库中加入一个"),s("code",[t._v("project")]),t._v("仓库来作为它的子模块，我们来"),s("code",[t._v("test")]),t._v("仓库中执行"),s("code",[t._v("git submodule add 远程仓库地址")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" git submodule add git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webxiaoma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行完后我们会看到自我们的"),e("code",[this._v("test")]),this._v("仓库中有了一个"),e("code",[this._v("project")]),this._v("仓库，而且在根目录下多了一个"),e("code",[this._v(".gitmodules")]),this._v(" 文件，这个文件中记录着我们子仓库的信息")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("submodule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" project\n\turl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webxiaoma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("并且我们现在可以进入我们的版本库"),s("code",[t._v(".git")]),t._v(" 目录来看一下，该目录中会多出一个"),s("code",[t._v("modules")]),t._v(" 文件夹，该文件夹中保存了我们"),s("code",[t._v("project")]),t._v(" 仓库的一些配置信息和版本，他就是我们子仓库的版本库，在我们的"),s("code",[t._v("config")]),t._v("配置文件中也多出了一个"),s("code",[t._v("submodule")]),t._v("模块来记录我们子仓库的远程地址")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上省略")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("submodule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\turl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webxiaoma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n\tactive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("另外对子模块"),e("code",[this._v("project")]),this._v("的git操作和平常命令一样，我们只要在子模块中去执行就可以。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-克隆含有子模块的仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-克隆含有子模块的仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 克隆含有子模块的仓库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这里为了操作克隆含有子模块的仓库，我们将我们上面"),e("code",[this._v("test")]),this._v("仓库提交并推送到远程，之后我们删除本地"),e("code",[this._v("test")]),this._v("仓库，然后我们来克隆它，这里将带有子模块的仓库克隆下来并初始化有两种方法：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("第一种方法")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git clone git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webxiaoma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("克隆下来后我们进入子模块"),e("code",[this._v("project")]),this._v("目录中，会发现该目录是空的，我们需要初始化子模块。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// 初始化本地配置文件")]),this._v("\ngit submodule init\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// 则从该项目中抓取所有数据并检出父项目中列出的合适的提交")]),this._v("\ngit submodule updata\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("第二种方法")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("recursive git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webxiaoma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-推送子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-推送子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 推送子模块")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("推送子模块我们可以直接在子模块中执行"),s("code",[t._v("git push")]),t._v("，如果提示你执行"),s("code",[t._v("git push origin HEAD:<远程分支名>")]),t._v(", 你查看一下你是否处于子模块的"),s("code",[t._v("master")]),t._v(" 分支，如果不是切换到"),s("code",[t._v("master")]),t._v("分支去推送，推送完成后我们再去推送我们的父模块。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-更新子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-更新子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 更新子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们更新子模块有两种方法。第一种方法我们在子模块目录直接使用"),e("code",[this._v("git pull")]),this._v(";")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第二种方法是使用"),e("code",[this._v("git submodule update --remote 子仓库名")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git submodule update "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("--")]),this._v("remote project\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-删除子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 删除子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git rm project\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("这样删除的子模块其实只是把我们子模块的文件夹删除了，并没有将子模块的信息删彻底，我们还要进入"),s("code",[t._v(".git/module")]),t._v(" 目录中将"),s("code",[t._v("project")]),t._v("目录删除（这个目录对应的是子模块的的目录，如果你的模块叫"),s("code",[t._v("lesson")]),t._v(",那么就在"),s("code",[t._v(".git/module")]),t._v(" 目录中删除对应的"),s("code",[t._v("lesson")]),t._v("目录）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-批量操作子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-批量操作子模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 批量操作子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果主仓库中含有很多的子模块，我们在推送主仓库时需要先推送每一个子模块，这样操作很麻烦，我们可以使用"),e("code",[this._v("git submodule foreach 命令")]),this._v("，"),e("code",[this._v("foreach")]),this._v("可以遍历所有子模块并执行我们要执行的命令。例如我们推送所有子模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git submodule foreach "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'git pull'")]),this._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);