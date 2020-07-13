<template>
	<gracePage headerBG="#FFFFFF" :isSwitchPage="true" footerBg="#FFFFFF" :customHeader="false">
		<view slot="gBody" style="padding-bottom:120rpx;">
			<!-- 轮播图 -->
			<swiper
				class="grace-swiper"
				autoplay="true"
				indicator-dots
				circular
				indicator-color="rgba(255, 255, 255, 1)"
				indicator-active-color="#3688FF"
				style="height:750rpx"
				interval="5000"
			>
				<swiper-item class="grace-swiper-item" v-for="(item, index) in swiperItems" :key="index">
					<image :src="item" mode="widthFix" class="grace-swiper-image" @click="previewImage"></image>
				</swiper-item>
			</swiper>
			<!-- 商品标题 分享按钮 -->
			<view class="grace-product-padding grace-space-between grace-flex-vcenter">
				<text class="grace-product-title grace-bold">{{ product.name }}</text>
				<view class="grace-product-share" @tap="share"><text class="grace-icons icon-share3"></text></view>
			</view>
			<view class="grace-common-line"></view>
			<!-- 价格 -->
			<view class="grace-product-padding">
				<view class="grace-nowrap grace-flex-vcenter">
					<text class="grace-product-price">￥{{ product.price }}</text>
					<text class="grace-text grace-gray grace-line-through" style="margin-left:30rpx;">￥{{ product.priceMarket }}</text>
				</view>
				<view class="grace-space-between grace-flex-vcenter">
					<text class="grace-text-small grace-gray">运费 ￥0.00</text>
					<text class="grace-text-small grace-gray">已售 21008 件</text>
					<text class="grace-text-small grace-gray">浏览 36万次</text>
				</view>
			</view>
			<view class="grace-common-line"></view>
			<view class="grace-product-padding">
				<view class="grace-title grace-margin-top">
					<text class="grace-title-text" style="color:#FF7900">为你推荐</text>
					<text class="grace-text-small grace-gray" style="margin-right:8px;">
						<text class="grace-icons icon-refresh grace-green" style="margin-right:5px;"></text>
						换一批
					</text>
				</view>
				<view class="goodsbox">
					<view class="item" v-for="(v, k) in goodslist" :key="k">
						<view class="item-img">
							<image :src="v.url" class="grace-img-card-img"></image>
							<text class="grace-tags grace-gtbg-purple grace-absolute-lt">HOT</text>
						</view>
						<text class="item-title">{{ v.title }}</text>
						<view class="item-more">
							<text class="grace-img-card-price">￥{{ v.price }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="grace-common-line"></view>
			<!-- 底部信息切换导航 -->
			<view class="grace-product-padding">
				<graceNavBar
					:items="navItems"
					lineHeight="80rpx"
					:isCenter="true"
					:currentIndex="active"
					:size="200"
					activeLineBg="#FF7900"
					textAlign="center"
					activeColor="#FF7900"
					activeLineWidth="200rpx"
					activeLineHeight="2rpx"
					:margin="10"
					@change="navChange"
				></graceNavBar>
			</view>
			<!-- 详情 请根据项目情况自行改进 可以使用 富文本-->
			<view class="grace-product-padding" :hidden="active == 1">
				<image class="grace-product-info-img" :src="item" mode="widthFix" v-for="(item, index) in product.imgs" :key="index"></image>
			</view>
			<!-- 评论区 -->
			<view class="grace-comments grace-product-padding" :hidden="active == 0">
				<view class="grace-comments-items" v-for="(item, index) in commentContents" :key="index">
					<image :src="item.face" class="grace-comments-face"></image>
					<view class="grace-comments-body">
						<view class="grace-comments-header">
							<text class="grace-comments-header-text">{{ item.name }}</text>
							<text class="grace-comments-info-text">{{ item.date }}</text>
						</view>
						<text class="grace-comments-content">{{ item.content }}</text>
						<view class="grace-comments-imgs" v-if="item.imgs">
							<view class="grace-comments-image" v-for="(img, indexImg) in item.imgs" :key="indexImg">
								<image :src="img" mode="widthFix" class="grace-comments-img" @click.stop="showImgs(index, indexImg)"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 属性选择 -->
			<graceBottomDialog :show="attrIsShow" @closeDialog="closeAttr">
				<form @submit="attrSubmit" style="box-sizing:border-box; padding:10rpx 25rpx;" class="grace-form" slot="content">
					<!-- 关闭按钮 -->
					<view class="grace-nowrap grace-flex-end"><text class="grace-icons icon-close" @tap="closeAttr"></text></view>
					<!-- 头部商品信息 -->
					<view class="grace-product-attr-info">
						<image
							class="grace-product-attr-info-image"
							mode="widthFix"
							src="https://img.yzcdn.cn/upload_files/2020/01/15/FnQ6j4jxidcdC8cyepTfIOqQi8Qz.jpg"
							@click="previewImage"
						></image>
						<view class="grace-product-attr-info-body" style="position: relative;">
							<text class="grace-product-attr-info-title" style="color: #ff7900; font-size: 36upx;">￥{{ colorSelected?getprice:product.price }}</text>
							<text class="" style="position: absolute;bottom: 0;" v-if="!colorSelected">请选择规格</text>
							<text class="" style="position: absolute;bottom: 0;" v-else>已选择{{colorSelected}}</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<scroll-view style="height:700rpx;" scroll-y>
						<view class=" grace-margin-top">规格</view>
						<view><graceSelectTags selectedColor="#FF0036" :items="colorTips" type="radio" @change="change1"></graceSelectTags></view>
						<view class="grace-margin-top"><text class="">购买数量</text></view>
						<view><graceNumberBox :value="buyNum" v-on:change="buyNumChange"></graceNumberBox></view>
					</scroll-view>
					<view class="grace-product-attr-btn">
						<button type="warn" style="background-color:#FF0036;" class="grace-button grace-border-radius" formType="submit">立即购买</button>
					</view>
				</form>
			</graceBottomDialog>
		</view>
		<!-- 底部 -->
		<view class="grace-space-between grace-flex-vcenter grace-bg-white" slot="gFooter" style="padding: 20upx 0;">
			<view class="grace-grids grace-nowrap" style="width:250rpx;">
				<view class="grace-grids-items grace-relative" @click="toHome">
					<text class="grace-grids-icon grace-icons icon-home"></text>
					<text class="grace-grids-text grace-grids-text">首页</text>
				</view>
				<view class="grace-grids-items grace-relative" @click="collect = !collect">
					<text class="grace-grids-icon grace-grids-icon grace-icons icon-shoucang " :class="collect ? 'grace-footer-active' : ''"></text>
					<text class="grace-grids-text grace-grids-text " :class="collect ? 'grace-footer-active' : ''">收藏</text>
				</view>
			</view>
			<view class="grace-flex-end" style="width:460rpx;border-radius: 50upx;overflow: hidden;">
				<button type="warn" class="grace-footer-button" style="background:#E55D52;" @tap="buyNow">立即购买</button>
				<button type="warn" class="grace-footer-button" style="background:#F37B1D;" @tap="shopcar">加入购物车</button>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import graceNavBar from '../../graceUI/components/graceNavBar.vue';
import graceBottomDialog from '../../graceUI/components/graceBottomDialog.vue';
import graceNumberBox from '../../graceUI/components/graceNumberBox.vue';
import graceSelectTags from '../../graceUI/components/graceSelectTags.vue';
export default {
	
	data() {
		return {
			goodslist: [
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				},
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				},
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				},
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				},
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				},
				{
					url: 'https://img.yzcdn.cn/upload_files/2020/04/21/FpsdCkkxrPSy5NV2eST4L2GI5Nmp.jpg',
					title: '美国oxyfresh氧亲新宠物洁齿水 猫狗通用、美亚销量罐头、有效快速去口臭、预防牙结石、无色无味不排斥',
					price: 159
				}
			],
			//收藏
			collect: false,
			// 轮播图
			swiperItems: [
				'https://img.yzcdn.cn/upload_files/2020/01/15/FnQ6j4jxidcdC8cyepTfIOqQi8Qz.jpg',
				'https://img.yzcdn.cn/upload_files/2020/06/08/FiNQQaSo6J7avSyk9wGx7rhfXBSM.jpg',
				'https://img.yzcdn.cn/upload_files/2020/01/15/Fi_K5SjXCZLvRXguLpp3MPucAL1A.jpg',
				'https://img.yzcdn.cn/upload_files/2020/01/15/FnK3YCm4gaAN5SpZ0stnDVdmTZSs.jpg',
				'https://img.yzcdn.cn/upload_files/2020/01/15/FikgqC3NMpS97SrhOJJbGzLrQJQe.jpg'
			],
			// 切换导航
			navItems: ['商品详情', '相关评论'],
			active: 0,
			product: {
				name: 'Ziwi滋溢巅峰无谷猫罐头 超高肉含量的主食罐头、猫咪的5星级主食、丰富口味选择',
				logo: '../../static/logo.png',
				price: '26-50',
				priceMarket: '30-80',
				imgs: [
					'https://img.yzcdn.cn/upload_files/2020/01/15/FpaY8LsB-0wLwx5BA2pzAhkZejMo.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FrtlEzzHFHCOMH_Ws-uAApoeOp6B.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FnAxPO7sPkvQWbQjqmtoUi7gUUBQ.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FrcANZhEkS4C0SVhYvu9w1bo2UAY.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FukpzktHUzNtWxx2gkrW-UiEDEyl.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/Fiv9nO4d-8-WH2qQVd9uJHizIiag.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/Fg0P59ayJZGpWHVh5aGOhlk-kf0Q.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FqpmEsjyREGnF9_T7DKA8Ltd3Mxk.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FpQCKFmMSsB7fcp1LhPxWxFUsPjt.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/Fnx96Gm-L7QBPnylLR64_wqDJ5pA.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/Fh0G14XPhO5h43RBT2ycjmfz_cLl.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FgdTVNQGD0NeMb8SDneFu5Tqtg0N.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FsLqCNWKWqLlTawRFWuSpU6re-UK.jpg',
					'https://img.yzcdn.cn/upload_files/2020/01/15/FuP4Jn9hlazwM5NgK7oJCQtCmJVq.jpg'
				]
			},
			// 模拟评论数据 (实际项目来自api请求)
			commentContents: [
				{
					content: '故国三千里，深宫二十年。一声何满子，双泪落君前。',
					name: 'graceUI - 小码',
					face: 'https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png',
					date: '08/10 08:00'
				},
				{
					content: '而今渐行渐远，渐觉虽悔难追。漫寄消寄息，终久奚为。也拟重论缱绻，争奈翻覆思维。纵再会，只恐恩情，难似当时。',
					name: '路过繁华',
					face: 'https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png',
					date: '02/10 18:00'
				},
				{
					content: '图片回复，点击图片可以预览......',
					name: '林夕阳',
					imgs: [
						'https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/4.png',
						'https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/3.png',
						'https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/1.png'
					],
					face: 'https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png',
					date: '08/12 09:00'
				}
			],
			// 购买选择属性层展示
			attrIsShow: false,
			colorTips: [
				{ name: '牛肉85g', value: '牛肉85g',price:'33', checked: true },
				{ name: '羊肉85g', value: '羊肉85g',price:'35', checked: false },
				{ name: '鸡肉85g', value: '鸡肉85g',price:'26', checked: false },
				{ name: '马鲛鱼85g', value: '马鲛鱼85g',price:'40', checked: false },
				{ name: '马鲛鱼羊肉85g', value: '羊马鲛鱼肉85g',price:'37', checked: false },
				{ name: '鹿肉85g', value: '羊肉85g',price:'35', checked: false },
				{ name: '牛肉185g', value: '牛肉185g',price:'50', checked: false },
				{ name: '羊肉185g', value: '羊肉185g',price:'40', checked: false },
				{ name: '鸡肉185g', value: '鸡肉185g',price:'43', checked: false },
				{ name: '鹿肉185g', value: '羊鹿肉15g',price:'48', checked: false }
			],
			colorSelected: '',
			typeTips: [
				{ name: '套餐一', value: '套餐一', checked: true },
				{ name: '套餐二', value: '套餐二', checked: false },
				{ name: '套餐三', value: '套餐三', checked: false }
			],
			typeSelected: '套餐一',
			buyNum: 1,
			SelectedPrice:'',
			type:''
		};
	},
	computed:{
		getprice(){
			return this.SelectedPrice*this.buyNum
		}
	},
	onLoad: function() {},
	methods: {
		// 分享
		share: function() {
			uni.showToast({ title: '分享', icon: 'none' });
		},
		// 导航切换
		navChange: function(e) {
			this.active = e;
		},
		// 评论图片展示
		showImgs: function(commentsIndex, imgIndex) {
			console.log(commentsIndex, imgIndex);
			uni.previewImage({
				urls: this.commentContents[commentsIndex].imgs,
				current: this.commentContents[commentsIndex].imgs[imgIndex]
			});
		},
		previewImage() {
			uni.previewImage({
				urls: this.swiperItems
			});
		},
		buyNow:function(){
			this.type="buy"
			this.attrIsShow = true
		},
		//打开属性视图
		shopcar: function() {
			this.type='shopcar'
			this.attrIsShow = true;
		},
		// 关闭属性
		closeAttr: function() {
			this.attrIsShow = false;
		},
		// 颜色选择
		change1: function(e) {
			console.log(e)
			this.colorSelected = e.value;
			this.SelectedPrice = e.price
		},
		// 类型选择
		change2: function(e) {
			this.typeSelected = e;
		},
		// 购买数量变化
		buyNumChange: function(e) {
			this.buyNum = e[0];
		},
		// 属性提交
		attrSubmit: function(e) {
			//后续操作
			// uni.showToast({
			// 	title:"属性已经收集,请观察控制台",
			// 	icon:"none"
			// });
			// console.log("颜色 : " + this.colorSelected, "类型 : " + this.typeSelected , '数量 : ' + this.buyNum);
			//-------------------------------------------------------------------------------------------------------
			// uni.navigateTo({

			// })
			//如果想关闭属性
			if(this.type=='shopcar'){
				uni.showToast({
					title:'已添加至购物车',
					icon:'none'
				})
				
			}else{
				uni.navigateTo({
					url:'../pay/pay'
				})
			}
			this.closeAttr();
		},
		//返回首页
		toHome() {
			uni.switchTab({
				url: '../../pages/index/index'
			});
		}
	},
	components: { gracePage, graceNavBar, graceBottomDialog, graceSelectTags, graceNumberBox }
};
</script>
<style lang="less" scoped>
.goodsbox {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.item {
		border-radius: 10upx;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
		overflow: hidden;
		width: 222upx;
		padding-bottom: 10upx;
		font-size: 24upx;
		margin-bottom: 20upx;
		.item-img {
			width: 222upx;
			image {
				width: 222upx;
				height: 222upx;
			}
		}
		.item-title {
			margin: 10upx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
</style>
<style>
.grace-common-line {
	height: 16rpx;
}
.grace-product-padding {
	padding: 20rpx 25rpx;
}
.grace-product-title {
	line-height: 44rpx;
	font-size: 28rpx;
}
.grace-product-share {
	width: 80rpx;
	height: 80rpx;
	text-align: center;
	font-size: 40rpx;
	color: #ff7900;
	line-height: 80rpx;
	flex-shrink: 0;
	margin-left: 12px;
}
.grace-product-share:after {
	width: 0;
	height: 0;
}
.grace-product-price {
	color: #ff7900;
	line-height: 60rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.grace-product-info-img {
	width: 100%;
}
.grace-product-attr-info {
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f1f1f3;
	padding-bottom: 26rpx;
}
.grace-product-attr-info-image {
	width: 120rpx;
	height: auto;
	margin-right: 10px;
	flex-shrink: 0;
}
.grace-product-attr-info-body {
	width: 700rpx;
}
.grace-product-attr-info-title {
	width: 100%;
	font-size: 28rpx;
	color: #333333;
	display: block;
}
.grace-product-attr-info-stone {
	width: 100%;
	font-size: 20rpx;
	margin-top: 8rpx;
	color: #666666;
	display: block;
}
.icon-close {
	font-size: 30rpx;
	line-height: 80rpx;
	color: #888888;
}
/* 调整宫格大小 */
.grace-grids-items {
	padding: 6rpx 0;
	width: 120rpx;
}
.grace-grids-icon {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 40rpx;
	color: #6b7375;
}
.grace-grids-text {
	line-height: 28rpx;
	font-size: 20rpx;
	margin-top: 2px;
	color: #6b7375;
}
.grace-footer-active {
	color: #ff0036;
}
</style>
