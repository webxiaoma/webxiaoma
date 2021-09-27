---
meta:
  - name: keywords
    content: 马新想 小马学习 
  - name: description
    content: 本章为小马学习专栏
isLogin: true
sidebarDepth: 1
---

# 项目构建


:horse:


## 使用ESLint（7.32.0）

- [ESLint 中文网](https://cn.eslint.org/)

### 安装ESLint

```js
npm i eslint -g

//or

yarn add eslint
```

### 配置ESLint

配置`eslint`我们可以在根目录创建`.eslintrc.js`配置文件, 关于`eslint`的配置可以[查看这里](https://cn.eslint.org/docs/user-guide/configuring)



```js
// .eslintrc.js 配置文件

module.exports = { 
  extends: ['eslint:recommended'], // 默认规则
  parser: '@babel/eslint-parser', // 解析器
  parserOptions:{
    sourceType: 'module', // 启用module
    babelOptions: {
      presets: ['@babel/preset-env']
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true, 
    mocha: true
  },
  globals: {
    history: true,
    location: true,
    sessionStorage: true,
    localStorage: true
  },
  rules: {
     //... 一些规则
  }
}
```


**1. 关于`extends`**

`extends`主要作用是继承第三方的`eslint`规则，常见的第三方规则如下：

- [eslint:recommended](https://cn.eslint.org/docs/rules/)官方推荐的
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/) prettier规则主要目的是覆盖其它规则
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) react的eslint规则
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) TS的eslint规则


**2. 关于`parser`解析器**

`ESLint`默认使用`Espree`作为其解析器,除此之外可以使用下面解析器：

- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) babel解析器
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) TS解析器


**3. 关于`parserOptionss`解析器配置（选项）**


[parserOptionss](https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options)可以设置解析器的选项，常见的选项如下：

```js
parserOptionss = {
  sourceType: 'module', //设置ECMAScript 模块 
  ecmaFeatures: {}, // 设置额外的语言特性
  babelOptions: { // babel的一些配置
    presets: [], //babel的一些预设 https://www.babeljs.cn/docs/babel-preset-env
    plugins: [] // babel的一些插件
  }
}
```

**4. 关于`plugins`插件**

`plugins`主要是扩展`eslint`的规则，常见的插件如：

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 扩展了一些关于react语法规则
- [eslint-plugin-react-hooks]()
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 检测文件路径和导入名称拼写错误的问题。
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) 该插件主要是关闭了一些与可能与`Prettier`冲突的规则


**5. 关于`env`**

定义项目环境, 可用的环境[可以访问这里](https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options)


**6. 关于`globals`**

定义全局变量，防止使用未定义的变量时报错。


**7. 关于`rules`**

设定`eslint`检测规则

- `off` 或 `0` - 关闭规则
- `warn` 或 `1` - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- `error` 或 `2` - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)


**8. 关于`settings`**

