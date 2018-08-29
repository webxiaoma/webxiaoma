---
sidebarDepth: 2
meta:
  - name: keywords
    content: git子模块, git, git submodule，子模块，
  - name: description
    content: 本文主要讲解git的配置文件，了解配置文件的作用以及如何自定义git常用命令，来方便我们使用git管理项目
---


# Git的子模块

## 常用基础指令

知道了git的大概工作的大概流程我们来实践一下git的基础操作

::: tip 本章命令
-  `git submodule add 远程仓库地址` 添加子模块
-  `git submodule init` 初始化本地配置文件
-  `git submodule updata` 拉取子模块数据
-  `git clone --recursive 远程仓库地址` 克隆包含子模块的仓库（不用初始化）
-  `git rm 子模块` 删除子模块
-  `git submodule foreach 操作命令 ` 遍历子模块执行同样的命令
:::

[来自官网](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)有种情况我们经常会遇到：某个工作中的项目需要包含并使用另一个项目。 也许是第三方库，或者你独立开发的，用于多个父项目的库。 现在问题来了：你想要把它们当做两个独立的项目，同时又想在一个项目中使用另一个。这个时候我们就需要用到`git`的子模块功能了。

说白了我们要做的就是在一个`git`仓库中在克隆一个`git`仓库做为它的子仓库


## 使用子模块


### 1. 添加子模块

比如我们已经有一个`test`仓库了，我们在该仓库中加入一个`project`仓库来作为它的子模块，我们来`test`仓库中执行`git submodule add 远程仓库地址`

```js
 git submodule add git@github.com:webxiaoma/project.git
```

执行完后我们会看到自我们的`test`仓库中有了一个`project`仓库，而且在根目录下多了一个`.gitmodules` 文件，这个文件中记录着我们子仓库的信息

```js
[submodule "project"]
	path = project
	url = git@github.com:webxiaoma/project.git
```

并且我们现在可以进入我们的版本库`.git` 目录来看一下，该目录中会多出一个`modules` 文件夹，该文件夹中保存了我们`project` 仓库的一些配置信息和版本，他就是我们子仓库的版本库，在我们的`config`配置文件中也多出了一个`submodule`模块来记录我们子仓库的远程地址

```js
// 上省略
[submodule "project"]
	url = git@github.com:webxiaoma/project.git
	active = true
```

另外对子模块`project`的git操作和平常命令一样，我们只要在子模块中去执行就可以。


### 2. 克隆含有子模块的仓库

这里为了操作克隆含有子模块的仓库，我们将我们上面`test`仓库提交并推送到远程，之后我们删除本地`test`仓库，然后我们来克隆它，这里将带有子模块的仓库克隆下来并初始化有两种方法：


**第一种方法**


```js
git clone git@github.com:webxiaoma/test.git
```

克隆下来后我们进入子模块`project`目录中，会发现该目录是空的，我们需要初始化子模块。

```js
// 初始化本地配置文件
git submodule init

// 则从该项目中抓取所有数据并检出父项目中列出的合适的提交
git submodule updata
```

**第二种方法**

这种方法克隆下拉的仓库它的子仓库就已经初始化好了
```js
git clone --recursive git@github.com:webxiaoma/test.git
```
### 3. 推送子模块

推送子模块我们可以直接在子模块中执行`git push`，如果提示你执行` git push origin HEAD:<远程分支名>`, 你查看一下你是否处于子模块的`master` 分支，如果不是切换到`master`分支去推送，推送完成后我们再去推送我们的父模块。


### 4. 更新子模块

我们更新子模块有两种方法。第一种方法我们在子模块目录直接使用`git pull`;

第二种方法是使用`git submodule update --remote 子仓库名`

```js
git submodule update --remote project
```

::: warning 注意
使用第二种方法，
:::


### 5. 删除子模块

删除子模块我们可以使用

```js
git rm project
```
这样删除的子模块其实只是把我们子模块的文件夹删除了，并没有将子模块的信息删彻底，我们还要进入`.git/module` 目录中将`project`目录删除（这个目录对应的是子模块的的目录，如果你的模块叫`lesson`,那么就在`.git/module` 目录中删除对应的`lesson`目录）。



### 6. 批量操作子模块

如果主仓库中含有很多的子模块，我们在推送主仓库时需要先推送每一个子模块，这样操作很麻烦，我们可以使用`git submodule foreach 命令`，`foreach`可以遍历所有子模块并执行我们要执行的命令。例如我们推送所有子模块

```js
git submodule foreach 'git pull'
```