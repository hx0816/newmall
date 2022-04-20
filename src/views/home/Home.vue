<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <swiper 
    :imgList="swiperList" 
    :isShowPage="true" 
    :isShowControl="true" 
    :pageNumber="true"
    ></swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from '@/components/common/swiper/Swiper'

import { getHomeMutilData } from "@/api/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
  },
  data() {
    return {
      // 轮播图图片
      swiperList: []
    };
  },
 async created() {
    // 获取多条数据
   const data = (await getHomeMutilData()).data
   console.log(data)
   this.swiperList = data.banner.list
  },

};
</script>

<style scoped lang='scss'>
#home {
  .nav-bar {
    background-color: #ffc0cb;
    color: #fff;
  }
}
</style>