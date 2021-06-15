---
meta:
  - name: keywords
    content: 基础数据类型, 引用数据类型, es6，js引用数据类型  马新想
  - name: description
    content: 本文讲述JavaScript中的数据类型，包括基础数据类型以及引用数据类型。
---

# JS-基础类型和引用类型


[[toc]]

:horse:


## 前言

我们都知道在`JavaScript`中有六种数据类型`Number`、`Blooean`、`String`、`Undefined`、`Null`，还有一种复杂的数据类型`Object`（`Array`是一种特殊的`Object`），另外在`ES6`中新增加一种`Symbol`数据类型，表示独一无二的值。此外我们还可以将它们分为基础类型和引用类型，这是从它们存储数据的方式来区分的。



## 基础数据类型

基础数据类型的值是不可以改变的，我们常见的数据类型中,如 `String`、`Number`、`undefined`、`null`、`Symbol`，都是基本数据类型，基本数据类型的变量是存放在栈区的（栈区指内存里的栈内存），一经设置就不会被修改。此外基本数据类型的比较时，比较的是数据类型，我们来看下面例子

```js
var str = "hello world";
var newStr = str.replace("world","老王");
console.log(str) // "hello world"  str字符串并未被改变
console.log(newStr) //"hello 老王"  返回了一个新字符串

// 基本数据类型的比较
var str1 = "one";
var str2 = "two";
console.log(str1 == str2) // true 比较的是数据类型
```

字符串`str` 和 `newStr` 用内存图展示如下：

<images src="/web/js/this-1.png" />

上面的例子，通过`replace`方法替换`world`后，并没有修改`str`本身，因为我们打印`str`时，输出还是`"hello world"`, 通过`replace`方法替换`world`后而是返回了一个新的字符串。



## 引用数据类型

在`JavaScript`中常见的引用数据类型就是对象了（包括数组）。引用类型的值是同时保存在栈内存和堆内存(数据保存在堆内存中)中的对象，并且引用类型的值在比较时，比较的是内存地址是否相同。我们来看下面的例子：

```js
// 第一种情况
var obj = {
  name:'King',
  age:23
}

var newObj = obj;
newObj.age = 50;
console.log(obj.age) // 50 obj 中的age被改变了

// 基本数据类型的比较
var obj1 = {};
var obj2 = {};
console.log(obj1 == obj2) // false 比较的是内存地址
```

对象`obj` 和 `newObj` 用内存图展示如下：

<images src="/web/js/this2.png" />

上面提到的将`obj`赋值给`newObj`对象后，`obj`和`newObj`都是引用数据类型，他们的内存地址指向同一个对象，当`obj`和`newObj`对象中某一个属性发生变化时，都会影响对应的对象。


