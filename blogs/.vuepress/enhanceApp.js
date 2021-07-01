import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import mixin from './utils/mixin';

import { 
  Row,
  Col,
  Avatar,
  Popover,
  Form,FormItem,
  Input,Button,Checkbox,CheckboxGroup,CheckboxButton,
  Message,
  Table, TableColumn} from 'element-ui';


// 测试代码
// require("./code")();

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  router, // 当前应用的路由实例
}) => {
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Avatar)
  Vue.use(Popover)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  Vue.use(Button)
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(CheckboxButton)
  Vue.use(Table)
  Vue.use(TableColumn)
 
  Vue.prototype.$message = Message;
  Vue.mixin(mixin)
  // 初始化页面环境
  // try{ 
  //   import("./utils/index.js").then(utils=>{
  //       utils.uniappBack(router);
  //       utils.electronInit(Vue);
  //   })
  // }catch(err){
  //   console.log("slef-----:",err)
  // }
}

