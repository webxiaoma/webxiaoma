import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col } from 'element-ui';
import {uniappBack} from './utils';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)

  // electron 配置
  console.log(window)
  Vue.prototype.$ele = window.$electron;

  // uniapp返回控制
  uniappBack(router)
}