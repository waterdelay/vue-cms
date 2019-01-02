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
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:homeContainer},
    {path:"/menber",component:menberContainer},
    {path:"/shopcar",component:shopcarContainer},
    {path:"/search",component:searchContainer},
    {path:"/home/newList",component:newListContainer},
    {path:"/home/newInfo/:id",component:newInfoContainer}
  ],
  linkActiveClass:" mui-active"
})
