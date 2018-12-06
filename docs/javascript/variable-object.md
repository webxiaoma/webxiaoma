---
sidebarDepth: 2
meta:
  - name: keywords
    content: JavaScript, js变量对象, 变量对象，深入变量对象
  - name: description
    content: 本文讲述JavaScript中的变量对象，并深入探讨js在运行时变量对象的处理以及作用。
---

# JavaScript之变量对象

---

我们在[JavaScript之执行上下文](/javascript/execution-contexts.html)中已经讨论过`执行上下文`，并且提到在执行代码执行中，`执行上下文`会初始化三个很重要的对象，这里我们讲解其中的一个变量对象。


## 变量对象

`变量对象（Variable object）`对象作为一个对象，我们可以使用伪代码来表示：

```js
// 伪代码
Vo = {}
```
`变量对象（Variable object）`作为执行上下文的一个对象属性，也会因为执行上下文的不同，而有所不同。下面我们来看看`全局上下文中的变量对象`和`函数上下文中的变量对象`。


## 全局上下文中的变量对象

在说`全局上下文中的变量对象`对象之前我们先来确定一下`全局对象`。

:::tip 全局对象

全局对象是预定义的对象，作为`JavaScript`的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象(比如`Math`)、函数(比如`parseInt`)和属性(比如`innerHeight`)。全局对象不是任何对象的属性。

全局对象(Global object) 是在进入任何执行上下文之前就已经创建了的对象；
这个对象只存在一份，它的属性在程序中任何地方都可以访问，全局对象的生命周期终止于程序退出那一刻。
:::

在全局对象中我们可以通过`this`来引用，并且在`DOM`中，全局对象有一个`window`属性也可以应用自身

```js
console.log(this)
console.log(window)
console.log(this === window) // true
```
除了上面提到的属性，函数等等，全局对象还包含很多的属性、函数。在`DOM`中还包含大量的`DOM`的节点信息以及事件。

另外在全局中声明的变量或函数，也会自动添加到全局对象上

```js
var a = 1;
function f(){

}
console.log(window.a)  // 1
console.log(window.f)  // 函数 f
```
在全局中访问全局变量或函数时，我们还可以省略`window`对象，直接访问`console.log(a)`。

> 说了这么多，其实就是想说：**全局对象就是全局上下文中的变量对象**

```js
Vo(globalContext) = global
```

## 函数上下文中的变量对象

函数上下文中的变量对象和全局上下文中的变量对象有所不同。在函数中通常是用`活动对象（activation object）` 来表示`变量对象（Variable object）`，其实他俩是一个东西`VO(functionContext) === AO`，只不过`变量对象（VO）`不能直接访问，并且`活动对象（activation object）` 只有在函数激活（执行）时会产生。其他情况下无法访问`活动对象`。

在进入函数执行上下文时，变量对象会被激活成为活动对象（AO)，在活动对象中为代码的执行做一些初始化，比如变量和函数的提升，初始化`arguments`属性，并为`arguments`赋值为`Arguments`对象。

```js
// 伪代码
AO = {
    var:{}   // 初始化变量
    function:{} // 初始化函数声明
    arguments:Arguments // 初始化arguments 对象
}
```

## 可执行代码执行过程

在`JavaScript`中执行上下文中的代码被分为分两个阶段来执行：

- `进入执行上下文阶段`
- `执行阶段`

下面我们来看看这两个阶段的执行。


### 进入执行上下文阶段

进入执行上下文阶段时，为代码的执行做前期准备，不只是准备`变量对象`，还好处理`作用域链`、`this`，这里我们只讲`变量对象`的处理。在以后的文章中我们会讨论`作用域链`和`this`。

全局环境中，在进入执行上下文时，变量就是全局对象，拥有全局对象的所有属性方法。另外在变量对象中会将`var`声明的变量（ES6中的`let`和`const`不会被提升）存储起来，并赋值为`undefined`, 并且将函数声明提升(函数表达式作为变量处理)。例如下面这段代码

```js
var a = 1;
function f(){}
var cf = function(){}
b = 2;
```

在上面代码在执行前，变量对象会是这样：

```js
// 伪代码
VO(globalContext) = {
    Math,
    Window:global,
    ... // 等等全局属性、函数或对象
    a:undefined, // 变量a被提升，并赋值为undefined
    cf:undefined, // 函数表达式cf 按变量处理
    f:<f> // 函数声明f被提升，并指向函数f
}
```
这是代码在执行阶段前，执行上下文中变量对象所做的一些前期工作。函数执行上下文中的活动对象和全局执行上下文中的变量对象在代码执行前处理大同小异，只是活动对象中的一些属性不同。

```js
function fun(){
    var b = true;
    function text(){}
}
fun()
```

在上面代码在执行前，活动对象会是这样：

```js
// 伪代码
AO(funContext) = {
    arguments:Arguments, // arguments 对象初始化
    b:undefined, // 变量b被提升，并赋值为undefined
    text:<text> // 函数声明text被提升，并指向函数text
}
```

**当变量明和函数名称相同时，变量对象会先提升变量，在提升函数声明，如果名称相同就覆盖变量**

```js
var f = 1;
function f(){}

// 伪代码
VO(globalContext) = {
    f:<f> // 函数声明f被提升，和变量f同名，覆盖变量值
}
```

### 执行阶段

执行代码的前期准备工作完成后，该进入代码的执行阶段了，在这个阶段，主要就是将变量对象中提升的变量进行赋值，我们通过下面例子来看看这是变量对象的变化。

```js
var a = 1;
var f = true;
function f(){}
var cf = function(){}
b = 2;

// 伪代码
VO(globalContext) = {
    Math,
    Window:global,
    ... // 等等全局属性、函数或对象
    a:undefined, // 变量a被提升，并赋值为undefined
    cf:undefined, // 函数表达式cf 按变量处理
    f:<f> // 函数声明f被提升，覆盖同名变量f, 并指向函数f
}
```
上面的代码展示了进入执行上下文阶段时的变量对象。当进入执行阶段后，代码会按触发顺序从上向下去执行可执行代码。

1. 当遇到`var a = 1` 时，变量对象中的`a`的值将不在是`undefined`,将会变为`1`。
2. 当运行到`var f = true` 时,变量对象中的`f`的值将不在是`函数f`,将会变为`ture`。
3. 当运行到`function f(){}` 时,`函数f`并不会在影响变量对象了。
4. 当运行到`var cf = function(){}` 时,`cf`的值将不在是`undefined`,将会指向`函数`。
4. 当运行到`b = 2;` 时,会为全局对象添加`b`属性并赋值为`2`。


通过上面的讲解，我们会很清楚为什么会出现下面这种情况：

```js
console.log(a)  // undefined
console.log(f)  // 函数f

var a = 1;
var f = true;

console.log(a)  // 1
console.log(f)  // true

function f(){}

console.log(f)// true
```


关于执行上下文中变量对象的知识目前先整理到这里。