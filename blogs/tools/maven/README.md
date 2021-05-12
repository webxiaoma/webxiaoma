---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 前端 面试 面试题
  - name: description
    content: 本章为小马学习专栏—— 前端面试题
---


# Maven-初识

[[toc]]

:horse: 


## 前言

`Maven`是`Apache`下的一个纯`Java`开发的开源项目。`Maven`是一个**项目管理工具**，可以对`Java`项目进行构建、依赖管理。`Maven`的大体作用以及优点如下

- 帮助管理 构建、文档、报告、依赖、`scms`、发布、分发的方法。
- 可以方便的编译代码、进行依赖管理、管理二进制库等等。
- 可以将项目过程规范化、自动化、高效化以及强大的可扩展性
- 利用`maven`自身及其插件还可以获得代码检查报告、单元测试覆盖率、实现持续集成等等


## 安装

`maven`的安装和环境配置文章有很多，可以查看[Maven 环境配置](https://www.runoob.com/maven/maven-setup.html)


## Maven项目结构

在项目中使用`Maven`来管理时，其主要目录结构如下：

```
maven-project
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   └── test
│       ├── java
│       └── resources
└── target
│   ├── classes
├── pom.xml
```

- `src/main/java` 存放`java`源码目录
- `src/main/resources` 存放资源目录
- `src/test` 测试相关目录
- `src/target` 打包输出目录
- `pom.xml` `maven`的项目配置(描述)文件


## 核心概念


### Pom

`Pom`(`project object Model`)是一个`xml`，它是`maven`的工作基础。`pom`文件中包含了项目的信息和`maven build`项目所需的配置信息，通常有项目信息(如版本、成员)、项目的依赖、插件和`goal`、`build`选项等等

`pom`是可以继承的，通常对于一个大型的项目或是多个`module`的情况，子模块的`pom`需要指定父模块的`pom`

### 生命周期

`maven`的生命周期如下：

|生命周期|功能|说明|
|---|---|---|
|`validate`验证|验证项目|验证项目是否正确且所有必须信息是可用的|
|`compile`编译|执行编译|源代码编译在此阶段完成|
|`Test`测试|测试|使用适当的单元测试框架（例如`JUnit`）运行测试。|
|`package`包装|打包|创建`JAR/WAR`包如在`pom.xml`中定义提及的包|
|`verify`检查|检查|对集成测试的结果进行检查，以保证质量达标|
|`install`安装|安装|安装打包的项目到本地仓库，以供其他项目使用|
|`deploy`部署|部署|拷贝最终的工程包到远程仓库中，以共享给其他开发人员和工程|


## IDEA上配置Maven

**参考文献**

- [Maven介绍](https://www.liaoxuefeng.com/wiki/1252599548343744/1309301146648610)
- [Maven 教程](https://www.runoob.com/maven/maven-tutorial.html)
- [Maven介绍](https://www.trinea.cn/android/maven/)
- [什么是MAVEN](https://how2j.cn/k/maven/maven-introduction/1328.html)