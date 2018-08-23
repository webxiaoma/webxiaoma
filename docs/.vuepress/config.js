module.exports = {
    title: "马新想个人网站（webxiaoma）", //标题
    description: "马新想的个人网站，专注书写博客，文档分享，网站地址为webxiaoma.com", //描述
    head: [
        ["link", { rel: "icon", href: `/img/icon.ico` }],
        ["meta",{rel:'keywords',content:"马新想，webxiaoma, 马新想个人网站"}]
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
               '',
               'JS-DOM操作',
               'JS-BOM操作',
               'JS-事件',
               'js面向对象',
            ],
           '/webpack/':[
               '',
               'webpack配置篇'
            ],
            '/git/':[
                '',
                'Git的基本操作',
                'Git的远程操作',
                'Git的版本控制',
                //'Git的分支管理',

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
      }

    },
};





