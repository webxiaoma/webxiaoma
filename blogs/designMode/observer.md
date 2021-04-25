---
meta:
  - name: keywordsv
    content: 设计模式 观察者模式 观察者 Observer
  - name: description
    content: 本文章主要记录设计模式中得观察者模式。
---

# 设计模式-观察者模式

[[toc]]

:horse: 

## 概念

`观察者模式`定义了一种`一对多`的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。


### 结构

- 观察者`Observer`
- 被观察者`Subject`

<images src="/designMode/observe1.png" />

### 优缺点

**优点**

- 降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系。符合依赖倒置原则。
- 支持简单的广播通信，自动通知所有已经订阅过的对象。
- 目标与观察者之间建立了一套触发机制。（页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。）

**缺点**

- 如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。
- 如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
- 观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。

## 场景

比如我们在某宝买东西（比如苹果，香蕉），但是淘宝没有货了。我们可以订阅东西到货时，短信提醒我们，这样不用我们经常关注是否有货。我们不需要该物品时时也可以取消订阅。对于商家而言， 订阅的人可能很多。

下面我们来实现该功能：

## 实现

在实现前，根据上面的场景我们可以确定下面这些信息

- 设计一个观察者工具`Observer`(客户)
- 设计一个被观察者`Subject`(商家)
- 该工具类有一个订阅方法`on`
- 该工具类有一个发布事件`emit`
- 该工具类有一个取消订阅的方法`off`


### JS实现方式

```js
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


//****** 练习 ************* 
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
```
## 关于发布订阅者

发布订阅者和观察者模式很相似，很文章也经常说发布订阅者其实就是观察者模式，当然也有文章说两者完全不一样。我们这里不讨论他们的对与错。

`观察者模式` 和  `发布订阅者`还是有些区别。我们来通过它们的结构来探究一下区别：


<images src="/designMode/observe1.png" width="400" title="观察者模式" />
<images src="/designMode/observe2.png"  width="400" title="发布订阅者" />

从上图我们可以很清晰的看到 `发布订阅者` 可以看出下面区别：

- `发布订阅者`中多了一个**调度中心**。
- `发布订阅者`中事件的发布不会直接通知订阅者，而是通过调度中心来作为中间件来通知订阅者。发布者只关心自己信息的发布。

可以看出`发布订阅者`将 `观察者` 与 `订阅者`进行了解耦。增强了`观察者模式`。那`发布订阅者`到底是不是`观察者模式`我无法确定。但是确定的是，它们有部分区别。

### 实现

在现实生活中，我们看到过这样的情景：作者写连载小说时，将自己的书拿到出版社来进行发布，然后很多读者看到后很喜欢，就会从出版社订阅该书。当作者更新小说时，就会发给出版社，然后出版社就会通知读者有更新。这是读者就获取到了连载消息。 这里的**出版社**就充当着调度中心得角色。


在实现前，根据上面的场景我们可以确定下面这些信息

- 作家类`Writer`, 做家具有连载通知方法 `publish`
- 出版社`Press`, 出版社会有接收做家书籍得方法`getBook`,订阅方法`on`, 通知读者发布了小说方法`emit`，取消订阅小说得方法`off`
- 读者类 `Reader`,有个一个接收信息得方法`receiveMsg`

```js
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
   *@msg 接收做家书籍
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
```

下面是使用方式

```java
//*************** 使用 *********************
const pre = new Press(); // 创建出版社
const wirter = new Writer("作者名","bookOne",pre); // 创建作者

// 添加订阅者
const ReadcerOne = new Reader("读者一");
const ReaderTwo = new Reader("读者二");

pre.on("bookOne",ReadcerOne);
pre.on("bookOne",ReaderTwo);

// 作者连载，通知
/**
 * 读者一 接收到得信息 连载新小说
 * 读者二 接收到得信息 连载新小说
 */
wirter.publish("连载新小说");

// 删除 bookOne 订阅得 读者一
pre.off("bookOne",ReadcerOne);

// 作者又连载了，通知
/**
 * 读者二 接收到得信息  第二次连载
 */
wirter.publish("第二次连载");
```


**参考文献**

- [观察者模式（Observer模式）详解](http://c.biancheng.net/view/1390.html)
- [观察者模式](https://www.runoob.com/design-pattern/observer-pattern.html)
- [深入理解JavaScript系列（32）：设计模式之观察者模式](https://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)
- [JS设计模式——观察者模式（通俗易懂）](https://www.cnblogs.com/minigrasshopper/p/9134196.html)