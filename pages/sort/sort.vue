<template>
	<gracePage :isSwitchPage="true" :customHeader="false">
		<view slot="gBody" class="grace-flex-v1" id="gBody">
			<!-- 搜索组件 -->
			<view style="padding:20rpx ; background-color:#F6F7F8;" id="hSearch">
				<graceSearch @clear="search" @confirm="search"></graceSearch>
			</view>
			<!-- 数据区域 -->
			<view class="grace-cate-wrap grace-space-between">
				<scroll-view scroll-y class="grace-cate-left grace-scroll-y" :style="{height:mainHeight+'px'}" :scroll-into-view="leftTo">
					<text v-for="(item, index) in mainCate" 
					:key="index" :class="['grace-cate-left-item', currentCateIndex == item.cateid ? 'grace-cate-left-current' : '']" 
					 :style="currentCateIndex == item.cateid ?'color: #f9c76f':''"
					:data-cateid="item.cateid"  @tap='changCate' :id="'cate'+item.cateid">{{item.name}}</text>
				</scroll-view>
				<scroll-view :scroll-into-view="productListTo" 
				scroll-y class="grace-cate-right grace-scroll-y" :style="{height:mainHeight+'px'}" @scroll="rscroll">
					<!-- 循环输出分类名称 -->
					<view v-for="(cate, cateindex) in mainCate" class="content" :key="cateindex" :id="'productList'+cate.cateid">
						<text class="right-cate-name" style="color: #f9c76f">{{cate.name}}</text>
						<!-- 循环对应分类下的商品 -->
						<!-- <view :id="'products'+product.productId" :data-parentId="cate.cateid" 
						class="grace-product-list grace-space-between products" @click.stop="gotoinfo(product.productId)"
						v-for="(product, productIndex) in allProducts['cate'+cate.cateid+'products']" :key="productIndex">
							<view class="">
								<image class="grace-product-list-img" :src="product.img" ></image>
								<text class="grace-product-title">{{product.name}}</text>
								<text class="grace-product-price">¥{{product.price}}</text>
							</view>
							
						</view> -->
						<view class="item" :id="'products'+product.productId" :data-parentId="cate.cateid"  @click.stop="gotoinfo(product.productId)"
						v-for="(product, productIndex) in allProducts['cate'+cate.cateid+'products']" :key="productIndex">
								<image class="grace-product-list-img" :src="product.img" ></image>
								<text class="grace-product-title">{{product.name}}</text>
								<!-- <text class="grace-product-price">¥{{product.price}}</text> -->
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceSearch from "../../graceUI/components/graceSearch.vue";
// 模拟商品数据信息 真实项目应来自 api 请求
var productsData = require('../../graceUI/demoData/products.js');
var pageHeight = 500;
export default {
    data() {
    	return {
			mainHeight : 500,
			// 左侧分类
			currentCateIndex : 1,
			// 左侧滚动定位
			leftTo : 'cate1',
			// 产品列表滚动定位
			productListTo: '',
			mainCate: [
				{ cateid: 1, name: '热卖' },
				{ cateid: 2, name: '主粮' },
				{ cateid: 3, name: '驱虫' },
				{ cateid: 4, name: '猫咪专区' },
				{ cateid: 5, name: '零食' },
				{ cateid: 6, name: '保健' },
				{ cateid: 7, name: '日用' },
				{ cateid: 8, name: '户外' },
				{ cateid: 9, name: '玩具' },
				{ cateid: 10, name: '窝具' },
				{ cateid: 11, name: '服饰' },
				{ cateid: 12, name: '其他' }
			],
			// 商品信息
			allProducts: productsData.allProducts
		}
    },
	onReady:function(){
		uni.getSystemInfo({
			success: function(res) {
				pageHeight = res.windowHeight;
			}
		});
		setTimeout(()=>{
			uni.createSelectorQuery().select('#gBody').fields(
				{size: true}, (res) => {
					uni.createSelectorQuery().select('#hSearch').fields(
						{size: true}, (res2) => {
							this.mainHeight = res.height - res2.height;
							// #ifdef H5
							this.mainHeight = res.height - res2.height - 44;
							// #endif
						}
					).exec();
				}
			).exec();
		},1000);
	},
	methods:{
		rscroll : function(e){
			this.getIndex();
		},
		// 动态识别分类激活
		getIndex: function (i){
			const query = uni.createSelectorQuery()
			query.selectAll('.products').boundingClientRect()
			query.selectViewport().scrollOffset()
			query.exec( (res) => {
				var products = res[0];
				for(let i = 0; i < products.length; i++){
					if (products[i].top > 0 && products[i].top >= pageHeight / 2){
						this.currentCateIndex = products[i].dataset.parentid,
						this.leftTo = 'cate' + products[i].dataset.parentid
						return ;
					}
				}
			});
		},
		changCate : function (e) {
			var cateid = e.currentTarget.dataset.cateid;
			this.currentCateIndex = cateid;
			this.productListTo    = 'productList' + cateid;
		},
		search : function(e){
			var kwd = e;
			var searchIndex = -1;
			var index = 0;
			for(var k in this.allProducts){
				for(var i = 0; i < this.allProducts[k].length; i++){
					if(this.allProducts[k][i].name.indexOf(kwd) != -1){
						searchIndex = this.allProducts[k][i].productId;
						break;
					}
					index++;
				}
				if(searchIndex != -1){break ;}
			}
			console.log(searchIndex);
			if(searchIndex != -1){
				this.productListTo    = 'products' + searchIndex;
			}
		},
		gotoinfo : function(e){
			console.log(e);
			uni.showToast({
				title:"商品id " + e
			});
		}
	},
	components:{gracePage, graceSearch}
}
</script>
<style lang="less" scoped>
.grace-cate-wrap{width:750rpx;}
.grace-cate-left{width:200rpx; background-color:#F6F7F8;}
.grace-cate-right{width:530rpx; overflow:hidden;}
.grace-cate-left-item{display:inline-flex; width:100%; line-height:40rpx; height:40rpx; padding:35rpx 0; font-size:26rpx; justify-content:center;}
.grace-cate-left-current{background-color:#FFFFFF; color:#FF0036;
	position: relative;
	&::before{
		content: "";
		display: block;
		background: #f9c76f;
		position: absolute;
		left: 0;
		top:25%;
		width: 10upx;
		height: 50%;
	}
}
.right-cate-name{line-height:80rpx; font-size:28rpx; color:#666666; font-weight:bold; display:block; width:100%;}
.grace-product-list{padding:10rpx 0; margin-bottom:5px; font-size:0;}
.grace-product-list-body{width:355rpx; padding-right:10rpx;}
.grace-product-list-img{width:100rpx; height:100rpx;margin-bottom: 10upx;}
.grace-product-title{ font-size:28rpx; display:block; width:100%;}
.grace-product-price{line-height:60rpx; font-size:32rpx; color:#FF0036; display:block; width:100%;}
.grace-product-btn{line-height:60rpx; font-size:40rpx; color:#FF0036; padding-right:20rpx;}
.content{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.item{
		margin-bottom: 20upx;
		height: 200upx;
		width: 30%;
		text-align: center;
		&:last-child{
			margin-right:auto
		}
	}
}
</style>