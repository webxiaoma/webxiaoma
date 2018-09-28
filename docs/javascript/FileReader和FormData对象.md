---
sidebarDepth: 2
meta:
  - name: keywords
    content: FileReader, FormData, js webp API，表单数据，form
  - name: description
    content: 本文主要讲述使用js处理数据，将数据转化为FormData格式的数据，使用FileReader处理二进制数据。
---


# FileReader和FormData对象

---

##  `FileReader` API


`FileReader` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，它的参数是 `File` 或 `Blob` 对象。[传送门](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

其中`File`对象可以是来自用户在一个 `<input>`元素上选择文件后返回的`FileList`对象,也可以来自拖放操作生成的`DataTransfer`对象,还可以是来自在一个`HTMLCanvasElement`上执行`mozGetAsFile()`方法后返回结果。

该API 的兼容性 [查看FileReader兼容性](https://caniuse.com/#search=FileReader)


### 1、 `FileReader` 的读取文件的方法

- `readAsBinaryString(Blob|File)`：返回二进制字符串，该字符串每个字节包含一个0到255之间的整数。
- `readAsText(Blob|File, opt_encoding)`：返回文本字符串。默认情况下，文本编码格式是’UTF-8’，可以通过可选的格式参数，指定其他编码格式的文本。
- `readAsDataURL(Blob|File)`：返回一个基于Base64编码的data-uri对象。
- `readAsArrayBuffer(Blob|File)`：返回一个ArrayBuffer对象。
- `abort()` 中断读取

FileReader 的实例拥有 4 个方法，其中 3 个用以读取文件，另一个用来中断读取。需要注意的是 ，无论读取成功或失败，方法并不会返回读取结果，这一结果存储在 result属性中。



### 2、 `FileReader` 的事件

- `onabort`方法：读取中断或调用reader.abort()方法时触发。
- `onerror`方法：读取出错时触发。
- `onload`方法：读取成功后触发。
- `onloadend`方法：读取完成后触发，不管是否成功。触发顺序排在 onload 或 onerror 后面。
- `onloadstart`方法：读取将要开始时触发。
- `onprogress`方法：读取过程中周期性触发。

文件一旦开始读取，无论成功或失败，实例的 result 属性都会被填充。如果读取失败，则 result 的值为 null ，否则即是读取的结果，绝大多数的程序都会在成功读取文件的时候，抓取这个值

### 3. `FileReader` 的用法

当文件读取时，会触发响应的事件，我们可以从事件对象中获取文件流的一些信息，并且文件读取的结果会储存在result这个属性中。需要注意的是，读取文件的方法不能同时进行。

```js

let inp = document.getElementById('file')

inp.onchange = function(e){
   let file = e.target.files[0]
   let fileReader = new FileReader()

   //返回二进制字符串，该字符串每个字节包含一个0到255之间的整数。
   fileReader.readAsBinaryString(file)
//    fileReader.readAsText(file)
//    fileReader.readAsDataURL(file)
//    fileReader.readAsArrayBuffer(file)

   fileReader.onload = function(reesult){
       console.log(e)
   }

   fileReader.onprogress = function(e){
       console.log(e)
   }
}

```


##  Image 对象

[参考文章](http://javascript.ruanyifeng.com/dom/image.html)

### 1. Image的使用

`<img>`元素用于插入图片，主要继承了 HTMLImageElement 接口。

浏览器提供一个原生构造函数Image，用于生成HTMLImageElement实例。

```js
var img = new Image();
img instanceof Image // true
img instanceof HTMLImageElement // true
```

`Image`构造函数可以接受两个整数作为参数，分别表示`<img>`元素的宽度和长度。

```js
// 语法
Image(width, height)

// 用法
var myImage = new Image(100, 200);
```


### 2. Image的一些属性

- `HTMLImageElement.src`返回图像的完整网址。
- `HTMLImageElement.currentSrc`返回当前展示的图像的网址。`Js` 和 `CSS` 的 `mediaQuery` 都可能改变正在展示的图像。
- `HTMLImageElement.alt`可以读写`<img>`的 `HTML` 属性`alt`，表示对图片的文字说明。
- `HTMLImageElement.isMap`对应`<img>`元素的 `HTML` 属性`ismap`，返回一个布尔值，表示图像是否为服务器端的图像映射的一部分。
- `HTMLImageElement.useMap`对应`<img>`元素的 `HTML` 属性`usemap`，表示当前图像对应的`<map>`元素。
- `HTMLImageElement.srcset`读写`<img>`元素的`srcset`属性
- `HTMLImageElement.sizes`读写`sizes`属性
- `HTMLImageElement.naturalWidth`和`HTMLImageElement.naturalHeight`分别返回图像的实际宽度和高度
- `HTMLImageElement.width和HTMLImageElement.height `返回`img`中的`width`和`height` 如果没有则返回图像的实际宽度和高度
- `HTMLImageElement.complete`属性返回一个布尔值，表示图表是否已经加载完成。如果`<img>`元素没有`src`属性，也会返回true。
- `HTMLImageElement.crossOrigin`属性用于读写`<img>`元素的`crossorigin`属性，表示跨域设置。这个属性有两个可能的值：`anonymous`：跨域请求不要求用户身份（credentials），这是默认值；`use-credentials`：跨域请求要求用户身份。
- `HTMLImageElement.referrerPolicy`用来读写`<img>`元素的 HTML 属性`referrerpolicy`，表示请求图像资源时，如何处理 HTTP 请求的`referrer`字段。
- `HTMLImageElement.x`属性返回图像左上角相对于页面左上角的横坐标，`HTMLImageElement.y`属性返回纵坐标。



### 3. Image的事件

图像加载完成会触发 `onload` 事件， 加载失败会触发 `onerror` 事件， 需要注意的是在`Image` 未加载完成前，是访问不到他的一些属性（比如宽，高等）的

```js       
let img = new Image()
img.src = "http://www.webxiaoma.com/assets/images/manong.jpg"

img.onload = function(){
    console.log(img.width)
    console.log(img.height)
}
```


## FormData 对象

`XMLHttpRequest Level2`添加了一个新的接口`FormData`. 利用`FormData`对象,我们可以通过`JavaScript`用一些键值对来模拟一系列表单控件,我们还可以使用`XMLHttpRequest`的`send()`方法来异步的提交这个"表单".比起普通的`ajax`,使用`FormData`的最大优点就是我们可以异步上传一个二进制文件.

`FormData`对象的操作方法，全部在原型中，自己本身没任何的属性及方法。

- `append(key,value)` 方法向 `formData` 添加`key/value`
- `delete(key)` 方法删除指定的`key`
- `entries()`  方法返回一个迭代器，允许遍历该对象中包含的所有键/值对
- `forEach()`  方法遍历`formData` `key/value`并执行回调函数
- `get(key)` 方法获取指定`key`的值
- `getAll(key)` 方法获取指定`key`下边的所有值
- `has(key)` 方法判断某个`key`是否存在`formData`中
- `keys()` 方法返回一个迭代器，允许遍历该对象中包含的键/值对的所有键
- `set(key,value)` 在`FormData`对象中设置一个现有键的新值，或者在不存在的情况下添加键/值
- `values()` 方法返回一个迭代器，允许遍历该对象中包含的`键/值`对的所有值

```js
let formData = new FormData()

formData.append('name','King')
formData.append('age',12)
formData.append('name','hong')

formData.get('name') // King
formData.getAll('name') //["King", "hong"]
```