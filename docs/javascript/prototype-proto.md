---
sidebarDepth: 2
meta:
  - name: keywords
    content: prototype, js原型, js原型链，原型链，__proto__
  - name: description
    content: 本文讲述js中的原型与原型链，已经js中是如何通过原型和原型链实现继承的。
---


# JavaScript中的原型与原型链
---

在`JavaScript` 函数都有一个`prototype`对象（除ES6箭头函数），大部分对象都有一个`__proto__`原型链指针（原型链最末端的对象不存在）。

## 继承

`JavaScript`中的继承和`Java`的继承实现是不一样的，在`JavaScript`中是通过原型和原型链来实现继承的。我们来看下面的例子：

```js
function People(name,age){
    this.name = name
    this.age = age
}

People.prototype.eating = function(foods){
    var foods = foods || "没有食物"
    alert(foods)
}

// 使用new创建一个对象
var xiaoMing = new People("小明",24);

// 现在 xiaoMing这个对象就有下面属性了
xiaoMing.name // 小明
xiaoMing.age //  24

// xiaoMing同时也具有`eating` 方法了
xiaoMing.eating("屎")
```
我们可以看到通过构造函数创建出来的`xiaoMing`对象继承了`People`的原型上的`eating`方法。下面我们来看看原型和原型链。

## 原型

在`JavaScript`中每一个函数都有一个属性`prototype`(`ES6`中的箭头函数没有原型属性)，这个属性就是我们经常提及的原型。

```js
// 函数声明形式
function fun(){}
console.dir(fun.prototype) // Object

// 函数表达式形式
var f = function(){}
console.dir(fun.prototype) // Object

// 箭头函数
let a = ()=>{}
console.dir(a.prototype) // undefined
```

既然原型是一个对象，那我们是可以在原型上添加方法和属性的。比如上面第一个例子中我们就在构造函数`People`的原型上添加了`eating`方法。     

```js
People.prototype.eating = function(foods){
    var foods = foods || "没有食物"
    alert(foods)
}
```
我们可以打印出构造函数`People`的原型来看看

```js
function People(name,age){
    this.name = name
    this.age = age
}
People.prototype.eating = function(foods){
    var foods = foods || "没有食物"
    alert(foods)
}
console.dir(People.prototype)

/**
 * 结果如下：
 {
    eating: ƒ (foods)
    constructor: ƒ People(name,age)
    __proto__: Object
  
  }  
*/
```
我们从原型`prototype`上可以看到我们定义的`eating`方法，也会看到一个`constructor`方法，这个方法指向的是我们构造函数本身

```js
People.prototype.constructor === People  // true  
```
我们从原型`prototype`对象上还看到了一个属性`__proto__`(前后各两个下划线)，这个属性指向另一个对象的原型，下面我们来看看这个属性。

## 原型链

我们知道了属性`__proto__`可以指向另一个对象的原型，从而继承另一个对象原型上的方法或属性。我们接着来看我们第一个例子。

```js
function People(name,age){
    this.name = name
    this.age = age
}
People.prototype.eating = function(foods){
    var foods = foods || "没有食物"
    alert(foods)
}
var xiaoMing = new People("小明",24);

console.log(xiaoMing) 
```

我们打印出来`xiaoMing`这个对象之后，会发现这个对象包含`name`属性、`age`属性、还有`__proto__`，但是并没有原型`prototype`, 但是我们也同样可以在`xiaoMing`这个对象上使用`eating()`方法。

```js
xiaoMing.eating("屎");
```

这里就是`__proto__`原型链起到了作用，`__proto__`指向了构造函数的原型，使得创建出来的`xiaoMing`这个对象继承了构造函数的原型。我们从下面判断中可以得知

```js
// true
xiaoMing.__proto__ === People.prototype  
```

所以在`js`中有了原型链，我们很好的实现了继承。我们可以用下面这个图来表示，构造函数函数（`People`）、构造函数的原型(`People.prototype`)，对象(`xiaoMing`)、 原型链(`__proto__`):

![js prototype](/img/prototype1.png)

我们很清楚的看到`js`的中的继承, 正是因为`js`的继承关系，当我们在访问`xiaoMing.eating()`方法时，在`xiaoMing`对象上没有找到，`js`会通过原型链`__proto__`去查找，直到找到原型链的最末端`Object.prototype`对象上为止，如果还没有找到该方法，就会返回`undefined`。上面例子中`xiaoMing.__proto__`指向的是构造函数的原型`People.prototype`, 那么构造函数上也存在`__proto__`, 并指向最终的对象`Object.prototype`，在该对象(`Object.prototype`)上就不再有`__proto__`了，因为该`对象`已经是原型链的最末端对象了，`js`中几乎所有的函数和对象都继承自该对象。


另外`js`中还提供了一些很有用的的方法：

1. `hasOwnProperty` 该方法可以判断属性是自己本身属性还是由原型链继承来的属性。（该方法位于`Object.prototype`对象上）
```js
// 还以上面的方法为例

xiaoMing.hasOwnProperty("name") // true
xiaoMing.hasOwnProperty("eacting") // false

```
2. `isPrototypeOf` 检测一个对象是否是另一个对象的原型

```js
Object.prototype.isPrototypeOf(xiaoMing) // true
People.prototype.isPrototypeOf(xiaoMing) // true
```
3. `instanceof` 运算符左操作数是一个对象，右操作数标识对象的类。如果左侧对象是右侧类的实例，则表达式返回为`true`，否则返回`false`。

```js
// 对象xiaoMing 是People的实例
xiaoMing instanceof People  // ture
```


## 修改原型链

我们在创建对象时，可以使用`Object.create()`来创建对象，并设置原型链的指针`__proto__`指向。

```js
var Obj = {
    name:"King",
    age:100
}
var createObj = Object.create(Obj)

createObj.__proto__ === Obj // true
```

## ES6继承

`ES6`中可以通过`class`来声明类了。

```js
class fun{
}
```
并且通过`class`声明的类就是一个函数，它是构造函数的一个语法糖，并且通过class声明的类中既包含`prototype`属性也包含`__proto__`

```js
typeof fun // function
```
在`ES6`中实现继承可以使用`extends`关键字。因为类既包含`prototype`属性也包含`__proto__`所以它有两条继承链

1. 子类的`__proto__`属性，表示构造函数的继承，总是指向父类。

2. 子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。

```js
class Fun{
}

class NewFun extends Fun{
}

NewFun.__proto__ === Fun  // true
NewFun.prototype.__proto__  === Fun.prototype // true
NewFun.prototype.constructor === NewFun // true
```

关于更多`ES6 class`类的知识可以查看[阮一峰 calss](http://es6.ruanyifeng.com/#docs/class)