<template>
  <div id="app" class="app_container">
    <!-- header 头部 -->
    <mt-header fixed title="Vue CMS"></mt-header>
    <!-- <router-view></router-view> -->
    <!-- <h2>123456</h2> -->
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/menber">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        
        <span class="mui-tab-label">搜素</span>
      </router-link>
    </nav>

    <transition name="app">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {};
</script>

<style lang="less" >
body {
  background-color: #fff;
  // touch-action: pan-y;
}
.app_container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mint-header {
    z-index: 999;
  }
  .mint-swipe-items-wrap {
    .mint-swipe-item {
      background-color: pink;
    }
  }
  .app-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .app-leave-to {
    position: absolute;
    transform: translateX(-100%);
    opacity: 0;
  }

  .app-enter-active,
  .app-leave-active {
    transition: all 0.6s ease;
  }
}
</style>
