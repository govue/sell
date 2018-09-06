<template>
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
</template>

<script type="text/ecmascript-6">
    const ALL = 2;

    export default {
        name: 'ratingsfood',
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
            }
        },
        methods: {
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
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
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