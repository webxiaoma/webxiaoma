---
sidebarDepth: 2
meta:
  - name: keywords
    content: git教程, git使用, git初识，git原理教程
  - name: description
    content: 本文是对git的简单安装使用，并初步了解git，初步知道git的一些基本概念原理的教程
---

# Git的基础操作

## 常用基础指令

知道了git的大概工作的大概流程我们来实践一下git的基础操作

::: tip 本章命令
-  `git init` 初始化项目
-  `git add`  添加项目到暂存区
-  `git commit` 提交项目到版本库 
-  `git status` 查看当前仓库状态
-  `git diff` 查看修改仓库内容
-  `git rev-parse HEAD ` 获取完整commitID
:::

## 初始化项目

比如我们本地项目创建一个`project`目录，然后使用`git init`命令将我们的项目初始化为一个`git`仓库

```js
// 创建project 目录
mkdir project 

// 进入project目录
cd project 

//初始化本地仓库
git init 
```

初始化之后我们的`project`目录下回有一个`.git` 目录，由于该目录是隐藏目录，可能你的`project`目录看不到该目录，window上你可以这样设置[显示隐藏目录](https://jingyan.baidu.com/article/acf728fd2853fef8e410a37f.html)


`.git` 这个目录就版本库，里边记录着我们的项目的版本（提交记录），还有暂存区以及一些其它的git信息。需要注意的是这个目录下的文件不要随意去更改，不然可能会影响git的使用。


## 添加到暂存区

初始化我们的仓库后，我们在`project`目录下新建一个`test.js`文件。此时我们的工作区就会有一个`test.js` 文件，在这里我们可以使用 `git status`命令来查看本地仓库的状态

```js
git status
```
这时会出现下面输出

<MyImg src="/img/git-2-4.jpg" alt="git初始化" />

图中红色的文字就是指的是我们创建的`test.js`文件, 只要在工作区中新增的文件或修改过的文件没有被添加到缓存区中，当我们查看仓库状态时就会将这些文件以红色标记出来，并提示我们将它们添加到缓存区。

并且此时我们的工作目录、版本库和缓存区它们的状态就是这样的：

<MyImg src="/img/git-2-1.jpg" alt="git初始化" />

工作区中有一个 `test.js` 文件，而暂存区中不存在任何东西，`master`分支中也不存在任何东西，（需要知道的是当我们初始化git仓库时，git会为我们自动生成一个master分支，并将`HEAD`指针指向该分支。在接下来分支管理的文章中我们会详细的讨论）。object对象库此时也是空的

接下来我们使用 `git add`命令将`test.js` 文件添加到我们的暂存区中

```js
git add test.js
```

我们也可以使用 `git add .` 将我们工作区内的所有文件添加到暂存区，添加到缓存区后我们在执行`git status` 命令可以看到添加到缓存区的文件会显示绿色，并提示我们将它提交到版本库中

<MyImg src="/img/git-2-5.jpg" alt="git缓存区" />


并且此时我们的工作目录、版本库和缓存区它们的状态就是这样的：

<MyImg src="/img/git-2-2.jpg" alt="git缓存区" />

工作区中有一个 `test.js` 文件，执行完`git add test.js`命令后暂存区中会生成（或更新）和工作区对应的目录，每个目录和文件生成对应的id，并且将我们的工作区`test.js`文件写入 `objces` 对象库中，并且该对象的ID对应暂存区的索引中，形成对应关系（有点像书的目录对应某一页书的内容一样）。



::: warning
需要注意的是：git在添加项目到缓存区时，会忽略项目中的空文件夹，也就是不会把空文件夹添加到缓存区。
:::

## 提交项目到版本库

我们将 `test.js` 文件添加到缓存区后，使用`git commit` 命令将它提交到本地版本库，提交时我们需要使用`-m`为我们提交的项目版本加上备注。

```js
git commit -m '提交练习'
```
提交完成后我们在次执行`git status` 命令，可以看到提示我们`working tree clean` 工作区是干净的，这说明我们已经提交成功。

<MyImg src="/img/git-2-6.jpg" alt="git缓存区" />


此时我们的工作目录、版本库和缓存区它们的状态就是这样的：

<MyImg src="/img/git-2-3.jpg" alt="git提交" />

提交后，我们暂存区中的项目目录会存入到 `objces` 对象库中，并且master分支上会更新目录信息，并和 `objces` 对象库对应起来。到此一次项目版本的更新在git仓库中就完成了。


## 查看修改内容

当我们修改文件后，git会通过工作区文件和版本库中的对比来发现我们修改了那些文件以及文件中的那些内容。我们将修改后的项目提交到版本库后，我们可以通过 `git diff` 来查看我们的项目做了那些修改，也就是通过该命令获取我们仓库中工作区、暂存区、版本库之间的差异信息。

该操作有一下几种用法：

::: tip git diff 常见用法

- `git diff 不加参数` 比较工作区和暂存区的差别（只比较修改文件和删除的，不会比较新增加的）

- `git diff --cached `比较暂存区与最新本地版本库差别

- `git diff HEAD` 比较工作区和最新版本库的差别

- `git diff commit-id` 比较工作区与指定`commitId`版本的差异

- `git diff --cached commit-id` 比较暂存区与指定`commitId`版本的差异

- `git diff commit-id1 commit-id2` 比较两个`commitId`版本之间的差异
:::

我们来操作一下，我们修改`project` 目录下的`test.js` 文件。

```js
// test.js

var a = "test.js 文件被修改"
```

然后我们执行 `git diff`，比较工作区和暂存区的差别，我们会看到输出以下结果

```js
diff --git a/test.js b/test.js
index e69de29..c6f586a 100644
--- a/test.js
+++ b/test.js
@@ -0,0 +1 @@
+var a = "test.js 文件被修改"
\ No newline at end of file
```
我们很清楚的看到，上边信息显示了在工作区中`test.js`文件比缓存区中的`test.js`文件多了一行`var a = "test.js 文件被修改"`代码。

我们在来练习一个 比较工作区与指定`commitId`版本的差异，首先我们要先获取我们的`commitId`。


获取当前版本完整id

```js
git rev-parse HEAD 

// 输出
c2ef6296d6b1119bfc9d4142fe1407a3bc0d8aed
```
获取短的 commit id
```js
// 获取当前版本完整id
git rev-parse --short HEAD 

// 输出
c2ef629
```

比较工作区与指定`commitId`版本的差异


```js
git diff c2ef6296d6b1119bfc9d4142fe1407a3bc0d8aed
```
我们可以看到输出结果

```js
diff --git a/test.js b/test.js
index e69de29..c6f586a 100644
--- a/test.js
+++ b/test.js
@@ -0,0 +1 @@
+var a = "test.js 文件被修改"
\ No newline at end of file
```

我们看到当前目录和最新版本库中的差异也是`var a = "test.js 文件被修改"`,其它的`git diff`参数使用方法和我们列举的两个都大同小异，这里不在列举，可以自己动手尝试一下。

