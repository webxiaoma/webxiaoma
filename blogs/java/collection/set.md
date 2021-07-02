---
meta:
  - name: keywords
    content: 马新想 小马学习 java 集合 Set
  - name: description
    content: 本章为小马学习专栏—— Java集合 Set
---

# 集合-Set

[[toc]]

:horse: 


##  前言

`Set` 是一种**不重复**的集合，存入的对象不能重复。 `Set`实现了`Collection`接口。`Set`的常用实现类有：

- `HashSet` 一个不允许有重复元素的无序集合
- `TreeSet` 一个不允许有重复元素的自然排序集合
- `LinkedHashSet` 一个不允许有重复元素的按照插入顺序排序的集合


## HashSet

`HashSet`是`Set`接口的实现类，`HashSet`**不是同步的**，所以多线程同时访问时，需要通过代码保证其同步。

`HashSet`是通过`hashCode()`和`equals()`方法来比较两个对象是否相同的，`hashCode()`的值和内存地址有关。判断值一样不一样可以按照下面方法：

- `hashCode()`不同，值肯定不同
- `hashCode()`相同，`equals()`值为`false`;则值不同，`equals()`值为`true`,那么值相同

`HashSet`的方法继承自`collection`

```java
import java.util.HashSet;
import java.util.Set;

public class Test {
    public static void main(String[] args){
        Test s = new Test();
        s.hashSetMethod();
    }
    public void hashSetMethod(){
       Set hs = new HashSet();

        String s1 = new String("11111111");
        String s2 = new String("22222222");
        String s3 = "新字符串";

        // 添加元素
        hs.add(s1);
        hs.add(s2);
        hs.add(s3);

        System.out.println(hs.size()); // 3

        // 删除元素
         hs.remove(s1);
         System.out.println(hs.size()); // 2

        // 插入相同元素
        hs.add(s3);
        System.out.println(hs.size()); // 长度还为2
    }
}
```
## TreeSet

`TreeSet` 集合实现了不同元素自然排序（升序），`TreeSet`的排序只是对实现了`Comparable`接口类的对象进行排序，常见的实现`Comparable` 接口的类：

- 包装类（`Byte`,`Double`,`Float`,`Integer`,`Long`,`Short`,`BigDecimal`,`BigIntger`）
- 字符 `Character`
- 字符串 `String`

`TreeSet`除了实现了`Collection`的方法外，还有如下方法：

|方法|描述|
|:---|:---|
|`E first()`|返回此集合中的第一个元素。其中，E 表示集合中元素的数据类型|
|`E last()`|返回此集合中的最后一个元素|
|`E poolFirst()`|获取并移除此集合中的第一个元素|
|`E poolLast()`|获取并移除此集合中的最后一个元素|
|`SortedSet<E> subSet(E fromElement,E toElement)`|返回一个新的集合，新集合包含原集合中 fromElement 对象与toElement对象之间的所有对象。包含 fromElement 对象，不包含 toElement 对象|
|`SortedSet<E> headSet<E toElement〉`|返回一个新的集合，新集合包含原集合中 toElement 对象之前的所有对象。不包含 toElement 对象|
|`SortedSet<E> tailSet(E fromElement)`|返回一个新的集合，新集合包含原集合中 fromElement 对象之后的所有对象。包含 fromElement 对象|


```java
TreeSet<Double> ts = new TreeSet<Double>();
// 添加
ts.add(3.1);
ts.add(6.1);
ts.add(4.1);
ts.add(1.1);

// [1.1, 3.1, 4.1, 6.1]
System.out.println(Arrays.toString(ts.toArray()));

//获取并移除此集合中的第一个元素
Double d = ts.pollFirst();
System.out.println(d); // 1.1
System.out.println(ts.size()); // 3

// 截取集合TreeSet{3.1, 4.1, 6.1}
SortedSet ss = ts.subSet(3.1,6.1); // 返回 3.1 4.1 集合

//[3.1, 4.1]
System.out.println(Arrays.toString(ss.toArray()));
```


## LinkedHashSet

`LinkedHashSet`是按照插入顺序排列的非重复元素集合。`LinkedHashSet`是一个非线程安全的集合，`LinkedHashSet`的用法和`HashSet`基本一样。
