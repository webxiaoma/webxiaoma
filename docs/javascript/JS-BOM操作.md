---
meta:
  - name: keywords
    content: js, js BOM, BOM操作，浏览器缓存，浏览器存储
  - name: description
    content: 本文讲述js的BOM操作相关知识，以及浏览器的缓存和储存。
---

# JS BOM操作


## 什么是BOM


### **1. 概述**

浏览器对象模型（Browser Object Model (BOM)）是JavaScript的组成之一，他提供了独立与内容与浏览器窗口进行交互的对象，使用浏览器对象模型可以实现与HTML的交互。


### **2. 核心 window 对象**

BOM 的核心对象是 window ，它表示浏览器的一个实例。在浏览器中， window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。

- 通过window可以操作整个浏览器。

- 所有浏览器都支持 window 对象。它表示浏览器窗口。

- 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

- 全局变量是 window 对象的属性。

- 全局函数是 window 对象的方法。

- 甚至 HTML DOM 的 document 也是 window 对象的属性之一：


BOM 和 DOM 的关系可以用下图表示

![BOM图谱](http://www.itxueyuan.org/uploads/allimg/121112/1-121112154254459.png)0


## BOM操作API



### **1. window对象**

```JavaScript
window.close();  //关闭窗口  

window.alert("message");  //弹出一个具有OK按钮的系统消息框，显示指定的文本 

window.confirm("Are you sure?");  //弹出一个具有OK和Cancel按钮的询问对话框，返回一个布尔值  

window.prompt("What's your name?", "Default");  //提示用户输入信息，接受两个参数，即要显示给用户的文本和文本框中的默认值，将文本框中的值作为函数值返回  

window.status  //可以使状态栏的文本暂时改变  

window.defaultStatus  //默认的状态栏信息，可在用户离开当前页面前一直改变文本  

window.setTimeout(function(){}, 1000)  //设置在指定的毫秒数后执行指定的代码，接受2个参数，要执行的代码和等待的毫秒数  

window.clearTimeout("ID")  //取消还未执行的暂停，将暂停ID传递给它  

window.setInterval(function(){}, 1000)  //无限次地每隔指定的时间段重复一次指定的代码，参数同setTimeout()一样  

window.clearInterval("ID");  //取消时间间隔，将间隔ID传递给它  

window.history.go(-1);  //访问浏览器窗口的历史，负数为后退，正数为前进 

window.history.back();  //访问浏览器窗口的历史，负数为后退，正数为前进 

window.history.forward();  //访问浏览器窗口的历史，负数为后退，正数为前进 

window.history.length  //可以查看历史中的页面数   

```


### **2 document 对象**

```JavaScript

document对象：实际上是window对象的属性，document == window.document为true，是唯一一个既属于BOM又属于DOM的对象  

document.lastModified  //获取最后一次修改html文档的日期的字符串表示  

document.referrer  //用于跟踪用户从哪里链接过来的  

document.title  //获取当前页面的标题，可读写  

document.URL  //获取当前页面的URL，可读写  

document.anchors[0]或document.anchors["anchName"] //访问页面中所有的锚  

document.forms[0]或document.forms["formName"]  //访问页面中所有的表单  

document.images[0]或document.images["imgName"]  // 访问页面中所有的图像  

document.links [0]或document.links["linkName"]  //访问页面中所有的链接 

document.applets [0]或document.applets["appletName"]  //访问页面中所有的Applet  

document.embeds [0]或document.embeds["embedName"]  //访问页面中所有的嵌入式对象  

document.write(); 或document.writeln();  //将字符串插入到调用它们的位置  

```


### **3. location对象**

```JavaScript

location对象：表示载入窗口的URL，也可用window.location引用它  

location.href  //当前载入页面的完整URL，如http://www.somewhere.com/pictures/index.htm  

location.portocol  //URL中使用的协议，即双斜杠之前的部分，如http 

location.host  //服务器的名字，如www.wrox.com  

location.hostname  //通常等于host，有时会省略前面的www  

location.port  //URL声明的请求的端口，默认情况下，大多数URL没有端口信息，如8080 

location.pathname  //URL中主机名后的部分，如/pictures/index.htm  

location.search  //执行GET请求的URL中的问号后的部分，又称查询字符串，如?param=xxxx  

location.hash  //如果URL包含#，返回该符号之后的内容，如#anchor1  

location.assign("http:www.baidu.com");  //同location.href，新地址都会被加到浏览器的历史栈中  

location.replace("http:www.baidu.com");  //同assign()，但新地址不会被加到浏览器的历史栈中，不能通过back和forward访问  

location.reload(true | false);  //重新载入当前页面，为false时从浏览器缓存中重载，为true时从服务器端重载，默认为false  
```


### **4. navigator对象**

`navigator` 对象：包含大量有关Web浏览器的信息，在检测浏览器及操作系统上非常有用，也可用window.navigator引用它  


```JavaScript

navigator.appCodeName  //浏览器代码名的字符串表示  

navigator.appName  //官方浏览器名的字符串表示  

navigator.appVersion  //浏览器版本信息的字符串表示  

navigator.cookieEnabled  //如果启用cookie返回true，否则返回false  

navigator.javaEnabled  //如果启用java返回true，否则返回false  

navigator.platform  //浏览器所在计算机平台的字符串表示  

navigator.plugins  //安装在浏览器中的插件数组  

navigator.taintEnabled  //如果启用了数据污点返回true，否则返回false  

navigator.userAgent  //用户代理头的字符串表示   

```

我们经常使用navigator对象来判断平台的类型，比如:

```JavaScript

var u = navigator.userAgent;

var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var isMobile = !!u.match(/AppleWebKit.*Mobile.*/) //是否为移动终端
var isIpad = u.indexOf('iPad') > -1 //是否iPad
var isWecath = u.indexOf('MicroMessenger') > -1 //是否微信 
var isIE = u.indexOf('Trident') > -1 //IE内核
var isWebkit = u.indexOf('AppleWebKit') > -1 //苹果、谷歌内核
var isFireFox =  u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1 //火狐内核
var isOpera = u.indexOf('Presto') > -1 //opera内核
```



### **5. screen对象**

`screen`对象：用于获取某些关于用户屏幕的信息，也可用window.screen引用它  

```JavaScript

screen.width/height  //屏幕的宽度与高度，以像素计  

screen.availWidth/availHeight  //窗口可以使用的屏幕的宽度和高度，以像素计 

screen.colorDepth  //用户表示颜色的位数，大多数系统采用32位  

window.moveTo(0, 0);  //控制浏览器滚动条的位置

window.resizeTo(screen.availWidth, screen.availHeight);  //填充用户的屏幕   

```


## 定时器

**1. setTimeout()**

`setTimeout()`应该都很熟悉，它是当页面代码执行完毕后立即开始定时的，而且只定时一次，并返回一个定时器的`id`，可以使用` clearTimeout()`来取消这次定时器


```js
// 100毫秒后执行一次
let timeID = setTimeout(function(){
　　 console.log(1111)
},100)
```


**2. setInterval()**

`setTimeout()`应该也不陌生，它是当页面代码执行完毕后立即开始定时的，而且根据设定的时间来循环执行，并返回一个定时器的id，可以使用` clearTimeout()  `来取消这次定时器

```js
// 每一100毫秒执行一次
let timeID = setInerval(function(){
　　 console.log(1111)
},100)
```
::: warning
可以使用`setTimeout`来完成`setInterval`的工作，这样做的好处是，`setTimeout保证了每次执行完当前函数中的操作再进行下一次定时任务，而`setInterval`不会保证上一次任务执行完毕再添加下一次任务。
:::


**3. requestAnimationFrame()**　[查看兼容性](https://caniuse.com/#search=requestAnimationFrame)

requestAnimationFrame() 定时器是根据显示器的帧来定时的，也就是显示屏每刷新一帧，它就执行一次。和上边两个定时器一样，它也会返回一个句柄，并使用`cancelAnimationFrame()`来清楚它。　它使用方法如下：

```js     
function animate() {
  Aframe = requestAnimationFrame(animate);
  // Do something animate
}

Aframe = requestAnimationFrame(animate);

// 如果清除使用　cancelAnimationFrame(Aframe)
```

`equestAnimationFrame`的优势，在于充分利用显示器的刷新机制，比较节省系统资源。显示器有固定的刷新频率（60Hz或75Hz），也就是说，每秒最多只能重绘60次或75次，`requestAnimationFrame`的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。此外，使用这个API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力。

不过有一点需要注意，`requestAnimationFrame`是在主线程上完成。这意味着，如果主线程非常繁忙，`requestAnimationFrame`的动画效果会大打折扣。


::: tip 处理兼容

```js
window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
```
:::