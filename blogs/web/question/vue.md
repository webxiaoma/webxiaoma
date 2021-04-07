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

```vue
<template>
  <!--数组语法--> 
  <div :class="[calssOne,classTwo]"></div>

   <!--对象语法--> 
  <div :class="classObj"></div>
</template>

<script>
 export default{
    data(){
       return {
         classOne:"classOne",
         classTwo:"classTwo",
       }
    },
    computed:{
      classObj(){
        return {
          class1:true,
          class2:true,
          class3:false,
        }
      }
    }
 }
</script>
```

## v-on可以监听多个方法么

`v-on`可以监听多个方法
```vue
<button v-on="{mouseenter: onEnter,mouseleave: onLeave}">鼠标滑进移出</button>
```

## vue事件中如何使用event对象

```vue
<template>
 <div @click="clickBtn($event)"></div>
</template>

<script>
  clickBtn($e){
    console.log($e)
  }
</script>
```

## vue中的数据传递

- 父组件向子组件传递

父组件通过`v-bind`绑定数据，子组件通过`props`接收

```vue
<!--父组件-->
<children :dataObj="{name:'test'}"></children>

<!--子组件-->
<script>
export default {
  props:{
    dataObj:{
      type: Object
    }
  }
}
</script>
```

- 子组件向父组件传递

子组件通过`$emit`触发父组件中自定义事件，通过参数来传递数据

```vue
<!--父组件-->
<template>
  <children @getFun="testFun"></children>
</template>

<script>
testFun(data){
  console.log(data) // data 为 1
}
</script>

<!--子组件-->
<script>
export default {
  methods:{
    pushParentData(){
      this.$emit("getFun",1)
    }
  }
}
</script>
```

- 其它组件间传递

其它组件间传递可以通过两个组件最近的祖辈组件作为桥梁进行数据传递

使用`vuex`进行数据共享

或者使用一个公共的`vue`实例来共享数据

## keep-alive的作用

`<keep-alive>`是`vue`内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`DOM`,`keep-alive`是用在一个直属子组件被开关的情形，同时只有一个子组件在渲染，若有`v-for`则不会工作

`keep-alive`中常用的属性

- `include` 字符串或正则表达式，只有名称匹配的组件会被缓存
- `exclude` 字符串或正则表达式，名称匹配的组件不会被缓存
- `max`  数字，最多可以缓存多少组件实例

匹配首先检查组件自身的`name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配。

```vue
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```

被`keep-alive`包裹的组件会有下面两个生命周期

- `activated` 组件显示时会触发
- `deactivated` 离开该组件时会触发


## $refs的作用

在`vue`中我们获取`dom`元素或组件的实例可以通过`$refs` 来获取

```vue
<template>
  <div ref="divRef"></div>
  <component ref="comRef">组件</component>
</template>

<script>
this.$refs.divRef // 获取div dom 元素
this.$refs.comRef // 获取component 组件实例
</script>
```

## vue中为什么使用key

`key`具有唯一性, 以便它能跟踪每个节点的身份，在`diff`算法执行时更快的找到对应的节点，提高`diff`速度，使`vue`更快的渲染

## $nextTick的作用

`Vue` 实现响应式并不是数据发生变化之后 `DOM` 立即变化，而是按一定的策略（异步更新队列）进行 `DOM` 的更新。所以有时候我们想在数据修改后，立即对`DOM`状态做些什么，可能会有些棘手。所以`vue`提供了一个`$nextTick`方法，该方法会在组件的`dom`更新后会被触发。

```js
this.$nextTick(()=>{
  // 做一些DOM操作
})
```
## 开发组件如何自定义v-model

`v-model`其实是一个语法糖

```js
<input v-model="searchText">

// 等价于
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

当给一个组件使用`v-model`时：

```vue
<template>
<com-input
  v-model"searchText"
/>

<!--等价于-->
<com-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
/>
</template>
```

在`com-input`组件内部，会自动接收`value`属性

```vue
<template>
  <div>
    <input :value="value" @input="change($event)" />
  </div>
</template>

<script>
 export default{
   props:["value"], // 组件内部自动结束value
   methods:{
     change(e){
       this.$emit('input',e.target.value) 
     }
   }
 }
<script>
```

另外组件内部还可以修改接收的数据`value`，和自定义事件`input`的名字

```js
model: {
  prop: 'checked',
  event: 'change'
},
props: {
    checked: Boolean
},
```

## computed和watch的使用


## vue中双向数据绑定是如何实现的



## $router和$route的区别

- `$router` 是路由操作对象，拥有`push()`,`replace()`,`go()`,`push()`等方法以及信息
- `$route` 是当前激活的路由信息对象，里边存储着`path`,`name`,`query`,`params`,`meta`等信息

## params和query的区别

`params` 和 `query` 都是传参用的

- `params` 是只用命名路由`name`引入，参数不会显示在页面上（地址栏上）
- `query` 可以通过`path`路径方式也可以通过`name`引入，参数会显示到地址栏上

```js
// 路由
{
  path:"/about",
  name:"About",
  component:()=>import("@/views/about.vue")
}
```

传参方式：

```js
// params
this.$router.push({
  name:"About", // 必须使用name
  params:{
    id:1,
  }
})

// query
this.$router.push({
  path:"/about", // 也可以使用name，但一般使用path
  query:{
    id:1,
  }
})
```

接收方式

```js
// params
this.$route.params;

// query
this.$route.query;
```


## vue-router导航钩子函数


## 在vue中多页面如何共享数据



## vuex是什么，什么时候使用