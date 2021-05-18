---
meta:
  - name: keywordsv
    content: java number java反射 反射
  - name: description
    content: 本文章主要记录java反射的基础操作。
---

# Java-反射


[[toc]]

:horse: 



## 前言

在学习`java`反射前我们先了解两个概念**编译期** 和 **运行期**

- 编译期是指把源码交给编译器编译成计算机可以执行的文件的过程。在`Java`中也就是把`Java`代码编成`class`文件的过程。编译期只是做了一些翻译功能，并没有把代码放在内存中运行起来，而只是把代码当成文本进行操作，比如检查错误。

- 运行期是把编译后的文件交给计算机执行，直到程序运行结束。所谓运行期就把在磁盘中的代码放到内存中执行起来。

`Java`反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性；这种动态获取信息以及动态调用对象方法的功能称为`Java`语言的反射机制。

**实现 `Java` 反射机制的类都位于 `java.lang.reflect` 包中，`java.lang.Class` 类是 `Java` 反射机制 `API` 中的核心类**

**java.lang.reflect 包提供了反射中用到类**

- `Field` 类：提供类或接口中成员变量信息。
- `Method` 类：提供类或接口成员方法信息。
-  `Constructor` 类：提供类的构造方法信息
- `Array` 类：提供了动态创建和访问 Java 数组的方法。
- `Modifier` 类：提供类和成员访问修饰符信息。


## Class类
`java.lang.Class` 类是实现反射的关键所在，`Class` 类的一个实例表示 `Java` 的一种数据类型，包括类、接口、枚举、注解（Annotation）、数组、基本数据类型和 `void`。`Class` 没有公有的构造方法，`Class` 实例是由 `JVM` 在类加载时自动创建的; VM在执行Java程序的时候，并不是一次性把所有用到的class全部加载到内存，而是第一次需要用到class时才加载

###  获取Class实例的三个方法

- 直接通过一个`class`的静态变量`class`获取
- 如果我们有一个实例变量，可以通过该实例变量提供的`getClass()`方法获取
- 如果知道一个`class`的完整类名，可以通过静态方法`Class.forName()`获取

```java
Class cls1 = String.class;  // 返回 class java.lang.String
Class cls2 = "str".getClass(); // 返回 class java.lang.String
Class cls3 = Class.forName("java.lang.String"); // 返回 class java.lang.String

// 获取基本信息
System.out.println(cls1.getName()); // java.lang.String
System.out.println(cls1.getSuperclass()); //class java.lang.Object
```

其它常用方法

- `Package getPackage()` 获取该类的存放路径
- `Class getSuperclass()` 获取该类继承的类
- `Class[] getlnterfaces()` 获取该类实现的所有接口
- `Class[] getClasses()` 获取所有权限为 public 的内部类
- `Class[] getDeclaredClasses()` 获取所有内部类
- `Class getDeclaringClass()` 如果该类为内部类，则返回它的成员类，否则返回 null



## 反射Field类

### 获取`Field`字段

- `Field getField(name)`：根据字段名获取某个public的field（包括父类）
- `Field getDeclaredField(name)`：根据字段名获取当前类的某个field（不包括父类）
- `Field[] getFields()`：获取所有public的field（包括父类）
- `Field[] getDeclaredFields()`：获取当前类的所有field（不包括父类）

### Field类的方法

|Field类方法| 说明 |
|--|--|
|`getName()`|获得该成员变量的名称|
|`getType()` | 获取表示该成员变量的 `Class` 对象 |
|`get(Object obj)`| 获得指定对象 `obj` 中成员变量的值，返回值为 `Object` 类型 |
|`set(Object obj, Object value)`| 将指定对象 `obj 中成员变量的值设置为 `value` |
|`getlnt(0bject obj)`| 获得指定对象 `obj` 中成员类型为 `int` 的成员变量的值 |
|`setlnt(0bject obj, int i)`| 将指定对象 `obj` 中成员变量的值设置为 `i` |
|`setFloat(Object obj, float f)`| 将指定对象 `obj` 中成员变量的值设置为 `f` |
|`getBoolean(Object obj)`| 获得指定对象 `obj` 中成员类型为 `boolean` 的成员变量的值 |
|`setBoolean(Object obj, boolean b)`| 将指定对象 `obj` 中成员变量的值设置为 `b` |
|`getFloat(Object obj)`| 获得指定对象 `obj` 中成员类型为 `float` 的成员变量的值|
|`setAccessible(boolean flag)`|此方法可以设置是否忽略权限直接访问 `private` 等私有权限的成员变量 |
|`getModifiers()`|获得可以解析出该方法所采用修饰符的整数|

```java
// 要反射的类
public  class People{
    public  String name;
    private  int age = 1;
    protected String sex = "男";

    public  People(String name){
        this.name = name;
    }

    // static 作用域方法
    static void staticM() {
        System.out.println("静态方法");
    }
    public void publicM(){
        System.out.println("公共方法");
    }
    private void privateM(){
        System.out.println("私有方法");
    }
    protected void protectedM(){
        System.out.println("受保护的方法");
    }
}

