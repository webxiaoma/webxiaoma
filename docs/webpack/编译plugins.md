---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack, webpack处理图像, url-loader，图片处理，压缩图片，image-webpack-loader，file-loader
  - name: description
    content: 本文主要讲述webpack中使用url-loader处理资源路径问题，使用image-webpack-loader处理图片的压缩问题。
---

# 编译 Plugins

---

## 插件(plugins) 的认识


官方解释：插件是 `webpack` 的支柱功能。`webpack` 自身也是构建于，你在 `webpack` 配置中用到的相同的插件系统之上！插件目的在于解决 `loader` 无法实现的其他事。[详情](https://webpack.docschina.org/concepts/plugins/#%E5%89%96%E6%9E%90)

说白了就是我们在使用webpack 编译的时候如果想改编译后生成的文件的名字或文件的中的内容这时我们将会用到一些插件，在webpack编译过程中（钩子中）去做一些手脚（处理）

webpack 的插件有很多，有内置插件当然还有社区提供的插件，当然你自己也可以开发一个插件。社区的插件我们需要使用npm先进行安装，然后在引入，内置的插件在 `webpack.optimize` 对象上，我们可以直接使用。[常见的内置插件](https://webpack.docschina.org/plugins)


## 插件(plugins) 的使用

我们使用wepback  的插件官方提供了两种方法

1. 在 webpack.config.js 中配置使用  

在`webpack.config.js `中我们可以在plugins 字段数组中镜进行配置，这个方法也是官网比较推荐的方法，如：

```JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [ //  配置插件
     new HtmlWebpackPlugin({template: './src/index.html'})，
     new webpack.optimize.CommonsChunkPlugin()
  ]
};

```

2. 通过Node API 调用

```JavaScript
const webpack = require('webpack'); //访问 webpack 运行时(runtime)
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

let compiler = webpack(configuration);
compiler.apply(new HtmlWebpackPlugin());
```


## 插件(plugins) 的编写

[webpack官网](https://webpack.docschina.org/contribute/writing-a-plugin/)已经很详细的介绍了编写插件的放法。 webpack提供了两个在编写插件时的很重的接口(资源) `compiler ` 和 `compilation`，了解了这两个资源，我们基本就可以上手了。官网对这个两个插件的解释：


> compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用 compiler 来访问 webpack 的主环境。

> compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。


通过上面解释我们可以大概理解为，`compiler` 包含着wepback 的一些配置，当我们需要一些配置时，可以操作`complier`, 事实上`compiler` 上包含了`webpack` 启时的一些钩子函数，例如：

- `entryOption `在 webpack 选项中的 entry 配置项 处理过之后执行
-` beforeRun` 在 `compiler.run()` 执行之前，添加一个钩子
- `watchRun` 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。
- `compile` 一个新的编译(compilation)创建之后，钩入`(hook into) compiler`
- `emit` 生成资源到 `output `目录之前。
- `done` 编译(compilation)完成后执行

更多钩子函数：[compiler钩子](https://webpack.docschina.org/api/compiler-hooks/)

这些钩子函数在` compiler.hooks` 对象上，并且按官网所说插件是由「具有 `apply` 方法的` prototype` 对象」所实例化出来的。这个 `apply` 方法在安装插件时，会被 `webpack compiler` 调用一次。`apply` 方法可以接收一个 `webpack compiler` 对象的引用，从而可以在回调函数中访问到 `compiler `对象。一个简单的插件结构如下：使用方法如下：

```JavaScript

class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }
    
  apply(compiler) {
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World!');
      console.log(this.options);
    });
  }
}

module.exports = HelloWorldPlugin;

// apply 方法在wepback构建时会自动被webpack调用，并传入complier 对象，
//当构建完成时调用done 钩子函数，这里tab 表示以同步方式调用，
//调用的钩子函数第一个参数是注释说明，第二个回调函数，当然回调函数中也会注入一些参数，下面讲
```

然后在webpack 配置plugin数组中添加一个实例

```JavaScript
// webpack.config.js
var HelloWorldPlugin = require('hello-world');

module.exports = {
  // ... 这里是其他配置 ...
  plugins: [
    new HelloWorldPlugin({setting: true})
  ]
};
```


上面是有的钩子函数时同步的，`webpack` 也提供了两种异步的方式：`tapAsync` 和 `tapPromise`。

```JavaScript


class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }
    
  apply(compiler) {
      
      // tapAsync 方式 具有回调函数 callback
    compiler.hooks.emit.tapAsync('HelloWorldPlugin', (compilation,callback) => {
        setTimeout(()=>{
            console.log("异步钩子")
            callback() // 执行回调函数
        },2000)
      
    });
      
     // tapPromise 方式
    compiler.hooks.emit.tapPromise('HelloWorldPlugin', (compilation) => {
      return new Promise(resolve=> setTimeout(()=>{
          resolve()
      },2000)).then(() => {
          console.log('异步处理');
        });
      
    });
  }
}

module.exports = HelloWorldPlugin;
```


我们设置wepack 执行时的钩子我们还需要在`wepack`构建资源时做一些处理，`wepack`构建资源模块的一些信息和钩子在 `compilation `对象上，而`compilation`对象是在`complier`对象的上的钩子函数执行时传入的第一个参数。如：

```JavaScript
class HelloCompilationPlugin {
  apply(compiler) {
    // 置回调来访问 compilation 对象：
    compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
      // 现在，设置回调来访问 compilation 中的步骤：
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('Hello compilation!');
      });
    });
  }
}

module.exports = HelloCompilationPlugin;
```

compilation 的hooks 对象上也是有一些钩子函数：

- buildModule 在模块构建开始之前触发。
- rebuildModule 在重新构建一个模块之前触发。
- optimize 优化阶段开始时触发。

更多的钩子见：[compilation钩子API](https://webpack.docschina.org/api/compilation-hooks/)

`compilation` 除了`hooks` 对象 还包含一些对象，这里只写出了几个主要的:

- compilation.modules：编译后的（内置输入的）模块数组。每个模块管理控制来源代码库(source library)中的原始文件(raw file)的构建。
  module.fileDependencies：模块中引入的源文件路径构成的数组。这包括源 JavaScript 文件本身（例如：index.js）以及它所需的所有依赖资源文件（样式表、图像等）。审查依赖，可以用于查看一个模块有哪些从属的源文件。
- compilation.chunks：编译后的（构建输出的）chunk 数组。每个 chunk 所管理控制的最终渲染资源的组合。
  chunk.modules：chunk 中引入的模块构成的数组。通过扩展(extension)可以审查每个模块的依赖，来查看哪些原始源文件被注入到 chunk 中。
  chunk.files：chunk 生成的输出文件名构成的数组。你可以从 compilation.assets 表中访问这些资源来源。

- compilation.assets 包含所有模块的对象，我们可以通过他来获取某个文件信息和内容，也可也可以修改获取的文件，并且也可以向该对象中添加文件（或文件夹）

这里有个官方例子：

```JavaScript
function MyPlugin() {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {

    // 检索每个（构建输出的）chunk：
    compilation.chunks.forEach(function(chunk) {
      // 检索 chunk 中（内置输入的）的每个模块：
      chunk.modules.forEach(function(module) {
        // 检索模块中包含的每个源文件路径：
        module.fileDependencies.forEach(function(filepath) {
          // 含有每个模块引入的路径
        });
      });

      // 检索由 chunk 生成的每个资源(asset)文件名：
      chunk.files.forEach(function(filename) {
        // 获取某个模块（图片，文件，音频视频）
        var source = compilation.assets[filename].source();
          
           //   将文件写入名为index.html 的新文件
         compilation.assets['index.html'] = {
               source() {  // 向文件中写入内容
                   return source;
               },
               size() {
                   return source.length;
               }
          };
      });
           
    });

    callback();
  });
};

module.exports = MyPlugin;
```

### **四、练习**

现在我们在打包时将js的开头注入一段注释，注释作者和时间。

先将我们的目录建立起来：

```JavaScript

|-----lib
     |---- index.js   // 我们要编写插件的文件
|-----src
     |---- index.js  // 入口文件
|-----.babelrc.   // babel配置文件
|-----webpack.config.js // webpack配置文件

```

初始化项目,生成`package.json` 文件

```JavaScript
npm init
```

安装`webpack`、`webpack-cli`，在`webpack4`中编译和CLI命令已经分开了。

```JavaScript
npm install -D webpack webpack-cli 
```

安装`babel`转码ES6

```JavaScript
npm install -D babel-core babel-loader babel-preset-env
```
我们在` .babelrc. `文件中定义es6 转码规则

```JavaScript
{
    "presets":[
        "env"
    ]
}

```

另外我们还需要在`webpack.config.js`  中对`webpack `进行编译配置

```JavaScript
module.exports = {
   mode: 'development',
   module: {
     rules: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }
     ]
   }
};

```

然后我们在 package.json 中添加打包命令

```JavaScript
"scripts": {
    "build": "npx webpack",
 },
```

这次我们执行  `npm run build` 会生成一个 `dist `目录 并且dist目录中有一个`main.js` 文件，`main.js` 文件开头并没有我们想要添加的注释。接下来我们来在`lib `目录下的`index.js` 中编写我们的插件来添加我们想要的注释


```JavaScript
// lib/indx.js 文件
class TestPlugin {
    constructor(options) {
      this.options = Object.assign({  // 配置项默认webxiaoma
          name: 'webxiaoma'
      },options);
    }

    apply(compiler) {
         //生成资源到 output 目录之前 的钩子中操作
      compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {  
        compilation.chunks.forEach(chunk => {
              chunk.files.forEach(filename=>{
                let filesSource = compilation.assets[filename].source(); // 获取文件内容
                let source = `//作者：${this.options.name} \n//时间：${new Date()}  \n${filesSource}`;

                compilation.assets[filename] = { // 修改文件内容
                    source() {
                            return source;
                    },
                    size() {
                            return source.length;
                    }
                };
              });
        });

        console.log('修改完成');
      });
    }
  }

  module.exports = TestPlugin;

