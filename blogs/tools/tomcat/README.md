---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 前端 面试 面试题
  - name: description
    content: 本章为小马学习专栏—— 前端面试题
---


# Tomcat-初识

[[toc]]

:horse: 


## 前言

`Tomcat`是`Apache` 软件基金会（Apache Software Foundation）的`Jakarta` 项目中的一个核心项目。是一个免费的开放源代码的`Web` 应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试`JSP` 程序的首选。

简介点就是：`Tomcat`是一个中间件,用来处理动态资源，在`B/S`架构中，浏览器发出的`http`请求经过`tomcat`中间件，转发到最终的目的服务器上，响应消息再通过`tomcat`返回给浏览器。 再该过程中`Tomcat`主要做了一下事情

- 开启监听端口监听用户的请求
- 解析用户发来的http请求然后访问到你指定的应用系统
- 返回的页面经过`tomcat`返回给用户


## 安装

`Tomcat`的详细安装可以查看下面

- `Window` 版安装教程：[https://www.cnblogs.com/yocichen/p/10478431.html](https://www.cnblogs.com/yocichen/p/10478431.html)
- `Linux` 版安装教程：[https://www.cnblogs.com/xdp-gacl/p/4097608.html](https://www.cnblogs.com/xdp-gacl/p/4097608.html)