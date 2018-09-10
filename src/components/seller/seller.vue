<template>
    <div class="seller">
        <div class="base-content-wrapper">
            <div class="header-wrapper">
                <div class="left">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="seller-star"><div class="star-wrapper"><star :size="36" :score="seller.score"></star></div><span class="rating-count">({{seller.ratingCount}})</span><span class="sell-count">月售{{seller.sellCount}}单</span></div>
                </div>
                <div class="right"></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';

    export default {
        name: 'seller',
        props: {
            seller: {
                type: Object
            }
        },
        components: {
            star
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .seller
        .base-content-wrapper
            .header-wrapper
                .left
                    .name
                        font-weight: 700
                    .seller-star
                        .star-wrapper
                            display: inline-block
                .right
                    width: 100px
</style>