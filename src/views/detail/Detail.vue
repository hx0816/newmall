<template>
  <div id="detail">
      <detail-nav :titles="['商品','参数','评论','推荐']">

      </detail-nav>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'

export default {
    name:'Detail',
    components:{
        DetailNav
    }
}
</script>

<style>

</style>