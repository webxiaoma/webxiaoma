---
meta:
  - name: keywordsv
    content: java number java数字 
  - name: description
    content: 本文章主要记录java的基本数字的一些常用方法以及操作。
---

# Java-数字


[[toc]]

:horse: 

## 前言

`java`中常见得数字类型有`short`, `int`,`lang`,`float`,`double`

 
## 数字格式化

使用`java.text.DecimalFormat` 类

使用方法 `DecimalFormat decf = new DecimalFormat(String type)`;

type的类型

- `0`	显示数字，如果位数不够则补 0
- `#`	显示数字，如果位数不够不发生变化
- `-`	增加减号
- `,`	组分隔符
- `E`	分隔科学记数法中的尾数和小数
- `%`	前缀或后缀，乘以 100 后作为百分比显示
- `?`	乘以 1000 后作为千进制货币符显示。用货币符号代替。如果双写，用国际货币符号代替；
如果出现在一个模式中，用货币十进制分隔符代替十进制分隔符

```java
import java.text.DecimalFormat;
public class Test{
   public static void main(String[] arg){
        DecimalFormat d1 = new DecimalFormat("0.0");
        DecimalFormat d2 = new DecimalFormat("#.#");
        DecimalFormat d3 = new DecimalFormat("-");
        DecimalFormat d4 = new DecimalFormat("#,#");
        DecimalFormat d5 = new DecimalFormat("#%");
        System.out.println(d1.format(1000)); // 1000.0
        System.out.println(d2.format(1000)); // 1000
        System.out.println(d3.format(1000)); // -1000
        System.out.println(d4.format(1000)); // 1,0,0,0
        System.out.println(d5.format(1000)); // 100000%

   }
}
```

## Math类

`Math`类中封装了常用的数学运算, 位于` java.lang` 包中

- `static int abs(int a)` 返回 a 的绝对值（也可以是float类型，double类型，long类型）
- `static int max(int x,int y)` 返回 x 和 y 中的最大值（也可以是float类型，double类型，long类型）
- `static int min(int x,int y)` 返回 x 和 y 中的最小值（也可以是float类型，double类型，long类型）
- `static double ceil(double a)` 返回大于或等于 a 的最小整数
- `static double floor(double a)` 返回小于或等于 a 的最大整数
- `static double rint(double a)` 返回最接近 a 的整数值，如果有两个同样接近的整数，则结果取偶数
- `static int round(float a)` a四舍五入后的整数
- `static double random()` 返回 double类型的0-1的随机数

```java
import java.lang.Math;
public class Test{
   public static void main(String[] arg){
        System.out.println(Math.abs(-1.1)); // 1.1
        System.out.println(Math.max(1.1,2)); // 2.0
        System.out.println(Math.min(1.1,2)); // 1.1
        System.out.println(Math.ceil(2.1)); // 3.0
        System.out.println(Math.floor(2.1)); // 2.0
        System.out.println(Math.round(2.5)); // 3
        System.out.println(Math.random()*10); // 随机返回0 - 10的的double类型
   }
}
```

## 随机数

`Random`类位于 `java.util` 包中

`java`中产生随机数可以使用`Math 类的 random()` 和 `Random 类`，`Random`类可以产生 boolean、int、long、float、byte 数组以及 double 类型的随机数，而`Math 类的 random()`只能产生`double` 类型的 0~1 的随机数

- `boolean nextBoolean()`	生成一个随机的 boolean 值，生成 true 和 false 的值概率相等
- `double nextDouble()`	生成一个随机的 double 值，数值介于 [0,1.0)，含 0 而不包含 1.0
- `int nextlnt()`	生成一个随机的 int 值，该值介于 int 的区间，也就是 -231~231-1。如果
需要生成指定区间的 int 值，则需要进行一定的数学变换
- `int nextlnt(int n)`	生成一个随机的 int 值，该值介于 [0,n)，包含 0 而不包含 n。如果想生成
指定区间的 int 值，也需要进行一定的数学变换
- `void setSeed(long seed)`	重新设置 Random 对象中的种子数。设置完种子数以后的 Random 对象
和相同种子数使用 new 关键字创建出的 Random 对象相同
- `long nextLong()`	返回一个随机长整型数字
- `float nextFloat()`	返回一个随机浮点型数字
- `double nextDouble()`	返回一个随机双精度值

```java
import java.util.Random;
public class Test{
   public static void main(String[] arg){
        Random ran = new Random();

        System.out.println(ran.nextDouble()); // 随机生成0-1 之间的小数
        System.out.println(ran.nextFloat()); // 随机生成一个随机浮点型值
        System.out.println(ran.nextInt()); // 随机生成Int值
        System.out.println(ran.nextInt(10)); // 随机生成0-10 之间的int (不包含10)
        System.out.println(ran.nextLong()); // 生成一个随机长整型值
        System.out.println(ran.nextBoolean()); // 随机生成布尔值

   }
}
```


