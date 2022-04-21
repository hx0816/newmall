<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "MyScroll",
  props: {
    observeDOM: {
      type: Boolean,
      default: true
    },
    observeImage: {
      type: Boolean,
      default: true
    },
    probeType:{
        type:Number,
        default:0
    },
    click:{
        type:Boolean,
        default:true
    }
  },
  data() {
    return {
      scroll: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
          probeType:this.probeType,
          click:this.click,
          observeDOM:this.observeDOM,
          observeImage:this.observeImage
      });
    });
  }
};
</script>

<style scoped>
.wrapper{
    overflow: hidden;
}
</style>