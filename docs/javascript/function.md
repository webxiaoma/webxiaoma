---
sidebarDepth: 2
meta:
  - name: keywords
    content: function, es6箭头函数, 函数，js函数，js 马新想
  - name: description
    content: 本文讲述js中的函数已经es6中的箭头函数。
---


# JavaScript中的函数

---

## 什么是函数

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块, 函数语法如下：

```JavaScript
// es5函数
function fun(arg1,arg2){
   // 要执行的代码块
}
// es6 箭头函数
let testFun = ()=>{
}

// 通过函数构造器创建的函数
var fun3 = new Function("console.log(1111)")
```

:::warning 警告
对应函数构造器创建的函数我们这里强烈不推荐使用
:::

## 函数类型

### 函数声明

- 有一个特定的名称（必须拥有函数名）
- 在源码中的位置：要么处于程序级（Program level），要么处于其它函数的主体（FunctionBody）中
- 在进入上下文阶段创建
- 影响变量对象 （函数会提升，并且优先）

```JavaScript
function fun(){
}
```
上边的函数就是以函数声明方式创建的，有一个特定的名称`fun`，处于全局环境（程序级），在进入上下文阶段创建指的是程序开始运行时优先处理函数。影响变量对象可以看下面代码：

```JavaScript
console.log(fun) // 结果 fun函数。这里是因为函数提优先于同名变量提升（其实是覆盖了变量对象中的同名变量）

var fun = 111;
console.log(fun) //111
function fun(){

}
console.log(fun) //fun 函数
var fun = 222;
console.log(fun) //222
```

虽然`var`声明的变量会被提升，但是如果`var`声明的变量和函数声明的名字相同时，我们在最上边访问时，会优先访问函数声明

### 函数表达式

函数表达式具有以下特点：

- 在源码中须出现在表达式的位置
- 有可选的名称
- 不会影响变量对象
- 在代码执行阶段创建

最典型的就是匿名函数就是一个函数表达式
```js
var fun = function (){}
```

函数表达式其实也可以拥有函数名的：
```JavaScript
!function fun(){} // 这也是函数表达式
```

:::tip 重点
**所以说函数表达式和函数声明最主要的判断依据是，看看函数主体`function` 最前边是否含有其它东西(主要指运算符)。**
:::

例如下面这些函数就是表达式：

```JavaScript
// es6中的箭头函数，函数主体左侧有运算符 +
+function fun1(){}
// es6中的箭头函数，函数主体左侧有运算符 ,
1,function fun2(){} 
// es6中的箭头函数，函数主体左侧有运算符 &
&function fun3(){}
// es6中的箭头函数，函数主体左侧有运算符 (
(function(){})
// 函数主体左侧有运算符 :
var obj = {
    fun:function(){}
}
// es6中的箭头函数，函数主体左侧有运算符=
let fun4 = ()=>{}
```
通过上面我们很容易区分什么是函数声明和函数表达式，并且也知道了`es6`中声明的箭头函数其实就是函数表达式，因为它符合函数表达式的一些特征。

### 函数构造器

我们上面提到了，在实际开发中应该避免使用函数构造器，因为它很影响性能，因为需要解析这种语法两次。在第一次是解析常规的`ECMAScript`代码，第二次是解析传入构造函数中的字符串。这里我们只需要知道它即可。

```js
var fun3 = new Function("arg1","arg2","console.log(arg1,arg2)")
```
函数构造器创建的函数，可以接收任意的参数，只是最后一个参数永远是函数主体。


## 立即自执行函数

程序一运行时，函数会立即自己调用自己的函数。常见的立即自执行函数：

```JavaScript
(function(a){
  console.log(a) // 1
})(1)

(function(a){
  console.log(a) // 1
}(1))
```

自执行函数还有没有其他的写法，其实是有的，我们只要知道立即自执行函数是怎么自调的就可以写出很多，他的特点就是小括号 `()` 左边只要是函数表达式，它就可以立即自调。
例如：

```JavaScript
+function fun(a){
   console.log(a)  // 1
}(1)

1,function fun(a){
  console.log(a)  // 1
}(1)

&function fun(a){
   onsole.log(a)  // 1
}(1)
```
## 函数的参数

