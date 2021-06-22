---
meta:
  - name: keywords
    content: 马新想 小马学习 java 集合 Queue
  - name: description
    content: 本章为小马学习专栏—— Java集合 Queue
---

# 集合-Queue

[[toc]]

:horse: 

## 前言

`Queue`队列是一种常见的集合，实现了先进先出(`FIFO`：`First In First Out`) 的有序表。他得操作只有两个：

- 尾部添加
- 头部取出

在`java`中`Queue`继承自`Collection`接口，并且`Deque`, `LinkedList`, `PriorityQueue`, `BlockingQueue` 等类都实现了它。`Queue`常用来存放等待处理元素的集合，如：`缓冲`，`并发访问`。

下面是`Queue`的结构图

<images src="/java/queue.png" width="100%"/>


## 方法

`Queue`除了继承`Collection`接口外，还有实现了一下自己的方法，常见的方法如下：

|方法|描述|
|:---|:---|
|`add`|增加一个元索 如果队列已满，则抛出一个`IIIegaISlabEepeplian`异常|
|`offer`|添加一个元素并返回true 如果队列已满，则返回`false`|
|`put`|添加一个元素 如果队列满，则阻塞|
|`element`| 返回队列头部的元素 如果队列为空，则抛出一个`NoSuchElementException`异常|
|`offer`|添加一个元素并返回`true` 如果队列已满，则返回`false`|
|`remove`|移除并返回队列头部的元素 如果队列为空，则抛出一个`NoSuchElementException`异常·|
|`poll`|移除并返问队列头部的元素 如果队列为空，则返回`null`|
|`take`|移除并返回队列头部的元素 如果队列为空，则阻塞|
|`peek`|返回队列头部的元素 如果队列为空，则返回`null`|



## Queue实现类


### PriorityQueue

`PriorityQueue`是非线程安全类，`PriorityQueue`保存队列元素的顺序不是按照元素添加的顺序来保存的，而是在添加元素的时候对元素的大小排序后再保存的。因此在`PriorityQueue`中使用`peek()`或`pool()`取出队列中头部的元素，取出的不是最先添加的元素，而是最小的元素。

`PriorityQueue`中不允许拆入`null`元素，并且`PriorityQueue`有两种排列方式：

- 自然排序: 采用自然排序的`PriorityQueue`集合中的元素必须实现`Comparator`接口，而且应该是一个类的多个实例，否则可能导致`ClassCastException`异常。
- 定制排序: 创建`PriorityQueue`队列时，传入一个`Comparable`对象，该对象负责对所有队列中的所有元素进行排序。采用定制排序不要求必须实现`Comparator`接口。


```java
import java.util.NoSuchElementException;
import java.util.PriorityQueue;

public static void main(String[] args){
    PriorityQueue pq = new PriorityQueue();

    for(int i = 0; i<10;i++){
        pq.add(i);
    }

    System.out.println(pq.size()); // 10

    // 移除并返问队列头部的元素 如果队列为空，则返回null
    int first = (int)pq.poll();
    System.out.println(first); // 0
    System.out.println(pq.size()); // 9

    // 返回队列头部的元素 如果队列为空，则抛出一个NoSuchElementException异常
    try{
        int head = (int)pq.element();
        System.out.println(head); // 1
    }catch (NoSuchElementException e){
        e.printStackTrace();
    }    
}
```

### PriorityBlockingQueue

`PriorityBlockingQueue`是线程安全的，其它的和`PriorityQueue`基本相同。



### ArrayBlockingQueue

`ArrayBlockingQueue`是一个阻塞的队列，继承了`AbstractBlockingQueue`，间接的实现了`Queue`接口和`Collection`接口。底层以数组的形式保存数据，所以它是基于数组的阻塞队列。`ArrayBlockingQueue`是有边界值的，在创建`ArrayBlockingQueue`时就要确定好该队列的大小，一旦创建，该队列大小不可更改。内部的全局锁是使用的`ReentrantLock`。




---

**参考文献**

- [Java集合 之 Queue集合](https://www.cnblogs.com/mercuryli/p/4636231.html)
- [Java 实例 - 队列（Queue）用法](https://www.runoob.com/java/data-queue.html)
- [Java Queue接口常用实现类](https://plentymore.github.io/2019/01/09/Java-Queue%E6%8E%A5%E5%8F%A3%E5%B8%B8%E7%94%A8%E5%AE%9E%E7%8E%B0%E7%B1%BB/)
- [使用Queue](https://www.liaoxuefeng.com/wiki/1252599548343744/1265121791832960)