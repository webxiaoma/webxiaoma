---
sidebarDepth: 2
meta:
  - name: keywords
    content: git配置文件, git, git配置，自定义git命令，git config
  - name: description
    content: 本文主要讲解git的配置文件，了解配置文件的作用以及如何自定义git常用命令，来方便我们使用git管理项目
---

# Git的相关配置


## 配置文件

`git` 的配置文件一般有三类，第一类是系统级的配置文件，第二类是全局的配置文件，第三类是局部针对单个仓库的配置文件

- 系统级配置文件`gitconfig`
   
   在我们git安装目录下的`gitconfig`文件中，如果没有可以搜索该目录下的`gitconfig`文件

- 全局配置文件`.gitconfig`

  在`window`下一般位于`C:\Users\Administrator\.gitconfig`，如果没有可以在`Users`下搜索一下; 在 linux 中一般位于`/root/.gitconfig` 中

- 局部配置文件`config`

   我们每个仓库中都有`.git`隐藏目录，这时版本库。局部配置文件`config`就在我们版本库里。

::: tip 小提示
配置文件是有优先级的， 系统配置文件优先级 > 局部配置文件优先级 > 全局配置文件优先级
:::

## 配置操作

git中使用 `git config` 命令来对git配置进行一系列操作，比如我们查看git的所有配置可以执行`git config -l`，当然我们也可以打开响应的配置文件来进行查看。

- 如果我们想修改系统级别的配置可以使用

```js
git config --system 修改配置项
```

比如我们在系统配置中添加用户

```js
git config --system user.name 'system'
```

- 如果我们想修改全局的配置可以使用

```js
git config --global 修改配置项
```
比如我们在系统配置中添加用户

```js
git config --global user.name 'global'
```

- 如果我们想修改局部的配置可以使用

```js
git config  修改配置项
```
比如我们在系统配置中添加用户

```js
git config  user.name 'system'
```

除了使用命令来修改相应的配置外，我们还以直接修改相对应的配置文件。我们既然可以设置`git`响应配置，我们也可以删除`git`的响应配置

```js
// 删除系统配置
git config --system --unset user.name

// 删除全局配置
git config --global --unset user.name

// 删除局部配置
git config  --unset user.name
```

## 配置Git命令别名 

git的命令非常的多，光记这些命令就够我们头疼的了，为了提高上手速率，快速使用git的命令，git提供了配置命令别名的方法。我们可以将git的任何命令配置成我们容易记忆的，比如我们将`git log --graph --pretty=oneline --abbrev-commit`命令配置成`git lg`后我们就可以执行`git lg`来达到同样的效果。

配置git别名我们其实就是操作配置文件中的 `alias`字段，我们可以尝试通过命令行来配置，我们将`git log --graph --pretty=oneline --abbrev-commit` 配置成`git lg`，这里是局部配置

```js
git config alias.lg 'git log --graph --pretty=oneline --abbrev-commit'
```
执行完我们可以看看版本库中的`config`文件，我们可以发现会多出下面内容（也可以通过 `git config --list` 命令查看）

```js
[alias]
	lg = log --graph --pretty=oneline --abbrev-commit

```

这时我们的命令已经生效了，我们可以执行`git lg` 命令来以图形形式来查看我们的版本记录了。当然我们也可以配置其他命令的别名

```js
git config alias.c commit
```

**这里有提供一份常用的`git`别名配置,当然你可以根据自己的需求去修改或添加**

```js
cg = config --global
cl = config --list
a = add .
c = commit -m
s = status
d = diff
commitid = rev-parse --short HEAD
lg = git log --graph --pretty=oneline --abbrev-commit
r = reset --hard
m = merge --no-ff
ch = checkout
```
<!-- 
## Git自动提示命令

 -->

## 配置忽略文件

我们在上传东西时，有时候想忽略一些文件，不想该文件被提交或推送到远程仓库，我们可以这样操作

在`git`工作区的根目录下建一个 `.gitignore` 文件,**说明一下，在`window`下面创建该文件会提示必须输入文件名，我们可以在起文件名时，前后都加一个点 `.gitignore.`就可以了,或使用编辑器去创建该文件**

我们可以在该文件下写要忽略的文件

 
忽略chang.txt 文件

```
chang.txt
```

如果忽略所有js文件

```
*.js
```

当然我们可以使用# 号加备注
```
# lose sight of js:
*.js
```

有时候你想添加一个文件，但是该文件被忽略了，我们可以这样操作：
```
git check-ignore -v chang.txt
```

这样`git` 会告诉我们 `.gitignore` 中哪一行设置了该文件的忽略,或者我们可以强制添加到git
```
$ git add -f chang.txt
```

这里有一份`vue-cli`脚手架中`.gitignore`的配置

```
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/test/unit/coverage/
/test/e2e/reports/
selenium-debug.log

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```