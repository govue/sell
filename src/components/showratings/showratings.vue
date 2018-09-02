<template>
    <div class="showratings">
        <div class="ratings-select">
            <h1 class="name">商品评价</h1>
            <div class="rate-type">
                <span class="all">全部<i>30</i></span>
                <span class="positive">全部<i>30</i></span>
                <span class="negative">全部<i>30</i></span>
            </div>
            <div class="have-rating-content">
                <i class="icon-check_circle"></i>
                <span class="text">只看有内容的评价</span>
            </div>
        </div>
        <div class="ratings-content">
            <div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br><div>aa</div>
            <br>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'showratings'
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .showratings
        .ratings-select
            padding: 18px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            margin-bottom: 12px
            h1
                font-weight: 700
                margin-bottom: 12px
            .rate-type
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                margin-bottom: 12px
                span
                    display: inline-block
                    width: 64px
                    height: 32px
                    line-height: 32px
                    margin-right: 8px
                    color: rgb(77, 85, 93)
                    font-size: 16px
                    text-align: center
                    vertical-align: middle
                    margin-bottom: 18px
                    &.all
                        background-color: rgb(0, 160, 220)
                    &.positive
                        background-color: rgba(0, 160, 220, 0.2)
                    &.negative
                        background-color: rgba(77, 85, 93, 0.2)
            .have-rating-content
                height: 24px
                line-height: 24px
                i
                    font-size: 24px
                    color: rgb(147, 153, 159)
                .text
                    vertical-align: top
                    color: rgb(147, 153, 159)
</style>