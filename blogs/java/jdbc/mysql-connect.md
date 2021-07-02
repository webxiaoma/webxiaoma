---
meta:
  - name: keywords
    content: 马新想 小马学习 java Mysql jdbc 数据库连接
  - name: description
    content: 本章为小马学习专栏—— Java数据库连接
---

# JDBC-MySQL

[[toc]]

:horse: 


## 导入MySQL-jdbc驱动包

在使用`java`操作`MySQL`之前需要我们对`MySQL`有一定的了解[MySQL常用语法](/database/mysql/init), 另外我们还需要再下面几件事：

- 安装`MySQL`数据库：[MySQL 安装](https://www.runoob.com/mysql/mysql-install.html)
- 安装`MySQL-jdbc`驱动包([MySQL-jdbc最新驱动包](https://dev.mysql.com/downloads/connector/j/))
- 导入`MySQL-jdbc`驱动包 [intellij怎么导入MySQL的驱动包](https://www.cnblogs.com/hahayixiao/p/10030491.html)



## 初始化驱动包

我们完成上面的步骤后，需要再项目中初始化`MySQL-jdbc`驱动包，我们使用`Class.forName("com.mysql.jdbc.Driver");` 来初始化驱动

```java
public class JDBC{
  public static void main(String[] args){
    try{
        // 初始化驱动
        // 如果忘了导入，就会报ClassNotFoundException 错误
        Class.forName("com.mysql.jdbc.Driver");
    }catch (ClassNotFoundException e){
        e.printStackTrace();
    }
  }
}
```

## 建立数据库连接

在`java`中 `Connection` 表示数据库的连接，该方法的创建方式：

`Connection c = DriverManager.getConnection(url,user,password);`

`Connection`中常用的对象有

|方法|描述|
|:---:|:----:|
| `createStatement()`  | 创建向数据库发送sql的statement对象。 | 
| `prepareStatement(sql)`  | 创建向数据库发送预编译sql的PrepareSatement对象。  | 
| `prepareCall(sql)`  | 创建执行存储过程的callableStatement对象。 | 
| `setAutoCommit(boolean autoCommit)`  | 设置事务是否自动提交。 | 
| `commit()`  | 在链接上提交事务。 | 
| `rollback()`  | 在此链接上回滚事务。 | 

在建立数据库前我们需要确定数据库的位置，账户以及密码等。比如这些信息如下

- 数据库`ip`地址：`127.0.0.1`
- 数据库端口号：`3306` （一般默认）
- 数据库名称：`students`
- 账户：`root`
- 密码：`admin`

知道以上信息后，`java`连接`MySQL`数据库如下：

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBC{
  public static void  main(String[] args){
    try{
        // 初始化驱动
        // 如果忘了导入，就会报ClassNotFoundException 错误
        Class.forName("com.mysql.jdbc.Driver");
    }catch (ClassNotFoundException e){
        e.printStackTrace();
    }
    
    // 相关数据
    final String IP =  "127.0.0.1";
    final int PORT = 3306;
    final String DB_URL = "jdbc:mysql://" + IP + ":" +PORT +"/students?characterEncoding=UTF-8";
    final String USER_NAME = "root";
    final String PASSWORD = "admin";

    try{
       // 连接数据库
        Connection c = DriverManager.getConnection(DB_URL,USER_NAME,PASSWORD);
    }catch (SQLException e){
        e.printStackTrace();
    }
  }
}
```

## 执行SQL语句

执行`SQL`需要先建立执行对象，我们这里讲两种，一种时通过`Statement`创建的对象，另一种就是使用`PreparedStatement`创建的对象。他们有又几个常用的方法如下表：


|方法|描述|
|:---:|:----:|
| `executeQuery(String sql)`  | 用于向数据发送查询语句。 | 
| `executeUpdate(String sql)`  | 用于向数据库发送insert、update或delete语句 | 
| `execute(String sql)`  | 用于向数据库发送任意sql语句 | 
| `addBatch(String sql)`  | 把多条sql语句放到一个批处理 中。  | 
| `executeBatch()`  | 向数据库发送一批sql语句执行。 | 

- `executeQuery` 主要用于单个结果集语句（常配合`SELECT`语句）
- `execute` 方法可以执行查询语句，然后通过`getResultSet`，将结果集取出来，`execute`返回的值是布尔值，`true`表示执行的是查询语句，而`false`表示的是增删改语句
- `executeUpdate` 方法不能执行查询语句，返回的值是`int`, 表示多少数据受到了影响


### Statement对象

使用`Statement`执行

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

try(
  // 连接数据库
  Connection c = DriverManager.getConnection(DB_URL,USER_NAME,PASSWORD);
  Statement s = c.createStatement();
){
    String sql = "insert into student(name,age,score) values("+
                    "'小明'" + ","+
                    23 + ","+
                    70 +
                    ")";

    // 使用execute发送要执行sql
    s.execute(sql);

}catch (SQLException e){
    e.printStackTrace();
}
```

### PreparedStatement对象

`PreparedStatement`也是用来执行`sql`语句的，它表示**预编译**的`SQL`对象
只不过`PreparedStatement`对象需要先创建执行语句，在向该对象中设置要存储的数据。

使用`PreparedStatement对象`执行

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.PreparedStatement;

// 代码

String sql = "insert into student(name,age,score) values(?,?,?)";
try(
  // 连接数据库
  Connection c = DriverManager.getConnection(DB_URL,USER_NAME,PASSWORD);
  PreparedStatement p = c.preparedStatement(sql); // 创建PreparedStatement
){
    // 使用execute发送要执行sql
    p.setString(1,"小明"); // 从1开始
    p.setInt(2,23);
    p.setFloat(3,89.5f);

    p.execute();
}catch (SQLException e){
    e.printStackTrace();
}
```

### Statement与PreparedStatement

从上面我们可以看出`Statement`和`PreparedStatement`语法使用上是有区别的，

- `Statement`需要字符串拼接要插入的数据与`sql`语句，而`PreparedStatement`是先设置好`sql`语句，在对值进行设置
- `PreparedStatement`的性能要比`Statement`更快
- `PreparedStatement`的代码可读性要比`Statement`更好
- `PreparedStatement`的书写方式更好的防止`SQL`注入式攻击


## 常见执行方式


### execute

`execute`方法可以向数据库发送任意的`sql`语句，`execute`返回的值是布尔值，`true`表示执行的是查询语句，而`false`表示的是增删改语句。

```java
// 删除
String sql = "delete Students where id=1";
statement.execute(sql);
```

使用`execute`查询数据时，提供了一个`ResultSet`方法，来获取结果集，该结果集中常用的方法有：


|方法|描述|
|:---:|:----:|
| `next()`  | 移动到下一行 | 
| `previous()`  | 移动到前一行| 
| `absolute(int row)`  | 移动到指定行 | 
| `beforeFirst()`  | 移动resultSet的最前面。 | 
| `afterLast() `  | 移动到resultSet的最后面 | 


操作如下：

```java
import java.sql.*

// 变量s 为 Statement
String sql = "select * from student";
s.execute(sql);
ResultSet rs =  s.getResultSet();

rs.absolute(3);
System.out.println(rs.getInt("age")); // 打印第三个数据的age

while (rs.next()){
    System.out.println(rs.getString("name"));
}
```

### executeUpdate

`executeUpdate` 和 `execute`功能差不多，只不过`executeUpdate` 不能够进行查询。

### executeQuery

`executeQuery` 常用于执行`sql`查询语句，只能执行`select`语句

```java
import java.sql.*

// 变量s 为 Statement
String sql = "select * from student";
s.executeQuery(sql);
ResultSet rs =  s.getResultSet();

rs.absolute(3);
System.out.println(rs.getInt("age")); // 打印第三个数据的age

while (rs.next()){
    System.out.println(rs.getString("name"));
}

// 获取总页数操作
String sql2 = "select count(*) from hero";
ResultSet rs2 = s.executeQuery(sql2);
int total = 0;
while (rs2.next()) {
    total = rs2.getInt(1);
}
```
