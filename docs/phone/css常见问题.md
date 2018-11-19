---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: css问题，移动端css，样式处理，手机，常见css问题
  - name: description
    content: 本文章主要记录手机移动端常见的css问题以及处理办法。
---

# css常见问题


## 移动端常见CSS


### 清除a标签的高亮颜色
手机端我们用a 标签包裹的内容，默认点击时有高亮颜色

```css
-webkit-tap-highlight-color:颜色
```

### 消除按钮圆角
清除手机端按钮默认的圆角。清除后还是有些圆角样式，我们可以在加`border-radious:0;` 可以彻底清除

```css
-webkit-appearance：none;
```

### 选中文字设置

去除掉长按文字时选中文字的样式,(部分手机上有效果，安卓手机似乎有问题) 

```css
-webkit-user-select：none;
```

### 禁止文字缩放

在手机横竖屏时，用于禁止文字缩放。
```css
-webkit-text-size-adjust：100%；
```
### 在手机端滑动更顺畅

```css
-webkit-overflow-scrolling: touch;
```


## IOS的body的overflow问题-IOS

在`ios` 下如果给`body`一个`overflow：hidden` 页面不起作用，并没有将元素超出的部分隐藏。

**解决方法:** 在最外层包裹一个`div`，将`overflow：hidden`  设置在这个div上。
