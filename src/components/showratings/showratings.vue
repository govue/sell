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
            <div class="ratings-wrapper">
                <ul>
                    <li>
                        <div class="left">
                            <span class="time">2018-08-12  00:00</span>
                            <div class="text">
                                <i class="icon-thumb_up"></i><p>非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃</p>
                            </div>
                        </div>
                        <div class="right">
                            <span class="username">XXXXXXXx</span><img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <span class="time">2018-08-12  00:00</span>
                            <div class="text">
                                <i></i><p>非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃非常好吃</p>
                            </div>
                        </div>
                        <div class="right">
                            <span class="username">XXXXXXXx</span><img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
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
        .ratings-content
            padding: 0 18px 18px 18px
            .ratings-wrapper
                li
                    display: flex
                    margin-bottom: 16px
                    padding-bottom: 16px
                    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                    .left
                        flex: 1
                        .time
                            font-size: 10px
                            line-height: 12px
                            margin-bottom: 6px
                            color: rgb(147, 153, 159)
                        .text
                            .icon-thumb_up
                                position: absolute;
                                font-size: 12px
                                color: rgb(147, 153, 159)
                            p
                                display: inline-block
                                padding-left: 18px
                                font-size: 12px
                                color: rgb(7, 17, 27)
                                line-height: 16px
                    .right
                        flex: 0 0 74px
                        .username
                            font-size: 12px
                            margin-right: 6px
                        img
                            width: 12px
                            height: 12px
                            border-radius: 50%

</style>