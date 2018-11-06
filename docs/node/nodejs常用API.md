---
sidebarDepth: 1
meta:
  - name: keywords
    content: node nodejs js node API
  - name: description
    content: 本文章记录nodejs开发中常见的一些API。
---

# nodejs常用API

---

## path 路径

例如路径 `/foo/bar/baz/asdf/quux.html`

- `path.basename(path,[ext])` 返回`path`的最后一部分`quux.html`, 当`ext`为`.html`时，结果为`quux`
- `path.dirname`返回一个 `path` 的目录名， 如：`/foo/bar/baz/asdf`
- `path.join()`方法使用平台特定的分隔符把全部给定的 `path` 片段连接到一起
- `path.extname()` 返回 `path` 的扩展名`.html`
- `path.format()`从一个对象返回一个路径字符串与 `path.parse()` 相反
- `path.parse()` 方法返回一个对象，对象的属性表示 `path` 的元素

```js
path.parse('/home/user/dir/file.txt') 在linux上;
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
path.parse('C:\\path\\dir\\file.txt') 在window上;
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "
└──────┴──────────────┴──────┴─────┘
```
- `path.resolve()` 会把一个路径或路径片段的序列解析为一个绝对路径, 例如 
```js
path.resolve('/foo/bar', './baz')
// 返回: '/foo/bar/baz'
```
## url 网址

```js
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

- `url.hash` 获取及设置`URL`的分段(hash)部分
- `url.host` 获取及设置`URL`的主机(host)部分(包含端口)。
- `url.hostname` 获取及设置URL的主机名(hostname)部分（不包含端口）。
- `url.href` 获取及设置序列化的URL。
- `url;.origin` 获取只读序列化的URL origin部分。
- `url.password` 获取及设置URL的密码(password)部分。
- `url.port` 获取及设置URL的端口(port)部分。
- `url.pathname`  获取及设置URL的路径(path)部分。
- `url.search` 获取及设置URL的序列化查询(query)部分部分。
- `url.username` 获取及设置URL的用户名(username)部分。
- `url.toString()`  在URL对象上调用toString()方法将返回序列化的URL。
- `url.toJSON()` 在URL对象上调用toJSON()方法将返回序列化的URL。

## querystring 查询字符串

- `querystring.parse()` 把一个 URL 查询字符串 str 解析成一个键值对的集合
- `querystring.stringify` 该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串。

## fs 文件系统

### 文件操作

- `fs.open(path, flags[, mode], callback)` 异步打开文件
- `fs.read(fd, buffer, offset, length, position, callback)` 异步读取文件，同步使用`fs.readSync()`
- `fs.write(fd, buffer[, offset[, length[, position]]], callback)` 异步写入文件
- `fs.close(fd, callback)` 关闭文件
- `fs.watchFile(filename[, options], listener)` 监听文件变化

- `fs.readFileSync(path[, options])` 异步读取文件
- `fs.writeFile(file, data[, options], callback)` 异步写入文件
- `fs.unlink(path, callback)` 删除文件
- `fs.rename(old文件名，新文件名，callback(传递一个err参数))` 异步改变文件名，同步使用`fs.renameSync()`

### 目录操作
- `fs.mkdir(path[, mode], callback)` 创建目录
- `fs.rmdir(path, callback)` 删除目录
- `fs.readdir(path, callback)` 查看目录
- `fs.appendFile(fileName,str,encode,callback);` 文件追加写入

### 其他

- `fs.exists(path, callback)` 判断文件路径是否存在
- `fs.start(path, callback)` 获取文件信息，callback中有两个参数，第二个为err， 第二个为stats, stats中也有很多方法

```js
stats.isFile()	如果是文件返回 true，否则返回 false。
stats.isDirectory()	如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
```

## buffer 缓存器

- `Buffer.alloc(size[, fill[, encoding]])`分配一个大小为 `size` 字节的新建的 `Buffer`。`fill`为`undefined`时会用 0 填充。
- `Buffer.allocUnsafe(size)`分配一个大小为`size`字节的新建的`Buffer`, 填充内容不确定。可以使用`buf.fill(0)`初始化
- `Buffer.byteLength(string[, encoding])`返回一个字符串的实际字节长度。 
- `Buffer.concat(list[, totalLength])` 返回一个合并了`list`中所有`Buffer`实例的新建的`Buffer`。
- `Buffer.from()` 创建`buffer`,它有以下创建方法
```js
//Buffer.from(array)
Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
//Buffer.from(arrayBuffer[, byteOffset[, length]])
const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
Buffer.from(arr.buffer,0,10);

//Buffer.from(buffer)
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

//Buffer.from(string[, encoding])
Buffer.from('this is a tést');
//Buffer.from(object[, offsetOrEncoding[, length]])
Buffer.from(new String('this is a test'));
```
- `Buffer.isBuffer(obj)`如果`obj`是一个`Buffer`则返回`true`，否则返回`false`。
- `buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])` 拷贝`buf`的一个区域的数据到`target`的一个区域
- `buf.entries()` 从`buf`的内容中，创建并返回一个`[index, byte]`形式的迭代器。
- `buf.equals(otherBuffer)`如果`buf`与`otherBuffer`具有完全相同的字节，则返回`true`，否则返回`false`。
- `buf.fill(value[, offset[, end]][, encoding])`如果未指定`offset`和`end`，则填充整个`buf`


## module 模块

- `__dirname`  该变量并不是全局变量，它在模块`module`中，存储着当前模块的绝对路径
- `__filename` 该变量并不是全局变量，它在模块`module`中，存储着当前模块的文件名称
- `module.id` 模块的标识符。 通常是完全解析后的文件名。
- `module.paths` 模块的搜索路径。
- `module.parent` 最先引用该模块的模块。

