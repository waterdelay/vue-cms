<template>
  <div class="newList">
    <ul
      class="mui-table-view"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="5"
    >
      <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id">
        <router-link :to="'/home/newInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{ item.title}}</h3>
            <p class="mui-ellipsis">
              <span>发表时间:{{ item.add_time | dataFormat}}</span>
              <span>点击:{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      newsList: [],
      loading:false,
    };
  },
  created() {
    this.getNewsList();
    // this.loadMore();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          this.newsList = result.body.message;
        } else {
          Toast("加载失败");
        }
      });
    },
    //有问题
    loadMore() {
      this.loading = true;
      this.$http.get("api/getnewslist").then(result=>{
        // console.log(result.body)
        if(result.body.message.length<10){
          this.loading = false;
        }
      })
      this.getNewsList()
    }
  }
};
</script>

<style lang="less">
.newList {
  .mui-table-view {
    background-color: #fff;
    .mui-table-view-cell {
      // display: flex;
      // flex-direction: column-reverse
      h3 {
        font-size: 14px;
      }
      p {
        color: aquamarine;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>