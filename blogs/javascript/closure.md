---
sidebarDepth: 2
meta:
  - name: keywords
    content: js闭包, 闭包, 闭包 自由变量 webxiaoma
  - name: description
    content: 本文讲述什么是闭包，js中如何使用闭包。
---

# JavaScript之闭包

---

前端面试或是刷题时讨论的问题里基本会有闭包，关于闭包自己以前也困惑过，现在我还是感觉有必要将闭包的知识汇总一下，不要在像以前一样在被问到`javascript`中什么是闭包时，只会说所有函数都是闭包，在问为什么时，然后就没有然后了。

在谈论js闭包之前，希望你先阅读[JavaScript之执行上下文](/javascript/execution-contexts.html)、[JavaScript之变量对象](/javascript/variable-object.html)和[JavaScript之作用域和作用域链](/javascript/scope-chain.html)这两篇文章，因为在讨论闭包时我们涉及到了



## 闭包定义

在[维基百科中闭包]是这样定义：

:::tip 闭包
在计算机科学中，闭包（英语：`Closure`），又称词法闭包（`Lexical Closure`）或函数闭包（`function closures`），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。
:::

我们通过上面可以知道**引用了自由变量的函数**就形成了闭包，所以自由变量和函数构成了闭包，函数很容易理解，那么自由变量是什么

> 自由变量其实就是函数内部使用的函数外部变量

例如：

```js
var a = 1;
function fun(){
  var b = a + 2;
  console.log(b)
}
```
上面代码中变量`a`就是自由变量，所以自由变量`a`和函数`fun`就构成了闭包，很好理解。多以对于闭包的概念我们还可以这样理解：

:::tip 闭包（Tom大叔）
1. 从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。

2. 从实践角度：以下函数才算是闭包：
- 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
- 在代码中引用了自由变量
:::


## JS中的闭包

我们从一个简单的例子开始探索`JavaScript`中的闭包, 我们来看下面的例子：

```js
function fun(){
    var a = 1;
    return function (){
        var b = a + 2;
        console.log(b)
    }
}
var test = fun()
console.dir(test)

text() // 3
```


上面例子中我们通过[JavaScript之执行上下文](/javascript/execution-contexts.html)、[JavaScript之变量对象](/javascript/variable-object.html)和[JavaScript之作用域和作用域链](/javascript/scope-chain.html)文章可以分析出它执行过程中执行上下文的变化是这样的：

```js
// 伪代码

// 进入全局代码环境时
ECStack = [
   globalContext  // 全局执行上下文
]
// fun 函数执行时
ECStack.push(<fun> funContext)

//此时执行上下文栈ECStack 
ECStack = [
    <fun> funContext, // fun执行上下文
    globalContext,  // 全局执行上下文
]

// 函数fun执行完成后
ECStack.pop(<fun> funContext)

// 此时ECStack 
ECStack = [
     globalContext,  // 全局执行上下文
]
```
我们可以看到在函数`fun`执行完成后，`fun`的执行上下文就被销毁了，并且`fun`的执行上下文中的变量对象也都会被销毁，变量对象中存储着变量`a`也会被销毁，既然变量`a`已经被销毁了，但是我在执行`text()`函数时为啥访问到了变量`a`,并将变量`a`进行了计算赋值给了变量`b`。

正是为了解决这样的问题，`JavaScript`中引入了闭包，使得函数`fun`执行完后变量`a`虽然被销毁，但我依然可以访问，为什么可以访问，因为变量`a`已经存在了闭包中。

在我们代码中打印的`test`函数`console.dir(test)`，我们会看到下面`test`的作用域`[[Scope]]`属性

![闭包](/img/closure1.png)

我们可以看到函数`fun`执行完后返回的函数中存在两个作用域，第一个作用域就是闭包作用域，第一个作用域就是全局作用域，并且在闭包中存储着变量`a`，所以当`test`执行时，会先查找自身活动对象中的变量，如果没有找到变量`a`会通过作用域链去查找作用域中的变量`a`，所以在闭包中会查找到变量`a`。

所以`JavaScript`中的闭包为我们解决了即便是自由变量销毁后，也可以从函数内部中访问到，因为自由变量已经存在了闭包中。

如果我们把上面的代码改变一下：

```js
function fun(){
    var a = 1;
    return function (){
        var b =  2;
        console.log(b)
    }
}
var test = fun()
console.dir(test)

text() // 3
```

在打印`console.dir(test)`后，因为`test`函数和变量`a`没有形成闭包，所以`[[Scope]]`属性中就不存在闭包作用域了，只存在全局作用域了。

![闭包](/img/closure2.png)



## 常见问题

在说完闭包后，不可避免的我们会说说关于闭包的一些练习题。

```js
var liAry = []
for(var i = 0,len = 4; i<len; i++){
    liAry[i] = function(){
        console.log(i)
    }
}
liAry[0]()  // 我们想要的结果为0
liAry[1]()  // 我们想要的结果为1
liAry[2]()  // 我们想要的结果为2
```
上面的结果应该很多人都知道，最终都会打印出`4`。并不是我们想要的结果，首先`for`循环是没有作用域的，所以`for`循环中使用`var`声明的变量`i`，是存储在全局对象中的，在`for`循环完成后，`i`的值最终将是`4`。

此外从实践角度中分析`liAry`数组中的函数，并没有形成闭包，所以他们在创建时作用域就只用全局作用域（可以打印`console.dir(liAry[0])` 看看`[[scope]]`）

```js
scope = [
  VO(globalContext),
]
```

所以在`liAry`数组中的函数执行时，他们访问的变量`i`都是全局中的变量`i`，所以最终都是4。并且当我们改变全局中`i`的值时，`liAry`数组中的函数都会受影响

```js
var liAry = []
for(var i = 0,len = 4; i<len; i++){
    liAry[i] = function(){
        console.log(i)
    }
}

i = 10
liAry[0]()  // 10
liAry[1]()  // 10
liAry[2]()  // 10
```

为了打印出我们想要的索引值，这里我们可以使用闭包：

```js
var liAry = []
for(var i = 0,len = 4; i<len; i++){
    liAry[i] = (function(i){ // 假设这个匿名函数叫a
        return function(){ // 假设这个匿名函数叫b
           console.log(i)
        }
    })(i)
}
liAry[0]()  // 0
liAry[1]()  // 1
liAry[2]()  // 2
```
这时就是我们想的的结果了，这是因为每次`for`循环时匿名函数`a`都会创建一个新的执行上下文环境，并将`i`存储在变量对象中，匿名函数`b`在每次创建时，因为使用了匿名函数`a`中的`i`，所以会产生闭包，并存在自己的作用域中。

此时数组`liAry`中的每个函数的作用域中都有各自的闭包作用域（可以打印`console.dir(liAry[0])` 看看`[[scope]]`），所以当`liAry`中的函数执行时，都会先查找各自作用域中的闭包内的`i`, 最终会输出我们想要的值。


解决上面的问题，闭包不是唯一的方法，我们可以使用`ES6`中的`let`（`let`会产生块级作用域）

```js
var liAry = []
for(let i = 0,len = 4; i<len; i++){
    liAry[i] = function(){
        console.log(i)
    }
}
liAry[0]()  // 0
liAry[1]()  // 1
liAry[2]()  // 2
```

或者通过下面方法实现：

```js
var liAry = []
for(let i = 0,len = 4; i<len; i++){
    (liAry[i] = function(){ 
        console.log(arguments.callee.k)
    }).k = i
}
liAry[0]()  // 0
liAry[1]()  // 1
liAry[2]()  // 2
```


关于闭包的知识目前先汇总到这里。












