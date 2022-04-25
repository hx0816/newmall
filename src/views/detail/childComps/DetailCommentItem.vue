<template>
  <div class="detail-comment-item">
    <div class="item-user">
      <img :src="commentItem.user.avatar" />
      <span>{{commentItem.user.uname}}</span>
    </div>
    <div class="item-content">{{commentItem.content}}</div>
    <div class="item-btm">
      <span class="created">{{changeTime(commentItem.created)}}</span>
      <span>{{commentItem.style}}</span>
    </div>
    <div class="item-image">
      <img :src="item" v-for="(item,index) in commentItem.images" :key="index" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "DetailCommentItem",
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
      changeTime(timer){
          return moment(timer*1000).format('YYYY-MM-DD')
      }
  }
};
</script>

<style lang="scss" scoped>
.detail-comment-item {
  margin-bottom: 15px;
  .item {
    &-user {
      height: 100px;
      line-height: 100px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 30px;
      }
    }
    &-content {
      line-height: 30px;
      margin-bottom: 10px;
    }
    &-btm {
      .created {
        margin-right: 30px;
      }
    }
    &-image {
      margin-top: 15px;
      img {
        width: 80px;
      }
    }
  }
}
</style>