---
sidebarDepth: 2
meta:
  - name: keywords
    content: git远程仓库, git远程操作, git，仓库，版本工具
  - name: description
    content: 本文主要讲解git的远程操作，以及创建远程仓库，将本地仓库和远程仓库进行连接
---

# Git的远程操作


## 远程常用指令

::: tip 本章指令
- `git clone 远程地址` 克隆远程项目
- `git pull` 拉取远程项目
- `git fetch` 拉取远程项目（但不会和本地合并）
- `git push` 推送远程项目
:::

远程仓库其实就是将我们本地的版本库原封不动的放到了网络空间上，（这里可以把远程仓库当做网路云盘）。

我们在工作中，同一个项目可能需要几个人同时开发，并且可能你们几个人也不在一个办公室，当你开发这个功能，他开发另一个功能，最后我们需要放到一起，如果我们经常使用微信或qq来传输我们的项目会很麻烦，而且我们还要手动的进行粘贴复制的合并项目。而有了远程仓库，我们会瞬间豁然开朗，我们可以把自己写的模块通过`git`将我们本地仓库推送（上传）到我们远程仓库上，你的另一个小伙伴，就可以拉取（下载）下来，并且`git`会适当的去进行自动合并我们的代码，这会大大提高我们之间工作的的效率。


## 创建远程仓库

