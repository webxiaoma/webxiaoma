---
sidebarDepth: 1
meta:
  - name: keywords
    content: node nodejs js es6
  - name: description
    content: 本文章为nodejs 常见网站汇总。
---

# 包管理工具NPM

## NPM初步了解

### npm 是什么

`npm` 为你和你的团队打开了连接整个 `JavaScript` 天才世界的一扇大门。它是世界上最大的软件注册表，每星期大约有 30 亿次的下载量，包含超过 600000 个 包（package） （即，代码模块）。来自各大洲的开源软件开发者使用 `npm` 互相分享和借鉴。包的结构使您能够轻松跟踪依赖项和版本。

下面是关于 `npm` 的快速介绍：

`npm` 由三个独立的部分组成：

- 网站：是开发者查找包（`package`）、设置参数以及管理 `npm ` 使用体验的主要途径。
- 注册表（`registry`）： 注册表 是一个巨大的数据库，保存了每个包（`package`）的信息。
- 命令行工具 (`CLI`)： CLI 通过命令行或终端运行。开发者通过 `CLI` 与 `npm` 打交道。

网站也就是 [npm官网](https://www.npmjs.com/)，我们写好插件后可以通过npm 上传到官网上，当然我们需要注册一个npm账号。上传后，你发布的项目的一些信息会被添加到一个注册表中，之后别人就可以通过`npm`去下载你的插件（包）了。

### npm 的使用


**1. 安装**

`npm `是依附于`nodejs `的，我们去[nodejs官网](http://nodejs.cn/download/)下载安装好后，`npm`也就一并安装了，安装好后，我们可以查看`npm`的版本

```JavaScript
npm  -v
```
**2. 更新**

window 和 linux 都可使用

```JavaScript
npm install npm@latest -g  // 安装最新版本
```

**3. 常见命令**

```JavaScript
npm install 安装模块
npm uninstall 卸载模块
npm update 更新模块
npm outdated 检查模块是否已经过时
npm ls 查看安装的模块
npm init 在项目中引导创建一个package.json文件
npm help 查看某条命令的详细帮助
npm root 查看包的安装路径
npm config 管理npm的配置路径
npm cache 管理模块的缓存
npm start 启动模块
npm stop 停止模块
npm restart 重新启动模块
npm test 测试模块
npm version 查看模块版本
npm view 查看模块的注册信息
npm adduser  用户登录
npm publish 发布模块
npm access 在发布的包上设置访问级别
npm package.json的语法
```

**注意事项：** 国内使用npm会很慢，我们可以使用淘宝镜像。


首先，先安装 `cnpm`
```JavaScript
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装完成后我们就可以使用`cnpm`，将以上命令中的 `npm` 换成 `cnpm` 就可以了。

使用cnpm也是会有缺点的：

- `cnpm` 的仓库只是` npm` 仓库的一个拷贝，它不承担 `publish` 工作，所以你用 `cnpm publish` 命令会执行失败的

- 不仅是 `publish` 会执行失败，其它的需要注册用户(npm adduser)、或者修改 `package ` 状态等命令都无法用 `cnpm`

- 有很多 `npm` 包都集成了 `npm install`，比如 `yeoman` 的所有 `generators`，在最后基本都会调用 `npm install`，（这种情况下使用 cnpm 完全无效，必须中断操作，然后自己手动运行` cnpm install`，或者在运行 `yo [generator] `时就指定` --skip-install`。



4.还有一种情况是，很多和 npm API 相关的 package，都会读取 ~/.npmrc 中的 registry，或者使用默认的 registry —— [https://registry.npmjs.org/][npm-registry]，去查询 npm package 相关的信息，比如下面这些：


### package.json文件

`package.json` 文件很重要，它可以记录一些你的项目信息，并且记录一些npm的安装的包版本信息。

一个 package.json 文件可以有以下几点作用：

- 作为一个描述文件，描述了你的项目依赖哪些包
- 允许我们使用 “语义化版本规则”指明你项目依赖包的版本
- 让你的构建更好地与其他开发者分享，便于重复使用


### **1. 创建 package.json文件**

我们可以手动创建`package.json`文件

也可以使用一下命令生成该文件，**推荐使用命令形式**。

```JavaScript
npm init 
```
一个完整的`package.json`文件如下：

```json
{
	"name": "Hello World",
	"version": "0.0.1",
	"author": "张三",
	"description": "第一个node.js程序",
	"keywords":["node.js","javascript"],
	"repository": {
		"type": "git",
		"url": "https://path/to/url"
	},
	"license":"MIT",
	"engines": {"node": "0.10.x"},
	"bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
	"contributors":[{"name":"李四","email":"lisi@example.com"}],
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"express": "latest",
		"mongoose": "~3.8.3",
		"handlebars-runtime": "~1.0.12",
		"express3-handlebars": "~0.5.0",
		"MD5": "~1.2.0"
	},
	"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
	}
}
```

`package.json`文件中的一些字段 描述如下：

- `name`  项目名称全部小写，没有空格，可以使用下划线或者横线
- `version`: 项目版本 x.x.x 的格式 ，符合“语义化版本规则”
- `author`：作者信息
- `description`：描述信息，有助于搜索
- `keywords`：关键字，有助于在人们使用 npm search 搜索时发现你的项目
- `main`: 入口文件，一般都是 index.js
- `scripts`：支持的脚本，默认是一个空的 test
- `license`：默认是 MIT
- `engines`：字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器。
- `bugs`：当前项目的一些错误信息，如果有的话
- `dependencies`：在生产环境中需要用到的依赖
- `devDependencies`：在开发、测试环境中用到的依赖
- `config`：字段用于添加命令行的环境变量。
- `browser`：指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。
- `preferGlobal`：值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。
- `bin`：项用来指定各个内部命令对应的可执行文件的位置。
- `style`：指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。


这里需要提一下的是我们下载包时有两种写入项目依赖的方式，这里就要知道`dependencies ` 和  `devDependencies`
`dependencies` 字段指定了项目运行所依赖的模块，
`devDependencies` 指定项目开发所需要的模块。
它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

```JavaScript
{
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  }
}
```

对应的版本可以加上各种限定，主要有以下几种：

:::tip
指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
latest：安装最新版本。
:::

我们安装包时，如果想安装到项目运行所依赖的模块`dependencies` 中可以执行

```JavaScript
npm install --save vue
```
如果想安装到项目开发所需要的模块`devDependencies` 中可以执行

```JavaScript
npm install --save-dev vue
或
npm install -D vue
```


## NPM发布包



### **一、npm官网注册**

想要上传我们的npm包，我们首先要有一个npm账号。可以去[官网注册](https://www.npmjs.com)，具体注册过程不在说明


### **二、编写一个最简单的插件（包）**

我们编写一个方法将手机号中间的四位数用 ` * `表示

**1. 创建一个 `myself-test-package` 文件夹**


```JavaScript 
mkdir myself-test-package
```

**2. 在`myself-test-package`文件夹中新建一个 index.js 文件 并随意写入方法。这里的index.js 文件是入口文件要和`package.json` 文件中 `main` 字段的配置相同**

```JavaScript 
exports.phone = function(phoneNumber){
   return  phoneNumber.toString().replace(/^(\d{3})(\d{4})(\d{4})/,"$1****$2")
}
```


**3. 在文件夹中使用npm初始化，生成package.json**

```JavaScript 
npm init
```
初始化时我们会生成一个`package.json` 文件
 ```JavaScript 
 {
  "name": "myself-test-package", 
  "version": "1.1.0",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/webxiaoma/test.git"
  },
  "keywords": [
    "test-myself-webxiaoma"
  ],
  "author": "webxiaoma",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/webxiaoma/test/issues"
  },
  "homepage": "https://github.com/webxiaoma/test#readme"
}
```
需要注意的是包的名称必须是唯一的，不然上传不上去。在给包起名字之前可以去npm官网搜索一下是否重名。

如果你的项目也在github仓库中，可以在package.json中填写repository地址，这样可实现自动更新包



### **三、上传包**

我们执行

```JavaScript 
npm adduser
```
之后会让我们输入用户名、密码和邮箱，这些东西是你在npm官网注册的账号信息，填写完之后我们在执行

```JavaScript 
npm publish
```
我们的包就上传了。

:::warning 需要注意

如果我们使用了淘宝镜像 cnpm 我们是无法上传的。解决方法：

**1. 将npm设置成原仓库，不在使用淘宝镜像**

```JavaScript 
// 查看npm是否设置了淘宝镜像
npm config get registry   

