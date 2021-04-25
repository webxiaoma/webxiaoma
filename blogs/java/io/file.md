---
meta:
  - name: keywords
    content: 马新想 小马学习 java File 文件操作
  - name: description
    content: 本章为小马学习专栏 —— java文件操作File
---

# IO-File对象

[[toc]]

:horse: 


## 前言

在`java`中操作文件这块主要用`File`类。我们可以通过`File`类来对文件进行增加，删除，重命名，修改属性等等。

`File`的构造方法如下：

- `File(String pathname)` 当`pathname`为实际路径时，`File`对象表示目录；当`pathname`为文件名时，`File`对象表示文件
- `File(String path, String name)`  `path`为路径（目录），`name`为文件名
- `File(File dir, String child)` `dir`为路径对象，`name`为文件名


## 常用方法

`File`经常使用的对文件的操作方法：

|方法|描述|
|:---|:---|
|`boolean canRead()`|测试应用程序是否能从指定的文件中进行读取|
|`boolean canWrite()`|测试应用程序是否能写当前文件|
|`boolean delete()`|删除当前对象指定的文件|
|`boolean exists()`|测试当前 `File` 是否存在|
|`String getAbsolutePath()`|返回由该对象表示的文件的绝对路径名|
|`getCanonicalPath()`|返回的是规范化的绝对路径|
|`String getName()`|返回表示当前对象的文件名或路径名（如果是路径，则返回最后一级子路径名）|
|`String getParent()`|返回当前`File`对象所对应目录（最后一级子目录）的父目录名|
|`boolean isAbsolute()`|测试当前`File`对象表示的文件是否为一个绝对路径名。|
|`boolean isDirectory()`|测试当前 File 对象表示的文件是否为一个路径|
|`boolean isFile()`|测试当前 File 对象表示的文件是否为一个“普通”文件|
|`long lastModified()`|返回当前 File 对象表示的文件最后修改的时间|
|`long length()`|返回当前 File 对象表示的文件长度|
|`String[] list()`|返回当前 File 对象指定的路径文件列表|
|`String[] list(FilenameFilter)`|返回当前 File 对象指定的目录中满足指定过滤器的文件列表|
|`boolean mkdir()`|创建一个目录，它的路径名由当前 File 对象指定|
|`boolean mkdirs()`|创建一个目录，它的路径名由当前 File 对象指定|
|`boolean renameTo(File)`|将当前 File 对象指定的文件更名为给定参数 File 指定的路径名|

## 使用

```java
import java.io.File;

// 路径 D:/test/java/file.txt
public static void main(String[] args){

  String url = "D:/test/java/file.txt";
  File f = new File(url);
  System.out.println("文件路径：" + f.getPath()); // 文件路径：D:\test\java\file.txt
  System.out.println("文件绝对路径：" + f.getAbsolutePath()); //文件绝对路径：D:\test\java\file.txt
  System.out.println("文件名称：" + f.getName()); // 文件名称：file.txt
  System.out.println("文件长度：" + f.length()); // 文件长度：62
  System.out.println("是否是文件：" + f.isFile()); // 是否是文件：true
  System.out.println("是否是目录：" + f.isDirectory()); // 是否是目录：false
  System.out.println("是否可写：" + f.canWrite()); // 是否可写：true
  System.out.println("是否可读：" + f.canRead()); // 是否可读：true
  System.out.println("最后修改时间：" + f.lastModified()); //最后修改时间：1619318993139
}
```

:::tip 提示
关于路径`getPath()` 和 `getAbsolutePath()`

- `getPath()` 返回的是定义时的路径，可能是相对路径，也可能是绝对路径，这个取决于定义时用的是相对路径还是绝对路径。如果定义时用的是绝对路径，那么使用`getPath(`)返回的结果跟用`getAbsolutePath()`返回的结果一样
- `getAbsolutePath()` 返回的是定义时的路径对应的相对路径，但不会处理`.`和`..`的情况
- `getCanonicalPath()` 返回的是规范化的绝对路径，相当于将`getAbsolutePath()`中的`.`和`..`解析成对应的正确的路径
:::



## 练习


在`window`系统中，系统盘一般会有一个`C:\WINDOWS`目录。遍历这个目录下所有的文件(不用遍历子目录)找出这些文件里，最大的和最小(非0)的那个文件，打印出他们的文件名


```java
File f = new File("c:\\windows");
File[] fs = f.listFiles();
if(null==fs)
    return;
long minSize = Integer.MAX_VALUE;
long maxSize = 0;
File minFile = null;
File maxFile = null;
for (File file : fs) {
    if(file.isDirectory())
        continue;
    if(file.length()>maxSize){
        maxSize = file.length();
        maxFile = file;
    }
    if(file.length()!=0 && file.length()<minSize){
        minSize = file.length();
        minFile = file;
    }
}

//最大的文件是c:\windows\MEMORY.DMP，其大小是1,792,570,601字节
System.out.printf("最大的文件是%s，其大小是%,d字节%n",maxFile.getAbsoluteFile(),maxFile.length());

//最小的文件是c:\windows\csup.txt，其大小是12字节
System.out.printf("最小的文件是%s，其大小是%,d字节%n",minFile.getAbsoluteFile(),minFile.length());
```