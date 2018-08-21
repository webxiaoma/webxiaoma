(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,s,e){"use strict";e.r(s);var a=e(1),i=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("我们一开始开始对git和svn可能存在疑惑，这两个东西到底是做什么的。它们的大致区别如下：")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("区别的详细介绍"),e("a",{attrs:{href:"http://blog.jobbole.com/31444/",target:"_blank",rel:"noopener noreferrer"}},[t._v("请见这里"),e("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("在window上安装git，基本就是傻瓜是安装 "),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("全局配置：")]),t._v(" "),t._m(6),e("p",[t._v("局部配置")]),t._v(" "),t._m(7),e("p",[t._v("如果不成，可以先初始化git")]),t._v(" "),t._m(8),e("p",[t._v("查看所有配置")]),t._v(" "),t._m(9),e("p",[t._v("什么时候你会用到局部配置，当你公司的项目使用的是全局配置时，而你自己也有仓库方在其他地方，这时，你可能需要局部去配置自己的用户名和邮箱。")]),t._v(" "),t._m(10),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先你有github 账号"),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册地址"),e("OutboundLink")],1)])]),t._v(" "),t._m(11)]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("接下来：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("到这里我们就配置好了ssh公钥了。")]),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("git链接仓库请请访问：")]),t._v(" "),t._m(20),t._v(" "),t._m(21),e("p",[t._v("然后我们要初始化该文件成为git仓库，我们执行命令")]),t._v(" "),e("p",[t._v("初始化仓库：")]),t._v(" "),t._m(22),t._m(23),t._v(" "),e("p",[t._v("初始化完成后我们继续，我们在该文件夹下(myGit文件下，它的子目录也行，不要方法git文件夹中)新建一个index.html文件,里面写点内容，我写的是")]),t._v(" "),t._m(24),e("p",[t._v("然后执行")]),t._v(" "),t._m(25),e("p",[t._v("如果我们有好多文件需要添加到仓库，我们可以使用一下命令：")]),t._v(" "),t._m(26),e("p",[t._v("或是更简单的，将所有文件添加到仓库（一下两个选其中一个就可以）")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),e("p",[t._v("github上的远程仓库地址：")]),t._v(" "),e("p",[t._v("第二种方法：")]),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),e("p",[t._v("如果你用的是第二种方法，在第一次上传时我们这样去推送文")]),t._v(" "),t._m(33),t._m(34),t._v(" "),e("p",[t._v("接下来我们如果想要查看仓库当前的状态可以执行：")]),t._v(" "),t._m(35),e("p",[t._v("如果我们想要查看修改的内容：")]),t._v(" "),t._m(36),e("p",[t._v("到这里git的基本使用方法我们就说完了，如果你还有什么不明白，欢迎留言，如果在我能力范围内一定解答。接下来我们将更深入的了解一下git的使用方法。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git基础","aria-hidden":"true"}},[this._v("#")]),this._v(" Git基础")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git-vs-svn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-vs-svn","aria-hidden":"true"}},[this._v("#")]),this._v(" GIT vs SVN")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("ol",[e("li",[t._v("GIT是分布是版本控制工具，svn是集中式管理工具")]),t._v(" "),e("li",[t._v("GIT把内容按元数据方式存储，而SVN是按文件;")]),t._v(" "),e("li",[t._v("GIT分支和SVN的分支不同;")]),t._v(" "),e("li",[t._v("GIT没有一个全局的版本号，而SVN有;")]),t._v(" "),e("li",[t._v("GIT的内容完整性要优于SVN;")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git-的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-的安装","aria-hidden":"true"}},[this._v("#")]),this._v(" GIT 的安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装成功后右击鼠标会出现"),s("code",[this._v("Get bush Here")]),this._v(" 和 "),s("code",[this._v("Get Gui Here")]),this._v(" 说明安装成功")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装成功后，我们需要设置我们的邮箱和账号，因为Git是分布式版本控制系统，每个机器都要进行区分, 我们在任意一个文件夹中右键点击"),s("code",[this._v("Get Gui Here")]),this._v(" 打开git命令面版,输入下面命令")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("$ git config "),e("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ git config "),e("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),e("span",{attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("$ git config  user"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ git config  user"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),e("span",{attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git init\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git config "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("list\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git连接github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git连接github","aria-hidden":"true"}},[this._v("#")]),this._v(" GIt连接github")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在github上创建一个仓库")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://webxiaoma.github.io/git/1.png",alt:"创建仓库"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://webxiaoma.github.io/git/2.png",alt:"创建仓库"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("创建好仓库后，我们本身是不可以用git链接到仓库的，我们需要配置ssh 公钥，生成公钥：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(' $ ssh-keygen -t rsa -C "Your Email"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这里我们连续按三次回车，会出现下列图示\n"),s("img",{attrs:{src:"https://webxiaoma.github.io/git/3.png",alt:"生成ssh"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我这里生成的ssh公钥在 c/Users/Administrator/.ssh 我们需要的文件如下\n"),s("img",{attrs:{src:"https://webxiaoma.github.io/git/4.png",alt:"生成ssh"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("4.将我们生成好的公钥放到我们github上，（其他网络仓库操作步骤大致相同）\n"),s("img",{attrs:{src:"https://webxiaoma.github.io/git/5.png",alt:"生成ssh"}}),this._v(" "),s("img",{attrs:{src:"https://webxiaoma.github.io/git/6.png",alt:"生成ssh"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git的基本使用","aria-hidden":"true"}},[this._v("#")]),this._v(" GIT的基本使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1.创建仓库以及提交代码")]),this._v("\n创建一个版本库之前我们要做到就是选好一个位置，然后：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ mkdir myGit   // 创建myGit文件夹\n$ cd myGit      // 打开myGit文件夹\n$ pwd           // 查看所在文件夹目录\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git init  \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你细心的话，可以看到我们 myGit 文件夹下回出现一个隐藏的git文件，如果你没有看到，可以设置一下电脑，显示隐藏文件夹（这里不讲这么设置了），或是执行命令 "),s("code",[this._v("ls -ah")]),this._v("，另外git文件夹，不要随意乱去设置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("var a =1;\nvar b = 2;\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git add  index.html  // 告诉git把index.html文件添加到仓库\n$ git commit -m \n // '新添加的index.html文件' git commit告诉Git，把文件提交到仓库：-m 后面跟的是提交的说明\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git add 文件名1 文件名2 \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git add .\n$ git add -A\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2.本地仓库与远程仓库建立连接")]),this._v("\n这里有两种方法，第一种，直接克隆远程仓库：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git clone 远程仓库地址\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("git remote add origin 远程仓库地址\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("建立连接后，我们将我们的文件 index.html 推送到github上去;("),s("strong",[this._v("git默认是不允许上传空文件夹的")]),this._v(")")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git push\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("git push -u origin master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以后推送你就可以使用"),s("code",[this._v("git push")]),this._v(" 了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git status \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git diff\n")])])])}],!1,null,null,null);i.options.__file="README.md";s.default=i.exports}}]);