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

<iframe width="700" height="500" style="border:0;" src="https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio.html">
</iframe>


## Audio Web API

`Audio Web API` 是`h5`提供的一些处理音频的接口，它和`audio`标签并不是同样的东西。只不过`audio`底层用到了一些`Audio Web API`, `Audio Web API`提供了非常多的接口，这里我们只讲解部分，目的是了解一下该功能，如果你想深入研究可以查看[Web Audio API MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API#)，另外你可以[点击这里](https://caniuse.com/#search=Audio%20API)查看`Audio Web API` 目前的兼容性。


### 认识Audio Web API

`Audio Web API`和h5 `audio` 标签的最大区别就是它不需要任何的音频文件，凭借js代码就可以产生声音，并且可以获取音频进行处理，除此之外还可以做这些：

- 处理音效，如实现混音，低音，颗粒音效
- 控制音频的音量
- 实现音乐的分割截取
- 制作3D游戏音效

等等，类似音频编辑类的软件功能。

### Web Audio流程

一个简单的`Web Audio`流程大致如下
::: tip
1. 创建音频上下文
2. 在音频上下文里创建源 — 例如 `<audio>`, 振荡器, 流
3. 创建效果节点，例如混响、双二阶滤波器、平移、压缩
4. 为音频选择一个目地，例如你的系统扬声器
5. 连接源到效果器，对目的地进行效果输出
:::

### 创建音频上下文

`AudioContext`会生成一个音频上下文，我们的所有音频操作都是在这个上下文上去进行的，它类似与`canvas`中的`canvas.getContext`。这个上下文上有很多的属性，常见的属性方法如下： 更多属性方法[AudioContext
](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext)


**属性：**
- `AudioContext.currentTime` 返回硬件调用的秒数，`AudioContext`一创建就从0开始走，无法停掉、暂停或者重置。
- `AudioContext.listener` 返回`AudioListener`对象，用于3D音频空间化。
- `AudioContext.destination` 返回`AudioDestinationNode`对象，表示当前`audio context`中所有节点的最终节点，一般表示音频渲染设备。


**方法：**
- `AudioContext.createOscillator()` 创建一个振荡器（音调调节器）
- `AudioContext.createMediaElementSource()` 创建一个接口处理`<audio>` 或`<video>` 元素的音频
- `AudioContext.createMediaStreamSource()` 创建一个接口处理摄像头或麦克风的音频
- `AudioContext.createBuffer()`创建一个空的`AudioBuffer`对象, 并且能够通过`AudioBufferSourceNode`来进行数据填充和播放.
- `AudioContext.createBufferSource()`创建一个 `AudioBufferSourceNode` 对象, 他可以通过`AudioBuffer`对象来播放和处理包含在内的音频数据. `AudioBuffer`可以通过`AudioContext.createBuffer`方法创建或者使用`AudioContext.decodeAudioData`方法解码音轨来创建。
- `AudioContext.createGain()` 创建一个`GainNode`,它可以控制音频的总音量
- `AudioContext.createAnalyser()` 返回音频时间和频率数据，可用在数据可视化上
- `AudioContext.close()` 关闭一个音频环境, 释放任何正在使用系统资源的音频。

```js
// 创建音频上下文
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
```

### 处理音效

处理音效我们需要创建一个音频振荡器`createOscillator()`，它返回一个`OscillatorNode`模块对象接口(音调控制对象)，这个模块会对一个指定频率将创建的给定波产生影响, 一个恒定的音调。具体用法[可以看这里](https://developer.mozilla.org/zh-CN/docs/Web/API/OscillatorNode)

**属性：**

- `OscillatorNode.frequency` 存储振动频率信息，可以通过
- `OscillatorNode.frequency.value = 100` 来设置频率（单为赫兹）
- `OscillatorNode.detune`振动的音高微调单位是cent音分）默认值是0。
- `OscillatorNode.type`一个字符串设置波形，决定 `OscillatorNode` 播放的声音的周期波形; 它的值可以是基础值中的一个或者用户使用 `PeriodicWave`。不同的波形可以产生不同的声调。 基础值有 "sine", "square", "sawtooth", "triangle" and "custom". 默认值是"sine"。默认的波形有如下（图片来自[张鑫旭](https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/)）

![](http://webxiaoma/img/audio.png)

**方法：**

- `OscillatorNode.setPeriodicWave()`设置一个`PeriodicWave` ,它描述了一个周期的波形常常替代标准波形之一; 调用这个方法来设置用户自定义的波形。


```js
// 创建振荡器
var oscillator = audioContext.createOscillator(); 
```

### 处理音量

处理声音我们需要使用`AudioContext.createGain()`，该方法返回一个`GainNode`对象。该方法常用的属性和方法如下：更多方法访问[createGain api](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain)

**属性**

- `ainNode.gain` 一个`a-rate`类型的[AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam)，该属性下面有很多处理音量的方法和属性


**方法** 

很多在`gain`属性上，更多方法访问[AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam)
- `gainNode.gain.setValueAtTime(0, audioContext.currentTime)` 将当前音量设置为0
- `gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01)` 0.01秒时间内音量从刚刚的0变成0.5，线性变化(声音会淡入淡出的感觉)
- `gainNode.gain.exponentialRampToValueAtTime(0.01 , audioCtx.currentTime + 1)` 1秒内将声音降低到 0.01

```js
// 创建音量器
var gainNode = audioContext.createGain(); 
```

### 开始暂停

想要实现最简单的声音合成我们还要使用下面方法：

- `oscillator.connect(gainNode)` 音调和音量关联起来，使用`disconnect`可以断开连接
- `gainNode.connect(AudioContext.destination)` 音量和设备关联起来，使用`disconnect`可以断开连接 
- `oscillator.start(AudioContext.currentTime)` 播放音频
- `oscillator.stop(AudioContext.currentTime + 1)` 1秒后暂停播放



下面我们就可以实现一个很简单的音频：

```js
//创建音频接口上下文
var audioCtx = new (AudioContext || webkitAudioContext)();
// 创建音调节器(振荡器)
var oscillator = audioCtx.createOscillator(); 
//设置波形，可选值：'square','triangle','sawtooth','sine'
oscillator.type = 'triangle'; 
oscillator.frequency.value = 180;    //设置频率
/***创建音量控制节点**/
var gainNode = audioCtx.createGain();   
// 先把当前音量设为0  
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
// 3秒时间内音量从刚刚的0变成0.5，线性变化  
gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 3);
/***  将音量链接到振荡器  ***/
oscillator.connect(gainNode);
/*** 将音量与设备关联 ***/
gainNode.connect(audioCtx.destination);
/*** 开始播放声音 ***/
oscillator.start(audioCtx.currentTime);
// 10秒后停止声音 
oscillator.stop(audioCtx.currentTime + 10);
```

### 处理音乐文件


### 获取频率信息

我们可以通过`AudioContext.createAnalyser()`方法来创建一个[AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)获取音频时间和频率上的一些信息，知道这些信息后我们就可以做一些类似音乐可视化的需求。[createAnalyser API](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser)

**属性**

- `AnalyserNode.fftSize` 是无符号长值，表示用于确定频域的FFT（快速傅立叶变换）的大小。
- `AnalyserNode.frequencyBinCount` 无符号长整数值是FFT大小的一半，这通常等于您可以为可视化使用的数据值的数量。

**方法**

- `AnalyserNode.getFloatFrequencyData()`将当前频率数据复制到传入其中的`Float32Array`数组中。
- `AnalyserNode.getByteFrequencyData()`将当前频率数据复制到传入其中的`Uint8Array`（无符号字节数组）
- `AnalyserNode.getFloatTimeDomainData()`将当前波形或时域数据复制到传入其中的`Float32Array`数组中。
- `AnalyserNode.getByteTimeDomainData()` 将当前波形或时域数据复制到`Uint8Array`传递给它的（无符号字节数组）中。

:::tip 提示
在获取音频音量信息时，我们需要先将音频`AnalyserNode`对象链接到音频对象上，然后在将音量节点链接到`AnalyserNode`对象
- `musicSource.connect(analyser)` 将;
- `analyser.connect(gainNode)`;
:::
```js
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
var oscillator = audioCtx.createOscillator() //常见音频节点
var gainNode = audioCtx.createGain(); // 创建音量节点

oscillator.connect(analyser)
analyser.connect(gainNode)

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);
```






### 实例练习

下面我们来看看使用`Audio Web API`制作钢琴的练习[GitHub仓库练习](https://github.com/webxiaoma/JavaScript-demos/blob/master/HTML5/audio/audio-api.html)

<iframe width="810" height="520" style="border:0;" src="https://webxiaoma.github.io/JavaScript-demos/HTML5/audio/audio-api.html">
</iframe>



