module.exports = () =>{



  /**
   * @msg 观察者类
   * 观察者类中拥有下面方法
   * 1. 事件处理的函数集合 handles
   * 2. 订阅事件 on
   * 3. 发布事件 emit
   * 4. 删除事件 off
   */
   


   /**
    * @msg 某宝 被观察者
    */
  class Subject {
    constructor(){
      // 观察者列表
      this.observers = [];
    }

    add(obs){ // 添加观察者
       this.observers.push(obs);
    }
    remove(obs){ // 移除观察者
      this.observers = this.observers.filter(item=>{
         if(item !== obs){
            return item;
         }
      })
    
    }
    notify(msg){ // 通知
      this.observers.forEach(obs=>{
        obs.receiveNotice(msg);
      })
    }

  }

  /**
   * @msg 客户 观察者
   */
  class Observer{
    constructor(name) {
        this.name = name
    }

    receiveNotice(msg) {
        console.log(`${this.name}收到消息：${msg}`)
    }
  }



  // 练习
  const LaoWang = new  Observer("老王");
  const XiaoMing = new  Observer("小明");
  

  const Bao = new Subject();

  // 订阅
  Bao.add(LaoWang);
  Bao.add(XiaoMing);

  Bao.notify("苹果到了")

  // 移除订阅
  Bao.remove(LaoWang);
  Bao.notify("手机到了")

}