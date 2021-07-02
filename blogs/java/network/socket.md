---
meta:
  - name: keywords
    content: 马新想 小马学习 网络编程 Socket java 套接字
  - name: description
    content: 本章为小马学习专栏——JAVA网络编程Socket连接
---


# 网络编程-Socket

[[toc]]

:horse: 


## 前言

`Java`网络程序是利用`Socket`（套接字）编写得，其中又分为服务器程序(`ServerSocket`类)和客户端程序(`Socket`类)。一般这两者得通信步骤如下：

1. 服务端创建一个`ServerSocket`对象，并在指定端口进行监听，等待客户端发来得连接。
2. 客户端创建一个`Socket`对象，并根据服务端启动得`ip`和`端口`,发送一个请求，与服务器进行连接。
3. 建立连接后，服务端会在创建一个新得`Socket`对象，使用该对象与客户端进行通信。

## ServerSocket 类

`ServerSocket`类是服务器端，服务器端套接字一次可以与一个套接字连接，多个客户端请求会被放到请求队列中。默认请求得队列大小为`50`，超出后则被拒绝请求。

`ServerSocket(int port,int backlog,InetAddress address)`这是全部参数得构造方法

- `port`指要绑定得端口
- `backlog` 侦听 `backlog`，可省略
- `address` 要绑定得本地`ip`,可省略

**需要注意得是：** 创建`ServerSocket`可能会抛`IOException`;

### 常见方法


常见得`ServerSocket`类方法如下

|方法|描述|
|:---|:---|
|`Server accept()`|监听并接收到此套接字的连接。|
|`void bind(SocketAddress ads)`|将 `ServerSocket` 绑定到指定地址（IP 地址和端口号）|
|`void close()`|关闭套接字。|
|`InetAddress getInetAddress()`|返回此服务器套接字的本地地址。|
|`int getLocalPort()`|返回此套接字监听的端口。|
|`SocketAddress getLocalSocketAddress()`|返回此套接字绑定的端口地址，如果尚未绑定则返回 null|
|`int getReceiveBufferSize()`|获取此 `ServerSocket` 的 `SO_RCVBUF` 选项的值，该值是从 `ServerSocket` 接收的套接字的建议缓冲区大小|

### 创建服务器

我们创建服务器，并使用`accept()`方法监听客户端发来得请求

```java
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class socketTest {
    public static void main(String[] args){
        try{
            ServerSocket sSocket = new ServerSocket(8888);
            Socket acp = sSocket.accept(); // 建立连接

            System.out.println("有连接过来" + acp);

            sSocket.close();
            acp.close();
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
```

## Socket 类

`Socket`类是客户端的套接字，`Socket`套接字的构成方法如下：

- `Socket()` 无参构造方法。
- `Socket(InetAddress address,int port)` 创建一个流套接字并将其连接到指定 IP 地址的指定端口号。
- `Socket(InetAddress address,int port,InetAddress localAddress,int localPort)` 创建一个套接字并将其连接到指定远程地址上的指定远程端口。
- `Socket(String host,int port)` 创建一个流套接字并将其连接到指定主机上的指定端口号。
- `Socket(String host,int port,InetAddress localAddress,int localPort)` 创建一个套接字并将其连接到指定远程主机上的指定远程端口。

参数解释：

1. `address` IP地址
2. `port` 端口
3. `host` 主机
3. `localAddress` 远程主机地址
3. `localPort` 远程端口


**需要注意得是：** 创建`Socket`可能会抛`IOException`;

### 常见方法

常见得`Socket`类方法如下
|方法|描述|
|:---|:---|
|`void bind(SocketAddress bindpoint)`| 将套接字绑定到本地地址。 |
|`void close()`| 关闭此套接字。 |
|`void connect(SocketAddress endpoint)`|将此套接字连接到服务器。 |
|`InetAddress getInetAddress()`| 返回套接字的连接地址。 |
|`InetAddress getLocalAddress()`|获取套接字绑定的本地地址 |
|`InputStream getInputStream()`| 返回此套接字的输入流。 |
|`OutputStream getOutputStream()`| 返回此套接字的输出流 |
|`SocketAddress getLocalSocketAddress()`| 返回此套接字绑定的端点地址，如果尚未绑定则返回 null。|
|`SocketAddress getRemoteSocketAddress()`| 返回此套接字的连接的端点地址，如果尚未连接则返回 null |
|`int getLoacalPort()`| 返回此套接字绑定的本地端口。|
|`intgetPort()`| 返回此套接字连接的远程端口。|

