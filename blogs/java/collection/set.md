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

`Set` 是一种无序的不重复的集合，存入的对象不能重复。 `Set`实现了`Collection`接口


## HashSet

`HashSet`是`Set`接口的实现类，`HashSet`**不是同步的**，所以多线程同时访问时，需要通过代码保证气同步。

`HashSet`是通过`hashCode`方法来比较两个对象是否相同的，也就是说，如果两个元素使用`equals()`方法比较返回结果为`true`, 但是它们的`hashCode`不同便都可以存入`HashSet`中。


## TreeSet