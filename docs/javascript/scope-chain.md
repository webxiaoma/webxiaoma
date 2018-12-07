---
sidebarDepth: 2
meta:
  - name: keywords
    content: js作用域  js作用域链 作用域 作用域链
  - name: description
    content: 本文讲述使用js中的作用域和作用域概念。
---


# JavaScript之作用域和作用域链

---

我们在[JavaScript之执行上下文](/javascript/execution-contexts.html)中已经讨论过`执行上下文`，并且提到在执行代码执行中，`执行上下文`会初始化三个很重要的对象(`变量对象`、`作用域链`、`this`)，这里我们讲解其中`作用域链`。


## 词法作用域和动态作用域

在这里我们首先需要很确定的指明的是：

:::tip 重要
`JavaScript`中的语法采用的是词法作用域（lexical scoping），也被称为静态作用域。词法作用域和动态作用域的概念并不是`JavaScript`所特有的。
:::

下面我们来了解一下词法作用域和动态作用域：

- `词法作用域`：词法作用域是在词法分析阶段就确定了，之后不会改变。比如在js中，函数在书写时就应经确定好了作用域。

- `动态作用域`：动态作用域是在运行时根据程序的流程信息来动态确定的，而不是在写代码时进行静态确定的。比如在函数执行时才会确定好作用域。

我们来看看下面的代码：

```js
var name = "King";

function fun(){
  console.log(name);
}

function test(){
  var name = "Waring";
  fun()
}
test()
```
上面`console.log(name)` 打印的结果是`King`,而不是`Waring`,这很说明了在`JavaScript`中使用的是`词法作用域`。函数`fun`在创建时就应经确定了作用域，运行时不会再改变。

而假如JavaScript使用的动态作用域，那么上面`console.log(name)` 打印的结果是`Waring`。

我们再来看一个例子:

```js
var a = "global"

function fun(){
  var a = "fun scope";
  function f(){
     console.log(a)
  }
  return f()
}
fun()
```

```js
var a = "global"

function fun(){
  var a = "fun scope";
  function f(){
     console.log(a)
  }
  return f
}
fun()()
```

上面结果都会是`fun scope`, 这也是因为`JavaScript`使用的词法作用域的结果。我们可以打印一个函数，会看到它有一个`[[Scope]]`属性，该属存储着这个函数的父级的变量对象。

```js
function fun(){}
console.dir(fun)
```
打印结果如下图：

![scope](/img/scoep1.png)

## 作用域链

我们知道了`JavaScript`中是使用的词法作用域来确定的作用域。在`JavaScript`中一个函数是可以访问到他父函数的作用域内的变量的。而这种访问机制就是通过作用域链来完成的。

```js
function fun(){
  var a = "fun scope";
  function f(){
     console.log(a) // 可以访问fun函数内的变量
  }
  return f()
}
fun()
```

上面例子，当函数`f`中在查找变量`a`时，会先从函数`f`的活动对象中去查找，如果没有找到会向父级函数`fun`的活动对象中去查找`a`。如果还没有找到将会继续向上查找，查找全局对象中是否有变量`a`。这种层级的变量对象查找就形成了一条链就是作用域链。


### 函数的生命周期

函数分为两个声明周期：创建和激活。

我们来看下面简单的例子：

```js
var str1 = "Hello";
function fun(){
   var str2 = "world";
   console.log(str1 + str2)
}
```

上面的例子我们在全局声明了变量`str1`，并创建了函数`fun`，在程序初始化时他们都将成为全局对象的属性（全局变量对象的属性，全局变量对象等于全局对象）

函数`fun`在被创建时，就创建了作用域，也就是拥有了`[[Scope]]`属性，该属是父级的层级链，并存储了父级上下文中的变量对象

```js
// 伪代码

VO(globalContext) = {
  // 其他属性，对象，函数
  str1:undefined,
  fun:<fun>
}

fun[[Scope]] = {
  0: VO(globalContext) 
}
```

在函数`fun`激活时(执行时)，函数`fun`的活动对象会被创建

```js
// 伪代码

AO(funContext) = {
  arguments:Arguments,
  str2:undefined,
}
```
此时fun的作用域链就会被创建好：

```js
scope(fun) = AO(funContext) + [[Scopes]]

// fun函数的作用域链将会变成下面这样
funContext.scope = [
  AO(funContext),
  VO(globalContext),
]

```
此时`fun`的活动对象将会放到作用域的最前端。这时函数`fun`中的代码开始执行，当代码执行到`str1 + str2` 时，从`scope`中的最前端开始查找变量`str1` 和 变量`str2`，如果找到将会拿到某个变量的值并停止查找，如果未找到，将通过作用域链继续向后去查找。


## 影响作用域的代码

当使用`with`或`catch`时，会修改作用域链。他们会被添加到作用域链的最前端：

```js

var a = 10;

var obj = {
  a:1,
}
with(obj){
  console.log(a) // 1
  var a = 2;
  console.log(a) // 2
}
```

此时作用域链就是这样：

```js
Scope = AO(withContext) +  obj + [[Scope]]
```


关于作用域链的知识，就先汇总到这里。