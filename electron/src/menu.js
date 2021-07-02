const { Tray,Menu,app } = require('electron');
const path = require('path')



let appIcon = null;
let flickerTimer = null;

appIcon = new Tray(path.join(__dirname, '../public/img/mxx.jpg'));

const menuList = [
    {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close',
        click:()=>{
            console.log(11111);
            app.quit();
            app.quit();
        }
    }
]

const contextMenu = Menu.buildFromTemplate(menuList);
// Make a change to the context menu
// contextMenu.items[2].checked = false;

appIcon.setToolTip('马新想');

appIcon.setContextMenu(contextMenu);


/**
 * @msg 开启闪烁
 */
exports.openIconFlicker = ()=>{
    let count = 0;
    flickerTimer =  setInterval(function() {
        if (count++ % 2 == 0) {
            appIcon.setImage(path.join(__dirname, '../public/img/mxx.jpg'));
        } else {
            appIcon.setImage(path.join(__dirname, '../public/img/logo.png'));
        }
    }, 500);
}


/**
 * @msg 关闭闪烁
 */
exports.closeIconFlicker = ()=>{
    flickerTimer && clearInterval(flickerTimer);
}