(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"2b44":function(t,e,i){},"42d1":function(t,e,i){t.exports=i.p+"img/tuboshu.32caa89f.gif"},"4c39":function(t,e){var i,s,a=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(i===setTimeout)return setTimeout(t,0);if((i===n||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}function c(t){if(s===clearTimeout)return clearTimeout(t);if((s===o||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{return s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(function(){try{i="function"===typeof setTimeout?setTimeout:n}catch(t){i=n}try{s="function"===typeof clearTimeout?clearTimeout:o}catch(t){s=o}})();var h,l=[],u=!1,v=-1;function f(){u&&h&&(u=!1,h.length?l=h.concat(l):v=-1,l.length&&d())}function d(){if(!u){var t=r(f);u=!0;var e=l.length;while(e){h=l,l=[];while(++v<e)h&&h[v].run();v=-1,e=l.length}h=null,u=!1,c(t)}}function m(t,e){this.fun=t,this.array=e}function w(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new m(t,e)),1!==l.length||u||r(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=w,a.addListener=w,a.once=w,a.off=w,a.removeListener=w,a.removeAllListeners=w,a.emit=w,a.prependListener=w,a.prependOnceListener=w,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},5262:function(t,e,i){"use strict";var s=i("2b44"),a=i.n(s);a.a},5650:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeWrap"},[t._m(0),i("div",{staticClass:"lottery-wrap"},[i("vue-scratch-card",{attrs:{"element-id":"scratchWrap","start-callback":t.startCallback,"clear-callback":t.clearCallback,ratio:.5,"move-radius":50}})],1),t.show?i("div",{staticClass:"tip"},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("温馨提示")]),t._v("：奖品为(可查看新郎新娘的婚纱照)")]):t._e(),t.show?i("p",{staticClass:"look",on:{click:t.lookPhoto}},[t._v("点击查看"),i("span",{staticStyle:{color:"rgb(253, 228, 6)"}},[t._v("奖品")])]):t._e()])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-wrap"},[t._v("开心刮刮乐"),i("span",{staticStyle:{"font-size":"18px"}},[t._v("(中大奖)")])])}],n={data:function(){return{show:!1}},created:function(){},methods:{startCallback:function(){console.log("抽奖成功！")},clearCallback:function(){console.log("清除完毕！"),this.show=!0},lookPhoto:function(){this.$router.push("/photoShow")}}},o=n,r=(i("ee48"),i("6691")),c=Object(r["a"])(o,s,a,!1,null,"63fa397f",null);e["default"]=c.exports},"9ff1":function(t,e,i){},b27f:function(t,e,i){(function(t){var s="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new n(a.call(setTimeout,s,arguments),clearTimeout)},e.setInterval=function(){return new n(a.call(setInterval,s,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(s,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},i("de8a"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i("a5a4"))},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sectionOne"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.firstShow,expression:"firstShow"}],staticClass:"firstShow firstShowAnimate"},[t._m(0),s("p",{ref:"twoShow",staticClass:"twoShow"},[t._v("请做好心理准备")]),t._m(1),s("p",{staticClass:"name"},[t._v("新郎：马新想 & 新娘：王佳佳")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.twoShow,expression:"twoShow"}],staticClass:"secondShow secondShowAnimate",attrs:{id:t.showP?"showPWrao":""}},[s("p",{staticClass:"a"},[t._v("这")]),s("p",{staticClass:"b"},[t._v("是")]),s("p",{staticClass:"c"},[t._v("一")]),s("p",{staticClass:"d"},[t._v("份")]),s("p",{staticClass:"e"},[t._v("邀")]),s("p",{staticClass:"f"},[t._v("请")]),s("p",{ref:"ggg",staticClass:"g"},[t._v("函")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.threeShow,expression:"threeShow"}],staticClass:"thirdlyShow thirdlyShowAnimate"},[s("div",{staticClass:"three threeA0"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA1"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA2"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA3"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA4"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA5"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA6"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA7"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA8"},[t._v("？？？？？？")]),s("div",{staticClass:"three threeA9"},[t._v("？？？？？？")]),s("div",{staticClass:"three threeA10"},[t._v("？？？？？？")]),s("div",{staticClass:"three threeA11"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA12"},[t._v("纳尼？？？？？？")]),s("div",{staticClass:"three threeA13"},[t._v("？？？？？？")]),s("div",{staticClass:"three threeA14"},[t._v("纳尼？？？？？？")]),s("div",{ref:"threeALast",staticClass:"three threeALast"},[t._v("纳尼？？？？？？")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fourShow,expression:"fourShow"}],staticClass:"fourShow fourShowAnimate"},[t._m(2),t._m(3),t._m(4),s("div",{ref:"threeF",staticClass:"three threeF"},[s("p",[t._v("婚礼邀请函")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fiveShow,expression:"fiveShow"}],staticClass:"fiveShow fiveShowAnimate"},[s("div",{staticClass:"fiveA"},[t._v("新郎")]),s("div",{staticClass:"fiveB"},[t._v("马新想")]),s("div",{staticClass:"fiveI"},[t._v("河北保定人")]),s("div",{staticClass:"fiveC"},[t._v("身高185")]),s("div",{staticClass:"fiveD"},[t._v("玉树临风")]),s("div",{staticClass:"fiveE"},[t._v("皮肤白皙")]),s("div",{staticClass:"fiveF"},[t._v("男神")]),s("div",{staticClass:"fiveG"},[t._v("优秀到无法形容")]),s("div",{ref:"fiveH",staticClass:"fiveH"},[t._v("这么叼，呵呵")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sixShow,expression:"sixShow"}],staticClass:"sixShow sixShowAnimate"},[s("div",{staticClass:"fiveA"},[t._v("新娘")]),s("div",{staticClass:"fiveB"},[t._v("王佳佳")]),s("div",{staticClass:"fiveI"},[t._v("河北邯郸人")]),s("div",{staticClass:"fiveC"},[t._v("身高155")]),s("div",{staticClass:"fiveD"},[t._v("人见人爱")]),s("div",{staticClass:"fiveE"},[t._v("花见花开")]),s("div",{staticClass:"fiveF"},[t._v("萌萌达")]),s("div",{staticClass:"fiveG"},[t._v("小仙女")]),s("div",{ref:"sixH",staticClass:"fiveH"},[t._v("OMG，我滴天")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tuboshuPhoto,expression:"tuboshuPhoto"}],staticClass:"tuboshuPhoto"},[s("div",{ref:"tuboshuPhoto",staticClass:"imgWrap"},[s("img",{attrs:{src:i("42d1"),alt:""}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sevenShow,expression:"sevenShow"}],staticClass:"sevenShow sevenShowAnimate"},[s("div",{staticClass:"sevenA"},[t._v("弹幕来袭")]),s("div",{staticClass:"sevenB"},[t._v("此时")]),s("div",{ref:"sevenC",staticClass:"sevenC"},[t._v("你们内心的声音")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.eightShow,expression:"eightShow"}],staticClass:"eightShow eightShowAnimate"},[s("div",{staticClass:"eightA"},[t._v("玉树临风?")]),s("div",{staticClass:"eightB"},[t._v("小仙女?")]),s("div",{staticClass:"eightC"},[t._v("10月一结婚的真多")]),s("div",{staticClass:"eightD"},[t._v("不要脸")]),s("div",{staticClass:"eightE"},[t._v("身高185?")]),s("div",{staticClass:"eightF"},[t._v("吹牛皮呢")]),s("div",{staticClass:"eightG"},[t._v("脸真大")]),s("div",{staticClass:"eightH"},[t._v("男神？")]),s("div",{staticClass:"eightI"},[t._v("人见人爱？")]),s("div",{staticClass:"eightJ"},[t._v("扯皮呢？")]),s("div",{staticClass:"eightK"},[t._v("又要参加婚礼")]),s("div",{staticClass:"eightL"},[t._v("蓝蛤嫫想吃天鹅肉")]),s("div",{staticClass:"eightM"},[t._v("继续")]),s("div",{staticClass:"eightN"},[t._v("我不听我不听")]),s("div",{staticClass:"eightO"},[t._v("啥玩意")]),s("div",{staticClass:"eightP"},[t._v("祝你们幸福")]),s("div",{staticClass:"eightQ"},[t._v("终于结婚了")]),s("div",{ref:"eightR",staticClass:"eightR"},[t._v("祝福")]),s("div",{staticClass:"eightS"},[t._v("可以呀")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nineShow,expression:"nineShow"}],staticClass:"nineShow nineShowAnimate"},[s("div",{staticClass:"nineA"},[t._v("下面是")]),s("div",{ref:"nineB",staticClass:"nineB"},[t._v("辛运大抽奖")])]),s("audio",{attrs:{src:"https://data2.rrxh5.cc/g2/c1/2018/09/16/1537083329759.mp3",autoplay:"autoplay"}})])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"firstOne"},[i("span",{staticClass:"two"},[t._v("温馨提示")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imgphoto"},[i("img",{attrs:{src:"http://webxiaoma.test.upcdn.net/img/onee.png",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"three threeC"},[i("p",[t._v("没错")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"three threeD"},[i("p",[t._v("这是一份")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"three threeE"},[i("p",[t._v("真诚的")])])}],n=i("b27f"),o={data:function(){return{firstShow:!0,twoShow:!1,showP:!1,threeShow:!1,fourShow:!1,fiveShow:!1,sixShow:!1,tuboshuPhoto:!1,sevenShow:!1,eightShow:!1,nineShow:!1,tuboshuPhotoSum:0,timer:null}},create:function(){},mounted:function(){var t=this;this.loadSource(),this.$refs.twoShow.addEventListener("animationend",(function(){t.firstShow=!1,t.twoShow=!0})),this.$refs.ggg.addEventListener("animationend",(function(){Object(n["setTimeout"])((function(){t.showP=!0}),200),t.timer=Object(n["setTimeout"])((function(){t.twoShow=!1,t.threeShow=!0,Object(n["clearTimeout"])(t.timer)}),1e3)})),this.$refs.threeALast.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.showP=!0,t.threeShow=!1,t.fourShow=!0,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.threeF.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.fourShow=!1,t.fiveShow=!0,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.fiveH.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.fiveShow=!1,t.tuboshuPhoto=!0,t.tuboshuPhotoSum+=1,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.sixH.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.sixShow=!1,t.tuboshuPhoto=!0,t.tuboshuPhotoSum+=1,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.tuboshuPhoto.addEventListener("animationend",(function(){1===t.tuboshuPhotoSum?t.timer=Object(n["setTimeout"])((function(){t.tuboshuPhoto=!1,t.sixShow=!0,Object(n["clearTimeout"])(t.timer)}),400):t.timer=Object(n["setTimeout"])((function(){t.tuboshuPhoto=!1,t.sevenShow=!0,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.sevenC.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.sevenShow=!1,t.eightShow=!0,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.eightR.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){t.eightShow=!1,t.nineShow=!0,Object(n["clearTimeout"])(t.timer)}),400)})),this.$refs.nineB.addEventListener("animationend",(function(){t.timer=Object(n["setTimeout"])((function(){Object(n["setTimeout"])((function(){t.nineShow=!1,t.$router.push("/lottery")}),1e3),Object(n["clearTimeout"])(t.timer)}),400)}))},methods:{loadSource:function(){for(var t=["onee.png","love.png","two.jpg","a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","j.jpg","k.jpg","shipin.jpg"],e="http://webxiaoma.test.upcdn.net/img",i=0,s=t.length;i<s;i++){var a=document.createElement("img");a.src="".concat(e,"/").concat(t[i])}}}},r=o,c=(i("5262"),i("6691")),h=Object(c["a"])(r,s,a,!1,null,"5d1d59dc",null);e["default"]=h.exports},de8a:function(t,e,i){(function(t,e){(function(t,i){"use strict";if(!t.setImmediate){var s,a=1,n={},o=!1,r=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?f():d()?m():t.MessageChannel?w():r&&"onreadystatechange"in r.createElement("script")?p():_(),c.setImmediate=h,c.clearImmediate=l}function h(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var o={callback:t,args:e};return n[a]=o,s(a),a++}function l(t){delete n[t]}function u(t){var e=t.callback,s=t.args;switch(s.length){case 0:e();break;case 1:e(s[0]);break;case 2:e(s[0],s[1]);break;case 3:e(s[0],s[1],s[2]);break;default:e.apply(i,s);break}}function v(t){if(o)setTimeout(v,0,t);else{var e=n[t];if(e){o=!0;try{u(e)}finally{l(t),o=!1}}}}function f(){s=function(t){e.nextTick((function(){v(t)}))}}function d(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}function m(){var e="setImmediate$"+Math.random()+"$",i=function(i){i.source===t&&"string"===typeof i.data&&0===i.data.indexOf(e)&&v(+i.data.slice(e.length))};t.addEventListener?t.addEventListener("message",i,!1):t.attachEvent("onmessage",i),s=function(i){t.postMessage(e+i,"*")}}function w(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;v(e)},s=function(e){t.port2.postMessage(e)}}function p(){var t=r.documentElement;s=function(e){var i=r.createElement("script");i.onreadystatechange=function(){v(e),i.onreadystatechange=null,t.removeChild(i),i=null},t.appendChild(i)}}function _(){s=function(t){setTimeout(v,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,i("a5a4"),i("4c39"))},ee48:function(t,e,i){"use strict";var s=i("9ff1"),a=i.n(s);a.a}}]);