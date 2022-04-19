<template>
  <tab-bar class="main-tab-bar">
      <tab-bar-item path="/home">
          <template #item-icon>
              <span class="iconfont icon-shouye"></span>
          </template>
          <template #item-text>
              <span>首页</span>
          </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
          <template #item-icon>
              <span class="iconfont icon-fenlei"></span>
          </template>
          <template #item-text>
              <span>分类</span>
          </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
          <template #item-icon>
              <span class="iconfont icon-gouwuche"></span>
          </template>
          <template #item-text>
              <span>购物车</span>
          </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
          <template #item-icon>
              <span class="iconfont icon-wode"></span>
          </template>
          <template #item-text>
              <span>我的</span>
          </template>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style lang='scss' scoped>
@import './icon/iconfont.css';
.main-tab-bar{
    font-size: 14px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>