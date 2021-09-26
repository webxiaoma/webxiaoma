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


#### ESLint检测React

使用



#### ESLint检测TypeScript




### 忽略ESLint






### VScode 格式化代码



### 使用Git commit 规范



## 使用Typescript




## 使用文档


## 皮肤配置


## 权限管理



## 优化项目



