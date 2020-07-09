<template>
	<gracePage :isSwitchPage="true" :customHeader="false" style=";background: #f4f5f6;">
		<view slot="gBody" class="grace-body" style="padding:0;width: 100%">
			<view class="header">
				<view class="avatar"><image src="../../static/imgs/head.png" mode=""></image></view>
				<view class="userInfo">
					<view class="userPhone">GhostCat</view>
					<view><text class="tips">成长值0</text></view>
				</view>
				<view class="code">
					<text class="grace-icons icon-scancode"></text>
					会员码
				</view>
				<view class="level">
					<view class="name">
						<image src="https://b.yzcdn.cn/member-center/free-icon-1.png" style="width: 30upx;margin-right: 10upx;vertical-align: middle;" mode="widthFix"></image>
						NaberCat 宠物用品商城
					</view>
					<view class="toVip">
						成为会员
						<text class="grace-icons icon-arrow-right"></text>
					</view>
				</view>
			</view>
			<!-- <view class="ucenter-line"></view> -->
			<view class="outerbox"><graceBoxBanner :items="items"></graceBoxBanner></view>
			<!-- <view class="ucenter-line"></view> -->
			<view class="orderBox outerbox">
				<view class="title">
					<text style="font-weight: 600;">我的订单</text>
					<text style="float:right;font-size: 24upx;color: #999;" @click="toOrder">
						查看全部订单
						<text class="grace-icons icon-arrow-right"></text>
					</text>
				</view>
				<view class="content">
					<view class="item" @click="toOrder">
						<view class="img"><image src="https://b.yzcdn.cn/public_files/2019/04/28/1be3ce61d72286c7ac6e56fbb7d0735c.svg" mode="widthFix"></image></view>
						<view class="text">待付款</view>
					</view>

					<view class="item">
						<view class="img"><image src="https://b.yzcdn.cn/public_files/2019/04/28/72cc80f8b65eae45862cafe0d27e78f7.svg" mode="widthFix"></image></view>
						<view class="text">待发货</view>
					</view>
					<view class="item">
						<view class="img"><image src="https://b.yzcdn.cn/public_files/2019/04/28/d729a66ef2fe52dd47ae6998921b43fe.svg" mode="widthFix"></image></view>
						<view class="text">待收货</view>
					</view>
					<view class="item">
						<view class="img"><image src="https://b.yzcdn.cn/public_files/2019/04/28/a4a60cccd63f9d3ff476cb22f51146d7.svg" mode="widthFix"></image></view>
						<view class="text">评价</view>
					</view>
					<view class="item">
						<view class="img"><image src="https://b.yzcdn.cn/public_files/2019/04/28/15ed25836631717b7ff77266a1795328.svg" mode="widthFix"></image></view>
						<view class="text">售后/退款</view>
					</view>
				</view>
			</view>
			<!-- <view class="ucenter-line"></view> -->
			<view class="grace-list grace-margin-top outerbox">
				<view class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-shoppingcard" style="font-size: 28upx;color: #f9c67f;"></text>
					<view class="grace-list-body " style="margin: 0;" @click="toShopCar">
						<view class="grace-list-title"><text class="grace-list-title-text">购物车</text></view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</view>
			<!-- <view class="ucenter-line"></view> -->
			<view class="grace-list grace-margin-top outerbox">
				<view class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-set" style="font-size: 28upx;color: #f9c67f;"></text>
					<view class="grace-list-body " style="margin: 0;">
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
		toOrder() {
			uni.navigateTo({
				url: '../../packA/order/order'
			});
		},
		toShopCar() {
			uni.switchTab({
				url: '../car/car'
			});
		}
	},
	components: {
		gracePage,
		graceBoxBanner
	}
};
</script>
<style lang="less" scoped>
.outerbox {
	width: 90%;
	background: #fff;
	padding: 0 20upx;
	margin: 20rpx auto;

	border-radius: 20upx;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04);
}
.header {
	width: 100%;
	height: 300rpx;
	position: relative;
	display: flex;
	// background-image: url('https://img.yzcdn.cn/upload_files/2018/07/16/FtwPY7QwJLjqnDolIe5h0--Jyzmb.jpg');
	// background-size: 100% 100%;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	padding-top: 10%;
	.avatar {
		width: 120upx;
		height: 120upx;
		overflow: hidden;
		margin: 0 30rpx;
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
	.code {
		position: absolute;
		right: 40upx;
		top: 20upx;
		padding: 10upx 20upx;
		font-size: 24upx;
		border-radius: 40upx;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		text{
			margin-right:8upx;
		}
	}
	.userInfo {
		.userPhone {
			font-size: 40upx;
			font-weight: 700;
			margin-bottom: 20rpx;
			color:#fff;
		}
		.tips {
			border: 1px solid #171717;
			border-radius: 40upx;
			background-image: radial-gradient(circle at 2% 85%, #444039 0, #37332c 82%);
			padding: 4upx 16upx;
			color: #fddda5;
			font-size: 22upx;
			line-height: 32upx;
			letter-spacing: 0;
		}
	}
	.level {
		position: absolute;
		bottom: 0;
		left: 3%;
		width: 94%;
		height: 40px;
		color: #fff;
		border-radius: 8px 8px 0 0;
		box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: space-between;
		.name {
			align-self: flex-start;
			padding-left: 10px;
			overflow: hidden;
			font-size: 12px;
			line-height: 40px;
			white-space: nowrap;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			color: #ffdea0;
		}
		.toVip {
			padding-right: 10px;
			cursor: pointer;
			color: #fff;
			font-size: 24upx;
		}
	}
}
.orderBox {
	.title {
		padding: 30upx 0upx;
		border-bottom: 1px solid #f4f5f6;
	}
	.content {
		padding: 40upx 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.item {
			text-align: center;

			.img {
				width: 100%;
				image {
					width: 40upx;
				}
			}
			.text {
				font-size: 24upx;
				margin: 10upx 0;
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
