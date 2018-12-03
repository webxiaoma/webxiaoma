(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{331:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker"),n("OutboundLink")],1),t._v("是运行在后台的"),n("code",[t._v("JavaScript")]),t._v(", 不会影响页面的性能，说白了就是在另一个线程中执行的js代码，执行过程中不会影响主线程的代码，他的支持都可以"),n("a",{attrs:{href:"https://caniuse.com/#search=web%20worker",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看这里"),n("OutboundLink")],1),t._v("，所有我们可以使用"),n("code",[t._v("web worker")]),t._v("。使用"),n("code",[t._v("web worker")]),t._v("时也需要注意以下几点：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Share Worker"),n("OutboundLink")],1),t._v("的使用方法和"),n("code",[t._v("web worker")]),t._v("的用法基本相同，它们都是脱离js主线程，浏览器有开了一个线程去执行代码。"),n("code",[t._v("Share Worker")]),t._v("和"),n("code",[t._v("web worker")]),t._v("不同的是，"),n("code",[t._v("Share Worker")]),t._v("在同一域下的不同页面之间是可以共享数据的，而"),n("code",[t._v("web worker")]),t._v("不可以。不过目前"),n("code",[t._v("Share Worker")]),t._v("的兼容性不是很好，我们现在可以了解一下。他的使用方法如下：")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker 使用教程"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Workers API"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"多线程-web-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程-web-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" 多线程 Web Worker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[n("code",[t._v("Worker")]),t._v("线程运行的脚本文件需要与主线程的文件在统一源下,也就是不能跨越加载js，并且在"),n("code",[t._v("Worker")]),t._v("中无法读取本地文件，只能读取网络文件")])]),t._v(" "),n("li",[n("p",[t._v("在"),n("code",[t._v("Worker")]),t._v("中是无法操作"),n("code",[t._v("DOM")]),t._v("的，并且无法访问"),n("code",[t._v("window")]),t._v(",并且"),n("code",[t._v("this")]),t._v("可以使用"),n("code",[t._v("self")]),t._v("替代")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1. 在主线程中创建一个新的"),s("code",[this._v("worker")]),this._v("线程")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" worker "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Worker")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'worker.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Worker()")]),this._v("构造函数接收一个脚本文件，这个文件就是"),s("code",[this._v("Worker")]),this._v("线程所要执行的任务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. 主线程和"),s("code",[this._v("worker")]),this._v("线程的通信")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("我们可以在主线程中使用"),n("code",[t._v("worker.postMessage()")]),t._v("方法，来给"),n("code",[t._v("Worker")]),t._v("线程传递信息，在主线程中可以通过监听"),n("code",[t._v("message")]),t._v("事件获取"),n("code",[t._v("Worker")]),t._v("线程传过来的数据。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 在主线程中")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" worker "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Worker")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'worker.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'主线程消息'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以获取 Worker线程传递过来的消息")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在Worker线程中")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'message'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取主线程发送的消息")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 向主线程发送消息")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"worker 线程消息"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3. 在"),s("code",[this._v("Worker")]),this._v("线程中加载脚本")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("importSCRIPTS()")]),this._v("可以在"),s("code",[this._v("worker")]),this._v("内部可以加载其它的脚本")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 加载单个脚本")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("importScripts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'test.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//加载多个脚本")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("importScripts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'test.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'other.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("4. 错误处理")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在主线程中我们可以通过监听"),s("code",[this._v("Worker")]),this._v("的"),s("code",[this._v("error")]),this._v("事件来获取错误信息")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" worker "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Worker")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'worker.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{attrs:{class:"token comment"}},[t._v("// 处理错误")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("5. 关闭Worker")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了节省系统资源，我们有时需要关闭"),s("code",[this._v("Worker")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 主线程")]),t._v("\nworker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("terminate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Worker 线程")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("close")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"共享线程-share-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享线程-share-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" 共享线程 Share Worker")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 在主线程中")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" work "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SharedWorker")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./worker.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'work'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n port "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" work"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{attrs:{class:"token comment"}},[t._v("// 监听message 事件")]),t._v("\n port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'message'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{attrs:{class:"token comment"}},[t._v("// 从端口port获取信息")]),t._v("\n "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{attrs:{class:"token comment"}},[t._v("// 从端口发送数据")]),t._v("\n port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   status"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("worker.js")]),this._v("线程中")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 当线程链接是触发connect事件，可以监听该事件")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'connect'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" port  "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ports"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 监听message 事件")]),t._v("\n    port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'message'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 从端口port获取信息")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 从端口发送数据")]),t._v("\n    port"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      status"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参考文章")])])}],!1,null,null,null);e.options.__file="web-worker.md";s.default=e.exports}}]);