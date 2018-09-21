---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack, plugins, 编写plugins，webpack处理plugin，webpack编写插件，插件plugins
  - name: description
    content: 本文主要讲述使用webpack编写plugins插件，认识编写plugins的整体思路与过程。
---

# 编写 Plugins

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/plugins)

---

## 插件(plugins) 的认识

官方解释：[插件](https://webpack.docschina.org/concepts/plugins/#%E5%89%96%E6%9E%90)是 `webpack` 的支柱功能。`webpack` 自身也是构建于，你在 `webpack` 配置中用到的相同的插件系统之上！插件目的在于解决 `loader` 无法实现的其他事。

说白了就是我们在使用`webpack` 编译的时候如果想改编译后生成的文件的名字或文件的中的内容这时我们将会用到一些插件，在`webpack`编译过程中（钩子中）去做一些手脚（处理）

`webpack` 的插件有很多，有内置插件当然还有社区提供的插件，当然你自己也可以开发一个插件。社区的插件我们需要使用npm先进行安装，然后在引入，内置的插件在 `webpack.optimize` 对象上，我们可以直接使用。[常见的内置插件](https://webpack.docschina.org/plugins)


## 插件(plugins) 的编写须知

[webpack官网](https://webpack.docschina.org/contribute/writing-a-plugin/)已经很详细的介绍了编写插件的方法。

 webpack提供了两个在编写插件时的很重的接口(资源) [compiler](https://webpack.docschina.org/api/compiler/)  和 [compilation](https://webpack.docschina.org/api/compilation/)，官网对这个两个插件的解释：


> `compiler` 对象代表了完整的 `webpack` 环境配置。这个对象在启动 `webpack` 时被一次性建立，并配置好所有可操作的设置，包括 `options`，`loader` 和 `plugin`。当在 `webpack` 环境中应用一个插件时，插件将收到此 `compiler` 对象的引用。可以使用 `compiler` 来访问 `webpack` 的主环境。

> `compilation` 对象代表了一次资源版本构建。当运行 `webpack` 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 `compilation`，从而生成一组新的编译资源。一个 `compilation` 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。`compilation` 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。


通过上面解释我们可以大概理解为，`compiler` 代表的是我们整个`webpack`的生命周期，`compiler` 上面有我们一些[生命周期的钩子](https://webpack.docschina.org/api/compiler-hooks/)，例如：

- `entryOption `在 webpack 选项中的 entry 配置项 处理过之后执行
-` beforeRun` 在 `compiler.run()` 执行之前，添加一个钩子
- `watchRun` 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。
- `compile` 一个新的编译(compilation)创建之后，钩入`(hook into) compiler`
- `emit` 生成资源到 `output `目录之前。
- `done` 编译(compilation)完成后执行


这些钩子函数在` compiler.hooks` 对象上，并且按官网所说插件是由「具有 `apply` 方法的` prototype` 对象」所实例化出来的。这个 `apply` 方法在安装插件时，会被 `webpack compiler` 调用一次。`apply` 方法可以接收一个 `webpack compiler` 对象的引用，从而可以在回调函数中访问到 `compiler `对象。一个简单的插件结构如下：

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
//调用的钩子函数第一个参数是注释说明，第二个回调函数，当然回调函数中也会注入一些参数。
```

而`compilation`代表的是`wepback`每次的编译, 同样和`compiler`类似的它也有一些编译时的[生命周期的钩子](https://webpack.docschina.org/api/compilation-hooks/), 并且这些钩子函数在` compilation.hooks` 对象上

- `buildModule` 在模块构建开始之前触发。
- `rebuildModule` 在重新构建一个模块之前触发。
- `optimize` 优化阶段开始时触发。

另外我们需要知道的是`compilation`对象是在`complier`对象的上的钩子函数执行时传入的第一个参数，`compilation`对象的使用如下：

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

通过上面的例子我们会看到一个`tap`监听器，webpack中生命周期的钩子需要使用监听器去监听，除了同步形式的`tap`监听器外webpack还提供了一些异步监听器：

- `tapAsync`： 异步形式的方式监听钩子事件
- `tapPromise`： 以`promise`异步形式的方式监听钩子事件

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
```

:::tip 小提示
`compiler`和`compilation` 都继承自[Tapable](https://webpack.docschina.org/api/tapable/)，监听事件的出发我们还可以使用`complier.plugin('事件名'，回调函数)`，另外我们还可以通过`complier.apply('自定义事件名',参数)`自定义广播事件
:::



## 编写插件时常用API

因为`webpack`编写插件时提供了大量的`API`,好多是我们不经常用的，下面总结了一些常用的`API`, 这些API主要存储在`compilation`对象中


- `compilation.modules`：编译后的（内置输入的）模块数组。每个模块管理控制来源代码库(source library)中的原始文件(raw file)的构建。
  `module.fileDependencies`：模块中引入的源文件路径构成的数组。这包括源 `JavaScript` 文件本身（例如：index.js）以及它所需的所有依赖资源文件（样式表、图像等）。审查依赖，可以用于查看一个模块有哪些从属的源文件。
- `compilation.chunks`：编译后的（构建输出的）`chunk` 数组。每个 chunk 所管理控制的最终渲染资源的组合，在`chunk`中还有以下属性：
   
   1. `chunk.modules`：`chunk `中引入的模块构成的数组。通过扩展(extension)可以审查每个模块的依赖，来查看哪些原始源文件被注入到 chunk 中。
   2. `chunk.files`：`chunk` 生成的输出文件名构成的数组。你可以从 `compilation.assets `表中访问这些资源来源。

- `compilation.assets` 包含所有模块的对象，我们可以通过他来获取某个文件信息和内容，也可也可以修改获取的文件，并且也可以向该对象中添加文件（或文件夹），
   1. `assets[filename].source()`读取输出资源的内容
   2. `assets[filename].size()`读取输出资源的文件大小

- `compiler.options.plugins` 获取配置中使用的插件列表
- `compilation.fileDependencies` webpack监听文件的列表，是个数组，可以将我们要监听的文件路径放进入，来实现进行监听
```JavaScript
function MyPlugin() {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {

    // 检索每个（构建输出的）chunk：
    compilation.chunks.forEach(function(chunk) {
      // chunk是一个代码块
      // 检索 chunk 中（内置输入的）的每个模块：
      chunk.modules.forEach(function(module) {
        // 检索模块中包含的每个源文件路径：
        module.fileDependencies.forEach(function(filepath) {
          // 含有每个模块引入的路径
        });
      });

      // 检索由 chunk 生成的每个资源(asset)文件名：
      chunk.files.forEach(function(filename) {
        // assets对象中存放着所有要输出的资源
        // 调用source()方法获取某个模块（图片，文件，音频视频）内容 
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
    // 在事件钩子中处理完后调用callback(),让webpack继续向下执行
    callback(); 
  });
};

```

- `watching.compiler.watchFileSystem.watcher.mtimes` 获取发生变化的文件列表

```js
// 监听文件变化事件
compiler.plugin('watch-run',(watch,callback)=>{
    // 获取发生变化的文件列表（数组）
   let  filesChange = watching.compiler.watchFileSystem.watcher.mtimes;
   callback();
})

compiler.plugin('after-compile', (compilation, callback) => {
    // 把要观察的文件路径filePath 添加到webpack观察数组中
    compilation.fileDependencies.push(filePath);
    callback();
});
```





## 实践练习

现在我们在打包出来的`js`文件的开头注入一段注释，注释作者和时间。

先将我们的目录建立起来：

```JavaScript
|-----lib
     |---- index.js   // 我们要编写插件的文件
|-----src
     |---- index.js  // 入口文件
|-----.babelrc.   // babel配置文件
|-----webpack.config.js // webpack配置文件
```

初始时我们执行  `npm run build` 会生成一个 `dist `目录 并且dist目录中有一个`main.js` 文件，`main.js` 文件开头并没有我们想要添加的注释。接下来我们来在`lib `目录下的`index.js` 中编写我们的插件来添加我们想要的注释

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

然后我们修改一下 webpack.config.js 文件

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



当然你也可以将你写好的插件发布的npm官网供大家使用[使用npm发布包](http://webxiaoma.com/node/npm.html#npm%E5%88%9D%E6%AD%A5%E4%BA%86%E8%A7%A3)