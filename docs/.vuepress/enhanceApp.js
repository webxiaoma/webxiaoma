

import 'element-ui/lib/theme-chalk/index.css';

import { 
   Button,
   Menu,
   Submenu,
   MenuItem,
} from 'element-ui'

import  MyImg  from './components/MyImg.vue'

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
}