<template>
	<gracePage headerBG="#FFFFFF" :isSwitchPage="true" :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="grace-margin-top" style="text-align:right;"><text class="grace-text grace-blue" style="margin-right:25rpx;" @tap="addAddress">+ 添加新地址</text></view>
			<view class="tips">
				左滑编辑或删除地址
			</view>
			<view class="grace-margin-top"><graceSwipeList :msgs="msgs" @itemTap="itemTap" @btnTap="btnTap"></graceSwipeList></view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import graceSwipeList from '../../graceUI/components/graceSwipeList.vue';
// 模拟个 api 请求的数据
var msgsFromApi = [
	{
		// img: 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
		msgnumber: 8,
		title: '张大飞',
		time: '昨天',
		content: '湖南省扬州市xx手机号'
	},
	{
		// img: 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882db43842c.png',
		msgnumber: 0,
		title: '王大锤',
		time: '2019-08-11',
		content: '湖南省扬州市xx手机号'
	},
	{
		// img: 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
		msgnumber: 12,
		title: '小猫咪',
		time: '昨天',
		content: '湖南省扬州市xx手机号'
	}
];
export default {
	data() {
		return {
			forData: [1, 2, 3, 4, 5], //模拟的循环数据
			msgs: []
		};
	},
	onLoad() {
		setTimeout(() => {
			for (let i = 0; i < msgsFromApi.length; i++) {
				// 具体几个按钮及按钮文本根据项目需求来，格式 {name:按钮文本, bgColor:按钮背景色}
				msgsFromApi[i].btns = [{ name: '编辑', bgColor: '#323232' }, { name: '删除', bgColor: '#FF0036' }];
			}
			this.msgs = msgsFromApi;
		}, 500);
	},
	methods: {
		btnTap: function(index, btnIndex) {
			console.log(index, btnIndex);
			// 第一个按钮被点击 [ 标记已读 ]
			if (btnIndex == 0) {
				uni.navigateTo({
					url:'./add'
				})
			}
			// 第二个按钮被打开 [ 删除消息 ]
			else if (btnIndex == 1) {
				uni.showModal({
					title: '确定要删除吗?',
					success: e => {
						if (e.confirm) {
							this.msgs.splice(index, 1);
						}
					}
				});
			}
		},
		// 列表本身被点击
		itemTap: function(e) {
			console.log(e);
			uni.showToast({ title: '索引' + e });
		},
		editAddress: function() {
			uni.showToast({
				title: '请以新增页面为基础改进',
				icon: 'none'
			});
		},
		addAddress: function() {
			uni.navigateTo({
				url:'./add'
			})
		}
	},
	components: { gracePage, graceSwipeList }
};
</script>
<style lang="less" scoped>
	.tips{
		font-size: 24upx;
		padding-left: 20upx;
		color: #999;
	}
</style>
