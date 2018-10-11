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



## MediaSource API

[MediaSource API]() 扩展了视频的处理，使js生成流媒体成为了可能。下面我们来简单的使用一下`MediaSource API`

使用`MediaSource API`来实现媒体播放器的大致步骤如下：

1. 在页面的`HTML`部分中定义`HTML5` 视频元素。
2. 在`JavaScript`中创建`MediaSource`对象。
3. 使用`createObjectURL`创建虚拟`URL` ，并将`MediaSource`对象作为源。
4. 将虚拟`URL`分配给`video`元素的`src`属性。
5. 使用`addSourceBuffer`创建一个`SourceBuffer`，使用您要添加的视频的`mime`类型。
6. 从媒体获取文件中的视频初始化段网上，并将其添加到`SourceBuffer`与`appendBuffer`。
7. 获取视频数据的段从媒体文件，将它们添加到`SourceBuffer`与`appendBuffer`。
8. 在视频元素上调用`play`方法。

实现的代码如下：

```HTML
<video id="video" controls="controls">
    抱歉您的浏览器不支持H5视频
</video>
<script>
    let video = document.querySelector('#video')

    //创建 media source (使用`createObjectURL`创建虚拟`URL` ，并将`MediaSource`对象作为源。)
    let mediaSource = new MediaSource()
    video.src = URL.createObjectURL(mediaSource)
    // 设置 媒体的编码类型
    let mimeCodec = 'video/webm; codecs="vorbis, vp8"';
    // let isItSupported = MediaSource.isTypeSupported(mimeCodec);
     // 返回值为 Boolean, isItSupported 可以判断浏览器是否支持某个视频类型

    mediaSource.addEventListener('sourceopen', sourceOpen);
    function sourceOpen(e){
      //清除`createObjectURL`创建的对象并释放系统资源
        URL.revokeObjectURL(video.src);
        var sourceBuffer = this.addSourceBuffer(mimeCodec);
        // 请求视频资源
        fetch("./bhsj.webm").then(function(file){
                return file.arrayBuffer()
        }).then(function(aryBuf){
            console.log(aryBuf)
            sourceBuffer.appendBuffer(aryBuf);
        })
        sourceBuffer.addEventListener('updateend', function () {
            if(!sourceBuffer.updating && mediaSource.readyState === 'open'){
                mediaSource.endOfStream();
                video.play();
            }
        });
    }

</script>

```

通过代码我们可以看出，使用使用`createObjectURL`创建虚拟`URL`，将其赋值给`video.src`后这时`video`和`mediaSource`就已经连接起来了, 此时`createObjectURL`创建的对象也就没有用了，我们可以使用`URL.revokeObjectURL()` 来清除`createObjectURL`创建的对象并释放系统资源。

现在虽然`vidoe`元素与`Media Source`媒体对象已经连接了，但是还没有媒体资源，所以这里还是不能播放
[https://juejin.im/entry/5a90f40bf265da4e9d224879](https://juejin.im/entry/5a90f40bf265da4e9d224879)

## 推荐文章

- [构建一个简单的MPEG-DASH流媒体播放器](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn551368(v=vs.85)#feeding-the-buffer)



1，RTMP协议直播源
香港卫视：rtmp://live.hkstv.hk.lxdns.com/live/hks

2，RTSP协议直播源
珠海过澳门大厅摄像头监控：rtsp://218.204.223.237:554/live/1/66251FC11353191F/e7ooqwcfbqjoo80j.sdp
大熊兔（点播）：rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov

3，HTTP协议直播源
香港卫视：http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8
CCTV1高清：http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
CCTV3高清：http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
CCTV5高清：http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8
CCTV5+高清：http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8
CCTV6高清：http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8
苹果提供的测试源（点播）：http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear2/prog_index.m3u8

原文地址：https://blog.csdn.net/robinson_911/article/details/78805200

作者：幻想无极
链接：https://www.jianshu.com/p/14f8145763e4
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。