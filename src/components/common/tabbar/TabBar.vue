<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar'
};
</script>

<style lang='scss' scoped>
#tab-bar {
    height: 49px;
    background-color: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>