参数在函数中是非常重要的，我们现在来看看`ES5`中函数的参数以及ES6中函数的参数的一些扩展

### ES5中函数的参数

首先函数分为`形参`和`实参`：

- **形参：** 指的在定义函数时使用的参数，目的是用来接收调用该函数时传进来的实际参数,
- **实参：** 指的是在调用时传递给函数的参数。

```js
function fun(a,b,c){
  // 这里的a,b，c就是形参
}
fun(1,2,3) // 这里的1,2,3就是实参
```
我们现在知道了参数可以在函数之间传递数据，我们看一下面两段代码：

```js
let obj = {
    name:"King",
    age:23
}
function funOne(arg){
    arg.age = 10;
    console.log(obj.age)
}
funOne(obj) // 输出什么
```
```js
let str = "hello world"
function funTwo(arg){
    arg = 10;
    console.log(str)
}
funTwo(str) // 输出什么
```

上面第一段代码会输出`10`,第二段代码会输出`hello world`。我们可以发现我们在两段代码中都对函数传入的参数进行了修改，但是第二段代码中修改函数的参数并没有起作用，这时我们需要知道函数的两种传参方式：

- **引用传递：** 形参实际是对实参的引用（即形参和实参的内存地址的指针都指向同一对象实体），当形参或实参某一个改变时，都会相互影响。
- **值传递：** 值传递就是形参将实参的值复制了一份，两者相互独立互不影响。

:::tip
一般情况下，当函数传递的实参为对象类型如`Array`、`Object`、`function`时，函数就会以**引用传递**的方式传递参数;当函数传递的参数为`String`、`Number`时，函数就会以**值传递**的方式传递参数
:::

说完函数的参数传递方式，我们来说一下函数中的`arguments`参数对象（es6箭头函数中不存在`arguments`对象）。函数中`arguments`对象是函数（非箭头函数）中都可用的局部变量，它是类数组对象，该对象中包含着一些函数参数(实参)和一些函数信息。

```js
function fun(a,b){
    // 或获取1,2,3
  console.log(arguments)
  console.log(arguments[0]) // 1
  console.log(arguments[1]) // 2
}

fun(1,2,3)
```
上面`arguments`对象中会包含所有传入的实参, 获取第一个参数可以使用`arguments[0]`，另外`arguments`中还含有下面属性

- `arguments.length` 指传入实参的长度。
- `arguments.callee` 指向当前执行的函数, 在匿名函数的递归调用时常用到（下面讲到递归函数）

```js
let sum = 0;
(function (){
  sum++
  if(sum><10){
      arguments.callee() // 递归调用自己
  }
})()
```
:::tip
以前`arguments`对象中还有`caller`对象指向调用当前函数的函数。不过目前已废除，该对象移到`Function`对象上去了。可以这样使用
```js
function f(){
    fun(1,2,3)
}
function fun(a,b){
    console.log(fun.caller) // 指向 f() 函数
}
f()
```
:::

### ES6中函数的参数

`ES6`中函数的参数只是做了一些扩展，比如

1. 增加了函数参数的默认值

```js
function fun(a,b=1){
   console.log(a,b)// underfind  1
}
fun()

// es5中默认参数的方法
function fun(a,b){
    var b = b || 1;
}
fun()
```

2. 可以与es6中的解构赋值一起使用

