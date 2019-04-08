---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: vue  vue-plugins vue插件 插件
  - name: description
    content: 本文章主要讲述如何编写vue插件。
---

# Vue 编写插件

---

<Badge type="tip">vue 版本2.x</Badge>

## 组件和插件

`Vue`中我们常用的就是组件，我们可以把页面中共同的模块拆分成组件来共用，这样我们只需要在使用到的页面中引入就可以，当然也可以在全局中引入，但是有时候我们可能在vue页面中需要使用公用的方法，这是我们就可以封装插件来实现。

**vue的组件和插件大致有以下特点：**

- 组件一般我们用来实现业务模块，组件化我们的视图，实现业务功能；
- 插件件我们一般用来实现功能模块，来增强`vue`本身。如：`vuex vue-rotuer` 都是`vue`插件；
- 插件中可以封装组件


## Vue的全局扩展    

编写`vue`插件时，我们一般会为`vue`添加全局的功能（也就是对`vue`本身的扩展），`vue` 也为我们提供了下面的几种方式来让我们去对`vue`进行扩展:

### 添加全局方法或属性

我们可以在`Vue`上添加全局方法或属性

```js
// 添加一个全局方法
Vue.globalFun = function(){
   console..log("全局方法")
}

// 添加了一个全局属性
Vue.globalStatus = 1;
```

### 扩展vue原型

我们还可以在vue原型上添加全局的方法或属性

```js
// 在vue原型上添加一个全局方法
Vue.prototype.globalFun = function(){
   console..log("全局方法")
}

// 在vue原型上添加了一个全局属性
Vue.prototype.globalStatus = 1;

```

### 添加全局资源

我们还可以为 [vue添加全局资源](https://cn.vuejs.org/v2/guide/custom-directive.html)，比如为`vue`添加自定义的指令

```js
Vue.directive('dblclick',{
     // 当被绑定的元素插入到 DOM 中时
    inserted: function (el,binding) {
        // el 为指令绑定的元素
        // binding是一个对象，详细信息可以访问
        var callback = binding.value;
        el.addEventListener("dblclick",function(){
            callback(el)
        })
    },
    
    // 其它钩子函数

    /*
        update:function(){// 所有组件更新时调用

        },
        bind:function(el, binding, vnode){ // 只调用一次

        },
       
        unbind:function(){ // 只调用一次，指令与元素解绑时调用

        },
        //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        componentUpdated:function(){

        }
    */
})

```

除了添加全局指令外，我们还可以添加全局的[过滤器filters](https://cn.vuejs.org/v2/guide/filters.html) ;

### 使用Minix(混入)方法

在vue中还提供了我们一种[混入的方法](https://cn.vuejs.org/v2/guide/mixins.html) 来扩展`vue`的一些功能，什么是混入，下面是官网的介绍

::: tip 什么是混入
混入 (mixins) 是一种分发 `Vue` 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项
:::

在`vue`中使用混入方法如下：

```js
var minix = {
    data:{
        one:1,
        two:2
    },
    methods:{
        testFun:function(){

        }
    }
}

// 创建一个组件对象，Test,并注入minix
var Test = Vue.extend({
    mixins: [mixin]
})

// 现在组件test中就包含上面我们定义的data数据和methods方法了
var test = new Test
```

另外我们可以全局混入`minix`:

```js
Vue.minix({
    data:{
        one:1,
        two:2,
    },
    methods:{
        testFun:function(){

        }
    }
})
```

全局混入后，我们在每一个组件中都可以访问属性`one`、`two`, 还有方法`testFun`; 另外在混入属性方法或一些钩子函数时，`vue`有自己的一套合并兼容方法(一般，组件属性或方法优先)，具体合并策略这里不多说，[vue官网](https://cn.vuejs.org/v2/guide/mixins.html#自定义选项合并策略)说的已经很清晰。


## 编写插件

上面我们了解了在`vue`中如何将全局添加属性方法并进行扩展，在vue中提供了一个公开的方法`install` 里统一管理我们添加全局的属性方法的方式。在这个方法中，`vue`会自动注入两个参数 ,第一个参数为`vue`构造器，第二个参数是一个可选的选项对象，该对象可以实现对我们编写的插件做一些配置，下面是vue官网的例子：

```js
TestPlugin.install = function(Vue,options){
    // Vue是vue构造器，options是配置对象

    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
        // 逻辑...
        }
        ...
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
        // 逻辑...
        }
        ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }

}
```

上面我们说了，插件中可以包含组件，比如我们写一个提示弹框的插件

我们先写一个弹框组件`Toast.vue`

```vue
<template>
 <div v-show="show">
     <div>{{msg}}<div>
     <div>
         <p  @click="confirm">确定</p>
         <p  @click="cancel">取消</p>
     </div>
 <div>
<template>

<script>
export default{
   data(){
       return {
           msg:"",
           show:false,
       }
   },
   methods:{
       confirm(){
          this.show = false;
          this.confirmCallback()
       },
       cancel(){
          this.show = false;
          this.cancelCallback()
       }
   }
}


</script>
```

我们先写一个包含弹框组件的插件`toast.js`


```js
import Toast from './Toast'


export default {
    install(Vue,options){
        let ToastConstructor = Vue.extend(Toast)
        let toast = new ToastConstructor();
        var div = document.createElement('div') // 挂载点
        toast.$mount(div) // 挂载弹框
      
        document.body.appendChild(div)

        Vue.prototype.$toast =  (obj)=>{
            var obj = Object.assign({
                  msg:'',
                  confirm(){},
                  cancel(){},
            },obj)
            
            toast.msg = obj.msg;
            toast.confirmCallback = obj.confirm;
            toast.cancelCallback = obj.cancel;
            toast.show = true;
        }
       
    }
}
```

## 使用插件

上面的插件编写完成上传npm后，我们就可以在`vue`中使用`vue.use()`来初始化了：

```js
import Toast from 'Toast';

Vue.use(Toast)
```

之后我们就可以在vue项目中使用该插件了

```js
this.Toast({
    msg:"是否退出",
    confirm(){}, // 成功后的回调函数
    cancel(){},  // 失败后的回调函数
})
```

`vue`的插件编写基本就是这个思路，使用`install`函数，你可以编写出像 [elementUI](http://element-cn.eleme.io/#/zh-CN/component/installation)一样的各种组件类插件；