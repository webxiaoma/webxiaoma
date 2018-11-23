---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, module, loader配置，webpcak配置，webpack-loader
  - name: description
    content: 本文主要讲述webpack的模块处理，以及怎么使用webpack按照loader规则解析编译文件。
---

# Babel的使用

[GitHub](https://github.com/docschina/babeljs.io)

## babel 介绍

[Babel](https://www.babeljs.cn/)是一个 `JavaScript `编译器，它可以将` es6`中的代码编译成目前大多数浏览器识别的`es5`代码。

例如它将以ES6代码下：

```JavaScript
let test = a =>console.log(a)
```

编译成ES5 代码：

```JavaScript
"use strict";

var test = function (a){
    return a
}
```

并且 `babel` 还支持 `react`的 `JSX` 语法


## .babelrc. 配置文件

在babel 编译es6之前需要知道该以哪种规则或条件去编译，而这些条件和编译方式我们写在`.babelrc.`  配置文件 中,也可在通过 `package.json` 来配置`.babelrc.` ，`Babel `会在正在被转录的文件的当前目录中查找一个` .babelrc` 文件。 如果不存在，它会遍历目录树，直到找到一个 `.babelrc` 文件，或一个 `package.json` 文件中有` "babel": {} `。另外我们还要下载一些相应的编译插件。

中文官网：[.babelrc 的使用方法](https://babel.docschina.org/docs/en/babel-core)

```JavaScript
{
  "presets": [], // 编译规则
  "plugins": []  // 编译插件
}
```


### **1. babel预设**

:::tip
官方预设(preset), 有两种，一个是按年份(`babel-preset-2017`)，一个是按阶段(`babel-preset-stage-X`)。 这主要是根据TC39 委员会`ECMASCRPIT` 发布流程来制定的。TC39 委员会决定，从2016年开始，每年都会发布一个版本，它包括每年期限内完成的所有功能，同时`ECMAScript`的版本号也按年份编制，就有了ES2016, ES2017。所以也就有了babel-present-2016, `babel-preset-2017`， 对每一年新增的语法进行转化。`babel-preset-latest` 就是把所有es2015, es2016, es2017 全部包含在一起了。
:::

以下是4 个不同阶段的（打包的）预设：

- `babel-preset-stage-0`
- `babel-preset-stage-1`
- `babel-preset-stage-2`
- `babel-preset-stage-3`



`babel-preset-latest` 编译插件是一个特殊的presets，包括了 `es2015`，`es2016`，`es2017`的插件（目前为止，以后有es2018也会包括进去）。即总是包含最新的编译插件。

由于现在浏览器对ES6 的支持度越来越高，如果我们使用`babel-preset-latest` 编译插件则会将一些本不需要的编译（大多数浏览器都支持的ES6 语法）编译成臃肿的es5语法。为此我们可以使用 `babel-preset-env`编译插件


### **2. .babelrc. 的配置**

安装 `babel-preset-env`编译插件

```JavaScript
npm install -D babel-preset-env
```

在`.babelrc.`  配置文件中进行配置，没有选项的默认行为会运行所有转换（行为与`babel-preset-latest`相同）

```JavaScript
{
    "presets": [
        [
          "env",
          {
              "targets":{
                  "browsers": ["last 2 versions", "ie >=8 "]  // 指定支持主流浏览器最新的两个版本以及IE 7+:
              },
              "plugins":["transform-vue-jsx"], // 使用编译扩展插件，这里使用的vue扩展插件
              "node": true,   // 针对当前node版本进行编译
              "modules": "amd" // 启用将ES6模块语法转换为另一种模块类型
          }
        ]
    ]

}

```

当然我们还可以设置固定版本的浏览器：

```JavaScript
"targets": {
  "chrome": 60
}
```
支持超过市场份额5%的浏览器:

```JavaScript
"targets": {
  "browsers": "> 5%"
}
```

[babel 的更多配置](http://babeljs.io/docs/en/babel-preset-env/)



## babel 的使用方式

###  浏览器中

在页面中引入

```JavaScript
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

然后在 `.babelrc.` 配置文件中进行配置


### babel-cli命令行

`babel-cli`是通过命令行来编译`ES6`代码的，首先先安装 `babel-cli`

```JavaScript
npm install babel-cli --save-dev  // 局部安装的
```

**需要注意的是**：执行以下命令前也需要先在 `.babelrc. `配置文件中进行配置, 不然不会编译文件

- 在命令版中输出编译的test.js 文件

```JavaScript
npx babel test.js
```

- 将编译文件输出指定的文件
```JavaScript
$ babel example.js --out-file compiled.js
# 或
$ babel example.js -o compiled.js

```

- 编译整个文件夹中的文件
```JavaScript
$ babel src --out-dir lib
# 或
$ babel src -d lib

```
### Babel-core编译

[babel-core](https://babel.docschina.org/) 的作用是把 `js` 代码分析成 `ast`( 抽象语法树 ,是源代码的抽象语法结构的树状表现形式) ，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 `ast`，分析其语法后再转为低版本 `js`。


首先安装`babel-core`

```js
npm install babel-core --save-dev  // 局部安装的
```

我们可以使用一下方式引入`babel-core`

```js
var babel = require("babel-core");
import { transform } from 'babel-core';
import * as babel from 'babel-core';
```

字符串形式的Js代码可以使用`babel.transform`来编译

```js
babel.transform("code();", options, function(err, result) {
  result.code; // 编译结果
  result.map;  // 编译的map
  result.ast;  // 编译的ast
});
```
关于`options`的配置项可以查看[官网Options](https://babel.docschina.org/docs/en/options)

如果是文件的话，可以使用异步方法`babel.transformFile`：

```js
babel.transformFile("filename.js", options, function(err, result) {
  result; // => { code, map, ast }
});
```

或者是同步方法`babel.transformFileSync`：

```js
babel.transformFileSync("filename.js", options, function(err, result) {
  result; // => { code, map, ast }
})
```



## Babel插件

上面的`babel`虽然可以编译所有时新的 `JavaScript` 语法，但是，但对于新增 `APIs` 来说却没有能力，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如`Object.assign`）都不会转码。这时候我们就要用到`babel`的一些插件了。配置`babel`插件我们可以在`plugins`字段中配置

```json
{
  "presets": [],
  "plugins":[]
}
```

另外babel经常和我们的构建工具一起使用，比如通过[webpack使用](/webpack/处理es6.html)，通过`glup`使用。更多使用方法见[官网配置](https://babel.docschina.org/en/setup)

为了达成使用这些新API的目的，社区又有2个实现流派：`babel-polyfill`和`babel-runtime+babel-plugin-transform-runtime`。

这两个模块功能几乎相同，就是转码新增 `api`，模拟 `es6` 环境，但实现方法完全不同。`babel-polyfill` 的做法是将全局对象通通污染一遍，比如想在 `node 0.10` 上用 `Promise`，调用 `babel-polyfill` 就会往 `global` 对象挂上 `Promise` 对象。对于普通的业务代码没有关系，但如果用在模块上就有问题了，会把模块使用者的环境污染掉。

`babel-runtime` 的做法是自己手动引入 `helper` 函数，还是上面的例子，`const Promise = require('babel-runtime/core-js/promise')` 就可以引入 `Promise`。

但 `babel-runtime` 也有问题，第一，很不方便，第二，在代码中中直接引入 `helper `函数，意味着不能共享，造成最终打包出来的文件里有很多重复的 `helper` 代码。所以，`babel`又开发了 `babel-plugin-transform-runtime`，这个模块会将我们的代码重写，如将 `Promise` 重写成 `_Promise`（只是打比方），然后引入`_Promise helper` 函数。这样就避免了重复打包代码和手动引入模块的痛苦。

### babel-polyfill

`babel-polyfill` 使用`es5`或`es3`实现一些新的`api`，并注入全。使用时我们先要安装：

```js
npm i -S babel-polyfill
```

安装完成后我们需要在入口页面中引入（尽量放到最上边）

```js
import "babel-polyfill"
```

或在webpack中的入口文件中引入

```js
module.exports = {
  entry:{
          'polyfill':'babel-polyfill',
          'index':'./src/index.js'
  },
 ...
}
```

### babel-runtime

`babel-runtime` 插件和`babel-polyfill` 不同的是，它并不会在全局注入一些新`api`，而是将我们写的新语法转换成浏览器识别的代码。`babel-runtime`通常和`babel-plugin-transform-runtime` 配合使用

```js
npm i -S babel-runtime babel-plugin-transform-runtime
```

然后在`.babelrc`配置文件中配置

```json
{
  "plugins": [
    "transform-runtime"
  ]
}
```


**参考文章**

[Babel的使用](https://segmentfault.com/a/1190000008159877#articleHeader7)
[Babel 用户手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)