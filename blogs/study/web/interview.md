---
meta:
  - name: keywords
    content: 马新想 小马学习 
  - name: description
    content: 本章为小马学习专栏
isLogin: true
sidebarDepth: 1
---


# 面试题


:horse:


## 临时

- [前端 100 问](https://juejin.cn/post/6844903885488783374)
- [算法面试题](https://github.com/sisterAn/JavaScript-Algorithms)
- [面试题](https://github.com/mqyqingfeng/frontend-interview-question-and-answer/issues/47)
- [大前端面试宝典 - 图解前端](https://lucifer.ren/fe-interview/#/?id=%e4%b8%bb%e9%a2%98)

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

### Vue2.x

- Vue - 对MVVM的理解 [答案一](https://www.jianshu.com/p/e1ef29c0d826)
- Vue - 谈谈你对SPA的理解，以及优缺点 [答案一](https://www.jianshu.com/p/a4c071dab40a)
- Vue - vue的优缺点 [答案一](https://github.com/haizlin/fe-interview/issues/224)
- Vue - vue的生命周期已经该周期的一些操作 [答案一](https://www.jianshu.com/p/672e967e201c)
- Vue - vue子父组件渲染顺序（生命周期顺序） 
  - [答案一](https://blog.csdn.net/sd19871122/article/details/106060791)
  - [答案二](https://www.cnblogs.com/thinheader/p/9462125.html)
- Vue - v-if 和 v-show的区别 [答案一](https://www.jb51.net/article/168984.htm)
- Vue - 绑定class的几种方式（三种） [答案一](https://www.jb51.net/article/202786.htm)
- Vue - vue有那些指令 [答案一](https://blog.csdn.net/weixin_45757427/article/details/104468978)
- Vue - v-on可以监听多个方法么 [答案一](https://blog.csdn.net/weixin_40013817/article/details/103069487)
- Vue - vue自定义指令 [答案一](https://cn.vues.org/v2/guide/custom-directive.html)
- Vue - $refs的作用 [答案一](https://www.cnblogs.com/theblogs/p/10742137.html)
- Vue - vue中v-for和v-if避免同时使用，如何化解 [答案一](https://blog.csdn.net/yzhean/article/details/109990975)
- Vue - vue中组件的数据传递 [答案一](https://segmentfault.com/a/1190000019208626)
- Vue - keep-alive的作用 [答案一](https://www.jb51.net/article/179487.htm)
- Vue - $nextTick的作用 [答案一](https://blog.csdn.net/sinat_17775997/article/details/71638144)
- Vue - 开发组件如何自定义v-model [答案一](https://www.cnblogs.com/lhuser/p/11269546.html)
- Vue - vue如何绑定原生事件 [答案一](https://segmentfault.com/a/1190000018120443)
- Vue - vue强制更新场景($forceUpdate) [答案一](https://www.cnblogs.com/caoruichun/p/10769242.html)
- Vue - vue插槽slot用法以及作用域 [答案一](https://www.cnblogs.com/aidixie/p/10637795.html)
- Vue - computed和watch的区别与应用 [答案一](https://blog.csdn.net/lhban108/article/details/82465547)
- Vue - 简单说一下vue中双向数据绑定 [答案一](https://www.cnblogs.com/webcabana/p/11077628.html)
- Vue - params和query的区别 [答案一](https://www.jb51.net/article/163764.htm)
- Vue - 在vue中多页面如何共享数据 [答案一](https://blog.csdn.net/a117616/article/details/88940778)
- Vue - vue如何开发插件 [答案一](https://cn.vuejs.org/v2/guide/plugins.html)
- Vue - vue中mixin是做什么的 [答案一](https://cn.vuejs.org/v2/guide/mixins.html)
- Vue - vue如何加载异步组件 [答案一](https://blog.csdn.net/qq_42049445/article/details/100153641)
- Vue - vue递归组件实现 [答案一](https://blog.csdn.net/weixin_41819731/article/details/105470035)
- Vue - vue是如何检测倒数组变化的 [答案一](https://zhuanlan.zhihu.com/p/173963853)
- Vue - vue中父组件可以监听子组件生命周期么（hook） [答案一](https://www.tensweets.com/article/5e032df8362e5434baf63394)

---

- Vue - $router和$route的区别 [答案一](https://www.cnblogs.com/xzybk/p/12535615.html)
- Vue - VueRouter的几个模式区别 [答案一](https://segmentfault.com/a/1190000039692879?utm_source=tag-newest)
- Vue - vuex是什么，什么时候使用 [答案一](https://www.cnblogs.com/kaicy/p/14722736.html)

--- 

- Vue - vue组件渲染过程 [答案一](https://segmentfault.com/a/1190000022054221)
- Vue - Vue双向绑定原理 [答案一](https://webxiaoma-ten.vercel.app/web/vue/mvvm.html)
- Vue - Vue-Computed实现原理 [答案一](https://webxiaoma-ten.vercel.app/web/vue/computed.html)
- Vue - Diff算法原理 
  - [答案一](https://www.cnblogs.com/wind-lanyan/p/9061684.html)
  - [答案二](https://github.com/sl1673495/blogs/issues/39)
- Vue - vuex的实现原理 [答案一](https://juejin.cn/post/6877067579672756237#heading-0)
- Vue - vueRouter的实现原理 
  - [答案一](https://www.cnblogs.com/tiedaweishao/p/9144531.html)




<!-- - Vue -  [答案一]()
- Vue -  [答案一]()
- Vue -  [答案一]()
- Vue -  [答案一]() -->




## 设计模式




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
