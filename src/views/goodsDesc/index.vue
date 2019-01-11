<template>
  <div class="goodsPhtotInfo">
    <h1 class="title">{{info.title}}</h1>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  methods: {
    getInfo() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        // console.log(result.body)
        if (result.body.status == 0) {
          this.info = result.body.message[0];
        }
      });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>


<style lang="less" >
.goodsPhtotInfo {
    background-color: #eee;
  padding: 5px;
  .title {
    font-size: 16px;
    text-align: center;
    color: aquamarine;
    margin: 10px 0;
  }
  .content {
   img {
      width: 100%;
    }
  }
}
</style>
