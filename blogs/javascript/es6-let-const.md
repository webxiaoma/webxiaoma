---
sidebarDepth: 2
meta:
  - name: keywords
    content: ES6, let, const, ES6 马新想
  - name: description
    content: 本文讲述ES6中let 和 const的区别用法，以及babel编译的结果
---

# ES6之Let与Const

在`ES5`中声明变量可以使用`var`，但是在`ES6`中声明变量的方式又增加到了两种`let` 和 `const`, 对于这两种声明方式，目前很多人应该已经很熟悉了，我们在这里还是简单的来看看。

## Let 与 Const 的特点


### 1. let的特点：

- 不存在变量提升

```js
console.log(b) // undefined
console.log(a) // 报错

let a = 1;
var b = 2;
```

- 具有块级作用域

```js
{
  var a = 1;
  let b = 2;
}

console.log(a) // 1
console.log(b) // 报错
```

- 不能重复声明

```js
var a = 1;
var a = "hello";
console.log(a) // "hello"

let b = 2;
let b = "world"; // 报错 
```
- 全局声明时不会绑定全局上

```js
var a = 1;
let b = 2;

console.log(window.a) // 1
console.log(window.b) // undefined
```

### 2. const的特点：

`const` 具有`let`上述的所有特性，除了上面与`let`相同的特点外还具有下面特点：

- 声明之后必须赋值

```js
const a; // 报错，a 必须赋值
```

- 赋值后，值不能在被修改

```js
const a = 1;
a = "hello"; // 报错，赋值后不可以再次修改

// let 和 var声明 可以

let b = 2;
b = 'world' 
console.log(b) // world
```


## Let 的 babel 编译

`let` 声明的变量具有块级作用域，`babel`是如何编译的呢

```js
var a = 2;
if(true){
  let a = 1;
  console.log(a)
}
console.log(a)
```
上面代码会被`babel`编译成：

```js
"use strict";

var a = 2;
if (true) {
  var _a = 1;
  console.log(_a);
}
console.log(a);
```

我们发现`let` 被编译成了`var`, `let`声明的变量在块级作用域中都加上了`_`，来实现的块级作用域。

在面试闭包问题时我们经常会谈论到下面一个面试题：

```js
var funAry = [];

for(var i = 0; i<3; i++){
  funAry[i] = function(){
    console.log(i)
  }
}

funAry[0]() // 3
funAry[1]() // 3
funAry[2]() // 3
```
如果我们想要执行数组中每个函数时，输出对应的`index`,该如何实现，这里我们通常会使用闭包。

```js
var funAry = [];

for(var i = 0; i<3; i++){
  funAry[i]  = (function(i){
    return function(){
      console.log(i)
    }
  })(i)
}

funAry[0]() // 0
funAry[1]() // 1
funAry[2]() // 2
```

现在有了`let` 我们很容易实现上面的效果：

```js
var funAry = [];

for(let i = 0; i<3; i++){
   funAry[i] = function(){
    console.log(i)
   }
}

funAry[0]() // 0
funAry[1]() // 1
funAry[2]() // 2
```

我们来看看，这种方式下`babel`是如何编译的：

```js
"use strict";

var funAry = [];
var _loop = function _loop(i) {
  funAry[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 3; i++) {
  _loop(i);
}

funAry[0](); // 0
funAry[1](); // 1
funAry[2](); // 2
```

我们会发现`babel`编译时，又重新声明了一个函数，在for循环时调用这个函数，并传入变量`i`，也是使用了闭包。

:::tip 提示

`let`在`for`循环中实现了上面的效果，其实时因为`let`在`for`循环的括号中创建了一个隐藏的作用域，每次`for`循环时，都会使用当前括号中`let`声明的变量，这几个作用域之间不会发生冲突。例如：

```js
// 伪代码
(let i = 0){
   funAry[0] = function () {
     console.log(i);
   };
}

(let i = 1){
   funAry[1] = function () {
     console.log(i);
   };
}

(let i = 2){
    funAry[2] = function () {
     console.log(i);
   };
}
```
:::

## Const 的 babel 编译

`babel`对于`const`的编译和`let`基本相同：

```js
var a = 2
{
  const  a = 1;
}

console.log(a)
```

会被编译成：

```js
"use strict";
var a = 2;
{
  var _a = 1;
}
console.log(a);
```

对于`const` 声明后必须赋值，以及赋值后不能在更改则是在编译时去检测的，如果检测到会直接抛出错误。


对于`let`和`const`的知识先汇总到这里
