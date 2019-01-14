(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{338:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/%E6%8F%90%E5%8F%96%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库练习"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("在 "),n("Badge",[t._v("webpack v3.0+")]),t._v("中我们提取公共代码使用的是 "),n("a",{attrs:{href:"https://webpack.docschina.org/plugins/commons-chunk-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonsCHunkPlugin 插件"),n("OutboundLink")],1),t._v(", 而在 "),n("Badge",[t._v("webpack v4.0+")]),t._v("中我们使用"),n("a",{attrs:{href:"https://www.webpackjs.com/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin 插件"),n("OutboundLink")],1)],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/yesvods/Blog/issues/15",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin 配置的中文"),n("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._m(11),t._v(" "),n("p",[t._v("另外如果我们这样设置, 只会打包按需加载的大于10字节的模块")]),t._v(" "),t._m(12),n("p",[t._v("配置缓存组我们可以使用下面配置：")]),t._v(" "),t._m(13),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"提取公共模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取公共模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 提取公共模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们在开发项目时经常会用到插件，比如"),s("code",[this._v("vue")]),this._v("，"),s("code",[this._v("react")]),this._v("等等一些其他插件，这些插件我们可以单独打包出来放到一个文件中，这样减少我们的代码的冗余，来提高我们的加载速度。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"splitchunksplugin配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitchunksplugin配置","aria-hidden":"true"}},[this._v("#")]),this._v(" SplitChunksPlugin配置")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这里我们来简单介绍在"),n("code",[t._v("webpack4")]),t._v(" 中使用"),n("code",[t._v("SplitChunksPlugin")]),t._v("插件来实现提取公共代码。"),n("code",[t._v("SplitChunksPlugin")]),t._v("插件在"),n("code",[t._v("webpack4")]),t._v(" 中已经内置了，我们只需要在配置文件中的"),n("code",[t._v("optimization.splitChunks")]),t._v("字段中去配置就可以，常见的配置项如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 其他配置..")]),t._v("\n    optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n                all  异步和同步都可以共享\n                async 表示对动态（异步）导入的模块进行分离。\n                initial 表示对初始化值进行分离优化。\n             */")]),t._v("\n            chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'all'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//  async、 initial 、 all")]),t._v("\n            name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//打包后的名字")]),t._v("\n            minSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("2000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//(默认是30000)：形成一个新代码块最小的体积")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//（默认是1）：在分割之前，这个代码块最小应该被引用的次数")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）")]),t._v("\n            minChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            maxInitialRequests"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//（默认是3）：一个入口最大的并行请求数")]),t._v("\n            maxAsyncRequests"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//（默认是5）：按需加载时候最大的并行请求数。")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//  此选项允许您指定用于生成名称的分隔符 默认以~分割")]),t._v("\n            automaticNameDelimiter"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'~'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 下面是缓存组的配置")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//缓存组会继承splitChunks的配置，")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//但是test、priorty和reuseExistingChunk只能用于配置缓存组。")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//可以通过optimization.splitChunks.cacheGroups.default: false禁用default缓存组")]),t._v("\n            cacheGroups"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认缓存组的配置")]),t._v("\n                    minChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("//定义缓存组的优先级 更高优先级的缓存组可以优先打包所选择的模块）（默认自定义缓存组优先级为0）")]),t._v("\n                    priority"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                    "),n("span",{attrs:{class:"token comment"}},[t._v("//选项允许复用已经存在的代码块，而不是新建一个新的，需要在精确匹配到对应模块时候才会生效。")]),t._v("\n                    reuseExistingChunk"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                vendors"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("//选项用于控制哪些模块被这个缓存组匹配到 默认所有模块")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("// 值得类型RegExp、String和Function")]),t._v("\n                    test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/]/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 这里选的是node_modules中的模块")]),t._v("\n                    priority"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//定义缓存组的优先级")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("另外当我们设置"),s("code",[this._v('optimization.splitChunks.chunks: "all"')]),this._v("时，"),s("code",[this._v("webpack")]),this._v("是有默认的方式，webpack根据下述条件自动进行代码块分割：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("新代码块可以被共享引用，OR这些模块都是来自node_modules文件夹里面")]),this._v(" "),s("li",[this._v("新代码块大于30kb（min+gziped之前的体积）")]),this._v(" "),s("li",[this._v("按需加载的代码块，最大数量应该小于或者等于5")]),this._v(" "),s("li",[this._v("初始加载的代码块，最大数量应该小于或等于3")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"splitchunksplugin使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitchunksplugin使用","aria-hidden":"true"}},[this._v("#")]),this._v(" SplitChunksPlugin使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("根据以上的配置我们可以来尝试一下，比如我们将使用"),s("code",[this._v("npm")]),this._v(" 下载的"),s("code",[this._v("jquery")]),this._v(" 打包出来。我们的配置为")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//index.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" $ "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'jquery'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("fun")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'.a'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'build.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 为生成的chunk其名字")]),t._v("\n    chunkFilename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'[name].buildChunk.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n  optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'all'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//  async、 initial 、 all")]),t._v("\n        name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//打包后的名字")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在"),s("code",[this._v("webpack")]),this._v("执行时会将"),s("code",[this._v("jq")]),this._v("打包到一个文件中。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'async'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 会将按需加载的模块打包到单独文件中")]),t._v("\n            minSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("//打包10字节以上的模块 默认30000")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'all'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("100")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认30000")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//  maxSize:160,")]),t._v("\n    automaticNameDelimiter"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'-'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将连接符~ 换成 -")]),t._v("\n    cacheGroups"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认缓存组的配置")]),t._v("\n            name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'commons'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            minChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//定义缓存组的优先级 更高优先级的缓存组可以优先打包所选择的模块）（默认自定义缓存组优先级为0）")]),t._v("\n            priority"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),n("span",{attrs:{class:"token comment"}},[t._v("//选项允许复用已经存在的代码块，而不是新建一个新的，需要在精确匹配到对应模块时候才会生效。")]),t._v("\n            reuseExistingChunk"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        query"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//选项用于控制哪些模块被这个缓存组匹配到 默认所有模块")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 值得类型RegExp、String和Function")]),t._v("\n            test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/]/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 这里选的是node_modules中的模块")]),t._v("\n            priority"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//定义缓存组的优先级")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("该配置将"),s("code",[this._v("node_modules")]),this._v("目录的公共代码放到了一个chunk中并打包出来，将其他目录中非懒加载的模块合并到一起打包出来，懒加载的合并到了一起并输出。")])}],!1,null,null,null);e.options.__file="提取公共模块.md";s.default=e.exports}}]);