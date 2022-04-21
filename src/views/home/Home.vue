<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <my-scroll 
    class="content"
    >
      <swiper :imgList="swiperList" :isShowPage="true" :isShowControl="true" :pageNumber="true"></swiper>
      <recommend :list="recommendList"></recommend>
      <fature-view></fature-view>
    </my-scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MyScroll from "@/components/common/scroll/MyScroll";
import Swiper from "@/components/common/swiper/Swiper";

import Recommend from "./childComps/Recommend";
import FatureView from "./childComps/FatureView";

import { getHomeMutilData } from "@/api/home";

export default {
  name: "Home",
  components: {
    NavBar,
    MyScroll,
    Swiper,
    Recommend,
    FatureView
  },
  data() {
    return {
      // 轮播图图片
      swiperList: [],
      recommendList: []
    };
  },
  async created() {
    // 获取多条数据
    const data = (await getHomeMutilData()).data;
    console.log(data);
    this.swiperList = data.banner.list;
    this.recommendList = data.recommend.list;
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
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>