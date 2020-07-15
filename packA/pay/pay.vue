<template>
	<view class="container">
		<view class="top">
			<view class="address" @click="toAddress">
				<view class="left">
					<view style="font-size: 24upx">
						{{address||'暂未获取到收货地址'}}
					</view>
					<view style="font-size: 40upx;font-weight: 600;">
						{{address||'请新建收获地址'}}
					</view>
				</view>
				<view class="right">
					<text class="grace-icons icon-arrow-right"></text>
				</view>
			</view>
			<view class="way">
				<view class="">
					配送方式
				</view>
				<view class="">
					快递
				</view>
			</view>
		</view>
		<view class="content">
			<view class="header">
				<text class="grace-icons icon-home"></text>
				<text style="margin-left: 20upx;">NaberCat 宠物用品商城</text>
			</view>
			<view class="goodsbox">
				<view class="goods-item">
					<view class="left"><image src="https://img.yzcdn.cn/upload_files/2019/05/09/FmB8jgkoetDaiqj9NR1D6tBrk3Km.jpg" mode="widthFix"></image></view>
					<view class="right">
						<view class="title">新西兰进口K9 Natural冻干全犬粮500g 生食狗主粮、还原狗狗肉食天性、高消化高吸收</view>
						<view class="size">牛肉500g</view>
						<view class="price">
							￥
							<text style="font-size:30upx ;">318.00</text>
							<text style="font-size: 24upx; color: #E9E9E9;float: right;">x1</text>
						</view>
					</view>
				</view>
				<view class="tips">
					<text class="nums">共xx件</text>
					<text>
						商品小计：
						<text style="color: red;font-size: 24upx;">
							￥
							<text style="font-size:30upx ;">318元</text>
						</text>
					</text>
				</view>
			</view>
		</view>
		<view class="leave">
			<view class="form-item">
				<text class="form-title">卖家留言</text>
				<view class="grace-form-body" ><textarea class="grace-textarea" value="" placeholder="留言建议提前协商(50字以内)" /></view>
			</view>
		</view>
		<view class="bottom">
			<view class="box">
				
			<view class="total">
				应付:
				<text style="color: red;font-size: 24upx;">
					￥
					<text style="font-size:30upx ;">318元</text>
				</text>
			</view>
			<view class="submit">
				<view><button  class="grace-button" style="border-radius: 50upx;background: #E55D52;color: #fff;" :loading="status" @click="submit()">提交订单</button></view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			status:false
		};
	},
	onLoad() {},
	methods: {
		submit(){
			this.status = true
			uni.showToast({
				title:'支付中',
				icon:'none',
				duration:1500
			})
			setTimeout(()=>{
				
				this.status=false
			},1500)
		},
		toAddress(){
			uni.navigateTo({
				url:'../address/address'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	padding: 20upx;
	> view {
		border-radius: 18upx;
		background: #fff;
		margin-bottom: 20upx;
		padding: 20upx;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
	}
}
.top{
	.address{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #fafafa;
		padding: 40upx 0;
	}
	.way{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 0;
	}
}
.content{
	.header{
		border-bottom: 1px solid #fafafa;
		padding: 10upx 0;
		
	}
	.goodsbox{
		margin: 10upx 0;
		.goods-item{
			margin: 10upx 0;
			display: flex;
			align-items: center;
			.left{
				width: 196upx;
				margin-right: 16upx;
				image{
					width: 100%;
				}
			}
			.right{
				flex:1;
				.title{
					
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.size{
					color: #999;
					margin: 10upx 0;
				}
				.price{
					
				}
			}
		}
		.tips{
			text-align: right;
			.nums{
				color: #999;
				margin-right: 10upx;
			}
		}
	}
}
.leave{
	.form-item{
		display: flex;
		.form-title{
			display: block;
			width: 130rpx;
			font-size: 28rpx;
			-webkit-flex-shrink: 0;
			flex-shrink: 0;
			overflow: hidden;
			color: #888888;

		}
	}
}
.bottom{
	border: none;
	border-radius: 0 !important;
	position: fixed;
	margin-bottom: 0 !important;
	bottom: 0;
	left: 0;
	
	width: 100%;
	padding: 0 !important;
	.box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx;
	}
	.submit{
		width: 260upx;
	}
}
</style>
