<template>
    <div class="shoppingcart">
        <div class="left-wrapper">
            <div class="logo">
                <div class="background">
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
        position: fixed
        left: 0
        bottom: 0
        background: #141d27
        width: 100%
        height: 46px
</style>