## Integer 包装类

使用方法：（装箱）

1. `Integer integer = new Integer(int value)`
2. `Integer integer = new  Integer(String s)`

`Integer` 包装类包装了基本类型`int`，并提供了以下方法和属性

###  方法

- `byte byteValue()` 返回 `byte` 类型的值
- `int intValue()` 返回 `int` 类型的值（拆箱） (类似的还有`shortValue`,`floatValue`,`doubleVaule`)
- `String toString()` 返回 Integer 值的 String 对象
- `boolean equals(Object obj)` 返比较此对象与指定对象是否相等
- `compareTo(Integer integer)` 比较 相等：0; 调用 < `integer` 返回负值

- `static Integer valueOf(String s)` 返回保存指定的 s 值的 Integer 对象
- `static int parseInt(String s)` 将数字字符串转换为 int 数值
- `static String toBinaryString(int i)` 将i转换成二进制字符串  (类似：`toHexString()八进制`，`toOctalString()十六进制`)
- `static toBinaryString(int i)` 将i转换成二进制字符串  

###  属性

- `MAX_VALUE`：值为 2^31-1 的常量，它表示 int 类型能够表示的最大值。
- `MIN_VALUE`：值为 -2^31 的常量，它表示 int 类型能够表示的最小值。
- `SIZE`：用来以二进制补码形式表示 int 值的比特位数。
- `TYPE`：表示基本类型 int 的 Class 实例。

```java
public class Test{
   public static void main(String[] arg){
        Integer itg = new Integer(20); // 装箱

        System.out.println(itg.intValue()); // 返回int 20  拆箱
        System.out.println(itg.floatValue()); // 返回 20.0 
        System.out.println(itg.toString()); // 返回字符串类型 "20"

        System.out.println(itg.equals(20)); // true 相等
        System.out.println(itg.compareTo(20)); // 相等：0   itg<20: -1; itg>20: 1

        System.out.println(Integer.parseInt("20")); // 返回int类型的20
        System.out.println(Integer.toBinaryString(20)); // 返回10100 转换成二进制字符串
        System.out.println(Integer.valueOf(20)); // Integer 类型的 20
   }
}
```


## Float 包装类

`Float` 包装类包装了基本类型`float`，并提供了以下方法和属性

###  方法

- `byteValue()`	返回 `byte`	以 byte 类型返回该 Float 的值
- `doubleValue()`	返回 `double`	以 double 类型返回该 Float 的值
- `floatValue()`	返回 `float`	以 float 类型返回该 Float 的值
- `intValue()`	返回 `int`	以 int 类型返回该 Float 的值（强制转换为 int 类型）
- `longValue()`	返回 `long`	以 long 类型返回该 Float 的值（强制转换为 long 类型）
- `shortValue()`	返回 `short`	以 short 类型返回该 Float 的值（强制转换为 short 类型）
- `isNaN()`	返回 `boolean`	如果此 Float 值是一个非数字值，则返回 true，否则返回 false
- `isNaN(float v)`返回 `boolean`	如果指定的参数是一个非数字值，则返回 true，否则返回 false

- `toString()`返回 `String`	返回一个表示该 Float 值的 String 对象
- `valueOf(String s)`	返回 `Float`	返回保存指定的 String 值的 Float 对象
- `parseFloat(String s)`	返回 `float`	将数字字符串转换为 float 数值


###  属性
- `MAX_VALUE`：值为 1.4E38 的常量，它表示 float 类型能够表示的最大值。
- `MIN_VALUE`：值为 3.4E-45 的常量，它表示 float 类型能够表示的最小值。
- `MAX_EXPONENT`:有限 float 变量可能具有的最大指数。
- `MIN_EXPONENT`：标准化 float 变量可能具有的最小指数。
- `MIN_NORMAL`：保存 float 类型数值的最小标准值的常量，即 2-126。
- `NaN`：保存 float 类型的非数字值的常量。
- `SIZE`：用来以二进制补码形式表示 float 值的比特位数。
- `TYPE`：表示基本类型 float 的 Class 实例。


## Double 包装类

`Double` 包装类包装了基本类型`double`，并提供了以下方法和属性

###  方法

- `byteValue()`	byte	以 byte 类型返回该 Double 的值
- `doubleValue()`	返回`double`	以 double 类型返回该 Double 的值
- `isNaN()`	返回`boolean`	如果此 Double 值是一个非数字值，则返回 true，否则返回 false
- `isNaN(double v)`	返回`boolean`	如果指定的参数是一个非数字值，则返回 true，否则返回 false

- `toString()`	返回`String`	返回一个表示该 Double 值的 String 对象
- `valueOf(String s)`	返回`Double`	返回保存指定的 String 值的 Double 对象
- `parseDouble(String s)`	返回`double`	将数字字符串转换为 Double 数值