```

写好我们的简单插件后我们在` webpack.config.js `文件中引入


```JavaScript
const TestPlugin = require('./lib/index.js');

module.exports = {
   mode: 'development',
   module: {
     rules: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }
     ]
   },
   plugins: [
       new TestPlugin({
           name: '小明'
       })
   ]
};

```

之后我们在经常打包操作`npm run buld ` 在生成的main.js中的头部会生成作者为小明，和时间的注释。


```JavaScript
//作者：小明 
//时间：Tue Aug 14 2018 10:32:16 GMT+0800 (中国标准时间)  
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
    
 ... 省略部分
```

接下来我们想将生成的`main.js` 放在`dist `文件夹里的js文件夹里，目录结构如下：


```JavaScript

|---- dist
     |---- js
         |---- main.js 
```


编写的插件如下：


```JavaScript

class TestPlugin {
    constructor(options) {
      this.options = Object.assign({
          name: 'webxiaoma'
      },options);
    }

    apply(compiler) {
      compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {
        compilation.chunks.forEach(chunk => {
              chunk.files.forEach(filename=>{
                let filesSource = compilation.assets[filename].source();
                let source = `//作者：${this.options.name} \n//时间：${new Date()}  \n${filesSource}`;
                    
                    // 判断是否是js文件，如果是拷贝一份放到js文件夹下，并清除原来js
                    if ((/\.js$/).test(filename)) { 
                          // 这里将js文件放入到js文件夹下后，删除以前assets存在的该文件。
                          delete compilation.assets[filename];
                          compilation.assets[`js/${filename}`] = {
                              source() {
                                      return source;
                              },
                              size() {
                                      return source.length;
                              }
                          };
                    } else {
                        compilation.assets[filename] = {
                            source() {
                                    return source;
                            },
                            size() {
                                    return source.length;
                            }
                        };
                    }
              });

       
        console.log('构建完成');
      });
    }
  }

