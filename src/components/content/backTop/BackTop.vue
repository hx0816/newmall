<template>
  <div class="back-top">
    <img src="~@/assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 5px;
  img {
    width: 45px;
    height: 45px;
  }
}
</style>