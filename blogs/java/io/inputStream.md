---
meta:
  - name: keywords
    content: 马新想 小马学习 java inputStream 字节流
  - name: description
    content: 本章为小马学习专栏 —— java I/O字节流
---

# IO-字节流操作

[[toc]]

:horse: 



## 字节流

在`java`中字节流操作使用输入`InputStream`类与输出流`OutputStream`类。

下面列举了常见得字节输入/输出流子类，以及它们得常用方法：

## 输入流


### 常见子类

输入流`InputStream`常见的子类：

- `ByteArrayInputStream` 类：将字节数组转换为字节输入流，从中读取字节。
- `FileInputStream` 类：从文件中读取数据。
- `PipedInputStream` 类：连接到一个`PipedOutputStream`（管道输出流）。
- `SequenceInputStream` 类：将多个字节输入流串联成一个字节输入流。
- `ObjectInputStream` 类：将对象反序列化。


### 常用方法

|方法|描述|
|:---|:---|
|`int read()`|从输入流中读取一个`8`位的字节，并把它转换为`0~255`的整数，最后返回整数。如果返回 -1，则表示已经到了输入流的末尾。为了提高`I/O`操作的效率，建议尽量使用`read()`方法的另外两种形式|
|`int read(byte[] b)`|从输入流中读取若干字节，并把它们保存到参数 b 指定的字节数组中。 该方法返回读取的字节数。|
|`int read(byte[] b, int off, int len)`|从输入流中读取若干字节，并把它们保存到参数`b`指定的字节数组中。其中，`off`起始下标；`len`指定读取的字节数。该方法返回实际读取的字节数。|
|`void close()`|关闭输入流|
|`int available()`|返回可以从输入流中读取的字节数|
|`long skip(long n)`|从输入流中跳过参数 n 指定数目的字节。该方法返回跳过的字节数|
|`void mark(int readLimit)`|在输入流的当前位置开始设置标记，参数 readLimit 则指定了最多被设置标记的字
节数|
|`boolean markSupported()`|判断当前输入流是否允许设置标记，是则返回`true`，否则返回`false`|
|`void reset()`|将输入流的指针返回到设置标记的起始处|

## 输出流

### 常见子类

输出流`OutputStream`常见的子类：

- `ByteArrayOutputStream` 类：向内存缓冲区的字节数组中写数据。
- `FileOutputStream` 类：向文件中写数据。
- `PipedOutputStream` 类：连接到一个 `PipedlntputStream`（管道输入流）。
- `ObjectOutputStream` 类：将对象序列化。


### 常用方法

|方法|描述|
|:---|:---|
|`void write(int b)`|向输出流写入一个字节。这里的参数是`int`类型，但是它允许使用表达式，而不用强制转换成`byte`类型。为了提高`I/O`操作的效率，建议尽量使用`write()`方法的另外两种形式|
|`void write(byte[] b)`|把参数`b`指定的字节数组中的所有字节写到输出流中|
|`void write(byte[] b,int off,int len)`|把参数`b`指定的字节数组中的若干字节写到输出流中。其中，`off`起始下标，`len`表示元素个数|
|`void close()`|关闭输出流。|
|`void flush()`|强制将缓冲区中的数据写入输出流，并清空缓冲区|



## 文件流




## 字节数组流

字节数组流可以使用字节输入流`ByteArrayInputStream` 和 字节输出流 `ByteArrayOutputStream`。 字节数组输入流在内存中创建一个字节数组缓冲区，从输入流读取的数据保存在该字节数组缓冲区中。


```java



```


## 对象流




## 数据流
