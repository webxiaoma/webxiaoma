---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, module, loader配置，webpcak配置，webpack-loader
  - name: description
    content: 本文主要讲述webpack的模块处理，以及怎么使用webpack按照loader规则解析编译文件。
---


# Blob处理类文件对象

- [JavaScript 标准参考教程（alpha）by 阮一峰](https://javascript.ruanyifeng.com/htmlapi/file.html#toc0)
- [细说Web API中的Blob](https://www.jianshu.com/p/4d014a45aaf7)

---


### `Blob` API


1. `Blob` API 允许我们通过js直接操作二进制数据

> 一个Blob对象就是一个包含有只读原始数据的类文件对象。Blob对象中的数据并不一定得是JavaScript中的原生形式。File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件。


2. `Blob` 语法

`new Blob(dataArray,option)`

- dataArray：数组，包含了要添加到Blob对象中的数据，数据可以是任意多个ArrayBuffer，ArrayBufferView， Blob，或者 DOMString对象。
- option：对象，用于设置Blob对象的属性（如：[MIME类型](http://www.w3school.com.cn/media/media_mimeref.asp)）

3. `Blob` 的使用

将字符串元素转化为二进制

```JavaScript
let div = "<div>我是div</div>"
let blob = new Blob([div],{type:'text/html'})
// Blob(13) {size: 13, type: "text/html"}

```

`Blob` 还有一个`slice`方法，返回一个新的`Blob`对象，包含了源`Blob`对象中指定范围内的数据

```JavaScript
blob.slice(start,end)

```
- start: 可选，代表要拷贝的起始位置
- end: 可选，代表要拷贝的结束位置，默认到结束位置


例如：

```JavaScript
let div = "<div>我是div</div>"
let blob = new Blob([div],{type:'text/html'}) // Blob(13) {size: 13, type: "text/html"}

let copyBlob = blob.slice(0,3)  //Blob(3) {size: 3, type: ""}

```




### `Blob URL` 

Blob URL是blob协议的URL，它的格式如下：

```JavaScript

blob:http://XXX
```

Blob URL可以通过URL.createObjectURL(blob)创建。在绝大部分场景下，我们可以像使用Http协议的URL一样，使用Blob URL。常见的场景有：作为文件的下载地址和作为图片资源地址。


**1. 文件下载**

```HTML
 <a href="" id="download">点击下载</a>


<script>
    let div = "<div>我是div</div>"
    let blob = new Blob([div],{type:'text/html'})

    let blobUrl = URL.createObjectURL(blob)
    let a = document.getElementById('download')
    a.href = blobUrl
    a.download = "blob"
</script>

```
上边代码单点击`a`标签时，会下载一个名为 `blob`的`html`文件



**2.图片资源**

```HTML
<input type="file" id="inp">
<img src="" alt="blob"/>


<script>
    let inp = document.getElementById("inp")
    let img = document.querySelector('img')
    inp.onchange = function(e){
        let file = e.target.files[0]
        let blobUrl = URL.createObjectURL(file)
        img.src = blobUrl

    }

</script>
```
上边上传图片后，图片会自动加载出来

这个URL可以放置于任何通常可以放置URL的地方，比如img标签的src属性。需要注意的是，即使是同样的二进制数据，每调用一次URL.createObjectURL方法，就会得到一个不一样的URL。

这个URL的存在时间，等同于网页的存在时间，一旦网页刷新或卸载，这个URL就失效。除此之外，也可以手动调用URL.revokeObjectURL方法，使URL失效。

```JavaScript
window.URL.revokeObjectURL(objectURL);
```

比如上面我们加载图片资源后，可以释放createObjectURL创建的对象

```JavaScript
 inp.onchange = function(e){
        let file = e.target.files[0]
        let blobUrl = URL.createObjectURL(file)
        img.src = blobUrl

}

img.onload = function(){
     URL.revokeObjectURL(this.src);  
}

```



**3. Blob URL 和 DataURL 的区别**

- `Blob URL`的长度一般比较短，但`Data URL`因为直接存储图片`base64`编码后的数据，往往很长，如上图所示，浏览器在显示Data URL时使用了省略号（…）。当显式大图片时，使用`Blob URL`能获取更好的可能性。

- `Blob URL`可以方便的使用`XMLHttpRequest`获取源数据，对于`Data URL`，并不是所有浏览器都支持通过`XMLHttpRequest`获取源数据的。

- `Blob URL` 只能在当前应用内部使用，把`Blob URL`复制到浏览器的地址栏中，是无法获取数据的。`Data URL`相比之下，就有很好的移植性，你可以在任意浏览器中使用。