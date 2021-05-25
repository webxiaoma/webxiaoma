
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

        console.log("set: ",newValue);
      },
      get(){
        if(Dep.target){
          dep.addSub(Dep.target);
        }
        return val;
      }
     
    })

  }
}



// 实现订阅者 Watcher 

class Watcher{

  constructor(vm,key,callback){

    this.vm = vm;
    this.key = key;
    this.callback = callback;
    this.value = this.getVal();
  }  
  
  update(){ // 更新函数
    this.run();
  }

  run(){ // 执行
    const value = this.vm.$data[this.key];
    const oldValue = this.value;
    if(value !== oldValue){
      this.value = value;
      this.callback.call(value);
    }
  }

  getVal(){
     Dep.target = this;

     // 这里会调用 get 方法，将订阅者添加到 订阅容器中
     const  value = this.vm.$data[this.key];

     Dep.target = null;

     return value;
  }
}



// 解析器Complie

const CompileUtil = {
   text(){},
   model(){},
   updater:{
     
   }
}
class Complie{
  
  constructor(vm,el){
     this.vm = vm;
     this.el = el;
     this.fragment = this.nodeToFragment();
     this.init();
  }

  init(){
    this.complieEle(this.fragment);
    console.log(this.fragment)
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
          console.log(22, reg.test(text))
          console.log(33, reg.exec(text))
           this.compileText(node,reg.exec(text)[1])
        }else if(this.isElementNode(node)){ // 元素节点
          

          this.complieElement();
          // 对子节点进行递归
          if(node.childNodes && node.childNodes.length){
            this.complieEle(node)
          }
        }
        


     })

  }
  complieElement(){

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




// vue 实现

class NVue{
  constructor(option){
    const {data} =  option;
    this.option = option;
    this.vm = this;
    this.$data = data();
    this.$el = null;
    this.init()

    return this;
  }
  init(){

   
    const Obs = new Observer();
   
    //初识化
    Obs.init(this.$data)
    // 数据初始化完成

    // 渲染页面
    this.$el = document.querySelector(this.option.el);
    new Complie(this.vm,this.$el)
  }
}













































































