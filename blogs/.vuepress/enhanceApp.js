import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col } from 'element-ui';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)


  Vue.mixin({

    // 使用 window dom 防止打包时报错
    mounted() {
      import("./utils/index.js").then(utils=>{
          utils.uniappBack(router);
          utils.electronInit();
      })
    },
  })
}