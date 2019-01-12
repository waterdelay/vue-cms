<template>
  <div class="goodsInfo">

  <!-- 小球位置 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="ballFlag"></div>
    </transition>

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
          <span class="new">
            销售价：
            <i>￥{{goodsInfo.sell_price}}</i>
          </span>
        </p>
        <div class="mui-card-content-inner">
          <goodsbox></goodsbox>
          <div class="tabbtn">
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="goToCar">加入购物车</mt-button>
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
        <mt-button type="danger" size="large" plain @click="goodsComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import goodsbox from "../../components/comment/goodsBox";
export default {
  data() {
    return {
      id: this.$route.params.id,
      ballFlag:false,
      count:1,//默认1件
      lunboList: [], //轮播图信息
      goodsInfo: {}
    };
  },
  methods: {
    // 获取轮播图信息
    getLunboList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunboList = result.body.message;
        }
      });
    },
    //获取商品信息
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          this.goodsInfo = result.body.message[0];
        }
      });
    },
    //获取图文信息
    getGoodsDesc(id) {
      // console.log(id)
      this.$router.push({ name: "goodsDesc", params: { id: id } });
      // this.$router.push({path:"home/goodsDesc/"+this.id})
    },
    //添加商品评论
    goodsComment(id) {
      // console.log(id)
      this.$router.push({ name: "goodsComment", params: { id } });
    },
    goToCar(){
      this.ballFlag = !this.ballFlag;
    },
    //定义小球半场动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetHeight;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

      //获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //   console.log(ballPosition)
      //获取购物车徽标的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  created() {
    this.getLunboList();
    this.getGoodsInfo();
  },
  //局部定义组件
  components: {
    goodsbox
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
      .tabbtn {
        margin-top: 10px;
      }
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
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 350px;
    left: 146px;
  }
}
</style>
