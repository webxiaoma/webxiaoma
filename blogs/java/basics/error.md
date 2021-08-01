---
meta:
  - name: keywordsv
    content: java java异常处理 异常 exception
  - name: description
    content: 本文章主要记录java的异常处理。
---

# Java-异常处理

[[toc]]

:horse: 


## 概念

异常：导致程序的正常流程被中断的事件。在`java`中异常有的是用户错误引起得，有的是程序错误，而有的可能是物理错误。

- 异常`Exception`一般分为运行时异常和非运行时异常，一般这类异常我们需要进行异常处理
- 错误`Error`是程序在运行时出现的严重性错误，通常是`JVM`出现的错误或物理硬件系统的错误

在`java`中所有得异常类都是`java.lang.Throwable`类的子类，`Exception`类和`Error`类都继承了`Throwable`,它的层次结构大致如下：


<images src="/java/error1.png" />
 

## 常见异常


### 常见的运行时异常

|异常|说明|
|:---|:---|
| `ArrayIndexOutOfBoundsException` | 数组索引越界 |
| `NullpointerException` | 空指针异常 |
| `IllegalArgumentException` | 方法的参数错误 |
| `ArithmeticException` | 数学运算异常（除以零） |
| `ClassCastException` | 数据类型转换异常 |
| `StringIndexOutOfBoundsException` | 指示索引或者为负，或者超出字符串的大小 |
| `NumberFormatException`| 数字格式化异常 |

### 常见的非运行异常

也被称为`检查性异常类`

|异常|说明|
|:---|:---|
| `IOException` | 输入输出异常 |
| `SQLException` | 操作数据库异常 |
| `FileNotFoundException` | 文件未找到异常 |
| `ClassNotFoundException` | 类未找到异常 |
| `NoSuchMethodException` | 方法未找到异常 |
| `NoSuchFieldException` | 字段未找到异常 |
| `CloneNotSupportedException` | 不支持克隆异常 |
| `ReflectiveOperationException` | 反射操作异常 |
| `InstantiationException` | 实例化异常 |
| `IllegalAccessException` | 没有访问权限异常 |

## 异常常用方法

- `getMessage()` 输出异常的描述字符串信息
- `printStackTrace()` 将异常栈打印到输出流中
- `getLocalizedMessage()` 输出本地化的描述信息
- `fillInStackTrace()` 将当前的异常栈保存到一个`Throwable`中


## 处理方式

对于预见性的异常我们需要对其捕获处理，比如对于`FileNotFoundException`异常我们对其进行处理

### try-catch

使用`try-catch`进行处理

```java
File f = new File(path);
try{
  System.out.println("尝试打开 " + path + " 文件");
  new FileInputStream(f);

}catch (FileNotFoundException err){
  System.out.println("打开 " + path +" 失败");
  System.out.println(e.getMessage());
  err.printStackTrace();
  
}
```


### throws

在方法中我们遇到异常可以不在当前方法中进行处理，而是将异常抛出


```java
public class ErrorTest {
    public static void main(String[] args){
      method();
    }

    // 使用 throw 将异常抛出，而不是在method方法中处理
    // 异常被抛到了main 方法中，最终被虚拟机处理
    public static void method() throws FileNotFoundException{
        File f = new File(path);

        System.out.println("尝试打开 " + path + " 文件");
        new FileInputStream(f);
    }
}
```
:::tip 提示

`throws` 和 `throw` 不同

- `throws`出现在方法声明上，而`throw`常出现在方法体内。
- `throws`表示异常的兼容处理，异常并不一定发生，而`throw`表示的是表示抛出异常，一定发生了某个异常
:::

### 多异常处理

处理异常时，我们有时候可能会遇到多个异常的情况，需要对其进行处理。对多异常的处理如下

```java
File f = new File(path);
try{
   new FileInputStream(f);
   int c = 1/0;
}catch (FileNotFoundException err){//未找到文件异常
  err.printStackTrace();
  System.out.println("文件不存在");
}catch(ArithmeticException e){ //数学运算异常
  e.printStackTrace();
  System.out.println("运算错误");
}

// 或者这样写
try{
  // ...省略
}catch (FileNotFoundException | ArithmeticException err){//未找到文件异常
  if (err instanceof FileNotFoundException){
    System.out.println("文件不存在");
  }
  if (err instanceof ArithmeticException){
    System.out.println("运算错误");
  }
  err.printStackTrace();
}
```

或者使用`throws`进行处理 

```java
public static void method() throws FileNotFoundException,ArithmeticException{
    File f = new File(path);

    new FileInputStream(f);
    int c = 1/0;
}
```

## 自定义异常

`java`中自定义异常类一般继承自`Exception`类或`RuntimeException`，自定义的异常类名称我们习惯以`Exception`结尾。

- 继承`Exception`类的自定义异常类是一个编译器异常，如果方法内部使用`throw`抛出了异常，则必须要处理
- 继承`RuntimeException`类的自定义异常类是一个运行其异常，可以不处理，交给虚拟机处理。


比如我们写一个自定义类，如果输入的数字小于`10`,我们就抛出错误

```java
public class Test{
  public static void main(String[] args){

     Test t = new Test();
     try{
       t.method(4);
     }catch(TestException e){
       System.out.println(e.getMessage()); // 输入数字值过小错误
       e.printStackTrace();
     }

  }

  // 自定义 TestException 异常
  public class TestException extends Exception{
    public TestException(){}
    public TestException(String msg){
      super(msg);
    }
  }

  public void method(int m) throws TestException {
      if(m < 10){
        throw new TestException("输入数字值过小错误")
      }
  }
}
```