---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, output, 出口文件，webpcak配置
  - name: description
    content: 本文主要讲述webpack的出口文件output的简单配置。
---

# Output 出口

[配置output](https://www.webpackjs.com/configuration/output/) 选项可以控制 `webpack` 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。


## 基本配置

`Output`字段的值是一个对象，从<Badge>webpack v4+</Badge>开始`Output`字段不在是必须配置项，当没有配置`Output`字段时，webpack默认输出`dist`目录下的`main.js`文件中。当我们在`webpack.config.js`中配置了`Output`字段时，将按照我们配置的输出目录进行输出。配置`Output`时需要最少配置输出文件名称`filename`和输出路径`path`，例如：

```js
module.exports = {
    output:{
        filename:'bundle_test.js',
        path:'/dist'
    }
}
```
上面webpack打包时会将test.js文件及其依赖编译到`bundle_test.js`文件中，并输出到根目录下的`/dist`目录中。我们来操作一下

**目录结构**

```
| --- node_modules
| --- src
    |--- test.js
| --- webpack.config.js
| --- package.json
```

`src/index.js`内容为`console.log(1111)`, `webpack.config.js` 内容为

```js
const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    entry: './src/test.js',
    output: {
        filename: 'bundle_test.js',
        path: path.resolve(__dirname,'./dist')
    }
};
```
当我们执行`npx webpack` 后我们可以看到在dist目录下生产了一个`bundle_test.js`文件。


## output.filename

`output.filename` 可以配置我们输出文件的名称，当我们值输出一个文件时，我们可以将名字写成固定的名称

```js
filename: 'bundle_test.js'
```

当我们要输出多个Chunk 时，可以使用`name`变量。

```js
filename: `bundle_[name].js`
```

现在我们将我们的项目目录改成这样
```
| --- node_modules
| --- src
    |--- one.js
    |--- two.js
    |--- three.js
| --- webpack.config.js
| --- package.json
```

原来的`webpack.config.js` 文件修改为：
```js
const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    entry: {
        'one': './src/one.js',
        'two': './src/two.js',
        'three': './src/three.js'
    },
    output: {
        filename: 'bundle_[name].js',
        path: path.resolve(__dirname, './dist')
    }
};
```
当我们执行`npx webpack` 后我们可以看到在dist目录下产生了`bundle_[name].js`、`bundle_[name].js`、`bundle_[name].js` 三个文件。

**除了变量`name`之外我们还可以使用`id`,`hash`来命名输出的文件**`

| 变量名 | 作用 |
|---|---|
|name|Chunk的名称|
|id|Chunk的唯一标识，从0开始逐渐递增|
|hash|Chunk的唯一标识的Hash值|
|chunkhash|Chunk内容的Hash值|

`[hash]` 和 `[chunkhash]` 的长度可以使用 `[hash:16]`（默认为20）来指定。或者，通过指定`output.hashDigestLength` 在全局配置长度。

## output.path

`output.path` 配置输出文件存放在本地的目录，该配置必须是绝对路径。一般我们会使用 `Node` 的 `path` 模块来获取绝对路径：

```js
path: path.resolve(__dirname, 'dist_[hash]')
```


## output.publicPath 

`output.publicPath` 配置按需加载或静态资源（如js、图片、css）等的公共路径。例如：

```js
module.exports = {
    output: {
        filename: 'bundle_[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'http://www.webxiaoma/com'
    }
};
```
我们在我们项目中的css中引入背景图片

```css
background-image:url('/assets/test.png')
```
那么打包出来这个图片的访问路径就会是`http://www.webxiaoma/com/assets/test.png`