import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col } from 'element-ui';
// import * as utils from "./utils";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)

  try{
    import("./utils/index.js").then(utils=>{
        utils.uniappBack(router);
        utils.electronInit(Vue);
    })
  }catch(err){
    console.log("slef-----:",err)
  }
}