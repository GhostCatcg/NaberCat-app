<template>
	<gracePage :isSwitchPage="true" :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="header">
				<view class="avatar"><image src="../../static/tabbar/me.png" mode=""></image></view>
				<view class="userInfo">
					<view class="userPhone">
						151****8165
					</view>
					<view>
						<text  class="tips">
						成长值0
						</text>
					</view>
				</view>
			</view>
			<view class="ucenter-line"></view>
			<view><graceBoxBanner :items="items"></graceBoxBanner></view>
			<view class="ucenter-line"></view>
			<view class="orderBox">
				<view class="title">
					<text style="font-weight: 600;">我的订单</text>
					<text style="float:right;font-size: 24upx;color: #999;" @click="toOrder">查看全部订单 > </text>
				</view>
				<view class="content">
					<view class="item" @click="toOrder">
						<view class="img">
							<image src="https://b.yzcdn.cn/public_files/2019/04/28/1be3ce61d72286c7ac6e56fbb7d0735c.svg" mode="widthFix"></image>
						</view>
						<view class="text">
							待付款
						</view>
					</view>
					
					<view class="item">
						<view class="img">
							<image src="https://b.yzcdn.cn/public_files/2019/04/28/72cc80f8b65eae45862cafe0d27e78f7.svg" mode="widthFix"></image>
						</view>
						<view class="text">
							待发货
						</view>
					</view>
					<view class="item">
						<view class="img">
							<image src="https://b.yzcdn.cn/public_files/2019/04/28/d729a66ef2fe52dd47ae6998921b43fe.svg" mode="widthFix"></image>
						</view>
						<view class="text">
							待收货
						</view>
					</view>
					<view class="item">
						<view class="img">
							<image src="https://b.yzcdn.cn/public_files/2019/04/28/a4a60cccd63f9d3ff476cb22f51146d7.svg" mode="widthFix"></image>
						</view>
						<view class="text">
							评价
						</view>
					</view>
					<view class="item">
						<view class="img">
							<image src="https://b.yzcdn.cn/public_files/2019/04/28/15ed25836631717b7ff77266a1795328.svg" mode="widthFix"></image>
						</view>
						<view class="text">
							售后/退款
						</view>
					</view>
				</view>
			</view>
				<view class="ucenter-line"></view>
			<view class="grace-list grace-margin-top">
				<view class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-shoppingcard grace-yellow"></text>
					<view class="grace-list-body " @click="toShopCar">
						<view class="grace-list-title"><text class="grace-list-title-text">购物车</text></view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
				
			</view>
			<view class="ucenter-line"></view>
			<view class="grace-list grace-margin-top">
				<view class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-set grace-yellow"></text>
					<view class="grace-list-body ">
						<view class="grace-list-title"><text class="grace-list-title-text">账户设置</text></view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
				
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import graceBoxBanner from '../../graceUI/components/graceBoxBanner.vue';
export default {
	data() {
		return {
			items: [[80, '', '积分'], [100, '', '优惠卷'], [50, '', '卡'], ['￥199', '', '余额']]
		};
	},
	methods: {
		toOrder(){
			uni.navigateTo({
				url:'../../packA/order/order'
			})
		},
		toShopCar(){
			uni.switchTab({
				url:'../car/car'
			})
		}
	},
	components: {
		gracePage,
		graceBoxBanner
	}
};
</script>
<style lang="less" scoped>
.header {
	width: 100%;
	height: 330rpx;

	display: flex;
	align-items: center;
	background-image: url('https://img.yzcdn.cn/upload_files/2018/07/16/FtwPY7QwJLjqnDolIe5h0--Jyzmb.jpg');
	background-size: 100% 100%;
	padding: 0 30upx;
	.avatar {
		width: 120upx;
		height: 120upx;
		overflow: hidden;
		margin-right: 35rpx;
		background: #f0f0f0;
		background-size: 120upx 120upx;
		border: 1px solid #fff;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		image {
			width: 100%;
			height: 100%;
		}
	}
	.userInfo{
		.userPhone{
			font-size: 40upx;
			font-weight: 700;
		}
		.tips{
			border: 1px solid #171717;
			    border-radius: 40upx;
				background-image: radial-gradient(circle at 2% 85%,#444039 0,#37332c 82%);
				    padding: 4upx 16upx;
				    color: #fddda5;
				    font-size: 22upx;
				    line-height: 32upx;
				    letter-spacing: 0;
		}
	}
}
.orderBox{
	.title{
		padding: 10upx 20upx;
		border-bottom: 1px solid #e7e7e7;
	}
	.content{
		padding: 40upx 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.item{
			text-align: center;
			.img{
				width: 100%;
				image{
					width: 50upx;
				}
			}
		}
	}
}
.ucenter-face {
	width: 100rpx !important;
	height: 100rpx !important;
}
.ucenter-face-image {
	width: 100rpx !important;
	height: 100rpx !important;
}
.ucenter-line {
	height: 12rpx;
	background-color: #f4f5f6;
	margin: 16rpx 0;
}
</style>
