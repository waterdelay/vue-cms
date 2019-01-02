<template>
  <div class="home_container">
    <!-- <h1>homeContainer</h1> -->
    <!-- 轮播囤 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in listBanner" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt>
        </a>
        <!-- "{{item.img}}" -->
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <img src="../../assets/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <img src="../../assets/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <img src="../../assets/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <img src="../../assets/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <img src="../../assets/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <img src="../../assets/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listBanner: []
    };
  },
  created() {
    this.getBannerDate();
  },
  methods: {
    getBannerDate() {
      this.$http.get("api/getlunbo", { responseType: "json" }).then(result => {
        // console.log(result.body)
        if (result.body.status == 0) {
          this.listBanner = result.body.message;
        } else {
          Toast("获取轮播图数据失败!请重试!");
        }
      });
      // console.log(111)
    }
  }
};
</script>

<style lang="less" >
.home_container {
  .mint-swipe-items-wrap {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
