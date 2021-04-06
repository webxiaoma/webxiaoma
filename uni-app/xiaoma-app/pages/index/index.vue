<template>
	<view class="content">
		<web-view
		   :style="{marginTop}"
	     	class="webView"
			src="http://localhost:5555/webxiaoma/"
		></web-view>
	</view>
</template>
<!-- src="https://webxiaoma.gitee.io/webxiaoma/" -->
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
						console.log(1111,this.marginTop)
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
