---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, devtool, webpack配置，sourceMap
  - name: description
    content: 本文主要讲述webpack中使用devtool字段配置sourceMap。
---

# Devtool 配置


## 什么是source map

简单说，`Source map`就是一个信息文件，里面储存着位置信息。也就是说，转换后(压缩，合并)的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这样对开发这调试代码启动了很大的帮助。具体的介绍可以查看阮一峰[JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)



## 配置

在webpack中我们可以通过`devtool`来配置使用哪种`Source map`，也可以使用`SourceMapDevToolPlugin`或`EvalSourceMapDevToolPlugin`插件来配置。但他们不要同时使用。使用`devtool`配置的`Source map`类型[查看官网](https://www.webpackjs.com/configuration/devtool/#devtool), 使用方式如下：

```js
module.exports = {
    devtool: 'source-map'
}
```