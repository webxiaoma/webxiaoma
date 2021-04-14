const { app, BrowserWindow} = require('electron');
const path = require("path");


/**
 * @msg 全局对象，注入浏览器端
 */
global.$mainWin = null;
global.$app = app;
global.$electron = require('electron');

// 保持对mainWindow对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，mainWindow对象将会自动的关闭
let mainWin;


/**
 *  @监听准备
 *  Electron 会在初始化后并准备
 *  创建浏览器窗口时，调用这个函数。
 *  部分 API 在 ready 事件触发后才能使用。
 */
app.on('ready', ()=>{
  // 创建浏览器窗口。
  global.$mainWin =  mainWin = new BrowserWindow({
    title:"小马学习",
    width: 1200,
    height: 850,
    minHeight:700,
    minWidth:500,
    maximizable: false,
    minimizable: true,
    resizable: true,
    transparent: false, // 透明
    frame: false, // 无边框
    show: false, // 默认不显示页面
    webPreferences:{
        javascript: true,
        plugins: true,
        nodeIntegration: true, // 是否集成 Nodejs
        webSecurity: false,
        enableRemoteModule: true, // 开启，可以通过remote获取global对象参数
        preload: path.join(app.getAppPath(), 'preload.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
    }
  })

  // 然后加载应用的 index.html。
  //   mainWin.loadFile('index.html')

  // 加载远程
  // mainWin.loadURL('http://localhost:5555/webxiaoma/');
  mainWin.loadURL('https://webxiaoma.gitee.io/webxiaoma/');

  mainWin.on('ready-to-show',  ()=> {
    mainWin.show() // 初始化后再显示
  })

  // 打开开发者工具
  // mainWin.webContents.openDevTools()

  // 当 mainWindow 被关闭，这个事件会被触发。
  mainWin.on('closed', () => {
      // 取消引用 mainWindow 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 mainWindow 对象存放在一个数组里面，
      // 与此同时，你应该删除相应的元素。
      mainWin = null;
  })


  require("./src/monitor");

  // require("./src/notice");
  // require("./src/menu");

})


// 发送系统通过是的名称
// app.setAppUserModelId('easy-work')

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。


// electron 热更新
try {
  require('electron-reloader')(module,{});
} catch (_) {}

