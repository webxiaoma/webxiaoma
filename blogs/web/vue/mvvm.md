---
meta:
  - name: keywords
    content: 马新想 小马学习 vue 响应式原理
  - name: description
    content: 本章为小马学习专栏——Vue响应式原理
---


# Vue-响应式原理

[[toc]]

:horse:

## 前言

`Vue2.x`已经用来好几年了，这里再次温习一下`Vue2.x`的响应式原理。

- 下面全部代码：[访问这里](https://gitee.com/individual_event/blogs-code/tree/master/vue/vue2.x/mvvm)

## 原理

`Vue2.x`响应式是使用了`Object.defineProperty`劫持数据 + [发布订阅者模式](/designMode/observer.html) 。

`Vue2.x`的响应式大致可以描述成这样：

1. 创建一个观察者`Observer`,在初始化时，将`Vue data`中的数据添加`get`和`set`方法。来实现对数据变化的监听。
2. 实现订阅者`Watcher`, `Watcher`具有更新函数，用来通知更新视图
3. 实现一个订阅器`Dep`，用来存储订阅者。该订阅器具有添加订阅者`addSub`方法和通知订阅者`notify`方法。
4. 实现一个解析器`Complie`，该方法主要作用就是更新视图，将视图节点与数据进行绑定（`Observer`与`Watcher`进行关联）。
5. `Vue`实例的实现，初识化数据，执行各个方法，将`data`数据代理到`Vue`实例上。

当`new Vue()`时，首先初识化`data`中的数据，调用观察者`Observer`，给`data`数据添加`get`和`set`方法。然后将数据代理绑定到`Vue`实例上。

初始化视图时调用`Complie`, 遍历`DOM`元素，根据正则匹配`{{}}`中的数据，替换真正的`data`中的值，并创建订阅者`Watcher`。当读取`data`中的值时，就会调用该值的`get`方法。此时将订阅者添加到订阅器`Dep`中。至此响应式的基础大致过程完成。

## 实现

根据上面提到的流程我们要是实现基础的响应式，需要实现下面方法

 - 观察者`Observer`
 - 订阅者`Watche`
 - 订阅器`Dep`
 - 解析器`Complie`
 - `Vue`构造函数


下面我们简单实现一下上述过程


### 监听器Observer


```js
class Observer{
  // 初始化
  init(data){
    if(!data || typeof data !== 'object'){
       return;
    }
    Object.keys(data).forEach(key=>{
      this.defineReactive(data,key,data[key])
    })
  }
  // 为所有属性添加getter setter 方法
  defineReactive(data,key,val){

    // 递归添加get set
    this.init(data[key])

    const dep = new Dep();
    Object.defineProperty(data,key,{
      enumerable: true, // 可以枚举
      configurable: true, // 可以设置
      set(newValue){
        // 新值和旧值是否相等
        if(val === newValue) return;

        val = newValue;
        dep.notify(); // 通知订阅者，数据有变化

      },
      get(){
        Dep.target && dep.addSub(Dep.target); // 存储订阅者
        return val;
      }
    })
  }
}
```
上面我们实现了监听器`Observer`的主要功能。可以测试一下：

```js
const Obj = {
  a:1,
  b:2
}

const Observer = new Observer();

Observer.init(Obj);
Obj.a;
```



### 订阅者Wathcer

```js
class Watcher{
  // vm vue实例
  // exper vue模板如{{a}} {{obj.b}}
  // callback 更新视图得回调函数，
  constructor(vm,expr,callback){
    this.vm = vm;
    this.expr = expr;
    this.callback = callback;
    this.value = this.getVal();

    return this;
  }  
  
  update(){ // 更新函数
    this.run();
  }
   
  run(){ // 执行
    const value = this.getDataVal();
    const oldValue = this.value;
    if(value !== oldValue){
      this.value = value;
      this.callback.call(this.vm);
    }
  }
  getVal(){
     Dep.target = this;

     // 这里会调用 get 方法，将订阅者添加到 订阅容器中
     const  value = this.getDataVal();
     Dep.target = null;

     return value;
  }
  // 获取data中的值
  getDataVal(){
    const valAry = this.expr.split(".");
    return valAry.reduce((prev,next)=>{
       return prev[next]
    },this.vm.$data)
  }
}
```
订阅者`Watcher`中，`getVal`方法主要的作用是，当`Watcher`创建时，立即读取`data`数据中的数据，调用`getVal`方法，该方法将`Dep.target`变量设置成当前`Watcher`实例, 然后调用`getDataVal`获取`data`中对应得值， 此时会触发所读取值得`get`方法。在`get`方法中判断`Dep.target`存在时，调用订阅器得`addSub`方法，将订阅者添加到订阅器中。下面是订阅器得代码


### 订阅器

订阅器代码很少，但是很重要。

```js
class Dep{
  constructor(){
    this.subs = [] // 用于存储订阅者
  }

  addSub(sub){ // 添加订阅者
    this.subs.push(sub);
  }

  notify(){ // 通知订阅者
    this.subs.forEach(sub=>{
      sub.update();
    })
  }
}
```


### 解析器Compile

解析器`Complie`的主要作用就是解析`Vue`模板，连接视图和数据，为订阅者`Watcher`和观察者 `Observer`搭建一个桥梁。

```js
class Complie{
  constructor(vm,el){
     this.vm = vm;
     this.el = el;
     this.fragment = this.nodeToFragment();
     this.init();
  }

  init(){
    this.complieEle(this.fragment);
    this.el.appendChild(this.fragment);
  }

  // 遍历Dom元素，将其添加到Dom片段中
  nodeToFragment(){ 
    const fragment = document.createDocumentFragment();
    let child = this.el.firstChild;
    while(child){
      fragment.appendChild(child);
      child = this.el.firstChild;
    }

    return fragment;
  }

  // 递归编译元素
  complieEle(el){
     // 获取el 子元素集合
     const childNodesList = el.childNodes;
     const reg = /\{\{([^}]+)\}\}/g;
     
     [...childNodesList].forEach(node=>{
        const text = node.textContent;
        // 判断是否符合{{}}指令
        if(this.isTextNode(node) && reg.test(text)){ // 文本节点
          CompileUtil.text(this.vm,node,text);
        }else if(this.isElementNode(node)){ // 元素节点
          // 获取dom节点所有的属性
          const attrs = node.attributes; 
          Array.from(attrs).forEach(attr=>{
            const attrName = attr.name;
            
            // 判断是否为 v- 指令 如 v-model v-html v-text等
            if(this.isDirective(attrName)){
               const attrVal = attr.value;
               const [,type] = attrName.split("-");
               CompileUtil[type](this.vm,node,attrVal);
            }
          })
       
          // 对子节点进行递归
          if(node.childNodes && node.childNodes.length){
            this.complieEle(node)
          }
        }
        
     })
  }

  // 是否是指令
  isDirective(attr){
     return attr.indexOf("v-") === 0;
  }

  // 处理模板 {{}} 数据
  compileText(node,key){
     const text = this.vm.$data[key];

     // 初始化视图
     this.updateView(node,text);

     // 创建订阅者 并绑定回调函数
     new Watcher(this.vm,key,(value)=>{
       this.updateView(node,value)
     })
  }

  // 更新视图
  updateView(node,value){
    console.log(111,node.textContent)
    // node.textContent = typeof value === 'undefined' ? '' : value;
  }
 

  // 判断是否为文本节点textNode
  isTextNode(node){
   return node.nodeType === 3;
  }

  // 判断是否为元素节点
  isElementNode(node){
    return node.nodeType === 1;
   }

}
```


`Compile`初识化时，将遍历`DOM`节点，使用`createDocumentFragment`创建节点碎片。然后我们通过`complieEle`方法递归遍历元素，将元素中得指令，以及`{{}}`进行解析。解析到`Vue`得响应式数据时创建订阅者`Watcher`，并传入响应得更新回调函数。

另外我们将常用得解析方法封装到了`CompileUtil`中，代码如下：


```js
// 解析器常用方法
const CompileUtil = {
   RegText:/\{\{([^}]+)\}\}/g,
   getVal(vm,expr){
     /**
      * 得到data中对应的数据,exper 可能为 obj.a.b 形式
      * 需要拿到data中的数据
      * {
      *   obj:{
      *      a:{b:1}
      *   }
      * }
      */
     const valAry = expr.split(".");
     return valAry.reduce((prev,next)=>{
        return prev[next]
     },vm)
   },
   setVal(vm,expr,val){
    const valAry = expr.split(".");
    valAry.reduce((prev,next,index)=>{
      if((index + 1) === valAry.length){
        prev[next] = val;
      }
      return prev[next]
    },vm)
   },
  //处理模板 {{}} 数据
   text(vm,node,exper){ // 编译text
     const val = exper.replace(this.RegText,(...arg)=>{
          // arg 为匹配的数据信息数组
          // 创建观察者
          new Watcher(vm,arg[1],()=>{
              const val = exper.replace(this.RegText,(...arg)=>{
                return this.getVal(vm,arg[1]);
              })
            
              this.updater.textUpdater(node,val)
          })

        // 创建订阅者 并绑定回调函数
        return this.getVal(vm,arg[1]);
     })

   
     this.updater.textUpdater(node,val)
   },
   // 处理v-model数据
   model(vm,node,exper){
      const val = this.getVal(vm,exper);
      
      // 创建订阅者
      new Watcher(vm,exper,()=>{
        this.updater.modelUpdater(node,this.getVal(vm,exper))
      })
      this.updater.modelUpdater(node,val)
      this.formChange(vm,node,exper)
   },

   formChange(vm,node,exper){ // 表单input事件
     
     node.addEventListener("input",(e)=>{
       const value = e.target.value;
       this.setVal(vm,exper,value)
       
     })
   },

   updater:{
     textUpdater(node,value){
       node.textContent =  value;
     },
     modelUpdater(node,value){
       node.value = typeof value === 'undefined' ? '' : value;
     }
   }
}
```


### Vue构造函数

```js
class NVue{
  constructor(option){
    const {data} =  option;
    this.option = option;
    this.$data = typeof data === 'object'?data:data();
    this.$el = null;
    this.init()

    return this;
  }
  init(){

    // 初始化数据
    this.initState()

    // 代理数据到vue实例上
    this.proxyData(this.$data)

    // 渲染页面
    this.$el = document.querySelector(this.option.el);
    new Complie(this,this.$el)
  }

  // 初始化数据
  initState(){
    this.initData();
  }

  // 初始化data数据
  initData(){
    const Obs = new Observer();
    Obs.init(this.$data)
  }
  
  /**
   *@msg 代理，将数据绑定到Vue实例上 
   */
  proxyData(data){
    Object.keys(data).forEach(key=>{
      Object.defineProperty(this,key,{
         enumerable: true, // 可以枚举
         configurable: true, // 可以设置
         set(newValue){
           data[key] = newValue
         },
         get(){
            return data[key] 
         }
      })
    })
  }
}
```

### 使用


```html
<body>
  <div id="main">
      <input v-model="a" type="text">
      <h1>hello {{a}} {{obj.b}}</h1>
  </div>
</body>

<script src="./index.js"></script>

<script>
  let main = document.getElementById("main");
    
  const vueObj = new NVue({
    el:"#main",
    data(){
      return {
        a:"小明",
        obj:{
          b:"小红",
        }
      }
    },
  })

  console.log(vueObj)
  setTimeout(()=>{
    vueObj.obj.b = "1111"
  },2000)

</script>
```

## Vue2.X响应式缺点

`Vue2.x`的响应式主要依赖于`Object.definedProprety`实现的。然而`Object.definedProprety`具有一下弊端

- 不支持`IE8`
- 无法监听到对象属性的动态添加和删除
- 无法监听到数组下标和length长度的变化

当然上边问题，`vue2.x` 通过 `$set`方法进行的补充修复

**参考文献**

- [vue的双向绑定原理及实现](https://www.cnblogs.com/canfoo/p/6891868.html)
- [vue模板渲染--compile](https://www.jianshu.com/p/743166a8968c)
- [剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)