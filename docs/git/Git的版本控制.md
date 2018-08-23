---
sidebarDepth: 2
meta:
  - name: keywords
    content: git版本控制, 版本回退, git，git原理教程
  - name: description
    content: 本文主要讲述git的版本操作，以及使用git操作文件。
---


## 常用基础指令

::: tip 本章命令


:::


## 

我们在开发项目时git是按照一个时间线来控制我们的项目版本的，也就是我们每`git commit` 一次，git就会记录这次提交时间并创建一个项目版本，生成一个`commitId`来给我们这个版本一个唯一标记，某一天我们想回到我们的某个版本，只要我们知道这个版本的`commitId`就可以将我们的项目切换到指定的版本。







#### 二、git的版本操作:

操作之前我们在我们的工作区新建一个mygit.txt文件。

**1.管理修改**

我们在我们新建的mygit.txt文件中添加一句 "my first git"
查看文件中的内容我们可以执行命令：

```
$ cat mygit.txt
my first git
```
提交后我们可以使用 ` git diff HEAD -- mygit.txt ` 命令查看工作区和版本库里的最新区别

```
git diff 
```

**2.撤销修改**

例如上面的mygit.txt文件中我们的内容是  **my first git**,我们不小心将其改成了 **my last git**

这时必须要及时更改，不改可能会丢工作怎么办,
第一种方法就是，我们手动把我们写的删掉，如果更改的太多这样做会很麻烦.
我们还可以使用 `git checkout -- file`

```
git checkout -- mygit.txt
```
命令`git checkout -- readme.txt`意思就是，把`mygit.txt`文件在工作区的修改全部撤销，这里有两种情况：

一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

我们可以执行` cat mygit.txt` 是否发生变化



**3.版本回退**

我们在使用git上传我们的文件时，我们有事会碰到，刚上传就发现传错了，但是已经覆盖了我们远程仓库的源文件了。这时候我们是不是很懵逼。不知所措，放心，git给我们留了一手，因为git存在历史记录，我们可以查看历史记录：

```
$ git log
```
git log命令显示从最近到最远的提交日志，可能git会为我们打印出很多的记录信息，如果我们想看简洁的历史记录我们可以这样：

```
$ git log --pretty=oneline
3628162fb23d48395383f8f31179f24e0882e1e0 one
ea34578d54d6d7dd233c827ed32a8cd576c5ee85 two
cb926e7ea50ad11b8f9e909c05226233bf755030 three
```
上面一大串编码，这是` commit id `(版本号),电脑生成的,首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交，上一个版本就是`HEAD^`，上上一个版本就是`EAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100

好了，如果我们不小心提交错了，我们可以回退到上个版本，git会根据历史记录回退到上一个版本。


```
$ git reset --hard HEAD^
```

```
$ git log --pretty=oneline
3628162fb23d48395383f8f31179f24e0882e1e0 one
ea34578d54d6d7dd233c827ed32a8cd576c5ee85 two
```


**4.删除文件**

有时候我们想通过文件管理器把文件删除：

```
$ rm 文件
```
当然如果你想恢复文件可以用：

```
$ git checkout --  文件
```

恢复文件其实就是将我们暂存区内的版本替换了我们工作区的版本了。

git的版本操作基本就是这些了。
