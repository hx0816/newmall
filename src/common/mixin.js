import BackTop from '@/components/content/backTop/BackTop'

export const backTopMixin = {
    components: {
        BackTop
    },
    methods: {
        // 返回顶部
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        // 监听backTop显示隐藏
        listenShowBackTop(y){
            this.isShowBackTop = Math.abs(y) > 1000
        }
    }
}