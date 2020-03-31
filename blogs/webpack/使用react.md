---
sidebarDepth: 1
meta:
  - name: keywords
    content: webpack, React, webpack4 编译react，react使用
  - name: description
    content: 本文主要讲述使用webpack4中的Dllplugin插件实现动态链接库，来提高webpack的打包编译速度。
---

# 使用 React

[GitHub 仓库练习](https://github.com/webxiaoma/webpack-demos/tree/master/webpack4/react)

---

使用`webpack`编译[React](https://react.docschina.org/docs/hello-world.html)十分的简单，`Babel`中安装相应的`Presets`就可以编译`react`语法。

## 前期准备

首先我们需要在[ES6环境](/webpack/处理es6.html)中去编译`react`，其次我们需要安装以下模块：

```js
// react基础模块
npm i -S react react-dom

// babel转换react所需presets
npm i -D babel-preset-react
```

安装好后我们需要在`.babelrc.`文件中加入`react presets`

```js
{
    "presets": [
        "env",
        "react" 
    ],
    "plugins":[
        "transform-runtime"
    ]
}
```

## 书写React

现在我们就可以使用`react`了，我们可以在入口文件中写一些`react`代码:

```js
import React,{Component} from 'react'
import {render} from 'react-dom'

class Home extends Component{
    constructor(props){
       super()
       this.state = {
           msg:"你好"
       }
    }
    changeTitle(){
        this.setState({
            msg:'内容改变了'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <p><button onClick={()=>this.changeTitle()}>点击变化</button></p>
            </div>
        )
    }
}

render(<Home/>,document.getElementById('root'))
```

现在运行我们代码就可以编译`react`了。