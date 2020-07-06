import $net from './net.js'
export default class Api {
	//获取openid
	static async getOpenID(data) {
		let res = await $net.net._requestPost("/Small/program/getOpenID", data);
		return res.data.data
	}
	//获取返村信息详情
	static async getBaseinfo(data) {
		let res = await $net.net._requestPost("/Small/program/getBaseinfo", data);
		return res
	}
	// 保存基本信息
	static async jbxxAdd(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/skip/add", data);
		return res
	}
	
	// 保存基本信息
	static async editWork(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/skip/editWork", data);
		return res
	}
	
	// 获取最新动态数据
	static async getTrends(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/getTrends", data);
		return res
	}
	// 获取动态详情数据
	static async getTrendsDetail(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/getTrendsDetail", data);
		return res
	}
	// 账号绑定
	static async login(data) {
		let res = await $net.net._requestPost("/Small/program/login", data);
		return res
	}
	// 账号解绑
	static async removeUser(data) {
		let res = await $net.net._requestPost("/Small/program/removeUser", data);
		return res
	}
	
	// 人员列表
	static async getUserListTotal(data) {
		let res = await $net.net._requestPost("/Small/program/getUserListTotal", data);
		return res
	}
	// 首页数据
	static async showIndex(data) {
		let res = await $net.net._requestPost("/Small/program/showIndex", data);
		return res
	}
	//获取区镇村列表
	static async getNextList(data) {
		let res = await $net.net._requestPost("/Small/program/getNextList", data);
		return res
	}
	
	// 点击统计获取人员列表
	static async getUserTotalList(data) {
		let res = await $net.net._requestPost("/Small/program/getUserTotalList", data);
		return res
	}
	// 人员核验列表
	static async getHzRecodeList(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/getHzRecodeList", data);
		return res
	}
	
	
	
	
	
	
	
}
