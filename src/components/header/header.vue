<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <div class="icon"></div>
                    <div class="text">{{seller.supports[0].description}}</div>
                </div>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
          seller: {
              type: Object
          }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        color: #fff
        background: #000
        .content-wrapper
            padding: 24px 12px 18px 24px
            .avatar
                display: inline-block
            .content
                display: inline-block
</style>
