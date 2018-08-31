---
meta:
  - name: keywords
    content: js, js 事件, js事件代理，事件冒泡
  - name: description
    content: 本文讲述js一些基础知识，事件代理和事件冒泡。
---

# JS-事件

## 什么是js事件

> 事件是与浏览器或文档交互的瞬间，如点击按钮，填写表格等，它是JS与HTML之间交互的桥梁。



## HTML 中触发js的几种方法

1. 第一种,直接在HTML 内嵌js

```HTML
<button id="div" onclick="javascript:var a = 1+3; alert(a);" >
    点击我
</button>
```

2. 第二种

```HTML
<button id="div1" onclick="fun()" >
    点击我
</button>

<script>
    function fun(){
        alert("我是第二种方法")
    }
</script>
```

3. 第三种

```HTML
<button id="div2" >
    点击我
</button>
<script>
    document.getElementById("div2").onclick = function (){
        alert("我是第三种方法")
    }
</script>
```

4. 事件监听和移除

```HTML
<button id="div3" >
     addEventListener  点击我
</button>

<script>
    function myFun(){
        console.log("触发了")
    }
    document.getElementById("div3").addEventListener('click',myFun)

    setTimeout(function(){
        document.getElementById("div3").removeEventListener("click",myFun)
    },3000)

</script>

```

## js 常用的事件

