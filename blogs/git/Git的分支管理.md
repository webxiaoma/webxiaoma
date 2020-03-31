---
sidebarDepth: 2
meta:
  - name: keywords
    content: git分支, git, git初识，git原理教程
  - name: description
    content: 本文主要讲述git的分支操作以及git的分支管理。
---

# Git的分支管理


## 常用基础指令

::: tip 本章命令

- `git checkout -b 分支名`   创建新分支
- `git checkout 分支名`  切换分支
- `git branch` 查看本地分支 
- `git branch -r` 查看远程分支 
- `git reset --hard HEAD/commitId` 切换分支版本
- `git log [--pretty=oneline]` 查看提交历史记录,可选参数`--pretty=oneline`
- `git log --graph --pretty=oneline --abbrev-commit` 以时间轴形式展示简洁提交记录信息
- `git merge [-m '备注' --no-ff] 分支名` 合并分支（默认以`Fast-forwar` 模式合并）
- `git push -u origin 分支名` 关联远程分支
- `git push origin --delete 分支名` 删除指定远程分支（或使用`git push origin :分支名`）
:::

说到`git`分支，没有接触过的人肯定会问什么是分支。这里我们来大致的说一下，其实分支类似于将你的项目拷贝了一份，我们在拷贝的那一份上进行项目的开发。就好比一开始我们公司有一个项目，公司来了个两个新人小王和小李，他们俩在开发这个项目时，怕把原来的项目搞坏，就没人复制了一分项目，在自己复制的项目上进行开发，这时，这两份项目就相当于两个分支，而公司原来的项目就相当于主分支。当在进来新人小牛时，小牛又在小王那份项目上复制了一份项目进行开发，而这时，复制的项目就相当于小王那个项目的一个分支，最后项目开发完成时我们将我们的项目合并到了一起，就完成了我们项目的开发。



## Git版本

在git中，我们新创建的项目就会存在一个分支，这个分支就叫主分支 `master 分支`，分支记录着我们每次提交项目的记录，这些提交记录连接起来就是一条时间线（版本线）。我们一般在开发项目时，会创建出另一个分支，在该分支上创建项目。现在我们来熟悉一下操作分支的一些命令，在创建分支前我们来了解一下`git`的版本。

g例如我们初始化一个`git`仓库`project`，新创建的仓库默认是有一个`master`主分支的，并且`HEAD` 指针指向当前分支的当前版本（初始时也就是`master`分支）。我们在项目中新建一个`test.js` 文件,并将它提交。

```js
// 将test.js 文件添加到缓存区
git add test.js

// 提交缓存区的内容
git commit -m '第一个版本'
```

这时我们在`master`分支上就有了第一个项目版本，`master`分支应该是这样的:

<MyImg src="/img/git-4-1.png" alt="git分支"/>

当我们在创建一个 `two.js` 文件提交我们的修改后，`master`分支版本应该是这样的:

<MyImg src="/img/git-4-2.png" alt="git分支"/>


## 版本回退

通过上面操作我们可以知道，git每提交一次都会有生成一个版本，并且将`HEAD`指针指向当前分支下的最新版本。如果有一天我们想将我们的项目回退到上一个版本改怎么处理呢，这时我们可以使用命令`git reset --hard HEAD^` 或 `git reset --hard commitId`。在使用这个命令之前我们可以先使用`git log`来查看一下我们上面提交的历史记录

```js
git log
```

我们可以看到输出结果

```js
commit fdc0fb441809ae6aca632e6dbe9f04f9640e21d2 (HEAD -> master)
Author: webxiaoma <webxiaoma@qq.com>
Date:   Sun Aug 26 20:13:00 2018 +0800

    第二个版本

commit 72a53e7a41f456b3e22645618ebfff1fe3dce243
Author: webxiaoma <webxiaoma@qq.com>
Date:   Sun Aug 26 20:12:13 2018 +0800

    第一个版本
```
我们可以看到我们两次的提交记录，里面包含时间，操作的`git`账号以及每次提交的 `commit id`，最近的一次提交展示在最上边。 另外我们先将这两个 `commit id`记下来，下面我们呢会使用到。**使用`git log`后如果我们想退出可以按 `q` 键** 此时我们的项目目录有第一个版本中创建的`test.js`和第二个版本时创建的`two.js`。接下来我们将我们的项目回退到第一个版本。

