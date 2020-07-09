<template>
	<gracePage style="background: #F6F7F8" :customHeader="false">
		<!-- 	<view slot="gHeader" class="grace-header-body">
					<view class="grace-header-content grace-flex-center">自定义头部导航</view>
				</view> -->
		<!-- 页面主体 -->
		<view slot="gBody">
			<!-- 被禁用的 input -->
			<view style="padding:30rpx; "><graceSearch :disabled="true" @tapme="tapme"></graceSearch></view>
			<view>
				<graceSwiper
					:swiperItems="swiperItems"
					:width="750"
					:padding="30"
					:indicatorWidth="30"
					:indicatorHeight="10"
					:indicatorActiveWidth="30"
					:indicatorRadius="10"
					interval="3000"
					indicator-active-color="#fb6962"
					:height="400"
				></graceSwiper>
			</view>

			<view class="navTab">
				<view class="navItem" v-for="(v, k) in navlist" :key="k">
					<image class="grace-grids-icon-img img" :src="v.url" style="width: 80upx;height: 80upx;" ></image>
					<text class="grace-grids-text">{{v.title}}</text>
				</view>
			</view>
			<view class="grace-title "><image src="../../static/imgs/foods.png" style="width: 100%;" mode="widthFix"></image></view>
			<view class="itemBox">
				<view class="item" v-for="v in 6" :key="v">
					<view class="pic"><image src="https://img.alicdn.com/imgextra/i3/2335305051/O1CN01FnNZIu1nBP3yqCzSJ_!!2335305051.jpg_430x430q90.jpg" mode="widthFix"></image></view>
					<view class="memo">petmaster佩玛思特幼猫粮2kg</view>
					<view class="price">￥128</view>
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
					img: 'https://img.yzcdn.cn/upload_files/2020/07/07/FnuQk3gh99SgCV9qda2Wz0zUjxH3.jpg',
					url: '',
					opentype: 'navigate'
				},
				// {
				// 	img: 'https://img.yzcdn.cn/upload_files/2020/07/07/FuN7BCI_eVDWMMowxx2ps6PPl2aT.jpg',
				// 	url: '',
				// 	opentype: 'navigate'
				// },
				{
					img: 'https://img.yzcdn.cn/upload_files/2020/06/10/Ft0swVNjhSC7BA-Bdex50LeUEVT2.jpg',
					url: '',
					opentype: 'navigate'
				},
				{
					img: 'https://img.yzcdn.cn/upload_files/2020/06/10/FsnHdHhXsf3PVGwuaF-zDDK3IN0G.jpg',
					url: '',
					opentype: 'navigate'
				},
				
			],
			navlist:[
				{
					title:'主粮',
					url:'../../static/imgs/zhushi.png'
				},	{
					title:'驱虫',
					url:'../../static/imgs/quchong.png'
				},	{
					title:'零食',
					url:'../../static/imgs/lingshi.png'
				},	{
					title:'保健',
					url:'../../static/imgs/baojian.png'
				},	{
					title:'日用',
					url:'../../static/imgs/riyong.png'
				},	{
					title:'户外牵引',
					url:'../../static/imgs/qianyin.png'
				},	{
					title:'玩具',
					url:'../../static/imgs/wanju.png'
				},	{
					title:'狗窝',
					url:'../../static/imgs/gou.png'
				},	{
					title:'猫咪专区',
					url:'../../static/imgs/mao.png'
				},	{
					title:'其他',
					url:'../../static/imgs/more.png'
				},
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
<style scoped>
view {
	font-size: 24upx !important;
}
</style>
<style lang="less" scoped>
// .grace-swiper-card{
// 	margin: 0 auto;
// }

.img {
	border-radius: 50%;
	margin: 0 auto;
}
page {
	background: #f8f8f8;
}
.navTab {
	width: 100%;
	padding: 20upx 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	.navItem {
		width: 19%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
}
.itemBox {
	padding: 10upx 20upx;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	justify-content: space-around;
	.item {
		width: 30%;
		font-size: 24upx !important;
		margin: 20upx 0;
		background: #fff;
		padding-bottom: 20upx;
		.pic {
			width: 100%;
			image {
				width: 100%;
			}
		}
		.memo {
			width: 90%;
			margin: 20upx 10upx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.price {
			margin: 10upx;
			color: red;
		}
	}
}
</style>
