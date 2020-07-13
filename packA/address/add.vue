<template>
	<view class="container">
		<view class="form">
			<view class="grace-form-item grace-border-b">
				<text class="grace-form-label">收货人</text>
				<view class="grace-form-body"><input type="text" class="grace-form-input" v-model="name" name="name1" placeholder="请输入收货人" /></view>
			</view>
			<view class="grace-form-item grace-border-b">
				<text class="grace-form-label">手机号码</text>
				<view class="grace-form-body"><input type="text" class="grace-form-input" v-model="phone"  name="name1" placeholder="请输入手机号码" /></view>
			</view>
			<view class="grace-form-item grace-border-b" @click="open">
				<text class="grace-form-label">现居城市</text>
				<view class="grace-form-body"><input type="text" class="grace-form-input" :value="city" disabled placeholder="请选择" /></view>
				<text class="grace-icons icon-arrow-down grace-form-icon grace-text-center"></text>
			</view>
			<view class="grace-form-item grace-border-b">
				<text class="grace-form-label">详细地址</text>
				<view class="grace-form-body"><input type="text" class="grace-form-input" v-model="address"  name="name1" placeholder="请输入详细地址" /></view>
			</view>
		
		</view>
		<graceAddressPicker :show="show" @confirm="confirm" :level="level" @close="close" cancelText="关闭"></graceAddressPicker>
		<view class="tips">
			<view class="left">
				设置为默认地址
			</view>
			<view class="right">
				   <switch color="#ee0a25" style="scale: .8;" />
			</view>
		</view>
		<view class="btn"><button type="warn" class="grace-button" style="border-radius: 50upx;" @click="save" :disabled="!name||!phone||!city||!address">保存并使用</button></view>
	</view>
</template>

<script>
import graceAddressPicker from '../../graceUI/components/graceAddressPicker.vue';
export default {
	data() {
		return {
			city: '',
			name:'',
			phone:'',
			address:'',
			level: 3,
			show: false
		};
	},
	onLoad() {},
	methods: {
		open: function() {
			this.show = true;
		},
		confirm: function(e) {
			// 返回选中城市的编号及文本信息
			console.log(e);
			this.city = e.names[0] + '-' + e.names[1] + '-' + e.names[2];
			this.close();
		},
		close: function() {
			this.show = false;
		},
		save(){
			uni.showToast({
				title:'保存成功!',
				duration:1000
			})
			setTimeout(()=>{
				uni.navigateBack({
					delta:1
				})
			},1000)
			
		}
	},
	components: { graceAddressPicker }
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
.tips{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
}
</style>
