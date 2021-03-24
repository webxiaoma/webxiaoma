import 'element-ui/lib/theme-chalk/index.css';
import { Row,Col } from 'element-ui';
console.log(Row)

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)
}