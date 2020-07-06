<template>
	<gracePage :customHeader="false">
		<!-- 	<view slot="gHeader" class="grace-header-body">
					<view class="grace-header-content grace-flex-center">自定义头部导航</view>
				</view> -->
		<!-- 页面主体 -->
		<view slot="gBody">
			<!-- 被禁用的 input -->
			<view style="padding:30rpx; background-color:#F6F7F8;"><graceSearch :disabled="true" @tapme="tapme"></graceSearch></view>
			<view>
				
				<graceSwiper :swiperItems="swiperItems" :width="750" :padding="50" :indicatorWidth="38" :indicatorHeight="10" :indicatorActiveWidth="38" :indicatorRadius="0" :height="315"></graceSwiper>
			</view>
			
			<view class="navTab">
				<view class="navItem" v-for="v in 10">
					<image class="grace-grids-icon-img img" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
					<text class="grace-grids-text">文字</text>
				</view>
			</view>
			<view class="grace-title ">
				<image src="../../static/imgs/foods.png" style="width: 100%;" mode="widthFix"></image>
			</view>
			<view class="itemBox">
				<view class="item" v-for="v in 6" :key='v'>
					<view class="pic">
						<image src="https://img.yzcdn.cn/upload_files/2020/03/18/FvVMEMqsT1JiCUhZxdWVci6adNn_.jpg" mode="widthFix"></image>
					</view>
					<view class="memo">
						
    NOW无谷小型犬四叶草全龄粮6磅/12磅/25磅 泰迪比熊去泪痕狗粮 加拿大进口
  
					</view>
					<view class="price">
						￥269
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
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/2.png',
					url: '',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/3.png',
					url: '',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/4.png',
					url: '',
					opentype: 'navigate'
				},
				{
					img: 'https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/5.png',
					url: '',
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
<style scoped>
	view{
		font-size: 24upx !important;
	}
</style>
<style lang="less" scoped>
	// .grace-swiper-card{
	// 	margin: 0 auto;
	// }
	
	.img{
		border-radius: 50%;
		margin: 0 auto;
	}
	page{
		background: #f8f8f8;
	}
	.navTab{
		width: 100%;
		padding: 20upx 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		.navItem{
			width: 19%;
			display: flex;
			flex-direction: column;
			text-align: center;
		}
	}
	.itemBox{
			padding: 10upx 20upx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			
			justify-content: space-around;
			.item{
				width: 30%;
				font-size: 24upx !important;
				margin: 20upx 0;
				.pic{
					width: 100%;
					image{
						width: 100%;
					}
				}
				.memo{
					width: 90%;
					margin: 20upx 0;
					    overflow : hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					
				}
				.price{
					color: red;
				}
			}
	}
</style>
