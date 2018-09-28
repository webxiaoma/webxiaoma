---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, module, loader配置，webpcak配置，webpack-loader
  - name: description
    content: 本文主要讲述webpack的模块处理，以及怎么使用webpack按照loader规则解析编译文件。
---


# base64处理

[Base64笔记 by 阮一峰](http://www.ruanyifeng.com/blog/2008/06/base64.html)

---

### 一、base64定义

[维基百科](https://zh.wikipedia.org/wiki/Base64) 上定义Base64是一种基于64个可打印字符（可见字符）来表示二进制数据的表示方法。由于 2^6 =64 ，所以每6个比特为一个单元，对应某个可打印字符。3个字节有24个比特，对应于4个Base64单元，即3个字节可由4个可打印字符来表示。它可用来作为电子邮件的传输编码。在Base64中的可打印字符包括字母A-Z、a-z、数字0-9，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。一些如uuencode的其他编码方法，和之后BinHex的版本使用不同的64字符集来代表6个二进制数字，但是不被称为Base64。


所谓Base64，就是说选出64个字符----小写字母a-z、大写字母A-Z、数字0-9、符号"+"、"/"（再加上作为垫字的"="，实际上是65个字符）----作为一个基本字符集。然后，其他所有符号都转换成这个字符集中的字符。


### 二、js中 base64格式的编码和解码


#### 1. `btoa()`转码 和 `atob()` 解码

js中提供了`btoa()`转码 和 `atob()` 解码的方法处理 Base64格式

例如我们将 `http://webxiaoma.com/assets/images/manong.jpg` 进行编码和解码

```JavaScript

let url = "http://webxiaoma.com/assets/images/manong.jpg"

let btoaStr = btoa(url) // 将url编码为Base64格式
//aHR0cDovL3dlYnhpYW9tYS5jb20vYXNzZXRzL2ltYWdlcy9tYW5vbmcuanBn

let atobStr = atob(btoaStr) //将Base64格式解码
//http://webxiaoma.com/assets/images/manong.jpg
```


#### 2. `btoa()`转码 和 `atob()` 解码的中文问题



当我们要将中文编码为`Base64`格式后，在进行解码是会乱码，而在谷歌浏览器上在编码中文时会直接报错

```JavaScript

let url = "你好"

let btoaStr = btoa(url) // 在谷歌浏览器上报错

```

我们这时需要借助 `encodeURIComponent` 和 `decodeURIComponent` 转义中文字符,这里是由于` btoa `仅支持 `A`SCII` 字符序列，如果通过 `encodeURIComponent` 将中文字符编码成ASCII字符序列，再通过 btoa 进行 base64 编码。



```JavaScript

let url = "你好"

let btoaStr = encodeURIComponent(btoa(url)) //编码: JUU0JUJEJUEwJUU1JUE1JUJE

let atobStr = decodeURIComponent(atob(btoaStr)) // 解码: 你好

```


### 三、Base64编码的原理


> 第一步，将每三个字节作为一组，一共是24个二进制位。

> 第二步，将这24个二进制位分为四组，每个组有6个二进制位。

> 第三步，在每组前面加两个00，扩展成32个二进制位，即四个字节。

> 第四步，根据下表，得到扩展后的每个字节的对应符号，这就是Base64的编码值。

![Base64索引表](https://webxiaoma.github.io/img/biao.jpg)


这里需要注意的是当字节数不足三个字节时，则这样处理：


1. 二个字节的情况：将这二个字节的一共16个二进制位，按照上面的规则，转成三组，最后一组除了前面加两个0以外，后面也要加两个0。这样得到一个三位的Base64编码，再在末尾补上一个"="号。

比如，"Ma"这个字符串是两个字节，可以转化成三组00010011、00010110、00010000以后，对应Base64值分别为T、W、E，再补上一个"="号，因此"Ma"的Base64编码就是TWE=。

2. 一个字节的情况：将这一个字节的8个二进制位，按照上面的规则转成二组，最后一组除了前面加二个0以外，后面再加4个0。这样得到一个二位的Base64编码，再在末尾补上两个"="号。

比如，"M"这个字母是一个字节，可以转化为二组00010011、00010000，对应的Base64值分别为T、Q，再补上二个"="号，因此"M"的Base64编码就是TQ==。



