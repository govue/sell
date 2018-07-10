<template>
    <div>
        <v-header></v-header>
        <div class="tab border-1px">
            <div class="tab-item">
                <a v-link="{path: '/goods'}">商品</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/ratings'}">评论</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/seller'}">商家</a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header';

    export default {
        components: {
            vHeader: header
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/base.styl" //查询设备像素比
    @import "./common/stylus/mixin.styl"    //border-1px函数

    .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        //border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        border-1px(bottom, rgba(7, 17, 27, 0.2))
        .tab-item
            flex: 1
            text-align: center
            & > a
                display: block
                color: rgb(77, 85, 93)
                &.active
                    color: rgb(240, 20, 20)
</style>