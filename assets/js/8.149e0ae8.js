(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(t,s,a){"use strict";a.r(s);var e=a(1),i=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("接下来我们直接练习标签的用法")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("创建附注标签时我们可以添加一个对该标签的说明")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("标签是打在最新的commit 上的。如果我们想要在上上次提交中打上标签我们可以这样操作：")]),t._v(" "),a("p",[t._v("首先查看历史提交 commit id")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("上图红框中为 commit id")]),t._v(" "),a("p",[t._v("然后我们执行")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("查看添加的所有tag")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("推送单个：")]),t._v(" "),t._m(31),a("p",[t._v("推送所用标签：")]),t._v(" "),t._m(32),t._m(33),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("git v1.7.0")]),t._v("版本后可以使用 "),a("Badge",[t._v("v1.7.0+")])],1),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git标签操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git标签操作","aria-hidden":"true"}},[this._v("#")]),this._v(" Git标签操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用基础指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用基础指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用基础指令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("本章命令")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git tag <tagName>")]),t._v("创建轻量标签")]),t._v(" "),a("li",[a("code",[t._v("git tag -a <tagName> -m '备注'")]),t._v(" 创建附注标签")]),t._v(" "),a("li",[a("code",[t._v("git tag")]),t._v("查看所有标签")]),t._v(" "),a("li",[a("code",[t._v("git show <tagName>")]),t._v(" 查看带说明的某个标签")]),t._v(" "),a("li",[a("code",[t._v("git checkout <tagName>")]),t._v(" 切换到某个标签分支")]),t._v(" "),a("li",[a("code",[t._v("git tag -d <tagName>")]),t._v(" 删除本地某个标签")]),t._v(" "),a("li",[a("code",[t._v("git push origin <tagName>")]),t._v(" 推送单个标签到远程")]),t._v(" "),a("li",[a("code",[t._v("git push origin --tags")]),t._v(" 推送所有标签到远程")]),t._v(" "),a("li",[a("code",[t._v("git push origin --delete tag <tagName>")]),t._v(" 删除远程某个标签（v1.7.0版本后）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git标签的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git标签的作用","aria-hidden":"true"}},[this._v("#")]),this._v(" Git标签的作用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("当我们有一个重要的提交时，我们想永久的记住这个提交快照，或着是我们想记录我们项目的版本，有时候如果使用"),a("code",[t._v("cmmitId")]),t._v("会很麻烦很难记,而且当我们提交多了之后"),a("code",[t._v("commitId")]),t._v(" 会有很多。这时我们就用到了git的标签功能。就像我们的项目，要发布"),a("code",[t._v("v1.0.0")]),t._v("版本了，我们可以给这次提交标记上"),a("code",[t._v("v1.0.0")]),t._v("，当我们要发布"),a("code",[t._v("v1.5.0")]),t._v("版本时就可以打上"),a("code",[t._v("v1.5.0")]),t._v("的标签,但我们想要回到"),a("code",[t._v("v1.0.0")]),t._v("版本时，我们就可以根据标签来进行回滚（回退）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git标签的本地操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git标签的本地操作","aria-hidden":"true"}},[this._v("#")]),this._v(" Git标签的本地操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-给当前分支添加标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-给当前分支添加标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.给当前分支添加标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建轻量标签")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git tag v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建附注标签")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ git tag "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("a v1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token number"}},[t._v("0.0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{attrs:{class:"token string"}},[t._v("'this is v1.0.0'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("来自官网")]),this._v(" "),s("p",[this._v("轻量级标签就像是个不会变化的分支，实际上它就是个指向特定提交对象的引用。而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证。一般我们都建议使用含附注型的标签，以便保留相关信息；当然，如果只是临时性加注标签，或者不需要旁注额外信息，用轻量级标签也没问题。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-给指定commit打标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-给指定commit打标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.给指定"),s("code",[this._v("commit")]),this._v("打标签")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ git log "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("abbrev"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("commit\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://webxiaoma.github.io/git/git5-1.png",alt:"commit id"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git tag v2"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v("  "),s("span",{attrs:{class:"token number"}},[this._v("1")]),this._v("ed73cb\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样我们就给制定的"),s("code",[this._v("commitId")]),this._v("打上了标签，打上标签后我们当然还需要查看我们的标签了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-查看标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.查看标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git tag\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("查看带说明的某个标签 "),s("code",[this._v("git show <tagName>")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git show v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-切换标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.切换标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为带标签tag其实也是一个分支，我们可以像切换分支一样来切换我们的标签"),s("code",[this._v("git checkout <tagName>")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git chekcout v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("之后我们会切换到"),s("code",[this._v("v1.0.0")]),this._v("，我们使用 "),s("code",[this._v("git branch")]),this._v(" 来查看一下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" detached at v1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token number"}},[t._v("0.0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dev\n  master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们会发现"),s("code",[this._v("HEAD")]),this._v("指针指向的是"),s("code",[this._v("V1.0.0")]),this._v(",也就是我们当前所在的分支就是"),s("code",[this._v("V1.0.0")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-刪除标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-刪除标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.刪除标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git tag "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("d v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git标签的远程操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git标签的远程操作","aria-hidden":"true"}},[this._v("#")]),this._v(" Git标签的远程操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-推送标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-推送标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.推送标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git push origin v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("$ git push origin "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("tags\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-刪除远程标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-刪除远程标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.刪除远程标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("git push origin "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),s("span",{attrs:{class:"token keyword"}},[this._v("delete")]),this._v(" tag v1"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token number"}},[this._v("0.0")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("git v1.7.0")]),this._v(" 版本之前我们使用(推送一个空的tag到远程)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git push origin "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("refs"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("tags"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n")])])])}],!1,null,null,null);i.options.__file="Git标签操作.md";s.default=i.exports}}]);