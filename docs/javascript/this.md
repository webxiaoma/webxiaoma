---
sidebarDepth: 2
meta:
  - name: keywords
    content: this, js this, es6 this 马新想
  - name: description
    content: 本文讲述js中的this使用。
---

# js 中的 This

---

说到`js`中的`this`，可以说难倒了一大批初学者，回想刚接触js时，对于this这个东西确实是处于懵逼状态，今天来写一写`JavaScript`中的`this`。`this`其实就是执行上下文的一个属性，在`javaScript`中`this`时在进入上下文时确定的，并且在上下文运行期间一直不会发生变化。下面我们来进行一下讨论。

## 全局中的this

全局中的`this`对于我们来说应该还是很好理解的，全局中的`this`, 指向的就是 `window`。

```js
console.log(this)  // 指向window


var a = 10;
console.log(this.a) // 10  this执行window
```

## 函数中的this

函数中的`this`相对于全局中的`this`来说比较难搞，我们需要考虑函数的执行上下文，因为`this`是在函数调用时来确定的，也就是说调用函数的方式不同会影响`this`的指向，下面我们来看看函数中的`this`, 


```js
// 全局中执行fun函数
function fun(){
  console.log(this) 
}
fun() // this 指向window

// 以原型的构造函数方式调用
fun.propotype.constructor() // this 指向fun.propotype对象

//对象中调用fun

var obj = {
  fun:function(){
    console.log(this)  
  }
}
obj.fun() // this 指向 obj对象
```

我们可以通过上面代码看到，调用函数的方式不同，`this`的最终指向也就不同,有没有一个标准去来`this`的指向呢。这里我们可以使用下面方式来判断`this`的指向

:::tip this 的指向
`this`在函数中的指向，是受函数的调用方式影响的。 当调用函数（括号左边）是引用类型的值时，函数中的`this`指向调用函数的对象,  当调用函数（括号左边）是非引用类型的值时，函数中的`this`指向`undefind`(在js中当，在非严格模式下，this为`undefind`时,将自动指向`window`)，这种判断不是绝对成立的，存在一些特殊性。
:::


### 引用数据类型

理解上面的之前我们简单说一下在`js`中什么是引用类型和非引用类型。

```js

// 第一种情况
var obj = {
  name:'King',
  age:23
}

var newObj = obj;
newObj.age = 50;
console.log(obj.age) // 50 obj 中的age被改变了

// 第二种情况
var str = "hello world";
str.replace("world","老王");
console.log(str) // "hello world" str字符串并未被改变
```

通过上面的例子我们可以很清楚的看到不同点。其中对象`obj` 就是引用数据类型，而`str` 就是非引用数据类型。


**非引用数据类型特点**

非引用数据类型的值是不可以改变的，我们常见的基本类型中,如 `String`、`Number`、`undefind`、`null`、`Symbol`，都是非引用类型的值（也被称为基本类型），基本类型的变量是存放在栈区的（栈区指内存里的栈内存），一经设置就不会被修改。此外基本数据类型的比较时，比较的是数据类型。

比如上面的例子，通过`replace`方法替换`world`后，并没有修改`str`本身，因为我们打印`str`时，输出还是`"hello world"`, 通过`replace`方法替换`world`后而是返回了一个新的字符串。

```js
var str = "hello world";
var newStr = str.replace("world","老王");
console.log(str) // "hello world"  str字符串并未被改变
console.log(newStr) //"hello 老王"  返回了一个新字符串

// 基本数据类型的比较
var str1 = "one";
var str2 = "one";
console.log(str1 == str2) // true 比较的是数据类型
```

字符串`str` 和 `newStr` 用内存图展示如下：

![基本数据类型](/img/this-1.png)



**引用数据类型的特点**

在`js`中常见的引用数据类型就是对象了（包括数组）。引用类型的值是同时保存在栈内存和堆内存(数据保存在堆内存中)中的对象，并且引用类型的值在比较时，比较的是内存地址是否相同。

比如我们上面提到的将`obj`赋值给`newObj`对象后，`obj`和`newObj`都是引用数据类型，他们的内存地址指向同一个对象，当`obj`和`newObj`对象中某一个属性发生变化时，都会影响对应的对象。

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

![引用数据类型](/img/this2.png)

 
说了引用数据类型和基本数据类型后， 我们来回归正题，讨论函数中`this`的指向。 现在我们知道了`JavaScript`中对象是`引用类型`，我们来看下面`this`的指向

```js
var name = "top";

var obj = {
  name:'King',
  getName:function(){
     console.log(this.name)
  },
}

obj.getName() // King   情况一
var getThis = obj.getName
getThis() // top   情况二

```
1. 第一种情况：我们会发现调用函数时括号左边是引用类型，这时`this`指向的就是调用该函数的对象即`obj`，所以`obj.name`就是`King`。
2. 第二种情况：当函数`getThis`函数执行时会读取`this.name`, 这时候括号左边的`getThis`是引用类型的值（可以看做`window.getThis()`）这是`this`指向的就是`window`。



## ES6 中的this






## 构造函数中的this




## 改变this指向的方式