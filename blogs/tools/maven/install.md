---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 前端 面试 面试题
  - name: description
    content: 本章为小马学习专栏—— 前端面试题
---

# Maven-安装

[[toc]]

:horse: 


## 安装

`maven`的安装和环境配置文章有很多，可以查看[Maven 环境配置](https://www.runoob.com/maven/maven-setup.html)


## IDEA配置Maven

按照好`Maven`项目并配置好环境变量后，我们就可以在`IDEA`配置`Maven`。

### 创建新的Maven项目

在`IEDA`中创建新的项目可以按照下面步骤

1. 在`IDEA`中配置`Maven`。 

- 设置好`Maven`的根目录;
- 设置好`xml`配置文件路径；
- 设置好`jar`包仓库路径
<images src="/tools/maven1.png" width="700"/>

2. 创建`Mave`项目

- 选择创建`Maven`项目
- 设置`jdk`安装路径
- 选择`Maven`项目模板

<images src="/tools/maven2.png" width="700"/>

`Maven`模板常用的有三种`cocoon-22-archetype-webapp`，`maven-archetype-quickstart`，`maven-archetype-webapp`。详细说明[戳这里](https://blog.csdn.net/cx1110162/article/details/78297654)


3. 填写项目信息

- 设置组织ID
- 设置项目模板id
- 设置版本号

<images src="/tools/maven3.png" width="700"/>

4. 设置项目的`Mavne`信息

<images src="/tools/maven4.png" width="700"/>

`archetypeCatalog`用来指定`maven-archetype-plugin`读取`archetype-catalog.xml`文件的位置：
 
- `internal` 指`maven-archetype-plugin`内置的
- `local`本地的，位置为`~/.m2/archetype-catalog.xml`
- `remote` 指向`Maven`中央仓库的`Catalog`

5. 设置项目名称和地址

<images src="/tools/maven5.png" width="700"/>


6. 创建后项目模板中没有`java`目录，我们在`main`目录中创建`java`目录，并将`java`目录设置成源码文件。右击`java`目录

<images src="/tools/maven6.png" width="700"/>


我们还可以通过右击**项目**，选择`Modules`配置项，来配置

<images src="/tools/maven7.png" width="700"/>




**参考文献**


- [Maven 三种archetype说明](https://blog.csdn.net/cx1110162/article/details/78297654)