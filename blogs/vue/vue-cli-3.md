---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: vue-cli3.0  vue-cli vue脚手架 vue
  - name: description
    content: 本文章主要讲述vue-cli3.0 版本的基本使用。
---

# vue-cli3.0 的基本使用

---

一些基础操作查看[Vue-CLI3.0 官网](https://cli.vuejs.org/zh/guide/)

## 创建项目

- 安装 vue-cli3.0 (Vue CLI 需要 Node.js 8.9 或更高版本,推荐 8.11.0+)

```js
npm install -g @vue/cli
```

- 创建项目

```js
vue create project
```
**1. 创建项目后会询问你设置一些基本配置**
![配置](https://cli.vuejs.org/cli-new-project.png)

`deafult` 默认配置，包括 babel, eslint

`mmanually select features` 手动选择一些配置,手动选择的一些配置如下，（按空格键选择或不选，按a键全选或不选，按回车键选择完成进行下一步操作）

![配置](https://cli.vuejs.org/cli-select-features.png)



**2. 配置ESlint,选择一个`Linter / Formatter`规范类型**


```js
? Pick a linter / formatter config: (Use arrow keys)
>(*) ESLint with error prevention only
 ( ) ESLint + Airbnb config
 ( ) ESLint + Standard config
 ( ) ESLint + Prettier
```

**3. 配置ESlint,选择lint方式，保存时检查/提交时检查**

```js
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit
```

**4. 选择 Babel, PostCSS, ESLint 等自定义配置的存放位置**

```js
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> (*)In dedicated config files
  ( )In package.json
```

**5. 是否保存你的配置在下次创建项目时使用**

```js
? Save this as a preset for future projects? (y/N)
```

::: tip 提示
当你输入`y`后，还让你为这个配置起一个名字，以便在下次使用,这个配置存储在了用户的 `home` 目录下一个名为 `.vuerc` 文件里

**当然你也可以使用官方提供的可视化方式来创建项目 `vue ui`**
:::


## 配置项目

### 完整默认配置

```js
module.exports = {
 // 基本路径
 baseUrl: '/',
 // 输出文件目录
 outputDir: 'dist',
 // eslint-loader 是否在保存的时候检查
 lintOnSave: true,
 // use the full build with in-browser compiler?
 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
 compiler: false,
 // webpack配置
 // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 chainWebpack: () => {},
 configureWebpack: () => {},
 // vue-loader 配置项
 // https://vue-loader.vuejs.org/en/options.html
 vueLoader: {},
 // 生产环境是否生成 sourceMap 文件
 productionSourceMap: true,
 // css相关配置
 css: {
  // 是否使用css分离插件 ExtractTextPlugin
  extract: true,
  // 开启 CSS source maps?
  sourceMap: false,
  // css预设器配置项
  loaderOptions: {},
  // 启用 CSS modules for all css / pre-processor files.
  modules: false
 },
 // use thread-loader for babel & TS in production build
 // enabled by default if the machine has more than 1 cores
 parallel: require('os').cpus().length > 1,
 // 是否启用dll
 // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
 dll: false,
 // PWA 插件相关配置
 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 pwa: {},
 // webpack-dev-server 相关配置
 devServer: {
  open: process.platform === 'darwin',
  host: '0.0.0.0',
  port: 8080,
  https: false,
  hotOnly: false,
  proxy: null, // 设置代理
  before: app => {}
 },
 // 第三方插件配置
 pluginOptions: {
  // ...
 }
}
```

### 构建多页面应用

当我们想构建多页面应用时可以使用[page 字段](https://cli.vuejs.org/zh/config/#pages)

```js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
```

### webpack配置

[配置webpack](https://cli.vuejs.org/zh/guide/webpack.html#webpack-%E7%9B%B8%E5%85%B3),可以在`vue.config.js`中的`configureWebpack`对象中进行配置

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```
当然也可以换成函数：

```js
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
```
另外也可以通过链式操作来配置`webpack`, 官网也提到了该方法是通过[webpack-chain](https://github.com/neutrinojs/webpack-chain)来维护的


```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    // 添加loader
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
   }

    // 修改loader
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
```


### 全局变量设置

要[设置全局变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)我们需要在项目的根目录中创建存储变量的文件，不同文件有不同作用，不同的文件具有以下特点

```js
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
.env.development    # 只在生产环境执行
.env.production     # 只在开发环境执行
```

在文件中以`键=值`的方式来存储变量

```js
FOO=bar
VUE_APP_SECRET=secret
```
在项目中通过 `process.env` 对象来进行访问

```js
console.log(process.env.VUE_APP_SECRET)
```

参考文章：

- [vue-cli3.0配置详解](http://www.php.cn/js-tutorial-394518.html)