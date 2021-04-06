---
meta:
  - name: keywordsv
    content: java java初始  java初步认识 认识java
  - name: description
    content: 本文章主要记录一些java的基本知识，以及记录一些java概念词。
---

# Java-初识


[[toc]]

:horse: 

## Java三个体系

### JavaSE

`Java SE` 以前称为 `J2SE`, `java`平台标准版。它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 `Java` 应用程序。`Java SE` 包含了支持 `Java Web` 服务开发的类，并为 `Java Platform，Enterprise Edition（Java EE）`提供基础。

### JavaEE 
 
这个版本以前称为 `J2EE`, `java` 平台企业版。企业版本帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 `Java` 应用程序。`Java EE` 是在 `Java SE` 的基础上构建的，它提供 `Web` 服务、组件模型、管理和通信 `API`，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和` Web 2.0`应用程序。


### JavaME 

这个版本以前称为 `J2ME`, `java`平台微型版。`Java ME` 为在移动设备和嵌入式设备（比如手机、`PDA`、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。`Java ME` 包括灵活的用户界面、健壮的安全模型、许多内置的网络协议以及对可以动态下载的连网和离线应用程序的丰富支持。基于 `Java ME` 规范的应用程序只需编写一次，就可以用于许多设备，而且可以利用每个设备的本机功能。


## Java JDK

开发`java`需要安装`java`环境,[java开发工具包JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)提供了java的编译，`JRE`提供了`java`的运行平台,一般`JDK`包含`JRE`。

**JDK包含的基本组件包括：**

- `javac` – 编译器，将源程序转成字节码
- `jar` – 打包工具，将相关的类文件打包成一个文件
- `javadoc` – 文档生成器，从源码注释中提取文档
- `jdb` – debugger，查错工具
- `java` – 运行编译后的java程序（.class后缀的文件）

`java`相比于其他编程语言，有一个跨平台的优点，在这里发挥作用的就是`jre`，它为用`Java`写的程序提供了一个虚拟的环境（采用了`JVM`技术），任何`java`程序只在这个环境内运行，而与操作系统无关。`jdk`是`java`的开发平台



## Maven

[Maven](http://maven.apache.org/download.cgi)是一个项目构建和管理的工具，提供了帮助管理 构建、文档、报告、依赖、scms、发布、分发的方法。可以方便的编译代码、进行依赖管理、管理二进制库等等。[也可以看这篇文章](https://www.cnblogs.com/whgk/p/7112560.html)


## Tomcat

[Tomcat](https://tomcat.apache.org/index.html)支持`jsp`网站的服务器之一，因为`jsp`动态网站使用脚本语言等写的，需要有服务器来解析，服务器就是这个功能。如果你的网页是纯`html`的，浏览器就可以直接解析查看效果。



## Spring

[Spring](https://spring.io/)是一个开源的轻量级`Java SE`（Java 标准版本）/`Java EE`（Java 企业版本）开发应用框架，其目的是用于简化企业级应用程序开发。应用程序是由一组相互协作的对象组成。
