---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习  CSS CSS的格式化上下文
  - name: description
    content: 本章为小马学习专栏——CSS中的BFC现象
---


# CSS-格式化上下文


[[toc]]

:horse: 

## 概念

格式化上下文（Formatting context） 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

通俗点理解就是，`CSS`的布局渲染是分块进行的，也就是`CSS`中划分了很多`Box`, `Box`作为`CSS`的布局对象和基本单位，不同种类的`Box`以不同形式的进行渲染，而这个`Box`就代表格式化上下文。


## 格式化上下文种类 

- `BFC`(Block Formatting Contexts) 块级格式化上下文
- `IFC`(Inline Formatting Contexts) 内联格式化上下文
- `FFC`(Flex Formatting Contexts) 弹性盒格式化上下文
- `GFC`(GridLayout Formatting Contexts) 网格格式化上下文

## 块级格式化上下文BFC 

`Block Fromating Context` 简写为 `BFC`，被称作**块级格式化上下文**。文档最外层元素使用块布局规则或称为初始块格式上下文。这意味着`<html>`元素块中的每个元素都是按照正常流程遵循块和内联布局规则进行布局的。该模型定义了元素的边距、边框和填充如何与同一上下文中的其他块交互。

关于`BFC`的特点与作用的详细介绍，可以[查看这里](/web/csshtml/css-bfc.html)



## 行内格式化上下文IFC

行内格式化上下文（`Inline Formatting Contexts`）被称作`line-box`（行盒），`IFC的布局规则是`

- 在行盒中元素是从盒顶端水平的一个接一个排列
- 行盒之间的`margin` `padding` `border` 都有效
- 盒可能以不同的方式竖直对齐：以它们的底部或者顶部对齐，或者以它们里面的文本的基线对齐（一般用`vertical-align`设置）
- 当行内元素的总宽度超过了行盒，那么行内元素会被分配到多个行盒中去，并且可以通过`text-align`来控制水平布局，如果设置了不可折行等属性，那么行内元素会溢出行盒。
- 同一`IFC`中的行框通常有不同的高度（图片和文字在同一行时）。


## 弹性盒格式化上下文FFC

弹性盒格式化上下文（Flexible Formatting Context），为了适应各种类型的显示设备，更加方便的布局，在`CSS3`中引入了`flex`布局，被称为弹性盒模型。`flex`布局拥有许多属性。具体的使用方法可以查看下面两篇文章

- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)



## 网格格式化上下文GFC 

网格格式化上下文(Grids Formatting Context), `CSS3`中引入了一种`Grids`网格布局，在`GFC`块中会划分成行和列的网格状。这种布局目前使用率不是很高（目前指`2020-06`）。想要了解具体的用法，可以查看下面文章

- [CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


---

**参考文献** :point_left:

- [MDN-格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [CSS-格式化上下文（Formatting Context）](https://blog.csdn.net/WuLex/article/details/99626766)
- [解析 CSS 格式化上下文](https://segmentfault.com/a/1190000018878825)