---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 CSS CSS面试题 面试题
  - name: description
    content: 本章为小马学习 —— CSS常见得面试题
---

# CSS 常见只知识点

[[toc]]

:horse:

## 选择器都有那些

`css`中的选择器主要有：

- 全局选择器：`*`
- Id选择器：`#`
- 类选择器：`.`
- 元素（标签）选择器： `div`
- 兄弟选择器：`~`
- 相邻选择器：`+`
- 子选择器：`>`
- 后代选择器：`div p`
- 群组选择器：`div,p,span`
- 属性选择器：`input[type=text]`
- 伪类选择器： 选择第一个li `li:first-child{}`,  选择第几个li `li:nth-child{}`，  不包含`li:not(){}`


## CSS样式继承优先级

`!important` > 内嵌样式 > 内联样式 > id选择器 > 类选择器 > 元素选择器 > 通配符选择器 > 浏览器默认样式


## CSS样式引入有几种方式

- 内联样式： `<div style="height:100px"></div>`
- 内嵌样式： `<style> .div{height:100px} </style>`
- 外联样式： `<link  rel="stylesheet" href="../index.css" />`
- 导入样式： `@import("./index.css")`

有三种样式：`内联样式` > `内嵌样式`  > `外联样式` = `导入样式`

## link和@import的区别

- 本质：`link` 属于`XHTML`标签, 而`@import` 完全是css提供的一种方式
- 兼容性：`@import` 在IE5以上才识别，`link`没有兼容性问题
- 加载顺序：`link`引入的css会在页面被加载的同时加载，而`@import`会等页面完全被下载完才会加载
- 可修改性：`link`引入的样式可以把被`js`动态修改，而`@import`不可以被`js`修改


## CSS3新增伪类

- `:active`
- `:root` 选择文档的根元素，等同于 html 元素
- `:empty` 选择没有子元素的元素
- `:checked` 选择被选中的表单元素
- `:nth-of-type(odd)` 选择某个奇数的元素，`even`为偶数 `3n`为三的倍数
- `:last-of-type` 选择最后一个元素

## CSS3中的伪元素

- `::after` 在选中元素中创建一个后置的子节点
- `::before` 在选中元素中创建一个前置的子节点
- `:first-line` 选择元素中的第一行
- `::first-letter`选取文字块首行首个字符
- `::selection` 选取字段的占位符文本(提示信息)

## 清楚浮动

- **方法一:** 给父元素 一个固定高度
```html
<div style="height:200px;">
   <div style="height:200px;float:left"></div>
   <div style="height:200px;float:left"></div>
</div>
<div> 该div不受影响</div>
```

- **方法二:** 使用带clear属性的空元素
```html
<div>
   <div style="height:200px;float:left"></div>
   <div style="height:200px;float:left"></div>
   <div style="clear:both"></div>
</div>
<div> 该div不受影响</div>
```

- **方法三:** 使用`::after`为元素
```html
<div class="clearfix">
   <div style="height:200px;float:left"></div>
   <div style="height:200px;float:left"></div>
</div>
<div> 该div不受影响</div>
```
```css
.clearfix::after{
  content: ""; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}
```

- **方法四:** 使用`overflow`为元素
```html
<div style="overflow:hidden;">
   <div style="height:200px;float:left"></div>
   <div style="height:200px;float:left"></div>
</div>
<div> 该div不受影响</div>
```


## CSS上下左右居中

```html
<div class="parentDiv" style="height:100vh;">
   <div class="content" style="width:200px;height:200px;">需要居中的元素</div>
</div>
```

- **方法一：** 使用`flex`布局
```css
.parentDiv{
  display:flex;
  justify-content: center;
  align-items: center;
}
```

- **方法二：** 使用`flex`布局
```css
.parentDiv{
  position:relative;
}
.content{
  position:relative;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
```

- **方法三：** 使用`dispaly:table`, 这个方法需要修改一下`html` 结构

```html
<div class="warpper">
  <div class="parentDiv">
    <div class="content">需要居中的元素</div>
  </div>
</div>
```
```css
.wrapper{
  width:100%;
  height:100vh;
  display: table; 
  background-color: aqua;
}
.parentDiv{
  width:100%;
  height:100vh;
  display: table-cell;vertical-align: middle;
  background-color: rgb(18, 48, 48);
}
.content{
  width:200px;
  height:200px;
  margin:0 auto;
  background-color: blueviolet;
}
```

## CSS 盒模型
images
- `标准的盒模型 =  内容(content) + padding + border + margin`
- `低版本IE盒模型 = 内容(content+ padding + border)  + margin`

类似下面的图
<!-- 
![asd](/img/web/question/question2.webp)
![asd](/img/web/question/question1.webp) -->

<Images src="/web/question/question2.webp"/>
<Images src="/web/question/question1.webp"/>


## CSS中的BFC

`BFC (Block Fromating Context)` 简称**块级格式化上下文**，是`Web`页面的可视`CSS`渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

`BFC`的特点以及作用：[详情请见这里](/web/csshtml/css-bfc.html)
## 为什么要初始化CSS

- 因为浏览器的兼容问题，每个浏览器之间的默认初始样式是不一样的，为了统一`css`的初始样式，我们需要初始化`CSS`

- 提高`css`代码质量，避免写大量重复的`css`样式。有利于维护页面样式


## display 属性有那些

[查看更多属性](https://www.w3school.com.cn/cssref/pr_class_display.asp)

- `block` 此元素将显示为块级元素
- `inline-block` 行内块元素
- `inline` 此元素会被显示为内联元素
- `none` 此元素不会被显示
- `flex` 该元素内以`flex`布局
- `table` 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。
- `table-cell` 此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）
- `inherit` 规定应该从父元素继承 `display` 属性的值。


## position 属性

- `relative` 相对定位
- `absolute` 绝对定位
- `fixed` 浮动定位
- `static` 默认值
- `inherit` 从父元素继承`position`定位

## img图片出现空白


**解决方法**

- 给`img`变成块元素`img{display:block}`
- 给`img`添加 `img{ vertical-align:middle }`
- 给`img`父元素添加 `div{ font-size:0; }`
- 给`img`父元素添加 `div{ line-height:0; }`


## rem em px 单位区别

- `rem` 是CSS3新增的一个相对单位,相对于根元素`HTNL`
- `em` 是相对长度单位, 相对于父元素的字体尺寸
- `px` 是相对于显示器平米分辨率而言的。
- `vh vw` 相对于视框的宽度,视框宽度高度默认`100vh 100vw`

## style标签写在body后与body前有什么区别？

写在head标签中利于浏览器逐步渲染（`resources downloading->CSSOM+DOM->RenderTree(composite)->Layout->paint`）。

写在`body`标签后由于浏览器以逐行方式对`html`文档进行解析，当解析到写在尾部的样式表（外联或写在`style`标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在`windows`的IE下可能会出现`FOUC`现象（即样式失效导致的页面闪烁问题）

