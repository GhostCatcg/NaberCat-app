import $net from './net.js'
export default class PublicApi {
	static async getDictList(data) {
		let res = await $net.net._requestPost("/business/base/baseinfo/getDictList", data);
		return res.data.data
	}
	static async getQzcSelList(data) {
		let res = await $net.net._requestPost("/Small/program/getQzcSelList", data);
		return res.data.data.list
	}
}
