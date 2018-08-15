<template>
    <div class="shoppingcart">
        <div class="left-wrapper">
            <div class="logo">
                <div class="inner-box">
                    <i class="icon-shopping_cart"></i>
                </div>
            </div>
            <div class="total-price">5元</div>
            <div class="deliveryPrice">另需要配送费¥4元</div>
        </div>
        <div class="right-wrapper">
            <span>还差¥5元起送</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'shoppingcart'
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
        color: #fff
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
                    justify-content:center
                    align-items: center
            .total-price
                display: inline-block
            .deliveryPrice
                display: inline-block
        .right-wrapper
            flex: 0 0 110px
            width: 110px
            height: 46px
            line-height: 46px
            text-align: center
            background-color: #2B333B

</style>