### 创建客户端


上面我们创建了服务器套接字，现在我们创建客户端套接字，并使用`connect()`方法发送简单的请求

```java
import java.io.IOException;
import java.net.Socket;

public class SocketClient {
    public static void main(String[] args){
        try{
            // 创建客户端套接字
            Socket s = new Socket("127.0.0.1",8888);
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
```
## 进行通信

服务端和客户端建立连接后，就要进行通信。这里我们会用到输出流`OutputStream`以及输入流`InputStream`

### 传输数字

客户端发送数字

```java
try{
    Socket s = new Socket("127.0.0.1",8888);
    // 使用输出流
    OutputStream out = s.getOutputStream();

    out.write(1); // 写入数据
    out.close();
    s.close();
}catch (IOException e){
    e.printStackTrace();
}
```

服务端接收客户端传来的数字

```java
try{
    ServerSocket sSocket = new ServerSocket(8888);
    Socket acp = sSocket.accept(); // 建立连接

    System.out.println("有连接过来" + acp);

    // 获取输入流
    InputStream is = acp.getInputStream();
    int message = is.read();

    System.out.println("客户端发送过来的数据：" + message);

    sSocket.close();
    acp.close();
}catch (IOException e){
    e.printStackTrace();
}
```

### 传输字符串

传输字符串，这里我们用到了`DataOutputStream`流对象和`DataInputStream`流对象


客户端传输字符串

```java {6,7}
try{
    Socket s = new Socket("127.0.0.1",8888);
    OutputStream out = s.getOutputStream();

    // 创建 DataOutputStream 对象
    DataOutputStream dos = new DataOutputStream(out);
    dos.writeUTF("这是一个字符串"); // 使用writeUTF

    out.close();
    s.close();
}catch (IOException e){
  e.printStackTrace();
}
```

服务端接收客户端传来的字符串

```java {8,11}
try{
    ServerSocket sSocket = new ServerSocket(8888);
    Socket acp = sSocket.accept(); // 建立连接
    System.out.println("有连接过来" + acp);
    InputStream is = acp.getInputStream();

    // 创建 DataInputStream 将 is 写入该流中
    DataInputStream ds = new DataInputStream(is);

    // 使用 readUTF 读取字符串
    String message = ds.readUTF();

    System.out.println("客户端发送过来的数据：" + message);
    sSocket.close();
    acp.close();
}catch (IOException e){
    e.printStackTrace();
}
```

### 传输对象数据

传输对象数据，这里我们用到了`ObjectInputStream`流对象和`ObjectOutputStream`流对象，以及需要使用`Serializable`序列化

比如我们需要传输的对象数据：

```java
import java.io.Serializable;

// 需要传输的对象数据User
public class User implements Serializable{
    private String name;
    public User(){}
    public User(String name){
      this.name = name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return  name;
    }
}
```
服务端接收对象数据

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public static void main(String[] args){
  try{
      ServerSocket sSocket = new ServerSocket(8888);
      Socket acp = sSocket.accept(); // 建立连接

      System.out.println("有连接过来" + acp);

      // 创建 ObjectInputStream 对象输入流
      ObjectInputStream  objInpS = new ObjectInputStream(acp.getInputStream());

      //读取一个对象
      Object obj = objInpS.readObject();

      User user = (User)obj; // 将对象转换为User 类型

      System.out.println("客户端发过来的数据" + user.getName());

      sSocket.close();
      acp.close();
      objInpS.close();

  }catch (IOException | ClassNotFoundException e){
      e.printStackTrace();
  }
}
```


客户端传输对象数据

```java
import java.io.*;
import java.net.Socket;


public static void main(String[] args){
   try{
      Socket s = new Socket("127.0.0.1",8888);

       // 创建 ObjectInputStream 对象输出流
      ObjectOutputStream os=new ObjectOutputStream(s.getOutputStream());
      User user = new User();

      System.out.println(user);

      // 写入对象数据
      os.writeObject(user);
      os.flush();

      s.close();
      os.close();
  }catch (IOException e){
      e.printStackTrace();
  }

}
```

