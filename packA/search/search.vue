<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody">
			<!-- 搜索组件宽度自适应于外层 -->
			<view style="padding:25rpx 50rpx; background:#F5F6F7">
				<graceSearch @inputting="inputting" @confirm="confirm" :kwd="searchKey"></graceSearch>
			</view>
			<view class="grace-body">
				<view v-if="searchKeyHistory.length > 0">
					<view class="grace-title" style="margin-top:15rpx;">
						<text class="grace-title-text grace-black">搜索历史</text>
						<text class="grace-text-small grace-gray grace-icons icon-remove" @tap="removeAll">清空</text>
					</view>
					<view class="grace-search-tags grace-wrap">
						<view v-for="(item, index) in searchKeyHistory" :key="index" :data-key="item" class="grace-search-tags-items" @tap="setKey">{{item}}</view>
					</view>
				</view>
				<view class="grace-title" style="margin-top:15rpx;">
					<text class="grace-title-text grace-black">热门搜索</text>
				</view>
				<view class="grace-search-tags grace-wrap">
					<view v-for="(item, index) in HotKeyHistory" :key="index" :data-key="item" class="grace-search-tags-items" @tap="setKey">{{item}}</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceSearch from "../../graceUI/components/graceSearch.vue";
export default {
	data() {
		return {
			searchKey : "",
			searchKeyHistory : [ 'GraceUI', '测试', '关键字', '类型' ],
			HotKeyHistory : [ 'GraceUI', '手机', '小米', 'iphone X']
		}
	},
	onLoad:function(){},
	methods:{
		inputting : function(e){
			console.log(e);
		},
		confirm : function (e) {
			console.log(e);
		},
		setKey : function(e){
			var key = e.currentTarget.dataset.key;
			uni.showToast({
				title : '开始搜索 ' + key,
				icon  : "none"
			});
			this.searchKey = key;
		},
		removeAll : function(){
			this.searchKeyHistory = [];
		}
	},
	components:{
		gracePage, graceSearch
	}
}
</script>
<style>
.grace-search-tags{padding:10rpx 0;}
.grace-search-tags-items{padding:5rpx 20rpx; border-radius:30rpx; margin-right:15rpx; margin-bottom:15rpx; font-size:24rpx; line-height:40rpx; border-width:1px; border-style:solid; border-color:#F1F1F1; color:#A5A7B2; font-size:26rpx;}
</style>