---
meta:
  - name: keywords
    content: 马新想 小马学习 vue 响应式原理
  - name: description
    content: 本章为小马学习专栏——Vue响应式原理
---


# Vue3-初识

[[toc]]

:horse:

## 前言


## 创建实例

`Vue2.0`创建实例

## 组合式API

`V3`中新增了组合式API`。官方文档可以查看这里[组合式API](https://vue3js.cn/docs/zh/api/composition-api.html)


### Setup

在组合式`API`中`setup`作为入口函数，组合式的API都要在该函数中使用。

```js
export default {
  data() {
    return {}
  },
  setup(props,context) {
    
  }
}
```
关于`setup`函数我们需要知道：

- `setup`函数中不能使用`this`。
- 在`setup`函数中有两个参数`props`和`context`。`props`接收父组件传输过来的`props`, `context`下面方法。

```js
export default {
  props: {
    msg: String,
  },
  setup(props,context) {
    log("props",props.msg) // 获取props值

    // 和V2不同，这里无法访问this。
    // 可以通过context触发 $emit事件
    context.$emit("emitFun",11)
  }
}
```

## 响应式API

`V3`中新增一些响应式的`API`。官方文档可以查看这里[响应式API](https://vue3js.cn/docs/zh/api/basic-reactivity.html#reactive)


### ref和reactive数据

在`setup`中使用数据可以用`ref`和`reactive`

- `ref` 创建单个响应式数据，在`setup`中修改访问需要通过`value`属性
- `reactive` 创建对象响应式数据

```vue
<template>
  <h1>{{ name }}</h1>
  <h1>{{ book.title }}</h1>
  <h1>{{ book.size }}</h1>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup(props,context) {
    const name = ref("测试");
    const book = reactive({ title: 'Vue3', size:10 })

  
    name.value = "练习"; // 通过value属性修改name

    return {
      name,
      book
    }
  },
}
</script>
```

### Readonly只读

`readonly`可以设置数据只读。使用方式如下：

```js
import { readonly, reactive } from 'vue'
export default {
  setup(props,context) {
    const book = reactive({ title: 'Vue3' })
    const bookReadonly = readonly(book);

    setTimeout(()=>{
      // 可以设置成功，但是控制台会出现警告
      // Set operation on key "title" failed: target is readonly
      bookReadonly.title = "aaa"
    },2000)

  }
}

```

### toRef 和 toRefs

- `toRef` 可以将`reactive`对象的某个属性创建一个单独的`ref`

```js
import {toRef,reactive,} from 'vue'
export default {
 setup(){
   const book = reactive({ title: 'Vue3', size:10 });
   const size = toRef(book,"size");
   size.value++;
   console.log(book.size) // 11
   console.log(size.value) // 11
 }
}
```
- `toRefs` 可以将响应式对象转换为普通对象

```vue
<template>
  <h1>{{title }}</h1>
  <h1>{{size }}</h1>
</template>

<script>
  import {toRefs,reactive,} from 'vue'
  export default {
  setup(){
    const book = reactive({ title: 'Vue3', size:10 });
    const bookCopy = toRefs(book);

    return {
      ...book
    }
  }
}
</script>
```

### computed计算属性

在`setup`中使用`computed`。当`computed`中只有`getter`时，值不能修改。

```vue
<template>
  <h1>{{story}}</h1>
  <h1>{{css}}</h1>
</template>

<script>
  import {
    reactive,
    computed
  } from 'vue'
  export default {
  setup(){
    const book = reactive({ title: 'Vue3', size:10 });
    // computed中只传getter时，默认不可修改ref
    const story = computed(()=> book.title)


    //  控制台报警告 computed value is readonly
    story.value = "js" 
    

    // computed中只传gette 和setter
    const css = computed({
      get:()=>{
        return book.title;
      },
      set:(value)=>{
        book.title = value;
      }
    })

    css.value = "css" // 可以修改

    return {
      story,
      css
    }
  }
}
</script>
```





### watchEffect监听器




## 生命周期

在`V3`的`setup`中可以使用函数生命周期。和`V2`的生命周期相比有些改动。


|说明|Vue2.x|Vue3.x setup hook|
|:---:|:---:|:---:|
|创建前|`beforeCreate`|`setup`|
|创建后|`created`|`setup`|
|DOM载入前|`beforeMount`|`onBeforeMount`|
|DOM载入后|`mounted`|`onMounted`|
|更新前|`beforeUpdate`|`onBeforeUpdate`|
|更新后|`updated`|`onUpdated`|
|销毁前|`beforeDestroy`|`onBeforeUnmount`|
|销毁后|`destroyed`|`onUnmounted`|
|报错时|`errorCaptured`|`onErrorCaptured`|
|状态触发|`errorCaptured`|`onErrorCaptured`|
|状态跟踪|-|`onRenderTracked`|
|状态触发|-|`onRenderTriggered`|


**`setup`的执行要比`beforeCreate`执行要早**。使用方法如下

```js
import { onBeforeMount,onMounted} from 'vue'
export default {
  setup(props,context) {
    onBeforeMount(()=>{
      // ...
    })
    onMounted(()=>{
      // ...
    })
  }
}
```
`onRenderTracked`周期和`onRenderTriggered`周期是`V3`新增加的。

- `onRenderTracked`周期函数会跟踪`setup`中`reutrn`的值，只要更新数据，就会触发该函数, 同过参数返回所有`reutrn`的值(不管其它值有没有变化)
- `onRenderTriggered`周期函数会跟踪`setup`中`reutrn`的单个值，只要更新数据，就会触发该函数，通过参数返回变化的值的对象信息。

```js
import { onRenderTracked,onRenderTriggered,ref, reactive } from 'vue';
export default {
  setup(props,context) {
    const name = ref("测试");
    const book = reactive({ title: 'Vue 3 Guide' })
    onRenderTracked((event)=>{
      // 当 name 变化时，event会返回 name 和 book
      console.log(event) // 
    })
    onRenderTriggered((event)=>{
       // 当 name 变化时，event会返回 name 
      console.log(event)
    })
    return {
      name,
      book
    }
  }
}
```

