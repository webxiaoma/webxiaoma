---
meta:
  - name: keywordsv
    content: java string java字符串 stringBuilder stringBuffer 
  - name: description
    content: 本文章主要记录java的基本字符串的一些常用方法以及操作。
---

# Java-字符串

[[toc]]

:horse: 

## 前言

字符串在`java`中使用比较频繁，常用的字符串形式有 `String`, `StringBuilder`, `StringBuffer`

- 操作少量的数据使用 `String`。
- 单线程操作大量数据使用 `StringBuilder`。
- 多线程操作大量数据使用 `StringBuffer`。

## String类

`Java` 中每个双引号定义的字符串都是一个 `String` 类的对象。此外，还可以通过使用 `String` 类的构造方法来创建字符串，该类位于 `java.lang` 包中

### 初始化字符串的几种方法

- `new  String()` 创建一个空字符串`String` 对象
- `new  String(String original)` 创建一个指定符串original的字符串`String` 对象
- `new  String(char[ ]value)` 将字符数组元素全部变为字符串
- `new  String(char[] value,int offset,int count)` 将指定范围的字符数组元素全部变为字符串

```java
char[] ary = {'1','2','3','4'};
String str = new String(ary,1,3); // 23
```

### 字符串常用方法

- `String concat(String str)` 字符串拼接（一般使用加号）
- `String replace(String oldChar, String newChar)` 替换字符串（第一个参数可以是正则）
- `String replaceFirst(String oldChar, String newChar)` 替换匹配到的第一个字符串，还有方法`replaceAll()`
- `int indexOf(String str)` 字符查找 返回字符串首次出现的索引位置
- `int lastlndexOf(String str)` 字符查找 返回字符串最后一次出现的索引位置
- `String substring(int startIndex，int endIndex)` 截取字符串,只有`startIndex`一个参数时，自动从该位置截取到最后，两个参数时，默认不包括`endIndex`
- `String toLowerCase()`  将字符串中的字母全部转换为小写，非字母不受影响
- `String toUpperCase()` 将字符串中的字母全部转换为大写，非字母不受影响
- `String trim()` 去掉字符串中的首尾空格
- `String split(String type)` 已特定的字符`type`分割字符串
- `blooean equals(String str)` 比较字符是否相等(区分大小写,也包含空格)，相等返回`ture`
- `blooean equalsIgnoreCase(String str)` 比较字符是否相等(不区分大小写)，相等返回`ture`
- `int compareTo(String str)` 字典顺序比较两个字符串的大小（按照`Unicode 值`）


**`equals()` 方法比较字符串对象中的字符。而`==`运算符比较两个对象引用看它们是否引用相同的实例。**


```java
public class Test{
    public static void main(String[] args) {
        String str = "hello World ";

        System.out.println(str.concat(" haha")); //  hello World haha
        System.out.println(str.equals("hello world ")); // false
        System.out.println(str.equalsIgnoreCase("hello world ")); //  true
        System.out.println((str.toLowerCase())); //  hello world
        System.out.println((str.toUpperCase())); //  HELLO WORLD
        System.out.println((str.substring(1,3))); //  el
        System.out.println((str.substring(1))); // ello World
    }
}
```

## StringBuffer类

`StringBuffer` 类是可变字符串类，比`String`类更高效，创建 `StringBuffer` 类的对象后可以随意修改字符串的内容。每个 `StringBuffer` 类的对象都能够存储指定容量的字符串，如果字符串的长度超过了 `StringBuffer` 类对象的容量，则该对象的容量会自动扩大。

### 创建方式

- `StringBuffer()` 创建一个16个字符容量的字符串缓冲区
- `StringBuffer(int length)` 创建一个指定字符容量的字符串缓冲区 
- `StringBuffer(String str)` 创建一个指定内容的字符串缓冲区


### 常见方法

- `StringBuffer append(String str)` 向原有 `StringBuffer` 对象中追加字符串
- `StringBuffer insert(int start,String str)` 向字符串中插入指定字符串
- `StringBuffer deleteCharAt(int index)` 移除序列中指定位置的字符
- `StringBuffer delete(int start,int end)` 移除序列中子字符串的字符（不包含借宿位置end）
- `StringBuffer setCharAt(int index, char ch)` 在字符串的指定索引位置替换一个字符
- `StringBuffer reverse()`将字符串序列用其反转的形式取代
- `int capacity()` 该方法返回字符串的容量大小
- `int length()` 返回字符串长度

```java
public class Test{
    public static void main(String[] args) {

        StringBuffer strb = new StringBuffer(10);

        strb.append("test");
        System.out.println(strb);  // test

        strb.setCharAt(1,'A');
        System.out.println(strb);// tAst

        strb.delete(2,4);
        System.out.println(strb); // tA

        strb.insert(1,"111");
        System.out.println(strb);  // tA111

        strb.append("test test test test");
        System.out.println(strb.capacity()); // 22
    }
}
```


## StringBuilder 类

`StringBuilder 类` 和 `StringBuffer 类` 功能上很相似，区别是：`StringBuffer` 是线程安全的，而 `StringBuilder` 则没有实现线程安全功能，所以性能略高。一般优先使用`StringBuilder` 类

**StringBuilder的使用方法同 StringBuffer基本一样，这里不在详细解决**




