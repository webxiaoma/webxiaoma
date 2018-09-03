# Enter 入口


**[webpack入口配置](https://www.webpackjs.com/configuration/entry-context/)**，告诉了`webpack`开始构建的起点。


## 执行上下文

执行上下文`context`是webpack的基础目录，webpack在查找相对路径时默认使用当前目录，我们可以配置`context`来修改webpack的查找基目录。需要注意的是设置的目录必须是一个绝对路径，我们可以使用`nodejs`中的`path`模块

```js
// webpack.config.js 中
module.exports = {
    context: path.resolve(__dirname,'prject')
    entry:'./home',
}
```

## 配置方法

`webpack4.0+`以后不在强制配置入口文件，它有了默认的入口文件，即`webpack`执行时，如果没有设置入口文件则默认为`src/index.js`。


1. 不配置入口文件

```js
npx webpack 
```
这种情况下webpack按照默认的配置来查找`src`目录下的`index.js`文件，如果没有找到将会报错。

2. 配置入口文件这的`entry`字段

```js
// webpack.config.js 中
module.exports = {
    entry:'./home',
}
```
在`webpack.config.js`文件中配置了入口文件路径`./home`，这时`webpack`在执行时将会采用`webpack.config.js`文件中同级目录下的`home文件`作为入口文件。

## 多入口

另外我们还可以设置多个入口文件，这在多页面应用中很有用：

```js
// webpack.config.js 中
module.exports = {
    entry:{
        'one':'./one.js',
        'two':'./two.js',
        'three':'./three.js',
    },
}
```
## Chunk命名

Webpack 会为每个生成的 Chunk 取一个名称，如果传入一个字符串或字符串数组，`chunk `会被命名为 `main`。如果传入一个对象，则每个键`(key)`会是 `chunk` 的名称，该值描述了` chunk `的入口起点。

## 动态入口

当项目中有多个页面入口时，并且这些入口文件的数量不确定，以后可能会增加，这时我们尽量将入口文件写出函数形式来返回入口文件：


1. 同步形式

```js
// webpack.config.js 中
module.exports = {
    entry:()=>'./home',
}
```

2. 异步形式

```js
// webpack.config.js 中
module.exports = {
    entry:()=> new Promise(resolve=> resolve({
        'one':'./one.js',
        'two':'./two.js'
    })),
}
```

## 总结

::: tip 
入口`entry`字段可以是字符串、数组、对象、函数。当`entry`为数组时，webpack会将多个入口的依赖导向(graph)到一个`chunk`，当我们开发多页面应用程序时，我们可以将`entry`设置为对象的形式，当我们入口文件是动态的，入口数量不确定时，我们可以将`entry`设置为函数的形式，在函数中返回我们动态生成的入口文件（可能是字符串、数组、对象）。

另外需要注意的`entry`字段必须是绝对路径。
:::






