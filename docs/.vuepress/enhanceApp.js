

import 'element-ui/lib/theme-chalk/index.css';

import { 
   Button,
   Menu,
   Submenu,
   MenuItem,
} from 'element-ui'

import  MyImg  from './components/MyImg.vue'
import  Badge  from './components/Badge.vue'



// 评论系统

function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  router.afterEach((to) => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      }
    }
  });

  function loadGitalk(to) {
    console.log(to)

    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.theme-container .page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.path);
      }
    }
  }
  function renderGitalk(path) {
    const gitalk = new Gitalk({
      clientID: '98409e84120df5d36992',
      clientSecret: '0a66e103fe72e431e627305d33bd2b7c3e92db53', // come from github development
      repo: 'webxiaoma.github.io',
      owner: 'webxiaoma',
      admin: ['webxiaoma'],
      id: path,
      distractionFreeMode: false,
      language: 'zh-CN',
      title:"欢迎评论",
    });
    gitalk.render('gitalk-container');
  }
}




export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
   Vue.use(Button)
   Vue.use(Menu)
   Vue.use(Submenu)
   Vue.use(MenuItem)
   Vue.component('MyImg', MyImg)
   Vue.component('Badge', Badge)

   // 评论
   try {
    // 生成静态页时在node中执行，没有document对象
    document && integrateGitalk(router)
  } catch (e) {
    console.error(e.message)
  }
}