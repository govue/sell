<template>
    <div class="showratings">
        <div class="ratings-select">
            <h1 class="name">商品评价</h1>
            <div class="rate-type">
                <span class="all" :class="{'active':rateType===2}" @click="selectRateType(2,$event)">{{desc.all}}<i>{{ratings.length}}</i></span>
                <span class="positive" :class="{'active':rateType===0}" @click="selectRateType(0,$event)">{{desc.positive}}<i>{{positives.length}}</i></span>
                <span class="negative" :class="{'active':rateType===1}" @click="selectRateType(1,$event)">{{desc.negative}}<i>{{negatives.length}}</i></span>
            </div>
            <div class="have-rating-content" @click="showHaveRatingContent($event)">
                <i class="icon-check_circle" :class="{'active':haveRatingContent===true}"></i>
                <span class="text">只看有内容的评价</span>
            </div>
        </div>
        <div class="ratings-content">
            <div class="ratings-wrapper">
                <ul>
                    <li v-for="rating in ratings" v-show="filterRatings(rating.rateType,rating.text)">
                        <div class="left">
                            <span class="time">{{rating.rateTime}}</span>
                            <div class="text">
                                <i :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></i><p>{{rating.text}}</p>
                            </div>
                        </div>
                        <div class="right">
                            <span class="username">{{rating.username}}</span><img :src="rating.avatar" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const ALL = 2;
    const POSITIVE = 0;
    const NEGATIVE = 1;

    export default {
        name: 'showratings',
        props: {
            ratings: {
                type: Array,
                default() {
                    return [];
                }
            },
            rateType: {
                type: Number,
                default() {
                    return ALL;
                }
            },
            haveRatingContent: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            desc: {
                type: Object,
                default() {
                    return {
                        all: '全部',
                        positive: '满意',
                        negative: '不满意'
                    };
                }
            }
        },
        methods: {
            selectRateType(type, event) {
                if (!event._constructed) {
                    return;
                }
                console.log('selectRateType in showratings.vue');
                // this.rateType = type;    // 这里可以直接在自身组件里更新数据，然后dispatch事件只是用来更新dom长度
                this.$dispatch('ratetype.select', type); // 这里是把dispatch后把数据传出去，再通过组件传回来
            },
            showHaveRatingContent(event) {
                if (!event._constructed) {
                    return;
                }
                this.haveRatingContent = !this.haveRatingContent;
                this.$dispatch('haveratingcontent.toggle');
            },
            filterRatings(rateType, ratingText) {
                // 如果只显示有内容的评论
                if (this.haveRatingContent) {
                    if (!ratingText) {
                        return false;
                    }
                }
                if (this.rateType === ALL) {
                    return true;
                } else {
                    return rateType === this.rateType;
                }
            }
        },
        computed: {
            positives() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === POSITIVE;
                });
            },
            negatives() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === NEGATIVE;
                });
            }
        }
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
                    font-size: 14px
                    text-align: center
                    vertical-align: middle
                    margin-bottom: 18px
                    &.all
                        background-color: rgba(0, 160, 220, 0.2)
                        &.active
                            background-color: rgb(0, 160, 220)
                            color: #fff
                    &.positive
                        background-color: rgba(0, 160, 220, 0.2)
                        &.active
                            background-color: rgb(0, 160, 220)
                            color: #fff
                    &.negative
                        background-color: rgba(77, 85, 93, 0.2)
                        &.active
                            background-color: rgb(77, 85, 93)
                            color: #fff
            .have-rating-content
                height: 24px
                line-height: 24px
                i
                    font-size: 24px
                    color: rgb(147, 153, 159)
                    &.active
                        color: rgb(0, 180, 60)
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