```js
git reset --hard HEAD^
```
此时我们的项目已经会到了第一个版本，我们可以执行`git log` 查看版本记录，因为`git log`输出的内容太多，我们可以简化一下输出内容，我们可以执行`git log --pretty=oneline`，输出结果

```js
72a53e7a41f456b3e22645618ebfff1fe3dce243 (HEAD -> master) 第一个版本
```
可以看到只输出了我们一个版本的记录，并且我们可以查看一下我们的项目，现在只有`test.js` 文件，而`two.js` 文件已经不见了。此时我们的`master` 分支又成了第一版本的样子。

<MyImg src="/img/git-4-1.png" alt="git分支"/>

如果我们的项目已经有好几和版本了，我们想回退到上两个版本怎么弄，我们可以执行`git reset --hard HEAD^^`, 如果回退到上三个版本我们可以执行`git reset --hard HEAD^^^`, 我想你已经知道怎么会退到第四个版本了，`HEAD` 后面每加一个`^` 就是向上找一个版本的意思。如果我们还想从第一个版本回到第二个版本怎么弄，我们可以使用命令`git reset --hard commitId`, 这时就用到我们上面记下来的两个 `commitID` 中的第二个版本的`Id`了

```js
git reset --hard fdc0fb441809ae6aca632e6dbe9f04f9640e21d2
```




执行完，我们查看版本记录`git log`，可以看到我们当前版本是第二个版本，并且我们的项目中`two.js`文件又显示出来了。

<MyImg src="/img/git-4-2.png" alt="git分支"/>

当然我们可以使用命令`git reset --hard commitId`来跳到我们指定的`commitId`的任何版本，只要我们记住这个ID就可以任意切换。


::: tip 小提示
- 这里因为`commitId` 太长我们可以只要截取一段就可以跳转到指定的版本了，而不用使用完整的`commitId`

- 如果我们想回到我们的原来版本，但是又忘记了原来版本的`commitID`，我们可以执行`git reflog` 来查看每次你使用git操作的版本记录，里面含有简化的`commitID`。
:::





## 创建分支

在给 `git`中我们使用`git checkout -b 分支名` 来创建`git`的分支，并切换到创建的分支。比如我们在上边`master`分支的第二个版本的时候创建一个`dev`分支。

```js
git checout -b dev
```
这时我们就创建了一个和`master`项目一样的`dev`分支，我们可以从`git base` 中可以看到

<MyImg src="/img/git-4-8.png" alt="git分支"/>

这时我们的项目就有一个`master` 分支和 `dev` 分支了，并且`HEAD`指针指向当前的`dev`分支，其版本和`master`最新版本一样为第二个版本,我们可以用图来表示

<MyImg src="/img/git-4-3.png" alt="git分支"/>


## 查看所有分支

我们也可以使用`git branch` 来查看所有分支。

```js
git branch

// 输出结果
* dev
  master
```

结果中带 `*` 号的代表当前所在的分支。我们可以在`dev`分支上创建一个`dev.js` 文件，并将它提交，然后我们查看版本提交记录

```js
git add .

git commit -m 'dev的第三个版本'

git log --pretty=oneline


// 输出结果
40703dbf308315022cef120c28a90d130ad90a05 (HEAD -> dev) dev的第三个版本
fdc0fb441809ae6aca632e6dbe9f04f9640e21d2 (master) 第二个版本
72a53e7a41f456b3e22645618ebfff1fe3dce243 第一个版本

```

我们可以看到这时`dev`分支就会有三个版本，而此时`master`分支还停留在第二个版本，他们的关系如图：

<MyImg src="/img/git-4-4.png" alt="git分支"/>



## 切换分支

我们可以使用`git checkout 分支名`将我们的项目切换到`master`分支，其实就是将`HEAD` 指针指向`master`分支。

```js
git checkout master
```
此时我们可以看到，我么目录中创建的`dev.js` 消失了，因为这个文件是在我们的`dev`分支上，`master`分支上是不存在的。并且我们可以执行`git branch` 来查看当前所处分支。

```js
  dev
* master
```

可以看到，`*`号在`master`分支上，说明我们当前分支是`master`分支，并且他们的关系图如下：

<MyImg src="/img/git-4-5.png" alt="git分支"/>


## 合并分支

