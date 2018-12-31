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

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
.aapp_container {
  padding-top: 40px;
  overflow-x: hidden;
}
</style>