[js详细事件-见菜鸟教程](http://www.runoob.com/jsref/dom-obj-event.html)

这里讲几个特殊事件：

- `onmouseenter`	当鼠标指针移动到元素上时触发。	
- `onmouseleave`	当鼠标指针移出元素时触发	

- `onmouseover`	鼠标移到某元素之上。	
- `onmouseout`	鼠标从某元素移开。

::: warning
`onmouseenter` 和 `onmouseover` 都是移动到元素上时触发，但是区别是`onmouseenter`移动到子元素上时也会再次触发并且还会再次冒泡到父元素，而`onmouseover` 只触发一次，当移动到元素的子元素时不会在有再触发也不会在冒泡,
:::


## 事件（合成）对象Event

> Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

> 事件通常与函数结合使用，函数不会在事件发生前被执行！


Event 对象 是在鼠标键盘事件触发时，注入到触发函数中的，以函数中第一个参数来表示。例如：

```js
var div1 = document.querySelector('.div1')
div1.onmouseenter = function(event){
    //event.target 获取到的是触发的事件源，这里只 id为 div1 的元素
    console.log(event.target) 
}
```

### 1. 获取 键盘按键信息

```js
let body = document.querySelector('body')
body.onkeydown = function(e){
    // 当键盘按键按下时会输出所按下的按钮名称
        console.log(e.key)
}
```

### 2. 获取鼠标位置

**2.1 浏览器的可视坐标 clientX与clientY**

```js
let body = document.querySelector('body')
body.onmousemove = function(e){
    console.log('鼠标所在浏览器中的X坐标：'+ e.clientX)
    console.log('鼠标所在浏览器中的Y坐标：'+ e.clientY)
}
```

需要注意的是： 再给body添加事件时要给body设置高度，因为body默认高度为0

**2.2 设备屏幕坐标 screenX与 screenY**

```js
let body = document.querySelector('body')
body.onmousemove = function(e){
    console.log('鼠标所在设备屏幕中的X坐标：'+ e.screenX)
    console.log('鼠标所在设备屏幕中的Y坐标：'+ e.screenY)
}
```


**2.3 movementX 和 movementY 坐标轴**

`movementX` 和 `movementY` 鼠标位置是以鼠标进入元素时的x和y轴为初始坐标（0,0）, 向左x轴坐标为负值，向右x轴坐标为正值，向上y轴坐标为正值，向下为负值。


```js
let body = document.querySelector('body')
body.onmousemove = function(e){
    console.log('鼠标的X坐标：' + e.movementX)
    console.log('鼠标的Y坐标：'+ e.movementY)
}
```

### 3. 获取鼠标按钮

在`onmousedown` 事件中我们可以通过 `event.button` 来获取鼠标按下的信息

以webkit 内核的浏览器为例:
```js
body.onmousedown = function(event){
    console.log("鼠标按下左键为(0)：" + event.button)
    console.log("鼠标按下滚轮键为(1)：" + event.button)
    console.log("鼠标按下右键为(2)：" + event.button)
}
```



- 一般浏览器有默认行为，我们想阻止浏览器默认行为可以使用 `eventDefault()`

```js
document.body.oncontextmenu = function(event){
   event.eventDefault() // 阻止浏览器出现右键菜单栏
}
```


## 事件的冒泡和捕获

> 冒泡事件，由里向外，最里层的元素先执行，然后冒泡到外层。

> 捕获事件，由外向里，最外层的元素先执行，然后传递到内部。


```HTML

<div class="div1">
    <div class="div2">div2 我先冒泡后捕获</div>
    我先捕获后冒泡
</div>

<script>
    var div1 = document.querySelector('.div1')
    var div2 = document.querySelector('.div2')

    div1.onclick = function(){
        alert("我是div1")
    }
    div2.onclick = function(){
        alert("我是div2")
    }

</script>

```

1. 阻止事件冒泡可以使用 `stopPropagation()`

```HTML
<div class="div1">
    <div class="div2">div2 我先冒泡后捕获</div>
    我先捕获后冒泡
</div>

<script>
    var div1 = document.querySelector('.div1')
    var div2 = document.querySelector('.div2')

    div1.onclick = function(e){
        alert("我是div1")
    }
    div2.onclick = function(e){
        e.stopPropagation() // 阻止div2事件冒泡
        alert("我是div2")
    }

</script>
```


## JS事件委托

那什么叫事件委托呢？它还有一个名字叫事件代理，JavaScript高级程序设计上讲：事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。下面我们来列举一个简单的例子来引出JS事件委托。

现在我们有这样段代码

```html       
<input type="button" id="btn" value="添加li标签"/>
<ul id="ul">
  <li>第一个</li>
  <li>第二个</li>
  <li>第三个</li>
</ul>

``` 
我们来给每个li标签添加一个点击事件，并弹出对应标签的内容

```js
var ul = document.getElementById("ul");
var AllLi = ul.getElementsByTagName("li");
var oBtn = document.getElementById("btn");
var iNow = ３;
for(var i=0; i<AllLi.length; i++){
    AllLi[i].click = function(){
        alert(this.innerText)
    }
}

oBtn.onclick = function(){
   iNow ++;
   var oLi = document.createElement("li");
   oLi.innerHTML =　"第"+iNow+"个";
   ul.appendChild(oLi);
}


``` 
现在我们点击页面上的每个li标签都会弹出对应的内容，接下来我们点击按钮，新添加几个lｉ标签，然后我们点击新添加的li标签会发现没有任何反应。为什么没有反应呢，这是因为我们上面的方法只能够给页面中已经存在的元素添加事件，使用js后生成的元素时用这种方法是添加不上的。这时我们就要事件委托来处理这种情况了，当然我们还有其它方法，这里只是为了讲解事件委托。

::: tip 原理
事件委托是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，div>ul>li>a;比如给最里面的a加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序a>li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li，a做点击事件的时候，都会冒泡到最外层的div上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。    
:::

接下来我们使用事件委托来重写js代码

```js
var oUl = document.getElementById("ul");
var aLi = oUl.getElementsByTagName("li");
var oBtn = document.getElementById("btn");
var iNow = 4;
 
oUl.onclick = function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if(target.nodeName.toLowerCase() == "li"){
      alert(target.innerText)
    }
}

oBtn.onclick = function(){
    iNow ++;
    var oLi = document.createElement("li");
    oLi.innerHTML = "第"+iNow+"个";
    oUl.appendChild(oLi);
}

```