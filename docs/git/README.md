---

---

# Git基础



## GIT vs SVN

我们一开始开始对git和svn可能存在疑惑，这两个东西到底是做什么的。它们的大致区别如下：

>1. GIT是分布是版本控制工具，svn是集中式管理工具
>2. GIT把内容按元数据方式存储，而SVN是按文件;
>3. GIT分支和SVN的分支不同;
>4. GIT没有一个全局的版本号，而SVN有;
>5. GIT的内容完整性要优于SVN;



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




 




















     
















