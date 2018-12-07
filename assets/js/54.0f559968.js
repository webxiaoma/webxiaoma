(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{318:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"nodejs常用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs常用api","aria-hidden":"true"}},[t._v("#")]),t._v(" nodejs常用API")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"path-路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-路径","aria-hidden":"true"}},[t._v("#")]),t._v(" path 路径")]),t._v(" "),a("p",[t._v("例如路径 "),a("code",[t._v("/foo/bar/baz/asdf/quux.html")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("path.basename(path,[ext])")]),t._v(" 返回"),a("code",[t._v("path")]),t._v("的最后一部分"),a("code",[t._v("quux.html")]),t._v(", 当"),a("code",[t._v("ext")]),t._v("为"),a("code",[t._v(".html")]),t._v("时，结果为"),a("code",[t._v("quux")])]),t._v(" "),a("li",[a("code",[t._v("path.dirname")]),t._v("返回一个 "),a("code",[t._v("path")]),t._v(" 的目录名， 如："),a("code",[t._v("/foo/bar/baz/asdf")])]),t._v(" "),a("li",[a("code",[t._v("path.join()")]),t._v("方法使用平台特定的分隔符把全部给定的 "),a("code",[t._v("path")]),t._v(" 片段连接到一起")]),t._v(" "),a("li",[a("code",[t._v("path.extname()")]),t._v(" 返回 "),a("code",[t._v("path")]),t._v(" 的扩展名"),a("code",[t._v(".html")])]),t._v(" "),a("li",[a("code",[t._v("path.format()")]),t._v("从一个对象返回一个路径字符串与 "),a("code",[t._v("path.parse()")]),t._v(" 相反")]),t._v(" "),a("li",[a("code",[t._v("path.parse()")]),t._v(" 方法返回一个对象，对象的属性表示 "),a("code",[t._v("path")]),t._v(" 的元素")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/home/user/dir/file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 在linux上"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n┌─────────────────────┬────────────┐\n│          dir        │    base    │\n├──────┬              ├──────┬─────┤\n│ root │              │ name │ ext │\n"),a("span",{attrs:{class:"token string"}},[t._v('"  /    home/user/dir / file  .txt "')]),t._v("\n└──────┴──────────────┴──────┴─────┘\npath"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'C:\\\\path\\\\dir\\\\file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 在window上"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n┌─────────────────────┬────────────┐\n│          dir        │    base    │\n├──────┬              ├──────┬─────┤\n│ root │              │ name │ ext │\n"),a("span",{attrs:{class:"token string"}},[t._v('" C:\\      path\\dir   \\ file  .txt "')]),t._v("\n└──────┴──────────────┴──────┴─────┘\n")])])]),a("ul",[a("li",[a("code",[t._v("path.resolve()")]),t._v(" 会把一个路径或路径片段的序列解析为一个绝对路径, 例如")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/foo/bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./baz'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 返回: '/foo/bar/baz'")]),t._v("\n")])])]),a("h2",{attrs:{id:"url-网址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-网址","aria-hidden":"true"}},[t._v("#")]),t._v(" url 网址")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("┌─────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                            href                                             │\n├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤\n│ protocol │  │        auth         │        host         │           path            │ hash  │\n│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │\n│          │  │                     │   hostname   │ port │ pathname │     search     │       │\n│          │  │                     │              │      │          ├─┬──────────────┤       │\n│          │  │                     │              │      │          │ │    query     │       │\n"),a("span",{attrs:{class:"token string"}},[t._v('"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "')]),t._v("\n│          │  │          │          │   hostname   │ port │          │                │       │\n│          │  │          │          ├──────────────┴──────┤          │                │       │\n│ protocol │  │ username │ password │        host         │          │                │       │\n├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │\n│   origin    │                     │       origin        │ pathname │     search     │ hash  │\n├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤\n│                                            href                                             │\n└─────────────────────────────────────────────────────────────────────────────────────────────┘\n")])])]),a("ul",[a("li",[a("code",[t._v("url.hash")]),t._v(" 获取及设置"),a("code",[t._v("URL")]),t._v("的分段(hash)部分")]),t._v(" "),a("li",[a("code",[t._v("url.host")]),t._v(" 获取及设置"),a("code",[t._v("URL")]),t._v("的主机(host)部分(包含端口)。")]),t._v(" "),a("li",[a("code",[t._v("url.hostname")]),t._v(" 获取及设置URL的主机名(hostname)部分（不包含端口）。")]),t._v(" "),a("li",[a("code",[t._v("url.href")]),t._v(" 获取及设置序列化的URL。")]),t._v(" "),a("li",[a("code",[t._v("url;.origin")]),t._v(" 获取只读序列化的URL origin部分。")]),t._v(" "),a("li",[a("code",[t._v("url.password")]),t._v(" 获取及设置URL的密码(password)部分。")]),t._v(" "),a("li",[a("code",[t._v("url.port")]),t._v(" 获取及设置URL的端口(port)部分。")]),t._v(" "),a("li",[a("code",[t._v("url.pathname")]),t._v("  获取及设置URL的路径(path)部分。")]),t._v(" "),a("li",[a("code",[t._v("url.search")]),t._v(" 获取及设置URL的序列化查询(query)部分部分。")]),t._v(" "),a("li",[a("code",[t._v("url.username")]),t._v(" 获取及设置URL的用户名(username)部分。")]),t._v(" "),a("li",[a("code",[t._v("url.toString()")]),t._v("  在URL对象上调用toString()方法将返回序列化的URL。")]),t._v(" "),a("li",[a("code",[t._v("url.toJSON()")]),t._v(" 在URL对象上调用toJSON()方法将返回序列化的URL。")])]),t._v(" "),a("h2",{attrs:{id:"querystring-查询字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-查询字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" querystring 查询字符串")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querystring.parse()")]),t._v(" 把一个 URL 查询字符串 str 解析成一个键值对的集合")]),t._v(" "),a("li",[a("code",[t._v("querystring.stringify")]),t._v(" 该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串。")])]),t._v(" "),a("h2",{attrs:{id:"fs-文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs-文件系统","aria-hidden":"true"}},[t._v("#")]),t._v(" fs 文件系统")]),t._v(" "),a("h3",{attrs:{id:"文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("fs.open(path, flags[, mode], callback)")]),t._v(" 异步打开文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.read(fd, buffer, offset, length, position, callback)")]),t._v(" 异步读取文件，同步使用"),a("code",[t._v("fs.readSync()")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.write(fd, buffer[, offset[, length[, position]]], callback)")]),t._v(" 异步写入文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.close(fd, callback)")]),t._v(" 关闭文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.watchFile(filename[, options], listener)")]),t._v(" 监听文件变化")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.readFileSync(path[, options])")]),t._v(" 异步读取文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.writeFile(file, data[, options], callback)")]),t._v(" 异步写入文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.unlink(path, callback)")]),t._v(" 删除文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fs.rename(old文件名，新文件名，callback(传递一个err参数))")]),t._v(" 异步改变文件名，同步使用"),a("code",[t._v("fs.renameSync()")])])])]),t._v(" "),a("h3",{attrs:{id:"目录操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录操作")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fs.mkdir(path[, mode], callback)")]),t._v(" 创建目录")]),t._v(" "),a("li",[a("code",[t._v("fs.rmdir(path, callback)")]),t._v(" 删除目录")]),t._v(" "),a("li",[a("code",[t._v("fs.readdir(path, callback)")]),t._v(" 查看目录")]),t._v(" "),a("li",[a("code",[t._v("fs.appendFile(fileName,str,encode,callback);")]),t._v(" 文件追加写入")])]),t._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fs.exists(path, callback)")]),t._v(" 判断文件路径是否存在")]),t._v(" "),a("li",[a("code",[t._v("fs.start(path, callback)")]),t._v(" 获取文件信息，callback中有两个参数，第二个为err， 第二个为stats, stats中也有很多方法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("stats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是文件返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isDirectory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是目录返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isBlockDevice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是块设备返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isCharacterDevice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是字符设备返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isSymbolicLink")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是软链接返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isFIFO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是"),a("span",{attrs:{class:"token constant"}},[t._v("FIFO")]),t._v("，返回"),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。"),a("span",{attrs:{class:"token constant"}},[t._v("FIFO")]),t._v("是"),a("span",{attrs:{class:"token constant"}},[t._v("UNIX")]),t._v("中的一种特殊类型的命令管道。\nstats"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isSocket")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t如果是 Socket 返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("，否则返回 "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\n")])])]),a("h2",{attrs:{id:"buffer-缓存器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-缓存器","aria-hidden":"true"}},[t._v("#")]),t._v(" buffer 缓存器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Buffer.alloc(size[, fill[, encoding]])")]),t._v("分配一个大小为 "),a("code",[t._v("size")]),t._v(" 字节的新建的 "),a("code",[t._v("Buffer")]),t._v("。"),a("code",[t._v("fill")]),t._v("为"),a("code",[t._v("undefined")]),t._v("时会用 0 填充。")]),t._v(" "),a("li",[a("code",[t._v("Buffer.allocUnsafe(size)")]),t._v("分配一个大小为"),a("code",[t._v("size")]),t._v("字节的新建的"),a("code",[t._v("Buffer")]),t._v(", 填充内容不确定。可以使用"),a("code",[t._v("buf.fill(0)")]),t._v("初始化")]),t._v(" "),a("li",[a("code",[t._v("Buffer.byteLength(string[, encoding])")]),t._v("返回一个字符串的实际字节长度。")]),t._v(" "),a("li",[a("code",[t._v("Buffer.concat(list[, totalLength])")]),t._v(" 返回一个合并了"),a("code",[t._v("list")]),t._v("中所有"),a("code",[t._v("Buffer")]),t._v("实例的新建的"),a("code",[t._v("Buffer")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("Buffer.from()")]),t._v(" 创建"),a("code",[t._v("buffer")]),t._v(",它有以下创建方法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//Buffer.from(array)")]),t._v("\nBuffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0x62")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0x75")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0x66")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0x66")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0x65")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0x72")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//Buffer.from(arrayBuffer[, byteOffset[, length]])")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Uint16Array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBuffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//Buffer.from(buffer)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'buffer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//Buffer.from(string[, encoding])")]),t._v("\nBuffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'this is a tést'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//Buffer.from(object[, offsetOrEncoding[, length]])")]),t._v("\nBuffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'this is a test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("Buffer.isBuffer(obj)")]),t._v("如果"),a("code",[t._v("obj")]),t._v("是一个"),a("code",[t._v("Buffer")]),t._v("则返回"),a("code",[t._v("true")]),t._v("，否则返回"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])")]),t._v(" 拷贝"),a("code",[t._v("buf")]),t._v("的一个区域的数据到"),a("code",[t._v("target")]),t._v("的一个区域")]),t._v(" "),a("li",[a("code",[t._v("buf.entries()")]),t._v(" 从"),a("code",[t._v("buf")]),t._v("的内容中，创建并返回一个"),a("code",[t._v("[index, byte]")]),t._v("形式的迭代器。")]),t._v(" "),a("li",[a("code",[t._v("buf.equals(otherBuffer)")]),t._v("如果"),a("code",[t._v("buf")]),t._v("与"),a("code",[t._v("otherBuffer")]),t._v("具有完全相同的字节，则返回"),a("code",[t._v("true")]),t._v("，否则返回"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("buf.fill(value[, offset[, end]][, encoding])")]),t._v("如果未指定"),a("code",[t._v("offset")]),t._v("和"),a("code",[t._v("end")]),t._v("，则填充整个"),a("code",[t._v("buf")])])]),t._v(" "),a("h2",{attrs:{id:"module-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" module 模块")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("__dirname")]),t._v("  该变量并不是全局变量，它在模块"),a("code",[t._v("module")]),t._v("中，存储着当前模块的绝对路径")]),t._v(" "),a("li",[a("code",[t._v("__filename")]),t._v(" 该变量并不是全局变量，它在模块"),a("code",[t._v("module")]),t._v("中，存储着当前模块的文件名称")]),t._v(" "),a("li",[a("code",[t._v("module.id")]),t._v(" 模块的标识符。 通常是完全解析后的文件名。")]),t._v(" "),a("li",[a("code",[t._v("module.paths")]),t._v(" 模块的搜索路径。")]),t._v(" "),a("li",[a("code",[t._v("module.parent")]),t._v(" 最先引用该模块的模块。")])])])}],!1,null,null,null);e.options.__file="nodejs常用API.md";s.default=e.exports}}]);