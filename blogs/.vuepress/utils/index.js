/**
 * @msg uniapp 页面返回控制
 * @param {路由实例} router 
 */
export const uniappBack = (router)=>{
    try{
        document.addEventListener('UniAppJSBridgeReady',  ()=> {
            window.$getBack = ()=> {
                if (window.plus) {
                    // window.history.go(-1);
                    router.go(-1)
                }
            };
        });
    }catch(e){
        console.log("slef-----:",e)
    }
} 


/**
 * @msg electron 初始化
 */
export const electronInit = (Vue)=>{
     // electron 配置
  try{
    Vue.prototype.$ele = window.$electron;
  }catch(e){
     console.log("slef-----:",e)
  }
}