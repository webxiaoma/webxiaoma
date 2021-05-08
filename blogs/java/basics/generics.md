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

  // 使用的时候必须指定T的类型
  public static void main(String[] args){
    Test tStr = new Text<String>("a"); // T 为 String 类型
    Test tInt = new Text<Integer>(123); // T 为 integer 类型
  }
}
```

## 泛型方法

泛型方法一般类似这样`public <T> void method(T t){}` 带有`<T>`。具有`<T>`标识是很重要的，这表示该方法声明为泛型方法。常见的泛型方法类中的泛型方法，静态泛型方法，如下

```java
public class test<T> {
  // 泛型方法 该方法中的T 和 类 test 中的
  // T 是不一样的。此处的T 表示一种新的类型
  public <T> void funOne(T t){
    System.out.println(t.toString());
  }
  // 泛型方法类型可以不适用T，这里使用E来表示
  public <E> void funTwo(E e){
     System.out.println(e.toString());
  }
  // 有返回值的泛型方法
  public <E> E funThree(E e){
    return e;
  }
  // 静态泛型方法
  public static <T> void funFour(){}

  // 下面是一个可变参数的泛型方法
  public <T> void funFive(T...args){
    for(T t : args){
      System.out.println(t);
    }
  }
}
```


有些方法看上去像是泛型方法，实际上却不是泛型方法，像下面的这些方法就不是泛型方法：

```java
public class test<T>{
   private T a;
   public test(T a){
     this.a = a;
   }
   // 中并不是要给泛型方法
   public T getA(){
     return a;
   }
  
}
```
## 泛型集合

在文章的开头我们已经看到了泛型集合`List<String> arrayList = new ArrayList<String>()`， 其它集合泛型形式书写结构基本相似。

```java
List<String> arrayList = new ArrayList<String>();
Set<String> set = new HashSet<String>();
Map<Integer, String> map = new HashMap<Integer,String>();
```

## 泛型接口

泛型接口和泛型类的写法基本相同。

```java
//定义一个泛型接口
public interface itf<T> {
    public T fun();
}
```

当实现泛型接口时，会这样写

```java
// 泛型类继承泛型接口
class Test<T> implements itf<T>{
  @Override
  public T fun(){
    return null
  };
}


//在实现接口时我们还可以传入实参类型，来确定T的类型
class Test implements itf<String>{
  @Override
  public String fun(){
    return "abc"
  };
}
```

## 泛型的限制

我们在使用泛型时，有时会遇到限制泛型的类型范围。这个时候我们可能会用到泛型中的**通配符**或**extends**

### 通配符

在使用通配符前我们先来看一个问题。在日常开发时我们知道`Ingeter`是`Number`的一个子类。那么`Test<Ingeter>`与`Test<Number>`是否也有这种关系？我们来看一看：

```java
public Test<T>{
  private T a;
  public Test(T a){
    this.a = a;
  }
};


public Lesson{
  public void method(Test<Number> obj){}

  public static void main(String[] args){
    Lesson le = new Lesson();
    Test<Number> Ntest = new  Test<Number>(12);
    Test<Integer> Itest = new  Test<Integer>(13);

    le.method(Ntest); // 这个执行编译时会通过
    le.method(Itest); // 这个编译时 不会通过
  }
}
```

通过上面的例子，我看可以看到`Test<Ingeter>`与`Test<Number>`并不是子父关系。为了解决这个问题我们可以使用**通配符**来修改一下


```java
public Lesson{
  // 将方法中的类型T 替换成 ?
  public void method(Test<?> obj){}

  public static void main(String[] args){
    Lesson le = new Lesson();
    Test<Number> Ntest = new  Test<Number>(12);
    Test<Integer> Itest = new  Test<Integer>(13);

    le.method(Ntest); // 这个执行编译时会通过
    le.method(Itest); // 这个执行编译时也会通过
  }
}
```

可以看到类型通配符是用`?`来表示。`?`在这里表示**类型的实参**，它代表所有类型的**父类型**

### extends与super

在使用泛型时，我们有时候会想对类型实参进行限制，比如:

- 泛型中的实参类型只能是`Number`类及其子类（这种叫做**类型通配符上限**）
- 泛型中的实参类型只能是`Number`类及父类（这种叫做**类型通配符下限**）


类型通配符上限我们使用**extends**来限制

```java
public void method(Test<? extends Number> obj){}
```


类型通配符上限我们使用**super**来限制

```java
public void method(Test<? super String> obj){}

 public static void main(String[] args){
    Lesson le = new Lesson();
    Test<String> Stest = new  Test<String>("12a");
    Test<Object> Otest = new  Test<>();
    Test<Integer> Itest = new  Test<Integer>(13);

    le.method(Stest); // 这个编译时会通过
    le.method(Otest); // 这个编译时会通过
    le.method(Itest); // 这个编译时不会会通过
  }
```

**参考文献**

- [Java总结篇系列：Java泛型](https://www.cnblogs.com/lwbqqyumidi/p/3837629.html)
- [Java 泛型](https://www.runoob.com/java/java-generics.html)
- [java 泛型详解-绝对是对泛型方法讲解最详细的，没有之一](https://www.cnblogs.com/coprince/p/8603492.html)