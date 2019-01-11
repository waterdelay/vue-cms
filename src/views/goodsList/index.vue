<template>
  <div class="goodsList">
    <div class="goodsItem" v-for="item in goodsList" :key="item.id" @click="goodsInfo(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥{{item.sell_price}}</span>
          <span class="old">
            <del>￥{{item.market_price}}</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button size="large" type="danger" @click="moreList" v-show="hasMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      pageindex: 1, //默认设置为1
      hasMore: true //假设还有更多内容
    };
  },
  methods: {
    //获取商品列表
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            // this.goodsList = result.body.message;
            this.goodsList = this.goodsList.concat(result.body.message);
            if (result.body.message.length == 0) {
              this.hasMore = false;
            }
          }
        });
    },
    moreList() {
      // console.log(1111111111)
      this.pageindex++;
      this.getGoodsList();
    },
    goodsInfo(id) {
      // console.log(id);
      //  this.$router.push("/home/goodsInfo/" + id);
      this.$router.push({ name: "goodsInfo", params: { id } });
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style lang="less" scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  background-color: #eee;
  .goodsItem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
      line-height: 20px;
    }
    .info {
      background-color: #eee;
      .price {
        .new {
          font-size: 16px;
          color: red;
          font-weight: bold;
          margin-right: 15px;
          // text-decoration: line-through;这个是删除下划线
        }
        .old {
          font-size: 12px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>