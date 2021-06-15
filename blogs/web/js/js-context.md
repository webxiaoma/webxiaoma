---
meta:
  - name: keywords
    content: js上下文  js执行上下文 作用域 上下文
  - name: description
    content: 本文讲述使用js中的执行上下文概念。
---

# JS-执行上下文


[[toc]]

:horse: 


## 生命周期


在`ECMAScript` 中当进入可执行代码（executable code）时，会进入一个叫做执行上下文（Execution context ）的环境。在该环境中为代码的执行做了一些前期准备。执行上下文主要分为`创建阶段` 和 `执行阶段` 两个阶段

### 创建阶段

在创建阶段主要做了   

- 生成变量对象 （创建`arguments`, 检索函数声明，检索变量声明）
- 建立作用域链
- 确定`this`的指向

### 执行阶段

在执行阶段主要做了   


- 变量赋值
- 函数的引用
- 执行其它代码


<images  src="/web/js/context1.jpg" width="700"/>


## 可执行代码类型

在`javascript`中可执行代码有三种：

- `全局代码`
- `函数代码`
- `evel`代码

 当js引擎遇到这些代码时，就会创建一个执行上下文，并为这些代码的执行做一些前期的准备工作，比如 变量提升，函数提升，`this`确定等等，这些我们会在后面的文章中去介绍。


## 执行上下文栈

在`javascript`可执行的代码会有很多，那么所产生的执行上下文相应的也会有很多，而`js`是则会通过`执行上下文栈（Execution context stack）` 来管理这些`执行上下文`。


### 全局执行代码

我们可以将执行上下文栈当做一个数组来看，并且全局代码中的执行上下文永远会在执行上下文栈的最底部：

```js
// 伪代码

ECStack = [ // 执行上下文栈
   globalContext  // 全局执行上下文
]
```

### 函数执行代码

当`javascript`遇到函数执行的代码时，也会创建一个执行上下文并推入执行上下文的堆栈中, 并将当前指针执行推入的执行上下文

```js
function fun(){
    console.log("执行")
    return false
}
fun() // 执行时才会创建执行上下文

// 伪代码
ECStack.push(<fun> functionContext)

// ECStack 将变成下面这样
ECStack = [ 
   <fun> functionContext, <-- pointer
   globalContext,  
]
```
上面例子当函数`fun`内部遇到 `return` 或执行结束后, 执行上下文栈中将会清楚`fun`函数的执行上下文，并将指针指向下面的执行上下文`globalContext`


我们在来看下面这个例子

```js
// 案例一
function fun(){
    function f(){
    }
    return f()
}
fun()

// 案例二
function fun(){
    function f(){
    }
    return f
}
fun()()

// 案例三
function fun(){
    function f(){
    }
    return f
}
var newFun = fun()
newFun()
```
我们现在来分析一下这几个例子中执行上下文是如何放入执行上下问栈中的。


**案例一：**

```js
function fun(){
    function f(){
    }
    return f()
}
fun()

// 伪代码

// 进入全局代码环境时
ECStack = [
   globalContext  // 全局执行上下文
]
// fun 函数执行时
ECStack.push(<fun> funContext)

// 在fun函数中的f() 执行时
ECStack.push(<f> fContext)

// 此时ECStack 
ECStack = [
     <f> fContex,  // f执行上下文
     <fun> funContext, // fun执行上下文
     globalContext,  // 全局执行上下文
]

// 函数f执行完成后
ECStack.pop(<f> fContext)

// 函数fun执行完成后
ECStack.pop(<fun> funContext)

// 此时ECStack 
ECStack = [
     globalContext,  // 全局执行上下文
]

当全局代码执行完成后，执行上下文栈中将是空的。
ECStack = []
```


**案例二：**

```js
function fun(){
    function f(){
    }
    return f
}
fun()()

// 伪代码

// 进入全局代码环境时
ECStack = [
   globalContext  // 全局执行上下文
]
// fun 函数执行时
ECStack.push(<fun> funContext)

// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了
ECStack.pop(<fun> funContext)

// 此时ECStack 
ECStack = [
     globalContext,  // 全局执行上下文
]

// fun函数执行完成后返回了函数f并执行函数f
ECStack.push(<f> fContext)

// 此时ECStack 
ECStack = [
     <f> fContext,  // f执行上下文
     globalContext,  // 全局执行上下文
]

// 函数f执行完成后
ECStack.pop(<f> fContext)

当全局代码执行完成后，执行上下文栈中将是空的。
ECStack = []
```



**案例三：**

```js
function fun(){
    function f(){
    }
    return f
}
var newFun = fun()
newFun()

// 伪代码

// 进入全局代码环境时
ECStack = [
   globalContext  // 全局执行上下文
]
// fun 函数执行时
ECStack.push(<fun> funContext)

// 因为函数f在fun函数中并没有执行，而是返回了，fun执行结束了
ECStack.pop(<fun> funContext)

// 此时ECStack 
ECStack = [
     globalContext,  // 全局执行上下文
]

// fun函数执行完成后返回了函数f并赋值给了newFun函数
ECStack.push(<newFun> newFunContext)

// 此时ECStack 
ECStack = [
     <newFun> newFunContext,  // f执行上下文
     globalContext,  // 全局执行上下文
]

// 函数newFun执行完成后
ECStack.pop(<newFun> newFunContext)

当全局代码执行完成后，执行上下文栈中将是空的。
ECStack = []
```


## 执行上下文中三个对象

上面我们说了在JavaScript执行一段可执行的代码时会创建一个执行上下文，为代码的执行做一些前期准备。这个执行上下文具有三个很重要的对象：

- [变量对象(Variable object，VO)](/web/js/js-variable)
- [作用域链(Scope chain)](/web/js/js-scope-chain)
- [this 对象](/web/js/js-this1)

关于这三个对象在接下来的文章中我们去详细的讨论。


---

**参考文章**

- [JavaScript 执行上下文](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#javascript_%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87)
- [执行上下文](http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html)
- [理解JavaScript的执行上下文](https://zhuanlan.zhihu.com/p/72959191)
- [JS 执行上下文](https://www.jianshu.com/p/6f8556b10379)