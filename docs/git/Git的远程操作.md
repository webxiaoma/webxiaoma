---
sidebarDepth: 2
meta:
  - name: keywords
    content: git教程, git使用, git初识，git原理教程
  - name: description
    content: 本文是对git的简单安装使用，并初步了解git，初步知道git的一些基本概念原理的教程
---

# Git的远程操作




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



