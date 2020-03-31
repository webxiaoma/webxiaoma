---
sidebarDepth: 2
meta:
  - name: keywords
    content: ESlint 代码检测工具 ESlint工具
  - name: description
    content: 本文章主要介绍ESlint代码检测工具的基本使用。
---

# ESlint 代码检测工具

[ESLint](https://cn.eslint.org/)最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的`javascript`代码检测工具。

---

## 安装

- 局部安装(推荐)

```js
npm i  eslint -D
```

- 全局安装

```js
npm i -g eslint 
```

## 配置方式

`ESLint`的配置主要有两种方法:

1. `Configuration Comments` - 使用 `JavaScript` 注释把配置信息直接嵌入到一个代码源文件中。

```js
忽略 no-undef 检查 
/* eslint-disable no-undef */
```

2. `Configuration Files` - 使用 `JavaScript`、`JSON` 或者 `YAML` 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 `.eslintrc.*` 文件，或者直接在 `package.json` 文件里的 `eslintConfig` 字段指定配置，`ESLint` 会查找和自动读取它们，再者，你可以在命令行运行时指定一个任意的配置文件。

我们推荐使用文件的形式来配置`ESList`，我们可以在我们项目的根目录下新建一个`.eslintc.`文件或`.eslintc.js`文件，这里我习惯建立一个`.eslintc.js`文件

## 配置文件

在我们的配置文件中我们可以配置一些信息：

```js
module.exports = {
  root:"",
  env:{},
  globals:{},
  extends:{},
  parser:"",
  parserOptions:{},
  plugins:[],
  extends:"",
  rules:[],
}
```
上面的配置解析如下：

### 配置检索路径

- [root](https://cn.eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy) - 在配置文件里设置 `"root": true`。`ESLint` 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找。


### 配置环境

- [env](https://cn.eslint.org/docs/user-guide/configuring#specifying-environments) - 指定环境。

### 配置全局变量
- [globals](https://cn.eslint.org/docs/user-guide/configuring#specifying-globals) - 设置全局变量，当访问当前源文件内未定义的变量时，`no-undef` 规则将发出警告。如果你想在一个源文件里使用全局变量，可以在 `ESLint` 中定义这些全局变量，这样 `ESLint` 就不会发出警告了

### 设置语言
- [parserOptions](https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options) -指定你想要支持的 `JavaScript` 语言选项。默认情况下，`ESLint` 支持 `ECMAScript 5` 语法。你可以覆盖该设置，以启用对 `ECMAScript` 其它版本和 `JSX` 的支持。

### 设置解析器

- [parser](https://cn.eslint.org/docs/user-guide/configuring#specifying-parser) - `ESLint` 默认使用`Espree`作为其解析器，你可以在配置文件中指定一个不同的解析器。

### 设置插件

- [plugins](https://cn.eslint.org/docs/user-guide/configuring#configuring-plugins) - 使用第三方插件。


### 
- [extends](https://cn.eslint.org/docs/user-guide/configuring#extending-configuration-files) - 一个配置文件可以从基础配置中继承已启用的规则。

- [Rules](https://cn.eslint.org/docs/user-guide/configuring#configuring-rules) - 启用的规则及其各自的错误级别。


在ESLint中有大量的可配置规则，我们都可以在`rules`对象中去配置,配置规则时可以设置错误等级，如下：

::: tip 规则配置错误等级
"off" 或 0 - 关闭规则
"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
:::

此外规则的配置方式可以有一个参数，即错误等级；也可以有两个参数，以数组形式设置，第一个为错误等级，第二个参数为处理方式。

```js
module.exports = {
   rules:{
     "no-empty":"off" //关闭对 空语句块的检测
     "no-extra-semi":"warn" //出现不必要的分号时会警告
     "quotes": ["error", "double"] //必须使用双引号，还可以这样设置[2,"double"]
   }
}
```

