---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, resolve, webpack配置
  - name: description
    content: 本文主要讲述webpack的插件介绍以及简单的配置。
---

# Resolve 配置

---
[Resolve 配置](https://www.webpackjs.com/configuration/resolve/)的作用是告诉`webpack`如何查找模块所对应的文件。



## resolve.alias

`resolve.alias` 可以通过别名来替换路径，例如：

```js
module.exports = {
    resolve:{
        alias:{
            '@':'./src/components',
            // 精准匹配
            'vue$' './src/vue'
        }
    }
}
```

上边当我们使用 `import Input form @/input`时，webpack会将其解析为`import Input form ./src/components/input`。

而$vue只会替换导入语句结尾是vue的路径,例如当我们使用`import Input form 'vue'`时，将被解析为`import Input form './src/vue'`，但是webpack并不是解析`import Input form 'vue/test'`这样的路径。


## resolve.modules

`resolve.modules`可以配置webpack在那些目录下查找第三方模块，webpack模式是查找`node_modules` 目录下的模块。

当我们在使用项目中经常需要使用`../../../public/` 导入`public`下的某个模块时，我们可以这样做：

```js
module.exports = {
    resolve:{
       modules:['../../../public','node_module']
    }
}
```
这时我们可以直接使用 `import test.vue`，这时webpack会从`../../../public`、`node_modules` 中去查找。




## resolve.extensions

`resolve.extensions`配置webpack自动解析的扩展文件，webpack默认会查找`.js` 和 `.json` 文件。
```js
extensions: [".js", ".json"]
```
也就是当我们直接引入js文件或json文件时可以不带扩展名：

```js
import test from '../../public/test'
```
这时webpack会自动先查找`test.js` 文件，如果没有找到，就会在查找`test.json` 文件。我们可以扩展`vue`文件

```js
module.exports = {
    resolve:{
       extensions: [".js", ".json",".vue"]
    }
}
```


