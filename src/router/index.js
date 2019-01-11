import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入components中的组件
import homeContainer from "@/views/home"
import menberContainer from "../views/menber"
import shopcarContainer from "../views/shopcar"
import searchContainer from "../views/search"
import newListContainer from "@/views/newList"
import newInfoContainer from "@/views/newInfo"
import photoListContainer from "@/views/photoList"
import photoInfoContainer from "@/views/photoInfo"
import goodsListContainer from "@/views/goodsList"
import goodsInfoContainer from "@/views/goodsInfo"
import goodsDescContainer from "@/views/goodsDesc"

// 创建路由实例对象
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:homeContainer},
    {path:"/menber",component:menberContainer},
    {path:"/shopcar",component:shopcarContainer},
    {path:"/search",component:searchContainer},
    {path:"/home/newList",component:newListContainer},
    {path:"/home/newInfo/:id",component:newInfoContainer},
    {path:"/home/photoList",component:photoListContainer},
    {path:"/home/photoInfo/:id",component:photoInfoContainer},
    {path:"/home/goodsList",component:goodsListContainer},
    {path:"/home/goodsInfo/:id",component:goodsInfoContainer,name:"goodsInfo"},
    { path: '/home/goodsDesc/:id', component: goodsDescContainer, name: 'goodsDesc' },
 
  ],
  linkActiveClass:" mui-active"
})
