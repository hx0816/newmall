<template>
  <div id="detail">
    <detail-nav :titles="['商品','参数','评论','推荐']" @titleClick="titleClick" ref="nav"></detail-nav>
    <my-scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
      <detail-btm-info :detailInfo="detailInfo"></detail-btm-info>
      <detail-shop-params :shopParams="shopParams" ref="params"></detail-shop-params>
      <detail-comment :comment="comment" ref="comment"></detail-comment>
      <detail-recommend :recommendList="recommendList" ref="recommend"></detail-recommend>
    </my-scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailBtmInfo from "./childComps/DetailBtmInfo";
import DetailShopParams from "./childComps/DetailShopParams";
import DetailComment from "./childComps/DetailComment";
import DetailRecommend from "./childComps/DetailRecommend";

import MyScroll from "@/components/common/scroll/MyScroll";

import { getDetailData, getRecommend } from "@/api/detail";
import { ShopInfo, GoodsInfo, ShopParams } from "@/api/detail";
import { debounce } from "@/common/utils";
import {backTopMixin} from '@/common/mixin'

export default {
  name: "Detail",
  mixins:[backTopMixin],
  components: {
    DetailNav,
    MyScroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailBtmInfo,
    DetailShopParams,
    DetailComment,
    DetailRecommend
  },
  data() {
    return {
      shopInfo: {},
      goodsInfo: {},
      detailInfo: {},
      shopParams: {},
      comment: [],
      recommendList: [],
      themeTopYs: [],
      showIndex:0,
      isShowBackTop:false
    };
  },
  methods: {
    //   请求数据
    async getDetailData(iid) {
      const data = (await getDetailData(iid)).result;
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
      this.comment = data.rate.list;
    },
    // 推荐数据
    async getRecommend() {
      const data = (await getRecommend()).data;
      this.recommendList = data.list;
    },

    // 添加主题高度
    imgLoad() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      if (this.$refs.params) {
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      }
      if (this.$refs.comment) {
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      }
      if (this.$refs.recommend) {
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      }
    },
    // 点击对应主题滚动到相应位置
    titleClick(index){
      this.showIndex = index
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],0)
    },
    // 监听内容滚动
    contentScroll(y){
      // backTop显示隐藏
      this.listenShowBackTop(y)

      const optionsY = Math.abs(y)
      for(var i = this.themeTopYs.length-1;i>=0;i--){
        if(optionsY >= this.themeTopYs[i]){
          if(this.showIndex !== i){
            this.showIndex = i
            this.$refs.nav.showIndex = i
          }
          break
        }
      }
    }
  },
  

  created() {
    const debounceImgLoad = debounce(this.imgLoad, 500);

    //   监听goodsList图片加载完成
    this.$bus.$on("imgLoad", debounceImgLoad);
    this.getDetailData(this.$route.params.iid);
    this.getRecommend();
  }
};
</script>

<style lang='scss' scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
  .content {
    height: calc(100% - 44px - 58px);
  }
}
</style>