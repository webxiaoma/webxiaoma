---
sidebarDepth: 2
meta:
  - name: keywords
    content: git标签, git, git tag，tag标签
  - name: description
    content: 本文主要记录git版本控制中该如何使用tag标签，以及一些tag标签的操作。
---

## 常用基础指令

::: tip 本章命令

:::


## Git标签的作用

当我们有一个重要的提交时，我们想永久的记住这个提交快照，或着是我们想记录我们项目的版本，有时候如果使用`cmmitId`会很麻烦很难记,而且当我们提交多了之后`commitId` 会有很多。这时我们就用到了git的标签功能。就像我们的项目，要发布`v1.0.0`版本了，我们可以给这次提交标记上`v1.0.0`，当我们要发布`v1.5.0`版本时就可以打上`v1.5.0`的标签,但我们想要回到`v1.0.0`版本时，我们就可以根据标签来进行回滚（回退）

## Git标签的本地操作

接下来我们直接练习标签的用法

### 1.给当前分支添加标签

- 创建轻量标签

```js
$ git tag v1.0.0 
```

- 创建附注标签

创建附注标签时我们可以添加一个对该标签的说明
```js
$ git tag -a v1.0.0 -m 'this is v1.0.0'
```
::: tip 来自官网
轻量级标签就像是个不会变化的分支，实际上它就是个指向特定提交对象的引用。而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证。一般我们都建议使用含附注型的标签，以便保留相关信息；当然，如果只是临时性加注标签，或者不需要旁注额外信息，用轻量级标签也没问题。
:::

### 2.给指定`commit`打标签

标签是打在最新的commit 上的。如果我们想要在上上次提交中打上标签我们可以这样操作：

首先查看历史提交 commit id

```js
$ git log --pretty=oneline --abbrev-commit
```
![commit id](https://webxiaoma.github.io/git/git5-1.png)

上图红框中为 commit id 

然后我们执行

```js
$ git tag v2.0 1ed73cb
```
这样我们就给制定的`commitId `打上了标签，打上标签后我们当然还需要查看我们的标签了。


### 3.查看标签

查看添加的所有tag

```js
$ git tag
```
查看带说明的某个标签 `git show <tagName>`

```js
$ git show v1.0.0
```
### 4.切换标签

我们可以像切换分支一样来切换我们的标签`git checkout <tagName>`

```js
git chekcout v1.0.0
```

### 5.刪除标签

```js
$ git tag -d v0.1.0
```

## Git标签的远程操作

### 1.刪除远程标签 

```js
// 先从本地删除,然后 
$ git tag -d v0.1
```
### 2.推送标签

推送单个：

```js
$ git push origin v1.0
```
推送所用标签：

```
$ git push origin --tags
```
