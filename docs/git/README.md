---
sidebarDepth: 2
meta:
  - name: keywords
    content: git教程, git使用, git初识，git原理教程
  - name: description
    content: 本文是对git的简单安装使用，并初步了解git，初步知道git的一些基本概念原理的教程
---


# Git 初始



## GIT vs SVN

我们一开始开始对git和svn可能存在疑惑，这两个东西到底是做什么的。它们的大致区别如下：

>1. GIT是分布是版本控制工具，svn是集中式管理工具
>2. GIT把内容按元数据方式存储，而SVN是按文件;
>3. GIT分支和SVN的分支不同;
>4. GIT没有一个全局的版本号，而SVN有;
>5. GIT的内容完整性要优于SVN;

### adaf

区别的详细介绍[请见这里](http://blog.jobbole.com/31444/)

## GIT 的安装

在window上安装git，基本就是傻瓜是安装 [官网下载](https://git-scm.com/)

安装成功后右击鼠标会出现`Get bush Here` 和 `Get Gui Here` 说明安装成功



安装成功后，我们需要设置我们的邮箱和账号，因为Git是分布式版本控制系统，每个机器都要进行区分, 我们在任意一个文件夹中右键点击`Get Gui Here` 打开git命令面版,输入下面命令

全局配置：

```js
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Email"
```

局部配置

```js 
$ git config  user.name "Your Name"
$ git config  user.email "Your Email"
```
如果不成，可以先初始化git 

```js
$ git init
```
查看所有配置

```js
$ git config --list
```

什么时候你会用到局部配置，当你公司的项目使用的是全局配置时，而你自己也有仓库方在其他地方，这时，你可能需要局部去配置自己的用户名和邮箱。

##  GIt连接github

1. 首先你有github 账号[注册地址](https://github.com/)
   
2. 在github上创建一个仓库

![创建仓库](https://webxiaoma.github.io/git/1.png)

接下来：

![创建仓库](https://webxiaoma.github.io/git/2.png)

3. 创建好仓库后，我们本身是不可以用git链接到仓库的，我们需要配置ssh 公钥，生成公钥：

```
 $ ssh-keygen -t rsa -C "Your Email"
```
这里我们连续按三次回车，会出现下列图示
![生成ssh](https://webxiaoma.github.io/git/3.png)

我这里生成的ssh公钥在 c/Users/Administrator/.ssh 我们需要的文件如下
![生成ssh](https://webxiaoma.github.io/git/4.png)

4.将我们生成好的公钥放到我们github上，（其他网络仓库操作步骤大致相同）
![生成ssh](https://webxiaoma.github.io/git/5.png)
![生成ssh](https://webxiaoma.github.io/git/6.png)

到这里我们就配置好了ssh公钥了。

##  GIT的基本使用

git链接仓库请请访问：

**1.创建仓库以及提交代码** 
创建一个版本库之前我们要做到就是选好一个位置，然后：

```
$ mkdir myGit   // 创建myGit文件夹
$ cd myGit      // 打开myGit文件夹
$ pwd           // 查看所在文件夹目录
```

然后我们要初始化该文件成为git仓库，我们执行命令

初始化仓库：

```
$ git init  
```

如果你细心的话，可以看到我们 myGit 文件夹下回出现一个隐藏的git文件，如果你没有看到，可以设置一下电脑，显示隐藏文件夹（这里不讲这么设置了），或是执行命令 `ls -ah`，另外git文件夹，不要随意乱去设置

初始化完成后我们继续，我们在该文件夹下(myGit文件下，它的子目录也行，不要方法git文件夹中)新建一个index.html文件,里面写点内容，我写的是

```
var a =1;
var b = 2;
```

然后执行

```
$ git add  index.html  // 告诉git把index.html文件添加到仓库
$ git commit -m 
 // '新添加的index.html文件' git commit告诉Git，把文件提交到仓库：-m 后面跟的是提交的说明
```

如果我们有好多文件需要添加到仓库，我们可以使用一下命令：

```
$ git add 文件名1 文件名2 
```
或是更简单的，将所有文件添加到仓库（一下两个选其中一个就可以）

```
$ git add .
$ git add -A
```

**2.本地仓库与远程仓库建立连接** 
  这里有两种方法，第一种，直接克隆远程仓库：
  

```
$ git clone 远程仓库地址
```
github上的远程仓库地址：


第二种方法：

``` 
git remote add origin 远程仓库地址
```

建立连接后，我们将我们的文件 index.html 推送到github上去;(**git默认是不允许上传空文件夹的**)

```
$ git push
```
如果你用的是第二种方法，在第一次上传时我们这样去推送文

```
git push -u origin master
```
以后推送你就可以使用`git push` 了

接下来我们如果想要查看仓库当前的状态可以执行：

```
$ git status 
```

如果我们想要查看修改的内容：

```
$ git diff
```

到这里git的基本使用方法我们就说完了，如果你还有什么不明白，欢迎留言，如果在我能力范围内一定解答。接下来我们将更深入的了解一下git的使用方法。




 








=======
sidebarDepth: 2
meta:
  - name: keywords
    content: git教程, git使用, git初识，git原理教程
  - name: description
    content: 本文是对git的简单安装使用，并初步了解git，初步知道git的一些基本概念原理的教程
---

# GIT 初识


## GIT 的由来

[维基百科](https://zh.wikipedia.org/wiki/Git)

`Git` 名字由来是林纳斯·托瓦兹自嘲地取了这个名字“git”，该词源自英国俚语，意思大约是“混账”

自2002年开始，林纳斯·托瓦兹决定使用`BitKeeper`作为Linux内核主要的版本控制系统用以维护代码。因为`BitKeeper`为专有软件，这个决定在社群中长期遭受质疑。在Linux社群中，特别是理查德·斯托曼与自由软件基金会的成员，主张应该使用开放源代码的软件来作为`Linux`核心的版本控制系统。林纳斯·托瓦兹曾考虑过采用现成软件作为版本控制系统（例如Monotone），但这些软件都存在一些问题，特别是性能不佳。现成的方案，如`CVS` (`svn`就是`cvs` )的架构，受到林纳斯·托瓦兹的批评。

2005年，安德鲁·垂鸠写了一个简单程序，可以连接`BitKeeper`的存储库，`BitKeeper`著作权拥有者拉里·麦沃伊认为安德鲁·垂鸠对`BitKeeper`内部使用的协议进行逆向工程，决定收回无偿使用`BitKeeper`的许可。`Linux`内核开发团队与`BitMover`公司进行磋商，但无法解决他们之间的歧见。林纳斯·托瓦兹决定自行开发版本控制系统替代`BitKeeper`，以十天的时间，编写出第一个git版本。


说白了`Git` 解决了我们什么痛点的，比如我们有一个 `v1.0.0` 版本的项目，如果我们不是用版本控制工具，发布一个`v1.1.0`版本后，我们想保留`v1.0.0` 版本的项目供以后某些情况下使用或提供用户不同版本项目的使用，我们只能将`v1.0.0` 版本的项目复制一份保留起来，如果我们在发布一个版本`v1.2.0`，我们又要保留一个`v1.0.0` 版本的项目，如此一来，如果版本发布了很多我们将会有大量的版本项目，这样我们管理起来也会很麻烦。而版本工具的出现正好解决了我们这个问题，当然版本工具也解决了多个人共同开发一个项目的问题以及一些提高团队开发效率的问题，并且还可以在不连接网络的情况下对我们的版本进行控制，而像svn这样的集中式管理工具只能在联网的情况下才可以使用。



## Git vs SVN

做程序的人对于 [Git](https://baike.baidu.com/item/GIT/12647237) 和 [svn](https://baike.baidu.com/item/SVN/3311103) 应该是在熟悉不过了，当我们想控制我们的项目版本时会经常用到这两个工具，而他们的工作原理却有很大差别。它们的大致区别如下：

**1. GIT是分布是版本控制工具，svn是集中式管理工具**

**2. GIT把内容按元数据方式存储，而SVN是按文件**

**3. GIT分支和SVN的分支不同**

**4. GIT没有一个全局的版本号，而SVN有**

**5. GIT的内容完整性要优于SVN**



区别的详细介绍请见这里：[http://blog.jobbole.com/31444/](http://blog.jobbole.com/31444/)


## Git 安装

**window 上的安装**

在window上安装git [官网](https://git-for-windows.github.io), 下载下来后一直点击下一步就可以了。
安装成功后在任意一个文件夹中右击鼠标会出现, `Git Bush Here` 和 `Git Gui Here` 说明我们已经安装成功了。



安装成功后，我们需要设置我们的邮箱和账号，因为Git是分布式版本控制系统，每个机器都要进行区分

全局配置：

```js{4}
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Email"
```

局部配置

```js{4} 
$ git config  user.name "Your Name"
$ git config  user.email "Your Email"
```

查看所有配置

```js{4}
$ git config --list
```

## Git 工作原理

假设我们有一个本地的使用git控制版本的`project`项目，目录结构如下

```js
|--- .git // git版本库
|--- index.js
```

接下来在讲git工作原理前，我们先要明白几个概念

| 概念          | 说明           |
| ------------- |:-------------| 
| 工作区      | 所谓工作区就是指的你的本地目录也就上上边的`project`项目 | 
| 暂存区（索引）      | 存放在`.git目录`下的`index`文件中    |   
| 版本库 | 指我们工作区中的`.git目录`，该目录是个隐藏目录     |    
| 远程仓库 | 指的是我们网上托管项目的地方，比如github、码云    |    


`git`的工作流程如下图 以下内容来自 [菜鸟教程](http://www.runoob.com/git/git-workspace-index-repo.html)

<MyImg src="../img/git-1.jpg" alt="git"/>


图中左侧为工作区，右侧为版本库。在版本库中标记为 `index` 的区域是暂存区（`stage, index`），标记为 `master` 的是 `master` 分支所代表的目录树。

图中我们可以看出此时 `HEAD` 实际是指向 `master` 分支的一个"游标"。所以图示的命令中出现 `HEAD` 的地方可以用 `master` 来替换。

图中的 `objects` 标识的区域为 `Git` 的对象库，实际位于 `.git/objects` 目录下，里面包含了创建的各种对象及内容。

- 当对工作区修改（或新增）的文件执行 `git add .` 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。

- 当执行提交操作（`git commit`）时，暂存区的目录树写到版本库（对象库）中，`master` 分支会做相应的更新。即 `master` 指向的目录树就更新成了提交时暂存区的目录树。

- 当执行 `git reset HEAD` 命令时，暂存区的目录树会被重写，被 `master` 分支指向的目录树所替换，但是工作区不受影响。

- 当执行 `git rm --cached <file>` 命令时，会直接从暂存区删除文件，工作区则不做出改变。

- 当执行 `git checkout .` 或者 `git checkout -- <file>` 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。

- 当执行 `git checkout HEAD .` 或者 `git checkout HEAD <file>` 命令时，会用 `HEAD` 指向的 `master` 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。

- 当执行 `git push` 时，我们本地版本库中的项目将会推送到远程仓库中（如）。












     
















