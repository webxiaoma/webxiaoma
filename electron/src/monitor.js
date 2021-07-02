const { app,shell,globalShortcut} = require('electron');
/**
 * @监听全部窗口关闭时退出
 */
app.on('mainWindow-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darmainWin') {
      app.quit()
    }
})


app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (mainWin === null) {
    createWindow()
  }
})


/**
 * @监听快捷方式
 */
app.whenReady().then(() => { 
  
  
  // 阻止按F11全屏事件
  globalShortcut.register('F11', () => {
    return false;
  })

  //禁止 ctrl + r 刷新
  // globalShortcut.register('ctrl+r', () => {
  //   return false;
  // })
})


// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。


/**
 * @监听 a 标签点击跳转页面
 */

// app.on('web-contents-created', (e, webContents) => {
//   webContents.on('new-window', (event, url) => {
//     console.log(211123123)
//       event.preventDefault();
//       console.log(22222,url)
//       shell.openExternal(url);
//   });
// });