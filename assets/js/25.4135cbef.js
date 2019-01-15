(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{363:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),s("p",[s("code",[t._v("FileReader")]),t._v(" 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，它的参数是 "),s("code",[t._v("File")]),t._v(" 或 "),s("code",[t._v("Blob")]),t._v(" 对象。"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("该API 的兼容性 "),s("a",{attrs:{href:"https://caniuse.com/#search=FileReader",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看FileReader兼容性"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("FileReader 的实例拥有 4 个方法，其中 3 个用以读取文件，另一个用来中断读取。需要注意的是 ，无论读取成功或失败，方法并不会返回读取结果，这一结果存储在 result属性中。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("文件一旦开始读取，无论成功或失败，实例的 result 属性都会被填充。如果读取失败，则 result 的值为 null ，否则即是读取的结果，绝大多数的程序都会在成功读取文件的时候，抓取这个值")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[s("a",{attrs:{href:"http://javascript.ruanyifeng.com/dom/image.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("浏览器提供一个原生构造函数Image，用于生成HTMLImageElement实例。")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"filereader和formdata对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filereader和formdata对象","aria-hidden":"true"}},[this._v("#")]),this._v(" FileReader和FormData对象")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"filereader-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filereader-api","aria-hidden":"true"}},[this._v("#")]),this._v(" "),a("code",[this._v("FileReader")]),this._v(" API")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("其中"),s("code",[t._v("File")]),t._v("对象可以是来自用户在一个 "),s("code",[t._v("<input>")]),t._v("元素上选择文件后返回的"),s("code",[t._v("FileList")]),t._v("对象,也可以来自拖放操作生成的"),s("code",[t._v("DataTransfer")]),t._v("对象,还可以是来自在一个"),s("code",[t._v("HTMLCanvasElement")]),t._v("上执行"),s("code",[t._v("mozGetAsFile()")]),t._v("方法后返回结果。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_1、-filereader-的读取文件的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、-filereader-的读取文件的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、 "),a("code",[this._v("FileReader")]),this._v(" 的读取文件的方法")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("readAsBinaryString(Blob|File)")]),t._v("：返回二进制字符串，该字符串每个字节包含一个0到255之间的整数。")]),t._v(" "),s("li",[s("code",[t._v("readAsText(Blob|File, opt_encoding)")]),t._v("：返回文本字符串。默认情况下，文本编码格式是’UTF-8’，可以通过可选的格式参数，指定其他编码格式的文本。")]),t._v(" "),s("li",[s("code",[t._v("readAsDataURL(Blob|File)")]),t._v("：返回一个基于Base64编码的data-uri对象。")]),t._v(" "),s("li",[s("code",[t._v("readAsArrayBuffer(Blob|File)")]),t._v("：返回一个ArrayBuffer对象。")]),t._v(" "),s("li",[s("code",[t._v("abort()")]),t._v(" 中断读取")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_2、-filereader-的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-filereader-的事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、 "),a("code",[this._v("FileReader")]),this._v(" 的事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("onabort")]),t._v("方法：读取中断或调用reader.abort()方法时触发。")]),t._v(" "),s("li",[s("code",[t._v("onerror")]),t._v("方法：读取出错时触发。")]),t._v(" "),s("li",[s("code",[t._v("onload")]),t._v("方法：读取成功后触发。")]),t._v(" "),s("li",[s("code",[t._v("onloadend")]),t._v("方法：读取完成后触发，不管是否成功。触发顺序排在 onload 或 onerror 后面。")]),t._v(" "),s("li",[s("code",[t._v("onloadstart")]),t._v("方法：读取将要开始时触发。")]),t._v(" "),s("li",[s("code",[t._v("onprogress")]),t._v("方法：读取过程中周期性触发。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_3-filereader-的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-filereader-的用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. "),a("code",[this._v("FileReader")]),this._v(" 的用法")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("当文件读取时，会触发响应的事件，我们可以从事件对象中获取文件流的一些信息，并且文件读取的结果会储存在"),a("code",[this._v("result")]),this._v("这个属性中。需要注意的是，读取文件的方法不能同时进行。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'file'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ninp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onchange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" file "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fileReader "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   "),s("span",{attrs:{class:"token comment"}},[t._v("//返回二进制字符串，该字符串每个字节包含一个0到255之间的整数。")]),t._v("\n   fileReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readAsBinaryString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//    fileReader.readAsText(file)")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//    fileReader.readAsDataURL(file)")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//    fileReader.readAsArrayBuffer(file)")]),t._v("\n\n   fileReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token comment"}},[t._v("// 获取的文件流存储在res.target.result 中")]),t._v("\n       console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   fileReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onprogress")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"image-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" Image 对象")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_1-image的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-image的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Image的使用")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<img>")]),this._v("元素用于插入图片，主要继承了 HTMLImageElement 接口。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg "),s("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nimg "),s("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("HTMLImageElement")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Image")]),this._v("构造函数可以接受两个整数作为参数，分别表示"),a("code",[this._v("<img>")]),this._v("元素的宽度和长度。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 语法")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 用法")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myImage "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_2-image的一些属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-image的一些属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Image的一些属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("HTMLImageElement.src")]),t._v("返回图像的完整网址。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.currentSrc")]),t._v("返回当前展示的图像的网址。"),s("code",[t._v("Js")]),t._v(" 和 "),s("code",[t._v("CSS")]),t._v(" 的 "),s("code",[t._v("mediaQuery")]),t._v(" 都可能改变正在展示的图像。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.alt")]),t._v("可以读写"),s("code",[t._v("<img>")]),t._v("的 "),s("code",[t._v("HTML")]),t._v(" 属性"),s("code",[t._v("alt")]),t._v("，表示对图片的文字说明。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.isMap")]),t._v("对应"),s("code",[t._v("<img>")]),t._v("元素的 "),s("code",[t._v("HTML")]),t._v(" 属性"),s("code",[t._v("ismap")]),t._v("，返回一个布尔值，表示图像是否为服务器端的图像映射的一部分。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.useMap")]),t._v("对应"),s("code",[t._v("<img>")]),t._v("元素的 "),s("code",[t._v("HTML")]),t._v(" 属性"),s("code",[t._v("usemap")]),t._v("，表示当前图像对应的"),s("code",[t._v("<map>")]),t._v("元素。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.srcset")]),t._v("读写"),s("code",[t._v("<img>")]),t._v("元素的"),s("code",[t._v("srcset")]),t._v("属性")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.sizes")]),t._v("读写"),s("code",[t._v("sizes")]),t._v("属性")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.naturalWidth")]),t._v("和"),s("code",[t._v("HTMLImageElement.naturalHeight")]),t._v("分别返回图像的实际宽度和高度")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.width和HTMLImageElement.height")]),t._v("返回"),s("code",[t._v("img")]),t._v("中的"),s("code",[t._v("width")]),t._v("和"),s("code",[t._v("height")]),t._v(" 如果没有则返回图像的实际宽度和高度")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.complete")]),t._v("属性返回一个布尔值，表示图表是否已经加载完成。如果"),s("code",[t._v("<img>")]),t._v("元素没有"),s("code",[t._v("src")]),t._v("属性，也会返回true。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.crossOrigin")]),t._v("属性用于读写"),s("code",[t._v("<img>")]),t._v("元素的"),s("code",[t._v("crossorigin")]),t._v("属性，表示跨域设置。这个属性有两个可能的值："),s("code",[t._v("anonymous")]),t._v("：跨域请求不要求用户身份（credentials），这是默认值；"),s("code",[t._v("use-credentials")]),t._v("：跨域请求要求用户身份。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.referrerPolicy")]),t._v("用来读写"),s("code",[t._v("<img>")]),t._v("元素的 HTML 属性"),s("code",[t._v("referrerpolicy")]),t._v("，表示请求图像资源时，如何处理 HTTP 请求的"),s("code",[t._v("referrer")]),t._v("字段。")]),t._v(" "),s("li",[s("code",[t._v("HTMLImageElement.x")]),t._v("属性返回图像左上角相对于页面左上角的横坐标，"),s("code",[t._v("HTMLImageElement.y")]),t._v("属性返回纵坐标。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_3-image的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-image的事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Image的事件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("图像加载完成会触发 "),a("code",[this._v("onload")]),this._v(" 事件， 加载失败会触发 "),a("code",[this._v("onerror")]),this._v(" 事件， 需要注意的是在"),a("code",[this._v("Image")]),this._v(" 未加载完成前，是访问不到他的一些属性（比如宽，高等）的")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" img "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://www.webxiaoma.com/assets/images/manong.jpg"')]),t._v("\n\nimg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"formdata-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formdata-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" FormData 对象")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("XMLHttpRequest Level2")]),t._v("添加了一个新的接口"),s("code",[t._v("FormData")]),t._v(". 利用"),s("code",[t._v("FormData")]),t._v("对象,我们可以通过"),s("code",[t._v("JavaScript")]),t._v("用一些键值对来模拟一系列表单控件,我们还可以使用"),s("code",[t._v("XMLHttpRequest")]),t._v("的"),s("code",[t._v("send()")]),t._v('方法来异步的提交这个"表单".比起普通的'),s("code",[t._v("ajax")]),t._v(",使用"),s("code",[t._v("FormData")]),t._v("的最大优点就是我们可以异步上传一个二进制文件.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("FormData")]),this._v("对象的操作方法，全部在原型中，自己本身没任何的属性及方法。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("append(key,value)")]),t._v(" 方法向 "),s("code",[t._v("formData")]),t._v(" 添加"),s("code",[t._v("key/value")])]),t._v(" "),s("li",[s("code",[t._v("delete(key)")]),t._v(" 方法删除指定的"),s("code",[t._v("key")])]),t._v(" "),s("li",[s("code",[t._v("entries()")]),t._v("  方法返回一个迭代器，允许遍历该对象中包含的所有键/值对")]),t._v(" "),s("li",[s("code",[t._v("forEach()")]),t._v("  方法遍历"),s("code",[t._v("formData")]),t._v(" "),s("code",[t._v("key/value")]),t._v("并执行回调函数")]),t._v(" "),s("li",[s("code",[t._v("get(key)")]),t._v(" 方法获取指定"),s("code",[t._v("key")]),t._v("的值")]),t._v(" "),s("li",[s("code",[t._v("getAll(key)")]),t._v(" 方法获取指定"),s("code",[t._v("key")]),t._v("下边的所有值")]),t._v(" "),s("li",[s("code",[t._v("has(key)")]),t._v(" 方法判断某个"),s("code",[t._v("key")]),t._v("是否存在"),s("code",[t._v("formData")]),t._v("中")]),t._v(" "),s("li",[s("code",[t._v("keys()")]),t._v(" 方法返回一个迭代器，允许遍历该对象中包含的键/值对的所有键")]),t._v(" "),s("li",[s("code",[t._v("set(key,value)")]),t._v(" 在"),s("code",[t._v("FormData")]),t._v("对象中设置一个现有键的新值，或者在不存在的情况下添加键/值")]),t._v(" "),s("li",[s("code",[t._v("values()")]),t._v(" 方法返回一个迭代器，允许遍历该对象中包含的"),s("code",[t._v("键/值")]),t._v("对的所有值")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" formData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nformData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("append")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v("'King'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("append")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'age'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("append")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v("'hong'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nformData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// King")]),t._v("\nformData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//["King", "hong"]')]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="FileReader-FormData.md";a.default=n.exports}}]);