[settings](http://eslint.cn/docs/user-guide/configuring#adding-shared-settings)该配置主要向被执行的规则中注入`settings`中的变量。 当然并不是每个规则插件都使用了它，看具体规则的编写了。[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)插件就使用了`settings`配置，如

```js
// .eslintrc.js 配置文件
module.exports ={
  settings:{
    'import/resolver': {
      node: {
          extensions: ['.js', '.jsx'],
      },
      alias: {
        '@': resolve('src')
      }
    },
  }
}
```
### ESLint检测React

在`React`中使用`ESLint`我们需要安装一些插件

- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

然后做一下配置

```js
// .eslintrc.js 配置文件
module.exports = { 
  extends: ['eslint:recommended','plugin:react/recommended'], // 添加react规则
  parser: '@babel/eslint-parser', // 解析器
  parserOptions:{
    sourceType: 'module', 
    babelOptions: {
      presets: ['@babel/preset-env']
    }
  },
  plugins: ['react','react-hooks'], // 增加react
  rules: {
     //... 一些规则
  }
}
```

### ESLint检测Vue

在`Vue`中使用`ESLint`我们需要安装一些插件和解析器

- `eslint-plugin-vue` [插件](https://github.com/vuejs/eslint-plugin-vue)
- `vue-eslint-parser` [解析器](https://www.npmjs.com/package/vue-eslint-parser)

然后做一下配置

```js
// .eslintrc.js 配置文件
module.exports = { 
  extends: ['eslint:recommended','plugin:vue/recommended'], // 添加vue规则
  parser: '@babel/eslint-parser', // 使用vue解析器
  parserOptions:{
    sourceType: 'module', // 启用module
    babelOptions: {
      presets: ['@babel/preset-env','@babel/preset-react']
    }
  },
  plugins: ['react','react-hooks'],
  rules: {
     //... 一些规则
  }
}
```

### ESLint检测TypeScript

在`React`中使用`TypeScript`我们需要安装一些插件和解析器

- `@typescript-eslint/parser` 解析器
- `@typescript-eslint/eslint-plugin` 插件

然后做一下配置

```js
// 下面是在react中引入ts
// .eslintrc.js 配置文件
module.exports = { 
  extends: ['eslint:recommended','plugin:@typescript-eslint/recommended'], // 添加typescript规则
  parser: '@typescript-eslint/parser', // 使用typescript解析器
  parserOptions:{
    sourceType: 'module', // 启用module
    babelOptions: {
      presets: ['@babel/preset-env','@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    }
  },
  plugins: ['react','react-hooks'],
  settings: {
      //支持从TypeScript文件导入JavaScript文件中的模块
      'import/resolver': {
          node: {
              extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx'],
          },
      },
      // ts 解析的文件
      'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
  },
  rules: {
     //... 一些规则
  }
}
```

### 忽略ESLint

- 在目录添加 `.eslintignore`文件来时`eslint`忽略某些文件的检测如：

```
node_modules
```

- 通过注释 ，如下：

```js
/* eslint-disable */

// 在文件顶端添加 /* eslint-disable */ 将忽略整个文件
```


```js
/* eslint-disable */
var a = 1;
/* eslint-enable */

// 将忽略 var a = 1;
```

## 格式化代码

- [prettier格式化代码](https://prettier.io/docs/en/index.html)
- `VScode`格式化代码

### prettier格式化

#### 基本使用

首先安装`prettier`

```js
npm install --save-dev --save-exact prettier
//or
yarn add prettier --dev --exact
```

然后我们可以在根目录创建`.prettierrc.js`配置文件。如：

```js
module.exports = {
  printWidth: 100,// 一行最多 100 字符
  useTabs: false, // 不使用缩进符，而使用空格
  tabWidth: 2, // 使用 2 个空格缩进
  tabSize: 2,
  semi: true,// 行尾需要有分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed',// 对象的 key 仅在必要时用引号
  jsxSingleQuote: false,// jsx 不使用单引号，而使用双引号
  trailingComma: 'es5',// 末尾不需要逗号 'es5'  none
  bracketSpacing: true,// 大括号内的首尾需要空格
  jsxBracketSameLine: false,// jsx 标签的反尖括号需要换行
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0,// 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  requirePragma: false,// 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve',// 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css',// 根据显示样式决定 html 要不要折行
  endOfLine: 'lf',// 换行符使用 lf 结尾是 \n \r \n\r auto
  overrides: [ // 设置解析器配置项
      {
         // 以json解析器格式 .prettierrc 文件
          files: '.prettierrc', 
          options: {
              parser: 'json', 
          },
      },
      {
          files: 'document.ejs',
          options: {
              parser: 'html',
          },
      },
  ],
}
```


然后我们可以使用命令执行格式化

```json
// package.json文件
{
  "scripts":{
    "prettier": "prettier -c --write \"src/**/*\"",
  }
}
```
然后执行 `npm run prettier`



#### 和ESLint一起使用

`ESLint`和`prettier`关系可以[查看这里](https://zhuanlan.zhihu.com/p/80574300)

和`ESLint`使用需要安装`prettier`的`eslint`插件

- `eslint-config-prettier`
- `eslint-plugin-prettier`

`eslint-config-prettier`的作用是可以关掉所有和 Prettier 冲突的 ESLint 的配置
`eslint-plugin-prettier`的作用就是把`Prettier`推荐的格式问题的配置以`ESLint rules`的方式写入，使其报错的来源依旧是`ESLint`

`yarn add --dev eslint-config-prettier eslint-plugin-prettier`

然后再`.eslintrc.js`中引入

```js
module.exports = {
  extends: ['prettier'],
  plugins: ["prettier"],      
  rules: {        
      "prettier/prettier": "error"      
  }    
}

// 上面的配置可以合并成一个

module.exports = {
  "extends": ["plugin:prettier/recommended"]
}
```


### VScode根据eslint格式化

使用`VScode`保存时格式化代码，我们需要安装一些插件

- `eslint`

然后我们可以再`VScode`配置文件`settings.json`进行配置。

如下：

```json
{
  "editor.codeActionsOnSave": { // 编辑器自动保存
    "source.fixAll.eslint": true
  },
  "eslint.autoFixOnSave": true, // 以eslint规则进行格式化
  "eslint.packageManager": "yarn",
  "eslint.validate": [ // 格式的文件
    {
      "language": "vue",   // 检测vue文件
      "autoFix": true   //  为vue文件开启保存自动修复的功能
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "jsx",
      "autoFix": true
    },
    {
      "language": "javascript", //  用eslint的规则检测js文件
      "autoFix": true
    }
  ],

}
```
配置好后，当我们保存时，`VScode`编辑器会根据我们`eslint`的配置进行部分格式化




#### 忽略格式化


对于不需要格式化的文件添加到`.prettierignore`中进行忽略，或在文件中使用`/* prettier-ignore */`注释进行忽略



#### git提交格式化




## style样式规则


### 安装

定义样式规则可以使[StyleLint](http://stylelint.docschina.org/)

`StyleLint`的常用规则[再这里](http://stylelint.docschina.org/user-guide/rules/)

首先我们安装`stylelint`

```js
npm install -d -save-dev stylelint

npm install stylelint-config-standard stylelint-order --save-dev
```

- `stylelint`是运行工具
- `stylelint-config-standard` 是stylelint的推荐配置
- `stylelint-order` 是CSS属性排序插件(先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性)

### 配置

然后我们创建配置文件`.stylelintrc.js`

```js
module.exports = {
  plugins: [],
  extends: ["stylelint-config-standard"], // 这是官方推荐的方式
  rules: {
    "at-rule-empty-line-before": "always"|"never",
    "at-rule-name-case": "lower"|"upper",
    "block-no-empty": true,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

- `plugins`配置项，可以为`stylelint`扩展插件，如：[stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) 该插件禁止由于同一规则中的另一个属性值而被忽略的属性值（如`a { display: inline; width: 100px; }`）;
- `extends`继承，可以继承一些规则，如： [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules)接受css模块语法；  [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)关闭所有不必要或可能与Prettier冲突的规则。
- `rules` 配置股则
- `ignoreFiles` 忽略检测的文件

### 运行

配置完成后我们可以再`package.json`中添加执行配置

```json
{
  "scripts": {
    "lint:style": "stylelint --fix \"src/**/*.less\" --syntax less",
  }
}
```


## 使用Git commit 规范



## 使用Typescript



## 使用文档


## 皮肤配置


## 权限管理



## 优化项目



