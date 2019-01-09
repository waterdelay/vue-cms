<template>
  <div class="photoInfo">
    <h4>{{photoInfo.title}}</h4>
    <p>
      <span>发表时间：{{ photoInfo.add_time|dataFormat}}</span>
      <span>点击{{ photoInfo.click}}次</span>
    </p>
    <hr>

    <!-- 图片预留区 -->
   <div class="smaList">
        <img class="preview-img" 
    v-for="(item, index) in list" 
    :src="item.src" height="100"
     @click="$preview.open(index, list)"
     :key="index">
   </div>
    <div class="content" v-html="photoInfo.content"></div>

    <comment :id="id"></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoInfo: {}, //接收图片详情信息
      id: this.$route.params.id,
      list: []
    };
  },
  methods: {
    //获取图片详细信息
    getphotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        //console.log(result.body);
        if (result.body.status == 0) {
          this.photoInfo = result.body.message[0];
        }
      });
    },
   //获取缩略图详情
    getSmallList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list=result.body.message
        }
      });
    }
  },
  created() {
    this.getphotoInfo();
    this.getSmallList();
  }
};
</script>

<style lang="less" >
.photoInfo {
  background-color: #eee;
  padding: 15px 5px;
  h4 {
    font-size: 16px;
    color: aqua;
    text-align: center;
    line-height: 30px;
  }
  p {
    display: flex;
    justify-content: space-between;
  }
  hr{
      margin-bottom: 20px;
  }
  .smaList{
    
      padding: 0 10px;
      text-align: left;
      img{
          margin: 10px;
          box-shadow: 0 0 8px #999;
      }
  }
  .content{
      font-size: 13px;
      line-height: 30px;
  }
}
</style>