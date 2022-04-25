<template>
  <div id="detail">
    <detail-nav :titles="['商品','参数','评论','推荐']"></detail-nav>
    <my-scroll class="content">
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
      <detail-btm-info :detailInfo="detailInfo"></detail-btm-info>
      <detail-shop-params :shopParams="shopParams"></detail-shop-params>
      <detail-comment :comment="comment"></detail-comment>
    </my-scroll>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailBtmInfo from "./childComps/DetailBtmInfo";
import DetailShopParams from "./childComps/DetailShopParams";
import DetailComment from "./childComps/DetailComment";

import MyScroll from "@/components/common/scroll/MyScroll";

import { getDetailData } from "@/api/detail";
import { ShopInfo, GoodsInfo, ShopParams } from "@/api/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    MyScroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailBtmInfo,
    DetailShopParams,
    DetailComment
  },
  data() {
    return {
      shopInfo: {},
      goodsInfo: {},
      detailInfo: {},
      shopParams: {},
      comment: []
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
      this.goodsInfo = new GoodsInfo(data.shopInfo);
      // 详情信息
      this.detailInfo = data.detailInfo;
      // 商品参数
      this.shopParams = new ShopParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //用户评价
      this.comment = data.rate.list
    }
  },

  created() {
    this.getDetailData(this.$route.params.iid);
  }
};
</script>

<style lang='scss' scoped>
#detail {
  height: calc(100vh - 49px);
  .content {
    height: calc(100% - 44px);
  }
}
</style>