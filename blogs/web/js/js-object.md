---
meta:
  - name: keywords
    content: js面向对象, js, 面向对象，js原型，js原型链
  - name: description
    content: 本文讲述什么是js面向对象，js面向对象如何创建以及js的原型和原型链是什么。
---

# JavaScript之面向对象

[[toc]]

:horse: 


## 概念


面向对象（`Object-oriented, OO`）的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。在`ES5`中是没有类的概念，但是`ES6`中有类的概念。

在js中的对象是无序属性集合，属性可以包含基本值、对象、或者函数，并以名值形式存在。

## 创建对象的方法

###  对象字面量

这种中创建对象的方式是我们经常用到的

```js
var Cat = { // 创建了一个动物
    name:'猫',  // 名字叫猫 （属性值是字符串）
    color:'white', // 颜色白色 （属性值是字符串）
    age: 3, // 年龄 3 岁 （属性值是数字）
    eat:function(){ // 会吃老鼠 （属性值是函数）
        return '老鼠'
    }
}
```
一般我们将属性值为函数的叫做该对象的方法，比如上面猫会吃老鼠`eat` 就是它的方法。


### New实例化对象


- 内置构造函数，通过`new`操作符实例化为对象

比如 

```js
new Array()
new Date()
new String()
new Number()
new Object()
```
上边这些js内置的构造函数也是js的对象。


- 自定义构造函数,并实例化为对象

```js
function Dog(name){
    this.name = name
    this.color = "black"
    this.age = 4
    this.eat = function(){
        console.log("屎") 
    }
}
        
var Dog1 = new Dog("旺旺")
var Dog2 = new Dog("仔仔")

Dog1.name // "旺旺"
Dog2.name // "仔仔"
```

上面`Dog1`和`Dog2`就是我们自己写的实例化对象，这两个对象互不影响，这里可以这么理解函数`Dog` 指的是颜色为黑色，年龄为4，会吃翔的狗，而这类狗有很多个，下边我们使用`new` 创建出来的构造函数（对象）就相当于具体是哪只狗,`Dog1`是老李家的叫"旺旺"，`Dog2`是老王家的叫"仔仔",比如老李将他家的狗颜色染成了白色，老王家的狗颜色是不会受影响的，就像下面代码

```js
Dog1.color = "white";
console.log(Dog1.color) // 'white'
console.log(Dog2.color) // 'black'
```


###  Object.creat()

第三种方式就是使用 `Object.creat()` 去创建对象

```js
 var emptryObj = Object.create(null) // 创建一个空对象
```
上边我们创建了一个空对象，该空对象和上边的字面量对象`{}` 是不同的，`Object.create(null)` 创建的空对象没有任何属性也没有原型链。而字面量对象`{}`是存在原型`prototype`的。

```js
 var obj = {
    name:"玛莎拉蒂",
    color:'red',
}
 var Car = Object.create(obj) // 创建一个以obj对象为原型的对象
 
 Car.name // "玛莎拉蒂"
```

上边创建的Car 对象它继承obj，也就Car原型链指向的是obj。

```js
Car.__proto__ === obj // true
```

`Object.creat()` 它还有第二个参数，第二个参数是一个对象，来定义属性的特性。

```js
 var obj = {
    color:'red',
}
 var Car = Object.create(obj,{
     name:{ //定义属性name 的特性
        writable:false, // 是否可写入,false 为不能修改name
        configurable:true, // 是否可配置，true为可以配置
        value:"玛莎拉蒂", // 给name属性附值
     }
 })

Car.name // "玛莎拉蒂"
Car.color // 'red'

Car.name = "宝马" // name值不会被改变
Car.color = 'black' // color值改变了

console.log(Car.name) // "玛莎拉蒂" 
console.log(Car.color) // 'black'
```

::: tip

`Object.creat()` 创建出来的对象，原型链指向`Object.creat()`中的第一个参数，如果第一个参数是`null`,那么就会创建一个空对象（没有原型链），而 `new Object()`创建的对象，是存在原型链的，并且它的原型链默认指向`Object`

:::


## 原型和原型链

首先es5 中不包含传统类继承模型的，而是使用 `prototype`原型模型。js很多对象是有原型`prototype`,当然也有一些对象不存在原型，例如：`Object.prototype` 和 `Object.create(null)`以及使用 `new` 创建的构造函数。

- 原型（`prototype`）:在javaScript中，每当定义一个对象（个别对象不含有原型）时候，对象中都会包含一些预定义的属性，其中每个函数对象都有一个`prototype`属性，这个属性指的就是它的原型对象。

- 原型链（`__proto__`）:当一个对象需要引用一个属性时，js引擎首先会从这个对象自身的属性表中寻找这个属性标识，如果找到则进行相应读写操作，若没有找到，就在`__proto__`属性引用的对象的属性表中查找，如此查找，直到找到这个属性或者`__proto__`属性指向为 `null`，就会停止查找，属性返回`undefind`，这个`__proto__`引用链就被称为原型链。