  module.exports = TestPlugin;

```

接下来我们可以在`dist `目录下生成一个` index.html `文件 来引入`main.js`，修改上边代码

```JavaScript
class TestPlugin {
    constructor(options) {
      this.options = Object.assign({
          name: 'webxiaoma'
      },options);
    }

    apply(compiler) {
      compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {
        compilation.chunks.forEach(chunk => {
              chunk.files.forEach(filename=>{
                let filesSource = compilation.assets[filename].source();
                let source = `//作者：${this.options.name} \n//时间：${new Date()}  \n${filesSource}`;

                if ((/\.js$/).test(filename)) { // 判断是否是js文件，如果是放到js文件夹下
                      // 这里将js文件放入到js文件夹下后，删除以前assets存在的该文件。
                      delete compilation.assets[filename];
                      compilation.assets[`js/${filename}`] = {
                          source() {
                                  return source;
                          },
                          size() {
                                  return source.length;
                          }
                      };
                } else {
                    compilation.assets[filename] = {
                        source() {
                                return source;
                        },
                        size() {
                                return source.length;
                        }
                    };
                }
              });
      });
               
        //  创建index.html
        let contentHTML = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                    <title>测试</title>
                                </head>
                                <body>
                                    <div id="root"></div>
                                    <script src="./dist/js/main.js"></script>
                            </body>
                            </html>`;
          compilation.assets['index.html'] = {
             source() {
                 return contentHTML;
             },
             size() {
                 return contentHTML.length;
             }
          };
    });
    }
  }

  module.exports = TestPlugin;

```

我们执行 `npm run buld `, 最后我们的目录变成了下面这样：


```JavaScript

|---- dist
     |---- js
         ---- main.js 
 ---- index.html
```

如果我们的目录是下面这样的：根目录多了一个index.html

```JavaScript

|-----lib
     |---- index.js   // 我们要编写插件的文件
|-----src
     |---- index.js  // 入口文件
|-----.babelrc.   // babel配置文件
|-----webpack.config.js // webpack配置文件
|-----index.html 
```

我们想将`index.html` 打包到`dist `中，并且在`index.html `内容的基础之上引入我们打包后的` main.js`文件。
我们可以这样实现，我们在编写的插件中暴露出一个接口来获取`index.html` 文件的路径，然后在打包输出时，读取`index.html` 文件并进行修改，最后输出。我们可以在原来基础上进行修改

```JavaScript
// lib/index.js文件
const fs = require('fs');

class TestPlugin {
    constructor(options) {
      this.options = Object.assign({
          name: 'webxiaoma',
          htmlPath: ''  // 获取index.html路径
      },options);
    }

    apply(compiler) {
      compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {
        compilation.chunks.forEach(chunk => {
              chunk.files.forEach(filename=>{
                let filesSource = compilation.assets[filename].source();
                let source = `//作者：${this.options.name} \n//时间：${new Date()}  \n${filesSource}`;

                if ((/\.js$/).test(filename)) { // 判断是否是js文件，如果是放到js文件夹下
                      // 这里将js文件放入到js文件夹下后，删除以前assets存在的该文件。
                      delete compilation.assets[filename];
                      compilation.assets[`js/${filename}`] = {
                          source() {
                                  return source;
                          },
                          size() {
                                  return source.length;
                          }
                      };
                } else {
                    compilation.assets[filename] = {
                        source() {
                                return source;
                        },
                        size() {
                                return source.length;
                        }
                    };
                }
              });
        });

        // 生成index,html 文件
        let contentHTML;
        if (this.options.htmlPath) { // 如果文件路径存在，读取文件
            let htmlFile = fs.readFileSync(this.options.htmlPath).toString();
            // 添加打包后的js文件
            let content = '\n<script src="./dist/js/main.js"></script>\n</body>';
            contentHTML = htmlFile.replace('</body>',content);
        } else {
             contentHTML = `<!DOCTYPE html>
                <html lang="en">
                <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>测试</title>
                    </head>
                    <body>
                        <div id="root"></div>
                        <script src="./dist/js/main.js"></script>
                </body>
                </html>`;
        }

          compilation.assets['index.html'] = {
             source() {
                 return contentHTML;
             },
             size() {
                 return contentHTML.length;
             }
          };
        console.log('编译完成!');
      });
    }
  }

  module.exports = TestPlugin;

```

然后我们修改一些 webpack.config.js 文件

```JavaScript
const path = require('path');
const TestPlugin = require('./lib/index.js');

module.exports = {
   mode: 'development',
   module: {
     rules: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }
     ]
   },
   plugins: [
       new TestPlugin({
           name: '小明',
           htmlPath: path.join(__dirname,'index.html') // 添加index.html 路径
       })
   ]
};

```

之后我们打包就可以实现我们想要的效果了。最后贴出源码 [github 仓库](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/plugins)


