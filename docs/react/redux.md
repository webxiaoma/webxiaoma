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
当我们发起如下`action`时，`reducer`会接收到,匹配到`action`中的`type`为`ONE`,就会返回`Objcet.assign({},state,action.payload)`一个更新后的`state`对象
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
页面 ----> 触发dispath(action) ----> Store(reducer) ----> 触发所有subscribe()监听函数
```
## 结合React

`redux`并不是为`react`所开发，`Redux` 支持 `React`、`Angular`、`jQuery` 甚至纯 `JavaScript`。在react中为了更好的使用`redux`，社区提供了一个`react`绑定库[react-redux](https://github.com/reduxjs/react-redux)


`react-redux`是基于容器组件和展示组件来关联`redux`和`react`的, 所谓的容器组件，就是我们指展示页面，没有处理数据的组件；而容器组件直接链接了`redux`,来渲染处理数据。[容器组件和展示组件的对比](https://www.redux.org.cn/docs/basics/UsageWithReact.html)

| | 展示组件 | 容器组件 |
|---|---|---|
|作用 | 描述如何展现（骨架、样式） | 描述如何运行（数据获取、状态更新） |
|直接使用 Redux | 否	 | 是 |
|数据来源 | props | 监听 Redux state |
|数据修改 | 从 props 调用回调函数 | 向 Redux 派发 actions |
|调用方式 | 手动| 通常由 React Redux 生成  |


`react-redux` 为我们提供了一些便利的方法和组件例如：

- `<Provider></Provider>`组件,我们可以将`store`传入该组件，该组件会将数据分发到每个被 `connect()` 包装的组件中（俗称容器组件）
- `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`方法链接了`react`和`redux` 的`store`

这两个API的具体使用[可以看这里](http://cn.redux.js.org/docs/react-redux/api.html)



## 中间件与异步处理

在同步中，`redux`通过`dispatch`发出`action`后，`reducer`会立即处理`state`;而在异步中`dispatch`发出`action`后，我们想要的是等待请求完成拿到数据后，`reducer`在去处理`state`，这时我们就需要用到中间件。

### 中间件

为了解决上面的问题，我们可以对`store.dispatch()`进行改造，在`dispatch`发送`action`之后，到`reducer`之前我们可以搞一些事情，比如我们做一个在发送`action`之前，打印一下日志，在发送之后，也打印一下日志的功能，我们可以对`store.dispaatch()`进行如下改造

1. 方法一： 封装`dispatch`

```js
function packDispatch(store,action){
    console.log("action发送之前")
    store.dispatch(action)
    console.log("action发送之后")
}
```
下来我们可以使用`packDispatch()`来替代`dispatch`,这是最简单的改造，但是我们一般不会这么去做。

2. 方法二： 先存储`store.dispatch`,然后在直接修改`store`的`dispatch`，我们把它放到一个函数里

```js
function logger(store,action){
    let preDispatch = store.dispatch;
    store.dispatch = function (action) {
        console.log('action发送之前');
        preDispatch(action);
        console.log('action发送之后');
    }
}
```

上面这种方式就是中间的雏形，另外在`redux`中，提供了一个`applyMiddleware`方法，该方法让我们可以向`redux`中添加很多中间件，然后组织中间件依次执行,它的用法如下

```js
import { applyMiddleware, createStore } from 'redux';
import logger from 'logger';

const store = createStore(
  reducer,
  applyMiddleware(logger,中间件二,中间件三,...)
);
```

使用这个方法后，我们可以这样编写我们的中间件（使用柯里化函数），

```js
const logger = store => preDispatch => action =>{
    console.log('action发送之前')
    preDispatch(action)
    console.log('action发送之后')
}
```
上面的写法等同于下面`ES5`的写法：

```js
function logger(store){
   return function(preDispatch){
        return function(action){ 
            console.log('action发送之前')
            let result = preDispatch(action)
            console.log('action发送之后')

            return result;
        }
   }
}
```

像这些传参，赋值的事情就统一交给了`applyMiddleware`去做，`applyMiddleware`就类似于下面的代码，去处理我们的中间件：

```js
// 伪代码，并不是applyMiddleware的源码，这里只是为了说明applyMiddleware是如何处理我们的中间件的
function applyMiddleware(store,middlewares){
    var dispatch = store.dispatch; // 存储上一个dispatch
    
    middlewares.forEach(middleware =>
       dispatch = middleware(store)(dispatch) // 改写dispatch
    )
    return Object.assign({}, store, { dispatch:preDispatch })
}
```
我们可以发现将中间件传入`applyMiddleware()`中后，`applyMiddleware`会为我们注入`store`,还有注入`dispatch`，这样我们可以链式的包装原来的`dispatch`了。

关于`applyMiddleware`的源码，我们在这里不做主要分析；



### 异步处理

`redux`在处理同步操作时，发出一种`action`即可，在处理异步时，需要发出三种`action`:

:::tip 异步三种action
- 一种通知 reducer 请求开始的 action。
 
- 一种通知 reducer 请求成功的 action。

- 一种通知 reducer 请求失败的 action。
:::

例如下面发出三种`action`

为了方便，我们如何在请求前，发出一种action通知请求后，如何在操作结束时，自动送出其他 `Action` 呢,这时候我们就想到，如果将上面发送请求方法放到一个函数中，然后`dispatch()`可以派发一个函数多好。就像下面这样

```js
function jsonReq(url){
   return dispatch => {
        dispatch({type:"START"})
        fetch(url).then(res=>{
            dispatch({type:"SUCCESS",payload:res.data})
        }).catch(err=>{
            dispatch({type:"ERROR",payload:res.data})
        })
   }
}

dispatch(jsonReq("/url/api"))
```

以前`dispatch()`是只能传入`action`或`action`创建函数的，`action`创建函数现在返回的也是一个对象，现在我们返回的是一个函数，为了实现让`dispatch`接收一个返回函数，我们就需要用到中间件了，使用中间件`redux-thunk`就解决了我们的问题；使用`redux-thunk`后，`dispatch`就可以接收一个返回函数，`redux-thunk`的使用方式如下：

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```

既然我们可以通过中间件，让`dispatch`接收一个返回函数，那么我们也可以让`dispatch`接收其他类型的函数或对象，如接收`promise`，这是就要用到[redux-promise](https://github.com/redux-utilities/redux-promise)中间件


**除了上面提到的中间件，还有更多的中间件：**


- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)

- [redux-observable](https://github.com/redux-observable/redux-observable)

- [redux-saga](https://github.com/redux-saga/redux-saga)

- [redux-pack](https://github.com/lelandrichardson/redux-pack)

- [redux-promise](https://github.com/redux-utilities/redux-promise)

- [redux-thunk](https://github.com/reduxjs/redux-thunk)

