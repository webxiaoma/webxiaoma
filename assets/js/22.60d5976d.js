(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{382:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"git的相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git的相关配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Git的相关配置")]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[s("code",[t._v("git")]),t._v(" 的配置文件一般有三类，第一类是系统级的配置文件，第二类是全局的配置文件，第三类是局部针对单个仓库的配置文件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("系统级配置文件"),s("code",[t._v("gitconfig")])]),t._v(" "),s("p",[t._v("在我们git安装目录下的"),s("code",[t._v("gitconfig")]),t._v("文件中，如果没有可以搜索该目录下的"),s("code",[t._v("gitconfig")]),t._v("文件")])]),t._v(" "),s("li",[s("p",[t._v("全局配置文件"),s("code",[t._v(".gitconfig")])]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("window")]),t._v("下一般位于"),s("code",[t._v("C:\\Users\\Administrator\\.gitconfig")]),t._v("，如果没有可以在"),s("code",[t._v("Users")]),t._v("下搜索一下; 在 linux 中一般位于"),s("code",[t._v("/root/.gitconfig")]),t._v(" 中")])]),t._v(" "),s("li",[s("p",[t._v("局部配置文件"),s("code",[t._v("config")])]),t._v(" "),s("p",[t._v("我们每个仓库中都有"),s("code",[t._v(".git")]),t._v("隐藏目录，这时版本库。局部配置文件"),s("code",[t._v("config")]),t._v("就在我们版本库里。")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("配置文件是有优先级的， 系统配置文件优先级 > 局部配置文件优先级 > 全局配置文件优先级")])]),t._v(" "),s("h2",{attrs:{id:"配置操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置操作")]),t._v(" "),s("p",[t._v("git中使用 "),s("code",[t._v("git config")]),t._v(" 命令来对git配置进行一系列操作，比如我们查看git的所有配置可以执行"),s("code",[t._v("git config -l")]),t._v("，当然我们也可以打开响应的配置文件来进行查看。")]),t._v(" "),s("ul",[s("li",[t._v("如果我们想修改系统级别的配置可以使用")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("system 修改配置项\n")])])]),s("p",[t._v("比如我们在系统配置中添加用户")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("system user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system'")]),t._v("\n")])])]),s("ul",[s("li",[t._v("如果我们想修改全局的配置可以使用")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global 修改配置项\n")])])]),s("p",[t._v("比如我们在系统配置中添加用户")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global'")]),t._v("\n")])])]),s("ul",[s("li",[t._v("如果我们想修改局部的配置可以使用")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config  修改配置项\n")])])]),s("p",[t._v("比如我们在系统配置中添加用户")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config  user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system'")]),t._v("\n")])])]),s("p",[t._v("除了使用命令来修改相应的配置外，我们还以直接修改相对应的配置文件。我们既然可以设置"),s("code",[t._v("git")]),t._v("响应配置，我们也可以删除"),s("code",[t._v("git")]),t._v("的响应配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除系统配置")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("system "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unset user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除全局配置")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unset user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除局部配置")]),t._v("\ngit config  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unset user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n")])])]),s("h2",{attrs:{id:"配置git命令别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置git命令别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置Git命令别名")]),t._v(" "),s("p",[t._v("git的命令非常的多，光记这些命令就够我们头疼的了，为了提高上手速率，快速使用git的命令，git提供了配置命令别名的方法。我们可以将git的任何命令配置成我们容易记忆的，比如我们将"),s("code",[t._v("git log --graph --pretty=oneline --abbrev-commit")]),t._v("命令配置成"),s("code",[t._v("git lg")]),t._v("后我们就可以执行"),s("code",[t._v("git lg")]),t._v("来达到同样的效果。")]),t._v(" "),s("p",[t._v("配置git别名我们其实就是操作配置文件中的 "),s("code",[t._v("alias")]),t._v("字段，我们可以尝试通过命令行来配置，我们将"),s("code",[t._v("git log --graph --pretty=oneline --abbrev-commit")]),t._v(" 配置成"),s("code",[t._v("git lg")]),t._v("，这里是局部配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lg "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --graph --pretty=oneline --abbrev-commit'")]),t._v("\n")])])]),s("p",[t._v("执行完我们可以看看版本库中的"),s("code",[t._v("config")]),t._v("文件，我们可以发现会多出下面内容（也可以通过 "),s("code",[t._v("git config --list")]),t._v(" 命令查看）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tlg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("abbrev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("commit\n\n")])])]),s("p",[t._v("这时我们的命令已经生效了，我们可以执行"),s("code",[t._v("git lg")]),t._v(" 命令来以图形形式来查看我们的版本记录了。当然我们也可以配置其他命令的别名")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c commit\n")])])]),s("p",[s("strong",[t._v("这里有提供一份常用的"),s("code",[t._v("git")]),t._v("别名配置,当然你可以根据自己的需求去修改或添加")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global\ncl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m\ns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status\nd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diff\ncommitid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("parse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("short "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("\nlg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("abbrev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("commit\nr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard\nm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ff\nch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" checkout\n")])])]),t._v(" "),s("h2",{attrs:{id:"配置忽略文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置忽略文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置忽略文件")]),t._v(" "),s("p",[t._v("我们在上传东西时，有时候想忽略一些文件，不想该文件被提交或推送到远程仓库，我们可以这样操作")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("git")]),t._v("工作区的根目录下建一个 "),s("code",[t._v(".gitignore")]),t._v(" 文件,"),s("strong",[t._v("说明一下，在"),s("code",[t._v("window")]),t._v("下面创建该文件会提示必须输入文件名，我们可以在起文件名时，前后都加一个点 "),s("code",[t._v(".gitignore.")]),t._v("就可以了,或使用编辑器去创建该文件")])]),t._v(" "),s("p",[t._v("我们可以在该文件下写要忽略的文件")]),t._v(" "),s("p",[t._v("忽略chang.txt 文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chang.txt\n")])])]),s("p",[t._v("如果忽略所有js文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("*.js\n")])])]),s("p",[t._v("当然我们可以使用# 号加备注")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# lose sight of js:\n*.js\n")])])]),s("p",[t._v("有时候你想添加一个文件，但是该文件被忽略了，我们可以这样操作：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git check-ignore -v chang.txt\n")])])]),s("p",[t._v("这样"),s("code",[t._v("git")]),t._v(" 会告诉我们 "),s("code",[t._v(".gitignore")]),t._v(" 中哪一行设置了该文件的忽略,或者我们可以强制添加到git")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git add -f chang.txt\n")])])]),s("p",[t._v("这里有一份"),s("code",[t._v("vue-cli")]),t._v("脚手架中"),s("code",[t._v(".gitignore")]),t._v("的配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".DS_Store\nnode_modules/\n/dist/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n/test/unit/coverage/\n/test/e2e/reports/\nselenium-debug.log\n\n# Editor directories and files\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);