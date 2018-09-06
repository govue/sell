<template>
    <div class="ratings">
        <div class="ratings-box">
            <div class="base-content">
                <div class="left border-1px">
                    <div class="left-item">3.9</div>
                    <div class="left-item">综合评分</div>
                    <div class="left-item">高于周边商家39.2%</div>
                </div>
                <div class="right">
                    <ul>
                        <li>
                            <span class="title">服务态度</span><span class="service-star">11111111</span><span class="score">3.9</span>
                        </li>
                        <li>
                            <span class="title">服务态度</span><span class="service-star">11111111</span><span class="score">3.9</span>
                        </li>
                        <li>
                            <span class="title">送达时间</span><span class="time">44分钟</span>
                        </li>
                    </ul>
                </div>
            </div>
            <split></split>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import split from 'components/split/split';
    
    export default {
        name: 'ratings',
        components: {
            split
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/base.styl" //查询设备像素比
    @import "../../common/stylus/mixin.styl"    //border-1px函数

    .ratings
        position: fixed
        top: 176px
        left: 0
        bottom: 0
        width: 100%
        height: 100%
        .ratings-box
            .base-content
                width: 100%
                height: 95px
                display: flex
                .left
                    flex: 0 0 135px
                    text-align: center
                    margin-top: 18px
                    border-right: 1px solid rgba(7, 17, 27, 0.2)
                    .left-item
                        font-size: 12px
                        margin-bottom: 6px
                        &:nth-child(1)
                            font-size: 24px
                            line-height: 28px
                            color: rgb(255, 153, 0)
                        &:nth-child(2)
                            font-size: 14px
                            line-height: 12px
                        &:nth-child(3)
                            font-size: 10px
                            color: rgb(147, 153, 159)
                .right
                    flex: 1
                    padding-top: 18px
                    font-size: 12px
                    ul
                        li
                            margin-left: 24px
                            margin-bottom: 8px
                            span
                                display: inline-block
                                margin-right: 12px
                            .service-star
                                color: red
</style>