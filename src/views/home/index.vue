<template>
  <div>
    <!-- <h1>homeContainer</h1> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
.mint-swipe-items-wrap {
  height: 300px;
}
</style>
