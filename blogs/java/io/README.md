---
meta:
  - name: keywords
    content: 马新想 小马学习 IO IO操作
  - name: description
    content: 本章为小马学习专栏 —— IO系列
---

# IO-初识

[[toc]]

:horse: 

## IO分类

**数据流是 `Java` 进行 `I/O` 操作的对象，它按照不同的标准可以分为不同的类别。**
- 按照流的方向主要分为输入流和输出流两大类。
- 数据流按照数据单位的不同分为字节流和字符流。
- 按照功能可以划分为节点流和处理流。

:::tip 提示
- **所有输入流类都是 InputStream 抽象类（字节输入流）和 Reader 抽象类（字符输入流）的子类**
- **在 Java 中所有输出流类都是 OutputStream 抽象类（字节输出流）和 Writer 抽象类（字符输出流）的子类**
:::

`IO`流操作时，出现错误经常会引发`IOException`异常。在使用系统资源时，在使用完后，需要记得关闭系统资源。

`IO`流的结构图如下[图片来源](https://www.runoob.com/java/java-files-io.html):

<images src="https://user-gold-cdn.xitu.io/2020/4/22/1719fdae29b2cd3b?w=687&h=763&f=png&s=191553" width="600" />


## 输入流


### 输入流结构图

`IO`流操作中输入流的结构图如下[图片来源](http://c.biancheng.net/view/1119.html)：

<images src="/java/io01.png" width="600" />

### 输入流常用方法

输入流`InputStream`是一个抽象类，不能被实例化，它是所有输入流的超类。在输入流`InputStream`中常用的方法，

|方法|描述|
|:---|:---|
|`void close()`|关闭数据流，当完成对数据流的操作之后需要关闭数据流|
|`int read()`|从输入流读入一个 8 字节的数据，将它转换成一个 0~ 255 的整数，返回一个整数，如果遇到输入流的结尾返回 -1|
|`int read(byte[] b,int off,int len)`|从输入流读取若干字节的数据保存到参数 b 指定的字节数组中，其中 off 是指在数组中开始保存数据位置的起始下标，len 是指读取字节的位数。返回的是实际读取的字节数，如果遇到输入流的结尾则返回 -1|
|`int read(byte[] b)`|从输入流读取若干字节的数据保存到参数 b 指定的字节数组中，返回的字节数表示读取的字节数，如果遇到输入流的结尾返回 -1|
|`int available()`|返回可以从数据源读取的数据流的位数。|
|`skip(long n)`|从输入流跳过参数 n 指定的字节数目|
|`boolean markSupported()`|判断输入流是否可以重复读取，如果可以就返回 true|
|`void mark(int readLimit)`|如果输入流可以被重复读取，从流的当前位置开始设置标记，readLimit 指定可以设置标记的字节数|
|`void reset()`|使输入流重新定位到刚才被标记的位置，这样可以重新读取标记过的数据|


在使用`mark`标记时，我们一般会安下面步骤进行：

1. 首先使用 `markSupported()` 判断，是否可以重复读取。
2. 如果可以重复读取，则使用 `mark(int readLimit)` 方法进行标记。
3. 标记完成之后可以使用 `read()` 方法读取标记范围内的字节数。
4. 最后使用 `reset()` 方法使输入流重新定位到标记的位置，继而完成重复读取操作。


## 输出流


### 输出流结构图

`IO`流操作中输出流的结构图如下[图片来源](http://c.biancheng.net/view/1119.html)：

<images src="/java/io02.png" width="600" />


### 输出流常用方法

在输入流`OutputStream`中常用的方法,输入流`OutputStream`是一个抽象类，不能被实例化，它是所有输出流的超类。这个抽象类定义的一个最重要的方法就是`void write(int b)`，其它常用方法如下

|方法|描述|
|:---|:---|
|`int write(b)`|将指定字节的数据写入到输出流|
|`int write (byte[] b)`|将指定字节数组的内容写入输出流|
|`int write (byte[] b,int off,int len)	`|将指定字节数组从 off 位置开始的 len 字节的内容写入输出流|
|`close()`|关闭数据流，当完成对数据流的操作之后需要关闭数据流|
|`flush()`|刷新输出流，强行将缓冲区的内容写入输出流|

在向磁盘、网络写入数据的时候，出于效率的考虑，操作系统并不是输出一个字节就立刻写入到文件或者发送到网络，而是把输出的字节先放到内存的一个缓冲区里（本质上就是一个`byte[]`数组），等到缓冲区写满了，再一次性写入文件或者网络。这时可能会用到`flush()`

---

**参考文献**

- [Java输入/输出流](http://c.biancheng.net/view/1119.html)
- [Java 流(Stream)、文件(File)和IO](https://www.runoob.com/java/java-files-io.html)
- [廖雪峰的官方网站Java-IO](https://www.liaoxuefeng.com/wiki/1252599548343744/1298069154955297)