---
sidebarDepth: 2
meta:
  - name: keywords
    content: this, js this, es6 this 马新想
  - name: description
    content: 本文讲述js中的this使用。
---

# js 中的 This

---

说到`js`中的`this`，可以说难倒了一大批初学者，回想刚接触js时，对于this这个东西确实是处于懵逼状态，今天来写一写`JavaScript`中的`this`。`this`其实就是执行上下文的一个属性，在`javaScript`中`this`时在进入上下文时确定的，并且在上下文运行期间一直不会发生变化。下面我们来进行一下讨论。

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
```

我们可以通过上面代码看到，调用函数的方式不同，`this`的最终指向也就不同,有没有一个标准去来`this`的指向呢。这里我们可以使用下面方式来判断`this`的指向

:::tip this 的指向
`this`在函数中的指向，是受函数的调用方式影响的。 当调用函数（括号左边）是引用类型的值时，函数中的`this`指向调用函数的对象,  当调用函数（括号左边）是非引用类型的值时，函数中的`this`指向`undefined`(在js中当，在非严格模式下，this为`undefined`时,将自动指向`window`)，这种判断不是绝对成立的，存在一些特殊性。
:::


### 引用数据类型

理解上面的之前我们简单说一下在`js`中什么是引用类型和非引用类型。

```js

// 第一种情况
var obj = {
  name:'King',
  age:23
}

var newObj = obj;
newObj.age = 50;
console.log(obj.age) // 50 obj 中的age被改变了

// 第二种情况
var str = "hello world";
str.replace("world","老王");
console.log(str) // "hello world" str字符串并未被改变
```

通过上面的例子我们可以很清楚的看到不同点。其中对象`obj` 就是引用数据类型，而`str` 就是非引用数据类型。


**非引用数据类型特点**

非引用数据类型的值（这里说的是基础数据类型）是不可以改变的，我们常见的基本类型中,如 `String`、`Number`、`undefined`、`null`、`Symbol`，都是非引用类型的值（也被称为基本类型），基本类型的变量是存放在栈区的（栈区指内存里的栈内存），一经设置就不会被修改。此外基本数据类型的比较时，比较的是数据类型。

比如上面的例子，通过`replace`方法替换`world`后，并没有修改`str`本身，因为我们打印`str`时，输出还是`"hello world"`, 通过`replace`方法替换`world`后而是返回了一个新的字符串。

```js
var str = "hello world";
var newStr = str.replace("world","老王");
console.log(str) // "hello world"  str字符串并未被改变
console.log(newStr) //"hello 老王"  返回了一个新字符串

// 基本数据类型的比较
var str1 = "one";
var str2 = "one";
console.log(str1 == str2) // true 比较的是数据类型
```

字符串`str` 和 `newStr` 用内存图展示如下：

![基本数据类型](/img/this-1.png)



**引用数据类型的特点**

在`js`中常见的引用数据类型就是对象了（包括数组）。引用类型的值是同时保存在栈内存和堆内存(数据保存在堆内存中)中的对象，并且引用类型的值在比较时，比较的是内存地址是否相同。

比如我们上面提到的将`obj`赋值给`newObj`对象后，`obj`和`newObj`都是引用数据类型，他们的内存地址指向同一个对象，当`obj`和`newObj`对象中某一个属性发生变化时，都会影响对应的对象。

```js
// 第一种情况
var obj = {
  name:'King',
  age:23
}

var newObj = obj;
newObj.age = 50;
console.log(obj.age) // 50 obj 中的age被改变了

// 基本数据类型的比较
var obj1 = {};
var obj2 = {};
console.log(obj1 == obj2) // false 比较的是内存地址
```

对象`obj` 和 `newObj` 用内存图展示如下：

![引用数据类型](/img/this2.png)


### 函数中this的判定

说了引用数据类型和基本数据类型后， 我们来回归正题，讨论函数中`this`的指向。 现在我们知道了`JavaScript`中对象是`引用类型`，我们来看下面`this`的指向

```js
var name = "top";

