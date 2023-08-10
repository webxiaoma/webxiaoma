---
meta:
  - name: keywords
    content: 马新想 小马学习 算法 算法前言
  - name: description
    content: 本章为小马学习专栏 —— 算法 

floatSilder: true
---


# 知识点


## css

## JavaScript

### 基础类型

- es5: `Number`,`Boolean`,`Null`,`undefined`,`String`,

- es6: `Symbol`,`BigInt`


### 数据集

- es5: `Object`,`Function`,`Array`
- es6: `Map`,`weekmap`,`Set`,`weekset`

### 原型和原型链

不规范的标准

- 原型: `ptototype`
- 原型链：`__proto__`

例子：

```js
function A(){}; // 构造函数
var obj = new A(); // new 出实例对象

//  实例对象 obj 是没有原型的
console.log(obj.prototype) // undefined


/**
 * 查找 obj.a 
 */

obj.__proto__ === A.prototype  // true
A.prototype.__proto__ === Object.prototype // true
```

### 作用域和作用域链

例如：一个函数a 里边 有变量函数 b, 在函数b中访问变量 c  在执行的时候会按下面顺序执行：

```js
function a() {
  var c = 1;

  return function b() {
    console.log(c);
  };
}
```

1. 首先在函数b中寻找变量c,如果没有找到进入2
2. 在函数a中寻找变量c, 如果没找到，继续进入全局查找


**JS采用的是静态作用域**

```js
// 静态作用域
function foo() {
    console.log(a);
}
function der() {
    var a = 3;
    foo();
}
var a = 2;
der();  // js中打印的是 2
```

```js
// 动态作用域
function foo() {
    console.log(a);
}
function der() {
    var a = 3;
    foo();
}
var a = 2;
der();  // 在动态作用域中打印的是 3
```


### 闭包

例如：一个函数a 里边 有函数 b, 当函数b访问函数a里边的变量（自由变量）时，函数a和函数b就会形成闭包作用域。

```js
function a() {
  var c = 1;
  return function b() {
    console.log(c);
    console.dir(b);
  };
}
const f = a();

f();
```

- 优点：生成闭包，可以防止某些需要用到的变量被销毁
- 缺点：过多的使用，会造成内存泄露


### 变量

|名称|说明|相同点|区别|
|:---:|:---:|:---:|:---:|
|`var`|声明变量|声明变量|没有块级概念（变量提升）|
|`let`|声明块级变量|声明变量|有块级作用域|
|`const`|声明常量|声明变量|有块级作用域 并且 声明的值不能改变（对于js基础数据）|

- 变量提升

```js
   /**
    *  var a = undefined;
    *  function a(){}
    **/
    
    console.log(a); // f:a
    var a = 1;
    console.log(a); // 1
    function a() {}
    console.log(a); // 1
    var a = function () {};
    console.log(a); // a
```

**函数声明** 的提升 优先级 要比 var声明的变量 **优先级高**
 
- 函数两种形式
  - 函数声明：`function a(){}` 会有变量提升
  - 函数表达式：
    - `var a = function(){}`
    - `function(){}` 匿名函数式特殊的函数表达式
    - `!function(){}`
    - `+function(){}`

### This



### Event Loop



## Vue


## 打包工具


