<template>
    <div class="ratings" v-el:ratings>
        <div class="ratings-box">
            <div class="base-content">
                <div class="left border-1px">
                    <div class="left-item">{{seller.score}}</div>
                    <div class="left-item">综合评分</div>
                    <div class="left-item">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="right">
                    <ul>
                        <li>
                            <span class="title">服务态度</span><span class="service-star"><star :size="36" :score="seller.serviceScore"></star></span><span class="score">{{seller.serviceScore}}</span>
                        </li>
                        <li>
                            <span class="title">菜品评分</span><span class="service-star"><star :size="36" :score="seller.foodScore"></span><span class="score">{{seller.foodScore}}</span>
                        </li>
                        <li>
                            <span class="title">送达时间</span><span class="time">{{seller.deliveryTime}}分钟</span>
                        </li>
                    </ul>
                </div>
            </div>
            <split></split>
            <div class="seller-ratings">
                <seller-ratings :ratings="ratings" :rate-type="rateType" :have-ratging-content="haveRatingContent" :ratings-flag=`seller`></seller-ratings>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import split from 'components/split/split';
    import star from 'components/star/star';
    import sellerRatings from 'components/showratings/showratings';
    import BScroll from 'better-scroll';

    const ERR_OK = 0;
    const ALL = 2;
    // const POSITIVE = 0;
    // const NEGATIVE = 1;
    
    export default {
        name: 'ratings',
        props: {
            seller: {
                type: Object
            }
        },
        data() {
          return {
              ratings: [],
              rateType: ALL,
              haveRatingContent: true
          };
        },
        created() {
            this.$http.get('/api/ratings').then((response) => {
                response = response.body;
                if (response.errno === ERR_OK) {
                    this.ratings = response.data;
                    // 初始化showratings组件默认数据
                    this.rateType = ALL;
                    this.haveRatingContent = false;
                    this.$nextTick(() => {
                        if (!this.foodScroll) {
                            this.foodScroll = new BScroll(this.$els.ratings, {
                                click: true
                            });
                        } else {
                            this.foodScroll.refresh();
                        }
                    });
                }
            });
        },
        events: {
            'ratetype.select'(type) {
                this.rateType = type;
                this.$nextTick(() => {
                    this.foodScroll.refresh();
                });
            },
            'haveratingcontent.toggle'() {
                // this.haveRatingContent = flag;
                this.$nextTick(() => {
                    this.foodScroll.refresh();
                });
            }
        },
        components: {
            split,
            star,
            sellerRatings
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
        overflow: hidden
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