(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{455:function(t,e,n){"use strict";var i=n(246),r=n(245),s=n(8),a=n(28),o=n(153),l=n(247),c=n(20),d=n(248),h=n(102),u=n(3),p=[].push,g=Math.min,v=!u((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,l,c,d=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,u+"g");(o=h.call(v,i))&&!((l=v.lastIndex)>g&&(d.push(i.slice(g,o.index)),o.length>1&&o.index<i.length&&p.apply(d,o.slice(1)),c=o[0].length,g=l,d.length>=s));)v.lastIndex===o.index&&v.lastIndex++;return g===i.length?!c&&v.test("")||d.push(""):d.push(i.slice(g)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var h=s(t),u=String(this),p=o(h,RegExp),f=h.unicode,w=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),m=new p(v?h:"^(?:"+h.source+")",w),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===u.length)return null===d(m,u)?[u]:[];for(var y=0,k=0,W=[];k<u.length;){m.lastIndex=v?k:0;var S,x=d(m,v?u:u.slice(k));if(null===x||(S=g(c(m.lastIndex+(v?0:k)),u.length))===y)k=l(u,k,f);else{if(W.push(u.slice(y,k)),W.length===b)return W;for(var C=1;C<=x.length-1;C++)if(W.push(x[C]),W.length===b)return W;k=y=S}}return W.push(u.slice(y)),W}]}),!v)},484:function(t,e,n){},519:function(t,e,n){"use strict";n(484)},530:function(t,e,n){"use strict";n.r(e);var i=n(151),r=(n(251),n(65),n(37),n(455),n(66),n(67),n(99),n(100),n(249),n(244),n(98)),s={name:"En",components:{},data:function(){return{wordObj:{htmlStr:"",htmlAry:[],wordAry:[]},type:0,readingWord:"",visible:!1,currentReadApi:"",popoverCanShow:!1,showWord:!0,showSoundmark:!0,showMeaning:!0}},props:{read:{type:String,default:""},readUrl:{type:String,default:""},msg:{type:String,default:""},enType:{type:Number,default:1}},computed:Object(i.a)({},Object(r.b)(["englishObj"])),watch:{englishObj:function(t){this.showWord=t.showWord,this.showSoundmark=t.showSoundmark,this.showMeaning=t.showMeaning,this.setReadType()}},created:function(){this.init()},methods:{init:function(){var t=this.englishObj;this.createdWord(),this.setReadType(),this.showWord=t.showWord,this.showSoundmark=t.showSoundmark,this.showMeaning=t.showMeaning},createdWord:function(){var t=this,e=this.$slots.default,n=this.enType;if(e){var i=e[0].text.replace(/\s+/g," ").replace(/(^\s*)|(\s*$)/g,"").split(" "),r="",s=[],a=[];i.forEach((function(e,i){var o=e.replace(/\`/g,""),l=0,c=e.split("").map((function(t){return"`"===t?++l%2?'<i class="flag" data-id="'.concat(i,'" data-text="').concat(o,'">'):"</i>":t})).join(""),d="";1===n?d="word":2===n?d="sentence":3===n&&(d="phrase");var h='<span class="english '.concat(d,'" data-id="').concat(i,'" data-text="').concat(o,'" data-type="').concat(n,'" data-msg="').concat(t.msg,'" data-read="').concat(t.read,'" data-readUrl="').concat(t.readUrl,'">').concat(c,"</span>");a.push(o),r+=h,s.push(h)})),this.wordObj={htmlStr:r,htmlAry:s,wordAry:a}}},setReadType:function(){var t=this.englishObj.readGroup;t.length<2?(t.indexOf(1)>-1?this.type=1:this.type=0,this.popoverCanShow=!1):(this.type=2,this.popoverCanShow=!0)},wordClick:function(t){var e=t.target,n=this.type,i=this.popoverCanShow;if("span"===e.nodeName.toLowerCase()||"i"===e.nodeName.toLowerCase()){var r=e.getAttribute("data-text");2!==n?this.readWord(r,n):(this.readingWord=r,i&&(this.visible=!0))}this.showClick("showWord")},readBtnClick:function(t){var e=this.readingWord;this.readWord(e,t),this.visible=!1},readWord:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.readApi,i=this.readUrl?this.readUrl:"".concat(n,"?type=").concat(e,"&audio=").concat(t);t&&(this.video.src=i,this.video.play())},showClick:function(t){this[t]=!0}}},a=(n(519),n(24)),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"englishWrapper"},[n("el-popover",{attrs:{placement:"right",width:"150",trigger:"manual","popper-class":"popoverWrapper"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"popoverBtn"},[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.readBtnClick(1)}}},[t._v("美音")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.readBtnClick(0)}}},[t._v("英音")])],1),t._v(" "),n("div",{class:t.showWord?"wordWrapper":"wordWrapper filter",attrs:{slot:"reference"},domProps:{innerHTML:t._s(t.wordObj.htmlStr)},on:{click:t.wordClick},slot:"reference"})]),t._v(" "),t.read?n("div",{class:t.showSoundmark?"readWrapper":"readWrapper filter",on:{click:function(e){return t.showClick("showSoundmark")}}},[n("Badge",{attrs:{text:t.read}})],1):t._e(),t._v(" "),t.msg?n("div",{class:t.showMeaning?"":"filter",on:{click:function(e){return t.showClick("showMeaning")}}},[t._v(t._s(t.msg))]):t._e()],1)}),[],!1,null,null,null);e.default=o.exports}}]);