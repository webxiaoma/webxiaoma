---
sidebarDepth: 2
meta:
  - name: keywords
    content: this, js this, es6 this 马新想
  - name: description
    content: 本文讲述js中的this使用。
---

# JavaScript之This（一）

---

今天来写一写`JavaScript`中的`this`，虽然`this`已经被讨论烂了，但是我们这里还是从两个角度去探索一下，这篇文章我们从多种情况来总结出`this`的指向，[下一篇关于this的文章](/javascript/this.html)中我们从另一个角度来探讨一下`this`的指向问题。这篇文章只是总结了常见的`this`指向的问题，并没有从根源说起，如果想了解更多，可以看第二篇关于`this`的文章。**再次强调一遍，本篇文章只是列举this指向的各种例子，里边的一些确定this的方法，按规范来说并不正确，只是为了让初学者可以确定大多数this的情况。**

`this`其实就是执行上下文的一个属性，在`javaScript`中`this`时在进入上下文时确定的，并且在上下文运行期间一直不会发生变化。下面我们来看看`this`指向的多种情况。


## 全局中的this

全局中的`this`对于我们来说应该还是很好理解的，全局中的`this`, 指向的就是 `window`。

```js
console.log(this)  // 指向window

var a = 10;
console.log(this.a) // 10  this执行window
```

## 函数中的this

函数中的`this`相对于全局中的`this`来说比较难搞，我们需要考虑函数的执行上下文，因为`this`是在函数调用时来确定的，也就是说调用函数的方式不同会影响`this`的指向，下面我们来看看函数中的`this`, 


```js
// 全局中执行fun函数
function fun(){
  console.log(this) 
}
fun() // this 指向window

// 以原型的构造函数方式调用
fun.propotype.constructor() // this 指向fun.propotype对象

//对象中调用fun

var obj = {
  fun:function(){
    console.log(this)  
  }
}
obj.fun() // this 指向 obj对象
var f = obj.fun;
f()// this 指向 window对象
```

我们可以发现，函数作为对象的方法调用时，会指向调用该函数的对象（这么说不是很严谨，我们讨论的只是`this`的指向情况）, 如果将对象的方法赋值给全局变量，那么在函数执行时，`this`会指向`window`

另外我们看看下面这种情况：

```js
 var obj = {
    bar: function () {
        console.log(this);
    },
    fun:function(){
        function f(){
            console.log(this)
        }
        f()
    }
};
(obj.bar)(); // this 指向obj
(true&&obj.bar)(); // this 指向window
(obj.bar = obj.bar)(); // this 指向window
obj.fun();  // this 指向window
```

为了方便记忆我们可以这样确定`this`，首先括号`()`是组运算对`this`的确定没有影响，但是其他的赋值运算会对`this`造成影响，比如`=`、`&&`、`||`, 此时会将`this`值会是`undefined`，并最终指向`window`。所以针对上面的例子我们就可以得出

1. `(obj.bar)()` 结果为`this` 指向`obj`, 因为组运算对`this`的确定没有影响；
2. `(true&&obj.bar)()` 和 `(obj.bar = obj.bar)()`的结果为`this`指向`window`，因为赋值运算会改变`this`指向；
3. `obj.fun()`结果为`this`指向`window`，这种情况下，我们可以记住，函数执行后，内部函数执行时`this`的值会是`undefined`，并最终将会指向`window`，（虽然这么去理解是不正确的，但是为了更快的记住`this`的指向，只能这么干了。）



## 定时器中的this

`setTimeout`方法和`setInterval`方法是全局对象`window`的两个方法，在这两个方法触发的函数(不包含ES6箭头函数)中的`this`指向`window`

```js
 var foo = {
    bar: function () {
        setTimeout(function(){
            console.log(this)
        },2000)
    },
    fun:function(){
        setInterval(function(){
            console.log(this)
        },2000)
    },
};

foo.bar()  // this 指向 window
foo.fun()  // this 指向 window
```

## DOM事件中的this

`DOM`事件中绑定的函数中的`this`指向触发该事件的`DOM`元素。

```html 
<div id="test">
   aaaaaaaaaaaaaae
</div>
<script>
  var div = document.querySelector("#test")
  div.onclick = function(){
      console.log(this)  // 指向id为test的元素
  }
</script>
```

## ES6 中的this

在`es6`中讨论`this` 我们这里就不得不提箭头函数了, 和`es5`中，函数在执行时确定`this`不同，`es6`的箭头函数中根本没有自己的`this`,箭头函数中是继承自上级上下文中的`this`。

```js
var foo = {
    bar: function () {
        setTimeout(function(){
            console.log(this)
        },2000)
    },
    fun:function(){
        setTimeout(()=>{
            console.log(this)
        },2000)
    },
};

foo.bar()  // this 指向 window
foo.fun()  // this 指向 foo
var newF = foo.fun;
newF() // this 指向 window
```
通过上面例子我们可以看到，定时器`setTimeout`触发函数中的`this`应该是指向`window`的，但是当在`setTimeout`中使用箭头函数时，因为箭头函数没有`this`，它的`this`是继承上级的上下文中的`this`的。

第二种情况我们可以看出，在执行`foo.fun()`时箭头函数中的`this`就是继承自`foo.fun`中的`this`, 当通过`foo.fun()`调用函数时，`foo.fun`中的`this`指向`foo`,所以箭头函数中的`this`指向`foo`对象

第三种情况通过`newF()`调用函数时，`foo.fun`中的`this`指向`undefined`,最终指向`window`上面我们也分析过，所以箭头函数中的`this`指向`window`

所以在确定箭头函数中的`this`时，我们只需要确定它上级的上下文中的`this`即可。

我们在来看看下面在`DOM`事件中箭头函数内的`this`

```html 
<div id="test">
   aaaaaaaaaaaaaae
</div>
<script>
  var div = document.querySelector("#test")
  div.onclick = () =>{
      console.log(this)  // 指向 window
  }
</script>
```

`DOM`事件中箭头函数内的`this`也不再指向触发事件的元素了，而是指向它的上级上下文中的`this`即`window`。



## 构造函数中的this

在构造函数中`this`还是很好确定的，在构造函数中`this`永远指向通过构造函数创建的对象。

```js
function people(){
  this.name = "king";
  this.age = 52
}

var one = new People()
var two = new People()
```
上面在构造函数中的`this`会指向通过`new`创建出来的对象。第一种情况下`people`中的`this`指向 `one`对象，第二种情况下`people`中的`this`指向 `two`对象


关于this的基本判断我们就讲到这里，[下一篇文章](//javascript/this.html/)我们从另一个角度来看看`this`是如何确定的。**再次强调一遍，本篇文章只是列举this指向的各种例子，里边的一些确定this的方法，按规范来说并不正确，只是为了让初学者可以确定大多数this的情况。想了解规范中this的确定，可以看下篇文章**

