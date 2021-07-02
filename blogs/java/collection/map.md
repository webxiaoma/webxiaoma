---
meta:
  - name: keywords
    content: 马新想 小马学习 java 集合 Map
  - name: description
    content: 本章为小马学习专栏—— Java集合 Map
---

# 集合-Map

[[toc]]

:horse: 


## 前言

`Map`集合是一种`键值对（key-value）` 类型的集合（类似于`json`数据种的对象）。 再`Map`集合中，`Key`不允许重复。

`Map`接口的实现类主要有两个：

- `HashMap` 类可以按哈希算法来存取键对象
- `TreeMap` 类可以对键对象进行排序


## 常用方法

`Map`接口常用的方法如下：

|方法|描述|
|:---|:---|
|`void clear()`|删除该 `Map` 对象中的所有 `key-value` 对。|
|`boolean containsKey(Object key)`|查询 `Map` 中是否包含指定的 key，如果包含则返回 `true`。|
|`boolean containsValue(Object value)`|查询 `Map` 中是否包含一个或多个 `value`，如果包含则返回 `true`。|
|`V get(Object key)`|返回 Map 集合中指定键对象所对应的值。V 表示值的数据类型|
|`V put(K key, V value)`|向 Map 集合中添加键-值对，如果当前 `Map` 中已有一个与该 `key` 相等的 `key-value` 对，则新的 `key-value` 对会覆盖原来的 `key-value` 对。|
|`void putAll(Map m)`|将指定 `Map` 中的 `key-value` 对复制到本 `Map` 中。|
|`V remove(Object key)`|从 `Map` 集合中删除 `key` 对应的键-值对，返回 key 对应的 `value`，如果该 `key` 不存在，则返回 `null`|
|`boolean remove(Object key, Object value)`|这是 `Java 8` 新增的方法，删除指定 `key`、`value` 所对应的 `key-value` 对。如果从该 `Map` 中成功地删除该 `key-value` 对，该方法返回 `true`，否则返回 `false`。|
|`Set entrySet()`|返回 Map 集合中所有键-值对的 `Set` 集合，此 `Set` 集合中元素的数据类型为 `Map.Entry`|
|`Set keySet()`|返回 Map 集合中所有键对象的 `Set` 集合|
|`boolean isEmpty()`|查询该 `Map` 是否为空（即不包含任何 `key-value` 对），如果为空则返回 `true`。|
|`int size()`|返回该 `Map` 里 `key-value` 对的个数|
|`Collection values()`|返回该 `Map` 里所有 `value` 组成的 `Collection`|


## HashMap

`HashMap`是无序的，根据键的 `HashCode` 值存储数据，具有很快的访问速度，不支持**线程同步**

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Set;

public static void main(String[] args){
  HashMap hm = new HashMap();
  // 添加元素
  hm.put("8","小王");
  hm.put("5","小牛");
  hm.put("3","小李");
  hm.put("7","小赵");

  System.out.println(hm.size()); // 4
  // 获取值
  System.out.println(hm.get("5")); // 小牛
  // 删除
  hm.remove("5");
  System.out.println(hm.size()); // 3
  System.out.println(hm.containsKey("5")); // false
  // 获所有key
  Set key = hm.keySet();
  //[3, 7, 8]
  System.out.println(Arrays.toString(key.toArray()));
}

```

## TreeMap

`TreeMap`是有序的，根据键进行排序。`TreeMap`的用法和`HashMap`基本一样

```java
TreeMap tm = new TreeMap();
// 添加元素
tm.put("8","小王");
tm.put("5","小牛");
tm.put("3","小李");
tm.put("7","小赵");

// 获所有key
Set key = tm.entrySet();

//[3=小李, 5=小牛, 7=小赵, 8=小王]
System.out.println(Arrays.toString(key.toArray()));
```


## Hashtable

`Hashtable` 和 `HashMap`一样都实现了`Map`接口，都是键值对保存数据的方式。并且用法基本一样，它们的主要区别：

- `Hashtable`不能存放`null`, `HashMap`可以存放`null`
- `Hashtable`是线程安全的, `HashMap`不是线程安全的