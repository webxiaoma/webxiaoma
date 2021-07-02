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

- **下面全部代码**：[访问这里](https://gitee.com/individual_event/blogs-code/tree/master/vue/vue2.x/computed)

## 原理

`Computed`初始化 是在初始化`data`数据后进行的。它的大致过程（结合代码理解）如下：

- 遍历`computed`数据，然后为每一个数据创建一个数据`Watcher`订阅者，该`Watcher`订阅者携带`computed`标识（以及`dirty`惰性读取数据标识,`layz`懒加载标识），并在该`Watcher`中创建一个订阅器`Dep`用来存储订阅者(这里主要存储视图订阅者)
- 判断`computed`的值是属性还是对象，设置`computed`属性的`get`和`set`方法，并将将`computed`属性添加到`Vue`实例上。
- 当编译模板时，匹配到使用到的`computed`的属性，此时会初识化一个视图（渲染）订阅者`Watcher`, 当初始化时就会调用`getVal()`读取一次属性值，此时就会将渲染`Watcher`存入到`Watcher`栈中(`Utils.targetStack`), 并设置`Dep.target`的值为渲染`Watcher`。 现在`Utils.targetStack`的值类似：`[RenderWatcher]`。`Dep.target`值为`RenderWatcher`。

- 然后再`getVal()`中会继续往下走会调用`getDataVal()`方法。再该方法中会读取模板中对应的属性值。（比如读取`computed`中的属性值）会触发该`computed`属性的`get`方法。

- 在`get`方法中，首先会调用`watcher.depend()`。该方法的主要作用就是将渲染`Watcher`存储到了数据`Watcher`中的`Dep`订阅器中。（这里略微绕）此时`Computed`的数据`Watcher`与渲染`Watcher`进行了依赖。

- 然后继续执行`watcher.evalvate()`方法，来获取`Computed`属性的返回值。此时`dirty`值为`true`, 又一次调用了`getVal()`方法。将此时的`Computed`数据的订阅者`Watcher`推入到`Utils.targetStack`栈中，并将`Dep.target`的值设置为**computed数据订阅者`Wather`**。

此时 

1. `Utils.targetStack` = `[RenderWatcher,ComputedWathcer]`
2. `Dep.target = ComputedWathcer`

- 当我们获取`Computed`的属性值时，（如果监听了`data`中的属性）又会触发其监听的`data`中数据的`get`方法。此时会调用`dep.depend()`, 将`ComputedWathcer`添加到了`DataWatcher`中的`Dep`订阅器中。现在就完成了`data`中的数据与`computed`数据的依赖绑定。


- 获取到`getVal()`的值后，将`ComputedWathcer`从`Utils.targetStack`删除，`Dep.target` 设置为`RenderWatcher`,  随后`watcher.evalvate()`方法继续执行，设置好了`ComputedWathcer`的 `value`值,`dirty`设置为`false`。

- 然后`RenderWatcher`中获取到`getDataVal()`的值。`RenderWatcher`出栈，`Dep.target`值设置为`null`。最后将模板中的属性替换为真正的值。


## 实现


### Dep订阅器

```js
class Dep{
  static target = null;
  constructor(){
    this.subs = []

  }

  addSub(sub){ // 添加订阅者
    this.subs.push(sub);
  }

  notify(){ // 通知订阅者
    this.subs.forEach(sub=>{
      sub.update();
    })
  }

  // computed
  depend(){
    if(Dep.target){
      Dep.target.addDep(this);
    }
  }
}
```

### Utils公共方法

```js
const Utils = {
  targetStack:[], // watch站
  pushTarget(watcher){
     this.targetStack.push(watcher);
     Dep.target = watcher;
  },
  popTarget(){
    if(this.targetStack.length > 0)
     this.targetStack.pop();
     Dep.target = this.targetStack[this.targetStack.length - 1] || null;
  },
}
```
### 观察者Observe

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
        dep.depend();
        return val;
      }
     
    })

  }
}
```

### 订阅者Watcher 

```js
class Watcher{

  constructor(vm,expr,callback,options){
    this.vm = vm;
    this.expr = expr;
    this.callback = callback;

    this.value = null;
    this.dep = null;

    if(options){
      const {computed,dirty,layz,getter} = options;
      this.computed = !!computed; 
      this.dirty = !!dirty;
      this.dirty = !!layz;
      this.getter = getter;
    }

    if(this.computed){
      this.dep = new Dep()
      this.value = undefined;
    }else{
      this.value = this.getVal();
    }
    return this;
  }  

