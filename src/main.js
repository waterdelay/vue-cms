//入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import router from './router'

// 引用MintUI组件 全局
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
// 配置post请求以传统表单形式提交参数 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false
// 1.2 安装路由

//创建一个全局过滤器  更改时间格式
//导入moment 时间包
import moment from "moment"

Vue.filter("dataFormat",function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})
Vue.use(MintUI)
import {
  Header,
  Swipe,
  SwipeItem,
} from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入mui
import "./lib/mui/css/mui.min.css"
//导入扩展图标样式
import "./lib/mui/css/icons-extra.css"


Vue.component(Header.name, Header);
Vue.config.productionTip = false
/* eslint-disable no-new */
import App from './App'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
