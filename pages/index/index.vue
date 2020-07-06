<template>
	<gracePage :customHeader="false">
		<!-- 	<view slot="gHeader" class="grace-header-body">
					<view class="grace-header-content grace-flex-center">自定义头部导航</view>
				</view> -->
		<!-- 页面主体 -->
		<view slot="gBody">
			<!-- 被禁用的 input -->
			<view style="padding:30rpx; background-color:#F6F7F8;"><graceSearch :disabled="true" @tapme="tapme"></graceSearch></view>
			<view><graceSwiper :swiperItems="swiperItems" :width="700" :height="315" :indicatorActiveWidth="38" @swiperchange="swiperchange"></graceSwiper></view>
			<view class="grace-title grace-margin-top">
				<view class="grace-title-border"></view>
				<text class="grace-title-text grace-blue">栏目导航</text>
			</view>
			<view class="grace-grids grace-margin-top eight">
				<view class="grace-grids-items" v-for="v in 8">
					<image class="grace-grids-icon-img" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
					<text class="grace-grids-text">文字</text>
				</view>
			</view>
			<view class="grace-title grace-margin-top">
				<view class="grace-title-border"></view>
				<text class="grace-title-text grace-blue">精选主粮</text>
					<text class="grace-text-small grace-gray">查看全部></text>
			</view>
			<view class="grace-img-card">
				<view class="grace-img-card-item" v-for="v in 6">
					<view class="grace-img-card-img">
						<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demoimgs/1.png" class="grace-img-card-img"></image>
						<text class="grace-tags grace-gtbg-purple grace-absolute-lt">HOT</text>
					</view>
					<text class="grace-img-card-title">标题文字</text>
					<view class="grace-img-card-more">
						<text class="grace-img-card-price">￥99.99</text>
						<text class="grace-img-card-btn">按钮</text>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import graceFlex from '../../graceUI/components/graceFlex.vue';
import graceSearch from '../../graceUI/components/graceSearch.vue';
var graceJS = require('@/Grace.JS/grace.js');
export default {
	data() {
		return {
			value1: '默认值',
			swiperItems: [
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/1.png',
					url: '',
					title: '测试标题 001',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/2.png',
					url: '',
					title: '测试标题 02',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/3.png',
					url: '',
					title: '测试标题很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/4.png',
					url: '',
					title: '测试标题04',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/5.png',
					url: '',
					title: '测试标题05',
					opentype: 'navigate'
				}
			]
		};
	},
	onLoad: function() {
		setTimeout(() => {
			this.value1 = '默认值变了...';
		}, 2000);
	},
	methods: {
		inputting: function(e) {
			console.log(e);
		},
		confirm: function(e) {
			console.log(e);
		},
		tapme: function() {
			console.log(111);
			graceJS.navigate('../../packA/search/search');
		},
		swiperchange(e) {
			console.log(e);
		}
	},
	components: {
		gracePage,
		graceFlex,
		graceSearch
	}
};
</script>
<style></style>
