<template>
    <div class="shoppingcart">
        <div class="left-wrapper">
            <div class="logo" @click="toggleshowShoppingCart">
                <div class="inner-box" :class="{'height-light':totalCount>0}">
                    <i class="icon-shopping_cart"></i>
                    <span class="total-count" v-show="totalCount">{{totalCount}}</span>
                </div>
            </div>
            <div class="total-price" :class="{'height-light':totalPrice>0}">¥{{totalPrice}}元</div>
            <div class="deliveryPrice">另需要配送费¥{{deliveryPrice}}元</div>
        </div>
        <div class="right-wrapper" :class="payClass">
            <span>{{payDesc}}</span>
        </div>
        <div class="foodslist-wrapper" v-show="shoppingcartShow">
            <div class="foodslist-header">
                <h1 class="name">购物车</h1>
                <span class="clearshoppingcart" @click="clearShoppingCart">清空</span>
            </div>
            <div class="foodslist-box" v-el:foodslist-box>
                <ul class="foodslist-body">
                    <li v-for="food in selectFoods"  class="border-1px">
                        <h2 class="name">{{food.name}}</h2>
                        <div class="right">
                            <span class="price">¥{{food.price * food.count}}</span>
                            <div class="cartcontrol-wrapper">
                                <cart-control :food="food"></cart-control>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="background-filter-wrapper" v-show="shoppingcartShow" @click="toggleshowShoppingCart"></div>
        <div class="ball-wrapper">
            <div v-for="ball in balls" v-show="ball.show" class="ball" transition="drop">
                <div class="inner inner-hook"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import cartControl from 'components/cartcontrol/cartcontrol';

    export default {
        props: {
            selectFoods: {
                type: Array
            },
            deliveryPrice: {
                type: Number
            },
            minPrice: {
                type: Number
            }
        },
        data() {
          return {
              isHide: true,
              balls: [
                  {
                      show: false
                  },
                  {
                      show: false
                  },
                  {
                      show: false
                  },
                  {
                      show: false
                  },
                  {
                      show: false
                  }
              ],
              dropBall: []  // 已经下落和小球
          };
        },
        methods: {
            clearShoppingCart() {
                if (this.totalCount > 0) {
                    this.selectFoods.forEach((food) => {
                        food.count = 0;
                    });
                }
                this.isHide = true;
            },
            toggleshowShoppingCart() {
                if (!this.totalCount) {
                    return;
                }
                this.isHide = !this.isHide;
            },
            drop(el) {
                for (let i = 0; i < this.balls.length; i++) {
                    let ball = this.balls[i];
                    if (!ball.show) {
                        ball.show = true;
                        ball.el = el;
                        this.dropBall.push(ball);
                        return;
                    }
                }
            }
        },
        computed: {
            totalPrice() {
                let totalPrice = 0;
                this.selectFoods.forEach((food) => {
                    totalPrice += food.price * food.count;
                });
                return totalPrice;
            },
            totalCount() {
                let totalCount = 0;
                this.selectFoods.forEach((food) => {
                    totalCount += food.count;
                });
                return totalCount;
            },
            payDesc() {
                if (this.totalPrice === 0) {
                    return `¥${this.minPrice}元起送`;
                } else if (this.totalPrice < this.minPrice) {
                    let diffPrice = this.minPrice - this.totalPrice;
                    return `还差¥${diffPrice}元`;
                } else {
                    return '去结算';
                }
            },
            payClass() {
                if (this.totalPrice >= this.minPrice) {
                    return 'height-light';
                }
            },
            shoppingcartShow() {
                if (!this.totalCount) {
                    this.isHide = true;
                    return false;
                }
                let show = !this.isHide;
                if (show) {
                    this.$nextTick(() => {
                        if (!this.foodsListScroll) {
                            this.foodsListScroll = new BScroll(this.$els.foodslistBox, {
                                click: true
                            });
                        } else {
                            this.foodsListScroll.destroy();
                            this.foodsListScroll = new BScroll(this.$els.foodslistBox, {
                                click: true
                            });
                        }
                    });
                }
                return show;
            }
        },
        components: {
            cartControl
        },
        transitions: {
            drop: {
                beforeEnter(el) {
                    let count = this.balls.length;
                    while (count--) {
                        let ball = this.balls[count];
                        if (ball.show) {
                            let rect = ball.el.getBoundingClientRect();
                            let x = rect.left - 32;
                            let y = -(window.innerHeight - rect.top - 22);
                            el.style.display = '';
                            el.style.webkitTransform = `translate3d(0, ${y}px, 0)`;
                            el.style.transform = `translate3d(0, ${y}px, 0)`;
                            let inner = el.getElementsByClassName('inner-hook')[0];
                            inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
                            inner.style.transform = `translate3d(${x}px, 0, 0)`;
                        }
                    }
                },
                enter(el) {
                    /* eslint-disable no-unused-vars */
                    let rf = el.offestHeight;
                    this.$nextTick(() => {
                        el.style.webkitTransform = 'translate3d(0, 0, 0)';
                        el.style.transform = 'translate3d(0, 0, 0)';
                        let inner = el.getElementsByClassName('inner-hook')[0];
                        inner.style.webkitTransform = 'translate3d(0, 0, 0)';
                        inner.style.transform = 'translate3d(0, 0, 0)';
                    });
                },
                afterEnter(el) {
                    let ball = this.dropBall.shift();
                    if (ball) {
                        ball.show = false;
                        el.style.display = 'none';
                    }
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/base.styl" //查询设备像素比
    @import "../../common/stylus/mixin.styl"    //border-1px函数

    .shoppingcart
        display: flex
        position: fixed
        left: 0
        bottom: 0
        background: #141d27
        width: 100%
        height: 46px
        color: rgba(255, 255, 255, 0.4)
        .left-wrapper
            flex: 1
            .logo
                position: relative
                top: -10px
                display: inline-block
                width: 58px
                height: 58px
                border-radius: 50%
                background-color: #141d27
                margin: 0 12px
                box-sizing: border-box
                padding: 6px
                .inner-box
                    width: 100%
                    height: 100%
                    border-radius: 50%
                    background-color: #2B333B
                    display: flex
                    justify-content: center
                    align-items: center
                    &.height-light
                        background-color: #00A0DC
                        .icon-shopping_cart
                            color: #fff
                    .total-count
                        position: absolute
                        top: 0
                        right: 0
                        width: 24px
                        height: 16px
                        border-radius: 16px
                        text-align: center
                        background-color: red
                        color: #fff
            .total-price
                display: inline-block
                height: 25px
                line-height: 25px
                vertical-align: top
                margin-top: 10px
                margin-right: 15px
                padding-right: 15px
                border-right: 1px solid rgba(255, 255, 255, 0.4)
                &.height-light
                    color: #fff
            .deliveryPrice
                display: inline-block
                vertical-align: top
                margin-top: 18px
                font-size: 12px
        .right-wrapper
            flex: 0 0 110px
            width: 110px
            height: 46px
            line-height: 46px
            font-size: 14px
            text-align: center
            background-color: #2B333B
            &.height-light
                background-color: #00A0DC
                color: #fff

        .foodslist-wrapper
            position: fixed
            left: 0
            bottom: 46px
            z-index: -1
            width: 100%
            max-height: 290px
            background-color: #fff
            .foodslist-header
                height: 40px
                line-height: 40px
                background: #f3f5f7
                color: rgb(7, 17, 27)
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                padding: 0 18px
                display: flex
                justify-content: space-between
                h1.name
                    color: #4D555C
                    display: inline-block
                span.clearshoppingcart
                    display: inline-block
                    color: rgb(0, 160, 220)
            .foodslist-box
                width: 100%
                max-height: 249px
                overflow: hidden
                .foodslist-body
                    color: rgb(7, 17, 27)
                    padding: 0 18px
                    li
                        height: 48px
                        line-height: 48px
                        border-1px(bottom, rgba(7, 17, 27, 0.2))
                        display: flex
                        justify-content: space-between
                        h2.name
                            color: #07111B
                            display: inline-block
                        div.right
                            display: inline-block
                            .price
                                color: rgb(240, 20, 20)
                            .cartcontrol-wrapper
                                display: inline-block
        .background-filter-wrapper
            width: 100%
            height: 100%
            position: fixed
            top: 0
            left: 0
            background: rgba(7, 17, 27, 0.6)
            z-index: -2
        .ball-wrapper
            .ball
                position: fixed
                left: 32px
                right: 32px
                z-index: 200
                &.drop-transition
                    transition: all 0.4
                    .inner
                        width: 16px
                        height: 16px
                        border-radius: 50%
                        background-color: rgb(0, 160, 220)
                        transition: all 0.4
</style>