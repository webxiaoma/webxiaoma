---
meta:
  - name: keywords
    content: 马新想 小马学习 vue 计算属性 computed
  - name: description
    content: 本章为小马学习专栏——Vue计算属性computed原理
---


# Vue-Computed实现原理

[[toc]]

:horse:

## 前言

`computed`的实现是在`vue`响应式基础上实现的，所以需要对`Vue`的响应式有一定的了解。`Vue`响应式实现可以[看这里](/web/vue/mvvm)

- 下面全部代码：[访问这里](https://gitee.com/individual_event/blogs-code/tree/master/vue/vue2.x/computed)

## 原理

`Computed`初始化 是在初始化`data`数据后进行的。它的大致过程如下：

- 遍历`computed`数据，然后为每一个数据创建一个`Watcher`订阅者。
- 判断`computed`的值是属性还是对象，将`computed`属性添加到`Vue`实例上。





## 实现



**参考文献**  

- [浅谈Vue中计算属性computed的实现原理](https://segmentfault.com/a/1190000016368913)
- [Vue 的计算属性如何实现缓存？（原理深入揭秘）](https://blog.csdn.net/weixin_42098339/article/details/105525589)