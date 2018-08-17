<template>
    <div class="shoppingcart">
        <div class="left-wrapper">
            <div class="logo">
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
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            selectFoods: {
                type: Array,
                default() {
                    return [];
                }
            },
            deliveryPrice: {
                type: Number
            },
            minPrice: {
                type: Number
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
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
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

</style>