module.exports = {
    title:'马新想个人网站（webxiaoma）',
    head: [
        ["link", { rel: "icon", href: `/img/icon.ico` }],
    ], //被注入页面 HTML <head> 额外的标签
    host: "localhost", //访问路径
    port: "5555", //端口
    // base:'/', // 部署站点的基础路径
    dest: "./docs", //输出目录
    serviceWorker: true, //缓存那些已访问过的页面的内容
    themeConfig: {  // 导航
        logo:'/img/manong.jpg',
        searchMaxSuggestions: 15, // 搜索设置数量
        nav: [  // 导航栏 使用了element 导航
            { text: '首页', link: '/' },
            { text: '前端', items: [
                {text:'JavaScript', items:[
                    {text:"JavaScript",link:'/javascript/js-bom.html'},
                    {text:"ECMAScript6",link:'/javascript/babel.html'},
                ]},
                {text:'设计模式', link:'/design-mode/'},
                {text:'移动端', items:[
                    {text:"H5页面开发",link:'/phone/'},
                    // {text:"微信小程序",link:'/phone/'},
                    {text:"PWA应用",link:'/phone/pwa.html'},
                ]},
                {text:'前端工具', items:[
                    {text:"Webpack打包",link:'/webpack/'},
                    {text:"Git版本工具",link:'/git/'},
                    {text:"ESLint代码检测",link:'/eslint/'},
                    // {text:"编辑器的使用",link:'/tool/vscode.html'},
                    // {text:"调试工具",link:'/tool/chorme.html'},
                ]},
                {text:'Vue', link:'/vue/'},
                {text:'React', link:'/react/'},
                {text:'前端插件', items:[
                    {text:"日历插件",link:'/web-plugin/calendar.html'},
                ]},
            ]},
            { text: '后端', items: [
                {text:'Linux', link:'/linux/'},
                {text:'NodeJS', link:'/node/'},
                {text:'Java', link:'https://webxiaoma.github.io/java-demos/docs/blogs/', blank: true},
                {text:'数据库', items:[
                    {text: "MongoDB", link: '/database/MongoDB.html' },
                    { text: "MySQL", link: 'https://webxiaoma.github.io/tools-docs/docs/blogs/database/mysql-install.html', blank: true},
                ]},
                {text:'网络知识', link:'/network/'},
            ]},
            { text: '工具', link: 'https://webxiaoma.github.io/tools-docs/docs/blogs/index.html', blank: true },
            { text: '微信', link: 'https://webwangjia.github.io/wechat-demo/docs/blogs/', blank: true },
            { text: 'GitHub', link: 'https://github.com/webxiaoma', blank:true}
        ],
        sidebar: {  // 侧边栏
            '/javascript/':[
                '',
                {
                    title: 'JS常见知识',
                    collapsable: true, // 是否可折叠
                    children: [
                        'js-bom',
                        'js-dom',
                        'js-event',
                        'js-object',
                        'function',
                        'prototype-proto',
                        'execution-contexts',
                        'variable-object',
                        'scope-chain',
                        'this-1',
                        'this',
                        'closure',
                        'trash-recycling',
                        'data-type',
                        'new',
                    ]
               },{
                title: 'ES6篇',
                collapsable: true,
                children: [
                    'babel',
                    'es6-let-const',
                    'es6-promise'
                ]
               },{
                    title: '音频视频处理',
                    collapsable: true,
                    children: [
                       'audio',
                       'video'
                    ] 
                },{
                    title: '文件与二进制处理',
                    collapsable: true,
                    children: [
                       'ArrayBuffer',
                       'Blob',
                       'FileReader-FormData',
                       'base64',
                    ] 
                },{
                    title: '离线-缓存-存储',
                    collapsable: true,
                    children: [
                       'cache-api',
                       'web-worker',
                       'service-worker',
                    //    'indexedDB'
                    ] 
                }
            ],
            '/design-mode/':[
                 '',
                 '工厂模式'
            ],
           '/webpack/':[
               '',
               {
                title: 'webpack基础篇',
                collapsable: true, // 是否可折叠
                children: [
                    '基础篇',
                ]
               },{
                    title: 'webpack配置篇',
                    collapsable: true, // 是否可折叠
                    children: [
                        'mode',
                        'entry',
                        'output',
                        'module',
                        'plugins',
                        'resolve',
                        'devtool'
                    ]
               },{
                    title: 'webpack练习篇',
                    collapsable: true, // 是否可折叠
                    children: [
                        '处理es6',
                        '处理css',
                        '处理静态资源',
                        '处理目录文件',
                        'devserver',
                        '使用vue',
                        '使用react',
                        '懒加载',
                        '提取公共模块',
                        'Dllplugin'
                    ]
               },{
                    title: 'webpack进阶篇',
                    collapsable: true, // 是否可折叠
                    children: [
                        '编译plugins',
                        '编写loader'
                    ]
               }
            ],
            '/git/':[
                '',
                'Git的基本操作',
                'Git的远程操作',
                'Git的分支管理',
                'Git标签操作',
                'Git团队协作',
                'Git多账户管理',
                'Git的相关配置',
                'Git的子模块'
            ],
            'eslint':[
                '',
                'eslint'
            ],
            '/tool/':[
                 {
                    title: '编辑器使用',
                    collapsable: true, // 是否可折叠
                    children: [
                      'vscode',
                    ]
                },{
                    title: '调试工具',
                    collapsable: true, // 是否可折叠
                    children: [
                        'chorme'
                    ]
                },
            ],
            '/phone/':[
                '',
                {
                    title: 'H5页面开发',
                    collapsable: true, // 是否可折叠
                    children: [
                      '移动端的一些概念',
                      '移动端的适配',
                      '移动端的事件处理',
                      '移动端其它常见问题'
                    ]
                },{
                    title: '微信小程序',
                    collapsable: true, // 是否可折叠
                    children: [
                    ]
                },{
                    title: 'PWA 应用',
                    collapsable: true, // 是否可折叠
                    children: [
                        'pwa'
                    ]
                }
               
            ],
            
            '/vue/':[
                '',
                {
                    title: 'vue基础',
                    collapsable: true, // 是否可折叠
                    children: [
                      'vue-cli-3',
                      'vue-problem',
                      'vue-plugins'
                    ]
                },
                {
                    title: 'vue进阶',
                    collapsable: true, // 是否可折叠
                    children: [
                       'vue-reactive'
                    ]
                }
            ],
            '/react/':[
                '',
                {
                    title: 'React技术栈',
                    collapsable: true, // 是否可折叠
                    children: [
                        'react-router',
                        'redux'
                    ]
                }
            ],
            '/web-plugin/':[
                {
                    title: 'JavaScript版本',
                    collapsable: true, // 是否可折叠
                    children: [
                        "calendar"
                    ]
                }
            ],
            '/node/':[
                '',
                {
                    title: 'node基础',
                    collapsable: true, // 是否可折叠
                    children: [
                        'NodeJS的安装',
                        'nodejs常用API',
                        'nodejs-server'
                    ]
                },{
                    title: '常用工具',
                    collapsable: true, // 是否可折叠
                    children: [
                      'npm.md',
                    ]
                },
            ],
            '/java/':[
                '',
                {
                    title: 'Java工具的使用',
                    collapsable: true, // 是否可折叠
                    children: [
                       'vscode-java'
                    ]
                },
                {
                    title: 'Java基础',
                    collapsable: true, // 是否可折叠
                    children: [
                       'java-start'
                    ]
                }
            ],
            '/database/':[
                '',
                {
                    title: 'MongoDB数据库',
                    collapsable: true, // 是否可折叠
                    children: [
                        'mongodb-init',
                        'MongoDB'
                    ]
                },
            ],
            '/linux/':[
                '',
                {
                    title: 'Linux基础',
                    collapsable: true, // 是否可折叠
                    children: [
                        'linux-init'
                    ]
                }
            ],
            '/network/':[
                '',
                {
                    title: '互联网知识',
                    collapsable: true, // 是否可折叠
                    children: [
                        '编码处理'
                    ]
                },
                {
                    title: '计算机',
                    collapsable: true, // 是否可折叠
                    children: [
                        '交换机和路由区别'
                    ]
                }
                
            ],
            '/knowledge/':[
                {
                    title: '常用网站',
                    collapsable: true, // 是否可折叠
                    children: [
                      '',
                    ]
                }, {
                    title: '常用见面试题',
                    collapsable: true, // 是否可折叠
                    children: [
                    ] 
                },
            ],
        },
        sidebarDepth:2,// 侧边栏最大层级 最大只能为2
       // displayAllHeaders:true,  // 侧边栏所有链接全展开
       lastUpdated: '最近更新时间', // 最后更新时间
       serviceWorker: {
            updatePopup: { //刷新内容的弹窗
                message: "这篇文章已经更新", 
                buttonText: "立即刷新" 
            }
        },
        
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'webxiaoma/webxiaoma',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'dev',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '文章有问题，欢迎提出！'
       
    },
};




