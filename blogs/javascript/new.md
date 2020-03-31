---
meta:
  - name: keywords
    content: new, new操作符, js new，new创建对象
  - name: description
    content: 本文讲述使用new创建对象的一些内部操作，以及对new操作的一些认识。
---

# JavaScript之new操作符

---

在JavaScript中我们创建对象有几种方法在[JavaScript之面向对象](/javascript/js-object.html)，也有介绍到，其中我们就提到了使用`new`操作符实例化对象。

## new 操作符的使用

在`JavaScript`中我们在创建一个新的实例对象时会使用`new`操作符去创建，我们来看看使用new操作符创建实例的几个例子：

**1. 第一种请求，构造函数中没有返回值的实例对象情况**

```js
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.getAge = function(){
    console.log(this.age)
}
var XiaoMing = new Person("小明",25)
console.dir(XiaoMing)
```
上面创建`XiaoMing`实例，我们可以知道下面几个：

- 构造函数`Person`中的`this`指向了实例化后的对象`XiaoMing`;
- 实例化后的对象`XiaoMing`没有原型`prototype`，但是有原型链`__proto__`，原型链指向构造函数`Person`的原型`Person.prototype`
- 并且`Person`的原型`Person.prototype`的方法内`this`指向也实例化后的对象`XiaoMing`;


**2. 第二种请求，构造函数中有返回值，但返回值是基本数据类型的情况**

```js
function Person(name,age){
    this.name = name
    this.age = age

    return "hello world!"
}
Person.prototype.getAge = function(){
    console.log(this.age)
}
var XiaoMing = new Person("小明",25)
console.dir(XiaoMing)
```
这种情况下，虽然构造函数中返回了字符串，但是创建的实例不会有任何变化，它的特点同第一种没有区别。


**3. 第三种请求，构造函数中有返回值，但返回值是对象的情况**

```js
function Person(name,age){
    this.name = name
    this.age = age

    return {
        name:'小红',
        age:20
    }
}
Person.prototype.getAge = function(){
    console.log(this.age)
}
var XiaoMing = new Person("小明",25)
console.dir(XiaoMing)
```
上面创建`XiaoMing`实例，我们可以知道下面几个：

- 实例化后的对象`XiaoMing` 就是返回的对象；
- 实例化后的原型链指向返回对象的原型；  



## new 操作符的内部实现

通过上面`new`操作符的使用特点：我们现在模拟一下使用`new`实例化构造函数的过程。

我们创建一个`simulateNew`函数, 该函数接收的第一个参数是构造函数，后面的参数，就是要传入构造函数的参数：

```js
function simulateNew(){
    var obj = {};
    var Fun = [].shift.call(arguments) // 截取并拿到第一个参数
    
     // 执行构造函数，并将this指向obj并传入参数
    var resultFun = Fun.apply(obj,arguments)
    obj.__proto__ = Fun.prototype  //设置obj原型链

    // 返回结果如果是对象就直接返回该对象，否则返回obj对象
    return typeof resultFun == 'object'?resultFun:obj
}
```
:::tip
上面我们封装的整个思路是这样的：

1. 创建一个空对象`obj`;
2. 使用`[].shift.call`截取封装函数的第一个参数，第一个参数为接收的构造函数
3. 使用`apply`执行构造函数，并将`this`指针执行`obj`, 将剩余的参数传入进入，此时会将构造函数中的属性绑定到`obj`对象上
3. 将`obj`的原型链指向构造函数的原型
4. 判断构造函数的返回值是否为对象，如果是则实例化结果为该返回对象，如果不是则为我们创建的`obj`对象
:::

我们来看看如何使用上面我们封装的仿`new`操作符的函数：

```js
function Person (name,age){
    this.name = name
    this.age = age
}
Person.prototype.getAge = function(){
    console.log(this.age)
}

// 调用我们封装的仿`new`操作符函数
var result = simulateNew(Person,"小明",25)

result.name // 小明
result.getAge // 函数
result.__proto__  === Person.prototype  // true
```

当构造函数中有返回值时，并且返回值是对象时：

```js
function Person (name,age){
    this.name = name
    this.age = age

      return {
            name:'小红',
            age:20
       }
}
Person.prototype.getAge = function(){
    console.log(this.age)
}

// 调用我们封装的仿`new`操作符函数
var result = simulateNew(Person,"小明",25)

result.name // 小红
result.age // 20
result.getAge // undefined
```

现在我们完成了模拟`new`操作符在执行时内部的一些操作。