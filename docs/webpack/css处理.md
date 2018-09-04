---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, webpack处理less, webpack处理css
  - name: description
    content: 本文主要讲述webpack中处理css。
---

# CSS处理

--- 

目录结构：

```
| --- node_modules
| --- css
    | -- index.css
| --- src
    |--- index.js
| --- package.json
| --- index.html
| --- webpack.config.js
```

我们在`index.css`文件中写入
```css
div{
    width:300px;
    height:300px;
    background:red;
}
```
在`index.js`中写入

```js
import './src/index.css'
```

在`index.html` 中写入

```html

<!--body部分-->
<div>webpack练习</div>

<!-- 引入打包后的js -->
<script src="./dist/build.js"></script>
```


## 编译CSS

在js中导入`css`文件，我们需要使用`style-loader` 和 `css-loader`

```js
npm install --save-dev style-loader css-loader
```
在`webpack.config.js`中写入

```js
module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
               test: /\.css/,
               use: ['style-loader','css-loader']
            }
        ]
    }
};
```
::: tip
- `css-loader` 会找出 `CSS` 代码中的 `@import` 和 `url()` 这样的导入语句，告诉 `Webpack` 依赖这些资源。同时还支持 `CSS Modules`、`压缩 CSS` 等功能。处理完后再把结果交给 `style-loader` 去处理。
- `style-loade`r 会把 `CSS` 代码转换成字符串后，注入到 `JavaScript` 代码中去，通过 `JavaScript` 去给` DOM` 增加样式。如果你想把 `CSS` 代码提取到一个单独的文件而不是和 `JavaScript` 混在一起，可以使用 `MiniCssExtractPlugin`, 下面我们会有介绍
:::

我们执行`npx webpack`，打开`index.html`可以看到效果，并且`css`样式是直接嵌在`html`中的。


## 分离CSS  

::: warning 注意 
-  <Badge>webpack v3.0+</Badge> 使用 ExtractTextPlugin  
[Github地址](https://github.com/webpack-contrib/extract-text-webpack-plugin) 
[Npm地址](https://www.npmjs.com/package/extract-text-webpack-plugin)
-  <Badge>webpack v4.0+</Badge> 使用 MiniCssExtractPlugin 
[Github地址](https://github.com/webpack-contrib/mini-css-extract-plugin) 
[Npm地址](https://www.npmjs.com/package/mini-css-extract-plugin)
:::

因为上面的`css`是嵌在`html`中的，我们可以使用`MiniCssExtractPlugin`插件将`css`与`html`分离。首先安装`MiniCssExtractPlugin` 插件

```js
npm install -D MiniCssExtractPlugin
```
在`webpack.config.js`中加入`MiniCssExtractPlugin`插件

```js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
               test: /\.css$/,
               use: [
                 // 使用 MiniCssExtractPlugin 插件后就不做需要style-loader了
                     MiniCssExtractPlugin.loader,
                    'css-loader'
               ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
```
执行`npx webpack` 后我们会看到`dist`文件中生成了一份`css`文件，并且`html`中不存在内嵌的`css`代码了，需要手动使用`link`引入`css`代码

::: tip 
`MiniCssExtractPlugin` 插件适合用在生产模式下，我们在开发模式下就不要在使用。这时我们可以这样做：

```js
 use: [
    process.env.NODE_ENV !== 'production'?'style-loader':MiniCssExtractPlugin.loader,
    'css-loader'
 ]
```
:::

## 使用Less

实际开发项目中我们经常会用到css预处理器如 `less`、`sass`、 `stylus` 等，这里我们以使用`less`为例，安装`less` 和`less-loader`

```js
npm install -D less less-loader
```
在css文件夹中新建一个test.less文件，并写入：

```less
@color: blue;
div{
    color:@color;
}
```
在`src/index.js` 中引入`import '../css/test.less'`。修改`webpack.config.js`

```js
const path = require('path');
module.exports = {
    // ...省略
    module: {
        rules: [
            {
               test: /\.less$/,
               use: [
                    'css-loader',
                    'less-loader'
               ]
            }
        ]
    },
    // ...省略
};
```
我们执行`npx webpack` 后可以看到，`test.less`文件被编译了。


## 使用Postcss


`PostCSS`是一个用JS插件转换CSS的工具。它可以使css支持变量和mixin，使用未来的CSS语法，内联图片等等。

在使用PostCss时我们需要先把css文件交给`PostCss-loader`处理，然后在交给`css-loader`处理，如果你使用`less`或`sass`,需要先交给`less-loader`或`sass-loader`处理。另外PostCss提供了很多插件来处理css，比如`postcss-preset-env`插件允许使用未来的css特性，比如`autoprefixer`插件可以自动补全浏览器前缀（关于[PostCss 的更多插件](https://github.com/postcss/postcss/blob/master/README-cn.md)）。

这些插件我们需要下载，并在项目的根目录下新建一个`postcss.config.js` 文件(或`.postcssrc.js`文件)，在该文件中进行插件的配置，当`postcss`编译时会自动读取该文件下的配置。现在我们来实现使用`postcss-preset-env`插件允许和`autoprefixer`插件。首先安装

```js
// 安装 postcss-loader
npm install -D postcss-loader
// 安装postcss插件
npm install -D postcss-preset-env  autoprefixer
```

我们在根目录下新建`postcss.config.js` 文件(或`.postcssrc.js`文件)，并使用上面下载的两个插件
```js
//允许你使用未来的 CSS 特性。
const postcssPresetEnv = require('postcss-preset-env');
// 自动添加浏览器前缀
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
      postcssPresetEnv,
      autoprefixer({
      // 配置要兼容的浏览器版本
      // 也可以在package.json中的browserslist字段中添加浏览器版本
        "browsers": [
          "defaults",
          "not ie < 11",
          "last 100 versions",
          "> 1%",
          "iOS 7",
          "last 3 iOS versions"
        ]
      })
    ]
  };
```

现在我们在我们`test.less` 文件中写点

```less
@color2:blue;
div{
    // 添加兼容性前缀
    display: flex; 
    color:@color2;
}

// 新语法
:root {
  --mainColor: rgba(18, 52, 86, 0.47059);
}

html{
    background: var(--mainColor);
    font-family: system-ui, -apple-system;
    word-wrap: break-word;
}
```

然后我们来修改`webpack.config.js`

```js
module: {
    rules: [
        {
            test: /\.less$/,
            use: [
                 MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }
    ]
}
```

执行`npx webpack`后我们可以看到我们最终的结果。

::: warning 提示

1. 首先css要先经过`postcss-loader`处理交给`css-loader`，如果使用`less`或类似的css预处理器，要先交给`less-loader`处理在交给`postcss-loader`处理，最后交给`css-loader`

2. 在使用`autoprefixer`做兼容性前缀时，我们要指定浏览器版本来确定在指定版本中添加兼容性前缀。可以像上面的方式指定，也可以在`package.json`中的`browserslist` 字段中指定。
:::