// 设置会原来的npm地址
npm config set registry=http://registry.npmjs.org  

```
完成设置之后重新登录账户进行发布，不过这里如果我们在想使用`cnpm` 还用重新设置淘宝镜像


**2. 也可以使用一些其他辅助工具 例如：[smart-npm](https://github.com/qiu8310/smart-npm/)**


上传后我们就可以正常的使用npm来下载我们的这个包了。

```JavaScript 
npm install  --save-dev myself-test-package
```
:::


### **四、持续集成**

一般来说你会看到一些项目README.md里面有一些icon如：

![持续集成](https://image-static.segmentfault.com/177/620/1776202858-5a1826efc1d49_articlex)

持续集成(Continuous integration)的目的，就是让产品可以快速迭代，同时还能保持高质量。它的核心措施是，代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。

每个icon都表示一个功能，这里不多做介绍，有兴趣可以看看下列文章：

1. [跟踪Github项目的持续集成状态](https://harttle.land/2016/04/30/github-ci.html)
2. [使用travis-ci集成一个vue.js项目](https://yimogit.github.io/2017/07/24/%E4%BD%BF%E7%94%A8travis-ci%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2github%E4%B8%8A%E7%9A%84%E9%A1%B9%E7%9B%AE/)




### 参考文章

- [npm 与 package.json 快速入门教程](https://blog.csdn.net/u011240877/article/details/76582670#%E5%AE%89%E8%A3%85-npm)
- [package.json文件 阮一峰](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
- [将你的组件发布到npm平台上](https://segmentfault.com/a/1190000012151905) 