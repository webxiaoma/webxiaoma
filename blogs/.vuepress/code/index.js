module.exports = () =>{

  /**
   * @msg 作家类
   */
  class Writer{
    constructor(name,book,press){
      this.name = name;
      this.Press = press;
      this.book = book;
      press.getBook(book);
    }
    publish(msg){ // 发布连载小数
        this.Press.emit(this.book,msg)
    }
  }


  /**
   * @msg 出版社类
   */
   class Press {
    constructor(){
      // 存储书籍
      this.handles = {};
    }
    /**
     * 
     */
    getBook(bookName){
      if(!this.handles.hasOwnProperty(bookName)){
        this.handles[bookName] = [];
      }
    }
    /**
     * @msg 订阅事件
     * @param {事件名称} bookName
     * @param {订阅者} subject
     **/ 
    on(bookName,subject){
      // 判断是否已经存在该事件
      if(!this.handles.hasOwnProperty(bookName)){
        throw new Error("所订书籍不存在");
      }
      this.handles[bookName].push(subject);
      return this;
    }
    /**
     * @msg 发布事件
     * @param {事件名称} bookName
     * @param {通知时的参数} args
     */
    emit(bookName,...args){
      const handles = this.handles[bookName];
  
      if(handles){
        handles.forEach((item)=>{
          item.receiveMsg(...args);
        })
      }else{
        throw new Error(`${bookName} 该事件未注册`)
      }
      
      return this;
    }
    /**
     * @msg 删除事件
     * @param {事件名称} bookName
     * @param {原订阅者} subject
     */
    off(bookName,subject){
      if(this.handles.hasOwnProperty(bookName)){
  
        // 遍历移除该subject订阅者
        this.handles[bookName].forEach((item,index)=>{
          if(item === subject){
            this.handles[bookName].splice(index,1)
          }
        });
      }else{
        throw new Error(`${bookName} 该事件未注册`)
      }
    }
  }



  /**
   * @msg 订阅者
   */
  class Reader{
    constructor(name){
      this.name = name;
      return this;
    }
    receiveMsg(msg){ // 接收信息
        console.log(`${this.name} 接收到得信息`,msg)
    }
  }
  
  //*************** 使用 *********************
  const pre = new Press(); // 创建出版社
  const wirter = new Writer("作者名","bookOne",pre); // 创建作者
  
  // 添加订阅者
  const ReadcerOne = new Reader("读者一");
  const ReaderTwo = new Reader("读者二");
  
  pre.on("bookOne",ReadcerOne);
  pre.on("bookOne",ReaderTwo);
  
  // 作者连载，通知
  wirter.publish("连载新小说");
  
  // 删除 bookOne 订阅得 读者一
  pre.off("bookOne",ReadcerOne);


  // 作者又连载了，通知
  wirter.publish("第二次连载");
}