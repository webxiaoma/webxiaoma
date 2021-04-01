const Sidebar = require("./sildbar");
const baseUrl = "/webxiaoma/";
module.exports = {
  title:'小马学习网站',
  description:"小马学习网站",
  head: [
      ["link", { rel: "icon", href: `${baseUrl}img/manong.jpg` }],
  ], //被注入页面 HTML <head> 额外的标签
  host: "localhost", //访问路径
  port: "5555", //端口
  base:baseUrl, // 部署站点的基础路径
  dest: "./docs", //输出目录
  serviceWorker: true, //缓存那些已访问过的页面的内容
  themeConfig: {  // 导航
      logo:'/img/manong.jpg', 
      searchMaxSuggestions: 15, // 搜索设置数量
      nav: [  //
          { text: '首页', link: '/' },
          { text: '导航', items:[
              {text:"常用站点", link:"/nav/nav"},
              {text:"前端站点", link:"/nav/web"},
              {text:"后端站点", link:"/nav/afterEnd"},
          ]},
          { 
            text: '前端系列',
            items: [
              {text:"CSS+HTML系列", items:[
                {text:"CSS格式化上下文", link:"/web/csshtml/css-formatContent"},
                {text:"CSS的BFC", link:"/web/csshtml/css-bfc"},
              ]},
              {text:"JS系列", items:[
                {text:"JS-原型与原型链", link:"/web/js/js-prototype"},
                {text:"JS-执行上下文", link:"/web/js/js-context"},
              ]},
              {text:"常见面试题", items:[
                {text:"CSS面试题", link:"/web/question/css"},
              ]},
            ]
          },
          // { text: 'Java系列', link: '/java/' },
      ],
      sidebar: Sidebar,
      sidebarDepth: false,// 侧边栏最大层级 最大只能为2
     // displayAllHeaders:true,  // 侧边栏所有链接全展开
      lastUpdated: '最近更新时间', // 最后更新时间
      serviceWorker: {
          updatePopup: { //刷新内容的弹窗
              message: "这篇文章已经更新", 
              buttonText: "立即刷新" 
          }
      },
      smoothScroll: true
  },
  extraWatchFiles: [ // 指定额外的需要被监听的文件
    '.vuepress/config.js', // 使用相对路径
  ],

  /**
   * @markdown 配置
   */
  markdown: {
    extractHeaders: [ 'h2', 'h3' ]
  },

  /**
   * @插件安装
   */
  plugins: [
    '@vuepress/back-to-top', // 
    ['vuepress-plugin-code-copy', {
      selector: "pre[class*='language-']",
      backgroundColor:"#3eaf7c",
      successText: "复制成功"
      }], // 代码块复制
  ]
};





