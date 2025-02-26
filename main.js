import Vue from 'vue'
import App from './App'
import api from './api/api.js'
Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