// 反射操作
import java.lang.reflect.Field;
public class Main {
    public  static  void main(String[] args){
        /**
         * 因为反射机制是在运行状态中
         * 所以在编写时用了try catch 防止编译报错
         */
        try{
            Test t = new People("小刘");
            Class clst = t.getClass();
            /**
             * 获取字段操作
             */
            Field name = clst.getField("name"); // 获取公共name字段
            Field age =  clst.getDeclaredField("age"); // 获取私有字段age
            Field[] fieldAry = clst.getDeclaredFields(); // 获取所有字段（getDeclaredFields包括父类）
            for(Field item:fieldAry){ // 遍历
                System.out.println(item);
            }
            try {
                System.out.println(name.getType()); // class java.lang.String
                System.out.println(name.get(t)); // 小刘
                name.set(t, "修改name");
                System.out.println(name.get(t)); // 修改name
                
                 // 设置后私有属性age就可以通过反射进行修改值了
                age.setAccessible(true); 
                age.setInt(t,1000);
                System.out.println(age.get(t));

            }catch (IllegalAccessException e){
                e.printStackTrace();
            }
        catch (NoSuchFieldException e) {
            e.printStackTrace();
        }
    }
}
```

## 反射Method类

### 获取`Method`方法
- `Method getMethod(name, Type.Class...)`：获取某个public的Method（包括父类）
- `Method getDeclaredMethod(name,Type.Class...)`：获取当前类的某个Method（不包括父类）
- `Method[] getMethods()`：获取所有public的Method（包括父类）
- `Method[] getDeclaredMethods()`：获取当前类的所有Method（不包括父类）


### Method类的方法

|Method类方法| 说明 |
|--|--|
|`getName()`|获得该成员变量的名称|
|`getParameterType()` | 按照声明顺序以 `Class` 数组的形式返回该方法各个参数的类型|
|`getReturnType()` | 以 Class 对象的形式获得该方法的返回值类型 |
|`getExceptionTypes() `| 以 Class 数组的形式获得该方法可能抛出的异常类型 |
|`invoke(Object obj,Object...args)` | 利用 `args` 参数执行指定对象 `obj`中的该方法，返回值为 `Object` 类型 |
|`isVarArgs()` | 查看该方法是否允许带有可变数量的参数，如果允许返回 `true`，否则返回 `false`|
|`getModifiers()`| 获得可以解析出该方法所采用修饰符的整数 |

```java
import java.lang.reflect.Method;

/**
 * 因为反射机制是在运行状态中
 * 所以在编写时用了throws Exception
 */
public  static  void main(String[] args) throws Exception{
    People t = new People("测试类");
    Class clst = t.getClass();

    Method m1 = clst.getMethod("publicM",String.class,int.class); // 获取Public publicM方法
    Method[] dms = clst.getDeclaredMethods(); //当前类的所有Method（不包括父类）

   System.out.println(m1);
   System.out.println(dms);
   System.out.println(m1.getName()); // publicM
   System.out.println(m1.getReturnType()); // void
   m1.invoke(t,"第一个参数",1); // 执行publicM 方法并传入相应参数

  //按照声明顺序以 Class 数组的形式返回该方法各个参数的类型
   for(Class item:m1.getParameterTypes()){
      System.out.println(item);
      // class java.lang.String
      // int
   }
}
```

## 反射Constructor类

### 获取`Constructor`

- `getConstructor(Class...)`：获取某个public的Constructor；
- `getDeclaredConstructor(Class...)`：获取某个Constructor；
- `getConstructors()`：获取所有public的Constructor；
- `getDeclaredConstructors()`：获取所有Constructor。

**如果是访问指定的构造方法，需要根据该构造方法的入口参数的类型来访问。** 例如，访问一个入口参数类型依次为 `int` 和 `String` 类型的构造方法，下面的两种方式均可以实现。

```java
objectClass.getDeclaredConstructor(int.class,String.class);
objectClass.getDeclaredConstructor(new Class[]{int.class,String.class});
```
### Constructor类的方法

|Constructor类方法| 说明 |
|--|--|
|`isVarArgs()` |查看该构造方法是否允许带可变数量的参数，如果允许，返回 `true`，否则返回`false`|
|`getParameterType()` | 按照声明顺序以`Class`数组的形式返回该方法各个参数的类型|
| `getExceptionTypes()` | 以`Class`数组的形式获得该方法可能抛出的异常类型 |
| `newInstance(Object … initargs)`|通过该构造方法利用指定参数创建一个该类型的对象，如果未设置参数则表示采用默认无参的构造方法 |
|`setAccessiable(boolean flag)`|如果该构造方法的权限为`private`，默认为不允许通过反射利用`netlnstance()`方法创建对象。如果先执行该方法，并将入口参数设置为`true`，则允许创建对象|
|`getModifiers()`|获得可以解析出该构造方法所采用修饰符的整数|


```java
import java.lang.reflect.Modifier;
import java.lang.reflect.Constructor;

public  static  void main(String[] args) throws Exception{
    People t = new People("测试类");
    Class clst = t.getClass();

    Constructor cola = clst.getConstructor(String.class); //public People(java.lang.String)
    Constructor[] co1 = clst.getDeclaredConstructors(); // 获取所有构造函数
    for(Constructor item:co1){ // 遍历
        System.out.println(item);
    }

    int modifiers = cola.getModifiers(); //构造方法修饰符的整数
    System.out.println(Modifier.isPublic(modifiers)); // true
    System.out.println(cola.getName()); // People
}
```

## 反射Modifie类

|Modifie类方法| 说明 |
|--|--|
|`isStatic(int mod)`|如果使用`static`修饰符修饰则返回`true`，否则返回`false`|
|`isPublic(int mod)`|如果使用`public`修饰符修饰则返回`true`，否则返回`false`|
|`isProtected(int mod)`|如果使用`protected`修饰符修饰则返回`true`，否则返回`false`|
|`isPrivate(int mod)`|如果使用`private`修饰符修饰则返回`true`，否则返回`false`|
|`isFinal(int mod)`|如果使用`final`修饰符修饰则返回`true`，否则返回`false`|
|`toString(int mod)`|以字符串形式返回所有修饰符|
	
	
	
	