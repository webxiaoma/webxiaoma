
// *************************订阅容器Dep (订阅观察者中的调度中心)***********************************

// 实现订阅容器Dep，存储订阅者

class Dep{
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
        Dep.target && dep.addSub(Dep.target);
        return val;
      }
     
    })

  }
}

// *************************实现订阅者 Watcher ***********************************

// 实现订阅者 Watcher 

class Watcher{

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



// *************************模板编译 Complie***********************************

// 解析器常用方法
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
    // 参数 exper 类似 hello {{a}} {{obj.b}}  
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

// *********计算属性的实现 computed********************************************************


class Computed{

  init(){
    
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













































































