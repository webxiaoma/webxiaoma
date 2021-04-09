
const {ipcMain} = require('electron');
const {openIconFlicker,closeIconFlicker} = require("./menu");



/**
 * @msg 监听
 */

//  监听渲染进程有消息
ipcMain.on('lw-main-have-message', (event, arg) => {
    openIconFlicker();
})

// 监听渲染进程没有消息
ipcMain.on('lw-main-no-message', (event, arg) => {
    closeIconFlicker();
})
