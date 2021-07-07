---
meta:
  - name: keywords
    content: 马新想 小马学习 
  - name: description
    content: 本章为小马学习专栏
isLogin: true
---


# 前端面试题


:horse:


## 临时

- [前端 100 问](https://juejin.cn/post/6844903885488783374)
- [算法面试题](https://github.com/sisterAn/JavaScript-Algorithms)

## CSS


## HTML

## JavaScript

### ['1', '2', '3'].map(parseInt) what & why ? 

- [查看](https://blog.csdn.net/weixin_44135121/article/details/88050214)

### 什么是防抖和节流？有什么区别？如何实现？

- [查看](https://blog.csdn.net/zuorishu/article/details/93630578)


### 异步笔试题

下面代码运行结果 

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

- [查看](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)


## ES6

### ES5/ES6 的继承除了写法以外还有什么区别？

- [查看](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20)


### promise实现原理以及其它面试题

- [ES6 - promise实现原理](https://juejin.cn/post/6844903831881400333)
- [ES6 - promise的all和race实现原理](https://juejin.cn/post/6844903831881400333#heading-9)
- [ES6 - promise如何中止链式调用问题](https://juejin.cn/post/6844903831881400333#heading-7)
- [ES6 - Promise.resolve()与new Promise(r => r(v))的不同之处](https://segmentfault.com/a/1190000020980101)




## 概念问题



## 原生方法实现题




## Vue篇

### Vue

- Vue - []()


## 设计模式



## 算法

### 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

- [文章一](https://developer.51cto.com/art/202004/614590.htm)
- [文章二](https://blog.csdn.net/guoqiankunmiss/article/details/108132552)

### 扁平化数组（手写）

已知如下数组：

```js
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
```

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

- []()