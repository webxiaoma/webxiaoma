---
meta:
  - name: keywords
    content: 马新想 小马学习 java 集合 List
  - name: description
    content: 本章为小马学习专栏—— Java集合 List
---

# 集合-List

[[toc]]

:horse: 


## 前言

`List`接口是比较常用的接口，它类似于数组，是有序集合。它的实现集合类有`ArrayList` 和 `LinkedList`


## ArrayList

`ArrayList`类实现了可变的数组大小，该类，对尾部的增加和删除支持比较好，但是插入数据和删除其它位置的数据性能相对较差。

### 常用方法

`ArrayList`除了继承`Collection`所有方法外，还有下面这些方法

|方法|说明|
|:---|:---|
|`type get(int index)`|获取此集合中指定索引位置的元素，type 为集合中元素的数据类型|
|`int index(Object o)`|返回此集合中第一次出现指定元素的索引，如果此集合不包含该元素，则返回 -1|
|`int lastIndexOf(Object o)`|返回此集合中最后一次出现指定元素的索引，如果此集合不包含该元素，则返回 -1|
|`type set(int index, Eelement)`|将此集合中指定索引位置的元素修改为 element 参数指定的对象。此方法返回此集合中指定索引位置的原元素|
|`List<E> subList(int fromlndex, int tolndex)`|返回一个新的集合，新集合中包含 fromlndex 和 tolndex 索引之间的所有元素。包含 fromlndex 处的元素，不包含 tolndex 索引处的元素|


### ArrayList使用

现在我们使用`ArrayList`

创建一个学生`Student`类

```java
// student 类
public class Student{
  private String name; // 姓名
  private int age; // 年级

  public Student(String name, int age){
    this.name = name;
    this.age = age;
  }

  public String toString(){
    return "学生 " + name + ", 年龄：" + age;
  }
}
```


使用`ArrayList`操作方法

```java
//省略 引入Student类

public static void main(String[] args){
    // 创建集合
    List aL = new ArrayList();

    // 添加集合
    aL.add(new Student("小明",7));
    aL.add(new Student("小红",6));
    aL.add(new Student("小牛",8));

    System.out.println(aL.size()); // 3

    // 删除
    aL.remove(2);
    System.out.println(aL.size()); // 2

    //修改集合
    aL.set(1,new Student("小驴",5)); // 集合中的小红对象将被小驴替换

    // 获取集合
    Student s = (Student)aL.get(1); 
    System.out.println(s); // 学生 小驴, 年龄：5
}
```

## LinkedList

`LinkedList`是一种链表结构，该结构的的优点是很方便的向集合中插入或删除元素。当频繁操作集合的删除和插入元素时，使用`LinkedList`效率更高。但是以特定索引访问`LinkedList`集合内的元素时，则速度相对较慢。

### 常用方法

`LinkedList` 除了继承`Collection`所有方法外，还有下面这些方法

|方法|说明|
|:---|:---|
|`void addFirst(E e)`|将指定元素添加到此集合的开头|
|`void addLast(E e)	`|将指定元素添加到此集合的末尾|
|`E getFirst()`|返回此集合的第一个元素|
|`E getLast()	`|返回此集合的最后一个元素|
|`E removeFirst()`|删除此集合中的第一个元素|
|`E removeLast()`|删除此集合中的最后一个元素|


### LinkedList使用

`ListedList`除了在集合的删除和插入元素效率高外，在使用上和`ArrayList`大同小异

```java
public static void main(String[] args){
     LinkedList linkL = new LinkedList();

    // 添加集合
    linkL.add(new Student("小明",7));
    linkL.add(new Student("小红",6));
    linkL.add(new Student("小牛",8));

    linkL.addFirst(new Student("小王",10));
    
    // 学生 小王, 年龄：10
    System.out.println(linkL.get(0));

    linkL.removeFirst();

    //学生 小明, 年龄：7
    System.out.println(linkL.getFirst());
}
```


## ArrayList和LinkedList区别

`ArrayList` 和 `LinkedList` 因为不同的数据结构，`ArrayList`是**顺序结构**，`LinkedList`是**链表结构**。所以导致它们的不同操作性能不同。

- `ArrayList` 插入，删除（非头尾）数据比较慢，但是定位很快
- `LinkedList` 插入，删除数据比较快，但是定位（非头尾数据）慢


### 顺序结构

顺序结构（顺序表）是按顺序排列，类似于电影院的座位，有固定顺序：


<images src="/java/list01.png" />


当我们要想往里边删除，填加时，就必须把所有座位编号重新修改一边，但是当我们根据编号查找某个座位时，很快就可以找到。


### 链表结构

链表结构就像一个手串一样，上边的珠子没有固定位置，

<images src="/java/list02.png" />


当要通过索引找某个珠子时，就要从这一串中去查找某个珠子。所以访问会很慢