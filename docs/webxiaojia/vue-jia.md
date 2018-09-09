# Vue 日常学习


## vue基础

### 语法

- `v-html` 是什么
- `v-if` 是什么
- `v-show` 是什么
- `v-for` 是什么
- `v-on` 是什么, 缩写`@`
- `v-bind` 是什么, 缩写`:`


### 计算属性和监听器

- `computed` 和 `watch`用法和区别


### class 和 style

- `class`和`style`怎么使用
- 怎么将`class`或`style`变成动态的

### v-if 和 v-show

- `v-if`和`v-show`的区别

### v-for

`v-for` 可以循环组件，主要注意的是要给循环的组件加上唯一的标识`key`，如果`key`值为每个组件的索引，该如何加。


### 事件处理

vue中使用 `v-on` 去声明事件，并且有一些事件修饰符

```js
.stop
.prevent
.capture
.self
.once
.passive
```

还有一些按键修饰符

```js
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```

系统修饰键


```js
.ctrl
.alt
.shift
.meta
```


### 表单绑定v-model

- 表单中使用v-model 原理。

```js
<input type="text" v-model="val"/>

// 等价于
<input type="text" :value="val" @input="val = $event" />
```

- 如何在单选框上使用`v-model`
- 如何在复选框上使用`v-model`
- 如何在下拉框框上使用`v-model`
- `v-model`上的几个修饰符

```js
.lazy
.number
.trim
```


### 组件

- 组件的注册过程（component template）
- 注册分为`全局注册`和`局部注册`
- 组件中数据`data`必须是函数形式
- 组件中的数据通信
::: tip
1. 父组件向子组件通信
2. 子组件向父组件通信(使用`$emit`触发自定义事件，第一个参数自定义事件名，第二个参数是要传给自定义事件的参数)
:::

- 自定义组件上使用`v-model`
- 使用`slot`插槽分发内容


## vue-cli 脚手架

vue-cli 脚手架，其实就是一个用`webpack`工具和一些vue的各种库搭建好的目录，并配置了各种功能。

[vue 菜鸟安装教程](http://www.runoob.com/vue2/vue-install.html)

### 前期环境

- 安装`nodejs`
- 安装`npm` (如果你安装了`nodejs`，那么`npm`就已经自动安装了)

查看`nodejs` 或 `npm` 版本

```js
// 查看node 版本
node -v

//查看npm版本
npm -v
```

将`npm` 换成[淘宝镜像cnpm](https://npm.taobao.org/)

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装脚手架

```js
// 全局安装 vue-cli
cnpm install --global vue-cli
//创建一个基于 webpack 模板的新项目
vue init webpack my-project
//这里需要进行一些配置，默认回车即可
This will install Vue 2.x version of the template.

For Vue 1.x use: vue init webpack#1.0 my-project

? Project name my-project
? Project description A Vue.js project
? Author runoob <test@runoob.com>
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "my-project".

   To get started:
   
     cd my-project
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack
```