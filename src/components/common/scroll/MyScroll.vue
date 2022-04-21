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
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
          probeType:this.probeType,
          click:this.click,
          observeDOM:this.observeDOM,
          observeImage:this.observeImage
      })
      this.scroll.on('scroll',position=>{
        this.$emit('scroll',position.y)
      })
    });
  }
};
</script>

<style scoped>
.wrapper{
    overflow: hidden;
}
</style>