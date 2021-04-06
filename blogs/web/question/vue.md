---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 Vue vue面试题 面试题
  - name: description
    content: 本章为小马学习——Vue常见得面试题
---

# Vue2.x常见面试题

[[toc]]

:horse:

## 对MVVM的理解

`MVVM`分为`Model`、`View`、`ViewModel`三者。

- `Model`：代表数据模型，数据和业务逻辑都在`Model`层中定义；
- `View`：代表UI视图，负责数据的展示；
- `ViewModel`：负责监听`Model`中数据的改变并且控制视图的更新，处理用户交互操作；
       
`Model`和`View`并无直接关联，而是通过`ViewModel`来进行联系的，`Model`和`ViewModel`之间有着双向数据绑定的联系。因此当`Model`中的数据改变时会触发`View`层的刷新，`View`中由于用户交互操作而改变的数据也会在`Model`中同步。

这种模式实现了`Model`和`View`的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作`dom`。

## vue的生命周期

- `beforeCreate` 在这个生命周期，`vue`事件和生命周期开始初始化，但是数据还没有初始化
- `created` 这个生命周期中`vue`数据初始化完成，可以访问`data`中的数据，一般在该生命周期进行`http`数据请求
- `beforeMount` 这个生命周期中`vue`首次调用`render`函数，生成了虚拟`dom`,但是还没有真实`dom`
- `mounted` 这个生命周期真实`DOM`以及生成，可以在该生命周期做一些`DOM`操作
- `beforeUpdate` 该生命周期是在数据有更新时，会被执行
- `updated` 该生命周期是在组件更新完成（重新渲染`DOM`）后被调用
- `beforeDestroy` 该生命周期是在组件被销毁前调用，在该周期还可以访问实例数据。
- `destroyed` 该生命周期是在组件被销毁后调用。

<images src="https://cn.vuejs.org/images/lifecycle.png"  width="250"/>


## vue的常用指令有那些

`v-html`,`v-text`,`v-bind`,`v-model`,`v-on`,`v-for`,`v-show`,`v-if`

## v-if 和 v-show的区别

`v-if` 和 `v-show`都可以控制`DOM`元素的显示和隐藏，不同的是：

- `v-if` 显示隐藏是通过控制`DOM`节点的显示隐藏来实现的
- `v-show`  显示隐藏是通过控制`CSS`的`display`属性实现的

所以`v-if`在性能上的开销要比`v-show`大。同时如果是组件`v-if`的显示隐藏也会重新触发组件中的生命周期（重新渲染）。

当我们需要大量的显示隐藏操作时，尽可能的使用`v-show`


## 绑定class的数组用法

## v-on可以监听多个方法么

## vue事件中如何使用event对象


## vue中的数据传递


## params和query的区别


## keep-alive的作用


## $refs的作用

## vue中为什么使用key


## $nextTick的作用


## 开发组件如何自定义v-model


## computed和watch的使用


## vue中双向数据绑定是如何实现的



## $router和$route的区别


## vue-router导航钩子函数

## 在vue中多页面如何共享数据



## vuex是什么，什么时候使用