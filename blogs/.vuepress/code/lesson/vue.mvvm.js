/**
 * 1、 前端分为： HMTL + CSS + JS
 * 2. JS 包括：ECMAScript(Object/global) + DOM( document ) + BOM 浏览器对象
 * 3. Object.defineProperty
 */



/**
 * <div id="div">{{name}}</div>
 * <span id="div">{{name}}</span>
 * 
 * var obj = {
 *      name:"",
 *      size:"",
 *   }
 * obj.name = 11;
 * 
 * 
 */

/**
 * 
function NVue(opt){
    this.$opt = opt;
    this.init();
}
NVue.prototype.init = function(){}
 */

class NVue{
    constructor(opt){
       this.$opt = opt;
       this.$data = opt.data();
       this.init();
    }

    init(){
       this.defineInit();
       this.proxyData();
    }

    defineInit(){
        const obj = this.$data;
        Object.keys(obj).forEach(item =>{
             let value = obj[item];
             Object.defineProperty(obj,item,{
                 enumerable: true, // 可以枚举
                 configurable: true, // 可以设置
                 set(val){
                    document.getElementById("div").innerHTML = val;
                    value = val;
                 },
                 get(){
                    return value;
                 }
             })
        })
    }

    proxyData(){
        const obj = this.$data;
        Object.keys(obj).forEach(item =>{
            Object.defineProperty(this,item,{
                set(val){
                   obj[item] = val;
                },
                get(){
                   console.log(obj)
                   return obj[item];
                }
            })
        })

    }
}


const vue = new NVue({
    el:"",
    data(){
        return {
           name:"1111",
           age:23,
           idt:"student"
        }
    }
})

console.log(vue.name = 3333)
console.log(vue.$opt)
