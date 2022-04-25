<template>
  <div class="detail-comment">
      <div class="comment-title">
          <span>用户评价</span>
          <span>更多</span>
      </div>
      <detail-comment-item v-for="(item,index) in comment" :key="index" :commentItem="item"></detail-comment-item>
  </div>
</template>

<script>
import DetailCommentItem from './DetailCommentItem'

export default {
    name:"DetailComment",
    props:{
        comment:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        DetailCommentItem
    }
}
</script>

<style lang="scss" scoped>
    .detail-comment{
        padding:  0 10px;
        .comment{
            &-title{
                border-bottom: 1px solid #ccc;
                height: 60px;
                line-height: 60px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>