(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{458:function(e,t,s){var i=s(459);e.exports={title:"小马过河",description:"小马过河",head:[["link",{rel:"icon",href:"/img/manong.jpg"}],["meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}],["script",{src:"https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"}]],host:"localhost",port:"5555",base:"",dest:"./docs",serviceWorker:!0,themeConfig:{user:"webxiaoma",password:"Longwen2021",logo:"/img/manong.jpg",searchMaxSuggestions:15,nav:[{text:"Study",items:[{text:"编程基础",link:"/study/computers/computers"}]}],sidebar:i,sidebarDepth:!1,lastUpdated:"最近更新时间",smoothScroll:!0},extraWatchFiles:[".vuepress/config.js"],markdown:{extractHeaders:["h2","h3"]},plugins:["@vuepress/back-to-top",["vuepress-plugin-code-copy",{selector:"pre[class*='language-']",backgroundColor:"#3eaf7c",successText:"复制成功"}]]}},459:function(e,t){e.exports={"/study/":[{title:"编程基础知识路线",collapsable:!0,children:["computers/computers","computers/arithmetic"]},{title:"前端知识路线",collapsable:!0,children:["web/","web/interview"]},{title:"Java知识路线",collapsable:!0,children:["java/"]}]}},487:function(e,t,s){},522:function(e,t,s){"use strict";s(487)},532:function(e,t,s){"use strict";s.r(t);s(251),s(100);var i=s(458).base,a={name:"Images",components:{},data:function(){return{imgUrl:"",baseImgUrl:"".concat(i,"img"),scaleImgUrl:"",showMdel:!1}},props:{src:{type:String,default:""},alt:{type:String},width:{type:String|Number,default:500},title:{type:String,default:""},height:{type:String|Number,default:"auto"},block:{type:Boolean,default:!1}},created:function(){/^(http|https):/.test(this.src)?this.imgUrl=this.src:this.imgUrl="".concat(this.baseImgUrl).concat(this.src)},methods:{showImgModel:function(e){this.showMdel=e}}},c=(s(522),s(24)),o=Object(c.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.block?"imageWrapper block":"imageWrapper"},[s("div",{staticClass:"image",on:{click:function(t){return e.showImgModel(!0)}}},[s("img",{attrs:{src:e.imgUrl,alt:"",width:e.width}})]),e._v(" "),e.title?s("div",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showMdel,expression:"showMdel"}],staticClass:"imgModel",on:{click:function(t){return e.showImgModel(!1)}}},[s("img",{staticClass:"scaleImg",attrs:{src:e.imgUrl}})])])}),[],!1,null,"a88366f6",null);t.default=o.exports}}]);