现在我们在`master` 分支上，并且master分支比`dev` 分支少一个版本，我们可以将`dev` 分支合并到`master` 分支上。这里使用`git merge 要合并进来的分支名` 命令，这个命令默认是使用的`Fast-forward` 快速合并模式

``` js
git merge dev


// 输出结果
Updating fdc0fb4..40703db
Fast-forward
 dev.js | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 dev.js
```
执行完，我们可以看到我们文件夹中出现了`dev.js` 文件，这时我们`master`版本和`dev`分支的最新版本就一样了，此时我们`HEAD`指针就指向了`master`分支的第三个版本上边


<MyImg src="/img/git-4-6.png" alt="git分支"/>

另外我们可以看到我们合并后输出的结果中使用的`Fast-forwar` 模式合并，此合并方式不会创造一个新的`commitID`(或commit节点)，而是使用`dev`的`commit`节点。也就如图所示，将`master`分支指针直接移动到了`dev`分支所在的位置。默认情况下，`git merge`采用`fast-forward`模式。我们来看一下的提交版本记录:

```js
git log --pretty=oneline


// 结果
40703dbf308315022cef120c28a90d130ad90a05 (HEAD -> dev, master) dev的第三个版本
fdc0fb441809ae6aca632e6dbe9f04f9640e21d2 第二个版本
72a53e7a41f456b3e22645618ebfff1fe3dce243 第一个版本
```
我们可以发现合并后的提交版本记录的信息和上面我们为合并时输出的提交版本记录的信息是一模一样的。那我们有没有办法合并分支时不使用`Fast-forwar` 模式，当然有，我么在合并分支时可以添加`--no-ff` 参数这里的`ff`就是`Fast-forwar` 模式的缩写，并且我们还可以添加`master`的提交备注, 命令就是这样`git merge -m '备注' --no-ff 分支名`

```js
// 首先我们将master分支回退到第二个版本
git reset --hard HEAD^

// 不使用`Fast-forwar` 模式合并dev到master分支
git merge -m 'master 的第三个版本' --no-ff dev


// 我们来查看一下版本记录

git log --pretty=oneline
// 输出结果
3363f4dcf86b311f7843f5c7191a202b8e17dc5f (HEAD -> master) master 的第三个版本
40703dbf308315022cef120c28a90d130ad90a05 (dev) dev的第三个版本
fdc0fb441809ae6aca632e6dbe9f04f9640e21d2 第二个版本
72a53e7a41f456b3e22645618ebfff1fe3dce243 第一个版本
```

我们可以看到这次提交记录结果多出了一条，这条记录就是`master`分支合并时的提交记录，并且还有自己的备注，也就是说在禁用`Fast-forwar` 模式合并后，`master`分支就不是单纯的将指针移动到`dev`分支了，**而是`git`会讲两个分支中不同的修改合并起来，在提交一次（commit一次），我们可以看到不使用`Fast-forwar` 模式时会多出一个commitId** 这时`dev`分支就合并到了`master`分支上。这时我们的分支版本关系图是这样的

<MyImg src="/img/git-4-13.png" alt="git分支"/>

也就会出现四次提交记录，最后一次是当我们merge时git给我们执行的commit。上面我们所提到的在我们合并代码时都是没有冲突的，接下来我们来看看我们合并代码时出现了冲突该如何解决

## 解决冲突


### 1. git merge 解决冲突

在实际开发项目时，我们多个人使用git，在项目进行合并时有时并不会很一帆风顺成功，有时会出现代码冲突。

我们这里还使用我们上一个项目的例子，比如我们有一个`project`项目的git仓库，它有一个`master`分支,并且在`master`分支上已经有两个版本，第一个版本中我们创建了`test.js`文件，第二个版本中我们创建了`two.js`文件，我们这master分支上使用`git checkout -b dev`创建出一个新的`dev`分支，这时我们的分支结构如下：


<MyImg src="/img/git-4-10.png" alt="git版本控制"/>

我们可以看到`master` 分支和`dev`分支上的版本是一样的，并且`HEAD`指针指向`dev`分支的第二个版本，现在我们打开`two.js`文件，在`two.js`文件第一行写一个段`console.log('我是dev分支上的two.js')`，然后我们将我们的修改提交，现在我们的分支结构如下：


<MyImg src="/img/git-4-11.png" alt="git版本控制"/>



