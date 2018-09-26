---
sidebarDepth: 1
meta:
  - name: keywords
    content: node nodejs js node常见问题
  - name: description
    content: 本文章记录nodejs开发中常见的一些问题。
---

# NodeJS 的安装

---

## Window 的安装

`window`上的安装非常简单去[官网下载](http://nodejs.cn/download/)对应的安装程序按步骤安装即可

## Linux上 的安装

在`linux`安装我们首先查看你使用的Linux是`32位`的还是`64位`的
```js
uname -m
```
然后去[官网下载](http://nodejs.cn/download/)对应linux版本。

下载好后将其解压到某个文件夹中，比如我解压到了`/home/webxiaoma/nodejs` 文件夹中了。下面我们要配置全局使用`node`和`npm`，使用`ln -s` 软连接

```js
ln -s /home/webxiaoma/nodejs/bin/node  /user/local/bin/node
ln -s /home/webxiaoma/nodejs/bin/npm  /user/local/bin/npm
```
现在你就可以全局访问`node`和`npm`了

```js
node -v

npm -v
```

## NodeJS升级问题

### 一、windows上的升级

网上提示使用n模块安装node在windows上是不管用的，因为目前 `n` 模块在windows上暂时不支持

其实win上升级`nodejs`也很简单，只需在`nodejs`官网下载安装最新的msi即可[传送门](https://nodejs.org/zh-cn/)。

值得注意的是安装时需要按原`nodejs`安装路径路径安装，不能安装到新的路径。

安装完毕后输入` node -v `即可看到安装成功后的版本号了


### 二、linux 上的升级

```js 
 npm cache clean -f  // 强制清楚缓存

 npm install -g n  // 安装n模块
 
 n stable  //自动安装到最新的稳定版本 , 自由选择版本安装命令是  n 4.4.0（版本号） 
```
升级前后可先使用`node -v `查看版本。查看所有`node`版本是`n ls`, 安装`n` 模块时需要使用管理员权限。
