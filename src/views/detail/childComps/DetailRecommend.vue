<template>
  <div class="detail-recommend">
    <goods-list :goodsList="recommendList"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/content/goodsList/GoodsList";
import GoodsListItem from "@/components/content/goodsList/GoodsListItem";

export default {
  name: "DetailRecommend",
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  provide:{
      isClick:false
  },
  components: {
    GoodsList
  }
};
</script>

<style>
</style>