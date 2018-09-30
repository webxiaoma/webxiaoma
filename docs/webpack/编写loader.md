---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack, Loader, 编写loader，webpack编写loader，webpack loader，
  - name: description
    content: 本文主要讲述使用webpack如何编写loder,以及变写loader的整体思路与过程。
---


# 编写 Loader

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/loader)

---

对于使用webpack的人来说[Loader](https://webpack.docschina.org/concepts/loaders/)已经不陌生了。下面我们来看看编写`loader`的大致思路


## 加载本地Loader

平常我们在使用`loader`时，是使用`npm`将`loader`下载到了`node_module`中，当我们在开发`loader`时，也不太可能放入`node_module`中，我们该如何引入我们的`loader`进行调试呢。[官网](https://webpack.docschina.org/contribute/writing-a-loader/#%E8%AE%BE%E7%BD%AE)中给了我们三种方法:

### 1.第一种方法

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // 通过path 直接引入
            loader: path.resolve('loader'), 
            options: {/* ... */}
          }
        ]
      }
    ]
  }
};
```

### 2.第二种方法

配置`resolveLoader`字段

```js
module.exports = {
  //...
  resolveLoader: {
    // webpack 会先从node_modules目录下寻找，然后在去loader目录下寻找
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loader')
    ]
  }
};
```


### 3.第三中方法

第三中方法是使用[NPM Link](http://javascript.ruanyifeng.com/nodejs/npm.html#toc18)，`NPM Link`是专门在我们开发和调试本地npm模块时候用的，它可以让我们在本地正常使用我们开发中的模块。使用方法也很简单

- 首先要将我们模块的名字添加到`package.json`配置文件中，
- 在我们开发的模块中执行`npm link`, 这样会在npm的全局模块目录内，生成一个符号链接文件。
- 在我们使用模块的项目中执行`npm link 开发模块名`。

现在我们就可以像往常一样使用开发中的模块了，另外如果你不想使用该模块了，可以执行`npm unlink 模块名`

## 开发Loader

### 同步Loader

最简单的`Loader`就像下面这样

```js
module.exports = function(source){
 // source 里面存储着要处理的文件内容，
 //我们这里没有做任何处理直接返回了。
   return source
}
```

编写同步的loader除了上面的写法我们还可以使用`this.callback()`

```js
module.exports = function(source, map, meta) {
  this.callback(null, source, map, meta);
  return; // 当调用 callback() 时总是返回 undefined
};
```

`this.callback()`的使用方法大致如下：

```js
this.callback(
    // 传给webpack的错误信息
    err: Error | null,
    // 传递处理后的内容，可以是字符串也可以是Buffer类型
    content: string | Buffer,
    // 用于把转换后的内容得出原内容的 Source Map
    sourceMap?: SourceMap,
    // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
    // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
    abstractSyntaxTree?: AST
);
```
### 异步Loader

使用异步形式编写Loader的方式如下：

```js
module.exports = function(content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};
```


## 常用API

- `this.context`：`loader` 上下文，即当前处理文件的所在目录。

- `this.query`：如果这个 `loader` 配置了` options` 对象的话，`this.query` 就指向这个 `option` 对象。
如果 `loader` 中没有 `options`，而是以 `query` 字符串作为参数调用时，`this.query` 就是一个以 `?` 开头的字符串。

- `this.resource`：当前处理文件的完整请求路径，包括 `querystring`。

- `this.resourcePath`：当前处理文件的路径。

- `this.resourceQuery`：当前处理文件的 `querystring`。

- `this.sourceMap`：应该生成一个 source map。因为生成 source map 可能会非常耗时，你应该确认 source map 确实有必要请求。

- `this.emitFile`：输出一个文件，使用方法为 `emitFile(name: string, content: Buffer|string, sourceMap: {...})`。


[更多API请查看官网](https://webpack.docschina.org/api/loaders/#loader-%E4%B8%8A%E4%B8%8B%E6%96%87)

另外除了常用`API`我们还有一些在开发`loader`时常用的库: 

1. [loader-utils 包](https://github.com/webpack/loader-utils)提供了许多有用的工具，但最常用的一种工具是获取传递给 `loader` 的选项。
2. [schema-utils 包](https://github.com/webpack-contrib/schema-utils)经常和`loader-utils`配合使用



## 实践

比如我们开发一个`test-loader`，我们有下面的`js`文件内容

```js
var div = document.querySelector('div')

var a = "<p>我是{{name}}</p>";
var c = '今年{{age}}岁';

div.innerHTML = a + c
```

我们想将`{{name}}` 和 `{{age}}` 替换成配置中的内容，如

```js
{
    test: /\.js$/,
    use: [
    {
        loader:'test-loader',
        options:{
            name: '小明',
            age:23
        }
    }
    ]
}
```

如果没有配置`{{name}}` 将被替换为`暂无姓名`， `{{age}}`将被替换为0，我们`test-loader`就应该这样写：

```js
const utils = require('loader-utils')
function  dispose(content,option = {name:'暂无姓名',age:0}){
    console.log(option)
   
    return content.replace(/\{\{name\}\}/g,option.name).replace(/\{\{age\}\}/g,option.age);
}

module.exports = function (source) {
    let option = utils.getOptions(this)
    let content = dispose(source,option)
    this.callback(null,content)
 };
```