我们可以看到`master` 分支处于第二个版本，而`dev`分支处于第三个版本了。我们可以使用 `git log` 查看版本信息, 接下来我们将`HEAD`指针指向`master`分支

```js
git checkout master
```

然后我们打开master分支上的`two.js`文件，并在第一行写入`console.log('我是master分支上的two.js')`，然后我们将我们修改再次提交，这次我们分支的结构如下:

<MyImg src="/img/git-4-12.png" alt="git版本控制"/>


我们可以看到，`master`分支和`dev`分支都存在各自的第三个版本，并且它们的第三个版本修改内容是不一样的。这时候我们使用`git merge`将dev分支合并到master分支上时，`git`旧无法使用`Fast-forwar` 模式来合并我们的代码了，因为我们的代码就会出现冲突。这时 **git会将两个分支代码不同的地方取出放到当前冲突的文件中，让我们进行手动修改，我们修改完成提交后，然后把master指针指向这个新的commit**， 我们来执行`git merge dev`，我们可以看到我们目录中`two.js` 文件有一个黄色感叹号。

<MyImg src="/img/git-4-13.jpg" alt="git版本控制"/>

这表示该文件内容出现了冲突，我么打开该文件可以看到：

```js
console.log('我是dev分支上的two.js');
```


我们可以看到两个分支上的修改都给我们展示出来了，从`<<<<<<< HEAD` 到 `=======` 的代码是我们当前分支的修改的代码，而从`=======` 到`>>>>>>> dev` 的代码是我们要合并的代码，这时git不知道，到底是保留master分支上的修改，还是保留dev分支上的修改，所以我们需要手动去解决这些冲突的代码，到哪那些使我们想要保留的。如果现在我们保留当前的修改，则我们将`dev`分支上的修改删掉，把`<<<<<<< HEAD` 、 `=======` 和`>>>>>>> dev` 也删掉。然后我们在重新提交

```js
git add .

git commit -m 'merge 修改冲突'
```

现在我们就解决了我们代码之间的冲突了，这时我们的分支关系如下：

<MyImg src="/img/git-4-14.png" alt="git版本控制"/>

这时我们知道了 **git是使用非`Fast-forwar` 模式** 来进行冲突代码的合并的。 ，并且我们使用`git log --pretty=oneline` 来查看提交记录

```js
897254deeaef5485e2c6296a2fecd2fd53df02f3 (HEAD -> master) merge 修改冲突
1df8f658cd5b997fd5a678288918f336ac92f9ad master第三个版本
a41e42b2d60479d45266cf98c41ad352af1c6c42 (dev) dev 第三个版本
844056e1f2f585cd4b0c86277acea39bcf8a0ecf 第二个版本
2e57178f27461d47617aaf1cc165d7ba8e94b942 第一个版本
```

我们可以发现合并后的`master`分支含有`dev` 分支的提交记录以及我们最终解决冲突后的一次提交记录。我们从上面的图中可以看到，我们使用`git merge` 将`dev`分支合并到`master`分支后，我们的`master` 分支上还是会有两条时间轴线，我们也可以使用`git log --graph --pretty=oneline --abbrev-commit` 来查看版本记录的图形界面，我们可以很清晰的看到两条时间轴线。

```js
*   3265690 (HEAD -> master) merge 修改冲突
|\
| * 0841970 (dev) dev第三个版本
* | fc5af12 master的第三个版版本
|/
* 1807910 第二个版本
* 02f24ee 第一个版本
```

我们能不能将`master`分支上的版本记录变成一条时间轴线呢，答案是可行的，下面我们来实现这个


### 2. git rebase 解决冲突

使用`git rebase`命令网上人们翻译成 **变基**，现在我们使用这种方法来来合并我们的代码，并解决项目冲突，我们将我们的项目中`master`分支回退到合并前，怎么回退，自己看上边版本回退，回退完成后我们的分支是这种状态

<MyImg src="/img/git-4-12.png" alt="git版本控制"/>

使用`git log --graph --pretty=oneline --abbrev-commit` 查看`master`分支版本记录是这样的

```js
* fc5af12 (HEAD -> master) master的第三个版版本
* 1807910 第二个版本
* 02f24ee 第一个版本
```

现在我们使用`git rebase`来合并分支

```js
git rebase
```
结果会输出的一些信息我们不管，我们可以看到`two.js`文件又出现感叹号了，说明这个文件有冲突了，该文件中内容变成了这样

