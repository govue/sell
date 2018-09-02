<template>
    <div class="food" v-show="showFlag" transition="show" v-el:food>
        <div class="food-box">
            <div class="header-image">
                <div class="icon">
                    <i class="icon-arrow_lift" @click="hide()"></i>
                </div>
                <img :src="food.image" alt="">
            </div>
            <div class="base-content">
                <div class="left">
                    <foodbasecontent :food="food"></foodbasecontent>
                </div>
                <div class="right">
                    <cartcontrol :food="food"></cartcontrol>
                    <div class="addshoppingcart" v-if="!food.count" @click="addShoppingFirst($event)">
                        <span>加入购物车</span>
                    </div>
                </div>
            </div>
            <split v-if="food.info"></split>
            <div class="info" v-if="food.info">
                <h1>商品介绍</h1>
                <p>{{food.info}}</p>
            </div>
            <split></split>
            <div class="food-ratings">
                <food-ratings></food-ratings>
            </div>


        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import foodbasecontent from 'components/foodbasecontent/foodbasecontent';
    import cartcontrol from 'components/cartcontrol/cartcontrol';
    import BScroll from 'better-scroll';
    import split from 'components/split/split';
    import foodRatings from 'components/showratings/showratings';

    export default {
        name: 'food',
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false
            };
        },
        methods: {
            show() {
                this.showFlag = true;
                this.$nextTick(() => {
                    if (!this.foodScroll) {
                        this.foodScroll = new BScroll(this.$els.food, {
                            click: true
                        });
                    } else {
                        this.foodScroll.refresh();
                    }
                });
            },
            hide() {
                this.showFlag = false;
            },
            addShoppingFirst(event) {
                if (!event._constructed) {
                    return;
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                }
            }
        },
        components: {
            foodbasecontent,
            cartcontrol,
            split,
            foodRatings
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .food
        position: fixed
        top: 0
        left: 0
        bottom: 46px
        width: 100%
        height: 100%
        background-color: #fff
        z-index: 0
        overflow: hidden
        &.show-transition
            transition: all 0.2s linear
            transform: translate3d(0, 0, 0)
        &.show-enter, &.show-leave
            transform: translate3d(100%, 0, 0)
        .header-image
            position: relative
            top: 0
            left: 0
            width: 100%
            height: 0
            padding-top: 100%
            .icon
                position: absolute
                top: 0px
                left: 0px
                z-index: 1
                background-color: #07111B
                .icon-arrow_lift
                    color: #fff
                    display: inline-block
                    padding: 15px
            img
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
        .base-content
            display: flex
            position: relative
            .left
                flex: 1
                padding: 18px 0 0 18px
            .right
                flex: 0 0 92px
                .addshoppingcart
                    position: absolute
                    top: 30px
                    right: 30px
                    width: 74px
                    height: 24px
                    background-color: rgb(0, 160, 220)
                    text-align: center
                    border-radius: 6px
                    span
                        color: #fff
                        font-size: 10px
                        vertical-align: text-bottom
                .cartcontrol
                    position: absolute
                    top: 28px
                    right: 30px

        .info
            padding: 0 18px 0 18px
            h1
                font-weight: 700
            p
                font-size: 12px
                font-weight: 200
                color: rgb(77, 85, 93)
                line-height: 24px
</style>