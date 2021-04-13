import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col } from 'element-ui';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)

  import("./utils/index.js").then(utils=>{
     utils.uniappBack();
     utils.electronInit();
  })
  // electron 配置
  // try{
  //   Vue.prototype.$ele = window.$electron;
  // }catch(e){
  //    console.log("window none")
  // }

  // uniapp返回控制
  uniappBack(router)
}