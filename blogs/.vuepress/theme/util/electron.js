// const $mainWin = window.$electron?window.$electron.remote.getGlobal('$mainWin'):{};
// const $app = window.$electron?window.$electron.remote.getGlobal('$app'):{};
// const {shell} = window.$electron;
let $mainWin 
let $app
let shell


try{
   $mainWin = window.$electron?window.$electron.remote.getGlobal('$mainWin'):{};
   $app = window.$electron?window.$electron.remote.getGlobal('$app'):{};
   shell = window.$electron?window.$electron.shell:{};
}catch(e){
   console.log("slef-----:",e)
}


/**
 * @msg 打开控制台
 */
export const openConsole = () => {
  if ($mainWin) $mainWin.openDevTools();
};

/**
 * @msg 改变屏幕尺寸
 */
export const screenSizeChange = (w, h) => {
  if ($mainWin) $mainWin.setSize(w, h);
};

/**
 * @msg 缩放功能
 */
export const screenChange = (bol) => {
  if (bol) {
    if ($mainWin) $mainWin.setFullScreen(bol);
  } else {
    if ($mainWin) $mainWin.setFullScreen(false);
    screenSizeChange(1100, 850);
  }
};

/**
 * @msg 隐藏窗口功能
 */
export const hiddenScreen = () => {
  if ($mainWin) $mainWin.minimize();
};


/**
 * @msg 退出程序
 */
export const exit = ()=>{
  try{
    $app.exit();
  }catch(e){
    console.log('exit',e)
  }
}

/**
 * @msg 外链跳转
 */

export const urlJump = (url) =>{
  try{
    shell.openExternal(url)
  }catch(e){
    console.log('urlJump',e)
  }
}