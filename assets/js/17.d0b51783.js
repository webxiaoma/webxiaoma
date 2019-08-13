(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("配置多账户之前，我们可以回顾一下"),a("router-link",{attrs:{to:"/git/Git的远程操作.html#_3-本地关联github"}},[t._v("本地关联GitHub")]),t._v("。其实使用多个git账户主要解决的问题就是让多个git账户都可以和各自的远程仓库关联起来，而本地git仓库和远程仓库通信就必须要双方建立连接，而我们建立连接的正是使用的"),a("code",[t._v("SSH key")]),t._v("，当我们有一个git账户连接远程仓库时，我们需要一个"),a("code",[t._v("ssh key")]),t._v(";当我们有多个时，我们就需要多个"),a("code",[t._v("ssh key")]),t._v("。")],1),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"https://baike.baidu.com/item/ssh/10407",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度百科"),a("OutboundLink")],1),t._v("SSH 为 Secure Shell 的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上的安全协议。SSH 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH最初是UNIX系统上的一个程序，后来又迅速扩展到其他操作平台。SSH在正确使用时可弥补网络中的漏洞。SSH客户端适用于多种平台。几乎所有UNIX平台—包括HP-UX、Linux、AIX、Solaris、Digital UNIX、Irix，以及其他平台，都可运行SSH。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("我们登录有两种方式，一种是账户密码的形式进行登录;另一种就是基于密钥的安全验证。")]),t._v(" "),a("p",[t._v("基于密钥的安全验证,我们必须为自己创建一对密钥，并把自己的公有密钥放在需要访问的服务器上。登录的时候，远程主机会向用户发送一段随机字符串，用户用自己的私钥加密后，再发回来。远程主机用事先储存的公钥进行解密，如果成功，就证明用户是可信的，直接允许登录，不再要求密码。从而避免被 "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("中间人攻击"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("在git中使用https 和使用ssh主要有两点不同")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),a("p",[t._v("这时是让我们输入公钥和私钥的名称，如果你不输入就会生成"),a("code",[t._v("id_rsa")]),t._v(" 和 "),a("code",[t._v("id_rsa.pub")]),t._v(" 两默认名为"),a("code",[t._v("id_rsa")]),t._v("的两个文件，这里我们输入"),a("code",[t._v("test_rsa")]),t._v("，回车之后会让我们输入"),a("code",[t._v("ssh")]),t._v(" 密码，我们这里不输入，回车后还会再次让我们确认密码，我们直接回车。这时你可能想起你第一次配置"),a("code",[t._v("ssh key")]),t._v("时，直接按了三次回车键。现在我们可以去生成的ssh目录查看一下，会多出"),a("code",[t._v("test_rsa")]),t._v("私钥文件和"),a("code",[t._v("test_rsa.pub")]),t._v("公钥文件。我们将"),a("code",[t._v("test_rsa.pub")]),t._v("公钥文件放到我们自己的远程仓库中"),a("router-link",{attrs:{to:"/git/Git的远程操作.html#_3-本地关联github"}},[t._v("查看放置方法")])],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("现在我们就可以使用将我们的远程仓库下载下来了，下载下来之后，我们需要在我们的仓库中局部配置我们的用户名和邮箱")]),t._v(" "),t._m(26),a("p",[t._v("配置完成后我们就可以正常的使用了，如果我们在克隆一个仓库，还是要进行局部配置的。我们可以把常用的git账户设置成全局配置。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git-多账户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-多账户管理","aria-hidden":"true"}},[this._v("#")]),this._v(" Git 多账户管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"多账户需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多账户需求","aria-hidden":"true"}},[this._v("#")]),this._v(" 多账户需求")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们在公司使用"),a("code",[t._v("git")]),t._v("来管理我们的项目时会遇到这种情况，我们在我们的电脑上使用的是公司的"),a("code",[t._v("git")]),t._v("账户，但有时我们还想在这台电脑上使用我们自己的"),a("code",[t._v("git")]),t._v("账户，这时我们就需要解决在同一台电脑上使用两个"),a("code",[t._v("git")]),t._v("账户的问题了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是ssh","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是SSH")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ssh流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh流程","aria-hidden":"true"}},[this._v("#")]),this._v(" SSH流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git中-https-和-ssh-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git中-https-和-ssh-的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" Git中 Https 和 SSH 的区别")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("任何人都可以使用"),a("code",[t._v("https")]),t._v("的路径去克隆开源项目，而使用"),a("code",[t._v("ssh")]),t._v("在克隆项目时需要先配置"),a("code",[t._v("SSH key")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在推送"),a("code",[t._v("push")]),t._v("时，https是需要输入用户名和密码的，而"),a("code",[t._v("ssh")]),t._v("在push时，如果配置"),a("code",[t._v("ssh key")]),t._v(" 时没有设置密码，则不需要密码，如果设置了，就需要密码。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git中添加多账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git中添加多账号","aria-hidden":"true"}},[this._v("#")]),this._v(" Git中添加多账号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-生成新秘钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成新秘钥","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("1. 生成新秘钥")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("如果我们之前我们电脑上已经存在了"),a("code",[t._v("ssh")]),t._v(", 我们找到该文件，会发现里面有"),a("code",[t._v("id_rsa")]),t._v(" 和 "),a("code",[t._v("id_rsa.pub")]),t._v(" 两个文件，其中"),a("code",[t._v("id_rsa")]),t._v("为我们的私钥，"),a("code",[t._v("id_rsa.pub")]),t._v("为我们的公钥。因为我们要使用多个git账户来连接不同的远程仓库，所以我们需要多个"),a("code",[t._v("ssh key")]),t._v("。现在我们在生成另一个"),a("code",[t._v("ssh key")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keygen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t rsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'输入你的另一个邮箱'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在上面输入你的邮箱，这个邮箱是你接下来在"),s("code",[this._v("git")]),this._v("中使用的邮箱,输入完成后按回车，我们会看到：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Generating "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" rsa key pair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nEnter file "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" which to save the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ljh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-让ssh识别新生成的私钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-让ssh识别新生成的私钥","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("2. 让ssh识别新生成的私钥")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("放置好后我们需要让"),s("code",[this._v("ssh")]),this._v("识别新生成的私钥")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动 ssh-agent.exe 进程")]),t._v("\neval "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加新ssh keys")]),t._v("\nssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" test_rsa\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("一定要注意的是，这里我们虽然让"),s("code",[this._v("ssh")]),this._v("识别了新生成的私钥，但这种做法只是在当前"),s("code",[this._v("git bash")]),this._v("窗口中有效，如果我们关闭后，必须在指向以上代码才可以否则我们依然不能推送我们的代码到远程仓库")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("针对以上问题我们的解决版本是：我们将以上命令放入到git根目录下的"),s("code",[this._v("bash.bashrc")]),this._v(" 文件中的末尾。该文件在git打开时会自动执行我们的命令, "),s("strong",[this._v("另外还有把我们原来的私钥也放进去，不然我们原来的仓库就会无法提交到远程仓库中")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略代码")]),t._v("\n\n# Fixup git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bash "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" non login env\nshopt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q login_shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n\n# Fixup git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bash "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" non login env\nshopt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q login_shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n\n\n#启动 ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe 进程\neval "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n#添加新私钥\nssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test_rsa\n#添加原来的私钥\nssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("放置好后，当我们重新打开"),s("code",[this._v("git bash")]),this._v("时,会自动执行这两个代码，并输出 (pid 和我的不一定一样)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Agent pid "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40396")]),t._v("\nIdentity added"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ljh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_rsa")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ljh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-配置ssh的config文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置ssh的config文件","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("3. 配置ssh的config文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v(".ssh")]),this._v("目录下配置多个账户的 "),s("code",[this._v("config")]),this._v(" 文件，如果没有 "),s("code",[this._v("config")]),this._v(" 文件自己新建一个。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# 配置github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\nHost giathub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com                 \n  HostName github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n  IdentityFile "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\Users\\\\ljh\\\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh\\\\id_rsa\n  PreferredAuthentications publickey\n  User webxiaoma\n\n# 配置git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oschina"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net \nHost git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net  \n  HostName git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oschina"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net\n  IdentityFile "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\Users\\\\ljh\\\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh\\\\test_rsa\n  PreferredAuthentications publickey\n  User webtest\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("每个账号需要单独配置一个Host，每个Host要取一个别名")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Host")]),t._v(" 指自定义的host简称,名字可以自己起， 连接就可以使用 ssh host名，比如上边"),a("code",[t._v("ssh github.com")]),t._v("。需要注意的是"),a("code",[t._v("Host")]),t._v("下边的书写需要有 "),a("strong",[t._v("缩进")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("HostName")]),t._v(" 主机名可以ip或者是域名")]),t._v(" "),a("li",[a("code",[t._v("IdentityFile")]),t._v(" 私钥文件路径（如：~/.ssh/id_rsa）")]),t._v(" "),a("li",[a("code",[t._v("PreferredAuthentications")]),t._v("  配置登录时用什么权限认证（可设为 publickey, password publickey, keyboard-interactive等）")]),t._v(" "),a("li",[a("code",[t._v("User")]),t._v(" 登录用户名")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-添加局部git用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加局部git用户","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("4. 添加局部git用户")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名'")]),t._v("\ngit config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'邮箱'")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);