---
meta:
  - name: keywords
    content: 马新想 小马学习 java Reader Writer 字符流
  - name: description
    content: 本章为小马学习专栏 —— java 字符流操作
---

# IO-字符流操作

[[toc]]

:horse: 

## 前言

字符流操作一般继承于字符输入流`Reader` 和 字符输出流`Writer`。和`InputStream` 以及`OutputStream` 不同的是，字节流是以`byte`为单位读取数据的，而字符流是以`char`为单位读取的，

## 字符输入流



### 常用方法

字符输入流`Reader`常见的方法如下：

|方法|描述|
|:---|:---|
|`int read()`|从输入流中读取一个`8`位的字节，并把它转换为`0~255`的整数，最后返回整数。如果返回 -1，则表示已经到了输入流的末尾。为了提高`I/O`操作的效率，建议尽量使用`read()`方法的另外两种形式|
|`int read(char[] c)`|从输入流中读取若干字节，并把它们保存到参数 c 指定的字节数组中。 该方法返回读取的字节数。|
|`int read(char[] c, int off, int len)`|从输入流中读取若干字节，并把它们保存到参数`c`指定的字节数组中。其中，`off`开始保存数据的起始下标；`len`指定读取的字节数。该方法返回实际读取的字节数。|
|`void close()`|关闭输入流|
|`int available()`|返回可以从输入流中读取的字节数|
|`long skip(long n)`|从输入流中跳过参数 n 指定数目的字节。该方法返回跳过的字节数|
|`void mark(int readLimit)`|在输入流的当前位置开始设置标记，参数 readLimit 则指定了最多被设置标记的字
节数|
|`boolean markSupported()`|判断当前输入流是否允许设置标记，是则返回`true`，否则返回`false`|
|`void reset()`|将输入流的指针返回到设置标记的起始处|


### 常见子类

`Reader`常见的子类

- `FileReader`类：以字符输入流读取文件
- `CharArrayReader` 类：将字符数组转换为字符输入流，从中读取字符。
- `StringReader` 类：将字符串转换为字符输入流，从中读取字符。
- `BufferedReader` 类：为其他字符输入流提供读缓冲区。
- `PipedReader` 类：连接到一个 `PipedWriter`。
- `InputStreamReader` 类：将字节输入流转换为字符输入流，可以指定字符编码。



## 字符输出流


### 常用方法


字符输出流`Write`常见的方法如下：


|方法|描述|
|:---|:---|
|`void write(int b)`|向输出流中写入一个字符|
|`void write(char[] c)`|把参数`c`指定的字节数组中的所有字节写到输出流中|
|`void write(char[] c,int off,int len)`|把参数`c`指定的字节数组中的若干字节写到输出流中。其中，`off`开始保存数据的起始下标，`len`表示元素个数|
|`append(char c)`|将参数 `c` 指定的字符添加到输出流中|
|`append(charSequence esq)`|将参数 `esq` 指定的字符序列添加到输出流中|
|`append(charSequence esq,int start,int end)`|将参数`esq`指定的字符序列的子序列添加到输出流中。`start`第一个字符的索引(包含)，`end`最后索引（长度）的后一位，
索引处的字符|
|`void close()`|关闭输出流。|
|`void flush()`|强制将缓冲区中的数据写入输出流，并清空缓冲区|

### 常见子类

`Writer` 类的常用子类如下:

- `FileWriter`类：以字符输入流写入文件
- `CharArrayWriter` 类：向内存缓冲区的字符数组写数据。
- `StringWriter` 类：向内存缓冲区的字符串（`StringBuffer`）写数据。
- `BufferedWriter` 类：为其他字符输出流提供写缓冲区。
- `PipedWriter` 类：连接到一个 `PipedReader`。
- `OutputStreamReader` 类：将字节输出流转换为字符输出流，可以指定字符编码。



## FileReader

在`d:/java/tex.txt`中的文件内容为：`ABC99`, 对取该内容，并将该内容中大写字母`A`变成小写，数字`9`变成`0`写入`d:/java/text-c.txt`文件中

```java
public static void main(String[] args){
  File f = new File("d:/java/tex.txt");
  File ef = new File("d:/java/text-c.txt");
  try(
    FileReader fr = new FileReader(f); 
    FileWriter fw = new FileWriter(ef)
  ){
     char[] charAry = new char[(int)fr.length()];
     fr.read(charAry);

     for(int i = 0; i<charAry.length;i++){
          char n = charAry[i];
          switch (n){
            case '9':
                n = '0';
                break;
            case 'A':
                n = 'a';
                break;
          }

          charAry[i] = n;
      }

      fw.write(charAry);
  }catch (FileNotFoundException e){
      e.printStackTrace();
  }catch (IOException e){
      e.getStackTrace();
  }
}
```

## CharArrayReader

该类实现了一个可用作字符输入流的字符缓冲区，即该类可利用字符缓冲区当做字符输入流进行读取工作。

下面实现了当读取到第三个字符`c`时, 会跳过三个字符到`f`开始读取，最终读取为`abfghi`


```java
public static void main(String[] args){
  char[]  charArray = new char[] {'a','b','c','d','e','f','g','h','i'};
  char[]  charArrayWrit = new char[7];
  try(
      CharArrayReader car = new CharArrayReader(charArray);
      CharArrayWriter caw = new CharArrayWriter();
    ) {
      for(int i = 0; i< charArray.length; i++){
          if(i==2){
              // i 为2时，跳过3个数据：c d e
              car.skip(3); //
          }
          if(car.ready() == true){
              // 读取
              charArrayWrit[i] = (char)car.read();
          }
      }
      // 写入CharArrayWriter 中
      caw.write(charArrayWrit);
      // abfghi
      System.out.println(caw);
  }catch (IOException e){
      e.printStackTrace();
  }
}
```

## BufferReader

`BufferedReader`类从字符输入流中读取文本**并缓冲**字符，以便有效地读取字符，数组和行。`BufferedReader`构造方法既可以传递数值指定缓冲区大小也可以由类中的默认大小(`8192个字符`)指定


```java
public static void main(String[] args){
    File f = new File("D:/javaText/text.txt");
    File wf = new File("D:/javaText/text-copy.txt");
    try(
      FileReader fr = new FileReader(file);
      BufferedReader bf = new BufferedReader(fr);
      FileWriter fw = new FileWriter(wf);
      PrintWriter bw = new PrintWriter(fw)
    ){
      while (true){
          String line = bf.readLine();

          if(null == line) break;
          if(line.indexOf("//") < 0){
              System.out.println(line);
              bw.println(line);
          }
      }
      bw.flush();
    }catch (FileNotFoundException e){
        e.printStackTrace();
    }catch (IOException e){
        e.getStackTrace();
    }
}
```