###  属性
- `MAX_VALUE`:值为 1.8E308 的常量，它表示 double 类型的最大正有限值的常量。
- `MIN_VALUE`：值为 4.9E-324 的常量，它表示 double 类型数据能够保持的最小正非零值的常量。
- `NaN`：保存 double 类型的非数字值的常量。
- `NEGATIVE_INFINITY`：保持 double 类型的负无穷大的常量。
- `POSITIVE_INFINITY`：保持 double 类型的正无穷大的常量。
- `SIZE`：用秦以二进制补码形式表示 double 值的比特位数。
- `TYPE`：表示基本类型 double 的 Class 实例。


## Number包装类
`Number` 包装类位于 `java.lang` 包中， 是一个抽象类，也是一个超类（父类）包装类（如 Double、Float、Byte、Short、Integer 以及 Long）都是抽象类 `Number` 的子类。

- `byte byteValue()` 返回 `byte` 类型的值
- `double doubleValue()` 返回 `double` 类型的值
- `int intValue()` 返回 `int` 类型的值
- `long longValue()` 返回 `long` 类型的值
- `short shortValue()` 返回 `short` 类型的值


## 大数字运算

`java`中大数字运算使用`java.math.BigInteger 类` 和 `java.math.BigDecimal 类`;

###  BigInteger 

`BigInteger` 类支持任意精度的整数

`BigInteger big = new BigInteger(type String)` 

- `add(BigInteger val)`	做加法运算
- `subtract(BigInteger val)`	做减法运算
- `multiply(BigInteger val)`	做乘法运算
- `divide(BigInteger val)`	做除法运算（除法取整数）
- `remainder(BigInteger val)`	做取余数运算
- `divideAndRemainder(BigInteger val)`	做除法运算，返回数组的第一个值为商，第二个值为余数
- `pow(int exponent)`	做参数的 exponent 次方运算
- `negate()`	取相反数
- `shiftLeft(int n)`	将数字左移 n 位（位移运算`>>`），如果 n 为负数，则做右移操作
- `shiftRight(int n)`	将数字右移 n 位（位移运算`<<`），如果 n 为负数，则做左移操作
- `compareTo(BigInteger val)`	做数字的比较运算
- `equals(Object obj)`	当参数 obj 是 Biglnteger 类型的数字并且数值相等时返回 true, 其他返回 false
- `min(BigInteger val)`	返回较小的数值
- `max(BigInteger val)`	返回较大的数值

```java
import java.math.BigInteger;
public class Test{
   public static void main(String[] arg){
         BigInteger bi = new BigInteger("30");

         System.out.println(bi.add( new BigInteger("20"))); // 相加： 50
         System.out.println(bi.divideAndRemainder( new BigInteger("20" ))); // 返回数组{1,10} 第一个为商，第二个为余数
         System.out.println(bi.negate()); // -30
         System.out.println(bi.min(new BigInteger("10"))); // 10
         System.out.println(bi.divide(new BigInteger("7"))); // 4 除法取整数
   }
}
```

### BigDecimal 

`BigDecimal` 类引入了小数概念支持任何精度的浮点数

**方法**

- `add(BigInteger val)`	做加法运算
- `subtract(BigInteger val)`	做减法运算
- `multiply(BigInteger val)`	做乘法运算
- `divide(BigInteger val)`	做除法运算

**处理模式**

- `BigDecimal.ROUND_UP`	商的最后一位如果大于 0，则向前进位，正负数都如此
- `BigDecimal.ROUND_DOWN`	商的最后一位无论是什么数字都省略
- `BigDecimal.ROUND_CEILING`	商如果是正数，按照 ROUND_UP 模式处理；如果是负数，按照 ROUND_DOWN模式处理
- `BigDecimal.ROUND_FLOOR`	与 `ROUND_CELING` 模式相反，商如果是正数，按照 ROUND_DOWN 模式处理；如果是负数，按照 ROUND_UP 模式处理
- `BigDecimal.ROUND_HALF_ DOWN`	对商进行五舍六入操作。如果商最后一位小于等于 5，则做舍弃操作，否则对最后一位进行进位操作
- `BigDecimal.ROUND_HALF_UP`	对商进行四舍五入操作。如果商最后一位小于 5，则做舍弃操作，否则对最后一位进行进位操作
- `BigDecimal.ROUND_HALF_EVEN`	如果商的倒数第二位是奇数，则按照 ROUND_HALF_UP 处理；如果是偶数，则按照 ROUND_HALF_DOWN 处理


```java
import java.math.BigDecimal;
public class Test{
   public static void main(String[] arg){
         BigDecimal bd = new BigDecimal("10");

         System.out.println(bd.add(new BigDecimal("1.1"))); // 11.1
         System.out.println(bd.divide(new BigDecimal("3"),2, BigDecimal.ROUND_UP)); //3.34  保留两位小数
   }
}
```


---

**参考文献**

- [Java Number & Math 类](https://www.runoob.com/java/java-number.html)
- [Java数字和日期处理](http://c.biancheng.net/java/50/)