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
    抱歉您的浏览器不支持H5视7频
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

[MediaSource API](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource) 扩展了视频的处理，使js生成流媒体成为了可能。下面我们来简单的使用一下`MediaSource API`


### 使用方法

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
    

    //绑定到媒体元素后开始触发
    mediaSource.addEventListener('sourceopen', sourceOpen);
    function sourceOpen(e){
      //清除`createObjectURL`创建的对象并释放系统资源
        URL.revokeObjectURL(video.src);

        //创建`SourceBuffer`给定MIME类型的新内容并将其添加到  MediaSource.sourceBuffers列表中
        var sourceBuffer = this.addSourceBuffer(mimeCodec);
        // 请求视频资源
        fetch("./bhsj.webm").then(function(file){
                return file.arrayBuffer()
        }).then(function(aryBuf){
            sourceBuffer.appendBuffer(aryBuf);
        })
        sourceBuffer.addEventListener('updateend', function () {
            //
            if(!sourceBuffer.updating && mediaSource.readyState === 'open'){
                mediaSource.endOfStream();
                video.play();
            }
        });
    }

</script>

```

通过代码我们可以看出，使用使用`createObjectURL`创建虚拟`URL`，将其赋值给`video.src`后这时`video`和`mediaSource`就已经连接起来了, 此时`createObjectURL`创建的对象也就没有用了，我们可以使用`URL.revokeObjectURL()` 来清除`createObjectURL`创建的对象并释放系统资源。
```js
let video = document.querySelector('#video')
//创建 media source (使用`createObjectURL`创建虚拟`URL` ，并将`MediaSource`对象作为源。)
let mediaSource = new MediaSource()
video.src = URL.createObjectURL(mediaSource)

```

现在虽然`vidoe`元素与`Media Source`媒体对象已经连接了，但是还没有媒体资源，所以这里还是不能播放，我们需要将视频资源添加到媒体`mediaSource`实例中。这里就要提到`Media Source Extensions`支持的几种事件

- `onsourceopen` 绑定到媒体元素后开始触发
- `onsourceclosed` 未绑定到媒体元素后开始触发
- `onsourceended` 所有数据接收完成后触发

同时`Media Source Extensions`实例上还有几个属性

- `sourceBuffers` 返回一个`SourceBufferList`对象，其中包含`SourceBuffer`与此关联的对象列表MediaSource。
- `activeSourceBuffers` 返回`SourceBufferList`包含其中包含的对象子集的  `SourceBuffer`对象`MediaSource.sourceBuffers` 提供所选视频轨道的对象列表，启用的音频轨道以及显示/隐藏的文本轨道。
- `readyState` 返回表示当前状态的枚举`MediaSource`，无论它当前是否附加到媒体元素（`closed`），附加并准备接收SourceBuffer对象（`open`）或附加但是流已通过`MediaSource.endOfStream()`（`ended`。）结束
- `duration` 获取并设置当前媒体的持续时间。

这里需要知道的是在`readyState` 属性有三个值，如下：

- `open` 已经绑定到了媒体元素上，等待接受数据或者正在接受数据
- `closed`未绑定到了媒体元素上
- `ended`已经绑定到了媒体元素上, 并且所有数据都已经接受到了

另外`Media Source Extensions`实例上还有几个方法

- `addSourceBuffer()` 创建`SourceBuffer`给定MIME类型的新内容并将其添加到`MediaSource.sourceBuffers`列表中。
- `endOfStream()` 表示流的结尾。
- `removeSourceBuffer()` 删除`MediaSource.sourceBuffers`列表中给定的`SourceBuffer`。


在我们请求媒体资源并添加到`MediaSource` 实例时我们需要先设定音频和视频的编码格式：

```js
  // 设置编码格式
  let mimeCodec = 'video/webm; codecs="vorbis, vp8"';
    //绑定到媒体元素后开始触发
    mediaSource.addEventListener('sourceopen', sourceOpen);
    function sourceOpen(e){
        //创建`SourceBuffer`给定MIME类型的新内容并将其添加到  MediaSource.sourceBuffers列表中
        var sourceBuffer = this.addSourceBuffer(mimeCodec);
    }
```

关于MIM视频编码格式：

1. webm格式的视频编码格式一般设置为`video/webm; codecs="vorbis, vp8"`
2. mp4格式的视频编码格式有很多，列如`video/mp4; codecs="avc1.42E01E, mp4a.40.2"`，（mp4格式的视频我在进行编码时我这边没有成功）

编码格式设置好后我们需要请求视频资源了, 我们请求下来的视频流喂给`vidoe`，喂给`video`后会触发`sourceBuffer`的`updateend`事件，在该事件中我们需要调用`mediaSource`的`endOfStream()`方法，来改变`MediaSource.readyState` 为 `ended` 并且触发 `sourceended` 事件。

```js
 //绑定到媒体元素后开始触发
mediaSource.addEventListener('sourceopen', sourceOpen);
function sourceOpen(e){
    //清除`createObjectURL`创建的对象并释放系统资源
    URL.revokeObjectURL(video.src);

    //创建`SourceBuffer`给定MIME类型的新内容并将其添加到  MediaSource.sourceBuffers列表中
    var sourceBuffer = this.addSourceBuffer(mimeCodec);
    // 请求视频资源
    fetch("./bhsj.webm").then(function(file){
            return file.arrayBuffer()
    }).then(function(aryBuf){
        //通过appendBuffe 方法将视频流喂给video
        sourceBuffer.appendBuffer(aryBuf);
    })
    sourceBuffer.addEventListener('updateend', function () {
        if(!sourceBuffer.updating && mediaSource.readyState === 'open'){
            mediaSource.endOfStream();
            video.play();
        }
    });
}
```
:::tip 提示
我们可以使用`appendBuffer`方法向``sourceBuffer`中添加多个视频了流，来持续进行视频播放（或直播流），在添加多个视频流时我们需要监听`SourceBuffer` 上的 `updateend` 事件，确定空闲后，再加入新的视频流
```js
sourceBuffer.addEventListener('updateend', () => {
    // 先设定新流加入的位置，比如第120秒处
    sourceBuffer.timestampOffset = 120
    // 然后加入新视频流
    sourceBuffer.append(newBuffer)
}
```
:::


### 实例

下面我们来看看使用`Media Source Extensions`的一些小练习[GitHub仓库练习](https://github.com/webxiaoma/JavaScript-demos/tree/master/HTML5/video/video-api.html), 需要注意的是该例子需要请求视频资源（格式为webpm），请求时间可能受网络影响，同时，该视频使用`fetch` 方法做的请求，请检查你的浏览器是否支持`fetch api`。

<iframe width="700" height="300" allowfullscreen style="border:0;" src="https://webxiaoma.github.io/JavaScript-demos/HTML5/video/video-api.html">
</iframe>


## 直播流

1. **RTMP协议直播源**
- 香港卫视：rtmp://live.hkstv.hk.lxdns.com/live/hks

2. **RTSP协议直播源**
- 珠海过澳门大厅摄像头监控：rtsp://218.204.223.237:554/live/1/66251FC11353191F/e7ooqwcfbqjoo80j.sdp
- 大熊兔（点播）：rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov

3. **HTTP协议直播源**
- 香港卫视：http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8
- CCTV1高清：http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
- CCTV3高清：http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
- CCTV5高清：http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8
- CCTV5+高清：http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8
- CCTV6高清：http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8
- 苹果提供的测试源（点播）：http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear2/prog_index.m3u8

