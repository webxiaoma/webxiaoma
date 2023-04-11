const Sidebar = require("./sildbar");
const baseUrl = "/webxiaoma/";

module.exports = {
  title:'小马过河',
  description:"小马过河",
  head: [
      ["link", { rel: "icon", href: `${baseUrl}/img/manong.jpg` }],
      ["meta", { content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0", name: "viewport" }],
      ["script", {src:"https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"}],

      // 兼容pwa
      ['meta', { name: 'theme-color', content: '#ededed' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ['meta', { name: 'msapplication-TileImage', content: '/img/mxx-144.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/img/mxx-152-152.png' }],

  ], //被注入页面 HTML <head> 额外的标签
  host: "localhost", //访问路径 localhost
  port: "5555", //端口
  base:baseUrl, // 部署站点的基础路径
  dest: "./docs", //输出目录
  serviceWorker: true, //缓存那些已访问过的页面的内容
  themeConfig: {  // 导航
      user:"webxiaoma",
      password:"webxiaoma",
      logo:'/img/manong.jpg', 
      searchMaxSuggestions: 15, // 搜索设置数量
      nav: [  // 这里修改了，增加了isLogin 是否登录
          { text: '首页', link: '/' },
          { text: '导航', items:[
              {text:"常用站点", link:"/nav/nav"},
              {text:"前端站点", link:"/nav/web"},
              {text:"后端站点", link:"/nav/afterEnd"},
          ]},
          { text: 'Chatgpt', items:[
              {text:"常用工具", link:"/chatgpt/tools"},
          ]},
          { 
            text: '前端',
            items: [
              {text:"CSS+HTML系列", items:[
                {text:"CSS格式化上下文", link:"/web/csshtml/css-formatContent"},
                {text:"CSS的BFC", link:"/web/csshtml/css-bfc"},
              ]},
              {text:"JS系列", items:[
                {text:"JS-原型与原型链", link:"/web/js/js-prototype"},
                {text:"JS-执行上下文", link:"/web/js/js-context"},
              ]},
              {text:"Vue2系列", items:[
                {text:"Vue响应式", link:"/web/vue/mvvm"},
              ]},
              {text:"常见面试题", items:[
                {text:"CSS面试题", link:"/web/question/css"},
                {text:"Vue2.x面试题", link:"/web/question/vue"},
              ]},
            ]
          },
          { text: 'Java', items: [
            {text:"基础系列", items:[
              {text:"Java初识", link:"/java/basics/know"},
              {text:"Java数字", link:"/java/basics/number"},
              {text:"Java字符串", link:"/java/basics/string"},
            ]},
            {text:"集合", items:[
              {text:"Collection集合", link:"/java/collection/collection"},
              {text:"List集合", link:"/java/collection/list"},
            ]},
            {text:"IO操作", items:[
              {text:"IO初识", link:"/java/io/"},
            ]},
            {text:"网络编程", items:[
              {text:"IP操作", link:"/java/network/ip"},
            ]},
            {text:"JDBC操作", items:[
              {text:"MySQL操作", link:"/java/jdbc/mysql-connect"},
            ]},
          ]},
          { text: '数据库', items: [
            {text:"MySQL系列", items:[
              {text:"常用语法", link:"/database/mysql/init"},
              {text:"数据类型", link:"/database/mysql/data-type"},
            ]},
          ]},
          { text: '设计模式', items: [
            {text:"观察者模式", link:"/designMode/observer"},
          ]},
          { text: '运维/工具', items: [
            {text:"Maven", items:[
              {text:"初识", link:"/tools/maven/"},
            ]},
            {text:"Tomcat", items:[
              {text:"初识", link:"/tools/tomcat/"},
            ]},
          ]},
          { text: 'English',  items: [
            {text:"英语读音",  items:[
              {text:"音标", link:"/english/pronunciation/phonogram"},
            ]},
            {text:"英语单词",  items:[
              {text:"电话", link:"/english/word/call"},
              {text:"日常生活", link:"/english/word/daily-life"},
              {text:"动物", link:"/english/word/animal"},
            ]},
            {text:"英语语法",items:[
              {text:"句子成分", link:"/english/grammar/sentence"},
            ]},
          ]},
          { text: 'Study',  items: [
            {text:"计算机基础", link:"/study/computers/"},
            {text:"前端知识路线", link:"/study/web/"},
            {text:"Java知识路线", link:"/study/java/"},
            {text:"运维知识", link:"/study/maintenance/linux"},
            {text:"工作效率", link:"/study/standard/web"},
            {text:"金融业务", link:"/study/financial/"},
          ], isLogin:true},
          
          // { text: '算法', items: [
          //   {text:"常见算法", items:[
          //     {text:"冒泡排序", link:"/algorithm/bubble-sort"},
          //   ]},
          // ]},
      ],
      sidebar: Sidebar,
      sidebarDepth: false,// 侧边栏最大层级 最大只能为2
      // displayAllHeaders:true,  // 侧边栏所有链接全展开
      lastUpdated: '最近更新时间', // 最后更新时间 #ededed
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
    ],
    '@vuepress/pwa': { // pwa
      serviceWorker: true,
      updatePopup: { //刷新内容的弹窗
        message: "这篇文章已经更新", 
        buttonText: "立即刷新" 
      }
    }
};

