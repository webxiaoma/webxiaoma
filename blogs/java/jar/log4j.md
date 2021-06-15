---
meta:
  - name: keywords
    content: 马新想 小马学习 java log4j 日志
  - name: description
    content: 本章为小马学习专栏 —— Java日志输出控制包Log4j
---


# Java-Log4j

[[toc]]

:horse: 


## 前言

`Log4j`是`Apache`的一个开源项目，通过使用`Log4j`，我们可以控制日志信息输送的目的地是控制台、文件、GUI组件，甚至是套接口服务器、NT的事件记录器、`UNIX Syslog`守护进程等；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。

## 错误级别

`Log4j`一共有六个级别的日志，级别从小到大如下

- `trace` 追踪级别
- `debug` 调试级别
- `info` 一般信息级别
- `warn` 警告级别
- `error` 错误级别
- `fatal` 致命级别

在使用时我们可以配置不同级别的输出。


## 使用2.x

`Log4`有`1.x`版本和`2.x`版本,下面是`2.x`版本相关的使用方法

### 导入Log4j包

在`maven`项目中导入`Log4j`相关的包

```xml
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.7</version>
</dependency>
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.7</version>
</dependency>
```


### 创建配置文件

在项目中`resources`目录里创建`log4j2.xml`配置文件。

```
|---main
  |---resources
     |---log4j2.xml
```

我们在`log4j2.xml`中写入一下配置。配置信息详情我们下面会有详情介绍

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration status="error">
  <!--先定义所有的appender -->
  <appenders>
    <!--输出控制台的配置 -->
    <Console name="Console" target="SYSTEM_OUT">
        <!-- 控制台只输出trace及以上级别的信息（onMatch），其他的直接拒绝（onMismatch） -->
        <ThresholdFilter level="trace" onMatch="ACCEPT" onMismatch="DENY"/>
        <!-- 输出日志的格式 -->
        <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n"/>
    </Console>

    <!--文件会打印出所有信息，这个log每次运行程序会自动清空，
      由append属性决定，这个也挺有用的，适合临时测试用 -->
    <!--append为TRUE表示消息增加到指定文件中，false表示消息覆盖指定的文件内容，默认值是true -->
    <File name="log" fileName="D://test/java/logs.log" append="false">
        <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n"/>
    </File>

    <!--添加过滤器ThresholdFilter,可以有选择的输出某个级别以上的类别  onMatch="ACCEPT" 
    onMismatch="DENY"意思是匹配就接受,否则直接拒绝  -->
    <File name="ERROR" fileName="D://test/java/error.log">
        <ThresholdFilter level="error" onMatch="ACCEPT" onMismatch="DENY"/>
        <PatternLayout pattern="%d{yyyy.MM.dd 'at' HH:mm:ss z} %-5level %class{36} %L %M - %msg%xEx%n"/>
    </File>

    <!--这个会打印出所有的信息，每次大小超过size，
    则这size大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩，作为存档 -->
    <RollingFile name="RollingFile" fileName="D://test/java/web.log"
                  filePattern="logs/$${date:yyyy-MM}/web-%d{MM-dd-yyyy}-%i.log.gz">
        <PatternLayout pattern="%d{yyyy-MM-dd 'at' HH:mm:ss z} %-5level %class{36} %L %M - %msg%xEx%n"/>
        <SizeBasedTriggeringPolicy size="2MB"/>
    </RollingFile>
  </appenders>
  <!--定义logger，只有定义了logger并引入的appender，appender才会生效 -->
  <loggers>
    <root level="trace">
        <appender-ref ref="RollingFile"/>
        <appender-ref ref="Console"/>
        <appender-ref ref="ERROR" />
        <appender-ref ref="log"/>
    </root>
  </loggers>
</configuration>
```


### 代码中使用

下面我们在代码中使用

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Test {
    private static Logger logger= LogManager.getLogger(LogManager.ROOT_LOGGER_NAME);
    public static void main(String[] args){
        logger.trace("trace 跟踪信息");
        logger.debug("debug 调试信息");
        logger.info("info 输出信息");
        logger.warn("warn 警告信息");
        logger.error("error 错误信息");
        logger.fatal("fatal 致命信息");
    }
}
```

###  配置详解


#### 部分元素说明

- `configuration`为根节点
- `appenders` 该元素下为输出配置
- `Console` 输出控制台的配置
- `File` 输出文件的配置
- `RollingFile` 控制输出信息文件大小的配置
- `loggers` 的作用是执行`appenders`中的配置。`appender-ref` 元素上的`ref`对应的为 `appenders`里的`name`值

#### 占位符

在`log4j2.xml`配置中我们看到了一些占位符。它们含义大致如下：

- `%d{HH:mm:ss.SSS}` 表示输出到的时间
- `%t` 输出当前线程名称
- `%-5level` 输出日志级别，`-5`表示左对齐并且固定输出`5`个字符，如果不足在右边补`0`
- `%logger` 输出`logger`名称，因为`Root Logger`没有名称，所以没有输出
- `%msg` 日志文本
- `%n` 换行
- `%F` 输出所在的类文件名，如`Client.java`
- `%L` 输出行号
- `%M` 输出所在方法名
- `%l`  输出语句所在的行数, 包括类名、方法名、文件名、行数
- `%%`  输出一个`%`字符


