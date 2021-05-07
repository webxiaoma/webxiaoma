---
meta:
  - name: keywordsv
    content: java 泛型 
  - name: description
    content: 本文章主要记录java的泛型。
---

# Java-泛型

[[toc]]

:horse: 


## 前言

`Java` 泛型（`generics`）是 `JDK 5` 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。在`java`集合中，存入对象后，在取出时该对象时，该对象就会成为`Object`类型。这时我们使用泛型就可以避免这种情况。例如下面这个例子：

```java
List arrayList = new ArrayList();
arrayList.add("12121");
arrayList.add(10);

for(int i = 0; i < arrayList.size(); i++){
  String s = (String)arrayList.get(i);
}
```
上面`ArrayList`集合中存入了`String`类型和`integer`类型，都可以存入是因为，存入时把它们当作`Object`数据存入的。结果我们取值时，都按照`String`来取的，这时程序就会报下面错误：

`java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String`

为了避免出现类似的问题，我们可以使用**泛型**

`List<String> arrayList = new ArrayList<String>();`

这时我们在想向`arrayList`中存入`integer`类型时，程序是不通过的。下面汇总了`java`中泛型的具体用法

## 泛型类

泛型在类中使用时，我们称其为**泛型类**，如下：

```java
// T 为泛型标识，可以改成任意字母，
// 常见的用 T E K 等来标识泛型
public class test<T>{
   private T a;
   public test(T a){
     this.a = a;
   }
   public T getA(){
     return a;
   }
}

// 使用的时候必须指定T的类型
Test tStr = new Text<String>("a"); // T 为 String 类型
Test tInt = new Text<Integer>(123); // T 为 integer 类型
```

## 泛型方法



## 泛型集合




## 泛型的限制


### extends

### 通配符
 


