---
meta:
  - name: keywords
    content: 马新想 小马学习 编程学习 前端 CSS-BFC BFC
  - name: description
    content: 本章为小马学习专栏——CSS中的BFC现象
---


# CSS-BFC

[[toc]]

:horse: 
## 概念

`Block Fromating Context` 简写为 `BFC`，被称作**块级格式化上下文**

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)上是这样解释`BFC`的

:::tip BFC
**块格式化上下文（Block Formatting Context，BFC）** 是`Web`页面的可视`CSS`渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
:::

说白了，其实就是页面中某个元素(如`div`)中拥有特定的`css`渲染规则，该区域不影响其它区域，为它起了一个名字叫做`块级格式化上下文(Block Fromating Context)`

其实`css`格式化上下文概念中除了`BFC`(块级格式化上下文), 还有：`IFC`(行内格式化上下文) , `GFC`(网格布局格式化上下文), `FFC`(自适应格式化上下文)。


## BFC的特点

1. 同一个`BFC`区域中`margin` 会发生重叠，距离取最大`margin`距离
2. `BFC`区域中的元素会垂直的方向，一个接一个的放置。
3. `BFC`区域中如果有浮动元素，那么计算`BFC`高度时，也会算上浮动元素的高度
4. `BFC`区域中, 每个盒子的左外边界挨着包含块的左边界 (对于从右到左的格式化, 则为右边界互相挨着)。
5. `BFC`的区域不会与`float`元素重叠
6. 每个`BFC`之间是相互独立的块域（独立容器），里边的子元素不会相互影响

## BFC触发情况

一般下面的情下，会触发(或形成)`BFC`

- 给元素设置`float`，但是值不为`none`
- 给元素设置`overflow`,但是值不为`visibility`
- 设置`display`的值为 `inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex`
- 设置`position`的值为 `absolute` 或 `fixed`


## BFC的作用

知道了`BFC`的特点，以及触发条件，我们来看看, `BFC`在实际应用中有什么作用

### 解决margin重合问题

我们经常遇到`margin`重叠问题，在同一个`BFC`区域中`margin` 会发生重叠，为了不让`margin`
重叠我们可以创建两个`BFC`区域，将有`margin`的元素分别放到两个`BFC`区域中，因为两个`BFC`区域是相互不受影响的。


### 清楚浮动问题

我们给`One` div 进行浮动后，其父元素的到高度就不会被`One`撑开，受到浮动的影响，`底部DIV元素` 就会受影响，往上移动，

<images src="/web/csshtml/bfc1.png" />

然后我们给`父Div` 加上`display: inline-block;` 变成一个`BFC`，这时就会清除浮动，也是因为每个`BFC`之间是相互独立的块域（独立容器），里边的子元素不会相互影响

<images src="/web/csshtml/bfc2.png" />

### 自适应两栏布局

我们看下面布局，当`One` div元素浮动，而`Two` div 元素不浮动时，就会出现，`Two` 元素在`One` 元素下面，但是文字（不会在下面）会围绕`One`元素

<images src="/web/csshtml/bfc3.png" />

为了让`One`元素和`Two`元素左右并排，我们可以将`Two`元素变成`BFC`，这是利用了`BFC`的区域不会与`float`元素重叠的特点

<images src="/web/csshtml/bfc4.png" />

---

**参考文献** :point_left:

- [MDN-块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- [CSS-BFC](https://www.jianshu.com/p/828023418450)
