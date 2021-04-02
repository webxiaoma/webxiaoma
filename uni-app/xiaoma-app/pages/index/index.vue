<template>
	<view class="content">
		<web-view
		   :style="{marginTop}"
	     	class="webView"
			src="https://webxiaoma.gitee.io/webxiaoma/"
		></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				marginTop:"10px"
			}
		},
		onLoad() {
           this.getStatusBarHeight()
		},
		onBackPress(e){
			
		},
		methods: {
			getStatusBarHeight() {
				let that = this;
				wx.getSystemInfo({
					success: function(res) {
						res.statusBarHeight; //这就是状态栏的高度
						this.marginTop = res.statusBarHeight +"px";
					},
				});
			},
		}
	}
</script>

<style lang="less">
.content {
	
}
</style>
