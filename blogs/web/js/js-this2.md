---
meta:
  - name: keywords
    content: this, js this, es6 this 马新想
  - name: description
    content: 本文讲述js中的this使用。
---

# JS-This (二)

[[toc]]

:horse: 


## 前言

在[上一篇文章](/web/js/js-this1)中我们从`this`指向的多种情况来认识了一下`this`， 这篇文章中我们从`ECMAScritp` 规范来看看`this` 是如何确定的。

在`JavaScript`中，`this`是一直讨论的东西，并且在每个上下文创建时，`this`就被创建了，另外还有三个重要的属性也会被创建:[变量对象](/web/js/js-variable)、[作用域链](/web/js/js-scope-chain)。最近抽出了部分时间将`JavaScript`中`this`的知识汇总了一下。



[ECMAScript 镜像版规范](https://yanhaijing.com/es5/#about)


## ECMAScript 中的数据类型

在`js`中的数据类型分为语言类型和规范类型：

- **语言类型**
`ECMAScript` 语言类型 是 `ECMAScript` 程序员使用 `ECMAScript` 语言直接操作的值对应的类型。`ECMAScript` 语言类型包括 未定义 （Undefined）、 空值 （Null）、 布尔值（Boolean）、 字符串 （String）、 数值 （Number）、 对象 （Object）。

- **规范类型**

规范类型 是描述 `ECMAScript` 语言构造与 `ECMAScript` 语言类型语意的算法所用的元值对应的类型。规范类型包括 引用(Reference) 、 列表(List) 、 完结(Completion) 、 属性描述式(Property Descriptor) 、 属性标示(Property Identifier)、 词法环境（Lexical Environment）、 环境纪录（Environment Record）。规范类型的值是不一定对应 `ECMAScript` 实现里任何实体的虚拟对象。规范类型可用来描述 `ECMAScript` 表式运算的中途结果，但是这些值不能存成对象的变量或是 `ECMAScript` 语言变量的值。



## 引用类型（Reference） 


:::warning 注意
**该引用类型是规范中的数据类型，并不是javascript实际代码中的引用类型（因为我们常说Object是引用类型，这里的`Reference`并不是指的它）**

- [ECMAScript 规范中的Reference Specification Type的含义?](https://www.zhihu.com/question/31911373)
- [W3C ES5/类型](https://www.w3.org/html/ig/zh/wiki/ES5/%E7%B1%BB%E5%9E%8B#.E5.BC.95.E7.94.A8.E8.A7.84.E8.8C.83.E7.B1.BB.E5.9E.8B)
:::

上面说了`ECMAScript`中的数据类型，其中规范类型中的[引用类型`Reference`](https://yanhaijing.com/es5/#80)和`this`有这亲密的关系。引用类型`Reference` 是规范中的类型，在js中并不存在，只是存在于`ECMAScript`底层。引用类型`Reference`包含有三个重要的属性:   

- 基值（base）：属性所在的环境对象，可以是 `undefined`, `Object`,`Boolean`,`String`,`Number`,  `environment record`中的任意一个，当所处的环境是全局环境(在全局中，或`setTimeout`或`setInterval`)，或执行环境中时值为[environment record](https://yanhaijing.com/es5/#142)
-  引用名称（referenced name）：该引用名称，是一个字符串
-  严格引用标志 (strict reference)：是否是严格模式，`true`为严格模式

例如：

```js
var a = 1;

// a的引用类型Reference， a处于全局环境
AReferenceObj = {
  base:EnvironmentRecord, 
  name:'a',
  strict: false,
}

// 第二种基值为EnvironmentRecord情况 
//f执行时处于函数fun的执行环境中
function fun(){
  function f(){}
  f()
}

fun()
//函数f的引用类型Reference
FReferenceObj = {
  base:EnvironmentRecord, 
  name:'f',
  strict: false,
}

```
在例如：

```js
var obj = {
    fun:function(){

    }
}

// fun对应的Reference是：
var FunReferenceObj = {
    base: obj,
    name: 'fun',
    strict: false
};
```

另外引用类型`Reference`除了拥有三个重要的属性外，还提供了一些方法比如：

- `GetBase(V)`。 返回引用值 `V` 的基值, base的值。
- `GetReferencedName(V)`。 返回引用值 `V` 的引用名称。
- `IsStrictReference(V)`。 返回引用值 `V` 的严格引用。
- `HasPrimitiveBase(V)`。 如果基值是 `Boolean`, `String`, `Number`，那么返回 `true`。
- `IsPropertyReference(V)`。 如果基值是个对象或 `HasPrimitiveBase(V)` 是 `true`，那么返回 `true`；否则返回 `false`。
- `IsUnresolvableReference(V)`。 如果基值是 `undefined` 那么返回 `true`，否则返回 `false`。


### GetValue

另外`ECMAScript` 还提提供了一个[GetValue(v)](https://yanhaijing.com/es5/#81) 方法，它的作用就是获取`Reference`中的具体值。**当使用`GetValue(v)`方法时，返回的是具体值，不在是一个引用类型`Reference`** 例如：

```js
var a = 1;

// a的引用类型Reference
AReferenceObj = {
  base:EnvironmentRecord, // 全局对象
  name:'a',
  strict: false,
}
GetValue(AReferenceObj)  // 返回值为1 ，1可不再是引用类型
```
<!-- 该方法会在一些情况下被调用,如： -->


## 函数中This的确定

### 函数执行中的规范

在`ECMAScript` 规范中，[函数的调用](https://yanhaijing.com/es5/#164)解释了`this`是如何确定的

>1. 令 `ref` 为解释执行 `MemberExpression` 的结果
>
> ...
> 
> 6. 如果 `Type(ref)` 为 `Reference`，那么 如果 `IsPropertyReference(ref)` 为 `true`，那么 令 `thisValue` 为 `GetBase(ref)`. 否则 , `ref` 的基值是一个环境记录项 令 `thisValue` 为调用 `GetBase(ref)` 的 `ImplicitThisValue` 具体方法的结果
> 7. 否则 , 假如 `Type(ref)` 不是 `Reference`. 令 `thisValue` 为 `undefined`.
返回调用 `func` 的 [[Call]] 内置方法的结果 , 传入 `thisValue` 作为 `this` 值和列表 `argList` 作为参数列表

上面函数调用时确定`this`的值说清楚点就是：

1. 将`MemberExpression`解析后的结果赋值给`ref` ([MemberExpression](https://yanhaijing.com/es5/#161)就是函数调用时括号左边的部分，如：`foo`()中的`MemberExpression`为`foo`)
2. 使用`Type(ref)`判断`ref`是不是`Reference`类型，判断时有如下几种情况
- 如果 `ref` 是 引用类型`Reference`，并且 基值是否是对象（`IsPropertyReference(ref)` 是 `true`), 那么 `this` 的值为 基值`GetBase(ref)`
- 如果 `ref` 是 引用类型`Reference`，并且 `base value` 值是 `Environment Record`, 那么`this`的值为 `ImplicitThisValue(ref)`（js中为`window`）
- 如果 `ref` 不是 引用类型`Reference`，那么 `this` 的值为 `undefined`,(js中严格模式下为`undefined`,非严格模式下为`window`,可以通过`IsStrictReference(ref)`来确定是否是严格模式)


上面我们说了函数调用时[MemberExpression](https://yanhaijing.com/es5/#161)就是括号左边的，如：

```js
function f(){} 

f() // MemberExpression 为f

var obj = {
  fun:function(){}
}
obj.fun() // MemberExpression 为obj.fun

function fun(){
  return function(){}
}
fun()()// MemberExpression 为fun()

obj['funName']()// MemberExpression 为obj['funName']
```

第二步我们很重要的就是需要判断`ref` 是否是引用类型，一般`ref`是引用类型的情况有两种：

- 函数标示符
- 属性访问器（点`.`属性访问器或中括号`[]`属性访问器）


### 实际例子

下面我们来使用实际列子看看函数调用时`this`的值是如何确定的

```js
var foo = {
  bar: function () {
    alert(this);
  }
};

function fun(){
  console.log(this)
}
foo.bar(); // 例子1
(foo.bar)(); // 例子2
(foo.bar = foo.bar)(); // 例子3
(false || foo.bar)(); // 例子4
(foo.bar, foo.bar)(); // 例子5
fun() // 例子6
```

1. `foo.bar()`在执行时，`MemberExpression`为`foo.bar`, 并将`MemberExpression`赋值给了`ref`；然后通过`Type(ref)`判断`foo.bar`是不是引用类型，因为`foo.bar`是属性访问器形式，所以`foo.bar`是引用类型; 然后判断基值是否是对象`IsPropertyReference(ref)`, `foo.bar`是对象所以`this`确定为`foo`对象(通过`GetBase(ref)`获取 `this = GetBase(ref)`)

2. `(foo.bar)()`在执行时`()`并没有使用`GetValue`对`MemberExpression`进行处理，所以`MemberExpression`为`foo.bar`, 接下来的情况和例一就一样了。

3. `(foo.bar = foo.bar)()`在执行时，在左边括号中`foo.bar = foo.bar`因为使用了赋值运算`=`，此时调用了`GetValue` 方法，将`foo.bar`最终的值不在是引用类型（上面说了调用`GetValue`方法返回的是具体值，不在是一个引用类型`Reference`）, 所以`this`为`undefined`，之后还会通过`IsStrictReference(V)`判断是否在严格模式下，如果不是`this`为`undefined`时，`this`将隐士转换为全局对象`window` 或 `global`

4. `(false || foo.bar)()`在执行时，逻辑运算符也会调用`GetValue` 方法，所以最终`this`结果和例三一样

5. `(foo.bar, foo.bar)()`在执行时，逗号运算符也会调用`GetValue` 方法，所以最终`this`结果和例三一样

6. `fun()`在执行时，因为`fun`是一个标识符所以`ref`会是引用类型；但是引用类型的基值是`EnvironmentRecord`，它并不是一个对象，通过`IsPropertyReference(ref)`判断返回`false`，此时`this`值为`ImplicitThisValue(ref)`,`ImplicitThisValue(ref)`函数通常会返回`undefined`（[声明式环境](https://yanhaijing.com/es5/#128),[对象式环境](https://yanhaijing.com/es5/#137)）；之后还会通过`IsStrictReference(V)`判断是否在严格模式下，如果不是`this`为`undefined`时，`this`将隐士转换为全局对象`window` 或 `global`



## 构造函数中的This

在构造函数中`this`还是很好确定的，在构造函数中`this`永远指向通过构造函数创建的对象。

```js
function people(){
  this.name = "king";
  this.age = 52
}

var one = new People()
var two = new People()
```
上面在构造函数中的`this`会指向通过`new`创建出来的对象。第一种情况下`people`中的`this`指向 `one`对象，第二种情况下`people`中的`this`指向 `two`对象

:::tip tom大叔
针对上面的构造函数`new`运算符调用`people`函数的内部的`[[Construct]]` 方法，接着，在对象创建后，调用内部的`[[Call]]` 方法。 所有相同的函数`people`都将`this`的值设置为新创建的对象。
:::



## 改变This指向的方式

在`js`我们可以使用`call`、`apply`、`bind`、方法可以来改变`this`的指向的。下面我们来看看着几个方法的使用。

### call 方法

`call`方法可以执行一个函数，并改变一个函数中`this`的指向,`call`方法中有多个参数，第一个参数是`this`指向对象，后面的参数就是调用函数时传入的参数。

```js
var obj = {
  name: "King",
  age:23
}

var name = "global";

function fun(age,sum){
  console.log(this.name)
  console.log(age,sum)
}

fun.call(obj,50,30) //King; 50 30
```

我们会发现通过`call`调用函数`fun`后，`fun`函数内部的`this`指向了对象`obj`,并且传入了两个参数`50 30`。

### apply 方法

`apply`方法也是可以执行一个函数，并改变一个函数中`this`的指向，和`call`方法不同的是，`apply`方法的第二个参数传入的是一个数组。

```js
var obj = {
  name: "King",
  age:23
}

var name = "global";
function fun(age,sum){
  console.log(this.name)
  console.log(age,sum)
}

fun.call(obj,[50,30]) //King; 50 30
```

### bind 方法

`js`中`bind`方法可以给函数中`this`绑定一个固定的对象，并返回一个新函数

```js
var obj = {
    name: "King",
    age:23
}

var name = "global";

function fun(age,sum,a){
   console.log(this.name)
}

var newFun = fun.bind(obj)
newFun() //King
setTimeout(newFun,2000) // King
```

通过例子我们可以看到，通过`bind`方法处理后，返回的新函数中的`this`永远都会指向同一个对象，而不会随着函数的调用方式不同而改变。




## DOM事件中This


`DOM`事件中绑定的函数中的`this`指向触发该事件的`DOM`元素，这点毋庸置疑。

::: danger DOM事件中This
关于`DOM`事件中`This` 虽然知道指向触发该事件的`DOM`元素，但是在`ECMAScript`规范中是如何实现的，我目前不太确定，希望知道的同学可以提供一下帮助。
:::



**参考链接：**

- [This? Yes,this!](https://www.cnblogs.com/TomXu/archive/2012/01/17/2310479.html)
- [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)