<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang='scss' scoped>
.nav-bar {
  height: 44px;
  display: flex;
  align-items: center;
  line-height: 44px;
  div {
    height: 100%;
    text-align: center;
  }
  &-left {
    width: 80px;
  }
  &-center{
      flex: 1;
  }
  &-right{
      width: 80px;
  }
}
</style>