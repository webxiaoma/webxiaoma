---
meta:
  - name: keywords
    content: 马新想 小马学习 english 英语  音标 发音
  - name: description
    content: 本章为小马学习专栏—— 英语中音标的发音
---

# 英语读音-音标

[[toc]]

:horse: 


## 音标读音

下面音标列举了国际音标`IPA`和美音`K.K`

<table>
	<tr>
	    <th>IPA</th>
	    <th>K.K</th>
	    <th>口型</th>  
	    <th width="350">说明与例子</th>  
	    <th>类型</th>  
	</tr>
	<tr  v-for="(item,index) in list">
	    <td><En :readUrl="item.readIpaUrl">{{item.ipa}}</En></td>
	    <td><En :readUrl="item.readKKUrl">{{item.kk}}</En></td>
	    <td>{{item.mouthpiece}}</td>
	    <td>{{item.example}}</td>
	    <td>{{item.type}}</td>
	</tr>
</table>




## 音标对应单词

 



## 英文字母读音



**参考链接**

- [IPA&KK 音标对照表](https://wenku.baidu.com/view/b89e753d580216fc700afd22.html)

- [美式音标(KK音标)在线发音课程](https://en-yinbiao.xiao84.com/KK/)

<script>

export default {
	data(){
		return {
			list:[{
              ipa:"i:",
			  readIpaUrl:"",
              kk:"i",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk01.mp3",
			  mouthpiece:"紧，长衣，↘，面带微笑",
			  example:"e, ee, ea, ie,y me, sea, piece, bee,lady",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ı",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk02.mp3",
			  mouthpiece:"轻，短衣，↘，唇微张开",
			  example:"i, y, esit, happy, decide ",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"e",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk03.mp3",
			  mouthpiece:"口由半开到合 嘴角咧到耳朵",
			  example:"a, ay, ea, ey, ai,eigh",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɛ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk04.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"æ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk05.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɑ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk06.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"o",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk07.mp3",
			  mouthpiece:"",
			  example:"",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɔ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk08.mp3",
			  mouthpiece:"紧，长喔，←，唇小圆突",
			  example:"au,ou, al, aw,，author,call,law,bought",
              type:"元音",
			},{
              ipa:"u:",
			  readIpaUrl:"",
              kk:"u",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk09.mp3",
			  mouthpiece:"紧，长乌，←，圆唇外突",
			  example:"oo, o, ue, ui,ew  flew ，cool, fruit, true, do ",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ʊ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk10.mp3",
			  mouthpiece:"轻，短乌，←，稍圆且松",
			  example:"oo, ou, o, u ，look, could, put, wolf",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ʌ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk11.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ə",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk12.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɚ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk13.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɝ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk14.mp3",
			  mouthpiece:"重读“儿”音,一开始就卷舌 ",
			  example:"ir, ur, ear, or，bird, turn, learn, work",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"aɪ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk15.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"aʊ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk16.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ɔɪ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk17.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},
			
			// 辅音
			{
              ipa:"",
			  readIpaUrl:"",
              kk:"p",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk18.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"b",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk19.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"t",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk20.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"d",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk21.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"k",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk24.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"g",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk25.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"f",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk26.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"v",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk27.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"s",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk28.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"z",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk29.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"θ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk30.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ð",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk31.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ʃ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk32.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ʒ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk33.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"tʃ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk35.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"dʒ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk36.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"l",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk38.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"r",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk40.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"m",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk43.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"n",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk45.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"ŋ",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk46.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"j",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk47.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"w",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk48.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"h",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk49.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk42.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk43.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			}]
		}
	}
}

</script>

<style>
th, td{
	padding:0.2em 0.4em;
}
</style>