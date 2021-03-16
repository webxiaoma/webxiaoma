module.exports = {
  title:'小马学习网站',
  description:"小马学习网站",
  head: [
      // ["link", { rel: "icon", href: `/img/icon.ico` }],
  ], //被注入页面 HTML <head> 额外的标签
  host: "localhost", //访问路径
  port: "5555", //端口
  // base:'/webxiaoma', // 部署站点的基础路径
  dest: "../blogs", //输出目录
  serviceWorker: true, //缓存那些已访问过的页面的内容
  themeConfig: {  // 导航
      logo:'/img/manong.jpg', 
      searchMaxSuggestions: 15, // 搜索设置数量
      nav: [  //
          { text: '首页', link: '/' },
          { text: '导航', link: '/nav/' },
      ],
      sidebar: "auto",
      sidebarDepth:2,// 侧边栏最大层级 最大只能为2
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
};





