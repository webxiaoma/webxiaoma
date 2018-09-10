---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, webpack开发模式, webpack生成模式，development，production
  - name: description
    content: 本文主要讲述webpack两种模式，production生产模式、development开发模式以及比不使用任何模式下的区别和表现形式。
---

# Mode 模式

---

[mode 配置选项](https://www.webpackjs.com/concepts/mode/)，告知 webpack 使用相应模式来进行打包并是使用相应的内置优化。[Gihub练习]()


## Mode配置

`webpack` 提供了三种模式 `production` 生产模式、 `development`开发模式 和 `none`不使用任何模式, 默认情况下webpack是使用的`production` 生产模式。

我们可以在配置中的`mode`字段中来配置`webpack`的编译模式。

```js
module.exports = {
  mode: 'production'
};
```

当然我们还可以使用`npx webpack --mode 模式`命令来告诉`webpack`使用什么模式来进行编译打包。我们来尝试一下这几种编译打包的模式。我们先建一个 `src` 文件夹在文件夹中建一个`index.js文件`，此时我们的目录结构是这样的

```
| --- node_modules
| --- src
    |--- index.js
| --- package.json
```

我们在 `index.js` 中写点内容

```js
function test() {
  console.log('hello world');
}
test();
```

## 以生产模式打包

```js
npx webpack --mode production
或
npx webpack // 这种情况会提示警告
```

我们执行完可以看到，`webpack` 自动寻找 `src` 下面的 `index.js` 为入口文件 并将其打包到 `dist` 文件下的 `main.js` 中，除此之外我们的代码还进行了压缩，并且`webpack`还为我们做了一些优化。


## 以开发模式打包

```js
npx webpack --mode development
```

这种模式和生成模式下比，打包出来的代码没有进行压缩，并且我们的代码被编译成了字符串并通过`evel` 来触发执行。

<MyImg src="/img/daima1.jpg" alt="webpack" />



## 以none模式打包


```js
npx webpack --mode none
```

这种模式和生成模式下比，打包出来的代码没有进行压缩，并且我们的代码并没有被编译成字符串。




