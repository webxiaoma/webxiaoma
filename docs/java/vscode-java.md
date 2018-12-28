---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: java java常见文章
  - name: description
    content: 本文章主要记录java的一些常见网站以及博客。
---

# 使用vscode搭建Java环境

---

## 安装前期环境

- 安装[java开发工具包JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- 安装[Maven](http://maven.apache.org/download.cgi)(下载zip压缩包就行)

:::warning 提示
安装`java JDK` 时,尽量不要安装最高版本，我这里安装的是`8.x`的。
:::

这里不再详细讲如何安装，如何配置环境变量，放上几个链接：

- [Java JDK window7 安装](http://www.runoob.com/java/java-environment-setup.html)
- [Java JDK window10 安装](http://www.runoob.com/w3cnote/windows10-java-setup.html)

- [Maven 安装及环境变量配置](https://www.yiibai.com/maven/maven_environment_setup.html)

## 安装Vscode插件

`Vscode` 官网上也给除了一篇文章来介绍如何配置`java`环境:[Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java)


我们在`vscode`中安装一下插件:

1. [Language support for Java ™ for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=redhat.java) 运行`java`代码会用到
2. [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) 调试代码用
3. [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) 构建应用程序（目录）本地需要先下载好`Maven`
4. [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) 单元测试时使用的插件
5. [Spring Boot Extension Pack]


:::tip

2. [Java Extension Pack]

:::

安装完成后我们来在vscode上设置中配置一下`Java`环境和`Maven`,首先我们打开`文件 ->首选项 -> 设置` 或直接点开左下角设置图标，在点击里边的设置。

我们在设置`User Settings`中配置如下：

```json
{
  // java安装目录
  "java.home": "E:\\java\\java-se-jdk", 
  // 以下是配置 Maven 的
  "java.configuration.maven.userSettings": "E:\\java\\maven\\apache-maven-3.5.4\\bin\\mvn", 
  "maven.executable.path": "E:\\java\\maven\\apache-maven-3.5.4\\conf\\settings.xml",
  "maven.terminal.customEnv": [
      {
          "environmentVariable": "JAVA_HOME", // java环境变量
          "value": "E:\\java\\java-se-jdk"
      }
  ],
  "maven.terminal.useJavaHome": true,
  "search.exclude": {  // 忽略搜索文件
        "**/node_modules": true,
        "**/bower_components": true,
        "**/target": true,
        "**/logs": true
  },
}
```


## 修改Maven 配置文件

`mvn`更新包速度很慢，建议使用阿里云的镜像，找到你安装的`Maven`根目录下`conf`文件夹中的`setting.xml`。


```xml
<mirrors>
    <mirror>
        <id>alimaven</id>
        <mirrorOf>central</mirrorOf>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
    <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
    <mirror>
        <id>repo1</id>
        <mirrorOf>central</mirrorOf>
        <name>Human Readable Name for this Mirror.</name>
        <url>http://repo1.maven.org/maven2/</url>
    </mirror>
    <mirror>
        <id>repo2</id>
        <mirrorOf>central</mirrorOf>
        <name>Human Readable Name for this Mirror.</name>
        <url>http://repo2.maven.org/maven2/</url>
    </mirror>
</mirrors>
```

## 生成项目

上面配置完成后，建议重启一下`vscode`编辑器。接下来我们使用`scode`来生成一个`java`项目

1. 使用 `Ctrl + Shift + P`调出命令窗口，输入`spring`, 然后创建`Maven`项目

![java-vscode](/img/java1.png)

2. 然后我们选择`java`项目

![java-vscode](/img/java2.png)

3. 之后我们输入项目的名称，我这里叫`project`

![java-vscode](/img/java3.png)

4. 接下来选择`spring Boot` 版本号

![java-vscode](/img/java4.png)

5. 开发web项目引入需要的包，这里引入了四个包（如果还有其他需求也可以引入），引入完成后回车。
- `DevTools`（代码修改热更新，无需重启）
- `Web`（集成tomcat、SpringMVC）
- `Lombok`（智能生成`setter、getter、toString`等接口，无需手动生成，代码更简介）
- `Thymeleaf` （模板引擎）。

![java-vscode](/img/java5.png)

6. 接下来右下角会提示, 我们点击`open` 打开改项目即可

![java-vscode](/img/java6.png)

7. 接下来我们来创建项目，在`DemoApplication.java`的同级目录下，创建一个文件`file`,在文件中我们创建一个`IndexDemo.java`文件, 并写入一下内容

![java-vscode](/img/java8.png)

8. 然后我们就可以开发调试了，在启动项目之前，我们需要配置项目的运行环境，选择添加配置,`vscode`会生成一个`launch.json`配置文件, 该文件我们可以不做任何修改。

![java-vscode](/img/java7.png)

9. 然后启动项目，项目默认会在`8080`端口打开 我们可以通过[htttp://localhost:8080](htttp://localhost:8080)

![java-vscode](/img/java9.png)



参考文章

- [VsCode搭建Java开发环境](http://www.cnblogs.com/miskis/p/9816135.html)
- [Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java)