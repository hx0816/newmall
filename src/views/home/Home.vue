<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <tab-control 
    ref="tabC2"
    v-show="isShowTabC"
    :title="['流行','新款','精选']" class="tab-control2" @tabClick="tabClick"></tab-control>
    <my-scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @sole="sole"
    >
      <swiper :imgList="swiperList" :isShowPage="true" :isShowControl="true" :pageNumber="true"></swiper>
      <recommend :list="recommendList" />
      <fature-view />
      <tab-control 
      ref="tabC1"
      :title="['流行','新款','精选']" class="tab-control1" @tabClick="tabClick"></tab-control>
      <goods-list :goodsList="goodsList[showType].list"></goods-list>
    </my-scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MyScroll from "@/components/common/scroll/MyScroll";
import Swiper from "@/components/common/swiper/Swiper";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goodsList/GoodsList";

import Recommend from "./childComps/Recommend";
import FatureView from "./childComps/FatureView";

import { getHomeMutilData, getGoodsList } from "@/api/home";
import { backTopMixin } from "@/common/mixin";

export default {
  name: "Home",
  mixins: [backTopMixin],
  components: {
    NavBar,
    MyScroll,
    Swiper,
    Recommend,
    FatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      // 轮播图图片
      swiperList: [],
      recommendList: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      showType: "pop",
      isShowBackTop: false,
      isShowTabC:false,
      scrollY:0
    };
  },
  methods: {
    // 请求数据
    async getHomeMutilData() {
      const data = (await getHomeMutilData()).data;
      this.swiperList = data.banner.list;
      this.recommendList = data.recommend.list;
    },
    async getGoodsList(type) {
      const data = (await getGoodsList(type, this.goodsList[type].page + 1))
        .data;
      this.goodsList[type].page++;
      this.goodsList[type].list.push(...data.list);
      this.$refs.scroll.finishPullUp();
    },

    // 事件监听
    // 监听tabControl点击事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.showType = "pop";
          break;
        case 1:
          this.showType = "new";
          break;
        case 2:
          this.showType = "sell";
      }
      this.$refs.tabC1.showIndex = index
      this.$refs.tabC2.showIndex = index
    },
    // 监听内容滚动
    contentScroll(y) {
      // 监听backTop显示隐藏
      this.listenShowBackTop(y);
      this.isShowTabC = Math.abs(y) >= this.$refs.tabC1.$el.offsetTop
    },
    // 触底
    sole() {
      this.getGoodsList(this.showType)
    }
  },
  created() {
    // 获取多条数据
    this.getHomeMutilData();
    // 获取商品数据
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.getScrollY()
  }
};
</script>

<style scoped lang='scss'>
#home {
  position: relative;
  height: calc(100vh - 49px);
  .nav-bar {
    background-color: #ffc0cb;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .tab-control1 {
    margin-bottom: 5px;
  }
  .tab-control2{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 9;
  }
}
</style>