module.exports = {
    title: "马新想个人网站（webxiaoma）", //标题
    description: "马新想的个人网站，专注书写博客，文档分享，网站地址为webxiaoma.com", //描述
    head: [
        ["link", { rel: "icon", href: `./public/img/icon.ico` }],
        ["meta",{rel:'keywords',content:"马新想，webxiaoma, 马新想个人网站"}]
    ], //被注入页面 HTML <head> 额外的标签
    host: "192.168.10.162", //访问路径
    port: "5555", //端口
    // base:'/', // 部署站点的基础路径
    dest: "./blogs", //输出目录
    serviceWorker: true, //缓存那些已访问过的页面的内容
    themeConfig: {  // 导航
        logo:'/img/manong.jpg',
        nav: [  // 导航栏 使用了element 导航
            { text: '首页', link: '/'},
            { text: '博客', items: [
                {text:'构建工具', items:[
                    {text:"webpack打包",link:'/webpack/'},
                ]},
                // {text:'JavaScript', link:'/javascript/'},
                // {text:'Vue', link:'/vue/'},
            ]},
            { text: 'GitHub', link: 'https://github.com/webxiaoma', blank:true},
            { text: '旧网站', link: 'http://webxiaoma.coding.me/webxiaoma', blank:true},
        ],
        sidebar: {  // 侧边栏
           '/webpack/':[''],
        },

    }
};




