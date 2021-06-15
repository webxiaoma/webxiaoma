---
meta:
  - name: keywordsv
    content: java array 数组 java数组
  - name: description
    content: 本文章主要记录java的基本数组的一些常用方法以及操作。
---

# Java-数组

[[toc]]

:horse: 


## 数组声明

### 一维数组

`type[] aryName` 数组类型 `[]` 数组名称

```java
//方法一
int[] ary = {1,2,3,4}; // 声明一个int类型的数组

//方法二
int[] num = new int[5]; //初始化长度为5的 int类型数组 
```


### 二维数组

`type[][] aryName` 数组类型`[][]` 数组名称

```java
//方法一
int[][] ary = {{12,3},{12,3}} // 声明一个int类型的数组
//方法二 
int[][] num = new int[5][2] //初始化一维长度为5，二维长度为2的 int类型数组 
//方法三 
int[][] temp = new int[][]{{5,2},{34,3}} 
```


## Arrays类

`Arrays类` 位于 `java.util` 中, `Arrays`类中有许多常用的数组工具：

- `int binarySearch(type[] a, int fromIndex, int toIndex, type key)` 使用二分法查询 不存在反回负数

&nbsp;&nbsp;&nbsp; &nbsp; 1. `a`为要查询的数，<br/>
&nbsp;&nbsp;&nbsp; &nbsp; 2. `formIndex` 可选，开始查询的索引 ，<br/>
&nbsp;&nbsp;&nbsp; &nbsp; 3. `toIndex` 可选，结束要查询的索引 ，<br/>
&nbsp;&nbsp;&nbsp; &nbsp; 4. `key` 要搜索的元素 ，<br/>

- `type[] copyOf(type[] a, int length)` 复制一个新数组，`length`为新数组长度，大于 `a`时补零
- `type[] copyOfRange(type[] a, int fromIndex, int toIndex)` 只复制 `a` 数组的 `fromIndex` 索引到 `toIndex` 索引的元素。
- `boolean equals(type[] a, type[] a2)` 比较数组`a`和`a2`是否相等
- `void fill(type[] a, int fromIndex, int toIndex, type val)` 数组填充 `formIndex` 和 `toIndex`可选,val为填充值
- `void sort(type[] a, int fromIndex, int toIndex)` 数组排序 `formIndex` 和 `toIndex`可选
- `String toString(type[] a)`将一个数组转换成一个字符串


```java
import java.util.Arrays;

public class Test{
    public static void main(String[] args) {

        int[] ary = {1,13,2,51,12,54,65,3};
    
        System.out.println(Arrays.binarySearch(ary,51)); // 3
        System.out.println(Arrays.toString(Arrays.copyOf(ary,2))); // [1, 13]
        System.out.println(Arrays.toString(Arrays.copyOfRange(ary,0,3))); // [1, 13, 2]
    
        Arrays.fill(ary,0,3,1);
        System.out.println(Arrays.toString(ary)); //[1, 1, 1, 51, 12, 54, 65, 3]
    }
}
```

## 数组的遍历

日常开发时，我们经常需要使用数组的每一项数据，这时我们需要对数组进行遍历，


### for循环遍历

使用`for`循环对数组进行遍历

```java
int[] ary ={1,2,3,4,5,6};

for(int i = 0; i<ary.length; i++){
  // 输出
  System.out.println(ary[i]);
}
```

### 增强for循环

使用方法`for(类型 变量名:要遍历的数组)`

```java
int[] ary ={1,2,3,4,5,6};

for(int i:ary){
  // 输出
  System.out.println(i);
}
```


## Java8 新增方法

`java8`中在`Arrays`类上新增了一些方法,这些方法增加了并发支持

- `void parallelPrefix(type[] ary, XxxBinaryOperator op)` 该方法使用`op`参数指定的计算公式计算得到的结果作为新的元素，`op`计算公式包括`left`，`right`两个形参，
- `void parallelPrefix(xxx[] array, int fromIndex, int toIndex, XxxBinaryOperator op)`
  1. `a`为要查询的数，
  2. `formIndex` 可选，开始查询的索引 
  3. `toIndex` 可选，结束要查询的索引 
  3. `key` 要搜索的元素 

- `void setAll(xxx[] array, IntToXxxFunction generator)` 该方法使用指定生成器为所有数组元素设置值
- `void parallelSetAll(xxx[] array, IntToXxxFunction generator)` 该方法和上边方法功能一样，只是增加了并行能力。
- `void parallelSort(xxx[] a，int fromIndex, int toIndex)` 该方法和`Arrays.sort()`方法功能一样，只是增加了并行能力。
- `Spliterator.OfXxx spliterator(xxx[] array, int startInclusive, int endExclusive)` 将`array`数组的所有元素转换成对应的`Spliterator`对象。
- `XxxStream stream(xxx[] array, int startInclusive, int endExclusive)` 将数组转换为`Stream`



---

**参考文献**

- [Java数组处理](http://c.biancheng.net/view/5885.html)
- [Java 数组 菜鸟教程](https://www.runoob.com/java/java-array.html)