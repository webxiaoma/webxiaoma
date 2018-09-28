---
sidebarDepth: 2
meta:
  - name: keywords
    content: H5音频处理 audio h5 audio js音频
  - name: description
    content: 本文章主要总结H5中的音频处理知识。
---


# H5音频处理

[GitHub 练习仓库](https://github.com/webxiaoma/JavaScript-demos/tree/master/HTML5/audio)

---


## Audio标签

`H5`中提供了一个`Audio`标签来引入音频资源,他的使用也非常的简单,在学习`Audio`标签之前可以看一下[Auido 标签的兼容性](https://caniuse.com/#search=audio)

### 使用该标签

使用`Audio`标签很简单

```html
<audio controls>
    <source src="http://sc1.111ttt.cn/2018/1/03/13/396131227447.mp3" >
    您的浏览器不支持 audio 元素。
</audio>
```
当浏览器不支持`audio`时，页面会像是`audio`内的文字。目前audio支持扇子音频格式`ogg vorbis` 、`MP3`以及`wav`。这三种格式浏览器的兼容性可以[查看这里](http://www.w3school.com.cn/html5/html_5_audio.asp)


### audio标签内属性

- `autoplay`音频在就绪后马上播放。
- `controls`如向用户显示控件，比如播放按钮。
- `loop`每当音频结束时重新开始播放。
- `preload`	音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
- `src`	要播放的音频的 URL。

```html
<!-- 自动播放 -->
<audio autoplay>
    <source src="http://sc1.111ttt.cn/2018/1/03/13/396131227447.mp3" >
    您的浏览器不支持 audio 元素。
</audio>
```

### audio对象属性

除了上边标签中内嵌的属性，还有以下属性[更多对像属性查看这里](http://www.w3school.com.cn/jsref/dom_obj_audio.asp)：

- `volume` 设置或返回音频的音量。
- `paused` 设置或返回音频是否暂停。
- `currentTime` 设置或返回音频中的当前播放位置（以秒计）。
- `currentSrc` 返回当前音频的 URL。
- `defaultMuted` 设置或返回音频默认是否静音。
- `defaultPlaybackRate` 设置或返回音频的默认播放速度。
- `duration` 返回音频的长度（以秒计）。
- `muted` 	设置或返回是否关闭声音。
- `playbackRate` 设置或返回音频播放的速度。
- `ended` 返回音频的播放是否已结束。

```js
// 例子
let audio = element.querySelector('audio')
audio.volume = .5; // 设置音量
console.log(audio.currentSrc) //前音频的 URL
```

### audio 对像方法

- `addTextTrack()`	向音频添加新的文本轨道。
- `canPlayType()`	检查浏览器是否能够播放指定的音频类型。
- `fastSeek()`	在音频播放器中指定播放时间。
- `getStartDate()`	返回新的 Date 对象，表示当前时间线偏移量。
- `load()`	重新加载音频元素。
- `play()`	开始播放音频。
- `pause()`	暂停当前播放的音频。

```js
// 例子
let audio = element.querySelector('audio')
audio.play() // 开始播放
```

### 多媒体事件

多媒体事件不单单用着音频上，也可以用在视频上，跟多多媒体事件[可以看这里](http://www.w3school.com.cn/html5/html5_ref_eventattributes.asp)

- `onplay` 当媒介数据将要开始播放时运行脚本
- `onratechange` 当媒介数据的播放速率改变时运行脚本
- `onended` 当媒介已抵达结尾时运行脚本
- `ontimeupdate` 当媒介改变其播放位置时运行脚本
- `onvolumechange` 当媒介改变音量亦或当音量被设置为静音时运行脚本
- `onwaiting` 当媒介已停止播放但打算继续播放时运行脚本
- `onloadstart` 当浏览器开始加载媒介数据时运行脚本


### 实例练习

下面我们来看看使用`audio`的一些小练习[GitHub仓库练习](https://github.com/webxiaoma/JavaScript-demos/blob/master/HTML5/audio/audio.html)

<iframe width="700" height="500" border="none" style="border:0;" src="https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio.html">
</iframe>
        


## Audio Web API

`Audio Web API` 是`h5`提供的一些处理音频的接口，它和`audio`标签并不是同样的东西。只不过`audio`底层用到了一些`Audio Web API`

[Audio API文档](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext)