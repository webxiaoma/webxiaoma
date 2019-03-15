---
sidebarDepth: 2
meta:
  - name: keywords
    content: redux react-redux 状态管理
  - name: description
    content: 本文章主要记录react的状态管理，redux的使用。
---

# Redux 状态管理

---

## 什么是Redux

[Redux](http://cn.redux.js.org)就是一个`JavaScript`框架状，它并不是`react`特有的, 它解决了在`react`组件之间传递数据的复杂性。如果你了解`vue`的`vuex`那么你也会很容易理解`redux`, 它可以将数据整合到一起，使用一个对象来管理整个项目的数据。


## Redux的三大原则

对于`Redux`我们只需要记住

1. 单一数据源

> 整个应用的 `state` 被储存在一棵` object tree` 中，并且这个 `object tree` 只存在于唯一一个 `store` 中。也就是`store`就是一个对象，存储着我们项目的整个数据。

2. `State` 是只读的

> 唯一改变 `state` 的方法就是触发 `action`，`action` 是一个用于描述已发生事件的普通对象。下面会列举

3. 使用纯函数来执行修改

> 为了描述 `action` 如何改变 `state tree`，你需要编写 `reducers`。 `reduces`就是一个纯函数，它里边不包含一些异步操作（比如不能发送请求，不能出现`setTimeout`等定时器）


## Redux的常见概念

### Store

`Store`是我们存储数的地方，它是一个对象，存储这我们整个项目的数据，它的整个职责：

- 存储整个项目的数据（将项目的数据整合到一个到的对象中）
- 使用 `createStore()`来创建`Store`；
- 具有 `getState()` 方法，来获取 `state`；
- 具有 `dispatch(action)` 方法发起`action`,来更新 `state`；
- 通过 `subscribe(listener)` 注册监听器；
- 通过 `subscribe(listener)` 返回的函数注销监听器。

我们可以这样使用`Store`

```js
import { createStore } from 'redux'
let store = createStore(reducers)
```
`createStore` 具有第二个参数，可以设置初始`Store`的初始状态

### Action

`Action`就是一个对象，它描述了发生了什么事件，`action`并没有修改数据，只是携带或通知了我们要修过数据的信息，我们在修改`Store`中的`state`数据时，只能通过`dispatch()`发起`action` 来修改，这是唯一改变 `state` 的方法。在`action`对象中，会有一个`type`属性来描述`action`，

```js
{
    type:'ADD_LIST',
}
```

对于其它字段，我们可以自行添加，不过建议使用如下的形式来规范我们的`action`
```js
{
    type:'ADD_LIST',
    payload:{},
}
```
`payload` 字段一般会携带我们要传输（或修改）的数据

另外在`action`中还有一个概念，叫`action创建函数`,`action创建函数`其实就是一个返回`action`的函数，没有任何特别之处

```js
function actionFun(obj){
    return {
        type:'ADD_LIST',
        payload:obj,
    }
}
```

### Reducer

我们知道了`actoin`会携带我们要修改的数据，并且可以通过`Store`的`dispatch`方法发起`action`，当发起`action`后，并不会直接改变`Store`中的数据，而是还要经过`Reducer`处理后，来通知`Store`来更新数据。所以`Reducer`的做用就是更新数据

`Reducer`可以捕捉到全局发起的`action`,拿到`action`的信息和数据，来和自己进行对比，如过匹配就会更新数据`State`并返回一个新的`state`对象，否则的话原样返回`state`对象。例如：

```js
function reducer(state={test:111},action){
   switch(action.type){
       case "ONE":
         return Objcet.assign({},state,action.payload)
       case:'TWO':
         return Objcet.assign({},state,{
             list:action.payload.list
         }) 
       default:
         return state

   }
}
```
当我们发起当我们发起如下`action`时，`reducer`会接收到,匹配到`action`中的`type`为`ONE`,就会返回`Objcet.assign({},state,action.payload)`一个更新后的`state`对象
```js
function action(type,obj){
    return {
        type:type,
        payload:obj
    }
}

Store.dispatch(action("ONE",{test:222}))
```

当我们在写整个项目的`Reducer`时，可能会很庞大，所以我们可以将`Reducer`进行拆分，拆分成更多的更小的`reducer`,并且可以放到不同的文件中，拆分的方法如下：

```js
// 第一个reducer
function reducerOne(state,action){
   switch(action.type){
       case "ONE":
         return Objcet.assign({},state,action.payload)
       default:
         return state

   }
}

// 第二个reducer
function reducerTwo(state,action){
   switch(action.type){
       case "TWO":
         return Objcet.assign({},state,action.payload)
       default:
         return state

   }
}

// 将两个reducer合并成一个reducer
function reducer(state,action){
   return {
       reducerOne:reducerOne(state.reducerOne,action),
       reducerTwo:reducerTwo(state.reducerTwo,action),
   }
}
```

上面的方法我们可以不必手动去操作，因为`redux`已经为我们做了这些了，`redux`库中提供了`combineReducers()`工具函数,可以合并我们的`Reducer`

```js
import {combineReducers} from 'redux'

var reducer = combineReducers({
    reducerOne,
    reducerTwo,
})
```

### 数据流动

在讨论数据流动之前我们需要将，`Store`、`Action`、`Reducer`联系起来。我们在使用`dispatch`发起`action`后, `Reducer`是如何接收到`Action`的呢，这是的桥梁还是`Store`,我们在创建`Store`后会把`Reducer`注入到`Store`中。

```js
import { createStore } from 'redux'
import allReducers from './reducers'
let store = createStore(allReducers)
```


发起`action`时，所有的`reducer`回接收到`action`，然后去进行匹配，当匹配成功后`reducer`将会更新`state`,更新完成后`Store`会触发`subscribe()`监听函数
 
```
      
页面 ----> 触发dispath(action) ----> Store(reducer) ----> 触发所有`subscribe()`监听函数
```

![]()


## 结合React



## 异步处理






## 实践





- [Redux中文网](https://www.redux.org.cn)