module.exports = {
    title:'马新想个人网站',
    head: [
        ["link", { rel: "icon", href: `/img/icon.ico` }],
    ], //被注入页面 HTML <head> 额外的标签
    host: "localhost", //访问路径
    port: "5555", //端口
    // base:'/', // 部署站点的基础路径
    dest: "./blogs", //输出目录
    serviceWorker: true, //缓存那些已访问过的页面的内容
    themeConfig: {  // 导航
        logo:'/img/manong.jpg',
        nav: [  // 导航栏 使用了element 导航
            { text: '首页', link: '/'},
            { text: '博客', items: [
                {text:'JavaScript', link:'/javascript/'},
                {text:'移动端', link:'/phone/'},
                {text:'构建工具', items:[
                    {text:"Webpack打包",link:'/webpack/'},
                    {text:"Git工具",link:'/git/'},
                ]},
                // {text:'Vue', link:'/vue/'},
            ]},
            { text: 'GitHub', link: 'https://github.com/webxiaoma', blank:true},
            { text: '旧网站', link: 'https://webxiaoma.github.io/webxiaoma', blank:true},
        ],
        sidebar: {  // 侧边栏
            '/javascript/':[
                {
                    title: '基础篇',
                    collapsable: false, // 是否可折叠
                    children: [
                        '',
                        'JS-DOM操作',
                        'JS-BOM操作',
                        'JS-事件',
                        'js面向对象',
                    ]
               },
            //    {
            //         title: '进阶篇',
            //         collapsable: false,
            //         children: [
            //         ]
            //    },{
            //         title: 'ES6篇',
            //         collapsable: false,
            //         children: [
            //         ]
            //     },{
            //         title: '总结篇',
            //         collapsable: false,
            //         children: [
            //         ]
            //    }
            ],
           '/webpack/':[
               '',
               'webpack配置篇'
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
            '/phone/':[
                {
                    title: '移动端开发',
                    collapsable: true, // 是否可折叠
                    children: [
                      '',
                      '移动端的适配',
                      '移动端的事件处理',
                    ]
                },{
                    title: '常见CSS问题',
                    collapsable: true, // 是否可折叠
                    children: [
                        'css常见问题'
                    ]
                },{
                    title: '常见JS问题',
                    collapsable: false, // 是否可折叠
                    children: [
                    ]
                }
               
            ]
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

    },
};





