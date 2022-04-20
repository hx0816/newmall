<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      activeColor:{
          type:String,
          default:'red'
      },
      path:[String]
  },
  computed:{
      activeStyle(){
          return this.actived ? {color:this.activeColor} : {}
      },
      actived(){
          return this.path === this.$route.path
      }
  },
  methods:{
      itemClick(){
          if(this.actived) return
          this.$router.replace(this.path)
      }
  }
};
</script>

<style lang='scss' scoped>
.tab-bar-item {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>