  update(){ // 更新函数
    if(this.computed){
       if(this.dep.subs.length === 0){ // 没有订阅者
          this.dirty = true; // 初始化 dirty 为 true
       }else{
          // computedWatcher 里的 订阅者
          const newValue = this.getComputedVal();

          if(newValue !== this.value){ // 判断值是否变化
            this.value = newValue;
            this.dirty = true;
            this.dep.notify();
          }
       }
    }else{
      this.run();
    }
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
     Utils.pushTarget(this);
     let value;
     try{
       if(this.computed){
         // 这里调用计算属性computed 里的get方法（或函数） 
         value = this.getComputedVal();
       }else{
         // 这里会调用 get 方法，将订阅者添加到 订阅容器中
         value = this.getDataVal();

       }
     }catch(e){
        // 错误处理
     }finally{
        Utils.popTarget(this);
     }

     return value;
  }
  // 获取data或computed中的值，
  // 此时data和computed的值已经绑定到了vue实例上边了，
  getDataVal(){
    const valAry = this.expr.split(".");
    return valAry.reduce((prev,next)=>{
       return prev[next]
    },this.vm)
  }
  // 获取computed 的值
  getComputedVal(){
    if(this.getter){
      return this.getter.call(this.vm);
    }
  }
  // computed 使用到的方法
  depend(){
    if(this.dep && Dep.target){
      this.dep.depend()
    }
  }

  evalvate(){
    // dirty 表示脏数据 
    // 来控制是否重新求值
    // 这就是计算属性中的缓存概念
    if(this.dirty){
      this.value = this.getVal();
      this.dirty = false;
    }
    return this.value;
  }

  addDep(dep){ // dep 为 Observe 中的订阅器容器dep
    dep.addSub(this);
  }
}
```


### 解析器Complie

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

  // 编译元素
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


### 解析器常用方法

```js
const CompileUtil = {
   RegText:/\{\{([^}]+)\}\}/g,
   getVal(vm,expr){
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
          // 创建订阅者 渲染Watcher renderWatcheer
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

### 计算属性Computed

```js
class Computed{
  
  constructor(vm,computed){
    this.vm = vm;

    this.init(vm,computed);
  }

  init(vm,computed){
    // 创建一个watchers 对象 用来存储 watcher 订阅者
    const watchers = this._computedWatchers = Object.create(null);

    // 遍历computed里的属性
    for(const key in computed){
       const userDef = computed[key];
       
       // 设置 getter
       const getter = typeof userDef === 'function' ? userDef : userDef.get;

       // 为每一个computed 生成一个 watcher 订阅者（computedWatcher）
       watchers[key] = new Watcher(vm,null,()=>{},{
         computed: true,
         dirty: true, // 控制读取值
         layz: true,
         getter, 
       });

       // 判断 computed 中的key 是否与 data 中的key冲突
       // 如果冲突 报错（这里省略了报错处理）
       if(!(key in vm)){
         this.define(key,userDef)
       }
    }

  }

  // 这个主要作用是将 computed 属性添加到 Vue 实例上
  define(key,userDef){
     const sharedPropertyDefinition = {
        enumerable: true,
        configurable: true
      };

      // 判断computed 值 是函数 还是 对象
     if(typeof userDef === 'function'){
       sharedPropertyDefinition.get = this.createComputedGetter(key);
     }else{
       sharedPropertyDefinition.get = this.createComputedGetter(key);;
       sharedPropertyDefinition.set = userDef.set;
     }

    // 将属性添加到 Vue 实例上
     Object.defineProperty(this.vm, key, sharedPropertyDefinition);

  }

  createComputedGetter(key){
    return ()=>{
      const watcher = this._computedWatchers && this._computedWatchers[key];
      if(watcher){
         watcher.depend(); // 将wather 添加到 dep中
         watcher.evalvate(); //
         return watcher.value;
      }
    }
  }
}
```

### Vue实例

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

    // 渲染页面
    this.$el = document.querySelector(this.option.el);
    new Complie(this,this.$el);

  }

  // 初始化数据
  initState(){
    this.initData();
    this.initComputed();

  }

  // 初始化data数据
  initData(){
    const Obs = new Observer();
    Obs.init(this.$data)
    // 代理数据到vue实例上
    this.proxyData(this.$data)
  }

  // 初始化 Computed数据
  initComputed(){
     new Computed(this,this.option.computed);
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

## 使用

```html
<body>
    <div id="main">
        <input v-model="a" type="text">
        <h1>hello {{a}}</h1>
         <h1>hello {{a}} {{obj.b}}</h1>
        <h1>Computed: {{com}}</h1>
    </div>
</body>


<script src="./computed.js"></script>

<script>
    
  const vueObj = new NVue({
    el:"#main",
    data(){
      return {
        a:"小明",
        c:121,
        obj:{
          b:"小红",
        }
      }
    },
    computed:{
      com(){
        return this.b + " 1111" + this.obj.b;
      },
      b:{
        get(){
          return this.c;
        },
        set(val){
          return this.c = val;
        }
      }
    }
  })
  console.log(vueObj)

  setTimeout(()=>{
    vueObj.b = "world"
  },2000)

</script>
```



**参考文献**  

- [浅谈Vue中计算属性computed的实现原理](https://segmentfault.com/a/1190000016368913)
- [Vue 的计算属性如何实现缓存？（原理深入揭秘）](https://blog.csdn.net/weixin_42098339/article/details/105525589)