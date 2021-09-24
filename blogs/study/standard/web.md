---
meta:
  - name: keywords
    content: 马新想 小马学习 
  - name: description
    content: 本章为小马学习专栏
isLogin: true
sidebarDepth: 1
---

# 前端规范


:horse:


## 前言😊

👻在开始部分我想表达的是，不按照书写规范进行代码编写并不一定是错误的。 代码书写规范只是为了约束团队的一些开发行为，统一团队的开发习惯，这在某种程度上来说是好的。当项目多人合作时，在没有约束的情况下，每个人放飞自我的进行着项目的开发，当你看到团队其它人的代码和自己平常书写风格完全不一样时，你内心会有怎样的感受？内心🐏🐏🐏🐏🐏...,   

假如团队的编码风格一样，当你看到他人代码仿佛像是看到了自己写的代码是种什么样的体验？😃😃😃😃😃😃😃😃😃😃。所以下面这些规范我们所关心的并不是某个规范它的对错，而是对于团队的`统一` 以及 `效率`。

## 常规规范

1. **变量声明**优先使用`const` 和 `let`

2. **变量名称**使用驼峰法命名(如：`projectName`)， 避免使用关键字

3. **常量名称**使用大写(可以有下划线)，如：`PROJECT_NAME`

4. **使用运算符**时，前后留有空格，如： `const x = y + z`

5. **公共文件命名**使用大驼峰法 如： `MyComponent` 文件

6. **页面命名**使用小驼峰或`-`分隔， 如：`myHome`，`my-home`, 推荐使用`my-home`类型


## JavaScript书写规范

1. **函数命名**尽量使用小驼峰法命名，**类名**以及**构造函数名称**使用大驼峰法

2. **缓存名称**使用大写加下滑下方式 如：`sessionStroage.TEST_NAME = 1111`

3. **函数书写名称**前空格，括号后空格，如

```js
function test(args) {
  console.log(num)
}
```

4. **函数注释**规范

```js
@name 函数描述
@author {author} 作者
@param 参数
@return  {类型} 描述

/**
 * @name 测试函数
 * @param {arg} 什么参数，类型
 * @return {void} 
*/
```

5. 尽量使用**箭头函数**，以试语法更简洁（非强制）

6. 在**全局上添加属**性时，请加上`window`, 如 `window.arg = 1`

7. 不要定义**未使用的变量**，方法等。

8. 使用 `===` 代替 `==`, 使用 `!==` 代替 `==`

9. 使用**三元运算符**时，尽量保持在一行，如果不行可以换行，如：

```js
num === 2?true:false;

// 或
num === 2
 ?true
 :false
```

10. 判断语句不建议省略大括号，如

```js
// 建议
if (item < 20) { return false; }

// 不建议
if (time < 20) return false;
```

## Html书写规范

1. `HTML`文件要以`<!DOCTYPE html>`开头

2. `HTML`标签必选闭合

3. `HTML`标签在兼容的要求下尽量语义化如

```html
<header>头部元素</header>
<footer>页脚元素</footer>
<nav>导航元素</nav>
<main>主要内容，一般一个页面用一次</main>
<section>定义文档中的节</section>
<aside>主题附属信息，一般用于侧栏、文章的一组链接、广告、友情链接、相关产品列表等</aside>
<small>小号字体，一般用于声明、注解、署名、版权</small>
<figure>一般用作插画图像</figure>
<figcaption>定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置</figcaption>
```

4. `HTML`的属性名称尽量使用小写

## CSS书写规范

1. `css` **命名**尽量避免缩写

2. `css` **冒号后边**尽量增加空格 如：`width: 100px`

3. `css`的**书写顺序**我们一般遵循下面规则

:::tip css书写规则

- 位置属性(position, top, right, z-index, display, float等)
- 大小(width, height, padding, margin)
- 文字系列(font, line-height, letter-spacing, color- text-align等)
- 背景(background, border等)
- 其他(animation, transition等)
:::

4. `css`属性能够缩写的尽量缩写，如 `padding: 20px 10px 5px 0`

5. `css`属性值为`0`时，建议省略后边单位

6. `css`中尽量使用`class`类定位，谨慎大量使用`Id`定位，以及`!important`

7. `css`选择器定位时避免嵌套过多，最好不要超过三层

8. `css`使用逗号选择器时尽量换行，如

```css
.div,
.p,
.footer{
  background: #333;
}
```

## Vue书写规范

