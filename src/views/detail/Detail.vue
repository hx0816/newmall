<template>
  <div id="detail">
    <detail-nav :titles="['商品','参数','评论','推荐']"></detail-nav>
    <my-scroll class="content">
        <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
        <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
    </my-scroll>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'


import MyScroll from '@/components/common/scroll/MyScroll'

import { getDetailData } from "@/api/detail";
import { ShopInfo,GoodsInfo } from "@/api/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    MyScroll,
    DetailShopInfo,
    DetailGoodsInfo
  },
  data() {
    return {
      shopInfo: {},
      goodsInfo:{}
    };
  },
  methods: {
    //   请求数据
    async getDetailData(iid) {
      const data = (await getDetailData(iid)).result;
      console.log(data);
    //   商品信息
      this.shopInfo = new ShopInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    //   商家信息
    this.goodsInfo = new GoodsInfo(data.shopInfo)
    }
  },

  created() {
    this.getDetailData(this.$route.params.iid);
  }
};
</script>

<style lang='scss' scoped>
#detail{
    height: calc(100vh - 49px);
    .content{
        height: calc(100% - 44px);
    }
}
</style>