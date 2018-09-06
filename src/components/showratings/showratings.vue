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
            <food-ratings v-if="ratingsFlag==='food'" :ratings="ratings" :rate-type="rateType" :have-rating-content="haveRatingContent"></food-ratings>
            <seller-ratings v-if="ratingsFlag==='seller'" :ratings="ratings" :rate-type="rateType" :have-rating-content="haveRatingContent"></seller-ratings>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import foodRatings from 'components/ratingsfood/ratingsfood';
    import sellerRatings from 'components/ratingsseller/ratingsseller';
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
            },
            ratingsFlag: {
                type: String,
                default() {
                    return 'food';
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
        },
        components: {
            foodRatings,
            sellerRatings
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


</style>