```js
console.log('我是master分支上的two.js')
```
我们可以和上面使用`git merge`合并时的冲突对比发现，这次`<<<<<<< HEAD` 到 `=======` 内容是合并进来的分支内容，而 `=======` 到`>>>>>>>` 之间是当前`master`分支的内容正好与`git merge`合并时相反了。这是因为使用`git rebase` 进行合并时，先将`dev`分支的内容合并到这两个分支相同版本的后边，然后将当前分支在进行合并，这时出现冲突，将出现冲突的代码全部展示到`master`分支中的冲突文件中，让我们来进行手动修改，修改完成后我们在进行提交。以这种合并方式进行合并的`master`分支版本如下：


<MyImg src="/img/git-4-15.png" alt="git版本控制"/>

这是`master` 分支上就只存在一个记录版本的时间的轴线，我们使用`git log --graph --pretty=oneline --abbrev-commit` 也可以看到

```js
git log --graph --pretty=oneline --abbrev-commit


// 结果
* 1e68002 (HEAD) merge 合并分支
* 0841970 (dev) dev第三个版本
* 1807910 第二个版本
* 02f24ee 第一个版本
```
我们可以看到`master` 分支上就只存在一个记录版本的时间的轴线。



::: tip 出现冲突的几种情况
1. 不同分支修改了同一文件，并且都做了提交，这时合并分支时会出现冲突。
2. 同一分支，不同开发人员在各自的本地修改了相同文件时，当其中一个人员上传到远程仓库后，另一个成员拉取时一般会出现代码冲突。
:::

## 删除分支

我们可以使用命令`git branch -D 分支名` 来删除我们自定的分支，

```js
git branch -D dev
```

::: warning 注意
删除某个分支前，当前`HEAD`指针不要再该分支上，要切换到其它分支才可以删除。
:::

## 远程分支操作

如果我们本地新建了一个`dev` 分支怎么将该分支推送到远程呢，并且如果远程有一个`dev` 分支我们又该如何将该分支拉去下来呢。首先我们在以上边的的项目为例，我们要在远程有一个仓库

### 1. 将本地分支推送到远程

```js
// 将dev分支推送到远程
git push origin dev
```
这时我们远程仓库就会出现一个`dev` 分支

<MyImg src="/img/git-4-9.png" alt="git分支"/>

这时我们只是将本地`dev` 分支推送到了远程，还用有将本地`dev` 分支和远程分支关联起来，如果这时我们修改dev分支上的文件，提交后，在执行`git push` 就会提示我们 `git push --set-upstream origin dev`, 我们可以执行该命令将本地的`dev` 分支和远程`dev`分支关联起来

```js
git push --set-upstream origin dev
或
git push -u origin dev
```

其实当前我们执行完上面其中一个代码时，就是在我们`.git` 目录下的`config` 文件下添加了一个远程分支记录

```
[remote "origin"]
	url = git@github.com:webxiaoma/project.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[branch "dev"]
	remote = origin
	merge = refs/heads/dev
```

### 2. 将远程分支下载到本地

将远程分支下载我们本地我们可以将我们本地仓库删除来重新操作。

```js
$ git clone git@github.com:webxiaoma/project.git
```
克隆下来的项目，默认只会克隆`master`分支，我们需要在将`dev` 分支克隆下来，使用命令`git checout -b 本地分支名 origin/远程分支名`

```js
git chekcout -b dev origin/dev
```
这时我们就创建了一个和远程关联的本地的`dev`分支，并且`.git` 目录下的`config` 文件中也生成了`dev`的分支记录，我们可以使用`git branch` 来查看分支。



### 3. 克隆远程的指定分支

如果我们想克隆指定的分支我们可以使用这个命令`git clone -b 分支名 仓库地址`

```js
git cloen -b dev  git@github.com:webxiaoma/project.git
```
这时克隆的只是我们远程仓库的`dev`分支。

### 4. 查看远程分支

我们可以执行命令`git branch -r` 来查看远程分支

```js
git branch -r
```

### 5. 删除远程分支

如果我们想删除远程的某个分支我们可以使用`git push origin --delete 分支名` 或 `git push origin :分支名称`

```js
git push origin --delete dev
或
git push origin :dev
```
这时我们在看远程仓库，`dev`分支就已经被删除了

分支操作目前先讲的这里。