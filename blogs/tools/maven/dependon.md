---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 前端 面试 面试题
  - name: description
    content: 本章为小马学习专栏—— 前端面试题
---


# Maven-依赖管理

[[toc]]

:horse: 


## 引入依赖

我们在开发时，需要可能需要依赖很多`jar`包，这时我们可以使用`Maven`来管理我们的项目依赖

### 引入外部依赖

在`Maven`中我们使用外部依赖主要用的下面元素：

- `dependency` 项目的依赖配置元素
- `groupId` 组织ID
- `artifactId` 项目ID
- `version` 项目版本

例如我们引入一个`ldapjdk` `jar`包

```xml
<dependencies>
    <dependency>
      <groupId>ldapjdk</groupId>  <!-- 库名称，也可以自定义 -->
      <artifactId>ldapjdk</artifactId>    <!--库名称，也可以自定义-->
      <version>1.0.0</version> <!--版本号-->
    </dependency>
</dependencies>
```

### 依赖关系

在引入依赖时，我们可以设置依赖的作用域。设置依赖作用域通过`scope`元素来设置。`Maven`定义了下面几种作用域

|scope|描述|
|---|---|
|`compile`|编译时需要用到该`jar`包（默认）|
|`test`|编译`Test`时需要用到该`jar`包,如`JUnit`|
|`runtime`|编译时不需要，但运行时需要用到，如`MySQL驱动`|
|`provided`|编译时需要用到，但运行时由`JDK`或某个服务器提供,如`servlet api`|

`Maven`默认引入依赖时是在`compile`编译阶段。下面是在`runtime`运行时引入`MySQL驱动`

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.48</version>
    <scope>runtime</scope>
</dependency>
```


## 仓库类型

`Maven`中的仓库指的是项目中依赖的库所在的位置，一般这个位置有三个：

- 本地仓库 
- 中央仓库 
- 私服仓库 


### 本地仓库

`Maven`在安装后，并第一次执行`Maven`命令时会创建一个本地仓库。默认情况下，`Mave`的本地仓库地址为`${user.home}/.m2/repository`。

我们可以在`Maven`根目录的`conf/settings.xml`中修改该默认仓库

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 
   http://maven.apache.org/xsd/settings-1.0.0.xsd">
      <localRepository>D:/MyLocalRepository</localRepository>
</settings>
```
上面配置将`Maven`的本地仓库修改为了`D:/MyLocalRepository`


### 中央仓库

`Maven`提供了一个中央仓库。开发者可以将开发好的库上传以供其他人使用。使用`Maven`中央仓库时不需要配置，但是需要网络进行连接下载(国内连接`Maven`中央仓库不稳定，我们可以配置阿里镜像，下面有介绍)。`Maven`社区还提供了查询中央仓库内容的网站 [https://search.maven.org/#browse](https://search.maven.org/#browse)

### 私服仓库

私服是一种特殊的远程仓库，它是架设在局域网内的仓库服务，私服代理广域网上的远程仓库，供局域网内的`Maven`用户使用。当`Maven`需要下载构件的时候，它从私服请求，如果私服上不存在该构件，则从外部的远程仓库下载，缓存在私服上之后，再为`Maven`的下载请求提供服务。我们还可以把一些无法从外部仓库下载到的构件上传到私服上。

配置私服仓库可以使用`repositories`元素，在该元素下使用`repository`元素可以配置多个私服仓库。方式如下

```xml
<repositories>  
    <repository>  
        <id>jboss</id>  
        <name>JBoss Repository</name>  
        <url>http://repository.jboss.com/maven2/</url>  
        <releases>  
           <!-- 表示更新的频率，值有：never, always,interval,daily, daily 为默认值 -->
            <updatePolicy>daily</updatePolicy>
            <enabled>true</enabled>  
            <!-- 表示maven检查和检验文件的策略，warn为默认值 -->
            <checksumPolicy>warn</checksumPolicy>
        </releases>  
        <snapshots>  
            <enabled>false</enabled>  
        </snapshots>  
        <layout>default</layout>  
    </repository>  
</repositories>
```

### 安全认证

出于安全方面的考虑，有时我们要对远程仓库的访问进行认证，一般将认证信息配置在settings.xml中：

```xml
<servers>  
        <server>  
            <id>same with repository id in pom</id>  
            <username>username</username>  
            <password>pwd</password>  
        </server>  
</servers>
```

## 阿里镜像



## 继承

项目中的`Pom.xml`可以继承父`Pom`。`Maven` 继承的存在是为了消除重复配置。`Maven`的继承如下：

- 子`POM`通过 `parent`元素来指定继承的父`POM`

- `Maven`里的`dependencyManagement`和`pluginManagement`元素用于帮助`POM`继承过程中的依赖管理和插件管理。在父类`POM`下，此两个元素中的声明的依赖或配置并不会引入实际的依赖或是造成实际的插件调用行为,不过它们能够约束子类POM中的依赖和插件配置的声明。在子`POM`下需要**手动引入**

- `Maven`里父`POM`的`dependencies`里的元素，在子`POM`继承时，会自动引入相关依赖


**父Pom.xml**

```xml
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <modelVersion>4.0.0</modelVersion>
    
    <!-- 父Pom 的信息 -->
    <groupId>com.lesson</groupId>
    <artifactId>Parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>
    <name>test-project</name>

   <!-- 
      这种配置，不需要子项目手动引入。依赖会在子项目中自动引入
      适合项目的开发
     -->
    <dependencies>
      <dependency>
          <groupId>org.myco.myplugins</groupId>
          <artifactId>myplugin</artifactId>
          <version>1.0.0</version>
      </dependency>
    </dependencies>

   <!-- 
     dependencyManagement 里的依赖，子项目需要手动引入
     只是限定了依赖的版本信息。适合框架开发
    -->
    <dependencyManagement>
      <dependencies>
          <dependency>
              <groupId>junit</groupId>
              <artifactId>junit</artifactId>
              <version>4.0</version>
              <scope>compile</scope>
          </dependency>
      </dependencies>
   </dependencyManagement>

</project>
```


**子Pom.xml** 继承方式如下


```xml
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <modelVersion>4.0.0</modelVersion>

    <!-- 子Pom的信息 -->
    <groupId>com.children</groupId>
    <artifactId>child</artifactId>
    <version>1.0.0</version>
    <packaging>war</packaging>

   <!-- 
     继承父类及其定义的版本信息
     这里会自动继承 org.myco.myplugins myplugin
    -->
    <parent>
        <groupId>com.lesson</groupId>
        <artifactId>Parent</artifactId>
        <version>1.0.0</version>
    </parent>
   <!-- 
     在子项目中 引入父dependencyManagement 里的依赖，子项目需要手动引入
     不用指定版本号。子项目会继承父项目的版本号
    -->
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
        </dependency>
    </dependencies>
</project>
```





## 聚合






**参考文献**

- [maven使用指南](https://www.ibofine.com/mavenbook/index.html)
- [Maven详解之仓库------本地仓库、远程仓库](https://www.cnblogs.com/duanxz/p/5210189.html)