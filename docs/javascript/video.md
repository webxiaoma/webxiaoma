---
sidebarDepth: 2
meta:
  - name: keywords
    content: H5视频处理 video h5 video js视频
  - name: description
    content: 本文章主要总结在H5中处理视频video。
---


# H5视频处理

[GitHub 练习仓库](https://github.com/webxiaoma/JavaScript-demos/tree/master/HTML5/video)

---


## Video 标签

### 使用该标签

使用`Video`标签很简单

```html
 <video id="video" src="https://webxiaoma.gitee.io/sources/bhsj.mp4" controls="controls">
    <source src="https://webxiaoma.gitee.io/sources/bhsj.mp4" type="video/mp4">
    <source src="https://webxiaoma.gitee.io/sources/bhsj.webm" type="video/webm">
    抱歉您的浏览器不支持H5视频
</video>
```
当浏览器不支持`Video`时，页面会像是`Video`内的文字。目前video支持的音频格式`MP4` 、`WebM`以及`Ogg`。这三种格式浏览器的兼容性可以[查看这里](http://www.w3school.com.cn/html5/html_5_audio.asp)，对于video标签的兼容性可以[查看这里](https://caniuse.com/#search=video)


### video标签内属性

- `autoplay`音频在就绪后马上播放。
- `controls`如向用户显示控件，比如播放按钮。
- `loop`每当音频结束时重新开始播放。
- `preload`	音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
- `src`	要播放的音频的 URL。
- `poster` 规定视频正在下载时显示的图像，直到用户点击播放按钮。
- `muted`  如果出现该属性，视频的音频输出为静音。

### video对象属性(部分)

除了上边标签中内嵌的属性，还有以下属性[更多对像属性查看这里](http://www.runoob.com/tags/ref-av-dom.html)：

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

### video 对像方法

- `addTextTrack()`	向音频添加新的文本轨道。
- `canPlayType()`	检查浏览器是否能够播放指定的音频类型。
- `load()`	重新加载音频元素。
- `play()`	开始播放音频。
- `pause()`	暂停当前播放的音频。

### 多媒体事件

多媒体事件不多说：[可以看这里](http://www.runoob.com/tags/ref-av-dom.html)

### 实例练习

下面我们来看看使用`Video`的一些小练习[GitHub仓库练习](https://github.com/webxiaoma/JavaScript-demos/tree/master/HTML5/video/video.html)

<iframe width="700" height="700" allowfullscreen style="border:0;" src="https://webxiaoma.github.io/JavaScript-demos/HTML5/video/video.html">
</iframe>
