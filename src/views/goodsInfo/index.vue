<template>
  <div class="goodsInfo">
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <p class="price">
          <span class="old">
            <del>市场价：￥{{goodsInfo.market_price}}</del>
          </span>
          <span class="new">销售价：
            <i>￥{{goodsInfo.sell_price}}</i>
          </span>
        </p>
        <div class="mui-card-content-inner">
            <label for="">购买数量：</label>
          <div class="mui-numbox" data-numbox-step="10" data-numbox-min="0" data-numbox-max="100">
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" value="1">
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="marque">商品型号:{{goodsInfo.goods_no}}</p>
            <p class="stock">库存情况:{{goodsInfo.stock_quantity}}件</p>
            <p class="time">上架时间：{{goodsInfo.add_time|dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="getGoodsDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunboList: [], //轮播图信息
      goodsInfo: {},
    };
  },
  methods: {
    // 获取轮播图信息
    getLunboList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunboList = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          this.goodsInfo = result.body.message[0];
        }
      });
    },
    getGoodsDesc(id){
      // console.log(id)
      this.$router.push({name:"goodsDesc",params:{id:id}})
      // this.$router.push({path:"home/goodsDesc/"+this.id})
    }
  },
  created() {
    this.getLunboList();
    this.getGoodsInfo();
  }
};
</script>

<style lang="less" scoped >
.goodsInfo {
  height: 100%;
  background-color: #eee;

  .mint-swipe {
    height: 200px;
    padding: 10px;
    .mint-swipe-items-wrap {
      .mint-swipe-item {
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 0 8px #eee;
        margin-bottom: 15px;
        text-align: center;
        overflow: hidden;
        box-shadow: 0 0 8px #eee;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .mui-card {
    .mui-card-header {
    }
    .mui-card-content {
      padding: 10px;
      .price {
        .old {
          font-size: 14px;
          //  margin-right: 10px;
        }
        .new {
          i {
            font-style: normal;
            font-size: 18px;
            color: red;
          }
        }
      }
    }
    .mui-card-footer {
      display: block;
      button {
        margin: 15px 0;
      }
    }
  }
}
</style>
