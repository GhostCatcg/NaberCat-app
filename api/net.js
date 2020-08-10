// const complainthost = 'http://172.16.11.234:8010/pc'
const complainthost = 'http://nabercat.com/' 
const ImageLinkshost = 'http://172.16.11.247:9090/res/'
const net = {
	_requestGet(url, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: complainthost + url,
				data: data,
				method: 'GET',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
					'Accept': ' application/json'
				},
				success: (res) => {
					resolve(res.data);
				},
				fail: (err) => {
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
					reject(err);
				},
				complete: () => {

				}
			})
		})
	},
	_requestPost(url, data) {
		uni.showLoading({
			mask:true
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: complainthost + url,
				data: data,
				method: 'POST',
				header: {
					// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
					'Content-Type': ' application/json',
					'Accept': ' application/json'
				},
				success: (res) => {
					uni.hideLoading();
					if (res.data.code == 0) {
						resolve(res.data);
					} else {
						uni.showModal({
							content: res.data.msg||'服务器错误，请退出重试！',
							showCancel: false
						});
					}
				},
				fail: (err) => {
					uni.hideLoading();
					console.log(err)
					uni.showModal({
						content: err.errMsg||'服务器错误，请退出重试！',
						showCancel: false
					});
					reject(err);
				},
				complete: () => {

				}
			})
		})
	}

}
export default {
	net,
	complainthost,
	ImageLinkshost,
}
