---
meta:
  - name: keywords
    content: 马新想 小马学习 java 集合 Collection
  - name: description
    content: 本章为小马学习专栏—— Java集合 Collection
---

# 集合-Collection

[[toc]]

:horse: 


## 前言

我们在使用`java`数组时，会发现数组的长度是固定的，初始化后就不能改变，但是实际我们开发时会遇到无法确定数量的数据，这时就会用到集合。 另外集合和数组是有如下区别：

1. 数组长度固定，集合长度可变
2. 数组可以存储基本数据类型或引用类型，集合只能存储引用类型
3. 数组只能存储同一数据类型，集合可以存储不同数据类型（实际也是同一类型，只是类型都是`Object`类）


## 集合结构

`java`集合主要分为 `Collection` 和 `Map`, 其它的实现类基本都是这俩接口的子类，下边为来自[菜鸟教程的](https://www.runoob.com/java/java-collections.html)的`java`的结构图

<images src="/java/collection.gif" width="580"/>

结构图中, **实线**边框的是实现类，如`ArrayList`，`LinkedList`，`HashMap`等，**折线**边框的是抽象类，比如`AbstractCollection`，`AbstractList`，`AbstractMap`等，而**点线**边框的是接口，比如`Collection`，`Iterator`，`List`等

## Collection接口 

`Collection`接口是 `List`,`Set` 和 `Queue`的父类接口，`java`不提供直接继承`Collection`的类，只能继承其子接口。`Collection`接口定义了一些常用的方法，如下：


|方法|说明|
|:------|:---|
|`boolean add(type e)`|向集合中添加一个元素，如果集合对象被添加操作改变了，则返回`true`。 `type`是元素的数据类型|
|`boolean addAll(Collection c)`|向集合中添加集合 c 中的所有元素，如果集合对象被添加操作改变了，则返回 true。|
|`void clear()`|清除集合中的所有元素，将集合长度变为 0。|
|`boolean contains(Object o)`|判断集合中是否存在指定元素|
|`boolean containsAll(Collection c)`|判断集合中是否包含集合 c 中的所有元素|
|`boolean isEmpty()`|判断集合是否为空|
|`Iterator<E>iterator()`|返回一个`Iterator`对象，用于遍历集合中的元素|
|`boolean remove(Object o)`|从集合中删除一个指定元素，当集合中包含了一个或多个元素 o 时，该方法只删除第一个符合条件的元素，该方法将返回`true`。|
|`boolean removeAll(Collection c)	`|从集合中删除所有在集合 c 中出现的元素（相当于把调用该方法的集合减去集合 c）。如果该操作改变了调用该方法的集合，则该方法返回`true`。|
|`boolean retainAll(Collection c)`|从集合中删除集合 c 里不包含的元素（相当于把调用该方法的集合变成该集合和集合 c 的交集），如果该操作改变了调用该方法的集合，则该方法返回 true。|
|`int size()`|返回集合中元素的个数|
|`Object[] toArray()`|把集合转换为一个数组，所有的集合元素变成对应的数组元素。|



**参考文献**

- [Java 集合框架-菜鸟教程](https://www.runoob.com/java/java-collections.html)
- [Java集合详解](http://c.biancheng.net/view/6824.html)