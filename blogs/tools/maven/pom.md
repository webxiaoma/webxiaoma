---
meta:
  - name: keywords
    content: 马新想 小马学习 java maven pom
  - name: description
    content: 本章为小马学习专栏——Maven之POM
---

# Maven-Pom

[[toc]]

:horse: 


## 前言

`Pom`(`project object Model`)是一个`xml`，它是`maven`的工作基础。`pom`文件中包含了项目的信息和`maven build`项目所需的配置信息，通常有项目信息(如版本、成员)、项目的依赖、插件和`goal`、`build`选项等等


## Pom节点

`Pom`因为是`xml`文件，所有我们需要知道`Pom`常出现的元素节点。`Pom`中的主要节点如下：

|元素节点|说明|
|---|---|
|`project`|文件的根节点|
|`modelVersion`|`pom.xml`使用的对象模型版本|
|`groupId`|创建项目的组织或团体的唯一`Id`|
|`artifactId`|项目的唯一`Id`, 可视为项目名|
|`version`|项目(包)的版本号|
|`packaging`|打包物的扩展名，一般有 `JAR`,`WAR`,`EAR` 等|
|`name`|项目的显示名，常用于`Maven`生成的文档|
|`url`|项目的URL地址|
|`properties`|自定义的`Maven`属性|
|`dependencies`|项目的依赖配置|
|`parent`|表示父 `POM`|
|`build`|表示`build`配置|


下面是`Pom.xml`的示例：

```xml
<!-- 文件的根节点 -->
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <!-- 模型版本 -->
    <modelVersion>4.0.0</modelVersion>
    <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 
      如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：
      /com/companyname/project-group -->
    <groupId>com.companyname.project-group</groupId>
    <!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
    <artifactId>project</artifactId>
    <!-- 版本号 -->
    <version>1.0.0</version>
</project>
```

## Pom父节点

`Maven`中可以通过`parent`元素来继承父模块`pom`，来实现`pom.xml`配置的继承和传递，便于各种`Maven`插件以及程序依赖的统一管理。根级父模块`pom`一般位于`Maven`安装的根目录的`conf/settings.xml`中。



<!-- ## Pom所有配置 -->



**参考文献**

- [Maven之pom.xml配置文件详解](https://www.cnblogs.com/zhoudaxing/p/11338183.html)
