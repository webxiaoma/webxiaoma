---
meta:
  - name: keywords
    content: 马新想 小马学习 InetAddress类 JAVA 网络编程 ip操作
  - name: description
    content: 本章为小马学习专栏——JAVA网络编程InetAddress类
---


# 网络编程-IP端口操作

[[toc]]

:horse: 

## InetAddress类

`InetAddress`类可以获取`IP`相关的信息。其常用得方法如下：

|方法|作用|
|:---|:----|
| `static InetAdderss getLocalHost()`  | 返回本地主机  |    
| `String getCanonicalHostName()`  | 获取此 IP 地址的完全限定域名 |    
| `String getHostAddress()`  | 返回 IP 地址字符串 |    
| `String getHostName()`  | 返回此 IP 地址的主机名 |    
| `byte[] getAddress()`  |  返回此 `InetAddress` 对象的原始 IP 地址 |    
| `static InetAddress[] getAHByName(String host)` | 在给定主机名的情况下，根据系统上配置的名称，服务器返回其 IP 地址所组成的数组  |    
| `static InetAddress getByAddress(byte[] addr)`  |  在给定原始 IP 地址的情况下，返回 `InetAddress` 对象 |    
| `static InetAddress getByAddress(String host)	`  | 在给定主机名的情况下确定主机的 IP 地址  |    
| `boolean equals(Object obj)` | 将此对象与指定对象比较 | 

## 方法使用

当域名不存在时会引发`UnknownHostException`错误，所以我们在使用`InetAddress`时需要做一下异常处理

```java
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;

public class network {
  public static void main(String[] args){
    try{
        // 获取 InetAddress 实例
        InetAddress ia = InetAddress.getByName("www.baidu.com");

        System.out.println(ia.getHostName()); // 获取主机名
        System.out.println(ia.getHostAddress()); // 返回 IP 地址字符串
        System.out.println(InetAddress.getLocalHost()); // 获取本机主机
        System.out.println(Arrays.toString(ia.getAddress())); // 原始 IP 地址

    }catch (UnknownHostException e){
        e.printStackTrace();
    }
  }
}
```

