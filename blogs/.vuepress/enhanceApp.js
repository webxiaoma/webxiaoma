import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col } from 'element-ui';
import mixin from './utils/mixin';

// 测试代码
require("./code")();

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)
 
  Vue.mixin(mixin)


  // 初始化页面环境
  try{
    import("./utils/index.js").then(utils=>{
        utils.uniappBack(router);
        utils.electronInit(Vue);
    })
  }catch(err){
    console.log("slef-----:",err)
  }
}