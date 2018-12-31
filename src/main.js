//入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import router from './router'

// 引用MintUI组件 全局
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 1.2 安装路由
Vue.use(MintUI)
import { Header } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';

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
