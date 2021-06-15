---
meta:
  - name: keywords
    content: 马新想 小马学习 english 英语  音标 发音
  - name: description
    content: 本章为小马学习专栏—— 英语中音标的发音
---

# 英语读音-音标一

[[toc]]

:horse: 


## 音标读音

下面音标列举了英音`DJ`和美音`K.K`

<table>
	<tr>
	    <th>DJ</th>
	    <th>K.K</th>
	    <th>口型</th>  
	    <th width="350">说明与例子</th>  
	    <th  width="110">类型</th>  
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
              ipa:"/i:/",
			  readIpaUrl:"",
              kk:"/i/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk01.mp3",
			  mouthpiece:"紧，长衣，↘，面带微笑",
			  example:"e, ee, ea, ie,y me, sea, piece, bee,lady",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ı/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk02.mp3",
			  mouthpiece:"轻，短衣，↘，唇微张开",
			  example:"i, y, esit, happy, decide ",
              type:"元音",
			},{
              ipa:"/ei/",
			  readIpaUrl:"",
              kk:"/e/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk03.mp3",
			  mouthpiece:"口由半开到合 嘴角咧到耳朵",
			  example:"a, ay, ea, ey, ai,eigh",
              type:"元音",
			},{
              ipa:"/e/",
			  readIpaUrl:"",
              kk:"/ɛ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk04.mp3",
			  mouthpiece:"小开口45度音",
			  example:"e, a, ea,set, head, many",
            type:"元音",
			},{
              ipa:"/æ/",
			  readIpaUrl:"",
              kk:"/æ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk05.mp3",
			  mouthpiece:"紧，↘，嘴张大，嘴角向两边",
			  example:"a, fat",
            type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ɑ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk06.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"/ɔ/",
			  readIpaUrl:"",
              kk:"/ɔ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk08.mp3",
			  mouthpiece:"紧，长喔，←，唇小圆突",
			  example:"au,ou, al, aw,，author,call,law,bought",
              type:"元音",
			},{
              ipa:"/u:/",
			  readIpaUrl:"",
              kk:"/u/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk09.mp3",
			  mouthpiece:"紧，长乌，←，圆唇外突",
			  example:"oo, o, ue, ui,ew  flew ，cool, fruit, true, do ",
              type:"元音",
			},{
              ipa:"/u/",
			  readIpaUrl:"",
              kk:"/ʊ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk10.mp3",
			  mouthpiece:"轻，短乌，←，稍圆且松",
			  example:"oo, ou, o, u ，look, could, put, wolf",
              type:"元音",
			},{
              ipa:"/ʌ/",
			  readIpaUrl:"",
              kk:"/ʌ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk11.mp3",
			  mouthpiece:"轻 ↘ 短啊四声 唇微开向两边",
			  example:"u, o, ou, oo,luck,love,trouble,flood",
            type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ə/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk12.mp3",
			  mouthpiece:"轻读或弱读，“饿”音",
			  example:"u,ou,o,a,i album,ago, delicious, today,direct",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ɚ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk13.mp3",
			  mouthpiece:"轻读卷舌音，前舌由平向卷",
			  example:"er, or, ar, ur, pleasure,teacher, actor,dollar",
              type:"元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ɝ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk14.mp3",
			  mouthpiece:"重读“儿”音,一开始就卷舌 ",
			  example:"ir, ur, ear, or，bird, turn, learn, work",
              type:"元音",
			},{
              ipa:"/əu/",
			  readIpaUrl:"",
              kk:"/o/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk07.mp3",
			  mouthpiece:"口形由半开到小，发“呕”音 ",
			  example:"o, ow, oa,oe no, know, boat,toe",
            type:"双元音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/aɪ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk15.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/aʊ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk16.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ɔɪ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk17.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},
			
			// 辅音
			{
              ipa:"/p/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk18.mp3",
              kk:"/p/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk18.mp3",
			  mouthpiece:"气流冲破紧闭的双唇且无声",
			  example:"p pen bag",
            type:"浊辅音(爆破)",
			},{
              ipa:"/b/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk19.mp3",
              kk:"/b/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk19.mp3",
			  mouthpiece:"气流冲破紧闭的双唇声带震动",
			  example:"b bite",
            type:"浊辅音(爆破)",
			},{
              ipa:"/t/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk20.mp3",
              kk:"/t/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk20.mp3",
			  mouthpiece:"舌尖抵上齿龈弹开舌头且无声",
			  example:"t, tw,tear, fit, two",
            type:"浊辅音(爆破)",
			},{
              ipa:"/d/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk21.mp3",
              kk:"/d/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk21.mp3",
			  mouthpiece:"舌尖齿龈气音但声带必须震动",
			  example:"d,dark, afford ",
            type:"浊辅音(爆破)",
			},{
              ipa:"/k/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk24.mp3",
              kk:"/k/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk24.mp3",
			  mouthpiece:"舌后部抵住软腭突然离开无声",
			  example:"k,c,ch,ck,lk cock king, cake, school, box",
              type:"浊辅音(爆破)",
			},{
              ipa:"/g/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk25.mp3",
              kk:"/g/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk25.mp3",
			  mouthpiece:"舌后部抵住软腭突然离开无声 但声带必须震动",
			  example:"g gh girl词首发本音 词中不发音",
              type:"浊辅音(爆破)",
			},{
              ipa:"/f/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk26.mp3",
              kk:"/f/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk26.mp3",
			  mouthpiece:"上齿触下唇，气流从此出无声",
			  example:"f,ff,gh,ph,lf face,off,laugh, phone,shelf",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/v/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk27.mp3",
              kk:"/v/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk27.mp3",
			  mouthpiece:"同/f/,但声带必须震动",
			  example:"v view, cave",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/s/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk28.mp3",
              kk:"/s/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk28.mp3",
			  mouthpiece:"唇微微张开 舌近上齿才出气",
			  example:"s, c, ce, ss sick, ceilling, cell, kiss",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/z/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk29.mp3",
              kk:"/z/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk29.mp3",
			  mouthpiece:"同/s/,但声带必须震动",
			  example:"z, se, ze zoo, shoes, choose, size",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/θ/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk30.mp3",
              kk:"/θ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk30.mp3",
			  mouthpiece:"上下齿轻轻咬舌尖且吐气无声 ",
			  example:"th, thank, mouth",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/ð/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk31.mp3",
              kk:"/ð/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk31.mp3",
			  mouthpiece:"同/θ/,但声带必须震动",
			  example:"th, this, the, there",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/ʃ/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk32.mp3",
              kk:"/ʃ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk32.mp3",
			  mouthpiece:"唇收圆稍突 舌稍卷近舌无声",
			  example:"sh, ti, ci, s，si,ssi,sci  ship, motion, social, sure ",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/ʒ/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk33.mp3",
              kk:"/ʒ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk33.mp3",
			  mouthpiece:"同/θ/,但声带必须震动",
			  example:"si,g pleasure, usual,vision,rouge",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/tʃ/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk35.mp3",
              kk:"/tʃ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk35.mp3",
			  mouthpiece:"双唇微张突出 舌抵上龈且吐气无声",
			  example:"ch,t tch, church,nature, match",
              type:"浊辅音(破擦)",
			},{
              ipa:"/dʒ/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk36.mp3",
              kk:"/dʒ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk36.mp3",
			  mouthpiece:"同/tʃ/,但声带必须震",
			  example:"ge,dge d j g judge,education vegetable, join, joy",
              type:"浊辅音",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/l/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk38.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"/r/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk40.mp3",
              kk:"/r/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk40.mp3",
			  mouthpiece:"舌尖上卷，唇突，声带振动;元音后读儿",
			  example:"right, red",
              type:"浊辅音(摩擦)",
			},{
              ipa:"/m/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk43.mp3",
              kk:"/m/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk43.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"/n/",
			  readIpaUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk45.mp3",
              kk:"/n/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk45.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/ŋ/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk46.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/j/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk47.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/w/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk48.mp3",
			  mouthpiece:"",
			  example:"",
              type:"",
			},{
              ipa:"",
			  readIpaUrl:"",
              kk:"/h/",
			  readKKUrl:"http://i.xiao84.com/en-yinbiao/word-mp3/gotoabc/kk49.mp3",
			  mouthpiece:"嘴自然张开，呵气，无声",
			  example:"h, wh, hi, who",
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

<style scoped>
th, td{
	padding:0.2em 0.4em;
}
</style>