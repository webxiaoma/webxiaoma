---
sidebarDepth: 2
meta:
  - name: keywords
    content: promise, es6, promise用法, promise 马新想
  - name: description
    content: 本文讲述ES6中promise的用法，以及promise的简单实现方法。
---

# ES6之Promise的简单实现

`Promise` 作为异步编程的一种解决方案，相比较使用回调函数和事件的方式更方便。对于`Promise`的基础使用可以访问[Promise 对象](http://es6.ruanyifeng.com/#docs/promise)

## Promise 的优缺点

以前我们在处理异步操作时常用的解决方案就是使用回调函数，但是使用回调函数出现的问题是，在进行多层嵌套时会显的臃肿，不易阅读，常被人们称为`回调地狱`，例如：

```js
$.ajax({
  // 省略
  success:function(res){
     if(res.result == 200){
          $.ajax({
               // 省略
              success:function(res){
                  if(res.result == 200){
                      $.ajax({
                        // 省略
                        success:function(res){

                        }
                      })
                  }
              }
          })
     }
  }
})
```
`promise`出现后好了很多，那么`promise`就没有缺点了么


## Promise 的简单实现

### 实现then方法

我们封装`promise`的`then`,让其具有下面这样的效果：

```js
var p = function(){
   return new Promise(function(resolve){
      setTimeout(function(){
        resolve("方法一")
      },1000)
   })
}
// 可以链式调用
p().then(function(res){
  console.log(res)
  return "第一次then的结果"
}).then(function(res){
  console.log("第二个then中拿到的第一个then的返回值："+ res)
  return new Promise(function(resolve){
    resolve("第二个的then值")
  })
}).then(function(res){
  console.log("第三个then中拿到的第二个then的值："+ res)
})
```


我们想要上面的代码执行，首先要封装出`then`方法

```js
function Promise(fn){
    this.state = 'pending';
    this.doneLists = []; // 存储对象
    this.value = null; // 存储resolve中的参数
    var _that = this;
    function resolve(newValue) {
        // 判断传入的是否是promise,如果是
        // 则或者它的then方法，执行并将this执行当前promise, 将resolve 存入done中
        if (newValue && (newValue instanceof Promise)) {
            var then = newValue.then;
            then.call(newValue, resolve);
            return;
        }
        
        // 如果不是promise 将状态改为fulfilled
        _that.state = 'fulfilled';
        _that.value = newValue; // 存储resolve传入的值
        setTimeout(function () {
            // 循环执行存储的then中的回调和后面promise的resolve
            _that.doneLists.forEach(function (deferred) {
                _that.handle(deferred);
            });
        }, 0);
    }
  
    fn(resolve);
}

//  封装then方法，每次then执行后返回一个新的promise
Promise.prototype.then = function(done){
    var _that = this
    return new Promise(function(resolve){
        _that.handle({
             // 执行then方法时，将then中的回调函数存储在done中
            done: done || null,
            // 将返回的promise中的resolve存储在对象中，以供调用后面的then方法。
            resolve: resolve
        });
    });
}

// 封装一个handle方法，将then中的回调函数和
// then中返回的promise中的resolve存储起来
Promise.prototype.handle = function(deferred){ 
    // 如果是 pending状态，将对象deferred存入当前对象的doneLists中
    if (this.state  === 'pending') {
        this.doneLists.push(deferred);
        return;
    }
    // 如果不是`pending`状态，执行done,拿到回调函数的返回值，执行后面的resolve方法
    // 传入到下个then的回调函数中
    var ret = deferred.done(this.value);
    deferred.resolve(ret);
}
```

上面的代码运行过程可以用下图表示（[原谅盗图](https://github.com/panyifei/Front-end-learning/blob/master/%E6%A1%86%E6%9E%B6%E4%BB%A5%E5%8F%8A%E8%A7%84%E8%8C%83/pics/m-then.png)）

![运行过程](/img/promise-1.png)
 
上面的代码执行过程可以用下图表示（[原谅盗图](https://github.com/panyifei/Front-end-learning/blob/master/%E6%A1%86%E6%9E%B6%E4%BB%A5%E5%8F%8A%E8%A7%84%E8%8C%83/pics/m-resolve.png)）

![执行过程](/img/promise-2.png)



### 实现catch方法   

上面我们简单的实现了`promise`的`then`方法,下面我们来实现`catch`方法








**参考文章**

- [Promise简单实现（正常思路版）](https://www.cnblogs.com/liuzhenwei/p/5235473.html)
- [Promise规范以及写一个Promise](https://github.com/panyifei/Front-end-learning/blob/master/%E6%A1%86%E6%9E%B6%E4%BB%A5%E5%8F%8A%E8%A7%84%E8%8C%83/Promise.md)