---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, module, loader配置，webpcak配置，webpack-loader
  - name: description
    content: 本文主要讲述webpack的模块处理，以及怎么使用webpack按照loader规则解析编译文件。
---

# module 模块

---

[module 模块](https://www.webpackjs.com/configuration/module/)选项决定了如何处理项目中的不同类型的模块。


## module.rules

`rules` 配置webpack在编译文件时，使用哪种`Loader`去编译。配置`Rules`时我们大致会通过这几步来完成

**1. 设置匹配条件：** 我们可以通过`test`、`incluede`、`exclude` 来筛选我们要编译处理的文件。

**2. 设置编译loader：** 我们可以通过`use`、`loader`来规定使用哪种`loader`来编译文件，`use`是一个数组，`webpack`默认是从后往前的顺序去按照`loader`规则去编译, `loader` 是`use: [ { loader } ]` 的简写。

**3. 设置loader的使用：** 我们可以通过`enforce`、`oneOf`、设置loader的使用，当`enforce`设置为`pre`时，`webpack`将从前往后根据`loader`执行编译。

我们来看一下`rules`的配置

```js
module: {
  rules: [
      {
        // 匹配less文件
        test: /\.css$/,
        // 匹配多个文件
        test:[
          /\.less$/,
          /\.css$/
        ],
        // 不会编译 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules'),
        // 只编译中src目录里的文件
        include: path.resolve(__dirname, 'src')
         // 匹配类似foo.css?inline的带有?inline的css
        resourceQuery: /inline/,
    },
    {
        // ?cacheDirectory 表示传给 babel-loader 的参数，
        // 用于缓存 babel 编译结果加快重新编译速度
        use: ['babel-loader?cacheDirectory'],
        // 这种方法同上面的方法，当loader需要传入很多参数时
        // 可以使用options对象
        user:[
            {
                loader:'babel-loader', 
                options:{ // 将query形式转换成options对象
                    cacheDirectory:true
                }
            }
        ],
        // 处理顺序为从后到前，即先交给 less-loader 处理，
        // 再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader', 'less-loader'],
        
    },
    {
         // 匹配less文件
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        //将安照从左往右顺序执行loader。
        enforce: 'pre'
    },
    {
        test: /.css$/,
        //只使用第一个匹配规则
        oneOf: [
            {
             // 匹配类似foo.css?inline的带有?inline的css
                resourceQuery: /inline/,
                use: 'url-loader'
            },
            {
             // 匹配类似foo.css?external的带有?external的css
                resourceQuery: /external/,
                use: 'file-loader'
            }
        ]
    }
  ]
}
```

## rules.parser

`rules.parser`解析器(parser)可以告诉`webpack`那些模块语法要解析那些不需要解析，大多数默认插件，会如下解释值：

- 将选项设置为 `false`，将禁用解析器。
- 将选项设置为 `true`，或不修改将其保留为 `undefined`，可以启用解析器。

需要注意的是选项值并不一定时布尔值。例如，内部的 NodeStuffPlugin 差距，可以接收一个对象，而不是 true，来为特定的规则添加额外的选项

```js
module: {
  rules: [
      {
        test:/\*.js$/,
        parser: {
            amd: false, // 禁用 AMD
            commonjs: false, // 禁用 CommonJS
            system: false, // 禁用 SystemJS
            harmony: false, // 禁用 ES2015 Harmony import/export
            requireInclude: false, // 禁用 require.include
            requireEnsure: false, // 禁用 require.ensure
            requireContext: false, // 禁用 require.context
            browserify: false, // 禁用特殊处理的 browserify bundle
            requireJs: false, // 禁用 requirejs.*
            node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
            node: {...} // 在模块级别(module level)上重新配置 node 层(layer)
        }
      }
  ]
}
```


## rules.noParse

防止 `webpack` 解析那些任何与给定正则表达式相匹配的文件。**忽略的文件中不应该含有 `import`, `require`, `define` 的调用，或任何其他导入机制**, 不然编译出来的文件会存在问题，其实这里就是让`webpack`不去处理那些没有使用模块化标准的库（例如：jquery,jquerUl,EchartJS,lodsh等等）

```js
module: {
  rules: [
      {
        test:/\*.js$/,
        // 以字符串形式，忽略掉jquery和lodash
        noParse: /jquery|lodash/,
        // 使用函数形式
        noParse:(content)=> /jquery|lodash/.test(content)
      }
  ]
}
```