因为远程仓库是放在网上的，所以我们要选择一个托管我们仓库的地方，现在托管仓库的第三方有很多，当然你自己也可以搭建自己的远程仓库。常见的远程仓库有：[GitHub](https://github.com)、[码云](https://gitee.com)、[Coding](https://coding.net/) 等等。这里我们以 `GitHub` 中创建仓库并关联本地电脑来做一个讲解。


### 1. 注册github 账号

注册地址：[GitHub官网](https://github.com/)
   
<svg height="132" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="132" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
   
### 2. 在GitHub上创建一个仓库

点击 `New repository` 按钮进入创建仓库页面

<MyImg src="/img/1.png" alt="远程仓库"/>

安卓下面的提示填写信息

<MyImg src="/img/2.png" alt="远程仓库"/>

点击确定后，我们在GitHub上就有一个我们自己的远程仓库了，仓库的名字你可以随便起，但是你的账号中不能出现两个一样的仓库名称，并且尽量起英文名。这里比如我们的项目仓库叫 `test` 名字。我们创建好后，如下图：

<MyImg src="/img/git-3-1.jpg" alt="github" />


### 3. 本地关联GitHub

本地电脑关联GitHub我们需要使用使用 `ssh`公钥，它起到加密作用，这里说通俗易懂点就是，让 `GitHub` 来识别你的的电脑，如果你在你的电脑上生成了 `ssh`公钥，并放到了 `GitHub`，那么 `GitHub`就可以在你使用git推送仓库时识别出来是你这台电脑上推送的，并接受你的推送，如果其他电脑推送就不会成功。当然如果你在其他电脑上也生成了`ssh`公钥，并放到了 `GitHub`上，那么`GitHub`也会允许你在这台电脑上进行上传下载的。


在生成`ssh`公钥前我们需要全局配置一下我们git的账号和邮箱，如果你已经配置过请忽略，不然每次我们提交代码都会让我们输入的账号密码

```js{4}
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Email"
```

我们执行以下命令来生成`ssh`公钥：

```
ssh-keygen -t rsa -C "Your Email"
```

输入后，我们按第一次回车，会提示我们将生成的密匙保存到哪里，可以直接回车默认；第二次提示我们生输入成密匙的名字，我们也可以不写直接回车默认，这里我们连续按三次回车，会出现下列图示

<MyImg src="/img/3.png" alt="远程仓库"/>

我这里生成的ssh公钥在 c/Users/Administrator/.ssh 我们需要的文件如下

<MyImg src="/img/4.png" alt="远程仓库"/>

将我们生成好的公钥放到我们github上，（其他网络仓库操作步骤大致相同）


<MyImg src="/img/5.png" alt="远程仓库"/>

<MyImg src="/img/6.png" alt="远程仓库"/>

配置完成后我们来检测一下是否关联成功使用`ssh -T git仓库地址` 这里的地址是我们上图提示的 `Use SSH` 地址。

```
ssh -T git@github.com
```

如果提示`Hi webxiaoma! You've successfully authenticated, but GitHub does not provide shell access.` 说明我们配置成功了，接下来我们就可以使用git对我们的远程仓库进行操作了。



## 操作远程仓库

### 1. 克隆远程仓库

现在我们将我们 `GitHub`上的远程仓库使用 `git clone 远程仓库地址`克隆到我们本地,克隆时我们使用`git@...`开头的链接地址，不要使用`https`开头的链接地址，并且要克隆自己`GitHub`的项目，不然你无法推送项目

```js
git cloen git@github.com:webxiaoma/test.git
```

克隆完成后我们仓库的关系图如下：

<MyImg src="/img/git-3-2.png" alt="远程仓库"/>

### 2. 推送远程仓库

另外我们也可以使用`git push`命令将我们本地仓库中修改的内容推送到我们的远程仓库中，例如我们在本地test仓库中添加一个`new.js` 文件，然后我们进行以下操作。

```js
// 将new.js 文件添加到缓存区
git add new.js

// 将缓存区文件提交到版本库
git commit -m '新建文件'

// 将本地项目推送到远程仓库
git push
```

推送完成后，我们去`github `上查看我们的test仓库，会发现仓库中多了一个`new.js`文件，并有'新建文件'的注释，还有提交时间

<MyImg src="/img/git-3-2.jpg" alt="远程仓库"/>

### 3. 拉取远程仓库

如果我们多人进行开发时，其他人想远程仓库推送了它写的模块之后，我们可以使用`git pull` 将其拉取下来。我们可以在远程仓库中新建一个`README.md`文件,然后我们将它拉取到本地。

<MyImg src="/img/git-3-3.jpg" alt="远程仓库"/>


新建完成后我们执行

```js
git pull
```

之后我们本地仓库中就会多出一个`README.md`文件。如果这是用图来表示我们的工作区，暂存区，版本库和远程仓库的关系就是这样的

<MyImg src="/img/git-3-5.png" alt="远程仓库"/>


::: tip git fetch
将远程仓库拉取到本地还可以使用 `git fetch`,但是它们是有区别的：

`git fetch`：相当于是从远程获取最新版本到本地，不会自动merge

`git pull`：相当于是从远程获取最新版本并merge到本地 pull = fetch + merge

在实际使用中，git fetch更安全一些
因为在merge前，我们可以查看更新情况，然后再决定是否合并
:::



### 4. 一个本地仓库关联多个远程仓库

::: tip 须知
在`git`中一般默认会使用 `origin` 来代表远程仓库, 我们可以使用 `git remote`命令来对远程仓库进行一些操作。
:::

我们可以使用`git remote`命令来查看我们仓库中配置了那些远程仓库

```js
git remote
```
输出结果

```js
origin
```
这里 `origin` 它就是在本地仓库中指代远程仓库的一个名字，这个名字我们是可以更换的，而`origin`代表的具体是哪个路径的仓库，我么可以执行`git remote -v` 查看

```js
git remote
```
输出结果

```js
origin  git@github.com:webxiaoma/test.git (fetch)
origin  git@github.com:webxiaoma/test.git (push)
```

当然这些信息我们还可以在 `.git/confg` 中找到，我们可以打开`.git` 目录下的 `config`我们可以看到以下信息

```
//上边省略

[remote "origin"]
	url = git@github.com:webxiaoma/test.git
  fetch = +refs/heads/*:refs/remotes/origin/*
  
[branch "master"]
	remote = origin
	merge = refs/heads/master

//下边信息省略
```

我们可以使用`git remote add 本地指代仓库的名字 远程仓库地址`给我们的仓库在新加一个远程仓库地址(码云上的test仓库)

```js
git remote add mayun git@gitee.com:webxiaoma/test.git
```

添加之后我们可以看到 `.git/confg` 中发生了变化, 新增了`remote mayun` 的远程仓库，当然我们执行 `git remote -v` 也可以查看到`git`有了两个远程仓库，一个 `origin`，一个 `mayun`

```
//上边省略

[remote "origin"]
	url = git@github.com:webxiaoma/test.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[remote "mayun"]
	url = git@gitee.com:webxiaoma/test.git
	fetch = +refs/heads/*:refs/remotes/mayun/*

//下边信息省略
```
现在我们将我们的本地仓库推送的码云上边的`test`项目上去(**需要注意的是，使用码云托管仓库时，也要配置和使用github一样配置配置一下ssh**)，

这里我们需要知道，当我们使用`git push` 推送我们本地仓库时，其实git默认是推送到`origin`远程仓库，就相当于你执行了`git push origin`,只不过我们这里省略了仓库名，`git pull` 拉取时也一样。如果我们电脑也和码云进行了链接，我们就可以推送了。在推送之前，因为我们在码云创建的`test`仓库和我们本地仓库是不一样的，我们推送前需要先拉取下来，如果不拉取一下，你代码也是无法提交上去的。（如果远程仓库版本提交记录和本地不一样时，必须先拉取，才可以提交）

```js
git pull mayun 
```
预料之中`git` 拉取失败了，因为码云上边的远程仓库的`commit id`（历史提交id）和本地仓库的不一样，git不允许合并。这时我们需要在`git pull` 后添加 `--allow-unrelated-histories` 来告诉 git 允许不相关历史合并。

```js
git pull mayun master --allow-unrelated-histories
```
如果执行完，进入一个无法输入内容的(vim)界面，这种情况我们在分支管理中去将，你只要按 `shift键` + `:` 键，然后输入 `wq!` 回车就会保存退出（输入 `q!`是不保存退出）。 

<MyImg src="/img/git-3-4.jpg" alt="远程仓库"/> 

然后我们就可以将我们的本地项目推送的码云上

```js
git push mayun
```

如果你觉得我们每次写完代码都要执行`git push origin` 和 `git push mayun` 将本地仓库推送到两个远程仓库上边，我们可以这样做建一个名字叫`all` 的远程仓库名，它包含`origin`的远程仓库和`mayun` 的远程仓库,使用命令 `git remote set-url --add 远程仓库指代名 远程仓库地址` 来为某个远程仓库名字下添加多个远程仓库链接


```js
//建一个名字叫`all` 的远程仓库名并添加github上的仓库路径
git remote add all git@github.com:webxiaoma/test.git

// 在将码云远程仓库路径添加到all中
git remote set-url --add all git@gitee.com:webxiaoma/test.git
```
这时我们`.git/confg` 文件中`git`的配置变成了这样，另外我们也可以直接修改这个文件来实现我们想要的结果。

```
[remote "origin"]
	url = git@github.com:webxiaoma/test.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[remote "mayun"]
	url = git@gitee.com:webxiaoma/test.git
	fetch = +refs/heads/*:refs/remotes/mayun/*
[remote "all"]
	url = git@github.com:webxiaoma/test.git
	fetch = +refs/heads/*:refs/remotes/all/*
	url = git@gitee.com:webxiaoma/test.git
```

然后我们在我们本地仓库中新建一个`now.md` 文件，然后执行

```js
git add .

git commit -m '新增md文件'

git push all
```
 
之后我们在码云和GitHub上都可以看到我们的提交了。 



另外 `git remote` 命令还有一些其他操作：


- `git remtoe rm 远程仓库指代名`  删除本地配置的某个远程仓库
- `git remote show` 查看远程仓库信息
- `git remote rename 远程仓库名1 远程仓库名2`   重命名远程仓库指代名









