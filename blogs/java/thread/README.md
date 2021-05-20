---
meta:
  - name: keywords
    content: 马新想 小马学习 java 线程 Thread
  - name: description
    content: 本章为小马学习专栏——Java多线程处理
---


# 多线程-初识

[[toc]]

:horse: 


## 前言

我们在讨论**线程**之前不得不提**进程**。进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。(例如电脑上打开一个微信就是启动了一个进程，打开浏览器也是启动了一个进程)

它们得区别如下：

- **进程**是操作系统分配资源的最小单位，而**线程**是程序执行的最小单位
- 一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线
- 调度和切换：线程上下文切换比进程上下文切换要快得多

## 生命周期

线程得生命周期分为五个阶段

- `新建状态 New` 当现在对象创建后，就进入了新建状态

- `就绪状态 Runnable` 当调用线程对象得`start()`方法后，线程就进入就绪状态。此时线程并没有执行，只是做好了准备，等待`CPU`调度执行

- `运行状态 Running` 当`CPU`调度该线程，执行`run()`方法时，线程进入运行状态

- `阻塞状态 Blocked` 正在运行得线程，由于某种原因（`sleep`（睡眠）、`suspend`（挂起））暂时停止执行，此时进入阻塞状态，直到其进入到就绪状态，才有机会再次被CPU调用以进入到运行状态。

- `终止状态 Terminated` 一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。



## 创建

在`java`中创建线程有三种方法：

- 继承`Thread` 类
- 实现`Runnable`接口
- 通过`Callable`和`Future`创建线程。


### Thread类

```java
class ThreadTest extends Thread{
   private String name;
    ThreadTest(String name){
        this.name = name;
    }
    public void run(){ // 重写run方法
        try{
            for(int i = 0; i < 3; i++){
                Thread.sleep(100); //休眠
                System.out.println(name + " " + i);
            }
        }catch (InterruptedException  e){
            e.printStackTrace();
        }

    }
}

public static void main(String[] args){
    ThreadTest th1 = new ThreadTest("小明");
    ThreadTest th2 = new ThreadTest("小牛");
    th1.start(); 
    th2.start();
}
// 打印结果如下：

// 小明开始执行******
// 小牛开始执行******
// 小牛 0
// 小明 0
// 小牛 1
// 小明 1
// 小牛 2
// 小明 2
```

### 实现Runnable接口

通过实现`Runnable`接口方法来创建线程

```java

//ThreadTest 类实现 Runbale
class ThreadTest implements Runnable{
    private String name;
    ThreadTest(String name){
        this.name = name;
    }
    public void run(){ // 重写run方法
        try{
            for(int i = 0; i < 3; i++){
                Thread.sleep(100); //休眠
                System.out.println(name + " " + i);
            }
        }catch (InterruptedException  e){
            e.printStackTrace();
        }

    }
    public void start(){
        System.out.println(name + "开始执行******");

        new Thread(this,name).start();
    }
}

public static void main(String[] args){
    ThreadTest th1 = new ThreadTest("小明");
    ThreadTest th2 = new ThreadTest("小牛");
    th1.start(); 
    th2.start();
}
// 打印结果如下：

// 小明开始执行******
// 小牛开始执行******
// 小牛 0
// 小明 0
// 小牛 1
// 小明 1
// 小牛 2
// 小明 2
```

### 通过Callable和Future实现

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class Test implements Callable<Integer> {
    public static void main(String[] args){

        Test threadPool = new  Test();
        FutureTask<Integer> future = new FutureTask<>(threadPool);

        new Thread(future,"Callable").start();
        try{
            System.out.println("子线程的返回值："+future.get());
        }catch (InterruptedException e){
            e.printStackTrace();
        } catch (ExecutionException e){
            e.printStackTrace();
        }

    }

    public Integer call(){
        int i = 0;
        for(;i<3;i++){
            try {
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + " " +i);
            }catch (InterruptedException  e){
                e.printStackTrace();
            }

        }
        return  i;
    }
}
```

`Callable`接口实际上是属于`Executor`框架中的功能类，`Callable`接口与`Runnable`接口的功能类似，但提供了比`Runnable`更加强大的功能。

- `Callable`可以在任务结束的时候提供一个返回值，`Runnable`无法提供这个功能
- `Callable`的call方法分可以抛出异常，而`Runnable`的`run`方法不能抛出异常。

**参考文献**

- [进程与线程](https://www.cnblogs.com/qianqiannian/p/7010909.html)
- [Java 多线程编程](https://www.runoob.com/java/java-multithreading.html)