`Vue`的基本书写规范需了解官网 [风格指南](https://cn.vuejs.org/v2/style-guide/)

1. `Vue`中我们会在元素上写大量的`Vue`语法（属性）, 尽量按一下顺序书写

```vue
<template
  attr
  type="info"
  class="class-name"
  v-for="item in list"
  :lkey="item.id"
  :value="item.id"
  @click="submitHandle"
>
</template>
```


## React书写规范

`React` 使用`jsx`书写时，`js`书写规范适用于`React`

1. `react`组件名称尽量使用大驼峰法


## 项目版本管理规范


### 版本号

一般会使用`Git`来进行项目的版本管理。对于项目的版本号目前规定如下：

- 关于版本格式：`主版本号`.`次版本号`.`修订号` （如：`1.0.0`）

1. 主版本号：当你做了不兼容的 API 修改，比如构建大升级
2. 次版本号：当你做了向下兼容的功能性新增，比如新增部分功能
3. 修订号：当你做了向下兼容的问题修正，比如修复部分bug

另外项目版本也会分为测试版和稳定版两种

1. `Alpha` 测试版(一般为内部测试版)，如 `1.0.0-Alpha.1`
2. `Beta` 测试版(一般为公布测试版)，如 `1.0.0-Beta.1`
3. `Stable` 稳定版， 如 `1.x-stable`


### 分支

当项目进行版本更新时，使用`git`的`tag`功能进行标记。

`Git`分支管理合并方法可以简单查看[这里](http://www.ruanyifeng.com/blog/2012/07/git.html)

项目仓库一般分为下面几个分支

- `master` 主分支，完整的可用的和线上保持同步的分支仓库
- `dev` 测试分支，进行测试的分支
- `其它分支` 用于开发 或 修改bug的分支，一般`其它分支中包含下面分支`
  - `feature-*` 临时功能性分支 `*`为对应的功能名称
  - `fixbug` 修改临时`Bug`分支

分支开发完成后，在进行分支合并时，需要提交`commit`信息，关于`commit`提交规范请继续往下阅读


## Git Commit规范

### 提交格式

关于`Git Commi`t规范可以看[这篇文章](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

每次提交`Commit` 都包括三个部分：

```js
<type>(scope): <subject>
// 空行
<body>
// 空行
<footer>
```

1. 头部上的三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）。

**type**标识一般选择下面

- `feat` 新增功能
- `fix` 修复`bug`
- `docs` 修改文档
- `style` 修改样式(格式)，不会影响代码的运行
- `refactor` 重构项目
- `perf` 优化项目，如提升性能，体验
- `build` 打包
- `test` 增加测试功能
- `chore` 构建工具或辅助开发工具变动
- `revert` 回滚到版本
- `merge` 代码合并
- `api` 修改接口


**scope**是可选的，是关于本次`commit`所影响的范围。（根据自身项目而定）常见的值如：

- `all` 影响整个项目
- `image` 影响项目图片或icon
- `anchor` 影响某个锚点（如解决的指定的某个`Issues`）


**subject** 是描述`commit`的简短信息, 一般不超过50个字，尽可能的简洁，如果该`commit`是针对某个`issues`的，我们可以在后面加上`issues`编号如`#111`，来可以快速定位到具体`issues`


2. 关于`body`部分（可省略），主要是对本次`commit`的详细描述，可以省略


3. 关于`footer`部分（可省略）,在`footer`部分我们可以关闭对应的`Issues`。如 `Closes #111` 或关闭多个 `Closes #111, #222`

下面是一个`commit` 提交的示例：

```js
fix(all): 修复登录问题(#321)

修复不能登录的问题
1. 防止登录重复提交
2. 登录密码加密
```


### 合并多余Commit

当我们在自己的分支提交了大量的`commit`后，想要合并到主分支上时，不想带有这些没有价值的`commit`, 我们可以使用`git rebase`命令

- `git rebase`命令使用 [访问这里](https://www.cnblogs.com/zhaoyingjie/p/10259715.html)

### 搭建

- [相关文章](https://juejin.cn/post/6962056746328129567#heading-5)
#### Commitizen工具

`Commitizen`是一个可以检测提交的`commit`信息是否规范工具

[Commitizen 官网](https://commitlint.js.org/)


#### Commitizen工具

- [Commitizen github仓库](https://github.com/commitizen/cz-cli)

`Commitizen`是一个格式化`commit message`的工具。

#### lint-staged工具

`lint-staged`能够让`lint`只检测暂存区的文件，提升检测速度

- [相关使用文章](https://www.cnblogs.com/jiaoshou/p/12250278.html)
#### husky 工具

- [husky 文档](https://typicode.github.io/husky/#/)
- [githooks 钩子](https://git-scm.com/docs/githooks)


**需要注意的是：** `husky`在`v6`版本后做了重大的升级，该升级需要的`npm`版本要在`7.x`以上。相应的差异请看[这篇文章](https://blog.csdn.net/MrWeb/article/details/119878688), 



## 文档规范与完善
