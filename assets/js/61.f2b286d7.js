(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{350:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack-contrib/file-loader",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("file-loader")]),t._v(" 的作用"),a("OutboundLink")],1),t._v("就是讲js和css中导入的图片路径转化为正确的路径。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),a("p",[t._v("另外"),a("code",[t._v("file-loader")]),t._v(" 也有一些"),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/file-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关的配置"),a("OutboundLink")],1),t._v(", 例如：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("我们打包出来的图片，在展示到页面时会发很多"),a("code",[t._v("http")]),t._v("请求，会降低页面性能。这个问题可以通过"),a("a",{attrs:{href:"https://github.com/webpack-contrib/url-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("url-loader"),a("OutboundLink")],1),t._v("解决。"),a("code",[t._v("url-loader")]),t._v("会将引入的图片编码，生成"),a("code",[t._v("dataURl")]),t._v("。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置"),a("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),a("p",[t._v("当然，如果图片较大，编码会消耗性能。因此"),a("code",[t._v("url-loader")]),t._v("提供了一个"),a("code",[t._v("limit")]),t._v("参数，小于"),a("code",[t._v("limit")]),t._v("字节的文件会被转为"),a("code",[t._v("DataURl")]),t._v("，大于"),a("code",[t._v("limit")]),t._v("的还会使用"),a("code",[t._v("file-loader")]),t._v("进行"),a("code",[t._v("copy")]),t._v("。所用url-loader中已经包含了"),a("code",[t._v("file-loader")]),t._v(", 我们在开发时可以只使用"),a("code",[t._v("url-loader")]),t._v("就可以。除了"),a("code",[t._v("limit")]),t._v("参数，"),a("code",[t._v("url-loader")]),t._v("还提供一些"),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("额外的参数"),a("OutboundLink")],1)]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("我们在使用webpack打包图片时，除了将小图片转化为"),a("code",[t._v("DataURL")]),t._v("格式，我们还可以将图片进行压缩，这时候我们可以使用"),a("a",{attrs:{href:"https://github.com/tcoopman/image-webpack-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("image-webpack-loader"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mixtur/webpack-spritesmith",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-spritesmith插件"),a("OutboundLink")],1),t._v(" 生成雪碧图")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"处理静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理静态资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理静态资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"处理资源路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理资源路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理资源路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("webpack")]),this._v("构建时,如果我们希望在页面引入图片（包括img的src和background的url）,引入图片会遇到一些问题。因为"),s("code",[this._v("webpack")]),this._v("会将各个模块打包到一个文件中，我们引入图片的路径是相对入口文件的路径，所以会出现问题，这时我们就要去解决。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用file-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用file-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用file-loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们安装"),s("code",[this._v("file-loader")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npm i "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),s("span",{attrs:{class:"token constant"}},[this._v("D")]),this._v(" file"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装后配置也相当的简单,我们在"),s("code",[this._v("webpack.config.js")]),this._v("中配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 将图片打包到了path目录下，并生成原图片名加8位hash值的图片名")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[path][name][hash:8].[ext]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 将图片打包到该公共目录下")]),t._v("\n            outputPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'images/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 图片引入资源的共路径，发布线上时很有用")]),t._v("\n            publicPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'assets/'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-url-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-url-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 url-loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装"),s("code",[this._v("url-loader")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("npm i "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),s("span",{attrs:{class:"token constant"}},[this._v("D")]),this._v(" url"),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装后配置也相当的简单,我们在"),s("code",[this._v("webpack.config.js")]),this._v("中配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif|svg)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// name 同flie-loader")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'[path][name][hash:8].[ext]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 小于10000字节的转换为DataUrl格式")]),t._v("\n            limit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否采用file-loader， 默认采用")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 还可以用responsive-loader等一些其他loader")]),t._v("\n            fallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 设置要处理的MIME类型，")]),t._v("\n            mimetype"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'image/png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("url-loader")]),t._v(" 不仅仅可以处理图片，还可以处理音频视频、文档等等。如vue教程加中使用"),a("code",[t._v("url-loader")]),t._v("处理的资源：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//图片")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("png"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("jpe"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("g"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("svg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("$"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("   \n"),a("span",{attrs:{class:"token comment"}},[t._v("//音频视频")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mp4"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("webm"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("ogg"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("mp3"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("wav"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("flac"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("aac"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("$"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("//字体")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("woff2"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("eot"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("ttf"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("otf"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("$"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"压缩图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩图片","aria-hidden":"true"}},[this._v("#")]),this._v(" 压缩图片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" image"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后我们在"),s("code",[this._v("webpack.config.js")]),this._v("中进行配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[path][name][hash:8].[ext]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              limit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'image-webpack-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("// 压缩图片")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              disable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//是否禁止压缩，默认false")]),t._v("\n              quality"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//压缩质量，也可以是'70-80'")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在我们就可以对图片进行压缩，并且压缩之后再判断图片是否转化为"),s("code",[this._v("DataURL")]),this._v("格式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"其他处理插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他处理插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他处理插件")])}],!1,null,null,null);e.options.__file="处理静态资源.md";s.default=e.exports}}]);