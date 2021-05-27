
// *************************订阅容器Dep (订阅观察者中的调度中心)***********************************

const utils = {
  targetStack:[], // watch站
  pushTarget(){},
  popTarget(){},
}
// 实现订阅容器Dep，存储订阅者

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



// *************************观察者 Observer***********************************

// 实现观察者 Observer
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
        // Dep.target && dep.addSub(Dep.target);
        Dep.target && dep.depend();
        return val;
      }
     
    })

  }
}

// *************************实现订阅者 Watcher ***********************************

// 实现订阅者 Watcher 

class Watcher{

  constructor(vm,expr,callback,computedOptions){
    this.vm = vm;
    this.expr = expr;
    this.callback = callback;

    this.value = null;
    this.dep = null;

    if(computedOptions){
      const {computed,dirty,layz,getter} = computedOptions;
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
         this.dirty = true;
       }else{
         
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
     Dep.target = this;
     let value;
     const vm = this.vm;
     try{
       if(this.computed){
         // 这里调用计算属性computed 里的get方法（或函数） 
         value = this.getter.call(vm,vm);
       }else{
         // 这里会调用 get 方法，将订阅者添加到 订阅容器中
         value = this.getDataVal();
       }
     }catch(e){
       // 错误处理
     }finally{
      Dep.target = null;
     }

     return value;
  }
  // 获取data中的值
  getDataVal(){
    const valAry = this.expr.split(".");
    return valAry.reduce((prev,next)=>{
       return prev[next]
    },this.vm.$data)
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

    if(this.diryt){
      this.value = this.getVal();
      this.dirty = false;
    }

    return this.value;
  }

  addDep(dep){
    this.dep.addSub(dep);

   // 绕到了 Observer 中，将当前 watcher（可能为ComputedWatcher 也可能为DataWatcher） 
   // 添加到了
   // Observer 中的 dep 中
    dep.addSub(this);

  }
}



// *************************模板编译 Complie***********************************

// 解析器常用方法
const CompileUtil = {
   RegText:/\{\{([^}]+)\}\}/g,
   getVal(vm,expr){
     const valAry = expr.split(".");
      let value = valAry.reduce((prev,next)=>{
        return prev[next]
     },vm.$data)

     console.log(444,vm)
     console.log(444,expr)
     console.log(444,vm[expr])
     console.log(444,"-------------")
     if(value === undefined && typeof vm[expr] === 'function'){
     
     }


     return value;
   },
   setVal(vm,expr,val){
    const valAry = expr.split(".");
    valAry.reduce((prev,next,index)=>{
      if((index + 1) === valAry.length){
        prev[next] = val;
      }
      return prev[next]
    },vm.$data)
   },
  //处理模板 {{}} 数据
   text(vm,node,exper){ // 编译text
     const val = exper.replace(this.RegText,(...arg)=>{
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

// 解析器Complie
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

// *********计算属性的实现 computed********************************************************


class Computed{
  
  constructor(vm,computed){
    this.vm = vm;

    this.init(vm,computed);
  }

  init(vm,computed){
    // 创建一个watchers 对象 用来存储 watcher 订阅者
    const watchers = this._computedWatchers = Object.create(null);

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
     Object.defineProperty(this.vm, key, sharedPropertyDefinition)

  }

  createComputedGetter(key){
    return ()=>{
      const watcher = this._computedWatchers && this._computedWatchers[key];
      if(watcher){
         watcher.evalvate(); //
         watcher.depend(); // 将wather 添加到 dep中
         return watcher.value;
      }
    }
  }
}








// vue 实现

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
     const computed = new Computed(this,this.option.computed);
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













































































