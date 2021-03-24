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
          { text: '前端系列',items: [
            {text:"常见面试题", link:"/web/question/vue"},
          ]},
          { text: 'Java系列', link: '/java/' },
      ],
      sidebar: Sidebar,
      sidebarDepth: 3,// 侧边栏最大层级 最大只能为2
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
  ]
};





