---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack4, webpack4构建vue, vue,vue搭建，
  - name: description
    content: 本文主要讲述使用webpack搭建基础vue架构，以及如何使用webpack4来编译vue。
---

# 使用 Vue

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/vue)

---

`Vue` 目前对于前端来说在熟悉不过了，我们在这里简单的练习一下使用`webpack4`编译`Vue`的过程。

## 前期准备

编译`vue`之前我们需要做一些前期准备，首先我们需要搭建[ES6的编译环境](/webpack/处理ES6.html)，其次我们需要[处理css](/webpack/处理css.html#编译css)

## 安装处理

因为使用`vue`来写项目，所以我们安装`vue`

```js
npm i -S vue
```
另外我们使用`vue`模板去写项目时需要用到[Vue Loader v15](https://vue-loader.vuejs.org/zh/)，另外我们还有用到[vue-template-compiler](https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-template-compiler)

让我们安装

```js
npm i -D vue-loader vue-template-compiler
```
在`vue-loader v15`中除了配置`vue-loader`我们还要使用 [vueLoaderPlugin插件](https://vue-loader.vuejs.org/zh/guide/#vue-cli),现在让我们配置

```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
`VueLoaderPlugin` 这个插件的职责是将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `<script>` 块。

接下来我们要配置`wepback`来识别`.vue`文件，不然我们在使用`import App from 'App'` 时不会自动寻找`App.vue`文件
```js
resolve:{
  extensions: ['.js','.vue','.json'],
},
```

需要注意的是我们还要在`resolve`中加入这句话[原因见这里](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)

```js
resolve:{
  extensions: ['.js','.vue','.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js', // 加入这句话
  }
},
```

现在我们就可以按照vue模板的形式来编写代码了。
```vue
<template>
    <div class="divWrap"></div>
</template>
<script>
export default {
    data(){
        return {}
    },
    created(){},
    methods:{}
}
</script>
<style scoped>
.divWrap{}
</style>
```

## 使用JSX

我们上面是使用的vue模板去进行开发的，不能使用`vue`的[JSX语法](https://cn.vuejs.org/v2/guide/render-function.html)，如果想要使用`vue`的`jsx`语法，我们还需要安装一些插件来支持。下面三个插件时使用`vue JSX`语法时的必要插件

```js
npm i -D babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx 
```
- [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) 该插件允许使用`jsx`语法来书写`vue`。安装该插件后需要在`.babelrc.`中进行配置：
```js
{
    "presets": [ "env"],
    "plugins":[
        "transform-runtime",
        "transform-vue-jsx" // 使用vue jsx语法
    ]
}
```
:::warning 注意
对于 babel-plugin-transform-vue-jsx 插件
- 如果使用Babel 7，使用4.x
- 如果使用Babel 6，使用3.x
:::


- [babel-helper-vue-jsx-merge-props](https://github.com/vuejs/babel-helper-vue-jsx-merge-props) 用于`vue jsx`解析的`babel`助手
- [abel-plugin-syntax-jsx](https://babel.bootcss.com/docs/plugins/syntax-jsx/) 这个插件允许`Babel`解析`JSX`

安装完成后我们就可以使用类似下面的JSX语法了

```js
import Vue from 'vue'
Vue.component('test-jsx',{
    render(){
        return (
            <button onClick={this.msgFun}>点击</button>
        )
    },
    methods:{
        msgFun(){
            console.log(this)
            alert('jsx语法')
        }
    }
   
})
export default {
    render (h) { 
        return (
            <div id="foo">
               <h1> 测试JSX语法</h1>
               <div>
                   <test-jsx></test-jsx>
               </div>
            </div>
        )
    }
}
```























