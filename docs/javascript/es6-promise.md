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


### 初步实现

我们知道`promise`中具有`then`方法，我们对`then`的基本用法实现以下：

```js
 function Promise(fun){
  this.thenCallback = null; // 存储then的回调函
  this.catchCallback = null; // 存储catch的回调函

  var _that = this;
  
  // resolve 函数
  function resolve(res){
      if(_that.thenCallback){
          _that.thenCallback(res);
      }
  }
  // reject 函数
  function reject(err){
    if(_that.catchCallback){
      _that.catchCallback(err)
    }
  }

  fun(resolve,reject) 
}

Promise.prototype.then = function(){
    var arg1 = arguments[0]
    var arg2 = arguments[1]

    this.thenCallback = arg1;
    this.catchCallback = arg2;
}
```

现在我们简单的实现了一下`promise`的`then`方法，我们可以测试一下：

```js
var pro = function(){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
        var sum = Math.floor(Math.random()*10);
        if(sum>5){
          resolve("success")
        }else{
          reject("error")
        }
      },2000)
  })
}

pro().then(function(res){
  console.log(res)
},function(err){
  console.log(err)
})
```

## 实现链式操作

上面我们实现了`then`的简单效果，下面我们来实现`then`的链式操作，如下效果:

```js
request()
  .then(function(res){
    return res
  })
  .then(function(res){
    return res
  })
  .then(function(res){
    return res
  })
```
下面我们来实现`then`的链式调用

```js
 function Promise(fun){
  this.thenCallback = []; // 存储then中的回调函数

  var _that = this;
  
  function resolve(res){
      var value = res
      // 循环执行 存储then中的回调函数
      _that.thenCallback.forEach(function(f){
          value = f(value)
      })
  }
  fun(resolve,reject) 

  return this
}
Promise.prototype.then = function(){
    var arg1 = arguments[0]

    this.thenCallback.push(arg1);
    return this
}
```

现在我们来测试一下：

```js
var pro = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
          resolve("success")
        },2000)
    })
}

pro().then(function(res){
    console.log(res)
    return 1111
}).then(function(res){
   console.log(res)
})
```

现在我们还有一点问题就是，我们在使用`then`时,`then`中的回调函数不仅可以返回普通数据，还可以返回`promise`对象。

```js
var pro1 = function

req()
  .then(function(res){
     console.log(res)
  })
  .then(function(res){
      console.log(res)
      // 返回一个promise
      return new Promise(function(resolve,reject){
          setTimeout(function(){
            resolve('success')
          },2000)
      })
  })
  .then(function(res){
    console.log(res)
  })

```



## 实现catch 方法




## 加入状态机制







**参考文章**

[Promise简单实现（正常思路版）](https://www.cnblogs.com/liuzhenwei/p/5235473.html)