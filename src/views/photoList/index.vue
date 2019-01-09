<template>
  <div class="photoList">
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="{'mui-control-item' : true, 'mui-active': index == 0}"
          v-for="(item, index) in cate"
          :key="item.id"
          @tap="getPhotoList(item.id)"
        >{{ item.title }}</a>
      </div>
    </div>

    <ul class="photo-list">
      <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1. 导入 mui 的js文件
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      cate: [], //所有分类的列表数组
      photoList: [] //所有图片的列表数组
    };
  },
  methods: {
    getPhotoCate() {
      this.$http.get("api/getimgcategory").then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cate = result.body.message;
        }
      });
    },
    getPhotoList(cateId) {
      console.log(cateId);
      this.$http.get("api/getimages/" + cateId).then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          this.photoList = result.body.message;
        }
      });
    }
  },
  created() {
    this.getPhotoCate();
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="less" tag="">
.photoList {
  .mui-segmented-control.mui-scroll-wrapper .mui-control-item {
    display: inline;
    display: table-cell;
    background-color: #eee;
  }
  .photo-list {
    background-color: #eee;
    margin: 0;
    list-style: none;
    padding: 5px 10px;
    li {
      position: relative;
      //解决图片有间隙的问题
      text-align: center;
      margin: 5px 0;
      // padding: 0 5px;
      box-shadow: 0 0 9px #999;
      img {
        width: 100%;
        vertical-align: middle;
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 0 5px;

      background-color: rgba(0, 0, 0, 0.4);
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>