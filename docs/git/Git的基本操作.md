---
sidebarDepth: 2
meta:
  - name: keywords
    content: git教程, git使用, git初识，git原理教程
  - name: description
    content: 本文是对git的简单安装使用，并初步了解git，初步知道git的一些基本概念原理的教程
---

## Git基础操作

- 初始化项目

比如我们有一个本地项目`project`目录，我们将该项目初始化本地仓库,首先我们先进入`project`目录，右击点击 `Git Bush Here`，打开git 命令面板然后输入

```
git init //初始化本地仓库
```
之后我们的`project`目录下回有一个`.git` 目录，由于该目录是隐藏目录，可能你的`project`目录看不到该目录，window上你可以这样设置[显示隐藏目录](https://jingyan.baidu.com/article/acf728fd2853fef8e410a37f.html)


`.git` 目录里边记录着我们的项目的版本（提交记录），还有一些其它的git信息





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
$ git add -Aa
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


##  Git 仓库


1.首先你有github 账号
   注册地址：[https://github.com/](https://github.com/)
   
2.在github上创建一个仓库

![创建仓库](https://webxiaoma.github.io/git/1.png)

接下来：
![创建仓库](https://webxiaoma.github.io/git/2.png)

3.创建好仓库后，我们本身是不可以用git链接到仓库的，我们需要配置ssh 公钥，生成公钥：

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






