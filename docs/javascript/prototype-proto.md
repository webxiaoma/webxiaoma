---
sidebarDepth: 2
meta:
  - name: keywords
    content: function, es6箭头函数, 函数，js函数，js 马新想
  - name: description
    content: 本文讲述js中的函数已经es6中的箭头函数。
---

# JavaScript中的原型与原型链

---

当你在使用`JavaScript`中使用`"hello".replace("h","a")`时，你有没有考虑过字符串的`replace`方法是哪里来的，你并没有给字符串设置该方法，这里其实就用到了`JavaScript`的继承。

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
我们通过例子可以看到，创建出来的`xiaoMing`对象继承了`People`的原型上的`eating`方法。下面我们来看看原型和原型链。


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

我们打印出来`xiaoMing`这个对象之后，会发现这个对象包含`name`属性、`age`属性、还有`__proto__`。但是我们也同样可以在`xiaoMing`这个对象上使用`eating()`方法。

```js
xiaoMing.eating("屎");
```
这里就是`__proto__`原型链起到了作用，`__proto__`指向了构造函数的原型，我们从下面判断中可以得知

```js
xiaoMing.__proto__ === People.prototype  // true
```





## ES6继承