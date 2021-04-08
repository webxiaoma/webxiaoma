<template>
	<view class="content">
		<web-view
			class="webView"
			src="https://webxiaoma.gitee.io/webxiaoma/"
			@message="pushMessage"
		></web-view>
	</view>
</template>
<!-- src="https://webxiaoma.gitee.io/webxiaoma/" -->
<script>
	export default {
		data() {
			return {
				webviewH5:null
			}
		},
		onLoad() {
		},
		onBackPress(e){
			this.sendH5Msg();  
		},
		methods: {
			sendH5Msg(){
				var currentWebview = this.$mp.page.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()
				this.webviewH5 = currentWebview.children()[0]
				this.webviewH5.evalJS("$getBack()")
			},
			pushMessage(obj){ // 消息推送
				
			}

		}
	}
</script>

<style lang="less">
.content {
	background-color: #fff;
}
</style>
