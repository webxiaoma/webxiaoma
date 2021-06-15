---
meta:
  - name: keywords
    content: js, js DOM操作, DOM操作，BOM操作
  - name: description
    content: 本文讲述什么是DOM，js中的DOM操作，以及一些常见的js Dom api。
---


# JS-DOM操作

[[toc]]

:horse: 


##  概念

`DOM`( document Object Model) ,是针对`HTML` 和`XML` 的API, 可以理解为`DOM`就是一些列功能集合。

## 什么是DOM树


1. 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

HTML DOM 模型被构造为对象的树：

![DOM树](http://www.runoob.com/images/pic_htmltree.gif)


## DOM 操作API

### DOM 查询

```JavaScript
document.getElementById() // 通过id查找元素

document.getElementsByTagName() // 通过标签查找元素，返回类数组

document.getElementsByClassName() // 通过class查找元素，返回类数组

document.querySelector() // 通过css选择器查找元素，返回一个选中的元素

document.querySelectorAll(); // 通过css选择器查找元素，返回类数组

```


###  DOM 属性操作



```JavaScript

ele.attributes  // 获取ele元素的所有属性 返回类数组

ele.getAttribute("属性名")  // 获取ele元素某个属性值

ele.setAttribute("属性名","属性值")  // 为ele元素添加某个属性以及值

ele.removeAttribute("属性名")  // 删除ele元素某个属性

// 比如我们想获取元素的属性 还可以
ele.class
ele.style


```


###  DOM 文本节点查询及操作

```JavaScript

ele.childNodes //获取当前节点的所有子节点（包括元素节点和文本节点）。返回类数组

ele.parentNode //只读，获取父元素节点 没有兼容性问题

ele.nodeType // 返回文本节点值3(文本代码值)

ele.nodeName // 返回文本节点名称 #text

ele.nodeValue  //返回节点所包含的文本

ele.appendData(text) //将text 添加到节点的末尾。 
ele.deleteData(offset, count) //从offset 指定的位置开始删除count 个字符。 
ele.insertData(offset, text) //在offset 指定的位置插入text。 
ele.replaceData(offset, count, text) //用text 替换从offset 指定的位置开始到offset + count 为止处的文本。 
ele.splitText(offset) //从offset 指定的位置将当前文本节点分成两个文本节点。 
ele.substringData(offset, count) //提取从offset 指定的位置开始到offset+count 为止 
```


### DOM 获取祖先，同胞，子元素

```JavaScript

ele.parentElement // 获取父元素

ele.children // 获取子元素返回类数组

ele.firstElementChild // 获取ele元素的第一个子元素 (不包含空格)

ele.firstChild // 获取ele元素的一个子元素 (包含空格) 

ele.lastElementChild // 获取ele元素的最后一个子元素 (不包含空格)

ele.nextElementSibling // 获取ele元素的后一个兄弟元素 (不包含空格)

ele.previousElementSibling // 获取ele元素的上一个兄弟元素 (不包含空格)

```

### DOM 的增加 删除 替换 插入

```JavaScript

// 删除替换
ele.removeChild(el) // 删除ele元素中的子元素el

ele.replaceChild(el1,el2) // 在ele子元素内将el1替换为el2

ele.insertBefore(newEle,oldChildEle) // 将newEle 元素 插入到ele元素内oldChildEle元素前边

ele.appendChild(el) // 将el元素插入到ele元素内的最后边

ele.cloneNode(true) // 为true时指示被复制的节点是否包括原节点的所有属性和子节点


// 创建元素和节点

document.createElement("元素名称") // 创建一个新元素

document.createTextNode("文本") // 创建一个新文本节点
```

### DOM 获取元素信息

```JavaScript

ele.clientWidth  // 获取元素的可视宽度 padding + content
ele.clientHeight // 获取元素的可视高度 padding + content

ele.offsetWidth   // 获取元素的 border+padding+content 宽度
ele.offsetHeight  // 获取元素的 border+padding+content 高度

ele.offsetLeft  // 获取元素 position/relative 左定位+ margin（左）
ele.offsetTop   // 获取元素 position/relative 上定位+ margin（上）

ele.clientTop   // 获取元素的border 上边宽度
ele.clientLeft  // 获取元素的border 左边宽度

ele.scrollHeight  //当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际高度
ele.scrollWidth   //当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际宽度

ele.scrollTop  // （可读写）指的是当元素其中的内容超出其宽高的时候，元素被卷起的高度
ele.scrollLeft // （可读写）指的是当元素其中的内容超出其宽高的时候，元素被卷起的宽度

ele.getBoundingClientRect() // 会返回一个对象，包含元素的上下左右距离和宽高 

```