var obj = {
  name:'King',
  getName:function(){
     console.log(this.name)
  },
}

obj.getName() // King   情况一
var getThis = obj.getName
getThis() // top   情况二

```
1. 第一种情况：我们会发现调用函数时括号左边是引用类型，这时`this`指向的就是调用该函数的对象即`obj`，所以`obj.name`就是`King`。
2. 第二种情况：当函数`getThis`函数执行时会读取`this.name`, 这时候括号左边的`getThis`是引用类型的值（可以看做`window.getThis()`,因为在全局声明的变量活函数都会作为`window`对象的属性存在的）这时`this`指向的就是调用该函数的对象`window`。

接下来我们在来看一段代码

```js
(function(){
    console.log(this)
})()
```
从这段代码中我们可以看到括号左边是非引用类型的，所以`this`应该指向`undefined`,在js中的非严格模式下`this`指向`undefined`时，会自动指向`window`。（严格模式下不会转换）所以这里`this`最终指向的是`window`。

我们在来看看下面的代码

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
(obj.bar)();
(true&&obj.bar)();
(obj.bar = obj.bar)();
obj.fun(); 
```
我们从上面的例子来分析， 

1. 第一个`(obj.bar)()` 这里`()`是作为一个组运算符，对`obj.bar`没有任何影响，所以`(obj.bar)` 其实等于`obj.bar`本身，是一个引用数据类型，所以`this`指向`obj`对象
2. 第二个`(true&&obj.bar)()`，这里`()`也是作为一个组运算符，只不组运算符中进行了`&&`运行并返回了一个新值`obj.bar`, 返回的新值并非是引用类型数据，所以这里`this`指向`undefined`，最终指向`window`
3. 第三个和第二个没有太大区别，组运算符中进行了赋值运算，并返回一个非引用类型的值，所以这里`this`也是指向`undefined`，最终指向`window`
4. **第四个是个特殊情况，调用函数`f`时获取`this`。函数`f`因为在函数`fun`的作用域中，并不是全局作用域的，所以`f`并不是`window`的属性，实际上`f`是挂到了函数`fun`的活动对象上了`AO.f`, 这是`this`就指向的是函数`fun`执行时的活动对象，这里不同的是，当`this`指向活动对象时，会返回`undefined`（在严格模式下），最终也就变成`window`了**


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


## 改变this指向的方式

在`js`我们可以使用`call`、`apply`、`bind`、方法可以来改变`this`的指向的。下面我们来看看着几个方法的使用。

### call 方法

`call`方法可以执行一个函数，并改变一个函数中`this`的指向,`call`方法中有多个参数，第一个参数是`this`指向对象，后面的参数就是调用函数时传入的参数。

```js
var obj = {
  name: "King",
  age:23
}

var name = "global";

function fun(age,sum){
  console.log(this.name)
  console.log(age,sum)
}

fun.call(obj,50,30) //King; 50 30
```

我们会发现通过`call`调用函数`fun`后，`fun`函数内部的`this`指向了对象`obj`,并且传入了两个参数`50 30`。

### apply 方法

`apply`方法也是可以执行一个函数，并改变一个函数中`this`的指向，和`call`方法不同的是，`apply`方法的第二个参数传入的是一个数组。

```js
var obj = {
  name: "King",
  age:23
}

var name = "global";
function fun(age,sum){
  console.log(this.name)
  console.log(age,sum)
}

fun.call(obj,[50,30]) //King; 50 30
```

### bind 方法

`js`中`bind`方法可以给函数中`this`绑定一个固定的对象，并返回一个新函数

```js
var obj = {
    name: "King",
    age:23
}

var name = "global";

function fun(age,sum,a){
   console.log(this.name)
}

var newFun = fun.bind(obj)
newFun() //King
setTimeout(newFun,2000) // King
```

通过例子我们可以看到，通过`bind`方法处理后，返回的新函数中的`this`永远都会指向同一个对象，而不会随着函数的调用方式不同而改变。


关于`JavaScript`中的`this`就讲到这里。

