---
sidebarDepth: 2
meta:
  - name: keywords
    content: git协同合作, git, git多账户管理，两个git
  - name: description
    content: 本文主要记录在同一台电脑上使用两个git账户来进行不同项目的开发以及协同合作。
---


# Git 多账户管理



## 多账户需求

我们在公司使用`git`来管理我们的项目时会遇到这种情况，我们在我们的电脑上使用的是公司的`git`账户，但有时我们还想在这台电脑上使用我们自己的`git`账户，这时我们就需要解决在同一台电脑上使用两个`git`账户的问题了。

配置多账户之前，我们可以回顾一下[本地关联GitHub](/git/Git的远程操作.html#_3-本地关联github)。其实使用多个git账户主要解决的问题就是让多个git账户都可以和各自的远程仓库关联起来，而本地git仓库和远程仓库通信就必须要双方建立连接，而我们建立连接的正是使用的`SSH key`，当我们有一个git账户连接远程仓库时，我们需要一个`ssh key`;当我们有多个时，我们就需要多个`ssh key`。

## 什么是SSH

[百度百科](https://baike.baidu.com/item/ssh/10407)SSH 为 Secure Shell 的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上的安全协议。SSH 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH最初是UNIX系统上的一个程序，后来又迅速扩展到其他操作平台。SSH在正确使用时可弥补网络中的漏洞。SSH客户端适用于多种平台。几乎所有UNIX平台—包括HP-UX、Linux、AIX、Solaris、Digital UNIX、Irix，以及其他平台，都可运行SSH。


## SSH流程

我们登录有两种方式，一种是账户密码的形式进行登录;另一种就是基于密钥的安全验证。

基于密钥的安全验证,我们必须为自己创建一对密钥，并把自己的公有密钥放在需要访问的服务器上。登录的时候，远程主机会向用户发送一段随机字符串，用户用自己的私钥加密后，再发回来。远程主机用事先储存的公钥进行解密，如果成功，就证明用户是可信的，直接允许登录，不再要求密码。从而避免被 [中间人攻击](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)。


## Git中 Https 和 SSH 的区别

在git中使用https 和使用ssh主要有两点不同

1. 任何人都可以使用`https`的路径去克隆开源项目，而使用`ssh`在克隆项目时需要先配置`SSH key`。

2. 在推送`push`时，https是需要输入用户名和密码的，而`ssh`在push时，如果配置`ssh key` 时没有设置密码，则不需要密码，如果设置了，就需要密码。


## Git中添加多账号

### **1. 生成新秘钥**

如果我们之前我们电脑上已经存在了`ssh`, 我们找到该文件，会发现里面有`id_rsa` 和 `id_rsa.pub` 两个文件，其中`id_rsa`为我们的私钥，`id_rsa.pub`为我们的公钥。因为我们要使用多个git账户来连接不同的远程仓库，所以我们需要多个`ssh key`。现在我们在生成另一个`ssh key`。

```js
ssh-keygen -t rsa -C '输入你的另一个邮箱'
```
在上面输入你的邮箱，这个邮箱是你接下来在`git`中使用的邮箱,输入完成后按回车，我们会看到：

```js
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/ljh/.ssh/id_rsa):
```
这时是让我们输入公钥和私钥的名称，如果你不输入就会生成`id_rsa` 和 `id_rsa.pub` 两默认名为`id_rsa`的两个文件，这里我们输入`test_rsa`，回车之后会让我们输入`ssh` 密码，我们这里不输入，回车后还会再次让我们确认密码，我们直接回车。这时你可能想起你第一次配置`ssh key`时，直接按了三次回车键。现在我们可以去生成的ssh目录查看一下，会多出`test_rsa`私钥文件和`test_rsa.pub`公钥文件。我们将`test_rsa.pub`公钥文件放到我们自己的远程仓库中[查看放置方法](/git/Git的远程操作.html#_3-本地关联github)

### **2. 让ssh识别新生成的私钥**

放置好后我们需要让`ssh`识别新生成的私钥

```js
// 启动 ssh-agent.exe 进程
eval $(ssh-agent -s)

// 添加新ssh keys
ssh-add ~/.ssh/ test_rsa
```
::: warning 注意

一定要注意的是，这里我们虽然让`ssh`识别了新生成的私钥，但这种做法只是在当前`git bash`窗口中有效，如果我们关闭后，必须在指向以上代码才可以否则我们依然不能推送我们的代码到远程仓库
:::

针对以上问题我们的解决版本是：我们将以上命令放入到git根目录下的`bash.bashrc` 文件中的末尾。该文件在git打开时会自动执行我们的命令, **另外还有把我们原来的私钥也放进去，不然我们原来的仓库就会无法提交到远程仓库中**。

```js
// 省略代码

# Fixup git-bash in non login env
shopt -q login_shell || . /etc/profile.d/git-prompt.sh

# Fixup git-bash in non login env
shopt -q login_shell || . /etc/profile.d/git-prompt.sh


#启动 ssh-agent.exe 进程
eval $(ssh-agent -s)

#添加新私钥
ssh-add ~/.ssh/test_rsa
#添加原来的私钥
ssh-add ~/.ssh/id_rsa 
```

放置好后，当我们重新打开`git bash`时,会自动执行这两个代码，并输出 (pid 和我的不一定一样)

```js
Agent pid 40396
Identity added: /c/Users/ljh/.ssh/test_rsa (/c/Users/ljh/.ssh/test_rsa)
```


### **3. 配置ssh的config文件**

在`.ssh`目录下配置多个账户的 `config` 文件，如果没有 `config` 文件自己新建一个。

```js
# 配置github.com
Host giathub.com                 
  HostName github.com
  IdentityFile C:\\Users\\ljh\\.ssh\\id_rsa
  PreferredAuthentications publickey
  User webxiaoma

# 配置git.oschina.net 
Host git.test.net  
  HostName git.oschina.net
  IdentityFile C:\\Users\\ljh\\.ssh\\test_rsa
  PreferredAuthentications publickey
  User webtest
```


::: tip 说明

每个账号需要单独配置一个Host，每个Host要取一个别名

1. `Host` 指自定义的host简称,名字可以自己起， 连接就可以使用 ssh host名，比如上边`ssh github.com`。需要注意的是`Host`下边的书写需要有 **缩进**。
2. `HostName` 主机名可以ip或者是域名
3. `IdentityFile` 私钥文件路径（如：~/.ssh/id_rsa）
4. `PreferredAuthentications`  配置登录时用什么权限认证（可设为 publickey, password publickey, keyboard-interactive等）
5. `User` 登录用户名
:::

### **4. 添加局部git用户**

现在我们就可以使用将我们的远程仓库下载下来了，下载下来之后，我们需要在我们的仓库中局部配置我们的用户名和邮箱

```js
git config user.name '用户名'
git config user.email '邮箱'
```

配置完成后我们就可以正常的使用了，如果我们在克隆一个仓库，还是要进行局部配置的。我们可以把常用的git账户设置成全局配置。