```js
let obj = {
   a:1,
   b:2
}
function fun({a,b}){
   console.log(a,b) // 1 2
}
fun(obj)
```
更多ES6的特性请访问[ESCMScript6 入门 —— 函数的扩展](http://es6.ruanyifeng.com/#docs/function)


## 箭头函数（ES6)

在`es6`中函数可以写成箭头函数形式

当函数只有一个参数时可以省略`()`，当函数有多个参数或没有参数时不可以省略
```js
// 只有一个参数, 函数主体只有一条语句
var f = reg => reg

// 等价于
var f = function (reg){
    return reg
}

// 多个参数， 函数主体有多条语句
var f = (reg1,reg2) => {
    let sum = reg1 + reg2
    return sum
}

// 等价于
var f = function (reg1,reg2){
    let sum = reg1 + reg2
    return sum
}
```
箭头函数和`es5`中的函数除了书写不一样外，还有一下区别:

- 箭头函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。
```js
let fun = () =>{
    console.log(this)
}

let fun2 = function(){
        console.log(this)
}
let obj = {
    a:fun,
    b:fun2,
}
obj.a() // this 指向window
obj.b() // this 指向obj
```
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
```js
let fun = () =>{
    console.log(this)
}
new fun() // 会报错
```
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。

```js
 let fun = () =>{
    console.log(arguments) // arguments不存在，会报错
}
fun(1,2,3,4,5)

//正确写法，使用rest参数
 let fun = (...args) =>{
    console.log(args) // [1, 2, 3, 4, 5]
}
fun(1,2,3,4,5)
```
- 不可以使用`yield`命令，因此箭头函数不能用作 `Generator` 函数。


## 其他函数形式

### 构造函数

在js中，通过`new`调用的函数，我们成该函数叫做构造函数。

```js
function fun(){
    this.name = "King"
}
let f = new fun() // fun() 函数就是构造函数
```
这里我们不去详细说构造函数，下来我们会单独去讨论。这里使用`new`创建出来的`f`对象继承了一个`constructor`属性，该属性指向创建对象的构造函数
```js
function fun(){
  this.name = "King"
}

let f = new fun() // fun() 函数就是构造函数
console.log(f.constructor) // 指函数fun
```


### 递归函数

递归函数其实就是函数自己用自己，但并不会立即执行，而是需要触发的。我们来看看函数声明形式的递归调用

```js
// 函数声明形式的递归
let sum = 0;
function fun(){
    sum++ // sum++ 要写到fun()调用前边
    console.log(sum)
    if(sum<20){ // 调用限制条件
        fun() // 自己调用自己
    }
}
fun() // 触发函数
```
我们可以注意到，递归调用函数时我们经常要限制调用的条件，**这里如果不限制调用条件，递归会进行下去，最终可能造成内存泄漏**

另外对于匿名函数我们如何去实习递归，这里就要用到`arguments.callee`了。`arguments`对象是参数对象，在下面我们会对它进行讲解，该对象中有一个`callee`属性，该属性指向的是**正被执行的函数对象**, 我们可以使用该属性来递归调用函数

```js
// 函数声明形式的递归
let sum = 0;
(function (){
    sum++ // sum++ 要写到fun()调用前边
    console.log(sum)
    if(sum<20){ // 调用限制条件
        arguments.callee() // 自己调用自己
    }
})()
```
:::warning
需要注意的是在使用递归函数时一定要加上截止条件，防止内存泄漏。另外在上面代码中如果我们写出这样：
```js
let sum = 0;
(function (){
    console.log(sum)
    if(sum<20){
        arguments.callee() 
    }
    sum++ // 放到了递归下边
})()
```
这时会出现报错：

```
Maximum call stack size exceeded
```
:::

### 高阶函数

什么是高阶函数，说通俗点就是一个函数接收另一个函数作为参数的函数就叫做高阶函数。

```js
function fun(arg){
   // arg参数是一个函数
   arg() 
}

let f = function(){
    console.log("函数f")
}
fun(f)  // 函数fun被称为高阶函数
```
通过上面的例子可以看出，函数`fun`接收了一个名为`f`的函数作为参数，这时`fun`函数就是高阶函数，我们平常开发中也经常使用高阶函数，比如：
```js
//map函数接收一个函数为参数
[1,2,3,4,5].map(function(item){})

// reduce高阶函数
[1,2,3,4,5].reduce(function (x, y) {
    return x + y;
});

//filter 高阶函数
[1,2,3,4,5].filter(function (x) {
    return x > 3;
});
```

### 柯里化函数

柯里化通常也称部分求值，其含义是给函数分步传递参数，每次传递参数后部分应用参数，并返回一个更具体的函数接受剩下的参数，这中间可嵌套多层这样的接受部分参数函数，直至返回最后结果。因此柯里化的过程是逐步传参，逐步缩小函数的适用范围，逐步求解的过程。比如：

```js
// 普通函数
function fun(a,b,c){
    return a + b + c
}
fun(1,2,3) // 6

// 转化成柯里化函数
function fun(a){
    return function(b){
        return function(c){
           return a + b + c
        }
    }
}
fun(1)(2)(3) // 6
```

