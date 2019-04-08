(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{377:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/webxiaoma/JavaScript-demos/tree/master/HTML5/audio",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 练习仓库"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),s("p",[s("code",[t._v("H5")]),t._v("中提供了一个"),s("code",[t._v("Audio")]),t._v("标签来引入音频资源,他的使用也非常的简单,在学习"),s("code",[t._v("Audio")]),t._v("标签之前可以看一下"),s("a",{attrs:{href:"https://caniuse.com/#search=audio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auido 标签的兼容性"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("当浏览器不支持"),s("code",[t._v("audio")]),t._v("时，页面会像是"),s("code",[t._v("audio")]),t._v("内的文字。目前audio支持的音频格式"),s("code",[t._v("ogg vorbis")]),t._v(" 、"),s("code",[t._v("MP3")]),t._v("以及"),s("code",[t._v("wav")]),t._v("。这三种格式浏览器的兼容性可以"),s("a",{attrs:{href:"http://www.w3school.com.cn/html5/html_5_audio.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看这里"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("除了上边标签中内嵌的属性，还有以下属性"),s("a",{attrs:{href:"http://www.w3school.com.cn/jsref/dom_obj_audio.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多对像属性查看这里"),s("OutboundLink")],1),t._v("：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("多媒体事件不单单用着音频上，也可以用在视频上，跟多多媒体事件"),s("a",{attrs:{href:"http://www.w3school.com.cn/html5/html5_ref_eventattributes.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以看这里"),s("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("下面我们来看看使用"),s("code",[t._v("audio")]),t._v("的一些小练习"),s("a",{attrs:{href:"https://github.com/webxiaoma/JavaScript-demos/blob/master/HTML5/audio/audio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub仓库练习"),s("OutboundLink")],1)]),t._v(" "),s("iframe",{staticStyle:{border:"0"},attrs:{width:"700",height:"500",src:"https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio.html"}}),t._v(" "),t._m(17),t._v(" "),s("p",[s("code",[t._v("Audio Web API")]),t._v(" 是"),s("code",[t._v("h5")]),t._v("提供的一些处理音频的接口，它和"),s("code",[t._v("audio")]),t._v("标签并不是同样的东西。只不过"),s("code",[t._v("audio")]),t._v("底层用到了一些"),s("code",[t._v("Audio Web API")]),t._v(", "),s("code",[t._v("Audio Web API")]),t._v("提供了非常多的接口，这里我们只讲解部分，目的是了解一下该功能，如果你想深入研究可以查看"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Audio API MDN"),s("OutboundLink")],1),t._v("，另外你可以"),s("a",{attrs:{href:"https://caniuse.com/#search=Audio%20API",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击这里"),s("OutboundLink")],1),t._v("查看"),s("code",[t._v("Audio Web API")]),t._v(" 目前的兼容性。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("等等，类似音频编辑类的软件功能。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[s("code",[t._v("AudioContext")]),t._v("会生成一个音频上下文，我们的所有音频操作都是在这个上下文上去进行的，它类似与"),s("code",[t._v("canvas")]),t._v("中的"),s("code",[t._v("canvas.getContext")]),t._v("。这个上下文上有很多的属性，常见的属性方法如下： 更多属性方法"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext",target:"_blank",rel:"noopener noreferrer"}},[t._v("AudioContext\n"),s("OutboundLink")],1)]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),s("p",[t._v("处理音效我们需要创建一个音频振荡器"),s("code",[t._v("createOscillator()")]),t._v("，它返回一个"),s("code",[t._v("OscillatorNode")]),t._v("模块对象接口(音调控制对象)，这个模块会对一个指定频率将创建的给定波产生影响, 一个恒定的音调。具体用法"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/OscillatorNode",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以看这里"),s("OutboundLink")],1)]),t._v(" "),t._m(31),t._v(" "),s("ul",[t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),s("li",[s("code",[t._v("OscillatorNode.type")]),t._v("一个字符串设置波形，决定 "),s("code",[t._v("OscillatorNode")]),t._v(" 播放的声音的周期波形; 它的值可以是基础值中的一个或者用户使用 "),s("code",[t._v("PeriodicWave")]),t._v('。不同的波形可以产生不同的声调。 基础值有 "sine", "square", "sawtooth", "triangle" and "custom". 默认值是"sine"。默认的波形有如下（图片来自'),s("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/",target:"_blank",rel:"noopener noreferrer"}},[t._v("张鑫旭"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),s("p",[t._v("处理声音我们需要使用"),s("code",[t._v("AudioContext.createGain()")]),t._v("，该方法返回一个"),s("code",[t._v("GainNode")]),t._v("对象。该方法常用的属性和方法如下：更多方法访问"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain",target:"_blank",rel:"noopener noreferrer"}},[t._v("createGain api"),s("OutboundLink")],1)]),t._v(" "),t._m(40),t._v(" "),s("ul",[s("li",[s("code",[t._v("ainNode.gain")]),t._v(" 一个"),s("code",[t._v("a-rate")]),t._v("类型的"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioParam",target:"_blank",rel:"noopener noreferrer"}},[t._v("AudioParam"),s("OutboundLink")],1),t._v("，该属性下面有很多处理音量的方法和属性")])]),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("很多在"),s("code",[t._v("gain")]),t._v("属性上，更多方法访问"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioParam",target:"_blank",rel:"noopener noreferrer"}},[t._v("AudioParam"),s("OutboundLink")],1)]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),s("p",[t._v("想要实现最简单的声音合成我们还要使用下面方法：")]),t._v(" "),t._m(45),t._v(" "),s("p",[t._v("下面我们就可以实现一个很简单的音频：")]),t._v(" "),t._m(46),t._m(47),t._v(" "),s("p",[t._v("我们可以通过"),s("code",[t._v("AudioContext.createAnalyser()")]),t._v("方法来创建一个"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode",target:"_blank",rel:"noopener noreferrer"}},[t._v("AnalyserNode"),s("OutboundLink")],1),t._v("获取音频时间和频率上的一些信息，知道这些信息后我们就可以做一些类似音乐可视化的需求。"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser",target:"_blank",rel:"noopener noreferrer"}},[t._v("createAnalyser API"),s("OutboundLink")],1)]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._m(54),t._v(" "),s("p",[t._v("下面我们来看看使用"),s("code",[t._v("Audio Web API")]),t._v("制作钢琴的练习"),s("a",{attrs:{href:"https://github.com/webxiaoma/JavaScript-demos/blob/master/HTML5/audio/audio-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub仓库练习"),s("OutboundLink")],1)]),t._v(" "),s("iframe",{staticStyle:{border:"0"},attrs:{width:"810",height:"520",src:"https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio-api.html"}}),t._v(" "),s("p",[t._v("下面我们来是使用"),s("code",[t._v("Audio Web API")]),t._v("制作可视化音乐的练习"),s("a",{attrs:{href:"https://github.com/webxiaoma/JavaScript-demos/blob/master/HTML5/audio/audio-api-two.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub仓库练习"),s("OutboundLink")],1)]),t._v(" "),s("iframe",{staticStyle:{border:"0"},attrs:{width:"810",height:"660",src:"https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio-api-two.html"}})])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"h5音频处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5音频处理","aria-hidden":"true"}},[this._v("#")]),this._v(" H5音频处理")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"audio标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio标签","aria-hidden":"true"}},[this._v("#")]),this._v(" Audio标签")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"使用该标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用该标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用该标签")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("使用"),a("code",[this._v("Audio")]),this._v("标签很简单")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("audio")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("controls")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sc1.111ttt.cn/2018/1/03/13/396131227447.mp3"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    您的浏览器不支持 audio 元素。\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("audio")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"audio标签内属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio标签内属性","aria-hidden":"true"}},[this._v("#")]),this._v(" audio标签内属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("autoplay")]),t._v("音频在就绪后马上播放。")]),t._v(" "),s("li",[s("code",[t._v("controls")]),t._v("如向用户显示控件，比如播放按钮。")]),t._v(" "),s("li",[s("code",[t._v("loop")]),t._v("每当音频结束时重新开始播放。")]),t._v(" "),s("li",[s("code",[t._v("preload")]),t._v('\t音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。')]),t._v(" "),s("li",[s("code",[t._v("src")]),t._v("\t要播放的音频的 URL。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 自动播放 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("audio")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("autoplay")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sc1.111ttt.cn/2018/1/03/13/396131227447.mp3"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    您的浏览器不支持 audio 元素。\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("audio")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"audio对象属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio对象属性","aria-hidden":"true"}},[this._v("#")]),this._v(" audio对象属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("volume")]),t._v(" 设置或返回音频的音量。")]),t._v(" "),s("li",[s("code",[t._v("paused")]),t._v(" 设置或返回音频是否暂停。")]),t._v(" "),s("li",[s("code",[t._v("currentTime")]),t._v(" 设置或返回音频中的当前播放位置（以秒计）。")]),t._v(" "),s("li",[s("code",[t._v("currentSrc")]),t._v(" 返回当前音频的 URL。")]),t._v(" "),s("li",[s("code",[t._v("defaultMuted")]),t._v(" 设置或返回音频默认是否静音。")]),t._v(" "),s("li",[s("code",[t._v("defaultPlaybackRate")]),t._v(" 设置或返回音频的默认播放速度。")]),t._v(" "),s("li",[s("code",[t._v("duration")]),t._v(" 返回音频的长度（以秒计）。")]),t._v(" "),s("li",[s("code",[t._v("muted")]),t._v(" \t设置或返回是否关闭声音。")]),t._v(" "),s("li",[s("code",[t._v("playbackRate")]),t._v(" 设置或返回音频播放的速度。")]),t._v(" "),s("li",[s("code",[t._v("ended")]),t._v(" 返回音频的播放是否已结束。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 例子")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" audio "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'audio'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naudio"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("volume "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 设置音量")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audio"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentSrc"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//前音频的 URL")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"audio-对像方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio-对像方法","aria-hidden":"true"}},[this._v("#")]),this._v(" audio 对像方法")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("addTextTrack()")]),t._v("\t向音频添加新的文本轨道。")]),t._v(" "),s("li",[s("code",[t._v("canPlayType()")]),t._v("\t检查浏览器是否能够播放指定的音频类型。")]),t._v(" "),s("li",[s("code",[t._v("fastSeek()")]),t._v("\t在音频播放器中指定播放时间。")]),t._v(" "),s("li",[s("code",[t._v("getStartDate()")]),t._v("\t返回新的 Date 对象，表示当前时间线偏移量。")]),t._v(" "),s("li",[s("code",[t._v("load()")]),t._v("\t重新加载音频元素。")]),t._v(" "),s("li",[s("code",[t._v("play()")]),t._v("\t开始播放音频。")]),t._v(" "),s("li",[s("code",[t._v("pause()")]),t._v("\t暂停当前播放的音频。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 例子")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" audio "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'audio'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naudio"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("play")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 开始播放")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"多媒体事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多媒体事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 多媒体事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("onplay")]),t._v(" 当媒介数据将要开始播放时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("onratechange")]),t._v(" 当媒介数据的播放速率改变时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("onended")]),t._v(" 当媒介已抵达结尾时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("ontimeupdate")]),t._v(" 当媒介改变其播放位置时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("onvolumechange")]),t._v(" 当媒介改变音量亦或当音量被设置为静音时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("onwaiting")]),t._v(" 当媒介已停止播放但打算继续播放时运行脚本")]),t._v(" "),s("li",[s("code",[t._v("onloadstart")]),t._v(" 当浏览器开始加载媒介数据时运行脚本")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"实例练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例练习","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例练习")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"audio-web-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio-web-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Audio Web API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"认识audio-web-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识audio-web-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 认识Audio Web API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Audio Web API")]),this._v("和h5 "),a("code",[this._v("audio")]),this._v(" 标签的最大区别就是它不需要任何的音频文件，凭借js代码就可以产生声音，并且可以获取音频进行处理，除此之外还可以做这些：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("处理音效，如实现混音，低音，颗粒音效")]),this._v(" "),a("li",[this._v("控制音频的音量")]),this._v(" "),a("li",[this._v("实现音乐的分割截取")]),this._v(" "),a("li",[this._v("制作3D游戏音效")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"web-audio流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-audio流程","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Audio流程")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("一个简单的"),a("code",[this._v("Web Audio")]),this._v("流程大致如下")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ol",[s("li",[t._v("创建音频上下文")]),t._v(" "),s("li",[t._v("在音频上下文里创建源 — 例如 "),s("code",[t._v("<audio>")]),t._v(", 振荡器, 流")]),t._v(" "),s("li",[t._v("创建效果节点，例如混响、双二阶滤波器、平移、压缩")]),t._v(" "),s("li",[t._v("为音频选择一个目地，例如你的系统扬声器")]),t._v(" "),s("li",[t._v("连接源到效果器，对目的地进行效果输出")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"创建音频上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建音频上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建音频上下文")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("属性：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("AudioContext.currentTime")]),t._v(" 返回硬件调用的秒数，"),s("code",[t._v("AudioContext")]),t._v("一创建就从0开始走，无法停掉、暂停或者重置。")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.listener")]),t._v(" 返回"),s("code",[t._v("AudioListener")]),t._v("对象，用于3D音频空间化。")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.destination")]),t._v(" 返回"),s("code",[t._v("AudioDestinationNode")]),t._v("对象，表示当前"),s("code",[t._v("audio context")]),t._v("中所有节点的最终节点，一般表示音频渲染设备。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("方法：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("AudioContext.createOscillator()")]),t._v(" 创建一个振荡器（音调调节器）")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createMediaElementSource()")]),t._v(" 创建一个接口处理"),s("code",[t._v("<audio>")]),t._v(" 或"),s("code",[t._v("<video>")]),t._v(" 元素的音频")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createMediaStreamSource()")]),t._v(" 创建一个接口处理摄像头或麦克风的音频")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createBuffer()")]),t._v("创建一个空的"),s("code",[t._v("AudioBuffer")]),t._v("对象, 并且能够通过"),s("code",[t._v("AudioBufferSourceNode")]),t._v("来进行数据填充和播放.")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createBufferSource()")]),t._v("创建一个 "),s("code",[t._v("AudioBufferSourceNode")]),t._v(" 对象, 他可以通过"),s("code",[t._v("AudioBuffer")]),t._v("对象来播放和处理包含在内的音频数据. "),s("code",[t._v("AudioBuffer")]),t._v("可以通过"),s("code",[t._v("AudioContext.createBuffer")]),t._v("方法创建或者使用"),s("code",[t._v("AudioContext.decodeAudioData")]),t._v("方法解码音轨来创建。")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createGain()")]),t._v(" 创建一个"),s("code",[t._v("GainNode")]),t._v(",它可以控制音频的总音量")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.createAnalyser()")]),t._v(" 返回音频时间和频率数据，可用在数据可视化上")]),t._v(" "),s("li",[s("code",[t._v("AudioContext.close()")]),t._v(" 关闭一个音频环境, 释放任何正在使用系统资源的音频。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建音频上下文")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" audioContext "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AudioContext "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitAudioContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"处理音效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理音效","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理音效")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("属性：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("code",[this._v("OscillatorNode.frequency")]),this._v(" 存储振动频率信息，可以通过")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("code",[this._v("OscillatorNode.frequency.value = 100")]),this._v(" 来设置频率（单为赫兹）")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("code",[this._v("OscillatorNode.detune")]),this._v("振动的音高微调单位是cent音分）默认值是0。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"http://webxiaoma/img/audio.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("方法：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("OscillatorNode.setPeriodicWave()")]),this._v("设置一个"),a("code",[this._v("PeriodicWave")]),this._v(" ,它描述了一个周期的波形常常替代标准波形之一; 调用这个方法来设置用户自定义的波形。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建振荡器")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oscillator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createOscillator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"处理音量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理音量","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理音量")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("属性")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("方法")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("gainNode.gain.setValueAtTime(0, audioContext.currentTime)")]),t._v(" 将当前音量设置为0")]),t._v(" "),s("li",[s("code",[t._v("gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01)")]),t._v(" 0.01秒时间内音量从刚刚的0变成0.5，线性变化(声音会淡入淡出的感觉)")]),t._v(" "),s("li",[s("code",[t._v("gainNode.gain.exponentialRampToValueAtTime(0.01 , audioCtx.currentTime + 1)")]),t._v(" 1秒内将声音降低到 0.01")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 创建音量器")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gainNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createGain")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"开始暂停"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始暂停","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始暂停")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("oscillator.connect(gainNode)")]),t._v(" 音调和音量关联起来，使用"),s("code",[t._v("disconnect")]),t._v("可以断开连接")]),t._v(" "),s("li",[s("code",[t._v("gainNode.connect(AudioContext.destination)")]),t._v(" 音量和设备关联起来，使用"),s("code",[t._v("disconnect")]),t._v("可以断开连接")]),t._v(" "),s("li",[s("code",[t._v("oscillator.start(AudioContext.currentTime)")]),t._v(" 播放音频")]),t._v(" "),s("li",[s("code",[t._v("oscillator.stop(AudioContext.currentTime + 1)")]),t._v(" 1秒后暂停播放")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//创建音频接口上下文")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" audioCtx "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AudioContext "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" webkitAudioContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 创建音调节器(振荡器)")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oscillator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createOscillator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{attrs:{class:"token comment"}},[t._v("//设置波形，可选值：'square','triangle','sawtooth','sine'")]),t._v("\noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'triangle'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frequency"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("180")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("//设置频率")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/***创建音量控制节点**/")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gainNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createGain")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),s("span",{attrs:{class:"token comment"}},[t._v("// 先把当前音量设为0  ")]),t._v("\ngainNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gain"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setValueAtTime")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 3秒时间内音量从刚刚的0变成0.5，线性变化  ")]),t._v("\ngainNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gain"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("linearRampToValueAtTime")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0.2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/***  将音量链接到振荡器  ***/")]),t._v("\noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("connect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gainNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*** 将音量与设备关联 ***/")]),t._v("\ngainNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("connect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destination"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*** 开始播放声音 ***/")]),t._v("\noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 10秒后停止声音 ")]),t._v("\noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("stop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"获取频率信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取频率信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取频率信息")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("属性")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("AnalyserNode.fftSize")]),this._v(" 是无符号长值，表示用于确定频域的FFT（快速傅立叶变换）的大小。")]),this._v(" "),a("li",[a("code",[this._v("AnalyserNode.frequencyBinCount")]),this._v(" 无符号长整数值是FFT大小的一半，这通常等于您可以为可视化使用的数据值的数量。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("方法")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("AnalyserNode.getFloatFrequencyData()")]),t._v("将当前频率数据复制到传入其中的"),s("code",[t._v("Float32Array")]),t._v("数组中。")]),t._v(" "),s("li",[s("code",[t._v("AnalyserNode.getByteFrequencyData()")]),t._v("将当前频率数据复制到传入其中的"),s("code",[t._v("Uint8Array")]),t._v("（无符号字节数组）")]),t._v(" "),s("li",[s("code",[t._v("AnalyserNode.getFloatTimeDomainData()")]),t._v("将当前波形或时域数据复制到传入其中的"),s("code",[t._v("Float32Array")]),t._v("数组中。")]),t._v(" "),s("li",[s("code",[t._v("AnalyserNode.getByteTimeDomainData()")]),t._v(" 将当前波形或时域数据复制到"),s("code",[t._v("Uint8Array")]),t._v("传递给它的（无符号字节数组）中。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("在获取音频音量信息时，我们需要先将音频"),s("code",[t._v("AnalyserNode")]),t._v("对象链接到音频对象上，然后在将音量节点链接到"),s("code",[t._v("AnalyserNode")]),t._v("对象")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("musicSource.connect(analyser)")]),t._v(" 将;")]),t._v(" "),s("li",[s("code",[t._v("analyser.connect(gainNode)")]),t._v(";")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" audioCtx "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AudioContext "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitAudioContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" analyser "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createAnalyser")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oscillator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createOscillator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//常见音频节点")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gainNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createGain")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 创建音量节点")]),t._v("\n\noscillator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("connect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("analyser"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nanalyser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("connect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gainNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nanalyser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fftSize "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2048")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bufferLength "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" analyser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frequencyBinCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dataArray "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Uint8Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bufferLength"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nanalyser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getByteTimeDomainData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"实例练习-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例练习-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例练习")])}],!1,null,null,null);e.options.__file="audio.md";a.default=e.exports}}]);