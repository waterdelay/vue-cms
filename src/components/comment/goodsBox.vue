<template>
  <div class="goodsBox">
    <label for>购买数量：</label>
    <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="100">
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input
        id="boxNum"
        class="mui-numbox-input"
        type="number"
        v-model="count"
        ref="boxNum"
        @change="changeNum"
      >
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1 //默认数量为了
    };
  },
  methods: {
    changeNum() {
      //  console.log(111)
      this.count = this.$refs.boxNum.value;
      // let num=document.getElementById("boxNum")
      // console.log(num.value)
      // console.log(this.count)
      this.$emit("func", parseInt(this.count));
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.goodsBox {
}
</style>
