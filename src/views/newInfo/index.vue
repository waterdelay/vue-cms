<template>
  <div class="newsInfo">
    <div class="title">{{newsInfo.title}}</div>
    <div class="time">
      <span>发表时间:&nbsp;&nbsp;{{ newsInfo.add_time |dataFormat}}</span>
      <span>点击:&nbsp;&nbsp;{{ newsInfo.click }}次</span>
    </div>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
        // console.log(this.id)
      this.$http.get("api/getnew/" + this.id).then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取信息失败");
        }
      });
    }
  }
};
</script>

<style lang="less" >
.newsInfo {
  padding: 0 3px;
  .title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin: 10px 0;
    color: red;
  }
  .time {
    display: flex;
    justify-content: space-between;
    color: aqua;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>